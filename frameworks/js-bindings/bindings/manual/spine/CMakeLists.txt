#platform
if(WIN32) # Win32
  set(PLATFORM_FOLDER win32)
elseif(APPLE)# osx or ios
  set(PLATFORM_FOLDER mac)
else() # Assume Linux
  set(PLATFORM_FOLDER linux)
endif()

set(JSBINDING_SPINE_SRC
  ../../auto/jsb_cocos2dx_spine_auto.cpp
  jsb_cocos2dx_spine_manual.cpp
)

include_directories(
  ..
  ../../auto
  ../../ ../external/spidermonkey/include/${PLATFORM_FOLDER}
  ../../../cocos2d-x/cocos/base
  ../../../cocos2d-x/cocos/editor-support/spine
)

add_library(jsb_spine STATIC
  ${JSBINDING_SPINE_SRC}
)

set_target_properties(jsb_spine
    PROPERTIES
    ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
)

