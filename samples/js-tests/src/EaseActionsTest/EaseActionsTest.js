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

TAG_ACTION1_EASE_ACTIONS = 1;
TAG_ACTION2_EASE_ACTIONS = 2;
TAG_SLIDER_EASE_ACTIONS = 1;

var easeActionsTestIdx = -1;

// the class inherit from TestScene
// every .Scene each test used must inherit from TestScene,
// make sure the test have the menu item for back to main menu
var EaseActionsTestScene = TestScene.extend({
    runThisTest:function () {
        easeActionsTestIdx = -1;
        this.addChild(nextEaseActionsTest());
        director.runScene(this);
    }
});


var EaseSpriteDemo = BaseTestLayer.extend({
    _grossini:null,
    _tamara:null,
    _kathia:null,
    _title:null,

    ctor:function () {
        this._super(cc.color(0, 0, 0, 255), cc.color(98, 99, 117, 255));
    },

    title:function () {
        return "No title";
    },
    onEnter:function () {
        this._super();

        // Or you can create an sprite using a filename. PNG and BMP files are supported. Probably TIFF too
        this._grossini = cc.Sprite.create(s_pathGrossini);
        this._tamara = cc.Sprite.create(s_pathSister1);
        this._kathia = cc.Sprite.create(s_pathSister2);

        this.addChild(this._grossini, 3);
        this.addChild(this._kathia, 2);
        this.addChild(this._tamara, 1);

        this._grossini.x = 60;

        this._grossini.y = winSize.height / 5;
        this._kathia.x = 60;
        this._kathia.y = winSize.height / 2;
        this._tamara.x = 60;
        this._tamara.y = winSize.height * 4 / 5;

        this.twoSprites = false;
    },

    onRestartCallback:function (sender) {
        var s = new EaseActionsTestScene();//cc.Scene.create();
        s.addChild(restartEaseActionsTest());
        director.runScene(s);
    },
    onNextCallback:function (sender) {
        var s = new EaseActionsTestScene();//cc.Scene.create();
        s.addChild(nextEaseActionsTest());
        director.runScene(s);
    },
    onBackCallback:function (sender) {
        var s = new EaseActionsTestScene();//cc.Scene.create();
        s.addChild(previousEaseActionsTest());
        director.runScene(s);
    },
    positionForTwo:function () {
        this.twoSprites = true;
        this._grossini.x = 60;
	    this._grossini.y = winSize.height / 5;
        this._tamara.x = 60;
	    this._tamara.y = winSize.height * 4 / 5;
        this._kathia.visible = false;
    },

    //
    // Automation
    //
    numberOfPendingTests:function() {
        return ( (arrayOfEaseActionsTest.length-1) - easeActionsTestIdx );
    },

    getTestNumber:function() {
        return easeActionsTestIdx;
    },

    // default values for automation
    testDuration:2.05,
    getExpectedResult:function() {
        var ret;
        var w = 60 + winSize.width - 80;
        if( this.twoSprites )
            ret = [w, w];
        else
            ret = [w, w, w];
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var ret;
        if( this.twoSprites)
            ret = [ this._grossini.x, this._tamara.x];
        else
            ret = [ this._grossini.x, this._tamara.x, this._kathia.x ];
        return JSON.stringify(ret);
    }

});

//------------------------------------------------------------------
//
// SpriteEase
//
//------------------------------------------------------------------
var SpriteEase = EaseSpriteDemo.extend({

    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease_in = cc.EaseIn.create(move.clone(), 2.0);
        var move_ease_in_back = move_ease_in.reverse();

        var move_ease_out = cc.EaseOut.create(move.clone(), 2.0);
        var move_ease_out_back = move_ease_out.reverse();


        var delay = cc.DelayTime.create(0.10);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease_in, delay.clone(), move_ease_in_back, delay.clone());
        var seq3 = cc.Sequence.create(move_ease_out, delay.clone(), move_ease_out_back, delay.clone());


        var a2 = this._grossini.runAction(cc.RepeatForever.create(seq1));
        a2.tag = 1;

        var a1 = this._tamara.runAction(cc.RepeatForever.create(seq2));
        a1.tag = 1;

        var a = this._kathia.runAction(cc.RepeatForever.create(seq3));
        a.tag = 1;

        this.scheduleOnce(this.testStopAction, 4.1);
    },
    title:function () {
        return "EaseIn - EaseOut - Stop";
    },

    testStopAction:function (dt) {
        this._tamara.stopActionByTag(1);
        this._kathia.stopActionByTag(1);
        this._grossini.stopActionByTag(1);
    },

    //
    // Automation
    //
    testDuration:4.2,
    getExpectedResult:function() {
        var ret = [60,60,60];
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var ret = [ this._grossini.x, this._tamara.x, this._kathia.x ];
        return JSON.stringify(ret);
    }

});

