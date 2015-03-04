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
var Camera3DTestIdx = -1;

var Camera3DTestDemo = cc.Layer.extend({
    _title:"",
    _subtitle:"",

    ctor:function () {
        this._super();
    },

    //
    // Menu
    //
    onEnter:function () {
        this._super();

        var label = new cc.LabelTTF(this._title, "Arial", 28);
        this.addChild(label, 100, BASE_TEST_TITLE_TAG);
        label.x = winSize.width / 2;
        label.y = winSize.height - 50;

        var label2 = new cc.LabelTTF(this._subtitle, "Thonburi", 16);
        this.addChild(label2, 101, BASE_TEST_SUBTITLE_TAG);
        label2.x = winSize.width / 2;
        label2.y = winSize.height - 80;

        var item1 = new cc.MenuItemImage(s_pathB1, s_pathB2, this.onBackCallback, this);
        var item2 = new cc.MenuItemImage(s_pathR1, s_pathR2, this.onRestartCallback, this);
        var item3 = new cc.MenuItemImage(s_pathF1, s_pathF2, this.onNextCallback, this);

        item1.tag = BASE_TEST_MENUITEM_PREV_TAG;
        item2.tag = BASE_TEST_MENUITEM_RESET_TAG;
        item3.tag = BASE_TEST_MENUITEM_NEXT_TAG;

        var menu = new cc.Menu(item1, item2, item3);

        menu.x = 0;
        menu.y = 0;
        var width = item2.width, height = item2.height;
        item1.x =  winSize.width/2 - width*2;
        item1.y = height/2 ;
        item2.x =  winSize.width/2;
        item2.y = height/2 ;
        item3.x =  winSize.width/2 + width*2;
        item3.y = height/2 ;

        this.addChild(menu, 102, BASE_TEST_MENU_TAG);
    },

    onRestartCallback:function (sender) {
        var s = new Camera3DTestScene();
        s.addChild(restartCamera3DTest());
        director.runScene(s);
    },

    onNextCallback:function (sender) {
        var s = new Camera3DTestScene();
        s.addChild(nextCamera3DTest());
        director.runScene(s);
    },

    onBackCallback:function (sender) {
        var s = new Camera3DTestScene();
        s.addChild(previousCamera3DTest());
        director.runScene(s);
    },
});

var Camera3DTestScene = cc.Scene.extend({
    ctor:function () {
        this._super();

        var label = new cc.LabelTTF("Main Menu", "Arial", 20);
        var menuItem = new cc.MenuItemLabel(label, this.onMainMenuCallback, this);

        var menu = new cc.Menu(menuItem);
        menu.x = 0;
        menu.y = 0;
        menuItem.x = winSize.width - 50;
        menuItem.y = 25;
        this.addChild(menu);
    },
    onMainMenuCallback:function () {
        var scene = new cc.Scene();
        var layer = new TestController();
        scene.addChild(layer);
        director.runScene(scene);
    },
    runThisTest:function (num) {
        Camera3DTestIdx = (num || num == 0) ? (num - 1) : -1;
        var layer = nextCamera3DTest();
        this.addChild(layer);

        director.runScene(this);
    }
});

var CameraRotationTest = Camera3DTestDemo.extend({
    _title:"Camera Rotation Test",
    _subtitle:"Slide to rotate",
    _camControlNode:null,
    _camNode:null,

    ctor:function(){
        this._super();

        var s = cc.winSize;
        this._camControlNode = new cc.Node();
        this._camControlNode.setNormalizedPosition(cc.p(0.5, 0.5));
        this.addChild(this._camControlNode);

        this._camNode = new cc.Node();
        this._camNode.setVertexZ(cc.Camera.getDefaultCamera().getPosition3D().z);
        this._camControlNode.addChild(this._camNode);

        var sp3d = new cc.Sprite3D();
        sp3d.setPosition(s.width/2, s.height/2);
        this.addChild(sp3d);

        var lship = new cc.LabelTTF("Ship");
        lship.setPosition(0, 20);
        sp3d.addChild(lship);

        //Billboards
        //Yellow is at the back
        var bill1 = new cc.BillBoard("Images/Icon.png");
        bill1.setPosition3D(cc.vec3(50, 10, -10));
        bill1.setColor(cc.color.YELLOW);
        bill1.setScale(0.6);
        sp3d.addChild(bill1);

        var l1 = new cc.LabelTTF("Billboard1");
        l1.setPosition(cc.p(0, -10));
        l1.setColor(cc.color.WHITE);
        l1.setScale(3);
        bill1.addChild(l1);

        var p1 = new cc.ParticleSystem("Particles/SmallSun.plist");
        p1.setPosition(30, 80);
        bill1.addChild(p1);

        var bill2 = new cc.BillBoard("Images/Icon.png");
        bill2.setPosition3D(cc.vec3(-50, -10, 10));
        bill2.setScale(0.6);
        sp3d.addChild(bill2);

        var l2 = new cc.LabelTTF("Billboard2");
        l2.setPosition(0, -10);
        l2.setColor(cc.color.WHITE);
        l2.setScale(3);
        bill2.addChild(l2);

        var p2 = new cc.ParticleSystem("Particles/SmallSun.plist");
        p2.setPosition(30,80);
        bill2.addChild(p2);

        //3D models
        var model = new cc.Sprite3D("Sprite3DTest/boss1.obj");
        model.setScale(4);
        model.setTexture("Sprite3DTest/boss.png");
        model.setPosition3D(cc.vec3(s.width/2, s.height/2, 0));
        this.addChild(model);

        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function(touch, event){return true;},
            onTouchMoved: function(touch, event){
                var dx = touch.getDelta().x;
                var rot = self._camControlNode.getRotation3D();
                rot.y += dx;
                self._camControlNode.setRotation3D(rot);

                var matrix = self._camNode.getNodeToWorldTransform3D();
                var worldPos = cc.vec3(matrix[12], matrix[13], matrix[14]);

                cc.Camera.getDefaultCamera().setPosition3D(worldPos);
                cc.Camera.getDefaultCamera().lookAt(self._camControlNode.getPosition3D());
            }
        }, this);
    }
});

//
// Flow control
//
var arrayOfCamera3DTest = [
    CameraRotationTest,
    //TODO bind DrawNode3D
    // Camera3DTestDemo,
    // CameraCullingDemo,
    // CameraArcBallDemo
];

var nextCamera3DTest = function () {
    Camera3DTestIdx++;
    Camera3DTestIdx = Camera3DTestIdx % arrayOfCamera3DTest.length;

    return new arrayOfCamera3DTest[Camera3DTestIdx ]();
};
var previousCamera3DTest = function () {
    Camera3DTestIdx--;
    if (Camera3DTestIdx < 0)
        Camera3DTestIdx += arrayOfCamera3DTest.length;

    return new arrayOfCamera3DTest[Camera3DTestIdx ]();
};
var restartCamera3DTest = function () {
    return new arrayOfCamera3DTest[Camera3DTestIdx ]();
};
