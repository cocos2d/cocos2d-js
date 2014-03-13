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
 * @param {cc.Node} arg0
 */
startWithTarget : function (
node 
)
{
},

/**
 * @method setOriginalTarget
 * @param {cc.Node} arg0
 */
setOriginalTarget : function (
node 
)
{
},

/**
 * @method clone
 * @return {cc.Action}
 */
clone : function (
)
{
    return cc.Action;
},

/**
 * @method getOriginalTarget
 * @return {cc.Node}
 */
getOriginalTarget : function (
)
{
    return cc.Node;
},

/**
 * @method stop
 */
stop : function (
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
 * @method getTarget
 * @return {cc.Node}
 */
getTarget : function (
)
{
    return cc.Node;
},

/**
 * @method step
 * @param {float} arg0
 */
step : function (
float 
)
{
},

/**
 * @method setTag
 * @param {int} arg0
 */
setTag : function (
int 
)
{
},

/**
 * @method getTag
 * @return {int}
 */
getTag : function (
)
{
    return 0;
},

/**
 * @method setTarget
 * @param {cc.Node} arg0
 */
setTarget : function (
node 
)
{
},

/**
 * @method isDone
 * @return {bool}
 */
isDone : function (
)
{
    return false;
},

/**
 * @method reverse
 * @return {cc.Action}
 */
reverse : function (
)
{
    return cc.Action;
},

};

/**
 * @class FiniteTimeAction
 */
cc.FiniteTimeAction = {

/**
 * @method setDuration
 * @param {float} arg0
 */
setDuration : function (
float 
)
{
},

/**
 * @method getDuration
 * @return {float}
 */
getDuration : function (
)
{
    return 0;
},

};

/**
 * @class Speed
 */
cc.Speed = {

/**
 * @method setInnerAction
 * @param {cc.ActionInterval} arg0
 */
setInnerAction : function (
actioninterval 
)
{
},

/**
 * @method setSpeed
 * @param {float} arg0
 */
setSpeed : function (
float 
)
{
},

/**
 * @method getInnerAction
 * @return {cc.ActionInterval}
 */
getInnerAction : function (
)
{
    return cc.ActionInterval;
},

/**
 * @method getSpeed
 * @return {float}
 */
getSpeed : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @param {float} arg1
 * @return {cc.Speed}
 */
create : function (
actioninterval, 
float 
)
{
    return cc.Speed;
},

};

/**
 * @class Follow
 */
cc.Follow = {

/**
 * @method setBoudarySet
 * @param {bool} arg0
 */
setBoudarySet : function (
bool 
)
{
},

/**
 * @method isBoundarySet
 * @return {bool}
 */
isBoundarySet : function (
)
{
    return false;
},

/**
 * @method create
 * @param {cc.Node} arg0
 * @param {RectObject} arg1
 * @return {cc.Follow}
 */
create : function (
node, 
rect 
)
{
    return cc.Follow;
},

};

/**
 * @class GLProgram
 */
cc.GLProgram = {

/**
 * @method getFragmentShaderLog
 * @return {String}
 */
getFragmentShaderLog : function (
)
{
    return ;
},

/**
 * @method initWithByteArrays
 * @param {char*} arg0
 * @param {char*} arg1
 * @return {bool}
 */
initWithByteArrays : function (
char, 
char 
)
{
    return false;
},

/**
 * @method bindAttribLocation
 * @param {char*} arg0
 * @param {unsigned int} arg1
 */
bindAttribLocation : function (
char, 
int 
)
{
},

/**
 * @method setUniformLocationWithMatrix4fv
 * @param {int} arg0
 * @param {float*} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWithMatrix4fv : function (
int, 
float, 
int 
)
{
},

/**
 * @method initWithFilenames
 * @param {String} arg0
 * @param {String} arg1
 * @return {bool}
 */
initWithFilenames : function (
str, 
str 
)
{
    return false;
},

/**
 * @method getUniformLocationForName
 * @param {char*} arg0
 * @return {int}
 */
getUniformLocationForName : function (
char 
)
{
    return 0;
},

/**
 * @method use
 */
use : function (
)
{
},

/**
 * @method getVertexShaderLog
 * @return {String}
 */
getVertexShaderLog : function (
)
{
    return ;
},

/**
 * @method setUniformsForBuiltins
* @param {kmMat4} kmmat4
*/
setUniformsForBuiltins : function(
kmmat4 
)
{
},

/**
 * @method setUniformLocationWith3i
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 */
setUniformLocationWith3i : function (
int, 
int, 
int, 
int 
)
{
},

/**
 * @method setUniformLocationWith3iv
 * @param {int} arg0
 * @param {int*} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWith3iv : function (
int, 
int, 
int 
)
{
},

/**
 * @method updateUniforms
 */
updateUniforms : function (
)
{
},

/**
 * @method setUniformLocationWith4iv
 * @param {int} arg0
 * @param {int*} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWith4iv : function (
int, 
int, 
int 
)
{
},

/**
 * @method getUniformLocation
 * @param {char*} arg0
 * @return {int}
 */
getUniformLocation : function (
char 
)
{
    return 0;
},

/**
 * @method setUniformLocationWith1i
 * @param {int} arg0
 * @param {int} arg1
 */
setUniformLocationWith1i : function (
int, 
int 
)
{
},

/**
 * @method setUniformLocationWith2iv
 * @param {int} arg0
 * @param {int*} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWith2iv : function (
int, 
int, 
int 
)
{
},

/**
 * @method setUniformLocationWithMatrix3fv
 * @param {int} arg0
 * @param {float*} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWithMatrix3fv : function (
int, 
float, 
int 
)
{
},

/**
 * @method reset
 */
reset : function (
)
{
},

/**
 * @method getAttribLocation
 * @param {char*} arg0
 * @return {int}
 */
getAttribLocation : function (
char 
)
{
    return 0;
},

/**
 * @method setUniformLocationWithMatrix2fv
 * @param {int} arg0
 * @param {float*} arg1
 * @param {unsigned int} arg2
 */
setUniformLocationWithMatrix2fv : function (
int, 
float, 
int 
)
{
},

/**
 * @method setUniformLocationWith4i
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @param {int} arg4
 */
setUniformLocationWith4i : function (
int, 
int, 
int, 
int, 
int 
)
{
},

/**
 * @method link
 * @return {bool}
 */
link : function (
)
{
    return false;
},

/**
 * @method setUniformLocationWith2i
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 */
setUniformLocationWith2i : function (
int, 
int, 
int 
)
{
},

/**
 * @method GLProgram
 * @constructor
 */
GLProgram : function (
)
{
},

};

/**
 * @class Touch
 */
