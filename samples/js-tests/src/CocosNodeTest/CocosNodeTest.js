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

var TAG_SPRITE1 = 1;
var TAG_SPRITE2 = 2;
var TAG_SPRITE3 = 3;
var TAG_SLIDER = 4;

var nodeTestSceneIdx = -1;
var MAX_LAYER = 9;

var TestNodeDemo = BaseTestLayer.extend({
    ctor:function () {
        this._super();
    },
    title:function () {
        return "No title";
    },
    subtitle:function () {
        return "";
    },
    onRestartCallback:function (sender) {
        var s = new NodeTestScene();
        s.addChild(restartNodeTest());
        director.replaceScene(s);
    },
    onNextCallback:function (sender) {
        var s = new NodeTestScene();
        s.addChild(nextNodeTest());
        director.replaceScene(s);
    },
    onBackCallback:function (sender) {
        var s = new NodeTestScene();
        s.addChild(previousNodeTest());
        director.replaceScene(s);
    },
    // automation
    numberOfPendingTests:function () {
        return ( (arrayOfNodeTest.length - 1) - nodeTestSceneIdx );
    },

    getTestNumber:function () {
        return nodeTestSceneIdx;
    }
});

var CCNodeTest2 = TestNodeDemo.extend({
    onEnter:function () {
        this._super();

        var sp1 = cc.Sprite.create(s_pathSister1);
        var sp2 = cc.Sprite.create(s_pathSister2);
        var sp3 = cc.Sprite.create(s_pathSister1);
        var sp4 = cc.Sprite.create(s_pathSister2);

        sp1.setPosition(winSize.width / 4, winSize.height / 2);
        sp2.setPosition(winSize.width / 4 * 3, winSize.height / 2);
        this.addChild(sp1);
        this.addChild(sp2);

        sp3.setScale(0.25);
        sp4.setScale(0.25);

        sp1.addChild(sp3);
        sp2.addChild(sp4);

        var a1 = cc.RotateBy.create(2, 360);
        var a2 = cc.ScaleBy.create(2, 2);
        var delay = cc.DelayTime.create(0.2);

        var action1 = cc.RepeatForever.create(cc.Sequence.create(a1, a2, delay, a2.reverse()));
        var action2 = cc.RepeatForever.create(cc.Sequence.create(
            a1.clone(), a2.clone(), delay.clone(), a2.reverse()));

        sp2.setAnchorPoint(0, 0);

        sp1.runAction(action1);
        sp2.runAction(action2);
    },
    title:function () {
        return "anchorPoint and children";
    },
    //
    // Automation
    //
    testDuration:4.1,
    pixel1:{"0":255, "1":230, "2":204, "3":255},
    pixel2:{"0":204, "1":153, "2":102, "3":255},
    getExpectedResult:function () {
        var ret = {"pixel1":"yes", "pixel2":"yes"};
        return JSON.stringify(ret);
    },
    getCurrentResult:function () {
        var ret1 = this.readPixels(winSize.width / 4 - 54, winSize.height / 2 - 146, 5, 5);
        var ret2 = this.readPixels(winSize.width / 4 * 3 + 93, winSize.height / 2 + 113, 5, 5);
        var ret = {"pixel1":this.containsPixel(ret1, this.pixel1, true, 5) ? "yes" : "no",
            "pixel2":this.containsPixel(ret2, this.pixel2, true, 5) ? "yes" : "no"};
        return JSON.stringify(ret);
    }
});

