/**
 * @module cocos2dx_extension
 */
var cc = cc || {};

/**
 * @class Scale9Sprite
 */
cc.Scale9Sprite = {

/**
 * @method resizableSpriteWithCapInsets
 * @param {RectObject} arg0
 * @return {cc.Scale9Sprite}
 */
resizableSpriteWithCapInsets : function (
rect 
)
{
    return cc.Scale9Sprite;
},

/**
 * @method setInsetBottom
 * @param {float} arg0
 */
setInsetBottom : function (
float 
)
{
},

/**
 * @method initWithSpriteFrameName
* @param {String|String} str
* @param {RectObject} rect
* @return {bool|bool}
*/
initWithSpriteFrameName : function(
str,
rect 
)
{
    return false;
},

/**
 * @method setInsetTop
 * @param {float} arg0
 */
setInsetTop : function (
float 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setPreferredSize
 * @param {SizeObject} arg0
 */
setPreferredSize : function (
size 
)
{
},

/**
 * @method setSpriteFrame
 * @param {cc.SpriteFrame} arg0
 */
setSpriteFrame : function (
spriteframe 
)
{
},

/**
 * @method initWithBatchNode
* @param {cc.SpriteBatchNode|cc.SpriteBatchNode} spritebatchnode
* @param {RectObject|RectObject} rect
* @param {RectObject|bool} rect
* @param {RectObject} rect
* @return {bool|bool}
*/
initWithBatchNode : function(
spritebatchnode,
rect,
bool,
rect 
)
{
    return false;
},

/**
 * @method getInsetBottom
 * @return {float}
 */
getInsetBottom : function (
)
{
    return 0;
},

/**
 * @method getCapInsets
 * @return {RectObject}
 */
getCapInsets : function (
)
{
    return cc.Rect;
},

/**
 * @method updateWithBatchNode
 * @param {cc.SpriteBatchNode} arg0
 * @param {RectObject} arg1
 * @param {bool} arg2
 * @param {RectObject} arg3
 * @return {bool}
 */
updateWithBatchNode : function (
spritebatchnode, 
rect, 
bool, 
rect 
)
{
    return false;
},

/**
 * @method getInsetRight
 * @return {float}
 */
getInsetRight : function (
)
{
    return 0;
},

/**
 * @method getOriginalSize
 * @return {SizeObject}
 */
getOriginalSize : function (
)
{
    return cc.Size;
},

/**
 * @method initWithFile
* @param {String|String|RectObject|String} str
* @param {RectObject|RectObject|String} rect
* @param {RectObject} rect
* @return {bool|bool|bool|bool}
*/
initWithFile : function(
str,
rect,
rect 
)
{
    return false;
},

/**
 * @method getInsetTop
 * @return {float}
 */
getInsetTop : function (
)
{
    return 0;
},

/**
 * @method setInsetLeft
 * @param {float} arg0
 */
setInsetLeft : function (
float 
)
{
},

/**
 * @method initWithSpriteFrame
* @param {cc.SpriteFrame|cc.SpriteFrame} spriteframe
* @param {RectObject} rect
* @return {bool|bool}
*/
initWithSpriteFrame : function(
spriteframe,
rect 
)
{
    return false;
},

/**
 * @method getPreferredSize
 * @return {SizeObject}
 */
getPreferredSize : function (
)
{
    return cc.Size;
},

/**
 * @method setCapInsets
 * @param {RectObject} arg0
 */
setCapInsets : function (
rect 
)
{
},

/**
 * @method getInsetLeft
 * @return {float}
 */
getInsetLeft : function (
)
{
    return 0;
},

/**
 * @method setInsetRight
 * @param {float} arg0
 */
setInsetRight : function (
float 
)
{
},

/**
 * @method create
* @param {String|RectObject|String|String} str
* @param {RectObject|String|RectObject} rect
* @param {RectObject} rect
* @return {cc.Scale9Sprite|cc.Scale9Sprite|cc.Scale9Sprite|cc.Scale9Sprite|cc.Scale9Sprite}
*/
create : function(
str,
rect,
rect 
)
{
    return cc.Scale9Sprite;
},

/**
 * @method createWithSpriteFrameName
* @param {String|String} str
* @param {RectObject} rect
* @return {cc.Scale9Sprite|cc.Scale9Sprite}
*/
createWithSpriteFrameName : function(
str,
rect 
)
{
    return cc.Scale9Sprite;
},

/**
 * @method createWithSpriteFrame
* @param {cc.SpriteFrame|cc.SpriteFrame} spriteframe
* @param {RectObject} rect
* @return {cc.Scale9Sprite|cc.Scale9Sprite}
*/
createWithSpriteFrame : function(
spriteframe,
rect 
)
{
    return cc.Scale9Sprite;
},

/**
 * @method Scale9Sprite
 * @constructor
 */
Scale9Sprite : function (
)
{
},

};

/**
 * @class Control
 */
cc.Control = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method getState
 * @return {cc.Control::State}
 */
getState : function (
)
{
    return 0;
},

/**
 * @method sendActionsForControlEvents
 * @param {cc.Control::EventType} arg0
 */
sendActionsForControlEvents : function (
eventtype 
)
{
},

/**
 * @method setSelected
 * @param {bool} arg0
 */
setSelected : function (
bool 
)
{
},

/**
 * @method isEnabled
 * @return {bool}
 */
isEnabled : function (
)
{
    return false;
},

/**
 * @method needsLayout
 */
needsLayout : function (
)
{
},

/**
 * @method hasVisibleParents
 * @return {bool}
 */
hasVisibleParents : function (
)
{
    return false;
},

/**
 * @method isSelected
 * @return {bool}
 */
isSelected : function (
)
{
    return false;
},

/**
 * @method isTouchInside
 * @param {cc.Touch} arg0
 * @return {bool}
 */
isTouchInside : function (
touch 
)
{
    return false;
},

/**
 * @method setHighlighted
 * @param {bool} arg0
 */
setHighlighted : function (
bool 
)
{
},

/**
 * @method getTouchLocation
 * @param {cc.Touch} arg0
 * @return {PointObject}
 */
getTouchLocation : function (
touch 
)
{
    return cc.Point;
},

/**
 * @method isHighlighted
 * @return {bool}
 */
isHighlighted : function (
)
{
    return false;
},

/**
 * @method create
 * @return {cc.Control}
 */
create : function (
)
{
    return cc.Control;
},

/**
 * @method Control
 * @constructor
 */
Control : function (
)
{
},

};

