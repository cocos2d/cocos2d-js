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

var UIPageViewTest = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("Move by horizontal direction");
            this._topDisplayLabel.setPosition(cc.p(widgetSize.width / 2.0,  widgetSize.height / 2.0 + this._topDisplayLabel.getContentSize().height * 1.5));
            this._bottomDisplayLabel.setText("PageView");
            this._bottomDisplayLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - this._bottomDisplayLabel.getSize().height * 3));

            var root = this._uiLayer.getChildByTag(81);
            var background = root.getChildByName("background_Panel");

            // Create the page view
            var pageView = ccui.PageView.create();
            pageView.setTouchEnabled(true);
            pageView.setSize(cc.size(240, 130));
            var backgroundSize = background.getContentSize();
            pageView.setPosition(cc.p((widgetSize.width - backgroundSize.width) / 2 +
                (backgroundSize.width - pageView.getSize().width) / 2,
                (widgetSize.height - backgroundSize.height) / 2 +
                    (backgroundSize.height - pageView.getSize().height) / 2));

            for (var i = 0; i < 3; ++i) {
                var layout = ccui.Layout.create();
                layout.setSize(cc.size(240, 130));
                var layoutRect = layout.getSize();

                var imageView = ccui.ImageView.create();
                imageView.setTouchEnabled(true);
                imageView.setScale9Enabled(true);
                imageView.loadTexture("res/cocosgui/scrollviewbg.png");
                imageView.setSize(cc.size(240, 130));
                imageView.setPosition(cc.p(layoutRect.width / 2, layoutRect.height / 2));
                layout.addChild(imageView);

                var label = ccui.Text.create();
                label.setText("page" + (i + 1));
                label.setFontName("Marker Felt");
                label.setFontSize(30);
                label.setColor(cc.c3b(192, 192, 192));
                label.setPosition(cc.p(layoutRect.width / 2, layoutRect.height / 2));
                layout.addChild(label);

                pageView.addPage(layout);
            }
            pageView.addEventListenerPageView(this.pageViewEvent, this);
            var a = ccui.Layout.create();
            this._uiLayer.addChild(pageView);

            return true;
        }
        return false;
    },

    pageViewEvent: function (sender, type) {
        switch (type) {
            case ccui.PageViewEventType.turning:
                var pageView = sender;
                this._topDisplayLabel.setText("page = " + (pageView.getCurPageIndex() + 1));
                break;
            default:
                break;
        }
    }
});
