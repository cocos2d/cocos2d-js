/**
 * @module cocos2dx_gui
 */
var ccui = ccui || {};

/**
 * @class LayoutParameter
 */
ccui.LayoutParameter = {

/**
 * @method getLayoutType
 * @return A value converted from C/C++ "cocos2d::gui::LayoutParameterType"
 */
getLayoutType : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::LayoutParameter*"
 */
create : function () {},

/**
 * @method LayoutParameter
 * @constructor
 */
LayoutParameter : function () {},

};

/**
 * @class LinearLayoutParameter
 */
ccui.LinearLayoutParameter = {

/**
 * @method setGravity
 * @param {cocos2d::gui::LinearGravity}
 */
setGravity : function () {},

/**
 * @method getGravity
 * @return A value converted from C/C++ "cocos2d::gui::LinearGravity"
 */
getGravity : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::LinearLayoutParameter*"
 */
create : function () {},

/**
 * @method LinearLayoutParameter
 * @constructor
 */
LinearLayoutParameter : function () {},

};

/**
 * @class RelativeLayoutParameter
 */
ccui.RelativeLayoutParameter = {

/**
 * @method setAlign
 * @param {cocos2d::gui::RelativeAlign}
 */
setAlign : function () {},

/**
 * @method setRelativeToWidgetName
 * @param {const char*}
 */
setRelativeToWidgetName : function () {},

/**
 * @method getRelativeName
 * @return A value converted from C/C++ "const char*"
 */
getRelativeName : function () {},

/**
 * @method getRelativeToWidgetName
 * @return A value converted from C/C++ "const char*"
 */
getRelativeToWidgetName : function () {},

/**
 * @method setRelativeName
 * @param {const char*}
 */
setRelativeName : function () {},

/**
 * @method getAlign
 * @return A value converted from C/C++ "cocos2d::gui::RelativeAlign"
 */
getAlign : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::RelativeLayoutParameter*"
 */
create : function () {},

/**
 * @method RelativeLayoutParameter
 * @constructor
 */
RelativeLayoutParameter : function () {},

};

/**
 * @class Widget
 */
