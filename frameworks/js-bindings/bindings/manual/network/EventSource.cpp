//
//  EventSource.cpp
//  cocos2d_js_bindings
//
//  Created by seobyeongky on 2014. 8. 7..
//
//

#include "EventSource.h"

#include <curl/multi.h>

#include <thread>

#define MAX_WAIT_MSECS 30*1000 /* Wait max. 30 seconds */

void EventSource::report_error(const char * msg)
{
    if (_onerrorCallback)
    {
        JSContext* cx = ScriptingCore::getInstance()->getGlobalContext();

        JSB_AUTOCOMPARTMENT_WITH_GLOBAL_OBJCET
        JS::RootedValue jsvalError(cx)
            , fval(cx)
            , fout(cx);
            
        jsvalError = STRING_TO_JSVAL(JS_NewStringCopyN(cx, msg, strlen(msg)));
        JS::Value args[] = { jsvalError.get() };
            
        fval = OBJECT_TO_JSVAL(_onerrorCallback);

        JS_CallFunctionValue(cx, nullptr, fval, 1, args, fout.address());
    }
    release();
}



//
struct conn_context_t
{
    std::vector<char> buf;
    EventSource * self;
    std::string last_event_id;
};

struct server_sent_event_t
{
    std::string event_type;
    std::string data;
};

void normalize(std::vector<char> * buf)
{
    int x = 0;
    
    for (int i = 0; i < buf->size();)
    {
        char ch = (*buf)[i];

        if (ch == '\r')
        {
            if (i < buf->size() -1 && (*buf)[i+1] == '\n')
                i += 2;
            else
                i += 1;
            
            (*buf)[x++] = '\n';
        }
        else
        {
            i += 1;

            (*buf)[x++] = ch;
        }
    }
    buf->resize(x);
}

struct double_cr_section_t
{
    const char * begin;
    const char * end;
};

void get_sections(const std::vector<char> & buf, std::vector<double_cr_section_t> * ptr)
{
    const char * begin = &buf[0];
    
    ptr->clear();
    
    for (int i = 0; i < buf.size(); i++)
    {
        char ch = buf[i];

        if (ch == '\n')
        {
            if (i < buf.size() - 1 && buf[i+1] == '\n')
            {
                ptr->push_back({begin, &buf[i+1]});
                begin = &buf[i+2];
                i++;
            }
        }
    }
}

#define FOR_ONE_LINE for (;ch != section.end && *ch != '\n';ch++)


bool is_field(const char * begin, const char * end, const char * name)
{
    size_t length = strlen(name);
    
    return !strncmp(begin, name, length) && begin + length == end;
}

void parse(const double_cr_section_t & section, server_sent_event_t * sse_ptr, conn_context_t * ctx)
{
    for (const char * ch = section.begin; ch != section.end; ch++)
    {
        if (*ch == ':')
        {
            // comment
            FOR_ONE_LINE;
            continue;
        }
        
        const char * field_name = ch
            , * delimited = nullptr
            , * field_value = nullptr;

        FOR_ONE_LINE
        {
            if (!delimited && *ch == ':')
            {
                delimited = ch;
            }
        }
        
        if (!delimited)
            // colon not found
            delimited = field_value = ch;
        else
        {
            // colon found
            field_value = delimited + 1;
            if (*field_value == ' ') field_value++; // ignore the first space
        }
        
        // So...
        // field name : [field_name,delimited)
        // field value : [field_value,ch)
        
        if (is_field(field_name, delimited, "event"))
        {
            sse_ptr->event_type.assign(field_value, ch);
        }
        else if (is_field(field_name, delimited, "data"))
        {
            sse_ptr->data.append(field_value, ch);
            sse_ptr->data += '\n';
        }
        else if (is_field(field_name, delimited, "id"))
        {
            ctx->last_event_id.assign(field_value, ch);
        }
        else if (is_field(field_name, delimited, "retry"))
        {
            // not implemented
        }
        else
        {
            // ignore
        }
    }
}

