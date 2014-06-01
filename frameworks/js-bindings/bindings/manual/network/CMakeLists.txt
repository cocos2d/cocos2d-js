#platform
if(WIN32) # Win32
  set(PLATFORM_FOLDER win32)
elseif(APPLE)# osx or ios
  set(PLATFORM_FOLDER mac)
else() # Assume Linux
  set(PLATFORM_FOLDER linux)
endif()

set(JSBINDING_NETWORK_SRC
  XMLHTTPRequest.cpp
  jsb_websocket.cpp
  jsb_socketio.cpp
)

include_directories(
  ..
  ../../ ../external/spidermonkey/include/${PLATFORM_FOLDER}
  ../../../cocos2d-x/cocos/base
  ../../../cocos2d-x/cocos/network
)

add_library(jsb_network STATIC
  ${JSBINDING_NETWORK_SRC}
)

set_target_properties(jsb_network
    PROPERTIES
    ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
)