cc.Touch = {

/**
 * @method getPreviousLocationInView
 * @return {PointObject}
 */
getPreviousLocationInView : function (
)
{
    return cc.Point;
},

/**
 * @method getLocation
 * @return {PointObject}
 */
getLocation : function (
)
{
    return cc.Point;
},

/**
 * @method getDelta
 * @return {PointObject}
 */
getDelta : function (
)
{
    return cc.Point;
},

/**
 * @method getStartLocationInView
 * @return {PointObject}
 */
getStartLocationInView : function (
)
{
    return cc.Point;
},

/**
 * @method getStartLocation
 * @return {PointObject}
 */
getStartLocation : function (
)
{
    return cc.Point;
},

/**
 * @method getID
 * @return {int}
 */
getID : function (
)
{
    return 0;
},

/**
 * @method setTouchInfo
 * @param {int} arg0
 * @param {float} arg1
 * @param {float} arg2
 */
setTouchInfo : function (
int, 
float, 
float 
)
{
},

/**
 * @method getLocationInView
 * @return {PointObject}
 */
getLocationInView : function (
)
{
    return cc.Point;
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
 * @method Touch
 * @constructor
 */
Touch : function (
)
{
},

};

/**
 * @class Event
 */
cc.Event = {

/**
 * @method isStopped
 * @return {bool}
 */
isStopped : function (
)
{
    return false;
},

/**
 * @method getType
 * @return {cc.Event::Type}
 */
getType : function (
)
{
    return 0;
},

/**
 * @method getCurrentTarget
 * @return {cc.Node}
 */
getCurrentTarget : function (
)
{
    return cc.Node;
},

/**
 * @method stopPropagation
 */
stopPropagation : function (
)
{
},

};

/**
 * @class EventTouch
 */
cc.EventTouch = {

/**
 * @method getEventCode
 * @return {cc.EventTouch::EventCode}
 */
getEventCode : function (
)
{
    return 0;
},

/**
 * @method setEventCode
 * @param {cc.EventTouch::EventCode} arg0
 */
setEventCode : function (
eventcode 
)
{
},

/**
 * @method EventTouch
 * @constructor
 */
EventTouch : function (
)
{
},

};

/**
 * @class EventKeyboard
 */
cc.EventKeyboard = {

/**
 * @method EventKeyboard
 * @constructor
 * @param {cc.EventKeyboard::KeyCode} arg0
 * @param {bool} arg1
 */
EventKeyboard : function (
keycode, 
bool 
)
{
},

};

/**
 * @class Texture2D
 */
cc.Texture2D = {

/**
 * @method getShaderProgram
 * @return {cc.GLProgram}
 */
getShaderProgram : function (
)
{
    return cc.GLProgram;
},

/**
 * @method getMaxT
 * @return {float}
 */
getMaxT : function (
)
{
    return 0;
},

/**
 * @method getStringForFormat
 * @return {char*}
 */
getStringForFormat : function (
)
{
    return 0;
},

/**
 * @method initWithImage
* @param {cc.Image|cc.Image} image
* @param {cc.Texture2D::PixelFormat} pixelformat
* @return {bool|bool}
*/
initWithImage : function(
image,
pixelformat 
)
{
    return false;
},

/**
 * @method setShaderProgram
 * @param {cc.GLProgram} arg0
 */
setShaderProgram : function (
glprogram 
)
{
},

/**
 * @method getMaxS
 * @return {float}
 */
getMaxS : function (
)
{
    return 0;
},

/**
 * @method hasPremultipliedAlpha
 * @return {bool}
 */
hasPremultipliedAlpha : function (
)
{
    return false;
},

/**
 * @method initWithMipmaps
 * @param {cc._MipmapInfo} arg0
 * @param {int} arg1
 * @param {cc.Texture2D::PixelFormat} arg2
 * @param {int} arg3
 * @param {int} arg4
 * @return {bool}
 */
initWithMipmaps : function (
map, 
int, 
pixelformat, 
int, 
int 
)
{
    return false;
},

/**
 * @method getPixelsHigh
 * @return {int}
 */
getPixelsHigh : function (
)
{
    return 0;
},

/**
 * @method getBitsPerPixelForFormat
* @param {cc.Texture2D::PixelFormat} pixelformat
* @return {unsigned int|unsigned int}
*/
getBitsPerPixelForFormat : function(
pixelformat 
)
{
    return 0;
},

/**
 * @method getName
 * @return {unsigned int}
 */
getName : function (
)
{
    return 0;
},

/**
 * @method initWithString
* @param {char*|char*} char
* @param {cc.FontDefinition|char*} fontdefinition
* @param {float} float
* @param {SizeObject} size
* @param {cc.TextHAlignment} texthalignment
* @param {cc.TextVAlignment} textvalignment
* @return {bool|bool}
*/
initWithString : function(
char,
char,
float,
size,
texthalignment,
textvalignment 
)
{
    return false;
},

/**
 * @method setMaxT
 * @param {float} arg0
 */
setMaxT : function (
float 
)
{
},

/**
 * @method drawInRect
 * @param {RectObject} arg0
 */
drawInRect : function (
rect 
)
{
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
 * @method setAliasTexParameters
 */
setAliasTexParameters : function (
)
{
},

/**
 * @method setAntiAliasTexParameters
 */
setAntiAliasTexParameters : function (
)
{
},

/**
 * @method generateMipmap
 */
generateMipmap : function (
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method getPixelFormat
 * @return {cc.Texture2D::PixelFormat}
 */
getPixelFormat : function (
)
{
    return 0;
},

/**
 * @method getContentSizeInPixels
 * @return {SizeObject}
 */
getContentSizeInPixels : function (
)
{
    return cc.Size;
},

/**
 * @method getPixelsWide
 * @return {int}
 */
getPixelsWide : function (
)
{
    return 0;
},

/**
 * @method drawAtPoint
 * @param {PointObject} arg0
 */
drawAtPoint : function (
point 
)
{
},

/**
 * @method hasMipmaps
 * @return {bool}
 */
hasMipmaps : function (
)
{
    return false;
},

/**
 * @method setMaxS
 * @param {float} arg0
 */
setMaxS : function (
float 
)
{
},

/**
 * @method setDefaultAlphaPixelFormat
 * @param {cc.Texture2D::PixelFormat} arg0
 */
setDefaultAlphaPixelFormat : function (
pixelformat 
)
{
},

/**
 * @method getDefaultAlphaPixelFormat
 * @return {cc.Texture2D::PixelFormat}
 */
getDefaultAlphaPixelFormat : function (
)
{
    return 0;
},

/**
 * @method PVRImagesHavePremultipliedAlpha
 * @param {bool} arg0
 */
PVRImagesHavePremultipliedAlpha : function (
bool 
)
{
},

/**
 * @method Texture2D
 * @constructor
 */
Texture2D : function (
)
{
},

};

/**
 * @class EventListener
 */
cc.EventListener = {

/**
 * @method clone
 * @return {cc.EventListener}
 */
clone : function (
)
{
    return cc.EventListener;
},

/**
 * @method checkAvailable
 * @return {bool}
 */
checkAvailable : function (
)
{
    return false;
},

};

/**
 * @class EventDispatcher
 */
cc.EventDispatcher = {

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
 * @method removeAllEventListeners
 */
removeAllEventListeners : function (
)
{
},

/**
 * @method addEventListenerWithSceneGraphPriority
 * @param {cc.EventListener} arg0
 * @param {cc.Node} arg1
 */
addEventListenerWithSceneGraphPriority : function (
eventlistener, 
node 
)
{
},

/**
 * @method addCustomEventListener
 * @param {String} arg0
 * @param {function} arg1
 * @return {cc.EventListenerCustom}
 */
addCustomEventListener : function (
str, 
func 
)
{
    return cc.EventListenerCustom;
},

/**
 * @method addEventListenerWithFixedPriority
 * @param {cc.EventListener} arg0
 * @param {int} arg1
 */
addEventListenerWithFixedPriority : function (
eventlistener, 
int 
)
{
},

/**
 * @method removeEventListenersForTarget
* @param {cc.Node|cc.EventListener::Type} node
* @param {bool} bool
*/
removeEventListenersForTarget : function(
node,
bool 
)
{
},

/**
 * @method resumeEventListenersForTarget
 * @param {cc.Node} arg0
 * @param {bool} arg1
 */
resumeEventListenersForTarget : function (
node, 
bool 
)
{
},

/**
 * @method setPriority
 * @param {cc.EventListener} arg0
 * @param {int} arg1
 */
setPriority : function (
eventlistener, 
int 
)
{
},

/**
 * @method dispatchEvent
 * @param {cc.Event} arg0
 */
dispatchEvent : function (
event 
)
{
},

/**
 * @method pauseEventListenersForTarget
 * @param {cc.Node} arg0
 * @param {bool} arg1
 */
pauseEventListenersForTarget : function (
node, 
bool 
)
{
},

/**
 * @method removeCustomEventListeners
 * @param {String} arg0
 */
removeCustomEventListeners : function (
str 
)
{
},

/**
 * @method removeEventListener
 * @param {cc.EventListener} arg0
 */
removeEventListener : function (
eventlistener 
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
 * @method EventDispatcher
 * @constructor
 */
EventDispatcher : function (
)
{
},

};

/**
 * @class Node
 */
cc.Node = {

/**
 * @method addChild
* @param {cc.Node|cc.Node|cc.Node} node
* @param {int|int} int
* @param {int} int
*/
addChild : function(
node,
int,
int 
)
{
},

/**
 * @method removeComponent
 * @param {String} arg0
 * @return {bool}
 */
removeComponent : function (
str 
)
{
    return false;
},

/**
 * @method setPhysicsBody
 * @param {cc.PhysicsBody} arg0
 */
setPhysicsBody : function (
physicsbody 
)
{
},

/**
 * @method getShaderProgram
* @return {cc.GLProgram|cc.GLProgram}
*/
getShaderProgram : function(
)
{
    return cc.GLProgram;
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method setRotationSkewY
 * @param {float} arg0
 */
setRotationSkewY : function (
float 
)
{
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method setCascadeOpacityEnabled
 * @param {bool} arg0
 */
setCascadeOpacityEnabled : function (
bool 
)
{
},

/**
 * @method getChildren
* @return {Array|Array}
*/
getChildren : function(
)
{
    return new Array();
},

/**
 * @method pause
 */
pause : function (
)
{
},

/**
 * @method convertToWorldSpaceAR
 * @param {PointObject} arg0
 * @return {PointObject}
 */
convertToWorldSpaceAR : function (
point 
)
{
    return cc.Point;
},

/**
 * @method isIgnoreAnchorPointForPosition
 * @return {bool}
 */
isIgnoreAnchorPointForPosition : function (
)
{
    return false;
},

/**
 * @method getChildByName
 * @param {String} arg0
 * @return {cc.Node}
 */
getChildByName : function (
str 
)
{
    return cc.Node;
},

/**
 * @method updateDisplayedOpacity
 * @param {unsigned char} arg0
 */
updateDisplayedOpacity : function (
char 
)
{
},

/**
 * @method setRotation
 * @param {float} arg0
 */
setRotation : function (
float 
)
{
},

/**
 * @method setScaleZ
 * @param {float} arg0
 */
setScaleZ : function (
float 
)
{
},

/**
 * @method enumerateChildrenByName
 * @param {String} arg0
 * @param {function} arg1
 */
enumerateChildrenByName : function (
str, 
func 
)
{
},

/**
 * @method setScaleX
 * @param {float} arg0
 */
setScaleX : function (
float 
)
{
},

/**
 * @method setRotationSkewX
 * @param {float} arg0
 */
setRotationSkewX : function (
float 
)
{
},

/**
 * @method removeAllComponents
 */
removeAllComponents : function (
)
{
},

/**
 * @method _setLocalZOrder
 * @param {int} arg0
 */
_setLocalZOrder : function (
int 
)
{
},

/**
 * @method getTag
 * @return {int}
 */
getTag : function (
)
{
    return 0;
},

/**
 * @method getNodeToWorldAffineTransform
 * @return {cc.AffineTransform}
 */
getNodeToWorldAffineTransform : function (
)
{
    return cc.AffineTransform;
},

/**
 * @method getNodeToWorldTransform
 * @return {kmMat4}
 */
getNodeToWorldTransform : function (
)
{
    return kmMat4;
},

/**
 * @method getPosition3D
 * @return {cc.Vertex3F}
 */
getPosition3D : function (
)
{
    return cc.Vertex3F;
},

/**
 * @method removeChild
 * @param {cc.Node} arg0
 * @param {bool} arg1
 */
removeChild : function (
node, 
bool 
)
{
},

/**
 * @method convertToWorldSpace
 * @param {PointObject} arg0
 * @return {PointObject}
 */
convertToWorldSpace : function (
point 
)
{
    return cc.Point;
},

/**
 * @method getScene
 * @return {cc.Scene}
 */
getScene : function (
)
{
    return cc.Scene;
},

/**
 * @method getEventDispatcher
 * @return {cc.EventDispatcher}
 */
getEventDispatcher : function (
)
{
    return cc.EventDispatcher;
},

/**
 * @method setSkewX
 * @param {float} arg0
 */
setSkewX : function (
float 
)
{
},

/**
 * @method setSkewY
 * @param {float} arg0
 */
setSkewY : function (
float 
)
{
},

/**
 * @method getOpacity
 * @return {unsigned char}
 */
getOpacity : function (
)
{
    return 0;
},

/**
 * @method convertTouchToNodeSpace
 * @param {cc.Touch} arg0
 * @return {PointObject}
 */
convertTouchToNodeSpace : function (
touch 
)
{
    return cc.Point;
},

/**
 * @method removeAllChildrenWithCleanup
* @param {bool} bool
*/
removeAllChildrenWithCleanup : function(
bool 
)
{
},

/**
 * @method getNodeToParentAffineTransform
 * @return {cc.AffineTransform}
 */
getNodeToParentAffineTransform : function (
)
{
    return cc.AffineTransform;
},

/**
 * @method isCascadeOpacityEnabled
 * @return {bool}
 */
isCascadeOpacityEnabled : function (
)
{
    return false;
},

/**
 * @method setParent
 * @param {cc.Node} arg0
 */
setParent : function (
node 
)
{
},

/**
 * @method getName
 * @return {String}
 */
getName : function (
)
{
    return ;
},

/**
 * @method getRotation3D
 * @return {cc.Vertex3F}
 */
getRotation3D : function (
)
{
    return cc.Vertex3F;
},

/**
 * @method getNodeToParentTransform
 * @return {kmMat4}
 */
getNodeToParentTransform : function (
)
{
    return kmMat4;
},

/**
 * @method convertTouchToNodeSpaceAR
 * @param {cc.Touch} arg0
 * @return {PointObject}
 */
convertTouchToNodeSpaceAR : function (
touch 
)
{
    return cc.Point;
},

/**
 * @method convertToNodeSpace
 * @param {PointObject} arg0
 * @return {PointObject}
 */
convertToNodeSpace : function (
point 
)
{
    return cc.Point;
},

/**
 * @method resume
 */
resume : function (
)
{
},

/**
 * @method getPhysicsBody
 * @return {cc.PhysicsBody}
 */
getPhysicsBody : function (
)
{
    return cc.PhysicsBody;
},

/**
 * @method stopActionByTag
 * @param {int} arg0
 */
stopActionByTag : function (
int 
)
{
},

/**
 * @method reorderChild
 * @param {cc.Node} arg0
 * @param {int} arg1
 */
reorderChild : function (
node, 
int 
)
{
},

/**
 * @method ignoreAnchorPointForPosition
 * @param {bool} arg0
 */
ignoreAnchorPointForPosition : function (
bool 
)
{
},

/**
 * @method setRotation3D
 * @param {cc.Vertex3F} arg0
 */
setRotation3D : function (
vertex3f 
)
{
},

/**
 * @method setPositionX
 * @param {float} arg0
 */
setPositionX : function (
float 
)
{
},

/**
 * @method setNodeToParentTransform
 * @param {kmMat4} arg0
 */
setNodeToParentTransform : function (
kmmat4 
)
{
},

/**
 * @method getAnchorPoint
 * @return {PointObject}
 */
getAnchorPoint : function (
)
{
    return cc.Point;
},

/**
 * @method getNumberOfRunningActions
 * @return {long}
 */
getNumberOfRunningActions : function (
)
{
    return 0;
},

/**
 * @method updateTransform
 */
updateTransform : function (
)
{
},

/**
 * @method isVisible
 * @return {bool}
 */
isVisible : function (
)
{
    return false;
},

/**
 * @method getChildrenCount
 * @return {long}
 */
getChildrenCount : function (
)
{
    return 0;
},

/**
 * @method convertToNodeSpaceAR
 * @param {PointObject} arg0
 * @return {PointObject}
 */
convertToNodeSpaceAR : function (
point 
)
{
    return cc.Point;
},

/**
 * @method addComponent
 * @param {cc.Component} arg0
 * @return {bool}
 */
addComponent : function (
component 
)
{
    return false;
},

/**
 * @method runAction
 * @param {cc.Action} arg0
 * @return {cc.Action}
 */
runAction : function (
action 
)
{
    return cc.Action;
},

/**
 * @method setShaderProgram
 * @param {cc.GLProgram} arg0
 */
setShaderProgram : function (
glprogram 
)
{
},

/**
 * @method getRotation
 * @return {float}
 */
getRotation : function (
)
{
    return 0;
},

/**
 * @method getAnchorPointInPoints
 * @return {PointObject}
 */
getAnchorPointInPoints : function (
)
{
    return cc.Point;
},

/**
 * @method visit
* @param {cc.Renderer} renderer
* @param {kmMat4} kmmat4
* @param {bool} bool
*/
visit : function(
renderer,
kmmat4,
bool 
)
{
},

/**
 * @method setPositionZ
 * @param {float} arg0
 */
setPositionZ : function (
float 
)
{
},

/**
 * @method setScheduler
 * @param {cc.Scheduler} arg0
 */
setScheduler : function (
scheduler 
)
{
},

/**
 * @method stopAllActions
 */
stopAllActions : function (
)
{
},

/**
 * @method getSkewX
 * @return {float}
 */
getSkewX : function (
)
{
    return 0;
},

/**
 * @method getSkewY
 * @return {float}
 */
getSkewY : function (
)
{
    return 0;
},

/**
 * @method getDisplayedColor
 * @return {Color3BObject}
 */
getDisplayedColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method getActionByTag
 * @param {int} arg0
 * @return {cc.Action}
 */
getActionByTag : function (
int 
)
{
    return cc.Action;
},

/**
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
)
{
},

/**
 * @method setAdditionalTransform
* @param {cc.AffineTransform|kmMat4*} affinetransform
*/
setAdditionalTransform : function(
kmmat4 
)
{
},

/**
 * @method getDisplayedOpacity
 * @return {unsigned char}
 */
getDisplayedOpacity : function (
)
{
    return 0;
},

/**
 * @method getLocalZOrder
 * @return {int}
 */
getLocalZOrder : function (
)
{
    return 0;
},

/**
 * @method getScheduler
* @return {cc.Scheduler|cc.Scheduler}
*/
getScheduler : function(
)
{
    return cc.Scheduler;
},

/**
 * @method getParentToNodeAffineTransform
 * @return {cc.AffineTransform}
 */
getParentToNodeAffineTransform : function (
)
{
    return cc.AffineTransform;
},

/**
 * @method getOrderOfArrival
 * @return {int}
 */
getOrderOfArrival : function (
)
{
    return 0;
},

/**
 * @method setActionManager
 * @param {cc.ActionManager} arg0
 */
setActionManager : function (
actionmanager 
)
{
},

/**
 * @method getPosition
* @param {float*} float
* @param {float*} float
* @return {PointObject}
*/
getPosition : function(
float,
float 
)
{
},

/**
 * @method isRunning
 * @return {bool}
 */
isRunning : function (
)
{
    return false;
},

/**
 * @method getParent
* @return {cc.Node|cc.Node}
*/
getParent : function(
)
{
    return cc.Node;
},

/**
 * @method getPositionY
 * @return {float}
 */
getPositionY : function (
)
{
    return 0;
},

/**
 * @method getPositionX
 * @return {float}
 */
getPositionX : function (
)
{
    return 0;
},

/**
 * @method removeChildByTag
 * @param {int} arg0
 * @param {bool} arg1
 */
removeChildByTag : function (
int, 
bool 
)
{
},

/**
 * @method setPositionY
 * @param {float} arg0
 */
setPositionY : function (
float 
)
{
},

/**
 * @method updateDisplayedColor
 * @param {Color3BObject} arg0
 */
updateDisplayedColor : function (
color3b 
)
{
},

/**
 * @method setVisible
 * @param {bool} arg0
 */
setVisible : function (
bool 
)
{
},

/**
 * @method getParentToNodeTransform
 * @return {kmMat4}
 */
getParentToNodeTransform : function (
)
{
    return kmMat4;
},

/**
 * @method getPositionZ
 * @return {float}
 */
getPositionZ : function (
)
{
    return 0;
},

/**
 * @method setGlobalZOrder
 * @param {float} arg0
 */
setGlobalZOrder : function (
float 
)
{
},

/**
 * @method setScaleY
 * @param {float} arg0
 */
setScaleY : function (
float 
)
{
},

/**
 * @method setScale
* @param {float|float} float
* @param {float} float
*/
setScale : function(
float,
float 
)
{
},

/**
 * @method getChildByTag
 * @param {int} arg0
 * @return {cc.Node}
 */
getChildByTag : function (
int 
)
{
    return cc.Node;
},

/**
 * @method setOrderOfArrival
 * @param {int} arg0
 */
setOrderOfArrival : function (
int 
)
{
},

/**
 * @method getScaleZ
 * @return {float}
 */
getScaleZ : function (
)
{
    return 0;
},

/**
 * @method getScaleY
 * @return {float}
 */
getScaleY : function (
)
{
    return 0;
},

/**
 * @method getScaleX
 * @return {float}
 */
getScaleX : function (
)
{
    return 0;
},

/**
 * @method setLocalZOrder
 * @param {int} arg0
 */
setLocalZOrder : function (
int 
)
{
},

/**
 * @method getWorldToNodeAffineTransform
 * @return {cc.AffineTransform}
 */
getWorldToNodeAffineTransform : function (
)
{
    return cc.AffineTransform;
},

/**
 * @method setCascadeColorEnabled
 * @param {bool} arg0
 */
setCascadeColorEnabled : function (
bool 
)
{
},

/**
 * @method setOpacity
 * @param {unsigned char} arg0
 */
setOpacity : function (
char 
)
{
},

/**
 * @method cleanup
 */
cleanup : function (
)
{
},

/**
 * @method getComponent
 * @param {String} arg0
 * @return {cc.Component}
 */
getComponent : function (
str 
)
{
    return cc.Component;
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
 * @method getColor
 * @return {Color3BObject}
 */
getColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method getBoundingBox
 * @return {RectObject}
 */
getBoundingBox : function (
)
{
    return cc.Rect;
},

/**
 * @method setEventDispatcher
 * @param {cc.EventDispatcher} arg0
 */
setEventDispatcher : function (
eventdispatcher 
)
{
},

/**
 * @method getGlobalZOrder
 * @return {float}
 */
getGlobalZOrder : function (
)
{
    return 0;
},

/**
 * @method draw
* @param {cc.Renderer} renderer
* @param {kmMat4} kmmat4
* @param {bool} bool
*/
draw : function(
renderer,
kmmat4,
bool 
)
{
},

/**
 * @method setUserObject
 * @param {cc.Ref} arg0
 */
setUserObject : function (
ref 
)
{
},

/**
 * @method removeFromParentAndCleanup
* @param {bool} bool
*/
removeFromParentAndCleanup : function(
bool 
)
{
},

/**
 * @method setPosition3D
 * @param {cc.Vertex3F} arg0
 */
setPosition3D : function (
vertex3f 
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
 * @method sortAllChildren
 */
sortAllChildren : function (
)
{
},

/**
 * @method getWorldToNodeTransform
 * @return {kmMat4}
 */
getWorldToNodeTransform : function (
)
{
    return kmMat4;
},

/**
 * @method getScale
 * @return {float}
 */
getScale : function (
)
{
    return 0;
},

/**
 * @method getRotationSkewX
 * @return {float}
 */
getRotationSkewX : function (
)
{
    return 0;
},

/**
 * @method getRotationSkewY
 * @return {float}
 */
getRotationSkewY : function (
)
{
    return 0;
},

/**
 * @method setTag
 * @param {int} arg0
 */
setTag : function (
int 
)
{
},

/**
 * @method isCascadeColorEnabled
 * @return {bool}
 */
isCascadeColorEnabled : function (
)
{
    return false;
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method stopAction
 * @param {cc.Action} arg0
 */
stopAction : function (
action 
)
{
},

/**
 * @method getActionManager
* @return {cc.ActionManager|cc.ActionManager}
*/
getActionManager : function(
)
{
    return cc.ActionManager;
},

/**
 * @method create
 * @return {cc.Node}
 */
create : function (
)
{
    return cc.Node;
},

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
 * @return {cc.SpriteFrame}
 */
clone : function (
)
{
    return cc.SpriteFrame;
},

/**
 * @method setRotated
 * @param {bool} arg0
 */
setRotated : function (
bool 
)
{
},

/**
 * @method setTexture
 * @param {cc.Texture2D} arg0
 */
setTexture : function (
texture2d 
)
{
},

/**
 * @method initWithTexture
* @param {cc.Texture2D|cc.Texture2D} texture2d
* @param {RectObject|RectObject} rect
* @param {bool} bool
* @param {PointObject} point
* @param {SizeObject} size
* @return {bool|bool}
*/
initWithTexture : function(
texture2d,
rect,
bool,
point,
size 
)
{
    return false;
},

/**
 * @method setRectInPixels
 * @param {RectObject} arg0
 */
setRectInPixels : function (
rect 
)
{
},

/**
 * @method getTexture
 * @return {cc.Texture2D}
 */
getTexture : function (
)
{
    return cc.Texture2D;
},

/**
 * @method getRect
 * @return {RectObject}
 */
getRect : function (
)
{
    return cc.Rect;
},

/**
 * @method setOffsetInPixels
 * @param {PointObject} arg0
 */
setOffsetInPixels : function (
point 
)
{
},

/**
 * @method getRectInPixels
 * @return {RectObject}
 */
getRectInPixels : function (
)
{
    return cc.Rect;
},

/**
 * @method setOriginalSize
 * @param {SizeObject} arg0
 */
setOriginalSize : function (
size 
)
{
},

/**
 * @method getOriginalSizeInPixels
 * @return {SizeObject}
 */
getOriginalSizeInPixels : function (
)
{
    return cc.Size;
},

/**
 * @method setOriginalSizeInPixels
 * @param {SizeObject} arg0
 */
setOriginalSizeInPixels : function (
size 
)
{
},

/**
 * @method setOffset
 * @param {PointObject} arg0
 */
setOffset : function (
point 
)
{
},

/**
 * @method getOffset
 * @return {PointObject}
 */
getOffset : function (
)
{
    return cc.Point;
},

/**
 * @method isRotated
 * @return {bool}
 */
isRotated : function (
)
{
    return false;
},

/**
 * @method initWithTextureFilename
* @param {String|String} str
* @param {RectObject|RectObject} rect
* @param {bool} bool
* @param {PointObject} point
* @param {SizeObject} size
* @return {bool|bool}
*/
initWithTextureFilename : function(
str,
rect,
bool,
point,
size 
)
{
    return false;
},

/**
 * @method setRect
 * @param {RectObject} arg0
 */
setRect : function (
rect 
)
{
},

/**
 * @method getOffsetInPixels
 * @return {PointObject}
 */
getOffsetInPixels : function (
)
{
    return cc.Point;
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
 * @method create
* @param {String|String} str
* @param {RectObject|RectObject} rect
* @param {bool} bool
* @param {PointObject} point
* @param {SizeObject} size
* @return {cc.SpriteFrame|cc.SpriteFrame}
*/
create : function(
str,
rect,
bool,
point,
size 
)
{
    return cc.SpriteFrame;
},

/**
 * @method createWithTexture
* @param {cc.Texture2D|cc.Texture2D} texture2d
* @param {RectObject|RectObject} rect
* @param {bool} bool
* @param {PointObject} point
* @param {SizeObject} size
* @return {cc.SpriteFrame|cc.SpriteFrame}
*/
createWithTexture : function(
texture2d,
rect,
bool,
point,
size 
)
{
    return cc.SpriteFrame;
},

};

/**
 * @class AnimationFrame
 */
cc.AnimationFrame = {

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
 * @method getUserInfo
* @return {MapObject|MapObject}
*/
getUserInfo : function(
)
{
    return map_object;
},

/**
 * @method setDelayUnits
 * @param {float} arg0
 */
setDelayUnits : function (
float 
)
{
},

/**
 * @method clone
 * @return {cc.AnimationFrame}
 */
clone : function (
)
{
    return cc.AnimationFrame;
},

/**
 * @method getSpriteFrame
 * @return {cc.SpriteFrame}
 */
getSpriteFrame : function (
)
{
    return cc.SpriteFrame;
},

/**
 * @method getDelayUnits
 * @return {float}
 */
getDelayUnits : function (
)
{
    return 0;
},

/**
 * @method setUserInfo
 * @param {MapObject} arg0
 */
setUserInfo : function (
map 
)
{
},

/**
 * @method create
 * @param {cc.SpriteFrame} arg0
 * @param {float} arg1
 * @param {MapObject} arg2
 * @return {cc.AnimationFrame}
 */
create : function (
spriteframe, 
float, 
map 
)
{
    return cc.AnimationFrame;
},

};

/**
 * @class Animation
 */
cc.Animation = {

/**
 * @method getLoops
 * @return {unsigned int}
 */
getLoops : function (
)
{
    return 0;
},

/**
 * @method addSpriteFrame
 * @param {cc.SpriteFrame} arg0
 */
addSpriteFrame : function (
spriteframe 
)
{
},

/**
 * @method setRestoreOriginalFrame
 * @param {bool} arg0
 */
setRestoreOriginalFrame : function (
bool 
)
{
},

/**
 * @method clone
 * @return {cc.Animation}
 */
clone : function (
)
{
    return cc.Animation;
},

/**
 * @method getDuration
 * @return {float}
 */
getDuration : function (
)
{
    return 0;
},

/**
 * @method setFrames
 * @param {Array} arg0
 */
setFrames : function (
array 
)
{
},

/**
 * @method getFrames
 * @return {Array}
 */
getFrames : function (
)
{
    return new Array();
},

/**
 * @method setLoops
 * @param {unsigned int} arg0
 */
setLoops : function (
int 
)
{
},

/**
 * @method setDelayPerUnit
 * @param {float} arg0
 */
setDelayPerUnit : function (
float 
)
{
},

/**
 * @method addSpriteFrameWithFile
 * @param {String} arg0
 */
addSpriteFrameWithFile : function (
str 
)
{
},

/**
 * @method getTotalDelayUnits
 * @return {float}
 */
getTotalDelayUnits : function (
)
{
    return 0;
},

/**
 * @method getDelayPerUnit
 * @return {float}
 */
getDelayPerUnit : function (
)
{
    return 0;
},

/**
 * @method getRestoreOriginalFrame
 * @return {bool}
 */
getRestoreOriginalFrame : function (
)
{
    return false;
},

/**
 * @method addSpriteFrameWithTexture
 * @param {cc.Texture2D} arg0
 * @param {RectObject} arg1
 */
addSpriteFrameWithTexture : function (
texture2d, 
rect 
)
{
},

};

/**
 * @class ActionInterval
 */
cc.ActionInterval = {

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method getElapsed
 * @return {float}
 */
getElapsed : function (
)
{
    return 0;
},

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
 * @param {cc.FiniteTimeAction} arg0
 */
setInnerAction : function (
finitetimeaction 
)
{
},

/**
 * @method getInnerAction
 * @return {cc.FiniteTimeAction}
 */
getInnerAction : function (
)
{
    return cc.FiniteTimeAction;
},

/**
 * @method create
 * @param {cc.FiniteTimeAction} arg0
 * @param {unsigned int} arg1
 * @return {cc.Repeat}
 */
create : function (
finitetimeaction, 
int 
)
{
    return cc.Repeat;
},

};

/**
 * @class RepeatForever
 */
cc.RepeatForever = {

/**
 * @method setInnerAction
 * @param {cc.ActionInterval} arg0
 */
setInnerAction : function (
actioninterval 
)
{
},

/**
 * @method getInnerAction
 * @return {cc.ActionInterval}
 */
getInnerAction : function (
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.RepeatForever}
 */
create : function (
actioninterval 
)
{
    return cc.RepeatForever;
},

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

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {cc.RotateTo|cc.RotateTo}
*/
create : function(
float,
float,
float 
)
{
    return cc.RotateTo;
},

};

/**
 * @class RotateBy
 */
cc.RotateBy = {

/**
 * @method create
* @param {float|float|float} float
* @param {float|float|cc.Vertex3F} float
* @param {float} float
* @return {cc.RotateBy|cc.RotateBy|cc.RotateBy}
*/
create : function(
float,
float,
float 
)
{
    return cc.RotateBy;
},

};

/**
 * @class MoveBy
 */
cc.MoveBy = {

/**
 * @method create
 * @param {float} arg0
 * @param {PointObject} arg1
 * @return {cc.MoveBy}
 */
create : function (
float, 
point 
)
{
    return cc.MoveBy;
},

};

/**
 * @class MoveTo
 */
cc.MoveTo = {

/**
 * @method create
 * @param {float} arg0
 * @param {PointObject} arg1
 * @return {cc.MoveTo}
 */
create : function (
float, 
point 
)
{
    return cc.MoveTo;
},

};

/**
 * @class SkewTo
 */
cc.SkewTo = {

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {cc.SkewTo}
 */
create : function (
float, 
float, 
float 
)
{
    return cc.SkewTo;
},

};

/**
 * @class SkewBy
 */
cc.SkewBy = {

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {cc.SkewBy}
 */
create : function (
float, 
float, 
float 
)
{
    return cc.SkewBy;
},

};

/**
 * @class JumpBy
 */
cc.JumpBy = {

/**
 * @method create
 * @param {float} arg0
 * @param {PointObject} arg1
 * @param {float} arg2
 * @param {int} arg3
 * @return {cc.JumpBy}
 */
create : function (
float, 
point, 
float, 
int 
)
{
    return cc.JumpBy;
},

};

/**
 * @class JumpTo
 */
cc.JumpTo = {

/**
 * @method create
 * @param {float} arg0
 * @param {PointObject} arg1
 * @param {float} arg2
 * @param {int} arg3
 * @return {cc.JumpTo}
 */
create : function (
float, 
point, 
float, 
int 
)
{
    return cc.JumpTo;
},

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

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {cc.ScaleTo|cc.ScaleTo}
*/
create : function(
float,
float,
float 
)
{
    return cc.ScaleTo;
},

};

/**
 * @class ScaleBy
 */
cc.ScaleBy = {

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float} float
* @return {cc.ScaleBy|cc.ScaleBy}
*/
create : function(
float,
float,
float 
)
{
    return cc.ScaleBy;
},

};

/**
 * @class Blink
 */
cc.Blink = {

/**
 * @method create
 * @param {float} arg0
 * @param {int} arg1
 * @return {cc.Blink}
 */
create : function (
float, 
int 
)
{
    return cc.Blink;
},

};

/**
 * @class FadeTo
 */
cc.FadeTo = {

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned char} arg1
 * @return {cc.FadeTo}
 */
create : function (
float, 
char 
)
{
    return cc.FadeTo;
},

};

/**
 * @class FadeIn
 */
cc.FadeIn = {

/**
 * @method setReverseAction
 * @param {cc.FadeTo} arg0
 */
setReverseAction : function (
fadeto 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @return {cc.FadeIn}
 */
create : function (
float 
)
{
    return cc.FadeIn;
},

};

/**
 * @class FadeOut
 */
cc.FadeOut = {

/**
 * @method setReverseAction
 * @param {cc.FadeTo} arg0
 */
setReverseAction : function (
fadeto 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @return {cc.FadeOut}
 */
create : function (
float 
)
{
    return cc.FadeOut;
},

};

/**
 * @class TintTo
 */
cc.TintTo = {

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned char} arg1
 * @param {unsigned char} arg2
 * @param {unsigned char} arg3
 * @return {cc.TintTo}
 */
create : function (
float, 
char, 
char, 
char 
)
{
    return cc.TintTo;
},

};

/**
 * @class TintBy
 */
cc.TintBy = {

/**
 * @method create
 * @param {float} arg0
 * @param {short} arg1
 * @param {short} arg2
 * @param {short} arg3
 * @return {cc.TintBy}
 */
create : function (
float, 
short, 
short, 
short 
)
{
    return cc.TintBy;
},

};

/**
 * @class DelayTime
 */
cc.DelayTime = {

/**
 * @method create
 * @param {float} arg0
 * @return {cc.DelayTime}
 */
create : function (
float 
)
{
    return cc.DelayTime;
},

};

/**
 * @class Animate
 */
cc.Animate = {

/**
 * @method getAnimation
* @return {cc.Animation|cc.Animation}
*/
getAnimation : function(
)
{
    return cc.Animation;
},

/**
 * @method setAnimation
 * @param {cc.Animation} arg0
 */
setAnimation : function (
animation 
)
{
},

/**
 * @method create
 * @param {cc.Animation} arg0
 * @return {cc.Animate}
 */
create : function (
animation 
)
{
    return cc.Animate;
},

};

/**
 * @class TargetedAction
 */
cc.TargetedAction = {

/**
 * @method getForcedTarget
* @return {cc.Node|cc.Node}
*/
getForcedTarget : function(
)
{
    return cc.Node;
},

/**
 * @method setForcedTarget
 * @param {cc.Node} arg0
 */
setForcedTarget : function (
node 
)
{
},

/**
 * @method create
 * @param {cc.Node} arg0
 * @param {cc.FiniteTimeAction} arg1
 * @return {cc.TargetedAction}
 */
create : function (
node, 
finitetimeaction 
)
{
    return cc.TargetedAction;
},

};

/**
 * @class ActionCamera
 */
cc.ActionCamera = {

/**
 * @method setEye
* @param {float|kmVec3} float
* @param {float} float
* @param {float} float
*/
setEye : function(
float,
float,
float 
)
{
},

/**
 * @method getEye
 * @return {kmVec3}
 */
getEye : function (
)
{
    return kmVec3;
},

/**
 * @method setUp
 * @param {kmVec3} arg0
 */
setUp : function (
kmvec3 
)
{
},

/**
 * @method getCenter
 * @return {kmVec3}
 */
getCenter : function (
)
{
    return kmVec3;
},

/**
 * @method setCenter
 * @param {kmVec3} arg0
 */
setCenter : function (
kmvec3 
)
{
},

/**
 * @method getUp
 * @return {kmVec3}
 */
getUp : function (
)
{
    return kmVec3;
},

/**
 * @method ActionCamera
 * @constructor
 */
ActionCamera : function (
)
{
},

};

/**
 * @class OrbitCamera
 */
cc.OrbitCamera = {

/**
 * @method sphericalRadius
 * @param {float*} arg0
 * @param {float*} arg1
 * @param {float*} arg2
 */
sphericalRadius : function (
float, 
float, 
float 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @param {float} arg4
 * @param {float} arg5
 * @param {float} arg6
 * @return {bool}
 */
initWithDuration : function (
float, 
float, 
float, 
float, 
float, 
float, 
float 
)
{
    return false;
},

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @param {float} arg4
 * @param {float} arg5
 * @param {float} arg6
 * @return {cc.OrbitCamera}
 */
create : function (
float, 
float, 
float, 
float, 
float, 
float, 
float 
)
{
    return cc.OrbitCamera;
},

/**
 * @method OrbitCamera
 * @constructor
 */
OrbitCamera : function (
)
{
},

};

/**
 * @class ActionManager
 */
cc.ActionManager = {

/**
 * @method getActionByTag
 * @param {int} arg0
 * @param {cc.Node} arg1
 * @return {cc.Action}
 */
getActionByTag : function (
int, 
node 
)
{
    return cc.Action;
},

/**
 * @method removeActionByTag
 * @param {int} arg0
 * @param {cc.Node} arg1
 */
removeActionByTag : function (
int, 
node 
)
{
},

/**
 * @method removeAllActions
 */
removeAllActions : function (
)
{
},

/**
 * @method addAction
 * @param {cc.Action} arg0
 * @param {cc.Node} arg1
 * @param {bool} arg2
 */
addAction : function (
action, 
node, 
bool 
)
{
},

/**
 * @method resumeTarget
 * @param {cc.Node} arg0
 */
resumeTarget : function (
node 
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
 * @method getNumberOfRunningActionsInTarget
 * @param {cc.Node} arg0
 * @return {long}
 */
getNumberOfRunningActionsInTarget : function (
node 
)
{
    return 0;
},

/**
 * @method removeAllActionsFromTarget
 * @param {cc.Node} arg0
 */
removeAllActionsFromTarget : function (
node 
)
{
},

/**
 * @method resumeTargets
 * @param {Array} arg0
 */
resumeTargets : function (
array 
)
{
},

/**
 * @method removeAction
 * @param {cc.Action} arg0
 */
removeAction : function (
action 
)
{
},

/**
 * @method pauseTarget
 * @param {cc.Node} arg0
 */
pauseTarget : function (
node 
)
{
},

/**
 * @method pauseAllRunningActions
 * @return {Array}
 */
pauseAllRunningActions : function (
)
{
    return new Array();
},

/**
 * @method ActionManager
 * @constructor
 */
ActionManager : function (
)
{
},

};

/**
 * @class ActionEase
 */
cc.ActionEase = {

/**
 * @method getInnerAction
 * @return {cc.ActionInterval}
 */
getInnerAction : function (
)
{
    return cc.ActionInterval;
},

};

/**
 * @class EaseRateAction
 */
cc.EaseRateAction = {

/**
 * @method setRate
 * @param {float} arg0
 */
setRate : function (
float 
)
{
},

/**
 * @method getRate
 * @return {float}
 */
getRate : function (
)
{
    return 0;
},

};

/**
 * @class EaseIn
 */
cc.EaseIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @param {float} arg1
 * @return {cc.EaseIn}
 */
create : function (
actioninterval, 
float 
)
{
    return cc.EaseIn;
},

};

/**
 * @class EaseOut
 */
cc.EaseOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @param {float} arg1
 * @return {cc.EaseOut}
 */
create : function (
actioninterval, 
float 
)
{
    return cc.EaseOut;
},

};

/**
 * @class EaseInOut
 */
cc.EaseInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @param {float} arg1
 * @return {cc.EaseInOut}
 */
create : function (
actioninterval, 
float 
)
{
    return cc.EaseInOut;
},

};

/**
 * @class EaseExponentialIn
 */
cc.EaseExponentialIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseExponentialIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseExponentialIn;
},

};

/**
 * @class EaseExponentialOut
 */
cc.EaseExponentialOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseExponentialOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseExponentialOut;
},

};

/**
 * @class EaseExponentialInOut
 */
cc.EaseExponentialInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseExponentialInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseExponentialInOut;
},

};

/**
 * @class EaseSineIn
 */
cc.EaseSineIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseSineIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseSineIn;
},

};

