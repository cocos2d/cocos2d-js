/**
 * @module cocos2dx_ui
 */
var ccui = ccui || {};

/**
 * @class LayoutParameter
 */
ccui.LayoutParameter = {

/**
 * @method clone
 * @return {ccui.LayoutParameter}
 */
clone : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method getLayoutType
 * @return {ccui.LayoutParameter::Type}
 */
getLayoutType : function (
)
{
    return 0;
},

/**
 * @method createCloneInstance
 * @return {ccui.LayoutParameter}
 */
createCloneInstance : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method copyProperties
 * @param {ccui.LayoutParameter} arg0
 */
copyProperties : function (
layoutparameter 
)
{
},

/**
 * @method create
 * @return {ccui.LayoutParameter}
 */
create : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method LayoutParameter
 * @constructor
 */
LayoutParameter : function (
)
{
},

};

/**
 * @class LinearLayoutParameter
 */
ccui.LinearLayoutParameter = {

/**
 * @method setGravity
 * @param {ccui.LinearLayoutParameter::LinearGravity} arg0
 */
setGravity : function (
lineargravity 
)
{
},

/**
 * @method getGravity
 * @return {ccui.LinearLayoutParameter::LinearGravity}
 */
getGravity : function (
)
{
    return 0;
},

/**
 * @method create
 * @return {ccui.LinearLayoutParameter}
 */
create : function (
)
{
    return ccui.LinearLayoutParameter;
},

/**
 * @method LinearLayoutParameter
 * @constructor
 */
LinearLayoutParameter : function (
)
{
},

};

/**
 * @class RelativeLayoutParameter
 */
ccui.RelativeLayoutParameter = {

/**
 * @method setAlign
 * @param {ccui.RelativeLayoutParameter::RelativeAlign} arg0
 */
setAlign : function (
relativealign 
)
{
},

/**
 * @method setRelativeToWidgetName
 * @param {String} arg0
 */
setRelativeToWidgetName : function (
str 
)
{
},

/**
 * @method getRelativeName
 * @return {String}
 */
getRelativeName : function (
)
{
    return ;
},

/**
 * @method getRelativeToWidgetName
 * @return {String}
 */
getRelativeToWidgetName : function (
)
{
    return ;
},

/**
 * @method setRelativeName
 * @param {String} arg0
 */
setRelativeName : function (
str 
)
{
},

/**
 * @method getAlign
 * @return {ccui.RelativeLayoutParameter::RelativeAlign}
 */
getAlign : function (
)
{
    return 0;
},

/**
 * @method create
 * @return {ccui.RelativeLayoutParameter}
 */
create : function (
)
{
    return ccui.RelativeLayoutParameter;
},

/**
 * @method RelativeLayoutParameter
 * @constructor
 */
RelativeLayoutParameter : function (
)
{
},

};

/**
 * @class Widget
 */
