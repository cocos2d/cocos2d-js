#platform
if(WIN32) # Win32
  set(PLATFORM_FOLDER win32)
elseif(APPLE)# osx or ios
  set(PLATFORM_FOLDER mac)
else() # Assume Linux
  set(PLATFORM_FOLDER linux)
endif()

set(JSBINDING_LOCALSTORAGE_SRC
  js_bindings_system_functions.cpp
  js_bindings_system_registration.cpp
)

include_directories(
  ..
  ../../ ../external/spidermonkey/include/${PLATFORM_FOLDER}
  ../../../cocos2d-x/cocos/base
  ../../../cocos2d-x/cocos/storage
)

add_library(jsb_localstorage STATIC
  ${JSBINDING_LOCALSTORAGE_SRC}
)

set_target_properties(jsb_localstorage
    PROPERTIES
    ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
    LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}/lib"
)

