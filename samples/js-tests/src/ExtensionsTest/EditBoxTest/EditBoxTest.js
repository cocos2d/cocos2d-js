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

var EditBoxTestLayer = cc.Layer.extend({
    _box1: null,
    _box2: null,
    _box3: null,
    _box4: null,

    ctor: function () {
        this._super();
        cc.associateWithNative(this, cc.Layer);
    },

    init: function () {
        this._box1 = cc.EditBox.create(cc.size(170, 50), cc.Scale9Sprite.create("res/extensions/green_edit.png"), cc.Scale9Sprite.create("res/extensions/orange_edit.png"));
        this._box1.setText("EditBoxs");
        this._box1.setPosition(220, 50);
        this._box1.setFontColor(cc.c3b(251, 250, 0));
        this._box1.setDelegate(this);
        this.addChild(this._box1);

        this._box2 = cc.EditBox.create(cc.size(130, 40), cc.Scale9Sprite.create("res/extensions/green_edit.png"));
        this._box2.setText("EditBox Sample");
        this._box2.setPosition(220, 190);
        this._box2.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD);
        this._box2.setFontColor(cc.c3b(255, 250, 0));
        this._box2.setDelegate(this);
        this.addChild(this._box2);

        this._box3 = cc.EditBox.create(cc.size(65, 40), cc.Scale9Sprite.create("res/extensions/orange_edit.png"));
        this._box3.setText("Image");
        this._box3.setPosition(220, 250);
        this._box3.setFontColor(cc.c3b(15, 250, 245));
        this._box3.setDelegate(this);
        this.addChild(this._box3);

        this._box4 = cc.EditBox.create(cc.size(180, 40), cc.Scale9Sprite.create("res/extensions/yellow_edit.png"));
        this._box4.setPlaceholderFontColor(cc.c3b(255, 0, 0));
        this._box4.setPlaceHolder("Tooltip:");
        this._box4.setPosition(220, 140);
        this._box4.setDelegate(this);
        this._box4.setFontColor(cc.c3b(5, 4, 10));
        this._box4.setMaxLength(10);
        this.addChild(this._box4);

        var itemBack = cc.MenuItemFont.create("Back", this.toExtensionsMainLayer, this);
        itemBack.setPosition(winSize.width - 50, 25);
        var menuBack = cc.Menu.create(itemBack);
        menuBack.setPosition(0, 0);
        this.addChild(menuBack);

        return true;
    },

    toExtensionsMainLayer: function (sender) {
        var scene = new ExtensionsTestScene();
        scene.runThisTest();
    },

    editBoxEditingDidBegin: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " DidBegin !");
    },

    editBoxEditingDidEnd: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " DidEnd !");
    },

    editBoxTextChanged: function (editBox, text) {
        cc.log("editBox " + this._getEditBoxName(editBox) + ", TextChanged, text: " + text);
    },

    editBoxReturn: function (editBox) {
        cc.log("editBox " + this._getEditBoxName(editBox) + " was returned !");
    },

    _getEditBoxName :function(editBox){
        if (this._box1 == editBox) {
            return "box1";
        } else if (this._box2 == editBox) {
            return "box2";
        } else if (this._box3 == editBox) {
            return "box3";
        } else if (this._box4 == editBox) {
            return "box4";
        }
        return "Unknown EditBox";
    }
});

EditBoxTestLayer.create = function () {
    var retObj = new EditBoxTestLayer();
    if (retObj && retObj.init()) {
        return retObj;
    }
    return null;
};

var runEditBoxTest = function () {
    var pScene = cc.Scene.create();
    var pLayer = EditBoxTestLayer.create();
    pScene.addChild(pLayer);
    cc.Director.getInstance().replaceScene(pScene);
};