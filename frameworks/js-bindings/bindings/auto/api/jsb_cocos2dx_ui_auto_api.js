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
 * @param {PointObject} arg0
 */
setSizePercent : function (
point 
)
{
},

/**
 * @method getCustomSize
 * @return {SizeObject}
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
 * @return {PointObject}
 */
getTouchEndPos : function (
)
{
    return cc.Point;
},

/**
 * @method setPositionPercent
 * @param {PointObject} arg0
 */
setPositionPercent : function (
point 
)
{
},

/**
 * @method getLayoutSize
 * @return {SizeObject}
 */
getLayoutSize : function (
)
{
    return cc.Size;
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
 * @method getActionTag
 * @return {int}
 */
getActionTag : function (
)
{
    return 0;
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
 * @method isTouchEnabled
 * @return {bool}
 */
isTouchEnabled : function (
)
{
    return false;
},

/**
 * @method getContentSize
 * @return {SizeObject}
 */
getContentSize : function (
)
{
    return cc.Size;
},

/**
 * @method getWorldPosition
 * @return {PointObject}
 */
getWorldPosition : function (
)
{
    return cc.Point;
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
 * @return {PointObject}
 */
getTouchMovePos : function (
)
{
    return cc.Point;
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
 * @return {PointObject}
 */
getSizePercent : function (
)
{
    return cc.Point;
},

/**
 * @method getTouchStartPos
 * @return {PointObject}
 */
getTouchStartPos : function (
)
{
    return cc.Point;
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
 * @param {PointObject} arg0
 * @return {bool}
 */
clippingParentAreaContainPoint : function (
point 
)
{
    return false;
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
 * @method updateSizeAndPosition
* @param {SizeObject} size
*/
updateSizeAndPosition : function(
size 
)
{
},

/**
 * @method getSize
 * @return {SizeObject}
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
 * @return {PointObject}
 */
getPositionPercent : function (
)
{
    return cc.Point;
},

/**
 * @method hitTest
 * @param {PointObject} arg0
 * @return {bool}
 */
hitTest : function (
point 
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
 * @param {PointObject} arg2
 */
checkChildInfo : function (
int, 
widget, 
point 
)
{
},

/**
 * @method setSize
 * @param {SizeObject} arg0
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
 * @param {PointObject} arg0
 */
setBackGroundColorVector : function (
point 
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
 * @method setBackGroundImageColor
 * @param {Color3BObject} arg0
 */
setBackGroundImageColor : function (
color3b 
)
{
},

/**
 * @method getBackGroundColorVector
 * @return {PointObject}
 */
getBackGroundColorVector : function (
)
{
    return cc.Point;
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
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
setBackGroundImage : function (
char, 
texturerestype 
)
{
},

/**
 * @method setBackGroundColor
* @param {Color3BObject|Color3BObject} color3b
* @param {Color3BObject} color3b
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
 * @return {RectObject}
 */
getBackGroundImageCapInsets : function (
)
{
    return cc.Rect;
},

/**
 * @method getBackGroundColor
 * @return {Color3BObject}
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
 * @return {Color3BObject}
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
 * @return {Color3BObject}
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
 * @method setBackGroundImageCapInsets
 * @param {RectObject} arg0
 */
setBackGroundImageCapInsets : function (
rect 
)
{
},

/**
 * @method getBackGroundImageTextureSize
 * @return {SizeObject}
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
 * @method getBackGroundStartColor
 * @return {Color3BObject}
 */
getBackGroundStartColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method hitTest
 * @param {PointObject} arg0
 * @return {bool}
 */
hitTest : function (
point 
)
{
    return false;
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
 * @return {RectObject}
 */
getCapInsetsDisabledRenderer : function (
)
{
    return cc.Rect;
},

/**
 * @method setTitleColor
 * @param {Color3BObject} arg0
 */
setTitleColor : function (
color3b 
)
{
},

/**
 * @method setCapInsetsDisabledRenderer
 * @param {RectObject} arg0
 */
setCapInsetsDisabledRenderer : function (
rect 
)
{
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
 * @method loadTextureDisabled
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureDisabled : function (
char, 
texturerestype 
)
{
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
 * @param {RectObject} arg0
 */
setCapInsetsNormalRenderer : function (
rect 
)
{
},

/**
 * @method loadTexturePressed
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTexturePressed : function (
char, 
texturerestype 
)
{
},

/**
 * @method setTitleFontName
 * @param {char} arg0
 */
setTitleFontName : function (
char 
)
{
},

/**
 * @method getCapInsetsNormalRenderer
 * @return {RectObject}
 */
getCapInsetsNormalRenderer : function (
)
{
    return cc.Rect;
},

/**
 * @method getCapInsetsPressedRenderer
 * @return {RectObject}
 */
getCapInsetsPressedRenderer : function (
)
{
    return cc.Rect;
},

/**
 * @method loadTextures
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @param {ccui.TextureResType} arg3
 */
loadTextures : function (
char, 
char, 
char, 
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
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureNormal : function (
char, 
texturerestype 
)
{
},

/**
 * @method setCapInsetsPressedRenderer
 * @param {RectObject} arg0
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
 * @return {char}
 */
getTitleFontName : function (
)
{
    return 0;
},

/**
 * @method getTitleColor
 * @return {Color3BObject}
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
 * @return {ccui.Button}
 */
create : function (
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
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureBackGroundSelected : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadTextureBackGroundDisabled
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureBackGroundDisabled : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadTextureFrontCross
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureFrontCross : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadTextures
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @param {char} arg3
 * @param {char} arg4
 * @param {ccui.TextureResType} arg5
 */
loadTextures : function (
char, 
char, 
char, 
char, 
char, 
texturerestype 
)
{
},

/**
 * @method loadTextureBackGround
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureBackGround : function (
char, 
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
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTextureFrontCrossDisabled : function (
char, 
texturerestype 
)
{
},

/**
 * @method create
 * @return {ccui.CheckBox}
 */
create : function (
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
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTexture : function (
char, 
texturerestype 
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
 * @method setTextureRect
 * @param {RectObject} arg0
 */
setTextureRect : function (
rect 
)
{
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
 * @method getCapInsets
 * @return {RectObject}
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
 * @return {ccui.ImageView}
 */
create : function (
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
 * @return {SizeObject}
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
 * @param {SizeObject} arg0
 */
setTextAreaSize : function (
size 
)
{
},

/**
 * @method create
 * @return {ccui.Text}
 */
create : function (
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
 * @return {ccui.TextAtlas}
 */
create : function (
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
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadTexture : function (
char, 
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
 * @param {RectObject} arg0
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
 * @return {RectObject}
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
 * @return {ccui.LoadingBar}
 */
create : function (
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
 * @param {PointObject} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
scrollToPercentBothDirection : function (
point, 
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
 * @param {SizeObject} arg0
 */
setInnerContainerSize : function (
size 
)
{
},

/**
 * @method getInnerContainerSize
 * @return {SizeObject}
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
 * @param {PointObject} arg0
 */
jumpToPercentBothDirection : function (
point 
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
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadSlidBallTextureDisabled : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadSlidBallTextureNormal
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadSlidBallTextureNormal : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadBarTexture
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadBarTexture : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadProgressBarTexture
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadProgressBarTexture : function (
char, 
texturerestype 
)
{
},

/**
 * @method loadSlidBallTextures
 * @param {char} arg0
 * @param {char} arg1
 * @param {char} arg2
 * @param {ccui.TextureResType} arg3
 */
loadSlidBallTextures : function (
char, 
char, 
char, 
texturerestype 
)
{
},

/**
 * @method setCapInsetProgressBarRebderer
 * @param {RectObject} arg0
 */
setCapInsetProgressBarRebderer : function (
rect 
)
{
},

/**
 * @method setCapInsetsBarRenderer
 * @param {RectObject} arg0
 */
setCapInsetsBarRenderer : function (
rect 
)
{
},

/**
 * @method getCapInsetsProgressBarRebderer
 * @return {RectObject}
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
 * @param {RectObject} arg0
 */
setCapInsets : function (
rect 
)
{
},

/**
 * @method loadSlidBallTexturePressed
 * @param {char} arg0
 * @param {ccui.TextureResType} arg1
 */
loadSlidBallTexturePressed : function (
char, 
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
 * @return {RectObject}
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
 * @param {SizeObject} arg0
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
 * @param {PointObject} arg0
 * @return {bool}
 */
hitTest : function (
point 
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
 * @param {SizeObject} arg0
 */
setTouchSize : function (
size 
)
{
},

/**
 * @method getTouchSize
 * @return {SizeObject}
 */
getTouchSize : function (
)
{
    return cc.Size;
},

/**
 * @method create
 * @return {ccui.TextField}
 */
create : function (
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
 * @param {char} arg0
 */
setFntFile : function (
char 
)
{
},

/**
 * @method getStringValue
 * @return {char}
 */
getStringValue : function (
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
 * @method create
 * @return {ccui.TextBMFont}
 */
create : function (
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
