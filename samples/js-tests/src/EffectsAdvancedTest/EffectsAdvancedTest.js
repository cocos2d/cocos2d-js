/****************************************************************************
 Copyright (c) 2010-2013 cocos2d-x.org
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

var EffectsAdvancedTest = EffectsAdvancedTest || {};

EffectsAdvancedTest.TAG_TEXTLAYER = 1;

EffectsAdvancedTest.TARGET1 = 1;

EffectsAdvancedTest.TARGET2 = 2;

EffectsAdvancedTest.TAG_BACKGROUND = 1;

EffectsAdvancedTest.TAG_LABEL = 2;

EffectsAdvancedTest.IDC_NEXT = 100;

EffectsAdvancedTest.IDC_BACK = 101;

EffectsAdvancedTest.IDC_RESTART = 102;

var sceneIndex = -1;

var EffectAdvanceTextLayer = cc.Layer.extend({
    _atlas:null,
    _title:null,

    ctor:function() {
        this._super();
        this.init();
    },

    onEnter:function () {
        this._super();


        // back gradient
        var gradient = cc.NodeGrid.create();
        gradient.setAnchorPoint(cc.p(0.5,0.5));
        this.addChild(gradient,0, EffectsAdvancedTest.TAG_BACKGROUND);

        var bg = cc.Sprite.create(s_back3);
        //this.addChild(bg, 0, EffectsAdvancedTest.TAG_BACKGROUND);
        gradient.addChild(bg);
        bg.setPosition(winSize.width / 2, winSize.height / 2);
        
        var target1 = cc.NodeGrid.create();
        target1.setAnchorPoint(cc.p(0.5,0.5));
        var grossini = cc.Sprite.create(s_pathSister2);
        target1.addChild(grossini);
        gradient.addChild(target1, 1, EffectsAdvancedTest.TARGET1);
        grossini.setPosition(winSize.width / 3, winSize.height / 2);
        var sc = cc.ScaleBy.create(2, 5);
        var sc_back = sc.reverse();
        target1.runAction(cc.RepeatForever.create(cc.Sequence.create(sc, sc_back)));
        
        var target2 = cc.NodeGrid.create();
        target2.setAnchorPoint(cc.p(0.5,0.5));
        var tamara = cc.Sprite.create(s_pathSister1);
        target2.addChild(tamara);
        gradient.addChild(target2, 1, EffectsAdvancedTest.TARGET2);
        tamara.setPosition(winSize.width * 2 / 3, winSize.height / 2);
        var sc2 = cc.ScaleBy.create(2, 5);
        var sc2_back = sc2.reverse();
        tamara.runAction(cc.RepeatForever.create(cc.Sequence.create(sc2, sc2_back)));

        var label = cc.LabelTTF.create(this.title(), "Arial", 28);
        label.setPosition(cc.VisibleRect.center().x, cc.VisibleRect.top().y - 80);
        this.addChild(label);
        label.setTag(EffectsAdvancedTest.TAG_LABEL);

        var strSubtitle = this.subtitle();
        if (strSubtitle != "") {
            var subtitleLabel = cc.LabelTTF.create(strSubtitle, "Arial", 16);
            this.addChild(subtitleLabel, 101);
            subtitleLabel.setPosition(cc.VisibleRect.center().x, cc.VisibleRect.top().y - 80);
        }

        var item1 = cc.MenuItemImage.create(s_pathB1, s_pathB2, this.backCallback, this);
        var item2 = cc.MenuItemImage.create(s_pathR1, s_pathR2, this.restartCallback, this);
        var item3 = cc.MenuItemImage.create(s_pathF1, s_pathF2, this.nextCallback, this);

        var menu = cc.Menu.create(item1, item2, item3);

        menu.setPosition(0, 0);
        item1.setPosition(cc.VisibleRect.center().x - item2.getContentSize().width * 2, cc.VisibleRect.bottom().y + item2.getContentSize().height / 2);
        item2.setPosition(cc.VisibleRect.center().x, cc.VisibleRect.bottom().y + item2.getContentSize().height / 2);
        item3.setPosition(cc.VisibleRect.center().x + item2.getContentSize().width * 2, cc.VisibleRect.bottom().y + item2.getContentSize().height / 2);

        this.addChild(menu, 1);
    },

    title:function () {
        return "No title";
    },

    subtitle:function () {
        return "";
    },

    restartCallback:function (sender) {
        var scene = new EffectAdvanceScene();
        scene.addChild(restartEffectAdvanceAction());
        cc.Director.getInstance().replaceScene(scene);
    },

    nextCallback:function (sender) {
        var scene = new EffectAdvanceScene();
        scene.addChild(nextEffectAdvanceAction());
        cc.Director.getInstance().replaceScene(scene);
    },

    backCallback:function (sender) {
        var scene = new EffectAdvanceScene();
        scene.addChild(backEffectAdvanceAction());
        cc.Director.getInstance().replaceScene(scene);
    }
});

var Effect1 = EffectAdvanceTextLayer.extend({
    title:function () {
        return "Lens + Waves3d and OrbitCamera";
    },

    onEnter:function () {
        this._super();

        var target = this.getChildByTag(EffectsAdvancedTest.TAG_BACKGROUND);

        // To reuse a grid the grid size and the grid type must be the same.
        // in this case:
        //     Lens3D is Grid3D and it's size is (15,10)
        //     Waves3D is Grid3D and it's size is (15,10)
        var size = cc.Director.getInstance().getWinSize();
        var lens = cc.Lens3D.create(0.0, cc.size(15, 10), cc.p(size.width / 2, size.height / 2), 240);
        var waves = cc.Waves3D.create(10, cc.size(15, 10), 18, 15);

        var reuse = cc.ReuseGrid.create(1);
        var delay = cc.DelayTime.create(8);

        var orbit = cc.OrbitCamera.create(5, 1, 2, 0, 180, 0, -90);
        var orbit_back = orbit.reverse();

        target.runAction(cc.RepeatForever.create(cc.Sequence.create(orbit, orbit_back)));
        target.runAction(cc.Sequence.create(lens, delay, reuse, waves));
    }
});

var Effect2 = EffectAdvanceTextLayer.extend({
    title:function () {
        return "ShakyTiles + ShuffleTiles + TurnOffTiles";
    },

    onEnter:function () {
        this._super();
        var target = this.getChildByTag(EffectsAdvancedTest.TAG_BACKGROUND);

        // To reuse a grid the grid size and the grid type must be the same.
        // in this case:
        //     ShakyTiles is TiledGrid3D and it's size is (15,10)
        //     Shuffletiles is TiledGrid3D and it's size is (15,10)
        //       TurnOfftiles is TiledGrid3D and it's size is (15,10)
        var shaky = cc.ShakyTiles3D.create(5, cc.size(15, 10), 4, false);
        var shuffle = cc.ShuffleTiles.create(0, cc.size(15, 10), 3);
        var turnoff = cc.TurnOffTiles.create(0, cc.size(15, 10), 3);
        var turnon = turnoff.reverse();

        // reuse 2 times:
        //   1 for shuffle
        //   2 for turn off
        //   turnon tiles will use a new grid
        var reuse = cc.ReuseGrid.create(2);
        var delay = cc.DelayTime.create(1);

        //    id orbit = [OrbitCamera.create:5 radius:1 deltaRadius:2 angleZ:0 deltaAngleZ:180 angleX:0 deltaAngleX:-90];
        //    id orbit_back = [orbit reverse];
        //
        //    [target runAction: [RepeatForever.create: [Sequence actions: orbit, orbit_back, nil]]];
        target.runAction(cc.Sequence.create(shaky, delay, reuse, shuffle, delay.clone(), turnoff, turnon));
    }
});

var Effect3 = EffectAdvanceTextLayer.extend({
    title:function () {
        return "Effects on 2 sprites";
    },

    onEnter:function () {
        this._super();

        var bg = this.getChildByTag(EffectsAdvancedTest.TAG_BACKGROUND);
        var target1 = bg.getChildByTag(EffectsAdvancedTest.TARGET1);
        var target2 = bg.getChildByTag(EffectsAdvancedTest.TARGET2);

        var waves = cc.Waves.create(5, cc.size(15, 10), 5, 20, true, false);
        var shaky = cc.Shaky3D.create(5, cc.size(15, 10), 4, false);

        target1.runAction(cc.RepeatForever.create(waves));
        target2.runAction(cc.RepeatForever.create(shaky));

        // moving background. Testing issue #244
        var move = cc.MoveBy.create(3, cc.p(200, 0));
        bg.runAction(cc.RepeatForever.create(cc.Sequence.create(move, move.reverse())));
    }
});

var Lens3DTarget = cc.Node.extend({
    _lens3D:null,

    ctor:function() {
        this._super();
        this.init();
    },

    update: function(dt) {
        this._lens3D.setPosition(this.getPosition());
    },

    onEnter: function() {
        cc.log("Lens3DTarget onEnter");
        this.scheduleUpdate();
    },

    onExit: function() {
        cc.log("Lens3DTarget onExit");
        this.unscheduleUpdate();
    }

});

Lens3DTarget.create = function (action) {
    var target = new Lens3DTarget();
    target._lens3D = action;
    return target;
};

var Effect4 = EffectAdvanceTextLayer.extend({
    title:function () {
        return "Jumpy Lens3D";
    },

    onEnter:function () {
        this._super();

        var lens = cc.Lens3D.create(10, cc.size(32, 24), cc.p(100, 180), 150);
        var move = cc.JumpBy.create(5, cc.p(380, 0), 100, 4);
        var move_back = move.reverse();
        var seq = cc.Sequence.create(move, move_back);

        /* In cocos2d-iphone, the type of action's target is 'id', so it supports using the instance of 'CCLens3D' as its target.
         While in cocos2d-x, the target of action only supports CCNode or its subclass,
         so we make an encapsulation for CCLens3D to achieve that.
         */
        var director = cc.Director.getInstance();
        var target = Lens3DTarget.create(lens);
        // Please make sure the target been added to its parent.
        this.addChild(target);

        director.getActionManager().addAction(seq, target, false);
        var bg = this.getChildByTag(EffectsAdvancedTest.TAG_BACKGROUND);
        bg.runAction(cc.Sequence.create(lens, cc.CallFunc.create(
            function(sender) {
                sender.removeChild(target, true);
            }
        )));
    }
});

