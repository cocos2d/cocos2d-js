#/****************************************************************************
# Copyright (c) 2014 Chukong Technologies Inc.
# 
# http://www.cocos2d-x.org
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
# ****************************************************************************/

cmake_minimum_required(VERSION 2.6)

set(APP_NAME MyGame)
project (${APP_NAME})

include(frameworks/js-bindings/cocos2d-x/build/BuildHelpers.CMakeLists.txt)

option(USE_CHIPMUNK "Use chipmunk for physics library" ON)
option(USE_BOX2D "Use box2d for physics library" OFF)
option(DEBUG_MODE "Debug or release?" ON)

if(DEBUG_MODE)
  set(CMAKE_BUILD_TYPE DEBUG)
else(DEBUG_MODE)
  set(CMAKE_BUILD_TYPE RELEASE)
endif(DEBUG_MODE)

set(CMAKE_C_FLAGS_DEBUG "-g -Wall -DCOCOS2D_DEBUG=1")
set(CMAKE_CXX_FLAGS_DEBUG ${CMAKE_C_FLAGS_DEBUG})

set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -std=c99")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++11")

if(USE_CHIPMUNK)
  message("Using chipmunk ...")
  add_definitions(-DLINUX -DCC_ENABLE_CHIPMUNK_INTEGRATION=1)
elseif(USE_BOX2D)
  message("Using box2d ...")
  add_definitions(-DLINUX -DCC_ENABLE_BOX2D_INTEGRATION=1)
else(USE_CHIPMUNK)
  message(FATAL_ERROR "Must choose a physics library.")
endif(USE_CHIPMUNK)

# architecture
if ( CMAKE_SIZEOF_VOID_P EQUAL 8 )
set(ARCH_DIR "64-bit")
else()
set(ARCH_DIR "32-bit")
endif()


set(GAME_SRC
  frameworks/runtime-src/proj.linux/main.cpp
  frameworks/runtime-src/Classes/AppDelegate.cpp
)

set(COCOS2D_ROOT ${CMAKE_SOURCE_DIR}/frameworks/js-bindings/cocos2d-x)

include_directories(
  /usr/local/include/GLFW
  ${COCOS2D_ROOT}
  ${COCOS2D_ROOT}/cocos
  ${COCOS2D_ROOT}/cocos/base
  ${COCOS2D_ROOT}/cocos/audio/include
  ${COCOS2D_ROOT}/cocos/platform
  ${COCOS2D_ROOT}/cocos/platform/desktop
  ${COCOS2D_ROOT}/cocos/platform/linux
  ${COCOS2D_ROOT}/cocos/editor-support
  ${COCOS2D_ROOT}/extensions
  ${COCOS2D_ROOT}/external
  ${COCOS2D_ROOT}/external/edtaa3func
  ${COCOS2D_ROOT}/external/jpeg/include/linux
  ${COCOS2D_ROOT}/external/tiff/include/linux
  ${COCOS2D_ROOT}/external/webp/include/linux
  ${COCOS2D_ROOT}/external/tinyxml2
  ${COCOS2D_ROOT}/external/unzip
  ${COCOS2D_ROOT}/external/chipmunk/include/chipmunk
  ${COCOS2D_ROOT}/external/freetype2/include/linux
  ${COCOS2D_ROOT}/external/websockets/include/linux
  ${COCOS2D_ROOT}/external/spidermonkey/include/linux
  ${COCOS2D_ROOT}/external/linux-specific/fmod/include/${ARCH_DIR}
  ${COCOS2D_ROOT}/external/xxhash
  ${CMAKE_CURRENT_SOURCE_DIR}/frameworks/js-bindings/external/spidermonkey/include/linux
  ${CMAKE_CURRENT_SOURCE_DIR}/frameworks/js-bindings/bindings/auto
  ${CMAKE_CURRENT_SOURCE_DIR}/frameworks/js-bindings/bindings/manual
)

link_directories(
  /usr/local/lib
  ${COCOS2D_ROOT}/external/jpeg/prebuilt/linux/${ARCH_DIR}
  ${COCOS2D_ROOT}/external/tiff/prebuilt/linux/${ARCH_DIR}
  ${COCOS2D_ROOT}/external/webp/prebuilt/linux/${ARCH_DIR}
  ${COCOS2D_ROOT}/external/freetype2/prebuilt/linux/${ARCH_DIR}
  ${COCOS2D_ROOT}/external/websockets/prebuilt/linux/${ARCH_DIR}
  ${COCOS2D_ROOT}/external/spidermonkey/prebuilt/linux/${ARCH_DIR}
  ${COCOS2D_ROOT}/external/linux-specific/fmod/prebuilt/${ARCH_DIR}
  ${CMAKE_CURRENT_SOURCE_DIR}/frameworks/js-bindings/external/spidermonkey/prebuilt/linux/${ARCH_DIR}
)

