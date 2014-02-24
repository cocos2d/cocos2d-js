/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

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
cc.TAG_LAYER = 1;

var layerTestSceneIdx = -1;
var LAYERTEST2_LAYER1_TAG = 1;
var LAYERTEST2_LAYER2_TAG = 2;

var LayerTestScene = TestScene.extend({
    runThisTest:function () {
        layerTestSceneIdx = -1;
        this.addChild(nextLayerTest());
        director.replaceScene(this);
    }
});

//------------------------------------------------------------------
//
// LayerTest
//
//------------------------------------------------------------------
var LayerTest = BaseTestLayer.extend({
    _title:null,


    title:function () {
        return "No title";
    },
    subtitle:function () {
        return "";
    },

    onRestartCallback:function (sender) {
        var s = new LayerTestScene();
        s.addChild(restartLayerTest());
        director.replaceScene(s);

    },
    onNextCallback:function (sender) {
        var s = new LayerTestScene();
        s.addChild(nextLayerTest());
        director.replaceScene(s);

    },
    onBackCallback:function (sender) {
        var s = new LayerTestScene();
        s.addChild(previousLayerTest());
        director.replaceScene(s);

    },
    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfLayerTest.length-1) - layerTestSceneIdx );
    },

    getTestNumber:function() {
        return layerTestSceneIdx;
    }

});

//------------------------------------------------------------------
//
// LayerTest1
//
//------------------------------------------------------------------
var LayerTest1 = LayerTest.extend({
    onEnter:function () {
        this._super();

        if( 'touches' in sys.capabilities )
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities )
            this.setMouseEnabled(true);

        var s = director.getWinSize();
        var layer = cc.LayerColor.create(cc.c4b(255, 0, 0, 128), 200, 200);

        layer.ignoreAnchorPointForPosition(false);
        layer.setPosition(s.width / 2, s.height / 2);
        this.addChild(layer, 1, cc.TAG_LAYER);
    },
    title:function () {
        return "ColorLayer resize (tap & move)";
    },

    updateSize:function (location) {
        var newSize = cc.size(Math.abs(location.x - winSize.width / 2) * 2, Math.abs(location.y - winSize.height / 2) * 2);
        var l = this.getChildByTag(cc.TAG_LAYER);

        l.setContentSize(newSize);
    },

    // events
    onMouseDragged : function( event ) {
        var location = event.getLocation();
        this.updateSize(location);
        return true;
    },
    onTouchesMoved:function (touches, event) {
        this.updateSize( touches[0].getLocation() );
    },
    

    //
    // Automation
    //

    pixel: {"0": 190, "1": 0, "2": 0, "3": 128},

    getExpectedResult:function() {

        var s = director.getWinSize();
        var ret = {"center": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2, s.height/2, 5, 5);
        var ret = {"center": this.containsPixel(ret2, this.pixel, true, 100) ? "yes" : "no"};

        return JSON.stringify(ret);
    }
});