/**
 * @class ControlButton
 */
cc.ControlButton = {

/**
 * @method isPushed
 * @return {bool}
 */
isPushed : function (
)
{
    return false;
},

/**
 * @method setSelected
 * @param {bool} arg0
 */
setSelected : function (
bool 
)
{
},

/**
 * @method setTitleLabelForState
 * @param {cc.Node} arg0
 * @param {cc.Control::State} arg1
 */
setTitleLabelForState : function (
node, 
state 
)
{
},

/**
 * @method setAdjustBackgroundImage
 * @param {bool} arg0
 */
setAdjustBackgroundImage : function (
bool 
)
{
},

/**
 * @method setHighlighted
 * @param {bool} arg0
 */
setHighlighted : function (
bool 
)
{
},

/**
 * @method setZoomOnTouchDown
 * @param {bool} arg0
 */
setZoomOnTouchDown : function (
bool 
)
{
},

/**
 * @method setTitleForState
 * @param {String} arg0
 * @param {cc.Control::State} arg1
 */
setTitleForState : function (
str, 
state 
)
{
},

/**
 * @method setLabelAnchorPoint
 * @param {PointObject} arg0
 */
setLabelAnchorPoint : function (
point 
)
{
},

/**
 * @method getLabelAnchorPoint
 * @return {PointObject}
 */
getLabelAnchorPoint : function (
)
{
    return cc.Point;
},

/**
 * @method initWithBackgroundSprite
 * @param {cc.Scale9Sprite} arg0
 * @return {bool}
 */
initWithBackgroundSprite : function (
scale9sprite 
)
{
    return false;
},

/**
 * @method getTitleTTFSizeForState
 * @param {cc.Control::State} arg0
 * @return {float}
 */
getTitleTTFSizeForState : function (
state 
)
{
    return 0;
},

/**
 * @method setTitleTTFForState
 * @param {String} arg0
 * @param {cc.Control::State} arg1
 */
setTitleTTFForState : function (
str, 
state 
)
{
},

/**
 * @method setTitleTTFSizeForState
 * @param {float} arg0
 * @param {cc.Control::State} arg1
 */
setTitleTTFSizeForState : function (
float, 
state 
)
{
},

/**
 * @method setTitleLabel
 * @param {cc.Node} arg0
 */
setTitleLabel : function (
node 
)
{
},

/**
 * @method setPreferredSize
 * @param {SizeObject} arg0
 */
setPreferredSize : function (
size 
)
{
},

/**
 * @method getCurrentTitleColor
 * @return {Color3BObject}
 */
getCurrentTitleColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method setBackgroundSprite
 * @param {cc.Scale9Sprite} arg0
 */
setBackgroundSprite : function (
scale9sprite 
)
{
},

/**
 * @method getBackgroundSpriteForState
 * @param {cc.Control::State} arg0
 * @return {cc.Scale9Sprite}
 */
getBackgroundSpriteForState : function (
state 
)
{
    return cc.Scale9Sprite;
},

/**
 * @method getHorizontalOrigin
 * @return {int}
 */
getHorizontalOrigin : function (
)
{
    return 0;
},

/**
 * @method needsLayout
 */
needsLayout : function (
)
{
},

/**
 * @method initWithTitleAndFontNameAndFontSize
 * @param {String} arg0
 * @param {String} arg1
 * @param {float} arg2
 * @return {bool}
 */
initWithTitleAndFontNameAndFontSize : function (
str, 
str, 
float 
)
{
    return false;
},

/**
 * @method getCurrentTitle
* @return {String|String}
*/
getCurrentTitle : function(
)
{
    return ;
},

/**
 * @method getScaleRatio
 * @return {float}
 */
getScaleRatio : function (
)
{
    return 0;
},

/**
 * @method getTitleTTFForState
 * @param {cc.Control::State} arg0
 * @return {String}
 */
getTitleTTFForState : function (
state 
)
{
    return ;
},

/**
 * @method getBackgroundSprite
 * @return {cc.Scale9Sprite}
 */
getBackgroundSprite : function (
)
{
    return cc.Scale9Sprite;
},

/**
 * @method getTitleColorForState
 * @param {cc.Control::State} arg0
 * @return {Color3BObject}
 */
getTitleColorForState : function (
state 
)
{
    return cc.Color3B;
},

/**
 * @method setTitleColorForState
 * @param {Color3BObject} arg0
 * @param {cc.Control::State} arg1
 */
setTitleColorForState : function (
color3b, 
state 
)
{
},

/**
 * @method doesAdjustBackgroundImage
 * @return {bool}
 */
doesAdjustBackgroundImage : function (
)
{
    return false;
},

/**
 * @method setBackgroundSpriteFrameForState
 * @param {cc.SpriteFrame} arg0
 * @param {cc.Control::State} arg1
 */
setBackgroundSpriteFrameForState : function (
spriteframe, 
state 
)
{
},

/**
 * @method setBackgroundSpriteForState
 * @param {cc.Scale9Sprite} arg0
 * @param {cc.Control::State} arg1
 */
setBackgroundSpriteForState : function (
scale9sprite, 
state 
)
{
},

/**
 * @method setScaleRatio
 * @param {float} arg0
 */
setScaleRatio : function (
float 
)
{
},

/**
 * @method initWithLabelAndBackgroundSprite
 * @param {cc.Node} arg0
 * @param {cc.Scale9Sprite} arg1
 * @return {bool}
 */
initWithLabelAndBackgroundSprite : function (
node, 
scale9sprite 
)
{
    return false;
},

/**
 * @method getTitleLabel
 * @return {cc.Node}
 */
getTitleLabel : function (
)
{
    return cc.Node;
},

/**
 * @method getPreferredSize
 * @return {SizeObject}
 */
getPreferredSize : function (
)
{
    return cc.Size;
},

/**
 * @method getVerticalMargin
 * @return {int}
 */
getVerticalMargin : function (
)
{
    return 0;
},

/**
 * @method getTitleLabelForState
 * @param {cc.Control::State} arg0
 * @return {cc.Node}
 */
getTitleLabelForState : function (
state 
)
{
    return cc.Node;
},

/**
 * @method setMargins
 * @param {int} arg0
 * @param {int} arg1
 */
setMargins : function (
int, 
int 
)
{
},

/**
 * @method setTitleBMFontForState
 * @param {String} arg0
 * @param {cc.Control::State} arg1
 */
setTitleBMFontForState : function (
str, 
state 
)
{
},

/**
 * @method getTitleBMFontForState
 * @param {cc.Control::State} arg0
 * @return {String}
 */
getTitleBMFontForState : function (
state 
)
{
    return ;
},

/**
 * @method getZoomOnTouchDown
 * @return {bool}
 */
getZoomOnTouchDown : function (
)
{
    return false;
},

/**
 * @method getTitleForState
 * @param {cc.Control::State} arg0
 * @return {String}
 */
getTitleForState : function (
state 
)
{
    return ;
},

/**
 * @method create
* @param {cc.Scale9Sprite|cc.Node|String} scale9sprite
* @param {cc.Scale9Sprite|String} scale9sprite
* @param {float} float
* @return {cc.ControlButton|cc.ControlButton|cc.ControlButton|cc.ControlButton}
*/
create : function(
str,
str,
float 
)
{
    return cc.ControlButton;
},

/**
 * @method ControlButton
 * @constructor
 */
ControlButton : function (
)
{
},

};

