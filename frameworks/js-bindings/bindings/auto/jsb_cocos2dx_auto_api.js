/**
 * @module cocos2dx
 */
var cc = cc || {};

/**
 * @class Action
 */
cc.Action = {

/**
 * @method startWithTarget
 * @param {cocos2d::Node*}
 */
startWithTarget : function () {},

/**
 * @method setOriginalTarget
 * @param {cocos2d::Node*}
 */
setOriginalTarget : function () {},

/**
 * @method clone
 * @return A value converted from C/C++ "cocos2d::Action*"
 */
clone : function () {},

/**
 * @method getOriginalTarget
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getOriginalTarget : function () {},

/**
 * @method stop
 */
stop : function () {},

/**
 * @method update
 * @param {float}
 */
update : function () {},

/**
 * @method getTarget
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getTarget : function () {},

/**
 * @method step
 * @param {float}
 */
step : function () {},

/**
 * @method setTag
 * @param {int}
 */
setTag : function () {},

/**
 * @method getTag
 * @return A value converted from C/C++ "int"
 */
getTag : function () {},

/**
 * @method setTarget
 * @param {cocos2d::Node*}
 */
setTarget : function () {},

/**
 * @method isDone
 * @return A value converted from C/C++ "bool"
 */
isDone : function () {},

/**
 * @method reverse
 * @return A value converted from C/C++ "cocos2d::Action*"
 */
reverse : function () {},

};

/**
 * @class FiniteTimeAction
 */
cc.FiniteTimeAction = {

/**
 * @method setDuration
 * @param {float}
 */
setDuration : function () {},

/**
 * @method getDuration
 * @return A value converted from C/C++ "float"
 */
getDuration : function () {},

};

/**
 * @class Speed
 */
cc.Speed = {

/**
 * @method setInnerAction
 * @param {cocos2d::ActionInterval*}
 */
setInnerAction : function () {},

/**
 * @method setSpeed
 * @param {float}
 */
setSpeed : function () {},

/**
 * @method getInnerAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
getInnerAction : function () {},

/**
 * @method getSpeed
 * @return A value converted from C/C++ "float"
 */
getSpeed : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Speed*"
 * @param {cocos2d::ActionInterval*}
 * @param {float}
 */
create : function () {},

};

/**
 * @class Follow
 */
cc.Follow = {

/**
 * @method setBoudarySet
 * @param {bool}
 */
setBoudarySet : function () {},

/**
 * @method isBoundarySet
 * @return A value converted from C/C++ "bool"
 */
isBoundarySet : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Follow*"
 * @param {cocos2d::Node*}
 * @param {const cocos2d::Rect&}
 */
create : function () {},

};

/**
 * @class GLProgram
 */
cc.GLProgram = {

/**
 * @method getFragmentShaderLog
 * @return A value converted from C/C++ "std::string"
 */
getFragmentShaderLog : function () {},

/**
 * @method addAttribute
 * @param {const char*}
 * @param {GLuint}
 */
addAttribute : function () {},

/**
 * @method setUniformLocationWithMatrix4fv
 * @param {GLint}
 * @param {const GLfloat*}
 * @param {unsigned int}
 */
setUniformLocationWithMatrix4fv : function () {},

/**
 * @method getUniformLocationForName
 * @return A value converted from C/C++ "GLint"
 * @param {const char*}
 */
getUniformLocationForName : function () {},

/**
 * @method use
 */
use : function () {},

/**
 * @method getVertexShaderLog
 * @return A value converted from C/C++ "std::string"
 */
getVertexShaderLog : function () {},

/**
 * @method initWithVertexShaderByteArray
 * @return A value converted from C/C++ "bool"
 * @param {const GLchar*}
 * @param {const GLchar*}
 */
initWithVertexShaderByteArray : function () {},

/**
 * @method initWithVertexShaderFilename
 * @return A value converted from C/C++ "bool"
 * @param {const char*}
 * @param {const char*}
 */
initWithVertexShaderFilename : function () {},

/**
 * @method setUniformLocationWith3i
 * @param {GLint}
 * @param {GLint}
 * @param {GLint}
 * @param {GLint}
 */
setUniformLocationWith3i : function () {},

/**
 * @method setUniformLocationWith3iv
 * @param {GLint}
 * @param {GLint*}
 * @param {unsigned int}
 */
setUniformLocationWith3iv : function () {},

/**
 * @method updateUniforms
 */
updateUniforms : function () {},

/**
 * @method setUniformLocationWith4iv
 * @param {GLint}
 * @param {GLint*}
 * @param {unsigned int}
 */
setUniformLocationWith4iv : function () {},

/**
 * @method setUniformLocationWithMatrix2fv
 * @param {GLint}
 * @param {const GLfloat*}
 * @param {unsigned int}
 */
setUniformLocationWithMatrix2fv : function () {},

/**
 * @method link
 * @return A value converted from C/C++ "bool"
 */
link : function () {},

/**
 * @method setUniformLocationWith2iv
 * @param {GLint}
 * @param {GLint*}
 * @param {unsigned int}
 */
setUniformLocationWith2iv : function () {},

/**
 * @method setUniformLocationWithMatrix3fv
 * @param {GLint}
 * @param {const GLfloat*}
 * @param {unsigned int}
 */
setUniformLocationWithMatrix3fv : function () {},

/**
 * @method reset
 */
reset : function () {},

/**
 * @method setUniformLocationWith4i
 * @param {GLint}
 * @param {GLint}
 * @param {GLint}
 * @param {GLint}
 * @param {GLint}
 */
setUniformLocationWith4i : function () {},

/**
 * @method setUniformLocationWith1i
 * @param {GLint}
 * @param {GLint}
 */
setUniformLocationWith1i : function () {},

/**
 * @method setUniformLocationWith2i
 * @param {GLint}
 * @param {GLint}
 * @param {GLint}
 */
setUniformLocationWith2i : function () {},

/**
 * @method GLProgram
 * @constructor
 */
GLProgram : function () {},

};

/**
 * @class Touch
 */
cc.Touch = {

/**
 * @method getPreviousLocationInView
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getPreviousLocationInView : function () {},

/**
 * @method getLocation
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getLocation : function () {},

/**
 * @method getDelta
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getDelta : function () {},

/**
 * @method getStartLocationInView
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getStartLocationInView : function () {},

/**
 * @method getStartLocation
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getStartLocation : function () {},

/**
 * @method getID
 * @return A value converted from C/C++ "int"
 */
getID : function () {},

/**
 * @method setTouchInfo
 * @param {int}
 * @param {float}
 * @param {float}
 */
setTouchInfo : function () {},

/**
 * @method getLocationInView
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getLocationInView : function () {},

/**
 * @method getPreviousLocation
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getPreviousLocation : function () {},

/**
 * @method Touch
 * @constructor
 */
Touch : function () {},

};

/**
 * @class Texture2D
 */
cc.Texture2D = {

/**
 * @method getShaderProgram
 * @return A value converted from C/C++ "cocos2d::GLProgram*"
 */
getShaderProgram : function () {},

/**
 * @method getMaxT
 * @return A value converted from C/C++ "GLfloat"
 */
getMaxT : function () {},

/**
 * @method getStringForFormat
 * @return A value converted from C/C++ "const char*"
 */
getStringForFormat : function () {},

/**
 * @method setShaderProgram
 * @param {cocos2d::GLProgram*}
 */
setShaderProgram : function () {},

/**
 * @method getMaxS
 * @return A value converted from C/C++ "GLfloat"
 */
getMaxS : function () {},

/**
 * @method hasPremultipliedAlpha
 * @return A value converted from C/C++ "bool"
 */
hasPremultipliedAlpha : function () {},

/**
 * @method initWithMipmaps
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::MipmapInfo*}
 * @param {int}
 * @param {cocos2d::Texture2D::PixelFormat}
 * @param {int}
 * @param {int}
 */
initWithMipmaps : function () {},

/**
 * @method getPixelsHigh
 * @return A value converted from C/C++ "int"
 */
getPixelsHigh : function () {},

/**
 * @method getName
 * @return A value converted from C/C++ "GLuint"
 */
getName : function () {},

/**
 * @method setMaxT
 * @param {GLfloat}
 */
setMaxT : function () {},

/**
 * @method drawInRect
 * @param {const cocos2d::Rect&}
 */
drawInRect : function () {},

/**
 * @method getContentSize
 * @return A value converted from C/C++ "cocos2d::Size"
 */
getContentSize : function () {},

/**
 * @method setAliasTexParameters
 */
setAliasTexParameters : function () {},

/**
 * @method setAntiAliasTexParameters
 */
setAntiAliasTexParameters : function () {},

/**
 * @method generateMipmap
 */
generateMipmap : function () {},

/**
 * @method getDescription
 * @return A value converted from C/C++ "std::string"
 */
getDescription : function () {},

/**
 * @method getPixelFormat
 * @return A value converted from C/C++ "cocos2d::Texture2D::PixelFormat"
 */
getPixelFormat : function () {},

/**
 * @method getContentSizeInPixels
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getContentSizeInPixels : function () {},

/**
 * @method getPixelsWide
 * @return A value converted from C/C++ "int"
 */
getPixelsWide : function () {},

/**
 * @method drawAtPoint
 * @param {const cocos2d::Point&}
 */
drawAtPoint : function () {},

/**
 * @method hasMipmaps
 * @return A value converted from C/C++ "bool"
 */
hasMipmaps : function () {},

/**
 * @method setMaxS
 * @param {GLfloat}
 */
setMaxS : function () {},

/**
 * @method setDefaultAlphaPixelFormat
 * @param {cocos2d::Texture2D::PixelFormat}
 */
setDefaultAlphaPixelFormat : function () {},

/**
 * @method getDefaultAlphaPixelFormat
 * @return A value converted from C/C++ "cocos2d::Texture2D::PixelFormat"
 */
getDefaultAlphaPixelFormat : function () {},

/**
 * @method PVRImagesHavePremultipliedAlpha
 * @param {bool}
 */
PVRImagesHavePremultipliedAlpha : function () {},

/**
 * @method Texture2D
 * @constructor
 */
Texture2D : function () {},

};

/**
 * @class Node
 */
cc.Node = {

/**
 * @method removeComponent
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
removeComponent : function () {},

/**
 * @method setPhysicsBody
 * @param {cocos2d::PhysicsBody*}
 */
setPhysicsBody : function () {},

/**
 * @method getDescription
 * @return A value converted from C/C++ "std::string"
 */
getDescription : function () {},

/**
 * @method setRotationSkewY
 * @param {float}
 */
setRotationSkewY : function () {},

/**
 * @method setOpacityModifyRGB
 * @param {bool}
 */
setOpacityModifyRGB : function () {},

/**
 * @method setCascadeOpacityEnabled
 * @param {bool}
 */
setCascadeOpacityEnabled : function () {},

/**
 * @method pause
 */
pause : function () {},

/**
 * @method convertToWorldSpaceAR
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
convertToWorldSpaceAR : function () {},

/**
 * @method isIgnoreAnchorPointForPosition
 * @return A value converted from C/C++ "bool"
 */
isIgnoreAnchorPointForPosition : function () {},

/**
 * @method updateDisplayedOpacity
 * @param {GLubyte}
 */
updateDisplayedOpacity : function () {},

/**
 * @method setRotation
 * @param {float}
 */
setRotation : function () {},

/**
 * @method setLocalZOrder
 * @param {int}
 */
setLocalZOrder : function () {},

/**
 * @method setScaleZ
 * @param {float}
 */
setScaleZ : function () {},

/**
 * @method setScaleY
 * @param {float}
 */
setScaleY : function () {},

/**
 * @method setScaleX
 * @param {float}
 */
setScaleX : function () {},

/**
 * @method setRotationSkewX
 * @param {float}
 */
setRotationSkewX : function () {},

/**
 * @method removeAllComponents
 */
removeAllComponents : function () {},

/**
 * @method _setLocalZOrder
 * @param {int}
 */
_setLocalZOrder : function () {},

/**
 * @method getTag
 * @return A value converted from C/C++ "int"
 */
getTag : function () {},

/**
 * @method getNodeToWorldAffineTransform
 * @return A value converted from C/C++ "cocos2d::AffineTransform"
 */
getNodeToWorldAffineTransform : function () {},

/**
 * @method getNodeToWorldTransform
 * @return A value converted from C/C++ "kmMat4"
 */
getNodeToWorldTransform : function () {},

/**
 * @method getPosition3D
 * @return A value converted from C/C++ "cocos2d::Vertex3F"
 */
getPosition3D : function () {},

/**
 * @method removeChild
 * @param {cocos2d::Node*}
 * @param {bool}
 */
removeChild : function () {},

/**
 * @method convertToWorldSpace
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
convertToWorldSpace : function () {},

/**
 * @method getScene
 * @return A value converted from C/C++ "cocos2d::Scene*"
 */
getScene : function () {},

/**
 * @method getEventDispatcher
 * @return A value converted from C/C++ "cocos2d::EventDispatcher*"
 */
getEventDispatcher : function () {},

/**
 * @method setSkewX
 * @param {float}
 */
setSkewX : function () {},

/**
 * @method setSkewY
 * @param {float}
 */
setSkewY : function () {},

/**
 * @method getOpacity
 * @return A value converted from C/C++ "GLubyte"
 */
getOpacity : function () {},

/**
 * @method setNormalizedPosition
 * @param {const cocos2d::Point&}
 */
setNormalizedPosition : function () {},

/**
 * @method convertTouchToNodeSpace
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {cocos2d::Touch*}
 */
convertTouchToNodeSpace : function () {},

/**
 * @method getNodeToParentAffineTransform
 * @return A value converted from C/C++ "cocos2d::AffineTransform"
 */
getNodeToParentAffineTransform : function () {},

/**
 * @method isCascadeOpacityEnabled
 * @return A value converted from C/C++ "bool"
 */
isCascadeOpacityEnabled : function () {},

/**
 * @method setParent
 * @param {cocos2d::Node*}
 */
setParent : function () {},

/**
 * @method getRotation3D
 * @return A value converted from C/C++ "cocos2d::Vertex3F"
 */
getRotation3D : function () {},

/**
 * @method getNodeToParentTransform
 * @return A value converted from C/C++ "const kmMat4&"
 */
getNodeToParentTransform : function () {},

/**
 * @method convertTouchToNodeSpaceAR
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {cocos2d::Touch*}
 */
convertTouchToNodeSpaceAR : function () {},

/**
 * @method convertToNodeSpace
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
convertToNodeSpace : function () {},

/**
 * @method resume
 */
resume : function () {},

/**
 * @method getPhysicsBody
 * @return A value converted from C/C++ "cocos2d::PhysicsBody*"
 */
getPhysicsBody : function () {},

/**
 * @method stopActionByTag
 * @param {int}
 */
stopActionByTag : function () {},

/**
 * @method reorderChild
 * @param {cocos2d::Node*}
 * @param {int}
 */
reorderChild : function () {},

/**
 * @method ignoreAnchorPointForPosition
 * @param {bool}
 */
ignoreAnchorPointForPosition : function () {},

/**
 * @method setPositionZ
 * @param {float}
 */
setPositionZ : function () {},

/**
 * @method setRotation3D
 * @param {const cocos2d::Vertex3F&}
 */
setRotation3D : function () {},

/**
 * @method setPositionX
 * @param {float}
 */
setPositionX : function () {},

/**
 * @method setNodeToParentTransform
 * @param {const kmMat4&}
 */
setNodeToParentTransform : function () {},

/**
 * @method getAnchorPoint
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getAnchorPoint : function () {},

/**
 * @method getNumberOfRunningActions
 * @return A value converted from C/C++ "ssize_t"
 */
getNumberOfRunningActions : function () {},

/**
 * @method updateTransform
 */
updateTransform : function () {},

/**
 * @method isVisible
 * @return A value converted from C/C++ "bool"
 */
isVisible : function () {},

/**
 * @method getChildrenCount
 * @return A value converted from C/C++ "ssize_t"
 */
getChildrenCount : function () {},

/**
 * @method convertToNodeSpaceAR
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
convertToNodeSpaceAR : function () {},

/**
 * @method addComponent
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::Component*}
 */
addComponent : function () {},

/**
 * @method visit
 */
visit : function () {},

/**
 * @method setShaderProgram
 * @param {cocos2d::GLProgram*}
 */
setShaderProgram : function () {},

/**
 * @method getRotation
 * @return A value converted from C/C++ "float"
 */
getRotation : function () {},

/**
 * @method getLocalZOrder
 * @return A value converted from C/C++ "int"
 */
getLocalZOrder : function () {},

/**
 * @method getAnchorPointInPoints
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getAnchorPointInPoints : function () {},

/**
 * @method runAction
 * @return A value converted from C/C++ "cocos2d::Action*"
 * @param {cocos2d::Action*}
 */
runAction : function () {},

/**
 * @method transform
 */
transform : function () {},

/**
 * @method setScheduler
 * @param {cocos2d::Scheduler*}
 */
setScheduler : function () {},

/**
 * @method stopAllActions
 */
stopAllActions : function () {},

/**
 * @method getSkewX
 * @return A value converted from C/C++ "float"
 */
getSkewX : function () {},

/**
 * @method getSkewY
 * @return A value converted from C/C++ "float"
 */
getSkewY : function () {},

/**
 * @method getDisplayedColor
 * @return A value converted from C/C++ "const cocos2d::Color3B&"
 */
getDisplayedColor : function () {},

/**
 * @method getActionByTag
 * @return A value converted from C/C++ "cocos2d::Action*"
 * @param {int}
 */
getActionByTag : function () {},

/**
 * @method getDisplayedOpacity
 * @return A value converted from C/C++ "GLubyte"
 */
getDisplayedOpacity : function () {},

/**
 * @method getParentToNodeAffineTransform
 * @return A value converted from C/C++ "cocos2d::AffineTransform"
 */
getParentToNodeAffineTransform : function () {},

/**
 * @method getOrderOfArrival
 * @return A value converted from C/C++ "int"
 */
getOrderOfArrival : function () {},

/**
 * @method setActionManager
 * @param {cocos2d::ActionManager*}
 */
setActionManager : function () {},

/**
 * @method setColor
 * @param {const cocos2d::Color3B&}
 */
setColor : function () {},

/**
 * @method isRunning
 * @return A value converted from C/C++ "bool"
 */
isRunning : function () {},

/**
 * @method getPositionZ
 * @return A value converted from C/C++ "float"
 */
getPositionZ : function () {},

/**
 * @method getPositionY
 * @return A value converted from C/C++ "float"
 */
getPositionY : function () {},

/**
 * @method getPositionX
 * @return A value converted from C/C++ "float"
 */
getPositionX : function () {},

/**
 * @method removeChildByTag
 * @param {int}
 * @param {bool}
 */
removeChildByTag : function () {},

/**
 * @method setPositionY
 * @param {float}
 */
setPositionY : function () {},

/**
 * @method updateDisplayedColor
 * @param {const cocos2d::Color3B&}
 */
updateDisplayedColor : function () {},

/**
 * @method setVisible
 * @param {bool}
 */
setVisible : function () {},

/**
 * @method getParentToNodeTransform
 * @return A value converted from C/C++ "const kmMat4&"
 */
getParentToNodeTransform : function () {},

/**
 * @method setGlobalZOrder
 * @param {float}
 */
setGlobalZOrder : function () {},

/**
 * @method getChildByTag
 * @return A value converted from C/C++ "cocos2d::Node*"
 * @param {int}
 */
getChildByTag : function () {},

/**
 * @method setOrderOfArrival
 * @param {int}
 */
setOrderOfArrival : function () {},

/**
 * @method getScaleZ
 * @return A value converted from C/C++ "float"
 */
getScaleZ : function () {},

/**
 * @method getScaleY
 * @return A value converted from C/C++ "float"
 */
getScaleY : function () {},

/**
 * @method getScaleX
 * @return A value converted from C/C++ "float"
 */
getScaleX : function () {},

/**
 * @method getWorldToNodeAffineTransform
 * @return A value converted from C/C++ "cocos2d::AffineTransform"
 */
getWorldToNodeAffineTransform : function () {},

/**
 * @method setCascadeColorEnabled
 * @param {bool}
 */
setCascadeColorEnabled : function () {},

/**
 * @method setOpacity
 * @param {GLubyte}
 */
setOpacity : function () {},

/**
 * @method cleanup
 */
cleanup : function () {},

/**
 * @method getComponent
 * @return A value converted from C/C++ "cocos2d::Component*"
 * @param {const std::string&}
 */
getComponent : function () {},

/**
 * @method getContentSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getContentSize : function () {},

/**
 * @method getColor
 * @return A value converted from C/C++ "const cocos2d::Color3B&"
 */
getColor : function () {},

/**
 * @method getBoundingBox
 * @return A value converted from C/C++ "cocos2d::Rect"
 */
getBoundingBox : function () {},

/**
 * @method setEventDispatcher
 * @param {cocos2d::EventDispatcher*}
 */
setEventDispatcher : function () {},

/**
 * @method getGlobalZOrder
 * @return A value converted from C/C++ "float"
 */
getGlobalZOrder : function () {},

/**
 * @method draw
 */
draw : function () {},

/**
 * @method transformAncestors
 */
transformAncestors : function () {},

/**
 * @method setUserObject
 * @param {cocos2d::Ref*}
 */
setUserObject : function () {},

/**
 * @method setPosition3D
 * @param {const cocos2d::Vertex3F&}
 */
setPosition3D : function () {},

/**
 * @method update
 * @param {float}
 */
update : function () {},

/**
 * @method sortAllChildren
 */
sortAllChildren : function () {},

/**
 * @method getWorldToNodeTransform
 * @return A value converted from C/C++ "kmMat4"
 */
getWorldToNodeTransform : function () {},

/**
 * @method getScale
 * @return A value converted from C/C++ "float"
 */
getScale : function () {},

/**
 * @method getNormalizedPosition
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getNormalizedPosition : function () {},

/**
 * @method getRotationSkewX
 * @return A value converted from C/C++ "float"
 */
getRotationSkewX : function () {},

/**
 * @method getRotationSkewY
 * @return A value converted from C/C++ "float"
 */
getRotationSkewY : function () {},

/**
 * @method setTag
 * @param {int}
 */
setTag : function () {},

/**
 * @method isCascadeColorEnabled
 * @return A value converted from C/C++ "bool"
 */
isCascadeColorEnabled : function () {},

/**
 * @method isOpacityModifyRGB
 * @return A value converted from C/C++ "bool"
 */
isOpacityModifyRGB : function () {},

/**
 * @method stopAction
 * @param {cocos2d::Action*}
 */
stopAction : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
create : function () {},

};