/**
 * @class EaseSineOut
 */
cc.EaseSineOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseSineOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseSineOut;
},

};

/**
 * @class EaseSineInOut
 */
cc.EaseSineInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseSineInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseSineInOut;
},

};

/**
 * @class EaseElastic
 */
cc.EaseElastic = {

/**
 * @method setPeriod
 * @param {float} arg0
 */
setPeriod : function (
float 
)
{
},

/**
 * @method getPeriod
 * @return {float}
 */
getPeriod : function (
)
{
    return 0;
},

};

/**
 * @class EaseElasticIn
 */
cc.EaseElasticIn = {

/**
 * @method create
* @param {cc.ActionInterval|cc.ActionInterval} actioninterval
* @param {float} float
* @return {cc.EaseElasticIn|cc.EaseElasticIn}
*/
create : function(
actioninterval,
float 
)
{
    return cc.EaseElasticIn;
},

};

/**
 * @class EaseElasticOut
 */
cc.EaseElasticOut = {

/**
 * @method create
* @param {cc.ActionInterval|cc.ActionInterval} actioninterval
* @param {float} float
* @return {cc.EaseElasticOut|cc.EaseElasticOut}
*/
create : function(
actioninterval,
float 
)
{
    return cc.EaseElasticOut;
},

};

/**
 * @class EaseElasticInOut
 */
cc.EaseElasticInOut = {

/**
 * @method create
* @param {cc.ActionInterval|cc.ActionInterval} actioninterval
* @param {float} float
* @return {cc.EaseElasticInOut|cc.EaseElasticInOut}
*/
create : function(
actioninterval,
float 
)
{
    return cc.EaseElasticInOut;
},

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
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseBounceIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseBounceIn;
},

};

/**
 * @class EaseBounceOut
 */
cc.EaseBounceOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseBounceOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseBounceOut;
},

};

/**
 * @class EaseBounceInOut
 */
cc.EaseBounceInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseBounceInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseBounceInOut;
},

};

/**
 * @class EaseBackIn
 */
cc.EaseBackIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseBackIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseBackIn;
},

};

/**
 * @class EaseBackOut
 */
cc.EaseBackOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseBackOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseBackOut;
},

};

/**
 * @class EaseBackInOut
 */
cc.EaseBackInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseBackInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseBackInOut;
},

};

/**
 * @class EaseBezierAction
 */
cc.EaseBezierAction = {

/**
 * @method setBezierParamer
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 */
setBezierParamer : function (
float, 
float, 
float, 
float 
)
{
},

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseBezierAction}
 */
create : function (
actioninterval 
)
{
    return cc.EaseBezierAction;
},

};

/**
 * @class EaseQuadraticActionIn
 */
cc.EaseQuadraticActionIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuadraticActionIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuadraticActionIn;
},

};

/**
 * @class EaseQuadraticActionOut
 */
cc.EaseQuadraticActionOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuadraticActionOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuadraticActionOut;
},

};

/**
 * @class EaseQuadraticActionInOut
 */
cc.EaseQuadraticActionInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuadraticActionInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuadraticActionInOut;
},

};

/**
 * @class EaseQuarticActionIn
 */
cc.EaseQuarticActionIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuarticActionIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuarticActionIn;
},

};

/**
 * @class EaseQuarticActionOut
 */
cc.EaseQuarticActionOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuarticActionOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuarticActionOut;
},

};

/**
 * @class EaseQuarticActionInOut
 */
cc.EaseQuarticActionInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuarticActionInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuarticActionInOut;
},

};

/**
 * @class EaseQuinticActionIn
 */
cc.EaseQuinticActionIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuinticActionIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuinticActionIn;
},

};

/**
 * @class EaseQuinticActionOut
 */
cc.EaseQuinticActionOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuinticActionOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuinticActionOut;
},

};

/**
 * @class EaseQuinticActionInOut
 */
cc.EaseQuinticActionInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseQuinticActionInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseQuinticActionInOut;
},

};

/**
 * @class EaseCircleActionIn
 */
cc.EaseCircleActionIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseCircleActionIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseCircleActionIn;
},

};

/**
 * @class EaseCircleActionOut
 */
cc.EaseCircleActionOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseCircleActionOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseCircleActionOut;
},

};

/**
 * @class EaseCircleActionInOut
 */
cc.EaseCircleActionInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseCircleActionInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseCircleActionInOut;
},

};

/**
 * @class EaseCubicActionIn
 */
cc.EaseCubicActionIn = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseCubicActionIn}
 */
create : function (
actioninterval 
)
{
    return cc.EaseCubicActionIn;
},

};

/**
 * @class EaseCubicActionOut
 */
cc.EaseCubicActionOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseCubicActionOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseCubicActionOut;
},

};

/**
 * @class EaseCubicActionInOut
 */
cc.EaseCubicActionInOut = {

/**
 * @method create
 * @param {cc.ActionInterval} arg0
 * @return {cc.EaseCubicActionInOut}
 */
create : function (
actioninterval 
)
{
    return cc.EaseCubicActionInOut;
},

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
 * @return {cc.Show}
 */
create : function (
)
{
    return cc.Show;
},

};

/**
 * @class Hide
 */
cc.Hide = {

/**
 * @method create
 * @return {cc.Hide}
 */
create : function (
)
{
    return cc.Hide;
},

};

/**
 * @class ToggleVisibility
 */
cc.ToggleVisibility = {

/**
 * @method create
 * @return {cc.ToggleVisibility}
 */
create : function (
)
{
    return cc.ToggleVisibility;
},

};

/**
 * @class RemoveSelf
 */
cc.RemoveSelf = {

/**
 * @method create
 * @return {cc.RemoveSelf}
 */
create : function (
)
{
    return cc.RemoveSelf;
},

};

/**
 * @class FlipX
 */
cc.FlipX = {

/**
 * @method create
 * @param {bool} arg0
 * @return {cc.FlipX}
 */
create : function (
bool 
)
{
    return cc.FlipX;
},

};

/**
 * @class FlipY
 */
cc.FlipY = {

/**
 * @method create
 * @param {bool} arg0
 * @return {cc.FlipY}
 */
create : function (
bool 
)
{
    return cc.FlipY;
},

};

/**
 * @class Place
 */
cc.Place = {

/**
 * @method create
 * @param {PointObject} arg0
 * @return {cc.Place}
 */
create : function (
point 
)
{
    return cc.Place;
},

};

/**
 * @class CallFunc
 */
cc.CallFunc = {

/**
 * @method execute
 */
execute : function (
)
{
},

};

/**
 * @class GridAction
 */
cc.GridAction = {

/**
 * @method getGrid
 * @return {cc.GridBase}
 */
getGrid : function (
)
{
    return cc.GridBase;
},

};

/**
 * @class Grid3DAction
 */
cc.Grid3DAction = {

/**
 * @method getGrid
 * @return {cc.GridBase}
 */
getGrid : function (
)
{
    return cc.GridBase;
},

};

/**
 * @class TiledGrid3DAction
 */
cc.TiledGrid3DAction = {

/**
 * @method getGrid
 * @return {cc.GridBase}
 */
getGrid : function (
)
{
    return cc.GridBase;
},

};

/**
 * @class StopGrid
 */
cc.StopGrid = {

/**
 * @method create
 * @return {cc.StopGrid}
 */
create : function (
)
{
    return cc.StopGrid;
},

};

/**
 * @class ReuseGrid
 */
cc.ReuseGrid = {

/**
 * @method create
 * @param {int} arg0
 * @return {cc.ReuseGrid}
 */
create : function (
int 
)
{
    return cc.ReuseGrid;
},

};

/**
 * @class Waves3D
 */
cc.Waves3D = {

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {cc.Waves3D}
 */
create : function (
float, 
size, 
int, 
float 
)
{
    return cc.Waves3D;
},

};

/**
 * @class FlipX3D
 */
cc.FlipX3D = {

/**
 * @method create
 * @param {float} arg0
 * @return {cc.FlipX3D}
 */
create : function (
float 
)
{
    return cc.FlipX3D;
},

};

/**
 * @class FlipY3D
 */
cc.FlipY3D = {

/**
 * @method create
 * @param {float} arg0
 * @return {cc.FlipY3D}
 */
create : function (
float 
)
{
    return cc.FlipY3D;
},

};

/**
 * @class Lens3D
 */
cc.Lens3D = {

/**
 * @method setPosition
 * @param {PointObject} arg0
 */
setPosition : function (
point 
)
{
},

/**
 * @method setConcave
 * @param {bool} arg0
 */
setConcave : function (
bool 
)
{
},

/**
 * @method setLensEffect
 * @param {float} arg0
 */
setLensEffect : function (
float 
)
{
},

/**
 * @method getPosition
 * @return {PointObject}
 */
getPosition : function (
)
{
    return cc.Point;
},

/**
 * @method getLensEffect
 * @return {float}
 */
getLensEffect : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {PointObject} arg2
 * @param {float} arg3
 * @return {cc.Lens3D}
 */
create : function (
float, 
size, 
point, 
float 
)
{
    return cc.Lens3D;
},

};

/**
 * @class Ripple3D
 */
