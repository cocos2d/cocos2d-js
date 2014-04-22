#Upgrade guide from Cocos2d-html5 v2.2.x to Cocos2d-JS v3.0 alpha2


##1. Event Manager

* **1.1** cc.TouchDispatcher, cc.MouseDispatcher, cc.KeyboardDispatcher, cc.AccelerometerDispatcher have all been merged into cc.eventManager

	All events(mouse, touch, keyboard, accelerometer, custom) should be dispatched by cc.eventManager in v3.0

	More information about cc.eventManager is in this [documentation](../../../v3.0/eventManager/en.md)

	If you want to give us some suggest, please comment in this [topic](http://www.cocos2d-x.org/forums/19/topics/45954)

* **1.2** All event switch of cc.Layer have been deleted, these functions list :

	```
	isMouseEnabled
	setMouseEnabled
	setMousePriority
	getMousePriority
	registerWithTouchDispatcher
	isTouchEnabled
	setTouchEnabled
	getTouchPriority
	setTouchPriority
	getTouchMode
	setTouchMode
	isAccelerometerEnabled
	setAccelerometerEnabled			(it's moved to cc.inputManager) --> cc.inputManager.setAccelerometerEnabled
	setAccelerometerInterval		   (it's moved to cc.inputManager) --> cc.inputManager.setAccelerometerInterval
	isKeyboardEnabled
	setKeyboardEnabled
	setKeypadEnabled
	```


##2. Game creation and configuration

* **2.1** Game creation

    `cc.Application` and `cc.AppControl` classes have been removed.

    Instead, we refactored them to provide developers a much easier procedure for game creation with `cc.game`.

    ```
    cc.game.onStart = function(){
        cc.Director.getInstance().runScene(new MyScene());
    };
    cc.game.run();
    ```

    For more details, check out this documentation: [cc.game](../../../v3.0/cc-game/en.md)

* **2.2** Configuration

    Instead of putting your configurations with other initialization code in cocos2d.js, we have removed `cocos2d.js` and put all configurations into `project.json` which is a pure config file.
    The options available can be found in this document: [project.json](../../../v3.0/project-json/en.md)

* **2.3** Cocos2d module configuration

    Cocos2d-html5 has became a 2d game engine very competitive in almost all aspect of 2d game developement, so we have numerous features in our engine. As a result, our engine is larger than some other simpler html5 game engine. In case you don't need all the features and you want to keep our engine package within a small size, v3.0 have provided you the ability to configure the engine by your own need. All module definitions are in `cocos2d-html5/moduleConfig.json`, you can specify the modules that your game needed in the `modules` parameter of your `project.json`. By default, `cocos2d` is given as value of this parameter, it include all sub modules of Cocos2d-html5, you can change it to a set of specifique sub modules.

    Documentation for [moduleConfig.json](../../../v3.0/moduleconfig-json/en.md)


##3. Resource loading process

* **3.1** cc.loader

    `cc.Loader` and `cc.FileUtils` have been replaced by a singleton object `cc.loader`

    ```
    // Set resources path
    cc.loader.resPath = "./res";

    // Set audio files path
    cc.loader.resPath = "./audio";

    // Load a list of resources
    cc.loader.load(res, function(err){
        if(err) return console.log("load failed");
    });
    ```

    Detailed documentation can be found here: [cc.loader](../../../v3.0/cc-loader/en.md)

* **3.2** Utilities for loading process

    Along with cc.loader, v3.0 have also provided you some tools:

    - A singleton module imitates async module of nodejs: [cc.async](../../../v3.0/cc-async/en.md)
    - A singleton module provides conveniences for handling the file path: [cc.path](../../../v3.0/cc-path/en.md)


##4. Property APIs

* **4.1** Javascript style property access

    |  Old API  |  New API  |
    |:---------:|:---------:|
    | node.setPosition(x, y); | node.x = x; node.y = y; |
    | node.setRotation(r); | node.rotation = r; |

    As you can see in the table, functions invocation can be replaced with properties modifications. In version 3.0, not only `x`, `y` and `rotation`, almost all properties of your node can be accessed like this.

* **4.2** Function `attr`

    V3.0 also provided an useful function to cc.Node: `attr` function which helps you to config all the properties you want together with just one function call.

    ```
    node.attr({
    	x: 20,
    	y: 20,
    	anchorX: 0.5,
    	anchorY: 0.5,
    	width: 400,
    	height: 300,
    	scale: 2
    });
    ```

    Detailed documentation and a full list of properties can be found here: [Property API](../../../v3.0/getter-setter-api/en.md)


##5. Basic data structures

* Deleted APIs :

    ```
    cc.integerToColor3B
    cc.c4FFromccc3B
    cc.c4FFromccc4B
    cc.c4BFromccc4F
    cc.PointSprite
    cc.GridSize
    cc.g
    cc.V2F_C4F_T2F
    cc.V2F_C4F_T2F_Quad
    ```

* Modified APIs :

	```
	cc.Color3B, cc.Color4B, cc.Color4F -->	cc.Color
	cc.c3b, cc.c4b, cc.c4f             -->	cc.color
	cc.c3BEqual, cc.c4FEqual           -->	cc.colorEqual
	cc.convertColor3BtoHexString       -->	cc.colorToHex
	cc.convertHexNumToColor3B          -->	cc.hexToColor
	cc.white                           -->	cc.color.white
	cc.yellow                          -->	cc.color.yellow
	cc.blue                            -->	cc.color.blue
	cc.green                           -->	cc.color.green
	cc.red                             -->	cc.color.red
	cc.magenta                         -->	cc.color.magenta
	cc.black                           -->	cc.color.black
	cc.orange                          -->	cc.color.orange
	cc.gray                            -->	cc.color.gray
	```

	[Detailed documentation](../../../v3.0/basic-data/en.md)


##6. Singleton objects

v3.0 refactored singleton classes with Javascript objects, so that developers can access to them much easier than before. Here are the list of objects that have been refactored.

```
// In engine core
cc.AudioEngine.getInstance()                       --> cc.audioEngine
cc.Configuration.getInstance()                     --> cc.configuration
cc.Configuration.purgeConfiguration()              removed
cc.Director.getInstance()                          --> cc.director
cc.EGLView.getInstance()                           --> cc.view
cc.ShaderCache.getInstance()                       --> cc.shaderCache
cc.TextureCache.getInstance()                      --> cc.textureCache
cc.TextureCache.purgeSharedTextureCache()          --> cc.textureCache._clear()
cc.AnimationCache.getInstance()                    --> cc.animationCache
cc.AnimationCache.purgeSharedAnimationCache()      --> cc.animationCache._clear()
cc.SpriteFrameCache.getInstance()                  --> cc.spriteFrameCache
cc.SpriteFrameCache.purgeSharedSpriteFrameCache()  --> cc.SpriteFrameCache._clear()
cc.SAXParser.getInstance()                         --> cc.saxParser
cc.PlistParser.getInstance()                       --> cc.plistParser
cc.Screen.getInstance()                            --> cc.screen
cc.TIFFReader.getInstance()                        --> cc.tiffReader
cc.IMEDispatcher.getInstance()                     --> cc.imeDispatcher

// In extension
ccs.GUIReader.getInstance()                 --> ccs.guiReader
ccs.GUIReader.purge()                       --> ccs.guiReader.clear()
ccs.SceneReader.getInstance()               --> ccs.sceneReader
ccs.SceneReader.purge()                     --> ccs.sceneReader.clear()
ccs.DataReaderHelper                        --> ccs.dataReaderHelper
ccs.DataReaderHelper.purge()                --> ccs.dataReaderHelper.clear()
ccs.SpriteFrameCacheHelper.getInstance()    --> ccs.spriteFrameCacheHelper
ccs.SpriteFrameCacheHelper.purge()          --> ccs.spriteFrameCacheHelper.clear()
ccs.ArmatureDataManager.getInstance()       --> ccs.armatureDataManager
ccs.ArmatureDataManager.purge()             --> ccs.armatureDataManager.clear()
ccs.ActionManager.getInstance()             --> ccs.actionManager
ccs.ActionManager.purge()                   --> ccs.actionManager.clear()
ccs.TriggerMng.getInstance()                --> ccs.triggerManager
ccs.ObjectFactory.getInstance()             --> ccs.objectFactory
```

[Detialed documentation](../../../v3.0/singleton-objs/en.md).


##7. **[New in alpha 2]** Object creation and class inheritance

In Cocos2d-html5 2.2.x, to create an engine object like cc.Sprite, developers need to use the correct `create` functions, like this example :

```
var sprite = cc.Sprite.create(filename, rect);
var sprite = cc.Sprite.createWithTexture(texture, rect);
var sprite = cc.Sprite.createWithSpriteFrameName(spriteFrameName);
```

In Cocos2d-JS v3.0 alpha, we have made a great improvement, we merged all `createXXX` functions into one unified `create` function :

```
var sprite = cc.Sprite.create(filename, rect);
var sprite = cc.Sprite.create(texture, rect);
var sprite = cc.Sprite.create(spriteFrameName);
```

This changement affect not only cc.Sprite, but all similar classes, all classes and details about create function refactoration can be found in [this document](../../../v3.0/create-api/en.md).

As we never stop to improve our engine, in Cocos2d-JS v3.0 alpha2, we have made the `new` construction possible ! They share exactly the same parameters as `create` functions :

```
var sprite = new cc.Sprite(filename, rect);
var sprite = new cc.Sprite(texture, rect);
var sprite = new cc.Sprite(spriteFrameName);
```

In the meantime, for backward compatibility, we have kept all `create` functions also, so it's totally your choice. What's more important with this improvement is that the inheritance is much easier than before. Developers can now completely ignore all `initXXX` functions, you can simply override `ctor` function and call `this._super` with correct parameters, then your object will be correctly initialized:

```
var Enemy = cc.Sprite.extend({
    hp: 0,
    fileName: "enemy.png"
    ctor: function (hp) {
        this._super(fileName);
        this.hp = hp;
    }
});
var enemy1 = new Enemy(100);
```

As you can see, there isn't a single `init` function call, very convenient to use. All cocos2d (no extension) classes have been refactored to support this style, and JSB support it too. [This document](../../../v3.0/inheritance/en) discuss the `new` constructor and the inheritance in detail.


##8. GUI widgets

* **8.1** GUI widgets of Cocostudio extension have been removed from Cocostudio and have been put into ccui package, so their prefix have also changed from `ccs.` to `ccui.`. The reason is that they are some useful widget components that can not only be used for Cocostudio but also for any other purpose. All classes and functions that have been refactored is listed below :

    ```
    ccs.Layout                  --> ccui.Layout
    ccs.Margin                  --> ccui.Margin
    ccs.MarginZero              --> ccui.MarginZero
    ccs.LayoutParameter         --> ccui.LayoutParameter
    ccs.RelativeLayoutParameter --> ccui.RelativeLayoutParameter
    ccs.CocosGUIVersion         --> ccui.cocosGUIVersion
    ccs.UIHelper                --> ccui.helper
    ccs.Widget                  --> ccui.Widget
    ccs.Button                  --> ccui.Button
    ccs.CheckBox                --> ccui.CheckBox
    ccs.ImageView               --> ccui.ImageView
    ccs.LoadingBar              --> ccui.LoadingBar
    ccs.Slider                  --> ccui.Slider
    ccs.Text                    --> ccui.Text
    ccs.TextAtlas               --> ccui.TextAtlas
    ccs.TextBMFont              --> ccui.TextBMFont
    ccs.TextField               --> ccui.TextField
    ccs.UILayer                 --> deleted
    ```

* **8.2** A new ui widget `ccui.RichText` has been added to v3.0a.

* **8.3** `ccs.UILayer` has been deleted from v3.0a, please add to node directly, for example:

	```
	// usage in v2.2.2: A widget object need to through ccs.UILayer.addWidget to add to node object
	var uiLayer = ccs.UILayer.create();
	uiLayer.addWidget(aWidget);
	var node = cc.Node.create();
	node .addChild(uiLayer);
	...
	
	// usage in v3.0a: A widget object can add to node object directly through addChild function
	var node = cc.Node.create();
	node .addChild(aWidget);	
	```

##9. NodeGrid

A new node `cc.NodeGrid` have been added to version 3.0a. This node should be used to host a target node and permit it to have the ability to run ActionGrid type action. In v2.2.2, cc.Node can directly play such actions, but this ability will be removed to keep cc.Node as simple as possible. So the comparaision between v2.2.2 and v3.0a is like the example below :

```
// In v2.2.2
var shaky = cc.Shaky3D.create( duration, cc.size(15,10), 5, false );
var sprite = cc.Sprite.create();
sprite.runAction( shaky );

// In v3.0
var shaky = cc.Shaky3D.create( duration, cc.size(15,10), 5, false );
var sprite = cc.Sprite.create();
var nodeGrid = cc.NodeGrid.create();
nodeGrid.addChild( sprite );
nodeGrid.runAction( shaky );
```

Note: In Cocos2d-html5 v3.0 version web, the old way still work fine, but if you want your game to be ported to native plateform with JSB, only the new way is supported.


##10. JSB related

We found that there are different needs for web app developers and JSB native app developers, and there are things that we can't perfectly merge, so here are those JSB only APIs, if you want to use them, please check the platform first.

```
if (cc.sys.isNative) {
    cc.fileUtils.isFileExist("filename");
}
```

* **10.1** C++ Macros

    In JSB project, there are some macros can only be modified in C++ level, whatever you do in JS can't modify them. These macros are listed below, they can be found in ccMacros.h and ccConfig.h:
    
    ```
    CC_ENABLE_STACKABLE_ACTIONS
    CC_ENABLE_GL_STATE_CACHE
    CC_FIX_ARTIFACTS_BY_STRECHING_TEXEL
    CC_DIRECTOR_STATS_INTERVAL
    CC_DIRECTOR_STATS_POSITION
    CC_DIRECTOR_FPS_POSITION
    CC_DIRECTOR_DISPATCH_FAST_EVENTS
    CC_DIRECTOR_MAC_USE_DISPLAY_LINK_THREAD
    CC_NODE_RENDER_SUBPIXEL
    CC_SPRITEBATCHNODE_RENDER_SUBPIXEL
    CC_TEXTURE_ATLAS_USE_VAO
    CC_USE_LA88_LABELS
    CC_SPRITE_DEBUG_DRAW
    CC_SPRITEBATCHNODE_DEBUG_DRAW
    CC_LABELBMFONT_DEBUG_DRAW
    CC_LABELATLAS_DEBUG_DRAW
    CC_NODE_DEBUG_VERIFY_EVENT_LISTENERS
    CC_ENABLE_PROFILERS
    CC_LUA_ENGINE_DEBUG
    CC_USE_PHYSICS
    CC_ENABLE_SCRIPT_BINDING
    ```
    
* **10.2** **[New in alpha 2]** cc.fileUtils

    As cc.FileUtils have been replaced by cc.loader in Cocos2d-html5, but in JSB project, there are still some needs that can't be accomplished by cc.loader, so we decided to make cc.FileUtils a JSB only API. And to follow the singleton object API style, you don't need to call `cc.FileUtils.getInstance()`, `cc.fileUtils` is referring directly to the FileUtils singleton object. Detailed APIs are listed below:
    
    ```
    cc.fileUtils
    cc.fileUtils.fullPathForFilename(filename)
    cc.fileUtils.loadFilenameLookup(filename)
    cc.fileUtils.getStringFromFile(filename)
    cc.fileUtils.isAbsolutePath(path)
    cc.fileUtils.isPopupNotify()
    cc.fileUtils.getValueVectorFromFile(filename)
    cc.fileUtils.writeToFile(object, filename)
    cc.fileUtils.getValueMapFromFile(filename)
    cc.fileUtils.isFileExist(filename)
    cc.fileUtils.purgeCachedEntries()
    cc.fileUtils.fullPathFromRelativeFile(filename, relativeFile)
    cc.fileUtils.getWritablePath()
    ```
    
    All functions about search path configuration have been removed, because this will due to code inconsistence between Cocos2d-html5 and Cocos2d-JSB and eventually a high cost of maintainbility.

* **10.3** cc.AssetsManager

    cc.AssetsManager is a class serves for managing and using remote resources on your server. It can also manage versions of resources and update them to most recent versions. Detailed APIs are listed below:
    
    ```
    var assetsMgr = cc.AssetsManager.create(packageUrl, versionFileUrl, storagePath, errorCallback, progressCallback, successCallback);
    assetsMgr.setStoragePath(storagePath)
    assetsMgr.setPackageUrl(packageUrl)
    assetsMgr.checkUpdate()
    assetsMgr.getStoragePath()
    assetsMgr.update()
    assetsMgr.setConnectionTimeout(timeout)
    assetsMgr.setVersionFileUrl(versionFileUrl)
    assetsMgr.getPackageUrl()
    assetsMgr.getConnectionTimeout()
    assetsMgr.getVersion()
    assetsMgr.getVersionFileUrl()
    assetsMgr.deleteVersion()
    ```


##11. Other API changements

* **11.1** `cc.Broswser` and `sys` are replaced with `cc.sys`: [documentation](../../../v3.0/cc-sys/en.md).

* **11.2** Some functions of `cc.AudioEngine` have been deleted :

    ```
    preloadMusic
    preloadEffect
    isFormatSupported
    preloadSound
    ```

* **11.3** cc.SAXParser

	These functions of `cc.SAXParser` have been deleted :

    ```
    tmxParse
    preloadPlist
    unloadPlist
    getName
    getExt
    getList
    ```

	And `cc.PlistParser` is added to parse plist files: [cc.SAXParser documentation](../../../v3.0/cc-saxparser/en.md)

* **11.4** `addImageAsync` is merged into `addImage` of `cc.textureCache`.

    ```
    addImage(url)                           --> addImage(url)
    addImageAsync(url, target, callback)    --> addImage(url, callback, target)
    ```
    
    **[New in alpha 2]** The new `addImage` have been synced in JSB.

* **11.5** Two of `MenuItemFont`'s functions have been refactored to fit the standard API sytle:

    ```
    fontName    --> getFontName
    fontSize    --> getFontSize
    ```

* **11.6** cc.view
    
    Retina display have been supported for Apple devices, you can disable or enable it with `cc.view.enableRetina(enableOrNot)`, you can also detect whether retina display is currently on or not with `cc.view.isRetinaEnabled()`. At last, you can retrieve the retina display's pixel ratio by using `cc.view.getDevicePixelRat io()`, on Apple devices, it will return 2 when retina display is applied. By default, retina display is automatically activated for your game on Apply devices. If you want to change it, note that after you enable or disable retina display, you have to call `cc.view.setDesignResolutionSize(width, height, policy)` to make it applied to your game.
    
    **[New in alpha 2]** cc.view used to try to enter full screen automatically in mobile browsers. Now we added a switch to enable or disable this functionality, by default, it's always enabled.
    
    ```
    cc.view.enableAutoFullScreen(enabled); // enabled should be true or false
    cc.view.isAutoFullScreenEnabled(); // this will return the current value
    ```

* **11.7** Global APIs deleted :

    ```
    cc.IS_SHOW_DEBUG_ON_PAGE
    cc.COCOS2D_DEBUG
    cc.PLATFORM_WINDOWS
    cc.PLATFORM_LINUX
    cc.PLATFORM_MACOS
    cc.PLATFORM_ANDROID
    cc.PLATFORM_IPHONE
    cc.PLATFORM_BLACKBERRY
    cc.PLATFORM_NACL
    cc.PLATFORM_EMSCRIPTEN
    cc.HASH_FIND_INT

    cc.isAddedHiddenEvent
    cc.originalCanvasSize
    cc.config
    cc.loadImg
    cc.loadImage.handler
    cc.computeImageFormatType
    cc.tgaLoad
    
    ccs.UILayer
    ```

* **11.8** Global APIs added :

    ```
    cc.warn
    cc.error
    cc.defineGetterSetter
    cc.BuilderReader.registerController
    ```

* **11.9** Global APIs refactored :

    ```
    cc.Assert                       --> cc.assert
    cc.ArrayVerifyType              --> cc.arrayVerifyType
    cc.ArrayRemoveObject            --> cc.arrayRemoveObject
    cc.ArrayRemoveArray             --> cc.arrayRemoveArray
    cc.ArrayAppendObjectsToIndex    --> cc.arrayAppendObjectsToIndex

    cc.ArrayRemoveObjectAtIndex(arr, index)         --> arr.splice(index, 1)
    cc.ArrayGetIndexOfValue(arr, value)             --> arr.indexOf(value)
    cc.ArrayAppendObject(arr, addObj)               --> arr.push(addObj)
    cc.ArrayAppendObjectToIndex(arr, addObj, index) --> arr.splice(index, 0, addObj)
    cc.ArrayGetIndexOfObject(arr, findObj)          --> arr.indexOf(findObj)
    cc.ArrayContainsObject(arr, findObj)            --> arr.indexOf(findObj) != -1
    
    // Upper case functions have been renamed to lower case to fit the API style
    cc.SWAP                         --> cc.swap // [New in alpha 2]
    cc.RANDOM_MINUS1_1              --> cc.randomMinus1To1 // [New in alpha 2]
    cc.RANDOM_0_1                   --> cc.random0To1 // [New in alpha 2]
    cc.DEGREES_TO_RADIANS           --> cc.degreesToRadians // [New in alpha 2]
    cc.RADIANS_TO_DEGREES           --> cc.radiansToDegress // [New in alpha 2]
    cc.NODE_DRAW_SETUP              --> cc.nodeDrawSetup // [New in alpha 2]
    cc.ENABLE_DEFAULT_GL_STATES     --> cc.enableDefaultGLStates // [New in alpha 2]
    cc.DISABLE_DEFAULT_GL_STATES    --> cc.disableDefaultGLStates // [New in alpha 2]
    cc.INCREMENT_GL_DRAWS           --> cc.incrementGLDraws // [New in alpha 2]
    cc.CONTENT_SCALE_FACTOR         --> cc.contentScaleFactor // [New in alpha 2]
    cc.POINT_POINTS_TO_PIXELS       --> cc.pointPointsToPixels // [New in alpha 2]
    cc.SIZE_POINTS_TO_PIXELS        --> cc.sizePointsToPixels // [New in alpha 2]
    cc.SIZE_PIXELS_TO_POINTS        --> cc.sizePixelsToPoints // [New in alpha 2]
    cc._SIZE_PIXELS_TO_POINTS_OUT   --> cc._sizePixelsToPointsOut // [New in alpha 2]
    cc.POINT_PIXELS_TO_POINTS       --> cc.pointPixelsToPoints // [New in alpha 2]
    cc._POINT_PIXELS_TO_POINTS_OUT  --> cc._pointPixelsToPointsOut // [New in alpha 2]
    cc.RECT_PIXELS_TO_POINTS        --> cc.rectPixelsToPoints // [New in alpha 2]
    cc.RECT_POINTS_TO_PIXELS        --> cc.rectPointsToPixels // [New in alpha 2]
    cc.CHECK_GL_ERROR_DEBUG         --> cc.checkGLErrorDebug // [New in alpha 2]

    cc.CardinalSplineAt	            --> cc.cardinalSplineAt // [New in alpha 2]

    // Constants
    cc.PRIORITY_SYSTEM                      --> cc.Scheduler.PRIORITY_SYSTEM
    cc.SPRITE_INDEX_NOT_INITIALIZED         --> cc.Sprite.INDEX_NOT_INITIALIZED // [New in alpha 2]
    cc.DIRECTOR_PROJECTION_2D               --> cc.Director.PROJECTION_2D // [New in alpha 2]
    cc.DIRECTOR_PROJECTION_3D               --> cc.Director.PROJECTION_3D // [New in alpha 2]
    cc.DIRECTOR_PROJECTION_CUSTOM           --> cc.Director.PROJECTION_CUSTOM // [New in alpha 2]
    cc.DIRECTOR_PROJECTION_DEFAULT          --> cc.Director.PROJECTION_DEFAULT // [New in alpha 2]
    cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888     --> cc.Texture2D.PIXEL_FORMAT_RGBA8888
    cc.TEXTURE_2D_PIXEL_FORMAT_RGB888       --> cc.Texture2D.PIXEL_FORMAT_RGB888
    cc.TEXTURE_2D_PIXEL_FORMAT_RGB565       --> cc.Texture2D.PIXEL_FORMAT_RGB565
    cc.TEXTURE_2D_PIXEL_FORMAT_A8           --> cc.Texture2D.PIXEL_FORMAT_A8
    cc.TEXTURE_2D_PIXEL_FORMAT_I8           --> cc.Texture2D.PIXEL_FORMAT_I8
    cc.TEXTURE_2D_PIXEL_FORMAT_AI88         --> cc.Texture2D.PIXEL_FORMAT_AI88
    cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444     --> cc.Texture2D.PIXEL_FORMAT_RGBA4444
    cc.TEXTURE_2D_PIXEL_FORMAT_RGB5A1       --> cc.Texture2D.PIXEL_FORMAT_RGB5A1
    cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC4       --> cc.Texture2D.PIXEL_FORMAT_PVRTC4
    cc.TEXTURE_2D_PIXEL_FORMAT_PVRTC2       --> cc.Texture2D.PIXEL_FORMAT_PVRTC2
    cc.TEXTURE_2D_PIXEL_FORMAT_DEFAULT      --> cc.Texture2D.PIXEL_FORMAT_DEFAULT
    cc.Texture2D.setDefaultAlphaPixelFormat(format) --> cc.Texture2D.defaultPixelFormat = format
    cc.Texture2D.getDefaultAlphaPixelFormat()       --> cc.Texture2D.defaultPixelFormat
    cc.Texture2D.defaultAlphaPixelFormat()          --> cc.Texture2D.defaultPixelFormat

    cc.dumpConfig           --> cc.sys.dump

    // Public to private
    cc.setup                    --> cc._setup
    cc.initDebugSetting         --> cc._initDebugSetting
    cc.canvas                   --> cc._canvas
    cc.drawingUtil              --> cc._drawingUtil
    cc.renderContext            --> cc._renderContext
    cc.gameDiv                  --> cc._gameDiv
    cc.setContextMenuEnable     --> cc._setContextMenuEnable
    cc.renderContextType        --> cc._renderType
    cc.CANVAS                   --> cc._RENDER_TYPE_CANVAS
    cc.WEBGL                    --> cc._RENDER_TYPE_CANVAS
    cc.mainRenderContextBackup  --> cc._mainRenderContextBackup
    cc.RectFromString           --> cc.spriteFrameCache._rectFromString
    cc.PointFromString          --> cc.spriteFrameCache._pointFromString
    cc.SizeFromString           --> cc.spriteFrameCache._sizeFromString

    ccs.CocoStudioVersion       --> ccs.cocostudioVersion
    
    // Typo correction
    ccs.DecotativeDisplay       --> ccs.DecorativeDisplay
    
    ```
    
* **11.10** **[New in alpha 2]** Other changes in alpha 2

    - cc.Node refactoration :
    
    ```
    pauseSchedulerAndActions    --> pause
    resumeSchedulerAndActions   --> resume
    ```
    
    - cc.CallFunc's `initWithTarget` function have been renamed to `initWithFunction`
    
    - cc.MoveBy's `create` function now support also `x` and `y` seperated as position parameter
    
    ```
    cc.MoveBy.create(duration, x, y);
    cc.MoveBy.create(duration, cc.p(x, y));
    ```
    
    - ccs.comAttribute refactoration :
    
    ```
    getCString  --> getString
    setCString  --> setString
    ```

Other documentation can be found here:

* [cc.log](../../../v3.0/cc-log/en.md)
* [cc.spriteFrameCache](../../../v3.0/cc-spriteframecache/en.md)
* [cc.FileUtils](../../../v3.0/cc-fileutils/en.md)
* [more](../../../v3.0/more-change-from-v2-to-v3/en.md)