ccui.Widget = {

/**
 * @method getVirtualRenderer
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getVirtualRenderer : function () {},

/**
 * @method setSizePercent
 * @param {const cocos2d::Point&}
 */
setSizePercent : function () {},

/**
 * @method setActionTag
 * @param {int}
 */
setActionTag : function () {},

/**
 * @method getNodeByTag
 * @return A value converted from C/C++ "cocos2d::Node*"
 * @param {int}
 */
getNodeByTag : function () {},

/**
 * @method isFlipY
 * @return A value converted from C/C++ "bool"
 */
isFlipY : function () {},

/**
 * @method getTouchEndPos
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getTouchEndPos : function () {},

/**
 * @method setPositionPercent
 * @param {const cocos2d::Point&}
 */
setPositionPercent : function () {},

/**
 * @method getNodes
 * @return A value converted from C/C++ "cocos2d::Vector<cocos2d::Node *>&"
 */
getNodes : function () {},

/**
 * @method setPositionType
 * @param {cocos2d::gui::PositionType}
 */
setPositionType : function () {},

/**
 * @method getName
 * @return A value converted from C/C++ "const char*"
 */
getName : function () {},

/**
 * @method isIgnoreContentAdaptWithSize
 * @return A value converted from C/C++ "bool"
 */
isIgnoreContentAdaptWithSize : function () {},

/**
 * @method updateSizeAndPosition
 */
updateSizeAndPosition : function () {},

/**
 * @method getBottomInParent
 * @return A value converted from C/C++ "float"
 */
getBottomInParent : function () {},

/**
 * @method getActionTag
 * @return A value converted from C/C++ "int"
 */
getActionTag : function () {},

/**
 * @method getLayoutParameter
 * @return A value converted from C/C++ "cocos2d::gui::LayoutParameter*"
 * @param {cocos2d::gui::LayoutParameterType}
 */
getLayoutParameter : function () {},

/**
 * @method getPositionType
 * @return A value converted from C/C++ "cocos2d::gui::PositionType"
 */
getPositionType : function () {},

/**
 * @method setName
 * @param {const char*}
 */
setName : function () {},

/**
 * @method getChildByName
 * @return A value converted from C/C++ "cocos2d::gui::Widget*"
 * @param {const char*}
 */
getChildByName : function () {},

/**
 * @method isEnabled
 * @return A value converted from C/C++ "bool"
 */
isEnabled : function () {},

/**
 * @method isFlipX
 * @return A value converted from C/C++ "bool"
 */
isFlipX : function () {},

/**
 * @method removeNodeByTag
 * @param {int}
 */
removeNodeByTag : function () {},

/**
 * @method isTouchEnabled
 * @return A value converted from C/C++ "bool"
 */
isTouchEnabled : function () {},

/**
 * @method getContentSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getContentSize : function () {},

/**
 * @method getTouchStartPos
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getTouchStartPos : function () {},

/**
 * @method didNotSelectSelf
 */
didNotSelectSelf : function () {},

/**
 * @method setFocused
 * @param {bool}
 */
setFocused : function () {},

/**
 * @method setTouchEnabled
 * @param {bool}
 */
setTouchEnabled : function () {},

/**
 * @method clone
 * @return A value converted from C/C++ "cocos2d::gui::Widget*"
 */
clone : function () {},

/**
 * @method getTouchMovePos
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getTouchMovePos : function () {},

/**
 * @method setEnabled
 * @param {bool}
 */
setEnabled : function () {},

/**
 * @method setBrightStyle
 * @param {cocos2d::gui::BrightStyle}
 */
setBrightStyle : function () {},

/**
 * @method setLayoutParameter
 * @param {cocos2d::gui::LayoutParameter*}
 */
setLayoutParameter : function () {},

/**
 * @method setFlipY
 * @param {bool}
 */
setFlipY : function () {},

/**
 * @method setFlipX
 * @param {bool}
 */
setFlipX : function () {},

/**
 * @method getLeftInParent
 * @return A value converted from C/C++ "float"
 */
getLeftInParent : function () {},

/**
 * @method ignoreContentAdaptWithSize
 * @param {bool}
 */
ignoreContentAdaptWithSize : function () {},

/**
 * @method isBright
 * @return A value converted from C/C++ "bool"
 */
isBright : function () {},

/**
 * @method clippingParentAreaContainPoint
 * @return A value converted from C/C++ "bool"
 * @param {const cocos2d::Point&}
 */
clippingParentAreaContainPoint : function () {},

/**
 * @method getSizePercent
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getSizePercent : function () {},

/**
 * @method getTopInParent
 * @return A value converted from C/C++ "float"
 */
getTopInParent : function () {},

/**
 * @method getWidgetType
 * @return A value converted from C/C++ "cocos2d::gui::WidgetType"
 */
getWidgetType : function () {},

/**
 * @method getSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getSize : function () {},

/**
 * @method getRightInParent
 * @return A value converted from C/C++ "float"
 */
getRightInParent : function () {},

/**
 * @method getSizeType
 * @return A value converted from C/C++ "cocos2d::gui::SizeType"
 */
getSizeType : function () {},

/**
 * @method removeNode
 * @param {cocos2d::Node*}
 */
removeNode : function () {},

/**
 * @method removeAllNodes
 */
removeAllNodes : function () {},

/**
 * @method getWorldPosition
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getWorldPosition : function () {},

/**
 * @method getPositionPercent
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getPositionPercent : function () {},

/**
 * @method hitTest
 * @return A value converted from C/C++ "bool"
 * @param {const cocos2d::Point&}
 */
hitTest : function () {},

/**
 * @method isFocused
 * @return A value converted from C/C++ "bool"
 */
isFocused : function () {},

/**
 * @method setSizeType
 * @param {cocos2d::gui::SizeType}
 */
setSizeType : function () {},

/**
 * @method checkChildInfo
 * @param {int}
 * @param {cocos2d::gui::Widget*}
 * @param {const cocos2d::Point&}
 */
checkChildInfo : function () {},

/**
 * @method setSize
 * @param {const cocos2d::Size&}
 */
setSize : function () {},

/**
 * @method setBright
 * @param {bool}
 */
setBright : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::Widget*"
 */
create : function () {},

/**
 * @method Widget
 * @constructor
 */
Widget : function () {},

};

/**
 * @class Layout
 */
