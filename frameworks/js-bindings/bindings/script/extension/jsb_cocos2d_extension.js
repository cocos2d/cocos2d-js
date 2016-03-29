/*
 * Copyright (c) 2013-2014 Chukong Technologies Inc.
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
 */

var cc = cc || {};

cc.SCROLLVIEW_DIRECTION_NONE = -1;
cc.SCROLLVIEW_DIRECTION_HORIZONTAL = 0;
cc.SCROLLVIEW_DIRECTION_VERTICAL = 1;
cc.SCROLLVIEW_DIRECTION_BOTH = 2;
cc.TABLEVIEW_FILL_TOPDOWN = 0;
cc.TABLEVIEW_FILL_BOTTOMUP = 1;

/**
 * @constant
 * @type Number
 */
cc.KEYBOARD_RETURNTYPE_DEFAULT = 0;

/**
 * @constant
 * @type Number
 */
cc.KEYBOARD_RETURNTYPE_DONE = 1;

/**
 * @constant
 * @type Number
 */
cc.KEYBOARD_RETURNTYPE_SEND = 2;

/**
 * @constant
 * @type Number
 */
cc.KEYBOARD_RETURNTYPE_SEARCH = 3;

/**
 * @constant
 * @type Number
 */
cc.KEYBOARD_RETURNTYPE_GO = 4;

/**
 * The EditBox::InputMode defines the type of text that the user is allowed * to enter.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_MODE_ANY = 0;

/**
 * The user is allowed to enter an e-mail address.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_MODE_EMAILADDR = 1;

/**
 * The user is allowed to enter an integer value.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_MODE_NUMERIC = 2;

/**
 * The user is allowed to enter a phone number.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_MODE_PHONENUMBER = 3;

/**
 * The user is allowed to enter a URL.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_MODE_URL = 4;

/**
 * The user is allowed to enter a real number value.
 * This extends kEditBoxInputModeNumeric by allowing a decimal point.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_MODE_DECIMAL = 5;

/**
 * The user is allowed to enter any text, except for line breaks.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_MODE_SINGLELINE = 6;

/**
 * Indicates that the text entered is confidential data that should be
 * obscured whenever possible. This implies EDIT_BOX_INPUT_FLAG_SENSITIVE.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_FLAG_PASSWORD = 0;

/**
 * Indicates that the text entered is sensitive data that the
 * implementation must never store into a dictionary or table for use
 * in predictive, auto-completing, or other accelerated input schemes.
 * A credit card number is an example of sensitive data.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_FLAG_SENSITIVE = 1;

/**
 * This flag is a hint to the implementation that during text editing,
 * the initial letter of each word should be capitalized.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_FLAG_INITIAL_CAPS_WORD = 2;

/**
 * This flag is a hint to the implementation that during text editing,
 * the initial letter of each sentence should be capitalized.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_FLAG_INITIAL_CAPS_SENTENCE = 3;

/**
 * Capitalize all characters automatically.
 * @constant
 * @type Number
 */
cc.EDITBOX_INPUT_FLAG_INITIAL_CAPS_ALL_CHARACTERS = 4;

cc.CONTROL_EVENT_TOTAL_NUMBER = 9;

cc.CONTROL_EVENT_TOUCH_DOWN = 1 << 0;    // A touch-down event in the control.
cc.CONTROL_EVENT_TOUCH_DRAG_INSIDE = 1 << 1;    // An event where a finger is dragged inside the bounds of the control.
cc.CONTROL_EVENT_TOUCH_DRAG_OUTSIDE = 1 << 2;    // An event where a finger is dragged just outside the bounds of the control.
cc.CONTROL_EVENT_TOUCH_DRAG_ENTER = 1 << 3;    // An event where a finger is dragged into the bounds of the control.
cc.CONTROL_EVENT_TOUCH_DRAG_EXIT = 1 << 4;    // An event where a finger is dragged from within a control to outside its bounds.
cc.CONTROL_EVENT_TOUCH_UP_INSIDE = 1 << 5;    // A touch-up event in the control where the finger is inside the bounds of the control.
cc.CONTROL_EVENT_TOUCH_UP_OUTSIDE = 1 << 6;    // A touch-up event in the control where the finger is outside the bounds of the control.
cc.CONTROL_EVENT_TOUCH_CANCEL = 1 << 7;    // A system event canceling the current touches for the control.
cc.CONTROL_EVENT_VALUECHANGED = 1 << 8;    // A touch dragging or otherwise manipulating a control; causing it to emit a series of different values.

