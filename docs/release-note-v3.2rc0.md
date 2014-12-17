# Cocos2d-JS v3.2 RC0 release note

<img src="http://files.cocos2d-x.org/images/orgsite/logo.png" height=180> 

Cocos2d-JS is Cocos2d-x engine's JavaScript version that includes Cocos2d-html5 and Cocos2d-x JavaScript Bindings. It equips your game with cross-browser and cross-platform abilities, accompanied by full Cocos2d-x features and simplified JavaScript friendly APIs.

Cocos2d-JS reinvented workflows for all platforms in v3.x, it provides a consistent development experience for whichever platform you want to distribute to, no matter web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single JavaScript code base, you can run your game on all web browsers and native platforms including Mac OS, Windows, iOS and Android. This will bring your game great opportunities in almost all channels of distribution. On the other hand, if you are only interested in casual games on the web, you can embed directly in your web page the Cocos2d-JS Lite Version which is extremely easy to use and light as a feather.

In addition, Cocos2d-JS v3.x is super powerful along with all these cool new features: Editors Support, Assets Manager, Object Pool, JS to Objective-C/JAVA reflection, etc.

One more thing, Facebook Integration for Cocos2d-JS have brought a huge opportunity for game developers who want to integrate Facebook functionality into their games. With a single code base, they can release fully cross-platform games across Facebook Canvas, iOS and Android.

## Highlights

* Refactoration of web engine by separating the render logic, the arthictecture level refactoration is now completed and brounght great performance improvement, especially on mobile browsers.
* Refactoration of web engine's resolution adaptation and audio engine with polyfilled adaptation logics for different devices and browsers. This ensures better compatibility and better extensibility for future needs.
* Supported modulization for JSB, developers can comment out the bindings registration code then the corresponded module will be excluded in the final package. Minimum package size for android is now 4.4mb. The usage is described in the upgrade guide.
* Added restart game feature and fixed crutial bugs in AssetsManager, developers can now easily update assets and scripts, new scripts can take effect directly with a restart.
* Bound all missed chipmunk API in JSB, this greatly improved physics game support in Cocos2d-JS.

## Notice

For JSB build, there are some restrictions :

- [Android build] Suggested NDK version is r10c, if you don't need Android 5.0 compatibility, you can also use r9d, other NDKs are not supported.
- [iOS build] Xcode version must be 5.1.1 +
- [Web code obfuscation] JRE or JDK version must be 1.6 or 1.7

## Download

- [Cocos2d-JS v3.2 RC0](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.2-rc0.zip)
- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0/index.html)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.2-RC0-API.zip)
- [Online test cases](http://cocos2d-x.org/js-tests/)

## Workflows

- Cross platforms developers can use Cocos Console to create projects, boost their development with web version engine and deploy games onto all native platforms and all browsers with Cocos Console.

- Casual web game developers can download the Lite Version and start to develop just like using other web frameworks (e.g. jQuery).

![](../../v3.0/release-note/workflows.jpg)

## More information

Read more about all the features and bug fixes

- [Cocos2d-JS v3.2 RC0 changelog](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.2rc0/changelog/en)
- [Cocos2d-JS v3.2 RC0 upgrade guide](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.2rc0/upgrade-guide/en)

## Upgrade your project from previous versions

If you want to upgrade your game based on v3.0 previous version to the v3.2 RC0 version, you should follow these steps:

1. Download the Cocos2d-JS v3.2 RC0 package.
2. Upgrade cocos command with `setup.py`.
3. Create a new project with `cocos new` command.
4. Replace the "src", "res", "index.html", "project.json", "main.js" etc with your old project.
5. Then you may need to refer to the upgrade guide to solve some API change issues.

## About Cocos2d family

- Cocos2d-JS v3.2 RC0 uses Cocos2d-x v3.3rc1 as base of JSB solution
- Cocos2d-JS v3.2 is compatible with Cocos Code IDE v1.1.0
- Cocos2d-JS v3.2 is compatible with Cocos Studio v1.2 - v1.6, Cocos Studio 2 support have been removed because flat buffer binary file can't be parsed in JS, we will support Cocos Studio 2 in v3.3 with a JSON format parser.

With any problems you might have, our communities are happy to help:

- [Online forum](http://discuss.cocos2d-x.org/category/cocos2d-x/javascript)
- [Document root](http://cocos2d-x.org/wiki/Cocos2d-JS)
- [Github repository](https://github.com/cocos2d/cocos2d-js)