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

var ControlPotentiometerTest = ControlScene.extend({
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
            background.setContentSize(80, 50);
            background.setPosition(layer_width + background.getContentSize().width / 2.0, 0);
            layer.addChild(background);

            layer_width += background.getContentSize().width;

            this._displayValueLabel = cc.LabelTTF.create("", "HelveticaNeue-Bold", 30);

            this._displayValueLabel.setPosition(background.getPosition());
            layer.addChild(this._displayValueLabel);

            // Add the slider
            var potentiometer = cc.ControlPotentiometer.create("res/extensions/potentiometerTrack.png"
                , "res/extensions/potentiometerProgress.png"
                , "res/extensions/potentiometerButton.png");
            potentiometer.setPosition(layer_width + 10 + potentiometer.getContentSize().width / 2, 0);

            // When the value of the slider will change, the given selector will be call
            potentiometer.addTargetWithActionForControlEvents(this, this.valueChanged, cc.CONTROL_EVENT_VALUECHANGED);

            layer.addChild(potentiometer);

            layer_width += potentiometer.getContentSize().width;

            // Set the layer size
            layer.setContentSize(layer_width, 0);
            layer.setAnchorPoint(0.5, 0.5);

            // Update the value label
            this.valueChanged(potentiometer, cc.CONTROL_EVENT_VALUECHANGED);

            return true;
        }
        return false;
    },
    valueChanged:function (sender, controlEvent) {
        // Change value of label.
        this._displayValueLabel.setString(sender.getValue().toFixed(2));
    }
});
ControlPotentiometerTest.create = function (sceneTitle) {
    var scene = cc.Scene.create();
    var controlLayer = new ControlPotentiometerTest();
    if (controlLayer && controlLayer.init()) {
        controlLayer.getSceneTitleLabel().setString(sceneTitle);
        scene.addChild(controlLayer);
    }
    return scene;
};