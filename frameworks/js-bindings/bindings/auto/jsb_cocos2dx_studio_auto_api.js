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
 * @param {float}
 */
setCurrentTime : function () {},

/**
 * @method pause
 */
pause : function () {},

/**
 * @method setName
 * @param {const char*}
 */
setName : function () {},

/**
 * @method setUnitTime
 * @param {float}
 */
setUnitTime : function () {},

/**
 * @method getTotalTime
 * @return A value converted from C/C++ "float"
 */
getTotalTime : function () {},

/**
 * @method getName
 * @return A value converted from C/C++ "const char*"
 */
getName : function () {},

/**
 * @method stop
 */
stop : function () {},

/**
 * @method getCurrentTime
 * @return A value converted from C/C++ "float"
 */
getCurrentTime : function () {},

/**
 * @method removeActionNode
 * @param {cocostudio::ActionNode*}
 */
removeActionNode : function () {},

/**
 * @method getLoop
 * @return A value converted from C/C++ "bool"
 */
getLoop : function () {},

/**
 * @method addActionNode
 * @param {cocostudio::ActionNode*}
 */
addActionNode : function () {},

/**
 * @method getUnitTime
 * @return A value converted from C/C++ "float"
 */
getUnitTime : function () {},

/**
 * @method isPlaying
 * @return A value converted from C/C++ "bool"
 */
isPlaying : function () {},

/**
 * @method updateToFrameByTime
 * @param {float}
 */
updateToFrameByTime : function () {},

/**
 * @method setLoop
 * @param {bool}
 */
setLoop : function () {},

/**
 * @method simulationActionUpdate
 * @param {float}
 */
simulationActionUpdate : function () {},

/**
 * @method ActionObject
 * @constructor
 */
ActionObject : function () {},

};

/**
 * @class ActionManagerEx
 */
ccs.ActionManager = {

/**
 * @method getActionByName
 * @return A value converted from C/C++ "cocostudio::ActionObject*"
 * @param {const char*}
 * @param {const char*}
 */
getActionByName : function () {},

/**
 * @method releaseActions
 */
releaseActions : function () {},

/**
 * @method destroyInstance
 */
destroyInstance : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocostudio::ActionManagerEx*"
 */
getInstance : function () {},

};

/**
 * @class BaseData
 */
ccs.BaseData = {

/**
 * @method getColor
 * @return A value converted from C/C++ "cocos2d::Color4B"
 */
getColor : function () {},

/**
 * @method setColor
 * @param {const cocos2d::Color4B&}
 */
setColor : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocostudio::BaseData*"
 */
create : function () {},

/**
 * @method BaseData
 * @constructor
 */
BaseData : function () {},

};

/**
 * @class ProcessBase
 */
ccs.ProcessBase = {

/**
 * @method play
 * @param {int}
 * @param {int}
 * @param {int}
 * @param {int}
 */
play : function () {},

/**
 * @method pause
 */
pause : function () {},

/**
 * @method getRawDuration
 * @return A value converted from C/C++ "int"
 */
getRawDuration : function () {},

/**
 * @method resume
 */
resume : function () {},

/**
 * @method setIsComplete
 * @param {bool}
 */
setIsComplete : function () {},

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
 * @method getCurrentFrameIndex
 * @return A value converted from C/C++ "int"
 */
getCurrentFrameIndex : function () {},

/**
 * @method isComplete
 * @return A value converted from C/C++ "bool"
 */
isComplete : function () {},

/**
 * @method getCurrentPercent
 * @return A value converted from C/C++ "float"
 */
getCurrentPercent : function () {},

/**
 * @method setIsPause
 * @param {bool}
 */
setIsPause : function () {},

/**
 * @method getProcessScale
 * @return A value converted from C/C++ "float"
 */
getProcessScale : function () {},

/**
 * @method isPause
 * @return A value converted from C/C++ "bool"
 */
isPause : function () {},

/**
 * @method isPlaying
 * @return A value converted from C/C++ "bool"
 */
isPlaying : function () {},

/**
 * @method setProcessScale
 * @param {float}
 */
setProcessScale : function () {},

/**
 * @method setIsPlaying
 * @param {bool}
 */
setIsPlaying : function () {},

/**
 * @method ProcessBase
 * @constructor
 */
ProcessBase : function () {},

};

