/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

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
var ProgressTestSceneIdx = -1;

var SpriteDemo = BaseTestLayer.extend({

    title:function () {
        return "ProgressActionsTest";
    },

    title:function () {
        return "";
    },

    onBackCallback:function (sender) {
        var scene = new ProgressActionsTestScene();
        scene.addChild(previousProgressTest());
        director.runScene(scene);
    },

    onRestartCallback:function (sender) {
        var scene = new ProgressActionsTestScene();
        scene.addChild(restartProgressTest());
        director.runScene(scene);
    },

    onNextCallback:function (sender) {
        var scene = new ProgressActionsTestScene();
        scene.addChild(nextProgressTest());
        director.runScene(scene);
    },
    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfProgressTest.length-1) - ProgressTestSceneIdx );
    },

    getTestNumber:function() {
        return ProgressTestSceneIdx;
    }

});

var SpriteProgressToRadial = SpriteDemo.extend({
    onEnter:function () {
        this._super();

        var to1 = cc.ProgressTo.create(2, 100);
        var to2 = cc.ProgressTo.create(2, 100);

        var left = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister1));
        left.type = cc.ProgressTimer.TYPE_RADIAL;
        this.addChild(left);
        left.x = 200;
        left.y = winSize.height / 2;
        left.runAction(cc.RepeatForever.create(to1));

        var right = cc.ProgressTimer.create(cc.Sprite.create(s_pathBlock));
        right.type = cc.ProgressTimer.TYPE_RADIAL;
        right.setReverseDirection(true);
        this.addChild(right);
        right.x = winSize.width - 200;
        right.y = winSize.height / 2;
        right.runAction(cc.RepeatForever.create(to2));
    },

    title:function () {
        return "ProgressTo Radial";
    }
});

var SpriteProgressToHorizontal = SpriteDemo.extend({
    onEnter:function () {
        this._super();

        var to1 = cc.ProgressTo.create(2, 100);
        var to2 = cc.ProgressTo.create(2, 100);

        var left = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister1));
        left.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the left since the midpoint is 0 for the x
        left.midPoint = cc.p(0, 0);
        //    Setup for a horizontal bar since the bar change rate is 0 for y meaning no vertical change
        left.barChangeRate = cc.p(1, 0);
        this.addChild(left);
        left.x = 200;
        left.y = winSize.height / 2;
        left.runAction(cc.RepeatForever.create(to1));

        var right = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister2));
        right.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the left since the midpoint is 1 for the x
        right.midPoint = cc.p(1, 0);
        //    Setup for a horizontal bar since the bar change rate is 0 for y meaning no vertical change
        right.barChangeRate = cc.p(1, 0);
        this.addChild(right);
        right.x = winSize.width - 200;
        right.y = winSize.height / 2;
        right.runAction(cc.RepeatForever.create(to2));
    },
    title:function () {
        return "ProgressTo Horizontal";
    }
});

var SpriteProgressToVertical = SpriteDemo.extend({
    onEnter:function () {
        this._super();

        var to1 = cc.ProgressTo.create(2, 100);
        var to2 = cc.ProgressTo.create(2, 100);

        var left = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister1));
        left.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        left.midPoint = cc.p(0, 0);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        left.barChangeRate = cc.p(0, 1);
        this.addChild(left);
        left.x = 200;
        left.y = winSize.height / 2;
        left.runAction(cc.RepeatForever.create(to1));

        var right = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister2));
        right.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        right.midPoint = cc.p(0, 1);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        right.barChangeRate = cc.p(0, 1);
        this.addChild(right);
        right.x = winSize.width - 200;
        right.y = winSize.height / 2;
        right.runAction(cc.RepeatForever.create(to2));
    },
    title:function () {
        return "ProgressTo Vertical";
    }
});

var SpriteProgressToRadialMidpointChanged = SpriteDemo.extend({
    onEnter:function () {
        this._super();

        var action = cc.ProgressTo.create(2, 100);

        /**
         *  Our image on the left should be a radial progress indicator, clockwise
         */
        var left = cc.ProgressTimer.create(cc.Sprite.create(s_pathBlock));
        left.type = cc.ProgressTimer.TYPE_RADIAL;
        this.addChild(left);
        left.midPoint = cc.p(0.25, 0.75);
        left.x = 200;
        left.y = winSize.height / 2;
        left.runAction(cc.RepeatForever.create(action.clone()));

        /**
         *  Our image on the left should be a radial progress indicator, counter clockwise
         */
        var right = cc.ProgressTimer.create(cc.Sprite.create(s_pathBlock));
        right.type = cc.ProgressTimer.TYPE_RADIAL;
        right.midPoint = cc.p(0.75, 0.25);
        /**
         *  Note the reverse property (default=NO) is only added to the right image. That's how
         *  we get a counter clockwise progress.
         */
        this.addChild(right);
        right.x = winSize.width - 200;
        right.y = winSize.height / 2;
        right.runAction(cc.RepeatForever.create(action.clone()));
    },

    title:function () {
        return "Radial w/ Different Midpoints";
    }
});

