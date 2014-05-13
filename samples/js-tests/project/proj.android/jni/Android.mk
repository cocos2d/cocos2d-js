LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := js_tests_shared

LOCAL_MODULE_FILENAME := libjs_tests

LOCAL_SRC_FILES := main.cpp \
                   ../../Classes/AppDelegate.cpp

LOCAL_C_INCLUDES := $(LOCAL_PATH)/../../Classes

LOCAL_WHOLE_STATIC_LIBRARIES := cocos_jsb_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_chipmunk_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_extension_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_localstorage_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_network_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_builder_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_ui_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_studio_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_spine_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_pluginx_static


LOCAL_EXPORT_CFLAGS := -DCOCOS2D_DEBUG=1

include $(BUILD_SHARED_LIBRARY)

$(call import-module,bindings)
$(call import-module,bindings/manual/chipmunk)
$(call import-module,bindings/manual/extension)
$(call import-module,bindings/manual/localstorage)
$(call import-module,bindings/manual/network)
$(call import-module,bindings/manual/cocosbuilder)
$(call import-module,bindings/manual/ui)
$(call import-module,bindings/manual/cocostudio)
$(call import-module,bindings/manual/spine)
$(call import-module,cocos2d-x/plugin/jsbindings)