var SID_DELAY2 = 1;
var SID_DELAY4 = 2;
var CCNodeTest4 = TestNodeDemo.extend({
    ctor:function () {
        this._super();
        var sp1 = cc.Sprite.create(s_pathSister1);
        var sp2 = cc.Sprite.create(s_pathSister2);
        sp1.setPosition(150, winSize.height / 2);
        sp2.setPosition(winSize.width - 150, winSize.height / 2);

        this.addChild(sp1, 0, 2);
        this.addChild(sp2, 0, 3);

        this.schedule(this.delay2, 2.0);
        this.schedule(this.delay4, 4.0);

        //Automation param
        this.autoParam = sp1;
    },
    delay2:function (dt) {
        var node = this.getChildByTag(2);
        var action1 = cc.RotateBy.create(1, 360);
        node.runAction(action1);
    },
    delay4:function (dt) {
        this.unschedule(this.delay4);
        this.removeChildByTag(3, false);
    },
    title:function () {
        return "tags";
    },
    //
    // Automation
    //
    testDuration:1,
    getExpectedResult:function () {
        return this.autoParam;
    },
    getCurrentResult:function () {
        var node = this.getChildByTag(2);
        return node;
    }
});

var CCNodeTest5 = TestNodeDemo.extend({
    ctor:function () {
        this._super();
        var sp1 = cc.Sprite.create(s_pathSister1);
        var sp2 = cc.Sprite.create(s_pathSister2);
        sp1.setPosition(150, winSize.height / 2);
        sp2.setPosition(winSize.width - 150, winSize.height / 2);

        var rot = cc.RotateBy.create(2, 360);
        var rot_back = rot.reverse();
        var forever = cc.RepeatForever.create(cc.Sequence.create(rot, rot_back));
        var forever2 = forever.clone();
        forever.setTag(101);
        forever2.setTag(102);

        this.addChild(sp1, 0, TAG_SPRITE1);
        this.addChild(sp2, 0, TAG_SPRITE2);

        sp1.runAction(forever);
        sp2.runAction(forever2);

        this.schedule(this.onAddAndRemove, 2.0);
    },
    onAddAndRemove:function (dt) {
        var sp1 = this.getChildByTag(TAG_SPRITE1);
        var sp2 = this.getChildByTag(TAG_SPRITE2);

        // hack for JSB.
        sp1.retain();
        sp2.retain();

        this.removeChild(sp1, false);
        this.removeChild(sp2, true);

        this.testSP1 = this.getChildByTag(TAG_SPRITE1);
        this.testSP2 = this.getChildByTag(TAG_SPRITE2);

        this.addChild(sp1, 0, TAG_SPRITE1);
        this.addChild(sp2, 0, TAG_SPRITE2);

        // hack for JSB.
        sp1.release();
        sp2.release();
    },
    title:function () {
        return "remove and cleanup";
    },
    //
    // Automation
    //
    testDuration:2.5,
    testSP1:null,
    testSP2:null,
    pixel1:{"0":0, "1":0, "2":0, "3":255},
    pixel2:{"0":51, "1":0, "2":0, "3":255},
    getExpectedResult:function () {
        var ret = {"sp1":null, "sp2":null, "pixel1":"yes", "pixel2":"yes"};
        return JSON.stringify(ret);
    },
    getCurrentResult:function () {
        var ret1 = this.readPixels(134, 164, 5, 5);
        var ret2 = this.readPixels(winSize.width - 148, winSize.height / 2 + 51, 5, 5);
        var ret = {"sp1":this.testSP1, "sp2":this.testSP2,
            "pixel1":this.containsPixel(ret1, this.pixel1, false) ? "yes" : "no",
            "pixel2":this.containsPixel(ret2, this.pixel2, true, 3) ? "yes" : "no"};
        return JSON.stringify(ret);
    }
});

