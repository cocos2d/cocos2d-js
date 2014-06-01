#platform
if(WIN32) # Win32
  set(PLATFORM_FOLDER win32)
elseif(APPLE)# osx or ios
  set(PLATFORM_FOLDER mac)
else() # Assume Linux
  set(PLATFORM_FOLDER linux)
endif()

set(JSBINDING_UI_SRC
  jsb_cocos2dx_ui_manual.cpp
  ../../auto/jsb_cocos2dx_ui_auto.cpp
)

include_directories(
  ..
  ../../ ../external/spidermonkey/include/${PLATFORM_FOLDER}
  ../../../cocos2d-x/cocos/base
  ../../../cocos2d-x/cocos/ui
)

add_library(jsb_ui STATIC
  ${JSBINDING_UI_SRC}
)

set_target_properties(jsb_ui
    PROPERTIES
    ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
)

