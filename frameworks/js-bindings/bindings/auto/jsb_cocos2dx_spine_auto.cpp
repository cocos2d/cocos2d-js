#include "jsb_cocos2dx_spine_auto.hpp"
#include "cocos2d_specifics.hpp"
#include "spine-cocos2dx.h"

template<class T>
static bool dummy_constructor(JSContext *cx, uint32_t argc, jsval *vp) {
    JS::RootedValue initializing(cx);
    bool isNewValid = true;
    JSObject* global = ScriptingCore::getInstance()->getGlobalObject();
	isNewValid = JS_GetProperty(cx, global, "initializing", &initializing) && JSVAL_TO_BOOLEAN(initializing);
	if (isNewValid)
	{
		TypeTest<T> t;
		js_type_class_t *typeClass = nullptr;
		std::string typeName = t.s_name();
		auto typeMapIter = _js_global_type_map.find(typeName);
		CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
		typeClass = typeMapIter->second;
		CCASSERT(typeClass, "The value is null.");

		JSObject *_tmp = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
		JS_SET_RVAL(cx, vp, OBJECT_TO_JSVAL(_tmp));
		return true;
	}

    JS_ReportError(cx, "Don't use `new cc.XXX`, please use `cc.XXX.create` instead! ");
    return false;
}

static bool empty_constructor(JSContext *cx, uint32_t argc, jsval *vp) {
	return false;
}

static bool js_is_native_obj(JSContext *cx, JS::HandleObject obj, JS::HandleId id, JS::MutableHandleValue vp)
{
	vp.set(BOOLEAN_TO_JSVAL(true));
	return true;	
}
JSClass  *jsb_spine_Skeleton_class;
JSObject *jsb_spine_Skeleton_prototype;