/**
 * @class ControlHuePicker
 */
cc.ControlHuePicker = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method initWithTargetAndPos
 * @param {cc.Node} arg0
 * @param {PointObject} arg1
 * @return {bool}
 */
initWithTargetAndPos : function (
node, 
point 
)
{
    return false;
},

/**
 * @method setHue
 * @param {float} arg0
 */
setHue : function (
float 
)
{
},

/**
 * @method getStartPos
 * @return {PointObject}
 */
getStartPos : function (
)
{
    return cc.Point;
},

/**
 * @method getHue
 * @return {float}
 */
getHue : function (
)
{
    return 0;
},

/**
 * @method getSlider
 * @return {cc.Sprite}
 */
getSlider : function (
)
{
    return cc.Sprite;
},

/**
 * @method setBackground
 * @param {cc.Sprite} arg0
 */
setBackground : function (
sprite 
)
{
},

/**
 * @method setHuePercentage
 * @param {float} arg0
 */
setHuePercentage : function (
float 
)
{
},

/**
 * @method getBackground
 * @return {cc.Sprite}
 */
getBackground : function (
)
{
    return cc.Sprite;
},

/**
 * @method getHuePercentage
 * @return {float}
 */
getHuePercentage : function (
)
{
    return 0;
},

/**
 * @method setSlider
 * @param {cc.Sprite} arg0
 */
setSlider : function (
sprite 
)
{
},

/**
 * @method create
 * @param {cc.Node} arg0
 * @param {PointObject} arg1
 * @return {cc.ControlHuePicker}
 */
create : function (
node, 
point 
)
{
    return cc.ControlHuePicker;
},

/**
 * @method ControlHuePicker
 * @constructor
 */
ControlHuePicker : function (
)
{
},

};

/**
 * @class ControlSaturationBrightnessPicker
 */
