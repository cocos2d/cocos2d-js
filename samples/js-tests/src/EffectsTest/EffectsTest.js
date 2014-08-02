/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

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
        director.runScene(s);
    },
    onNextCallback:function (sender) {
        var s = new EffectsTestScene();
        s.addChild(nextEffectsTest());
        //director.runScene(cc.TransitionZoomFlipX.create(5, s));
        director.runScene(s);
    },
    onBackCallback:function (sender) {
        var s = new EffectsTestScene();
        s.addChild(previousEffectsTest());
        director.runScene(s);
    },
    onEnter:function () {
       this._super();

        var node = new cc.Node();
	    var nodeGrid = new cc.NodeGrid();
        nodeGrid.addChild(node);
	    nodeGrid.runAction( this.getEffect(3) );
        this.addChild( nodeGrid );

        // back gradient
        var gradient = new cc.LayerGradient( cc.color(0,0,0,255), cc.color(98,99,117,255));
        node.addChild( gradient );

        // back image
        var bg = new cc.Sprite(s_back3);
        bg.x = winSize.width/2;
        bg.y = winSize.height/2;
        node.addChild( bg );

        var sister1 = new cc.Sprite(s_pathSister1);
        sister1.x = winSize.width/3;
        sister1.y = winSize.height/2;
        node.addChild( sister1, 1 );

        var sister2 = new cc.Sprite(s_pathSister2);
        sister2.x = winSize.width*2/3;
        sister2.y = winSize.height/2;
        node.addChild( sister2, 1 );

        var sc = cc.scaleBy(2, 5);
        var sc_back = sc.reverse();
        var seq = cc.sequence( sc, sc_back );
        var repeat = seq.repeatForever();

        sister1.runAction( repeat );
        sister2.runAction( repeat.clone() );
    },

    getEffect:function(duration) {
        // override me
        return cc.moveBy(2, cc.p(10,10) );
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
        return "a = new cc.Shaky3D(duration, gridSize, range, shakeZ)";
    },
    getEffect:function(duration) {
        return new cc.Shaky3D( duration, cc.size(15,10), 5, false );
    }
});

var Waves3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Waves 3D";
    },
    code:function () {
        return "a = new cc.Waves3D(duration, gridSize, range, shakeZ)";
    },
    getEffect:function(duration) {
        return new cc.Waves3D(duration, cc.size(15,10), 5, 40 );
    }
});

var FlipXTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FlipX3D";
    },
    code:function () {
        return "a = new cc.FlipX3D(duration )";
    },
    getEffect:function(duration) {
        var a = new cc.FlipX3D(duration );
        var delay = cc.delayTime(2);
        var r = a.reverse();
        return cc.sequence( a, delay, r );
    }
});

var FlipYTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FlipY3D";
    },
    code:function () {
        return "a = new cc.FlipY3D(duration )";
    },
    getEffect:function(duration) {
        var a = new cc.FlipY3D(duration );
        var delay = cc.delayTime(2);
        var r = a.reverse();
        return cc.sequence( a, delay, r );
    }
});

var Lens3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Lens3D";
    },
    code:function () {
        return "a = new cc.Lens3D(duration, gridSize, position, radius)";
    },
    getEffect:function(duration) {
        return new cc.Lens3D( duration, cc.size(15,10), cc.p(winSize.width/2, winSize.height/2), 240);
    }
});

var Ripple3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Ripple3D";
    },
    code:function () {
        return "a = new cc.Ripple3D(duration, gridSize, position, radius, waves, amplitude)";
    },
    getEffect:function(duration) {
        return new cc.Ripple3D( duration, cc.size(32,24), cc.p(winSize.width/2, winSize.height/2), 240, 4, 160);
    }
});

var LiquidTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Liquid";
    },
    code:function () {
        return "a = new cc.Liquid(duration, gridSize, waves, amplitude)";
    },
    getEffect:function(duration) {
        return new cc.Liquid( duration, cc.size(16,12), 4, 20);
    }
});

var WavesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Waves";
    },
    code:function () {
        return "a = new cc.Waves(duration, gridSize, waves, amplitude, horizontal, vertical)";
    },
    getEffect:function(duration) {
        return new cc.Waves( duration, cc.size(16,12), 4, 20, true, true);
    }
});

var TwirlTest = EffecstsBaseLayer.extend({
    title:function () {
        return "Twirl";
    },
    code:function () {
        return "a = new cc.Twirl(duration, gridSize, position, twirls, amplitude)";
    },
    getEffect:function(duration) {
        return new cc.Twirl( duration, cc.size(12,8), cc.p(winSize.width/2, winSize.height/2), 1, 2.5);
    }
});

var ShakyTiles3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "ShakyTiles3D";
    },
    code:function () {
        return "a = new cc.ShakyTiles3D(duration, gridSize, range, shakeZ)";
    },
    getEffect:function(duration) {
        return new cc.ShakyTiles3D( duration, cc.size(16,12), 5, false);
    }
});

var ShatteredTiles3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "ShatteredTiles3D";
    },
    code:function () {
        return "a = cc.ShatteredTiles3D(duration, gridSize, range, shatterZ)";
    },
    getEffect:function(duration) {
        return new cc.ShatteredTiles3D( duration, cc.size(16,12), 5, false);
    }
});

var ShuffleTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "ShuffleTiles";
    },
    code:function () {
        return "a = new cc.ShuffleTiles(duration, gridSize, seed)";
    },
    getEffect:function(duration) {
        var action =  new cc.ShuffleTiles( duration, cc.size(16,12), 25);
        var delay = cc.delayTime(2);
        var back = action.reverse();
        var seq = cc.sequence( action, delay, back);
        return seq;
    }
});

var FadeOutTRTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FadeOutTRTilesTest";
    },
    code:function () {
        return "a = new cc.FadeOutTRTiles(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action =  new cc.FadeOutTRTiles( duration, cc.size(16,12));
        var delay = cc.delayTime(0.5);
        var back = action.reverse();
        var seq = cc.sequence( action, delay, back);
        return seq;
    }
});

var FadeOutBLTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FadeOutBLTilesTest";
    },
    code:function () {
        return "a = new cc.FadeOutBLTiles(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action = new cc.FadeOutBLTiles( duration, cc.size(16,12));
        var delay = cc.delayTime(0.5);
        var back = action.reverse();
        var seq = cc.sequence( action, delay, back);
        return seq;
    }
});

var FadeOutUpTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FadeOutUpTilesTest";
    },
    code:function () {
        return "a = new cc.FadeOutUpTiles(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action = new cc.FadeOutUpTiles( duration, cc.size(16,12));
        var delay = cc.delayTime(0.5);
        var back = action.reverse();
        var seq = cc.sequence( action, delay, back);
        return seq;
    }
});

var FadeOutDownTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "FadeOutDownTilesTest";
    },
    code:function () {
        return "a = new cc.FadeOutDownTiles(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action = new cc.FadeOutDownTiles( duration, cc.size(16,12));
        var delay = cc.delayTime(0.5);
        var back = action.reverse();
        var seq = cc.sequence( action, delay, back);
        return seq;
    }
});

var TurnOffTilesTest = EffecstsBaseLayer.extend({
    title:function () {
        return "TurnOffTiles";
    },
    code:function () {
        return "a = new cc.TurnOffTiles(duration, gridSize, seed)";
    },
    getEffect:function(duration) {
        var action = new cc.TurnOffTiles( duration, cc.size(48,32), 25);
        var delay = cc.delayTime(0.5);
        var back = action.reverse();
        var seq = cc.sequence( action, delay, back);
        return seq;
    }
});

var WavesTiles3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "WavesTiles3D";
    },
    code:function () {
        return "a = new cc.WavesTiles3D(duration, gridSize, waves, amplitude)";
    },
    getEffect:function(duration) {
        var action = new cc.WavesTiles3D( duration, cc.size(16,12), 4, 120);
        return action;
    }
});


var JumpTiles3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "JumpTiles3D";
    },
    code:function () {
        return "a = new cc.JumpTiles3D(duration, gridSize, jumps, amplitude)";
    },
    getEffect:function(duration) {
        var action = new cc.JumpTiles3D( duration, cc.size(16,12), 2, 30);
        return action;
    }
});

var SplitRowsTest = EffecstsBaseLayer.extend({
    title:function () {
        return "SplitRows";
    },
    code:function () {
        return "a = new cc.SplitRows(duration, rows)";
    },
    getEffect:function(duration) {
        var action = new cc.SplitRows( duration, 9);
        var delay = cc.delayTime(0.5);
        var back = action.reverse();
        var seq = cc.sequence( action, delay, back);
        return seq;
    }
});

var SplitColsTest = EffecstsBaseLayer.extend({
    title:function () {
        return "SplitCols";
    },
    code:function () {
        return "a = new cc.SplitCols(duration, cols)";
    },
    getEffect:function(duration) {
        var action = new cc.SplitCols( duration, 9);
        var delay = cc.delayTime(0.5);
        var back = action.reverse();
        var seq = cc.sequence( action, delay, back);
        return seq;
    }
});

var PageTurn3DTest = EffecstsBaseLayer.extend({
    title:function () {
        return "PageTurn3D";
    },
    code:function () {
        return "a = new cc.PageTurn3D(duration, gridSize)";
    },
    getEffect:function(duration) {
        var action = new cc.PageTurn3D( duration, cc.size(15,10));
        return action;
    }
});

//
// Order of tests
//
var EffectsTestScene = TestScene.extend({
    runThisTest:function (num) {
        effectsTestSceneIdx = (num || num == 0) ? (num - 1) : -1;
        var layer = nextEffectsTest();
        this.addChild(layer);

        director.runScene(this);
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

    if(window.sideIndexBar){
        effectsTestSceneIdx = window.sideIndexBar.changeTest(effectsTestSceneIdx, 14);
    }

    return new arrayOfEffectsTest[effectsTestSceneIdx]();
};
var previousEffectsTest = function () {
    effectsTestSceneIdx--;
    if (effectsTestSceneIdx < 0)
        effectsTestSceneIdx += arrayOfEffectsTest.length;

    if(window.sideIndexBar){
        effectsTestSceneIdx = window.sideIndexBar.changeTest(effectsTestSceneIdx, 14);
    }

    return new arrayOfEffectsTest[effectsTestSceneIdx]();
};
var restartEffectsTest = function () {
    return new arrayOfEffectsTest[effectsTestSceneIdx]();
};
