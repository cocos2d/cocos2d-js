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

var ComponentsTestLayer = cc.LayerColor.extend({
    init: function () {
        if (cc.LayerColor.prototype.init.call(this, cc.color(255, 255, 255, 255))) {
            var root = this.createGameScene();
            this.addChild(root, 0, 1);
            root.getChildByTag(1).addComponent(ccs.ComAudio.create());
            root.getChildByTag(1).addComponent(PlayerController.create());
            root.addComponent(ccs.ComAudio.create());
            root.addComponent(ccs.ComAttribute.create());
            root.addComponent(SceneController.create());
            return true;
        }
        return false;
    },

    createGameScene: function () {
        var root = cc.Node.create();
        var winSize = cc.director.getWinSize();
        var player = cc.Sprite.create("res/components/Player.png", cc.rect(0, 0, 27, 40));
        player.x = 30;
        player.y = winSize.height / 2;
        root.addChild(player, 1, 1);

        var itemBack = cc.MenuItemFont.create("Back", this.toExtensionsMainLayer, this);
        itemBack.color = cc.color(0, 0, 0);
        itemBack.x = cc.visibleRect.bottomRight.x - 50;
        itemBack.y = cc.visibleRect.bottomRight.y + 25;
        var menuBack = cc.Menu.create(itemBack);
        menuBack.x = 0;
        menuBack.y = 0;
        this.addChild(menuBack);
        return root;
    },

    toExtensionsMainLayer: function (sender) {
        var scene = new CocoStudioTestScene();
        scene.runThisTest();
    }
});
ComponentsTestLayer.scene = function(){
    var scene = cc.Scene.create();
    var layer = new ComponentsTestLayer();
    layer.init();
    scene.addChild(layer);
    return scene;
};
var runComponentsTestLayer = function () {
    var scene = ComponentsTestLayer.scene();
    cc.director.runScene(scene);
};