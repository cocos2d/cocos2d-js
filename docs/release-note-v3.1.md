# Cocos2d-JS v3.1 release note

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS is Cocos2d-x engine's JavaScript version that includes Cocos2d-html5 and Cocos2d-x JavaScript Bindings. It equips your game with cross-browser and cross-platform abilities, accompanied by full Cocos2d-x features and simplified JavaScript friendly APIs.

Cocos2d-JS reinvented workflows for all platforms in v3.x, it provides a consistent development experience for whichever platform you want to distribute to, no matter web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single JavaScript code base, you can run your game on all web browsers and native platforms including Mac OS, Windows, iOS and Android. This will bring your game great opportunities in almost all channels of distribution. On the other hand, if you are only interested in casual games on the web, you can embed directly in your web page the Cocos2d-JS Lite Version which is extremely easy to use and light as a feather.

In addition, Cocos2d-JS v3.x is super powerful along with all these cool new features: Editors Support, Assets Manager, Object Pool, JS to Objective-C/JAVA reflection, etc.

One more thing, Facebook Integration for Cocos2d-JS have brought a huge opportunity for game developers who want to integrate Facebook functionality into their games. With a single code base, they can release fully cross-platform games across Facebook Canvas, iOS and Android.

## Highlights

* Released Facebook Integration for Cocos2d-JS v1.0, its APIs have been significantly polished and stablized. Improved test cases for Facebook with more features demonstrated. Refer to the [API reference document](http://cocos2d-x.org/docs/manual/framework/html5/facebook-sdk/api-reference/en) for more details.
* Refactorization of the web engine with new renderer architecture, the new renderer has brought a great performance boost on Web engine.
* Upgraded Cocos2d-x to v3.3rc0.
* Supported Cocos Studio v2.0 including Timeline animation support and proto buffers format support for both web engine and JSB engine.
* Automatically enabled WebGL on iOS 8 safari, the performance is incredibly enhanced compare to Canvas render mode.

## Workflows

- Cross platforms developers can use Cocos Console to create projects, boost their development with web version engine and deploy games onto all native platforms and all browsers with Cocos Console.

- Casual web game developers can download the Lite Version and start to develop just like using other web frameworks (e.g. jQuery).

![](workflows.jpg)

## Notice

For JSB build, there are some restrictions :

- [Android build] NDK version must be r9d
- [iOS build] Xcode version must be 5.1.1 +
- [Web code obfuscation] JRE or JDK version must be 1.6 or 1.7

## Download

- [Cocos2d-JS v3.1](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.1.zip)
- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-API.zip)
- [Online test cases](http://cocos2d-x.org/js-tests/)

## More information

Read more about all the features and bug fixes

- [Cocos2d-JS v3.1 changelog](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.1/changelog/en)
- [Cocos2d-JS v3.1 upgrade guide](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/upgrade-guide/en)

## Upgrade your project from previous versions

If you want to upgrade your game based on v3.0 previous version to the 3.1 version, you should follow these steps:

1. Download the Cocos2d-JS v3.1 package.
2. Upgrade cocos command with `setup.py`.
3. Create a new project with `cocos new` command.
4. Replace the "src", "res", "index.html", "project.json", "main.js" etc with your old project.
5. Then you may need to refer to the upgrade guide to solve some API change issues.

## About Cocos2d family

- Cocos2d-JS v3.1 uses Cocos2d-x v3.3rc0 as base of JSB solution
- Cocos2d-JS v3.1 is compatible with Cocos Code IDE v1.0
- Cocos2d-JS v3.1 is compatible with Cocos Studio v1.2 - v2.0

With any problems you might have, our communities are happy to help:

- [Online forum](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [Document root](http://cocos2d-x.org/docs/manual/framework/html5/en)
- [Github repository](https://github.com/cocos2d/cocos2d-js)