//------------------------------------------------------------------
//
// SpriteEaseInOut
//
//------------------------------------------------------------------
var SpriteEaseInOut = EaseSpriteDemo.extend({

    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        //	id move_back = move.reverse();

        var move_ease_inout1 = cc.EaseInOut.create(move.clone(), 2.0);
        var move_ease_inout_back1 = move_ease_inout1.reverse();

        var move_ease_inout2 = cc.EaseInOut.create(move.clone(), 3.0);
        var move_ease_inout_back2 = move_ease_inout2.reverse();

        var move_ease_inout3 = cc.EaseInOut.create(move.clone(), 4.0);
        var move_ease_inout_back3 = move_ease_inout3.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move_ease_inout1, delay, move_ease_inout_back1, delay.clone());
        var seq2 = cc.Sequence.create(move_ease_inout2, delay.clone(), move_ease_inout_back2, delay.clone());
        var seq3 = cc.Sequence.create(move_ease_inout3, delay.clone(), move_ease_inout_back3, delay.clone());

        this._tamara.runAction(cc.RepeatForever.create(seq1));
        this._kathia.runAction(cc.RepeatForever.create(seq2));
        this._grossini.runAction(cc.RepeatForever.create(seq3));
    },
    title:function () {
        return "EaseInOut and rates";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseExponential
//
//------------------------------------------------------------------
var SpriteEaseExponential = EaseSpriteDemo.extend({

    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease_in = cc.EaseExponentialIn.create(move.clone());
        var move_ease_in_back = move_ease_in.reverse();

        var move_ease_out = cc.EaseExponentialOut.create(move.clone());
        var move_ease_out_back = move_ease_out.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease_in, delay.clone(), move_ease_in_back, delay.clone());
        var seq3 = cc.Sequence.create(move_ease_out, delay.clone(), move_ease_out_back, delay.clone());


        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
        this._kathia.runAction(cc.RepeatForever.create(seq3));
    },
    title:function () {
        return "ExpIn - ExpOut actions";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseExponentialInOut
//
//------------------------------------------------------------------
var SpriteEaseExponentialInOut = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease = cc.EaseExponentialInOut.create(move.clone());
        var move_ease_back = move_ease.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease, delay.clone(), move_ease_back, delay.clone());

        this.positionForTwo();

        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
    },
    title:function () {
        return "EaseExponentialInOut action";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseSine
//
//------------------------------------------------------------------
var SpriteEaseSine = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease_in = cc.EaseSineIn.create(move.clone());
        var move_ease_in_back = move_ease_in.reverse();

        var move_ease_out = cc.EaseSineOut.create(move.clone());
        var move_ease_out_back = move_ease_out.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease_in, delay, move_ease_in_back, delay.clone());
        var seq3 = cc.Sequence.create(move_ease_out, delay, move_ease_out_back, delay.clone());


        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
        this._kathia.runAction(cc.RepeatForever.create(seq3));

    },
    title:function () {
        return "EaseSineIn - EaseSineOut";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseSineInOut
//
//------------------------------------------------------------------
var SpriteEaseSineInOut = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease = cc.EaseSineInOut.create(move.clone());
        var move_ease_back = move_ease.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease, delay.clone(), move_ease_back, delay.clone());

        this.positionForTwo();

        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
    },
    title:function () {
        return "EaseSineInOut action";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseElastic
//
//------------------------------------------------------------------
var SpriteEaseElastic = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease_in = cc.EaseElasticIn.create(move.clone());
        var move_ease_in_back = move_ease_in.reverse();

        var move_ease_out = cc.EaseElasticOut.create(move.clone());
        var move_ease_out_back = move_ease_out.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease_in, delay.clone(), move_ease_in_back, delay.clone());
        var seq3 = cc.Sequence.create(move_ease_out, delay.clone(), move_ease_out_back, delay.clone());

        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
        this._kathia.runAction(cc.RepeatForever.create(seq3));
    },
    title:function () {
        return "Elastic In - Out actions";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseElasticInOut
//
//------------------------------------------------------------------
var SpriteEaseElasticInOut = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));

        var move_ease_inout1 = cc.EaseElasticInOut.create(move.clone(), 0.3);
        var move_ease_inout_back1 = move_ease_inout1.reverse();

        var move_ease_inout2 = cc.EaseElasticInOut.create(move.clone(), 0.45);
        var move_ease_inout_back2 = move_ease_inout2.reverse();

        var move_ease_inout3 = cc.EaseElasticInOut.create(move.clone(), 0.6);
        var move_ease_inout_back3 = move_ease_inout3.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move_ease_inout1, delay, move_ease_inout_back1, delay.clone());
        var seq2 = cc.Sequence.create(move_ease_inout2, delay.clone(), move_ease_inout_back2, delay.clone());
        var seq3 = cc.Sequence.create(move_ease_inout3, delay.clone(), move_ease_inout_back3, delay.clone());

        this._tamara.runAction(cc.RepeatForever.create(seq1));
        this._kathia.runAction(cc.RepeatForever.create(seq2));
        this._grossini.runAction(cc.RepeatForever.create(seq3));
    },
    title:function () {
        return "EaseElasticInOut action";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseBounce
//
//------------------------------------------------------------------
var SpriteEaseBounce = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease_in = cc.EaseBounceIn.create(move.clone());
        var move_ease_in_back = move_ease_in.reverse();

        var move_ease_out = cc.EaseBounceOut.create(move.clone());
        var move_ease_out_back = move_ease_out.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease_in, delay.clone(), move_ease_in_back, delay.clone());
        var seq3 = cc.Sequence.create(move_ease_out, delay.clone(), move_ease_out_back, delay.clone());

        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
        this._kathia.runAction(cc.RepeatForever.create(seq3));
    },
    title:function () {
        return "Bounce In - Out actions";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseBounceInOut
//
//------------------------------------------------------------------
var SpriteEaseBounceInOut = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease = cc.EaseBounceInOut.create(move.clone());
        var move_ease_back = move_ease.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease, delay.clone(), move_ease_back, delay.clone());

        this.positionForTwo();

        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
    },
    title:function () {
        return "EaseBounceInOut action";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseBack
//
//------------------------------------------------------------------
var SpriteEaseBack = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease_in = cc.EaseBackIn.create(move.clone());
        var move_ease_in_back = move_ease_in.reverse();

        var move_ease_out = cc.EaseBackOut.create(move.clone());
        var move_ease_out_back = move_ease_out.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease_in, delay.clone(), move_ease_in_back, delay.clone());
        var seq3 = cc.Sequence.create(move_ease_out, delay.clone(), move_ease_out_back, delay.clone());

        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
        this._kathia.runAction(cc.RepeatForever.create(seq3));
    },
    title:function () {
        return "Back In - Out actions";
    }
});

