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

var currentScene = 0;

var ScriptTestLayer = BaseTestLayer.extend({
    _tempLayer:null,
    clickMeShowTempLayer:function () {
        if (this._tempLayer != null)
        {
            this._tempLayer.removeFromParent();
        }
        this._tempLayer = new ScriptTestTempLayer();
        this.addChild(this._tempLayer);
    },
    clickMeReloadTempLayer:function(){
        cc.sys.cleanScript("ScriptTestTempFile.js");
        // insert from the sdcard
        // to do
        if (cc.sys.os == cc.sys.OS_ANDROID)
        {
            jsb.fileUtils.addSearchPath("/mnt/sdcard/newScript", true);
            require("ScriptTestTempFile.js");
        }

        this.clickMeShowTempLayer();
    },
    ctor : function () {
        this._super();

        var menu = new cc.Menu();
        menu.setPosition(cc.p(0, 0));
        menu.width = winSize.width;
        menu.height = winSize.height;
        this.addChild(menu, 1);
        var item1 = new cc.MenuItemLabel(new cc.LabelTTF("Click me show tempLayer", "Arial", 22), this.clickMeShowTempLayer, this);
        menu.addChild(item1);

        var item2 = new cc.MenuItemLabel(new cc.LabelTTF("Click me reload tempLayer", "Arial", 22), this.clickMeReloadTempLayer, this);
        menu.addChild(item2);

        menu.alignItemsVerticallyWithPadding(8);
        menu.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(+180, 0)));
    },

    getTitle : function() {
        return "ScriptTest";
    },
    onNextCallback : function () {
        if (currentScene < 2)
        {
            currentScene++;
        }
        else currentScene = 0;
        var scene = new ScriptTestLoaderScene();
        scene.runThisTest();
    },

    onBackCallback : function () {
        if (currentScene > 0)
        {
            currentScene--;
        }
        else currentScene = 2;
        var scene = new ScriptTestLoaderScene();
        scene.runThisTest();
    }
});

var RestartGameLayer = BaseTestLayer.extend({
    ctor : function () {
        this._super();
    }
});
var ScriptTestScene = TestScene.extend({
    ctor : function () {
        this._super();
        var layer = new ScriptTestLayer();
        this.addChild(layer);
    }
});

var ScriptTestLoaderScene = TestScene.extend({
    runThisTest : function () {
        var scene = new ScriptTestScene();
        cc.director.runScene(scene);
    }
});