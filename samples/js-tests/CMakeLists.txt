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

set(APP_NAME js-tests)

if(WIN32)

elseif(OHOS)
  set(PLATFORM_SRC
          project/proj.ohos/entry/src/main/cpp/main.cpp)
else()
  set(PLATFORM_SRC
    project/proj.linux/main.cpp
  )
endif()

set(SAMPLE_SRC
  project/Classes/AppDelegate.cpp
  project/Classes/js_DrawNode3D_bindings.cpp
  project/Classes/js_Effect3D_bindings.cpp
  ${PLATFORM_SRC}
)

include_directories(
  project/Classes
  ../../frameworks/js-bindings/bindings/auto
  ../../frameworks/js-bindings/bindings/manual
  ../../frameworks/js-bindings/cocos2d-x/cocos/base
  ../../frameworks/js-bindings/cocos2d-x/cocos/editor-support
  ../../frameworks/js-bindings/cocos2d-x/cocos/audio/include
  ../../frameworks/js-bindings/external/spidermonkey/include/${PLATFORM_FOLDER}
  ../../frameworks/js-bindings/cocos2d-x/external/chipmunk/include/chipmunk
)

if(OHOS)
  add_definitions("-DOpenHarmony")
  # add_definitions("-DCOCOS2D_DEBUG=3")

  include_directories(
          ${CMAKE_CURRENT_SOURCE_DIR}
          Classes
          Classes/ExtensionsTest
          ${COCOS2DX_ROOT_PATH}
          ${COCOS2DX_ROOT_PATH}/external
          ${COCOS2DX_ROOT_PATH}/external/chipmunk
          ${COCOS2DX_ROOT_PATH}/external/chipmunk/include/chipmunk
          ${COCOS2DX_ROOT_PATH}/external/lib
          ${COCOS2DX_ROOT_PATH}/external/Box2D
          ${COCOS2DX_ROOT_PATH}/external/tiff
          ${COCOS2DX_ROOT_PATH}/external/tiff/include/ohos
          ${COCOS2DX_ROOT_PATH}/cocos
          ${COCOS2DX_ROOT_PATH}/cocos/editor-support
          ${COCOS2DX_ROOT_PATH}/extensions
  )

  add_library(${APP_NAME} SHARED ${SAMPLE_SRC})

  find_library( # Sets the name of the path variable.
          EGL-lib
          # Specifies the name of the NDK library that
          # you want CMake to locate.
          EGL )

  find_library( # Sets the name of the path variable.
          GLES-lib
          # Specifies the name of the NDK library that
          # you want CMake to locate.
          GLESv3 )

  find_library( # Sets the name of the path variable.
          hilog-lib
          # Specifies the name of the NDK library that
          # you want CMake to locate.
          hilog_ndk.z )

  find_library( # Sets the name of the path variable.
          libace-lib
          # Specifies the name of the NDK library that
          # you want CMake to locate.
          ace_ndk.z )

  find_library( # Sets the name of the path variable.
          libnapi-lib
          # Specifies the name of the NDK library that
          # you want CMake to locate.
          ace_napi.z )

  find_library( # Sets the name of the path variable.
          libuv-lib
          # Specifies the name of the NDK library that
          # you want CMake to locate.
          uv )

  target_link_libraries(${APP_NAME} PUBLIC ${EGL-lib} ${GLES-lib} ${hilog-lib}
          ${libace-lib} ${libnapi-lib} ${libuv-lib} jsbindings cocos2d)

  set(APP_BIN_DIR "${CMAKE_BINARY_DIR}/bin/${APP_NAME}")

  set_target_properties(${APP_NAME} PROPERTIES
     RUNTIME_OUTPUT_DIRECTORY  "${APP_BIN_DIR}")
  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E remove_directory
        ${APP_BIN_DIR}/script)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E remove_directory
        ${APP_BIN_DIR}/res)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E remove_directory
        ${APP_BIN_DIR}/src)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E remove
        ${APP_BIN_DIR}/*.js)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E remove
        ${APP_BIN_DIR}/*.json)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_CURRENT_SOURCE_DIR}/res
        ${APP_BIN_DIR}/res)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_CURRENT_SOURCE_DIR}/src
        ${APP_BIN_DIR}/src)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_directory
        ${CMAKE_CURRENT_SOURCE_DIR}/../../frameworks/js-bindings/bindings/script
        ${APP_BIN_DIR}/script)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy
        ${CMAKE_CURRENT_SOURCE_DIR}/main.js
        ${APP_BIN_DIR}/main.js)

  add_custom_command(TARGET ${APP_NAME} PRE_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy
        ${CMAKE_CURRENT_SOURCE_DIR}/project.json
        ${APP_BIN_DIR}/project.json)
else()
 # add the executable
  add_executable(${APP_NAME}
    ${SAMPLE_SRC}
  )

  target_link_libraries(${APP_NAME}
    jsbindings
    cocos2d
  )
endif()