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


var UILabelTest = UIScene.extend({
    init: function () {
        if (this._super()) {
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("Label");

            var widgetSize = this._widget.getSize();
            // Create the label
            var label = ccui.Text.create();
            label.setText("Label");
            label.setFontName("AmericanTypewriter");
            label.setFontSize(30);
            label.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 + label.getSize().height / 4));
            this._uiLayer.addChild(label);

            return true;
        }
        return false;
    }
});

var UILabelTest_LineWrap = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("Label line wrap");

            // Create the text area
            var textArea = ccui.Text.create();
            textArea.setTextAreaSize(cc.size(280, 150));
            textArea.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            textArea.setText("Label can line wrap");
            textArea.setFontName("AmericanTypewriter");
            textArea.setFontSize(32);
            textArea.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - textArea.getSize().height / 8));
            this._uiLayer.addChild(textArea);

            return true;
        }
        return false;
    }
});


var UILabelTest_TTF = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("");
            this._bottomDisplayLabel.setText("Label set TTF font");

            // Create the text area
            var textArea = ccui.Text.create();
            textArea.setTextAreaSize(cc.size(280, 150));
            textArea.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            textArea.setText("Label TTF");
            textArea.setFontName("AmericanTypewriter");
            textArea.setFontSize(32);
            textArea.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - textArea.getSize().height / 8));
            this._uiLayer.addChild(textArea);

            return true;
        }
        return false;
    }
});