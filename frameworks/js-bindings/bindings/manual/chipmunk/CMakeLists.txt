#platform
if(WIN32) # Win32
  set(PLATFORM_FOLDER win32)
elseif(APPLE)# osx or ios
  set(PLATFORM_FOLDER mac)
else() # Assume Linux
  set(PLATFORM_FOLDER linux)
endif()

set(JSBINDING_CHIPMUNK_SRC
  js_bindings_chipmunk_manual.cpp
  js_bindings_chipmunk_functions.cpp
  js_bindings_chipmunk_auto_classes.cpp
  js_bindings_chipmunk_registration.cpp
)

include_directories(
  ..
  ../../ ../external/spidermonkey/include/${PLATFORM_FOLDER}
  ../../../cocos2d-x/external/chipmunk/include
  ../../../cocos2d-x/cocos/base
)

add_library(jsb_chipmunk STATIC
  ${JSBINDING_CHIPMUNK_SRC}
)

set_target_properties(jsb_chipmunk
    PROPERTIES
    ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
)