var IgnoreAnchorpointTest1 = LayerTest.extend({
    onEnter:function () {
        this._super();
        //create layer
        var ws = director.getWinSize();
        var layer1 = cc.LayerColor.create(cc.c4b(255, 100, 100, 128), ws.width / 2, ws.height / 2);
        layer1.ignoreAnchorPointForPosition(true);
        var layer2 = cc.LayerColor.create(cc.c4b(100, 255, 100, 128), ws.width / 4, ws.height / 4);
        layer2.ignoreAnchorPointForPosition(true);
        layer1.addChild(layer2);
        layer1.setPosition(ws.width / 2, ws.height / 2);
        this.addChild(layer1);
    },
    title:function () {
        return "ignore Anchorpoint Test #1";
    },
    subtitle:function () {
        return "red:true  green:true";
	},


    //
    // Automation
    //

    pixel1: {"0": 100, "1": 150, "2": 100, "3": 200},
    pixel2: {"0": 100, "1": 50, "2": 50, "3": 200},

    getExpectedResult:function() {
        
        var s = director.getWinSize();
        var ret = {"big": "yes", "small": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2 + s.width/5, s.height/2 + s.height/5, 5, 5);
        var ret3 =  this.readPixels(s.width - 50, s.height - 50, 50, 50);
        var ret = {"big": this.containsPixel(ret2, this.pixel1, true, 100) ? "yes" : "no",
		   "small": this.containsPixel(ret3, this.pixel2, true, 100) ? "yes" : "no"};
	
        return JSON.stringify(ret);
    }
});
var IgnoreAnchorpointTest2 = LayerTest.extend({
    onEnter:function () {
        this._super();
        //create layer
        var ws = director.getWinSize();
        var layer1 = cc.LayerColor.create(cc.c4b(255, 100, 100, 128), ws.width / 2, ws.height / 2);
        layer1.ignoreAnchorPointForPosition(true);
        var layer2 = cc.LayerColor.create(cc.c4b(100, 255, 100, 128), ws.width / 4, ws.height / 4);
        layer2.ignoreAnchorPointForPosition(false);
        layer1.addChild(layer2);
        layer1.setPosition(ws.width / 2, ws.height / 2);
        this.addChild(layer1);
    },
    title:function () {
        return "ignore Anchorpoint Test #2";
    },
    subtitle:function () {
        return "red:true  green:false";
    },


    //
    // Automation
    //

    pixel1: {"0": 50, "1": 100, "2": 50, "3": 200},
    pixel2: {"0": 100, "1": 50, "2": 50, "3": 200},

    getExpectedResult:function() {
        
        var s = director.getWinSize();
        var ret = {"big": "yes", "small": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2 - 50, s.height/2 - 50, 5, 5);
        var ret3 =  this.readPixels(s.width - 50, s.height - 50, 5, 5);
        var ret = {"big": this.containsPixel(ret2, this.pixel1, true, 100) ? "yes" : "no",
		   "small": this.containsPixel(ret3, this.pixel2, true, 100) ? "yes" : "no"};
	
        return JSON.stringify(ret);
    }
});

var IgnoreAnchorpointTest3 = LayerTest.extend({
    onEnter:function () {
        this._super();
        //create layer
        var ws = director.getWinSize();
        var layer1 = cc.LayerColor.create(cc.c4b(255, 100, 100, 128), ws.width / 2, ws.height / 2);
        layer1.ignoreAnchorPointForPosition(false);
        var layer2 = cc.LayerColor.create(cc.c4b(100, 255, 100, 128), ws.width / 4, ws.height / 4);
        layer2.ignoreAnchorPointForPosition(false);
        layer1.addChild(layer2);
        layer1.setPosition(ws.width / 2, ws.height / 2);
        this.addChild(layer1);
    },
    title:function () {
        return "ignore Anchorpoint Test #3";
    },
    subtitle:function () {
        return "red:false  green:false";
    }
});

var IgnoreAnchorpointTest4 = LayerTest.extend({
    onEnter:function () {
        this._super();
        //create layer
        var ws = director.getWinSize();
        var layer1 = cc.LayerColor.create(cc.c4b(255, 100, 100, 128), ws.width / 2, ws.height / 2);
        layer1.ignoreAnchorPointForPosition(false);
        var layer2 = cc.LayerColor.create(cc.c4b(100, 255, 100, 128), ws.width / 4, ws.height / 4);
        layer2.ignoreAnchorPointForPosition(true);
        layer1.addChild(layer2);
        layer1.setPosition(ws.width / 2, ws.height / 2);
        this.addChild(layer1);
    },
    title:function () {
        return "ignore Anchorpoint Test #4";
    },
    subtitle:function () {
        return "red:false  green:true";
    }

});