//------------------------------------------------------------------
//
// SpriteEaseBackInOut
//
//------------------------------------------------------------------
var SpriteEaseBackInOut = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        var move = cc.MoveBy.create(2, cc.p(winSize.width - 80, 0));
        var move_back = move.reverse();

        var move_ease = cc.EaseBackInOut.create(move.clone());
        var move_ease_back = move_ease.reverse();

        var delay = cc.DelayTime.create(0.1);

        var seq1 = cc.Sequence.create(move, delay, move_back, delay.clone());
        var seq2 = cc.Sequence.create(move_ease, delay.clone(), move_ease_back, delay.clone());

        this.positionForTwo();

        this._grossini.runAction(cc.RepeatForever.create(seq1));
        this._tamara.runAction(cc.RepeatForever.create(seq2));
    },
    title:function () {
        return "EaseBackInOut action";
    }
});

var SpeedTest = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        // rotate and jump
        var jump1 = cc.JumpBy.create(4, cc.p(-winSize.width + 80, 0), 100, 4);
        var jump2 = jump1.reverse();
        var rot1 = cc.RotateBy.create(4, 360 * 2);
        var rot2 = rot1.reverse();

        var seq3_1 = cc.Sequence.create(jump2, jump1);
        var seq3_2 = cc.Sequence.create(rot1, rot2);
        var spawn = cc.Spawn.create(seq3_1, seq3_2);
        var action = cc.Speed.create(cc.RepeatForever.create(spawn), 1.0);
        action.tag = TAG_ACTION1_EASE_ACTIONS;

        var action2 = action.clone();
        var action3 = action.clone();

        action2.tag = TAG_ACTION1_EASE_ACTIONS;
        action3.tag = TAG_ACTION1_EASE_ACTIONS;

        this._grossini.runAction(action2);
        this._tamara.runAction(action3);
        this._kathia.runAction(action);

        this.schedule(this.altertime, 1.0);//:@selector(altertime:) interval:1.0];
    },
    title:function () {
        return "Speed action";
    },

    altertime:function (dt) {
        var action1 = this._grossini.getActionByTag(TAG_ACTION1_EASE_ACTIONS);
        var action2 = this._tamara.getActionByTag(TAG_ACTION1_EASE_ACTIONS);
        var action3 = this._kathia.getActionByTag(TAG_ACTION1_EASE_ACTIONS);

        action1.setSpeed(Math.random() * 2);
        action2.setSpeed(Math.random() * 2);
        action3.setSpeed(Math.random() * 2);
    },
    // automation
    testDuration:0.1,
    getExpectedResult:function() {
        throw "Not Implemented";
    },
    getCurrentResult:function() {
        throw "Not Implemented";
    }
});

