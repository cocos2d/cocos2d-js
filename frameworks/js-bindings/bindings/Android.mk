LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := cocos_jsb_static

LOCAL_MODULE_FILENAME := libcocos2dxjsb

LOCAL_SRC_FILES := auto/jsb_cocos2dx_auto.cpp \
                   auto/jsb_cocos2dx_builder_auto.cpp \
                   auto/jsb_cocos2dx_extension_auto.cpp \
                   auto/jsb_cocos2dx_spine_auto.cpp \
                   auto/jsb_cocos2dx_studio_auto.cpp \
                   auto/jsb_cocos2dx_ui_auto.cpp \
                   manual/ScriptingCore.cpp \
                   manual/cocos2d_specifics.cpp \
                   manual/js_manual_conversions.cpp \
                   manual/js_bindings_core.cpp \
                   manual/js_bindings_opengl.cpp \
                   manual/jsb_opengl_functions.cpp \
                   manual/jsb_opengl_manual.cpp \
                   manual/jsb_opengl_registration.cpp \
                   manual/jsb_event_dispatcher_manual.cpp \
                   manual/platform/android/CCJavascriptJavaBridge.cpp \
                   manual/chipmunk/js_bindings_chipmunk_auto_classes.cpp \
                   manual/chipmunk/js_bindings_chipmunk_functions.cpp \
                   manual/chipmunk/js_bindings_chipmunk_manual.cpp \
                   manual/chipmunk/js_bindings_chipmunk_registration.cpp \
                   manual/cocosbuilder/js_bindings_ccbreader.cpp \
                   manual/cocostudio/jsb_cocos2dx_studio_conversions.cpp \
                   manual/cocostudio/jsb_cocos2dx_studio_manual.cpp \
                   manual/extension/jsb_cocos2dx_extension_manual.cpp \
                   manual/localstorage/js_bindings_system_functions.cpp \
                   manual/localstorage/js_bindings_system_registration.cpp \
                   manual/network/jsb_socketio.cpp \
                   manual/network/jsb_websocket.cpp \
                   manual/network/XMLHTTPRequest.cpp \
                   manual/spine/jsb_cocos2dx_spine_manual.cpp \
                   manual/ui/jsb_cocos2dx_ui_manual.cpp
                   

LOCAL_CFLAGS := -DCOCOS2D_JAVASCRIPT

LOCAL_EXPORT_CFLAGS := -DCOCOS2D_JAVASCRIPT

LOCAL_C_INCLUDES := $(LOCAL_PATH)/manual \
                    $(LOCAL_PATH)/manual/cocostudio \
                    $(LOCAL_PATH)/manual/spine \
                    $(LOCAL_PATH)/auto \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/2d \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/base \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/ui \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/audio/include \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/storage \
                    $(LOCAL_PATH)/../cocos2d-x/extensions \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/editor-support/spine \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/editor-support/cocosbuilder \
                    $(LOCAL_PATH)/../cocos2d-x/cocos/editor-support/cocostudio


LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH)/manual \
                           $(LOCAL_PATH)/auto \
                           $(LOCAL_PATH)/../cocos2d-x/cocos/audio/include 

LOCAL_STATIC_LIBRARIES := cocos2dx_static
LOCAL_STATIC_LIBRARIES += spidermonkey_static
LOCAL_STATIC_LIBRARIES += cocos_localstorage_static

include $(BUILD_STATIC_LIBRARY)

$(call import-module,.)
$(call import-module,external/spidermonkey/prebuilt/android)
$(call import-module,storage/local-storage)
