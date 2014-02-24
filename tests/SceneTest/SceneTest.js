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

var MID_PUSHSCENE = 100;
var MID_PUSHSCENETRAN = 101;
var MID_QUIT = 102;
var MID_REPLACESCENE = 103;
var MID_REPLACESCENETRAN = 104;
var MID_GOBACK = 105;

var SceneTestLayer1 = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();

        var s = director.getWinSize();
        var item1 = cc.MenuItemFont.create("Test pushScene", this.onPushScene, this);
        var item2 = cc.MenuItemFont.create("Test pushScene w/transition", this.onPushSceneTran, this);
        var item3 = cc.MenuItemFont.create("Quit", function () {
            cc.log("quit!")
        }, this);

        var menu = cc.Menu.create(item1, item2, item3);
        menu.alignItemsVertically();
        this.addChild(menu);

        var sprite = cc.Sprite.create(s_pathGrossini);
        this.addChild(sprite);
        sprite.setPosition(s.width - 40, s.height / 2);
        var rotate = cc.RotateBy.create(2, 360);
        var repeat = cc.RepeatForever.create(rotate);
        sprite.runAction(repeat);
        //cc.schedule(this.testDealloc);
    },


    onEnter:function () {
        cc.log("SceneTestLayer1#onEnter");
        this._super();
    },

    onEnterTransitionDidFinish:function () {
        cc.log("SceneTestLayer1#onEnterTransitionDidFinish");
        this._super();
    },

    testDealloc:function (dt) {
        //cc.log("SceneTestLayer1:testDealloc");
    },

    onPushScene:function (sender) {
        var scene = new SceneTestScene();
        var layer = new SceneTestLayer2();
        scene.addChild(layer, 0);
        director.pushScene(scene);
    },

    onPushSceneTran:function (sender) {
        var scene = new SceneTestScene();
        var layer = new SceneTestLayer2();
        scene.addChild(layer, 0);

        director.pushScene(cc.TransitionSlideInT.create(1, scene));
    },
    onQuit:function (sender) {
    }

    //CREATE_NODE(SceneTestLayer1);
});

var SceneTestLayer2 = cc.Layer.extend({

    timeCounter:0,

    ctor:function () {
        this._super();
        this.init();

        this.timeCounter = 0;

        var s = director.getWinSize();

        var item1 = cc.MenuItemFont.create("replaceScene", this.onReplaceScene, this);
        var item2 = cc.MenuItemFont.create("replaceScene w/transition", this.onReplaceSceneTran, this);
        var item3 = cc.MenuItemFont.create("Go Back", this.onGoBack, this);

        var menu = cc.Menu.create(item1, item2, item3);
        menu.alignItemsVertically();
        this.addChild(menu);

        var sprite = cc.Sprite.create(s_pathGrossini);
        this.addChild(sprite);

        sprite.setPosition(s.width - 40, s.height / 2);
        var rotate = cc.RotateBy.create(2, 360);
        var repeat = cc.RepeatForever.create(rotate);
        sprite.runAction(repeat);

        //cc.schedule(this.testDealloc);
    },

    testDealloc:function (dt) {

    },

    onGoBack:function (sender) {
        director.popScene();
    },

    onReplaceScene:function (sender) {
        var scene = new SceneTestScene();
        var layer = new SceneTestLayer3();
        scene.addChild(layer, 0);
        director.replaceScene(scene);

    },

    onReplaceSceneTran:function (sender) {
        var scene = new SceneTestScene();
        var layer = new SceneTestLayer3();
        scene.addChild(layer, 0);
        director.replaceScene(cc.TransitionSlideInT.create(2, scene));
    }

    //CREATE_NODE(SceneTestLayer2);
});

var SceneTestLayer3 = cc.LayerColor.extend({
    
    ctor:function () {
        this._super();
        this.init( cc.c4b(0,128,255,255) );
        
        var label = cc.LabelTTF.create("Touch to popScene", "Arial", 28);
        this.addChild(label);
        var s = director.getWinSize();
        label.setPosition(s.width / 2, s.height / 2);

        var sprite = cc.Sprite.create(s_pathGrossini);
        this.addChild(sprite);

        sprite.setPosition(s.width - 40, s.height / 2);
        var rotate = cc.RotateBy.create(2, 360);
        var repeat = cc.RepeatForever.create(rotate);
        sprite.runAction(repeat);
    },
    
    onEnterTransitionDidFinish: function () {
        if ('touches' in sys.capabilities)
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities)
            this.setMouseEnabled(true);
    },

    testDealloc:function (dt) {

    },

    onTouchesEnded:function (touches, event) {
        director.popScene();
    },
    onMouseUp:function(event) {
        director.popScene();
    }

    //CREATE_NODE(SceneTestLayer3);
});

SceneTestScene = TestScene.extend({

    runThisTest:function () {
        var layer = new SceneTestLayer1();
        this.addChild(layer);

        director.replaceScene(this);

    }
});