void extract(std::vector<char> * buf, std::vector<server_sent_event_t> * ptr, conn_context_t * ctx)
{
    if (buf->empty()) return;

    std::vector<double_cr_section_t> sections;
    
    get_sections(*buf, &sections);
    if (sections.empty()) return;
    
    server_sent_event_t sse;
    for (auto & section : sections)
    {
        parse(section, &sse, ctx);
        ptr->push_back(sse);
    }
    
    int i = 0;
    for (const char * it = sections.back().end; it != &buf->back(); it++, i++)
    {
        (*buf)[i] = *it;
    }
    buf->resize(i);
}



class EventSource::Worker
{
public:
    static void run_if_not();
    static void add(EventSource * self);
    
private:
    static std::thread * _s_thread;
    static std::queue<EventSource*> _s_queue;
    static std::mutex _s_queue_mutex;
    static std::condition_variable _s_sleep_cvar;
    static std::mutex _s_sleep_mutex;
    
    static curl_socket_t sock_open(void *userdata, curlsocktype purpose, struct curl_sockaddr *addr);
    static size_t write_data(void *ptr, size_t size, size_t nmemb, void *userdata);

    static void func_th();
    static CURL * make_easy_handle(EventSource * self, conn_context_t * ctx);
    
private:
    class Handle;
};

// Static
std::thread * EventSource::Worker::_s_thread = nullptr;

std::queue<EventSource*> EventSource::Worker::_s_queue;
std::mutex EventSource::Worker::_s_queue_mutex;

std::condition_variable EventSource::Worker::_s_sleep_cvar;
std::mutex EventSource::Worker::_s_sleep_mutex;

curl_socket_t EventSource::Worker::sock_open(void *userdata,
                        curlsocktype purpose,
                        struct curl_sockaddr *addr)
{
    conn_context_t * ctx = reinterpret_cast<conn_context_t *>(userdata);
    
    Director::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
        js_proxy_t * p = jsb_get_native_proxy(ctx->self);
        if (p)
            ctx->self->report_open();
    });
    
    return socket(addr->family, addr->socktype, addr->protocol);
}

size_t EventSource::Worker::write_data(void *ptr, size_t size, size_t nmemb, void *userdata)
{
    conn_context_t * ctx = reinterpret_cast<conn_context_t *>(userdata);
    size_t sizes = size * nmemb;
    
    std::vector<char> buf2((char*)ptr, (char*)ptr+sizes);
    normalize(&buf2);
    
    ctx->buf.insert(ctx->buf.end(), buf2.begin(), buf2.end());
    
    std::vector<server_sent_event_t> * outputs = new std::vector<server_sent_event_t>();
    extract(&ctx->buf, outputs, ctx);
    
    Director::getInstance()->getScheduler()->performFunctionInCocosThread([ctx,outputs]{
        js_proxy_t * p = jsb_get_native_proxy(ctx->self);
        
        if(p)
        {
            JSContext* cx = ScriptingCore::getInstance()->getGlobalContext();
            
            for (auto & output : *outputs)
            {
                JSB_AUTOCOMPARTMENT_WITH_GLOBAL_OBJCET
                std::string eventType(output.event_type);
                if (eventType.empty())
                    eventType = "message";
                
                if (eventType == "message")
                {
                    if (ctx->self->_onmessageCallback)
                    {
                        JSObject * eventMessage = JS_NewObject(cx, nullptr, nullptr, nullptr);
                        
                        JS::RootedValue jsvalEventType(cx)
                        , jsvalData(cx)
                        , jsvalLastEventId(cx)
                        , fval(cx)
                        , fout(cx);
                        
                        jsvalEventType = std_string_to_jsval(cx, eventType);
                        jsvalData = std_string_to_jsval(cx, output.data);
                        jsvalLastEventId = std_string_to_jsval(cx, ctx->last_event_id);
                        JS_SetProperty(cx, eventMessage, "type", jsvalEventType);
                        JS_SetProperty(cx, eventMessage, "data", jsvalData);
                        JS_SetProperty(cx, eventMessage, "lastEventId", jsvalLastEventId);
                        
                        JS::Value args[] = { OBJECT_TO_JSVAL(eventMessage) };
                        
                        fval = OBJECT_TO_JSVAL(ctx->self->_onmessageCallback);
                        JS_CallFunctionValue(cx, nullptr, fval, 1, args, fout.address());
                    }
                }
            }
        }
        
        delete outputs;
    });
    
    
    return sizes;
}

