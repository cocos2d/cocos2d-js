#Upgrade guide from Cocos2d-JS v3.0 beta to Cocos2d-JS v3.0 RC2

## 0. Upgrade from Cocos2d-JS v2.x to v3.0 beta

If you are still using Cocos2d-html5 or Cocos2d-JSB v2.x, you need to read the previous upgrade guide first : [Upgrade guide from Cocos2d-html5 v2.2.x to Cocos2d-JS v3.0 beta](../../v3.0a/upgrade-guide/en.md)

## 1. Layer baking

In RC0, you can start to bake a layer to a static cache, so that it can be rendered more efficiently.

```
var layer = new cc.Layer();
layer.bake();

// To disable bake
layer.unbake();
```

Detailed informations can be found in [layer baking document](../../../v3.0/bake-layer/en.md)

## 2. Object pool extension: `cc.pool`

An object pool implementation have been proposed in RC0: `cc.pool`, it can helps you to improve your game performance for objects which need frequent release and recreate operations

Some common use case is :
    - Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)
    - Blocks in Candy Crash (massive creation and recreation)
    - etc...

When you no longer need an object and hope that it can be reused, you can add it to the object pool with `cc.pool.putInPool(obj)`.

```
layer.removeChild(sprite);
cc.pool.putInPool(sprite);
```

When you want to retrieve an object from object pool, you can use `cc.pool.getFromPool()`.

```
cc.pool.getFromPool(cc.Sprite, "a.png");
```

You can check whether there is objects available in the pool for a given class with `cc.pool.hasObj(cc.Sprite)`.

You can also clean the pool and release all objects with `cc.pool.drainAllPool()`.

## 3. New easing functions

We added a bunch of new easing functions listing below: 

```
cc.easeBezierAction(p0, p1, p2, p3) // Have issues in JSB
cc.easeQuadraticActionIn()
cc.easeQuadraticActionOut()
cc.easeQuadraticActionInOut()
cc.easeQuarticActionIn()
cc.easeQuarticActionOut()
cc.easeQuarticActionInOut()
cc.easeQuinticActionIn()
cc.easeQuinticActionOut()
cc.easeQuinticActionInOut()
cc.easeCircleActionIn()
cc.easeCircleActionOut()
cc.easeCircleActionInOut()
cc.easeCubicActionIn()
cc.easeCubicActionOut()
cc.easeCubicActionInOut()
```

Just for a remindment, the new API for using an easing action is `action.easing(cc.easeQuadraticActionIn())`.

## 4. jsb namespace

We added jsb namespace to contain all jsb only APIs:

```
cc.fileUtils        -->     jsb.fileUtils
cc.Reflection       -->     jsb.Reflection
cc.AssetsManager    -->     jsb.AssetsManager
```

And some new functions have been bound to `jsb.fileUtils`:

```
jsb.fileUtils.getSearchPaths()
jsb.fileUtils.setSearchPaths(paths)
jsb.fileUtils.getSearchResolutionsOrder()
jsb.fileUtils.setSearchResolutionsOrder(orders)
jsb.fileUtils.addSearchResolutionsOrder(order)
```

## 5. ccui.Widget

ccui.Widget's boundary functions have been renamed.

```
getLeftInParent     -->     getLeftBoundary
getBottomInParent   -->     getBottomBoundary
getRightInParent    -->     getRightBoundary
getTopInParent      -->     getTopBoundary
```

We also added `getContentSize` and `setContentSize` to `ccui.Widget`, so that it can share the same usage with `cc.Node`.

## 6. Other API modifications

### 6.1 cc.FadeIn

```
cc.FadeIn.create(duration, toOpacity)   -->     cc.FadeIn.create(duration)
```

### 6.2 Formatted string in cc.log

```
var str = "The number is";
var number = cc.random0To1() * 10;
cc.log("%s : %d", str, number);
```

### 6.3 cc.AssetsManager

In RC0, you can restart failed download with `downloadFailedAssets` function, and other great improvement can be found in upgraded [Assets manager document](../../../v3/assets-manager/en.md)

### 6.4 Affine transform util functions **[New in RC2]**

To adapte our naming protocole, we have renamed all affine transform functions, here is the list:

```
cc.AffineTransformMake              ->  cc.affineTransformMake
cc.PointApplyAffineTransform        ->  cc.pointApplyAffineTransform
cc._PointApplyAffineTransform       ->  cc._pointApplyAffineTransform
cc.SizeApplyAffineTransform         ->  cc.sizeApplyAffineTransform
cc.AffineTransformMakeIdentity      ->  cc.affineTransformMakeIdentity
cc.AffineTransformIdentity          ->  cc.affineTransformIdentity
cc.RectApplyAffineTransform	        ->  cc.rectApplyAffineTransform
cc._RectApplyAffineTransformIn      ->  cc._rectApplyAffineTransformIn
cc.AffineTransformTranslate         ->  cc.affineTransformTranslate
cc.AffineTransformScale             ->  cc.affineTransformScale
cc.AffineTransformRotate            ->  cc.affineTransformRotate
cc.AffineTransformConcat            ->  cc.affineTransformConcat
cc.AffineTransformEqualToTransform  ->  cc.affineTransformEqualToTransform
cc.AffineTransformInvert            ->  cc.affineTransformInvert
```

### 6.5 cc.RenderTexture **[New in RC2]**

```
cc.RenderTexture.beginWithClear(r, g, b, a, depthValue, stencilValue)
```

`cc.RenderTexture`'s `beginWithClear` function now start to accept color value from 0-255 for `r`, `g`, `b`, `a` parameters, please stop to use float value parameters.

### 6.6 cc.sys.platform **[New in RC2]**

Added `cc.sys.platform` for detecting target platform.

### 6.7 [JSB]console.log **[New in RC2]**

Bound `console.log` function for JSB.