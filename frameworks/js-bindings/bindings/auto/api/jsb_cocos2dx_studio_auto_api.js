/**
 * @module cocos2dx_studio
 */
var ccs = ccs || {};

/**
 * @class ActionObject
 */
ccs.ActionObject = {

/**
 * @method setCurrentTime
 * @param {float} arg0
 */
setCurrentTime : function (
float 
)
{
},

/**
 * @method pause
 */
pause : function (
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
 * @method setUnitTime
 * @param {float} arg0
 */
setUnitTime : function (
float 
)
{
},

/**
 * @method getTotalTime
 * @return {float}
 */
getTotalTime : function (
)
{
    return 0;
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
 * @method stop
 */
stop : function (
)
{
},

/**
 * @method play
* @param {cc.CallFunc} callfunc
*/
play : function(
callfunc 
)
{
},

/**
 * @method getCurrentTime
 * @return {float}
 */
getCurrentTime : function (
)
{
    return 0;
},

/**
 * @method removeActionNode
 * @param {ccs.ActionNode} arg0
 */
removeActionNode : function (
actionnode 
)
{
},

/**
 * @method getLoop
 * @return {bool}
 */
getLoop : function (
)
{
    return false;
},

/**
 * @method addActionNode
 * @param {ccs.ActionNode} arg0
 */
addActionNode : function (
actionnode 
)
{
},

/**
 * @method getUnitTime
 * @return {float}
 */
getUnitTime : function (
)
{
    return 0;
},

/**
 * @method isPlaying
 * @return {bool}
 */
isPlaying : function (
)
{
    return false;
},

/**
 * @method updateToFrameByTime
 * @param {float} arg0
 */
updateToFrameByTime : function (
float 
)
{
},

/**
 * @method setLoop
 * @param {bool} arg0
 */
setLoop : function (
bool 
)
{
},

/**
 * @method simulationActionUpdate
 * @param {float} arg0
 */
simulationActionUpdate : function (
float 
)
{
},

/**
 * @method ActionObject
 * @constructor
 */
ActionObject : function (
)
{
},

};

/**
 * @class ActionManagerEx
 */
ccs.ActionManager = {

/**
 * @method playActionByName
* @param {char|char} char
* @param {char|char} char
* @param {cc.CallFunc} callfunc
* @return {ccs.ActionObject|ccs.ActionObject}
*/
playActionByName : function(
char,
char,
callfunc 
)
{
    return ccs.ActionObject;
},

/**
 * @method getActionByName
 * @param {char} arg0
 * @param {char} arg1
 * @return {ccs.ActionObject}
 */
getActionByName : function (
char, 
char 
)
{
    return ccs.ActionObject;
},

/**
 * @method releaseActions
 */
releaseActions : function (
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
 * @return {ccs.ActionManagerEx}
 */
getInstance : function (
)
{
    return ccs.ActionManagerEx;
},

};

/**
 * @class BaseData
 */
ccs.BaseData = {

/**
 * @method getColor
 * @return {color4b_object}
 */
getColor : function (
)
{
    return cc.Color4B;
},

/**
 * @method setColor
 * @param {color4b_object} arg0
 */
setColor : function (
color4b 
)
{
},

/**
 * @method create
 * @return {ccs.BaseData}
 */
create : function (
)
{
    return ccs.BaseData;
},

/**
 * @method BaseData
 * @constructor
 */
BaseData : function (
)
{
},

};

/**
 * @class ProcessBase
 */
ccs.ProcessBase = {

/**
 * @method play
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 */
play : function (
int, 
int, 
int, 
int 
)
{
},

/**
 * @method pause
 */
pause : function (
)
{
},

/**
 * @method getRawDuration
 * @return {int}
 */
getRawDuration : function (
)
{
    return 0;
},

/**
 * @method resume
 */
resume : function (
)
{
},

/**
 * @method setIsComplete
 * @param {bool} arg0
 */
setIsComplete : function (
bool 
)
{
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
 * @method getCurrentFrameIndex
 * @return {int}
 */
getCurrentFrameIndex : function (
)
{
    return 0;
},

/**
 * @method isComplete
 * @return {bool}
 */
isComplete : function (
)
{
    return false;
},

/**
 * @method getCurrentPercent
 * @return {float}
 */
getCurrentPercent : function (
)
{
    return 0;
},

/**
 * @method setIsPause
 * @param {bool} arg0
 */
setIsPause : function (
bool 
)
{
},

/**
 * @method getProcessScale
 * @return {float}
 */
getProcessScale : function (
)
{
    return 0;
},

/**
 * @method isPause
 * @return {bool}
 */
isPause : function (
)
{
    return false;
},

/**
 * @method isPlaying
 * @return {bool}
 */
isPlaying : function (
)
{
    return false;
},

/**
 * @method setProcessScale
 * @param {float} arg0
 */
setProcessScale : function (
float 
)
{
},

/**
 * @method setIsPlaying
 * @param {bool} arg0
 */
setIsPlaying : function (
bool 
)
{
},

/**
 * @method ProcessBase
 * @constructor
 */
ProcessBase : function (
)
{
},

};

/**
 * @class Tween
 */
ccs.Tween = {

/**
 * @method getAnimation
 * @return {ccs.ArmatureAnimation}
 */
getAnimation : function (
)
{
    return ccs.ArmatureAnimation;
},

/**
 * @method gotoAndPause
 * @param {int} arg0
 */
gotoAndPause : function (
int 
)
{
},

/**
 * @method play
 * @param {ccs.MovementBoneData} arg0
 * @param {int} arg1
 * @param {int} arg2
 * @param {int} arg3
 * @param {int} arg4
 */
play : function (
movementbonedata, 
int, 
int, 
int, 
int 
)
{
},

/**
 * @method gotoAndPlay
 * @param {int} arg0
 */
gotoAndPlay : function (
int 
)
{
},

/**
 * @method init
 * @param {ccs.Bone} arg0
 * @return {bool}
 */
init : function (
bone 
)
{
    return false;
},

/**
 * @method setAnimation
 * @param {ccs.ArmatureAnimation} arg0
 */
setAnimation : function (
armatureanimation 
)
{
},

/**
 * @method create
 * @param {ccs.Bone} arg0
 * @return {ccs.Tween}
 */
create : function (
bone 
)
{
    return ccs.Tween;
},

/**
 * @method Tween
 * @constructor
 */
Tween : function (
)
{
},

};

/**
 * @class ColliderFilter
 */
ccs.ColliderFilter = {

};

/**
 * @class ColliderBody
 */
ccs.ColliderBody = {

};

/**
 * @class ColliderDetector
 */
ccs.ColliderDetector = {

/**
 * @method getBone
 * @return {ccs.Bone}
 */
getBone : function (
)
{
    return ccs.Bone;
},

/**
 * @method getActive
 * @return {bool}
 */
getActive : function (
)
{
    return false;
},

/**
 * @method getColliderBodyList
 * @return {Array}
 */
getColliderBodyList : function (
)
{
    return new Array();
},

/**
 * @method updateTransform
 * @param {mat4_object} arg0
 */
updateTransform : function (
mat4 
)
{
},

/**
 * @method removeAll
 */
removeAll : function (
)
{
},

/**
 * @method init
* @param {ccs.Bone} bone
* @return {bool|bool}
*/
init : function(
bone 
)
{
    return false;
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
 * @method setBone
 * @param {ccs.Bone} arg0
 */
setBone : function (
bone 
)
{
},

/**
 * @method create
* @param {ccs.Bone} bone
* @return {ccs.ColliderDetector|ccs.ColliderDetector}
*/
create : function(
bone 
)
{
    return ccs.ColliderDetector;
},

};

/**
 * @class DecorativeDisplay
 */
ccs.DecorativeDisplay = {

/**
 * @method getColliderDetector
 * @return {ccs.ColliderDetector}
 */
getColliderDetector : function (
)
{
    return ccs.ColliderDetector;
},

/**
 * @method getDisplay
 * @return {cc.Node}
 */
getDisplay : function (
)
{
    return cc.Node;
},

/**
 * @method setDisplay
 * @param {cc.Node} arg0
 */
setDisplay : function (
node 
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
 * @method setDisplayData
 * @param {ccs.DisplayData} arg0
 */
setDisplayData : function (
displaydata 
)
{
},

/**
 * @method getDisplayData
 * @return {ccs.DisplayData}
 */
getDisplayData : function (
)
{
    return ccs.DisplayData;
},

/**
 * @method setColliderDetector
 * @param {ccs.ColliderDetector} arg0
 */
setColliderDetector : function (
colliderdetector 
)
{
},

/**
 * @method create
 * @return {ccs.DecorativeDisplay}
 */
create : function (
)
{
    return ccs.DecorativeDisplay;
},

};

/**
 * @class DisplayManager
 */
ccs.DisplayManager = {

/**
 * @method getCurrentDecorativeDisplay
 * @return {ccs.DecorativeDisplay}
 */
getCurrentDecorativeDisplay : function (
)
{
    return ccs.DecorativeDisplay;
},

/**
 * @method getDisplayRenderNode
 * @return {cc.Node}
 */
getDisplayRenderNode : function (
)
{
    return cc.Node;
},

/**
 * @method getAnchorPointInPoints
 * @return {vec2_object}
 */
getAnchorPointInPoints : function (
)
{
    return cc.Vec2;
},

/**
 * @method setCurrentDecorativeDisplay
 * @param {ccs.DecorativeDisplay} arg0
 */
setCurrentDecorativeDisplay : function (
decorativedisplay 
)
{
},

/**
 * @method getDisplayRenderNodeType
 * @return {ccs.DisplayType}
 */
getDisplayRenderNodeType : function (
)
{
    return 0;
},

/**
 * @method removeDisplay
 * @param {int} arg0
 */
removeDisplay : function (
int 
)
{
},

/**
 * @method setForceChangeDisplay
 * @param {bool} arg0
 */
setForceChangeDisplay : function (
bool 
)
{
},

/**
 * @method init
 * @param {ccs.Bone} arg0
 * @return {bool}
 */
init : function (
bone 
)
{
    return false;
},

/**
 * @method getContentSize
 * @return {size_object}
 */
getContentSize : function (
)
{
    return cc.Size;
},

/**
 * @method getBoundingBox
 * @return {rect_object}
 */
getBoundingBox : function (
)
{
    return cc.Rect;
},

/**
 * @method addDisplay
* @param {cc.Node|ccs.DisplayData} node
* @param {int|int} int
*/
addDisplay : function(
displaydata,
int 
)
{
},

/**
 * @method containPoint
* @param {float|vec2_object} float
* @param {float} float
* @return {bool|bool}
*/
containPoint : function(
float,
float 
)
{
    return false;
},

/**
 * @method initDisplayList
 * @param {ccs.BoneData} arg0
 */
initDisplayList : function (
bonedata 
)
{
},

/**
 * @method changeDisplayWithIndex
 * @param {int} arg0
 * @param {bool} arg1
 */
changeDisplayWithIndex : function (
int, 
bool 
)
{
},

/**
 * @method changeDisplayWithName
 * @param {String} arg0
 * @param {bool} arg1
 */
changeDisplayWithName : function (
str, 
bool 
)
{
},

/**
 * @method isForceChangeDisplay
 * @return {bool}
 */
isForceChangeDisplay : function (
)
{
    return false;
},

/**
 * @method getDecorativeDisplayByIndex
 * @param {int} arg0
 * @return {ccs.DecorativeDisplay}
 */
getDecorativeDisplayByIndex : function (
int 
)
{
    return ccs.DecorativeDisplay;
},

/**
 * @method getCurrentDisplayIndex
 * @return {int}
 */
getCurrentDisplayIndex : function (
)
{
    return 0;
},

/**
 * @method getAnchorPoint
 * @return {vec2_object}
 */
getAnchorPoint : function (
)
{
    return cc.Vec2;
},

/**
 * @method getDecorativeDisplayList
 * @return {Array}
 */
getDecorativeDisplayList : function (
)
{
    return new Array();
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
 * @method setVisible
 * @param {bool} arg0
 */
setVisible : function (
bool 
)
{
},

/**
 * @method create
 * @param {ccs.Bone} arg0
 * @return {ccs.DisplayManager}
 */
create : function (
bone 
)
{
    return ccs.DisplayManager;
},

/**
 * @method DisplayManager
 * @constructor
 */
DisplayManager : function (
)
{
},

};

/**
 * @class Bone
 */
ccs.Bone = {

/**
 * @method isTransformDirty
 * @return {bool}
 */
isTransformDirty : function (
)
{
    return false;
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
 * @method isIgnoreMovementBoneData
 * @return {bool}
 */
isIgnoreMovementBoneData : function (
)
{
    return false;
},

/**
 * @method updateZOrder
 */
updateZOrder : function (
)
{
},

/**
 * @method getDisplayRenderNode
 * @return {cc.Node}
 */
getDisplayRenderNode : function (
)
{
    return cc.Node;
},

/**
 * @method isBlendDirty
 * @return {bool}
 */
isBlendDirty : function (
)
{
    return false;
},

/**
 * @method addChildBone
 * @param {ccs.Bone} arg0
 */
addChildBone : function (
bone 
)
{
},

/**
 * @method getWorldInfo
 * @return {ccs.BaseData}
 */
getWorldInfo : function (
)
{
    return ccs.BaseData;
},

/**
 * @method getTween
 * @return {ccs.Tween}
 */
getTween : function (
)
{
    return ccs.Tween;
},

/**
 * @method getParentBone
 * @return {ccs.Bone}
 */
getParentBone : function (
)
{
    return ccs.Bone;
},

/**
 * @method updateColor
 */
updateColor : function (
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
 * @method setTransformDirty
 * @param {bool} arg0
 */
setTransformDirty : function (
bool 
)
{
},

/**
 * @method getDisplayRenderNodeType
 * @return {ccs.DisplayType}
 */
getDisplayRenderNodeType : function (
)
{
    return 0;
},

/**
 * @method removeDisplay
 * @param {int} arg0
 */
removeDisplay : function (
int 
)
{
},

/**
 * @method setBoneData
 * @param {ccs.BoneData} arg0
 */
setBoneData : function (
bonedata 
)
{
},

/**
 * @method init
 * @param {String} arg0
 * @return {bool}
 */
init : function (
str 
)
{
    return false;
},

/**
 * @method setParentBone
 * @param {ccs.Bone} arg0
 */
setParentBone : function (
bone 
)
{
},

/**
 * @method addDisplay
* @param {cc.Node|ccs.DisplayData} node
* @param {int|int} int
*/
addDisplay : function(
displaydata,
int 
)
{
},

/**
 * @method setIgnoreMovementBoneData
 * @param {bool} arg0
 */
setIgnoreMovementBoneData : function (
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
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
)
{
},

/**
 * @method removeFromParent
 * @param {bool} arg0
 */
removeFromParent : function (
bool 
)
{
},

/**
 * @method getColliderDetector
 * @return {ccs.ColliderDetector}
 */
getColliderDetector : function (
)
{
    return ccs.ColliderDetector;
},

/**
 * @method getChildArmature
 * @return {ccs.Armature}
 */
getChildArmature : function (
)
{
    return ccs.Armature;
},

/**
 * @method changeDisplayWithIndex
 * @param {int} arg0
 * @param {bool} arg1
 */
changeDisplayWithIndex : function (
int, 
bool 
)
{
},

/**
 * @method changeDisplayWithName
 * @param {String} arg0
 * @param {bool} arg1
 */
changeDisplayWithName : function (
str, 
bool 
)
{
},

/**
 * @method setArmature
 * @param {ccs.Armature} arg0
 */
setArmature : function (
armature 
)
{
},

/**
 * @method setBlendDirty
 * @param {bool} arg0
 */
setBlendDirty : function (
bool 
)
{
},

/**
 * @method removeChildBone
 * @param {ccs.Bone} arg0
 * @param {bool} arg1
 */
removeChildBone : function (
bone, 
bool 
)
{
},

/**
 * @method setChildArmature
 * @param {ccs.Armature} arg0
 */
setChildArmature : function (
armature 
)
{
},

/**
 * @method getNodeToArmatureTransform
 * @return {mat4_object}
 */
getNodeToArmatureTransform : function (
)
{
    return cc.Mat4;
},

/**
 * @method getDisplayManager
 * @return {ccs.DisplayManager}
 */
getDisplayManager : function (
)
{
    return ccs.DisplayManager;
},

/**
 * @method getArmature
 * @return {ccs.Armature}
 */
getArmature : function (
)
{
    return ccs.Armature;
},

/**
 * @method create
* @param {String} str
* @return {ccs.Bone|ccs.Bone}
*/
create : function(
str 
)
{
    return ccs.Bone;
},

/**
 * @method Bone
 * @constructor
 */
Bone : function (
)
{
},

};

/**
 * @class BatchNode
 */
ccs.BatchNode = {

/**
 * @method create
 * @return {ccs.BatchNode}
 */
create : function (
)
{
    return ccs.BatchNode;
},

};

/**
 * @class ArmatureAnimation
 */
ccs.ArmatureAnimation = {

/**
 * @method getSpeedScale
 * @return {float}
 */
getSpeedScale : function (
)
{
    return 0;
},

/**
 * @method pause
 */
pause : function (
)
{
},

/**
 * @method setSpeedScale
 * @param {float} arg0
 */
setSpeedScale : function (
float 
)
{
},

/**
 * @method init
 * @param {ccs.Armature} arg0
 * @return {bool}
 */
init : function (
armature 
)
{
    return false;
},

/**
 * @method playWithIndexes
 * @param {Array} arg0
 * @param {int} arg1
 * @param {bool} arg2
 */
playWithIndexes : function (
array, 
int, 
bool 
)
{
},

/**
 * @method play
 * @param {String} arg0
 * @param {int} arg1
 * @param {int} arg2
 */
play : function (
str, 
int, 
int 
)
{
},

/**
 * @method gotoAndPause
 * @param {int} arg0
 */
gotoAndPause : function (
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
 * @method playWithIndex
 * @param {int} arg0
 * @param {int} arg1
 * @param {int} arg2
 */
playWithIndex : function (
int, 
int, 
int 
)
{
},

/**
 * @method getCurrentMovementID
 * @return {String}
 */
getCurrentMovementID : function (
)
{
    return ;
},

/**
 * @method gotoAndPlay
 * @param {int} arg0
 */
gotoAndPlay : function (
int 
)
{
},

/**
 * @method playWithNames
 * @param {Array} arg0
 * @param {int} arg1
 * @param {bool} arg2
 */
playWithNames : function (
array, 
int, 
bool 
)
{
},

/**
 * @method getMovementCount
 * @return {long}
 */
getMovementCount : function (
)
{
    return 0;
},

/**
 * @method create
 * @param {ccs.Armature} arg0
 * @return {ccs.ArmatureAnimation}
 */
create : function (
armature 
)
{
    return ccs.ArmatureAnimation;
},

/**
 * @method ArmatureAnimation
 * @constructor
 */
ArmatureAnimation : function (
)
{
},

};

/**
 * @class ArmatureDataManager
 */
ccs.ArmatureDataManager = {

/**
 * @method getAnimationDatas
 * @return {map_object}
 */
getAnimationDatas : function (
)
{
    return map_object;
},

/**
 * @method removeAnimationData
 * @param {String} arg0
 */
removeAnimationData : function (
str 
)
{
},

/**
 * @method addArmatureData
 * @param {String} arg0
 * @param {ccs.ArmatureData} arg1
 * @param {String} arg2
 */
addArmatureData : function (
str, 
armaturedata, 
str 
)
{
},

/**
 * @method addArmatureFileInfo
* @param {String|String} str
* @param {String} str
* @param {String} str
*/
addArmatureFileInfo : function(
str,
str,
str 
)
{
},

/**
 * @method removeArmatureFileInfo
 * @param {String} arg0
 */
removeArmatureFileInfo : function (
str 
)
{
},

/**
 * @method getTextureData
 * @param {String} arg0
 * @return {ccs.TextureData}
 */
getTextureData : function (
str 
)
{
    return ccs.TextureData;
},

/**
 * @method getArmatureData
 * @param {String} arg0
 * @return {ccs.ArmatureData}
 */
getArmatureData : function (
str 
)
{
    return ccs.ArmatureData;
},

/**
 * @method getAnimationData
 * @param {String} arg0
 * @return {ccs.AnimationData}
 */
getAnimationData : function (
str 
)
{
    return ccs.AnimationData;
},

/**
 * @method addAnimationData
 * @param {String} arg0
 * @param {ccs.AnimationData} arg1
 * @param {String} arg2
 */
addAnimationData : function (
str, 
animationdata, 
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
 * @method removeArmatureData
 * @param {String} arg0
 */
removeArmatureData : function (
str 
)
{
},

/**
 * @method getArmatureDatas
 * @return {map_object}
 */
getArmatureDatas : function (
)
{
    return map_object;
},

/**
 * @method removeTextureData
 * @param {String} arg0
 */
removeTextureData : function (
str 
)
{
},

/**
 * @method addTextureData
 * @param {String} arg0
 * @param {ccs.TextureData} arg1
 * @param {String} arg2
 */
addTextureData : function (
str, 
texturedata, 
str 
)
{
},

/**
 * @method isAutoLoadSpriteFile
 * @return {bool}
 */
isAutoLoadSpriteFile : function (
)
{
    return false;
},

/**
 * @method addSpriteFrameFromFile
 * @param {String} arg0
 * @param {String} arg1
 * @param {String} arg2
 */
addSpriteFrameFromFile : function (
str, 
str, 
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
 * @return {ccs.ArmatureDataManager}
 */
getInstance : function (
)
{
    return ccs.ArmatureDataManager;
},

};

/**
 * @class Armature
 */
ccs.Armature = {

/**
 * @method getBone
 * @param {String} arg0
 * @return {ccs.Bone}
 */
getBone : function (
str 
)
{
    return ccs.Bone;
},

/**
 * @method changeBoneParent
 * @param {ccs.Bone} arg0
 * @param {String} arg1
 */
changeBoneParent : function (
bone, 
str 
)
{
},

/**
 * @method setAnimation
 * @param {ccs.ArmatureAnimation} arg0
 */
setAnimation : function (
armatureanimation 
)
{
},

/**
 * @method getBoneAtPoint
 * @param {float} arg0
 * @param {float} arg1
 * @return {ccs.Bone}
 */
getBoneAtPoint : function (
float, 
float 
)
{
    return ccs.Bone;
},

/**
 * @method getArmatureTransformDirty
 * @return {bool}
 */
getArmatureTransformDirty : function (
)
{
    return false;
},

/**
 * @method setVersion
 * @param {float} arg0
 */
setVersion : function (
float 
)
{
},

/**
 * @method updateOffsetPoint
 */
updateOffsetPoint : function (
)
{
},

/**
 * @method getParentBone
 * @return {ccs.Bone}
 */
getParentBone : function (
)
{
    return ccs.Bone;
},

/**
 * @method setArmatureData
 * @param {ccs.ArmatureData} arg0
 */
setArmatureData : function (
armaturedata 
)
{
},

/**
 * @method removeBone
 * @param {ccs.Bone} arg0
 * @param {bool} arg1
 */
removeBone : function (
bone, 
bool 
)
{
},

/**
 * @method getBatchNode
 * @return {ccs.BatchNode}
 */
getBatchNode : function (
)
{
    return ccs.BatchNode;
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
 * @method init
* @param {String|String} str
* @param {ccs.Bone} bone
* @return {bool|bool}
*/
init : function(
str,
bone 
)
{
    return false;
},

/**
 * @method setParentBone
 * @param {ccs.Bone} arg0
 */
setParentBone : function (
bone 
)
{
},

/**
 * @method drawContour
 */
drawContour : function (
)
{
},

/**
 * @method setBatchNode
 * @param {ccs.BatchNode} arg0
 */
setBatchNode : function (
batchnode 
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
 * @method setName
 * @param {String} arg0
 */
setName : function (
str 
)
{
},

/**
 * @method addBone
 * @param {ccs.Bone} arg0
 * @param {String} arg1
 */
addBone : function (
bone, 
str 
)
{
},

/**
 * @method getArmatureData
 * @return {ccs.ArmatureData}
 */
getArmatureData : function (
)
{
    return ccs.ArmatureData;
},

/**
 * @method getBoundingBox
 * @return {rect_object}
 */
getBoundingBox : function (
)
{
    return cc.Rect;
},

/**
 * @method getVersion
 * @return {float}
 */
getVersion : function (
)
{
    return 0;
},

/**
 * @method getAnimation
 * @return {ccs.ArmatureAnimation}
 */
getAnimation : function (
)
{
    return ccs.ArmatureAnimation;
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
 * @method getBoneDic
 * @return {map_object}
 */
getBoneDic : function (
)
{
    return map_object;
},

/**
 * @method create
* @param {String|String} str
* @param {ccs.Bone} bone
* @return {ccs.Armature|ccs.Armature|ccs.Armature}
*/
create : function(
str,
bone 
)
{
    return ccs.Armature;
},

/**
 * @method Armature
 * @constructor
 */
Armature : function (
)
{
},

};

/**
 * @class Skin
 */
ccs.Skin = {

/**
 * @method getBone
 * @return {ccs.Bone}
 */
getBone : function (
)
{
    return ccs.Bone;
},

/**
 * @method getNodeToWorldTransformAR
 * @return {mat4_object}
 */
getNodeToWorldTransformAR : function (
)
{
    return cc.Mat4;
},

/**
 * @method getDisplayName
 * @return {String}
 */
getDisplayName : function (
)
{
    return ;
},

/**
 * @method updateArmatureTransform
 */
updateArmatureTransform : function (
)
{
},

/**
 * @method setBone
 * @param {ccs.Bone} arg0
 */
setBone : function (
bone 
)
{
},

/**
 * @method create
* @param {String} str
* @return {ccs.Skin|ccs.Skin}
*/
create : function(
str 
)
{
    return ccs.Skin;
},

/**
 * @method createWithSpriteFrameName
 * @param {String} arg0
 * @return {ccs.Skin}
 */
createWithSpriteFrameName : function (
str 
)
{
    return ccs.Skin;
},

/**
 * @method Skin
 * @constructor
 */
Skin : function (
)
{
},

};

/**
 * @class ComAttribute
 */
ccs.ComAttribute = {

/**
 * @method getFloat
 * @param {String} arg0
 * @param {float} arg1
 * @return {float}
 */
getFloat : function (
str, 
float 
)
{
    return 0;
},

/**
 * @method getString
 * @param {String} arg0
 * @param {String} arg1
 * @return {String}
 */
getString : function (
str, 
str 
)
{
    return ;
},

/**
 * @method setFloat
 * @param {String} arg0
 * @param {float} arg1
 */
setFloat : function (
str, 
float 
)
{
},

/**
 * @method setString
 * @param {String} arg0
 * @param {String} arg1
 */
setString : function (
str, 
str 
)
{
},

/**
 * @method getBool
 * @param {String} arg0
 * @param {bool} arg1
 * @return {bool}
 */
getBool : function (
str, 
bool 
)
{
    return false;
},

/**
 * @method setInt
 * @param {String} arg0
 * @param {int} arg1
 */
setInt : function (
str, 
int 
)
{
},

/**
 * @method parse
 * @param {String} arg0
 * @return {bool}
 */
parse : function (
str 
)
{
    return false;
},

/**
 * @method getInt
 * @param {String} arg0
 * @param {int} arg1
 * @return {int}
 */
getInt : function (
str, 
int 
)
{
    return 0;
},

/**
 * @method setBool
 * @param {String} arg0
 * @param {bool} arg1
 */
setBool : function (
str, 
bool 
)
{
},

/**
 * @method create
 * @return {ccs.ComAttribute}
 */
create : function (
)
{
    return ccs.ComAttribute;
},

};

/**
 * @class ComAudio
 */
ccs.ComAudio = {

/**
 * @method stopAllEffects
 */
stopAllEffects : function (
)
{
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
 * @method stopEffect
 * @param {unsigned int} arg0
 */
stopEffect : function (
int 
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
 * @method willPlayBackgroundMusic
 * @return {bool}
 */
willPlayBackgroundMusic : function (
)
{
    return false;
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
 * @method end
 */
end : function (
)
{
},

/**
 * @method stopBackgroundMusic
* @param {bool} bool
*/
stopBackgroundMusic : function(
bool 
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
 * @method isBackgroundMusicPlaying
 * @return {bool}
 */
isBackgroundMusicPlaying : function (
)
{
    return false;
},

/**
 * @method isLoop
 * @return {bool}
 */
isLoop : function (
)
{
    return false;
},

/**
 * @method resumeAllEffects
 */
resumeAllEffects : function (
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
 * @method preloadBackgroundMusic
 * @param {char} arg0
 */
preloadBackgroundMusic : function (
char 
)
{
},

/**
 * @method playBackgroundMusic
* @param {char|char} char
* @param {bool} bool
*/
playBackgroundMusic : function(
char,
bool 
)
{
},

/**
 * @method playEffect
* @param {char|char} char
* @param {bool} bool
* @return {unsigned int|unsigned int|unsigned int}
*/
playEffect : function(
char,
bool 
)
{
    return 0;
},

/**
 * @method preloadEffect
 * @param {char} arg0
 */
preloadEffect : function (
char 
)
{
},

/**
 * @method setLoop
 * @param {bool} arg0
 */
setLoop : function (
bool 
)
{
},

/**
 * @method unloadEffect
 * @param {char} arg0
 */
unloadEffect : function (
char 
)
{
},

/**
 * @method rewindBackgroundMusic
 */
rewindBackgroundMusic : function (
)
{
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
 * @method resumeBackgroundMusic
 */
resumeBackgroundMusic : function (
)
{
},

/**
 * @method setFile
 * @param {char} arg0
 */
setFile : function (
char 
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
 * @method getFile
 * @return {char}
 */
getFile : function (
)
{
    return 0;
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
 * @method create
 * @return {ccs.ComAudio}
 */
create : function (
)
{
    return ccs.ComAudio;
},

};

/**
 * @class InputDelegate
 */
ccs.InputDelegate = {

/**
 * @method isAccelerometerEnabled
 * @return {bool}
 */
isAccelerometerEnabled : function (
)
{
    return false;
},

/**
 * @method setKeypadEnabled
 * @param {bool} arg0
 */
setKeypadEnabled : function (
bool 
)
{
},

/**
 * @method getTouchMode
 * @return {cc.Touch::DispatchMode}
 */
getTouchMode : function (
)
{
    return 0;
},

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
 * @method isKeypadEnabled
 * @return {bool}
 */
isKeypadEnabled : function (
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
 * @method setTouchPriority
 * @param {int} arg0
 */
setTouchPriority : function (
int 
)
{
},

/**
 * @method getTouchPriority
 * @return {int}
 */
getTouchPriority : function (
)
{
    return 0;
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
 * @method setTouchMode
 * @param {cc.Touch::DispatchMode} arg0
 */
setTouchMode : function (
dispatchmode 
)
{
},

};

/**
 * @class ComController
 */
ccs.ComController = {

/**
 * @method create
 * @return {ccs.ComController}
 */
create : function (
)
{
    return ccs.ComController;
},

/**
 * @method ComController
 * @constructor
 */
ComController : function (
)
{
},

};

/**
 * @class ComRender
 */
ccs.ComRender = {

/**
 * @method setNode
 * @param {cc.Node} arg0
 */
setNode : function (
node 
)
{
},

/**
 * @method getNode
 * @return {cc.Node}
 */
getNode : function (
)
{
    return cc.Node;
},

/**
 * @method create
* @param {cc.Node} node
* @param {char} char
* @return {ccs.ComRender|ccs.ComRender}
*/
create : function(
node,
char 
)
{
    return ccs.ComRender;
},

};

/**
 * @class GUIReader
 */
ccs.GUIReader = {

/**
 * @method widgetFromJsonFile
 * @param {char} arg0
 * @return {ccui.Widget}
 */
widgetFromJsonFile : function (
char 
)
{
    return ccui.Widget;
},

/**
 * @method getFilePath
 * @return {String}
 */
getFilePath : function (
)
{
    return ;
},

/**
 * @method getVersionInteger
 * @param {char} arg0
 * @return {int}
 */
getVersionInteger : function (
char 
)
{
    return 0;
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
 * @return {ccs.GUIReader}
 */
getInstance : function (
)
{
    return ccs.GUIReader;
},

};

/**
 * @class SceneReader
 */
ccs.SceneReader = {

/**
 * @method createNodeWithSceneFile
 * @param {String} arg0
 * @param {ccs.SceneReader::AttachComponentType} arg1
 * @return {cc.Node}
 */
createNodeWithSceneFile : function (
str, 
attachcomponenttype 
)
{
    return cc.Node;
},

/**
 * @method getAttachComponentType
 * @return {ccs.SceneReader::AttachComponentType}
 */
getAttachComponentType : function (
)
{
    return 0;
},

/**
 * @method getNodeByTag
 * @param {int} arg0
 * @return {cc.Node}
 */
getNodeByTag : function (
int 
)
{
    return cc.Node;
},

/**
 * @method destroyInstance
 */
destroyInstance : function (
)
{
},

/**
 * @method sceneReaderVersion
 * @return {char}
 */
sceneReaderVersion : function (
)
{
    return 0;
},

/**
 * @method getInstance
 * @return {ccs.SceneReader}
 */
getInstance : function (
)
{
    return ccs.SceneReader;
},

};
