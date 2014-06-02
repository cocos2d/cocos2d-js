set(APP_NAME js-moonwarriors)

if(WIN32)

else()
  set(PLATFORM_SRC
    project/proj.linux/main.cpp
  )
endif()

set(SAMPLE_SRC
  project/Classes/AppDelegate.cpp
  ${PLATFORM_SRC}
)

include_directories(
  project/Classes
  ../../frameworks/js-bindings/bindings/auto
  ../../frameworks/js-bindings/bindings/manual
  ../../frameworks/js-bindings/cocos2d-x/cocos/base
)

# add the executable
add_executable(${APP_NAME}
  ${SAMPLE_SRC}
)

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

set(APP_BIN_DIR "${CMAKE_BINARY_DIR}/bin/${APP_NAME}")

set_target_properties(${APP_NAME} PROPERTIES
     RUNTIME_OUTPUT_DIRECTORY  "${APP_BIN_DIR}")

pre_build(${APP_NAME}
  COMMAND ${CMAKE_COMMAND} -E remove_directory ${APP_BIN_DIR}/debugger
  COMMAND ${CMAKE_COMMAND} -E remove_directory ${APP_BIN_DIR}/res
  COMMAND ${CMAKE_COMMAND} -E remove_directory ${APP_BIN_DIR}/src
  COMMAND ${CMAKE_COMMAND} -E remove ${APP_BIN_DIR}/*.js
  COMMAND ${CMAKE_COMMAND} -E remove ${APP_BIN_DIR}/*.json
  COMMAND ${CMAKE_COMMAND} -E copy_directory ${CMAKE_CURRENT_SOURCE_DIR}/res ${APP_BIN_DIR}/res
  COMMAND ${CMAKE_COMMAND} -E copy_directory ${CMAKE_CURRENT_SOURCE_DIR}/src ${APP_BIN_DIR}/src
  COMMAND ${CMAKE_COMMAND} -E copy_directory ${CMAKE_CURRENT_SOURCE_DIR}/../../frameworks/js-bindings/bindings/script ${APP_BIN_DIR}
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/main.js ${APP_BIN_DIR}/main.js
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/project.json ${APP_BIN_DIR}/project.json
  )