ccui.Layout = {

/**
 * @method setBackGroundColorVector
 * @param {const cocos2d::Point&}
 */
setBackGroundColorVector : function () {},

/**
 * @method hitTest
 * @return A value converted from C/C++ "bool"
 * @param {const cocos2d::Point&}
 */
hitTest : function () {},

/**
 * @method getBackGroundImageTextureSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getBackGroundImageTextureSize : function () {},

/**
 * @method getLayoutType
 * @return A value converted from C/C++ "cocos2d::gui::LayoutType"
 */
getLayoutType : function () {},

/**
 * @method setClippingType
 * @param {cocos2d::gui::LayoutClippingType}
 */
setClippingType : function () {},

/**
 * @method setBackGroundColorType
 * @param {cocos2d::gui::LayoutBackGroundColorType}
 */
setBackGroundColorType : function () {},

/**
 * @method setBackGroundImage
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
setBackGroundImage : function () {},

/**
 * @method requestDoLayout
 */
requestDoLayout : function () {},

/**
 * @method isClippingEnabled
 * @return A value converted from C/C++ "bool"
 */
isClippingEnabled : function () {},

/**
 * @method setBackGroundColorOpacity
 * @param {int}
 */
setBackGroundColorOpacity : function () {},

/**
 * @method setBackGroundImageCapInsets
 * @param {const cocos2d::Rect&}
 */
setBackGroundImageCapInsets : function () {},

/**
 * @method removeBackGroundImage
 */
removeBackGroundImage : function () {},

/**
 * @method setBackGroundImageScale9Enabled
 * @param {bool}
 */
setBackGroundImageScale9Enabled : function () {},

/**
 * @method setClippingEnabled
 * @param {bool}
 */
setClippingEnabled : function () {},

/**
 * @method setLayoutType
 * @param {cocos2d::gui::LayoutType}
 */
setLayoutType : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::Layout*"
 */
create : function () {},

/**
 * @method Layout
 * @constructor
 */
Layout : function () {},

};

/**
 * @class Button
 */
ccui.Button = {

/**
 * @method getTitleText
 * @return A value converted from C/C++ "const std::string&"
 */
getTitleText : function () {},

/**
 * @method loadTextureNormal
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextureNormal : function () {},

/**
 * @method setCapInsetsNormalRenderer
 * @param {const cocos2d::Rect&}
 */
setCapInsetsNormalRenderer : function () {},

/**
 * @method setCapInsetsPressedRenderer
 * @param {const cocos2d::Rect&}
 */
setCapInsetsPressedRenderer : function () {},

/**
 * @method loadTexturePressed
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTexturePressed : function () {},

/**
 * @method setTitleFontSize
 * @param {float}
 */
setTitleFontSize : function () {},

/**
 * @method setCapInsetsDisabledRenderer
 * @param {const cocos2d::Rect&}
 */
setCapInsetsDisabledRenderer : function () {},

/**
 * @method setTitleFontName
 * @param {const char*}
 */
setTitleFontName : function () {},

/**
 * @method getTitleColor
 * @return A value converted from C/C++ "const cocos2d::Color3B&"
 */
getTitleColor : function () {},

/**
 * @method loadTextureDisabled
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextureDisabled : function () {},

/**
 * @method getTitleFontName
 * @return A value converted from C/C++ "const char*"
 */
getTitleFontName : function () {},

/**
 * @method setPressedActionEnabled
 * @param {bool}
 */
setPressedActionEnabled : function () {},

/**
 * @method setCapInsets
 * @param {const cocos2d::Rect&}
 */
setCapInsets : function () {},

/**
 * @method setScale9Enabled
 * @param {bool}
 */
setScale9Enabled : function () {},

/**
 * @method loadTextures
 * @param {const char*}
 * @param {const char*}
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextures : function () {},

/**
 * @method getTitleFontSize
 * @return A value converted from C/C++ "float"
 */
getTitleFontSize : function () {},

/**
 * @method setTitleText
 * @param {const std::string&}
 */
setTitleText : function () {},

/**
 * @method setTitleColor
 * @param {const cocos2d::Color3B&}
 */
setTitleColor : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::Button*"
 */
create : function () {},

/**
 * @method Button
 * @constructor
 */
Button : function () {},

};

/**
 * @class CheckBox
 */
