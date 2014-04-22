# Cocos2d-JS v3.0 alpha2

Cocos2d-JS is Cocos2d-x engine's javascript version which include Cocos2d-html5 and Cocos2d-x JSBinding. It support full Cocos2d-x features with a set of simplified javascript friendly APIs.

Cocos2d-JS provides a consistent development experience for whichever platform you want to distribute to, both web and native. "Code once, run everywhere" is incredibly easy and natural in Cocos2d-JS. With one single javascript code base, you can run your game on both web browsers and native platform including Mac OS, Windows, iOS, Android. This will bring your game great opportunities in almost all canals of distribution.

Furthermore, javascript friendly API makes your game development experience a breeze, easy to code, test and distribute. Cocos2d-JS also offers Cocos Console, a script tool, to simplify the creation of projects and let you start coding right away. You can use it to create a new project and publish it to android, iOS, Mac OS or web.

For more informations please see [Cocos2d-JS github site](https://github.com/cocos2d/cocos2d-js)

## Download

- [cocos2d-js-v3.0-alpha2.zip](http://cdn.cocos2d-x.org/cocos2d-js-v3.0-alpha2.zip)
- [Online API reference](http://www.cocos2d-x.org/reference/html5-js/V3.0alpha2/index.html)
- [Downloadable API reference](http://cdn.cocos2d-x.org/Cocos2d-html5_v3.0_Alpha2_API_Doc.zip)

## Highlights

* **[Alpha2 Feature]** Provide a download page for web developers to choose modules and download customized Cocos2d-JS web engine, in one single file, compressed or not, [Online link](http://www.cocos2d-x.org/jsbuilder).
* **[Alpha2 Feature]** Support `new` operator for engine classes, and permit developer to pass initilization parameters in `ctor` while extend engine classes, [document reference](http://www.cocos2d-x.org/docs/manual/framework/html5/v3.0/inheritance/en)
* Provide a python tool which make the development of Html5 and JSB application much simpler and more convenient, [Cocos Console document](http://www.cocos2d-x.org/docs/manual/framework/html5/cocos-console/en).
* Incredibly simplified game creation process via cc.game which replaced old cc.Application, [cc.game document](http://www.cocos2d-x.org/docs/manual/framework/html5/v3.0/cc-game/en).
* Refactor some properties of all rendering classes with getter setter for providing a new set of Javascript user friendly APIs, and `attr` function is provided for cc.Node to modify multiple properties, [property APIs document](http://www.cocos2d-x.org/docs/manual/framework/html5/v3.0/getter-setter-api/en).
* Add new event manager to cocos2d-html5, all events are dispatched via cc.eventManager with several types of event listener including custom event listener, [event manager document](http://www.cocos2d-x.org/docs/manual/framework/html5/v3.0/eventManager/en).

### More information ###

Read more about all the new features at [Cocos2d-JS v3.0 alpha2 changelog](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0a2/changelog/en) and [Cocos2d-JS v3.0 alpha2 upgrade guide](http://www.cocos2d-x.org/docs/manual/framework/html5/release-notes/v3.0a2/upgrade-guide/en)