ccui.Widget = {

/**
 * @method setSizePercent
 * @param {vec2_object} arg0
 */
setSizePercent : function (
vec2 
)
{
},

/**
 * @method getCustomSize
 * @return {size_object}
 */
getCustomSize : function (
)
{
    return cc.Size;
},

/**
 * @method setFlippedY
 * @param {bool} arg0
 */
setFlippedY : function (
bool 
)
{
},

/**
 * @method setFlippedX
 * @param {bool} arg0
 */
setFlippedX : function (
bool 
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
 * @method getVirtualRenderer
 * @return {cc.Node}
 */
getVirtualRenderer : function (
)
{
    return cc.Node;
},

/**
 * @method getSizePercent
 * @return {vec2_object}
 */
getSizePercent : function (
)
{
    return cc.Vec2;
},

/**
 * @method setPositionPercent
 * @param {vec2_object} arg0
 */
setPositionPercent : function (
vec2 
)
{
},

/**
 * @method getLayoutSize
 * @return {size_object}
 */
getLayoutSize : function (
)
{
    return cc.Size;
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
 * @method setPositionType
 * @param {ccui.Widget::PositionType} arg0
 */
setPositionType : function (
positiontype 
)
{
},

/**
 * @method isIgnoreContentAdaptWithSize
 * @return {bool}
 */
isIgnoreContentAdaptWithSize : function (
)
{
    return false;
},

/**
 * @method getVirtualRendererSize
 * @return {size_object}
 */
getVirtualRendererSize : function (
)
{
    return cc.Size;
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
 * @method getLayoutParameter
 * @return {ccui.LayoutParameter}
 */
getLayoutParameter : function (
)
{
    return ccui.LayoutParameter;
},

/**
 * @method findNextFocusedWidget
 * @param {ccui.Widget::FocusDirection} arg0
 * @param {ccui.Widget} arg1
 * @return {ccui.Widget}
 */
findNextFocusedWidget : function (
focusdirection, 
widget 
)
{
    return ccui.Widget;
},

/**
 * @method getPositionType
 * @return {ccui.Widget::PositionType}
 */
getPositionType : function (
)
{
    return 0;
},

/**
 * @method getTopBoundary
 * @return {float}
 */
getTopBoundary : function (
)
{
    return 0;
},

/**
 * @method ignoreContentAdaptWithSize
 * @param {bool} arg0
 */
ignoreContentAdaptWithSize : function (
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
 * @method isFocused
 * @return {bool}
 */
isFocused : function (
)
{
    return false;
},

/**
 * @method getTouchBeganPosition
 * @return {vec2_object}
 */
getTouchBeganPosition : function (
)
{
    return cc.Vec2;
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
 * @method getActionTag
 * @return {int}
 */
getActionTag : function (
)
{
    return 0;
},

/**
 * @method getWorldPosition
 * @return {vec2_object}
 */
getWorldPosition : function (
)
{
    return cc.Vec2;
},

/**
 * @method setFocused
 * @param {bool} arg0
 */
setFocused : function (
bool 
)
{
},

/**
 * @method setActionTag
 * @param {int} arg0
 */
setActionTag : function (
int 
)
{
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
 * @method getLeftBoundary
 * @return {float}
 */
getLeftBoundary : function (
)
{
    return 0;
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
 * @method getRightBoundary
 * @return {float}
 */
getRightBoundary : function (
)
{
    return 0;
},

/**
 * @method setBrightStyle
 * @param {ccui.Widget::BrightStyle} arg0
 */
setBrightStyle : function (
brightstyle 
)
{
},

/**
 * @method setLayoutParameter
 * @param {ccui.LayoutParameter} arg0
 */
setLayoutParameter : function (
layoutparameter 
)
{
},

/**
 * @method clone
 * @return {ccui.Widget}
 */
clone : function (
)
{
    return ccui.Widget;
},

/**
 * @method setFocusEnabled
 * @param {bool} arg0
 */
setFocusEnabled : function (
bool 
)
{
},

/**
 * @method getBottomBoundary
 * @return {float}
 */
getBottomBoundary : function (
)
{
    return 0;
},

/**
 * @method isBright
 * @return {bool}
 */
isBright : function (
)
{
    return false;
},

/**
 * @method getCurrentFocusedWidget
 * @return {ccui.Widget}
 */
getCurrentFocusedWidget : function (
)
{
    return ccui.Widget;
},

/**
 * @method requestFocus
 */
requestFocus : function (
)
{
},

/**
 * @method updateSizeAndPosition
* @param {size_object} size
*/
updateSizeAndPosition : function(
size 
)
{
},

/**
 * @method onFocusChange
 * @param {ccui.Widget} arg0
 * @param {ccui.Widget} arg1
 */
onFocusChange : function (
widget, 
widget 
)
{
},

/**
 * @method getTouchMovePosition
 * @return {vec2_object}
 */
getTouchMovePosition : function (
)
{
    return cc.Vec2;
},

/**
 * @method getSizeType
 * @return {ccui.Widget::SizeType}
 */
getSizeType : function (
)
{
    return 0;
},

/**
 * @method interceptTouchEvent
 * @param {ccui.Widget::TouchEventType} arg0
 * @param {ccui.Widget} arg1
 * @param {cc.Touch} arg2
 */
interceptTouchEvent : function (
toucheventtype, 
widget, 
touch 
)
{
},

/**
 * @method getTouchEndPosition
 * @return {vec2_object}
 */
getTouchEndPosition : function (
)
{
    return cc.Vec2;
},

/**
 * @method getPositionPercent
 * @return {vec2_object}
 */
getPositionPercent : function (
)
{
    return cc.Vec2;
},

/**
 * @method hitTest
 * @param {vec2_object} arg0
 * @return {bool}
 */
hitTest : function (
vec2 
)
{
    return false;
},

/**
 * @method isFlippedX
 * @return {bool}
 */
isFlippedX : function (
)
{
    return false;
},

/**
 * @method isFlippedY
 * @return {bool}
 */
isFlippedY : function (
)
{
    return false;
},

/**
 * @method isClippingParentContainsPoint
 * @param {vec2_object} arg0
 * @return {bool}
 */
isClippingParentContainsPoint : function (
vec2 
)
{
    return false;
},

/**
 * @method setSizeType
 * @param {ccui.Widget::SizeType} arg0
 */
setSizeType : function (
sizetype 
)
{
},

/**
 * @method dispatchFocusEvent
 * @param {ccui.Widget} arg0
 * @param {ccui.Widget} arg1
 */
dispatchFocusEvent : function (
widget, 
widget 
)
{
},

/**
 * @method setBright
 * @param {bool} arg0
 */
setBright : function (
bool 
)
{
},

/**
 * @method isFocusEnabled
 * @return {bool}
 */
isFocusEnabled : function (
)
{
    return false;
},

/**
 * @method enableDpadNavigation
 * @param {bool} arg0
 */
enableDpadNavigation : function (
bool 
)
{
},

/**
 * @method create
 * @return {ccui.Widget}
 */
create : function (
)
{
    return ccui.Widget;
},

/**
 * @method Widget
 * @constructor
 */
Widget : function (
)
{
},

};

/**
 * @class Layout
 */
ccui.Layout = {

/**
 * @method setBackGroundColorVector
 * @param {vec2_object} arg0
 */
setBackGroundColorVector : function (
vec2 
)
{
},

/**
 * @method setClippingType
 * @param {ccui.Layout::ClippingType} arg0
 */
setClippingType : function (
clippingtype 
)
{
},

/**
 * @method setBackGroundColorType
 * @param {ccui.Layout::BackGroundColorType} arg0
 */
setBackGroundColorType : function (
backgroundcolortype 
)
{
},

/**
 * @method setLoopFocus
 * @param {bool} arg0
 */
setLoopFocus : function (
bool 
)
{
},

/**
 * @method setBackGroundImageColor
 * @param {color3b_object} arg0
 */
setBackGroundImageColor : function (
color3b 
)
{
},

/**
 * @method getBackGroundColorVector
 * @return {vec2_object}
 */
getBackGroundColorVector : function (
)
{
    return cc.Vec2;
},

/**
 * @method getClippingType
 * @return {ccui.Layout::ClippingType}
 */
getClippingType : function (
)
{
    return 0;
},

/**
 * @method isLoopFocus
 * @return {bool}
 */
isLoopFocus : function (
)
{
    return false;
},

/**
 * @method removeBackGroundImage
 */
removeBackGroundImage : function (
)
{
},

/**
 * @method getBackGroundColorOpacity
 * @return {unsigned char}
 */
getBackGroundColorOpacity : function (
)
{
    return 0;
},

/**
 * @method isClippingEnabled
 * @return {bool}
 */
isClippingEnabled : function (
)
{
    return false;
},

/**
 * @method setBackGroundImageOpacity
 * @param {unsigned char} arg0
 */
setBackGroundImageOpacity : function (
char 
)
{
},

/**
 * @method setBackGroundImage
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
setBackGroundImage : function (
str, 
texturerestype 
)
{
},

/**
 * @method setBackGroundColor
* @param {color3b_object|color3b_object} color3b
* @param {color3b_object} color3b
*/
setBackGroundColor : function(
color3b,
color3b 
)
{
},

/**
 * @method requestDoLayout
 */
requestDoLayout : function (
)
{
},

/**
 * @method getBackGroundImageCapInsets
 * @return {rect_object}
 */
getBackGroundImageCapInsets : function (
)
{
    return cc.Rect;
},

/**
 * @method getBackGroundColor
 * @return {color3b_object}
 */
getBackGroundColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method setClippingEnabled
 * @param {bool} arg0
 */
setClippingEnabled : function (
bool 
)
{
},

/**
 * @method getBackGroundImageColor
 * @return {color3b_object}
 */
getBackGroundImageColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method isBackGroundImageScale9Enabled
 * @return {bool}
 */
isBackGroundImageScale9Enabled : function (
)
{
    return false;
},

/**
 * @method getBackGroundColorType
 * @return {ccui.Layout::BackGroundColorType}
 */
getBackGroundColorType : function (
)
{
    return 0;
},

/**
 * @method getBackGroundEndColor
 * @return {color3b_object}
 */
getBackGroundEndColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method setBackGroundColorOpacity
 * @param {unsigned char} arg0
 */
setBackGroundColorOpacity : function (
char 
)
{
},

/**
 * @method getBackGroundImageOpacity
 * @return {unsigned char}
 */
getBackGroundImageOpacity : function (
)
{
    return 0;
},

/**
 * @method isPassFocusToChild
 * @return {bool}
 */
isPassFocusToChild : function (
)
{
    return false;
},

/**
 * @method setBackGroundImageCapInsets
 * @param {rect_object} arg0
 */
setBackGroundImageCapInsets : function (
rect 
)
{
},

/**
 * @method getBackGroundImageTextureSize
 * @return {size_object}
 */
getBackGroundImageTextureSize : function (
)
{
    return cc.Size;
},

/**
 * @method getLayoutType
 * @return {ccui.Layout::Type}
 */
getLayoutType : function (
)
{
    return 0;
},

/**
 * @method setPassFocusToChild
 * @param {bool} arg0
 */
setPassFocusToChild : function (
bool 
)
{
},

/**
 * @method getBackGroundStartColor
 * @return {color3b_object}
 */
getBackGroundStartColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method setBackGroundImageScale9Enabled
 * @param {bool} arg0
 */
setBackGroundImageScale9Enabled : function (
bool 
)
{
},

/**
 * @method setLayoutType
 * @param {ccui.Layout::Type} arg0
 */
setLayoutType : function (
type 
)
{
},

/**
 * @method create
 * @return {ccui.Layout}
 */
create : function (
)
{
    return ccui.Layout;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method Layout
 * @constructor
 */
Layout : function (
)
{
},

};

/**
 * @class Button
 */
ccui.Button = {

/**
 * @method getTitleText
 * @return {String}
 */
getTitleText : function (
)
{
    return ;
},

/**
 * @method setTitleFontSize
 * @param {float} arg0
 */
setTitleFontSize : function (
float 
)
{
},

/**
 * @method setScale9Enabled
 * @param {bool} arg0
 */
setScale9Enabled : function (
bool 
)
{
},

/**
 * @method getCapInsetsDisabledRenderer
 * @return {rect_object}
 */
getCapInsetsDisabledRenderer : function (
)
{
    return cc.Rect;
},

/**
 * @method setTitleColor
 * @param {color3b_object} arg0
 */
setTitleColor : function (
color3b 
)
{
},

/**
 * @method setCapInsetsDisabledRenderer
 * @param {rect_object} arg0
 */
setCapInsetsDisabledRenderer : function (
rect 
)
{
},

/**
 * @method setCapInsets
 * @param {rect_object} arg0
 */
setCapInsets : function (
rect 
)
{
},

/**
 * @method loadTextureDisabled
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTextureDisabled : function (
str, 
texturerestype 
)
{
},

/**
 * @method init
 * @param {String} arg0
 * @param {String} arg1
 * @param {String} arg2
 * @param {ccui.Widget::TextureResType} arg3
 * @return {bool}
 */
init : function (
str, 
str, 
str, 
texturerestype 
)
{
    return false;
},

/**
 * @method setTitleText
 * @param {String} arg0
 */
setTitleText : function (
str 
)
{
},

/**
 * @method setCapInsetsNormalRenderer
 * @param {rect_object} arg0
 */
setCapInsetsNormalRenderer : function (
rect 
)
{
},

/**
 * @method loadTexturePressed
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTexturePressed : function (
str, 
texturerestype 
)
{
},

/**
 * @method setTitleFontName
 * @param {String} arg0
 */
setTitleFontName : function (
str 
)
{
},

/**
 * @method getCapInsetsNormalRenderer
 * @return {rect_object}
 */
getCapInsetsNormalRenderer : function (
)
{
    return cc.Rect;
},

/**
 * @method getCapInsetsPressedRenderer
 * @return {rect_object}
 */
getCapInsetsPressedRenderer : function (
)
{
    return cc.Rect;
},

/**
 * @method loadTextures
 * @param {String} arg0
 * @param {String} arg1
 * @param {String} arg2
 * @param {ccui.Widget::TextureResType} arg3
 */
loadTextures : function (
str, 
str, 
str, 
texturerestype 
)
{
},

/**
 * @method isScale9Enabled
 * @return {bool}
 */
isScale9Enabled : function (
)
{
    return false;
},

/**
 * @method loadTextureNormal
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTextureNormal : function (
str, 
texturerestype 
)
{
},

/**
 * @method setCapInsetsPressedRenderer
 * @param {rect_object} arg0
 */
setCapInsetsPressedRenderer : function (
rect 
)
{
},

/**
 * @method getTitleFontSize
 * @return {float}
 */
getTitleFontSize : function (
)
{
    return 0;
},

/**
 * @method getTitleFontName
 * @return {String}
 */
getTitleFontName : function (
)
{
    return ;
},

/**
 * @method getTitleColor
 * @return {color3b_object}
 */
getTitleColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method setPressedActionEnabled
 * @param {bool} arg0
 */
setPressedActionEnabled : function (
bool 
)
{
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @param {String} str
* @param {ccui.Widget::TextureResType} texturerestype
* @return {ccui.Button|ccui.Button}
*/
create : function(
str,
str,
str,
texturerestype 
)
{
    return ccui.Button;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method Button
 * @constructor
 */
Button : function (
)
{
},

};

/**
 * @class CheckBox
 */
ccui.CheckBox = {

/**
 * @method getSelectedState
 * @return {bool}
 */
getSelectedState : function (
)
{
    return false;
},

/**
 * @method loadTextureBackGroundSelected
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTextureBackGroundSelected : function (
str, 
texturerestype 
)
{
},

/**
 * @method loadTextureBackGroundDisabled
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTextureBackGroundDisabled : function (
str, 
texturerestype 
)
{
},

/**
 * @method loadTextureFrontCross
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTextureFrontCross : function (
str, 
texturerestype 
)
{
},

/**
 * @method init
 * @param {String} arg0
 * @param {String} arg1
 * @param {String} arg2
 * @param {String} arg3
 * @param {String} arg4
 * @param {ccui.Widget::TextureResType} arg5
 * @return {bool}
 */
init : function (
str, 
str, 
str, 
str, 
str, 
texturerestype 
)
{
    return false;
},

/**
 * @method loadTextures
 * @param {String} arg0
 * @param {String} arg1
 * @param {String} arg2
 * @param {String} arg3
 * @param {String} arg4
 * @param {ccui.Widget::TextureResType} arg5
 */
loadTextures : function (
str, 
str, 
str, 
str, 
str, 
texturerestype 
)
{
},

/**
 * @method loadTextureBackGround
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTextureBackGround : function (
str, 
texturerestype 
)
{
},

/**
 * @method setSelectedState
 * @param {bool} arg0
 */
setSelectedState : function (
bool 
)
{
},

/**
 * @method loadTextureFrontCrossDisabled
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTextureFrontCrossDisabled : function (
str, 
texturerestype 
)
{
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @param {String} str
* @param {String} str
* @param {String} str
* @param {ccui.Widget::TextureResType} texturerestype
* @return {ccui.CheckBox|ccui.CheckBox}
*/
create : function(
str,
str,
str,
str,
str,
texturerestype 
)
{
    return ccui.CheckBox;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method CheckBox
 * @constructor
 */
CheckBox : function (
)
{
},

};

/**
 * @class ImageView
 */
ccui.ImageView = {

/**
 * @method loadTexture
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTexture : function (
str, 
texturerestype 
)
{
},

/**
 * @method init
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 * @return {bool}
 */
init : function (
str, 
texturerestype 
)
{
    return false;
},

/**
 * @method setScale9Enabled
 * @param {bool} arg0
 */
setScale9Enabled : function (
bool 
)
{
},

/**
 * @method setTextureRect
 * @param {rect_object} arg0
 */
setTextureRect : function (
rect 
)
{
},

/**
 * @method setCapInsets
 * @param {rect_object} arg0
 */
setCapInsets : function (
rect 
)
{
},

/**
 * @method getCapInsets
 * @return {rect_object}
 */
getCapInsets : function (
)
{
    return cc.Rect;
},

/**
 * @method isScale9Enabled
 * @return {bool}
 */
isScale9Enabled : function (
)
{
    return false;
},

/**
 * @method create
* @param {String} str
* @param {ccui.Widget::TextureResType} texturerestype
* @return {ccui.ImageView|ccui.ImageView}
*/
create : function(
str,
texturerestype 
)
{
    return ccui.ImageView;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method ImageView
 * @constructor
 */
ImageView : function (
)
{
},

};

/**
 * @class Text
 */
ccui.Text = {

/**
 * @method enableShadow
 */
enableShadow : function (
)
{
},

/**
 * @method getFontSize
 * @return {int}
 */
getFontSize : function (
)
{
    return 0;
},

/**
 * @method getString
 * @return {String}
 */
getString : function (
)
{
    return ;
},

/**
 * @method disableEffect
 */
disableEffect : function (
)
{
},

/**
 * @method getTextAreaSize
 * @return {size_object}
 */
getTextAreaSize : function (
)
{
    return cc.Size;
},

/**
 * @method setTextVerticalAlignment
 * @param {cc.TextVAlignment} arg0
 */
setTextVerticalAlignment : function (
textvalignment 
)
{
},

/**
 * @method setFontName
 * @param {String} arg0
 */
setFontName : function (
str 
)
{
},

/**
 * @method setTouchScaleChangeEnabled
 * @param {bool} arg0
 */
setTouchScaleChangeEnabled : function (
bool 
)
{
},

/**
 * @method setString
 * @param {String} arg0
 */
setString : function (
str 
)
{
},

/**
 * @method init
 * @param {String} arg0
 * @param {String} arg1
 * @param {int} arg2
 * @return {bool}
 */
init : function (
str, 
str, 
int 
)
{
    return false;
},

/**
 * @method isTouchScaleChangeEnabled
 * @return {bool}
 */
isTouchScaleChangeEnabled : function (
)
{
    return false;
},

/**
 * @method getFontName
 * @return {String}
 */
getFontName : function (
)
{
    return ;
},

/**
 * @method setTextAreaSize
 * @param {size_object} arg0
 */
setTextAreaSize : function (
size 
)
{
},

/**
 * @method getStringLength
 * @return {long}
 */
getStringLength : function (
)
{
    return 0;
},

/**
 * @method enableOutline
 * @param {color4b_object} arg0
 * @param {int} arg1
 */
enableOutline : function (
color4b, 
int 
)
{
},

/**
 * @method getType
 * @return {ccui.Text::Type}
 */
getType : function (
)
{
    return 0;
},

/**
 * @method getTextHorizontalAlignment
 * @return {cc.TextHAlignment}
 */
getTextHorizontalAlignment : function (
)
{
    return 0;
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
 * @method enableGlow
 * @param {color4b_object} arg0
 */
enableGlow : function (
color4b 
)
{
},

/**
 * @method getTextVerticalAlignment
 * @return {cc.TextVAlignment}
 */
getTextVerticalAlignment : function (
)
{
    return 0;
},

/**
 * @method setTextHorizontalAlignment
 * @param {cc.TextHAlignment} arg0
 */
setTextHorizontalAlignment : function (
texthalignment 
)
{
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @param {int} int
* @return {ccui.Text|ccui.Text}
*/
create : function(
str,
str,
int 
)
{
    return ccui.Text;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method Text
 * @constructor
 */
Text : function (
)
{
},

};

/**
 * @class TextAtlas
 */
ccui.TextAtlas = {

/**
 * @method getStringLength
 * @return {long}
 */
getStringLength : function (
)
{
    return 0;
},

/**
 * @method getString
 * @return {String}
 */
getString : function (
)
{
    return ;
},

/**
 * @method setString
 * @param {String} arg0
 */
setString : function (
str 
)
{
},

/**
 * @method setProperty
 * @param {String} arg0
 * @param {String} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @param {String} arg4
 */
setProperty : function (
str, 
str, 
int, 
int, 
str 
)
{
},

/**
 * @method adaptRenderers
 */
adaptRenderers : function (
)
{
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @param {int} int
* @param {int} int
* @param {String} str
* @return {ccui.TextAtlas|ccui.TextAtlas}
*/
create : function(
str,
str,
int,
int,
str 
)
{
    return ccui.TextAtlas;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method TextAtlas
 * @constructor
 */
TextAtlas : function (
)
{
},

};

/**
 * @class LoadingBar
 */
ccui.LoadingBar = {

/**
 * @method setPercent
 * @param {float} arg0
 */
setPercent : function (
float 
)
{
},

/**
 * @method loadTexture
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadTexture : function (
str, 
texturerestype 
)
{
},

/**
 * @method setDirection
 * @param {ccui.LoadingBar::Direction} arg0
 */
setDirection : function (
direction 
)
{
},

/**
 * @method setScale9Enabled
 * @param {bool} arg0
 */
setScale9Enabled : function (
bool 
)
{
},

/**
 * @method setCapInsets
 * @param {rect_object} arg0
 */
setCapInsets : function (
rect 
)
{
},

/**
 * @method getDirection
 * @return {ccui.LoadingBar::Direction}
 */
getDirection : function (
)
{
    return 0;
},

/**
 * @method getCapInsets
 * @return {rect_object}
 */
getCapInsets : function (
)
{
    return cc.Rect;
},

/**
 * @method isScale9Enabled
 * @return {bool}
 */
isScale9Enabled : function (
)
{
    return false;
},

/**
 * @method getPercent
 * @return {float}
 */
getPercent : function (
)
{
    return 0;
},

/**
 * @method create
* @param {String} str
* @param {float} float
* @return {ccui.LoadingBar|ccui.LoadingBar}
*/
create : function(
str,
float 
)
{
    return ccui.LoadingBar;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method LoadingBar
 * @constructor
 */
LoadingBar : function (
)
{
},

};

/**
 * @class ScrollView
 */
ccui.ScrollView = {

/**
 * @method scrollToTop
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToTop : function (
float, 
bool 
)
{
},

/**
 * @method scrollToPercentHorizontal
 * @param {float} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
scrollToPercentHorizontal : function (
float, 
float, 
bool 
)
{
},

/**
 * @method isInertiaScrollEnabled
 * @return {bool}
 */
isInertiaScrollEnabled : function (
)
{
    return false;
},

/**
 * @method scrollToPercentBothDirection
 * @param {vec2_object} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
scrollToPercentBothDirection : function (
vec2, 
float, 
bool 
)
{
},

/**
 * @method getDirection
 * @return {ccui.ScrollView::Direction}
 */
getDirection : function (
)
{
    return 0;
},

/**
 * @method scrollToBottomLeft
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToBottomLeft : function (
float, 
bool 
)
{
},

/**
 * @method getInnerContainer
 * @return {ccui.Layout}
 */
getInnerContainer : function (
)
{
    return ccui.Layout;
},

/**
 * @method jumpToBottom
 */
jumpToBottom : function (
)
{
},

/**
 * @method setDirection
 * @param {ccui.ScrollView::Direction} arg0
 */
setDirection : function (
direction 
)
{
},

/**
 * @method scrollToTopLeft
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToTopLeft : function (
float, 
bool 
)
{
},

/**
 * @method jumpToTopRight
 */
jumpToTopRight : function (
)
{
},

/**
 * @method jumpToBottomLeft
 */
jumpToBottomLeft : function (
)
{
},

/**
 * @method setInnerContainerSize
 * @param {size_object} arg0
 */
setInnerContainerSize : function (
size 
)
{
},

/**
 * @method getInnerContainerSize
 * @return {size_object}
 */
getInnerContainerSize : function (
)
{
    return cc.Size;
},

/**
 * @method isBounceEnabled
 * @return {bool}
 */
isBounceEnabled : function (
)
{
    return false;
},

/**
 * @method jumpToPercentVertical
 * @param {float} arg0
 */
jumpToPercentVertical : function (
float 
)
{
},

/**
 * @method setInertiaScrollEnabled
 * @param {bool} arg0
 */
setInertiaScrollEnabled : function (
bool 
)
{
},

/**
 * @method jumpToTopLeft
 */
jumpToTopLeft : function (
)
{
},

/**
 * @method jumpToPercentHorizontal
 * @param {float} arg0
 */
jumpToPercentHorizontal : function (
float 
)
{
},

/**
 * @method jumpToBottomRight
 */
jumpToBottomRight : function (
)
{
},

/**
 * @method setBounceEnabled
 * @param {bool} arg0
 */
setBounceEnabled : function (
bool 
)
{
},

/**
 * @method jumpToTop
 */
jumpToTop : function (
)
{
},

/**
 * @method scrollToLeft
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToLeft : function (
float, 
bool 
)
{
},

/**
 * @method jumpToPercentBothDirection
 * @param {vec2_object} arg0
 */
jumpToPercentBothDirection : function (
vec2 
)
{
},

/**
 * @method scrollToPercentVertical
 * @param {float} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
scrollToPercentVertical : function (
float, 
float, 
bool 
)
{
},

/**
 * @method scrollToBottom
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToBottom : function (
float, 
bool 
)
{
},

/**
 * @method scrollToBottomRight
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToBottomRight : function (
float, 
bool 
)
{
},

/**
 * @method jumpToLeft
 */
jumpToLeft : function (
)
{
},

/**
 * @method scrollToRight
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToRight : function (
float, 
bool 
)
{
},

/**
 * @method jumpToRight
 */
jumpToRight : function (
)
{
},

/**
 * @method scrollToTopRight
 * @param {float} arg0
 * @param {bool} arg1
 */
scrollToTopRight : function (
float, 
bool 
)
{
},

/**
 * @method create
 * @return {ccui.ScrollView}
 */
create : function (
)
{
    return ccui.ScrollView;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
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
 * @class ListView
 */
ccui.ListView = {

/**
 * @method getIndex
 * @param {ccui.Widget} arg0
 * @return {long}
 */
getIndex : function (
widget 
)
{
    return 0;
},

/**
 * @method removeAllItems
 */
removeAllItems : function (
)
{
},

/**
 * @method setGravity
 * @param {ccui.ListView::Gravity} arg0
 */
setGravity : function (
gravity 
)
{
},

/**
 * @method pushBackCustomItem
 * @param {ccui.Widget} arg0
 */
pushBackCustomItem : function (
widget 
)
{
},

/**
 * @method getItems
 * @return {Array}
 */
getItems : function (
)
{
    return new Array();
},

/**
 * @method removeItem
 * @param {long} arg0
 */
removeItem : function (
long 
)
{
},

/**
 * @method getCurSelectedIndex
 * @return {long}
 */
getCurSelectedIndex : function (
)
{
    return 0;
},

/**
 * @method insertDefaultItem
 * @param {long} arg0
 */
insertDefaultItem : function (
long 
)
{
},

/**
 * @method requestRefreshView
 */
requestRefreshView : function (
)
{
},

/**
 * @method setItemsMargin
 * @param {float} arg0
 */
setItemsMargin : function (
float 
)
{
},

/**
 * @method refreshView
 */
refreshView : function (
)
{
},

/**
 * @method removeLastItem
 */
removeLastItem : function (
)
{
},

/**
 * @method getItemsMargin
 * @return {float}
 */
getItemsMargin : function (
)
{
    return 0;
},

/**
 * @method getItem
 * @param {long} arg0
 * @return {ccui.Widget}
 */
getItem : function (
long 
)
{
    return ccui.Widget;
},

/**
 * @method setItemModel
 * @param {ccui.Widget} arg0
 */
setItemModel : function (
widget 
)
{
},

/**
 * @method doLayout
 */
doLayout : function (
)
{
},

/**
 * @method pushBackDefaultItem
 */
pushBackDefaultItem : function (
)
{
},

/**
 * @method insertCustomItem
 * @param {ccui.Widget} arg0
 * @param {long} arg1
 */
insertCustomItem : function (
widget, 
long 
)
{
},

/**
 * @method create
 * @return {ccui.ListView}
 */
create : function (
)
{
    return ccui.ListView;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method ListView
 * @constructor
 */
ListView : function (
)
{
},

};

/**
 * @class Slider
 */
ccui.Slider = {

/**
 * @method setPercent
 * @param {int} arg0
 */
setPercent : function (
int 
)
{
},

/**
 * @method loadSlidBallTextureDisabled
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadSlidBallTextureDisabled : function (
str, 
texturerestype 
)
{
},

/**
 * @method loadSlidBallTextureNormal
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadSlidBallTextureNormal : function (
str, 
texturerestype 
)
{
},

/**
 * @method loadBarTexture
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadBarTexture : function (
str, 
texturerestype 
)
{
},

/**
 * @method loadProgressBarTexture
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadProgressBarTexture : function (
str, 
texturerestype 
)
{
},

/**
 * @method loadSlidBallTextures
 * @param {String} arg0
 * @param {String} arg1
 * @param {String} arg2
 * @param {ccui.Widget::TextureResType} arg3
 */
loadSlidBallTextures : function (
str, 
str, 
str, 
texturerestype 
)
{
},

/**
 * @method setCapInsetProgressBarRebderer
 * @param {rect_object} arg0
 */
setCapInsetProgressBarRebderer : function (
rect 
)
{
},

/**
 * @method setCapInsetsBarRenderer
 * @param {rect_object} arg0
 */
setCapInsetsBarRenderer : function (
rect 
)
{
},

/**
 * @method getCapInsetsProgressBarRebderer
 * @return {rect_object}
 */
getCapInsetsProgressBarRebderer : function (
)
{
    return cc.Rect;
},

/**
 * @method setScale9Enabled
 * @param {bool} arg0
 */
setScale9Enabled : function (
bool 
)
{
},

/**
 * @method setCapInsets
 * @param {rect_object} arg0
 */
setCapInsets : function (
rect 
)
{
},

/**
 * @method loadSlidBallTexturePressed
 * @param {String} arg0
 * @param {ccui.Widget::TextureResType} arg1
 */
loadSlidBallTexturePressed : function (
str, 
texturerestype 
)
{
},

/**
 * @method isScale9Enabled
 * @return {bool}
 */
isScale9Enabled : function (
)
{
    return false;
},

/**
 * @method getCapInsetsBarRenderer
 * @return {rect_object}
 */
getCapInsetsBarRenderer : function (
)
{
    return cc.Rect;
},

/**
 * @method getPercent
 * @return {int}
 */
getPercent : function (
)
{
    return 0;
},

/**
 * @method create
 * @return {ccui.Slider}
 */
create : function (
)
{
    return ccui.Slider;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method Slider
 * @constructor
 */
Slider : function (
)
{
},

};

/**
 * @class TextField
 */
ccui.TextField = {

/**
 * @method setAttachWithIME
 * @param {bool} arg0
 */
setAttachWithIME : function (
bool 
)
{
},

/**
 * @method getFontSize
 * @return {int}
 */
getFontSize : function (
)
{
    return 0;
},

/**
 * @method getStringValue
 * @return {String}
 */
getStringValue : function (
)
{
    return ;
},

/**
 * @method getDeleteBackward
 * @return {bool}
 */
getDeleteBackward : function (
)
{
    return false;
},

/**
 * @method getPlaceHolder
 * @return {String}
 */
getPlaceHolder : function (
)
{
    return ;
},

/**
 * @method getAttachWithIME
 * @return {bool}
 */
getAttachWithIME : function (
)
{
    return false;
},

/**
 * @method setFontName
 * @param {String} arg0
 */
setFontName : function (
str 
)
{
},

/**
 * @method getInsertText
 * @return {bool}
 */
getInsertText : function (
)
{
    return false;
},

/**
 * @method setInsertText
 * @param {bool} arg0
 */
setInsertText : function (
bool 
)
{
},

/**
 * @method getDetachWithIME
 * @return {bool}
 */
getDetachWithIME : function (
)
{
    return false;
},

/**
 * @method setTextVerticalAlignment
 * @param {cc.TextVAlignment} arg0
 */
setTextVerticalAlignment : function (
textvalignment 
)
{
},

/**
 * @method didNotSelectSelf
 */
didNotSelectSelf : function (
)
{
},

/**
 * @method getFontName
 * @return {String}
 */
getFontName : function (
)
{
    return ;
},

/**
 * @method setTextAreaSize
 * @param {size_object} arg0
 */
setTextAreaSize : function (
size 
)
{
},

/**
 * @method attachWithIME
 */
attachWithIME : function (
)
{
},

/**
 * @method getStringLength
 * @return {int}
 */
getStringLength : function (
)
{
    return 0;
},

/**
 * @method setPasswordEnabled
 * @param {bool} arg0
 */
setPasswordEnabled : function (
bool 
)
{
},

/**
 * @method getPasswordStyleText
 * @return {char}
 */
getPasswordStyleText : function (
)
{
    return 0;
},

/**
 * @method setMaxLengthEnabled
 * @param {bool} arg0
 */
setMaxLengthEnabled : function (
bool 
)
{
},

/**
 * @method setPasswordStyleText
 * @param {char} arg0
 */
setPasswordStyleText : function (
char 
)
{
},

/**
 * @method setDeleteBackward
 * @param {bool} arg0
 */
setDeleteBackward : function (
bool 
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
 * @method setPlaceHolder
 * @param {String} arg0
 */
setPlaceHolder : function (
str 
)
{
},

/**
 * @method isPasswordEnabled
 * @return {bool}
 */
isPasswordEnabled : function (
)
{
    return false;
},

/**
 * @method setTextHorizontalAlignment
 * @param {cc.TextHAlignment} arg0
 */
setTextHorizontalAlignment : function (
texthalignment 
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
 * @method isMaxLengthEnabled
 * @return {bool}
 */
isMaxLengthEnabled : function (
)
{
    return false;
},

/**
 * @method setDetachWithIME
 * @param {bool} arg0
 */
setDetachWithIME : function (
bool 
)
{
},

/**
 * @method setText
 * @param {String} arg0
 */
setText : function (
str 
)
{
},

/**
 * @method setTouchAreaEnabled
 * @param {bool} arg0
 */
setTouchAreaEnabled : function (
bool 
)
{
},

/**
 * @method hitTest
 * @param {vec2_object} arg0
 * @return {bool}
 */
hitTest : function (
vec2 
)
{
    return false;
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
 * @method setTouchSize
 * @param {size_object} arg0
 */
setTouchSize : function (
size 
)
{
},

/**
 * @method getTouchSize
 * @return {size_object}
 */
getTouchSize : function (
)
{
    return cc.Size;
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @param {int} int
* @return {ccui.TextField|ccui.TextField}
*/
create : function(
str,
str,
int 
)
{
    return ccui.TextField;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method TextField
 * @constructor
 */
TextField : function (
)
{
},

};

/**
 * @class TextBMFont
 */
ccui.TextBMFont = {

/**
 * @method setFntFile
 * @param {String} arg0
 */
setFntFile : function (
str 
)
{
},

/**
 * @method getStringLength
 * @return {long}
 */
getStringLength : function (
)
{
    return 0;
},

/**
 * @method setString
 * @param {String} arg0
 */
setString : function (
str 
)
{
},

/**
 * @method getString
 * @return {String}
 */
getString : function (
)
{
    return ;
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @return {ccui.TextBMFont|ccui.TextBMFont}
*/
create : function(
str,
str 
)
{
    return ccui.TextBMFont;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method TextBMFont
 * @constructor
 */
TextBMFont : function (
)
{
},

};

/**
 * @class PageView
 */
ccui.PageView = {

/**
 * @method getCurPageIndex
 * @return {long}
 */
getCurPageIndex : function (
)
{
    return 0;
},

/**
 * @method addWidgetToPage
 * @param {ccui.Widget} arg0
 * @param {long} arg1
 * @param {bool} arg2
 */
addWidgetToPage : function (
widget, 
long, 
bool 
)
{
},

/**
 * @method getPage
 * @param {long} arg0
 * @return {ccui.Layout}
 */
getPage : function (
long 
)
{
    return ccui.Layout;
},

/**
 * @method removePage
 * @param {ccui.Layout} arg0
 */
removePage : function (
layout 
)
{
},

/**
 * @method insertPage
 * @param {ccui.Layout} arg0
 * @param {int} arg1
 */
insertPage : function (
layout, 
int 
)
{
},

/**
 * @method scrollToPage
 * @param {long} arg0
 */
scrollToPage : function (
long 
)
{
},

/**
 * @method removePageAtIndex
 * @param {long} arg0
 */
removePageAtIndex : function (
long 
)
{
},

/**
 * @method getPages
 * @return {Array}
 */
getPages : function (
)
{
    return new Array();
},

/**
 * @method removeAllPages
 */
removeAllPages : function (
)
{
},

/**
 * @method addPage
 * @param {ccui.Layout} arg0
 */
addPage : function (
layout 
)
{
},

/**
 * @method create
 * @return {ccui.PageView}
 */
create : function (
)
{
    return ccui.PageView;
},

/**
 * @method createInstance
 * @return {cc.Ref}
 */
createInstance : function (
)
{
    return cc.Ref;
},

/**
 * @method PageView
 * @constructor
 */
PageView : function (
)
{
},

};

/**
 * @class Helper
 */
ccui.Helper = {

/**
 * @method seekWidgetByTag
 * @param {ccui.Widget} arg0
 * @param {int} arg1
 * @return {ccui.Widget}
 */
seekWidgetByTag : function (
widget, 
int 
)
{
    return ccui.Widget;
},

/**
 * @method seekActionWidgetByActionTag
 * @param {ccui.Widget} arg0
 * @param {int} arg1
 * @return {ccui.Widget}
 */
seekActionWidgetByActionTag : function (
widget, 
int 
)
{
    return ccui.Widget;
},

/**
 * @method seekWidgetByName
 * @param {ccui.Widget} arg0
 * @param {String} arg1
 * @return {ccui.Widget}
 */
seekWidgetByName : function (
widget, 
str 
)
{
    return ccui.Widget;
},

};

/**
 * @class RichElement
 */
ccui.RichElement = {

/**
 * @method init
 * @param {int} arg0
 * @param {color3b_object} arg1
 * @param {unsigned char} arg2
 * @return {bool}
 */
init : function (
int, 
color3b, 
char 
)
{
    return false;
},

/**
 * @method RichElement
 * @constructor
 */
RichElement : function (
)
{
},

};

/**
 * @class RichElementText
 */
ccui.RichElementText = {

/**
 * @method init
 * @param {int} arg0
 * @param {color3b_object} arg1
 * @param {unsigned char} arg2
 * @param {String} arg3
 * @param {String} arg4
 * @param {float} arg5
 * @return {bool}
 */
init : function (
int, 
color3b, 
char, 
str, 
str, 
float 
)
{
    return false;
},

/**
 * @method create
 * @param {int} arg0
 * @param {color3b_object} arg1
 * @param {unsigned char} arg2
 * @param {String} arg3
 * @param {String} arg4
 * @param {float} arg5
 * @return {ccui.RichElementText}
 */
create : function (
int, 
color3b, 
char, 
str, 
str, 
float 
)
{
    return ccui.RichElementText;
},

/**
 * @method RichElementText
 * @constructor
 */
RichElementText : function (
)
{
},

};

/**
 * @class RichElementImage
 */
ccui.RichElementImage = {

/**
 * @method init
 * @param {int} arg0
 * @param {color3b_object} arg1
 * @param {unsigned char} arg2
 * @param {String} arg3
 * @return {bool}
 */
init : function (
int, 
color3b, 
char, 
str 
)
{
    return false;
},

/**
 * @method create
 * @param {int} arg0
 * @param {color3b_object} arg1
 * @param {unsigned char} arg2
 * @param {String} arg3
 * @return {ccui.RichElementImage}
 */
create : function (
int, 
color3b, 
char, 
str 
)
{
    return ccui.RichElementImage;
},

/**
 * @method RichElementImage
 * @constructor
 */
RichElementImage : function (
)
{
},

};

/**
 * @class RichElementCustomNode
 */
ccui.RichElementCustomNode = {

/**
 * @method init
 * @param {int} arg0
 * @param {color3b_object} arg1
 * @param {unsigned char} arg2
 * @param {cc.Node} arg3
 * @return {bool}
 */
init : function (
int, 
color3b, 
char, 
node 
)
{
    return false;
},

/**
 * @method create
 * @param {int} arg0
 * @param {color3b_object} arg1
 * @param {unsigned char} arg2
 * @param {cc.Node} arg3
 * @return {ccui.RichElementCustomNode}
 */
create : function (
int, 
color3b, 
char, 
node 
)
{
    return ccui.RichElementCustomNode;
},

/**
 * @method RichElementCustomNode
 * @constructor
 */
RichElementCustomNode : function (
)
{
},

};

/**
 * @class RichText
 */
ccui.RichText = {

/**
 * @method insertElement
 * @param {ccui.RichElement} arg0
 * @param {int} arg1
 */
insertElement : function (
richelement, 
int 
)
{
},

/**
 * @method setAnchorPoint
 * @param {vec2_object} arg0
 */
setAnchorPoint : function (
vec2 
)
{
},

/**
 * @method pushBackElement
 * @param {ccui.RichElement} arg0
 */
pushBackElement : function (
richelement 
)
{
},

/**
 * @method ignoreContentAdaptWithSize
 * @param {bool} arg0
 */
ignoreContentAdaptWithSize : function (
bool 
)
{
},

/**
 * @method setVerticalSpace
 * @param {float} arg0
 */
setVerticalSpace : function (
float 
)
{
},

/**
 * @method formatText
 */
formatText : function (
)
{
},

/**
 * @method removeElement
* @param {ccui.RichElement|int} richelement
*/
removeElement : function(
int 
)
{
},

/**
 * @method create
 * @return {ccui.RichText}
 */
create : function (
)
{
    return ccui.RichText;
},

/**
 * @method RichText
 * @constructor
 */
RichText : function (
)
{
},

};

/**
 * @class HBox
 */
ccui.HBox = {

/**
 * @method initWithSize
 * @param {size_object} arg0
 * @return {bool}
 */
initWithSize : function (
size 
)
{
    return false;
},

/**
 * @method create
* @param {size_object} size
* @return {ccui.HBox|ccui.HBox}
*/
create : function(
size 
)
{
    return ccui.HBox;
},

/**
 * @method HBox
 * @constructor
 */
HBox : function (
)
{
},

};

/**
 * @class VBox
 */
ccui.VBox = {

/**
 * @method initWithSize
 * @param {size_object} arg0
 * @return {bool}
 */
initWithSize : function (
size 
)
{
    return false;
},

/**
 * @method create
* @param {size_object} size
* @return {ccui.VBox|ccui.VBox}
*/
create : function(
size 
)
{
    return ccui.VBox;
},

/**
 * @method VBox
 * @constructor
 */
VBox : function (
)
{
},

};

/**
 * @class RelativeBox
 */
ccui.RelativeBox = {

/**
 * @method initWithSize
 * @param {size_object} arg0
 * @return {bool}
 */
initWithSize : function (
size 
)
{
    return false;
},

/**
 * @method create
* @param {size_object} size
* @return {ccui.RelativeBox|ccui.RelativeBox}
*/
create : function(
size 
)
{
    return ccui.RelativeBox;
},

/**
 * @method RelativeBox
 * @constructor
 */
RelativeBox : function (
)
{
},

};