var CCNodeTest6 = TestNodeDemo.extend({
    ctor:function () {
        this._super();
        var sp1 = cc.Sprite.create(s_pathSister1);
        var sp11 = cc.Sprite.create(s_pathSister1);

        var sp2 = cc.Sprite.create(s_pathSister2);
        var sp21 = cc.Sprite.create(s_pathSister2);

        sp1.setPosition(150, winSize.height / 2);
        sp2.setPosition(winSize.width - 150, winSize.height / 2);

        var rot = cc.RotateBy.create(2, 360);
        var rot_back = rot.reverse();
        var forever1 = cc.RepeatForever.create(cc.Sequence.create(rot, rot_back));
        var forever11 = forever1.clone();

        var forever2 = forever1.clone();
        var forever21 = forever1.clone();

        this.addChild(sp1, 0, TAG_SPRITE1);
        sp1.addChild(sp11, 11);
        this.addChild(sp2, 0, TAG_SPRITE2);
        sp2.addChild(sp21, 21);

        sp1.runAction(forever1);
        sp11.runAction(forever11);
        sp2.runAction(forever2);
        sp21.runAction(forever21);

        this.schedule(this.onAddAndRemove, 2.0);
    },
    onAddAndRemove:function (dt) {
        var sp1 = this.getChildByTag(TAG_SPRITE1);
        var sp2 = this.getChildByTag(TAG_SPRITE2);

        // hack for JSB.
        sp1.retain();
        sp2.retain();

        this.removeChild(sp1, false);
        this.removeChild(sp2, true);

        //Automation parameters
        this.autoParam1 = sp1.getChildByTag(11);
        this.autoParam2 = sp2.getChildByTag(21);

        this.addChild(sp1, 0, TAG_SPRITE1);
        this.addChild(sp2, 0, TAG_SPRITE2);

        // hack for JSB.
        sp1.release();
        sp2.release();

    },
    title:function () {
        return "remove/cleanup with children";
    },
    //
    // Automation
    //
    testDuration:2.1,
    getExpectedResult:function () {
        var ret = [null, null];
        return JSON.stringify(ret);
    },
    getCurrentResult:function () {
        var ret = [this.autoParam1, this.autoParam2];
        return JSON.stringify(ret);
    }
});

var StressTest1 = TestNodeDemo.extend({
    ctor:function () {
        this._super();

        var sp1 = cc.Sprite.create(s_pathSister1);
        this.addChild(sp1, 0, TAG_SPRITE1);
        this.setContentSize(0, 0);

        sp1.setPosition(winSize.width / 2, winSize.height / 2);

        this.schedule(this.onShouldNotCrash, 1.0);
    },
    onShouldNotCrash:function (dt) {
        this.unschedule(this.onShouldNotCrash);

        // if the node has timers, it crashes
        var explosion = cc.ParticleSun.create();
        explosion.setTexture(cc.TextureCache.getInstance().addImage(s_fire));

        explosion.setPosition(winSize.width / 2, winSize.height / 2);

        this.runAction(cc.Sequence.create(
            cc.RotateBy.create(2, 360),
            cc.CallFunc.create(this.onRemoveMe, this)));

        this.addChild(explosion);
    },
    onRemoveMe:function (node) {
        if (autoTestEnabled) {
            this.testPass = true;
            return;
        }
        this.getParent().removeChild(node, true);
        this.onNextCallback(this);
    },
    title:function () {
        return "stress test #1: no crashes";
    },
    //
    // Automation
    //
    testDuration:3.2,
    testPass:false,
    getExpectedResult:function () {
        var ret = {"pass":true};
        return JSON.stringify(ret);
    },
    getCurrentResult:function () {
        var ret = {"pass":this.testPass};
        return JSON.stringify(ret);
    }
});

var StressTest2 = TestNodeDemo.extend({
    ctor:function () {
        this._super();

        var sublayer = cc.Layer.create();

        var sp1 = cc.Sprite.create(s_pathSister1);
        sp1.setPosition(80, winSize.height / 2);

        var move = cc.MoveBy.create(3, cc.p(350, 0));
        var move_ease_inout3 = cc.EaseInOut.create(move.clone(), 2.0);
        var move_ease_inout_back3 = move_ease_inout3.reverse();
        var seq3 = cc.Sequence.create(move_ease_inout3, move_ease_inout_back3);
        sp1.runAction(cc.RepeatForever.create(seq3));
        sublayer.addChild(sp1, 1);

        var fire = cc.ParticleFire.create();
        fire.setTexture(cc.TextureCache.getInstance().addImage(s_fire));
        fire.setPosition(80, winSize.height / 2 - 50);

        var copy_seq3 = seq3.clone();

        fire.runAction(cc.RepeatForever.create(copy_seq3));
        sublayer.addChild(fire, 2);

        this.schedule(this.shouldNotLeak, 6.0);

        this.addChild(sublayer, 0, TAG_SPRITE1);
    },
    shouldNotLeak:function (dt) {
        this.unschedule(this.shouldNotLeak);
        var sublayer = this.getChildByTag(TAG_SPRITE1);
        sublayer.removeAllChildren();
    },
    title:function () {
        return "stress test #2: no leaks";
    }
});