//------------------------------------------------------------------
//
// SchedulerTest
//
//------------------------------------------------------------------
var SchedulerTest = EaseSpriteDemo.extend({
    onEnter:function () {
        this._super();

        // rotate and jump
        var jump1 = cc.JumpBy.create(4, cc.p(-winSize.width + 80, 0), 100, 4);
        var jump2 = jump1.reverse();
        var rot1 = cc.RotateBy.create(4, 360 * 2);
        var rot2 = rot1.reverse();

        var seq3_1 = cc.Sequence.create(jump2, jump1);
        var seq3_2 = cc.Sequence.create(rot1, rot2);
        var spawn = cc.Spawn.create(seq3_1, seq3_2);
        var action = cc.RepeatForever.create(spawn);

        var action2 = action.clone();
        var action3 = action.clone();

        this._grossini.runAction(cc.Speed.create(action, 0.5));
        this._tamara.runAction(cc.Speed.create(action2, 1.5));
        this._kathia.runAction(cc.Speed.create(action3, 1.0));

        var emitter = cc.ParticleFireworks.create();
        emitter.setTotalParticles(250);
        emitter.texture = cc.textureCache.addImage("res/Images/fire.png");
        this.addChild(emitter);
    },
    title:function () {
        return "Scheduler scaleTime Test";
    },

    // automation
    testDuration:0.1,
    getExpectedResult:function() {
        throw "Not Implemented";
    },
    getCurrentResult:function() {
        throw "Not Implemented";
    }
});

//
// Flow control
//
var arrayOfEaseActionsTest = [
    SpriteEase,
    SpriteEaseInOut,
    SpriteEaseExponential,
    SpriteEaseExponentialInOut,
    SpriteEaseSine,
    SpriteEaseSineInOut,
    SpriteEaseElastic,
    SpriteEaseElasticInOut,
    SpriteEaseBounce,
    SpriteEaseBounceInOut,
    SpriteEaseBack,
    SpriteEaseBackInOut,
    SpeedTest,
    SchedulerTest
];

var nextEaseActionsTest = function () {
    easeActionsTestIdx++;
    easeActionsTestIdx = easeActionsTestIdx % arrayOfEaseActionsTest.length;

    return new arrayOfEaseActionsTest[easeActionsTestIdx]();
};
var previousEaseActionsTest = function () {
    easeActionsTestIdx--;
    if (easeActionsTestIdx < 0)
        easeActionsTestIdx += arrayOfEaseActionsTest.length;

    return new arrayOfEaseActionsTest[easeActionsTestIdx]();
};
var restartEaseActionsTest = function () {
    return new arrayOfEaseActionsTest[easeActionsTestIdx]();
};
