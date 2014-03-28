LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := cocos_jsb_static

LOCAL_MODULE_FILENAME := libcocos2dxjsb

LOCAL_SRC_FILES := manual/ScriptingCore.cpp \
                   manual/cocos2d_specifics.cpp \
                   manual/js_manual_conversions.cpp \
                   manual/js_bindings_core.cpp \
                   manual/js_bindings_opengl.cpp \
                   manual/jsb_opengl_functions.cpp \
                   manual/jsb_opengl_manual.cpp \
                   manual/jsb_opengl_registration.cpp \
                   manual/jsb_event_dispatcher_manual.cpp \
                   auto/jsb_cocos2dx_auto.cpp

LOCAL_CFLAGS := -DCOCOS2D_JAVASCRIPT

LOCAL_EXPORT_CFLAGS := -DCOCOS2D_JAVASCRIPT

LOCAL_C_INCLUDES := $(LOCAL_PATH)/manual \
                    $(LOCAL_PATH)/auto \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/ui \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/audio/include \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/storage \
                    $(LOCAL_PATH)/../cocos2d-x/extensions \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/editor-support/spine \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/editor-support


LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH)/manual \
                           $(LOCAL_PATH)/auto \
                           $(LOCAL_PATH)/../cocos2d-x/cocos/audio/include 

LOCAL_WHOLE_STATIC_LIBRARIES := cocos2dx_static
LOCAL_WHOLE_STATIC_LIBRARIES += spidermonkey_static
LOCAL_WHOLE_STATIC_LIBRARIES += cocosdenshion_static

include $(BUILD_STATIC_LIBRARY)

$(call import-module,external/spidermonkey/prebuilt/android)
$(call import-module,2d)
$(call import-module,audio/android)