cc.ControlSaturationBrightnessPicker = {

/**
 * @method getShadow
 * @return {cc.Sprite}
 */
getShadow : function (
)
{
    return cc.Sprite;
},

/**
 * @method initWithTargetAndPos
 * @param {cc.Node} arg0
 * @param {PointObject} arg1
 * @return {bool}
 */
initWithTargetAndPos : function (
node, 
point 
)
{
    return false;
},

/**
 * @method getStartPos
 * @return {PointObject}
 */
getStartPos : function (
)
{
    return cc.Point;
},

/**
 * @method getOverlay
 * @return {cc.Sprite}
 */
getOverlay : function (
)
{
    return cc.Sprite;
},

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method getSlider
 * @return {cc.Sprite}
 */
getSlider : function (
)
{
    return cc.Sprite;
},

/**
 * @method getBackground
 * @return {cc.Sprite}
 */
getBackground : function (
)
{
    return cc.Sprite;
},

/**
 * @method getSaturation
 * @return {float}
 */
getSaturation : function (
)
{
    return 0;
},

/**
 * @method getBrightness
 * @return {float}
 */
getBrightness : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {cc.Node} arg0
 * @param {PointObject} arg1
 * @return {cc.ControlSaturationBrightnessPicker}
 */
create : function (
node, 
point 
)
{
    return cc.ControlSaturationBrightnessPicker;
},

/**
 * @method ControlSaturationBrightnessPicker
 * @constructor
 */
ControlSaturationBrightnessPicker : function (
)
{
},

};

/**
 * @class ControlColourPicker
 */
cc.ControlColourPicker = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method getHuePicker
 * @return {cc.ControlHuePicker}
 */
getHuePicker : function (
)
{
    return cc.ControlHuePicker;
},

/**
 * @method setColor
 * @param {Color3BObject} arg0
 */
setColor : function (
color3b 
)
{
},

/**
 * @method hueSliderValueChanged
 * @param {cc.Ref} arg0
 * @param {cc.Control::EventType} arg1
 */
hueSliderValueChanged : function (
ref, 
eventtype 
)
{
},

/**
 * @method getcolourPicker
 * @return {cc.ControlSaturationBrightnessPicker}
 */
getcolourPicker : function (
)
{
    return cc.ControlSaturationBrightnessPicker;
},

/**
 * @method setBackground
 * @param {cc.Sprite} arg0
 */
setBackground : function (
sprite 
)
{
},

/**
 * @method setcolourPicker
 * @param {cc.ControlSaturationBrightnessPicker} arg0
 */
setcolourPicker : function (
controlsaturationbrightnesspicker 
)
{
},

/**
 * @method colourSliderValueChanged
 * @param {cc.Ref} arg0
 * @param {cc.Control::EventType} arg1
 */
colourSliderValueChanged : function (
ref, 
eventtype 
)
{
},

/**
 * @method setHuePicker
 * @param {cc.ControlHuePicker} arg0
 */
setHuePicker : function (
controlhuepicker 
)
{
},

/**
 * @method getBackground
 * @return {cc.Sprite}
 */
getBackground : function (
)
{
    return cc.Sprite;
},

/**
 * @method create
 * @return {cc.ControlColourPicker}
 */
create : function (
)
{
    return cc.ControlColourPicker;
},

/**
 * @method ControlColourPicker
 * @constructor
 */
ControlColourPicker : function (
)
{
},

};

/**
 * @class ControlPotentiometer
 */
cc.ControlPotentiometer = {

/**
 * @method setPreviousLocation
 * @param {PointObject} arg0
 */
setPreviousLocation : function (
point 
)
{
},

/**
 * @method setValue
 * @param {float} arg0
 */
setValue : function (
float 
)
{
},

/**
 * @method getProgressTimer
 * @return {cc.ProgressTimer}
 */
getProgressTimer : function (
)
{
    return cc.ProgressTimer;
},

/**
 * @method getMaximumValue
 * @return {float}
 */
getMaximumValue : function (
)
{
    return 0;
},

/**
 * @method angleInDegreesBetweenLineFromPoint_toPoint_toLineFromPoint_toPoint
 * @param {PointObject} arg0
 * @param {PointObject} arg1
 * @param {PointObject} arg2
 * @param {PointObject} arg3
 * @return {float}
 */
angleInDegreesBetweenLineFromPoint_toPoint_toLineFromPoint_toPoint : function (
point, 
point, 
point, 
point 
)
{
    return 0;
},

/**
 * @method potentiometerBegan
 * @param {PointObject} arg0
 */
potentiometerBegan : function (
point 
)
{
},

/**
 * @method setMaximumValue
 * @param {float} arg0
 */
setMaximumValue : function (
float 
)
{
},

/**
 * @method getMinimumValue
 * @return {float}
 */
getMinimumValue : function (
)
{
    return 0;
},

/**
 * @method setThumbSprite
 * @param {cc.Sprite} arg0
 */
setThumbSprite : function (
sprite 
)
{
},

/**
 * @method getValue
 * @return {float}
 */
getValue : function (
)
{
    return 0;
},

/**
 * @method getPreviousLocation
 * @return {PointObject}
 */
getPreviousLocation : function (
)
{
    return cc.Point;
},

/**
 * @method distanceBetweenPointAndPoint
 * @param {PointObject} arg0
 * @param {PointObject} arg1
 * @return {float}
 */
distanceBetweenPointAndPoint : function (
point, 
point 
)
{
    return 0;
},

/**
 * @method potentiometerEnded
 * @param {PointObject} arg0
 */
potentiometerEnded : function (
point 
)
{
},

/**
 * @method setProgressTimer
 * @param {cc.ProgressTimer} arg0
 */
setProgressTimer : function (
progresstimer 
)
{
},

/**
 * @method setMinimumValue
 * @param {float} arg0
 */
setMinimumValue : function (
float 
)
{
},

/**
 * @method getThumbSprite
 * @return {cc.Sprite}
 */
getThumbSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method initWithTrackSprite_ProgressTimer_ThumbSprite
 * @param {cc.Sprite} arg0
 * @param {cc.ProgressTimer} arg1
 * @param {cc.Sprite} arg2
 * @return {bool}
 */
initWithTrackSprite_ProgressTimer_ThumbSprite : function (
sprite, 
progresstimer, 
sprite 
)
{
    return false;
},

/**
 * @method potentiometerMoved
 * @param {PointObject} arg0
 */
potentiometerMoved : function (
point 
)
{
},

/**
 * @method create
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @return {cc.ControlPotentiometer}
 */
create : function (
char, 
char, 
char 
)
{
    return cc.ControlPotentiometer;
},

/**
 * @method ControlPotentiometer
 * @constructor
 */
ControlPotentiometer : function (
)
{
},

};

