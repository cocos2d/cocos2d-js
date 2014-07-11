<img src="http://www.cocos2d-x.org/attachments/1508/2dh5-logo.png" width=200>

Cocos2d-JS
===========

Cocos2d-JS is Cocos2d-x engine's javascript version which include Cocos2d-html5 and Cocos2d-x JSBinding. It support full Cocos2d-x features with a set of simplified javascript friendly APIs.

Cocos2d-JS provides a consistent development experience for whichever platform you want to distribute to, both web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single javascript code base, you can run your game on both web browsers and native platform including Mac OS, Windows, iOS, Android. This will bring your game great opportunities in almost all canals of distribution.

Furthermore, javascript friendly API makes your game development experience a breeze, easy to code, test and distribute. Cocos2d-JS also offers Cocos Console, a script tool, to simplify the creation of projects and let you start coding right away. You can use it to create a new project and publish it to android, iOS, Mac OS or web.

## API Reference

- API Reference: [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0rc0/index.html)

- And you can download it from
[Cocos2d-JS-v3.0-rc0-API.zip](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-rc0-API.zip)

## Online demo
- [MoonWarriors](http://www.cocos2d-x.org/MoonWarriors/index.html)
- [Testcase](http://www.cocos2d-x.org/js-tests/)


##How to Start a New Game

1. Download the code from [Cocos2d download site](http://www.cocos2d-x.org/download)
2. Run `setup.py`
3. Run the `cocos` script

Example:

    $ cd cocos2d-js
    $ ./setup.py
    $ source FILE_TO_SAVE_SYSTEM_VARIABLE
    
    $ cocos new MyGame -l js -d /directory/to/project
    $ cd /directory/to/project/MyGame

###Run the project under the game directory

* Run Cocos2d-html5 project with a Websever:

	```
	cocos run -p web
	```

* Compile and run project in Cocos2d-JSB :

	```
	cocos compile -p ios|mac|android|web
	cocos run -p ios|mac|android|web
	```

You may need to provide your NDK, Android SDK and ANT's path during the setup. Note that this tool is developed with python, so you will need python (32bit) 2.7.5 or later installed on your machine (but it doesn't support Python3). Please refer to [Cocos Console document](http://www.cocos2d-x.org/docs/manual/framework/html5/cocos-console/en).

And if you have any doubt about the usage, please use `-h` with any command to have some help messages.

You can also use prebuilt Xcode or Visual Studio project which is located in `Game/frameworks/runtime-src/proj.xxx`

##Folder structure of new project

- frameworks
    - cocos2d-html5     : Cocos2d-JS html5 engine source
    - js-bindings       : JSB engine source (include Cocos2d-x and JSB)
    - runtime-src       : IDE projects (android, ios, mac, win32)
- publish               : Published apps
- runtime               : Debug app files
- tools                 : JS Bindings generator
- res                   : Your game resource folder for images, sounds, etc
- src                   : Your game's js files folder
- main.js               : The entrance of your game logic
- index.html            : The web page for hosting your game in web version

##Built-in Projects

There are two prebuilt projects in Cocos2d-JS repo:

- Test cases, located in `samples/js-tests`

 ```
 cd samples/js-tests
 run -p ios|mac|android|web
 ```
- Game sample : Moon Warriors, located in `samples/js-moonwarriors`

```
cd samples/js-moonwarriors
run -p ios|mac|android|web
```
And they share the same project file which located in `build` folder, there are Xcode and Visual Studio projects.

##Main features

   * Support All modern browsers and native platforms
   * Scene management (workflow)
   * Transitions between scenes
   * Sprites and Sprite Sheets
   * Effects: Lens, Ripple, Waves, Liquid, etc.
   * Actions (behaviours):
     * Trasformation Actions: Move, Rotate, Scale, Fade, Tint, etc.
     * Composable actions: Sequence, Spawn, Repeat, Reverse
     * Ease Actions: Exp, Sin, Cubic, Elastic, etc.
     * Misc actions: CallFunc, OrbitCamera, Follow, Tween
   * Basic menus and buttons
   * Integrated with physics engines: [Box2d][5] and [Chipmunk][6]
   * Particle system
   * Skeleton Animations: [Spine][7] and Armature support
   * Fonts:
     * Fast font rendering using Fixed and Variable width fonts
     * Support for .ttf fonts
   * Tile Map support: Orthogonal, Isometric and Hexagonal
   * Parallax scrolling
   * Motion Streak
   * Render To Texture
   * Touch/Accelerometer on mobile devices
   * Touch/Mouse/Keyboard on desktop
   * Sound Engine support (CocosDenshion library) based on OpenAL or WebAudio on web
   * Integrated Slow motion/Fast forward
   * Fast and compressed textures: PVR compressed and uncompressed textures, ETC1 compressed textures, and more
   * Resolution Independence
   * Modularized engine for customization
   * Open Source Commercial Friendly: Compatible with open and closed source projects
   * OpenGL ES 2.0 (mobile) / OpenGL 2.1 (desktop) based
   * Full WebGL support and auto canvas fallback
   
## Documentations

- [Getting Started with Cocos2d-JS](http://www.cocos2d-x.org/docs/manual/framework/html5/en)

##Github note

If you fork our github repository or download the package from github, you will need to do some extra tasks:

- Run `frameworks/js-bindings/cocos2d-x/download-deps.py` to download external dependencies for Cocos2d-x
- Run `tools/cocos2d-console/download-bin.py` to download bin files for some cocos2d-console plugins like Google Closure Compiler, JSC Compiler.

Otherwise, you will fail to compile your JSB projects.