cc.Ripple3D = {

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setPosition
 * @param {PointObject} arg0
 */
setPosition : function (
point 
)
{
},

/**
 * @method getPosition
 * @return {PointObject}
 */
getPosition : function (
)
{
    return cc.Point;
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {PointObject} arg2
 * @param {float} arg3
 * @param {unsigned int} arg4
 * @param {float} arg5
 * @return {cc.Ripple3D}
 */
create : function (
float, 
size, 
point, 
float, 
int, 
float 
)
{
    return cc.Ripple3D;
},

};

/**
 * @class Shaky3D
 */
cc.Shaky3D = {

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {cc.Shaky3D}
 */
create : function (
float, 
size, 
int, 
bool 
)
{
    return cc.Shaky3D;
},

/**
 * @method Shaky3D
 * @constructor
 */
Shaky3D : function (
)
{
},

};

/**
 * @class Liquid
 */
cc.Liquid = {

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {cc.Liquid}
 */
create : function (
float, 
size, 
int, 
float 
)
{
    return cc.Liquid;
},

/**
 * @method Liquid
 * @constructor
 */
Liquid : function (
)
{
},

};

/**
 * @class Waves
 */
cc.Waves = {

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @param {bool} arg4
 * @param {bool} arg5
 * @return {cc.Waves}
 */
create : function (
float, 
size, 
int, 
float, 
bool, 
bool 
)
{
    return cc.Waves;
},

/**
 * @method Waves
 * @constructor
 */
Waves : function (
)
{
},

};

/**
 * @class Twirl
 */
cc.Twirl = {

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method setPosition
 * @param {PointObject} arg0
 */
setPosition : function (
point 
)
{
},

/**
 * @method getPosition
 * @return {PointObject}
 */
getPosition : function (
)
{
    return cc.Point;
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {PointObject} arg2
 * @param {unsigned int} arg3
 * @param {float} arg4
 * @return {cc.Twirl}
 */
create : function (
float, 
size, 
point, 
int, 
float 
)
{
    return cc.Twirl;
},

/**
 * @method Twirl
 * @constructor
 */
Twirl : function (
)
{
},

};

/**
 * @class PageTurn3D
 */
cc.PageTurn3D = {

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @return {cc.PageTurn3D}
 */
create : function (
float, 
size 
)
{
    return cc.PageTurn3D;
},

};

/**
 * @class ProgressTo
 */
cc.ProgressTo = {

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @return {cc.ProgressTo}
 */
create : function (
float, 
float 
)
{
    return cc.ProgressTo;
},

};

/**
 * @class ProgressFromTo
 */
cc.ProgressFromTo = {

/**
 * @method create
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @return {cc.ProgressFromTo}
 */
create : function (
float, 
float, 
float 
)
{
    return cc.ProgressFromTo;
},

};

/**
 * @class ShakyTiles3D
 */
cc.ShakyTiles3D = {

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {cc.ShakyTiles3D}
 */
create : function (
float, 
size, 
int, 
bool 
)
{
    return cc.ShakyTiles3D;
},

};

/**
 * @class ShatteredTiles3D
 */
cc.ShatteredTiles3D = {

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {int} arg2
 * @param {bool} arg3
 * @return {cc.ShatteredTiles3D}
 */
create : function (
float, 
size, 
int, 
bool 
)
{
    return cc.ShatteredTiles3D;
},

};

/**
 * @class ShuffleTiles
 */
cc.ShuffleTiles = {

/**
 * @method placeTile
 * @param {PointObject} arg0
 * @param {cc.Tile} arg1
 */
placeTile : function (
point, 
tile 
)
{
},

/**
 * @method shuffle
 * @param {unsigned int*} arg0
 * @param {unsigned int} arg1
 */
shuffle : function (
int, 
int 
)
{
},

/**
 * @method getDelta
 * @param {SizeObject} arg0
 * @return {SizeObject}
 */
getDelta : function (
size 
)
{
    return cc.Size;
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {unsigned int} arg2
 * @return {cc.ShuffleTiles}
 */
create : function (
float, 
size, 
int 
)
{
    return cc.ShuffleTiles;
},

};

/**
 * @class FadeOutTRTiles
 */
cc.FadeOutTRTiles = {

/**
 * @method turnOnTile
 * @param {PointObject} arg0
 */
turnOnTile : function (
point 
)
{
},

/**
 * @method turnOffTile
 * @param {PointObject} arg0
 */
turnOffTile : function (
point 
)
{
},

/**
 * @method transformTile
 * @param {PointObject} arg0
 * @param {float} arg1
 */
transformTile : function (
point, 
float 
)
{
},

/**
 * @method testFunc
 * @param {SizeObject} arg0
 * @param {float} arg1
 * @return {float}
 */
testFunc : function (
size, 
float 
)
{
    return 0;
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @return {cc.FadeOutTRTiles}
 */
create : function (
float, 
size 
)
{
    return cc.FadeOutTRTiles;
},

};

/**
 * @class FadeOutBLTiles
 */
cc.FadeOutBLTiles = {

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @return {cc.FadeOutBLTiles}
 */
create : function (
float, 
size 
)
{
    return cc.FadeOutBLTiles;
},

};

/**
 * @class FadeOutUpTiles
 */
cc.FadeOutUpTiles = {

/**
 * @method transformTile
 * @param {PointObject} arg0
 * @param {float} arg1
 */
transformTile : function (
point, 
float 
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @return {cc.FadeOutUpTiles}
 */
create : function (
float, 
size 
)
{
    return cc.FadeOutUpTiles;
},

};

/**
 * @class FadeOutDownTiles
 */
cc.FadeOutDownTiles = {

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @return {cc.FadeOutDownTiles}
 */
create : function (
float, 
size 
)
{
    return cc.FadeOutDownTiles;
},

};

/**
 * @class TurnOffTiles
 */
cc.TurnOffTiles = {

/**
 * @method turnOnTile
 * @param {PointObject} arg0
 */
turnOnTile : function (
point 
)
{
},

/**
 * @method turnOffTile
 * @param {PointObject} arg0
 */
turnOffTile : function (
point 
)
{
},

/**
 * @method shuffle
 * @param {unsigned int*} arg0
 * @param {unsigned int} arg1
 */
shuffle : function (
int, 
int 
)
{
},

/**
 * @method create
* @param {float|float} float
* @param {SizeObject|SizeObject} size
* @param {unsigned int} int
* @return {cc.TurnOffTiles|cc.TurnOffTiles}
*/
create : function(
float,
size,
int 
)
{
    return cc.TurnOffTiles;
},

};

/**
 * @class WavesTiles3D
 */
cc.WavesTiles3D = {

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {cc.WavesTiles3D}
 */
create : function (
float, 
size, 
int, 
float 
)
{
    return cc.WavesTiles3D;
},

};

/**
 * @class JumpTiles3D
 */
cc.JumpTiles3D = {

/**
 * @method getAmplitudeRate
 * @return {float}
 */
getAmplitudeRate : function (
)
{
    return 0;
},

/**
 * @method setAmplitude
 * @param {float} arg0
 */
setAmplitude : function (
float 
)
{
},

/**
 * @method setAmplitudeRate
 * @param {float} arg0
 */
setAmplitudeRate : function (
float 
)
{
},

/**
 * @method getAmplitude
 * @return {float}
 */
getAmplitude : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {float} arg0
 * @param {SizeObject} arg1
 * @param {unsigned int} arg2
 * @param {float} arg3
 * @return {cc.JumpTiles3D}
 */
create : function (
float, 
size, 
int, 
float 
)
{
    return cc.JumpTiles3D;
},

};

/**
 * @class SplitRows
 */
cc.SplitRows = {

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned int} arg1
 * @return {cc.SplitRows}
 */
create : function (
float, 
int 
)
{
    return cc.SplitRows;
},

};

/**
 * @class SplitCols
 */
cc.SplitCols = {

/**
 * @method create
 * @param {float} arg0
 * @param {unsigned int} arg1
 * @return {cc.SplitCols}
 */
create : function (
float, 
int 
)
{
    return cc.SplitCols;
},

};

/**
 * @class ActionTween
 */
cc.ActionTween = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {String} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @return {bool}
 */
initWithDuration : function (
float, 
str, 
float, 
float 
)
{
    return false;
},

/**
 * @method create
 * @param {float} arg0
 * @param {String} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @return {cc.ActionTween}
 */
create : function (
float, 
str, 
float, 
float 
)
{
    return cc.ActionTween;
},

};

/**
 * @class CardinalSplineTo
 */
cc.CardinalSplineTo = {

/**
 * @method getPoints
 * @return {PointObject}
 */
getPoints : function (
)
{
    return cc.PointArray;
},

/**
 * @method updatePosition
 * @param {PointObject} arg0
 */
updatePosition : function (
point 
)
{
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {PointObject} arg1
 * @param {float} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
pointarray, 
float 
)
{
    return false;
},

/**
 * @method CardinalSplineTo
 * @constructor
 */
CardinalSplineTo : function (
)
{
},

};

/**
 * @class CardinalSplineBy
 */
cc.CardinalSplineBy = {

/**
 * @method CardinalSplineBy
 * @constructor
 */
CardinalSplineBy : function (
)
{
},

};

/**
 * @class CatmullRomTo
 */
cc.CatmullRomTo = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {PointObject} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
pointarray 
)
{
    return false;
},

};

/**
 * @class CatmullRomBy
 */
cc.CatmullRomBy = {

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {PointObject} arg1
 * @return {bool}
 */
initWithDuration : function (
float, 
pointarray 
)
{
    return false;
},

};

/**
 * @class AtlasNode
 */
cc.AtlasNode = {

/**
 * @method updateAtlasValues
 */
updateAtlasValues : function (
)
{
},

/**
 * @method getTexture
 * @return {cc.Texture2D}
 */
getTexture : function (
)
{
    return cc.Texture2D;
},

/**
 * @method setTextureAtlas
 * @param {cc.TextureAtlas} arg0
 */
setTextureAtlas : function (
textureatlas 
)
{
},

/**
 * @method getTextureAtlas
 * @return {cc.TextureAtlas}
 */
getTextureAtlas : function (
)
{
    return cc.TextureAtlas;
},

/**
 * @method getQuadsToDraw
 * @return {long}
 */
getQuadsToDraw : function (
)
{
    return 0;
},

/**
 * @method setTexture
 * @param {cc.Texture2D} arg0
 */
setTexture : function (
texture2d 
)
{
},

/**
 * @method setQuadsToDraw
 * @param {long} arg0
 */
setQuadsToDraw : function (
long 
)
{
},

/**
 * @method create
 * @param {String} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @return {cc.AtlasNode}
 */
create : function (
str, 
int, 
int, 
int 
)
{
    return cc.AtlasNode;
},

};

/**
 * @class DrawNode
 */
cc.DrawNode = {

/**
 * @method drawQuadraticBezier
 * @param {PointObject} arg0
 * @param {PointObject} arg1
 * @param {PointObject} arg2
 * @param {unsigned int} arg3
 * @param {Color4FObject} arg4
 */
drawQuadraticBezier : function (
point, 
point, 
point, 
int, 
color4f 
)
{
},

/**
 * @method onDraw
 * @param {kmMat4} arg0
 * @param {bool} arg1
 */
onDraw : function (
kmmat4, 
bool 
)
{
},

/**
 * @method clear
 */
clear : function (
)
{
},

/**
 * @method drawTriangle
 * @param {PointObject} arg0
 * @param {PointObject} arg1
 * @param {PointObject} arg2
 * @param {Color4FObject} arg3
 */
drawTriangle : function (
point, 
point, 
point, 
color4f 
)
{
},

/**
 * @method drawDot
 * @param {PointObject} arg0
 * @param {float} arg1
 * @param {Color4FObject} arg2
 */
drawDot : function (
point, 
float, 
color4f 
)
{
},

/**
 * @method drawCubicBezier
 * @param {PointObject} arg0
 * @param {PointObject} arg1
 * @param {PointObject} arg2
 * @param {PointObject} arg3
 * @param {unsigned int} arg4
 * @param {Color4FObject} arg5
 */
drawCubicBezier : function (
point, 
point, 
point, 
point, 
int, 
color4f 
)
{
},

/**
 * @method drawSegment
 * @param {PointObject} arg0
 * @param {PointObject} arg1
 * @param {float} arg2
 * @param {Color4FObject} arg3
 */
drawSegment : function (
point, 
point, 
float, 
color4f 
)
{
},

/**
 * @method create
 * @return {cc.DrawNode}
 */
create : function (
)
{
    return cc.DrawNode;
},

};

/**
 * @class Configuration
 */
cc.Configuration = {

/**
 * @method checkForGLExtension
 * @param {String} arg0
 * @return {bool}
 */
checkForGLExtension : function (
str 
)
{
    return false;
},

/**
 * @method setValue
 * @param {String} arg0
 * @param {cc.Value} arg1
 */
setValue : function (
str, 
value 
)
{
},

/**
 * @method supportsS3TC
 * @return {bool}
 */
supportsS3TC : function (
)
{
    return false;
},

/**
 * @method supportsPVRTC
 * @return {bool}
 */
supportsPVRTC : function (
)
{
    return false;
},

/**
 * @method supportsShareableVAO
 * @return {bool}
 */
supportsShareableVAO : function (
)
{
    return false;
},

/**
 * @method getInfo
 * @return {String}
 */
getInfo : function (
)
{
    return ;
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
 * @method getMaxTextureUnits
 * @return {int}
 */
getMaxTextureUnits : function (
)
{
    return 0;
},

/**
 * @method supportsNPOT
 * @return {bool}
 */
supportsNPOT : function (
)
{
    return false;
},

/**
 * @method getMaxModelviewStackDepth
 * @return {int}
 */
getMaxModelviewStackDepth : function (
)
{
    return 0;
},

/**
 * @method supportsDiscardFramebuffer
 * @return {bool}
 */
supportsDiscardFramebuffer : function (
)
{
    return false;
},

/**
 * @method supportsATITC
 * @return {bool}
 */
supportsATITC : function (
)
{
    return false;
},

/**
 * @method gatherGPUInfo
 */
gatherGPUInfo : function (
)
{
},

/**
 * @method supportsETC
 * @return {bool}
 */
supportsETC : function (
)
{
    return false;
},

/**
 * @method loadConfigFile
 * @param {String} arg0
 */
loadConfigFile : function (
str 
)
{
},

/**
 * @method getValue
 * @param {String} arg0
 * @param {cc.Value} arg1
 * @return {cc.Value}
 */
getValue : function (
str, 
value 
)
{
    return cc.Value;
},

/**
 * @method getMaxTextureSize
 * @return {int}
 */
getMaxTextureSize : function (
)
{
    return 0;
},

/**
 * @method supportsBGRA8888
 * @return {bool}
 */
supportsBGRA8888 : function (
)
{
    return false;
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.Configuration}
 */
getInstance : function (
)
{
    return cc.Configuration;
},

};

/**
 * @class LabelAtlas
 */
cc.LabelAtlas = {

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
 * @method initWithString
* @param {String|String|String} str
* @param {String|String|cc.Texture2D} str
* @param {int|int} int
* @param {int|int} int
* @param {int|int} int
* @return {bool|bool|bool}
*/
initWithString : function(
str,
texture2d,
int,
int,
int 
)
{
    return false;
},

/**
 * @method updateAtlasValues
 */
updateAtlasValues : function (
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
* @param {String|String} str
* @param {String|String} str
* @param {int} int
* @param {int} int
* @param {int} int
* @return {cc.LabelAtlas|cc.LabelAtlas|cc.LabelAtlas}
*/
create : function(
str,
str,
int,
int,
int 
)
{
    return cc.LabelAtlas;
},

};

/**
 * @class Director
 */
cc.Director = {

/**
 * @method pause
 */
pause : function (
)
{
},

/**
 * @method setEventDispatcher
 * @param {cc.EventDispatcher} arg0
 */
setEventDispatcher : function (
eventdispatcher 
)
{
},

/**
 * @method setContentScaleFactor
 * @param {float} arg0
 */
setContentScaleFactor : function (
float 
)
{
},

/**
 * @method getContentScaleFactor
 * @return {float}
 */
getContentScaleFactor : function (
)
{
    return 0;
},

/**
 * @method getWinSizeInPixels
 * @return {SizeObject}
 */
getWinSizeInPixels : function (
)
{
    return cc.Size;
},

/**
 * @method getDeltaTime
 * @return {float}
 */
getDeltaTime : function (
)
{
    return 0;
},

/**
 * @method setGLDefaultValues
 */
setGLDefaultValues : function (
)
{
},

/**
 * @method setActionManager
 * @param {cc.ActionManager} arg0
 */
setActionManager : function (
actionmanager 
)
{
},

/**
 * @method setAlphaBlending
 * @param {bool} arg0
 */
setAlphaBlending : function (
bool 
)
{
},

/**
 * @method popToRootScene
 */
popToRootScene : function (
)
{
},

/**
 * @method getNotificationNode
 * @return {cc.Node}
 */
getNotificationNode : function (
)
{
    return cc.Node;
},

/**
 * @method getWinSize
 * @return {SizeObject}
 */
getWinSize : function (
)
{
    return cc.Size;
},

/**
 * @method end
 */
end : function (
)
{
},

/**
 * @method getTextureCache
 * @return {cc.TextureCache}
 */
getTextureCache : function (
)
{
    return cc.TextureCache;
},

/**
 * @method isSendCleanupToScene
 * @return {bool}
 */
isSendCleanupToScene : function (
)
{
    return false;
},

/**
 * @method getVisibleOrigin
 * @return {PointObject}
 */
getVisibleOrigin : function (
)
{
    return cc.Point;
},

/**
 * @method mainLoop
 */
mainLoop : function (
)
{
},

/**
 * @method setDepthTest
 * @param {bool} arg0
 */
setDepthTest : function (
bool 
)
{
},

/**
 * @method getFrameRate
 * @return {float}
 */
getFrameRate : function (
)
{
    return 0;
},

/**
 * @method getSecondsPerFrame
 * @return {float}
 */
getSecondsPerFrame : function (
)
{
    return 0;
},

/**
 * @method convertToUI
 * @param {PointObject} arg0
 * @return {PointObject}
 */
convertToUI : function (
point 
)
{
    return cc.Point;
},

/**
 * @method setDefaultValues
 */
setDefaultValues : function (
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
 * @method setScheduler
 * @param {cc.Scheduler} arg0
 */
setScheduler : function (
scheduler 
)
{
},

/**
 * @method startAnimation
 */
startAnimation : function (
)
{
},

/**
 * @method getOpenGLView
 * @return {cc.GLView}
 */
getOpenGLView : function (
)
{
    return cc.GLView;
},

/**
 * @method getRunningScene
 * @return {cc.Scene}
 */
getRunningScene : function (
)
{
    return cc.Scene;
},

/**
 * @method setViewport
 */
setViewport : function (
)
{
},

/**
 * @method stopAnimation
 */
stopAnimation : function (
)
{
},

/**
 * @method popToSceneStackLevel
 * @param {int} arg0
 */
popToSceneStackLevel : function (
int 
)
{
},

/**
 * @method resume
 */
resume : function (
)
{
},

/**
 * @method isNextDeltaTimeZero
 * @return {bool}
 */
isNextDeltaTimeZero : function (
)
{
    return false;
},

/**
 * @method setOpenGLView
 * @param {cc.GLView} arg0
 */
setOpenGLView : function (
glview 
)
{
},

/**
 * @method convertToGL
 * @param {PointObject} arg0
 * @return {PointObject}
 */
convertToGL : function (
point 
)
{
    return cc.Point;
},

/**
 * @method purgeCachedData
 */
purgeCachedData : function (
)
{
},

/**
 * @method getTotalFrames
 * @return {unsigned int}
 */
getTotalFrames : function (
)
{
    return 0;
},

/**
 * @method runWithScene
 * @param {cc.Scene} arg0
 */
runWithScene : function (
scene 
)
{
},

/**
 * @method setNotificationNode
 * @param {cc.Node} arg0
 */
setNotificationNode : function (
node 
)
{
},

/**
 * @method drawScene
 */
drawScene : function (
)
{
},

/**
 * @method popScene
 */
popScene : function (
)
{
},

/**
 * @method isDisplayStats
 * @return {bool}
 */
isDisplayStats : function (
)
{
    return false;
},

/**
 * @method setProjection
 * @param {cc.Director::Projection} arg0
 */
setProjection : function (
projection 
)
{
},

/**
 * @method getZEye
 * @return {float}
 */
getZEye : function (
)
{
    return 0;
},

/**
 * @method setNextDeltaTimeZero
 * @param {bool} arg0
 */
setNextDeltaTimeZero : function (
bool 
)
{
},

/**
 * @method getVisibleSize
 * @return {SizeObject}
 */
getVisibleSize : function (
)
{
    return cc.Size;
},

/**
 * @method getScheduler
 * @return {cc.Scheduler}
 */
getScheduler : function (
)
{
    return cc.Scheduler;
},

/**
 * @method pushScene
 * @param {cc.Scene} arg0
 */
pushScene : function (
scene 
)
{
},

/**
 * @method getAnimationInterval
 * @return {double}
 */
getAnimationInterval : function (
)
{
    return 0;
},

/**
 * @method isPaused
 * @return {bool}
 */
isPaused : function (
)
{
    return false;
},

/**
 * @method setDisplayStats
 * @param {bool} arg0
 */
setDisplayStats : function (
bool 
)
{
},

/**
 * @method getEventDispatcher
 * @return {cc.EventDispatcher}
 */
getEventDispatcher : function (
)
{
    return cc.EventDispatcher;
},

/**
 * @method replaceScene
 * @param {cc.Scene} arg0
 */
replaceScene : function (
scene 
)
{
},

/**
 * @method setAnimationInterval
 * @param {double} arg0
 */
setAnimationInterval : function (
double 
)
{
},

/**
 * @method getActionManager
 * @return {cc.ActionManager}
 */
getActionManager : function (
)
{
    return cc.ActionManager;
},

/**
 * @method getInstance
 * @return {cc.Director}
 */
getInstance : function (
)
{
    return cc.Director;
},

};

/**
 * @class GridBase
 */
cc.GridBase = {

/**
 * @method setGridSize
 * @param {SizeObject} arg0
 */
setGridSize : function (
size 
)
{
},

/**
 * @method calculateVertexPoints
 */
calculateVertexPoints : function (
)
{
},

/**
 * @method afterDraw
 * @param {cc.Node} arg0
 */
afterDraw : function (
node 
)
{
},

/**
 * @method beforeDraw
 */
beforeDraw : function (
)
{
},

/**
 * @method isTextureFlipped
 * @return {bool}
 */
isTextureFlipped : function (
)
{
    return false;
},

/**
 * @method getGridSize
 * @return {SizeObject}
 */
getGridSize : function (
)
{
    return cc.Size;
},

/**
 * @method getStep
 * @return {PointObject}
 */
getStep : function (
)
{
    return cc.Point;
},

/**
 * @method set2DProjection
 */
set2DProjection : function (
)
{
},

/**
 * @method setStep
 * @param {PointObject} arg0
 */
setStep : function (
point 
)
{
},

/**
 * @method setTextureFlipped
 * @param {bool} arg0
 */
setTextureFlipped : function (
bool 
)
{
},

/**
 * @method blit
 */
blit : function (
)
{
},

/**
 * @method setActive
 * @param {bool} arg0
 */
setActive : function (
bool 
)
{
},

/**
 * @method getReuseGrid
 * @return {int}
 */
getReuseGrid : function (
)
{
    return 0;
},

/**
 * @method initWithSize
* @param {SizeObject|SizeObject} size
* @param {cc.Texture2D} texture2d
* @param {bool} bool
* @return {bool|bool}
*/
initWithSize : function(
size,
texture2d,
bool 
)
{
    return false;
},

/**
 * @method setReuseGrid
 * @param {int} arg0
 */
setReuseGrid : function (
int 
)
{
},

/**
 * @method isActive
 * @return {bool}
 */
isActive : function (
)
{
    return false;
},

/**
 * @method reuse
 */
reuse : function (
)
{
},

/**
 * @method create
* @param {SizeObject|SizeObject} size
* @param {cc.Texture2D} texture2d
* @param {bool} bool
* @return {cc.GridBase|cc.GridBase}
*/
create : function(
size,
texture2d,
bool 
)
{
    return cc.GridBase;
},

};

/**
 * @class Grid3D
 */
cc.Grid3D = {

/**
 * @method create
* @param {SizeObject|SizeObject} size
* @param {cc.Texture2D} texture2d
* @param {bool} bool
* @return {cc.Grid3D|cc.Grid3D}
*/
create : function(
size,
texture2d,
bool 
)
{
    return cc.Grid3D;
},

/**
 * @method Grid3D
 * @constructor
 */
Grid3D : function (
)
{
},

};

/**
 * @class TiledGrid3D
 */
cc.TiledGrid3D = {

/**
 * @method create
* @param {SizeObject|SizeObject} size
* @param {cc.Texture2D} texture2d
* @param {bool} bool
* @return {cc.TiledGrid3D|cc.TiledGrid3D}
*/
create : function(
size,
texture2d,
bool 
)
{
    return cc.TiledGrid3D;
},

/**
 * @method TiledGrid3D
 * @constructor
 */
TiledGrid3D : function (
)
{
},

};

/**
 * @class LabelTTF
 */
cc.LabelTTF = {

/**
 * @method enableShadow
 * @param {SizeObject} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {bool} arg3
 */
enableShadow : function (
size, 
float, 
float, 
bool 
)
{
},

/**
 * @method setDimensions
 * @param {SizeObject} arg0
 */
setDimensions : function (
size 
)
{
},

/**
 * @method getFontSize
 * @return {float}
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
 * @method setTextDefinition
 * @param {cc.FontDefinition} arg0
 */
setTextDefinition : function (
fontdefinition 
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
 * @method getHorizontalAlignment
 * @return {cc.TextHAlignment}
 */
getHorizontalAlignment : function (
)
{
    return 0;
},

/**
 * @method initWithStringAndTextDefinition
 * @param {String} arg0
 * @param {cc.FontDefinition} arg1
 * @return {bool}
 */
initWithStringAndTextDefinition : function (
str, 
fontdefinition 
)
{
    return false;
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
 * @method initWithString
 * @param {String} arg0
 * @param {String} arg1
 * @param {float} arg2
 * @param {SizeObject} arg3
 * @param {cc.TextHAlignment} arg4
 * @param {cc.TextVAlignment} arg5
 * @return {bool}
 */
initWithString : function (
str, 
str, 
float, 
size, 
texthalignment, 
textvalignment 
)
{
    return false;
},

/**
 * @method setFontFillColor
 * @param {Color3BObject} arg0
 * @param {bool} arg1
 */
setFontFillColor : function (
color3b, 
bool 
)
{
},

/**
 * @method getBlendFunc
 * @return {cc.BlendFunc}
 */
getBlendFunc : function (
)
{
    return cc.BlendFunc;
},

/**
 * @method enableStroke
 * @param {Color3BObject} arg0
 * @param {float} arg1
 * @param {bool} arg2
 */
enableStroke : function (
color3b, 
float, 
bool 
)
{
},

/**
 * @method getDimensions
 * @return {SizeObject}
 */
getDimensions : function (
)
{
    return cc.Size;
},

/**
 * @method setVerticalAlignment
 * @param {cc.TextVAlignment} arg0
 */
setVerticalAlignment : function (
textvalignment 
)
{
},

/**
 * @method setFontSize
 * @param {float} arg0
 */
setFontSize : function (
float 
)
{
},

/**
 * @method getVerticalAlignment
 * @return {cc.TextVAlignment}
 */
getVerticalAlignment : function (
)
{
    return 0;
},

/**
 * @method getTextDefinition
 * @return {cc.FontDefinition}
 */
getTextDefinition : function (
)
{
    return cc.FontDefinition;
},

/**
 * @method setBlendFunc
 * @param {cc.BlendFunc} arg0
 */
setBlendFunc : function (
blendfunc 
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
 * @method setHorizontalAlignment
 * @param {cc.TextHAlignment} arg0
 */
setHorizontalAlignment : function (
texthalignment 
)
{
},

/**
 * @method disableShadow
 */
disableShadow : function (
)
{
},

/**
 * @method disableStroke
 */
disableStroke : function (
)
{
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @param {float} float
* @param {SizeObject} size
* @param {cc.TextHAlignment} texthalignment
* @param {cc.TextVAlignment} textvalignment
* @return {cc.LabelTTF|cc.LabelTTF}
*/
create : function(
str,
str,
float,
size,
texthalignment,
textvalignment 
)
{
    return cc.LabelTTF;
},

/**
 * @method createWithFontDefinition
 * @param {String} arg0
 * @param {cc.FontDefinition} arg1
 * @return {cc.LabelTTF}
 */
createWithFontDefinition : function (
str, 
fontdefinition 
)
{
    return cc.LabelTTF;
},

/**
 * @method LabelTTF
 * @constructor
 */
LabelTTF : function (
)
{
},

};

/**
 * @class SpriteBatchNode
 */
cc.SpriteBatchNode = {

/**
 * @method appendChild
 * @param {cc.Sprite} arg0
 */
appendChild : function (
sprite 
)
{
},

/**
 * @method reorderBatch
 * @param {bool} arg0
 */
reorderBatch : function (
bool 
)
{
},

/**
 * @method initWithTexture
 * @param {cc.Texture2D} arg0
 * @param {long} arg1
 * @return {bool}
 */
initWithTexture : function (
texture2d, 
long 
)
{
    return false;
},

/**
 * @method lowestAtlasIndexInChild
 * @param {cc.Sprite} arg0
 * @return {long}
 */
lowestAtlasIndexInChild : function (
sprite 
)
{
    return 0;
},

/**
 * @method atlasIndexForChild
 * @param {cc.Sprite} arg0
 * @param {int} arg1
 * @return {long}
 */
atlasIndexForChild : function (
sprite, 
int 
)
{
    return 0;
},

/**
 * @method setTextureAtlas
 * @param {cc.TextureAtlas} arg0
 */
setTextureAtlas : function (
textureatlas 
)
{
},

/**
 * @method rebuildIndexInOrder
 * @param {cc.Sprite} arg0
 * @param {long} arg1
 * @return {long}
 */
rebuildIndexInOrder : function (
sprite, 
long 
)
{
    return 0;
},

/**
 * @method increaseAtlasCapacity
 */
increaseAtlasCapacity : function (
)
{
},

/**
 * @method getTextureAtlas
 * @return {cc.TextureAtlas}
 */
getTextureAtlas : function (
)
{
    return cc.TextureAtlas;
},

/**
 * @method insertQuadFromSprite
 * @param {cc.Sprite} arg0
 * @param {long} arg1
 */
insertQuadFromSprite : function (
sprite, 
long 
)
{
},

/**
 * @method init
* @param {String} str
* @param {long} long
* @return {bool|bool}
*/
init : function(
str,
long 
)
{
    return false;
},

/**
 * @method setTexture
 * @param {cc.Texture2D} arg0
 */
setTexture : function (
texture2d 
)
{
},

/**
 * @method getTexture
 * @return {cc.Texture2D}
 */
getTexture : function (
)
{
    return cc.Texture2D;
},

/**
 * @method highestAtlasIndexInChild
 * @param {cc.Sprite} arg0
 * @return {long}
 */
highestAtlasIndexInChild : function (
sprite 
)
{
    return 0;
},

/**
 * @method removeChildAtIndex
 * @param {long} arg0
 * @param {bool} arg1
 */
removeChildAtIndex : function (
long, 
bool 
)
{
},

/**
 * @method removeSpriteFromAtlas
 * @param {cc.Sprite} arg0
 */
removeSpriteFromAtlas : function (
sprite 
)
{
},

/**
 * @method create
 * @param {String} arg0
 * @param {long} arg1
 * @return {cc.SpriteBatchNode}
 */
create : function (
str, 
long 
)
{
    return cc.SpriteBatchNode;
},

/**
 * @method createWithTexture
 * @param {cc.Texture2D} arg0
 * @param {long} arg1
 * @return {cc.SpriteBatchNode}
 */
createWithTexture : function (
texture2d, 
long 
)
{
    return cc.SpriteBatchNode;
},

/**
 * @method SpriteBatchNode
 * @constructor
 */
SpriteBatchNode : function (
)
{
},

};

/**
 * @class Label
 */
cc.Label = {

/**
 * @method enableShadow
 */
enableShadow : function (
)
{
},

/**
 * @method setDimensions
 * @param {unsigned int} arg0
 * @param {unsigned int} arg1
 */
setDimensions : function (
int, 
int 
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
 * @method getWidth
 * @return {unsigned int}
 */
getWidth : function (
)
{
    return 0;
},

/**
 * @method getCommonLineHeight
 * @return {int}
 */
getCommonLineHeight : function (
)
{
    return 0;
},

/**
 * @method setWidth
 * @param {unsigned int} arg0
 */
setWidth : function (
int 
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
 * @method getMaxLineWidth
 * @return {unsigned int}
 */
getMaxLineWidth : function (
)
{
    return 0;
},

/**
 * @method getHorizontalAlignment
 * @return {cc.TextHAlignment}
 */
getHorizontalAlignment : function (
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
 * @method getHeight
 * @return {unsigned int}
 */
getHeight : function (
)
{
    return 0;
},

/**
 * @method setBMFontFilePath
 * @param {String} arg0
 * @param {PointObject} arg1
 * @return {bool}
 */
setBMFontFilePath : function (
str, 
point 
)
{
    return false;
},

/**
 * @method getFontDefinition
 * @return {cc.FontDefinition}
 */
getFontDefinition : function (
)
{
    return cc.FontDefinition;
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
 * @method updateContent
 */
updateContent : function (
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
 * @method setLineBreakWithoutSpace
 * @param {bool} arg0
 */
setLineBreakWithoutSpace : function (
bool 
)
{
},

/**
 * @method getStringNumLines
 * @return {int}
 */
getStringNumLines : function (
)
{
    return 0;
},

/**
 * @method enableOutline
 * @param {Color4BObject} arg0
 * @param {int} arg1
 */
enableOutline : function (
color4b, 
int 
)
{
},

/**
 * @method setCharMap
* @param {cc.Texture2D|String|String} texture2d
* @param {int|int} int
* @param {int|int} int
* @param {int|int} int
* @return {bool|bool|bool}
*/
setCharMap : function(
str,
int,
int,
int 
)
{
    return false;
},

/**
 * @method getDimensions
 * @return {SizeObject}
 */
getDimensions : function (
)
{
    return cc.Size;
},

/**
 * @method setMaxLineWidth
 * @param {unsigned int} arg0
 */
setMaxLineWidth : function (
int 
)
{
},

/**
 * @method setVerticalAlignment
 * @param {cc.TextVAlignment} arg0
 */
setVerticalAlignment : function (
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
 * @method getVerticalAlignment
 * @return {cc.TextVAlignment}
 */
getVerticalAlignment : function (
)
{
    return 0;
},

/**
 * @method setHeight
 * @param {unsigned int} arg0
 */
setHeight : function (
int 
)
{
},

/**
 * @method enableGlow
 * @param {Color3BObject} arg0
 */
enableGlow : function (
color3b 
)
{
},

/**
 * @method getLetter
 * @param {int} arg0
 * @return {cc.Sprite}
 */
getLetter : function (
int 
)
{
    return cc.Sprite;
},

/**
 * @method getTextAlignment
 * @return {cc.TextHAlignment}
 */
getTextAlignment : function (
)
{
    return 0;
},

/**
 * @method setHorizontalAlignment
 * @param {cc.TextHAlignment} arg0
 */
setHorizontalAlignment : function (
texthalignment 
)
{
},

/**
 * @method setFontDefinition
 * @param {cc.FontDefinition} arg0
 */
setFontDefinition : function (
fontdefinition 
)
{
},

/**
 * @method setAlignment
* @param {cc.TextHAlignment|cc.TextHAlignment} texthalignment
* @param {cc.TextVAlignment} textvalignment
*/
setAlignment : function(
texthalignment,
textvalignment 
)
{
},

/**
 * @method createWithBMFont
 * @param {String} arg0
 * @param {String} arg1
 * @param {cc.TextHAlignment} arg2
 * @param {int} arg3
 * @param {PointObject} arg4
 * @return {cc.Label}
 */
createWithBMFont : function (
str, 
str, 
texthalignment, 
int, 
point 
)
{
    return cc.Label;
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @param {float} float
* @param {SizeObject} size
* @param {cc.TextHAlignment} texthalignment
* @param {cc.TextVAlignment} textvalignment
* @return {cc.Label|cc.Label}
*/
create : function(
str,
str,
float,
size,
texthalignment,
textvalignment 
)
{
    return cc.Label;
},

/**
 * @method createWithCharMap
* @param {cc.Texture2D|String|String} texture2d
* @param {int|int} int
* @param {int|int} int
* @param {int|int} int
* @return {cc.Label|cc.Label|cc.Label}
*/
createWithCharMap : function(
str,
int,
int,
int 
)
{
    return cc.Label;
},

/**
 * @method createWithFontDefinition
 * @param {String} arg0
 * @param {cc.FontDefinition} arg1
 * @return {cc.Label}
 */
createWithFontDefinition : function (
str, 
fontdefinition 
)
{
    return cc.Label;
},

};

/**
 * @class LabelBMFont
 */
cc.LabelBMFont = {

/**
 * @method setLineBreakWithoutSpace
 * @param {bool} arg0
 */
setLineBreakWithoutSpace : function (
bool 
)
{
},

/**
 * @method getBlendFunc
 * @return {cc.BlendFunc}
 */
getBlendFunc : function (
)
{
    return cc.BlendFunc;
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method getLetter
 * @param {int} arg0
 * @return {cc.Sprite}
 */
getLetter : function (
int 
)
{
    return cc.Sprite;
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
 * @method setBlendFunc
 * @param {cc.BlendFunc} arg0
 */
setBlendFunc : function (
blendfunc 
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
 * @method initWithString
 * @param {String} arg0
 * @param {String} arg1
 * @param {float} arg2
 * @param {cc.TextHAlignment} arg3
 * @param {PointObject} arg4
 * @return {bool}
 */
initWithString : function (
str, 
str, 
float, 
texthalignment, 
point 
)
{
    return false;
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method getFntFile
 * @return {String}
 */
getFntFile : function (
)
{
    return ;
},

/**
 * @method setFntFile
 * @param {String} arg0
 * @param {PointObject} arg1
 */
setFntFile : function (
str, 
point 
)
{
},

/**
 * @method setAlignment
 * @param {cc.TextHAlignment} arg0
 */
setAlignment : function (
texthalignment 
)
{
},

/**
 * @method setWidth
 * @param {float} arg0
 */
setWidth : function (
float 
)
{
},

/**
 * @method create
* @param {String} str
* @param {String} str
* @param {float} float
* @param {cc.TextHAlignment} texthalignment
* @param {PointObject} point
* @return {cc.LabelBMFont|cc.LabelBMFont}
*/
create : function(
str,
str,
float,
texthalignment,
point 
)
{
    return cc.LabelBMFont;
},

/**
 * @method LabelBMFont
 * @constructor
 */
LabelBMFont : function (
)
{
},

};

/**
 * @class Layer
 */
cc.Layer = {

/**
 * @method create
 * @return {cc.Layer}
 */
create : function (
)
{
    return cc.Layer;
},

};

/**
 * @class __LayerRGBA
 */
cc.LayerRGBA = {

/**
 * @method create
 * @return {cc.__LayerRGBA}
 */
create : function (
)
{
    return cc.__LayerRGBA;
},

};

/**
 * @class LayerColor
 */
cc.LayerColor = {

/**
 * @method changeWidthAndHeight
 * @param {float} arg0
 * @param {float} arg1
 */
changeWidthAndHeight : function (
float, 
float 
)
{
},

/**
 * @method changeHeight
 * @param {float} arg0
 */
changeHeight : function (
float 
)
{
},

/**
 * @method changeWidth
 * @param {float} arg0
 */
changeWidth : function (
float 
)
{
},

/**
 * @method create
* @param {Color4BObject|Color4BObject} color4b
* @param {float} float
* @param {float} float
* @return {cc.LayerColor|cc.LayerColor|cc.LayerColor}
*/
create : function(
color4b,
float,
float 
)
{
    return cc.LayerColor;
},

};

/**
 * @class LayerGradient
 */
cc.LayerGradient = {

/**
 * @method getStartColor
 * @return {Color3BObject}
 */
getStartColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method isCompressedInterpolation
 * @return {bool}
 */
isCompressedInterpolation : function (
)
{
    return false;
},

/**
 * @method getStartOpacity
 * @return {unsigned char}
 */
getStartOpacity : function (
)
{
    return 0;
},

/**
 * @method setVector
 * @param {PointObject} arg0
 */
setVector : function (
point 
)
{
},

/**
 * @method setStartOpacity
 * @param {unsigned char} arg0
 */
setStartOpacity : function (
char 
)
{
},

/**
 * @method setCompressedInterpolation
 * @param {bool} arg0
 */
setCompressedInterpolation : function (
bool 
)
{
},

/**
 * @method setEndOpacity
 * @param {unsigned char} arg0
 */
setEndOpacity : function (
char 
)
{
},

/**
 * @method getVector
 * @return {PointObject}
 */
getVector : function (
)
{
    return cc.Point;
},

/**
 * @method initWithColor
* @param {Color4BObject|Color4BObject} color4b
* @param {Color4BObject|Color4BObject} color4b
* @param {PointObject} point
* @return {bool|bool|bool}
*/
initWithColor : function(
color4b,
color4b,
point 
)
{
    return false;
},

/**
 * @method setEndColor
 * @param {Color3BObject} arg0
 */
setEndColor : function (
color3b 
)
{
},

/**
 * @method getEndColor
 * @return {Color3BObject}
 */
getEndColor : function (
)
{
    return cc.Color3B;
},

/**
 * @method getEndOpacity
 * @return {unsigned char}
 */
getEndOpacity : function (
)
{
    return 0;
},

/**
 * @method setStartColor
 * @param {Color3BObject} arg0
 */
setStartColor : function (
color3b 
)
{
},

/**
 * @method create
* @param {Color4BObject|Color4BObject} color4b
* @param {Color4BObject|Color4BObject} color4b
* @param {PointObject} point
* @return {cc.LayerGradient|cc.LayerGradient|cc.LayerGradient}
*/
create : function(
color4b,
color4b,
point 
)
{
    return cc.LayerGradient;
},

};

/**
 * @class LayerMultiplex
 */
cc.LayerMultiplex = {

/**
 * @method switchToAndReleaseMe
 * @param {int} arg0
 */
switchToAndReleaseMe : function (
int 
)
{
},

/**
 * @method addLayer
 * @param {cc.Layer} arg0
 */
addLayer : function (
layer 
)
{
},

/**
 * @method switchTo
 * @param {int} arg0
 */
switchTo : function (
int 
)
{
},

};

/**
 * @class Scene
 */
cc.Scene = {

/**
 * @method getPhysicsWorld
 * @return {cc.PhysicsWorld}
 */
getPhysicsWorld : function (
)
{
    return cc.PhysicsWorld;
},

/**
 * @method create
 * @return {cc.Scene}
 */
create : function (
)
{
    return cc.Scene;
},

/**
 * @method createWithPhysics
 * @return {cc.Scene}
 */
createWithPhysics : function (
)
{
    return cc.Scene;
},

};

/**
 * @class TransitionEaseScene
 */
cc.TransitionEaseScene = {

/**
 * @method easeActionWithAction
 * @param {cc.ActionInterval} arg0
 * @return {cc.ActionInterval}
 */
easeActionWithAction : function (
actioninterval 
)
{
    return cc.ActionInterval;
},

};

/**
 * @class TransitionScene
 */
cc.TransitionScene = {

/**
 * @method finish
 */
finish : function (
)
{
},

/**
 * @method hideOutShowIn
 */
hideOutShowIn : function (
)
{
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionScene}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionScene;
},

};

/**
 * @class TransitionSceneOriented
 */
cc.TransitionSceneOriented = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @param {cc.TransitionScene::Orientation} arg2
 * @return {cc.TransitionSceneOriented}
 */
create : function (
float, 
scene, 
orientation 
)
{
    return cc.TransitionSceneOriented;
},

};

/**
 * @class TransitionRotoZoom
 */
cc.TransitionRotoZoom = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionRotoZoom}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionRotoZoom;
},

};

/**
 * @class TransitionJumpZoom
 */
cc.TransitionJumpZoom = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionJumpZoom}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionJumpZoom;
},

};

/**
 * @class TransitionMoveInL
 */
cc.TransitionMoveInL = {

/**
 * @method action
 * @return {cc.ActionInterval}
 */
action : function (
)
{
    return cc.ActionInterval;
},

/**
 * @method easeActionWithAction
 * @param {cc.ActionInterval} arg0
 * @return {cc.ActionInterval}
 */
easeActionWithAction : function (
actioninterval 
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionMoveInL}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionMoveInL;
},

};

/**
 * @class TransitionMoveInR
 */
cc.TransitionMoveInR = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionMoveInR}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionMoveInR;
},

};

/**
 * @class TransitionMoveInT
 */
cc.TransitionMoveInT = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionMoveInT}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionMoveInT;
},

};

/**
 * @class TransitionMoveInB
 */
cc.TransitionMoveInB = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionMoveInB}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionMoveInB;
},

};

/**
 * @class TransitionSlideInL
 */
cc.TransitionSlideInL = {

/**
 * @method action
 * @return {cc.ActionInterval}
 */
action : function (
)
{
    return cc.ActionInterval;
},

/**
 * @method easeActionWithAction
 * @param {cc.ActionInterval} arg0
 * @return {cc.ActionInterval}
 */
easeActionWithAction : function (
actioninterval 
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionSlideInL}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionSlideInL;
},

};