/**
 * @class ControlSlider
 */
cc.ControlSlider = {

/**
 * @method getSelectedThumbSprite
 * @return {cc.Sprite}
 */
getSelectedThumbSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method locationFromTouch
 * @param {cc.Touch} arg0
 * @return {PointObject}
 */
locationFromTouch : function (
touch 
)
{
    return cc.Point;
},

/**
 * @method setSelectedThumbSprite
 * @param {cc.Sprite} arg0
 */
setSelectedThumbSprite : function (
sprite 
)
{
},

/**
 * @method setProgressSprite
 * @param {cc.Sprite} arg0
 */
setProgressSprite : function (
sprite 
)
{
},

/**
 * @method getMaximumAllowedValue
 * @return {float}
 */
getMaximumAllowedValue : function (
)
{
    return 0;
},

/**
 * @method getMinimumAllowedValue
 * @return {float}
 */
getMinimumAllowedValue : function (
)
{
    return 0;
},

/**
 * @method getMinimumValue
 * @return {float}
 */
getMinimumValue : function (
)
{
    return 0;
},

/**
 * @method setThumbSprite
 * @param {cc.Sprite} arg0
 */
setThumbSprite : function (
sprite 
)
{
},

/**
 * @method setMinimumValue
 * @param {float} arg0
 */
setMinimumValue : function (
float 
)
{
},

/**
 * @method setMinimumAllowedValue
 * @param {float} arg0
 */
setMinimumAllowedValue : function (
float 
)
{
},

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method setValue
 * @param {float} arg0
 */
setValue : function (
float 
)
{
},

/**
 * @method setMaximumValue
 * @param {float} arg0
 */
setMaximumValue : function (
float 
)
{
},

/**
 * @method needsLayout
 */
needsLayout : function (
)
{
},

/**
 * @method getBackgroundSprite
 * @return {cc.Sprite}
 */
getBackgroundSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method initWithSprites
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite} sprite
* @return {bool|bool}
*/
initWithSprites : function(
sprite,
sprite,
sprite,
sprite 
)
{
    return false;
},

/**
 * @method getMaximumValue
 * @return {float}
 */
getMaximumValue : function (
)
{
    return 0;
},

/**
 * @method isTouchInside
 * @param {cc.Touch} arg0
 * @return {bool}
 */
isTouchInside : function (
touch 
)
{
    return false;
},

/**
 * @method getValue
 * @return {float}
 */
getValue : function (
)
{
    return 0;
},

/**
 * @method getThumbSprite
 * @return {cc.Sprite}
 */
getThumbSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method getProgressSprite
 * @return {cc.Sprite}
 */
getProgressSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method setBackgroundSprite
 * @param {cc.Sprite} arg0
 */
setBackgroundSprite : function (
sprite 
)
{
},

/**
 * @method setMaximumAllowedValue
 * @param {float} arg0
 */
setMaximumAllowedValue : function (
float 
)
{
},

/**
 * @method create
* @param {cc.Sprite|char|char|cc.Sprite} sprite
* @param {cc.Sprite|char|char|cc.Sprite} sprite
* @param {cc.Sprite|char|char|cc.Sprite} sprite
* @param {char|cc.Sprite} char
* @return {cc.ControlSlider|cc.ControlSlider|cc.ControlSlider|cc.ControlSlider}
*/
create : function(
sprite,
sprite,
sprite,
sprite 
)
{
    return cc.ControlSlider;
},

/**
 * @method ControlSlider
 * @constructor
 */
ControlSlider : function (
)
{
},

};

/**
 * @class ControlStepper
 */
