#include "jsb_cocos2dx_3d_manual.h"
#include "cocos2d_specifics.hpp"

using namespace cocos2d;

class JSB_HeapValueWrapper{
public:
    JSB_HeapValueWrapper(JSContext* cx, JS::HandleValue value):_cx(cx), _data(value){
        JS::AddValueRoot(_cx, &_data);
    }
    
    ~JSB_HeapValueWrapper(){
        JS::RemoveValueRoot(_cx, &_data);
    }
    
    JS::Value get(){
        return _data.get();
    }
private:
    JSContext* _cx;
    JS::Heap<JS::Value> _data;
};

static bool js_cocos2dx_Sprite3D_createAsync(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    if(argc == 4 || argc == 5)
    {
        std::string modelPath;
        jsval_to_std_string(cx, args.get(0), &modelPath);

        std::function<void(Sprite3D*, void*)> callback;
        std::shared_ptr<JSFunctionWrapper> func(new JSFunctionWrapper(cx, args.get(argc == 4 ? 2 : 3).toObjectOrNull(), args.get(argc == 4 ? 1 : 2)));
        auto lambda = [=](Sprite3D* larg0, void* larg1) -> void{
            
            jsval largv[2];
            js_proxy_t* proxy = js_get_or_create_proxy(cx, larg0);
            largv[0] = proxy ? OBJECT_TO_JSVAL(proxy->obj) : JS::UndefinedValue();
            JSB_HeapValueWrapper* v = (JSB_HeapValueWrapper*)larg1;
            largv[1] = v->get();
            
            JS::RootedValue rval(cx);
		    bool ok = func->invoke(2, largv, &rval);
		    if (!ok && JS_IsExceptionPending(cx)) {
		        JS_ReportPendingException(cx);
		    }
            
            delete v;
        };
        callback = lambda;
        
        JSB_HeapValueWrapper* data = new JSB_HeapValueWrapper(cx, args.get(argc == 4 ? 3 : 4));
        
        if(argc == 4)
            cocos2d::Sprite3D::createAsync(modelPath, callback, data);
        else
        {
            std::string texturePath;
            jsval_to_std_string(cx, args.get(1), &texturePath);
            cocos2d::Sprite3D::createAsync(modelPath, texturePath, callback, data);
        }
        return true;
    }
    
    JS_ReportError(cx, "wrong number of arguments");
    return false;
}

void register_all_cocos2dx_3d_manual(JSContext *cx, JS::HandleObject global)
{
    JS::RootedObject tmpObj(cx);
    tmpObj = anonEvaluate(cx, global, "(function () { return cc.Sprite3D; })()").toObjectOrNull();
    JS_DefineFunction(cx, tmpObj, "createAsync", js_cocos2dx_Sprite3D_createAsync, 4, JSPROP_READONLY | JSPROP_PERMANENT);
}