/**
 * @class Tween
 */
ccs.Tween = {

/**
 * @method getAnimation
 * @return A value converted from C/C++ "cocostudio::ArmatureAnimation*"
 */
getAnimation : function () {},

/**
 * @method gotoAndPause
 * @param {int}
 */
gotoAndPause : function () {},

/**
 * @method play
 * @param {cocostudio::MovementBoneData*}
 * @param {int}
 * @param {int}
 * @param {int}
 * @param {int}
 */
play : function () {},

/**
 * @method gotoAndPlay
 * @param {int}
 */
gotoAndPlay : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 * @param {cocostudio::Bone*}
 */
init : function () {},

/**
 * @method setAnimation
 * @param {cocostudio::ArmatureAnimation*}
 */
setAnimation : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocostudio::Tween*"
 * @param {cocostudio::Bone*}
 */
create : function () {},

/**
 * @method Tween
 * @constructor
 */
Tween : function () {},

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
 * @return A value converted from C/C++ "cocostudio::Bone*"
 */
getBone : function () {},

/**
 * @method getActive
 * @return A value converted from C/C++ "bool"
 */
getActive : function () {},

/**
 * @method getColliderBodyList
 * @return A value converted from C/C++ "const cocos2d::Vector<cocostudio::ColliderBody *>&"
 */
getColliderBodyList : function () {},

/**
 * @method updateTransform
 * @param {kmMat4&}
 */
updateTransform : function () {},

/**
 * @method removeAll
 */
removeAll : function () {},

/**
 * @method setActive
 * @param {bool}
 */
setActive : function () {},

/**
 * @method setBone
 * @param {cocostudio::Bone*}
 */
setBone : function () {},

};

/**
 * @class DisplayManager
 */
ccs.DisplayManager = {

/**
 * @method getDisplayRenderNode
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getDisplayRenderNode : function () {},

/**
 * @method getAnchorPointInPoints
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getAnchorPointInPoints : function () {},

/**
 * @method getDisplayRenderNodeType
 * @return A value converted from C/C++ "cocostudio::DisplayType"
 */
getDisplayRenderNodeType : function () {},

/**
 * @method removeDisplay
 * @param {int}
 */
removeDisplay : function () {},

/**
 * @method setForceChangeDisplay
 * @param {bool}
 */
setForceChangeDisplay : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 * @param {cocostudio::Bone*}
 */
init : function () {},

/**
 * @method getContentSize
 * @return A value converted from C/C++ "cocos2d::Size"
 */
getContentSize : function () {},

/**
 * @method getBoundingBox
 * @return A value converted from C/C++ "cocos2d::Rect"
 */
getBoundingBox : function () {},

/**
 * @method changeDisplayWithIndex
 * @param {int}
 * @param {bool}
 */
changeDisplayWithIndex : function () {},

/**
 * @method changeDisplayWithName
 * @param {const std::string&}
 * @param {bool}
 */
changeDisplayWithName : function () {},

/**
 * @method isForceChangeDisplay
 * @return A value converted from C/C++ "bool"
 */
isForceChangeDisplay : function () {},

/**
 * @method getCurrentDisplayIndex
 * @return A value converted from C/C++ "int"
 */
getCurrentDisplayIndex : function () {},

/**
 * @method getAnchorPoint
 * @return A value converted from C/C++ "cocos2d::Point"
 */
getAnchorPoint : function () {},

/**
 * @method getDecorativeDisplayList
 * @return A value converted from C/C++ "const cocos2d::Vector<cocostudio::DecorativeDisplay *>&"
 */
getDecorativeDisplayList : function () {},

/**
 * @method isVisible
 * @return A value converted from C/C++ "bool"
 */
isVisible : function () {},

/**
 * @method setVisible
 * @param {bool}
 */
setVisible : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocostudio::DisplayManager*"
 * @param {cocostudio::Bone*}
 */
create : function () {},

/**
 * @method DisplayManager
 * @constructor
 */
DisplayManager : function () {},

};

