# cocos2d JavaScript tests and games

These tests and games are shared by the following projects:

  - [cocos2d-html5](http://www.cocos2d-html5.org)
  - [cocos2d-x](http://www.cocos2d-x.org)
  - [cocos2d-iphone](http://www.cocos2d-iphone.org)

If you modify the a test, please test it with all the projects to ensure 100% API compatibility between all the projects.

# Tests #


![cocos2d JS tests](https://lh4.googleusercontent.com/-BKnI0dmMjn0/ULVSA8rPnYI/AAAAAAAAqWU/jy2cL6ZzuHA/s400/Screen%2520Shot%25202012-11-27%2520at%25203.48.56%2520PM.png)

## Running the tests and games ##

### For cocos2d-html5 ###

```shell
$ git clone git://github.com/cocos2d/cocos2d-html5.git
$ cd cocos2d-html5
$ git submodule update --init
$ python -m SimpleHTTPServer
```
... and run a brower and open it in `localhost:8000/samples`

### For cocos2d-iphone ###

```shell
$ git clone git://github.com/cocos2d/cocos2d-iphone.git
$ cd cocos2d-iphone
$ git checkout develop-v2
$ git submodule update --init
$ open cocos2d-tests-ios.xcodeproj
```
- Select the "JS Test" scheme in Xcode
- Run it

![Xcode JS-Tests](https://lh4.googleusercontent.com/-qK1AiPbVggI/UIgeykWN1rI/AAAAAAAAqHA/hBegMW0VTkE/s800/Xcode_jstests.png)

### For cocos2d-x ###

```shell
$ git clone git://github.com/cocos2d/cocos2d-x.git
$ cd cocos2d-x
$ git checkout gles20
$ git submodule update --init
```

#### run on iOS ####

```shell
$ open samples/Javascript/TestJavascript/proj.ios/TestJavascript.xcodeproj
```
- Select the "TestJavascript" scheme in Xcode
- Run it

#### run on Android ####

- Install Android NDK developement environment
- Define environment variable "NDK_ROOT" which means the directory NDK installed in
- Run the following command

```shell
$ cd Samples/TestJavascript/proj.android
$ ./build.native.sh
```

- Import android projects into Eclipses and run, please refer to http://www.cocos2d-x.org/projects/cocos2d-x/wiki/How_to_build_and_run_HelloWorld_on_Android(gles20_branch)

### Generating Published files ###

Before running _Crystal Craze_ and _Cocos Dragon_, you need to open the CocosBuilder project file and press _publish_.

1. Open the `CrystalCraze.ccbproj` file with CocosBuilder  (located here: [games/CrystalCraze/CrystalCraze.ccbproj](https://github.com/cocos2d/cocos2d-js-tests/blob/master/games/CrystalCraze/CrystalCraze.ccbproj) )
2. `CocosBuilder` -> `File` ->  `Publish`
3. Repeat those steps for CocosDragon


## Automated tests ##

Automated tests are not ready yet.  In the meantime use the obsolete method of updating the following spreadsheet:

- [cocos2d JS tests](https://docs.google.com/spreadsheet/ccc?key=0AtMnlkzywt1zdHlZcVZQZlp6RHhZd0lHcGtleXV4aUE#gid=1)

## Multiplatform ##

__Code once, run everywhere.__
These tests can be run unmodified in the following platforms:

  - In any browser ( with _cocos2d-html5_ )
  - iOS ( with _cocos2d-x / cocos2d-iphone_ + _JS Bindings_)
  - Android ( with _cocos2d-x_ + _JS Bindings_ )
  - Mac ( with _cocos2d-iphone_ + _JS Bindings_ )

# Games #

## Crystal Craze ##

![Crystal Craze](https://lh4.googleusercontent.com/-TAnlgBRRZ7Y/UQcU0eAzpbI/AAAAAAAAryY/xbIneibhMH4/s400/Screen%2520Shot%25202013-01-28%2520at%25204.15.12%2520PM.png)

It is a simple puzzle game. It uses:

  * CocosBuilder
  * cocos2d

__Play it online: [Web version](http://www.cocos2d-iphone.org/t/js-tests/games/CrystalCraze/Published-HTML5/)__

Licensed under MIT.
  
## Watermelon with Me ##

![Watermelon With Me](https://lh6.googleusercontent.com/-P4-hvCiDGP8/ULVSBBtYluI/AAAAAAAAqWY/wZv4vsFQw1M/s400/Screen%2520Shot%25202012-11-27%2520at%25203.49.36%2520PM.png)

It is a simple physics game. It uses:

  * cocos2d
  * Chipmunk
  * CocosBuilder

__Play it online: [Web version](http://www.cocos2d-iphone.org/t/js-tests/games/WatermelonWithMe/)__

Licensed under MIT.

  
## CocosDragon ##

![CocosDragon](https://lh3.googleusercontent.com/-bu3ANISoS6Y/ULVSBhFXkfI/AAAAAAAAqWc/GFcDwB6iO04/s400/Screen%2520Shot%25202012-11-27%2520at%25203.49.52%2520PM.png)

It is a simple _platformer_ game. It uses:

  * cocos2d
  * CocosBuilder

__Play it online: [Web version](http://www.cocos2d-iphone.org/t/js-tests/games/CocosDragonJS/Published%20files%20HTML5/)__

Licensed under MIT.

## Moon Warriors ##

![Moon Warriors](https://lh5.googleusercontent.com/-Lov8RC1s5xc/ULVSBwWg8II/AAAAAAAAqWg/cwY_JRbYX8U/s400/Screen%2520Shot%25202012-11-27%2520at%25203.50.37%2520PM.png)

It is a simple shooter game. It uses:

 * cocos2d

__Play it online: [Web version](http://www.cocos2d-iphone.org/t/js-tests/games/MoonWarriors/)__
 
Art and audio is copyrighted by Enigmata Genus Revenge, you may not use any copyrighted material without permission.

This showcase is licensed under GPL

### Authors ###

   * Programmer: Shengxiang Chen, Dingping Lv
   * Effects animation: Hao Wu
   * Quality Assurance:  Shun Lin

### Website ###

   * HTML5China: [bbs.html5china.com][1]
   * Cocos2d-html5: [www.cocos2d-x.org][2]

   [1]: http://bbs.html5china.com/forum-cocos2d_html5-1.html "HTML5China"
   [2]: http://www.cocos2d-x.org "Cocos2d-html5"
   [3]: http://www.cocos2d-x.org/MoonWarriors/index.html "MoonWarriors"


