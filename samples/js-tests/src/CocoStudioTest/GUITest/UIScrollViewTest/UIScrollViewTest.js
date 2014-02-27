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

var UIScrollViewTest_Vertical = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("Move by vertical direction");
            this._topDisplayLabel.setPosition(cc.p(widgetSize.width / 2.0,  widgetSize.height / 2.0 + this._topDisplayLabel.getContentSize().height * 1.5));
            this._bottomDisplayLabel.setText("ScrollView");
            this._bottomDisplayLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - this._bottomDisplayLabel.getSize().height * 3));

            var root = this._uiLayer.getChildByTag(81);
            var background = root.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setDirection(ccui.ScrollViewDir.vertical);
            scrollView.setTouchEnabled(true);
            scrollView.setSize(cc.size(280, 150));

            var backgroundSize = background.getContentSize();
            scrollView.setPosition(cc.p((widgetSize.width - backgroundSize.width) / 2 +
                (backgroundSize.width - scrollView.getSize().width) / 2,
                (widgetSize.height - backgroundSize.height) / 2 +
                    (backgroundSize.height - scrollView.getSize().height) / 2));
            this._uiLayer.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/ccicon.png");

            var innerWidth = scrollView.getSize().width;
            var innerHeight = scrollView.getSize().height + imageView.getSize().height;

            scrollView.setInnerContainerSize(cc.size(innerWidth, innerHeight));

            var button = ccui.Button.create();
            button.setTouchEnabled(true);
            button.loadTextures("res/cocosgui/animationbuttonnormal.png", "res/cocosgui/animationbuttonpressed.png", "");
            button.setPosition(cc.p(innerWidth / 2, scrollView.getInnerContainerSize().height - button.getSize().height / 2));
            scrollView.addChild(button);

            var textButton = ccui.Button.create();
            textButton.setTouchEnabled(true);
            textButton.loadTextures("res/cocosgui/backtotopnormal.png", "res/cocosgui/backtotoppressed.png", "");
            textButton.setTitleText("Text Button");
            textButton.setPosition(cc.p(innerWidth / 2, button.getBottomInParent() - button.getSize().height));
            scrollView.addChild(textButton);

            var button_scale9 = ccui.Button.create();
            button_scale9.setTouchEnabled(true);
            button_scale9.setScale9Enabled(true);
            button_scale9.loadTextures("res/cocosgui/button.png", "res/cocosgui/buttonHighlighted.png", "");
            button_scale9.setSize(cc.size(100, button_scale9.getContentSize().height));
            button_scale9.setPosition(cc.p(innerWidth / 2, textButton.getBottomInParent() - textButton.getSize().height));
            scrollView.addChild(button_scale9);

            imageView.setPosition(cc.p(innerWidth / 2, imageView.getSize().height / 2));
            scrollView.addChild(imageView);

            return true;
        }
        return false;
    }
});

var UIScrollViewTest_Horizontal = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("Move by horizontal direction");
            this._topDisplayLabel.setPosition(cc.p(widgetSize.width / 2.0,  widgetSize.height / 2.0 + this._topDisplayLabel.getContentSize().height * 1.5));
            this._bottomDisplayLabel.setText("ScrollView");
            this._bottomDisplayLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - this._bottomDisplayLabel.getSize().height * 3));

            var root = this._uiLayer.getChildByTag(81);
            var background = root.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setDirection(ccui.ScrollViewDir.horizontal);
            scrollView.setTouchEnabled(true);
            scrollView.setSize(cc.size(280, 150));
            var scrollViewRect = scrollView.getSize();
            scrollView.setInnerContainerSize(cc.size(scrollViewRect.width,scrollViewRect.height));

            var backgroundSize = background.getContentSize();
            scrollView.setPosition(cc.p((widgetSize.width - backgroundSize.width) / 2 +
                (backgroundSize.width - scrollViewRect.width) / 2,
                (widgetSize.height - backgroundSize.height) / 2 +
                    (backgroundSize.height - scrollViewRect.height) / 2));
            this._uiLayer.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/ccicon.png");

            var innerWidth = scrollViewRect.width + imageView.getSize().width;
            var innerHeight = scrollViewRect.height;

            scrollView.setInnerContainerSize(cc.size(innerWidth, innerHeight));

            var button = ccui.Button.create();
            button.setTouchEnabled(true);
            button.loadTextures("res/cocosgui/animationbuttonnormal.png", "res/cocosgui/animationbuttonpressed.png", "");
            button.setPosition(cc.p(button.getSize().width / 2, scrollView.getInnerContainerSize().height - button.getSize().height / 2));
            scrollView.addChild(button);

            var textButton = ccui.Button.create();
            textButton.setTouchEnabled(true);
            textButton.loadTextures("res/cocosgui/backtotopnormal.png", "res/cocosgui/backtotoppressed.png", "");
            textButton.setTitleText("Text Button");
            textButton.setPosition(cc.p(button.getRightInParent() + button.getSize().width / 2, button.getBottomInParent() - button.getSize().height));
            scrollView.addChild(textButton);

            var button_scale9 = ccui.Button.create();
            button_scale9.setTouchEnabled(true);
            button_scale9.setScale9Enabled(true);
            button_scale9.loadTextures("res/cocosgui/button.png", "res/cocosgui/buttonHighlighted.png", "");
            button_scale9.setSize(cc.size(100, button_scale9.getContentSize().height));
            button_scale9.setPosition(cc.p(textButton.getRightInParent() + textButton.getSize().width / 2, textButton.getBottomInParent() - textButton.getSize().height));
            scrollView.addChild(button_scale9);

            var pos = cc.p(innerWidth - imageView.getSize().width / 2,
                button_scale9.getBottomInParent() - button_scale9.getSize().height / 2);
            imageView.setPosition(pos);
            scrollView.addChild(imageView);

            return true;
        }
        return false;
    }
});