/**
 * @class TransitionSlideInR
 */
cc.TransitionSlideInR = {

/**
 * @method action
 * @return {cc.ActionInterval}
 */
action : function (
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionSlideInR}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionSlideInR;
},

};

/**
 * @class TransitionSlideInB
 */
cc.TransitionSlideInB = {

/**
 * @method action
 * @return {cc.ActionInterval}
 */
action : function (
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionSlideInB}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionSlideInB;
},

};

/**
 * @class TransitionSlideInT
 */
cc.TransitionSlideInT = {

/**
 * @method action
 * @return {cc.ActionInterval}
 */
action : function (
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionSlideInT}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionSlideInT;
},

};

/**
 * @class TransitionShrinkGrow
 */
cc.TransitionShrinkGrow = {

/**
 * @method easeActionWithAction
 * @param {cc.ActionInterval} arg0
 * @return {cc.ActionInterval}
 */
easeActionWithAction : function (
actioninterval 
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionShrinkGrow}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionShrinkGrow;
},

};

/**
 * @class TransitionFlipX
 */
cc.TransitionFlipX = {

/**
 * @method create
* @param {float|float} float
* @param {cc.Scene|cc.Scene} scene
* @param {cc.TransitionScene::Orientation} orientation
* @return {cc.TransitionFlipX|cc.TransitionFlipX}
*/
create : function(
float,
scene,
orientation 
)
{
    return cc.TransitionFlipX;
},

};

/**
 * @class TransitionFlipY
 */
cc.TransitionFlipY = {

/**
 * @method create
* @param {float|float} float
* @param {cc.Scene|cc.Scene} scene
* @param {cc.TransitionScene::Orientation} orientation
* @return {cc.TransitionFlipY|cc.TransitionFlipY}
*/
create : function(
float,
scene,
orientation 
)
{
    return cc.TransitionFlipY;
},

};

/**
 * @class TransitionFlipAngular
 */
cc.TransitionFlipAngular = {

/**
 * @method create
* @param {float|float} float
* @param {cc.Scene|cc.Scene} scene
* @param {cc.TransitionScene::Orientation} orientation
* @return {cc.TransitionFlipAngular|cc.TransitionFlipAngular}
*/
create : function(
float,
scene,
orientation 
)
{
    return cc.TransitionFlipAngular;
},

};

/**
 * @class TransitionZoomFlipX
 */
cc.TransitionZoomFlipX = {

/**
 * @method create
* @param {float|float} float
* @param {cc.Scene|cc.Scene} scene
* @param {cc.TransitionScene::Orientation} orientation
* @return {cc.TransitionZoomFlipX|cc.TransitionZoomFlipX}
*/
create : function(
float,
scene,
orientation 
)
{
    return cc.TransitionZoomFlipX;
},

};

/**
 * @class TransitionZoomFlipY
 */
cc.TransitionZoomFlipY = {

/**
 * @method create
* @param {float|float} float
* @param {cc.Scene|cc.Scene} scene
* @param {cc.TransitionScene::Orientation} orientation
* @return {cc.TransitionZoomFlipY|cc.TransitionZoomFlipY}
*/
create : function(
float,
scene,
orientation 
)
{
    return cc.TransitionZoomFlipY;
},

};

/**
 * @class TransitionZoomFlipAngular
 */
cc.TransitionZoomFlipAngular = {

/**
 * @method create
* @param {float|float} float
* @param {cc.Scene|cc.Scene} scene
* @param {cc.TransitionScene::Orientation} orientation
* @return {cc.TransitionZoomFlipAngular|cc.TransitionZoomFlipAngular}
*/
create : function(
float,
scene,
orientation 
)
{
    return cc.TransitionZoomFlipAngular;
},

};

/**
 * @class TransitionFade
 */
cc.TransitionFade = {

/**
 * @method create
* @param {float|float} float
* @param {cc.Scene|cc.Scene} scene
* @param {Color3BObject} color3b
* @return {cc.TransitionFade|cc.TransitionFade}
*/
create : function(
float,
scene,
color3b 
)
{
    return cc.TransitionFade;
},

};

/**
 * @class TransitionCrossFade
 */
cc.TransitionCrossFade = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionCrossFade}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionCrossFade;
},

};

/**
 * @class TransitionTurnOffTiles
 */
cc.TransitionTurnOffTiles = {

/**
 * @method easeActionWithAction
 * @param {cc.ActionInterval} arg0
 * @return {cc.ActionInterval}
 */
easeActionWithAction : function (
actioninterval 
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionTurnOffTiles}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionTurnOffTiles;
},

};

/**
 * @class TransitionSplitCols
 */
cc.TransitionSplitCols = {

/**
 * @method action
 * @return {cc.ActionInterval}
 */
action : function (
)
{
    return cc.ActionInterval;
},

/**
 * @method easeActionWithAction
 * @param {cc.ActionInterval} arg0
 * @return {cc.ActionInterval}
 */
easeActionWithAction : function (
actioninterval 
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionSplitCols}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionSplitCols;
},

};

/**
 * @class TransitionSplitRows
 */
cc.TransitionSplitRows = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionSplitRows}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionSplitRows;
},

};

/**
 * @class TransitionFadeTR
 */
cc.TransitionFadeTR = {

/**
 * @method easeActionWithAction
 * @param {cc.ActionInterval} arg0
 * @return {cc.ActionInterval}
 */
easeActionWithAction : function (
actioninterval 
)
{
    return cc.ActionInterval;
},

/**
 * @method actionWithSize
 * @param {SizeObject} arg0
 * @return {cc.ActionInterval}
 */
actionWithSize : function (
size 
)
{
    return cc.ActionInterval;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionFadeTR}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionFadeTR;
},

};

/**
 * @class TransitionFadeBL
 */
cc.TransitionFadeBL = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionFadeBL}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionFadeBL;
},

};

/**
 * @class TransitionFadeUp
 */
cc.TransitionFadeUp = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionFadeUp}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionFadeUp;
},

};

/**
 * @class TransitionFadeDown
 */
cc.TransitionFadeDown = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionFadeDown}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionFadeDown;
},

};

/**
 * @class TransitionPageTurn
 */
cc.TransitionPageTurn = {

/**
 * @method actionWithSize
 * @param {SizeObject} arg0
 * @return {cc.ActionInterval}
 */
actionWithSize : function (
size 
)
{
    return cc.ActionInterval;
},

/**
 * @method initWithDuration
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @param {bool} arg2
 * @return {bool}
 */
initWithDuration : function (
float, 
scene, 
bool 
)
{
    return false;
},

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @param {bool} arg2
 * @return {cc.TransitionPageTurn}
 */
create : function (
float, 
scene, 
bool 
)
{
    return cc.TransitionPageTurn;
},

/**
 * @method TransitionPageTurn
 * @constructor
 */
TransitionPageTurn : function (
)
{
},

};

/**
 * @class TransitionProgress
 */
cc.TransitionProgress = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionProgress}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionProgress;
},

/**
 * @method TransitionProgress
 * @constructor
 */
TransitionProgress : function (
)
{
},

};

/**
 * @class TransitionProgressRadialCCW
 */
cc.TransitionProgressRadialCCW = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionProgressRadialCCW}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionProgressRadialCCW;
},

};

/**
 * @class TransitionProgressRadialCW
 */
cc.TransitionProgressRadialCW = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionProgressRadialCW}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionProgressRadialCW;
},

};

/**
 * @class TransitionProgressHorizontal
 */
cc.TransitionProgressHorizontal = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionProgressHorizontal}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionProgressHorizontal;
},

};

/**
 * @class TransitionProgressVertical
 */
cc.TransitionProgressVertical = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionProgressVertical}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionProgressVertical;
},

};

/**
 * @class TransitionProgressInOut
 */
cc.TransitionProgressInOut = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionProgressInOut}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionProgressInOut;
},

};

/**
 * @class TransitionProgressOutIn
 */
cc.TransitionProgressOutIn = {

/**
 * @method create
 * @param {float} arg0
 * @param {cc.Scene} arg1
 * @return {cc.TransitionProgressOutIn}
 */
create : function (
float, 
scene 
)
{
    return cc.TransitionProgressOutIn;
},

};

/**
 * @class MenuItem
 */