cc.ControlStepper = {

/**
 * @method setMinusSprite
 * @param {cc.Sprite} arg0
 */
setMinusSprite : function (
sprite 
)
{
},

/**
 * @method getMinusLabel
 * @return {cc.Label}
 */
getMinusLabel : function (
)
{
    return cc.Label;
},

/**
 * @method setWraps
 * @param {bool} arg0
 */
setWraps : function (
bool 
)
{
},

/**
 * @method isContinuous
 * @return {bool}
 */
isContinuous : function (
)
{
    return false;
},

/**
 * @method getMinusSprite
 * @return {cc.Sprite}
 */
getMinusSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method updateLayoutUsingTouchLocation
 * @param {PointObject} arg0
 */
updateLayoutUsingTouchLocation : function (
point 
)
{
},

/**
 * @method setValueWithSendingEvent
 * @param {double} arg0
 * @param {bool} arg1
 */
setValueWithSendingEvent : function (
double, 
bool 
)
{
},

/**
 * @method getPlusLabel
 * @return {cc.Label}
 */
getPlusLabel : function (
)
{
    return cc.Label;
},

/**
 * @method stopAutorepeat
 */
stopAutorepeat : function (
)
{
},

/**
 * @method setMinimumValue
 * @param {double} arg0
 */
setMinimumValue : function (
double 
)
{
},

/**
 * @method getPlusSprite
 * @return {cc.Sprite}
 */
getPlusSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method setPlusSprite
 * @param {cc.Sprite} arg0
 */
setPlusSprite : function (
sprite 
)
{
},

/**
 * @method setMinusLabel
 * @param {cc.Label} arg0
 */
setMinusLabel : function (
label 
)
{
},

/**
 * @method setValue
 * @param {double} arg0
 */
setValue : function (
double 
)
{
},

/**
 * @method setStepValue
 * @param {double} arg0
 */
setStepValue : function (
double 
)
{
},

/**
 * @method setMaximumValue
 * @param {double} arg0
 */
setMaximumValue : function (
double 
)
{
},

/**
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method startAutorepeat
 */
startAutorepeat : function (
)
{
},

/**
 * @method initWithMinusSpriteAndPlusSprite
 * @param {cc.Sprite} arg0
 * @param {cc.Sprite} arg1
 * @return {bool}
 */
initWithMinusSpriteAndPlusSprite : function (
sprite, 
sprite 
)
{
    return false;
},

/**
 * @method getValue
 * @return {double}
 */
getValue : function (
)
{
    return 0;
},

/**
 * @method setPlusLabel
 * @param {cc.Label} arg0
 */
setPlusLabel : function (
label 
)
{
},

/**
 * @method create
 * @param {cc.Sprite} arg0
 * @param {cc.Sprite} arg1
 * @return {cc.ControlStepper}
 */
create : function (
sprite, 
sprite 
)
{
    return cc.ControlStepper;
},

/**
 * @method ControlStepper
 * @constructor
 */
ControlStepper : function (
)
{
},

};

/**
 * @class ControlSwitch
 */
cc.ControlSwitch = {

/**
 * @method setEnabled
 * @param {bool} arg0
 */
setEnabled : function (
bool 
)
{
},

/**
 * @method setOn
* @param {bool|bool} bool
* @param {bool} bool
*/
setOn : function(
bool,
bool 
)
{
},

/**
 * @method isOn
 * @return {bool}
 */
isOn : function (
)
{
    return false;
},

/**
 * @method initWithMaskSprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Label} label
* @param {cc.Label} label
* @return {bool|bool}
*/
initWithMaskSprite : function(
sprite,
sprite,
sprite,
sprite,
label,
label 
)
{
    return false;
},

/**
 * @method hasMoved
 * @return {bool}
 */
hasMoved : function (
)
{
    return false;
},

/**
 * @method locationFromTouch
 * @param {cc.Touch} arg0
 * @return {PointObject}
 */
locationFromTouch : function (
touch 
)
{
    return cc.Point;
},

/**
 * @method create
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Sprite|cc.Sprite} sprite
* @param {cc.Label} label
* @param {cc.Label} label
* @return {cc.ControlSwitch|cc.ControlSwitch}
*/
create : function(
sprite,
sprite,
sprite,
sprite,
label,
label 
)
{
    return cc.ControlSwitch;
},

/**
 * @method ControlSwitch
 * @constructor
 */
ControlSwitch : function (
)
{
},

};

/**
 * @class ScrollView
 */
