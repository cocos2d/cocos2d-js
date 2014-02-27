/****************************************************************************
 Copyright (c) 2013 cocos2d-x.org

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

var sceneTestIdx = -1;

var SceneEditorScene = TestScene.extend({
    onEnter: function () {
        this._super();
    },
    runThisTest: function () {
        sceneTestIdx = -1;
        this.addChild(nextSceneEditorTest());
        director.replaceScene(this);
    },
    onMainMenuCallback: function () {
        var scene = new CocoStudioTestScene();
        scene.runThisTest();
    },
    onExit: function () {
        this._super();
    }
});
var sceneEditorArr = [
    function () {
        return new LoadSceneEdtiorFileTest();
    },
    function () {
        return new SpriteComponentTest();
    },
    function () {
        return new ArmatureComponentTest();
    },
    function () {
        return new UIComponentTest();
    },
    function () {
        return new TmxMapComponentTest();
    },
    function () {
        return new ParticleComponentTest();
    },
    function () {
        return new EffectComponentTest();
    },
    function () {
        return new BackgroundComponentTest();
    },
    function () {
        return new AttributeComponentTest();
    },
    function () {
        return new TriggerTest();
    }
];

var nextSceneEditorTest = function () {
    sceneTestIdx++;
    sceneTestIdx = sceneTestIdx % sceneEditorArr.length;
    return sceneEditorArr[sceneTestIdx]();
};

var backSceneEditorTest = function () {
    sceneTestIdx--;
    if (sceneTestIdx < 0)
        sceneTestIdx += sceneEditorArr.length;

    return sceneEditorArr[sceneTestIdx]();
};

var restartSceneEditorTest = function () {
    return sceneEditorArr[sceneTestIdx]();
};
var SceneEditorTestLayer = BaseTestLayer.extend({
    ctor: function () {
        if (arguments.length === 0) {
            this._super(cc.c4b(0, 0, 0, 255), cc.c4b(98, 99, 117, 255));
        } else {
            this._super.apply(this, arguments);
        }
    },

    onRestartCallback: function (sender) {
        var s = new SceneEditorScene();
        s.addChild(restartSceneEditorTest());
        director.replaceScene(s);
    },

    onNextCallback: function (sender) {
        var s = new SceneEditorScene();
        s.addChild(nextSceneEditorTest());
        director.replaceScene(s);
    },

    onBackCallback: function (sender) {
        var s = new SceneEditorScene();
        s.addChild(backSceneEditorTest());
        director.replaceScene(s);
    },
    onExit: function () {
        ccs.ArmatureDataManager.destroyInstance();
        ccs.SceneReader.destroyInstance();
        ccs.ActionManager.destroyInstance();
        ccs.GUIReader.destroyInstance();
        this._super();
    },
    initSize:function(node){
        var winSize = cc.Director.getInstance().getWinSize();
        var scale = winSize.height / 320;
        node.setScale(scale);
        node.setPosition(cc.p((winSize.width - 480 * scale) / 2, (winSize.height - 320 * scale) / 2));
    }
});

var runSceneEditorTest = function () {
    var pScene = new SceneEditorScene();
    if (pScene) {
        pScene.runThisTest();
    }
};

//------------------------------------------------------------------
//
// LoadSceneEdtiorFileTest
//
//------------------------------------------------------------------
var LoadSceneEdtiorFileTest = SceneEditorTestLayer.extend({
    onEnter: function () {
        this._super();
        var node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/LoadSceneEdtiorFileTest/FishJoy2.json");
        this.addChild(node);
        ccs.ActionManager.getInstance().playActionByName("startMenu_1.json", "Animation1");
        this.initSize(node);
    },
    title: function () {
        return "loadSceneEdtiorFile Test";
    }
});

//------------------------------------------------------------------
//
// SpriteComponentTest
//
//------------------------------------------------------------------
var SpriteComponentTest = SceneEditorTestLayer.extend({
    onEnter: function () {
        this._super();
        var node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/SpriteComponentTest/SpriteComponentTest.json");
        this.addChild(node);

        var action1 = cc.Blink.create(2, 10);
        var action2 = cc.Blink.create(2, 5);
        var sister1 = node.getChildByTag(10003).getComponent("CCSprite").getNode();
        sister1.runAction(action1);

        var sister2 = node.getChildByTag(10004).getComponent("CCSprite").getNode();
        sister2.runAction(action2);

        this.initSize(node);
    },
    title: function () {
        return "Sprite Component Test";
    }
});

//------------------------------------------------------------------
//
// ArmatureComponentTest
//
//------------------------------------------------------------------
var ArmatureComponentTest = SceneEditorTestLayer.extend({
    onEnter: function () {
        this._super();
        var node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/ArmatureComponentTest/ArmatureComponentTest.json");
        this.addChild(node);

        var blowFish = node.getChildByTag(10007).getComponent("CCArmature").getNode();
        blowFish.runAction(cc.MoveBy.create(10, cc.p(-1000, 0)));

        var butterFlyFish = node.getChildByTag(10008).getComponent("CCArmature").getNode();
        butterFlyFish.runAction(cc.MoveBy.create(10, cc.p(-1000, 0)));

        this.initSize(node);
    },
    title: function () {
        return "Armature Component Test";
    }
});

//------------------------------------------------------------------
//
// UIComponentTest
//
//------------------------------------------------------------------
var UIComponentTest = SceneEditorTestLayer.extend({
    _node: null,
    onEnter: function () {
        this._super();
        this._node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/UIComponentTest/UIComponentTest.json");
        this.addChild(this._node);
        var widget = this._node.getChildByTag(10025).getComponent("GUIComponent").getNode();
        var button = widget.getChildByName("Button_156");
        button.addTouchEventListener(this.touchEvent, this);

        this.initSize(this._node);
    },
    touchEvent: function (sender, type) {
        switch (type) {
            case ccui.TouchEventType.began:
                var blowFish = this._node.getChildByTag(10010).getComponent("CCArmature").getNode();
                blowFish.runAction(cc.MoveBy.create(10, cc.p(-1000, 0)));

                var butterFlyFish = this._node.getChildByTag(10011).getComponent("CCArmature").getNode();
                butterFlyFish.runAction(cc.MoveBy.create(10, cc.p(-1000.0, 0)));
                break;
            default:
                break;
        }
    },
    title: function () {
        return "UI Component Test";
    }
});

//------------------------------------------------------------------
//
// TmxMapComponentTest
//
//------------------------------------------------------------------
var TmxMapComponentTest = SceneEditorTestLayer.extend({
    onEnter: function () {
        this._super();
        var node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/TmxMapComponentTest/TmxMapComponentTest.json");
        this.addChild(node);
        var tmxMap = node.getChildByTag(10015).getComponent("CCTMXTiledMap").getNode();
        var actionTo = cc.SkewTo.create(2, 0, 2);
        var rotateTo = cc.RotateTo.create(2, 61);
        var actionScaleTo = cc.ScaleTo.create(2, -0.44, 0.47);

        var actionScaleToBack = cc.ScaleTo.create(2, 1, 1);
        var rotateToBack = cc.RotateTo.create(2, 0);
        var actionToBack = cc.SkewTo.create(2, 0, 0);

        tmxMap.runAction(cc.Sequence.create(actionTo, actionToBack));
        tmxMap.runAction(cc.Sequence.create(rotateTo, rotateToBack));
        tmxMap.runAction(cc.Sequence.create(actionScaleTo, actionScaleToBack));

        this.initSize(node);
    },
    title: function () {
        return "TmxMap Component Test";
    }
});


//------------------------------------------------------------------
//
// ParticleComponentTest
//
//------------------------------------------------------------------
var ParticleComponentTest = SceneEditorTestLayer.extend({
    onEnter: function () {
        this._super();
        var node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/ParticleComponentTest/ParticleComponentTest.json");
        this.addChild(node);

        var particle = node.getChildByTag(10020).getComponent("CCParticleSystemQuad").getNode();
        var jump = cc.JumpBy.create(5, cc.p(-500, 0), 50, 4);
        var action = cc.Sequence.create(jump, jump.reverse());
        particle.runAction(action);

        this.initSize(node);
    },
    title: function () {
        return "Particle Component Test";
    }
});

//------------------------------------------------------------------
//
// EffectComponentTest
//
//------------------------------------------------------------------
var EffectComponentTest = SceneEditorTestLayer.extend({
    _node: null,
    onEnter: function () {
        this._super();
        this._node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/EffectComponentTest/EffectComponentTest.json");
        this.addChild(this._node);

        var armature = this._node.getChildByTag(10015).getComponent("CCArmature").getNode();
        armature.getAnimation().setMovementEventCallFunc(this.animationEvent, this);

        this.initSize(this._node);
    },
    title: function () {
        return "Effect Component Test";
    },
    animationEvent: function (armature, movementType, movementID) {
        if (movementType == ccs.MovementEventType.loopComplete) {
            if (movementID == "Fire") {
                var audio = this._node.getChildByTag(10015).getComponent("CCComAudio");
                audio.playEffect();
            }
        }
    }
});

//------------------------------------------------------------------
//
// BackgroundComponentTest
//
//------------------------------------------------------------------
var BackgroundComponentTest = SceneEditorTestLayer.extend({
    onEnter: function () {
        this._super();
        var node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/BackgroundComponentTest/BackgroundComponentTest.json");
        this.addChild(node);
        ccs.ActionManager.getInstance().playActionByName("startMenu_1.json", "Animation1");

        var audio = node.getComponent("CCBackgroundAudio");
        audio.playBackgroundMusic();

        this.initSize(node);
    },
    title: function () {
        return "Background Component Test";
    }
});

//------------------------------------------------------------------
//
// AttributeComponentTest
//
//------------------------------------------------------------------
var AttributeComponentTest = SceneEditorTestLayer.extend({
    onEnter: function () {
        this._super();
        var node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/AttributeComponentTest/AttributeComponentTest.json");
        this.addChild(node);

        var comAttribute = node.getChildByTag(10015).getComponent("CCComAttribute");
        cc.log("name:" + comAttribute.getString("name"));
        cc.log("maxHP:" + comAttribute.getFloat("maxHP"));
        cc.log("maxMP:" + comAttribute.getFloat("maxMP"));

        this.initSize(node);
    },
    title: function () {
        return "Attribute Component Test";
    },
    subtitle:function(){
        return "See console";
    }
});

//------------------------------------------------------------------
//
// TriggerTest
//
//------------------------------------------------------------------
var TriggerTest = SceneEditorTestLayer.extend({
    _blowFishNode: null,
    _flyFishNode: null,
    onEnter: function () {
        this._super();
        var node = ccs.SceneReader.getInstance().createNodeWithSceneFile("res/scenetest/TriggerTest/TriggerTest.json");
        this.addChild(node);
        ccs.ActionManager.getInstance().playActionByName("startMenu_1.json", "Animation1");

        this.schedule(this.gameLogic);
        this.setTouchEnabled(true);
        ccs.sendEvent(TRIGGEREVENT_ENTERSCENE);

        this.initSize(node);
    },
    onExit: function () {
        ccs.sendEvent(TRIGGEREVENT_LEAVESCENE);
        this.unschedule(this.gameLogic, this);
        this._super();
    },

    onTouchesBegan: function (touch, event) {
        ccs.sendEvent(TRIGGEREVENT_TOUCHBEGAN);
        return true;
    },

    onTouchesMoved: function (touch, event) {
        ccs.sendEvent(TRIGGEREVENT_TOUCHMOVED);
    },

    onTouchesEnded: function (touch, event) {
        ccs.sendEvent(TRIGGEREVENT_TOUCHENDED);
    },

    onTouchesCancelled: function (touch, event) {
        ccs.sendEvent(TRIGGEREVENT_TOUCHCANCELLED);
    },

    gameLogic: function () {
        ccs.sendEvent(TRIGGEREVENT_UPDATESCENE);
    },
    title: function () {
        return "Trigger Test";
    }
});