cc.MenuItem = {

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
 * @method activate
 */
activate : function (
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
 * @method selected
 */
selected : function (
)
{
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
 * @method unselected
 */
unselected : function (
)
{
},

/**
 * @method rect
 * @return {RectObject}
 */
rect : function (
)
{
    return cc.Rect;
},

};

/**
 * @class MenuItemLabel
 */
cc.MenuItemLabel = {

/**
 * @method getDisabledColor
 * @return {Color3BObject}
 */
getDisabledColor : function (
)
{
    return cc.Color3B;
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
 * @method setLabel
 * @param {cc.Node} arg0
 */
setLabel : function (
node 
)
{
},

/**
 * @method setDisabledColor
 * @param {Color3BObject} arg0
 */
setDisabledColor : function (
color3b 
)
{
},

/**
 * @method getLabel
 * @return {cc.Node}
 */
getLabel : function (
)
{
    return cc.Node;
},

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
 * @param {String} arg0
 */
setFontNameObj : function (
str 
)
{
},

/**
 * @method getFontSizeObj
 * @return {int}
 */
getFontSizeObj : function (
)
{
    return 0;
},

/**
 * @method getFontNameObj
 * @return {String}
 */
getFontNameObj : function (
)
{
    return ;
},

/**
 * @method setFontSizeObj
 * @param {int} arg0
 */
setFontSizeObj : function (
int 
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
 * @method getFontSize
 * @return {int}
 */
getFontSize : function (
)
{
    return 0;
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
 * @method setFontSize
 * @param {int} arg0
 */
setFontSize : function (
int 
)
{
},

};

/**
 * @class MenuItemSprite
 */
cc.MenuItemSprite = {

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
 * @method selected
 */
selected : function (
)
{
},

/**
 * @method setNormalImage
 * @param {cc.Node} arg0
 */
setNormalImage : function (
node 
)
{
},

/**
 * @method setDisabledImage
 * @param {cc.Node} arg0
 */
setDisabledImage : function (
node 
)
{
},

/**
 * @method setSelectedImage
 * @param {cc.Node} arg0
 */
setSelectedImage : function (
node 
)
{
},

/**
 * @method getDisabledImage
 * @return {cc.Node}
 */
getDisabledImage : function (
)
{
    return cc.Node;
},

/**
 * @method getSelectedImage
 * @return {cc.Node}
 */
getSelectedImage : function (
)
{
    return cc.Node;
},

/**
 * @method getNormalImage
 * @return {cc.Node}
 */
getNormalImage : function (
)
{
    return cc.Node;
},

/**
 * @method unselected
 */
unselected : function (
)
{
},

};

/**
 * @class MenuItemImage
 */
cc.MenuItemImage = {

/**
 * @method setDisabledSpriteFrame
 * @param {cc.SpriteFrame} arg0
 */
setDisabledSpriteFrame : function (
spriteframe 
)
{
},

/**
 * @method setSelectedSpriteFrame
 * @param {cc.SpriteFrame} arg0
 */
setSelectedSpriteFrame : function (
spriteframe 
)
{
},

/**
 * @method setNormalSpriteFrame
 * @param {cc.SpriteFrame} arg0
 */
setNormalSpriteFrame : function (
spriteframe 
)
{
},

};

/**
 * @class MenuItemToggle
 */
cc.MenuItemToggle = {

/**
 * @method setSubItems
 * @param {Array} arg0
 */
setSubItems : function (
array 
)
{
},

/**
 * @method getSelectedIndex
 * @return {unsigned int}
 */
getSelectedIndex : function (
)
{
    return 0;
},

/**
 * @method addSubItem
 * @param {cc.MenuItem} arg0
 */
addSubItem : function (
menuitem 
)
{
},

/**
 * @method getSelectedItem
 * @return {cc.MenuItem}
 */
getSelectedItem : function (
)
{
    return cc.MenuItem;
},

/**
 * @method setSelectedIndex
 * @param {unsigned int} arg0
 */
setSelectedIndex : function (
int 
)
{
},

};

/**
 * @class Menu
 */
cc.Menu = {

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
 * @method alignItemsVertically
 */
alignItemsVertically : function (
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
 * @method alignItemsHorizontallyWithPadding
 * @param {float} arg0
 */
alignItemsHorizontallyWithPadding : function (
float 
)
{
},

/**
 * @method alignItemsVerticallyWithPadding
 * @param {float} arg0
 */
alignItemsVerticallyWithPadding : function (
float 
)
{
},

/**
 * @method alignItemsHorizontally
 */
alignItemsHorizontally : function (
)
{
},

};

/**
 * @class ClippingNode
 */
cc.ClippingNode = {

/**
 * @method isInverted
 * @return {bool}
 */
isInverted : function (
)
{
    return false;
},

/**
 * @method setInverted
 * @param {bool} arg0
 */
setInverted : function (
bool 
)
{
},

/**
 * @method setStencil
 * @param {cc.Node} arg0
 */
setStencil : function (
node 
)
{
},

/**
 * @method getAlphaThreshold
 * @return {float}
 */
getAlphaThreshold : function (
)
{
    return 0;
},

/**
 * @method getStencil
 * @return {cc.Node}
 */
getStencil : function (
)
{
    return cc.Node;
},

/**
 * @method setAlphaThreshold
 * @param {float} arg0
 */
setAlphaThreshold : function (
float 
)
{
},

/**
 * @method create
* @param {cc.Node} node
* @return {cc.ClippingNode|cc.ClippingNode}
*/
create : function(
node 
)
{
    return cc.ClippingNode;
},

};

/**
 * @class MotionStreak
 */
cc.MotionStreak = {

/**
 * @method reset
 */
reset : function (
)
{
},

/**
 * @method setTexture
 * @param {cc.Texture2D} arg0
 */
setTexture : function (
texture2d 
)
{
},

/**
 * @method getTexture
 * @return {cc.Texture2D}
 */
getTexture : function (
)
{
    return cc.Texture2D;
},

/**
 * @method tintWithColor
 * @param {Color3BObject} arg0
 */
tintWithColor : function (
color3b 
)
{
},

/**
 * @method setStartingPositionInitialized
 * @param {bool} arg0
 */
setStartingPositionInitialized : function (
bool 
)
{
},

/**
 * @method isStartingPositionInitialized
 * @return {bool}
 */
isStartingPositionInitialized : function (
)
{
    return false;
},

/**
 * @method isFastMode
 * @return {bool}
 */
isFastMode : function (
)
{
    return false;
},

/**
 * @method setFastMode
 * @param {bool} arg0
 */
setFastMode : function (
bool 
)
{
},

/**
 * @method create
* @param {float|float} float
* @param {float|float} float
* @param {float|float} float
* @param {Color3BObject|Color3BObject} color3b
* @param {cc.Texture2D|String} texture2d
* @return {cc.MotionStreak|cc.MotionStreak}
*/
create : function(
float,
float,
float,
color3b,
str 
)
{
    return cc.MotionStreak;
},

};

/**
 * @class Sprite
 */
cc.Sprite = {

/**
 * @method setSpriteFrame
* @param {cc.SpriteFrame|String} spriteframe
*/
setSpriteFrame : function(
str 
)
{
},

/**
 * @method setTexture
* @param {cc.Texture2D|String} texture2d
*/
setTexture : function(
str 
)
{
},

/**
 * @method getTexture
 * @return {cc.Texture2D}
 */
getTexture : function (
)
{
    return cc.Texture2D;
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
 * @method getBatchNode
 * @return {cc.SpriteBatchNode}
 */
getBatchNode : function (
)
{
    return cc.SpriteBatchNode;
},

/**
 * @method getOffsetPosition
 * @return {PointObject}
 */
getOffsetPosition : function (
)
{
    return cc.Point;
},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool} arg0
 */
removeAllChildrenWithCleanup : function (
bool 
)
{
},

/**
 * @method updateTransform
 */
updateTransform : function (
)
{
},

/**
 * @method setTextureRect
* @param {RectObject|RectObject} rect
* @param {bool} bool
* @param {SizeObject} size
*/
setTextureRect : function(
rect,
bool,
size 
)
{
},

/**
 * @method isFrameDisplayed
 * @param {cc.SpriteFrame} arg0
 * @return {bool}
 */
isFrameDisplayed : function (
spriteframe 
)
{
    return false;
},

/**
 * @method getAtlasIndex
 * @return {long}
 */
getAtlasIndex : function (
)
{
    return 0;
},

/**
 * @method setBatchNode
 * @param {cc.SpriteBatchNode} arg0
 */
setBatchNode : function (
spritebatchnode 
)
{
},

/**
 * @method setDisplayFrameWithAnimationName
 * @param {String} arg0
 * @param {long} arg1
 */
setDisplayFrameWithAnimationName : function (
str, 
long 
)
{
},

/**
 * @method setTextureAtlas
 * @param {cc.TextureAtlas} arg0
 */
setTextureAtlas : function (
textureatlas 
)
{
},

/**
 * @method getSpriteFrame
 * @return {cc.SpriteFrame}
 */
getSpriteFrame : function (
)
{
    return cc.SpriteFrame;
},

/**
 * @method isDirty
 * @return {bool}
 */
isDirty : function (
)
{
    return false;
},

/**
 * @method setAtlasIndex
 * @param {long} arg0
 */
setAtlasIndex : function (
long 
)
{
},

/**
 * @method setDirty
 * @param {bool} arg0
 */
setDirty : function (
bool 
)
{
},

/**
 * @method isTextureRectRotated
 * @return {bool}
 */
isTextureRectRotated : function (
)
{
    return false;
},

/**
 * @method getTextureRect
 * @return {RectObject}
 */
getTextureRect : function (
)
{
    return cc.Rect;
},

/**
 * @method getTextureAtlas
 * @return {cc.TextureAtlas}
 */
getTextureAtlas : function (
)
{
    return cc.TextureAtlas;
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
 * @method setVertexRect
 * @param {RectObject} arg0
 */
setVertexRect : function (
rect 
)
{
},

/**
 * @method create
* @param {String|String} str
* @param {RectObject} rect
* @return {cc.Sprite|cc.Sprite|cc.Sprite}
*/
create : function(
str,
rect 
)
{
    return cc.Sprite;
},

/**
 * @method createWithTexture
* @param {cc.Texture2D|cc.Texture2D} texture2d
* @param {RectObject} rect
* @param {bool} bool
* @return {cc.Sprite|cc.Sprite}
*/
createWithTexture : function(
texture2d,
rect,
bool 
)
{
    return cc.Sprite;
},

/**
 * @method createWithSpriteFrameName
 * @param {String} arg0
 * @return {cc.Sprite}
 */
createWithSpriteFrameName : function (
str 
)
{
    return cc.Sprite;
},

/**
 * @method createWithSpriteFrame
 * @param {cc.SpriteFrame} arg0
 * @return {cc.Sprite}
 */
createWithSpriteFrame : function (
spriteframe 
)
{
    return cc.Sprite;
},

};

/**
 * @class ProgressTimer
 */
cc.ProgressTimer = {

/**
 * @method isReverseDirection
 * @return {bool}
 */
isReverseDirection : function (
)
{
    return false;
},

/**
 * @method setBarChangeRate
 * @param {PointObject} arg0
 */
setBarChangeRate : function (
point 
)
{
},

/**
 * @method getPercentage
 * @return {float}
 */
getPercentage : function (
)
{
    return 0;
},

/**
 * @method setSprite
 * @param {cc.Sprite} arg0
 */
setSprite : function (
sprite 
)
{
},

/**
 * @method getType
 * @return {cc.ProgressTimer::Type}
 */
getType : function (
)
{
    return 0;
},

/**
 * @method getSprite
 * @return {cc.Sprite}
 */
getSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method setMidpoint
 * @param {PointObject} arg0
 */
setMidpoint : function (
point 
)
{
},

/**
 * @method getBarChangeRate
 * @return {PointObject}
 */
getBarChangeRate : function (
)
{
    return cc.Point;
},

/**
 * @method setReverseDirection
* @param {bool|bool} bool
*/
setReverseDirection : function(
bool 
)
{
},

/**
 * @method getMidpoint
 * @return {PointObject}
 */
getMidpoint : function (
)
{
    return cc.Point;
},

/**
 * @method setPercentage
 * @param {float} arg0
 */
setPercentage : function (
float 
)
{
},

/**
 * @method setType
 * @param {cc.ProgressTimer::Type} arg0
 */
setType : function (
type 
)
{
},

/**
 * @method create
 * @param {cc.Sprite} arg0
 * @return {cc.ProgressTimer}
 */
create : function (
sprite 
)
{
    return cc.ProgressTimer;
},

};

/**
 * @class RenderTexture
 */
cc.RenderTexture = {

/**
 * @method setVirtualViewport
 * @param {PointObject} arg0
 * @param {RectObject} arg1
 * @param {RectObject} arg2
 */
setVirtualViewport : function (
point, 
rect, 
rect 
)
{
},

/**
 * @method clearStencil
 * @param {int} arg0
 */
clearStencil : function (
int 
)
{
},

/**
 * @method getClearDepth
 * @return {float}
 */
getClearDepth : function (
)
{
    return 0;
},

/**
 * @method getClearStencil
 * @return {int}
 */
getClearStencil : function (
)
{
    return 0;
},

/**
 * @method end
 */
end : function (
)
{
},

/**
 * @method setClearStencil
 * @param {int} arg0
 */
setClearStencil : function (
int 
)
{
},

/**
 * @method setSprite
 * @param {cc.Sprite} arg0
 */
setSprite : function (
sprite 
)
{
},

/**
 * @method getSprite
 * @return {cc.Sprite}
 */
getSprite : function (
)
{
    return cc.Sprite;
},

/**
 * @method isAutoDraw
 * @return {bool}
 */
isAutoDraw : function (
)
{
    return false;
},

/**
 * @method setKeepMatrix
 * @param {bool} arg0
 */
setKeepMatrix : function (
bool 
)
{
},

/**
 * @method setClearFlags
 * @param {unsigned int} arg0
 */
setClearFlags : function (
int 
)
{
},

/**
 * @method begin
 */
begin : function (
)
{
},

/**
 * @method saveToFile
* @param {String|String} str
* @param {cc.Image::Format} format
* @return {bool|bool}
*/
saveToFile : function(
str,
format 
)
{
    return false;
},

/**
 * @method setAutoDraw
 * @param {bool} arg0
 */
setAutoDraw : function (
bool 
)
{
},

/**
 * @method setClearColor
 * @param {Color4FObject} arg0
 */
setClearColor : function (
color4f 
)
{
},

/**
 * @method endToLua
 */
endToLua : function (
)
{
},

/**
 * @method beginWithClear
* @param {float|float|float} float
* @param {float|float|float} float
* @param {float|float|float} float
* @param {float|float|float} float
* @param {float|float} float
* @param {int} int
*/
beginWithClear : function(
float,
float,
float,
float,
float,
int 
)
{
},

/**
 * @method clearDepth
 * @param {float} arg0
 */
clearDepth : function (
float 
)
{
},

/**
 * @method getClearColor
 * @return {Color4FObject}
 */
getClearColor : function (
)
{
    return cc.Color4F;
},

/**
 * @method clear
 * @param {float} arg0
 * @param {float} arg1
 * @param {float} arg2
 * @param {float} arg3
 */
clear : function (
float, 
float, 
float, 
float 
)
{
},

/**
 * @method getClearFlags
 * @return {unsigned int}
 */
getClearFlags : function (
)
{
    return 0;
},

/**
 * @method newImage
 * @return {cc.Image}
 */
newImage : function (
)
{
    return cc.Image;
},

/**
 * @method setClearDepth
 * @param {float} arg0
 */
setClearDepth : function (
float 
)
{
},

/**
 * @method initWithWidthAndHeight
* @param {int|int} int
* @param {int|int} int
* @param {cc.Texture2D::PixelFormat|cc.Texture2D::PixelFormat} pixelformat
* @param {unsigned int} int
* @return {bool|bool}
*/
initWithWidthAndHeight : function(
int,
int,
pixelformat,
int 
)
{
    return false;
},

/**
 * @method create
* @param {int|int|int} int
* @param {int|int|int} int
* @param {cc.Texture2D::PixelFormat|cc.Texture2D::PixelFormat} pixelformat
* @param {unsigned int} int
* @return {cc.RenderTexture|cc.RenderTexture|cc.RenderTexture}
*/
create : function(
int,
int,
pixelformat,
int 
)
{
    return cc.RenderTexture;
},

/**
 * @method RenderTexture
 * @constructor
 */
RenderTexture : function (
)
{
},

};

/**
 * @class NodeGrid
 */
cc.NodeGrid = {

/**
 * @method setTarget
 * @param {cc.Node} arg0
 */
setTarget : function (
node 
)
{
},

/**
 * @method getGrid
* @return {cc.GridBase|cc.GridBase}
*/
getGrid : function(
)
{
    return cc.GridBase;
},

/**
 * @method create
 * @return {cc.NodeGrid}
 */
create : function (
)
{
    return cc.NodeGrid;
},

};

/**
 * @class ParticleBatchNode
 */
cc.ParticleBatchNode = {

/**
 * @method setTexture
 * @param {cc.Texture2D} arg0
 */
setTexture : function (
texture2d 
)
{
},

/**
 * @method disableParticle
 * @param {int} arg0
 */
disableParticle : function (
int 
)
{
},

/**
 * @method getTexture
 * @return {cc.Texture2D}
 */
getTexture : function (
)
{
    return cc.Texture2D;
},

/**
 * @method setTextureAtlas
 * @param {cc.TextureAtlas} arg0
 */
setTextureAtlas : function (
textureatlas 
)
{
},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool} arg0
 */
removeAllChildrenWithCleanup : function (
bool 
)
{
},

/**
 * @method getTextureAtlas
 * @return {cc.TextureAtlas}
 */
getTextureAtlas : function (
)
{
    return cc.TextureAtlas;
},

/**
 * @method insertChild
 * @param {cc.ParticleSystem} arg0
 * @param {int} arg1
 */
insertChild : function (
particlesystem, 
int 
)
{
},

/**
 * @method removeChildAtIndex
 * @param {int} arg0
 * @param {bool} arg1
 */
removeChildAtIndex : function (
int, 
bool 
)
{
},

/**
 * @method create
 * @param {String} arg0
 * @param {int} arg1
 * @return {cc.ParticleBatchNode}
 */
create : function (
str, 
int 
)
{
    return cc.ParticleBatchNode;
},

/**
 * @method createWithTexture
 * @param {cc.Texture2D} arg0
 * @param {int} arg1
 * @return {cc.ParticleBatchNode}
 */
createWithTexture : function (
texture2d, 
int 
)
{
    return cc.ParticleBatchNode;
},

};

/**
 * @class ParticleSystem
 */
cc.ParticleSystem = {

/**
 * @method getStartSizeVar
 * @return {float}
 */
getStartSizeVar : function (
)
{
    return 0;
},

/**
 * @method getTexture
 * @return {cc.Texture2D}
 */
getTexture : function (
)
{
    return cc.Texture2D;
},

/**
 * @method isFull
 * @return {bool}
 */
isFull : function (
)
{
    return false;
},

/**
 * @method getBatchNode
 * @return {cc.ParticleBatchNode}
 */
getBatchNode : function (
)
{
    return cc.ParticleBatchNode;
},

/**
 * @method getStartColor
 * @return {Color4FObject}
 */
getStartColor : function (
)
{
    return cc.Color4F;
},

/**
 * @method getPositionType
 * @return {cc.ParticleSystem::PositionType}
 */
getPositionType : function (
)
{
    return 0;
},

/**
 * @method setPosVar
 * @param {PointObject} arg0
 */
setPosVar : function (
point 
)
{
},

/**
 * @method getEndSpin
 * @return {float}
 */
getEndSpin : function (
)
{
    return 0;
},

/**
 * @method setRotatePerSecondVar
 * @param {float} arg0
 */
setRotatePerSecondVar : function (
float 
)
{
},

/**
 * @method getStartSpinVar
 * @return {float}
 */
getStartSpinVar : function (
)
{
    return 0;
},

/**
 * @method getRadialAccelVar
 * @return {float}
 */
getRadialAccelVar : function (
)
{
    return 0;
},

/**
 * @method getEndSizeVar
 * @return {float}
 */
getEndSizeVar : function (
)
{
    return 0;
},

/**
 * @method setRotation
 * @param {float} arg0
 */
setRotation : function (
float 
)
{
},

/**
 * @method setTangentialAccel
 * @param {float} arg0
 */
setTangentialAccel : function (
float 
)
{
},

/**
 * @method setScaleY
 * @param {float} arg0
 */
setScaleY : function (
float 
)
{
},

/**
 * @method setScaleX
 * @param {float} arg0
 */
setScaleX : function (
float 
)
{
},

/**
 * @method getRadialAccel
 * @return {float}
 */
getRadialAccel : function (
)
{
    return 0;
},

/**
 * @method setStartRadius
 * @param {float} arg0
 */
setStartRadius : function (
float 
)
{
},

/**
 * @method setRotatePerSecond
 * @param {float} arg0
 */
setRotatePerSecond : function (
float 
)
{
},

/**
 * @method setEndSize
 * @param {float} arg0
 */
setEndSize : function (
float 
)
{
},

/**
 * @method getGravity
 * @return {PointObject}
 */
getGravity : function (
)
{
    return cc.Point;
},

/**
 * @method getTangentialAccel
 * @return {float}
 */
getTangentialAccel : function (
)
{
    return 0;
},

/**
 * @method setEndRadius
 * @param {float} arg0
 */
setEndRadius : function (
float 
)
{
},

/**
 * @method getSpeed
 * @return {float}
 */
getSpeed : function (
)
{
    return 0;
},

/**
 * @method getAngle
 * @return {float}
 */
getAngle : function (
)
{
    return 0;
},

/**
 * @method setEndColor
 * @param {Color4FObject} arg0
 */
setEndColor : function (
color4f 
)
{
},

/**
 * @method setStartSpin
 * @param {float} arg0
 */
setStartSpin : function (
float 
)
{
},

/**
 * @method setDuration
 * @param {float} arg0
 */
setDuration : function (
float 
)
{
},

/**
 * @method setTexture
 * @param {cc.Texture2D} arg0
 */
setTexture : function (
texture2d 
)
{
},

/**
 * @method getPosVar
 * @return {PointObject}
 */
getPosVar : function (
)
{
    return cc.Point;
},

/**
 * @method updateWithNoTime
 */
updateWithNoTime : function (
)
{
},

/**
 * @method isBlendAdditive
 * @return {bool}
 */
isBlendAdditive : function (
)
{
    return false;
},

/**
 * @method getSpeedVar
 * @return {float}
 */
getSpeedVar : function (
)
{
    return 0;
},

/**
 * @method setPositionType
 * @param {cc.ParticleSystem::PositionType} arg0
 */
setPositionType : function (
positiontype 
)
{
},

/**
 * @method stopSystem
 */
stopSystem : function (
)
{
},

/**
 * @method getSourcePosition
 * @return {PointObject}
 */
getSourcePosition : function (
)
{
    return cc.Point;
},

/**
 * @method setLifeVar
 * @param {float} arg0
 */
setLifeVar : function (
float 
)
{
},

/**
 * @method setTotalParticles
 * @param {int} arg0
 */
setTotalParticles : function (
int 
)
{
},

/**
 * @method setEndColorVar
 * @param {Color4FObject} arg0
 */
setEndColorVar : function (
color4f 
)
{
},

/**
 * @method updateQuadWithParticle
 * @param {cc.sParticle} arg0
 * @param {PointObject} arg1
 */
updateQuadWithParticle : function (
sparticle, 
point 
)
{
},

/**
 * @method getAtlasIndex
 * @return {int}
 */
getAtlasIndex : function (
)
{
    return 0;
},

/**
 * @method getStartSize
 * @return {float}
 */
getStartSize : function (
)
{
    return 0;
},

/**
 * @method setStartSpinVar
 * @param {float} arg0
 */
setStartSpinVar : function (
float 
)
{
},

/**
 * @method resetSystem
 */
resetSystem : function (
)
{
},

/**
 * @method setAtlasIndex
 * @param {int} arg0
 */
setAtlasIndex : function (
int 
)
{
},

/**
 * @method setTangentialAccelVar
 * @param {float} arg0
 */
setTangentialAccelVar : function (
float 
)
{
},

/**
 * @method setEndRadiusVar
 * @param {float} arg0
 */
setEndRadiusVar : function (
float 
)
{
},

/**
 * @method getEndRadius
 * @return {float}
 */
getEndRadius : function (
)
{
    return 0;
},

/**
 * @method isOpacityModifyRGB
 * @return {bool}
 */
isOpacityModifyRGB : function (
)
{
    return false;
},

/**
 * @method isActive
 * @return {bool}
 */
isActive : function (
)
{
    return false;
},

/**
 * @method setRadialAccelVar
 * @param {float} arg0
 */
setRadialAccelVar : function (
float 
)
{
},

/**
 * @method setStartSize
 * @param {float} arg0
 */
setStartSize : function (
float 
)
{
},

/**
 * @method setSpeed
 * @param {float} arg0
 */
setSpeed : function (
float 
)
{
},

/**
 * @method getStartSpin
 * @return {float}
 */
getStartSpin : function (
)
{
    return 0;
},

/**
 * @method getRotatePerSecond
 * @return {float}
 */
getRotatePerSecond : function (
)
{
    return 0;
},

/**
 * @method initParticle
 * @param {cc.sParticle} arg0
 */
initParticle : function (
sparticle 
)
{
},

/**
 * @method setEmitterMode
 * @param {cc.ParticleSystem::Mode} arg0
 */
setEmitterMode : function (
mode 
)
{
},

/**
 * @method getDuration
 * @return {float}
 */
getDuration : function (
)
{
    return 0;
},

/**
 * @method setSourcePosition
 * @param {PointObject} arg0
 */
setSourcePosition : function (
point 
)
{
},

/**
 * @method getEndSpinVar
 * @return {float}
 */
getEndSpinVar : function (
)
{
    return 0;
},

/**
 * @method setBlendAdditive
 * @param {bool} arg0
 */
setBlendAdditive : function (
bool 
)
{
},

/**
 * @method setLife
 * @param {float} arg0
 */
setLife : function (
float 
)
{
},

/**
 * @method setAngleVar
 * @param {float} arg0
 */
setAngleVar : function (
float 
)
{
},

/**
 * @method setRotationIsDir
 * @param {bool} arg0
 */
setRotationIsDir : function (
bool 
)
{
},

/**
 * @method setEndSizeVar
 * @param {float} arg0
 */
setEndSizeVar : function (
float 
)
{
},

/**
 * @method setAngle
 * @param {float} arg0
 */
setAngle : function (
float 
)
{
},

/**
 * @method setBatchNode
 * @param {cc.ParticleBatchNode} arg0
 */
setBatchNode : function (
particlebatchnode 
)
{
},

/**
 * @method getTangentialAccelVar
 * @return {float}
 */
getTangentialAccelVar : function (
)
{
    return 0;
},

/**
 * @method getEmitterMode
 * @return {cc.ParticleSystem::Mode}
 */
getEmitterMode : function (
)
{
    return 0;
},

/**
 * @method setEndSpinVar
 * @param {float} arg0
 */
setEndSpinVar : function (
float 
)
{
},

/**
 * @method getAngleVar
 * @return {float}
 */
getAngleVar : function (
)
{
    return 0;
},

/**
 * @method setStartColor
 * @param {Color4FObject} arg0
 */
setStartColor : function (
color4f 
)
{
},

/**
 * @method getRotatePerSecondVar
 * @return {float}
 */
getRotatePerSecondVar : function (
)
{
    return 0;
},

/**
 * @method getEndSize
 * @return {float}
 */
getEndSize : function (
)
{
    return 0;
},

/**
 * @method getLife
 * @return {float}
 */
getLife : function (
)
{
    return 0;
},

/**
 * @method setSpeedVar
 * @param {float} arg0
 */
setSpeedVar : function (
float 
)
{
},

/**
 * @method setAutoRemoveOnFinish
 * @param {bool} arg0
 */
setAutoRemoveOnFinish : function (
bool 
)
{
},

/**
 * @method setGravity
 * @param {PointObject} arg0
 */
setGravity : function (
point 
)
{
},

/**
 * @method postStep
 */
postStep : function (
)
{
},

/**
 * @method setEmissionRate
 * @param {float} arg0
 */
setEmissionRate : function (
float 
)
{
},

/**
 * @method getEndColorVar
 * @return {Color4FObject}
 */
getEndColorVar : function (
)
{
    return cc.Color4F;
},

/**
 * @method getRotationIsDir
 * @return {bool}
 */
getRotationIsDir : function (
)
{
    return false;
},

/**
 * @method setScale
 * @param {float} arg0
 */
setScale : function (
float 
)
{
},

/**
 * @method getEmissionRate
 * @return {float}
 */
getEmissionRate : function (
)
{
    return 0;
},

/**
 * @method getEndColor
 * @return {Color4FObject}
 */
getEndColor : function (
)
{
    return cc.Color4F;
},

/**
 * @method getLifeVar
 * @return {float}
 */
getLifeVar : function (
)
{
    return 0;
},

/**
 * @method setStartSizeVar
 * @param {float} arg0
 */
setStartSizeVar : function (
float 
)
{
},

/**
 * @method setOpacityModifyRGB
 * @param {bool} arg0
 */
setOpacityModifyRGB : function (
bool 
)
{
},

/**
 * @method addParticle
 * @return {bool}
 */
addParticle : function (
)
{
    return false;
},

/**
 * @method getStartRadius
 * @return {float}
 */
getStartRadius : function (
)
{
    return 0;
},

/**
 * @method getParticleCount
 * @return {unsigned int}
 */
getParticleCount : function (
)
{
    return 0;
},

/**
 * @method getStartRadiusVar
 * @return {float}
 */
getStartRadiusVar : function (
)
{
    return 0;
},

/**
 * @method setStartColorVar
 * @param {Color4FObject} arg0
 */
setStartColorVar : function (
color4f 
)
{
},

/**
 * @method setEndSpin
 * @param {float} arg0
 */
setEndSpin : function (
float 
)
{
},

/**
 * @method setRadialAccel
 * @param {float} arg0
 */
setRadialAccel : function (
float 
)
{
},

/**
 * @method isAutoRemoveOnFinish
 * @return {bool}
 */
isAutoRemoveOnFinish : function (
)
{
    return false;
},

/**
 * @method getTotalParticles
 * @return {int}
 */
getTotalParticles : function (
)
{
    return 0;
},

/**
 * @method setStartRadiusVar
 * @param {float} arg0
 */
setStartRadiusVar : function (
float 
)
{
},

/**
 * @method getEndRadiusVar
 * @return {float}
 */
getEndRadiusVar : function (
)
{
    return 0;
},

/**
 * @method getStartColorVar
 * @return {Color4FObject}
 */
getStartColorVar : function (
)
{
    return cc.Color4F;
},

/**
 * @method create
 * @param {String} arg0
 * @return {cc.ParticleSystem}
 */
create : function (
str 
)
{
    return cc.ParticleSystem;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleSystem}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleSystem;
},

};

/**
 * @class ParticleSystemQuad
 */
cc.ParticleSystem = {

/**
 * @method setDisplayFrame
 * @param {cc.SpriteFrame} arg0
 */
setDisplayFrame : function (
spriteframe 
)
{
},

/**
 * @method setTextureWithRect
 * @param {cc.Texture2D} arg0
 * @param {RectObject} arg1
 */
setTextureWithRect : function (
texture2d, 
rect 
)
{
},

/**
 * @method create
* @param {String} str
* @return {cc.ParticleSystemQuad|cc.ParticleSystemQuad}
*/
create : function(
str 
)
{
    return cc.ParticleSystemQuad;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleSystemQuad}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleSystemQuad;
},

};

/**
 * @class ParticleFire
 */
cc.ParticleFire = {

/**
 * @method create
 * @return {cc.ParticleFire}
 */
create : function (
)
{
    return cc.ParticleFire;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleFire}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleFire;
},

};

/**
 * @class ParticleFireworks
 */
cc.ParticleFireworks = {

/**
 * @method create
 * @return {cc.ParticleFireworks}
 */
create : function (
)
{
    return cc.ParticleFireworks;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleFireworks}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleFireworks;
},

};

/**
 * @class ParticleSun
 */
cc.ParticleSun = {

/**
 * @method create
 * @return {cc.ParticleSun}
 */
create : function (
)
{
    return cc.ParticleSun;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleSun}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleSun;
},

};

/**
 * @class ParticleGalaxy
 */
cc.ParticleGalaxy = {

/**
 * @method create
 * @return {cc.ParticleGalaxy}
 */
create : function (
)
{
    return cc.ParticleGalaxy;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleGalaxy}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleGalaxy;
},

};

