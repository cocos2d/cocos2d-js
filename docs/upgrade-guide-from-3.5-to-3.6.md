#Upgrade guide from Cocos2d-JS v3.5 to Cocos2d-JS v3.6

## 0. Upgrade to Cocos2d-JS v3.5

If you are still using Cocos2d-html5 or previous version of Cocos2d-JS, you may need to read the previous upgrade guides first : [Historic upgrade guides](../../en.md)

## 1. [Native Exclusive] New 3D features

We have bound two new 3D features to JSB, the skybox and the terrain. Please note that they are native engine exclusive features, you can not use 3D classes in the web engine. We are not planning to support 3D for the web in the near future.

New 3D classes or objects are listed here:

```
jsb.Terrain
jsb.TextureCube
jsb.Skybox
```

To know how to use the new 3D modules, please refer to the following documents:

- Cocos [3d module's API reference](http://www.cocos2d-x.org/reference/native-cpp/V3.5/dir_0cec398151724e9e1c180a4e8f99801b.html)
- Cocos [Camera API reference](http://www.cocos2d-x.org/reference/native-cpp/V3.5/d6/d2b/classcocos2d_1_1_camera.html)
- Cocos [Light API reference](http://www.cocos2d-x.org/reference/native-cpp/V3.5/d2/d85/classcocos2d_1_1_base_light.html)
- Test cases in the Cocos2d-JS v3.6 package, run it with projects in `build` folder or using `cocos run` command under `samples/js-tests` folder. You can refer to the following test cases:
    - BillBoardTest: source code in `samples/js-tests/src/BillBoardTest`.
    - Camera3DTest: source code in `samples/js-tests/src/Camera3DTest`.
    - LightTest: source code in `samples/js-tests/src/LightTest`.
    - Sprite3DTest (include Skybox test): source code in `samples/js-tests/src/Sprite3DTest`.
    - TerrainTest: source code in `samples/js-tests/src/TerrainTest`.
- Cocos2d-JS v3.5 ported [FantasyWarriors 3D source code](https://github.com/joshuastray/fantasywarrior)

## 2. New API `cc.sys.isObjectValid`

We have provided a new API : `cc.sys.isObjectValid` for detecting whether an object is still valid. The detection is different for web engine and native engine.

```
var valid = cc.sys.isObjectValid(object);
```

In the web engine, the object is valid as long as it's not `null` or `undefined`. 

In native engine, this API will return true if the JS object and the correspond native object are both valid. Our developers always complain about `Invalid Native Object` error, well, this is because in the native engine, a bound cocos object reference to a JavaScript object and a Native C++ object. JavaScript objects' life cycle is automatically managed by JavaScript garbage collection mechanism, while the native objects' life cycle is managed by Cocos2d reference count system. So it's possible that an object's JavaScript reference still exist, but its C++ reference may already be released in the native environment. At this point, if your code try to access to the native methods of this object, it will report `Invalid Native Object` error.

This new API can help you out to detect whether an object have been released in runtime, it's useful for avoiding potential issues and especially useful for debugging and finding out the real issue in your code.

## 3. Cocos Console support output directory

In the new version, Cocos Console support fully output directory with `-o` option.

```
cocos compile -p web -m release -o ../www_released/
```

This command can publish the web version to `../www_released/` folder. It accepts both relative path and absolute path.