#include "jsb_cocos2dx_3d_manual.h"
#include "cocos2d_specifics.hpp"

using namespace cocos2d;

static bool js_cocos2dx_Sprite3D_createAsync(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    if(argc == 3)
    {
        std::string arg0;
        jsval_to_std_string(cx, args.get(0), &arg0);

        std::function<void(Sprite3D*, void*)> arg1;
        std::shared_ptr<JSFunctionWrapper> func(new JSFunctionWrapper(cx, JS_THIS_OBJECT(cx, vp), args.get(1)));

        auto lambda = [=](Sprite3D* larg0, void* larg1) -> void{
            JS::RootedValue rval(cx);
		    /*bool ok = func->invoke(1, &largv[0], &rval);
		    if (!ok && JS_IsExceptionPending(cx)) {
		        JS_ReportPendingException(cx);
		    }*/
        };
        arg1 = lambda;

        cocos2d::Sprite3D::createAsync(arg0, arg1, nullptr);
    }
    else if(argc == 4)
    {
    }

    JS_ReportError(cx, "wrong number of arguments");
    return false;
}

void register_all_cocos2dx_3d_manual(JSContext *cx, JS::HandleObject global)
{
    JS::RootedObject tmpObj(cx);
    tmpObj = anonEvaluate(cx, global, "(function () { return cc.Sprite3D; })()").toObjectOrNull();
    JS_DefineFunction(cx, tmpObj, "createAsync", js_cocos2dx_Sprite3D_createAsync, 3, JSPROP_READONLY | JSPROP_PERMANENT);
}