/**
 * @class ParticleFlower
 */
cc.ParticleFlower = {

/**
 * @method create
 * @return {cc.ParticleFlower}
 */
create : function (
)
{
    return cc.ParticleFlower;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleFlower}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleFlower;
},

};

/**
 * @class ParticleMeteor
 */
cc.ParticleMeteor = {

/**
 * @method create
 * @return {cc.ParticleMeteor}
 */
create : function (
)
{
    return cc.ParticleMeteor;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleMeteor}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleMeteor;
},

};

/**
 * @class ParticleSpiral
 */
cc.ParticleSpiral = {

/**
 * @method create
 * @return {cc.ParticleSpiral}
 */
create : function (
)
{
    return cc.ParticleSpiral;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleSpiral}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleSpiral;
},

};

/**
 * @class ParticleExplosion
 */
cc.ParticleExplosion = {

/**
 * @method create
 * @return {cc.ParticleExplosion}
 */
create : function (
)
{
    return cc.ParticleExplosion;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleExplosion}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleExplosion;
},

};

/**
 * @class ParticleSmoke
 */
cc.ParticleSmoke = {

/**
 * @method create
 * @return {cc.ParticleSmoke}
 */
create : function (
)
{
    return cc.ParticleSmoke;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleSmoke}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleSmoke;
},

};

/**
 * @class ParticleSnow
 */
cc.ParticleSnow = {

/**
 * @method create
 * @return {cc.ParticleSnow}
 */
create : function (
)
{
    return cc.ParticleSnow;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleSnow}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleSnow;
},

};

/**
 * @class ParticleRain
 */
cc.ParticleRain = {

/**
 * @method create
 * @return {cc.ParticleRain}
 */
create : function (
)
{
    return cc.ParticleRain;
},

/**
 * @method createWithTotalParticles
 * @param {int} arg0
 * @return {cc.ParticleRain}
 */
createWithTotalParticles : function (
int 
)
{
    return cc.ParticleRain;
},

};

/**
 * @class EventListenerCustom
 */
cc.EventListenerCustom = {

/**
 * @method create
 * @param {String} arg0
 * @param {function} arg1
 * @return {cc.EventListenerCustom}
 */
create : function (
str, 
func 
)
{
    return cc.EventListenerCustom;
},

};

/**
 * @class EventCustom
 */
cc.EventCustom = {

/**
 * @method getEventName
 * @return {String}
 */
getEventName : function (
)
{
    return ;
},

/**
 * @method EventCustom
 * @constructor
 * @param {String} arg0
 */
EventCustom : function (
str 
)
{
},

};

/**
 * @class Device
 */
cc.Device = {

/**
 * @method setAccelerometerEnabled
 * @param {bool} arg0
 */
setAccelerometerEnabled : function (
bool 
)
{
},

/**
 * @method setAccelerometerInterval
 * @param {float} arg0
 */
setAccelerometerInterval : function (
float 
)
{
},

/**
 * @method getDPI
 * @return {int}
 */
getDPI : function (
)
{
    return 0;
},

};

/**
 * @class FileUtils
 */
cc.FileUtils = {

/**
 * @method fullPathForFilename
 * @param {String} arg0
 * @return {String}
 */
fullPathForFilename : function (
str 
)
{
    return ;
},

/**
 * @method getStringFromFile
 * @param {String} arg0
 * @return {String}
 */
getStringFromFile : function (
str 
)
{
    return ;
},

/**
 * @method setFilenameLookupDictionary
 * @param {MapObject} arg0
 */
setFilenameLookupDictionary : function (
map 
)
{
},

/**
 * @method isAbsolutePath
 * @param {String} arg0
 * @return {bool}
 */
isAbsolutePath : function (
str 
)
{
    return false;
},

/**
 * @method loadFilenameLookupDictionaryFromFile
 * @param {String} arg0
 */
loadFilenameLookupDictionaryFromFile : function (
str 
)
{
},

/**
 * @method isPopupNotify
 * @return {bool}
 */
isPopupNotify : function (
)
{
    return false;
},

/**
 * @method getValueVectorFromFile
 * @param {String} arg0
 * @return {Array}
 */
getValueVectorFromFile : function (
str 
)
{
    return new Array();
},

/**
 * @method writeToFile
 * @param {MapObject} arg0
 * @param {String} arg1
 * @return {bool}
 */
writeToFile : function (
map, 
str 
)
{
    return false;
},

/**
 * @method getValueMapFromFile
 * @param {String} arg0
 * @return {MapObject}
 */
getValueMapFromFile : function (
str 
)
{
    return map_object;
},

/**
 * @method addSearchResolutionsOrder
 * @param {String} arg0
 */
addSearchResolutionsOrder : function (
str 
)
{
},

/**
 * @method addSearchPath
 * @param {String} arg0
 */
addSearchPath : function (
str 
)
{
},

/**
 * @method isFileExist
 * @param {String} arg0
 * @return {bool}
 */
isFileExist : function (
str 
)
{
    return false;
},

/**
 * @method purgeCachedEntries
 */
purgeCachedEntries : function (
)
{
},

/**
 * @method fullPathFromRelativeFile
 * @param {String} arg0
 * @param {String} arg1
 * @return {String}
 */
fullPathFromRelativeFile : function (
str, 
str 
)
{
    return ;
},

/**
 * @method getInstance
 * @return {cc.FileUtils}
 */
getInstance : function (
)
{
    return cc.FileUtils;
},

};

/**
 * @class SAXParser
 */
cc.SAXParser = {

/**
 * @method init
 * @param {char*} arg0
 * @return {bool}
 */
init : function (
char 
)
{
    return false;
},

};

/**
 * @class Application
 */
cc.Application = {

/**
 * @method getTargetPlatform
 * @return {cc.ApplicationProtocol::Platform}
 */
getTargetPlatform : function (
)
{
    return 0;
},

/**
 * @method setAnimationInterval
 * @param {double} arg0
 */
setAnimationInterval : function (
double 
)
{
},

/**
 * @method getCurrentLanguage
 * @return {cc.LanguageType}
 */
getCurrentLanguage : function (
)
{
    return 0;
},

/**
 * @method getInstance
 * @return {cc.Application}
 */
getInstance : function (
)
{
    return cc.Application;
},

};

/**
 * @class GLViewProtocol
 */
cc.GLViewProtocol = {

/**
 * @method getVisibleOrigin
 * @return {PointObject}
 */
getVisibleOrigin : function (
)
{
    return cc.Point;
},

/**
 * @method setDesignResolutionSize
 * @param {float} arg0
 * @param {float} arg1
 * @param {ResolutionPolicy} arg2
 */
setDesignResolutionSize : function (
float, 
float, 
resolutionpolicy 
)
{
},

/**
 * @method getVisibleSize
 * @return {SizeObject}
 */
getVisibleSize : function (
)
{
    return cc.Size;
},

};

/**
 * @class GLView
 */
cc.GLView = {

/**
 * @method createWithRect
 * @param {String} arg0
 * @param {RectObject} arg1
 * @param {float} arg2
 * @return {cc.GLView}
 */
createWithRect : function (
str, 
rect, 
float 
)
{
    return cc.GLView;
},

/**
 * @method create
 * @param {String} arg0
 * @return {cc.GLView}
 */
create : function (
str 
)
{
    return cc.GLView;
},

/**
 * @method createWithFullScreen
 * @param {String} arg0
 * @return {cc.GLView}
 */
createWithFullScreen : function (
str 
)
{
    return cc.GLView;
},

};

/**
 * @class ShaderCache
 */
cc.ShaderCache = {

/**
 * @method reloadDefaultShaders
 */
reloadDefaultShaders : function (
)
{
},

/**
 * @method addProgram
 * @param {cc.GLProgram} arg0
 * @param {String} arg1
 */
addProgram : function (
glprogram, 
str 
)
{
},

/**
 * @method getProgram
 * @param {String} arg0
 * @return {cc.GLProgram}
 */
getProgram : function (
str 
)
{
    return cc.GLProgram;
},

/**
 * @method loadDefaultShaders
 */
loadDefaultShaders : function (
)
{
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.ShaderCache}
 */
getInstance : function (
)
{
    return cc.ShaderCache;
},

/**
 * @method ShaderCache
 * @constructor
 */
ShaderCache : function (
)
{
},

};

/**
 * @class AnimationCache
 */
