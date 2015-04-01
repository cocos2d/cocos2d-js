# Cocos2d-JS v3.5 release note

<img src="http://files.cocos2d-x.org/images/orgsite/logo.png" height=180> 

Cocos2d-JS is Cocos2d-x engine's JavaScript version that includes Cocos2d-html5 and Cocos2d-x JavaScript Bindings. It equips your game with cross-browser and cross-platform abilities, accompanied by full Cocos2d-x features and simplified JavaScript friendly APIs.

Cocos2d-JS reinvented workflows for all platforms in v3.x, it provides a consistent development experience for whichever platform you want to distribute to, no matter web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single JavaScript code base, you can run your game on all web browsers and native platforms including Mac OS, Windows, iOS and Android. This will bring your game great opportunities in almost all channels of distribution. On the other hand, if you are only interested in casual games on the web, you can embed directly in your web page the Cocos2d-JS Lite Version which is extremely easy to use and light as a feather.

In addition, Cocos2d-JS v3.x is super powerful along with all these cool new features: Editors Support, Assets Manager, Object Pool, JS to Objective-C/JAVA reflection, etc.

One more thing, Facebook Integration for Cocos2d-JS have brought a huge opportunity for game developers who want to integrate Facebook functionality into their games. With a single code base, they can release fully cross-platform games across Facebook Canvas, iOS and Android.

## Version notice

The version v3.4 is renamed to v3.5, because we have upgraded the internal Cocos2d-x to v3.5 and we don't want our user to get confused about the version mapping between Cocos2d-JS and Cocos2d-x.

## Highlights

* 3D feature ready! Bound 3D modules including camera, light, sprite 3d, animation 3d, billboard, 3D particle system with Particle Universe etc.
* Supported Cocos Studio 2.2 3D scene editing.
* Windows Phone 8.0 and Windows Universal support are finally ready! Thanks to the contribution from Microsoft.
* Upgraded SpiderMonkey to v33, greatly improved JavaScript memory management and performance.
* Supported latest version of Spine editor.
* Continuously improved web engine performance.

## Notice

For JSB build, there are some restrictions :

- [Android build] Suggested NDK version is r10c +, if you don't need Android 5.0 compatibility, you can also use r9d, other NDKs are not supported.
- [iOS build] Xcode version must be 5.1.1 +
- [Web code obfuscation] JRE or JDK version must be 1.6+

## Download

- [Cocos2d-JS v3.5](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.5.zip)
- [Cocos2d-JS Lite Version](http://cocos2d-x.org/filecenter/jsbuilder/)
- [Cocos Dev Tool](http://h5.cocos.com/static/cocos-devtools/index-en.html)
- [Online API reference](http://www.cocos2d-x.org/wiki/reference/)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.5-API.zip)
- [Online test cases](http://cocos2d-x.org/js-tests/)

## More information

Read more about all the features and bug fixes

- [Cocos2d-JS v3.5 changelog](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.5/changelog/en)
- [Cocos2d-JS v3.5 upgrade guide](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.5/upgrade-guide/en)

## Upgrade your project from previous versions

If you want to upgrade your game based on v3.0 previous version to the v3.5, you should follow these steps:

1. Download the Cocos2d-JS v3.5 package.
2. Upgrade cocos command with `setup.py`.
3. Create a new project with `cocos new` command.
4. Replace the "src", "res", "index.html", "project.json", "main.js" etc with your old project.
5. Then you may need to refer to the upgrade guide to solve some API change issues.

## About Cocos2d family

- Cocos2d-JS v3.5 uses Cocos2d-x v3.5 as base of JSB solution.
- Cocos2d-JS v3.5 uses SpiderMonkey v33 as builtin JavaScript engine.
- Cocos2d-JS v3.5 is compatible with Cocos Code IDE v1.2.0.
- Cocos2d-JS v3.5 is compatible with Cocos Studio v1.2 - v1.6 and Cocos Studio 2.1+..

With any problems you might have, our communities are happy to help:

- [Online forum](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [Document root](http://cocos2d-x.org/wiki/Cocos2d-JS)
- [Github repository](https://github.com/cocos2d/cocos2d-js)
- [Issue tracker](https://github.com/cocos2d/cocos2d-js/issues)