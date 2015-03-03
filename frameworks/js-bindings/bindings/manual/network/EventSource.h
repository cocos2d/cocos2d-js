//
//  EventSource.h
//  cocos2d_js_bindings
//
//  Created by seobyeongky on 2014. 8. 7..
//
//

#ifndef __cocos2d_js_bindings__EventSource__
#define __cocos2d_js_bindings__EventSource__

#include "jsapi.h"
#include "jsfriendapi.h"
#include "js_bindings_config.h"
#include "ScriptingCore.h"
#include "jsb_helper.h"

#include <curl/curl.h>

#include <queue>
#include <thread>
#include <mutex>
#include <condition_variable>


class EventSource : cocos2d::Ref
{
public:
    EventSource(const std::string & url);
    ~EventSource();
    
    JS_BINDED_CLASS_GLUE(EventSource);
    JS_BINDED_CONSTRUCTOR(EventSource);
    JS_BINDED_PROP_ACCESSOR(EventSource, onopen);
    JS_BINDED_PROP_ACCESSOR(EventSource, onmessage);
    JS_BINDED_PROP_ACCESSOR(EventSource, onerror);
    JS_BINDED_PROP_GET(EventSource, url);
    JS_BINDED_FUNC(EventSource, close);
    
public:
    void report_error(const char * msg);
    void report_open();
    
private:
    std::string _url;
    
    JSContext * _cx;
    JSObject * _onopenCallback;
    JSObject * _onmessageCallback;
    JSObject * _onerrorCallback;
    
    bool _stop;
    bool _open_called;
    

private:
    class Worker;
};



#endif /* defined(__cocos2d_js_bindings__EventSource__) */
