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

var UIImageViewTest = UIScene.extend({
    init: function () {
        if (this._super()) {
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("ImageView");

            var widgetSize = this._widget.getSize();
            // Create the imageview
            var imageView = ccs.ImageView.create();
            imageView.loadTexture("res/cocosgui/ccicon.png");
            imageView.x = widgetSize.width / 2;
	        imageView.y = widgetSize.height / 2 + imageView.height / 4;
            this._mainNode.addChild(imageView);

            return true;
        }
        return false;
    }
});

var UIImageViewTest_Scale9 = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("ImageView scale9 render");

            // Create the imageview
            var imageView = ccs.ImageView.create();
            imageView.setScale9Enabled(true);
            imageView.loadTexture("res/cocosgui/buttonHighlighted.png");
            imageView.setSize(cc.size(200, 85));
            imageView.x = widgetSize.width / 2;
	        imageView.y = widgetSize.height / 2 + imageView.getSize().height / 4;
            this._mainNode.addChild(imageView);

            return true;
        }
        return false;
    }
});