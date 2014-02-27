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

UIScene = cc.Layer.extend({
    _uiLayer: null,
    _widget: null,
    _sceneTitle: null,
    _topDisplayLabel:null,
    _bottomDisplayLabel:null,
    ctor: function () {
        cc.Layer.prototype.ctor.call(this)
        this._uiLayer = null;
        this._widget = null;
    },
    init: function () {
        if (this._super()) {
            this._uiLayer = cc.Layer.create();
            this.addChild(this._uiLayer);

            this._widget = ccs.GUIReader.getInstance().widgetFromJsonFile("res/cocosgui/UITest/UITest.json");
            this._uiLayer.addChild(this._widget);

            var root = this._uiLayer.getChildByTag(81);

            this._sceneTitle = root.getChildByName("UItest");

            var back_label = root.getChildByName("back");
            back_label.addTouchEventListener(this.toExtensionsMainLayer, this);

            var left_button = root.getChildByName("left_Button");
            left_button.addTouchEventListener(this.previousCallback ,this);

            var middle_button = root.getChildByName("middle_Button");
            middle_button.addTouchEventListener(this.restartCallback ,this);

            var right_button = root.getChildByName("right_Button");
            right_button.addTouchEventListener(this.nextCallback ,this);

            var winSize = cc.Director.getInstance().getWinSize();
            var scale = 1.0;//winSize.height / 320;
            this._uiLayer.setAnchorPoint(0,0);
            this._uiLayer.setScale(scale);
            this._uiLayer.setPosition(cc.p((winSize.width - 480 * scale) / 2, (winSize.height - 320 * scale) / 2));

            var widgetSize = this._widget.getSize();
            var eventLabel = ccui.Text.create();
            eventLabel.setText("");
            eventLabel.setFontName("Marker Felt");
            eventLabel.setFontSize(32);
            eventLabel.setAnchorPoint(0.5, -1);
            eventLabel.setPosition(widgetSize.width / 2.0, widgetSize.height / 2.0);
            this._uiLayer.addChild(eventLabel);
            this._topDisplayLabel = eventLabel;

            var uiLabel = ccui.Text.create();
            uiLabel.setText("TEST");
            uiLabel.setFontName("Marker Felt");
            uiLabel.setFontSize(30);
            uiLabel.setColor(cc.c3b(159, 168, 176));
            uiLabel.setPosition(widgetSize.width / 2.0, widgetSize.height / 2.0 - uiLabel.getSize().height * 1.75);
            this._uiLayer.addChild(uiLabel);
            this._bottomDisplayLabel = uiLabel;

            return true;
        }
        return false;
    },
    setSceneTitle: function (title) {
        this._sceneTitle.setText(title);
    },
    toExtensionsMainLayer: function (sender, type) {
        if (type == ccui.TouchEventType.ended) {
            UISceneManager.destroyInstance();
            ccs.ActionManager.destroyInstance();
            ccs.SceneReader.destroyInstance();
            var scene = new CocoStudioTestScene();
            scene.runThisTest();
        }
    },

    previousCallback: function (sender, type) {
        if (type == ccui.TouchEventType.ended) {
            cc.Director.getInstance().replaceScene(UISceneManager.getInstance().previousUIScene());
        }
    },

    restartCallback: function (sender, type) {
        if (type == ccui.TouchEventType.ended) {
            cc.Director.getInstance().replaceScene(UISceneManager.getInstance().currentUIScene());
        }
    },

    nextCallback: function (sender, type) {
        if (type == ccui.TouchEventType.ended) {
            cc.Director.getInstance().replaceScene(UISceneManager.getInstance().nextUIScene());
        }
    }
});
