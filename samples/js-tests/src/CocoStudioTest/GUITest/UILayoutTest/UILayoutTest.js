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

var UILayoutTestBase = UIScene.extend({
    layout: null,
    button: null,
    textButton: null,
    button_scale9: null,
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText(this.getText());
            this._bottomDisplayLabel.x = widgetSize.width / 2;
            this._bottomDisplayLabel.y = widgetSize.height / 2 - this._bottomDisplayLabel.height * 3;

            var background = this._widget.getChildByName("background_Panel");

            // Create the layout
            this.layout = this.createLayout();
            var  layoutRect = this.layout.getSize();
            var backgroundRect = background.getSize();
            this.layout.x = (widgetSize.width - backgroundRect.width) / 2 + (backgroundRect.width - layoutRect.width) / 2;
	        this.layout.y = (widgetSize.height - backgroundRect.height) / 2 + (backgroundRect.height - layoutRect.height) / 2;
            this._mainNode.addChild(this.layout);

            this.button = ccs.Button.create();
            this.button.setTouchEnabled(true);
            this.button.loadTextures("res/cocosgui/animationbuttonnormal.png", "res/cocosgui/animationbuttonpressed.png", "");
            this.button.x = this.button.width / 2;
            this.button.y = layoutRect.height - this.button.height / 2;
            this.layout.addChild(this.button);

            this.textButton = ccs.Button.create();
            this.textButton.setTouchEnabled(true);
            this.textButton.loadTextures("res/cocosgui/backtotopnormal.png", "res/cocosgui/backtotoppressed.png", "");
            this.textButton.setTitleText("Text Button");
            this.textButton.x = layoutRect.width / 2;
            this.textButton.y = layoutRect.height / 2;
            this.layout.addChild(this.textButton);

            this.button_scale9 = ccs.Button.create();
            this.button_scale9.setTouchEnabled(true);
            this.button_scale9.loadTextures("res/cocosgui/button.png", "res/cocosgui/buttonHighlighted.png", "");
            this.button_scale9.setScale9Enabled(true);
            this.button_scale9.width = 100;
	        this.button_scale9.height = this.button_scale9.height;
            this.button_scale9.x = layoutRect.width - this.button_scale9.width / 2;
            this.button_scale9.y = this.button_scale9.height / 2;
            this.layout.addChild(this.button_scale9);

            this.setLayoutParameter();
            return true;
        }
        return false;
    },
    getText: function () {
        return "";
    },
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    setLayoutParameter: function () {

    }
});
var UILayoutTest = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout";
    }
});
var UILayoutTest_Color = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setBackGroundColorType(ccs.LayoutBackGroundColorType.solid);
        layout.setBackGroundColor(cc.color(128, 128, 128));
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout color render";
    }
});
var UILayoutTest_Gradient = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setBackGroundColorType(ccs.LayoutBackGroundColorType.gradient);
        layout.setBackGroundColor(cc.color(64, 64, 64), cc.color(192, 192, 192));
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout gradient render";
    }
});
var UILayoutTest_BackGroundImage = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setClippingEnabled(true);
        layout.setBackGroundImage("res/cocosgui/Hello.png");
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout background image";
    }
});

var UILayoutTest_BackGroundImage_Scale9 = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setBackGroundImageScale9Enabled(true);
        layout.setBackGroundImage("res/cocosgui/green_edit.png");
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout background image scale9";
    }
});
var UILayoutTest_Layout_Linear_Vertical = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setLayoutType(ccs.LayoutType.linearVertical);
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout Layout Linear Vertical";
    },
    setLayoutParameter: function () {
        var lp1 = ccs.LinearLayoutParameter.create();
        this.button.setLayoutParameter(lp1);
        lp1.setGravity(ccs.LinearGravity.centerHorizontal);
        lp1.setMargin(new ccs.Margin(0, 5, 0, 10));

        var lp2 = ccs.LinearLayoutParameter.create();
        this.textButton.setLayoutParameter(lp2);
        lp2.setGravity(ccs.LinearGravity.centerHorizontal);
        lp2.setMargin(new ccs.Margin(0, 10, 0, 10));

        var lp3 = ccs.LinearLayoutParameter.create();
        this.button_scale9.setLayoutParameter(lp3);
        lp3.setGravity(ccs.LinearGravity.centerHorizontal);
        lp3.setMargin(new ccs.Margin(0, 10, 0, 10));
    }
});
var UILayoutTest_Layout_Linear_Horizontal = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setLayoutType(ccs.LayoutType.linearHorizontal);
        layout.setClippingEnabled(true);
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout Layout Linear Horizontal";
    },
    setLayoutParameter: function () {
        var lp1 = ccs.LinearLayoutParameter.create();
        this.button.setLayoutParameter(lp1);
        lp1.setGravity(ccs.LinearGravity.centerVertical);
        lp1.setMargin(new ccs.Margin(0, 10, 0, 10));

        var lp2 = ccs.LinearLayoutParameter.create();
        this.textButton.setLayoutParameter(lp2);
        lp2.setGravity(ccs.LinearGravity.centerVertical);
        lp2.setMargin(new ccs.Margin(0, 10, 0, 10));

        var lp3 = ccs.LinearLayoutParameter.create();
        this.button_scale9.setLayoutParameter(lp3);
        lp3.setGravity(ccs.LinearGravity.centerVertical);
        lp3.setMargin(new ccs.Margin(0, 10, 0, 10));
    }
});

var UILayoutTest_Layout_Relative = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccs.Layout.create();
        layout.setLayoutType(ccs.LayoutType.relative);
        layout.setSize(cc.size(280, 150));
        layout.setBackGroundColorType(ccs.LayoutBackGroundColorType.solid);
        layout.setBackGroundColor(cc.color.green);
        return layout;
    },
    getText: function () {
        return "Layout Layout Relative";
    },
    setLayoutParameter: function () {
        var lp1 = ccs.RelativeLayoutParameter.create();
        this.button.setLayoutParameter(lp1);
        lp1.setGravity(ccs.RelativeAlign.alignParentLeftBottom);

        var lp2 = ccs.RelativeLayoutParameter.create();
        this.textButton.setLayoutParameter(lp2);
        lp2.setGravity(ccs.RelativeAlign.alignParentLeftBottom);

        var lp3 = ccs.RelativeLayoutParameter.create();
        this.button_scale9.setLayoutParameter(lp3);
        lp3.setGravity(ccs.RelativeAlign.alignParentRightCenterVertical);
    }
});