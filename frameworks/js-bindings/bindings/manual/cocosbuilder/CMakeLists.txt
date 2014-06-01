#platform
if(WIN32) # Win32
  set(PLATFORM_FOLDER win32)
elseif(APPLE)# osx or ios
  set(PLATFORM_FOLDER mac)
else() # Assume Linux
  set(PLATFORM_FOLDER linux)
endif()

set(JSBINDING_CCBUILDER_SRC
  js_bindings_ccbreader.cpp
  ../../auto/jsb_cocos2dx_builder_auto.cpp
)

include_directories(
  ..
  ../../auto
  ../../ ../external/spidermonkey/include/${PLATFORM_FOLDER}
  ../../../cocos2d-x/cocos/base
  ../../../cocos2d-x/cocos/editor-support/cocosbuilder
)

add_library(jsb_builder STATIC
  ${JSBINDING_CCBUILDER_SRC}
)

set_target_properties(jsb_builder
    PROPERTIES
    ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
)