// TODO : Check retain thread-safe
struct HANDLE
{
    EventSource * self;
    CURL* curl;
    conn_context_t * ctx;
    int reconnect_countdown;
};

#define CHECK_MCODE(msg) if(mcode != CURLM_OK) {\
scheduler->performFunctionInCocosThread([=](){\
char errbuf[128];\
sprintf(errbuf, msg " failed : %s", curl_multi_strerror(mcode));\
for (auto & h : handles){\
if (jsb_get_native_proxy(h.self)){\
h.self->retain();\
h.self->report_error(errbuf);\
}\
}});\
break;\
}

#define CURL_EASY_SETOPT(x,y,z) { \
auto res = curl_easy_setopt(x,y,z); \
if (res != CURLE_OK) { \
Director::getInstance()->getScheduler()->performFunctionInCocosThread([=](){ \
if (jsb_get_native_proxy(self)){\
char errbuf[128];\
sprintf(errbuf, "curl_easy_setopt " #y "failed : %s", curl_easy_strerror(res));\
self->retain();\
self->report_error(errbuf); \
}\
}); \
return nullptr; \
} \
}

CURL * EventSource::Worker::make_easy_handle(EventSource * self, conn_context_t * context)
{
    context->self = self;
    
    CURL * curl = curl_easy_init();
    if (!curl)
    {
        Director::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            js_proxy_t * p = jsb_get_native_proxy(self);
            if (p) {
                self->retain();
                self->report_error("curl initiation failed");
            }
        });
    }
    
    CURL_EASY_SETOPT(curl, CURLOPT_URL, self->_url.c_str());
    CURL_EASY_SETOPT(curl, CURLOPT_FOLLOWLOCATION, 1L);
    CURL_EASY_SETOPT(curl, CURLOPT_OPENSOCKETFUNCTION, sock_open);
    CURL_EASY_SETOPT(curl, CURLOPT_OPENSOCKETDATA, context);
    CURL_EASY_SETOPT(curl, CURLOPT_WRITEFUNCTION, write_data);
    CURL_EASY_SETOPT(curl, CURLOPT_WRITEDATA, context);
    CURL_EASY_SETOPT(curl, CURLOPT_SSL_VERIFYPEER, 0L);
    CURL_EASY_SETOPT(curl, CURLOPT_SSL_VERIFYHOST, 0L);
    CURL_EASY_SETOPT(curl, CURLOPT_NOSIGNAL, 1L);
    
    return curl;
}