/**
 * @class __NodeRGBA
 */
cc.NodeRGBA = {

};

/**
 * @class SpriteFrame
 */
cc.SpriteFrame = {

/**
 * @method clone
 * @return A value converted from C/C++ "cocos2d::SpriteFrame*"
 */
clone : function () {},

/**
 * @method setRotated
 * @param {bool}
 */
setRotated : function () {},

/**
 * @method setTexture
 * @param {cocos2d::Texture2D*}
 */
setTexture : function () {},

/**
 * @method setRectInPixels
 * @param {const cocos2d::Rect&}
 */
setRectInPixels : function () {},

/**
 * @method getTexture
 * @return A value converted from C/C++ "cocos2d::Texture2D*"
 */
getTexture : function () {},

/**
 * @method getRect
 * @return A value converted from C/C++ "const cocos2d::Rect&"
 */
getRect : function () {},

/**
 * @method setOffsetInPixels
 * @param {const cocos2d::Point&}
 */
setOffsetInPixels : function () {},

/**
 * @method getRectInPixels
 * @return A value converted from C/C++ "const cocos2d::Rect&"
 */
getRectInPixels : function () {},

/**
 * @method setOriginalSize
 * @param {const cocos2d::Size&}
 */
setOriginalSize : function () {},

/**
 * @method getOriginalSizeInPixels
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getOriginalSizeInPixels : function () {},

/**
 * @method setOriginalSizeInPixels
 * @param {const cocos2d::Size&}
 */
setOriginalSizeInPixels : function () {},

/**
 * @method setOffset
 * @param {const cocos2d::Point&}
 */
setOffset : function () {},

/**
 * @method getOffset
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getOffset : function () {},

/**
 * @method isRotated
 * @return A value converted from C/C++ "bool"
 */
isRotated : function () {},

/**
 * @method setRect
 * @param {const cocos2d::Rect&}
 */
setRect : function () {},

/**
 * @method getOffsetInPixels
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getOffsetInPixels : function () {},

/**
 * @method getOriginalSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getOriginalSize : function () {},

};

/**
 * @class AnimationFrame
 */
cc.AnimationFrame = {

/**
 * @method setSpriteFrame
 * @param {cocos2d::SpriteFrame*}
 */
setSpriteFrame : function () {},

/**
 * @method setDelayUnits
 * @param {float}
 */
setDelayUnits : function () {},

/**
 * @method clone
 * @return A value converted from C/C++ "cocos2d::AnimationFrame*"
 */
clone : function () {},

/**
 * @method getSpriteFrame
 * @return A value converted from C/C++ "cocos2d::SpriteFrame*"
 */
getSpriteFrame : function () {},

/**
 * @method getDelayUnits
 * @return A value converted from C/C++ "float"
 */
getDelayUnits : function () {},

/**
 * @method setUserInfo
 * @param {const cocos2d::ValueMap&}
 */
setUserInfo : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::AnimationFrame*"
 * @param {cocos2d::SpriteFrame*}
 * @param {float}
 * @param {const cocos2d::ValueMap&}
 */
create : function () {},

};

/**
 * @class Animation
 */
cc.Animation = {

/**
 * @method getLoops
 * @return A value converted from C/C++ "unsigned int"
 */
getLoops : function () {},

/**
 * @method addSpriteFrame
 * @param {cocos2d::SpriteFrame*}
 */
addSpriteFrame : function () {},

/**
 * @method setRestoreOriginalFrame
 * @param {bool}
 */
setRestoreOriginalFrame : function () {},

/**
 * @method clone
 * @return A value converted from C/C++ "cocos2d::Animation*"
 */
clone : function () {},

/**
 * @method getDuration
 * @return A value converted from C/C++ "float"
 */
getDuration : function () {},

/**
 * @method setFrames
 * @param {const cocos2d::Vector<cocos2d::AnimationFrame *>&}
 */
setFrames : function () {},

/**
 * @method getFrames
 * @return A value converted from C/C++ "const cocos2d::Vector<cocos2d::AnimationFrame *>&"
 */
getFrames : function () {},

/**
 * @method setLoops
 * @param {unsigned int}
 */
setLoops : function () {},

/**
 * @method setDelayPerUnit
 * @param {float}
 */
setDelayPerUnit : function () {},

/**
 * @method addSpriteFrameWithFile
 * @param {const std::string&}
 */
addSpriteFrameWithFile : function () {},

/**
 * @method getTotalDelayUnits
 * @return A value converted from C/C++ "float"
 */
getTotalDelayUnits : function () {},

/**
 * @method getDelayPerUnit
 * @return A value converted from C/C++ "float"
 */
getDelayPerUnit : function () {},

/**
 * @method getRestoreOriginalFrame
 * @return A value converted from C/C++ "bool"
 */
getRestoreOriginalFrame : function () {},

/**
 * @method addSpriteFrameWithTexture
 * @param {cocos2d::Texture2D*}
 * @param {const cocos2d::Rect&}
 */
addSpriteFrameWithTexture : function () {},

};

/**
 * @class ActionInterval
 */
cc.ActionInterval = {

/**
 * @method getAmplitudeRate
 * @return A value converted from C/C++ "float"
 */
getAmplitudeRate : function () {},

/**
 * @method setAmplitudeRate
 * @param {float}
 */
setAmplitudeRate : function () {},

/**
 * @method getElapsed
 * @return A value converted from C/C++ "float"
 */
getElapsed : function () {},

};

/**
 * @class Sequence
 */
cc.Sequence = {

};

/**
 * @class Repeat
 */
cc.Repeat = {

/**
 * @method setInnerAction
 * @param {cocos2d::FiniteTimeAction*}
 */
setInnerAction : function () {},

/**
 * @method getInnerAction
 * @return A value converted from C/C++ "cocos2d::FiniteTimeAction*"
 */
getInnerAction : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Repeat*"
 * @param {cocos2d::FiniteTimeAction*}
 * @param {unsigned int}
 */
create : function () {},

};

/**
 * @class RepeatForever
 */
cc.RepeatForever = {

/**
 * @method setInnerAction
 * @param {cocos2d::ActionInterval*}
 */
setInnerAction : function () {},

/**
 * @method getInnerAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
getInnerAction : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::RepeatForever*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class Spawn
 */
cc.Spawn = {

};

/**
 * @class RotateTo
 */
cc.RotateTo = {

};

/**
 * @class RotateBy
 */
cc.RotateBy = {

};

/**
 * @class MoveBy
 */
cc.MoveBy = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::MoveBy*"
 * @param {float}
 * @param {const cocos2d::Point&}
 */
create : function () {},

};

/**
 * @class MoveTo
 */
cc.MoveTo = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::MoveTo*"
 * @param {float}
 * @param {const cocos2d::Point&}
 */
create : function () {},

};

/**
 * @class SkewTo
 */
cc.SkewTo = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::SkewTo*"
 * @param {float}
 * @param {float}
 * @param {float}
 */
create : function () {},

};

/**
 * @class SkewBy
 */
cc.SkewBy = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::SkewBy*"
 * @param {float}
 * @param {float}
 * @param {float}
 */
create : function () {},

};

/**
 * @class JumpBy
 */
cc.JumpBy = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::JumpBy*"
 * @param {float}
 * @param {const cocos2d::Point&}
 * @param {float}
 * @param {int}
 */
create : function () {},

};

/**
 * @class JumpTo
 */
cc.JumpTo = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::JumpTo*"
 * @param {float}
 * @param {const cocos2d::Point&}
 * @param {float}
 * @param {int}
 */
create : function () {},

};

/**
 * @class BezierBy
 */
cc.BezierBy = {

};

/**
 * @class BezierTo
 */
cc.BezierTo = {

};

/**
 * @class ScaleTo
 */
cc.ScaleTo = {

};

/**
 * @class ScaleBy
 */
cc.ScaleBy = {

};

/**
 * @class Blink
 */
cc.Blink = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Blink*"
 * @param {float}
 * @param {int}
 */
create : function () {},

};

/**
 * @class FadeIn
 */
cc.FadeIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FadeIn*"
 * @param {float}
 */
create : function () {},

};

/**
 * @class FadeOut
 */
cc.FadeOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FadeOut*"
 * @param {float}
 */
create : function () {},

};

/**
 * @class FadeTo
 */
cc.FadeTo = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FadeTo*"
 * @param {float}
 * @param {GLubyte}
 */
create : function () {},

};

/**
 * @class TintTo
 */
cc.TintTo = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TintTo*"
 * @param {float}
 * @param {GLubyte}
 * @param {GLubyte}
 * @param {GLubyte}
 */
create : function () {},

};

/**
 * @class TintBy
 */
cc.TintBy = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TintBy*"
 * @param {float}
 * @param {GLshort}
 * @param {GLshort}
 * @param {GLshort}
 */
create : function () {},

};

/**
 * @class DelayTime
 */
cc.DelayTime = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::DelayTime*"
 * @param {float}
 */
create : function () {},

};

/**
 * @class Animate
 */
cc.Animate = {

/**
 * @method setAnimation
 * @param {cocos2d::Animation*}
 */
setAnimation : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Animate*"
 * @param {cocos2d::Animation*}
 */
create : function () {},

};

/**
 * @class TargetedAction
 */
cc.TargetedAction = {

/**
 * @method setForcedTarget
 * @param {cocos2d::Node*}
 */
setForcedTarget : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TargetedAction*"
 * @param {cocos2d::Node*}
 * @param {cocos2d::FiniteTimeAction*}
 */
create : function () {},

};

/**
 * @class ActionCamera
 */
cc.ActionCamera = {

/**
 * @method getEye
 * @return A value converted from C/C++ "const kmVec3&"
 */
getEye : function () {},

/**
 * @method setUp
 * @param {const kmVec3&}
 */
setUp : function () {},

/**
 * @method getCenter
 * @return A value converted from C/C++ "const kmVec3&"
 */
getCenter : function () {},

/**
 * @method setCenter
 * @param {const kmVec3&}
 */
setCenter : function () {},

/**
 * @method getUp
 * @return A value converted from C/C++ "const kmVec3&"
 */
getUp : function () {},

/**
 * @method ActionCamera
 * @constructor
 */
ActionCamera : function () {},

};

/**
 * @class OrbitCamera
 */