/**
 * @class Bone
 */
ccs.Bone = {

/**
 * @method isTransformDirty
 * @return A value converted from C/C++ "bool"
 */
isTransformDirty : function () {},

/**
 * @method isIgnoreMovementBoneData
 * @return A value converted from C/C++ "bool"
 */
isIgnoreMovementBoneData : function () {},

/**
 * @method updateZOrder
 */
updateZOrder : function () {},

/**
 * @method getDisplayRenderNode
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getDisplayRenderNode : function () {},

/**
 * @method isBlendDirty
 * @return A value converted from C/C++ "bool"
 */
isBlendDirty : function () {},

/**
 * @method addChildBone
 * @param {cocostudio::Bone*}
 */
addChildBone : function () {},

/**
 * @method getWorldInfo
 * @return A value converted from C/C++ "cocostudio::BaseData*"
 */
getWorldInfo : function () {},

/**
 * @method getTween
 * @return A value converted from C/C++ "cocostudio::Tween*"
 */
getTween : function () {},

/**
 * @method getParentBone
 * @return A value converted from C/C++ "cocostudio::Bone*"
 */
getParentBone : function () {},

/**
 * @method updateColor
 */
updateColor : function () {},

/**
 * @method getName
 * @return A value converted from C/C++ "const std::string"
 */
getName : function () {},

/**
 * @method setTransformDirty
 * @param {bool}
 */
setTransformDirty : function () {},

/**
 * @method getDisplayRenderNodeType
 * @return A value converted from C/C++ "cocostudio::DisplayType"
 */
getDisplayRenderNodeType : function () {},

/**
 * @method removeDisplay
 * @param {int}
 */
removeDisplay : function () {},

/**
 * @method setBoneData
 * @param {cocostudio::BoneData*}
 */
setBoneData : function () {},

/**
 * @method setParentBone
 * @param {cocostudio::Bone*}
 */
setParentBone : function () {},

/**
 * @method setIgnoreMovementBoneData
 * @param {bool}
 */
setIgnoreMovementBoneData : function () {},

/**
 * @method setName
 * @param {const std::string&}
 */
setName : function () {},

/**
 * @method removeFromParent
 * @param {bool}
 */
removeFromParent : function () {},

/**
 * @method getColliderDetector
 * @return A value converted from C/C++ "cocostudio::ColliderDetector*"
 */
getColliderDetector : function () {},

/**
 * @method getChildArmature
 * @return A value converted from C/C++ "cocostudio::Armature*"
 */
getChildArmature : function () {},

/**
 * @method changeDisplayWithIndex
 * @param {int}
 * @param {bool}
 */
changeDisplayWithIndex : function () {},

/**
 * @method changeDisplayWithName
 * @param {const std::string&}
 * @param {bool}
 */
changeDisplayWithName : function () {},

/**
 * @method setArmature
 * @param {cocostudio::Armature*}
 */
setArmature : function () {},

/**
 * @method setBlendDirty
 * @param {bool}
 */
setBlendDirty : function () {},

/**
 * @method removeChildBone
 * @param {cocostudio::Bone*}
 * @param {bool}
 */
removeChildBone : function () {},

/**
 * @method setChildArmature
 * @param {cocostudio::Armature*}
 */
setChildArmature : function () {},

/**
 * @method getNodeToArmatureTransform
 * @return A value converted from C/C++ "kmMat4"
 */
getNodeToArmatureTransform : function () {},

/**
 * @method getDisplayManager
 * @return A value converted from C/C++ "cocostudio::DisplayManager*"
 */
getDisplayManager : function () {},

/**
 * @method getArmature
 * @return A value converted from C/C++ "cocostudio::Armature*"
 */
getArmature : function () {},

/**
 * @method Bone
 * @constructor
 */
Bone : function () {},

};