ccui.CheckBox = {

/**
 * @method getSelectedState
 * @return A value converted from C/C++ "bool"
 */
getSelectedState : function () {},

/**
 * @method loadTextureBackGroundSelected
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextureBackGroundSelected : function () {},

/**
 * @method loadTextureBackGroundDisabled
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextureBackGroundDisabled : function () {},

/**
 * @method loadTextureFrontCross
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextureFrontCross : function () {},

/**
 * @method loadTextures
 * @param {const char*}
 * @param {const char*}
 * @param {const char*}
 * @param {const char*}
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextures : function () {},

/**
 * @method loadTextureBackGround
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextureBackGround : function () {},

/**
 * @method setSelectedState
 * @param {bool}
 */
setSelectedState : function () {},

/**
 * @method loadTextureFrontCrossDisabled
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTextureFrontCrossDisabled : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::CheckBox*"
 */
create : function () {},

/**
 * @method CheckBox
 * @constructor
 */
CheckBox : function () {},

};

/**
 * @class ImageView
 */
ccui.ImageView = {

/**
 * @method setTextureRect
 * @param {const cocos2d::Rect&}
 */
setTextureRect : function () {},

/**
 * @method setCapInsets
 * @param {const cocos2d::Rect&}
 */
setCapInsets : function () {},

/**
 * @method setScale9Enabled
 * @param {bool}
 */
setScale9Enabled : function () {},

/**
 * @method loadTexture
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTexture : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::ImageView*"
 */
create : function () {},

/**
 * @method ImageView
 * @constructor
 */
ImageView : function () {},

};

/**
 * @class Text
 */
ccui.Text = {

/**
 * @method getStringLength
 * @return A value converted from C/C++ "ssize_t"
 */
getStringLength : function () {},

/**
 * @method setFontName
 * @param {const std::string&}
 */
setFontName : function () {},

/**
 * @method setTouchScaleChangeEnabled
 * @param {bool}
 */
setTouchScaleChangeEnabled : function () {},

/**
 * @method getStringValue
 * @return A value converted from C/C++ "const std::string&"
 */
getStringValue : function () {},

/**
 * @method setText
 * @param {const std::string&}
 */
setText : function () {},

/**
 * @method setTextVerticalAlignment
 * @param {cocos2d::TextVAlignment}
 */
setTextVerticalAlignment : function () {},

/**
 * @method setFontSize
 * @param {int}
 */
setFontSize : function () {},

/**
 * @method isTouchScaleChangeEnabled
 * @return A value converted from C/C++ "bool"
 */
isTouchScaleChangeEnabled : function () {},

/**
 * @method setTextHorizontalAlignment
 * @param {cocos2d::TextHAlignment}
 */
setTextHorizontalAlignment : function () {},

/**
 * @method setTextAreaSize
 * @param {const cocos2d::Size&}
 */
setTextAreaSize : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::Text*"
 */
create : function () {},

/**
 * @method Text
 * @constructor
 */
Text : function () {},

};

/**
 * @class TextAtlas
 */
ccui.TextAtlas = {

/**
 * @method setProperty
 * @param {const std::string&}
 * @param {const std::string&}
 * @param {int}
 * @param {int}
 * @param {const std::string&}
 */
setProperty : function () {},

/**
 * @method getStringValue
 * @return A value converted from C/C++ "const std::string&"
 */
getStringValue : function () {},

/**
 * @method setStringValue
 * @param {const std::string&}
 */
setStringValue : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::TextAtlas*"
 */
create : function () {},

/**
 * @method TextAtlas
 * @constructor
 */
TextAtlas : function () {},

};

/**
 * @class LoadingBar
 */
ccui.LoadingBar = {

/**
 * @method setPercent
 * @param {int}
 */
setPercent : function () {},

/**
 * @method loadTexture
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadTexture : function () {},

/**
 * @method setDirection
 * @param {cocos2d::gui::LoadingBarType}
 */
setDirection : function () {},

/**
 * @method setScale9Enabled
 * @param {bool}
 */
setScale9Enabled : function () {},

/**
 * @method setCapInsets
 * @param {const cocos2d::Rect&}
 */
setCapInsets : function () {},

/**
 * @method getDirection
 * @return A value converted from C/C++ "int"
 */
getDirection : function () {},

/**
 * @method getPercent
 * @return A value converted from C/C++ "int"
 */
getPercent : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::LoadingBar*"
 */
create : function () {},

/**
 * @method LoadingBar
 * @constructor
 */
LoadingBar : function () {},

};

/**
 * @class ScrollView
 */
