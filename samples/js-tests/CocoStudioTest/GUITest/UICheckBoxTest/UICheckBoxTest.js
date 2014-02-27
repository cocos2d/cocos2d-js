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

var UICheckBoxTest = UIScene.extend({
    init: function () {
        if (this._super()) {
            //init text
            this._topDisplayLabel.setText("No Event");
            this._bottomDisplayLabel.setText("CheckBox");

            var widgetSize = this._widget.getSize();
            // Create the checkbox
            var checkBox = ccui.CheckBox.create();
            checkBox.setTouchEnabled(true);
            checkBox.loadTextures("res/cocosgui/check_box_normal.png",
                "res/cocosgui/check_box_normal_press.png",
                "res/cocosgui/check_box_active.png",
                "res/cocosgui/check_box_normal_disable.png",
                "res/cocosgui/check_box_active_disable.png");
            checkBox.setPosition(cc.p(widgetSize.width / 2.0, widgetSize.height / 2.0));
            checkBox.addEventListenerCheckBox(this.selectedStateEvent, this);
            this._uiLayer.addChild(checkBox);

            return true;
        }
        return false;
    },

    selectedStateEvent: function (sender, type) {
        switch (type) {
            case  ccui.CheckBoxEventType.unselected:
                this._topDisplayLabel.setText("Unselected");
                break;
            case ccui.CheckBoxEventType.selected:
                this._topDisplayLabel.setText("Selected");
                break;

            default:
                break;
        }
    }
});
