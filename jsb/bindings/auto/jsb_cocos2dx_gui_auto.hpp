#ifndef __cocos2dx_gui_h__
#define __cocos2dx_gui_h__

#include "jsapi.h"
#include "jsfriendapi.h"


extern JSClass  *jsb_cocos2d_gui_LayoutParameter_class;
extern JSObject *jsb_cocos2d_gui_LayoutParameter_prototype;

bool js_cocos2dx_gui_LayoutParameter_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_LayoutParameter_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_LayoutParameter(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_LayoutParameter_getLayoutType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LayoutParameter_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LayoutParameter_LayoutParameter(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_LinearLayoutParameter_class;
extern JSObject *jsb_cocos2d_gui_LinearLayoutParameter_prototype;

bool js_cocos2dx_gui_LinearLayoutParameter_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_LinearLayoutParameter_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_LinearLayoutParameter(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_LinearLayoutParameter_setGravity(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LinearLayoutParameter_getGravity(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LinearLayoutParameter_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LinearLayoutParameter_LinearLayoutParameter(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_RelativeLayoutParameter_class;
extern JSObject *jsb_cocos2d_gui_RelativeLayoutParameter_prototype;

bool js_cocos2dx_gui_RelativeLayoutParameter_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_RelativeLayoutParameter_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_RelativeLayoutParameter(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_RelativeLayoutParameter_setAlign(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_RelativeLayoutParameter_setRelativeToWidgetName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_RelativeLayoutParameter_getRelativeName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_RelativeLayoutParameter_getRelativeToWidgetName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_RelativeLayoutParameter_setRelativeName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_RelativeLayoutParameter_getAlign(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_RelativeLayoutParameter_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_RelativeLayoutParameter_RelativeLayoutParameter(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_Widget_class;
extern JSObject *jsb_cocos2d_gui_Widget_prototype;

bool js_cocos2dx_gui_Widget_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_Widget_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_Widget(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_Widget_getVirtualRenderer(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setSizePercent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setActionTag(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getNodeByTag(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_isFlipY(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getTouchEndPos(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setPositionPercent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getNodes(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setPositionType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_isIgnoreContentAdaptWithSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_updateSizeAndPosition(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getBottomInParent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getActionTag(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getLayoutParameter(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getPositionType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getChildByName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_isEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_isFlipX(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_removeNodeByTag(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_isTouchEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getContentSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getTouchStartPos(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_didNotSelectSelf(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setFocused(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setTouchEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_clone(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getTouchMovePos(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setBrightStyle(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_addNode(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setLayoutParameter(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setFlipY(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setFlipX(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getLeftInParent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_ignoreContentAdaptWithSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_isBright(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_clippingParentAreaContainPoint(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getSizePercent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getTopInParent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getWidgetType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getRightInParent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getSizeType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_removeNode(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_removeAllNodes(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getWorldPosition(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_getPositionPercent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_hitTest(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_isFocused(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setSizeType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_checkChildInfo(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_setBright(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Widget_Widget(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_Layout_class;
extern JSObject *jsb_cocos2d_gui_Layout_prototype;

bool js_cocos2dx_gui_Layout_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_Layout_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_Layout(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_Layout_setBackGroundColorVector(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_hitTest(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_getBackGroundImageTextureSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_getLayoutType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setClippingType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setBackGroundColorType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setBackGroundImage(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setBackGroundColor(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_requestDoLayout(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_isClippingEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setBackGroundColorOpacity(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setBackGroundImageCapInsets(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_removeBackGroundImage(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setBackGroundImageScale9Enabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setClippingEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_setLayoutType(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Layout_Layout(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_Button_class;
extern JSObject *jsb_cocos2d_gui_Button_prototype;

bool js_cocos2dx_gui_Button_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_Button_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_Button(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_Button_getTitleText(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_loadTextureNormal(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setCapInsetsNormalRenderer(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setCapInsetsPressedRenderer(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_loadTexturePressed(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setTitleFontSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setCapInsetsDisabledRenderer(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setTitleFontName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_getTitleColor(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_loadTextureDisabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_getTitleFontName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setPressedActionEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setCapInsets(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setScale9Enabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_loadTextures(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_getTitleFontSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setTitleText(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_setTitleColor(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Button_Button(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_CheckBox_class;
extern JSObject *jsb_cocos2d_gui_CheckBox_prototype;

bool js_cocos2dx_gui_CheckBox_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_CheckBox_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_CheckBox(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_CheckBox_getSelectedState(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_loadTextureBackGroundSelected(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_loadTextureBackGroundDisabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_loadTextureFrontCross(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_loadTextures(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_loadTextureBackGround(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_setSelectedState(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_loadTextureFrontCrossDisabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_CheckBox_CheckBox(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_ImageView_class;
extern JSObject *jsb_cocos2d_gui_ImageView_prototype;

bool js_cocos2dx_gui_ImageView_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_ImageView_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_ImageView(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_ImageView_setTextureRect(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ImageView_setCapInsets(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ImageView_setScale9Enabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ImageView_loadTexture(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ImageView_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ImageView_ImageView(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_Text_class;
extern JSObject *jsb_cocos2d_gui_Text_prototype;

bool js_cocos2dx_gui_Text_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_Text_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_Text(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_Text_getStringLength(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_setFontName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_setTouchScaleChangeEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_getStringValue(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_setText(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_setTextVerticalAlignment(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_setFontSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_isTouchScaleChangeEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_setTextHorizontalAlignment(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_setTextAreaSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Text_Text(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_TextAtlas_class;
extern JSObject *jsb_cocos2d_gui_TextAtlas_prototype;

bool js_cocos2dx_gui_TextAtlas_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_TextAtlas_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_TextAtlas(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_TextAtlas_setProperty(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextAtlas_getStringValue(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextAtlas_setStringValue(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextAtlas_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextAtlas_TextAtlas(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_LoadingBar_class;
extern JSObject *jsb_cocos2d_gui_LoadingBar_prototype;

bool js_cocos2dx_gui_LoadingBar_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_LoadingBar_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_LoadingBar(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_LoadingBar_setPercent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LoadingBar_loadTexture(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LoadingBar_setDirection(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LoadingBar_setScale9Enabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LoadingBar_setCapInsets(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LoadingBar_getDirection(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LoadingBar_getPercent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LoadingBar_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_LoadingBar_LoadingBar(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_ScrollView_class;
extern JSObject *jsb_cocos2d_gui_ScrollView_prototype;

bool js_cocos2dx_gui_ScrollView_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_ScrollView_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_ScrollView(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_ScrollView_scrollToTop(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToPercentHorizontal(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_isInertiaScrollEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToPercentBothDirection(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_getDirection(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToBottomLeft(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_getInnerContainer(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToBottom(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_setDirection(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToTopLeft(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToTopRight(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToBottomLeft(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_setInnerContainerSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_getInnerContainerSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_isBounceEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToPercentVertical(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_setInertiaScrollEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToTopLeft(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToPercentHorizontal(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToBottomRight(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_setBounceEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToTop(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToLeft(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToPercentBothDirection(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToPercentVertical(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToBottom(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToBottomRight(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToLeft(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToRight(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_jumpToRight(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_scrollToTopRight(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ScrollView_ScrollView(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_ListView_class;
extern JSObject *jsb_cocos2d_gui_ListView_prototype;

bool js_cocos2dx_gui_ListView_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_ListView_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_ListView(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_ListView_getIndex(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_removeAllItems(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_setGravity(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_pushBackCustomItem(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_getItems(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_removeItem(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_getCurSelectedIndex(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_insertDefaultItem(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_setItemsMargin(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_removeLastItem(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_getItem(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_setItemModel(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_requestRefreshView(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_pushBackDefaultItem(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_insertCustomItem(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_ListView_ListView(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_Slider_class;
extern JSObject *jsb_cocos2d_gui_Slider_prototype;

bool js_cocos2dx_gui_Slider_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_Slider_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_Slider(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_Slider_setPercent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_loadSlidBallTextureNormal(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_loadBarTexture(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_loadProgressBarTexture(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_loadSlidBallTextures(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_setCapInsetProgressBarRebderer(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_setCapInsetsBarRenderer(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_setScale9Enabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_setCapInsets(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_loadSlidBallTexturePressed(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_loadSlidBallTextureDisabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_getPercent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Slider_Slider(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_TextField_class;
extern JSObject *jsb_cocos2d_gui_TextField_prototype;

bool js_cocos2dx_gui_TextField_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_TextField_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_TextField(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_TextField_setAttachWithIME(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_getStringValue(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setPasswordStyleText(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_getAttachWithIME(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setFontName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_getInsertText(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setInsertText(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_getDetachWithIME(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_didNotSelectSelf(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_attachWithIME(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setPasswordEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setMaxLengthEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_getDeleteBackward(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setFontSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setPlaceHolder(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_isPasswordEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_getMaxLength(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_isMaxLengthEnabled(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setDetachWithIME(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setText(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setMaxLength(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setTouchSize(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_setDeleteBackward(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextField_TextField(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_TextBMFont_class;
extern JSObject *jsb_cocos2d_gui_TextBMFont_prototype;

bool js_cocos2dx_gui_TextBMFont_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_TextBMFont_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_TextBMFont(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_TextBMFont_setFntFile(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextBMFont_getStringValue(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextBMFont_setText(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextBMFont_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_TextBMFont_TextBMFont(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_PageView_class;
extern JSObject *jsb_cocos2d_gui_PageView_prototype;

bool js_cocos2dx_gui_PageView_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_PageView_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_PageView(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_PageView_getCurPageIndex(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_addWidgetToPage(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_getPage(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_removePage(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_insertPage(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_scrollToPage(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_removePageAtIndex(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_getPages(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_removeAllPages(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_addPage(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_create(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_PageView_PageView(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_cocos2d_gui_Helper_class;
extern JSObject *jsb_cocos2d_gui_Helper_prototype;

bool js_cocos2dx_gui_Helper_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_gui_Helper_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_gui_Helper(JSContext *cx, JSObject *global);
void register_all_cocos2dx_gui(JSContext* cx, JSObject* obj);
bool js_cocos2dx_gui_Helper_seekActionWidgetByActionTag(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Helper_seekWidgetByTag(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Helper_seekWidgetByRelativeName(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_gui_Helper_seekWidgetByName(JSContext *cx, uint32_t argc, jsval *vp);
#endif