var Effect5 = EffectAdvanceTextLayer.extend({
    title:function () {
        return "Test Stop-Copy-Restar";
    },

    onEnter:function () {
        this._super();

        //CCDirector.sharedDirector().setProjection(CCDirectorProjection2D);
        var effect = cc.Liquid.create(2, cc.size(32, 24), 1, 20);

        var stopEffect = cc.Sequence.create(effect, cc.DelayTime.create(2), cc.StopGrid.create());

        var bg = this.getChildByTag(EffectsAdvancedTest.TAG_BACKGROUND);
        bg.runAction(stopEffect);
    },

    onExit:function () {
        this._super();
        cc.Director.getInstance().setProjection(cc.DIRECTOR_PROJECTION_3D);
    }
});

var Issue631 = EffectAdvanceTextLayer.extend({
    title:function () {
        return "Testing Opacity";
    },

    subtitle:function () {
        return "Effect image should be 100% opaque. Testing issue #631";
    },

    onEnter:function () {
        this._super();

        var effect = cc.Sequence.create(cc.DelayTime.create(2.0), cc.Shaky3D.create(5.0, cc.size(5, 5), 16, false));

        // cleanup
        var bg = this.getChildByTag(EffectsAdvancedTest.TAG_BACKGROUND);
        this.removeChild(bg, true);

        // background
        var layer = cc.LayerColor.create(cc.c4b(255, 0, 0, 255));
        this.addChild(layer, -10);
        var sprite = cc.Sprite.create(s_pathGrossini);
        sprite.setPosition(50, 80);
        layer.addChild(sprite, 10);

        // foreground
        var layer2BaseGrid = cc.NodeGrid.create();
        var layer2 = cc.LayerColor.create(cc.c4b(0, 255, 0, 255));
        var fog = cc.Sprite.create(s_pathFog);

        fog.setBlendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        layer2.addChild(fog, 1);
        layer2BaseGrid.addChild(layer2);
        this.addChild(layer2BaseGrid, 1);

        layer2BaseGrid.runAction(cc.RepeatForever.create(effect));
    }
});

var arrayOfEffectsAdvancedTest = [
    Effect3,
    Effect2,
    Effect1,
    Effect4,
    Effect5,
    Issue631
];

var nextEffectAdvanceAction = function () {
    sceneIndex++;
    sceneIndex = sceneIndex % arrayOfEffectsAdvancedTest.length;
    return new arrayOfEffectsAdvancedTest[sceneIndex]();
};

var backEffectAdvanceAction = function () {
    sceneIndex--;
    if (sceneIndex < 0)
        sceneIndex += arrayOfEffectsAdvancedTest.length;
    return new arrayOfEffectsAdvancedTest[sceneIndex]();
};

var restartEffectAdvanceAction = function () {
    return new arrayOfEffectsAdvancedTest[sceneIndex]();
};

var EffectAdvanceScene = TestScene.extend({
    runThisTest:function () {
        sceneIndex = -1;
        var pLayer = nextEffectAdvanceAction();
        this.addChild(pLayer);
        cc.Director.getInstance().replaceScene(this);
    }
});