void EventSource::Worker::func_th()
{
    std::vector<HANDLE> handles;
    CURLM * multi_handle = curl_multi_init();
    auto scheduler = Director::getInstance()->getScheduler();
    int still_running;
    int still_desiring;
    
    while (1)
    {
        while (1)
        {
            EventSource * self = nullptr;
            
            {
                std::unique_lock<std::mutex> lk(_s_queue_mutex);
                if (_s_queue.empty()) break;
                self = _s_queue.front();
                _s_queue.pop();
            }
            
            conn_context_t * context = new conn_context_t();
            CURL * curl = make_easy_handle(self, context);
            curl_multi_add_handle(multi_handle, curl);
            HANDLE h;
            h.self = self;
            h.curl = curl;
            h.ctx = context;
            h.reconnect_countdown = 0;
            handles.push_back(h);
        }
        
        for (auto it = handles.begin(); it != handles.end();)
        {
            if (it->self->_stop)
            {
                curl_multi_remove_handle(multi_handle, it->curl);
                curl_easy_cleanup(it->curl);
                it->self->release();
                delete it->ctx;
                it = handles.erase(it);
            }
            else
                it++;
        }
        
        still_desiring = 0;
        for (auto & h : handles)
        {
            if (h.reconnect_countdown)
            {
                h.reconnect_countdown--;
                if (h.reconnect_countdown == 0)
                {
                    curl_multi_remove_handle(multi_handle, h.curl);
                    curl_multi_add_handle(multi_handle, h.curl);
                }
                else
                    still_desiring++;
            }
        }
        
        CURLMcode mcode = curl_multi_perform(multi_handle, &still_running);
        CHECK_MCODE("curl_multi_perform");

        
        CURLMsg *msg; /* for picking up messages with the transfer status */
        int msgs_left; /* how many messages are left */
        while ((msg = curl_multi_info_read(multi_handle, &msgs_left))) {
            if (msg->msg == CURLMSG_DONE) {
                int idx, found = 0;
                
                /* Find out which handle this message is about */
                for (idx=0; idx<handles.size(); idx++) {
                    found = (msg->easy_handle == handles[idx].curl);
                    if(found)
                        break;
                }
                
                if (found)
                {
                    CURLcode code = msg->data.result;
                    HANDLE & h = handles[idx];
                    if (code != CURLE_OK)
                    {
                        scheduler->performFunctionInCocosThread([=](){
                            js_proxy_t * p = jsb_get_native_proxy(h.self);
                            if (p)
                            {
                                h.self->retain();
                                h.self->report_error(curl_easy_strerror(code));
                            }
                        });

                        h.reconnect_countdown = 30;
                        
                        still_desiring++; // correct
                    }
                }
            }
        }
        
        if (still_running + still_desiring == 0)
        {
            bool empty;
            {
                std::unique_lock<std::mutex> lk(_s_queue_mutex);
                empty = _s_queue.empty();
            }
            if (empty)
            {
                // Wait for http request tasks from main thread
                std::unique_lock<std::mutex> lk(_s_sleep_mutex);
                _s_sleep_cvar.wait(lk);
            }
        }
        else
        {
            std::chrono::milliseconds dura( 100 );
            std::this_thread::sleep_for(dura);
        }
    }
    
    curl_multi_cleanup(multi_handle);
}

void EventSource::Worker::run_if_not()
{
    if (_s_thread == nullptr)
    {
        _s_thread = new std::thread(&func_th);
        _s_thread->detach();
    }
}

void EventSource::Worker::add(EventSource * self)
{
    self->retain();
    std::unique_lock<std::mutex> lk(_s_queue_mutex);
    _s_queue.push(self);
    std::unique_lock<std::mutex> lk2(_s_sleep_mutex);
    _s_sleep_cvar.notify_one();
}


EventSource::EventSource(const std::string & url)
: _url(url)
, _cx(ScriptingCore::getInstance()->getGlobalContext())
, _onopenCallback(nullptr)
, _onmessageCallback(nullptr)
, _onerrorCallback(nullptr)
, _open_called(false)
, _stop(false)
{
    Worker::run_if_not();
    Worker::add(this);
}

EventSource::~EventSource()
{
    if (_onopenCallback) JS_RemoveObjectRoot(_cx, &_onopenCallback);
    if (_onmessageCallback) JS_RemoveObjectRoot(_cx, &_onmessageCallback);
    if (_onerrorCallback) JS_RemoveObjectRoot(_cx, &_onerrorCallback);
}

JS_BINDED_CLASS_GLUE_IMPL(EventSource);

JS_BINDED_CONSTRUCTOR_IMPL(EventSource)
{
    JS::CallArgs args = CallArgsFromVp(argc, vp);
    
    JS::RootedValue jsvalUrl(cx);
    jsvalUrl = args[0];

    JSStringWrapper wUrl(jsvalUrl.toString());

    EventSource * src = new EventSource(wUrl.get());
    src->autorelease();
    
    js_proxy_t *p;
    jsval out;
    
    JSObject *obj = JS_NewObject(cx, &EventSource::js_class, EventSource::js_proto, EventSource::js_parent);
    
    if (obj) {
        JS_SetPrivate(obj, src);
        out = OBJECT_TO_JSVAL(obj);
    }
    
    JS_SET_RVAL(cx, vp, out);
    p = jsb_new_proxy(src, obj);
    
    JS_AddNamedObjectRoot(cx, &p->obj, "EventSource");
    return true;
}

static void basic_object_finalize(JSFreeOp *freeOp, JSObject *obj)
{
//    CCLOG("EventSource(%p) finalized", obj);
}