bool js_cocos2dx_spine_Skeleton_setToSetupPose(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_setToSetupPose : Invalid Native Object");
	if (argc == 0) {
		cobj->setToSetupPose();
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_setToSetupPose : wrong number of arguments: %d, was expecting %d", argc, 0);
	return false;
}
bool js_cocos2dx_spine_Skeleton_setBlendFunc(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_setBlendFunc : Invalid Native Object");
	if (argc == 1) {
		cocos2d::BlendFunc arg0;
		ok &= jsval_to_blendfunc(cx, argv[0], &arg0);
		JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_spine_Skeleton_setBlendFunc : Error processing arguments");
		cobj->setBlendFunc(arg0);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_setBlendFunc : wrong number of arguments: %d, was expecting %d", argc, 1);
	return false;
}
bool js_cocos2dx_spine_Skeleton_onDraw(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_onDraw : Invalid Native Object");
	if (argc == 2) {
		cocos2d::Mat4 arg0;
		bool arg1;
		ok &= jsval_to_matrix(cx, argv[0], &arg0);
		arg1 = JS::ToBoolean(JS::RootedValue(cx, argv[1]));
		JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_spine_Skeleton_onDraw : Error processing arguments");
		cobj->onDraw(arg0, arg1);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_onDraw : wrong number of arguments: %d, was expecting %d", argc, 2);
	return false;
}
bool js_cocos2dx_spine_Skeleton_setSlotsToSetupPose(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_setSlotsToSetupPose : Invalid Native Object");
	if (argc == 0) {
		cobj->setSlotsToSetupPose();
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_setSlotsToSetupPose : wrong number of arguments: %d, was expecting %d", argc, 0);
	return false;
}
bool js_cocos2dx_spine_Skeleton_setAttachment(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_setAttachment : Invalid Native Object");
	if (argc == 2) {
		const char* arg0;
		const char* arg1;
		std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
		std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
		JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_spine_Skeleton_setAttachment : Error processing arguments");
		bool ret = cobj->setAttachment(arg0, arg1);
		jsval jsret = JSVAL_NULL;
		jsret = BOOLEAN_TO_JSVAL(ret);
		JS_SET_RVAL(cx, vp, jsret);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_setAttachment : wrong number of arguments: %d, was expecting %d", argc, 2);
	return false;
}
bool js_cocos2dx_spine_Skeleton_getBlendFunc(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_getBlendFunc : Invalid Native Object");
	if (argc == 0) {
		const cocos2d::BlendFunc& ret = cobj->getBlendFunc();
		jsval jsret = JSVAL_NULL;
		jsret = blendfunc_to_jsval(cx, ret);
		JS_SET_RVAL(cx, vp, jsret);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_getBlendFunc : wrong number of arguments: %d, was expecting %d", argc, 0);
	return false;
}
bool js_cocos2dx_spine_Skeleton_setSkin(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_setSkin : Invalid Native Object");
	if (argc == 1) {
		const char* arg0;
		std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
		JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_spine_Skeleton_setSkin : Error processing arguments");
		bool ret = cobj->setSkin(arg0);
		jsval jsret = JSVAL_NULL;
		jsret = BOOLEAN_TO_JSVAL(ret);
		JS_SET_RVAL(cx, vp, jsret);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_setSkin : wrong number of arguments: %d, was expecting %d", argc, 1);
	return false;
}
bool js_cocos2dx_spine_Skeleton_updateWorldTransform(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_updateWorldTransform : Invalid Native Object");
	if (argc == 0) {
		cobj->updateWorldTransform();
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_updateWorldTransform : wrong number of arguments: %d, was expecting %d", argc, 0);
	return false;
}
bool js_cocos2dx_spine_Skeleton_setBonesToSetupPose(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::Skeleton* cobj = (spine::Skeleton *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_Skeleton_setBonesToSetupPose : Invalid Native Object");
	if (argc == 0) {
		cobj->setBonesToSetupPose();
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_setBonesToSetupPose : wrong number of arguments: %d, was expecting %d", argc, 0);
	return false;
}
bool js_cocos2dx_spine_Skeleton_createWithFile(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	
	do {
		if (argc == 2) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			const char* arg1;
			std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
			if (!ok) { ok = true; break; }
			spine::Skeleton* ret = spine::Skeleton::createWithFile(arg0, arg1);
			jsval jsret = JSVAL_NULL;
			do {
				if (ret) {
					js_proxy_t *jsProxy = js_get_or_create_proxy<spine::Skeleton>(cx, (spine::Skeleton*)ret);
					jsret = OBJECT_TO_JSVAL(jsProxy->obj);
				} else {
					jsret = JSVAL_NULL;
				}
			} while (0);
			JS_SET_RVAL(cx, vp, jsret);
			return true;
		}
	} while (0);
	do {
		if (argc == 3) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			const char* arg1;
			std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
			if (!ok) { ok = true; break; }
			double arg2;
			ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
			if (!ok) { ok = true; break; }
			spine::Skeleton* ret = spine::Skeleton::createWithFile(arg0, arg1, arg2);
			jsval jsret = JSVAL_NULL;
			do {
				if (ret) {
					js_proxy_t *jsProxy = js_get_or_create_proxy<spine::Skeleton>(cx, (spine::Skeleton*)ret);
					jsret = OBJECT_TO_JSVAL(jsProxy->obj);
				} else {
					jsret = JSVAL_NULL;
				}
			} while (0);
			JS_SET_RVAL(cx, vp, jsret);
			return true;
		}
	} while (0);
	
	do {
		if (argc == 2) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			spAtlas* arg1;
			#pragma warning NO CONVERSION TO NATIVE FOR spAtlas*;
			if (!ok) { ok = true; break; }
			spine::Skeleton* ret = spine::Skeleton::createWithFile(arg0, arg1);
			jsval jsret = JSVAL_NULL;
			do {
				if (ret) {
					js_proxy_t *jsProxy = js_get_or_create_proxy<spine::Skeleton>(cx, (spine::Skeleton*)ret);
					jsret = OBJECT_TO_JSVAL(jsProxy->obj);
				} else {
					jsret = JSVAL_NULL;
				}
			} while (0);
			JS_SET_RVAL(cx, vp, jsret);
			return true;
		}
	} while (0);
	do {
		if (argc == 3) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			spAtlas* arg1;
			#pragma warning NO CONVERSION TO NATIVE FOR spAtlas*;
			if (!ok) { ok = true; break; }
			double arg2;
			ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
			if (!ok) { ok = true; break; }
			spine::Skeleton* ret = spine::Skeleton::createWithFile(arg0, arg1, arg2);
			jsval jsret = JSVAL_NULL;
			do {
				if (ret) {
					js_proxy_t *jsProxy = js_get_or_create_proxy<spine::Skeleton>(cx, (spine::Skeleton*)ret);
					jsret = OBJECT_TO_JSVAL(jsProxy->obj);
				} else {
					jsret = JSVAL_NULL;
				}
			} while (0);
			JS_SET_RVAL(cx, vp, jsret);
			return true;
		}
	} while (0);
	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_createWithFile : wrong number of arguments");
	return false;
}
bool js_cocos2dx_spine_Skeleton_constructor(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;

	JSObject *obj = NULL;
	spine::Skeleton* cobj = NULL;
	do {
		if (argc == 2) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			spAtlas* arg1;
			#pragma warning NO CONVERSION TO NATIVE FOR spAtlas*;
			if (!ok) { ok = true; break; }
			cobj = new spine::Skeleton(arg0, arg1);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::Skeleton> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::Skeleton");
		}
	} while(0);

	do {
		if (argc == 3) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			spAtlas* arg1;
			#pragma warning NO CONVERSION TO NATIVE FOR spAtlas*;
			if (!ok) { ok = true; break; }
			double arg2;
			ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
			if (!ok) { ok = true; break; }
			cobj = new spine::Skeleton(arg0, arg1, arg2);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::Skeleton> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::Skeleton");
		}
	} while(0);

	do {
		if (argc == 1) {
			spSkeletonData* arg0;
			#pragma warning NO CONVERSION TO NATIVE FOR spSkeletonData*;
			if (!ok) { ok = true; break; }
			cobj = new spine::Skeleton(arg0);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::Skeleton> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::Skeleton");
		}
	} while(0);

	do {
		if (argc == 2) {
			spSkeletonData* arg0;
			#pragma warning NO CONVERSION TO NATIVE FOR spSkeletonData*;
			if (!ok) { ok = true; break; }
			bool arg1;
			arg1 = JS::ToBoolean(JS::RootedValue(cx, argv[1]));
			cobj = new spine::Skeleton(arg0, arg1);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::Skeleton> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::Skeleton");
		}
	} while(0);

	do {
		if (argc == 2) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			const char* arg1;
			std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
			if (!ok) { ok = true; break; }
			cobj = new spine::Skeleton(arg0, arg1);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::Skeleton> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::Skeleton");
		}
	} while(0);

	do {
		if (argc == 3) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			const char* arg1;
			std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
			if (!ok) { ok = true; break; }
			double arg2;
			ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
			if (!ok) { ok = true; break; }
			cobj = new spine::Skeleton(arg0, arg1, arg2);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::Skeleton> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::Skeleton");
		}
	} while(0);

	if (cobj) {
		JS_SET_RVAL(cx, vp, OBJECT_TO_JSVAL(obj));
		return true;
	}
	JS_ReportError(cx, "js_cocos2dx_spine_Skeleton_constructor : wrong number of arguments");
	return false;
}


extern JSObject *jsb_cocos2d_Node_prototype;

void js_spine_Skeleton_finalize(JSFreeOp *fop, JSObject *obj) {
    CCLOGINFO("jsbindings: finalizing JS object %p (Skeleton)", obj);
}

void js_register_cocos2dx_spine_Skeleton(JSContext *cx, JSObject *global) {
	jsb_spine_Skeleton_class = (JSClass *)calloc(1, sizeof(JSClass));
	jsb_spine_Skeleton_class->name = "Skeleton";
	jsb_spine_Skeleton_class->addProperty = JS_PropertyStub;
	jsb_spine_Skeleton_class->delProperty = JS_DeletePropertyStub;
	jsb_spine_Skeleton_class->getProperty = JS_PropertyStub;
	jsb_spine_Skeleton_class->setProperty = JS_StrictPropertyStub;
	jsb_spine_Skeleton_class->enumerate = JS_EnumerateStub;
	jsb_spine_Skeleton_class->resolve = JS_ResolveStub;
	jsb_spine_Skeleton_class->convert = JS_ConvertStub;
	jsb_spine_Skeleton_class->finalize = js_spine_Skeleton_finalize;
	jsb_spine_Skeleton_class->flags = JSCLASS_HAS_RESERVED_SLOTS(2);

	static JSPropertySpec properties[] = {
		{"__nativeObj", 0, JSPROP_ENUMERATE | JSPROP_PERMANENT, JSOP_WRAPPER(js_is_native_obj), JSOP_NULLWRAPPER},
		{0, 0, 0, JSOP_NULLWRAPPER, JSOP_NULLWRAPPER}
	};

	static JSFunctionSpec funcs[] = {
		JS_FN("setToSetupPose", js_cocos2dx_spine_Skeleton_setToSetupPose, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("setBlendFunc", js_cocos2dx_spine_Skeleton_setBlendFunc, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("onDraw", js_cocos2dx_spine_Skeleton_onDraw, 2, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("setSlotsToSetupPose", js_cocos2dx_spine_Skeleton_setSlotsToSetupPose, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("setAttachment", js_cocos2dx_spine_Skeleton_setAttachment, 2, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("getBlendFunc", js_cocos2dx_spine_Skeleton_getBlendFunc, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("setSkin", js_cocos2dx_spine_Skeleton_setSkin, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("updateWorldTransform", js_cocos2dx_spine_Skeleton_updateWorldTransform, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("setBonesToSetupPose", js_cocos2dx_spine_Skeleton_setBonesToSetupPose, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FS_END
	};

	static JSFunctionSpec st_funcs[] = {
		JS_FN("create", js_cocos2dx_spine_Skeleton_createWithFile, 2, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FS_END
	};

	jsb_spine_Skeleton_prototype = JS_InitClass(
		cx, global,
		jsb_cocos2d_Node_prototype,
		jsb_spine_Skeleton_class,
		js_cocos2dx_spine_Skeleton_constructor, 0, // constructor
		properties,
		funcs,
		NULL, // no static properties
		st_funcs);
	// make the class enumerable in the registered namespace
//	bool found;
//FIXME: Removed in Firefox v27	
//	JS_SetPropertyAttributes(cx, global, "Skeleton", JSPROP_ENUMERATE | JSPROP_READONLY, &found);

	// add the proto and JSClass to the type->js info hash table
	TypeTest<spine::Skeleton> t;
	js_type_class_t *p;
	std::string typeName = t.s_name();
	if (_js_global_type_map.find(typeName) == _js_global_type_map.end())
	{
		p = (js_type_class_t *)malloc(sizeof(js_type_class_t));
		p->jsclass = jsb_spine_Skeleton_class;
		p->proto = jsb_spine_Skeleton_prototype;
		p->parentProto = jsb_cocos2d_Node_prototype;
		_js_global_type_map.insert(std::make_pair(typeName, p));
	}
}

JSClass  *jsb_spine_SkeletonAnimation_class;
JSObject *jsb_spine_SkeletonAnimation_prototype;

bool js_cocos2dx_spine_SkeletonAnimation_update(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::SkeletonAnimation* cobj = (spine::SkeletonAnimation *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_SkeletonAnimation_update : Invalid Native Object");
	if (argc == 1) {
		double arg0;
		ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[0]), &arg0);
		JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_spine_SkeletonAnimation_update : Error processing arguments");
		cobj->update(arg0);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_SkeletonAnimation_update : wrong number of arguments: %d, was expecting %d", argc, 1);
	return false;
}
bool js_cocos2dx_spine_SkeletonAnimation_setMix(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::SkeletonAnimation* cobj = (spine::SkeletonAnimation *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_SkeletonAnimation_setMix : Invalid Native Object");
	if (argc == 3) {
		const char* arg0;
		const char* arg1;
		double arg2;
		std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
		std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
		ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
		JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_spine_SkeletonAnimation_setMix : Error processing arguments");
		cobj->setMix(arg0, arg1, arg2);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_SkeletonAnimation_setMix : wrong number of arguments: %d, was expecting %d", argc, 3);
	return false;
}
bool js_cocos2dx_spine_SkeletonAnimation_clearTracks(JSContext *cx, uint32_t argc, jsval *vp)
{
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::SkeletonAnimation* cobj = (spine::SkeletonAnimation *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_SkeletonAnimation_clearTracks : Invalid Native Object");
	if (argc == 0) {
		cobj->clearTracks();
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_SkeletonAnimation_clearTracks : wrong number of arguments: %d, was expecting %d", argc, 0);
	return false;
}
bool js_cocos2dx_spine_SkeletonAnimation_clearTrack(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::SkeletonAnimation* cobj = (spine::SkeletonAnimation *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_SkeletonAnimation_clearTrack : Invalid Native Object");
	if (argc == 0) {
		cobj->clearTrack();
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}
	if (argc == 1) {
		int arg0;
		ok &= jsval_to_int32(cx, argv[0], (int32_t *)&arg0);
		JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_spine_SkeletonAnimation_clearTrack : Error processing arguments");
		cobj->clearTrack(arg0);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_SkeletonAnimation_clearTrack : wrong number of arguments: %d, was expecting %d", argc, 0);
	return false;
}
bool js_cocos2dx_spine_SkeletonAnimation_onAnimationStateEvent(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	JSObject *obj = JS_THIS_OBJECT(cx, vp);
	js_proxy_t *proxy = jsb_get_js_proxy(obj);
	spine::SkeletonAnimation* cobj = (spine::SkeletonAnimation *)(proxy ? proxy->ptr : NULL);
	JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_spine_SkeletonAnimation_onAnimationStateEvent : Invalid Native Object");
	if (argc == 4) {
		int arg0;
		spEventType arg1;
		spEvent* arg2;
		int arg3;
		ok &= jsval_to_int32(cx, argv[0], (int32_t *)&arg0);
		ok &= jsval_to_int32(cx, argv[1], (int32_t *)&arg1);
		#pragma warning NO CONVERSION TO NATIVE FOR spEvent*;
		ok &= jsval_to_int32(cx, argv[3], (int32_t *)&arg3);
		JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_spine_SkeletonAnimation_onAnimationStateEvent : Error processing arguments");
		cobj->onAnimationStateEvent(arg0, arg1, arg2, arg3);
		JS_SET_RVAL(cx, vp, JSVAL_VOID);
		return true;
	}

	JS_ReportError(cx, "js_cocos2dx_spine_SkeletonAnimation_onAnimationStateEvent : wrong number of arguments: %d, was expecting %d", argc, 4);
	return false;
}
bool js_cocos2dx_spine_SkeletonAnimation_createWithFile(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;
	
	do {
		if (argc == 2) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			const char* arg1;
			std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
			if (!ok) { ok = true; break; }
			spine::SkeletonAnimation* ret = spine::SkeletonAnimation::createWithFile(arg0, arg1);
			jsval jsret = JSVAL_NULL;
			do {
				if (ret) {
					js_proxy_t *jsProxy = js_get_or_create_proxy<spine::SkeletonAnimation>(cx, (spine::SkeletonAnimation*)ret);
					jsret = OBJECT_TO_JSVAL(jsProxy->obj);
				} else {
					jsret = JSVAL_NULL;
				}
			} while (0);
			JS_SET_RVAL(cx, vp, jsret);
			return true;
		}
	} while (0);
	do {
		if (argc == 3) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			const char* arg1;
			std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
			if (!ok) { ok = true; break; }
			double arg2;
			ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
			if (!ok) { ok = true; break; }
			spine::SkeletonAnimation* ret = spine::SkeletonAnimation::createWithFile(arg0, arg1, arg2);
			jsval jsret = JSVAL_NULL;
			do {
				if (ret) {
					js_proxy_t *jsProxy = js_get_or_create_proxy<spine::SkeletonAnimation>(cx, (spine::SkeletonAnimation*)ret);
					jsret = OBJECT_TO_JSVAL(jsProxy->obj);
				} else {
					jsret = JSVAL_NULL;
				}
			} while (0);
			JS_SET_RVAL(cx, vp, jsret);
			return true;
		}
	} while (0);
	
	do {
		if (argc == 2) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			spAtlas* arg1;
			#pragma warning NO CONVERSION TO NATIVE FOR spAtlas*;
			if (!ok) { ok = true; break; }
			spine::SkeletonAnimation* ret = spine::SkeletonAnimation::createWithFile(arg0, arg1);
			jsval jsret = JSVAL_NULL;
			do {
				if (ret) {
					js_proxy_t *jsProxy = js_get_or_create_proxy<spine::SkeletonAnimation>(cx, (spine::SkeletonAnimation*)ret);
					jsret = OBJECT_TO_JSVAL(jsProxy->obj);
				} else {
					jsret = JSVAL_NULL;
				}
			} while (0);
			JS_SET_RVAL(cx, vp, jsret);
			return true;
		}
	} while (0);
	do {
		if (argc == 3) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			spAtlas* arg1;
			#pragma warning NO CONVERSION TO NATIVE FOR spAtlas*;
			if (!ok) { ok = true; break; }
			double arg2;
			ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
			if (!ok) { ok = true; break; }
			spine::SkeletonAnimation* ret = spine::SkeletonAnimation::createWithFile(arg0, arg1, arg2);
			jsval jsret = JSVAL_NULL;
			do {
				if (ret) {
					js_proxy_t *jsProxy = js_get_or_create_proxy<spine::SkeletonAnimation>(cx, (spine::SkeletonAnimation*)ret);
					jsret = OBJECT_TO_JSVAL(jsProxy->obj);
				} else {
					jsret = JSVAL_NULL;
				}
			} while (0);
			JS_SET_RVAL(cx, vp, jsret);
			return true;
		}
	} while (0);
	JS_ReportError(cx, "js_cocos2dx_spine_SkeletonAnimation_createWithFile : wrong number of arguments");
	return false;
}
bool js_cocos2dx_spine_SkeletonAnimation_constructor(JSContext *cx, uint32_t argc, jsval *vp)
{
	jsval *argv = JS_ARGV(cx, vp);
	bool ok = true;

	JSObject *obj = NULL;
	spine::SkeletonAnimation* cobj = NULL;
	do {
		if (argc == 2) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			spAtlas* arg1;
			#pragma warning NO CONVERSION TO NATIVE FOR spAtlas*;
			if (!ok) { ok = true; break; }
			cobj = new spine::SkeletonAnimation(arg0, arg1);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::SkeletonAnimation> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::SkeletonAnimation");
		}
	} while(0);

	do {
		if (argc == 3) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			spAtlas* arg1;
			#pragma warning NO CONVERSION TO NATIVE FOR spAtlas*;
			if (!ok) { ok = true; break; }
			double arg2;
			ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
			if (!ok) { ok = true; break; }
			cobj = new spine::SkeletonAnimation(arg0, arg1, arg2);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::SkeletonAnimation> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::SkeletonAnimation");
		}
	} while(0);

	do {
		if (argc == 1) {
			spSkeletonData* arg0;
			#pragma warning NO CONVERSION TO NATIVE FOR spSkeletonData*;
			if (!ok) { ok = true; break; }
			cobj = new spine::SkeletonAnimation(arg0);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::SkeletonAnimation> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::SkeletonAnimation");
		}
	} while(0);

	do {
		if (argc == 2) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			const char* arg1;
			std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
			if (!ok) { ok = true; break; }
			cobj = new spine::SkeletonAnimation(arg0, arg1);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::SkeletonAnimation> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::SkeletonAnimation");
		}
	} while(0);

	do {
		if (argc == 3) {
			const char* arg0;
			std::string arg0_tmp; ok &= jsval_to_std_string(cx, argv[0], &arg0_tmp); arg0 = arg0_tmp.c_str();
			if (!ok) { ok = true; break; }
			const char* arg1;
			std::string arg1_tmp; ok &= jsval_to_std_string(cx, argv[1], &arg1_tmp); arg1 = arg1_tmp.c_str();
			if (!ok) { ok = true; break; }
			double arg2;
			ok &= JS::ToNumber( cx, JS::RootedValue(cx, argv[2]), &arg2);
			if (!ok) { ok = true; break; }
			cobj = new spine::SkeletonAnimation(arg0, arg1, arg2);
			cocos2d::Ref *_ccobj = dynamic_cast<cocos2d::Ref *>(cobj);
			if (_ccobj) {
				_ccobj->autorelease();
			}
			TypeTest<spine::SkeletonAnimation> t;
			js_type_class_t *typeClass = nullptr;
			std::string typeName = t.s_name();
			auto typeMapIter = _js_global_type_map.find(typeName);
			CCASSERT(typeMapIter != _js_global_type_map.end(), "Can't find the class type!");
			typeClass = typeMapIter->second;
			CCASSERT(typeClass, "The value is null.");
			obj = JS_NewObject(cx, typeClass->jsclass, typeClass->proto, typeClass->parentProto);
			js_proxy_t* p = jsb_new_proxy(cobj, obj);
			JS_AddNamedObjectRoot(cx, &p->obj, "spine::SkeletonAnimation");
		}
	} while(0);

	if (cobj) {
		JS_SET_RVAL(cx, vp, OBJECT_TO_JSVAL(obj));
		return true;
	}
	JS_ReportError(cx, "js_cocos2dx_spine_SkeletonAnimation_constructor : wrong number of arguments");
	return false;
}


extern JSObject *jsb_spine_Skeleton_prototype;

void js_spine_SkeletonAnimation_finalize(JSFreeOp *fop, JSObject *obj) {
    CCLOGINFO("jsbindings: finalizing JS object %p (SkeletonAnimation)", obj);
}

void js_register_cocos2dx_spine_SkeletonAnimation(JSContext *cx, JSObject *global) {
	jsb_spine_SkeletonAnimation_class = (JSClass *)calloc(1, sizeof(JSClass));
	jsb_spine_SkeletonAnimation_class->name = "SkeletonAnimation";
	jsb_spine_SkeletonAnimation_class->addProperty = JS_PropertyStub;
	jsb_spine_SkeletonAnimation_class->delProperty = JS_DeletePropertyStub;
	jsb_spine_SkeletonAnimation_class->getProperty = JS_PropertyStub;
	jsb_spine_SkeletonAnimation_class->setProperty = JS_StrictPropertyStub;
	jsb_spine_SkeletonAnimation_class->enumerate = JS_EnumerateStub;
	jsb_spine_SkeletonAnimation_class->resolve = JS_ResolveStub;
	jsb_spine_SkeletonAnimation_class->convert = JS_ConvertStub;
	jsb_spine_SkeletonAnimation_class->finalize = js_spine_SkeletonAnimation_finalize;
	jsb_spine_SkeletonAnimation_class->flags = JSCLASS_HAS_RESERVED_SLOTS(2);

	static JSPropertySpec properties[] = {
		{"__nativeObj", 0, JSPROP_ENUMERATE | JSPROP_PERMANENT, JSOP_WRAPPER(js_is_native_obj), JSOP_NULLWRAPPER},
		{0, 0, 0, JSOP_NULLWRAPPER, JSOP_NULLWRAPPER}
	};

	static JSFunctionSpec funcs[] = {
		JS_FN("update", js_cocos2dx_spine_SkeletonAnimation_update, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("setMix", js_cocos2dx_spine_SkeletonAnimation_setMix, 3, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("clearTracks", js_cocos2dx_spine_SkeletonAnimation_clearTracks, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("clearTrack", js_cocos2dx_spine_SkeletonAnimation_clearTrack, 0, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FN("onAnimationStateEvent", js_cocos2dx_spine_SkeletonAnimation_onAnimationStateEvent, 4, JSPROP_PERMANENT | JSPROP_ENUMERATE),
        JS_FS_END
	};

	static JSFunctionSpec st_funcs[] = {
		JS_FN("create", js_cocos2dx_spine_SkeletonAnimation_createWithFile, 2, JSPROP_PERMANENT | JSPROP_ENUMERATE),
		JS_FS_END
	};

	jsb_spine_SkeletonAnimation_prototype = JS_InitClass(
		cx, global,
		jsb_spine_Skeleton_prototype,
		jsb_spine_SkeletonAnimation_class,
		js_cocos2dx_spine_SkeletonAnimation_constructor, 0, // constructor
		properties,
		funcs,
		NULL, // no static properties
		st_funcs);
	// make the class enumerable in the registered namespace
//	bool found;
//FIXME: Removed in Firefox v27	
//	JS_SetPropertyAttributes(cx, global, "SkeletonAnimation", JSPROP_ENUMERATE | JSPROP_READONLY, &found);

	// add the proto and JSClass to the type->js info hash table
	TypeTest<spine::SkeletonAnimation> t;
	js_type_class_t *p;
	std::string typeName = t.s_name();
	if (_js_global_type_map.find(typeName) == _js_global_type_map.end())
	{
		p = (js_type_class_t *)malloc(sizeof(js_type_class_t));
		p->jsclass = jsb_spine_SkeletonAnimation_class;
		p->proto = jsb_spine_SkeletonAnimation_prototype;
		p->parentProto = jsb_spine_Skeleton_prototype;
		_js_global_type_map.insert(std::make_pair(typeName, p));
	}
}

void register_all_cocos2dx_spine(JSContext* cx, JSObject* obj) {
	// first, try to get the ns
	JS::RootedValue nsval(cx);
	JS::RootedObject ns(cx);
	JS_GetProperty(cx, obj, "sp", &nsval);
	if (nsval == JSVAL_VOID) {
		ns = JS_NewObject(cx, NULL, NULL, NULL);
		nsval = OBJECT_TO_JSVAL(ns);
		JS_SetProperty(cx, obj, "sp", nsval);
	} else {
		JS_ValueToObject(cx, nsval, &ns);
	}
	obj = ns;

	js_register_cocos2dx_spine_Skeleton(cx, obj);
	js_register_cocos2dx_spine_SkeletonAnimation(cx, obj);
}