# chipmunk library
add_subdirectory(${COCOS2D_ROOT}/external/chipmunk/src)

# unzip library
add_subdirectory(${COCOS2D_ROOT}/external/unzip)

# tinyxml2 library
add_subdirectory(${COCOS2D_ROOT}/external/tinyxml2)

# audio
add_subdirectory(${COCOS2D_ROOT}/cocos/audio)

# xxhash library
add_subdirectory(${COCOS2D_ROOT}/external/xxhash)

# cocos2d
add_subdirectory(${COCOS2D_ROOT}/cocos)

# extensions
add_subdirectory(${COCOS2D_ROOT}/extensions)
add_subdirectory(frameworks/js-bindings/bindings/manual/extension)

## Editor Support

# spine
add_subdirectory(${COCOS2D_ROOT}/cocos/editor-support/spine)
add_subdirectory(frameworks/js-bindings/bindings/manual/spine)

# cocosbuilder
add_subdirectory(${COCOS2D_ROOT}/cocos/editor-support/cocosbuilder)
add_subdirectory(frameworks/js-bindings/bindings/manual/cocosbuilder)

# cocostudio
add_subdirectory(${COCOS2D_ROOT}/cocos/editor-support/cocostudio)
add_subdirectory(frameworks/js-bindings/bindings/manual/cocostudio)

#jsbinding library
add_subdirectory(frameworks/js-bindings/bindings)

#jsbinding_chipmunk library
add_subdirectory(frameworks/js-bindings/bindings/manual/chipmunk)

#jsbinding_localstorage library
add_subdirectory(frameworks/js-bindings/bindings/manual/localstorage)

#jsbinding_network library
add_subdirectory(frameworks/js-bindings/bindings/manual/network)

#jsbinding_ui library
add_subdirectory(frameworks/js-bindings/bindings/manual/ui)


# add the executable
add_executable(${APP_NAME}
  ${GAME_SRC}
)

if ( CMAKE_SIZEOF_VOID_P EQUAL 8 )
set(FMOD_LIB "fmodex64")
else()
set(FMOD_LIB "fmodex")
endif()

target_link_libraries(${APP_NAME}
  jsb_spine
  spine
  jsb_studio
  cocostudio
  jsb_builder
  cocosbuilder
  jsb_chipmunk
  chipmunk_static
  jsb_extension
  extensions
  audio
  jsb_localstorage
  jsb_network
  jsb_ui
  jsbinding
  cocos2d
  js_static
  )

set(APP_BIN_DIR "${CMAKE_BINARY_DIR}/bin")

set_target_properties(${APP_NAME} PROPERTIES
     RUNTIME_OUTPUT_DIRECTORY  "${APP_BIN_DIR}")

pre_build(${APP_NAME}
  COMMAND ${CMAKE_COMMAND} -E remove_directory ${APP_BIN_DIR}/script
  COMMAND ${CMAKE_COMMAND} -E remove_directory ${APP_BIN_DIR}/res
  COMMAND ${CMAKE_COMMAND} -E remove_directory ${APP_BIN_DIR}/src
  COMMAND ${CMAKE_COMMAND} -E remove ${APP_BIN_DIR}/*.js
  COMMAND ${CMAKE_COMMAND} -E remove ${APP_BIN_DIR}/*.json
  COMMAND ${CMAKE_COMMAND} -E copy_directory ${CMAKE_CURRENT_SOURCE_DIR}/res ${APP_BIN_DIR}/res
  COMMAND ${CMAKE_COMMAND} -E copy_directory ${CMAKE_CURRENT_SOURCE_DIR}/src ${APP_BIN_DIR}/src
  COMMAND ${CMAKE_COMMAND} -E copy_directory ${CMAKE_CURRENT_SOURCE_DIR}/frameworks/js-bindings/bindings/script ${APP_BIN_DIR}/script
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/main.js ${APP_BIN_DIR}/main.js
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/project.json ${APP_BIN_DIR}/project.json
)

