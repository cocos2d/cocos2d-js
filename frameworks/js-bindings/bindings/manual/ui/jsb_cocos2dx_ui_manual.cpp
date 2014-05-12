/*
 * Created by LinWenhai on 17/11/13.
 * Copyright (c) 2013-2014 Chukong Technologies Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

#include "jsb_cocos2dx_ui_manual.h"
#include "ScriptingCore.h"
#include "cocos2d_specifics.hpp"
#include "ui/CocosGUI.h"

using namespace cocos2d;
using namespace cocos2d::ui;

class JSStudioEventListenerWrapper: public JSCallbackWrapper {
public:
    JSStudioEventListenerWrapper();
    virtual ~JSStudioEventListenerWrapper();

    virtual void setJSCallbackThis(jsval thisObj);

    virtual void eventCallbackFunc(Ref*,int);

private:
    bool m_bNeedUnroot;
};

JSStudioEventListenerWrapper::JSStudioEventListenerWrapper()
    : m_bNeedUnroot(false)
{

}

JSStudioEventListenerWrapper::~JSStudioEventListenerWrapper()
{
    if (m_bNeedUnroot)
    {
        JSContext *cx = ScriptingCore::getInstance()->getGlobalContext();
        JS_RemoveValueRoot(cx, &_jsThisObj);
    }
}

void JSStudioEventListenerWrapper::setJSCallbackThis(jsval jsThisObj)
{
    JSCallbackWrapper::setJSCallbackThis(jsThisObj);

    JSObject *thisObj = JSVAL_TO_OBJECT(jsThisObj);
    js_proxy *p = jsb_get_js_proxy(thisObj);
    if (!p)
    {
        JSContext *cx = ScriptingCore::getInstance()->getGlobalContext();
        m_bNeedUnroot = true;
        m_bNeedUnroot &= JS_AddValueRoot(cx, &jsThisObj);
    }
}

void JSStudioEventListenerWrapper::eventCallbackFunc(Ref* sender,int eventType)
{
    JSContext *cx = ScriptingCore::getInstance()->getGlobalContext();
    JSObject *thisObj = JSVAL_IS_VOID(_jsThisObj) ? NULL : JSVAL_TO_OBJECT(_jsThisObj);
    js_proxy_t *proxy = js_get_or_create_proxy(cx, sender);
    jsval retval;
    if (_jsCallback != JSVAL_VOID)
    {
        jsval touchVal = INT_TO_JSVAL(eventType);

        jsval valArr[2];
        valArr[0] = OBJECT_TO_JSVAL(proxy->obj);
        valArr[1] = touchVal;

        JS_AddValueRoot(cx, valArr);

        JSB_AUTOCOMPARTMENT_WITH_GLOBAL_OBJCET

        JS_CallFunctionValue(cx, thisObj, _jsCallback, 2, valArr, &retval);
        JS_RemoveValueRoot(cx, valArr);
    }
}

static bool js_cocos2dx_UIWidget_addTouchEventListener(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::Widget* cobj = (ui::Widget *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");

    if (argc == 2) {
        jsval *argv = JS_ARGV(cx, vp);

        JSStudioEventListenerWrapper *tmpObj = new JSStudioEventListenerWrapper();
        tmpObj->autorelease();
        
        cocos2d::__Dictionary* dict = static_cast<cocos2d::__Dictionary*>(cobj->getUserObject());
        if (nullptr == dict)
        {
            dict = cocos2d::__Dictionary::create();
            cobj->setUserObject(dict);
        }
        dict->setObject(tmpObj, "widgetTouchEvent");

        tmpObj->setJSCallbackFunc(argv[0]);
        tmpObj->setJSCallbackThis(argv[1]);
        
        cobj->addTouchEventListener(tmpObj, toucheventselector(JSStudioEventListenerWrapper::eventCallbackFunc));

        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

static bool js_cocos2dx_UICheckBox_addEventListener(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::CheckBox* cobj = (ui::CheckBox *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");

    if (argc == 2) {
        jsval *argv = JS_ARGV(cx, vp);

        JSStudioEventListenerWrapper *tmpObj = new JSStudioEventListenerWrapper();
        tmpObj->autorelease();
        
        cocos2d::__Dictionary* dict = static_cast<cocos2d::__Dictionary*>(cobj->getUserObject());
        if (nullptr == dict)
        {
            dict = cocos2d::__Dictionary::create();
            cobj->setUserObject(dict);
        }
        dict->setObject(tmpObj, "checkBoxEventListener");

        tmpObj->setJSCallbackFunc(argv[0]);
        tmpObj->setJSCallbackThis(argv[1]);

        cobj->addEventListenerCheckBox(tmpObj, checkboxselectedeventselector(JSStudioEventListenerWrapper::eventCallbackFunc));

        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

static bool js_cocos2dx_UISlider_addEventListener(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::Slider* cobj = (ui::Slider *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");

    if (argc == 2) {
        jsval *argv = JS_ARGV(cx, vp);

        JSStudioEventListenerWrapper *tmpObj = new JSStudioEventListenerWrapper();
        tmpObj->autorelease();
        
        cocos2d::__Dictionary* dict = static_cast<cocos2d::__Dictionary*>(cobj->getUserObject());
        if (nullptr == dict)
        {
            dict = cocos2d::__Dictionary::create();
            cobj->setUserObject(dict);
        }
        dict->setObject(tmpObj, "sliderEventListener");

        tmpObj->setJSCallbackFunc(argv[0]);
        tmpObj->setJSCallbackThis(argv[1]);

        cobj->addEventListenerSlider(tmpObj, sliderpercentchangedselector(JSStudioEventListenerWrapper::eventCallbackFunc));

        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

static bool js_cocos2dx_UITextField_addEventListener(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::TextField* cobj = (ui::TextField *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");

    if (argc == 2) {
        jsval *argv = JS_ARGV(cx, vp);

        JSStudioEventListenerWrapper *tmpObj = new JSStudioEventListenerWrapper();
        tmpObj->autorelease();
        
        cocos2d::__Dictionary* dict = static_cast<cocos2d::__Dictionary*>(cobj->getUserObject());
        if (nullptr == dict)
        {
            dict = cocos2d::__Dictionary::create();
            cobj->setUserObject(dict);
        }
        dict->setObject(tmpObj, "textfieldEventListener");

        tmpObj->setJSCallbackFunc(argv[0]);
        tmpObj->setJSCallbackThis(argv[1]);

        cobj->addEventListenerTextField(tmpObj, textfieldeventselector(JSStudioEventListenerWrapper::eventCallbackFunc));

        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

static bool js_cocos2dx_UIPageView_addEventListener(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::PageView* cobj = (ui::PageView *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");

    if (argc == 2) {
        jsval *argv = JS_ARGV(cx, vp);

        JSStudioEventListenerWrapper *tmpObj = new JSStudioEventListenerWrapper();
        tmpObj->autorelease();
        
        cocos2d::__Dictionary* dict = static_cast<cocos2d::__Dictionary*>(cobj->getUserObject());
        if (nullptr == dict)
        {
            dict = cocos2d::__Dictionary::create();
            cobj->setUserObject(dict);
        }
        dict->setObject(tmpObj, "pageViewEventListener");

        tmpObj->setJSCallbackFunc(argv[0]);
        tmpObj->setJSCallbackThis(argv[1]);

        cobj->addEventListenerPageView(tmpObj, pagevieweventselector(JSStudioEventListenerWrapper::eventCallbackFunc));

        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

static bool js_cocos2dx_UIScrollView_addEventListener(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::ScrollView* cobj = (ui::ScrollView *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");
    
    if (argc == 2) {
        jsval *argv = JS_ARGV(cx, vp);
        
        JSStudioEventListenerWrapper *tmpObj = new JSStudioEventListenerWrapper();
        tmpObj->autorelease();
        
        cocos2d::__Dictionary* dict = static_cast<cocos2d::__Dictionary*>(cobj->getUserObject());
        if (nullptr == dict)
        {
            dict = cocos2d::__Dictionary::create();
            cobj->setUserObject(dict);
        }
        dict->setObject(tmpObj, "scrollViewEventListener");
        
        tmpObj->setJSCallbackFunc(argv[0]);
        tmpObj->setJSCallbackThis(argv[1]);
        
        cobj->addEventListenerScrollView(tmpObj, scrollvieweventselector(JSStudioEventListenerWrapper::eventCallbackFunc));
        
        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

static bool js_cocos2dx_UIListView_addEventListener(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::ListView* cobj = (ui::ListView *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");

    if (argc == 2) {
        jsval *argv = JS_ARGV(cx, vp);

        JSStudioEventListenerWrapper *tmpObj = new JSStudioEventListenerWrapper();
        tmpObj->autorelease();
        
        cocos2d::__Dictionary* dict = static_cast<cocos2d::__Dictionary*>(cobj->getUserObject());
        if (nullptr == dict)
        {
            dict = cocos2d::__Dictionary::create();
            cobj->setUserObject(dict);
        }
        dict->setObject(tmpObj, "listViewEventListener");

        tmpObj->setJSCallbackFunc(argv[0]);
        tmpObj->setJSCallbackThis(argv[1]);

        cobj->addEventListenerListView(tmpObj, listvieweventselector(JSStudioEventListenerWrapper::eventCallbackFunc));

        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

static bool js_cocos2dx_LayoutParameter_setMargin(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::LayoutParameter* cobj = (ui::LayoutParameter *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");

    if (argc == 1) {
        JS::CallArgs argv = CallArgsFromVp(argc, vp);

        JS::RootedObject tmp(cx);
        JS::RootedValue jsleft(cx), jstop(cx),jsright(cx),jsbottom(cx);
        double left, top,right,bottom;
        bool ok = argv[0].isObject() &&
            JS_ValueToObject(cx, argv[0], &tmp) &&
            JS_GetProperty(cx, tmp, "left", &jsleft) &&
            JS_GetProperty(cx, tmp, "top", &jstop) &&
            JS_GetProperty(cx, tmp, "right", &jsright) &&
            JS_GetProperty(cx, tmp, "bottom", &jsbottom);
        
        left = jsleft.toNumber();
        top = jstop.toNumber();
        right = jsright.toNumber();
        bottom = jsbottom.toNumber();

        JSB_PRECONDITION3(ok, cx, false, "Error processing arguments");

        cobj->setMargin(ui::Margin(left,top,right,bottom));
        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

static bool js_cocos2dx_LayoutParameter_getMargin(JSContext *cx, uint32_t argc, jsval *vp)
{
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    ui::LayoutParameter* cobj = (ui::LayoutParameter *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "Invalid Native Object");

    if (argc == 0) {
        JSObject *tmp = JS_NewObject(cx, NULL, NULL, NULL);
        if (!tmp) return false;
        ui::Margin margin = cobj->getMargin();
        bool ok = JS_DefineProperty(cx, tmp, "left", DOUBLE_TO_JSVAL(margin.left), NULL, NULL, JSPROP_ENUMERATE | JSPROP_PERMANENT) &&
            JS_DefineProperty(cx, tmp, "top", DOUBLE_TO_JSVAL(margin.top), NULL, NULL, JSPROP_ENUMERATE | JSPROP_PERMANENT) &&
            JS_DefineProperty(cx, tmp, "right", DOUBLE_TO_JSVAL(margin.right), NULL, NULL, JSPROP_ENUMERATE | JSPROP_PERMANENT) &&
            JS_DefineProperty(cx, tmp, "bottom", DOUBLE_TO_JSVAL(margin.bottom), NULL, NULL, JSPROP_ENUMERATE | JSPROP_PERMANENT);
        if (ok) 
        {
            JS_SET_RVAL(cx, vp, OBJECT_TO_JSVAL(tmp));
        }
        else
        {
            return false;
        }
        return true;
    }
    JS_ReportError(cx, "Invalid number of arguments");
    return false;
}

extern JSObject* jsb_cocos2d_ui_Widget_prototype;
extern JSObject* jsb_cocos2d_ui_CheckBox_prototype;
extern JSObject* jsb_cocos2d_ui_Slider_prototype;
extern JSObject* jsb_cocos2d_ui_TextField_prototype;
extern JSObject* jsb_cocos2d_ui_LayoutParameter_prototype;
extern JSObject* jsb_cocos2d_ui_PageView_prototype;
extern JSObject* jsb_cocos2d_ui_ScrollView_prototype;
extern JSObject* jsb_cocos2d_ui_ListView_prototype;

void register_all_cocos2dx_ui_manual(JSContext* cx, JSObject* global)
{
    JS_DefineFunction(cx, jsb_cocos2d_ui_Widget_prototype, "addTouchEventListener", js_cocos2dx_UIWidget_addTouchEventListener, 2, JSPROP_ENUMERATE | JSPROP_PERMANENT);

    JS_DefineFunction(cx, jsb_cocos2d_ui_CheckBox_prototype, "addEventListenerCheckBox", js_cocos2dx_UICheckBox_addEventListener, 2, JSPROP_ENUMERATE | JSPROP_PERMANENT);

    JS_DefineFunction(cx, jsb_cocos2d_ui_Slider_prototype, "addEventListenerSlider", js_cocos2dx_UISlider_addEventListener, 2, JSPROP_ENUMERATE | JSPROP_PERMANENT);

    JS_DefineFunction(cx, jsb_cocos2d_ui_TextField_prototype, "addEventListenerTextField", js_cocos2dx_UITextField_addEventListener, 2, JSPROP_ENUMERATE | JSPROP_PERMANENT);

    JS_DefineFunction(cx, jsb_cocos2d_ui_PageView_prototype, "addEventListenerPageView", js_cocos2dx_UIPageView_addEventListener, 2, JSPROP_ENUMERATE | JSPROP_PERMANENT);
    
    JS_DefineFunction(cx, jsb_cocos2d_ui_ScrollView_prototype, "addEventListenerScrollView", js_cocos2dx_UIScrollView_addEventListener, 2, JSPROP_ENUMERATE | JSPROP_PERMANENT);

    JS_DefineFunction(cx, jsb_cocos2d_ui_ListView_prototype, "addEventListenerListView", js_cocos2dx_UIListView_addEventListener, 2, JSPROP_ENUMERATE | JSPROP_PERMANENT);

    JS_DefineFunction(cx, jsb_cocos2d_ui_LayoutParameter_prototype, "setMargin", js_cocos2dx_LayoutParameter_setMargin, 1, JSPROP_ENUMERATE | JSPROP_PERMANENT);

    JS_DefineFunction(cx, jsb_cocos2d_ui_LayoutParameter_prototype, "getMargin", js_cocos2dx_LayoutParameter_getMargin, 0, JSPROP_ENUMERATE | JSPROP_PERMANENT);
}