ccui.ScrollView = {

/**
 * @method scrollToTop
 * @param {float}
 * @param {bool}
 */
scrollToTop : function () {},

/**
 * @method scrollToPercentHorizontal
 * @param {float}
 * @param {float}
 * @param {bool}
 */
scrollToPercentHorizontal : function () {},

/**
 * @method isInertiaScrollEnabled
 * @return A value converted from C/C++ "bool"
 */
isInertiaScrollEnabled : function () {},

/**
 * @method scrollToPercentBothDirection
 * @param {const cocos2d::Point&}
 * @param {float}
 * @param {bool}
 */
scrollToPercentBothDirection : function () {},

/**
 * @method getDirection
 * @return A value converted from C/C++ "cocos2d::gui::SCROLLVIEW_DIR"
 */
getDirection : function () {},

/**
 * @method scrollToBottomLeft
 * @param {float}
 * @param {bool}
 */
scrollToBottomLeft : function () {},

/**
 * @method getInnerContainer
 * @return A value converted from C/C++ "cocos2d::gui::Layout*"
 */
getInnerContainer : function () {},

/**
 * @method jumpToBottom
 */
jumpToBottom : function () {},

/**
 * @method setDirection
 * @param {cocos2d::gui::SCROLLVIEW_DIR}
 */
setDirection : function () {},

/**
 * @method scrollToTopLeft
 * @param {float}
 * @param {bool}
 */
scrollToTopLeft : function () {},

/**
 * @method jumpToTopRight
 */
jumpToTopRight : function () {},

/**
 * @method jumpToBottomLeft
 */
jumpToBottomLeft : function () {},

/**
 * @method setInnerContainerSize
 * @param {const cocos2d::Size&}
 */
setInnerContainerSize : function () {},

/**
 * @method getInnerContainerSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getInnerContainerSize : function () {},

/**
 * @method isBounceEnabled
 * @return A value converted from C/C++ "bool"
 */
isBounceEnabled : function () {},

/**
 * @method jumpToPercentVertical
 * @param {float}
 */
jumpToPercentVertical : function () {},

/**
 * @method setInertiaScrollEnabled
 * @param {bool}
 */
setInertiaScrollEnabled : function () {},

/**
 * @method jumpToTopLeft
 */
jumpToTopLeft : function () {},

/**
 * @method jumpToPercentHorizontal
 * @param {float}
 */
jumpToPercentHorizontal : function () {},

/**
 * @method jumpToBottomRight
 */
jumpToBottomRight : function () {},

/**
 * @method setBounceEnabled
 * @param {bool}
 */
setBounceEnabled : function () {},

/**
 * @method jumpToTop
 */
jumpToTop : function () {},

/**
 * @method scrollToLeft
 * @param {float}
 * @param {bool}
 */
scrollToLeft : function () {},

/**
 * @method jumpToPercentBothDirection
 * @param {const cocos2d::Point&}
 */
jumpToPercentBothDirection : function () {},

/**
 * @method scrollToPercentVertical
 * @param {float}
 * @param {float}
 * @param {bool}
 */
scrollToPercentVertical : function () {},

/**
 * @method scrollToBottom
 * @param {float}
 * @param {bool}
 */
scrollToBottom : function () {},

/**
 * @method scrollToBottomRight
 * @param {float}
 * @param {bool}
 */
scrollToBottomRight : function () {},

/**
 * @method jumpToLeft
 */
jumpToLeft : function () {},

/**
 * @method scrollToRight
 * @param {float}
 * @param {bool}
 */
scrollToRight : function () {},

/**
 * @method jumpToRight
 */
jumpToRight : function () {},

/**
 * @method scrollToTopRight
 * @param {float}
 * @param {bool}
 */
scrollToTopRight : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::ScrollView*"
 */
create : function () {},

/**
 * @method ScrollView
 * @constructor
 */
ScrollView : function () {},

};

/**
 * @class ListView
 */
