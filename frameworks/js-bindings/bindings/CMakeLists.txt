#platform
if(WIN32) # Win32
  set(PLATFORM_FOLDER win32)
elseif(APPLE)# osx or ios
  set(PLATFORM_FOLDER mac)
else() # Assume Linux
  set(PLATFORM_FOLDER linux)
endif()

set(JSBINDING_SRC
  manual/ScriptingCore.cpp
  manual/cocos2d_specifics.cpp
  manual/js_manual_conversions.cpp
  manual/js_bindings_core.cpp
  manual/js_bindings_opengl.cpp
  manual/jsb_opengl_functions.cpp
  manual/jsb_opengl_manual.cpp
  manual/jsb_opengl_registration.cpp
  manual/jsb_event_dispatcher_manual.cpp
  auto/jsb_cocos2dx_auto.cpp
)

include_directories(
  auto
  manual
  ../external/spidermonkey/include/${PLATFORM_FOLDER}
  ../cocos2d-x/cocos/base
  ../cocos2d-x/cocos/ui 
  ../cocos2d-x/cocos/audio/include
  ../cocos2d-x/cocos/storage
  ../cocos2d-x/extensions
  ../cocos2d-x/cocos/editor-support/spine
  ../cocos2d-x/cocos/editor-support
)

add_library(jsbinding STATIC
  ${JSBINDING_SRC}
)

set_target_properties(jsbinding
    PROPERTIES
    ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
)