cc.OrbitCamera = {

/**
 * @method sphericalRadius
 * @param {float*}
 * @param {float*}
 * @param {float*}
 */
sphericalRadius : function () {},

/**
 * @method initWithDuration
 * @return A value converted from C/C++ "bool"
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 */
initWithDuration : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::OrbitCamera*"
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 */
create : function () {},

/**
 * @method OrbitCamera
 * @constructor
 */
OrbitCamera : function () {},

};

/**
 * @class ActionManager
 */
cc.ActionManager = {

/**
 * @method getActionByTag
 * @return A value converted from C/C++ "cocos2d::Action*"
 * @param {int}
 * @param {const cocos2d::Node*}
 */
getActionByTag : function () {},

/**
 * @method removeActionByTag
 * @param {int}
 * @param {cocos2d::Node*}
 */
removeActionByTag : function () {},

/**
 * @method removeAllActions
 */
removeAllActions : function () {},

/**
 * @method addAction
 * @param {cocos2d::Action*}
 * @param {cocos2d::Node*}
 * @param {bool}
 */
addAction : function () {},

/**
 * @method resumeTarget
 * @param {cocos2d::Node*}
 */
resumeTarget : function () {},

/**
 * @method update
 * @param {float}
 */
update : function () {},

/**
 * @method getNumberOfRunningActionsInTarget
 * @return A value converted from C/C++ "ssize_t"
 * @param {const cocos2d::Node*}
 */
getNumberOfRunningActionsInTarget : function () {},

/**
 * @method removeAllActionsFromTarget
 * @param {cocos2d::Node*}
 */
removeAllActionsFromTarget : function () {},

/**
 * @method resumeTargets
 * @param {const cocos2d::Vector<cocos2d::Node *>&}
 */
resumeTargets : function () {},

/**
 * @method removeAction
 * @param {cocos2d::Action*}
 */
removeAction : function () {},

/**
 * @method pauseTarget
 * @param {cocos2d::Node*}
 */
pauseTarget : function () {},

/**
 * @method pauseAllRunningActions
 * @return A value converted from C/C++ "cocos2d::Vector<cocos2d::Node *>"
 */
pauseAllRunningActions : function () {},

/**
 * @method ActionManager
 * @constructor
 */
ActionManager : function () {},

};

/**
 * @class ActionEase
 */
cc.ActionEase = {

/**
 * @method getInnerAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
getInnerAction : function () {},

};

/**
 * @class EaseRateAction
 */
cc.EaseRateAction = {

/**
 * @method setRate
 * @param {float}
 */
setRate : function () {},

/**
 * @method getRate
 * @return A value converted from C/C++ "float"
 */
getRate : function () {},

};

/**
 * @class EaseIn
 */
cc.EaseIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseIn*"
 * @param {cocos2d::ActionInterval*}
 * @param {float}
 */
create : function () {},

};

/**
 * @class EaseOut
 */
cc.EaseOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseOut*"
 * @param {cocos2d::ActionInterval*}
 * @param {float}
 */
create : function () {},

};

/**
 * @class EaseInOut
 */
cc.EaseInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseInOut*"
 * @param {cocos2d::ActionInterval*}
 * @param {float}
 */
create : function () {},

};

/**
 * @class EaseExponentialIn
 */
cc.EaseExponentialIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseExponentialIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseExponentialOut
 */
cc.EaseExponentialOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseExponentialOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseExponentialInOut
 */
cc.EaseExponentialInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseExponentialInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseSineIn
 */
cc.EaseSineIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseSineIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseSineOut
 */
cc.EaseSineOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseSineOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseSineInOut
 */
cc.EaseSineInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseSineInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseElastic
 */
cc.EaseElastic = {

/**
 * @method setPeriod
 * @param {float}
 */
setPeriod : function () {},

/**
 * @method getPeriod
 * @return A value converted from C/C++ "float"
 */
getPeriod : function () {},

};

/**
 * @class EaseElasticIn
 */
cc.EaseElasticIn = {

};

/**
 * @class EaseElasticOut
 */
cc.EaseElasticOut = {

};

/**
 * @class EaseElasticInOut
 */
cc.EaseElasticInOut = {

};

/**
 * @class EaseBounce
 */
cc.EaseBounce = {

};

/**
 * @class EaseBounceIn
 */
cc.EaseBounceIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseBounceIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseBounceOut
 */
cc.EaseBounceOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseBounceOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseBounceInOut
 */
cc.EaseBounceInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseBounceInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseBackIn
 */
cc.EaseBackIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseBackIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseBackOut
 */
cc.EaseBackOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseBackOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseBackInOut
 */
cc.EaseBackInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseBackInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseBezierAction
 */
cc.EaseBezierAction = {

/**
 * @method setBezierParamer
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 */
setBezierParamer : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseBezierAction*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuadraticActionIn
 */
cc.EaseQuadraticActionIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuadraticActionIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuadraticActionOut
 */
cc.EaseQuadraticActionOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuadraticActionOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuadraticActionInOut
 */
cc.EaseQuadraticActionInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuadraticActionInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuarticActionIn
 */
cc.EaseQuarticActionIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuarticActionIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuarticActionOut
 */
cc.EaseQuarticActionOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuarticActionOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuarticActionInOut
 */
cc.EaseQuarticActionInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuarticActionInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuinticActionIn
 */
cc.EaseQuinticActionIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuinticActionIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuinticActionOut
 */
cc.EaseQuinticActionOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuinticActionOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseQuinticActionInOut
 */
cc.EaseQuinticActionInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseQuinticActionInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseCircleActionIn
 */
cc.EaseCircleActionIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseCircleActionIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseCircleActionOut
 */
cc.EaseCircleActionOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseCircleActionOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseCircleActionInOut
 */
cc.EaseCircleActionInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseCircleActionInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseCubicActionIn
 */
cc.EaseCubicActionIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseCubicActionIn*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseCubicActionOut
 */
cc.EaseCubicActionOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseCubicActionOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class EaseCubicActionInOut
 */
cc.EaseCubicActionInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::EaseCubicActionInOut*"
 * @param {cocos2d::ActionInterval*}
 */
create : function () {},

};

/**
 * @class ActionInstant
 */
cc.ActionInstant = {

};

/**
 * @class Show
 */
cc.Show = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Show*"
 */
create : function () {},

};

/**
 * @class Hide
 */
cc.Hide = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Hide*"
 */
create : function () {},

};

/**
 * @class ToggleVisibility
 */
cc.ToggleVisibility = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ToggleVisibility*"
 */
create : function () {},

};

/**
 * @class RemoveSelf
 */
cc.RemoveSelf = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::RemoveSelf*"
 */
create : function () {},

};

/**
 * @class FlipX
 */
cc.FlipX = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FlipX*"
 * @param {bool}
 */
create : function () {},

};

/**
 * @class FlipY
 */
cc.FlipY = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FlipY*"
 * @param {bool}
 */
create : function () {},

};

/**
 * @class Place
 */
cc.Place = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Place*"
 * @param {const cocos2d::Point&}
 */
create : function () {},

};

/**
 * @class CallFunc
 */
cc.CallFunc = {

/**
 * @method execute
 */
execute : function () {},

};

/**
 * @class GridAction
 */
cc.GridAction = {

/**
 * @method getGrid
 * @return A value converted from C/C++ "cocos2d::GridBase*"
 */
getGrid : function () {},

};

/**
 * @class Grid3DAction
 */
cc.Grid3DAction = {

/**
 * @method getGrid
 * @return A value converted from C/C++ "cocos2d::GridBase*"
 */
getGrid : function () {},

};

/**
 * @class TiledGrid3DAction
 */
cc.TiledGrid3DAction = {

/**
 * @method getGrid
 * @return A value converted from C/C++ "cocos2d::GridBase*"
 */
getGrid : function () {},

};

/**
 * @class StopGrid
 */
cc.StopGrid = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::StopGrid*"
 */
create : function () {},

};

/**
 * @class ReuseGrid
 */
cc.ReuseGrid = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ReuseGrid*"
 * @param {int}
 */
create : function () {},

};

/**
 * @class Waves3D
 */
cc.Waves3D = {

/**
 * @method getAmplitudeRate
 * @return A value converted from C/C++ "float"
 */
getAmplitudeRate : function () {},

/**
 * @method setAmplitude
 * @param {float}
 */
setAmplitude : function () {},

/**
 * @method setAmplitudeRate
 * @param {float}
 */
setAmplitudeRate : function () {},

/**
 * @method getAmplitude
 * @return A value converted from C/C++ "float"
 */
getAmplitude : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Waves3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {unsigned int}
 * @param {float}
 */
create : function () {},

};

/**
 * @class FlipX3D
 */
cc.FlipX3D = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FlipX3D*"
 * @param {float}
 */
create : function () {},

};

/**
 * @class FlipY3D
 */
cc.FlipY3D = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FlipY3D*"
 * @param {float}
 */
create : function () {},

};

/**
 * @class Lens3D
 */
cc.Lens3D = {

/**
 * @method setPosition
 * @param {const cocos2d::Point&}
 */
setPosition : function () {},

/**
 * @method setConcave
 * @param {bool}
 */
setConcave : function () {},

/**
 * @method setLensEffect
 * @param {float}
 */
setLensEffect : function () {},

/**
 * @method getPosition
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getPosition : function () {},

/**
 * @method getLensEffect
 * @return A value converted from C/C++ "float"
 */
getLensEffect : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Lens3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {const cocos2d::Point&}
 * @param {float}
 */
create : function () {},

};

/**
 * @class Ripple3D
 */
cc.Ripple3D = {

/**
 * @method setAmplitudeRate
 * @param {float}
 */
setAmplitudeRate : function () {},

/**
 * @method getAmplitudeRate
 * @return A value converted from C/C++ "float"
 */
getAmplitudeRate : function () {},

/**
 * @method setAmplitude
 * @param {float}
 */
setAmplitude : function () {},

/**
 * @method getAmplitude
 * @return A value converted from C/C++ "float"
 */
getAmplitude : function () {},

/**
 * @method setPosition
 * @param {const cocos2d::Point&}
 */
setPosition : function () {},

/**
 * @method getPosition
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getPosition : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Ripple3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {const cocos2d::Point&}
 * @param {float}
 * @param {unsigned int}
 * @param {float}
 */
create : function () {},

};

/**
 * @class Shaky3D
 */
cc.Shaky3D = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Shaky3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {int}
 * @param {bool}
 */
create : function () {},

/**
 * @method Shaky3D
 * @constructor
 */
Shaky3D : function () {},

};

/**
 * @class Liquid
 */
cc.Liquid = {

/**
 * @method getAmplitudeRate
 * @return A value converted from C/C++ "float"
 */
getAmplitudeRate : function () {},

/**
 * @method setAmplitude
 * @param {float}
 */
setAmplitude : function () {},

/**
 * @method getAmplitude
 * @return A value converted from C/C++ "float"
 */
getAmplitude : function () {},

/**
 * @method setAmplitudeRate
 * @param {float}
 */
setAmplitudeRate : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Liquid*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {unsigned int}
 * @param {float}
 */
create : function () {},

/**
 * @method Liquid
 * @constructor
 */
Liquid : function () {},

};

/**
 * @class Waves
 */
cc.Waves = {

/**
 * @method getAmplitudeRate
 * @return A value converted from C/C++ "float"
 */
getAmplitudeRate : function () {},

/**
 * @method setAmplitude
 * @param {float}
 */
setAmplitude : function () {},

/**
 * @method getAmplitude
 * @return A value converted from C/C++ "float"
 */
getAmplitude : function () {},

/**
 * @method setAmplitudeRate
 * @param {float}
 */
setAmplitudeRate : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Waves*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {unsigned int}
 * @param {float}
 * @param {bool}
 * @param {bool}
 */
create : function () {},

/**
 * @method Waves
 * @constructor
 */
Waves : function () {},

};

/**
 * @class Twirl
 */
cc.Twirl = {

/**
 * @method setAmplitudeRate
 * @param {float}
 */
setAmplitudeRate : function () {},

/**
 * @method getAmplitudeRate
 * @return A value converted from C/C++ "float"
 */
getAmplitudeRate : function () {},

/**
 * @method setAmplitude
 * @param {float}
 */
setAmplitude : function () {},

/**
 * @method getAmplitude
 * @return A value converted from C/C++ "float"
 */
getAmplitude : function () {},

/**
 * @method setPosition
 * @param {const cocos2d::Point&}
 */
setPosition : function () {},

/**
 * @method getPosition
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getPosition : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Twirl*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {cocos2d::Point}
 * @param {unsigned int}
 * @param {float}
 */
create : function () {},

/**
 * @method Twirl
 * @constructor
 */
Twirl : function () {},

};

/**
 * @class PageTurn3D
 */
cc.PageTurn3D = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::PageTurn3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 */
create : function () {},

};

/**
 * @class ProgressTo
 */
cc.ProgressTo = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ProgressTo*"
 * @param {float}
 * @param {float}
 */
create : function () {},

};

/**
 * @class ProgressFromTo
 */
cc.ProgressFromTo = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ProgressFromTo*"
 * @param {float}
 * @param {float}
 * @param {float}
 */
create : function () {},

};

/**
 * @class ShakyTiles3D
 */
cc.ShakyTiles3D = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ShakyTiles3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {int}
 * @param {bool}
 */
create : function () {},

};

/**
 * @class ShatteredTiles3D
 */
cc.ShatteredTiles3D = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ShatteredTiles3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {int}
 * @param {bool}
 */
create : function () {},

};

/**
 * @class ShuffleTiles
 */
cc.ShuffleTiles = {

/**
 * @method placeTile
 * @param {const cocos2d::Point&}
 * @param {cocos2d::Tile*}
 */
placeTile : function () {},

/**
 * @method shuffle
 * @param {unsigned int*}
 * @param {unsigned int}
 */
shuffle : function () {},

/**
 * @method getDelta
 * @return A value converted from C/C++ "cocos2d::Size"
 * @param {const cocos2d::Size&}
 */
getDelta : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ShuffleTiles*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {unsigned int}
 */
create : function () {},

};

/**
 * @class FadeOutTRTiles
 */
cc.FadeOutTRTiles = {

/**
 * @method turnOnTile
 * @param {const cocos2d::Point&}
 */
turnOnTile : function () {},

/**
 * @method turnOffTile
 * @param {const cocos2d::Point&}
 */
turnOffTile : function () {},

/**
 * @method transformTile
 * @param {const cocos2d::Point&}
 * @param {float}
 */
transformTile : function () {},

/**
 * @method testFunc
 * @return A value converted from C/C++ "float"
 * @param {const cocos2d::Size&}
 * @param {float}
 */
testFunc : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FadeOutTRTiles*"
 * @param {float}
 * @param {const cocos2d::Size&}
 */
create : function () {},

};

/**
 * @class FadeOutBLTiles
 */
cc.FadeOutBLTiles = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FadeOutBLTiles*"
 * @param {float}
 * @param {const cocos2d::Size&}
 */
create : function () {},

};

/**
 * @class FadeOutUpTiles
 */
cc.FadeOutUpTiles = {

/**
 * @method transformTile
 * @param {const cocos2d::Point&}
 * @param {float}
 */
transformTile : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FadeOutUpTiles*"
 * @param {float}
 * @param {const cocos2d::Size&}
 */
create : function () {},

};

/**
 * @class FadeOutDownTiles
 */
cc.FadeOutDownTiles = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::FadeOutDownTiles*"
 * @param {float}
 * @param {const cocos2d::Size&}
 */
create : function () {},

};

/**
 * @class TurnOffTiles
 */
cc.TurnOffTiles = {

/**
 * @method turnOnTile
 * @param {const cocos2d::Point&}
 */
turnOnTile : function () {},

/**
 * @method turnOffTile
 * @param {const cocos2d::Point&}
 */
turnOffTile : function () {},

/**
 * @method shuffle
 * @param {unsigned int*}
 * @param {unsigned int}
 */
shuffle : function () {},

};

/**
 * @class WavesTiles3D
 */
cc.WavesTiles3D = {

/**
 * @method getAmplitudeRate
 * @return A value converted from C/C++ "float"
 */
getAmplitudeRate : function () {},

/**
 * @method setAmplitude
 * @param {float}
 */
setAmplitude : function () {},

/**
 * @method setAmplitudeRate
 * @param {float}
 */
setAmplitudeRate : function () {},

/**
 * @method getAmplitude
 * @return A value converted from C/C++ "float"
 */
getAmplitude : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::WavesTiles3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {unsigned int}
 * @param {float}
 */
create : function () {},

};

/**
 * @class JumpTiles3D
 */