cc.AnimationCache = {

/**
 * @method getAnimation
 * @param {String} arg0
 * @return {cc.Animation}
 */
getAnimation : function (
str 
)
{
    return cc.Animation;
},

/**
 * @method addAnimation
 * @param {cc.Animation} arg0
 * @param {String} arg1
 */
addAnimation : function (
animation, 
str 
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
 * @method addAnimationsWithDictionary
 * @param {MapObject} arg0
 * @param {String} arg1
 */
addAnimationsWithDictionary : function (
map, 
str 
)
{
},

/**
 * @method removeAnimation
 * @param {String} arg0
 */
removeAnimation : function (
str 
)
{
},

/**
 * @method addAnimationsWithFile
 * @param {String} arg0
 */
addAnimationsWithFile : function (
str 
)
{
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.AnimationCache}
 */
getInstance : function (
)
{
    return cc.AnimationCache;
},

/**
 * @method AnimationCache
 * @constructor
 */
AnimationCache : function (
)
{
},

};

/**
 * @class SpriteFrameCache
 */
cc.SpriteFrameCache = {

/**
 * @method addSpriteFramesWithFile
* @param {String|String|String} str
* @param {String|cc.Texture2D} str
*/
addSpriteFramesWithFile : function(
str,
texture2d 
)
{
},

/**
 * @method addSpriteFrame
 * @param {cc.SpriteFrame} arg0
 * @param {String} arg1
 */
addSpriteFrame : function (
spriteframe, 
str 
)
{
},

/**
 * @method removeUnusedSpriteFrames
 */
removeUnusedSpriteFrames : function (
)
{
},

/**
 * @method getSpriteFrameByName
 * @param {String} arg0
 * @return {cc.SpriteFrame}
 */
getSpriteFrameByName : function (
str 
)
{
    return cc.SpriteFrame;
},

/**
 * @method removeSpriteFramesFromFile
 * @param {String} arg0
 */
removeSpriteFramesFromFile : function (
str 
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
 * @method removeSpriteFrames
 */
removeSpriteFrames : function (
)
{
},

/**
 * @method removeSpriteFramesFromTexture
 * @param {cc.Texture2D} arg0
 */
removeSpriteFramesFromTexture : function (
texture2d 
)
{
},

/**
 * @method removeSpriteFrameByName
 * @param {String} arg0
 */
removeSpriteFrameByName : function (
str 
)
{
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.SpriteFrameCache}
 */
getInstance : function (
)
{
    return cc.SpriteFrameCache;
},

};

/**
 * @class TextFieldTTF
 */
cc.TextFieldTTF = {

/**
 * @method getCharCount
 * @return {int}
 */
getCharCount : function (
)
{
    return 0;
},

/**
 * @method setSecureTextEntry
 * @param {bool} arg0
 */
setSecureTextEntry : function (
bool 
)
{
},

/**
 * @method getColorSpaceHolder
 * @return {Color3BObject}
 */
getColorSpaceHolder : function (
)
{
    return cc.Color3B;
},

/**
 * @method initWithPlaceHolder
* @param {String|String} str
* @param {String|SizeObject} str
* @param {float|cc.TextHAlignment} float
* @param {String} str
* @param {float} float
* @return {bool|bool}
*/
initWithPlaceHolder : function(
str,
size,
texthalignment,
str,
float 
)
{
    return false;
},

/**
 * @method setColorSpaceHolder
 * @param {Color3BObject} arg0
 */
setColorSpaceHolder : function (
color3b 
)
{
},

/**
 * @method detachWithIME
 * @return {bool}
 */
detachWithIME : function (
)
{
    return false;
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
 * @method isSecureTextEntry
 * @return {bool}
 */
isSecureTextEntry : function (
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
 * @method attachWithIME
 * @return {bool}
 */
attachWithIME : function (
)
{
    return false;
},

/**
 * @method textFieldWithPlaceHolder
* @param {String|String} str
* @param {String|SizeObject} str
* @param {float|cc.TextHAlignment} float
* @param {String} str
* @param {float} float
* @return {cc.TextFieldTTF|cc.TextFieldTTF}
*/
textFieldWithPlaceHolder : function(
str,
size,
texthalignment,
str,
float 
)
{
    return cc.TextFieldTTF;
},

/**
 * @method TextFieldTTF
 * @constructor
 */
TextFieldTTF : function (
)
{
},

};

/**
 * @class TextureCache
 */
cc.TextureCache = {

/**
 * @method reloadTexture
 * @param {String} arg0
 * @return {bool}
 */
reloadTexture : function (
str 
)
{
    return false;
},

/**
 * @method removeTextureForKey
 * @param {String} arg0
 */
removeTextureForKey : function (
str 
)
{
},

/**
 * @method removeAllTextures
 */
removeAllTextures : function (
)
{
},

/**
 * @method getDescription
 * @return {String}
 */
getDescription : function (
)
{
    return ;
},

/**
 * @method getCachedTextureInfo
 * @return {String}
 */
getCachedTextureInfo : function (
)
{
    return ;
},

/**
 * @method addImage
* @param {cc.Image|String} image
* @param {String} str
* @return {cc.Texture2D|cc.Texture2D}
*/
addImage : function(
image,
str 
)
{
    return cc.Texture2D;
},

/**
 * @method getTextureForKey
 * @param {String} arg0
 * @return {cc.Texture2D}
 */
getTextureForKey : function (
str 
)
{
    return cc.Texture2D;
},

/**
 * @method removeUnusedTextures
 */
removeUnusedTextures : function (
)
{
},

/**
 * @method removeTexture
 * @param {cc.Texture2D} arg0
 */
removeTexture : function (
texture2d 
)
{
},

/**
 * @method waitForQuit
 */
waitForQuit : function (
)
{
},

/**
 * @method TextureCache
 * @constructor
 */
TextureCache : function (
)
{
},

};

/**
 * @class ParallaxNode
 */
cc.ParallaxNode = {

/**
 * @method getParallaxArray
* @return {cc._ccArray|cc._ccArray}
*/
getParallaxArray : function(
)
{
    return cc._ccArray;
},

/**
 * @method addChild
 * @param {cc.Node} arg0
 * @param {int} arg1
 * @param {PointObject} arg2
 * @param {PointObject} arg3
 */
addChild : function (
node, 
int, 
point, 
point 
)
{
},

/**
 * @method removeAllChildrenWithCleanup
 * @param {bool} arg0
 */
removeAllChildrenWithCleanup : function (
bool 
)
{
},

/**
 * @method setParallaxArray
 * @param {cc._ccArray} arg0
 */
setParallaxArray : function (
_ccarray 
)
{
},

/**
 * @method create
 * @return {cc.ParallaxNode}
 */
create : function (
)
{
    return cc.ParallaxNode;
},

};

/**
 * @class TMXObjectGroup
 */
cc.TMXObjectGroup = {

/**
 * @method setPositionOffset
 * @param {PointObject} arg0
 */
setPositionOffset : function (
point 
)
{
},

/**
 * @method getProperty
 * @param {String} arg0
 * @return {cc.Value}
 */
getProperty : function (
str 
)
{
    return cc.Value;
},

/**
 * @method getPositionOffset
 * @return {PointObject}
 */
getPositionOffset : function (
)
{
    return cc.Point;
},

/**
 * @method getObject
 * @param {String} arg0
 * @return {MapObject}
 */
getObject : function (
str 
)
{
    return map_object;
},

/**
 * @method getObjects
* @return {Array|Array}
*/
getObjects : function(
)
{
    return new Array();
},

/**
 * @method setGroupName
 * @param {String} arg0
 */
setGroupName : function (
str 
)
{
},

/**
 * @method getProperties
* @return {MapObject|MapObject}
*/
getProperties : function(
)
{
    return map_object;
},

/**
 * @method getGroupName
 * @return {String}
 */
getGroupName : function (
)
{
    return ;
},

/**
 * @method setProperties
 * @param {MapObject} arg0
 */
setProperties : function (
map 
)
{
},

/**
 * @method setObjects
 * @param {Array} arg0
 */
setObjects : function (
array 
)
{
},

/**
 * @method TMXObjectGroup
 * @constructor
 */
TMXObjectGroup : function (
)
{
},

};

/**
 * @class TMXLayerInfo
 */
cc.TMXLayerInfo = {

/**
 * @method setProperties
 * @param {MapObject} arg0
 */
setProperties : function (
map 
)
{
},

/**
 * @method getProperties
 * @return {MapObject}
 */
getProperties : function (
)
{
    return map_object;
},

/**
 * @method TMXLayerInfo
 * @constructor
 */
TMXLayerInfo : function (
)
{
},

};

/**
 * @class TMXTilesetInfo
 */
cc.TMXTilesetInfo = {

/**
 * @method getRectForGID
 * @param {unsigned int} arg0
 * @return {RectObject}
 */
getRectForGID : function (
int 
)
{
    return cc.Rect;
},

/**
 * @method TMXTilesetInfo
 * @constructor
 */
TMXTilesetInfo : function (
)
{
},

};

/**
 * @class TMXMapInfo
 */
cc.TMXMapInfo = {

/**
 * @method setObjectGroups
 * @param {Array} arg0
 */
setObjectGroups : function (
array 
)
{
},

/**
 * @method setTileSize
 * @param {SizeObject} arg0
 */
setTileSize : function (
size 
)
{
},

/**
 * @method initWithTMXFile
 * @param {String} arg0
 * @return {bool}
 */
initWithTMXFile : function (
str 
)
{
    return false;
},

/**
 * @method getOrientation
 * @return {int}
 */
getOrientation : function (
)
{
    return 0;
},

/**
 * @method isStoringCharacters
 * @return {bool}
 */
isStoringCharacters : function (
)
{
    return false;
},

/**
 * @method setLayers
 * @param {Array} arg0
 */
setLayers : function (
array 
)
{
},

/**
 * @method parseXMLFile
 * @param {String} arg0
 * @return {bool}
 */
parseXMLFile : function (
str 
)
{
    return false;
},

/**
 * @method getParentElement
 * @return {int}
 */
getParentElement : function (
)
{
    return 0;
},

/**
 * @method setTMXFileName
 * @param {String} arg0
 */
setTMXFileName : function (
str 
)
{
},

/**
 * @method parseXMLString
 * @param {String} arg0
 * @return {bool}
 */
parseXMLString : function (
str 
)
{
    return false;
},

/**
 * @method getLayers
* @return {Array|Array}
*/
getLayers : function(
)
{
    return new Array();
},

/**
 * @method getTilesets
* @return {Array|Array}
*/
getTilesets : function(
)
{
    return new Array();
},

/**
 * @method getParentGID
 * @return {int}
 */
getParentGID : function (
)
{
    return 0;
},

/**
 * @method setParentElement
 * @param {int} arg0
 */
setParentElement : function (
int 
)
{
},

/**
 * @method initWithXML
 * @param {String} arg0
 * @param {String} arg1
 * @return {bool}
 */
initWithXML : function (
str, 
str 
)
{
    return false;
},

/**
 * @method setParentGID
 * @param {int} arg0
 */
setParentGID : function (
int 
)
{
},

/**
 * @method getLayerAttribs
 * @return {int}
 */
getLayerAttribs : function (
)
{
    return 0;
},

/**
 * @method getTileSize
 * @return {SizeObject}
 */
getTileSize : function (
)
{
    return cc.Size;
},

/**
 * @method getTileProperties
 * @return {MapObject}
 */
getTileProperties : function (
)
{
    return map_object;
},

/**
 * @method getObjectGroups
* @return {Array|Array}
*/
getObjectGroups : function(
)
{
    return new Array();
},

/**
 * @method getTMXFileName
 * @return {String}
 */
getTMXFileName : function (
)
{
    return ;
},

/**
 * @method setCurrentString
 * @param {String} arg0
 */
setCurrentString : function (
str 
)
{
},

/**
 * @method setProperties
 * @param {MapObject} arg0
 */
setProperties : function (
map 
)
{
},

/**
 * @method setOrientation
 * @param {int} arg0
 */
setOrientation : function (
int 
)
{
},

/**
 * @method setTileProperties
 * @param {MapObject} arg0
 */
setTileProperties : function (
map 
)
{
},

/**
 * @method setMapSize
 * @param {SizeObject} arg0
 */
setMapSize : function (
size 
)
{
},

/**
 * @method setStoringCharacters
 * @param {bool} arg0
 */
setStoringCharacters : function (
bool 
)
{
},

/**
 * @method getMapSize
 * @return {SizeObject}
 */
getMapSize : function (
)
{
    return cc.Size;
},

/**
 * @method setTilesets
 * @param {Array} arg0
 */
setTilesets : function (
array 
)
{
},

/**
 * @method getProperties
* @return {MapObject|MapObject}
*/
getProperties : function(
)
{
    return map_object;
},

/**
 * @method getCurrentString
 * @return {String}
 */
getCurrentString : function (
)
{
    return ;
},

/**
 * @method setLayerAttribs
 * @param {int} arg0
 */
setLayerAttribs : function (
int 
)
{
},

/**
 * @method create
 * @param {String} arg0
 * @return {cc.TMXMapInfo}
 */
create : function (
str 
)
{
    return cc.TMXMapInfo;
},

/**
 * @method createWithXML
 * @param {String} arg0
 * @param {String} arg1
 * @return {cc.TMXMapInfo}
 */
createWithXML : function (
str, 
str 
)
{
    return cc.TMXMapInfo;
},

/**
 * @method TMXMapInfo
 * @constructor
 */
TMXMapInfo : function (
)
{
},

};

/**
 * @class TMXLayer
 */
cc.TMXLayer = {

/**
 * @method getTileGIDAt
 * @param {PointObject} arg0
 * @param {cc.TMXTileFlags_} arg1
 * @return {unsigned int}
 */
getTileGIDAt : function (
point, 
tmxtileflags_ 
)
{
    return 0;
},

/**
 * @method getPositionAt
 * @param {PointObject} arg0
 * @return {PointObject}
 */
getPositionAt : function (
point 
)
{
    return cc.Point;
},

/**
 * @method setLayerOrientation
 * @param {int} arg0
 */
setLayerOrientation : function (
int 
)
{
},

/**
 * @method releaseMap
 */
releaseMap : function (
)
{
},

/**
 * @method setTiles
 * @param {unsigned int*} arg0
 */
setTiles : function (
int 
)
{
},

/**
 * @method getLayerSize
 * @return {SizeObject}
 */
getLayerSize : function (
)
{
    return cc.Size;
},

/**
 * @method setMapTileSize
 * @param {SizeObject} arg0
 */
setMapTileSize : function (
size 
)
{
},

/**
 * @method getLayerOrientation
 * @return {int}
 */
getLayerOrientation : function (
)
{
    return 0;
},

/**
 * @method setProperties
 * @param {MapObject} arg0
 */
setProperties : function (
map 
)
{
},

/**
 * @method setLayerName
 * @param {String} arg0
 */
setLayerName : function (
str 
)
{
},

/**
 * @method removeTileAt
 * @param {PointObject} arg0
 */
removeTileAt : function (
point 
)
{
},

/**
 * @method initWithTilesetInfo
 * @param {cc.TMXTilesetInfo} arg0
 * @param {cc.TMXLayerInfo} arg1
 * @param {cc.TMXMapInfo} arg2
 * @return {bool}
 */
initWithTilesetInfo : function (
tmxtilesetinfo, 
tmxlayerinfo, 
map 
)
{
    return false;
},

/**
 * @method setupTiles
 */
setupTiles : function (
)
{
},

/**
 * @method setTileGID
* @param {unsigned int|unsigned int} int
* @param {PointObject|PointObject} point
* @param {cc.TMXTileFlags_} tmxtileflags_
*/
setTileGID : function(
int,
point,
tmxtileflags_ 
)
{
},

/**
 * @method getMapTileSize
 * @return {SizeObject}
 */
getMapTileSize : function (
)
{
    return cc.Size;
},

/**
 * @method getProperty
 * @param {String} arg0
 * @return {cc.Value}
 */
getProperty : function (
str 
)
{
    return cc.Value;
},

/**
 * @method setLayerSize
 * @param {SizeObject} arg0
 */
setLayerSize : function (
size 
)
{
},

/**
 * @method getLayerName
 * @return {String}
 */
getLayerName : function (
)
{
    return ;
},

/**
 * @method setTileSet
 * @param {cc.TMXTilesetInfo} arg0
 */
setTileSet : function (
tmxtilesetinfo 
)
{
},

/**
 * @method getTileSet
 * @return {cc.TMXTilesetInfo}
 */
getTileSet : function (
)
{
    return cc.TMXTilesetInfo;
},

/**
 * @method getProperties
* @return {MapObject|MapObject}
*/
getProperties : function(
)
{
    return map_object;
},

/**
 * @method getTileAt
 * @param {PointObject} arg0
 * @return {cc.Sprite}
 */
getTileAt : function (
point 
)
{
    return cc.Sprite;
},

/**
 * @method create
 * @param {cc.TMXTilesetInfo} arg0
 * @param {cc.TMXLayerInfo} arg1
 * @param {cc.TMXMapInfo} arg2
 * @return {cc.TMXLayer}
 */
create : function (
tmxtilesetinfo, 
tmxlayerinfo, 
map 
)
{
    return cc.TMXLayer;
},

/**
 * @method TMXLayer
 * @constructor
 */
TMXLayer : function (
)
{
},

};

/**
 * @class TMXTiledMap
 */
cc.TMXTiledMap = {

/**
 * @method setObjectGroups
 * @param {Array} arg0
 */
setObjectGroups : function (
array 
)
{
},

/**
 * @method getProperty
 * @param {String} arg0
 * @return {cc.Value}
 */
getProperty : function (
str 
)
{
    return cc.Value;
},

/**
 * @method setMapSize
 * @param {SizeObject} arg0
 */
setMapSize : function (
size 
)
{
},

/**
 * @method getObjectGroup
 * @param {String} arg0
 * @return {cc.TMXObjectGroup}
 */
getObjectGroup : function (
str 
)
{
    return cc.TMXObjectGroup;
},

/**
 * @method getObjectGroups
* @return {Array|Array}
*/
getObjectGroups : function(
)
{
    return new Array();
},

/**
 * @method getTileSize
 * @return {SizeObject}
 */
getTileSize : function (
)
{
    return cc.Size;
},

/**
 * @method getMapSize
 * @return {SizeObject}
 */
getMapSize : function (
)
{
    return cc.Size;
},

/**
 * @method getProperties
 * @return {MapObject}
 */
getProperties : function (
)
{
    return map_object;
},

/**
 * @method getPropertiesForGID
* @param {int|int} int
* @param {cc.Value} value
* @return {bool|cc.Value}
*/
getPropertiesForGID : function(
int,
value 
)
{
    return false;
},

/**
 * @method setTileSize
 * @param {SizeObject} arg0
 */
setTileSize : function (
size 
)
{
},

/**
 * @method setProperties
 * @param {MapObject} arg0
 */
setProperties : function (
map 
)
{
},

/**
 * @method getLayer
 * @param {String} arg0
 * @return {cc.TMXLayer}
 */
getLayer : function (
str 
)
{
    return cc.TMXLayer;
},

/**
 * @method getMapOrientation
 * @return {int}
 */
getMapOrientation : function (
)
{
    return 0;
},

/**
 * @method setMapOrientation
 * @param {int} arg0
 */
setMapOrientation : function (
int 
)
{
},

/**
 * @method create
 * @param {String} arg0
 * @return {cc.TMXTiledMap}
 */
create : function (
str 
)
{
    return cc.TMXTiledMap;
},

/**
 * @method createWithXML
 * @param {String} arg0
 * @param {String} arg1
 * @return {cc.TMXTiledMap}
 */
createWithXML : function (
str, 
str 
)
{
    return cc.TMXTiledMap;
},

};

/**
 * @class TileMapAtlas
 */
cc.TileMapAtlas = {

/**
 * @method initWithTileFile
 * @param {String} arg0
 * @param {String} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @return {bool}
 */
initWithTileFile : function (
str, 
str, 
int, 
int 
)
{
    return false;
},

/**
 * @method releaseMap
 */
releaseMap : function (
)
{
},

/**
 * @method getTGAInfo
 * @return {cc.sImageTGA}
 */
getTGAInfo : function (
)
{
    return cc.sImageTGA;
},

/**
 * @method getTileAt
 * @param {PointObject} arg0
 * @return {Color3BObject}
 */
getTileAt : function (
point 
)
{
    return cc.Color3B;
},

/**
 * @method setTile
 * @param {Color3BObject} arg0
 * @param {PointObject} arg1
 */
setTile : function (
color3b, 
point 
)
{
},

/**
 * @method setTGAInfo
 * @param {cc.sImageTGA} arg0
 */
setTGAInfo : function (
simagetga 
)
{
},

/**
 * @method create
 * @param {String} arg0
 * @param {String} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @return {cc.TileMapAtlas}
 */
create : function (
str, 
str, 
int, 
int 
)
{
    return cc.TileMapAtlas;
},

/**
 * @method TileMapAtlas
 * @constructor
 */
TileMapAtlas : function (
)
{
},

};

/**
 * @class EventListenerTouchOneByOne
 */
cc.EventListenerTouchOneByOne = {

/**
 * @method isSwallowTouches
 * @return {bool}
 */
isSwallowTouches : function (
)
{
    return false;
},

/**
 * @method setSwallowTouches
 * @param {bool} arg0
 */
setSwallowTouches : function (
bool 
)
{
},

};

/**
 * @class EventListenerTouchAllAtOnce
 */
cc.EventListenerTouchAllAtOnce = {

};

/**
 * @class EventListenerKeyboard
 */
cc.EventListenerKeyboard = {

};

/**
 * @class EventMouse
 */
cc.EventMouse = {

/**
 * @method getMouseButton
 * @return {int}
 */
getMouseButton : function (
)
{
    return 0;
},

/**
 * @method setScrollData
 * @param {float} arg0
 * @param {float} arg1
 */
setScrollData : function (
float, 
float 
)
{
},

/**
 * @method setMouseButton
 * @param {int} arg0
 */
setMouseButton : function (
int 
)
{
},

/**
 * @method getScrollY
 * @return {float}
 */
getScrollY : function (
)
{
    return 0;
},

/**
 * @method getScrollX
 * @return {float}
 */
getScrollX : function (
)
{
    return 0;
},

/**
 * @method getCursorX
 * @return {float}
 */
getCursorX : function (
)
{
    return 0;
},

/**
 * @method getCursorY
 * @return {float}
 */
getCursorY : function (
)
{
    return 0;
},

/**
 * @method setCursorPosition
 * @param {float} arg0
 * @param {float} arg1
 */
setCursorPosition : function (
float, 
float 
)
{
},

/**
 * @method EventMouse
 * @constructor
 * @param {cc.EventMouse::MouseEventType} arg0
 */
EventMouse : function (
mouseeventtype 
)
{
},

};

/**
 * @class EventListenerMouse
 */
cc.EventListenerMouse = {

/**
 * @method create
 * @return {cc.EventListenerMouse}
 */
create : function (
)
{
    return cc.EventListenerMouse;
},

};

/**
 * @class EventAcceleration
 */
cc.EventAcceleration = {

/**
 * @method EventAcceleration
 * @constructor
 * @param {cc.Acceleration} arg0
 */
EventAcceleration : function (
acceleration 
)
{
},

};

/**
 * @class EventListenerAcceleration
 */
cc.EventListenerAcceleration = {

/**
 * @method create
 * @param {function} arg0
 * @return {cc.EventListenerAcceleration}
 */
create : function (
func 
)
{
    return cc.EventListenerAcceleration;
},

};

/**
 * @class Scheduler
 */
cc.Scheduler = {

/**
 * @method setTimeScale
 * @param {float} arg0
 */
setTimeScale : function (
float 
)
{
},

/**
 * @method performFunctionInCocosThread
 * @param {function} arg0
 */
performFunctionInCocosThread : function (
func 
)
{
},

/**
 * @method getTimeScale
 * @return {float}
 */
getTimeScale : function (
)
{
    return 0;
},

/**
 * @method Scheduler
 * @constructor
 */
Scheduler : function (
)
{
},

};

/**
 * @class Component
 */
cc.Component = {

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
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
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
 * @method update
 * @param {float} arg0
 */
update : function (
float 
)
{
},

/**
 * @method getOwner
 * @return {cc.Node}
 */
getOwner : function (
)
{
    return cc.Node;
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
 * @method setOwner
 * @param {cc.Node} arg0
 */
setOwner : function (
node 
)
{
},

/**
 * @method getName
 * @return {String}
 */
getName : function (
)
{
    return ;
},

/**
 * @method create
 * @return {cc.Component}
 */
create : function (
)
{
    return cc.Component;
},

};

/**
 * @class ComponentContainer
 */
cc.ComponentContainer = {

/**
 * @method visit
 * @param {float} arg0
 */
visit : function (
float 
)
{
},

/**
 * @method remove
 * @param {String} arg0
 * @return {bool}
 */
remove : function (
str 
)
{
    return false;
},

/**
 * @method removeAll
 */
removeAll : function (
)
{
},

/**
 * @method add
 * @param {cc.Component} arg0
 * @return {bool}
 */
add : function (
component 
)
{
    return false;
},

/**
 * @method isEmpty
 * @return {bool}
 */
isEmpty : function (
)
{
    return false;
},

/**
 * @method get
 * @param {String} arg0
 * @return {cc.Component}
 */
get : function (
str 
)
{
    return cc.Component;
},

};

/**
 * @class SimpleAudioEngine
 */
cc.AudioEngine = {

/**
 * @method preloadBackgroundMusic
 * @param {char*} arg0
 */
preloadBackgroundMusic : function (
char 
)
{
},

/**
 * @method stopBackgroundMusic
 */
stopBackgroundMusic : function (
)
{
},

/**
 * @method stopAllEffects
 */
stopAllEffects : function (
)
{
},

/**
 * @method getBackgroundMusicVolume
 * @return {float}
 */
getBackgroundMusicVolume : function (
)
{
    return 0;
},

/**
 * @method resumeBackgroundMusic
 */
resumeBackgroundMusic : function (
)
{
},

/**
 * @method setBackgroundMusicVolume
 * @param {float} arg0
 */
setBackgroundMusicVolume : function (
float 
)
{
},

/**
 * @method preloadEffect
 * @param {char*} arg0
 */
preloadEffect : function (
char 
)
{
},

/**
 * @method isBackgroundMusicPlaying
 * @return {bool}
 */
isBackgroundMusicPlaying : function (
)
{
    return false;
},

/**
 * @method getEffectsVolume
 * @return {float}
 */
getEffectsVolume : function (
)
{
    return 0;
},

/**
 * @method willPlayBackgroundMusic
 * @return {bool}
 */
willPlayBackgroundMusic : function (
)
{
    return false;
},

/**
 * @method pauseEffect
 * @param {unsigned int} arg0
 */
pauseEffect : function (
int 
)
{
},

/**
 * @method playEffect
 * @param {char*} arg0
 * @param {bool} arg1
 * @param {float} arg2
 * @param {float} arg3
 * @param {float} arg4
 * @return {unsigned int}
 */
playEffect : function (
char, 
bool, 
float, 
float, 
float 
)
{
    return 0;
},

/**
 * @method rewindBackgroundMusic
 */
rewindBackgroundMusic : function (
)
{
},

/**
 * @method playBackgroundMusic
 * @param {char*} arg0
 * @param {bool} arg1
 */
playBackgroundMusic : function (
char, 
bool 
)
{
},

/**
 * @method resumeAllEffects
 */
resumeAllEffects : function (
)
{
},

/**
 * @method setEffectsVolume
 * @param {float} arg0
 */
setEffectsVolume : function (
float 
)
{
},

/**
 * @method stopEffect
 * @param {unsigned int} arg0
 */
stopEffect : function (
int 
)
{
},

/**
 * @method pauseBackgroundMusic
 */
pauseBackgroundMusic : function (
)
{
},

/**
 * @method pauseAllEffects
 */
pauseAllEffects : function (
)
{
},

/**
 * @method unloadEffect
 * @param {char*} arg0
 */
unloadEffect : function (
char 
)
{
},

/**
 * @method resumeEffect
 * @param {unsigned int} arg0
 */
resumeEffect : function (
int 
)
{
},

/**
 * @method end
 */
end : function (
)
{
},

/**
 * @method getInstance
 * @return {cc.SimpleAudioEngine}
 */
getInstance : function (
)
{
    return cc.SimpleAudioEngine;
},

};