cc.ScrollView = {

/**
 * @method isClippingToBounds
 * @return {bool}
 */
isClippingToBounds : function (
)
{
    return false;
},

/**
 * @method setContainer
 * @param {cc.Node} arg0
 */
setContainer : function (
node 
)
{
},

/**
 * @method setContentOffsetInDuration
 * @param {PointObject} arg0
 * @param {float} arg1
 */
setContentOffsetInDuration : function (
point, 
float 
)
{
},

/**
 * @method setZoomScaleInDuration
 * @param {float} arg0
 * @param {float} arg1
 */
setZoomScaleInDuration : function (
float, 
float 
)
{
},

/**
 * @method setBounceable
 * @param {bool} arg0
 */
setBounceable : function (
bool 
)
{
},

/**
 * @method getDirection
 * @return {cc.ScrollView::Direction}
 */
getDirection : function (
)
{
    return 0;
},

/**
 * @method getContainer
 * @return {cc.Node}
 */
getContainer : function (
)
{
    return cc.Node;
},

/**
 * @method updateTweenAction
 * @param {float} arg0
 * @param {String} arg1
 */
updateTweenAction : function (
float, 
str 
)
{
},

/**
 * @method getZoomScale
 * @return {float}
 */
getZoomScale : function (
)
{
    return 0;
},

/**
 * @method updateInset
 */
updateInset : function (
)
{
},

/**
 * @method initWithViewSize
 * @param {SizeObject} arg0
 * @param {cc.Node} arg1
 * @return {bool}
 */
initWithViewSize : function (
size, 
node 
)
{
    return false;
},

/**
 * @method pause
 * @param {cc.Ref} arg0
 */
pause : function (
ref 
)
{
},

/**
 * @method setDirection
 * @param {cc.ScrollView::Direction} arg0
 */
setDirection : function (
direction 
)
{
},

/**
 * @method init
 * @return {bool}
 */
init : function (
)
{
    return false;
},

/**
 * @method setContentOffset
 * @param {PointObject} arg0
 * @param {bool} arg1
 */
setContentOffset : function (
point, 
bool 
)
{
},

/**
 * @method isDragging
 * @return {bool}
 */
isDragging : function (
)
{
    return false;
},

/**
 * @method isTouchEnabled
 * @return {bool}
 */
isTouchEnabled : function (
)
{
    return false;
},

/**
 * @method isBounceable
 * @return {bool}
 */
isBounceable : function (
)
{
    return false;
},

/**
 * @method setTouchEnabled
 * @param {bool} arg0
 */
setTouchEnabled : function (
bool 
)
{
},

/**
 * @method getContentOffset
 * @return {PointObject}
 */
getContentOffset : function (
)
{
    return cc.Point;
},

/**
 * @method resume
 * @param {cc.Ref} arg0
 */
resume : function (
ref 
)
{
},

/**
 * @method setClippingToBounds
 * @param {bool} arg0
 */
setClippingToBounds : function (
bool 
)
{
},

/**
 * @method setViewSize
 * @param {SizeObject} arg0
 */
setViewSize : function (
size 
)
{
},

/**
 * @method getViewSize
 * @return {SizeObject}
 */
getViewSize : function (
)
{
    return cc.Size;
},

/**
 * @method maxContainerOffset
 * @return {PointObject}
 */
maxContainerOffset : function (
)
{
    return cc.Point;
},

/**
 * @method isTouchMoved
 * @return {bool}
 */
isTouchMoved : function (
)
{
    return false;
},

/**
 * @method isNodeVisible
 * @param {cc.Node} arg0
 * @return {bool}
 */
isNodeVisible : function (
node 
)
{
    return false;
},

/**
 * @method minContainerOffset
 * @return {PointObject}
 */
minContainerOffset : function (
)
{
    return cc.Point;
},

/**
 * @method setZoomScale
* @param {float|float} float
* @param {bool} bool
*/
setZoomScale : function(
float,
bool 
)
{
},

/**
 * @method create
* @param {SizeObject} size
* @param {cc.Node} node
* @return {cc.ScrollView|cc.ScrollView}
*/
create : function(
size,
node 
)
{
    return cc.ScrollView;
},

/**
 * @method ScrollView
 * @constructor
 */
ScrollView : function (
)
{
},

};

/**
 * @class TableViewCell
 */
cc.TableViewCell = {

/**
 * @method reset
 */
reset : function (
)
{
},

/**
 * @method getIdx
 * @return {long}
 */
getIdx : function (
)
{
    return 0;
},

/**
 * @method setIdx
 * @param {long} arg0
 */
setIdx : function (
long 
)
{
},

/**
 * @method create
 * @return {cc.TableViewCell}
 */
create : function (
)
{
    return cc.TableViewCell;
},

/**
 * @method TableViewCell
 * @constructor
 */
TableViewCell : function (
)
{
},

};

/**
 * @class TableView
 */
cc.TableView = {

/**
 * @method updateCellAtIndex
 * @param {long} arg0
 */
updateCellAtIndex : function (
long 
)
{
},

/**
 * @method setVerticalFillOrder
 * @param {cc.TableView::VerticalFillOrder} arg0
 */
setVerticalFillOrder : function (
verticalfillorder 
)
{
},

/**
 * @method scrollViewDidZoom
 * @param {cc.ScrollView} arg0
 */
scrollViewDidZoom : function (
scrollview 
)
{
},

/**
 * @method _updateContentSize
 */
_updateContentSize : function (
)
{
},

/**
 * @method getVerticalFillOrder
 * @return {cc.TableView::VerticalFillOrder}
 */
getVerticalFillOrder : function (
)
{
    return 0;
},

/**
 * @method removeCellAtIndex
 * @param {long} arg0
 */
removeCellAtIndex : function (
long 
)
{
},

/**
 * @method initWithViewSize
 * @param {SizeObject} arg0
 * @param {cc.Node} arg1
 * @return {bool}
 */
initWithViewSize : function (
size, 
node 
)
{
    return false;
},

/**
 * @method scrollViewDidScroll
 * @param {cc.ScrollView} arg0
 */
scrollViewDidScroll : function (
scrollview 
)
{
},

/**
 * @method reloadData
 */
reloadData : function (
)
{
},

/**
 * @method insertCellAtIndex
 * @param {long} arg0
 */
insertCellAtIndex : function (
long 
)
{
},

/**
 * @method cellAtIndex
 * @param {long} arg0
 * @return {cc.TableViewCell}
 */
cellAtIndex : function (
long 
)
{
    return cc.TableViewCell;
},

/**
 * @method dequeueCell
 * @return {cc.TableViewCell}
 */
dequeueCell : function (
)
{
    return cc.TableViewCell;
},

/**
 * @method TableView
 * @constructor
 */
TableView : function (
)
{
},

};