ccui.ListView = {

/**
 * @method getIndex
 * @return A value converted from C/C++ "ssize_t"
 * @param {cocos2d::gui::Widget*}
 */
getIndex : function () {},

/**
 * @method removeAllItems
 */
removeAllItems : function () {},

/**
 * @method setGravity
 * @param {cocos2d::gui::ListViewGravity}
 */
setGravity : function () {},

/**
 * @method pushBackCustomItem
 * @param {cocos2d::gui::Widget*}
 */
pushBackCustomItem : function () {},

/**
 * @method getItems
 * @return A value converted from C/C++ "cocos2d::Vector<cocos2d::gui::Widget *>&"
 */
getItems : function () {},

/**
 * @method removeItem
 * @param {ssize_t}
 */
removeItem : function () {},

/**
 * @method getCurSelectedIndex
 * @return A value converted from C/C++ "ssize_t"
 */
getCurSelectedIndex : function () {},

/**
 * @method insertDefaultItem
 * @param {ssize_t}
 */
insertDefaultItem : function () {},

/**
 * @method setItemsMargin
 * @param {float}
 */
setItemsMargin : function () {},

/**
 * @method removeLastItem
 */
removeLastItem : function () {},

/**
 * @method getItem
 * @return A value converted from C/C++ "cocos2d::gui::Widget*"
 * @param {ssize_t}
 */
getItem : function () {},

/**
 * @method setItemModel
 * @param {cocos2d::gui::Widget*}
 */
setItemModel : function () {},

/**
 * @method requestRefreshView
 */
requestRefreshView : function () {},

/**
 * @method pushBackDefaultItem
 */
pushBackDefaultItem : function () {},

/**
 * @method insertCustomItem
 * @param {cocos2d::gui::Widget*}
 * @param {ssize_t}
 */
insertCustomItem : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::ListView*"
 */
create : function () {},

/**
 * @method ListView
 * @constructor
 */
ListView : function () {},

};

/**
 * @class Slider
 */
ccui.Slider = {

/**
 * @method setPercent
 * @param {int}
 */
setPercent : function () {},

/**
 * @method loadSlidBallTextureNormal
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadSlidBallTextureNormal : function () {},

/**
 * @method loadBarTexture
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadBarTexture : function () {},

/**
 * @method loadProgressBarTexture
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadProgressBarTexture : function () {},

/**
 * @method loadSlidBallTextures
 * @param {const char*}
 * @param {const char*}
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadSlidBallTextures : function () {},

/**
 * @method setCapInsetProgressBarRebderer
 * @param {const cocos2d::Rect&}
 */
setCapInsetProgressBarRebderer : function () {},

/**
 * @method setCapInsetsBarRenderer
 * @param {const cocos2d::Rect&}
 */
setCapInsetsBarRenderer : function () {},

/**
 * @method setScale9Enabled
 * @param {bool}
 */
setScale9Enabled : function () {},

/**
 * @method setCapInsets
 * @param {const cocos2d::Rect&}
 */
setCapInsets : function () {},

/**
 * @method loadSlidBallTexturePressed
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadSlidBallTexturePressed : function () {},

/**
 * @method loadSlidBallTextureDisabled
 * @param {const char*}
 * @param {cocos2d::gui::TextureResType}
 */
loadSlidBallTextureDisabled : function () {},

/**
 * @method getPercent
 * @return A value converted from C/C++ "int"
 */
getPercent : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::Slider*"
 */
create : function () {},

/**
 * @method Slider
 * @constructor
 */
Slider : function () {},

};

/**
 * @class TextField
 */
