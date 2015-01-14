/****************************************************************************
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

var UITextFieldTest = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getContentSize();
            //init text
            this._topDisplayLabel.setString("No Event");
            this._bottomDisplayLabel.setString("TextField");

            // Create the textfield
            var textField = new ccui.TextField();
            textField.setTouchEnabled(true);
            textField.fontName = "Marker Felt";
            textField.fontSize = 30;
            textField.x = widgetSize.width / 2.0;
            textField.y = widgetSize.height / 2.0;
            textField.addEventListener(this.textFieldEvent, this);
            this._mainNode.addChild(textField);

            return true;
        }
        return false;
    },

    textFieldEvent: function (sender, type) {
        switch (type) {
            case ccui.TextField.EVENT_ATTACH_WITH_IME:
                var textField = sender;
                var widgetSize = this._widget.getContentSize();
                textField.runAction(cc.moveTo(0.225,
                    cc.p(widgetSize.width / 2, widgetSize.height / 2 + textField.height / 2)));
                this._topDisplayLabel.setString("attach with IME");
                break;
            case ccui.TextField.EVENT_DETACH_WITH_IME:
                var textField = sender;
                var widgetSize = this._widget.getContentSize();
                textField.runAction(cc.moveTo(0.175, cc.p(widgetSize.width / 2.0, widgetSize.height / 2.0)));
                this._topDisplayLabel.setString("detach with IME");
                break;
            case ccui.TextField.EVENT_INSERT_TEXT:
                this._topDisplayLabel.setString("insert words");
                break;
            case ccui.TextField.EVENT_DELETE_BACKWARD:
                this._topDisplayLabel.setString("delete word");
                break;
            default:
                break;
        }
    }
});

var UITextFieldTest_MaxLength = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getContentSize();
            //init text
            this._topDisplayLabel.setString("No Event");
            this._bottomDisplayLabel.setString("TextField max length");

            // Create the textfield
            var textField = new ccui.TextField();
            textField.setMaxLengthEnabled(true);
            textField.setMaxLength(3);
            textField.setTouchEnabled(true);
            textField.fontName = "Marker Felt";
            textField.fontSize = 30;
            textField.placeHolder = "input words here";
            textField.x = widgetSize.width / 2.0;
            textField.y = widgetSize.height / 2.0;
            textField.addEventListener(this.textFieldEvent, this);
            this._mainNode.addChild(textField);

            return true;
        }
        return false;
    },

    textFieldEvent: function (sender, type) {
        var textField = sender;
        var widgetSize = this._widget.getContentSize();
        switch (type) {
            case ccui.TextField.EVENT_ATTACH_WITH_IME:
                textField.runAction(cc.moveTo(0.225,
                    cc.p(widgetSize.width / 2, widgetSize.height / 2 + textField.height / 2)));
                this._topDisplayLabel.setString("attach with IME max length:" + textField.getMaxLength());
                break;
            case ccui.TextField.EVENT_DETACH_WITH_IME:
                textField.runAction(cc.moveTo(0.175, cc.p(widgetSize.width / 2.0, widgetSize.height / 2.0)));
                this._topDisplayLabel.setString("detach with IME max length:" + textField.getMaxLength());
                break;
            case ccui.TextField.EVENT_INSERT_TEXT:
                this._topDisplayLabel.setString("insert with IME max length:" + textField.getMaxLength());
                break;
            case ccui.TextField.EVENT_DELETE_BACKWARD:
                this._topDisplayLabel.setString("delete with IME max length:" + textField.getMaxLength());
                break;
            default:
                break;
        }
    }
});

var UITextFieldTest_Password = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getContentSize();
            //init text
            this._topDisplayLabel.setString("No Event");
            this._bottomDisplayLabel.setString("TextField max length");

            // Create the textfield
            var textField = new ccui.TextField();
            textField.setPasswordEnabled(true);
            textField.setPasswordStyleText("*");
            textField.setTouchEnabled(true);
            textField.fontName = "Marker Felt";
            textField.fontSize = 30;
            textField.placeHolder = "input password here";
            textField.x = widgetSize.width / 2.0;
            textField.y = widgetSize.height / 2.0;
            textField.addEventListener(this.textFieldEvent, this);
            this._mainNode.addChild(textField);

            return true;
        }
        return false;
    },

    textFieldEvent: function (textField, type) {
        var widgetSize = this._widget.getContentSize();
        switch (type) {
            case ccui.TextField.EVENT_ATTACH_WITH_IME:
                textField.runAction(cc.moveTo(0.225,
                    cc.p(widgetSize.width / 2, widgetSize.height / 2 + textField.height / 2)));
                this._topDisplayLabel.setString("attach with IME IME password");
                break;
            case ccui.TextField.EVENT_DETACH_WITH_IME:
                textField.runAction(cc.moveTo(0.175, cc.p(widgetSize.width / 2.0, widgetSize.height / 2.0)));
                this._topDisplayLabel.setString("detach with IME password");
                break;
            case ccui.TextField.EVENT_INSERT_TEXT:
                this._topDisplayLabel.setString("insert with IME password");
                break;
            case ccui.TextField.EVENT_DELETE_BACKWARD:
                this._topDisplayLabel.setString("delete with IME password");
                break;
            default:
                break;
        }
    }
});

//2015-01-14
var UITextFieldTest_LineWrap = UIScene.extend({

    init: function(){
        if (this._super()) {
            var widgetSize = this._widget.getContentSize();

            // Add a label in which the textfield events will be displayed
            this._displayValueLabel = new ccui.Text("No Event","fonts/Marker Felt.ttf",30);
            this._displayValueLabel.setAnchorPoint(cc.p(0.5, -1));
            this._displayValueLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 + this._displayValueLabel.getContentSize().height * 1.5));
            this._mainNode.addChild(this._displayValueLabel);

            // Add the alert
            var alert = new ccui.Text("TextField line wrap","fonts/Marker Felt.ttf",30);
            alert.setColor(cc.color(159, 168, 176));
            alert.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - alert.getContentSize().height * 3.075));
            this._mainNode.addChild(alert);

            // Create the textfield
            var textField = new ccui.TextField("input words here","fonts/Marker Felt.ttf",30);
            textField.ignoreContentAdaptWithSize(false);
            //textField.getVirtualRenderer().setLineBreakWithoutSpace(true);
            textField.setContentSize(cc.size(240, 170));
            textField.setString("input words here");
            textField.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            textField.setTextVerticalAlignment(cc.TEXT_ALIGNMENT_CENTER);
            textField.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2));
            textField.addEventListener(this.textFieldEvent, this);
            this._mainNode.addChild(textField);

            return true;
        }
    },

    textFieldEvent: function(textField, type){
        var widgetSize = this._widget.getContentSize();
        switch (type){
            case ccui.TextField.EVENT_ATTACH_WITH_IME:{
                textField.runAction(cc.moveTo(0.225, cc.p(widgetSize.width / 2, widgetSize.height / 2 + 30)));
                textField.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);
                textField.setTextVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_TOP);

                this._displayValueLabel.setString("attach with IME");
            }
                break;

            case ccui.TextField.EVENT_DETACH_WITH_IME:{
                textField.runAction(cc.moveTo(0.175, cc.p(widgetSize.width / 2, widgetSize.height / 2)));
                textField.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);
                textField.setTextVerticalAlignment(cc.TEXT_ALIGNMENT_CENTER);

                this._displayValueLabel.setString("detach with IME");
            }
                break;

            case ccui.TextField.EVENT_INSERT_TEXT:
                this._displayValueLabel.setString("insert words");
                break;

            case ccui.TextField.EVENT_DELETE_BACKWARD:
                this._displayValueLabel.setString("delete word");
                break;

            default:
                break;
        }
    }
});

//2015-01-14
var UITextFieldTest_TrueTypeFont = UIScene.extend({

    init: function(){
        if (this._super()) {
            var widgetSize = this._widget.getContentSize();

            // Add a label in which the textfield events will be displayed
            this._displayValueLabel = new ccui.Text("True Type Font Test - No Event","fonts/Marker Felt.ttf",32);
            this._displayValueLabel.setAnchorPoint(cc.p(0.5, -1));
            this._displayValueLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 + this._displayValueLabel.getContentSize().height * 1.5));
            this._mainNode.addChild(this._displayValueLabel);

            // Add the alert
            var alert = new ccui.Text("TextField","fonts/Marker Felt.ttf",30);
            alert.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - alert.getContentSize().height * 3.075));
            this._mainNode.addChild(alert);

            // Create the textfield
            var textField = new ccui.TextField("input words here","fonts/A Damn Mess.ttf",30);

            textField.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2));
            textField.addEventListener(this.textFieldEvent, this);
            this._mainNode.addChild(textField);


            return true;
        }
    },

    textFieldEvent: function(textField, type){
        var screenSize = cc.director.getWinSize();
        switch (type){
            case ccui.TextField.EVENT_ATTACH_WITH_IME:{
                textField.runAction(cc.moveTo(0.225, cc.p(screenSize.width / 2, screenSize.height / 2 + textField.getContentSize().height / 2)));
                this._displayValueLabel.setString("attach with IME");
            }
                break;

            case ccui.TextField.EVENT_DETACH_WITH_IME:{
                textField.runAction(cc.moveTo(0.175, cc.p(screenSize.width / 2, screenSize.height / 2)));
                this._displayValueLabel.setString("detach with IME");
            }
                break;

            case ccui.TextField.EVENT_INSERT_TEXT:
                this._displayValueLabel.setString("insert words");
                break;

            case ccui.TextField.EVENT_DELETE_BACKWARD:
                this._displayValueLabel.setString("delete word");
                break;

            default:
                break;
        }
    }
});

//2015-01-14
var UITextFieldTest_PlaceHolderColor = UIScene.extend({

    init: function(){
        if (this._super()) {
            var widgetSize = this._widget.getContentSize();

            // Add a label in which the textfield events will be displayed
            this._displayValueLabel = new ccui.Text("Set place hold color","fonts/Marker Felt.ttf",32);
            this._displayValueLabel.setAnchorPoint(cc.p(0.5, -1));
            this._displayValueLabel.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 + this._displayValueLabel.getContentSize().height * 1.5));
            this._mainNode.addChild(this._displayValueLabel);

            // Add the alert
            var alert = new ccui.Text("TextField","fonts/Marker Felt.ttf",30);
            alert.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2 - alert.getContentSize().height * 3.075));
            this._mainNode.addChild(alert);

            // Create the textfield
            var textField = new ccui.TextField("input words here","Arial",30);
            textField.setPlaceHolder("input text here");
            textField.setPlaceHolderColor(cc.color.GREEN);
            textField.setTextColor(cc.color.RED);
            textField.setPosition(cc.p(widgetSize.width / 2, widgetSize.height / 2));
            textField.addEventListener(this.textFieldEvent, this);
            this._mainNode.addChild(textField);
            return true;
        }
    },

    textFieldEvent: function(textField, type){
        var screenSize = cc.director.getWinSize();
        switch (type){
            case ccui.TextField.EVENT_ATTACH_WITH_IME:{
                textField.runAction(cc.moveTo(0.225, cc.p(screenSize.width / 2, screenSize.height / 2 + textField.getContentSize().height / 2)));
                this._displayValueLabel.setString("attach with IME");
            }
                break;

            case ccui.TextField.EVENT_DETACH_WITH_IME:
            {
                textField.runAction(cc.moveTo(0.175, cc.p(screenSize.width / 2, screenSize.height / 2)));
                this._displayValueLabel.setString("detach with IME");
            }
                break;

            case ccui.TextField.EVENT_INSERT_TEXT:
                this._displayValueLabel.setString("insert words");
                break;

            case ccui.TextField.EVENT_DELETE_BACKWARD:
                this._displayValueLabel.setString("delete word");
                break;

            default:
                break;
        }
    }
});