var NodeToWorld = TestNodeDemo.extend({
    ctor:function () {
        //
        // This code tests that nodeToParent works OK:
        //  - It tests different anchor Points
        //  - It tests different children anchor points
        this._super();
        var back = cc.Sprite.create(s_back3);
        this.addChild(back, 5);
        back.setAnchorPoint(0, 0);
        var backSize = back.getContentSize();

        var item = cc.MenuItemImage.create(s_playNormal, s_playSelect, this.onClicked);
        var menu = cc.Menu.create(item);
        menu.alignItemsVertically();
        menu.setPosition(backSize.width / 2, backSize.height / 2);
        back.addChild(menu);

        var rot = cc.RotateBy.create(3, 360);
        var delay = cc.DelayTime.create(0.3);
        var fe = cc.RepeatForever.create(cc.Sequence.create(rot, delay));
        item.runAction(fe);

        var move = cc.MoveBy.create(3, cc.p(200, 0));
        var move_back = move.reverse();
        var seq = cc.Sequence.create(move, delay.clone(), move_back);
        var fe2 = cc.RepeatForever.create(seq);
        back.runAction(fe2);

        //Automation parameters
        this.autoParam = item;
    },
    onClicked:function () {
        cc.log("On clicked");
    },
    title:function () {
        return "nodeToParent transform";
    },
    //
    // Automation
    //
    testDuration:3.1,
    getExpectedResult:function () {
        var ret = {"a":1, "b":"0.00", "c":"-0.00", "d":1, "tx":"378", "ty":"139"};
        return JSON.stringify(ret);
    },
    getCurrentResult:function () {
        var ret = this.autoParam.nodeToWorldTransform();
        ret.b = ret.b.toFixed(2);
        ret.c = ret.c.toFixed(2);
        ret.tx = ret.tx.toFixed(0);
        ret.ty = ret.ty.toFixed(0);
        return JSON.stringify(ret);
    }
});

var CameraOrbitTest = TestNodeDemo.extend({
    ctor:function () {
        this._super();

        var p = cc.Sprite.create(s_back3);
        this.addChild(p, 0);
        p.setPosition(winSize.width / 2, winSize.height / 2);
        p.setOpacity(128);

        // LEFT
        var s = p.getContentSize();
        var sprite = cc.Sprite.create(s_pathGrossini);
        sprite.setScale(0.5);
        p.addChild(sprite, 0);
        sprite.setPosition(s.width / 4, s.height / 2);
        var orbit = cc.OrbitCamera.create(2, 1, 0, 0, 360, 0, 0);
        sprite.runAction(cc.RepeatForever.create(orbit));

        // CENTER
        sprite = cc.Sprite.create(s_pathGrossini);
        sprite.setScale(1.0);
        p.addChild(sprite, 0);
        sprite.setPosition(s.width / 4 * 2, s.height / 2);
        orbit = cc.OrbitCamera.create(2, 1, 0, 0, 360, 45, 0);
        sprite.runAction(cc.RepeatForever.create(orbit));

        // RIGHT
        sprite = cc.Sprite.create(s_pathGrossini);
        sprite.setScale(2.0);
        p.addChild(sprite, 0);
        sprite.setPosition(s.width / 4 * 3, s.height / 2);
        orbit = cc.OrbitCamera.create(2, 1, 0, 0, 360, 90, -45);
        sprite.runAction(cc.RepeatForever.create(orbit));

        // PARENT
        orbit = cc.OrbitCamera.create(10, 1, 0, 0, 360, 0, 90);
        p.runAction(cc.RepeatForever.create(orbit));

        this.setScale(1);
    },
    onEnter:function () {
        this._super();
        director.setProjection(cc.DIRECTOR_PROJECTION_3D);
    },
    onExit:function () {
        director.setProjection(cc.DIRECTOR_PROJECTION_2D);
        this._super();
    },
    title:function () {
        return "Camera Orbit test";
    }
});