ccui.TextField = {

/**
 * @method setAttachWithIME
 * @param {bool}
 */
setAttachWithIME : function () {},

/**
 * @method getStringValue
 * @return A value converted from C/C++ "const std::string&"
 */
getStringValue : function () {},

/**
 * @method setPasswordStyleText
 * @param {const char*}
 */
setPasswordStyleText : function () {},

/**
 * @method getAttachWithIME
 * @return A value converted from C/C++ "bool"
 */
getAttachWithIME : function () {},

/**
 * @method setFontName
 * @param {const std::string&}
 */
setFontName : function () {},

/**
 * @method getInsertText
 * @return A value converted from C/C++ "bool"
 */
getInsertText : function () {},

/**
 * @method setInsertText
 * @param {bool}
 */
setInsertText : function () {},

/**
 * @method getDetachWithIME
 * @return A value converted from C/C++ "bool"
 */
getDetachWithIME : function () {},

/**
 * @method didNotSelectSelf
 */
didNotSelectSelf : function () {},

/**
 * @method attachWithIME
 */
attachWithIME : function () {},

/**
 * @method setPasswordEnabled
 * @param {bool}
 */
setPasswordEnabled : function () {},

/**
 * @method setMaxLengthEnabled
 * @param {bool}
 */
setMaxLengthEnabled : function () {},

/**
 * @method getDeleteBackward
 * @return A value converted from C/C++ "bool"
 */
getDeleteBackward : function () {},

/**
 * @method setFontSize
 * @param {int}
 */
setFontSize : function () {},

/**
 * @method setPlaceHolder
 * @param {const std::string&}
 */
setPlaceHolder : function () {},

/**
 * @method isPasswordEnabled
 * @return A value converted from C/C++ "bool"
 */
isPasswordEnabled : function () {},

/**
 * @method getMaxLength
 * @return A value converted from C/C++ "int"
 */
getMaxLength : function () {},

/**
 * @method isMaxLengthEnabled
 * @return A value converted from C/C++ "bool"
 */
isMaxLengthEnabled : function () {},

/**
 * @method setDetachWithIME
 * @param {bool}
 */
setDetachWithIME : function () {},

/**
 * @method setText
 * @param {const std::string&}
 */
setText : function () {},

/**
 * @method setMaxLength
 * @param {int}
 */
setMaxLength : function () {},

/**
 * @method setTouchSize
 * @param {const cocos2d::Size&}
 */
setTouchSize : function () {},

/**
 * @method setDeleteBackward
 * @param {bool}
 */
setDeleteBackward : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::TextField*"
 */
create : function () {},

/**
 * @method TextField
 * @constructor
 */
TextField : function () {},

};

/**
 * @class TextBMFont
 */
ccui.TextBMFont = {

/**
 * @method setFntFile
 * @param {const char*}
 */
setFntFile : function () {},

/**
 * @method getStringValue
 * @return A value converted from C/C++ "const char*"
 */
getStringValue : function () {},

/**
 * @method setText
 * @param {const char*}
 */
setText : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::TextBMFont*"
 */
create : function () {},

/**
 * @method TextBMFont
 * @constructor
 */
TextBMFont : function () {},

};

/**
 * @class PageView
 */
ccui.PageView = {

/**
 * @method getCurPageIndex
 * @return A value converted from C/C++ "ssize_t"
 */
getCurPageIndex : function () {},

/**
 * @method addWidgetToPage
 * @param {cocos2d::gui::Widget*}
 * @param {ssize_t}
 * @param {bool}
 */
addWidgetToPage : function () {},

/**
 * @method getPage
 * @return A value converted from C/C++ "cocos2d::gui::Layout*"
 * @param {ssize_t}
 */
getPage : function () {},

/**
 * @method removePage
 * @param {cocos2d::gui::Layout*}
 */
removePage : function () {},

/**
 * @method insertPage
 * @param {cocos2d::gui::Layout*}
 * @param {int}
 */
insertPage : function () {},

/**
 * @method scrollToPage
 * @param {ssize_t}
 */
scrollToPage : function () {},

/**
 * @method removePageAtIndex
 * @param {ssize_t}
 */
removePageAtIndex : function () {},

/**
 * @method getPages
 * @return A value converted from C/C++ "cocos2d::Vector<cocos2d::gui::Layout *>&"
 */
getPages : function () {},

/**
 * @method removeAllPages
 */
removeAllPages : function () {},

/**
 * @method addPage
 * @param {cocos2d::gui::Layout*}
 */
addPage : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::gui::PageView*"
 */
create : function () {},

/**
 * @method PageView
 * @constructor
 */
PageView : function () {},

};

/**
 * @class Helper
 */
ccui.Helper = {

/**
 * @method seekActionWidgetByActionTag
 * @return A value converted from C/C++ "cocos2d::gui::Widget*"
 * @param {cocos2d::gui::Widget*}
 * @param {int}
 */
seekActionWidgetByActionTag : function () {},

/**
 * @method seekWidgetByTag
 * @return A value converted from C/C++ "cocos2d::gui::Widget*"
 * @param {cocos2d::gui::Widget*}
 * @param {int}
 */
seekWidgetByTag : function () {},

/**
 * @method seekWidgetByRelativeName
 * @return A value converted from C/C++ "cocos2d::gui::Widget*"
 * @param {cocos2d::gui::Widget*}
 * @param {const char*}
 */
seekWidgetByRelativeName : function () {},

/**
 * @method seekWidgetByName
 * @return A value converted from C/C++ "cocos2d::gui::Widget*"
 * @param {cocos2d::gui::Widget*}
 * @param {const char*}
 */
seekWidgetByName : function () {},

};
