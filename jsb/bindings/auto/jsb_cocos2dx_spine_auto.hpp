#ifndef __cocos2dx_spine_h__
#define __cocos2dx_spine_h__

#include "jsapi.h"
#include "jsfriendapi.h"


extern JSClass  *jsb_spine_Skeleton_class;
extern JSObject *jsb_spine_Skeleton_prototype;

bool js_cocos2dx_spine_Skeleton_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_spine_Skeleton_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_spine_Skeleton(JSContext *cx, JSObject *global);
void register_all_cocos2dx_spine(JSContext* cx, JSObject* obj);
bool js_cocos2dx_spine_Skeleton_setToSetupPose(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_setBlendFunc(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_onDraw(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_setSlotsToSetupPose(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_setAttachment(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_getBlendFunc(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_setSkin(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_updateWorldTransform(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_setBonesToSetupPose(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_createWithFile(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_Skeleton_Skeleton(JSContext *cx, uint32_t argc, jsval *vp);

extern JSClass  *jsb_spine_SkeletonAnimation_class;
extern JSObject *jsb_spine_SkeletonAnimation_prototype;

bool js_cocos2dx_spine_SkeletonAnimation_constructor(JSContext *cx, uint32_t argc, jsval *vp);
void js_cocos2dx_spine_SkeletonAnimation_finalize(JSContext *cx, JSObject *obj);
void js_register_cocos2dx_spine_SkeletonAnimation(JSContext *cx, JSObject *global);
void register_all_cocos2dx_spine(JSContext* cx, JSObject* obj);
bool js_cocos2dx_spine_SkeletonAnimation_update(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_SkeletonAnimation_setMix(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_SkeletonAnimation_clearTracks(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_SkeletonAnimation_clearTrack(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_SkeletonAnimation_onAnimationStateEvent(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_SkeletonAnimation_createWithFile(JSContext *cx, uint32_t argc, jsval *vp);
bool js_cocos2dx_spine_SkeletonAnimation_SkeletonAnimation(JSContext *cx, uint32_t argc, jsval *vp);
#endif

