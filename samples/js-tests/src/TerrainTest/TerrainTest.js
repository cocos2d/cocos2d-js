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
var TerrainTestIdx = -1;

var TerrainTestDemo = cc.Layer.extend({
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
        var s = new TerrainTestScene();
        s.addChild(restartTerrainTest());
        director.runScene(s);
    },

    onNextCallback:function (sender) {
        var s = new TerrainTestScene();
        s.addChild(nextTerrainTest());
        director.runScene(s);
    },

    onBackCallback:function (sender) {
        var s = new TerrainTestScene();
        s.addChild(previousTerrainTest());
        director.runScene(s);
    },
});

var TerrainTestScene = cc.Scene.extend({
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
        TerrainTestIdx = (num || num == 0) ? (num - 1) : -1;
        var layer = nextTerrainTest();
        this.addChild(layer);

        director.runScene(this);
    }
});

var TerrainSimple = TerrainTestDemo.extend({
    _title:"Terrain with skirt",
    _subtitle:"Drag to walkthru",
    _camera:null,

    ctor:function(){
        this._super();

        var visibleSize = cc.director.getVisibleSize();

        //use custom camera
        this._camera = cc.Camera.createPerspective(60,visibleSize.width/visibleSize.height,0.1,800);
        this._camera.setCameraFlag(cc.CameraFlag.USER1);
        this._camera.setPosition3D(cc.math.vec3(-1, 1.6, 4));
        this.addChild(this._camera);

        var r = {file:"TerrainTest/dirt.jpg", size:35},
            g = {file:"TerrainTest/Grass2.jpg", size:35},
            b = {file:"TerrainTest/road.jpg", size:35},
            a = {file:"TerrainTest/GreenSkin.jpg", size:35};
        var data = {
            heightMap : "TerrainTest/heightmap16.jpg",
            alphaMap : "TerrainTest/alphamap.png",
            detailMap : [r, g, b, a],
            chunkSize : cc.size(32,32),
            mapHeight : 2,
            mapScale : 0.1
        };

        var terrain = jsb.Terrain.create(data, jsb.Terrain.CrackFixedType.SKIRT);
        terrain.setLODDistance(3.2,6.4,9.6);
        terrain.setMaxDetailMapAmount(4);
        this.addChild(terrain);
        terrain.setCameraMask(2);
        terrain.setDrawWire(false);

        cc.eventManager.addListener({
            event:cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesMoved:this.onTouchesMoved.bind(this)
        }, this);
    },

    onTouchesMoved:function(touches, event){
        var delta = cc.director.getDeltaTime();
        var touch = touches[0];
        var location = touch.getLocation();
        var previousLocation = touch.getPreviousLocation();
        var newPos = cc.p(previousLocation.x - location.x, previousLocation.y - location.y);

        var m = this._camera.getNodeToWorldTransform3D();
        var cameraDir = cc.math.vec3(-m[8], -m[9], -m[10]);
        cameraDir.normalize();
        cameraDir.y = 0;

        var cameraRightDir = cc.math.vec3(m[0], m[1], m[2]);
        cameraRightDir.normalize();
        cameraRightDir.y = 0;

        var cameraPos = this._camera.getPosition3D();
        cameraPos.x += cameraDir.x * newPos.y * 0.5 *delta + cameraRightDir.x * newPos.x * 0.5 *delta;
        cameraPos.y += cameraDir.y * newPos.y * 0.5 *delta + cameraRightDir.y * newPos.x * 0.5 *delta;
        cameraPos.z += cameraDir.z * newPos.y * 0.5 *delta + cameraRightDir.z * newPos.x * 0.5 *delta;
        this._camera.setPosition3D(cameraPos);
    }
});


//
// Flow control
//
var arrayOfTerrainTest = [
    TerrainSimple
];

var nextTerrainTest = function () {
    TerrainTestIdx++;
    TerrainTestIdx = TerrainTestIdx % arrayOfTerrainTest.length;

    return new arrayOfTerrainTest[TerrainTestIdx ]();
};
var previousTerrainTest = function () {
    TerrainTestIdx--;
    if (TerrainTestIdx < 0)
        TerrainTestIdx += arrayOfTerrainTest.length;

    return new arrayOfTerrainTest[TerrainTestIdx ]();
};
var restartTerrainTest = function () {
    return new arrayOfTerrainTest[TerrainTestIdx ]();
};
