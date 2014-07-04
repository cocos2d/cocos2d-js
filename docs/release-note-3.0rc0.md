# Cocos2d-JS v3.0 RC0 release note

<img src="http://www.cocos2d-x.org/attachments/download/1508" height=180> 

Cocos2d-JS is Cocos2d-x engine's javascript version which include Cocos2d-html5 and Cocos2d-x JavaScript Bindings. It support full Cocos2d-x features with a set of simplified javascript friendly APIs.

Cocos2d-JS provides a consistent development experience for whichever platform you want to distribute to, both web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single javascript code base, you can run your game on both web browsers and native platform including Mac OS, Windows, iOS, Android. This will bring your game great opportunities in almost all canals of distribution.

Furthermore, javascript friendly API makes your game development experience a breeze, easy to code, test and distribute. Cocos2d-JS also offers Cocos Console, a script tool, to simplify the creation of projects and let you start coding right away. You can use it to create a new project and publish it to android, iOS, Mac OS or web.

For more informations please see [Cocos2d-JS github site](https://github.com/cocos2d/cocos2d-js)

## Download

- [cocos2d-js-v3.0-rc0.zip](http://www.cocos2d-x.org/filedown/cocos2d-js-v3.0-rc0.zip)
- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0rc0/index.html)
- [Downloadable API Reference](http://www.cocos2d-x.org/filedown/Cocos2d-JS-v3.0-rc0-API.zip)
- [For Web Development Only](http://www.cocos2d-x.org/jsbuilder)

## Highlights

* `cc.AssetsManager` is incredibly improved with multi-thread downloading, download resuming support, compressed file support, possibility to retry failed assets and better progression informations, please refer to [AssetManager document](http://cocos2d-x.org/docs/manual/framework/html5/v3/assets-manager/en).
* Multiplatform Facebook SDK plugin is now a part of plugin-x extension, it support Android, iOS and Web, usage document will be released very soon.
* GUI system `ccui` is refactored with great improvement on performance, usage and maintainbility.
* `cc.Layer` now support bake feature, baked static layer can greatly improve the performance of your game, please refer to [Layer baking document](http://cocos2d-x.org/docs/manual/framework/html5/v3/bake-layer/en).
* An object pool implementation have been proposed in RC0: `cc.pool`, test case shows an important performance enhencement on massive object creations.
* Linux is now supported by Cocos2d-JS with CMake compilation.
* Cocos console supports automatic jsc compilation in release mode.

## More information

Read more about all the new features at [Cocos2d-JS v3.0 RC0 changelog](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0rc0/changelog/en) and [Cocos2d-JS v3.0 RC0 upgrade guide](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0a/upgrade-guide/en)

## Upcoming documents

- Plugin-x iOS integration document
- Facebook plugin usage document
- cc.pool usage document

and more...