cc.JumpTiles3D = {

/**
 * @method getAmplitudeRate
 * @return A value converted from C/C++ "float"
 */
getAmplitudeRate : function () {},

/**
 * @method setAmplitude
 * @param {float}
 */
setAmplitude : function () {},

/**
 * @method setAmplitudeRate
 * @param {float}
 */
setAmplitudeRate : function () {},

/**
 * @method getAmplitude
 * @return A value converted from C/C++ "float"
 */
getAmplitude : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::JumpTiles3D*"
 * @param {float}
 * @param {const cocos2d::Size&}
 * @param {unsigned int}
 * @param {float}
 */
create : function () {},

};

/**
 * @class SplitRows
 */
cc.SplitRows = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::SplitRows*"
 * @param {float}
 * @param {unsigned int}
 */
create : function () {},

};

/**
 * @class SplitCols
 */
cc.SplitCols = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::SplitCols*"
 * @param {float}
 * @param {unsigned int}
 */
create : function () {},

};

/**
 * @class ActionTween
 */
cc.ActionTween = {

/**
 * @method initWithDuration
 * @return A value converted from C/C++ "bool"
 * @param {float}
 * @param {const std::string&}
 * @param {float}
 * @param {float}
 */
initWithDuration : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ActionTween*"
 * @param {float}
 * @param {const std::string&}
 * @param {float}
 * @param {float}
 */
create : function () {},

};

/**
 * @class CardinalSplineTo
 */
cc.CardinalSplineTo = {

/**
 * @method getPoints
 * @return A value converted from C/C++ "cocos2d::PointArray*"
 */
getPoints : function () {},

/**
 * @method updatePosition
 * @param {cocos2d::Point&}
 */
updatePosition : function () {},

/**
 * @method initWithDuration
 * @return A value converted from C/C++ "bool"
 * @param {float}
 * @param {cocos2d::PointArray*}
 * @param {float}
 */
initWithDuration : function () {},

/**
 * @method CardinalSplineTo
 * @constructor
 */
CardinalSplineTo : function () {},

};

/**
 * @class CardinalSplineBy
 */
cc.CardinalSplineBy = {

/**
 * @method CardinalSplineBy
 * @constructor
 */
CardinalSplineBy : function () {},

};

/**
 * @class CatmullRomTo
 */
cc.CatmullRomTo = {

/**
 * @method initWithDuration
 * @return A value converted from C/C++ "bool"
 * @param {float}
 * @param {cocos2d::PointArray*}
 */
initWithDuration : function () {},

};

/**
 * @class CatmullRomBy
 */
cc.CatmullRomBy = {

/**
 * @method initWithDuration
 * @return A value converted from C/C++ "bool"
 * @param {float}
 * @param {cocos2d::PointArray*}
 */
initWithDuration : function () {},

};

/**
 * @class AtlasNode
 */
cc.AtlasNode = {

/**
 * @method updateAtlasValues
 */
updateAtlasValues : function () {},

/**
 * @method getTexture
 * @return A value converted from C/C++ "cocos2d::Texture2D*"
 */
getTexture : function () {},

/**
 * @method setTextureAtlas
 * @param {cocos2d::TextureAtlas*}
 */
setTextureAtlas : function () {},

/**
 * @method getTextureAtlas
 * @return A value converted from C/C++ "cocos2d::TextureAtlas*"
 */
getTextureAtlas : function () {},

/**
 * @method getQuadsToDraw
 * @return A value converted from C/C++ "ssize_t"
 */
getQuadsToDraw : function () {},

/**
 * @method setTexture
 * @param {cocos2d::Texture2D*}
 */
setTexture : function () {},

/**
 * @method setQuadsToDraw
 * @param {ssize_t}
 */
setQuadsToDraw : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::AtlasNode*"
 * @param {const std::string&}
 * @param {int}
 * @param {int}
 * @param {int}
 */
create : function () {},

};

/**
 * @class DrawNode
 */
cc.DrawNode = {

/**
 * @method drawQuadraticBezier
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {unsigned int}
 * @param {const cocos2d::Color4F&}
 */
drawQuadraticBezier : function () {},

/**
 * @method onDraw
 */
onDraw : function () {},

/**
 * @method clear
 */
clear : function () {},

/**
 * @method drawTriangle
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Color4F&}
 */
drawTriangle : function () {},

/**
 * @method drawDot
 * @param {const cocos2d::Point&}
 * @param {float}
 * @param {const cocos2d::Color4F&}
 */
drawDot : function () {},

/**
 * @method drawCubicBezier
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {unsigned int}
 * @param {const cocos2d::Color4F&}
 */
drawCubicBezier : function () {},

/**
 * @method drawSegment
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 * @param {float}
 * @param {const cocos2d::Color4F&}
 */
drawSegment : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::DrawNode*"
 */
create : function () {},

};

/**
 * @class LabelAtlas
 */
cc.LabelAtlas = {

/**
 * @method setString
 * @param {const std::string&}
 */
setString : function () {},

/**
 * @method updateAtlasValues
 */
updateAtlasValues : function () {},

/**
 * @method getString
 * @return A value converted from C/C++ "const std::string&"
 */
getString : function () {},

};

/**
 * @class Director
 */
cc.Director = {

/**
 * @method pause
 */
pause : function () {},

/**
 * @method setContentScaleFactor
 * @param {float}
 */
setContentScaleFactor : function () {},

/**
 * @method getContentScaleFactor
 * @return A value converted from C/C++ "float"
 */
getContentScaleFactor : function () {},

/**
 * @method getWinSizeInPixels
 * @return A value converted from C/C++ "cocos2d::Size"
 */
getWinSizeInPixels : function () {},

/**
 * @method getDeltaTime
 * @return A value converted from C/C++ "float"
 */
getDeltaTime : function () {},

/**
 * @method setGLDefaultValues
 */
setGLDefaultValues : function () {},

/**
 * @method setActionManager
 * @param {cocos2d::ActionManager*}
 */
setActionManager : function () {},

/**
 * @method setAlphaBlending
 * @param {bool}
 */
setAlphaBlending : function () {},

/**
 * @method popToRootScene
 */
popToRootScene : function () {},

/**
 * @method getNotificationNode
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getNotificationNode : function () {},

/**
 * @method getWinSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getWinSize : function () {},

/**
 * @method end
 */
end : function () {},

/**
 * @method getTextureCache
 * @return A value converted from C/C++ "cocos2d::TextureCache*"
 */
getTextureCache : function () {},

/**
 * @method isSendCleanupToScene
 * @return A value converted from C/C++ "bool"
 */
isSendCleanupToScene : function () {},

/**
 * @method getVisibleOrigin
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getVisibleOrigin : function () {},

/**
 * @method mainLoop
 */
mainLoop : function () {},

/**
 * @method setDepthTest
 * @param {bool}
 */
setDepthTest : function () {},

/**
 * @method getFrameRate
 * @return A value converted from C/C++ "float"
 */
getFrameRate : function () {},

/**
 * @method getSecondsPerFrame
 * @return A value converted from C/C++ "float"
 */
getSecondsPerFrame : function () {},

/**
 * @method convertToUI
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
convertToUI : function () {},

/**
 * @method setDefaultValues
 */
setDefaultValues : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 */
init : function () {},

/**
 * @method setScheduler
 * @param {cocos2d::Scheduler*}
 */
setScheduler : function () {},

/**
 * @method startAnimation
 */
startAnimation : function () {},

/**
 * @method getRunningScene
 * @return A value converted from C/C++ "cocos2d::Scene*"
 */
getRunningScene : function () {},

/**
 * @method setViewport
 */
setViewport : function () {},

/**
 * @method stopAnimation
 */
stopAnimation : function () {},

/**
 * @method popToSceneStackLevel
 * @param {int}
 */
popToSceneStackLevel : function () {},

/**
 * @method resume
 */
resume : function () {},

/**
 * @method isNextDeltaTimeZero
 * @return A value converted from C/C++ "bool"
 */
isNextDeltaTimeZero : function () {},

/**
 * @method setOpenGLView
 * @param {cocos2d::GLView*}
 */
setOpenGLView : function () {},

/**
 * @method convertToGL
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
convertToGL : function () {},

/**
 * @method purgeCachedData
 */
purgeCachedData : function () {},

/**
 * @method getTotalFrames
 * @return A value converted from C/C++ "unsigned int"
 */
getTotalFrames : function () {},

/**
 * @method runWithScene
 * @param {cocos2d::Scene*}
 */
runWithScene : function () {},

/**
 * @method setNotificationNode
 * @param {cocos2d::Node*}
 */
setNotificationNode : function () {},

/**
 * @method drawScene
 */
drawScene : function () {},

/**
 * @method popScene
 */
popScene : function () {},

/**
 * @method isDisplayStats
 * @return A value converted from C/C++ "bool"
 */
isDisplayStats : function () {},

/**
 * @method setProjection
 * @param {cocos2d::Director::Projection}
 */
setProjection : function () {},

/**
 * @method getZEye
 * @return A value converted from C/C++ "float"
 */
getZEye : function () {},

/**
 * @method setNextDeltaTimeZero
 * @param {bool}
 */
setNextDeltaTimeZero : function () {},

/**
 * @method getVisibleSize
 * @return A value converted from C/C++ "cocos2d::Size"
 */
getVisibleSize : function () {},

/**
 * @method getScheduler
 * @return A value converted from C/C++ "cocos2d::Scheduler*"
 */
getScheduler : function () {},

/**
 * @method pushScene
 * @param {cocos2d::Scene*}
 */
pushScene : function () {},

/**
 * @method getAnimationInterval
 * @return A value converted from C/C++ "double"
 */
getAnimationInterval : function () {},

/**
 * @method isPaused
 * @return A value converted from C/C++ "bool"
 */
isPaused : function () {},

/**
 * @method setDisplayStats
 * @param {bool}
 */
setDisplayStats : function () {},

/**
 * @method replaceScene
 * @param {cocos2d::Scene*}
 */
replaceScene : function () {},

/**
 * @method setAnimationInterval
 * @param {double}
 */
setAnimationInterval : function () {},

/**
 * @method getActionManager
 * @return A value converted from C/C++ "cocos2d::ActionManager*"
 */
getActionManager : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocos2d::Director*"
 */
getInstance : function () {},

};

/**
 * @class GridBase
 */
cc.GridBase = {

/**
 * @method setGridSize
 * @param {const cocos2d::Size&}
 */
setGridSize : function () {},

/**
 * @method calculateVertexPoints
 */
calculateVertexPoints : function () {},

/**
 * @method afterDraw
 * @param {cocos2d::Node*}
 */
afterDraw : function () {},

/**
 * @method beforeDraw
 */
beforeDraw : function () {},

/**
 * @method isTextureFlipped
 * @return A value converted from C/C++ "bool"
 */
isTextureFlipped : function () {},

/**
 * @method getGridSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getGridSize : function () {},

/**
 * @method getStep
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getStep : function () {},

/**
 * @method set2DProjection
 */
set2DProjection : function () {},

/**
 * @method setStep
 * @param {const cocos2d::Point&}
 */
setStep : function () {},

/**
 * @method setTextureFlipped
 * @param {bool}
 */
setTextureFlipped : function () {},

/**
 * @method blit
 */
blit : function () {},

/**
 * @method setActive
 * @param {bool}
 */
setActive : function () {},

/**
 * @method getReuseGrid
 * @return A value converted from C/C++ "int"
 */
getReuseGrid : function () {},

/**
 * @method setReuseGrid
 * @param {int}
 */
setReuseGrid : function () {},

/**
 * @method isActive
 * @return A value converted from C/C++ "bool"
 */
isActive : function () {},

/**
 * @method reuse
 */
reuse : function () {},

};

/**
 * @class Grid3D
 */
cc.Grid3D = {

/**
 * @method Grid3D
 * @constructor
 */
Grid3D : function () {},

};

/**
 * @class TiledGrid3D
 */
cc.TiledGrid3D = {

/**
 * @method TiledGrid3D
 * @constructor
 */
TiledGrid3D : function () {},

};

/**
 * @class Sprite
 */
cc.Sprite = {

/**
 * @method getTexture
 * @return A value converted from C/C++ "cocos2d::Texture2D*"
 */
getTexture : function () {},

/**
 * @method setFlippedY
 * @param {bool}
 */
setFlippedY : function () {},

/**
 * @method setFlippedX
 * @param {bool}
 */
setFlippedX : function () {},

/**
 * @method getBatchNode
 * @return A value converted from C/C++ "cocos2d::SpriteBatchNode*"
 */
getBatchNode : function () {},

/**
 * @method getOffsetPosition
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getOffsetPosition : function () {},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool}
 */
removeAllChildrenWithCleanup : function () {},

/**
 * @method updateTransform
 */
updateTransform : function () {},

/**
 * @method isFrameDisplayed
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::SpriteFrame*}
 */
isFrameDisplayed : function () {},

/**
 * @method getAtlasIndex
 * @return A value converted from C/C++ "ssize_t"
 */
getAtlasIndex : function () {},

/**
 * @method setBatchNode
 * @param {cocos2d::SpriteBatchNode*}
 */
setBatchNode : function () {},

/**
 * @method setDisplayFrameWithAnimationName
 * @param {const std::string&}
 * @param {ssize_t}
 */
setDisplayFrameWithAnimationName : function () {},

/**
 * @method setTextureAtlas
 * @param {cocos2d::TextureAtlas*}
 */
setTextureAtlas : function () {},

/**
 * @method getSpriteFrame
 * @return A value converted from C/C++ "cocos2d::SpriteFrame*"
 */
getSpriteFrame : function () {},

/**
 * @method isDirty
 * @return A value converted from C/C++ "bool"
 */
isDirty : function () {},

/**
 * @method setAtlasIndex
 * @param {ssize_t}
 */
setAtlasIndex : function () {},

/**
 * @method setDirty
 * @param {bool}
 */
setDirty : function () {},

/**
 * @method isTextureRectRotated
 * @return A value converted from C/C++ "bool"
 */
isTextureRectRotated : function () {},

/**
 * @method getTextureRect
 * @return A value converted from C/C++ "const cocos2d::Rect&"
 */
getTextureRect : function () {},

/**
 * @method getTextureAtlas
 * @return A value converted from C/C++ "cocos2d::TextureAtlas*"
 */
getTextureAtlas : function () {},

/**
 * @method isFlippedX
 * @return A value converted from C/C++ "bool"
 */
isFlippedX : function () {},

/**
 * @method isFlippedY
 * @return A value converted from C/C++ "bool"
 */
isFlippedY : function () {},

/**
 * @method setVertexRect
 * @param {const cocos2d::Rect&}
 */
setVertexRect : function () {},

/**
 * @method createWithSpriteFrameName
 * @return A value converted from C/C++ "cocos2d::Sprite*"
 * @param {const std::string&}
 */
createWithSpriteFrameName : function () {},

/**
 * @method createWithSpriteFrame
 * @return A value converted from C/C++ "cocos2d::Sprite*"
 * @param {cocos2d::SpriteFrame*}
 */
createWithSpriteFrame : function () {},

};

/**
 * @class LabelTTF
 */
cc.LabelTTF = {

/**
 * @method enableShadow
 * @param {const cocos2d::Size&}
 * @param {float}
 * @param {float}
 * @param {bool}
 */
enableShadow : function () {},

/**
 * @method setDimensions
 * @param {const cocos2d::Size&}
 */
setDimensions : function () {},

/**
 * @method getFontSize
 * @return A value converted from C/C++ "float"
 */
getFontSize : function () {},

/**
 * @method getString
 * @return A value converted from C/C++ "const std::string&"
 */
getString : function () {},

/**
 * @method setTextDefinition
 * @param {const cocos2d::FontDefinition&}
 */
setTextDefinition : function () {},

/**
 * @method setFontName
 * @param {const std::string&}
 */
setFontName : function () {},

/**
 * @method getHorizontalAlignment
 * @return A value converted from C/C++ "cocos2d::TextHAlignment"
 */
getHorizontalAlignment : function () {},

/**
 * @method initWithStringAndTextDefinition
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 * @param {cocos2d::FontDefinition&}
 */
initWithStringAndTextDefinition : function () {},

/**
 * @method setString
 * @param {const std::string&}
 */
setString : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 */
init : function () {},

/**
 * @method setFontFillColor
 * @param {const cocos2d::Color3B&}
 * @param {bool}
 */
setFontFillColor : function () {},

/**
 * @method enableStroke
 * @param {const cocos2d::Color3B&}
 * @param {float}
 * @param {bool}
 */
enableStroke : function () {},

/**
 * @method getDimensions
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getDimensions : function () {},

/**
 * @method setVerticalAlignment
 * @param {cocos2d::TextVAlignment}
 */
setVerticalAlignment : function () {},

/**
 * @method setFontSize
 * @param {float}
 */
setFontSize : function () {},

/**
 * @method getVerticalAlignment
 * @return A value converted from C/C++ "cocos2d::TextVAlignment"
 */
getVerticalAlignment : function () {},

/**
 * @method getTextDefinition
 * @return A value converted from C/C++ "cocos2d::FontDefinition"
 */
getTextDefinition : function () {},

/**
 * @method getFontName
 * @return A value converted from C/C++ "const std::string&"
 */
getFontName : function () {},

/**
 * @method setHorizontalAlignment
 * @param {cocos2d::TextHAlignment}
 */
setHorizontalAlignment : function () {},

/**
 * @method disableShadow
 */
disableShadow : function () {},

/**
 * @method disableStroke
 */
disableStroke : function () {},

/**
 * @method createWithFontDefinition
 * @return A value converted from C/C++ "cocos2d::LabelTTF*"
 * @param {const std::string&}
 * @param {cocos2d::FontDefinition&}
 */
createWithFontDefinition : function () {},

/**
 * @method LabelTTF
 * @constructor
 */
LabelTTF : function () {},

};

