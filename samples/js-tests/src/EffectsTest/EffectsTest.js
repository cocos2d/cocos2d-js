/****************************************************************************

 http://www.cocos2d-html5.org
 http://www.cocos2d-iphone.org
 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


var effectsTestSceneIdx = -1;

//
// Base Layer
//

var EffecstsBaseLayer = BaseTestLayer.extend({

    code:function () {
        return "";
    },

    // callbacks
    onRestartCallback:function (sender) {
        var s = new EffectsTestScene();
        s.addChild(restartEffectsTest());
        director.replaceScene(s);
    },
    onNextCallback:function (sender) {
        var s = new EffectsTestScene();
        s.addChild(nextEffectsTest());
        //director.replaceScene(cc.TransitionZoomFlipX.create(5, s));
        director.replaceScene(s);
    },
    onBackCallback:function (sender) {
        var s = new EffectsTestScene();
        s.addChild(previousEffectsTest());
        director.replaceScene(s);
    },
    onEnter:function () {
       this._super();


        var node = cc.NodeGrid.create();
        node.runAction( this.getEffect(3) );
        this.addChild( node );

        // back gradient
        var gradient = cc.LayerGradient.create( cc.c4b(0,0,0,255), cc.c4b(98,99,117,255));
        node.addChild( gradient );

        // back image
        var bg = cc.Sprite.create(s_back3);
        bg.setPosition( cc._p( winSize.width/2, winSize.height/2) );
        node.addChild( bg );

        var sister1 = cc.Sprite.create(s_pathSister1);
        sister1.setPosition( cc._p( winSize.width/3, winSize.height/2 ) );
        node.addChild( sister1, 1 );

        var sister2 = cc.Sprite.create(s_pathSister2);
        sister2.setPosition( cc._p( winSize.width*2/3, winSize.height/2 ) );
        node.addChild( sister2, 1 );

        var sc = cc.ScaleBy.create(2, 5);
        var sc_back = sc.reverse();
        var seq = cc.Sequence.create( sc, sc_back );
        var repeat = cc.RepeatForever.create( seq );

        sister1.runAction( repeat );
        sister2.runAction( repeat.clone() );
    },

    getEffect:function(duration) {
        // override me
        return cc.MoveBy.create(2, cc._p(10,10) );
    },

    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfEffectsTest.length-1) - effectsTestSceneIdx );
    },

    getTestNumber:function() {
        return effectsTestSceneIdx;
    }

});

//------------------------------------------------------------------
//
// Tests
//
//------------------------------------------------------------------
var Shaky3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Shaky 3D";
    },
    code:function () {
        return "a = cc.Shaky3D.create(duration, gridSize, range, shakeZ)";
    },
    getEffect:function(duration) {
        return cc.Shaky3D.create( duration, cc.size(15,10), 5, false );
    }
});

var Waves3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Waves 3D";
    },
    code:function () {
        return "a = cc.Waves3D.create(duration, gridSize, range, shakeZ)";
    },
    getEffect:function(duration) {
        return cc.Waves3D.create(duration, cc.size(15,10), 5, 40 );
    }
});

var FlipXTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FlipX3D";
    },
    code:function () {
        return "a = cc.FlipX3D.create(duration )";
    },
    getEffect:function(duration) {
        var a = cc.FlipX3D.create(duration );
        var delay = cc.DelayTime.create(2);
        var r = a.reverse();
        return cc.Sequence.create( a, delay, r );
    }
});

var FlipYTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FlipY3D";
    },
    code:function () {
        return "a = cc.FlipY3D.create(duration )";
    },
    getEffect:function(duration) {
        var a = cc.FlipY3D.create(duration );
        var delay = cc.DelayTime.create(2);
        var r = a.reverse();
        return cc.Sequence.create( a, delay, r );
    }
});

var Lens3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Lens3D";
    },
    code:function () {
        return "a = cc.Lens3D.create(duration, gridSize, position, radius)";
    },
    getEffect:function(duration) {
        return cc.Lens3D.create( duration, cc.size(15,10), cc._p(winSize.width/2, winSize.height/2), 240);
    }
});

var Ripple3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Ripple3D";
    },
    code:function () {
        return "a = cc.Ripple3D.create(duration, gridSize, position, radius, waves, amplitude)";
    },
    getEffect:function(duration) {
        return cc.Ripple3D.create( duration, cc.size(32,24), cc._p(winSize.width/2, winSize.height/2), 240, 4, 160);
    }
});

var LiquidTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Liquid";
    },
    code:function () {
        return "a = cc.Liquid.create(duration, gridSize, waves, amplitude)";
    },
    getEffect:function(duration) {
        return cc.Liquid.create( duration, cc.size(16,12), 4, 20);
    }
});

var WavesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Waves";
    },
    code:function () {
        return "a = cc.Waves.create(duration, gridSize, waves, amplitude, horizontal, vertical)";
    },
    getEffect:function(duration) {
        return cc.Waves.create( duration, cc.size(16,12), 4, 20, true, true);
    }
});

var TwirlTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Twirl";
    },
    code:function () {
        return "a = cc.Twirl.create(duration, gridSize, position, twirls, amplitude)";
    },
    getEffect:function(duration) {
        return cc.Twirl.create( duration, cc.size(12,8), cc.p(winSize.width/2, winSize.height/2), 1, 2.5);
    }
});

var ShakyTiles3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "ShakyTiles3D";
    },
    code:function () {
        return "a = cc.ShakyTiles3D.create(duration, gridSize, range, shakeZ)";
    },
    getEffect:function(duration) {
        return cc.ShakyTiles3D.create( duration, cc.size(16,12), 5, false);
    }
});

var ShatteredTiles3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "ShatteredTiles3D";
    },
    code:function () {
        return "a = cc.ShatteredTiles3D.create(duration, gridSize, range, shatterZ)";
    },
    getEffect:function(duration) {
        return cc.ShatteredTiles3D.create( duration, cc.size(16,12), 5, false);
    }
});

var ShuffleTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "ShuffleTiles";
    },
    code:function () {
        return "a = cc.ShuffleTiles.create(duration, gridSize, seed)";
    },
    getEffect:function(duration) {
        var action =  cc.ShuffleTiles.create( duration, cc.size(16,12), 25);
        var delay = cc.DelayTime.create(2);
        var back = action.reverse();
        var seq = cc.Sequence.create( action, delay, back);
        return seq;
    }
});

var FadeOutTRTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FadeOutTRTilesTest";
    },
    code:function () {
        return "a = cc.FadeOutTRTiles.create(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action =  cc.FadeOutTRTiles.create( duration, cc.size(16,12));
        var delay = cc.DelayTime.create(0.5);
        var back = action.reverse();
        var seq = cc.Sequence.create( action, delay, back);
        return seq;
    }
});

var FadeOutBLTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FadeOutBLTilesTest";
    },
    code:function () {
        return "a = cc.FadeOutBLTiles.create(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action = cc.FadeOutBLTiles.create( duration, cc.size(16,12));
        var delay = cc.DelayTime.create(0.5);
        var back = action.reverse();
        var seq = cc.Sequence.create( action, delay, back);
        return seq;
    }
});

var FadeOutUpTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FadeOutUpTilesTest";
    },
    code:function () {
        return "a = cc.FadeOutUpTiles.create(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action = cc.FadeOutUpTiles.create( duration, cc.size(16,12));
        var delay = cc.DelayTime.create(0.5);
        var back = action.reverse();
        var seq = cc.Sequence.create( action, delay, back);
        return seq;
    }
});

var FadeOutDownTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FadeOutDownTilesTest";
    },
    code:function () {
        return "a = cc.FadeOutDownTiles.create(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action = cc.FadeOutDownTiles.create( duration, cc.size(16,12));
        var delay = cc.DelayTime.create(0.5);
        var back = action.reverse();
        var seq = cc.Sequence.create( action, delay, back);
        return seq;
    }
});

var TurnOffTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "TurnOffTiles";
    },
    code:function () {
        return "a = cc.TurnOffTiles.create(duration, gridSize, seed)";
    },
    getEffect:function(duration) {
        var action = cc.TurnOffTiles.create( duration, cc.size(48,32), 25);
        var delay = cc.DelayTime.create(0.5);
        var back = action.reverse();
        var seq = cc.Sequence.create( action, delay, back);
        return seq;
    }
});

var WavesTiles3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "WavesTiles3D";
    },
    code:function () {
        return "a = cc.WavesTiles3D.create(duration, gridSize, waves, amplitude)";
    },
    getEffect:function(duration) {
        var action = cc.WavesTiles3D.create( duration, cc.size(16,12), 4, 120);
        return action;
    }
});


var JumpTiles3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "JumpTiles3D";
    },
    code:function () {
        return "a = cc.JumpTiles3D.create(duration, gridSize, jumps, amplitude)";
    },
    getEffect:function(duration) {
        var action = cc.JumpTiles3D.create( duration, cc.size(16,12), 2, 30);
        return action;
    }
});

var SplitRowsTest = EffecstsBaseLayer.extend({
    title:function () {
        return "SplitRows";
    },
    code:function () {
        return "a = cc.SplitRows.create(duration, rows)";
    },
    getEffect:function(duration) {
        var action = cc.SplitRows.create( duration, 9);
        var delay = cc.DelayTime.create(0.5);
        var back = action.reverse();
        var seq = cc.Sequence.create( action, delay, back);
        return seq;
    }
});

var SplitColsTest = EffecstsBaseLayer.extend({
    title:function () {
        return "SplitCols";
    },
    code:function () {
        return "a = cc.SplitCols.create(duration, cols)";
    },
    getEffect:function(duration) {
        var action = cc.SplitCols.create( duration, 9);
        var delay = cc.DelayTime.create(0.5);
        var back = action.reverse();
        var seq = cc.Sequence.create( action, delay, back);
        return seq;
    }
});

var PageTurn3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "PageTurn3D";
    },
    code:function () {
        return "a = cc.PageTurn3D.create(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action = cc.PageTurn3D.create( duration, cc.size(15,10));
        return action;
    }
});

//
// Order of tests
//
var EffectsTestScene = TestScene.extend({
    runThisTest:function () {
        effectsTestSceneIdx = -1;
        var layer = nextEffectsTest();
        this.addChild(layer);

        director.replaceScene(this);
    }
});

//
// Flow control
//
var arrayOfEffectsTest = [
    Shaky3DTest,
    Waves3DTest,
    FlipXTest,
    FlipYTest,
    Lens3DTest,
    Ripple3DTest,
    LiquidTest,
    WavesTest,
    TwirlTest,
    ShakyTiles3DTest,
    ShatteredTiles3DTest,
    ShuffleTilesTest,
    FadeOutTRTilesTest,
    FadeOutBLTilesTest,
    FadeOutUpTilesTest,
    FadeOutDownTilesTest,
    TurnOffTilesTest,
    WavesTiles3DTest,
    JumpTiles3DTest,
    SplitRowsTest,
    SplitColsTest,
    PageTurn3DTest
];

var nextEffectsTest = function () {
    effectsTestSceneIdx++;
    effectsTestSceneIdx = effectsTestSceneIdx % arrayOfEffectsTest.length;

    return new arrayOfEffectsTest[effectsTestSceneIdx]();
};
var previousEffectsTest = function () {
    effectsTestSceneIdx--;
    if (effectsTestSceneIdx < 0)
        effectsTestSceneIdx += arrayOfEffectsTest.length;

    return new arrayOfEffectsTest[effectsTestSceneIdx]();
};
var restartEffectsTest = function () {
    return new arrayOfEffectsTest[effectsTestSceneIdx]();
};
