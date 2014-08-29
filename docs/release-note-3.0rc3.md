# Cocos2d-JS v3.0 RC3 release note

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS is Cocos2d-x engine's javascript version which include Cocos2d-html5 and Cocos2d-x JavaScript Bindings. It support full Cocos2d-x features with a set of simplified javascript friendly APIs.

Cocos2d-JS provides a consistent development experience for whichever platform you want to distribute to, both web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single javascript code base, you can run your game on both web browsers and native platform including Mac OS, Windows, iOS, Android. This will bring your game great opportunities in almost all canals of distribution.

Furthermore, javascript friendly API makes your game development experience a breeze, easy to code, test and distribute. Cocos2d-JS also offers Cocos Console, a script tool, to simplify the creation of projects and let you start coding right away. You can use it to create a new project and publish it to android, iOS, Mac OS or web.

For more informations please see [Cocos2d-JS github site](https://github.com/cocos2d/cocos2d-js)

## Download

- [cocos2d-js-v3.0-rc3.zip](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.0-rc3.zip)
- [For Web Development Only](http://www.cocos2d-x.org/filecenter/jsbuilder)
- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0rc3/index.html)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-rc3-API.zip)
- [Online test cases](http://cocos2d-x.org/js-tests/)

## Highlights

* Facebook SDK Beta version is released with Cocos2d-JS v3.0 RC3, the parameters for callback functions are unified for all platform. New payment API, AppEvent APIs have also been added to complete the Facebook SDK.
* Greatly improved inline comments for API reference documents.
* Fixed all important known issues for preparing the final release.
* Unified all know incompatible issue between JSB and Html5 engine.
* Unified SpiderMonkey's 32bit and 64bit library to support Xcode 6.

Cocos2d-JS v3.0 RC3 is a candidate release version for v3.0 Final, all features have been added and all important issues have been fixed.

## More information

Read more about all the features and bug fixes

- [Cocos2d-JS v3.0 RC3 changelog](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc3/changelog/en)
- [Cocos2d-JS v3.0 RC3 upgrade guide](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/en)

## New documents

- [Facebook SDK Beta API Reference](./facebook-sdk/api-reference/en.md)
- [Integrate the Facebook SDK Beta for Cocos2d-JS on Android](./facebook-sdk/facebook-sdk-on-android/en.md)
- [Integrate the Facebook SDK Beta for Cocos2d-JS on iOS](./facebook-sdk/facebook-sdk-on-ios/en.md)
- [Integrate the Facebook SDK Beta for Cocos2d-JS on Web](./facebook-sdk/facebook-sdk-on-web/en.md)

## About Cocos2d family

- Cocos2d-JS v3.0 RC3 uses Cocos2d-x 3.2 final as base of JSB solution
- Cocos2d-JS v3.0 RC3 is compatible with Cocos Code IDE v1.0.0 RC1
- Cocos2d-JS v3.0 RC3 is compatible with Cocos Studio v1.2 - v1.5.0.1

## Notice

If you met any problems, please ask for help from the community : 

- [Online forum](http://discuss.cocos2d-x.org/category/javascript)
- [Document root](http://cocos2d-x.org/docs/manual/framework/html5/en)

For JSB build, there are some restrictions :

- [Android build] NDK version must be between r9b - r9d
- [iOS build] Xcode version must be 5.1 +