/**
 * @class BatchNode
 */
ccs.BatchNode = {

/**
 * @method create
 * @return A value converted from C/C++ "cocostudio::BatchNode*"
 */
create : function () {},

};

/**
 * @class ArmatureAnimation
 */
ccs.ArmatureAnimation = {

/**
 * @method getSpeedScale
 * @return A value converted from C/C++ "float"
 */
getSpeedScale : function () {},

/**
 * @method pause
 */
pause : function () {},

/**
 * @method setSpeedScale
 * @param {float}
 */
setSpeedScale : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 * @param {cocostudio::Armature*}
 */
init : function () {},

/**
 * @method playWithIndexes
 * @param {const std::vector<int, std::allocator<int> >&}
 * @param {int}
 * @param {bool}
 */
playWithIndexes : function () {},

/**
 * @method play
 * @param {const std::string&}
 * @param {int}
 * @param {int}
 */
play : function () {},

/**
 * @method gotoAndPause
 * @param {int}
 */
gotoAndPause : function () {},

/**
 * @method resume
 */
resume : function () {},

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
 * @method playWithIndex
 * @param {int}
 * @param {int}
 * @param {int}
 */
playWithIndex : function () {},

/**
 * @method getCurrentMovementID
 * @return A value converted from C/C++ "std::string"
 */
getCurrentMovementID : function () {},

/**
 * @method gotoAndPlay
 * @param {int}
 */
gotoAndPlay : function () {},

/**
 * @method playWithNames
 * @param {const std::vector<std::basic_string<char>, std::allocator<std::basic_string<char> > >&}
 * @param {int}
 * @param {bool}
 */
playWithNames : function () {},

/**
 * @method getMovementCount
 * @return A value converted from C/C++ "ssize_t"
 */
getMovementCount : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocostudio::ArmatureAnimation*"
 * @param {cocostudio::Armature*}
 */
create : function () {},

/**
 * @method ArmatureAnimation
 * @constructor
 */
ArmatureAnimation : function () {},

};

/**
 * @class ArmatureDataManager
 */
ccs.ArmatureDataManager = {

/**
 * @method getAnimationDatas
 * @return A value converted from C/C++ "const cocos2d::Map<std::basic_string<char>, cocostudio::AnimationData *>&"
 */
getAnimationDatas : function () {},

/**
 * @method removeAnimationData
 * @param {const std::string&}
 */
removeAnimationData : function () {},

/**
 * @method addArmatureData
 * @param {const std::string&}
 * @param {cocostudio::ArmatureData*}
 * @param {const std::string&}
 */
addArmatureData : function () {},

/**
 * @method removeArmatureFileInfo
 * @param {const std::string&}
 */
removeArmatureFileInfo : function () {},

/**
 * @method getTextureData
 * @return A value converted from C/C++ "cocostudio::TextureData*"
 * @param {const std::string&}
 */
getTextureData : function () {},

/**
 * @method getArmatureData
 * @return A value converted from C/C++ "cocostudio::ArmatureData*"
 * @param {const std::string&}
 */
getArmatureData : function () {},

/**
 * @method getAnimationData
 * @return A value converted from C/C++ "cocostudio::AnimationData*"
 * @param {const std::string&}
 */
getAnimationData : function () {},

/**
 * @method addAnimationData
 * @param {const std::string&}
 * @param {cocostudio::AnimationData*}
 * @param {const std::string&}
 */
addAnimationData : function () {},

/**
 * @method init
 * @return A value converted from C/C++ "bool"
 */
init : function () {},

/**
 * @method removeArmatureData
 * @param {const std::string&}
 */
removeArmatureData : function () {},

/**
 * @method getArmatureDatas
 * @return A value converted from C/C++ "const cocos2d::Map<std::basic_string<char>, cocostudio::ArmatureData *>&"
 */
getArmatureDatas : function () {},

/**
 * @method removeTextureData
 * @param {const std::string&}
 */
removeTextureData : function () {},

/**
 * @method addTextureData
 * @param {const std::string&}
 * @param {cocostudio::TextureData*}
 * @param {const std::string&}
 */
addTextureData : function () {},

/**
 * @method isAutoLoadSpriteFile
 * @return A value converted from C/C++ "bool"
 */
isAutoLoadSpriteFile : function () {},

/**
 * @method addSpriteFrameFromFile
 * @param {const std::string&}
 * @param {const std::string&}
 * @param {const std::string&}
 */
addSpriteFrameFromFile : function () {},

/**
 * @method destroyInstance
 */
destroyInstance : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocostudio::ArmatureDataManager*"
 */
getInstance : function () {},

};