#define SAFE_RETURN(x) if (x) \
        vp.set(OBJECT_TO_JSVAL(x)); \
    else \
        vp.set(JSVAL_NULL);


JS_BINDED_PROP_GET_IMPL(EventSource, onopen)
{
    SAFE_RETURN(_onopenCallback);
    return true;
}

JS_BINDED_PROP_SET_IMPL(EventSource, onopen)
{
    jsval callback = vp.get();
    
    if (callback != JSVAL_NULL)
    {
        if (_onopenCallback) JS_RemoveObjectRoot(_cx, &_onopenCallback);
        _onopenCallback = JSVAL_TO_OBJECT(callback);
        JS_AddNamedObjectRoot(cx, &_onopenCallback, "onopenCallback");
    }
    return true;
}

JS_BINDED_PROP_GET_IMPL(EventSource, onmessage)
{
    SAFE_RETURN(_onmessageCallback);
    return true;
}

JS_BINDED_PROP_SET_IMPL(EventSource, onmessage)
{
    jsval callback = vp.get();
    
    if (callback != JSVAL_NULL)
    {
        if (_onmessageCallback) JS_RemoveObjectRoot(_cx, &_onmessageCallback);
        _onmessageCallback = JSVAL_TO_OBJECT(callback);
        JS_AddNamedObjectRoot(cx, &_onmessageCallback, "onmessageCallback");
    }
    return true;
}

JS_BINDED_PROP_GET_IMPL(EventSource, onerror)
{
    SAFE_RETURN(_onerrorCallback);
    return true;
}

JS_BINDED_PROP_SET_IMPL(EventSource, onerror)
{
    jsval callback = vp.get();
    
    if (callback != JSVAL_NULL)
    {
        if (_onerrorCallback) JS_RemoveObjectRoot(_cx, &_onerrorCallback);
        _onerrorCallback = JSVAL_TO_OBJECT(callback);
        JS_AddNamedObjectRoot(cx, &_onerrorCallback, "onerrorCallback");
    }
    return true;
}


JS_BINDED_PROP_GET_IMPL(EventSource, url)
{
    JSString* str = JS_NewStringCopyN(cx, _url.c_str(), _url.length());
    vp.set(STRING_TO_JSVAL(str));
    return true;
}

JS_BINDED_FUNC_IMPL(EventSource, close)
{
    _stop = true;
    
    return true;
}

void EventSource::_js_register(JSContext *cx, JSObject *global)
{
    JSClass jsclass = {
        "EventSource", JSCLASS_HAS_PRIVATE, JS_PropertyStub,
        JS_DeletePropertyStub, JS_PropertyStub, JS_StrictPropertyStub,
        JS_EnumerateStub, JS_ResolveStub, JS_ConvertStub,
        basic_object_finalize, JSCLASS_NO_OPTIONAL_MEMBERS
    };
    
    EventSource::js_class = jsclass;
    static JSPropertySpec props[] = {
        JS_BINDED_PROP_DEF_ACCESSOR(EventSource, onopen),
        JS_BINDED_PROP_DEF_ACCESSOR(EventSource, onmessage),
        JS_BINDED_PROP_DEF_ACCESSOR(EventSource, onerror),
        JS_BINDED_PROP_DEF_GETTER(EventSource, url),
        {0, 0, 0, 0, 0}
    };
    
    static JSFunctionSpec funcs[] = {
        JS_BINDED_FUNC_FOR_DEF(EventSource, close),
        JS_FS_END
    };
    
    EventSource::js_parent = NULL;
    EventSource::js_proto = JS_InitClass(cx, global, NULL, &EventSource::js_class , EventSource::_js_constructor, 1, props, funcs, NULL, NULL);
}

void EventSource::report_open()
{
    if (_open_called) return;
    if (!_onopenCallback) return;
    
    JSContext* cx = ScriptingCore::getInstance()->getGlobalContext();
    
    JSB_AUTOCOMPARTMENT_WITH_GLOBAL_OBJCET
    JS::RootedValue fval(cx)
        , fout(cx);
    fval = OBJECT_TO_JSVAL(_onopenCallback);
    JS_CallFunctionValue(cx, nullptr, fval, 0, nullptr, fout.address());
    _open_called = true;
}