/**
 * @class SpriteBatchNode
 */
cc.SpriteBatchNode = {

/**
 * @method appendChild
 * @param {cocos2d::Sprite*}
 */
appendChild : function () {},

/**
 * @method reorderBatch
 * @param {bool}
 */
reorderBatch : function () {},

/**
 * @method initWithTexture
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::Texture2D*}
 * @param {ssize_t}
 */
initWithTexture : function () {},

/**
 * @method lowestAtlasIndexInChild
 * @return A value converted from C/C++ "ssize_t"
 * @param {cocos2d::Sprite*}
 */
lowestAtlasIndexInChild : function () {},

/**
 * @method atlasIndexForChild
 * @return A value converted from C/C++ "ssize_t"
 * @param {cocos2d::Sprite*}
 * @param {int}
 */
atlasIndexForChild : function () {},

/**
 * @method setTextureAtlas
 * @param {cocos2d::TextureAtlas*}
 */
setTextureAtlas : function () {},

/**
 * @method rebuildIndexInOrder
 * @return A value converted from C/C++ "ssize_t"
 * @param {cocos2d::Sprite*}
 * @param {ssize_t}
 */
rebuildIndexInOrder : function () {},

/**
 * @method increaseAtlasCapacity
 */
increaseAtlasCapacity : function () {},

/**
 * @method getTextureAtlas
 * @return A value converted from C/C++ "cocos2d::TextureAtlas*"
 */
getTextureAtlas : function () {},

/**
 * @method insertQuadFromSprite
 * @param {cocos2d::Sprite*}
 * @param {ssize_t}
 */
insertQuadFromSprite : function () {},

/**
 * @method setTexture
 * @param {cocos2d::Texture2D*}
 */
setTexture : function () {},

/**
 * @method getTexture
 * @return A value converted from C/C++ "cocos2d::Texture2D*"
 */
getTexture : function () {},

/**
 * @method highestAtlasIndexInChild
 * @return A value converted from C/C++ "ssize_t"
 * @param {cocos2d::Sprite*}
 */
highestAtlasIndexInChild : function () {},

/**
 * @method removeChildAtIndex
 * @param {ssize_t}
 * @param {bool}
 */
removeChildAtIndex : function () {},

/**
 * @method removeSpriteFromAtlas
 * @param {cocos2d::Sprite*}
 */
removeSpriteFromAtlas : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::SpriteBatchNode*"
 * @param {const std::string&}
 * @param {ssize_t}
 */
create : function () {},

/**
 * @method createWithTexture
 * @return A value converted from C/C++ "cocos2d::SpriteBatchNode*"
 * @param {cocos2d::Texture2D*}
 * @param {ssize_t}
 */
createWithTexture : function () {},

/**
 * @method SpriteBatchNode
 * @constructor
 */
SpriteBatchNode : function () {},

};

/**
 * @class Label
 */
cc.Label = {

/**
 * @method setLineBreakWithoutSpace
 * @param {bool}
 */
setLineBreakWithoutSpace : function () {},

/**
 * @method getStringNumLines
 * @return A value converted from C/C++ "int"
 */
getStringNumLines : function () {},

/**
 * @method getLetter
 * @return A value converted from C/C++ "cocos2d::Sprite*"
 * @param {int}
 */
getLetter : function () {},

/**
 * @method getScaleY
 * @return A value converted from C/C++ "float"
 */
getScaleY : function () {},

/**
 * @method getScaleX
 * @return A value converted from C/C++ "float"
 */
getScaleX : function () {},

/**
 * @method getStringLenght
 * @return A value converted from C/C++ "int"
 */
getStringLenght : function () {},

/**
 * @method getTextAlignment
 * @return A value converted from C/C++ "cocos2d::TextHAlignment"
 */
getTextAlignment : function () {},

/**
 * @method setString
 * @param {const std::string&}
 */
setString : function () {},

/**
 * @method onDraw
 */
onDraw : function () {},

/**
 * @method setLabelEffect
 * @param {cocos2d::LabelEffect}
 * @param {const cocos2d::Color3B&}
 */
setLabelEffect : function () {},

/**
 * @method getMaxLineWidth
 * @return A value converted from C/C++ "float"
 */
getMaxLineWidth : function () {},

/**
 * @method setBMFontFilePath
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 * @param {const cocos2d::Point&}
 */
setBMFontFilePath : function () {},

/**
 * @method getCommonLineHeight
 * @return A value converted from C/C++ "int"
 */
getCommonLineHeight : function () {},

/**
 * @method getString
 * @return A value converted from C/C++ "const std::string&"
 */
getString : function () {},

/**
 * @method breakLineWithoutSpace
 * @return A value converted from C/C++ "bool"
 */
breakLineWithoutSpace : function () {},

/**
 * @method setMaxLineWidth
 * @param {float}
 */
setMaxLineWidth : function () {},

/**
 * @method setAlignment
 * @param {cocos2d::TextHAlignment}
 */
setAlignment : function () {},

/**
 * @method createWithBMFont
 * @return A value converted from C/C++ "cocos2d::Label*"
 * @param {const std::string&}
 * @param {const std::string&}
 * @param {const cocos2d::TextHAlignment&}
 * @param {int}
 * @param {const cocos2d::Point&}
 */
createWithBMFont : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Label*"
 */
create : function () {},

};

/**
 * @class LabelBMFont
 */
cc.LabelBMFont = {

/**
 * @method setLineBreakWithoutSpace
 * @param {bool}
 */
setLineBreakWithoutSpace : function () {},

/**
 * @method getBlendFunc
 * @return A value converted from C/C++ "const cocos2d::BlendFunc&"
 */
getBlendFunc : function () {},

/**
 * @method isOpacityModifyRGB
 * @return A value converted from C/C++ "bool"
 */
isOpacityModifyRGB : function () {},

/**
 * @method getLetter
 * @return A value converted from C/C++ "cocos2d::Sprite*"
 * @param {int}
 */
getLetter : function () {},

/**
 * @method getString
 * @return A value converted from C/C++ "const std::string&"
 */
getString : function () {},

/**
 * @method setBlendFunc
 * @param {const cocos2d::BlendFunc&}
 */
setBlendFunc : function () {},

/**
 * @method setString
 * @param {const std::string&}
 */
setString : function () {},

/**
 * @method initWithString
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 * @param {const std::string&}
 * @param {float}
 * @param {cocos2d::TextHAlignment}
 * @param {const cocos2d::Point&}
 */
initWithString : function () {},

/**
 * @method setOpacityModifyRGB
 * @param {bool}
 */
setOpacityModifyRGB : function () {},

/**
 * @method getFntFile
 * @return A value converted from C/C++ "const std::string&"
 */
getFntFile : function () {},

/**
 * @method setFntFile
 * @param {const std::string&}
 * @param {const cocos2d::Point&}
 */
setFntFile : function () {},

/**
 * @method setAlignment
 * @param {cocos2d::TextHAlignment}
 */
setAlignment : function () {},

/**
 * @method setWidth
 * @param {float}
 */
setWidth : function () {},

/**
 * @method LabelBMFont
 * @constructor
 */
LabelBMFont : function () {},

};

/**
 * @class Layer
 */
cc.Layer = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Layer*"
 */
create : function () {},

};

/**
 * @class __LayerRGBA
 */
cc.LayerRGBA = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::__LayerRGBA*"
 */
create : function () {},

};

/**
 * @class LayerColor
 */
cc.LayerColor = {

/**
 * @method changeWidthAndHeight
 * @param {GLfloat}
 * @param {GLfloat}
 */
changeWidthAndHeight : function () {},

/**
 * @method onDraw
 */
onDraw : function () {},

/**
 * @method changeWidth
 * @param {GLfloat}
 */
changeWidth : function () {},

/**
 * @method changeHeight
 * @param {GLfloat}
 */
changeHeight : function () {},

};

/**
 * @class LayerGradient
 */
cc.LayerGradient = {

/**
 * @method getStartColor
 * @return A value converted from C/C++ "const cocos2d::Color3B&"
 */
getStartColor : function () {},

/**
 * @method isCompressedInterpolation
 * @return A value converted from C/C++ "bool"
 */
isCompressedInterpolation : function () {},

/**
 * @method getStartOpacity
 * @return A value converted from C/C++ "GLubyte"
 */
getStartOpacity : function () {},

/**
 * @method setVector
 * @param {const cocos2d::Point&}
 */
setVector : function () {},

/**
 * @method setStartOpacity
 * @param {GLubyte}
 */
setStartOpacity : function () {},

/**
 * @method setCompressedInterpolation
 * @param {bool}
 */
setCompressedInterpolation : function () {},

/**
 * @method setEndOpacity
 * @param {GLubyte}
 */
setEndOpacity : function () {},

/**
 * @method getVector
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getVector : function () {},

/**
 * @method setEndColor
 * @param {const cocos2d::Color3B&}
 */
setEndColor : function () {},

/**
 * @method getEndColor
 * @return A value converted from C/C++ "const cocos2d::Color3B&"
 */
getEndColor : function () {},

/**
 * @method getEndOpacity
 * @return A value converted from C/C++ "GLubyte"
 */
getEndOpacity : function () {},

/**
 * @method setStartColor
 * @param {const cocos2d::Color3B&}
 */
setStartColor : function () {},

};

/**
 * @class LayerMultiplex
 */
cc.LayerMultiplex = {

/**
 * @method switchToAndReleaseMe
 * @param {int}
 */
switchToAndReleaseMe : function () {},

/**
 * @method addLayer
 * @param {cocos2d::Layer*}
 */
addLayer : function () {},

/**
 * @method switchTo
 * @param {int}
 */
switchTo : function () {},

};

/**
 * @class Scene
 */
cc.Scene = {

/**
 * @method getPhysicsWorld
 * @return A value converted from C/C++ "cocos2d::PhysicsWorld*"
 */
getPhysicsWorld : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Scene*"
 */
create : function () {},

/**
 * @method createWithPhysics
 * @return A value converted from C/C++ "cocos2d::Scene*"
 */
createWithPhysics : function () {},

};

/**
 * @class TransitionEaseScene
 */
cc.TransitionEaseScene = {

/**
 * @method easeActionWithAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {cocos2d::ActionInterval*}
 */
easeActionWithAction : function () {},

};

/**
 * @class TransitionScene
 */
cc.TransitionScene = {

/**
 * @method finish
 */
finish : function () {},

/**
 * @method hideOutShowIn
 */
hideOutShowIn : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionScene*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionSceneOriented
 */
cc.TransitionSceneOriented = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionSceneOriented*"
 * @param {float}
 * @param {cocos2d::Scene*}
 * @param {cocos2d::TransitionScene::Orientation}
 */
create : function () {},

};

/**
 * @class TransitionRotoZoom
 */
cc.TransitionRotoZoom = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionRotoZoom*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionJumpZoom
 */
cc.TransitionJumpZoom = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionJumpZoom*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionMoveInL
 */