/**
 * @class Armature
 */
ccs.Armature = {

/**
 * @method getBone
 * @return A value converted from C/C++ "cocostudio::Bone*"
 * @param {const std::string&}
 */
getBone : function () {},

/**
 * @method changeBoneParent
 * @param {cocostudio::Bone*}
 * @param {const std::string&}
 */
changeBoneParent : function () {},

/**
 * @method setAnimation
 * @param {cocostudio::ArmatureAnimation*}
 */
setAnimation : function () {},

/**
 * @method getBoneAtPoint
 * @return A value converted from C/C++ "cocostudio::Bone*"
 * @param {float}
 * @param {float}
 */
getBoneAtPoint : function () {},

/**
 * @method getArmatureTransformDirty
 * @return A value converted from C/C++ "bool"
 */
getArmatureTransformDirty : function () {},

/**
 * @method setVersion
 * @param {float}
 */
setVersion : function () {},

/**
 * @method updateOffsetPoint
 */
updateOffsetPoint : function () {},

/**
 * @method getParentBone
 * @return A value converted from C/C++ "cocostudio::Bone*"
 */
getParentBone : function () {},

/**
 * @method setArmatureData
 * @param {cocostudio::ArmatureData*}
 */
setArmatureData : function () {},

/**
 * @method removeBone
 * @param {cocostudio::Bone*}
 * @param {bool}
 */
removeBone : function () {},

/**
 * @method getBatchNode
 * @return A value converted from C/C++ "cocostudio::BatchNode*"
 */
getBatchNode : function () {},

/**
 * @method getName
 * @return A value converted from C/C++ "const std::string&"
 */
getName : function () {},

/**
 * @method setParentBone
 * @param {cocostudio::Bone*}
 */
setParentBone : function () {},

/**
 * @method drawContour
 */
drawContour : function () {},

/**
 * @method setBatchNode
 * @param {cocostudio::BatchNode*}
 */
setBatchNode : function () {},

/**
 * @method setName
 * @param {const std::string&}
 */
setName : function () {},

/**
 * @method addBone
 * @param {cocostudio::Bone*}
 * @param {const std::string&}
 */
addBone : function () {},

/**
 * @method getArmatureData
 * @return A value converted from C/C++ "cocostudio::ArmatureData*"
 */
getArmatureData : function () {},

/**
 * @method getVersion
 * @return A value converted from C/C++ "float"
 */
getVersion : function () {},

/**
 * @method getAnimation
 * @return A value converted from C/C++ "cocostudio::ArmatureAnimation*"
 */
getAnimation : function () {},

/**
 * @method getBoneDic
 * @return A value converted from C/C++ "const cocos2d::Map<std::basic_string<char>, cocostudio::Bone *>&"
 */
getBoneDic : function () {},

/**
 * @method Armature
 * @constructor
 */
Armature : function () {},

};

/**
 * @class Skin
 */
