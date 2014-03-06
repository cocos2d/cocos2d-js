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

var UITextFieldTest = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("No Event");
            this._bottomDisplayLabel.setText("TextField");

            // Create the textfield
            var textField = ccs.TextField.create();
            textField.setTouchEnabled(true);
            textField.fontName = "Marker Felt";
            textField.fontSize = 30;
            textField.placeHolder = "input words here";
            textField.x = widgetSize.width / 2.0;
            textField.y = widgetSize.height / 2.0;
            textField.addEventListenerTextField(this.textFieldEvent, this);
            this._mainNode.addChild(textField);

            return true;
        }
        return false;
    },

    textFieldEvent: function (sender, type) {
        switch (type) {
            case ccs.TextFiledEventType.attach_with_me:
                var textField = sender;
                var widgetSize = this._widget.getSize();
                textField.runAction(cc.MoveTo.create(0.225,
                    cc.p(widgetSize.width / 2, widgetSize.height / 2 + textField.height / 2)));
                this._topDisplayLabel.setText("attach with IME");
                break;
            case ccs.TextFiledEventType.detach_with_ime:
                var textField = sender;
                var widgetSize = this._widget.getSize();
                textField.runAction(cc.MoveTo.create(0.175, cc.p(widgetSize.width / 2.0, widgetSize.height / 2.0)));
                this._topDisplayLabel.setText("detach with IME");
                break;
            case ccs.TextFiledEventType.insert_text:
                this._topDisplayLabel.setText("insert words");
                break;
            case ccs.TextFiledEventType.delete_backward:
                this._topDisplayLabel.setText("delete word");
                break;
            default:
                break;
        }
    }
});

var UITextFieldTest_MaxLength = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("No Event");
            this._bottomDisplayLabel.setText("TextField max length");

            // Create the textfield
            var textField = ccs.TextField.create();
            textField.setMaxLengthEnabled(true);
            textField.setMaxLength(3);
            textField.setTouchEnabled(true);
            textField.fontName = "Marker Felt";
            textField.fontSize = 30;
            textField.placeHolder = "input words here";
            textField.x = widgetSize.width / 2.0;
            textField.y = widgetSize.height / 2.0;
            textField.addEventListenerTextField(this.textFieldEvent, this);
            this._mainNode.addChild(textField);

            return true;
        }
        return false;
    },

    textFieldEvent: function (sender, type) {
        var textField = sender;
        var widgetSize = this._widget.getSize();
        switch (type) {
            case ccs.TextFiledEventType.attach_with_me:
                textField.runAction(cc.MoveTo.create(0.225,
                    cc.p(widgetSize.width / 2, widgetSize.height / 2 + textField.height / 2)));
                this._topDisplayLabel.setText("attach with IME max length:" + textField.getMaxLength());
                break;
            case ccs.TextFiledEventType.detach_with_ime:
                textField.runAction(cc.MoveTo.create(0.175, cc.p(widgetSize.width / 2.0, widgetSize.height / 2.0)));
                this._topDisplayLabel.setText("detach with IME max length:" + textField.getMaxLength());
                break;
            case ccs.TextFiledEventType.insert_text:
                this._topDisplayLabel.setText("insert with IME max length:" + textField.getMaxLength());
                break;
            case ccs.TextFiledEventType.delete_backward:
                this._topDisplayLabel.setText("delete with IME max length:" + textField.getMaxLength());
                break;
            default:
                break;
        }
    }
});

var UITextFieldTest_Password = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            //init text
            this._topDisplayLabel.setText("No Event");
            this._bottomDisplayLabel.setText("TextField max length");

            // Create the textfield
            var textField = ccs.TextField.create();
            textField.passwordEnabled = true;
            textField.setPasswordStyleText("*");
            textField.setTouchEnabled(true);
            textField.fontName = "Marker Felt";
            textField.fontSize = 30;
            textField.placeHolder = "input password here";
            textField.x = widgetSize.width / 2.0;
            textField.y = widgetSize.height / 2.0;
            textField.addEventListenerTextField(this.textFieldEvent, this);
            this._mainNode.addChild(textField);

            return true;
        }
        return false;
    },

    textFieldEvent: function (sender, type) {
        switch (type) {
            case ccs.TextFiledEventType.attach_with_me:
                var textField = sender;
                var widgetSize = this._widget.getSize();
                textField.runAction(cc.MoveTo.create(0.225,
                    cc.p(widgetSize.width / 2, widgetSize.height / 2 + textField.height / 2)));
                this._topDisplayLabel.setText("attach with IME IME password");
                break;
            case ccs.TextFiledEventType.detach_with_ime:
                var textField = sender;
                var widgetSize = this._widget.getSize();
                textField.runAction(cc.MoveTo.create(0.175, cc.p(widgetSize.width / 2.0, widgetSize.height / 2.0)));
                this._topDisplayLabel.setText("detach with IME password");
                break;
            case ccs.TextFiledEventType.insert_text:
                this._topDisplayLabel.setText("insert with IME password");
                break;
            case ccs.TextFiledEventType.delete_backward:
                this._topDisplayLabel.setText("delete with IME password");
                break;
            default:
                break;
        }
    }
});