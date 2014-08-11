# Cocos2d-JS v3.0 RC2 release note

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS is Cocos2d-x engine's javascript version which include Cocos2d-html5 and Cocos2d-x JavaScript Bindings. It support full Cocos2d-x features with a set of simplified javascript friendly APIs.

Cocos2d-JS provides a consistent development experience for whichever platform you want to distribute to, both web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single javascript code base, you can run your game on both web browsers and native platform including Mac OS, Windows, iOS, Android. This will bring your game great opportunities in almost all canals of distribution.

Furthermore, javascript friendly API makes your game development experience a breeze, easy to code, test and distribute. Cocos2d-JS also offers Cocos Console, a script tool, to simplify the creation of projects and let you start coding right away. You can use it to create a new project and publish it to android, iOS, Mac OS or web.

For more informations please see [Cocos2d-JS github site](https://github.com/cocos2d/cocos2d-js)

## Download

- [cocos2d-js-v3.0-rc2.zip](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.0-rc2.zip)
- [For Web Development Only](http://www.cocos2d-x.org/filecenter/jsbuilder)
- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0rc2/index.html)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-rc2-API.zip)
- [Online test cases](http://cocos2d-x.org/js-tests/)

## Highlights

* We announced Facebook SDK for Cocos2d-JS alpha version which is a full featured Facebook SDK which have similar APIs with Facebook Javascript SDK, it supports iOS, Android, Web with the same Javascript level APIs.
* Greatly improved performance and stability of `ccui` widgets, it have been totally refactored in RC0 but it was not so stable and have some compatibility issues, now we fixed all reported bugs in RC2.
* Upgraded armature animation reader and editor readers to support Cocos Studio v1.2 to v1.5.0.1.
* Supported Javascript to Objective-C reflection which permit javascript code to invoke directly Objective-C class static functions.
* Supported remote image loading in JSB so that developers can load online images to a local texture with `cc.loader` and `cc.textureCache`.

## More information

Read more about all the features and bug fixes

- [Cocos2d-JS v3.0 RC2 changelog](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc2/changelog/en)
- [Cocos2d-JS v3.0 RC2 upgrade guide](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/en)

## New documents

- [Objects pool usage document](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/cc-pool/en)
- [Javascript to Objective-C Reflection](http://www.cocos2d-x.org/docs/manual/framework/html5/v3/reflection-oc/en)
- [iOS In App Purchase document](http://www.cocos2d-x.org/docs/manual/framework/html5/jsb/plugin-x/ios-iap/en)

## About Cocos2d family

- Cocos2d-JS v3.0 RC2 uses Cocos2d-x 3.2 final as base of JSB solution
- Cocos2d-JS v3.0 RC2 is compatible with Cocos Code IDE v1.0.0 RC1
- Cocos2d-JS v3.0 RC2 is compatible with Cocos Studio v1.2 - v1.5.0.1

## Notice

If you met any problems, please ask for help from the community : 

- [Online forum](http://discuss.cocos2d-x.org/category/javascript)
- [Document root](http://cocos2d-x.org/docs/manual/framework/html5/en)

For JSB build, there are some restrictions :

- [Android build] NDK version must be between r9b - r9d
- [Android build] Android SDK must contain platform-19+
- [iOS build] Xcode version must be 5.1 or 5.1.1