var CameraZoomTest = TestNodeDemo.extend({
    _z:0,
    ctor:function () {
        this._super();

        // LEFT
        var sprite = cc.Sprite.create(s_pathGrossini);
        this.addChild(sprite, 0);
        sprite.setPosition(winSize.width / 4, winSize.height / 2);
        if ("opengl" in sys.capabilities) {
            //var cam = sprite.getCamera();
            //cam.setEye(0, 0, 415 / 2);
            //cam.setCenter(0, 0, 0);
        }

        // CENTER
        sprite = cc.Sprite.create(s_pathGrossini);
        this.addChild(sprite, 0, 40);
        sprite.setPosition(winSize.width / 4 * 2, winSize.height / 2);
        //cam = [sprite camera);
        //[cam setEyeX:0 eyeY:0 eyeZ:415/2);

        // RIGHT
        sprite = cc.Sprite.create(s_pathGrossini);
        this.addChild(sprite, 0, 20);
        sprite.setPosition(winSize.width / 4 * 3, winSize.height / 2);
        //cam = [sprite camera);
        //[cam setEyeX:0 eyeY:0 eyeZ:-485);
        //[cam setCenterX:0 centerY:0 centerZ:0);

        this._z = 0;
        this.scheduleUpdate();

        //Automation parameters
        this.autoParam = sprite;
    },
    update:function (dt) {
        if (!("opengl" in sys.capabilities))
            return;

        this._z += dt * 100;
        var sprite = this.getChildByTag(20);
        //var cam = sprite.getCamera();
        //cam.setEye(0, 0, this._z);

        sprite = this.getChildByTag(40);
        //cam = sprite.getCamera();
        //cam.setEye(0, 0, -this._z);
    },
    onEnter:function () {
        this._super();
        //TODO
        director.setProjection(cc.DIRECTOR_PROJECTION_3D);
    },
    onExit:function () {
        //TODO
        director.setProjection(cc.DIRECTOR_PROJECTION_2D);
        this._super();
    },
    title:function () {
        return "Camera Zoom test";
    },
    //
    // Automation
    //
    testDuration:1.1,
    pixel:{"0":115, "1":0, "2":115, "3":255},
    getExpectedResult:function () {
        var ret1 = {"z":this._z.toFixed(2)};
        var ret2 = {"pixel":"yes"};
        return JSON.stringify([ret1, ret2]);
    },
    getCurrentResult:function () {
        var ret1 = {"z":this.autoParam.getCamera().getEye().z.toFixed(2)};
        var readPixel = this.readPixels(winSize.width / 4 * 3, winSize.height / 2, 5, 5);
        var ret2 = {"pixel":!this.containsPixel(readPixel, this.pixel, false) ? "yes" : "no"};
        return JSON.stringify([ret1, ret2]);
    }
});

