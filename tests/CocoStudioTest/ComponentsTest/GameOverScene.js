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

var GameOverLayer = cc.LayerColor.extend({
    _label: null,
    init: function () {
        if (this._super(cc.c4b(255, 255, 255, 255))) {
            var winSize = cc.Director.getInstance().getWinSize();
            this._label = cc.LabelTTF.create("", "Artial", 32);
            this._label.retain();
            this._label.setColor(cc.c3b(0, 0, 0));
            this._label.setPosition(winSize.width / 2, winSize.height / 2);
            this.addChild(this._label);
            this.runAction(cc.Sequence.create(cc.DelayTime.create(3), cc.CallFunc.create(this.gameOverDone, this)));
            var itemBack = cc.MenuItemFont.create("Back", this.toExtensionsMainLayer, this);
            itemBack.setColor(cc.c3b(0, 0, 0));
            itemBack.setPosition(cc.VisibleRect.bottomRight().x - 50, cc.VisibleRect.bottomRight().y + 25);
            var menuBack = cc.Menu.create(itemBack);
            menuBack.setPosition(0, 0);
            this.addChild(menuBack);
            return true;
        }
        return false;
    },
    gameOverDone: function () {
        cc.Director.getInstance().replaceScene(ComponentsTestLayer.scene());
    },
    getLabel: function () {
        return this._label;
    }
});
var GameOverScene = cc.Scene.extend({
    _layer: null,
    init: function () {
        this._super();
        this._layer = new GameOverLayer();
        this._layer.init();
        this.addChild(this._layer);
    },
    getLayer: function () {
        return this._layer;
    }
});
GameOverScene.create = function () {
    var scene = new GameOverScene();
    scene.init();
    return scene;
};
