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

var UIButtonTest = UIScene.extend({
    init: function () {
        if (this._super()) {
            //init text
            this._topDisplayLabel.setText("No Event");
            this._bottomDisplayLabel.setText("Button");

            var widgetSize = this._widget.getSize();
            // Create the button
            var button = ccs.Button.create();
            button.setTouchEnabled(true);
            button.loadTextures("res/cocosgui/animationbuttonnormal.png", "res/cocosgui/animationbuttonpressed.png", "");
            button.x = widgetSize.width / 2.0;
            button.y = widgetSize.height / 2.0;
            button.addTouchEventListener(this.touchEvent ,this);
            this._mainNode.addChild(button);

            return true;
        }
        return false;
    },

    touchEvent: function (sender, type) {
        switch (type) {
            case ccs.TouchEventType.began:
                this._topDisplayLabel.setText("Touch Down");
                break;

            case ccs.TouchEventType.moved:
                this._topDisplayLabel.setText("Touch Move");
                break;

            case ccs.TouchEventType.ended:
                this._topDisplayLabel.setText("Touch Up");
                break;

            case ccs.TouchEventType.canceled:
                this._topDisplayLabel.setText("Touch Cancelled");
                break;

            default:
                break;
        }
    }
});
var UIButtonTest_Scale9 = UIScene.extend({
    init: function () {
        if (this._super()) {
            //init text
            this._topDisplayLabel.setText("No Event");
            this._bottomDisplayLabel.setText("Button scale9 render");

            // Create the button
            var button = ccs.Button.create();
            button.setTouchEnabled(true);
            button.setScale9Enabled(true);
            button.loadTextures("res/cocosgui/button.png", "res/cocosgui/buttonHighlighted.png", "");
            button.x = this._widget.width / 2.0;
            button.y = this._widget.height / 2.0;
            button.setSize(cc.size(150, button.height * 1.5));
            button.addTouchEventListener(this.touchEvent ,this);
            this._mainNode.addChild(button);

            return true;
        }
        return false;
    },

    touchEvent: function (sender, type) {
        switch (type) {
            case ccs.TouchEventType.began:
                this._topDisplayLabel.setText("Touch Down");
                break;
            case ccs.TouchEventType.moved:
                this._topDisplayLabel.setText("Touch Move");
                break;
            case ccs.TouchEventType.ended:
                this._topDisplayLabel.setText("Touch Up");
                break;
            case ccs.TouchEventType.canceled:
                this._topDisplayLabel.setText("Touch Cancelled");
                break;

            default:
                break;
        }
    }
});

var UIButtonTest_PressedAction = UIScene.extend({
    init: function () {
        if (this._super()) {
            //init text
            this._topDisplayLabel.setText("No Event");
            this._bottomDisplayLabel.setText("Button Pressed Action");

            var widgetSize = this._widget.getSize();
            // Create the button
            var button = ccs.Button.create();
            button.setTouchEnabled(true);
            button.setPressedActionEnabled(true);
            button.loadTextures("res/cocosgui/animationbuttonnormal.png", "res/cocosgui/animationbuttonpressed.png", "");
            button.x = widgetSize.width / 2;
            button.y = widgetSize.height / 2;
            button.addTouchEventListener(this.touchEvent ,this);
            this._mainNode.addChild(button);
            return true;
        }
        return false;
    },

    touchEvent: function (sender, type) {
        switch (type) {
            case ccs.TouchEventType.began:
                this._topDisplayLabel.setText("Touch Down");
                break;
            case ccs.TouchEventType.moved:
                this._topDisplayLabel.setText("Touch Move");
                break;
            case ccs.TouchEventType.ended:
                this._topDisplayLabel.setText("Touch Up");
                break;
            case ccs.TouchEventType.canceled:
                this._topDisplayLabel.setText("Touch Cancelled");
                break;
            default:
                break;
        }
    }
});

var UIButtonTest_Title = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("No Event");
            this._bottomDisplayLabel.setText("Button with title");

            // Create the text button
            var textButton = ccs.Button.create();
            textButton.setTouchEnabled(true);
            textButton.loadTextures("res/cocosgui/backtotopnormal.png", "res/cocosgui/backtotoppressed.png", "");
            textButton.setTitleText("Title Button");
            textButton.x = widgetSize.width / 2.0;
            textButton.y = widgetSize.height / 2.0;
            textButton.addTouchEventListener(this.touchEvent ,this);
            this._mainNode.addChild(textButton);

            return true;
        }
        return false;
    },

    touchEvent: function (sender, type) {
        switch (type) {
            case ccs.TouchEventType.began:
                this._topDisplayLabel.setText("Touch Down");
                break;
            case ccs.TouchEventType.moved:
                this._topDisplayLabel.setText("Touch Move");
                break;
            case ccs.TouchEventType.ended:
                this._topDisplayLabel.setText("Touch Up");
                break;
            case ccs.TouchEventType.canceled:
                this._topDisplayLabel.setText("Touch Cancelled");
                break;
            default:
                break;
        }
    }
});