ccs.Skin = {

/**
 * @method getBone
 * @return A value converted from C/C++ "cocostudio::Bone*"
 */
getBone : function () {},

/**
 * @method getNodeToWorldTransformAR
 * @return A value converted from C/C++ "kmMat4"
 */
getNodeToWorldTransformAR : function () {},

/**
 * @method initWithFile
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
initWithFile : function () {},

/**
 * @method getDisplayName
 * @return A value converted from C/C++ "const std::string&"
 */
getDisplayName : function () {},

/**
 * @method updateArmatureTransform
 */
updateArmatureTransform : function () {},

/**
 * @method initWithSpriteFrameName
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
initWithSpriteFrameName : function () {},

/**
 * @method setBone
 * @param {cocostudio::Bone*}
 */
setBone : function () {},

/**
 * @method createWithSpriteFrameName
 * @return A value converted from C/C++ "cocostudio::Skin*"
 * @param {const std::string&}
 */
createWithSpriteFrameName : function () {},

/**
 * @method Skin
 * @constructor
 */
Skin : function () {},

};

/**
 * @class ComAttribute
 */
ccs.ComAttribute = {

/**
 * @method getFloat
 * @return A value converted from C/C++ "float"
 * @param {const std::string&}
 * @param {float}
 */
getFloat : function () {},

/**
 * @method getString
 * @return A value converted from C/C++ "std::string"
 * @param {const std::string&}
 * @param {const std::string&}
 */
getString : function () {},

/**
 * @method setFloat
 * @param {const std::string&}
 * @param {float}
 */
setFloat : function () {},

/**
 * @method setString
 * @param {const std::string&}
 * @param {const std::string&}
 */
setString : function () {},

/**
 * @method getBool
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 * @param {bool}
 */
getBool : function () {},

/**
 * @method setInt
 * @param {const std::string&}
 * @param {int}
 */
setInt : function () {},

/**
 * @method parse
 * @return A value converted from C/C++ "bool"
 * @param {const std::string&}
 */
parse : function () {},

/**
 * @method getInt
 * @return A value converted from C/C++ "int"
 * @param {const std::string&}
 * @param {int}
 */
getInt : function () {},

/**
 * @method setBool
 * @param {const std::string&}
 * @param {bool}
 */
setBool : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocostudio::ComAttribute*"
 */
create : function () {},

};

/**
 * @class ComAudio
 */
ccs.ComAudio = {

/**
 * @method stopAllEffects
 */
stopAllEffects : function () {},

/**
 * @method getEffectsVolume
 * @return A value converted from C/C++ "float"
 */
getEffectsVolume : function () {},

/**
 * @method stopEffect
 * @param {unsigned int}
 */
stopEffect : function () {},

/**
 * @method getBackgroundMusicVolume
 * @return A value converted from C/C++ "float"
 */
getBackgroundMusicVolume : function () {},

/**
 * @method willPlayBackgroundMusic
 * @return A value converted from C/C++ "bool"
 */
willPlayBackgroundMusic : function () {},

/**
 * @method setBackgroundMusicVolume
 * @param {float}
 */
setBackgroundMusicVolume : function () {},

/**
 * @method end
 */
end : function () {},

/**
 * @method pauseBackgroundMusic
 */
pauseBackgroundMusic : function () {},

/**
 * @method isBackgroundMusicPlaying
 * @return A value converted from C/C++ "bool"
 */
isBackgroundMusicPlaying : function () {},

/**
 * @method isLoop
 * @return A value converted from C/C++ "bool"
 */
isLoop : function () {},

/**
 * @method resumeAllEffects
 */
resumeAllEffects : function () {},

/**
 * @method pauseAllEffects
 */
pauseAllEffects : function () {},

/**
 * @method preloadBackgroundMusic
 * @param {const char*}
 */
preloadBackgroundMusic : function () {},

/**
 * @method preloadEffect
 * @param {const char*}
 */
preloadEffect : function () {},

/**
 * @method setLoop
 * @param {bool}
 */
setLoop : function () {},

/**
 * @method unloadEffect
 * @param {const char*}
 */
unloadEffect : function () {},

/**
 * @method rewindBackgroundMusic
 */
rewindBackgroundMusic : function () {},

/**
 * @method pauseEffect
 * @param {unsigned int}
 */
pauseEffect : function () {},

/**
 * @method resumeBackgroundMusic
 */
resumeBackgroundMusic : function () {},

/**
 * @method setFile
 * @param {const char*}
 */
setFile : function () {},

/**
 * @method setEffectsVolume
 * @param {float}
 */
setEffectsVolume : function () {},

/**
 * @method getFile
 * @return A value converted from C/C++ "const char*"
 */
getFile : function () {},

/**
 * @method resumeEffect
 * @param {unsigned int}
 */
resumeEffect : function () {},

/**
 * @method create
 * @return A value converted from C/C++ "cocostudio::ComAudio*"
 */
create : function () {},

};