var SpriteProgressBarVarious = SpriteDemo.extend({
    onEnter:function () {
        this._super();

        var to = cc.ProgressTo.create(2, 100);

        var left = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister1));
        left.type = cc.ProgressTimer.TYPE_BAR;

        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        left.midPoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        left.barChangeRate = cc.p(1, 0);
        this.addChild(left);
        left.x = 150;
        left.y = winSize.height / 2;
        left.runAction(cc.RepeatForever.create(to.clone()));

        var middle = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister2));
        middle.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        middle.midPoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        middle.barChangeRate = cc.p(1, 1);
        this.addChild(middle);
        middle.x = winSize.width / 2;
        middle.y = winSize.height / 2;
        middle.runAction(cc.RepeatForever.create(to.clone()));

        var right = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister2));
        right.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        right.midPoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        right.barChangeRate = cc.p(0, 1);
        this.addChild(right);
        right.x = winSize.width - 150;
        right.y = winSize.height / 2;
        right.runAction(cc.RepeatForever.create(to.clone()));
    },

    title:function () {
        return "ProgressTo Bar Mid";
    }
});

var SpriteProgressBarTintAndFade = SpriteDemo.extend({
    onEnter:function () {
        this._super();

        var to = cc.ProgressTo.create(6, 100);
        var tint = cc.Sequence.create(cc.TintTo.create(1, 255, 0, 0),
            cc.TintTo.create(1, 0, 255, 0),
            cc.TintTo.create(1, 0, 0, 255));

        var fade = cc.Sequence.create(cc.FadeTo.create(1.0, 0), cc.FadeTo.create(1.0, 255));

        var left = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister1));
        left.type = cc.ProgressTimer.TYPE_BAR;

        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        left.midPoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        left.barChangeRate = cc.p(1, 0);
        this.addChild(left);
        left.x = 150;
        left.y = winSize.height / 2;
        left.runAction(cc.RepeatForever.create(to.clone()));
        left.runAction(cc.RepeatForever.create(tint.clone()));

        left.addChild(cc.LabelTTF.create("Tint", "Marker Felt", 20.0));

        var middle = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister2));
        middle.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        middle.midPoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        middle.barChangeRate = cc.p(1, 1);
        this.addChild(middle);
        middle.x = winSize.width / 2;
        middle.y = winSize.height / 2;
        middle.runAction(cc.RepeatForever.create(to.clone()));
        middle.runAction(cc.RepeatForever.create(fade.clone()));

        middle.addChild(cc.LabelTTF.create("Fade", "Marker Felt", 20.0));

        var right = cc.ProgressTimer.create(cc.Sprite.create(s_pathSister2));
        right.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        right.midPoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        right.barChangeRate = cc.p(0, 1);
        this.addChild(right);
        right.x = winSize.width - 150;
        right.y = winSize.height / 2;
        right.runAction(cc.RepeatForever.create(to.clone()));
        right.runAction(cc.RepeatForever.create(tint.clone()));
        right.runAction(cc.RepeatForever.create(fade.clone()));

        right.addChild(cc.LabelTTF.create("Tint and Fade", "Marker Felt", 20.0));
    },

    title:function () {
        return "ProgressTo Bar Mid";
    }
});

var SpriteProgressWithSpriteFrame = SpriteDemo.extend({
    onEnter:function () {
        this._super();

        var to = cc.ProgressTo.create(6, 100);

        cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);

        var left = cc.ProgressTimer.create(cc.Sprite.create("#grossini_dance_01.png"));
        left.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        left.midpoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        left.barChangeRate = cc.p(1, 0);
        this.addChild(left);
        left.x = 150;
        left.y = winSize.height / 2;
        left.runAction(cc.RepeatForever.create(to.clone()));

        var middle = cc.ProgressTimer.create(cc.Sprite.create("#grossini_dance_02.png"));
        middle.type = cc.ProgressTimer.TYPE_BAR;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        middle.midpoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        middle.barChangeRate = cc.p(1, 1);
        this.addChild(middle);
        middle.x = winSize.width / 2;
        middle.y = winSize.height / 2;
        middle.runAction(cc.RepeatForever.create(to.clone()));

        var right = cc.ProgressTimer.create(cc.Sprite.create("#grossini_dance_03.png"));
        right.type = cc.ProgressTimer.TYPE_RADIAL;
        //    Setup for a bar starting from the bottom since the midpoint is 0 for the y
        right.midPoint = cc.p(0.5, 0.5);
        //    Setup for a vertical bar since the bar change rate is 0 for x meaning no horizontal change
        right.barChangeRate = cc.p(0, 1);
        this.addChild(right);
        right.x = winSize.width - 150;
        right.y = winSize.height / 2;
        right.runAction(cc.RepeatForever.create(to.clone()));
    },

    title:function () {
        return "Progress With Sprite Frame";
    }
});

var ProgressActionsTestScene = TestScene.extend({

    runThisTest:function () {
        ProgressTestSceneIdx = -1;
        this.addChild(nextProgressTest());
        director.runScene(this);
    }
});


var arrayOfProgressTest = [
    SpriteProgressToRadial,
    SpriteProgressToHorizontal,
    SpriteProgressToVertical,
    SpriteProgressToRadialMidpointChanged,
    SpriteProgressBarVarious,
    SpriteProgressBarTintAndFade,
    SpriteProgressWithSpriteFrame
];

var nextProgressTest = function () {
    ProgressTestSceneIdx++;
    ProgressTestSceneIdx = ProgressTestSceneIdx % arrayOfProgressTest.length;

    return new arrayOfProgressTest[ProgressTestSceneIdx]();
};
var previousProgressTest = function () {
    ProgressTestSceneIdx--;
    if (ProgressTestSceneIdx < 0)
        ProgressTestSceneIdx += arrayOfProgressTest.length;

    return new arrayOfProgressTest[ProgressTestSceneIdx]();
};
var restartProgressTest = function () {
    return new arrayOfProgressTest[ProgressTestSceneIdx]();
};