var UIScrollViewTest_Both = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("Move by any direction");
            this._topDisplayLabel.setPosition(cc.p(widgetSize.width / 2.0,  widgetSize.height / 2.0 + this._topDisplayLabel.getContentSize().height * 1.5));
            this._bottomDisplayLabel.setText("ScrollView both");
            this._bottomDisplayLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - this._bottomDisplayLabel.getSize().height * 3));

            var root = this._uiLayer.getChildByTag(81);
            var background = root.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setDirection(ccui.ScrollViewDir.both);
            scrollView.setTouchEnabled(true);
            scrollView.setBounceEnabled(true);
            scrollView.setBackGroundImageScale9Enabled(true);
            scrollView.setBackGroundImage("res/cocosgui/green_edit.png");
            scrollView.setSize(cc.size(210, 122));
            var scrollViewSize = scrollView.getSize();

            var backgroundSize = background.getContentSize();
            scrollView.setPosition(cc.p((widgetSize.width - backgroundSize.width) / 2 +
                (backgroundSize.width - scrollViewSize.width) / 2,
                (widgetSize.height - backgroundSize.height) / 2 +
                    (backgroundSize.height - scrollViewSize.height) / 2));
            this._uiLayer.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/b11.png");
            scrollView.addChild(imageView);

            var imageViewSize = imageView.getContentSize();
            scrollView.setInnerContainerSize(cc.size(imageViewSize.width, imageViewSize.height));
            imageView.setPosition(cc.p(imageViewSize.width/2,imageViewSize.height/2));

            return true;
        }
        return false;
    }
});

var UIScrollViewTest_ScrollToPercentBothDirection = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("ScrollView scroll to percent both directrion");
            this._bottomDisplayLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - this._bottomDisplayLabel.getSize().height * 3));

            var root = this._uiLayer.getChildByTag(81);
            var background = root.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setTouchEnabled(true);
            scrollView.setBackGroundColor(cc.GREEN);
            scrollView.setBackGroundColorType(ccui.LayoutBackGroundColorType.solid);
            scrollView.setDirection(ccui.ScrollViewDir.both);
            scrollView.setInnerContainerSize(cc.size(480, 320));
            scrollView.setSize(cc.size(100, 100));
            var scrollViewSize = scrollView.getSize();

            var backgroundSize = background.getContentSize();
            scrollView.setPosition(cc.p((widgetSize.width - backgroundSize.width) / 2 +
                (backgroundSize.width - scrollViewSize.width) / 2,
                (widgetSize.height - backgroundSize.height) / 2 +
                    (backgroundSize.height - scrollViewSize.height) / 2));
            scrollView.scrollToPercentBothDirection(cc.p(50, 50), 1, true);

            this._uiLayer.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/Hello.png");
            imageView.setPosition(cc.p(240,160));
            scrollView.addChild(imageView);

            return true;
        }
        return false;
    }
});

var UIScrollViewTest_ScrollToPercentBothDirection_Bounce = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("ScrollView scroll to percent both directrion bounce");
            this._bottomDisplayLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - this._bottomDisplayLabel.getSize().height * 3));

            var root = this._uiLayer.getChildByTag(81);
            var background = root.getChildByName("background_Panel");

            // Create the scrollview
            var scrollView = ccui.ScrollView.create();
            scrollView.setTouchEnabled(true);
            scrollView.setBounceEnabled(true);
            scrollView.setBackGroundColor(cc.GREEN);
            scrollView.setBackGroundColorType(ccui.LayoutBackGroundColorType.solid);
            scrollView.setDirection(ccui.ScrollViewDir.both);
            scrollView.setInnerContainerSize(cc.size(480, 320));
            scrollView.setSize(cc.size(100, 100));
            var scrollViewSize = scrollView.getSize();

            var backgroundSize = background.getContentSize();
            scrollView.setPosition(cc.p((widgetSize.width - backgroundSize.width) / 2 +
                (backgroundSize.width - scrollViewSize.width) / 2,
                (widgetSize.height - backgroundSize.height) / 2 +
                    (backgroundSize.height - scrollViewSize.height) / 2));
            scrollView.scrollToPercentBothDirection(cc.p(50, 50), 1, true);

            this._uiLayer.addChild(scrollView);

            var imageView = ccui.ImageView.create();
            imageView.loadTexture("res/cocosgui/Hello.png");
            imageView.setPosition(cc.p(240,160));
            scrollView.addChild(imageView);

            return true;
        }
        return false;
    }
});
