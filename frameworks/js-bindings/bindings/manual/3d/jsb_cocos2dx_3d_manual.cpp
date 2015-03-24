/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
#include "jsb_cocos2dx_3d_manual.h"
#include "cocos2d_specifics.hpp"
#include "jsb_cocos2dx_3d_auto.hpp"

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

bool js_cocos2dx_Sprite3D_getAABB(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    JS::RootedObject obj(cx, args.thisv().toObjectOrNull());
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    cocos2d::Sprite3D* cobj = (cocos2d::Sprite3D *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_3d_Sprite3D_setCullFaceEnabled : Invalid Native Object");
    if(argc == 0)
    {
        cocos2d::AABB aabb = cobj->getAABB();

        JS::RootedObject tmp(cx, JS_NewObject(cx, nullptr, JS::NullPtr(), JS::NullPtr()));
        JS::RootedValue min(cx, vector3_to_jsval(cx, aabb._min));
        JS::RootedValue max(cx, vector3_to_jsval(cx, aabb._max));

        bool ok = JS_DefineProperty(cx, tmp, "min", min, JSPROP_ENUMERATE | JSPROP_PERMANENT) &&
            JS_DefineProperty(cx, tmp, "max", max, JSPROP_ENUMERATE | JSPROP_PERMANENT);

        JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_3d_Sprite3D_setCullFaceEnabled : Error processing arguments");

        args.rval().set(OBJECT_TO_JSVAL(tmp));
        return true;
    }
    JS_ReportError(cx, "wrong number of arguments");
    return false;
}

bool js_cocos2dx_Mesh_getMeshVertexAttribute(JSContext *cx, uint32_t argc, jsval *vp)
{
    JS::CallArgs args = JS::CallArgsFromVp(argc, vp);
    bool ok = true;
    JS::RootedObject obj(cx, args.thisv().toObjectOrNull());
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    cocos2d::Mesh* cobj = (cocos2d::Mesh *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_3d_Mesh_getMeshVertexAttribute : Invalid Native Object");
    if (argc == 1) {
        int arg0;
        ok &= jsval_to_int32(cx, args.get(0), (int32_t *)&arg0);
        JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_3d_Mesh_getMeshVertexAttribute : Error processing arguments");
        const cocos2d::MeshVertexAttrib ret = cobj->getMeshVertexAttribute(arg0);
        jsval jsret = JSVAL_NULL;
        jsret = meshVertexAttrib_to_jsval(cx, ret);
        args.rval().set(jsret);
        return true;
    }

    JS_ReportError(cx, "js_cocos2dx_3d_Mesh_getMeshVertexAttribute : wrong number of arguments: %d, was expecting %d", argc, 1);
    return false;
}

void register_all_cocos2dx_3d_manual(JSContext *cx, JS::HandleObject global)
{
    JS::RootedValue tmpVal(cx);
    JS::RootedObject ccObj(cx);
    JS::RootedObject tmpObj(cx);
    get_or_create_js_obj(cx, global, "jsb", &ccObj);
    
    JS_GetProperty(cx, ccObj, "Sprite3D", &tmpVal);
    tmpObj = tmpVal.toObjectOrNull();
    JS_DefineFunction(cx, tmpObj, "createAsync", js_cocos2dx_Sprite3D_createAsync, 4, JSPROP_READONLY | JSPROP_PERMANENT);

    JS_DefineFunction(cx, JS::RootedObject(cx, jsb_cocos2d_Sprite3D_prototype), "getAABB", js_cocos2dx_Sprite3D_getAABB, 0, JSPROP_READONLY | JSPROP_PERMANENT);

    JS_DefineFunction(cx, JS::RootedObject(cx, jsb_cocos2d_Mesh_prototype), "getMeshVertexAttribute", js_cocos2dx_Mesh_getMeshVertexAttribute, 1, JSPROP_READONLY | JSPROP_PERMANENT);
}