//------------------------------------------------------------------
//
// LayerTest2
//
//------------------------------------------------------------------
var LayerTest2 = LayerTest.extend({

    onEnter:function () {
        this._super();

        var s = director.getWinSize();
        var layer1 = cc.LayerColor.create(cc.c4b(255, 255, 0, 80), 100, 300);
        layer1.setPosition(s.width / 3, s.height / 2);
        layer1.ignoreAnchorPointForPosition(false);
        this.addChild(layer1, 1, LAYERTEST2_LAYER1_TAG);

        var layer2 = cc.LayerColor.create(cc.c4b(0, 0, 255, 255), 100, 300);
        layer2.setPosition((s.width / 3) * 2, s.height / 2);
        layer2.ignoreAnchorPointForPosition(false);
        this.addChild(layer2, 2, LAYERTEST2_LAYER2_TAG);

        var actionTint = cc.TintBy.create(2, -255, -127, 0);
        var actionTintBack = actionTint.reverse();

        var actionFade = cc.FadeOut.create(2.0);
        var actionFadeBack = actionFade.reverse();

        if(autoTestEnabled) {
	    var seq1 = cc.Sequence.create(actionTint, cc.DelayTime.create(0.25), actionTintBack);
	    var seq2 = cc.Sequence.create(actionFade, cc.DelayTime.create(0.25), actionFadeBack);
	} else {
	    var seq1 = cc.Sequence.create(actionTint, actionTintBack);
	    var seq2 = cc.Sequence.create(actionFade, actionFadeBack);
	}

        layer1.runAction(seq1);
        layer2.runAction(seq2);
    },
    title:function () {
        return "ColorLayer: fade and tint";
    },

    //
    // Automation
    //

    testDuration: 2.1,
    tintTest: {"r": 0, "g": 128, "b": 60},
    getExpectedResult:function() {
        
        var s = director.getWinSize();
        var ret = {"tint": "yes", "opacity": 0};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var abs = function (a) {
	    return (a > 0) ? a: a*-1;
	};

	var inColorRange = function (pix1, pix2) {
	    // Color on iOS comes as 0,128,128 and on web as 0,128,0
	    if(abs(pix1.r - pix2.r) < 50 && abs(pix1.g - pix2.g) < 50 && 
	       abs(pix1.b - pix2.b) < 90) {
		return true;
	    }
	    return false;
	};
    var s = director.getWinSize();
	var tint = this.getChildByTag(LAYERTEST2_LAYER1_TAG).getColor();
	var op = this.getChildByTag(LAYERTEST2_LAYER2_TAG).getOpacity();
        var ret = {"tint": inColorRange(tint, this.tintTest) ? "yes" : "no",
		   "opacity": op};
	
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// LayerTestBlend
//
//------------------------------------------------------------------
var LayerTestBlend = LayerTest.extend({
    _blend:true,

    ctor:function () {
        this._super();
        var layer1 = cc.LayerColor.create(cc.c4b(255, 255, 255, 80));

        var sister1 = cc.Sprite.create(s_pathSister1);
        var sister2 = cc.Sprite.create(s_pathSister2);

        this.addChild(sister1);
        this.addChild(sister2);
        this.addChild(layer1, 100, cc.TAG_LAYER);

        sister1.setPosition(winSize.width/3, winSize.height / 2);
        sister2.setPosition(winSize.width/3 * 2, winSize.height / 2);

        if (sys.platform === 'browser' && !("opengl" in sys.capabilities)) {
            var label = cc.LabelTTF.create("Not supported on HTML5-canvas", "Times New Roman", 30);
            this.addChild(label);
            label.setPosition(winSize.width / 2, winSize.height / 2);
        }

        this.schedule(this.onNewBlend, 1.0);
        this._blend = true;
    },
    onNewBlend:function (dt) {
        var layer = this.getChildByTag(cc.TAG_LAYER);

        var src;
        var dst;

        if (this._blend) {
            src = gl.SRC_ALPHA;
            dst = gl.ONE_MINUS_SRC_ALPHA;
        } else {
            src = gl.ONE_MINUS_DST_COLOR;
            dst = gl.ZERO;
        }
        layer.setBlendFunc( src, dst );
        this._blend = ! this._blend;
    },
    title:function () {
        return "ColorLayer: blend";
    }
});

//------------------------------------------------------------------
//
// LayerGradient
//
//------------------------------------------------------------------
var LayerGradient = LayerTest.extend({
    _isPressed:false,
    ctor:function () {
        this._super();
        var layer1 = cc.LayerGradient.create(cc.c4b(255, 0, 0, 255), cc.c4b(0, 255, 0, 255), cc.p(0.9, 0.9));
        this.addChild(layer1, 0, cc.TAG_LAYER);

        if( 'touches' in sys.capabilities )
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities )
            this.setMouseEnabled(true);

        var label1 = cc.LabelTTF.create("Compressed Interpolation: Enabled", "Marker Felt", 26);
        var label2 = cc.LabelTTF.create("Compressed Interpolation: Disabled", "Marker Felt", 26);
        var item1 = cc.MenuItemLabel.create(label1);
        var item2 = cc.MenuItemLabel.create(label2);
        var item = cc.MenuItemToggle.create(item1, item2, this.onToggleItem, this);

         var menu = cc.Menu.create(item);
         this.addChild(menu);
         menu.setPosition(winSize.width / 2, 100);
    },

    updateGradient:function(pos) {
        var diff = cc.pSub(cc.p(winSize.width / 2, winSize.height / 2), pos);
        diff = cc.pNormalize(diff);

        var gradient = this.getChildByTag(1);
        gradient.setVector(diff);
    },
    onTouchesBegan:function(touches, event){
        this._isPressed = true;
        var start = touches[0].getLocation();
        this.updateGradient(start);
    },
    onTouchesMoved:function (touches, event) {
        if(this._isPressed) {
            var start = touches[0].getLocation();
            this.updateGradient(start);
        }
    },
    onTouchesEnded:function(touches,event){
        this._isPressed = false;
    },

    onMouseDragged : function( event ) {
        var location = event.getLocation();
        this.updateGradient(location);
        return true;
    },
    onToggleItem:function (sender) {
        var gradient = this.getChildByTag(cc.TAG_LAYER);
        gradient.setCompressedInterpolation(!gradient.isCompressedInterpolation());
    },

    title:function () {
        return "LayerGradient";
    },
    subtitle:function () {
        return "Touch the screen and move your finger";
    },

    //
    // Automation
    //

    pixel1: {"0": 255, "1": 0, "2": 0, "3": 255},
    pixel2: {"0": 0, "1": 255, "2": 0, "3": 255},

    getExpectedResult:function() {
        
        var s = director.getWinSize();
        var ret = {"bottomleft": "yes", "topright": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(50, 50, 50, 50);
        var ret3 =  this.readPixels(s.width - 50, s.height - 50, 50, 50);
        var ret = {"bottomleft": this.containsPixel(ret2, this.pixel1) ? "yes" : "no",
		   "topright": this.containsPixel(ret3, this.pixel2) ? "yes" : "no"};
	
        return JSON.stringify(ret);
    }
});

var arrayOfLayerTest = [
    LayerTest1,
    LayerTest2,
    LayerTestBlend,
    IgnoreAnchorpointTest1,
    IgnoreAnchorpointTest2,
    IgnoreAnchorpointTest3,
    IgnoreAnchorpointTest4
];

if( 'opengl' in sys.capabilities ){
    arrayOfLayerTest.push(LayerGradient);
}

var nextLayerTest = function () {
    layerTestSceneIdx++;
    layerTestSceneIdx = layerTestSceneIdx % arrayOfLayerTest.length;

    return new arrayOfLayerTest[layerTestSceneIdx]();
};
var previousLayerTest = function () {
    layerTestSceneIdx--;
    if (layerTestSceneIdx < 0)
        layerTestSceneIdx += arrayOfLayerTest.length;

    return new arrayOfLayerTest[layerTestSceneIdx]();
};
var restartLayerTest = function () {
    return new arrayOfLayerTest[layerTestSceneIdx]();
};