var CameraCenterTest = TestNodeDemo.extend({
    ctor:function () {
        this._super();

        // LEFT-TOP
        var sprite = cc.Sprite.create(s_texture512);
        this.addChild(sprite, 0);
        sprite.setPosition(winSize.width / 5, winSize.height / 5);
        sprite.setColor(cc.red());
        sprite.setTextureRect(cc.rect(0, 0, 120, 50));
        var orbit = cc.OrbitCamera.create(10, 1, 0, 0, 360, 0, 0);
        sprite.runAction(cc.RepeatForever.create(orbit));

        // LEFT-BOTTOM
        sprite = cc.Sprite.create(s_texture512);
        this.addChild(sprite, 0, 40);
        sprite.setPosition(winSize.width / 5, winSize.height / 5 * 4);
        sprite.setColor(cc.blue());
        sprite.setTextureRect(cc.rect(0, 0, 120, 50));
        orbit = cc.OrbitCamera.create(10, 1, 0, 0, 360, 0, 0);
        sprite.runAction(cc.RepeatForever.create(orbit));

        // RIGHT-TOP
        sprite = cc.Sprite.create(s_texture512);
        this.addChild(sprite, 0);
        sprite.setPosition(winSize.width / 5 * 4, winSize.height / 5);
        sprite.setColor(cc.yellow());
        sprite.setTextureRect(cc.rect(0, 0, 120, 50));
        orbit = cc.OrbitCamera.create(10, 1, 0, 0, 360, 0, 0);
        sprite.runAction(cc.RepeatForever.create(orbit));

        // RIGHT-BOTTOM
        sprite = cc.Sprite.create(s_texture512);
        this.addChild(sprite, 0, 40);
        sprite.setPosition(winSize.width / 5 * 4, winSize.height / 5 * 4);
        sprite.setColor(cc.green());
        sprite.setTextureRect(cc.rect(0, 0, 120, 50));
        orbit = cc.OrbitCamera.create(10, 1, 0, 0, 360, 0, 0);
        sprite.runAction(cc.RepeatForever.create(orbit));

        // CENTER
        sprite = cc.Sprite.create(s_texture512);
        this.addChild(sprite, 0, 40);
        sprite.setPosition(winSize.width / 2, winSize.height / 2);
        sprite.setColor(cc.white());
        sprite.setTextureRect(cc.rect(0, 0, 120, 50));
        orbit = cc.OrbitCamera.create(10, 1, 0, 0, 360, 0, 0);
        sprite.runAction(cc.RepeatForever.create(orbit));
    },

    onEnter:function(){
        this._super();
        cc.Director.getInstance().setProjection(cc.DIRECTOR_PROJECTION_3D);
    },

    onExit:function(){
        cc.Director.getInstance().setProjection(cc.DIRECTOR_PROJECTION_2D);
        this._super();
    },

    title:function () {
        return "Camera Center test";
    },
    subtitle:function () {
        return "Sprites should rotate at the same speed";
    },
    //
    // Automation
    //
    testDuration:2.6,
    pixel1:{"0":255, "1":255, "2":255, "3":255},
    pixel2:{"0":255, "1":255, "2":255, "3":255},
    pixel3:{"0":255, "1":255, "2":255, "3":255},
    getExpectedResult:function () {
        var ret = {"pixel1":"yes", "pixel2":"yes", "pixel3":"yes"};
        return JSON.stringify(ret);
    },
    getCurrentResult:function () {
        var ret1 = this.readPixels(winSize.width / 2, winSize.height / 2, 5, 5);
        var ret2 = this.readPixels(winSize.width / 2 - 25, winSize.height / 2, 5, 5);
        var ret3 = this.readPixels(winSize.width / 2 + 20, winSize.height / 2, 5, 5);
        var ret = {"pixel1":this.containsPixel(ret1, this.pixel1, false) ? "yes" : "no",
            "pixel2":!this.containsPixel(ret2, this.pixel2, false) ? "yes" : "no",
            "pixel3":!this.containsPixel(ret3, this.pixel3, false) ? "yes" : "no"};
        return JSON.stringify(ret);
    }
});