/**
 * @class InputDelegate
 */
ccs.InputDelegate = {

/**
 * @method isAccelerometerEnabled
 * @return A value converted from C/C++ "bool"
 */
isAccelerometerEnabled : function () {},

/**
 * @method setKeypadEnabled
 * @param {bool}
 */
setKeypadEnabled : function () {},

/**
 * @method getTouchMode
 * @return A value converted from C/C++ "cocos2d::Touch::DispatchMode"
 */
getTouchMode : function () {},

/**
 * @method setAccelerometerEnabled
 * @param {bool}
 */
setAccelerometerEnabled : function () {},

/**
 * @method isKeypadEnabled
 * @return A value converted from C/C++ "bool"
 */
isKeypadEnabled : function () {},

/**
 * @method isTouchEnabled
 * @return A value converted from C/C++ "bool"
 */
isTouchEnabled : function () {},

/**
 * @method setTouchPriority
 * @param {int}
 */
setTouchPriority : function () {},

/**
 * @method getTouchPriority
 * @return A value converted from C/C++ "int"
 */
getTouchPriority : function () {},

/**
 * @method setTouchEnabled
 * @param {bool}
 */
setTouchEnabled : function () {},

/**
 * @method setTouchMode
 * @param {cocos2d::Touch::DispatchMode}
 */
setTouchMode : function () {},

};

/**
 * @class ComController
 */
ccs.ComController = {

/**
 * @method create
 * @return A value converted from C/C++ "cocostudio::ComController*"
 */
create : function () {},

/**
 * @method ComController
 * @constructor
 */
ComController : function () {},

};

/**
 * @class ComRender
 */
ccs.ComRender = {

/**
 * @method setNode
 * @param {cocos2d::Node*}
 */
setNode : function () {},

/**
 * @method getNode
 * @return A value converted from C/C++ "cocos2d::Node*"
 */
getNode : function () {},

};

/**
 * @class GUIReader
 */
ccs.GUIReader = {

/**
 * @method widgetFromJsonFile
 * @return A value converted from C/C++ "cocos2d::ui::Widget*"
 * @param {const char*}
 */
widgetFromJsonFile : function () {},

/**
 * @method getVersionInteger
 * @return A value converted from C/C++ "int"
 * @param {const char*}
 */
getVersionInteger : function () {},

/**
 * @method destroyInstance
 */
destroyInstance : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocostudio::GUIReader*"
 */
getInstance : function () {},

};

/**
 * @class SceneReader
 */
ccs.SceneReader = {

/**
 * @method createNodeWithSceneFile
 * @return A value converted from C/C++ "cocos2d::Node*"
 * @param {const std::string&}
 */
createNodeWithSceneFile : function () {},

/**
 * @method getNodeByTag
 * @return A value converted from C/C++ "cocos2d::Node*"
 * @param {int}
 */
getNodeByTag : function () {},

/**
 * @method destroyInstance
 */
destroyInstance : function () {},

/**
 * @method sceneReaderVersion
 * @return A value converted from C/C++ "const char*"
 */
sceneReaderVersion : function () {},

/**
 * @method getInstance
 * @return A value converted from C/C++ "cocostudio::SceneReader*"
 */
getInstance : function () {},

};
