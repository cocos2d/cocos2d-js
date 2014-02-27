/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

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

var ControlSwitchTest = ControlScene.extend({
    init:function () {
        if (this._super()) {
            var screenSize = cc.Director.getInstance().getWinSize();

            var layer = cc.Node.create();
            layer.setPosition(screenSize.width / 2, screenSize.height / 2);
            this.addChild(layer, 1);

            var layer_width = 0;

            // Add the black background for the text
            var background = cc.Scale9Sprite.create("res/extensions/buttonBackground.png");
            background.setContentSize(80, 50);
            background.setPosition(layer_width + background.getContentSize().width / 2.0, 0);
            layer.addChild(background);

            layer_width += background.getContentSize().width;

            this._displayValueLabel = cc.LabelTTF.create("#color", "Marker Felt", 30);
            this._displayValueLabel.retain();

            this._displayValueLabel.setPosition(background.getPosition());
            layer.addChild(this._displayValueLabel);

            // Create the switch
            var switchControl = cc.ControlSwitch.create
                (
                    cc.Sprite.create("res/extensions/switch-mask.png"),
                    cc.Sprite.create("res/extensions/switch-on.png"),
                    cc.Sprite.create("res/extensions/switch-off.png"),
                    cc.Sprite.create("res/extensions/switch-thumb.png"),
                    cc.LabelTTF.create("On", "Arial-BoldMT", 16),
                    cc.LabelTTF.create("Off", "Arial-BoldMT", 16)
                );
            switchControl.setPosition(layer_width + 10 + switchControl.getContentSize().width / 2, 0);
            layer.addChild(switchControl);

            switchControl.addTargetWithActionForControlEvents(this, this.valueChanged, cc.CONTROL_EVENT_VALUECHANGED);

            // Set the layer size
            layer.setContentSize(layer_width, 0);
            layer.setAnchorPoint(0.5, 0.5);

            // Update the value label
            this.valueChanged(switchControl, cc.CONTROL_EVENT_VALUECHANGED);
            return true;
        }
        return false;
    },
    valueChanged:function (sender, controlEvent) {
        if (sender.isOn()) {
            this._displayValueLabel.setString("On");
        }
        else {
            this._displayValueLabel.setString("Off");
        }
    }
});

ControlSwitchTest.create = function (sceneTitle) {
    var scene = cc.Scene.create();
    var controlLayer = new ControlSwitchTest();
    if (controlLayer && controlLayer.init()) {
        controlLayer.getSceneTitleLabel().setString(sceneTitle);
        scene.addChild(controlLayer);
    }
    return scene;
};