//
// ConvertToNode
//
var ConvertToNode = TestNodeDemo.extend({
    ctor:function () {
        this._super();
        if ('touches' in sys.capabilities)
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities)
            this.setMouseEnabled(true);

        var rotate = cc.RotateBy.create(10, 360);
        var action = cc.RepeatForever.create(rotate);
        for (var i = 0; i < 3; i++) {
            var sprite = cc.Sprite.create(s_pathGrossini);
            sprite.setPosition(winSize.width / 4 * (i + 1), winSize.height / 2);
            var point = cc.Sprite.create(s_pathR1);
            point.setScale(0.25);
            point.setPosition(sprite.getPosition());
            this.addChild(point, 10, 100 + i);

            switch (i) {
                case 0:
                    sprite.setAnchorPoint(0, 0);
                    break;
                case 1:
                    sprite.setAnchorPoint(0.5, 0.5);
                    break;
                case 2:
                    sprite.setAnchorPoint(1, 1);
                    break;
            }

            point.setPosition(sprite.getPosition());

            var copy = action.clone();
            sprite.runAction(copy);
            this.addChild(sprite, i);
        }
    },
    processEvent:function (location) {
        this.testP1 = [];
        this.testP2 = [];
        for (var i = 0; i < 3; i++) {
            var node = this.getChildByTag(100 + i);

            var p1 = node.convertToNodeSpaceAR(location);
            var p2 = node.convertToNodeSpace(location);

            cc.log("AR: x=" + p1.x.toFixed(2) + ", y=" + p1.y.toFixed(2) + " -- Not AR: x=" + p2.x.toFixed(2) + ", y=" + p2.y.toFixed(2));

            this.testP1.push({"x":p1.x, "y":p1.y});
            this.testP2.push({"x":p2.x, "y":p2.y});
        }
    },
    onTouchesEnded:function (touches, event) {
        for (var it = 0; it < touches.length; it++) {
            var touch = touches[it];
            var location = touch.getLocation();
            this.processEvent(location);
        }
    },
    onMouseUp:function (event) {
        var location = event.getLocation();
        this.processEvent(location);
    },

    title:function () {
        return "Convert To Node Space";
    },
    subtitle:function () {
        return "testing convertToNodeSpace / AR. Touch and see console";
    },
    //
    // Automation
    //
    testDuration:1,
    testP1:[],
    expectedP1:[],
    testP2:[],
    expectedP2:[],
    setupAutomation:function () {
        this.expectedP1.push({"x":-winSize.width, "y":-winSize.height * 2});
        this.expectedP1.push({"x":-winSize.width * 2, "y":-winSize.height * 2});
        this.expectedP1.push({"x":-winSize.width * 3, "y":-winSize.height * 2});

        this.expectedP2.push({"x":-winSize.width + 24.5, "y":-winSize.height * 2 + 23.5});
        this.expectedP2.push({"x":-winSize.width * 2 + 24.5, "y":-winSize.height * 2 + 23.5});
        this.expectedP2.push({"x":-winSize.width * 3 + 24.5, "y":-winSize.height * 2 + 23.5});
    },
    getExpectedResult:function () {
        return JSON.stringify({"p1":this.expectedP1, "p2":this.expectedP2});
    },
    getCurrentResult:function () {
        this.processEvent(cc.p(0, 0));
        var ret = {"p1":this.testP1, "p2":this.testP2};
        return JSON.stringify(ret);
    }
});

//
// BoundingBox Test
//
var BoundingBoxTest = TestNodeDemo.extend({
    ctor:function () {
        this._super();
        var sprite = cc.Sprite.create(s_pathGrossini);
        this.addChild(sprite);
        sprite.setPosition(winSize.width / 2, winSize.height / 2);
        var bb = sprite.getBoundingBox();
        this.log('BoundingBox:');
        //for( var i in bb )
        //    cc.log( i + " = " + bb[i] );
        cc.log('origin = [ ' + bb.x + "," + bb.y + "]");
        cc.log('size = [ ' + bb.width + "," + bb.height + "]");

        this.testBB = bb;
    },
    title:function () {
        return "Bounding Box Test";
    },
    subtitle:function () {
        return "Testing getBoundingBox(). See console";
    },
    //
    // Automation
    //
    testDuration:0.5,
    testBB:null,
    getExpectedResult:function () {
        var ret = {"x":0 | (winSize.width / 2 - 42.5), "y":0 | (winSize.height / 2 - 60.5), "w":85, "h":121};
        return JSON.stringify(ret);
    },
    getCurrentResult:function () {
        var ret = {"x":0 | this.testBB.x, "y":0 | this.testBB.y, "w":this.testBB.width, "h":this.testBB.height};
        return JSON.stringify(ret);
    }
});

