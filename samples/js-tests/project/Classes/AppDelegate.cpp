#include "AppDelegate.h"

#include "cocos2d.h"
#include "SimpleAudioEngine.h"
#include "ScriptingCore.h"
#include "jsb_cocos2dx_auto.hpp"
#include "jsb_cocos2dx_extension_auto.hpp"
#include "jsb_cocos2dx_builder_auto.hpp"
#include "jsb_cocos2dx_spine_auto.hpp"
#include "extension/jsb_cocos2dx_extension_manual.h"
#include "cocostudio/jsb_cocos2dx_studio_manual.h"
#include "jsb_cocos2dx_studio_auto.hpp"
#include "jsb_cocos2dx_ui_auto.hpp"
#include "ui/jsb_cocos2dx_ui_manual.h"
#include "spine/jsb_cocos2dx_spine_manual.h"
#include "cocos2d_specifics.hpp"
#include "cocosbuilder/cocosbuilder_specifics.hpp"
#include "chipmunk/js_bindings_chipmunk_registration.h"
#include "localstorage/js_bindings_system_registration.h"
#include "jsb_opengl_registration.h"
#include "network/XMLHTTPRequest.h"
#include "network/jsb_websocket.h"
#include "network/jsb_socketio.h"
#include "cocosbuilder/js_bindings_ccbreader.h"

#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include "jsb_cocos2dx_pluginx_auto.hpp"
#include "jsb_pluginx_extension_registration.h"
#endif

#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
#include "platform/android/CCJavascriptJavaBridge.h"
#endif

USING_NS_CC;
USING_NS_CC_EXT;
using namespace CocosDenshion;

AppDelegate::AppDelegate()
{
}

AppDelegate::~AppDelegate()
{
    ScriptEngineManager::destroyInstance();
}

bool AppDelegate::applicationDidFinishLaunching()
{
    // initialize director
    auto director = Director::getInstance();
    auto glview = director->getOpenGLView();
    if(!glview) {
        glview = GLView::createWithRect("js-tests", Rect(0,0,900,640));
        director->setOpenGLView(glview);
    }

    // JS-Test in Html5 uses 800x450 as design resolution
    glview->setDesignResolutionSize(800, 450, ResolutionPolicy::FIXED_HEIGHT);
    // turn on display FPS
    director->setDisplayStats(true);

    // set FPS. the default value is 1.0/60 if you don't call this
    director->setAnimationInterval(1.0 / 60);

    auto fileUtils = FileUtils::getInstance();
    std::vector<std::string> searchPaths = fileUtils->getSearchPaths();
    searchPaths.push_back("script");
    searchPaths.push_back("src");
    
    const char* paths[] = {
        "res",
        "res/scenetest",
        "res/scenetest/ArmatureComponentTest",
        "res/scenetest/AttributeComponentTest",
        "res/scenetest/BackgroundComponentTest",
        "res/scenetest/EffectComponentTest",
        "res/scenetest/LoadSceneEdtiorFileTest",
        "res/scenetest/ParticleComponentTest",
        "res/scenetest/SpriteComponentTest",
        "res/scenetest/TmxMapComponentTest",
        "res/scenetest/UIComponentTest",
        "res/scenetest/TriggerTest",
    };

    for (const auto& path : paths)
    {
        searchPaths.push_back(path);
    }
    
    fileUtils->setSearchPaths(searchPaths);

    ScriptingCore* sc = ScriptingCore::getInstance();
    sc->addRegisterCallback(register_all_cocos2dx);
    sc->addRegisterCallback(register_all_cocos2dx_extension);
    sc->addRegisterCallback(register_cocos2dx_js_extensions);
    sc->addRegisterCallback(register_all_cocos2dx_extension_manual);
    sc->addRegisterCallback(jsb_register_chipmunk);
    sc->addRegisterCallback(JSB_register_opengl);
    sc->addRegisterCallback(jsb_register_system);
    sc->addRegisterCallback(MinXmlHttpRequest::_js_register);
    sc->addRegisterCallback(register_jsb_websocket);
	sc->addRegisterCallback(register_jsb_socketio);

    sc->addRegisterCallback(register_all_cocos2dx_builder);
    sc->addRegisterCallback(register_CCBuilderReader);

    sc->addRegisterCallback(register_all_cocos2dx_ui);
    sc->addRegisterCallback(register_all_cocos2dx_ui_manual);
    sc->addRegisterCallback(register_all_cocos2dx_studio);
    sc->addRegisterCallback(register_all_cocos2dx_studio_manual);
    
    sc->addRegisterCallback(register_all_cocos2dx_spine);
    sc->addRegisterCallback(register_all_cocos2dx_spine_manual);
    
#if (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    sc->addRegisterCallback(register_all_pluginx_protocols);
    sc->addRegisterCallback(register_pluginx_js_extensions);
#endif
    
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    sc->addRegisterCallback(JavascriptJavaBridge::_js_register);
#endif
    sc->start();
    
#if defined(COCOS2D_DEBUG) && (COCOS2D_DEBUG > 0)
    sc->enableDebugger();
#endif
    
    auto pEngine = ScriptingCore::getInstance();
    ScriptEngineManager::getInstance()->setScriptEngine(pEngine);
    
    ScriptingCore::getInstance()->runScript("main.js");
    
    return true;
}

// This function will be called when the app is inactive. When comes a phone call,it's be invoked too
void AppDelegate::applicationDidEnterBackground()
{
    auto director = Director::getInstance();
    director->stopAnimation();
    director->getEventDispatcher()->dispatchCustomEvent("game_on_hide");
    SimpleAudioEngine::getInstance()->pauseBackgroundMusic();
    SimpleAudioEngine::getInstance()->pauseAllEffects();    
}

// this function will be called when the app is active again
void AppDelegate::applicationWillEnterForeground()
{
    auto director = Director::getInstance();
    director->startAnimation();
    director->getEventDispatcher()->dispatchCustomEvent("game_on_show");
    SimpleAudioEngine::getInstance()->resumeBackgroundMusic();
    SimpleAudioEngine::getInstance()->resumeAllEffects();
}
