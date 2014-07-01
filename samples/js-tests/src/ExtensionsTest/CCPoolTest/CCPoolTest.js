/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 Copyright (c) 2013 James Chen

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


var CCPoolTest = cc.Layer.extend({
    timeList: null,
    init: function () {
        this.timeList = {};
        var winSize = cc.director.getWinSize();

        var MARGIN = 40;
        var label = cc.LabelTTF.create("CCPoolTest", "Arial", 28);
        label.setPosition(cc.p(winSize.width / 2, winSize.height - MARGIN));
        this.addChild(label, 0);

        var menuRequest = cc.Menu.create();
        menuRequest.setPosition(cc.p(0, 0));
        this.initUI();
        return true;
    },
    initUI: function () {
        var createLabel = cc.LabelTTF.create("click me to create 150 sprites directly", "Impact", 23);
        var reCreateLabel = cc.LabelTTF.create("click me to create 150 sprites use pool", "Impact", 23);
        reCreateLabel.color = cc.color(255, 255, 255, 255);
        createLabel.color = cc.color(255, 255, 255, 255);
        var menuItem1 = cc.MenuItemLabel.create(createLabel, this.addSpriteByCreate, this);
        var menuItem2 = cc.MenuItemLabel.create(reCreateLabel, this.addSpriteByPool, this);
        var menu = cc.Menu.create(menuItem1, menuItem2);
        menu.alignItemsHorizontallyWithPadding(40);
        this.directLabel = cc.LabelTTF.create("create directly cost:", "Arial", 21);
        this.poolLabel = cc.LabelTTF.create("use pool cost:", "Arial", 21);
        this.directLabel.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(-250, -45)));
        this.directLabel.anchorY = 0;
        this.poolLabel.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(250, -45)));
        this.poolLabel.anchorY = 0;
        this.addChild(this.directLabel);
        this.addChild(this.poolLabel);
        this.addChild(menu, 100);

        // Back Menu
        var itemBack = cc.MenuItemFont.create("Back", this.toExtensionsMainLayer, this);
        itemBack.setPosition(cc.p(winSize.width - 50, 25));
        var menuBack = cc.Menu.create(itemBack);
        menuBack.setPosition(cc.p(0, 0));
        this.addChild(menuBack);
    },
    setDirectLabel: function (time) {
        if (time == 0) {
            time = "<1";
        }
        this.directLabel.string = "create directly cost:" + time + "ms";
    },
    setPoolLabel: function (time) {
        if (time == 0) {
            time = "<1";
        }
        this.poolLabel.string = "use pool cost:" + time + "ms";

    },
    addSpriteByCreate: function () {
        this.datalist1 = [];
        this.timeStart("directly");
        for (var i = 0; i < 150; i++) {
            var sp = MySprite.create(1, 2, 3);
            this.datalist1.push(sp);
            this.addChild(sp, 100);
            sp.x = 50 + 8 * i;
        }
        this.setDirectLabel(this.timeEnd("directly"));
        this.schedule(function () {
            for (var i = 0; i < this.datalist1.length; i++) {
                this.datalist1[i].removeFromParent(true);
            }
            this.datalist1 = [];
        }, 0, 1, 0.1);
    },
    addSpriteByPool: function () {
        this.datalist2 = [];
        for (var i = 0; i < 150; i++) {
            var sp = MySprite.create(1, 2, 3);
            this.addChild(sp);
            cc.pool.putInPool(sp);
        }
        this.timeStart("use Pool");
        for (var i = 0; i < 150; i++) {
            var sp = MySprite.reCreate(4, 5, 6);
            this.datalist2.push(sp);
            this.addChild(sp, 100);
//            sp.runAction(action);
            sp.x = 50 + 8 * i;
        }
        this.setPoolLabel(this.timeEnd("use Pool"));
        this.schedule(function () {
            for (var i = 0; i < this.datalist2.length; i++) {
                this.datalist2[i].removeFromParent(true);
            }
            this.datalist2 = [];
            cc.pool.drainAllPools();
        }, 0, 1, 0.1);
    },
    timeStart: function (name) {
        this.timeList[name] = {startTime: Date.now(), EndTime: 0, DeltaTime: 0};
    },
    timeEnd: function (name) {
        var obj = this.timeList[name];
        obj.EndTime = Date.now();
        obj.DeltaTime = obj.EndTime - obj.startTime;
        return obj.DeltaTime;
    },
    toExtensionsMainLayer: function (sender) {
        var scene = new ExtensionsTestScene();
        scene.runThisTest();
    }
});

CCPoolTest.create = function () {
    var retObj = new CCPoolTest();
    if (retObj && retObj.init()) {
        return retObj;
    }
    return null;
};


var runCCPoolTest = function () {
    var pScene = cc.Scene.create();
    var pLayer = CCPoolTest.create();
    pScene.addChild(pLayer);
    cc.director.runScene(pScene);
};
var MySprite = cc.Sprite.extend({
    _hp: 0,
    _sp: 0,
    _mp: 0,
    ctor: function (f1, f2, f3) {
        this._super(s_grossini);
        this.initData(f1, f2, f3);
    },
    initData: function (f1, f2, f3) {
        this._hp = f1;
        this._mp = f2;
        this._sp = f3;
    },
    unuse: function () {
        this._hp = 0;
        this._mp = 0;
        this._sp = 0;
        this.retain();//if in jsb
        this.setVisible(false);
        this.removeFromParent(true);
    },
    reuse: function (f1, f2, f3) {
        this.initData(f1, f2, f3);
        this.setVisible(true);
    }
});

MySprite.create = function (f1, f2, f3) {
    return new MySprite(f1, f2, f3)
}
MySprite.reCreate = function (f1, f2, f3) {
    var pool = cc.pool;
    if (pool.hasObj(MySprite)) return pool.getFromPool(MySprite, f1, f2, f3);
    return  MySprite.create(f1, f2, f3);
}