var SchedulerTest1 = TestNodeDemo.extend({
    ctor:function () {
        this._super();
        var layer = cc.Layer.create();
        //UXLOG("retain count after init is %d", layer->retainCount());                // 1

        this.addChild(layer, 0);
        //UXLOG("retain count after addChild is %d", layer->retainCount());      // 2

        layer.schedule(this.doSomething);
        //UXLOG("retain count after schedule is %d", layer->retainCount());      // 3 : (object-c viersion), but win32 version is still 2, because CCTimer class don't save target.

        layer.unschedule(this.doSomething);
        //UXLOG("retain count after unschedule is %d", layer->retainCount());        // STILL 3!  (win32 is '2')
    },

    doSomething:function (dt) {
        this.testBool = false;
    },

    title:function () {
        return "cocosnode scheduler test #1";
    },
    //
    // Automation
    //
    testDuration:0.5,
    testBool:true,
    getExpectedResult:function () {
        return true;
    },
    getCurrentResult:function () {
        return this.testBool;
    }
});

var NodeOpaqueTest = TestNodeDemo.extend({
    ctor:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();
        var background;
        for (var i = 0; i < 50; i++) {
            background = cc.Sprite.create(s_back1);
            background.setBlendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
            background.setPosition(winSize.width / 2, winSize.height / 2);
            this.addChild(background);
        }
    },

    title:function () {
        return "Node Opaque Test";
    },

    subtitle:function () {
        return "Node rendered with GL_BLEND disabled";
    }
});

var NodeNonOpaqueTest = TestNodeDemo.extend({
    ctor:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();
        var background;
        for (var i = 0; i < 50; i++) {
            background = cc.Sprite.create(s_back1);
            background.setBlendFunc(gl.ONE, gl.ZERO);
            background.setPosition(winSize.width / 2, winSize.height / 2);
            this.addChild(background);
        }
    },
    title:function () {
        return "Node Non Opaque Test";
    },

    subtitle:function () {
        return "Node rendered with GL_BLEND enabled";
    }
});

//
// MAIN ENTRY POINT
//
var NodeTestScene = TestScene.extend({
    runThisTest:function () {
        nodeTestSceneIdx = -1;
        MAX_LAYER = 9;
        var layer = nextNodeTest();
        this.addChild(layer);

        director.replaceScene(this);
    }
});

//
// Flow control
//
var arrayOfNodeTest = [
    CCNodeTest2,
    CCNodeTest4,
    CCNodeTest5,
    CCNodeTest6,
    StressTest1,
    StressTest2,
    NodeToWorld,
    SchedulerTest1,
    BoundingBoxTest,
    ConvertToNode
];

if ('opengl' in sys.capabilities) {
    arrayOfNodeTest.push(CameraCenterTest);
    arrayOfNodeTest.push(CameraOrbitTest);
    arrayOfNodeTest.push(CameraZoomTest);
    arrayOfNodeTest.push(NodeOpaqueTest);
    arrayOfNodeTest.push(NodeNonOpaqueTest);
}


var nextNodeTest = function () {
    nodeTestSceneIdx++;
    nodeTestSceneIdx = nodeTestSceneIdx % arrayOfNodeTest.length;

    return new arrayOfNodeTest[nodeTestSceneIdx]();
};
var previousNodeTest = function () {
    nodeTestSceneIdx--;
    if (nodeTestSceneIdx < 0)
        nodeTestSceneIdx += arrayOfNodeTest.length;

    return new arrayOfNodeTest[nodeTestSceneIdx]();
};
var restartNodeTest = function () {
    return new arrayOfNodeTest[nodeTestSceneIdx]();
};