cc.CONTROL_STATE_NORMAL = 1 << 0; // The normal; or default state of a control梩hat is; enabled but neither selected nor highlighted.
cc.CONTROL_STATE_HIGHLIGHTED = 1 << 1; // Highlighted state of a control. A control enters this state when a touch down; drag inside or drag enter is performed. You can retrieve and set this value through the highlighted property.
cc.CONTROL_STATE_DISABLED = 1 << 2; // Disabled state of a control. This state indicates that the control is currently disabled. You can retrieve and set this value through the enabled property.
cc.CONTROL_STATE_SELECTED = 1 << 3;  // Selected state of a control. This state indicates that the control is currently selected. You can retrieve and set this value through the selected property.
cc.CONTROL_STATE_INITIAL = 1 << 3;

cc.CONTROL_ZOOM_ACTION_TAG = 0xCCCB0001;       //CCControlButton.js

cc.CONTROL_STEPPER_PARTMINUS = 0;               //CCControlStepper.js
cc.CONTROL_STEPPER_PARTPLUS = 1;
cc.CONTROL_STEPPER_PARTNONE = 2;
cc.CONTROL_STEPPER_LABELCOLOR_ENABLED = cc.color(55, 55, 55);
cc.CONTROL_STEPPER_LABELCOLOR_DISABLED = cc.color(147, 147, 147);
cc.CONTROL_STEPPER_LABELFONT = "CourierNewPSMT";
cc.AUTOREPEAT_DELTATIME = 0.15;
cc.AUTOREPEAT_INCREASETIME_INCREMENT = 12;

var _proto = null;
if (cc.AssetsManager){
    /**
     * @type {Object}
     * @name jsb.AssetsManager
     * jsb.AssetsManager is the native AssetsManager for your game resources or scripts.
     * please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/assets-manager/en
     * Only available in JSB
     */
    jsb.AssetsManager = cc.AssetsManager;
    delete cc.AssetsManager;
}

if (cc.EventListenerAssetsManager){
    /**
     * @type {Object}
     * @name jsb.EventListenerAssetsManager
     * jsb.EventListenerAssetsManager is the native event listener for AssetsManager.
     * please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/assets-manager/en
     * Only available in JSB
     */
    jsb.EventListenerAssetsManager = cc.EventListenerAssetsManager;
    delete cc.EventListenerAssetsManager;

    jsb.EventListenerAssetsManager.prototype._ctor = function(assetsManager, callback) {
        callback !== undefined && this.init(assetsManager, callback);
    };
}

if (cc.EventAssetsManager){
    /**
     * @type {Object}
     * @name jsb.EventAssetsManager
     * jsb.EventAssetsManager is the native event for AssetsManager.
     * please refer to this document to know how to use it: http://www.cocos2d-x.org/docs/manual/framework/html5/v3/assets-manager/en
     * Only available in JSB
     */
    jsb.EventAssetsManager = cc.EventAssetsManager;
    delete cc.EventAssetsManager;

    jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST = 0;
    jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST = 1;
    jsb.EventAssetsManager.ERROR_PARSE_MANIFEST = 2;
    jsb.EventAssetsManager.NEW_VERSION_FOUND = 3;
    jsb.EventAssetsManager.ALREADY_UP_TO_DATE = 4;
    jsb.EventAssetsManager.UPDATE_PROGRESSION = 5;
    jsb.EventAssetsManager.ASSET_UPDATED = 6;
    jsb.EventAssetsManager.ERROR_UPDATING = 7;
    jsb.EventAssetsManager.UPDATE_FINISHED = 8;
    jsb.EventAssetsManager.UPDATE_FAILED = 9;
    jsb.EventAssetsManager.ERROR_DECOMPRESS = 10;
}

if (cc.Control){
    _proto = cc.Control.prototype;
    cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
    cc.defineGetterSetter(_proto, "state", _proto.getState);
    cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);
    cc.defineGetterSetter(_proto, "selected", _proto.isSelected, _proto.setSelected);
    cc.defineGetterSetter(_proto, "highlighted", _proto.isHighlighted, _proto.setHighlighted);
}

