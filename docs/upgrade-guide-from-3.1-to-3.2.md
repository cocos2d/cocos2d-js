#Upgrade guide from Cocos2d-JS v3.1 to Cocos2d-JS v3.2

## 0. Upgrade to Cocos2d-JS v3.1

If you are still using Cocos2d-html5 or previous version of Cocos2d-JS, you need to read the previous upgrade guide first : [Upgrade guide to Cocos2d-JS v3.1](../../v3.0rc0/upgrade-guide/en.md)

## 1. Reduce package size with modulirization in JSB

In Cocos2d-JS v3.2, during compilation, Cocos2d-x modules and related JavaScript Bindings code can be automatically excluded from the final package if they are not used. As you may already know, our web engine support modularization with `modules` section in project.json file. However, this configuration doesn't take effect in JSB, you should do the following to exclude any module you don't need in JSB.

In AppDelegate.cpp, you will find `applicationDidFinishLaunching` function in which all JSB bindings are registered. If the registration code for a module is commented out, then the base Cocos2d-x module won't be used, during linking the linker will exclude it. This is a common optimization in linker, so it will take effect for both Android and iOS apps. Of course, all modules that you don't register their bindings won't be available in your JavaScript code.

At last, you only need to compile your project. The minimum size of Android package in Cocos2d-JS v3.2 is 4.4mb.

```
bool AppDelegate::applicationDidFinishLaunching()
{
    // initialize director
    auto director = Director::getInstance();
	auto glview = director->getOpenGLView();
	if(!glview) {
		glview = cocos2d::GLViewImpl::createWithRect("Release3_2", Rect(0,0,900,640));
		director->setOpenGLView(glview);
	}

    // set FPS. the default value is 1.0/60 if you don't call this
    director->setAnimationInterval(1.0 / 60);
    
    ScriptingCore* sc = ScriptingCore::getInstance();
    sc->addRegisterCallback(register_all_cocos2dx);
    sc->addRegisterCallback(register_cocos2dx_js_core);
    sc->addRegisterCallback(register_cocos2dx_js_extensions);
    sc->addRegisterCallback(jsb_register_system);

    // extension can be commented out to reduce the package
    sc->addRegisterCallback(register_all_cocos2dx_extension);
    sc->addRegisterCallback(register_all_cocos2dx_extension_manual);

    // chipmunk can be commented out to reduce the package
    sc->addRegisterCallback(jsb_register_chipmunk);
    // opengl can be commented out to reduce the package
    sc->addRegisterCallback(JSB_register_opengl);
    
    // builder can be commented out to reduce the package
    sc->addRegisterCallback(register_all_cocos2dx_builder);
    sc->addRegisterCallback(register_CCBuilderReader);
    
    // ui can be commented out to reduce the package, attension studio need ui module
    sc->addRegisterCallback(register_all_cocos2dx_ui);
    sc->addRegisterCallback(register_all_cocos2dx_ui_manual);

    // studio can be commented out to reduce the package, 
    sc->addRegisterCallback(register_all_cocos2dx_studio);
    sc->addRegisterCallback(register_all_cocos2dx_studio_manual);
    
    // spine can be commented out to reduce the package
    sc->addRegisterCallback(register_all_cocos2dx_spine);
    sc->addRegisterCallback(register_all_cocos2dx_spine_manual);
    
    // XmlHttpRequest can be commented out to reduce the package
    sc->addRegisterCallback(MinXmlHttpRequest::_js_register);
    // websocket can be commented out to reduce the package
    sc->addRegisterCallback(register_jsb_websocket);
    // sokcet io can be commented out to reduce the package
    sc->addRegisterCallback(register_jsb_socketio);
    
#if (CC_TARGET_PLATFORM == CC_PLATFORM_ANDROID)
    sc->addRegisterCallback(JavascriptJavaBridge::_js_register);
#elif (CC_TARGET_PLATFORM == CC_PLATFORM_IOS || CC_TARGET_PLATFORM == CC_PLATFORM_MAC)
    sc->addRegisterCallback(JavaScriptObjCBridge::_js_register);
#endif
    sc->start();    
    sc->runScript("script/jsb_boot.js");
    ScriptEngineProtocol *engine = ScriptingCore::getInstance();
	ScriptEngineManager::getInstance()->setScriptEngine(engine);
	ScriptingCore::getInstance()->runScript("main.js");

    return true;
}
```

## 2. Restart game and hot update related APIs

Since Cocos2d-JS v3.0 Beta, we have provided AssetsManager for assets and scripts hot update ability. Ever since, its stability is greatly improved and become reliable. Thank to our developers, we have also collected many great suggestions and feature requests. In v3.2, we decided to add two importants ones: 

1. Clean a script's cache

    A script will be cached in JSB, so even if you updated it with AssetsManager, it won't take effect even if you require it again. In this case, we provided `cleanScript` API to clean its cache.

    ```
    cc.sys.cleanScript(scriptPath);
    ```

2. Restart game

    Very often, when the hot update is done, the game need to be restarted entirely. So we provided restart game API, it will do the following steps:

    1. Clean up Cocos2d-x's environment
    2. Restart the JavaScript VM
    3. Register all script bindings
    4. Re-execute the main.js

    The API is

    ```
    cc.game.restart()
    ```
    
3. Manifest's new API: getSearchPaths

    If you want the new JavaScript files updated via AssetsManager to take effect, there are two requirements to be satisfied:
    
    1. JavaScript files must be updated correctly.
    2. Everytime before the game start up, the search paths for the new scripts must be prepended before the execution of `cc.game.run()`. Then in `cc.game.run`, the engine will load the updated scripts.
    
    This means the search paths of the updated assets must be stored locally, so we have provided a new API of Manifest to retrieve the search pahts. Then the local storage can be used to save the search paths, it's our recommended way, but developers can also use whatever they want to save the paths persistantly. Here is an recommended process after the scripts hot update via AssetsManager:
    
    ```
    // After update succeeded, updated manifest will become the new local manifest.
    var searchPaths = assetsManager.getLocalManifest().getSearchPaths();
    // The search paths can be coded to JSON string then stored in cc.sys.localStorage, so that it can be retrieved and preppended to jsb.fileUtils during the game restart. 
    cc.sys.localStorage.setItem("AssetsSearchPaths", JSON.stringify(searchPaths));
    // Restart the game to let new scripts take effect.
    cc.game.restart();
    ```

Hope these new APIs will make hot update in your game much eaiser.