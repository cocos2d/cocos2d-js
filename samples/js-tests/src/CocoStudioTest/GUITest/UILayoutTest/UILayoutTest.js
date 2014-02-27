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
            this._bottomDisplayLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - this._bottomDisplayLabel.getSize().height * 3));

            var root = this._uiLayer.getChildByTag(81);
            var background = root.getChildByName("background_Panel");

            // Create the layout
            this.layout = this.createLayout();
            var  layoutRect = this.layout.getSize();
            var backgroundRect = background.getSize();
            this.layout.setPosition(cc.p((widgetSize.width - backgroundRect.width) / 2 +
                (backgroundRect.width - layoutRect.width) / 2,
                (widgetSize.height - backgroundRect.height) / 2 +
                    (backgroundRect.height - layoutRect.height) / 2));
            this._uiLayer.addChild(this.layout);

            this.button = ccui.Button.create();
            this.button.setTouchEnabled(true);
            this.button.loadTextures("res/cocosgui/animationbuttonnormal.png", "res/cocosgui/animationbuttonpressed.png", "");
            this.button.setPosition(cc.p(this.button.getSize().width / 2, layoutRect.height - this.button.getSize().height / 2));
            this.layout.addChild(this.button);

            this.textButton = ccui.Button.create();
            this.textButton.setTouchEnabled(true);
            this.textButton.loadTextures("res/cocosgui/backtotopnormal.png", "res/cocosgui/backtotoppressed.png", "");
            this.textButton.setTitleText("Text Button");
            this.textButton.setPosition(cc.p(layoutRect.width / 2, layoutRect.height / 2));
            this.layout.addChild(this.textButton);

            this.button_scale9 = ccui.Button.create();
            this.button_scale9.setTouchEnabled(true);
            this.button_scale9.loadTextures("res/cocosgui/button.png", "res/cocosgui/buttonHighlighted.png", "");
            this.button_scale9.setScale9Enabled(true);
            this.button_scale9.setSize(cc.size(100, this.button_scale9.getContentSize().height));
            this.button_scale9.setPosition(cc.p(layoutRect.width - this.button_scale9.getSize().width / 2, this.button_scale9.getSize().height / 2));
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
        var layout = ccui.Layout.create();
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    setLayoutParameter: function () {

    }
});
var UILayoutTest = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccui.Layout.create();
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout";
    }
});
var UILayoutTest_Color = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccui.Layout.create();
        layout.setBackGroundColorType(ccui.LayoutBackGroundColorType.solid);
        layout.setBackGroundColor(cc.c3b(128, 128, 128));
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout color render";
    }
});
var UILayoutTest_Gradient = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccui.Layout.create();
        layout.setBackGroundColorType(ccui.LayoutBackGroundColorType.gradient);
        layout.setBackGroundColor(cc.c3b(64, 64, 64), cc.c3b(192, 192, 192));
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout gradient render";
    }
});
var UILayoutTest_BackGroundImage = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccui.Layout.create();
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
        var layout = ccui.Layout.create();
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
        var layout = ccui.Layout.create();
        layout.setLayoutType(ccui.LayoutType.linearVertical);
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout Layout Linear Vertical";
    },
    setLayoutParameter: function () {
        var lp1 = ccui.LinearLayoutParameter.create();
        this.button.setLayoutParameter(lp1);
        lp1.setGravity(ccui.LinearGravity.centerHorizontal);
        lp1.setMargin(new ccui.Margin(0, 5, 0, 10));

        var lp2 = ccui.LinearLayoutParameter.create();
        this.textButton.setLayoutParameter(lp2);
        lp2.setGravity(ccui.LinearGravity.centerHorizontal);
        lp2.setMargin(new ccui.Margin(0, 10, 0, 10));

        var lp3 = ccui.LinearLayoutParameter.create();
        this.button_scale9.setLayoutParameter(lp3);
        lp3.setGravity(ccui.LinearGravity.centerHorizontal);
        lp3.setMargin(new ccui.Margin(0, 10, 0, 10));
    }
});
var UILayoutTest_Layout_Linear_Horizontal = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccui.Layout.create();
        layout.setLayoutType(ccui.LayoutType.linearHorizontal);
        layout.setClippingEnabled(true);
        layout.setSize(cc.size(280, 150));
        return layout;
    },
    getText: function () {
        return "Layout Layout Linear Horizontal";
    },
    setLayoutParameter: function () {
        var lp1 = ccui.LinearLayoutParameter.create();
        this.button.setLayoutParameter(lp1);
        lp1.setGravity(ccui.LinearGravity.centerVertical);
        lp1.setMargin(new ccui.Margin(0, 10, 0, 10));

        var lp2 = ccui.LinearLayoutParameter.create();
        this.textButton.setLayoutParameter(lp2);
        lp2.setGravity(ccui.LinearGravity.centerVertical);
        lp2.setMargin(new ccui.Margin(0, 10, 0, 10));

        var lp3 = ccui.LinearLayoutParameter.create();
        this.button_scale9.setLayoutParameter(lp3);
        lp3.setGravity(ccui.LinearGravity.centerVertical);
        lp3.setMargin(new ccui.Margin(0, 10, 0, 10));
    }
});

var UILayoutTest_Layout_Relative = UILayoutTestBase.extend({
    createLayout: function () {
        var layout = ccui.Layout.create();
        layout.setLayoutType(ccui.LayoutType.relative);
        layout.setSize(cc.size(280, 150));
        layout.setBackGroundColorType(ccui.LayoutBackGroundColorType.solid);
        layout.setBackGroundColor(cc.GREEN);
        return layout;
    },
    getText: function () {
        return "Layout Layout Relative";
    },
    setLayoutParameter: function () {
        var lp1 = ccui.RelativeLayoutParameter.create();
        this.button.setLayoutParameter(lp1);
        lp1.setGravity(ccui.RelativeAlign.alignParentLeftBottom);

        var lp2 = ccui.RelativeLayoutParameter.create();
        this.textButton.setLayoutParameter(lp2);
        lp2.setGravity(ccui.RelativeAlign.alignParentLeftBottom);

        var lp3 = ccui.RelativeLayoutParameter.create();
        this.button_scale9.setLayoutParameter(lp3);
        lp3.setGravity(ccui.RelativeAlign.alignParentRightCenterVertical);
    }
});