if (cc.ControlButton){
    cc.ControlButton.extend = cc.Class.extend;

    _proto = cc.ControlButton.prototype;
    cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
    cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
    cc.defineGetterSetter(_proto, "adjustBackgroundImage", _proto.getAdjustBackgroundImage, _proto.setAdjustBackgroundImage);
    cc.defineGetterSetter(_proto, "zoomOnTouchDown", _proto.getZoomOnTouchDown, _proto.setZoomOnTouchDown);
    cc.defineGetterSetter(_proto, "preferredSize", _proto.getPreferredSize, _proto.setPreferredSize);
    cc.defineGetterSetter(_proto, "labelAnchor", _proto.getLabelAnchorPoint, _proto.setLabelAnchorPoint);

    cc.ControlButton.prototype._ctor = function(label, backgroundSprite, fontSize){
        if(fontSize != undefined)
            this.initWithTitleAndFontNameAndFontSize(label, backgroundSprite, fontSize);
        else if(backgroundSprite != undefined)
            this.initWithLabelAndBackgroundSprite(label, backgroundSprite);
        else if(label != undefined)
            this.initWithBackgroundSprite(label);
        else
            this.init();
    };

}

if (cc.ControlColourPicker){
    cc.ControlColourPicker.extend = cc.Class.extend;

    _proto = cc.ControlColourPicker.prototype;
    cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
    cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);
    cc.defineGetterSetter(_proto, "background", _proto.getBackground);

    cc.ControlColourPicker.prototype._ctor = function(){
        this.init();
    };

}

if (cc.ControlHuePicker){
    _proto = cc.ControlHuePicker.prototype;
    cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);
    cc.defineGetterSetter(_proto, "hue", _proto.getHue, _proto.setHue);
    cc.defineGetterSetter(_proto, "huePercent", _proto.getHuePercentage, _proto.setHuePercentage);
    cc.defineGetterSetter(_proto, "background", _proto.getBackground);
    cc.defineGetterSetter(_proto, "slider", _proto.getSlider);
    cc.defineGetterSetter(_proto, "startPos", _proto.getStartPos);
}

if (cc.ControlSaturationBrightnessPicker){
    _proto = cc.ControlSaturationBrightnessPicker.prototype;
    cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);
    cc.defineGetterSetter(_proto, "saturation", _proto.getSaturation);
    cc.defineGetterSetter(_proto, "brightness", _proto.getBrightness);
    cc.defineGetterSetter(_proto, "background", _proto.getBackground);
    cc.defineGetterSetter(_proto, "overlay", _proto.getOverlay);
    cc.defineGetterSetter(_proto, "shadow", _proto.getShadow);
    cc.defineGetterSetter(_proto, "slider", _proto.getSlider);
    cc.defineGetterSetter(_proto, "startPos", _proto.getStartPos);
}

if (cc.ControlPotentiometer){
    cc.ControlPotentiometer.extend = cc.Class.extend;

    _proto = cc.ControlPotentiometer.prototype;
    cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);
    cc.defineGetterSetter(_proto, "value", _proto.getValue, _proto.setValue);
    cc.defineGetterSetter(_proto, "minValue", _proto.getMinimumValue, _proto.setMinimumValue);
    cc.defineGetterSetter(_proto, "maxValue", _proto.getMaximumValue, _proto.setMaximumValue);
    cc.defineGetterSetter(_proto, "progressTimer", _proto.getProgressTimer, _proto.setProgressTimer);
    cc.defineGetterSetter(_proto, "thumbSprite", _proto.getThumbSprite, _proto.setThumbSprite);
    cc.defineGetterSetter(_proto, "prevLocation", _proto.getPreviousLocation, _proto.setPreviousLocation);

    cc.ControlPotentiometer.prototype._ctor = function(backgroundFile, progressFile, thumbFile){
        if (thumbFile != undefined) {
            // Prepare track for potentiometer
            var backgroundSprite = cc.Sprite.create(backgroundFile);

            // Prepare thumb for potentiometer
            var thumbSprite = cc.Sprite.create(thumbFile);

            // Prepare progress for potentiometer
            var progressTimer = cc.ProgressTimer.create(cc.Sprite.create(progressFile));
            this.initWithTrackSprite_ProgressTimer_ThumbSprite(backgroundSprite, progressTimer, thumbSprite);
        }
    };
}

