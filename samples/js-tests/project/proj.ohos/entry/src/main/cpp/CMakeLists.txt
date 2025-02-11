# the minimum version of CMake.
cmake_minimum_required(VERSION 3.4.1)

set(NATIVERENDER_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR})

include_directories(${NATIVERENDER_ROOT_PATH}
                    ${NATIVERENDER_ROOT_PATH}/include)

#add_library(entry SHARED hello.cpp)
#target_link_libraries(entry PUBLIC libace_napi.z.so)

project(nativerender)

set(CMAKE_VERBOSE_MAKEFILEON ON)

set(COCOS2DX_ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../../../../../../../../frameworks/js-bindings/cocos2d-x)
set(ROOT_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../../../../../../../..)

set(CLASSES_PATH ${CMAKE_CURRENT_SOURCE_DIR}/../../../../../Classes)

set(PLATFORM_FOLDER "ohos")

set(OHOS true)
add_definitions(-DOHOS)
add_definitions(-DNO_JS_ASSERT)
add_definitions(-DCOCOS2D_DEBUG=1)
set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -O2")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -O2")

set(CMAKE_CXX_FLAGS "-frtti -DCC_ENABLE_CHIPMUNK_INTEGRATION=1 -fsigned-char ${CMAKE_CXX_FLAGS}")

set(CMAKE_MODULE_PATH ${COCOS2DX_ROOT_PATH}/cmake/Modules)
include(CocosBuildHelpers)
set(CMAKE_CXX_STANDARD 14)

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

message("***************  GLES-lib: ${GLES-lib} ****************")

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
find_library( # Sets the name of the path variable.
              rawfile-lib
              # Specifies the name of the NDK library that
              # you want CMake to locate.
              rawfile.z )

if(NOT EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/../resources/rawfile)
    file(GLOB ALL_RESOURCES_FILES "${CMAKE_CURRENT_SOURCE_DIR}/../../../../../../res/*")
    file(COPY ${ALL_RESOURCES_FILES}
        DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/../resources/rawfile/res)

    file(GLOB ALL_SRC_FILES "${CMAKE_CURRENT_SOURCE_DIR}/../../../../../../src/*")
    file(COPY ${ALL_SRC_FILES}
            DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/../resources/rawfile/src)

    file(GLOB ALL_SCRIPT_FILES "${CMAKE_CURRENT_SOURCE_DIR}/../../../../../../../../frameworks/js-bindings/bindings/script/*")
    file(COPY ${ALL_SCRIPT_FILES}
        DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/../resources/rawfile/script)

    file(GLOB ALL_MAIN_JS_FILES "${CMAKE_CURRENT_SOURCE_DIR}/../../../../../../main.js")
    file(COPY ${ALL_MAIN_JS_FILES}
         DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/../resources/rawfile)

    file(GLOB ALL_PROJECT_JS_FILES "${CMAKE_CURRENT_SOURCE_DIR}/../../../../../../project.json")
    file(COPY ${ALL_PROJECT_JS_FILES}
         DESTINATION ${CMAKE_CURRENT_SOURCE_DIR}/../resources/rawfile)
endif()

add_library(${PROJECT_NAME} SHARED  main.cpp
                                    napi_init.cpp
                                    ${CLASSES_PATH}/AppDelegate.cpp
                                    ${CLASSES_PATH}/js_DrawNode3D_bindings.cpp
                                    ${CLASSES_PATH}/js_Effect3D_bindings.cpp)

target_include_directories(${PROJECT_NAME} PUBLIC ${CLASSES_PATH})
target_include_directories(${PROJECT_NAME} PUBLIC ${COCOS2DX_ROOT_PATH}/cocos)

# 基础的依赖使用include_directories
include_directories(${COCOS2DX_ROOT_PATH}/external/opengles/api)
include_directories(
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/base
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/2d
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/ui
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/audio/include
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/storage
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/network
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/platform
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/editor-support
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/editor-support/spine
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/editor-support/cocosbuilder
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/editor-support/cocostudio
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/deprecated
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/cocos/platform
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/extensions
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/external
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/external/chipmunk/include/chipmunk
        ${ROOT_PATH}/frameworks/js-bindings/cocos2d-x/external/chipmunk/include
        ${ROOT_PATH}/frameworks/js-bindings/external/spidermonkey/include/${PLATFORM_FOLDER}
        ${ROOT_PATH}/frameworks/js-bindings/bindings/auto
        ${ROOT_PATH}/frameworks/js-bindings/bindings/manual
)
# jsbindings library
set(Cocos2d_JS_Samples_VERSION_MAJOR 3)
set(Cocos2d_JS_Samples_VERSION_MINOR 2)

link_directories(
        /usr/local/lib
        ${ROOT_PATH}/frameworks/js-bindings/external/spidermonkey/prebuilt/${PLATFORM_FOLDER}/${ARCH_DIR}
)

add_subdirectory(${ROOT_PATH}/frameworks/js-bindings/bindings jsbindings)
add_subdirectory(${ROOT_PATH}/frameworks/js-bindings/cocos2d-x Cocos2d-X)

target_link_libraries(${PROJECT_NAME} jsbindings cocos2d ${libnapi-lib} ${hilog-lib})