/**
 * @class EditBox
 */
cc.EditBox = {

/**
 * @method getText
 * @return {char}
 */
getText : function (
)
{
    return 0;
},

/**
 * @method setPlaceholderFontName
 * @param {char} arg0
 */
setPlaceholderFontName : function (
char 
)
{
},

/**
 * @method getPlaceHolder
 * @return {char}
 */
getPlaceHolder : function (
)
{
    return 0;
},

/**
 * @method setFontName
 * @param {char} arg0
 */
setFontName : function (
char 
)
{
},

/**
 * @method setPlaceholderFontSize
 * @param {int} arg0
 */
setPlaceholderFontSize : function (
int 
)
{
},

/**
 * @method setInputMode
 * @param {cc.EditBox::InputMode} arg0
 */
setInputMode : function (
inputmode 
)
{
},

/**
 * @method setPlaceholderFontColor
 * @param {Color3BObject} arg0
 */
setPlaceholderFontColor : function (
color3b 
)
{
},

/**
 * @method setFontColor
 * @param {Color3BObject} arg0
 */
setFontColor : function (
color3b 
)
{
},

/**
 * @method setPlaceholderFont
 * @param {char} arg0
 * @param {int} arg1
 */
setPlaceholderFont : function (
char, 
int 
)
{
},

/**
 * @method setFontSize
 * @param {int} arg0
 */
setFontSize : function (
int 
)
{
},

/**
 * @method initWithSizeAndBackgroundSprite
 * @param {SizeObject} arg0
 * @param {cc.Scale9Sprite} arg1
 * @return {bool}
 */
initWithSizeAndBackgroundSprite : function (
size, 
scale9sprite 
)
{
    return false;
},

/**
 * @method setPlaceHolder
 * @param {char} arg0
 */
setPlaceHolder : function (
char 
)
{
},

/**
 * @method setReturnType
 * @param {cc.EditBox::KeyboardReturnType} arg0
 */
setReturnType : function (
keyboardreturntype 
)
{
},

/**
 * @method setInputFlag
 * @param {cc.EditBox::InputFlag} arg0
 */
setInputFlag : function (
inputflag 
)
{
},

/**
 * @method getMaxLength
 * @return {int}
 */
getMaxLength : function (
)
{
    return 0;
},

/**
 * @method setText
 * @param {char} arg0
 */
setText : function (
char 
)
{
},

/**
 * @method setMaxLength
 * @param {int} arg0
 */
setMaxLength : function (
int 
)
{
},

/**
 * @method setFont
 * @param {char} arg0
 * @param {int} arg1
 */
setFont : function (
char, 
int 
)
{
},

/**
 * @method create
 * @param {SizeObject} arg0
 * @param {cc.Scale9Sprite} arg1
 * @param {cc.Scale9Sprite} arg2
 * @param {cc.Scale9Sprite} arg3
 * @return {cc.EditBox}
 */
create : function (
size, 
scale9sprite, 
scale9sprite, 
scale9sprite 
)
{
    return cc.EditBox;
},

/**
 * @method EditBox
 * @constructor
 */
EditBox : function (
)
{
},

};

/**
 * @class AssetsManager
 */
cc.AssetsManager = {

/**
 * @method setStoragePath
 * @param {char} arg0
 */
setStoragePath : function (
char 
)
{
},

/**
 * @method setPackageUrl
 * @param {char} arg0
 */
setPackageUrl : function (
char 
)
{
},

/**
 * @method checkUpdate
 * @return {bool}
 */
checkUpdate : function (
)
{
    return false;
},

/**
 * @method getStoragePath
 * @return {char}
 */
getStoragePath : function (
)
{
    return 0;
},

/**
 * @method update
 */
update : function (
)
{
},

/**
 * @method setConnectionTimeout
 * @param {unsigned int} arg0
 */
setConnectionTimeout : function (
int 
)
{
},

/**
 * @method setVersionFileUrl
 * @param {char} arg0
 */
setVersionFileUrl : function (
char 
)
{
},

/**
 * @method getPackageUrl
 * @return {char}
 */
getPackageUrl : function (
)
{
    return 0;
},

/**
 * @method getConnectionTimeout
 * @return {unsigned int}
 */
getConnectionTimeout : function (
)
{
    return 0;
},

/**
 * @method getVersion
 * @return {String}
 */
getVersion : function (
)
{
    return ;
},

/**
 * @method getVersionFileUrl
 * @return {char}
 */
getVersionFileUrl : function (
)
{
    return 0;
},

/**
 * @method deleteVersion
 */
deleteVersion : function (
)
{
},

/**
 * @method create
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @param {function} arg3
 * @param {function} arg4
 * @param {function} arg5
 * @return {cc.AssetsManager}
 */
create : function (
char, 
char, 
char, 
func, 
func, 
func 
)
{
    return cc.AssetsManager;
},

};