if (cc.ControlSlider){
    cc.ControlSlider.extend = cc.Class.extend;

    _proto = cc.ControlSlider.prototype;
    cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);
    cc.defineGetterSetter(_proto, "value", _proto.getValue, _proto.setValue);
    cc.defineGetterSetter(_proto, "minValue", _proto.getMinimumValue, _proto.setMinimumValue);
    cc.defineGetterSetter(_proto, "maxValue", _proto.getMaximumValue, _proto.setMaximumValue);
    cc.defineGetterSetter(_proto, "minAllowedValue", _proto.getMinimumAllowedValue, _proto.setMinimumAllowedValue);
    cc.defineGetterSetter(_proto, "maxAllowedValue", _proto.getMaximumAllowedValue, _proto.setMaximumAllowedValue);
    cc.defineGetterSetter(_proto, "thumbSprite", _proto.getThumbSprite);
    cc.defineGetterSetter(_proto, "progressSprite", _proto.getProgressSprite);
    cc.defineGetterSetter(_proto, "backgroundSprite", _proto.getBackgroundSprite);

    cc.ControlSlider.prototype._ctor = function(bgFile, progressFile, thumbFile){
        if (thumbFile != undefined) {
            // Prepare background for slider
            bgSprite = cc.Sprite.create(bgFile);

            // Prepare progress for slider
            progressSprite = cc.Sprite.create(progressFile);

            // Prepare thumb (menuItem) for slider
            thumbSprite = cc.Sprite.create(thumbFile);

            this.initWithSprites(bgSprite, progressSprite, thumbSprite);
        }
    };
}

if (cc.ControlStepper){
    cc.ControlStepper.extend = cc.Class.extend;

    _proto = cc.ControlStepper.prototype;
    cc.defineGetterSetter(_proto, "wraps", _proto.getWraps, _proto.setWraps);
    cc.defineGetterSetter(_proto, "value", _proto.getValue, _proto.setValue);
    cc.defineGetterSetter(_proto, "minValue", _proto.getMinimumValue, _proto.setMinimumValue);
    cc.defineGetterSetter(_proto, "maxValue", _proto.getMaximumValue, _proto.setMaximumValue);
    cc.defineGetterSetter(_proto, "stepValue", _proto.getStepValue, _proto.setStepValue);
    cc.defineGetterSetter(_proto, "continuous", _proto.isContinuous);
    cc.defineGetterSetter(_proto, "minusSprite", _proto.getMinusSprite, _proto.setMinusSprite);
    cc.defineGetterSetter(_proto, "plusSprite", _proto.getPlusSprite, _proto.setPlusSprite);
    cc.defineGetterSetter(_proto, "minusLabel", _proto.getMinusLabel, _proto.setMinusLabel);
    cc.defineGetterSetter(_proto, "plusSLabel", _proto.getPlusSLabel, _proto.setPlusSLabel);

    cc.ControlStepper.prototype._ctor = function(minusSprite, plusSprite){
        plusSprite !== undefined && this.initWithMinusSpriteAndPlusSprite(minusSprite, plusSprite);
    };
}

if (cc.ControlSwitch){
    cc.ControlSwitch.extend = cc.Class.extend;

    _proto = cc.ControlSwitch.prototype;
    cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);

    cc.ControlSwitch.prototype._ctor = function(maskSprite, onSprite, offSprite, thumbSprite, onLabel, offLabel){
        offLabel !== undefined && this.initWithMaskSprite(maskSprite, onSprite, offSprite, thumbSprite, onLabel, offLabel);
    };
}

if (cc.ScrollView){
    cc.ScrollView.extend = cc.Class.extend;

    _proto = cc.ScrollView.prototype;
    cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
    cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
    cc.defineGetterSetter(_proto, "direction", _proto.getDirection, _proto.setDirection);

    cc.ScrollView.prototype._ctor = function(size, container) {
        size == undefined ? this.init() : (container ? this.initWithViewSize(size, container) : this.initWithViewSize(size));
    };
}

if (cc.TableView){
    cc.TableView.extend = cc.Class.extend;

    cc.TableView.prototype._ctor = function(dataSouurce, size, container){
        container == undefined ? this._init(dataSouurce, size) : this._init(dataSouurce, size, container);
    };
}

if (cc.TableViewCell){
    cc.TableViewCell.extend = cc.Class.extend;

    _proto = cc.TableViewCell.prototype;
    cc.defineGetterSetter(_proto, "objectId", _proto.getObjectID, _proto.setObjectID);
}