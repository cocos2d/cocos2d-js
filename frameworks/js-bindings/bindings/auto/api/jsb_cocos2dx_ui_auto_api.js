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
 * @return {ccui.LayoutParameterType}
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
 * @param {ccui.LinearGravity} arg0
 */
setGravity : function (
lineargravity 
)
{
},

/**
 * @method getGravity
 * @return {ccui.LinearGravity}
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
 * @param {ccui.RelativeAlign} arg0
 */
setAlign : function (
relativealign 
)
{
},

/**
 * @method setRelativeToWidgetName
 * @param {char} arg0
 */
setRelativeToWidgetName : function (
char 
)
{
},

/**
 * @method getRelativeName
 * @return {char}
 */
getRelativeName : function (
)
{
    return 0;
},

/**
 * @method getRelativeToWidgetName
 * @return {char}
 */
getRelativeToWidgetName : function (
)
{
    return 0;
},

/**
 * @method setRelativeName
 * @param {char} arg0
 */
setRelativeName : function (
char 
)
{
},

/**
 * @method getAlign
 * @return {ccui.RelativeAlign}
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
 * @param {vector2_object} arg0
 */
setSizePercent : function (
array 
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
 * @method getLeftInParent
 * @return {float}
 */
getLeftInParent : function (
)
{
    return 0;
},

/**
 * @method getTouchEndPos
 * @return {vector2_object}
 */
getTouchEndPos : function (
)
{
    return new Array();
},

/**
 * @method setPositionPercent
 * @param {vector2_object} arg0
 */
setPositionPercent : function (
array 
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
 * @param {ccui.PositionType} arg0
 */
setPositionType : function (
positiontype 
)
{
},

/**
 * @method getName
 * @return {char}
 */
getName : function (
)
{
    return 0;
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
 * @method getBottomInParent
 * @return {float}
 */
getBottomInParent : function (
)
{
    return 0;
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
 * @param {ccui.LayoutParameterType} arg0
 * @return {ccui.LayoutParameter}
 */
getLayoutParameter : function (
layoutparametertype 
)
{
    return ccui.LayoutParameter;
},

/**
 * @method getPositionType
 * @return {ccui.PositionType}
 */
getPositionType : function (
)
{
    return 0;
},

/**
 * @method getWidgetType
 * @return {ccui.WidgetType}
 */
getWidgetType : function (
)
{
    return 0;
},

/**
 * @method getChildByName
 * @param {char} arg0
 * @return {ccui.Widget}
 */
getChildByName : function (
char 
)
{
    return ccui.Widget;
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
 * @method getVirtualRendererSize
 * @return {size_object}
 */
getVirtualRendererSize : function (
)
{
    return cc.Size;
},

/**
 * @method findNextFocusedWidget
 * @param {ccui.FocusDirection} arg0
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
 * @return {vector2_object}
 */
getWorldPosition : function (
)
{
    return new Array();
},

/**
 * @method didNotSelectSelf
 */
didNotSelectSelf : function (
)
{
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
 * @method setTouchEnabled
 * @param {bool} arg0
 */
setTouchEnabled : function (
bool 
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
 * @method getTouchMovePos
 * @return {vector2_object}
 */
getTouchMovePos : function (
)
{
    return new Array();
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
 * @method getVirtualRenderer
 * @return {cc.Node}
 */
getVirtualRenderer : function (
)
{
    return cc.Node;
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
 * @method setBrightStyle
 * @param {ccui.BrightStyle} arg0
 */
setBrightStyle : function (
brightstyle 
)
{
},

/**
 * @method setName
 * @param {char} arg0
 */
setName : function (
char 
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
 * @method getSizePercent
 * @return {vector2_object}
 */
getSizePercent : function (
)
{
    return new Array();
},

/**
 * @method getTouchStartPos
 * @return {vector2_object}
 */
getTouchStartPos : function (
)
{
    return new Array();
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
 * @method setActionTag
 * @param {int} arg0
 */
setActionTag : function (
int 
)
{
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
 * @method clippingParentAreaContainPoint
 * @param {vector2_object} arg0
 * @return {bool}
 */
clippingParentAreaContainPoint : function (
array 
)
{
    return false;
},

/**
 * @method getCurrentFocusedWidget
 * @param {bool} arg0
 * @return {ccui.Widget}
 */
getCurrentFocusedWidget : function (
bool 
)
{
    return ccui.Widget;
},

/**
 * @method getTopInParent
 * @return {float}
 */
getTopInParent : function (
)
{
    return 0;
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
 * @method getSize
 * @return {size_object}
 */
getSize : function (
)
{
    return cc.Size;
},

/**
 * @method getRightInParent
 * @return {float}
 */
getRightInParent : function (
)
{
    return 0;
},

/**
 * @method getSizeType
 * @return {ccui.SizeType}
 */
getSizeType : function (
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
 * @method getPositionPercent
 * @return {vector2_object}
 */
getPositionPercent : function (
)
{
    return new Array();
},

/**
 * @method hitTest
 * @param {vector2_object} arg0
 * @return {bool}
 */
hitTest : function (
array 
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
 * @method setSizeType
 * @param {ccui.SizeType} arg0
 */
setSizeType : function (
sizetype 
)
{
},

/**
 * @method checkChildInfo
 * @param {int} arg0
 * @param {ccui.Widget} arg1
 * @param {vector2_object} arg2
 */
checkChildInfo : function (
int, 
widget, 
array 
)
{
},

/**
 * @method setSize
 * @param {size_object} arg0
 */
setSize : function (
size 
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
 * @param {vector2_object} arg0
 */
setBackGroundColorVector : function (
array 
)
{
},

/**
 * @method setClippingType
 * @param {ccui.LayoutClippingType} arg0
 */
setClippingType : function (
layoutclippingtype 
)
{
},

/**
 * @method setBackGroundColorType
 * @param {ccui.LayoutBackGroundColorType} arg0
 */
setBackGroundColorType : function (
layoutbackgroundcolortype 
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
 * @return {vector2_object}
 */
getBackGroundColorVector : function (
)
{
    return new Array();
},

/**
 * @method getClippingType
 * @return {ccui.LayoutClippingType}
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
 * @param {ccui.TextureResType} arg1
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
 * @return {ccui.LayoutBackGroundColorType}
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
 * @return {ccui.LayoutType}
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
 * @param {ccui.LayoutType} arg0
 */
setLayoutType : function (
layouttype 
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg3
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg3
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
 * @param {ccui.TextureResType} arg1
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
* @param {ccui.TextureResType} texturerestype
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg5
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
 * @param {ccui.TextureResType} arg5
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg1
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
* @param {ccui.TextureResType} texturerestype
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg1
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
* @param {ccui.TextureResType} texturerestype
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
 * @method getStringLength
 * @return {long}
 */
getStringLength : function (
)
{
    return 0;
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
 * @method getFontSize
 * @return {int}
 */
getFontSize : function (
)
{
    return 0;
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
 * @method getStringValue
 * @return {String}
 */
getStringValue : function (
)
{
    return ;
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
 * @method getTextHorizontalAlignment
 * @return {cc.TextHAlignment}
 */
getTextHorizontalAlignment : function (
)
{
    return 0;
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
 * @method setFontSize
 * @param {int} arg0
 */
setFontSize : function (
int 
)
{
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
 * @method setTextHorizontalAlignment
 * @param {cc.TextHAlignment} arg0
 */
setTextHorizontalAlignment : function (
texthalignment 
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
 * @method getStringValue
 * @return {String}
 */
getStringValue : function (
)
{
    return ;
},

/**
 * @method adaptRenderers
 */
adaptRenderers : function (
)
{
},

/**
 * @method setStringValue
 * @param {String} arg0
 */
setStringValue : function (
str 
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
 * @param {int} arg0
 */
setPercent : function (
int 
)
{
},

/**
 * @method loadTexture
 * @param {String} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTexture : function (
str, 
texturerestype 
)
{
},

/**
 * @method setDirection
 * @param {ccui.LoadingBarType} arg0
 */
setDirection : function (
loadingbartype 
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
 * @return {int}
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
 * @return {int}
 */
getPercent : function (
)
{
    return 0;
},

/**
 * @method create
* @param {String} str
* @param {int} int
* @return {ccui.LoadingBar|ccui.LoadingBar}
*/
create : function(
str,
int 
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
 * @param {vector2_object} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
scrollToPercentBothDirection : function (
array, 
float, 
bool 
)
{
},

/**
 * @method getDirection
 * @return {ccui.SCROLLVIEW_DIR}
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
 * @param {ccui.SCROLLVIEW_DIR} arg0
 */
setDirection : function (
scrollview_dir 
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
 * @param {vector2_object} arg0
 */
jumpToPercentBothDirection : function (
array 
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
 * @param {ccui.ListViewGravity} arg0
 */
setGravity : function (
listviewgravity 
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
 * @method requestRefreshView
 */
requestRefreshView : function (
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg1
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
 * @param {ccui.TextureResType} arg3
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
 * @param {ccui.TextureResType} arg1
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
 * @param {vector2_object} arg0
 * @return {bool}
 */
hitTest : function (
array 
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
 * @method getStringValue
 * @return {String}
 */
getStringValue : function (
)
{
    return ;
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
 * @param {char} arg1
 * @return {ccui.Widget}
 */
seekWidgetByName : function (
widget, 
char 
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
 * @param {char} arg3
 * @param {char} arg4
 * @param {float} arg5
 * @return {bool}
 */
init : function (
int, 
color3b, 
char, 
char, 
char, 
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
 * @param {char} arg3
 * @param {char} arg4
 * @param {float} arg5
 * @return {ccui.RichElementText}
 */
create : function (
int, 
color3b, 
char, 
char, 
char, 
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
 * @param {char} arg3
 * @return {bool}
 */
init : function (
int, 
color3b, 
char, 
char 
)
{
    return false;
},

/**
 * @method create
 * @param {int} arg0
 * @param {color3b_object} arg1
 * @param {unsigned char} arg2
 * @param {char} arg3
 * @return {ccui.RichElementImage}
 */
create : function (
int, 
color3b, 
char, 
char 
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
 * @param {vector2_object} arg0
 */
setAnchorPoint : function (
array 
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
