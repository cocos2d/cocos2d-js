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

var ControlSliderTest = ControlScene.extend({
    _displayValueLabel:null,
    init:function () {
        if (this._super()) {
            var screenSize = cc.Director.getInstance().getWinSize();

            // Add a label in which the slider value will be displayed
            this._displayValueLabel = cc.LabelTTF.create("Move the slider thumb!\nThe lower slider is restricted.", "Marker Felt", 32);
            this._displayValueLabel.retain();
            this._displayValueLabel.setAnchorPoint(0.5, -1.0);
            this._displayValueLabel.setPosition(screenSize.width / 1.7, screenSize.height / 2.0);
            this.addChild(this._displayValueLabel);

            // Add the slider
            var slider = cc.ControlSlider.create("res/extensions/sliderTrack.png", "res/extensions/sliderProgress.png", "res/extensions/sliderThumb.png");
            slider.setAnchorPoint(0.5, 1.0);
            slider.setMinimumValue(0.0); // Sets the min value of range
            slider.setMaximumValue(5.0); // Sets the max value of range
            slider.setPosition(screenSize.width / 2.0, screenSize.height / 2.0 + 16);
            slider.setTag(1);

            // When the value of the slider will change, the given selector will be call
            slider.addTargetWithActionForControlEvents(this, this.valueChanged, cc.CONTROL_EVENT_VALUECHANGED);

            var restrictSlider = cc.ControlSlider.create("res/extensions/sliderTrack.png", "res/extensions/sliderProgress.png", "res/extensions/sliderThumb.png");
            restrictSlider.setAnchorPoint(0.5, 1.0);
            restrictSlider.setMinimumValue(0.0); // Sets the min value of range
            restrictSlider.setMaximumValue(5.0); // Sets the max value of range
            restrictSlider.setMaximumAllowedValue(4.0);
            restrictSlider.setMinimumAllowedValue(1.5);
            restrictSlider.setValue(3.0);
            restrictSlider.setPosition(screenSize.width / 2.0, screenSize.height / 2.0 - 24);
            restrictSlider.setTag(2);

            //same with restricted
            restrictSlider.addTargetWithActionForControlEvents(this, this.valueChanged, cc.CONTROL_EVENT_VALUECHANGED);

            this.addChild(slider);
            this.addChild(restrictSlider);
            return true;
        }
        return false;
    },
    valueChanged:function (sender, controlEvent) {
        // Change value of label.
        if (sender.getTag() == 1)
            this._displayValueLabel.setString("Upper slider value = " + sender.getValue().toFixed(2));
        if (sender.getTag() == 2)
            this._displayValueLabel.setString("Lower slider value = " + sender.getValue().toFixed(2));
    }
});

ControlSliderTest.create = function (sceneTitle) {
    var scene = cc.Scene.create();
    var controlLayer = new ControlSliderTest();
    if (controlLayer && controlLayer.init()) {
        controlLayer.getSceneTitleLabel().setString(sceneTitle);
        scene.addChild(controlLayer);
    }
    return scene;
};