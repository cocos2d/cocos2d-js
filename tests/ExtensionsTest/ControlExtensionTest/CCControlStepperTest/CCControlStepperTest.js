/*
 * Copyright (c) 2012 cocos2d-x.org
 * Copyright (c) 2012 Yannick Loriot
 * http://yannickloriot.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

var ControlStepperTest = ControlScene.extend({
    _displayValueLabel:null,
    init:function () {
        if (this._super()) {
            var screenSize = cc.Director.getInstance().getWinSize();

            var layer = cc.Node.create();
            layer.setPosition(screenSize.width / 2, screenSize.height / 2);
            this.addChild(layer, 1);
            var layer_width = 0;

            // Add the black background for the text
            var background = cc.Scale9Sprite.create("res/extensions/buttonBackground.png");
            background.setContentSize(100, 50);
            background.setPosition(layer_width + background.getContentSize().width / 2.0, 0);
            layer.addChild(background);

            this._displayValueLabel = cc.LabelTTF.create("0", "HelveticaNeue-Bold", 30);

            this._displayValueLabel.setPosition(background.getPosition());
            layer.addChild(this._displayValueLabel);

            layer_width += background.getContentSize().width;

            var stepper = this.makeControlStepper();
            stepper.setPosition(layer_width + 10 + stepper.getContentSize().width / 2, 0);
            stepper.addTargetWithActionForControlEvents(this, this.valueChanged, cc.CONTROL_EVENT_VALUECHANGED);
            layer.addChild(stepper);

            layer_width += stepper.getContentSize().width;

            // Set the layer size
            layer.setContentSize(layer_width, 0);
            layer.setAnchorPoint(0.5, 0.5);

            // Update the value label
            this.valueChanged(stepper, cc.CONTROL_EVENT_VALUECHANGED);
            return true;
        }
        return false;
    },
    makeControlStepper:function () {
        var minusSprite = cc.Sprite.create("res/extensions/stepper-minus.png");
        var plusSprite = cc.Sprite.create("res/extensions/stepper-plus.png");

        return cc.ControlStepper.create(minusSprite, plusSprite);
    },

    valueChanged:function (sender, controlEvent) {
        // Change value of label.
        this._displayValueLabel.setString(sender.getValue().toString());
    }
});

ControlStepperTest.create = function (sceneTitle) {
    var scene = cc.Scene.create();
    var controlLayer = new ControlStepperTest();
    if (controlLayer && controlLayer.init()) {
        controlLayer.getSceneTitleLabel().setString(sceneTitle);
        scene.addChild(controlLayer);
    }
    return scene;
};