cc.TransitionMoveInL = {

/**
 * @method action
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
action : function () {},

/**
 * @method easeActionWithAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {cocos2d::ActionInterval*}
 */
easeActionWithAction : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionMoveInL*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionMoveInR
 */
cc.TransitionMoveInR = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionMoveInR*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionMoveInT
 */
cc.TransitionMoveInT = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionMoveInT*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionMoveInB
 */
cc.TransitionMoveInB = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionMoveInB*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionSlideInL
 */
cc.TransitionSlideInL = {

/**
 * @method action
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
action : function () {},

/**
 * @method easeActionWithAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {cocos2d::ActionInterval*}
 */
easeActionWithAction : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionSlideInL*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionSlideInR
 */
cc.TransitionSlideInR = {

/**
 * @method action
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
action : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionSlideInR*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionSlideInB
 */
cc.TransitionSlideInB = {

/**
 * @method action
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
action : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionSlideInB*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionSlideInT
 */
cc.TransitionSlideInT = {

/**
 * @method action
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
action : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionSlideInT*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionShrinkGrow
 */
cc.TransitionShrinkGrow = {

/**
 * @method easeActionWithAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {cocos2d::ActionInterval*}
 */
easeActionWithAction : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionShrinkGrow*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionFlipX
 */
cc.TransitionFlipX = {

};

/**
 * @class TransitionFlipY
 */
cc.TransitionFlipY = {

};

/**
 * @class TransitionFlipAngular
 */
cc.TransitionFlipAngular = {

};

/**
 * @class TransitionZoomFlipX
 */
cc.TransitionZoomFlipX = {

};

/**
 * @class TransitionZoomFlipY
 */
cc.TransitionZoomFlipY = {

};

/**
 * @class TransitionZoomFlipAngular
 */
cc.TransitionZoomFlipAngular = {

};

/**
 * @class TransitionFade
 */
cc.TransitionFade = {

};

/**
 * @class TransitionCrossFade
 */
cc.TransitionCrossFade = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionCrossFade*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionTurnOffTiles
 */
cc.TransitionTurnOffTiles = {

/**
 * @method easeActionWithAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {cocos2d::ActionInterval*}
 */
easeActionWithAction : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionTurnOffTiles*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionSplitCols
 */
cc.TransitionSplitCols = {

/**
 * @method action
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 */
action : function () {},

/**
 * @method easeActionWithAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {cocos2d::ActionInterval*}
 */
easeActionWithAction : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionSplitCols*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionSplitRows
 */
cc.TransitionSplitRows = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionSplitRows*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionFadeTR
 */
cc.TransitionFadeTR = {

/**
 * @method easeActionWithAction
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {cocos2d::ActionInterval*}
 */
easeActionWithAction : function () {},

/**
 * @method actionWithSize
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {const cocos2d::Size&}
 */
actionWithSize : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionFadeTR*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionFadeBL
 */
cc.TransitionFadeBL = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionFadeBL*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionFadeUp
 */
cc.TransitionFadeUp = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionFadeUp*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionFadeDown
 */
cc.TransitionFadeDown = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionFadeDown*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionPageTurn
 */
cc.TransitionPageTurn = {

/**
 * @method actionWithSize
 * @return A value converted from C/C++ "cocos2d::ActionInterval*"
 * @param {const cocos2d::Size&}
 */
actionWithSize : function () {},

/**
 * @method initWithDuration
 * @return A value converted from C/C++ "bool"
 * @param {float}
 * @param {cocos2d::Scene*}
 * @param {bool}
 */
initWithDuration : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionPageTurn*"
 * @param {float}
 * @param {cocos2d::Scene*}
 * @param {bool}
 */
create : function () {},

/**
 * @method TransitionPageTurn
 * @constructor
 */
TransitionPageTurn : function () {},

};

/**
 * @class TransitionProgress
 */
cc.TransitionProgress = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionProgress*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

/**
 * @method TransitionProgress
 * @constructor
 */
TransitionProgress : function () {},

};

/**
 * @class TransitionProgressRadialCCW
 */
cc.TransitionProgressRadialCCW = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionProgressRadialCCW*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionProgressRadialCW
 */
cc.TransitionProgressRadialCW = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionProgressRadialCW*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionProgressHorizontal
 */
cc.TransitionProgressHorizontal = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionProgressHorizontal*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionProgressVertical
 */
cc.TransitionProgressVertical = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionProgressVertical*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionProgressInOut
 */
cc.TransitionProgressInOut = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionProgressInOut*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class TransitionProgressOutIn
 */
cc.TransitionProgressOutIn = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TransitionProgressOutIn*"
 * @param {float}
 * @param {cocos2d::Scene*}
 */
create : function () {},

};

/**
 * @class MenuItem
 */
cc.MenuItem = {

/**
 * @method setEnabled
 * @param {bool}
 */
setEnabled : function () {},

/**
 * @method activate
 */
activate : function () {},

/**
 * @method isEnabled
 * @return A value converted from C/C++ "bool"
 */
isEnabled : function () {},

/**
 * @method selected
 */
selected : function () {},

/**
 * @method isSelected
 * @return A value converted from C/C++ "bool"
 */
isSelected : function () {},

/**
 * @method unselected
 */
unselected : function () {},

/**
 * @method rect
 * @return A value converted from C/C++ "cocos2d::Rect"
 */
rect : function () {},

};

/**
 * @class MenuItemLabel
 */
cc.MenuItemLabel = {

/**
 * @method getDisabledColor
 * @return A value converted from C/C++ "const cocos2d::Color3B&"
 */
getDisabledColor : function () {},

/**
 * @method setString
 * @param {const std::string&}
 */
setString : function () {},

/**
 * @method setLabel
 * @param {cocos2d::Node*}
 */
setLabel : function () {},

/**
 * @method setDisabledColor
 * @param {const cocos2d::Color3B&}
 */
setDisabledColor : function () {},

/**
 * @method getLabel
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getLabel : function () {},

};

/**
 * @class MenuItemAtlasFont
 */
cc.MenuItemAtlasFont = {

};

/**
 * @class MenuItemFont
 */
cc.MenuItemFont = {

/**
 * @method setFontNameObj
 * @param {const std::string&}
 */
setFontNameObj : function () {},

/**
 * @method getFontSizeObj
 * @return A value converted from C/C++ "int"
 */
getFontSizeObj : function () {},

/**
 * @method getFontNameObj
 * @return A value converted from C/C++ "const std::string&"
 */
getFontNameObj : function () {},

/**
 * @method setFontSizeObj
 * @param {int}
 */
setFontSizeObj : function () {},

/**
 * @method setFontName
 * @param {const std::string&}
 */
setFontName : function () {},

/**
 * @method getFontSize
 * @return A value converted from C/C++ "int"
 */
getFontSize : function () {},

/**
 * @method getFontName
 * @return A value converted from C/C++ "const std::string&"
 */
getFontName : function () {},

/**
 * @method setFontSize
 * @param {int}
 */
setFontSize : function () {},

};

/**
 * @class MenuItemSprite
 */
cc.MenuItemSprite = {

/**
 * @method setEnabled
 * @param {bool}
 */
setEnabled : function () {},

/**
 * @method selected
 */
selected : function () {},

/**
 * @method setNormalImage
 * @param {cocos2d::Node*}
 */
setNormalImage : function () {},

/**
 * @method setDisabledImage
 * @param {cocos2d::Node*}
 */
setDisabledImage : function () {},

/**
 * @method setSelectedImage
 * @param {cocos2d::Node*}
 */
setSelectedImage : function () {},

/**
 * @method getDisabledImage
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getDisabledImage : function () {},

/**
 * @method getSelectedImage
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getSelectedImage : function () {},

/**
 * @method getNormalImage
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getNormalImage : function () {},

/**
 * @method unselected
 */
unselected : function () {},

};

/**
 * @class MenuItemImage
 */
cc.MenuItemImage = {

/**
 * @method setDisabledSpriteFrame
 * @param {cocos2d::SpriteFrame*}
 */
setDisabledSpriteFrame : function () {},

/**
 * @method setSelectedSpriteFrame
 * @param {cocos2d::SpriteFrame*}
 */
setSelectedSpriteFrame : function () {},

/**
 * @method setNormalSpriteFrame
 * @param {cocos2d::SpriteFrame*}
 */
setNormalSpriteFrame : function () {},

};

/**
 * @class MenuItemToggle
 */
cc.MenuItemToggle = {

/**
 * @method setSubItems
 * @param {const cocos2d::Vector<cocos2d::MenuItem *>&}
 */
setSubItems : function () {},

/**
 * @method getSelectedIndex
 * @return A value converted from C/C++ "unsigned int"
 */
getSelectedIndex : function () {},

/**
 * @method addSubItem
 * @param {cocos2d::MenuItem*}
 */
addSubItem : function () {},

/**
 * @method getSelectedItem
 * @return A value converted from C/C++ "cocos2d::MenuItem*"
 */
getSelectedItem : function () {},

/**
 * @method setSelectedIndex
 * @param {unsigned int}
 */
setSelectedIndex : function () {},

};

/**
 * @class Menu
 */
cc.Menu = {

/**
 * @method setEnabled
 * @param {bool}
 */
setEnabled : function () {},

/**
 * @method alignItemsVertically
 */
alignItemsVertically : function () {},

/**
 * @method isEnabled
 * @return A value converted from C/C++ "bool"
 */
isEnabled : function () {},

/**
 * @method alignItemsHorizontallyWithPadding
 * @param {float}
 */
alignItemsHorizontallyWithPadding : function () {},

/**
 * @method alignItemsVerticallyWithPadding
 * @param {float}
 */
alignItemsVerticallyWithPadding : function () {},

/**
 * @method alignItemsHorizontally
 */
alignItemsHorizontally : function () {},

};

/**
 * @class ClippingNode
 */
cc.ClippingNode = {

/**
 * @method isInverted
 * @return A value converted from C/C++ "bool"
 */
isInverted : function () {},

/**
 * @method setInverted
 * @param {bool}
 */
setInverted : function () {},

/**
 * @method setStencil
 * @param {cocos2d::Node*}
 */
setStencil : function () {},

/**
 * @method getAlphaThreshold
 * @return A value converted from C/C++ "GLfloat"
 */
getAlphaThreshold : function () {},

/**
 * @method getStencil
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getStencil : function () {},

/**
 * @method setAlphaThreshold
 * @param {GLfloat}
 */
setAlphaThreshold : function () {},

};

/**
 * @class MotionStreak
 */
cc.MotionStreak = {

/**
 * @method reset
 */
reset : function () {},

/**
 * @method setTexture
 * @param {cocos2d::Texture2D*}
 */
setTexture : function () {},

/**
 * @method getTexture
 * @return A value converted from C/C++ "cocos2d::Texture2D*"
 */
getTexture : function () {},

/**
 * @method tintWithColor
 * @param {const cocos2d::Color3B&}
 */
tintWithColor : function () {},

/**
 * @method setStartingPositionInitialized
 * @param {bool}
 */
setStartingPositionInitialized : function () {},

/**
 * @method isStartingPositionInitialized
 * @return A value converted from C/C++ "bool"
 */
isStartingPositionInitialized : function () {},

/**
 * @method isFastMode
 * @return A value converted from C/C++ "bool"
 */
isFastMode : function () {},

/**
 * @method setFastMode
 * @param {bool}
 */
setFastMode : function () {},

};

/**
 * @class ProgressTimer
 */
cc.ProgressTimer = {

/**
 * @method isReverseDirection
 * @return A value converted from C/C++ "bool"
 */
isReverseDirection : function () {},

/**
 * @method setBarChangeRate
 * @param {const cocos2d::Point&}
 */
setBarChangeRate : function () {},

/**
 * @method getPercentage
 * @return A value converted from C/C++ "float"
 */
getPercentage : function () {},

/**
 * @method setSprite
 * @param {cocos2d::Sprite*}
 */
setSprite : function () {},

/**
 * @method getType
 * @return A value converted from C/C++ "cocos2d::ProgressTimer::Type"
 */
getType : function () {},

/**
 * @method getSprite
 * @return A value converted from C/C++ "cocos2d::Sprite*"
 */
getSprite : function () {},

/**
 * @method setMidpoint
 * @param {const cocos2d::Point&}
 */
setMidpoint : function () {},

/**
 * @method getBarChangeRate
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getBarChangeRate : function () {},

/**
 * @method getMidpoint
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getMidpoint : function () {},

/**
 * @method setPercentage
 * @param {float}
 */
setPercentage : function () {},

/**
 * @method setType
 * @param {cocos2d::ProgressTimer::Type}
 */
setType : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ProgressTimer*"
 * @param {cocos2d::Sprite*}
 */
create : function () {},

};

/**
 * @class RenderTexture
 */
cc.RenderTexture = {

/**
 * @method clearStencil
 * @param {int}
 */
clearStencil : function () {},

/**
 * @method getClearDepth
 * @return A value converted from C/C++ "float"
 */
getClearDepth : function () {},

/**
 * @method getClearStencil
 * @return A value converted from C/C++ "int"
 */
getClearStencil : function () {},

/**
 * @method end
 */
end : function () {},

/**
 * @method setClearStencil
 * @param {int}
 */
setClearStencil : function () {},

/**
 * @method setSprite
 * @param {cocos2d::Sprite*}
 */
setSprite : function () {},

/**
 * @method getSprite
 * @return A value converted from C/C++ "cocos2d::Sprite*"
 */
getSprite : function () {},

/**
 * @method isAutoDraw
 * @return A value converted from C/C++ "bool"
 */
isAutoDraw : function () {},

/**
 * @method setClearFlags
 * @param {unsigned int}
 */
setClearFlags : function () {},

/**
 * @method begin
 */
begin : function () {},

/**
 * @method setAutoDraw
 * @param {bool}
 */
setAutoDraw : function () {},

/**
 * @method setClearColor
 * @param {const cocos2d::Color4F&}
 */
setClearColor : function () {},

/**
 * @method endToLua
 */
endToLua : function () {},

/**
 * @method clearDepth
 * @param {float}
 */
clearDepth : function () {},

/**
 * @method getClearColor
 * @return A value converted from C/C++ "const cocos2d::Color4F&"
 */
getClearColor : function () {},

/**
 * @method clear
 * @param {float}
 * @param {float}
 * @param {float}
 * @param {float}
 */
clear : function () {},

/**
 * @method getClearFlags
 * @return A value converted from C/C++ "unsigned int"
 */
getClearFlags : function () {},

/**
 * @method newImage
 * @return A value converted from C/C++ "cocos2d::Image*"
 */
newImage : function () {},

/**
 * @method setClearDepth
 * @param {float}
 */
setClearDepth : function () {},

/**
 * @method RenderTexture
 * @constructor
 */
RenderTexture : function () {},

};

/**
 * @class NodeGrid
 */
cc.NodeGrid = {

/**
 * @method setTarget
 * @param {cocos2d::Node*}
 */
setTarget : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::NodeGrid*"
 */
create : function () {},

};

/**
 * @class ParticleBatchNode
 */
cc.ParticleBatchNode = {

/**
 * @method setTexture
 * @param {cocos2d::Texture2D*}
 */
setTexture : function () {},

/**
 * @method disableParticle
 * @param {int}
 */
disableParticle : function () {},

/**
 * @method getTexture
 * @return A value converted from C/C++ "cocos2d::Texture2D*"
 */
getTexture : function () {},

/**
 * @method setTextureAtlas
 * @param {cocos2d::TextureAtlas*}
 */
setTextureAtlas : function () {},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool}
 */
removeAllChildrenWithCleanup : function () {},

/**
 * @method getTextureAtlas
 * @return A value converted from C/C++ "cocos2d::TextureAtlas*"
 */
getTextureAtlas : function () {},

/**
 * @method insertChild
 * @param {cocos2d::ParticleSystem*}
 * @param {int}
 */
insertChild : function () {},

/**
 * @method visit
 */
visit : function () {},

/**
 * @method removeChildAtIndex
 * @param {int}
 * @param {bool}
 */
removeChildAtIndex : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleBatchNode*"
 * @param {const std::string&}
 * @param {int}
 */
create : function () {},

/**
 * @method createWithTexture
 * @return A value converted from C/C++ "cocos2d::ParticleBatchNode*"
 * @param {cocos2d::Texture2D*}
 * @param {int}
 */
createWithTexture : function () {},

};

/**
 * @class ParticleSystem
 */
cc.ParticleSystem = {

/**
 * @method getStartSizeVar
 * @return A value converted from C/C++ "float"
 */
getStartSizeVar : function () {},

/**
 * @method getTexture
 * @return A value converted from C/C++ "cocos2d::Texture2D*"
 */
getTexture : function () {},

/**
 * @method isFull
 * @return A value converted from C/C++ "bool"
 */
isFull : function () {},

/**
 * @method getBatchNode
 * @return A value converted from C/C++ "cocos2d::ParticleBatchNode*"
 */
getBatchNode : function () {},

/**
 * @method getStartColor
 * @return A value converted from C/C++ "const cocos2d::Color4F&"
 */
getStartColor : function () {},

/**
 * @method getPositionType
 * @return A value converted from C/C++ "cocos2d::ParticleSystem::PositionType"
 */
getPositionType : function () {},

/**
 * @method setPosVar
 * @param {const cocos2d::Point&}
 */
setPosVar : function () {},

/**
 * @method getEndSpin
 * @return A value converted from C/C++ "float"
 */
getEndSpin : function () {},

/**
 * @method setRotatePerSecondVar
 * @param {float}
 */
setRotatePerSecondVar : function () {},

/**
 * @method getStartSpinVar
 * @return A value converted from C/C++ "float"
 */
getStartSpinVar : function () {},

/**
 * @method getRadialAccelVar
 * @return A value converted from C/C++ "float"
 */
getRadialAccelVar : function () {},

/**
 * @method getEndSizeVar
 * @return A value converted from C/C++ "float"
 */
getEndSizeVar : function () {},

/**
 * @method setRotation
 * @param {float}
 */
setRotation : function () {},

/**
 * @method setTangentialAccel
 * @param {float}
 */
setTangentialAccel : function () {},

/**
 * @method setScaleY
 * @param {float}
 */
setScaleY : function () {},

/**
 * @method setScaleX
 * @param {float}
 */
setScaleX : function () {},

/**
 * @method getRadialAccel
 * @return A value converted from C/C++ "float"
 */
getRadialAccel : function () {},

/**
 * @method setStartRadius
 * @param {float}
 */
setStartRadius : function () {},

/**
 * @method setRotatePerSecond
 * @param {float}
 */
setRotatePerSecond : function () {},

/**
 * @method setEndSize
 * @param {float}
 */
setEndSize : function () {},

/**
 * @method getGravity
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getGravity : function () {},

/**
 * @method getTangentialAccel
 * @return A value converted from C/C++ "float"
 */
getTangentialAccel : function () {},

/**
 * @method setEndRadius
 * @param {float}
 */
setEndRadius : function () {},

/**
 * @method getSpeed
 * @return A value converted from C/C++ "float"
 */
getSpeed : function () {},

/**
 * @method getAngle
 * @return A value converted from C/C++ "float"
 */
getAngle : function () {},

/**
 * @method setEndColor
 * @param {const cocos2d::Color4F&}
 */
setEndColor : function () {},

/**
 * @method setStartSpin
 * @param {float}
 */
setStartSpin : function () {},

/**
 * @method setDuration
 * @param {float}
 */
setDuration : function () {},

/**
 * @method setTexture
 * @param {cocos2d::Texture2D*}
 */
setTexture : function () {},

/**
 * @method getPosVar
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getPosVar : function () {},

/**
 * @method updateWithNoTime
 */
updateWithNoTime : function () {},

/**
 * @method isBlendAdditive
 * @return A value converted from C/C++ "bool"
 */
isBlendAdditive : function () {},

/**
 * @method getSpeedVar
 * @return A value converted from C/C++ "float"
 */
getSpeedVar : function () {},

/**
 * @method setPositionType
 * @param {cocos2d::ParticleSystem::PositionType}
 */
setPositionType : function () {},

/**
 * @method stopSystem
 */
stopSystem : function () {},

/**
 * @method getSourcePosition
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getSourcePosition : function () {},

/**
 * @method setLifeVar
 * @param {float}
 */
setLifeVar : function () {},

/**
 * @method setTotalParticles
 * @param {int}
 */
setTotalParticles : function () {},

/**
 * @method setEndColorVar
 * @param {const cocos2d::Color4F&}
 */
setEndColorVar : function () {},

/**
 * @method updateQuadWithParticle
 * @param {cocos2d::tParticle*}
 * @param {const cocos2d::Point&}
 */
updateQuadWithParticle : function () {},

/**
 * @method getAtlasIndex
 * @return A value converted from C/C++ "int"
 */
getAtlasIndex : function () {},

/**
 * @method getStartSize
 * @return A value converted from C/C++ "float"
 */
getStartSize : function () {},

/**
 * @method setStartSpinVar
 * @param {float}
 */
setStartSpinVar : function () {},

/**
 * @method resetSystem
 */
resetSystem : function () {},

/**
 * @method setAtlasIndex
 * @param {int}
 */
setAtlasIndex : function () {},

/**
 * @method setTangentialAccelVar
 * @param {float}
 */
setTangentialAccelVar : function () {},

/**
 * @method setEndRadiusVar
 * @param {float}
 */
setEndRadiusVar : function () {},

/**
 * @method getEndRadius
 * @return A value converted from C/C++ "float"
 */
getEndRadius : function () {},

/**
 * @method isOpacityModifyRGB
 * @return A value converted from C/C++ "bool"
 */
isOpacityModifyRGB : function () {},

/**
 * @method isActive
 * @return A value converted from C/C++ "bool"
 */
isActive : function () {},

/**
 * @method setRadialAccelVar
 * @param {float}
 */
setRadialAccelVar : function () {},

/**
 * @method setStartSize
 * @param {float}
 */
setStartSize : function () {},

/**
 * @method setSpeed
 * @param {float}
 */
setSpeed : function () {},

/**
 * @method getStartSpin
 * @return A value converted from C/C++ "float"
 */
getStartSpin : function () {},

/**
 * @method getRotatePerSecond
 * @return A value converted from C/C++ "float"
 */
getRotatePerSecond : function () {},

/**
 * @method initParticle
 * @param {cocos2d::tParticle*}
 */
initParticle : function () {},

/**
 * @method setEmitterMode
 * @param {cocos2d::ParticleSystem::Mode}
 */
setEmitterMode : function () {},

/**
 * @method getDuration
 * @return A value converted from C/C++ "float"
 */
getDuration : function () {},

/**
 * @method setSourcePosition
 * @param {const cocos2d::Point&}
 */
setSourcePosition : function () {},

/**
 * @method getEndSpinVar
 * @return A value converted from C/C++ "float"
 */
getEndSpinVar : function () {},

/**
 * @method setBlendAdditive
 * @param {bool}
 */
setBlendAdditive : function () {},

/**
 * @method setLife
 * @param {float}
 */
setLife : function () {},

/**
 * @method setAngleVar
 * @param {float}
 */
setAngleVar : function () {},

/**
 * @method setRotationIsDir
 * @param {bool}
 */
setRotationIsDir : function () {},

/**
 * @method setEndSizeVar
 * @param {float}
 */
setEndSizeVar : function () {},

/**
 * @method setAngle
 * @param {float}
 */
setAngle : function () {},

/**
 * @method setBatchNode
 * @param {cocos2d::ParticleBatchNode*}
 */
setBatchNode : function () {},

/**
 * @method getTangentialAccelVar
 * @return A value converted from C/C++ "float"
 */
getTangentialAccelVar : function () {},

/**
 * @method getEmitterMode
 * @return A value converted from C/C++ "cocos2d::ParticleSystem::Mode"
 */
getEmitterMode : function () {},

/**
 * @method setEndSpinVar
 * @param {float}
 */
setEndSpinVar : function () {},

/**
 * @method getAngleVar
 * @return A value converted from C/C++ "float"
 */
getAngleVar : function () {},

/**
 * @method setStartColor
 * @param {const cocos2d::Color4F&}
 */
setStartColor : function () {},

/**
 * @method getRotatePerSecondVar
 * @return A value converted from C/C++ "float"
 */
getRotatePerSecondVar : function () {},

/**
 * @method getEndSize
 * @return A value converted from C/C++ "float"
 */
getEndSize : function () {},

/**
 * @method getLife
 * @return A value converted from C/C++ "float"
 */
getLife : function () {},

/**
 * @method setSpeedVar
 * @param {float}
 */
setSpeedVar : function () {},

/**
 * @method setAutoRemoveOnFinish
 * @param {bool}
 */
setAutoRemoveOnFinish : function () {},

/**
 * @method setGravity
 * @param {const cocos2d::Point&}
 */
setGravity : function () {},

/**
 * @method postStep
 */
postStep : function () {},

/**
 * @method setEmissionRate
 * @param {float}
 */
setEmissionRate : function () {},

/**
 * @method getEndColorVar
 * @return A value converted from C/C++ "const cocos2d::Color4F&"
 */
getEndColorVar : function () {},

/**
 * @method getRotationIsDir
 * @return A value converted from C/C++ "bool"
 */
getRotationIsDir : function () {},

/**
 * @method setScale
 * @param {float}
 */
setScale : function () {},

/**
 * @method getEmissionRate
 * @return A value converted from C/C++ "float"
 */
getEmissionRate : function () {},

/**
 * @method getEndColor
 * @return A value converted from C/C++ "const cocos2d::Color4F&"
 */
getEndColor : function () {},

/**
 * @method getLifeVar
 * @return A value converted from C/C++ "float"
 */
getLifeVar : function () {},

/**
 * @method setStartSizeVar
 * @param {float}
 */
setStartSizeVar : function () {},

/**
 * @method setOpacityModifyRGB
 * @param {bool}
 */
setOpacityModifyRGB : function () {},

/**
 * @method addParticle
 * @return A value converted from C/C++ "bool"
 */
addParticle : function () {},

/**
 * @method getStartRadius
 * @return A value converted from C/C++ "float"
 */
getStartRadius : function () {},

/**
 * @method getParticleCount
 * @return A value converted from C/C++ "unsigned int"
 */
getParticleCount : function () {},

/**
 * @method getStartRadiusVar
 * @return A value converted from C/C++ "float"
 */
getStartRadiusVar : function () {},

/**
 * @method setStartColorVar
 * @param {const cocos2d::Color4F&}
 */
setStartColorVar : function () {},

/**
 * @method setEndSpin
 * @param {float}
 */
setEndSpin : function () {},

/**
 * @method setRadialAccel
 * @param {float}
 */
setRadialAccel : function () {},

/**
 * @method isAutoRemoveOnFinish
 * @return A value converted from C/C++ "bool"
 */
isAutoRemoveOnFinish : function () {},

/**
 * @method getTotalParticles
 * @return A value converted from C/C++ "int"
 */
getTotalParticles : function () {},

/**
 * @method setStartRadiusVar
 * @param {float}
 */
setStartRadiusVar : function () {},

/**
 * @method getEndRadiusVar
 * @return A value converted from C/C++ "float"
 */
getEndRadiusVar : function () {},

/**
 * @method getStartColorVar
 * @return A value converted from C/C++ "const cocos2d::Color4F&"
 */
getStartColorVar : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleSystem*"
 * @param {const std::string&}
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleSystem*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleSystemQuad
 */
cc.ParticleSystem = {

/**
 * @method setDisplayFrame
 * @param {cocos2d::SpriteFrame*}
 */
setDisplayFrame : function () {},

/**
 * @method setTextureWithRect
 * @param {cocos2d::Texture2D*}
 * @param {const cocos2d::Rect&}
 */
setTextureWithRect : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleSystemQuad*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleFire
 */
cc.ParticleFire = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleFire*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleFire*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleFireworks
 */
cc.ParticleFireworks = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleFireworks*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleFireworks*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleSun
 */
cc.ParticleSun = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleSun*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleSun*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleGalaxy
 */
cc.ParticleGalaxy = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleGalaxy*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleGalaxy*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleFlower
 */
cc.ParticleFlower = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleFlower*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleFlower*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleMeteor
 */
cc.ParticleMeteor = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleMeteor*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleMeteor*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleSpiral
 */
cc.ParticleSpiral = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleSpiral*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleSpiral*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleExplosion
 */
cc.ParticleExplosion = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleExplosion*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleExplosion*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleSmoke
 */
cc.ParticleSmoke = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleSmoke*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleSmoke*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleSnow
 */
cc.ParticleSnow = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleSnow*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleSnow*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class ParticleRain
 */
cc.ParticleRain = {

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParticleRain*"
 */
create : function () {},

/**
 * @method createWithTotalParticles
 * @return A value converted from C/C++ "cocos2d::ParticleRain*"
 * @param {int}
 */
createWithTotalParticles : function () {},

};

/**
 * @class FileUtils
 */
cc.FileUtils = {

/**
 * @method fullPathForFilename
 * @return A value converted from C/C++ "std::string"
 * @param {const std::string&}
 */
fullPathForFilename : function () {},

/**
 * @method getStringFromFile
 * @return A value converted from C/C++ "std::string"
 * @param {const std::string&}
 */
getStringFromFile : function () {},

/**
 * @method setFilenameLookupDictionary
 * @param {const cocos2d::ValueMap&}
 */
setFilenameLookupDictionary : function () {},

/**
 * @method isAbsolutePath
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
isAbsolutePath : function () {},

/**
 * @method loadFilenameLookupDictionaryFromFile
 * @param {const std::string&}
 */
loadFilenameLookupDictionaryFromFile : function () {},

/**
 * @method isPopupNotify
 * @return A value converted from C/C++ "bool"
 */
isPopupNotify : function () {},

/**
 * @method getValueVectorFromFile
 * @return A value converted from C/C++ "cocos2d::ValueVector"
 * @param {const std::string&}
 */
getValueVectorFromFile : function () {},

/**
 * @method writeToFile
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::ValueMap&}
 * @param {const std::string&}
 */
writeToFile : function () {},

/**
 * @method getValueMapFromFile
 * @return A value converted from C/C++ "cocos2d::ValueMap"
 * @param {const std::string&}
 */
getValueMapFromFile : function () {},

/**
 * @method addSearchResolutionsOrder
 * @param {const std::string&}
 */
addSearchResolutionsOrder : function () {},

/**
 * @method addSearchPath
 * @param {const std::string&}
 */
addSearchPath : function () {},

/**
 * @method isFileExist
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
isFileExist : function () {},

/**
 * @method purgeCachedEntries
 */
purgeCachedEntries : function () {},

/**
 * @method fullPathFromRelativeFile
 * @return A value converted from C/C++ "std::string"
 * @param {const std::string&}
 * @param {const std::string&}
 */
fullPathFromRelativeFile : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocos2d::FileUtils*"
 */
getInstance : function () {},

};

/**
 * @class SAXParser
 */
cc.SAXParser = {

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 * @param {const char*}
 */
init : function () {},

};

/**
 * @class Application
 */
cc.Application = {

/**
 * @method getTargetPlatform
 * @return A value converted from C/C++ "cocos2d::ApplicationProtocol::Platform"
 */
getTargetPlatform : function () {},

/**
 * @method setAnimationInterval
 * @param {double}
 */
setAnimationInterval : function () {},

/**
 * @method getCurrentLanguage
 * @return A value converted from C/C++ "cocos2d::LanguageType"
 */
getCurrentLanguage : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocos2d::Application*"
 */
getInstance : function () {},

};

/**
 * @class GLViewProtocol
 */
cc.GLViewProtocol = {

/**
 * @method getVisibleOrigin
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getVisibleOrigin : function () {},

/**
 * @method setDesignResolutionSize
 * @param {float}
 * @param {float}
 * @param {ResolutionPolicy}
 */
setDesignResolutionSize : function () {},

/**
 * @method getVisibleSize
 * @return A value converted from C/C++ "cocos2d::Size"
 */
getVisibleSize : function () {},

};

/**
 * @class GLView
 */
cc.GLView = {

/**
 * @method createWithRect
 * @return A value converted from C/C++ "cocos2d::GLView*"
 * @param {const std::string&}
 * @param {cocos2d::Rect}
 * @param {float}
 */
createWithRect : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::GLView*"
 * @param {const std::string&}
 */
create : function () {},

/**
 * @method createWithFullScreen
 * @return A value converted from C/C++ "cocos2d::GLView*"
 * @param {const std::string&}
 */
createWithFullScreen : function () {},

};

/**
 * @class ShaderCache
 */
cc.ShaderCache = {

/**
 * @method reloadDefaultShaders
 */
reloadDefaultShaders : function () {},

/**
 * @method addProgram
 * @param {cocos2d::GLProgram*}
 * @param {const std::string&}
 */
addProgram : function () {},

/**
 * @method getProgram
 * @return A value converted from C/C++ "cocos2d::GLProgram*"
 * @param {const std::string&}
 */
getProgram : function () {},

/**
 * @method loadDefaultShaders
 */
loadDefaultShaders : function () {},

/**
 * @method destroyInstance
 */
destroyInstance : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocos2d::ShaderCache*"
 */
getInstance : function () {},

/**
 * @method ShaderCache
 * @constructor
 */
ShaderCache : function () {},

};

/**
 * @class AnimationCache
 */
cc.AnimationCache = {

/**
 * @method getAnimation
 * @return A value converted from C/C++ "cocos2d::Animation*"
 * @param {const std::string&}
 */
getAnimation : function () {},

/**
 * @method addAnimation
 * @param {cocos2d::Animation*}
 * @param {const std::string&}
 */
addAnimation : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 */
init : function () {},

/**
 * @method addAnimationsWithDictionary
 * @param {const cocos2d::ValueMap&}
 * @param {const std::string&}
 */
addAnimationsWithDictionary : function () {},

/**
 * @method removeAnimation
 * @param {const std::string&}
 */
removeAnimation : function () {},

/**
 * @method addAnimationsWithFile
 * @param {const std::string&}
 */
addAnimationsWithFile : function () {},

/**
 * @method destroyInstance
 */
destroyInstance : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocos2d::AnimationCache*"
 */
getInstance : function () {},

/**
 * @method AnimationCache
 * @constructor
 */
AnimationCache : function () {},

};

/**
 * @class SpriteFrameCache
 */
cc.SpriteFrameCache = {

/**
 * @method addSpriteFrame
 * @param {cocos2d::SpriteFrame*}
 * @param {const std::string&}
 */
addSpriteFrame : function () {},

/**
 * @method removeUnusedSpriteFrames
 */
removeUnusedSpriteFrames : function () {},

/**
 * @method getSpriteFrameByName
 * @return A value converted from C/C++ "cocos2d::SpriteFrame*"
 * @param {const std::string&}
 */
getSpriteFrameByName : function () {},

/**
 * @method removeSpriteFramesFromFile
 * @param {const std::string&}
 */
removeSpriteFramesFromFile : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 */
init : function () {},

/**
 * @method removeSpriteFrames
 */
removeSpriteFrames : function () {},

/**
 * @method removeSpriteFramesFromTexture
 * @param {cocos2d::Texture2D*}
 */
removeSpriteFramesFromTexture : function () {},

/**
 * @method removeSpriteFrameByName
 * @param {const std::string&}
 */
removeSpriteFrameByName : function () {},

/**
 * @method destroyInstance
 */
destroyInstance : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocos2d::SpriteFrameCache*"
 */
getInstance : function () {},

};

/**
 * @class TextFieldTTF
 */
cc.TextFieldTTF = {

/**
 * @method getCharCount
 * @return A value converted from C/C++ "int"
 */
getCharCount : function () {},

/**
 * @method setSecureTextEntry
 * @param {bool}
 */
setSecureTextEntry : function () {},

/**
 * @method getColorSpaceHolder
 * @return A value converted from C/C++ "const cocos2d::Color3B&"
 */
getColorSpaceHolder : function () {},

/**
 * @method setColorSpaceHolder
 * @param {const cocos2d::Color3B&}
 */
setColorSpaceHolder : function () {},

/**
 * @method detachWithIME
 * @return A value converted from C/C++ "bool"
 */
detachWithIME : function () {},

/**
 * @method setPlaceHolder
 * @param {const std::string&}
 */
setPlaceHolder : function () {},

/**
 * @method isSecureTextEntry
 * @return A value converted from C/C++ "bool"
 */
isSecureTextEntry : function () {},

/**
 * @method getPlaceHolder
 * @return A value converted from C/C++ "const std::string&"
 */
getPlaceHolder : function () {},

/**
 * @method attachWithIME
 * @return A value converted from C/C++ "bool"
 */
attachWithIME : function () {},

/**
 * @method TextFieldTTF
 * @constructor
 */
TextFieldTTF : function () {},

};

/**
 * @class TextureCache
 */
cc.TextureCache = {

/**
 * @method removeTextureForKey
 * @param {const std::string&}
 */
removeTextureForKey : function () {},

/**
 * @method removeAllTextures
 */
removeAllTextures : function () {},

/**
 * @method getDescription
 * @return A value converted from C/C++ "std::string"
 */
getDescription : function () {},

/**
 * @method getCachedTextureInfo
 * @return A value converted from C/C++ "std::string"
 */
getCachedTextureInfo : function () {},

/**
 * @method getTextureForKey
 * @return A value converted from C/C++ "cocos2d::Texture2D*"
 * @param {const std::string&}
 */
getTextureForKey : function () {},

/**
 * @method removeUnusedTextures
 */
removeUnusedTextures : function () {},

/**
 * @method removeTexture
 * @param {cocos2d::Texture2D*}
 */
removeTexture : function () {},

/**
 * @method waitForQuit
 */
waitForQuit : function () {},

/**
 * @method TextureCache
 * @constructor
 */
TextureCache : function () {},

};

/**
 * @class ParallaxNode
 */
cc.ParallaxNode = {

/**
 * @method addChild
 * @param {cocos2d::Node*}
 * @param {int}
 * @param {const cocos2d::Point&}
 * @param {const cocos2d::Point&}
 */
addChild : function () {},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool}
 */
removeAllChildrenWithCleanup : function () {},

/**
 * @method setParallaxArray
 * @param {cocos2d::_ccArray*}
 */
setParallaxArray : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::ParallaxNode*"
 */
create : function () {},

};

/**
 * @class TMXObjectGroup
 */
cc.TMXObjectGroup = {

/**
 * @method setPositionOffset
 * @param {const cocos2d::Point&}
 */
setPositionOffset : function () {},

/**
 * @method getProperty
 * @return A value converted from C/C++ "cocos2d::Value"
 * @param {const std::string&}
 */
getProperty : function () {},

/**
 * @method getPositionOffset
 * @return A value converted from C/C++ "const cocos2d::Point&"
 */
getPositionOffset : function () {},

/**
 * @method getObject
 * @return A value converted from C/C++ "cocos2d::ValueMap"
 * @param {const std::string&}
 */
getObject : function () {},

/**
 * @method setGroupName
 * @param {const std::string&}
 */
setGroupName : function () {},

/**
 * @method getGroupName
 * @return A value converted from C/C++ "const std::string&"
 */
getGroupName : function () {},

/**
 * @method setProperties
 * @param {const cocos2d::ValueMap&}
 */
setProperties : function () {},

/**
 * @method setObjects
 * @param {const cocos2d::ValueVector&}
 */
setObjects : function () {},

/**
 * @method TMXObjectGroup
 * @constructor
 */
TMXObjectGroup : function () {},

};

/**
 * @class TMXLayerInfo
 */
cc.TMXLayerInfo = {

/**
 * @method setProperties
 * @param {cocos2d::ValueMap}
 */
setProperties : function () {},

/**
 * @method getProperties
 * @return A value converted from C/C++ "cocos2d::ValueMap&"
 */
getProperties : function () {},

/**
 * @method TMXLayerInfo
 * @constructor
 */
TMXLayerInfo : function () {},

};

/**
 * @class TMXTilesetInfo
 */
cc.TMXTilesetInfo = {

/**
 * @method getRectForGID
 * @return A value converted from C/C++ "cocos2d::Rect"
 * @param {uint32_t}
 */
getRectForGID : function () {},

/**
 * @method TMXTilesetInfo
 * @constructor
 */
TMXTilesetInfo : function () {},

};

/**
 * @class TMXMapInfo
 */
cc.TMXMapInfo = {

/**
 * @method setObjectGroups
 * @param {const cocos2d::Vector<cocos2d::TMXObjectGroup *>&}
 */
setObjectGroups : function () {},

/**
 * @method setTileSize
 * @param {const cocos2d::Size&}
 */
setTileSize : function () {},

/**
 * @method initWithTMXFile
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
initWithTMXFile : function () {},

/**
 * @method getOrientation
 * @return A value converted from C/C++ "int"
 */
getOrientation : function () {},

/**
 * @method isStoringCharacters
 * @return A value converted from C/C++ "bool"
 */
isStoringCharacters : function () {},

/**
 * @method setLayers
 * @param {const cocos2d::Vector<cocos2d::TMXLayerInfo *>&}
 */
setLayers : function () {},

/**
 * @method parseXMLFile
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
parseXMLFile : function () {},

/**
 * @method getParentElement
 * @return A value converted from C/C++ "int"
 */
getParentElement : function () {},

/**
 * @method setTMXFileName
 * @param {const std::string&}
 */
setTMXFileName : function () {},

/**
 * @method parseXMLString
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
parseXMLString : function () {},

/**
 * @method getParentGID
 * @return A value converted from C/C++ "int"
 */
getParentGID : function () {},

/**
 * @method setParentElement
 * @param {int}
 */
setParentElement : function () {},

/**
 * @method initWithXML
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 * @param {const std::string&}
 */
initWithXML : function () {},

/**
 * @method setParentGID
 * @param {int}
 */
setParentGID : function () {},

/**
 * @method getLayerAttribs
 * @return A value converted from C/C++ "int"
 */
getLayerAttribs : function () {},

/**
 * @method getTileSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getTileSize : function () {},

/**
 * @method getTileProperties
 * @return A value converted from C/C++ "cocos2d::ValueMapIntKey&"
 */
getTileProperties : function () {},

/**
 * @method getTMXFileName
 * @return A value converted from C/C++ "const std::string&"
 */
getTMXFileName : function () {},

/**
 * @method setCurrentString
 * @param {const std::string&}
 */
setCurrentString : function () {},

/**
 * @method setProperties
 * @param {const cocos2d::ValueMap&}
 */
setProperties : function () {},

/**
 * @method setOrientation
 * @param {int}
 */
setOrientation : function () {},

/**
 * @method setTileProperties
 * @param {const cocos2d::ValueMapIntKey&}
 */
setTileProperties : function () {},

/**
 * @method setMapSize
 * @param {const cocos2d::Size&}
 */
setMapSize : function () {},

/**
 * @method setStoringCharacters
 * @param {bool}
 */
setStoringCharacters : function () {},

/**
 * @method getMapSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getMapSize : function () {},

/**
 * @method setTilesets
 * @param {const cocos2d::Vector<cocos2d::TMXTilesetInfo *>&}
 */
setTilesets : function () {},

/**
 * @method getCurrentString
 * @return A value converted from C/C++ "const std::string&"
 */
getCurrentString : function () {},

/**
 * @method setLayerAttribs
 * @param {int}
 */
setLayerAttribs : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TMXMapInfo*"
 * @param {const std::string&}
 */
create : function () {},

/**
 * @method createWithXML
 * @return A value converted from C/C++ "cocos2d::TMXMapInfo*"
 * @param {const std::string&}
 * @param {const std::string&}
 */
createWithXML : function () {},

/**
 * @method TMXMapInfo
 * @constructor
 */
TMXMapInfo : function () {},

};

/**
 * @class TMXLayer
 */
cc.TMXLayer = {

/**
 * @method getTileGIDAt
 * @return A value converted from C/C++ "uint32_t"
 * @param {const cocos2d::Point&}
 * @param {cocos2d::TMXTileFlags*}
 */
getTileGIDAt : function () {},

/**
 * @method getPositionAt
 * @return A value converted from C/C++ "cocos2d::Point"
 * @param {const cocos2d::Point&}
 */
getPositionAt : function () {},

/**
 * @method setLayerOrientation
 * @param {int}
 */
setLayerOrientation : function () {},

/**
 * @method releaseMap
 */
releaseMap : function () {},

/**
 * @method setTiles
 * @param {uint32_t*}
 */
setTiles : function () {},

/**
 * @method getLayerSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getLayerSize : function () {},

/**
 * @method setMapTileSize
 * @param {const cocos2d::Size&}
 */
setMapTileSize : function () {},

/**
 * @method getLayerOrientation
 * @return A value converted from C/C++ "int"
 */
getLayerOrientation : function () {},

/**
 * @method setProperties
 * @param {const cocos2d::ValueMap&}
 */
setProperties : function () {},

/**
 * @method setLayerName
 * @param {const std::string&}
 */
setLayerName : function () {},

/**
 * @method removeTileAt
 * @param {const cocos2d::Point&}
 */
removeTileAt : function () {},

/**
 * @method initWithTilesetInfo
 * @return A value converted from C/C++ "bool"
 * @param {cocos2d::TMXTilesetInfo*}
 * @param {cocos2d::TMXLayerInfo*}
 * @param {cocos2d::TMXMapInfo*}
 */
initWithTilesetInfo : function () {},

/**
 * @method setupTiles
 */
setupTiles : function () {},

/**
 * @method getMapTileSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getMapTileSize : function () {},

/**
 * @method getProperty
 * @return A value converted from C/C++ "cocos2d::Value"
 * @param {const std::string&}
 */
getProperty : function () {},

/**
 * @method setLayerSize
 * @param {const cocos2d::Size&}
 */
setLayerSize : function () {},

/**
 * @method getLayerName
 * @return A value converted from C/C++ "const std::string&"
 */
getLayerName : function () {},

/**
 * @method setTileSet
 * @param {cocos2d::TMXTilesetInfo*}
 */
setTileSet : function () {},

/**
 * @method getTileSet
 * @return A value converted from C/C++ "cocos2d::TMXTilesetInfo*"
 */
getTileSet : function () {},

/**
 * @method getTileAt
 * @return A value converted from C/C++ "cocos2d::Sprite*"
 * @param {const cocos2d::Point&}
 */
getTileAt : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TMXLayer*"
 * @param {cocos2d::TMXTilesetInfo*}
 * @param {cocos2d::TMXLayerInfo*}
 * @param {cocos2d::TMXMapInfo*}
 */
create : function () {},

/**
 * @method TMXLayer
 * @constructor
 */
TMXLayer : function () {},

};

/**
 * @class TMXTiledMap
 */
cc.TMXTiledMap = {

/**
 * @method setObjectGroups
 * @param {const cocos2d::Vector<cocos2d::TMXObjectGroup *>&}
 */
setObjectGroups : function () {},

/**
 * @method getProperty
 * @return A value converted from C/C++ "cocos2d::Value"
 * @param {const std::string&}
 */
getProperty : function () {},

/**
 * @method setMapSize
 * @param {const cocos2d::Size&}
 */
setMapSize : function () {},

/**
 * @method getObjectGroup
 * @return A value converted from C/C++ "cocos2d::TMXObjectGroup*"
 * @param {const std::string&}
 */
getObjectGroup : function () {},

/**
 * @method getTileSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getTileSize : function () {},

/**
 * @method getMapSize
 * @return A value converted from C/C++ "const cocos2d::Size&"
 */
getMapSize : function () {},

/**
 * @method getProperties
 * @return A value converted from C/C++ "cocos2d::ValueMap&"
 */
getProperties : function () {},

/**
 * @method setTileSize
 * @param {const cocos2d::Size&}
 */
setTileSize : function () {},

/**
 * @method setProperties
 * @param {const cocos2d::ValueMap&}
 */
setProperties : function () {},

/**
 * @method getLayer
 * @return A value converted from C/C++ "cocos2d::TMXLayer*"
 * @param {const std::string&}
 */
getLayer : function () {},

/**
 * @method getMapOrientation
 * @return A value converted from C/C++ "int"
 */
getMapOrientation : function () {},

/**
 * @method setMapOrientation
 * @param {int}
 */
setMapOrientation : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TMXTiledMap*"
 * @param {const std::string&}
 */
create : function () {},

/**
 * @method createWithXML
 * @return A value converted from C/C++ "cocos2d::TMXTiledMap*"
 * @param {const std::string&}
 * @param {const std::string&}
 */
createWithXML : function () {},

};

/**
 * @class TileMapAtlas
 */
cc.TileMapAtlas = {

/**
 * @method initWithTileFile
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 * @param {const std::string&}
 * @param {int}
 * @param {int}
 */
initWithTileFile : function () {},

/**
 * @method releaseMap
 */
releaseMap : function () {},

/**
 * @method getTGAInfo
 * @return A value converted from C/C++ "cocos2d::sImageTGA*"
 */
getTGAInfo : function () {},

/**
 * @method getTileAt
 * @return A value converted from C/C++ "cocos2d::Color3B"
 * @param {const cocos2d::Point&}
 */
getTileAt : function () {},

/**
 * @method setTile
 * @param {const cocos2d::Color3B&}
 * @param {const cocos2d::Point&}
 */
setTile : function () {},

/**
 * @method setTGAInfo
 * @param {cocos2d::sImageTGA*}
 */
setTGAInfo : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::TileMapAtlas*"
 * @param {const std::string&}
 * @param {const std::string&}
 * @param {int}
 * @param {int}
 */
create : function () {},

/**
 * @method TileMapAtlas
 * @constructor
 */
TileMapAtlas : function () {},

};

/**
 * @class Scheduler
 */
cc.Scheduler = {

/**
 * @method setTimeScale
 * @param {float}
 */
setTimeScale : function () {},

/**
 * @method isScheduled
 * @return A value converted from C/C++ "bool"
 * @param {void*}
 * @param {long}
 */
isScheduled : function () {},

/**
 * @method getTimeScale
 * @return A value converted from C/C++ "float"
 */
getTimeScale : function () {},

/**
 * @method performFunctionInCocosThread
 * @param {const std::function<void ()>&}
 */
performFunctionInCocosThread : function () {},

/**
 * @method Scheduler
 * @constructor
 */
Scheduler : function () {},

};

/**
 * @class Component
 */
cc.Component = {

/**
 * @method setEnabled
 * @param {bool}
 */
setEnabled : function () {},

/**
 * @method setName
 * @param {const std::string&}
 */
setName : function () {},

/**
 * @method isEnabled
 * @return A value converted from C/C++ "bool"
 */
isEnabled : function () {},

/**
 * @method serialize
 * @return A value converted from C/C++ "bool"
 * @param {void*}
 */
serialize : function () {},

/**
 * @method update
 * @param {float}
 */
update : function () {},

/**
 * @method getOwner
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getOwner : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 */
init : function () {},

/**
 * @method setOwner
 * @param {cocos2d::Node*}
 */
setOwner : function () {},

/**
 * @method getName
 * @return A value converted from C/C++ "const std::string&"
 */
getName : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocos2d::Component*"
 */
create : function () {},

};

/**
 * @class SimpleAudioEngine
 */
cc.AudioEngine = {

/**
 * @method preloadBackgroundMusic
 * @param {const char*}
 */
preloadBackgroundMusic : function () {},

/**
 * @method stopBackgroundMusic
 */
stopBackgroundMusic : function () {},

/**
 * @method stopAllEffects
 */
stopAllEffects : function () {},

/**
 * @method getBackgroundMusicVolume
 * @return A value converted from C/C++ "float"
 */
getBackgroundMusicVolume : function () {},

/**
 * @method resumeBackgroundMusic
 */
resumeBackgroundMusic : function () {},

/**
 * @method setBackgroundMusicVolume
 * @param {float}
 */
setBackgroundMusicVolume : function () {},

/**
 * @method preloadEffect
 * @param {const char*}
 */
preloadEffect : function () {},

/**
 * @method isBackgroundMusicPlaying
 * @return A value converted from C/C++ "bool"
 */
isBackgroundMusicPlaying : function () {},

/**
 * @method getEffectsVolume
 * @return A value converted from C/C++ "float"
 */
getEffectsVolume : function () {},

/**
 * @method willPlayBackgroundMusic
 * @return A value converted from C/C++ "bool"
 */
willPlayBackgroundMusic : function () {},

/**
 * @method pauseEffect
 * @param {unsigned int}
 */
pauseEffect : function () {},

/**
 * @method playEffect
 * @return A value converted from C/C++ "unsigned int"
 * @param {const char*}
 * @param {bool}
 * @param {float}
 * @param {float}
 * @param {float}
 */
playEffect : function () {},

/**
 * @method rewindBackgroundMusic
 */
rewindBackgroundMusic : function () {},

/**
 * @method playBackgroundMusic
 * @param {const char*}
 * @param {bool}
 */
playBackgroundMusic : function () {},

/**
 * @method resumeAllEffects
 */
resumeAllEffects : function () {},

/**
 * @method setEffectsVolume
 * @param {float}
 */
setEffectsVolume : function () {},

/**
 * @method stopEffect
 * @param {unsigned int}
 */
stopEffect : function () {},

/**
 * @method pauseBackgroundMusic
 */
pauseBackgroundMusic : function () {},

/**
 * @method pauseAllEffects
 */
pauseAllEffects : function () {},

/**
 * @method unloadEffect
 * @param {const char*}
 */
unloadEffect : function () {},

/**
 * @method resumeEffect
 * @param {unsigned int}
 */
resumeEffect : function () {},

/**
 * @method end
 */
end : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "CocosDenshion::SimpleAudioEngine*"
 */
getInstance : function () {},

};
