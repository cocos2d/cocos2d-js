var TimeElapsed = ccs.BaseTriggerCondition.extend({
    _totalTime: 0,
    _tmpTime: 0,
    _scheduler: null,
    _success: false,
    ctor: function () {
        this._totalTime = 0;
        this._tmpTime = 0;
        this._scheduler = null;
        this._success = false;
        this._scheduler = cc.Director.getInstance().getScheduler();
    },
    
    init: function () {
        this._scheduler.scheduleCallbackForTarget(this, this.update);
        return true;
    },

    detect: function () {
        return this._success;
    },

    serialize: function (jsonVal) {
        var dataitems = jsonVal["dataitems"] || [];
        for (var i = 0; i < dataitems.length; i++) {
            var subDict = dataitems[i];
            var key = subDict["key"];
            if (key == "TotalTime") {
                this._totalTime = subDict["value"];
            }
        }
    },

    removeAll: function () {
        this._scheduler.unscheduleUpdateForTarget(this);
    },

    update: function (dt) {
        this._tmpTime += dt;
        if (this._tmpTime > this._totalTime) {
            this._tmpTime = 0.0;
            this._success = true;
        }
    }
});
var ArmatureActionState = ccs.BaseTriggerCondition.extend({
    _tag: -1,
    _state: -1,
    _success: false,
    _aniName: "",
    _comName: "",
    _armature: null,
    ctor: function () {
        this._tag = -1;
        this._state = -1;
        this._success = false;
        this._aniName = "";
        this._comName = "";
        this._armature = null;
    },
    
    init: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node) return false;
        var render = node.getComponent(this._comName);
        if (!render) return false;
        var armature = render.getNode();
        if (!armature) return false;
        this._armature = armature;
        ccs.TriggerMng.getInstance().addArmatureMovementCallBack(this._armature, this.animationEvent, this);
        return true;
    },

    detect: function () {
        return this._success;
    },

    serialize: function (jsonVal) {
        var dataitems = jsonVal["dataitems"] || [];
        for (var i = 0; i < dataitems.length; i++) {
            var subDict = dataitems[i];
            var key = subDict["key"];
            if (key == "TotalTime") {
                this._totalTime = subDict["value"];
                continue;
            }
            if (key == "componentName") {
                this._comName = subDict["value"];
                continue;
            }
            if (key == "AnimationName") {
                this._aniName = subDict["value"];
                continue;
            }
            if (key == "ActionType") {
                this._state = subDict["value"];
            }
        }
    },

    removeAll: function () {
        if (this._armature) {
            ccs.TriggerMng.getInstance().removeArmatureMovementCallBack(this._armature, this.animationEvent, this);
        }
    },

    animationEvent: function (armature, movementType, movementID) {
        if (movementType == this._state && movementID == this._aniName) {
            this._success = true;
        }
    }
});
var NodeInRect = ccs.BaseTriggerCondition.extend({
    _tag: -1,
    _origin: null,
    _size: null,
    ctor: function () {
        this._tag = -1;
        this._origin = null;
        this._size = null;
        this._origin = cc.p(0, 0);
        this._size = cc.p(0, 0);
    },

    init: function () {

        return true;
    },

    detect: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (node && Math.abs(node.getPositionX() - this._origin.x) <= this._size.width && Math.abs(node.getPositionY() - this._origin.y) <= this._size.height) {
            return true;
        }
        return false;
    },
    serialize: function (jsonVal) {
        var dataitems = jsonVal["dataitems"] || [];
        for (var i = 0; i < dataitems.length; i++) {
            var subDict = dataitems[i];
            var key = subDict["key"];
            if (key == "Tag") {
                this._tag = subDict["value"];
                continue;
            }
            if (key == "originX") {
                this._origin.x = subDict["value"];
                continue;
            }
            if (key == "originY") {
                this._origin.y = subDict["value"];
                continue;
            }
            if (key == "originX") {
                this._origin.x = subDict["value"];
                continue;
            }
            if (key == "originY") {
                this._origin.y = subDict["value"];
                continue;
            }
            if (key == "sizeWidth") {
                this._size.width = subDict["value"];
                continue;
            }
            if (key == "sizeHeight") {
                this._size.height = subDict["value"];
            }
        }
    },

    removeAll: function () {

    }
});

var NodeVisible = ccs.BaseTriggerCondition.extend({
    _tag: -1,
    _visible: false,
    cotr: function () {
        this._tag = -1;
        this._visible = false;
    },
    
    init: function () {
        return true;
    },

    detect: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (node && node.isVisible() == this._visible) {
            return true;
        }
        return false;
    },
    serialize: function (jsonVal) {
        var dataitems = jsonVal["dataitems"] || [];
        for (var i = 0; i < dataitems.length; i++) {
            var subDict = dataitems[i];
            var key = subDict["key"];
            if (key == "Tag") {
                this._tag = subDict["value"];
                continue;
            }
            if (key == "Visible") {
                this._visible = subDict["value"];
            }
        }
    },

    removeAll: function () {

    }
});


ccs.registerTriggerClass("TimeElapsed", TimeElapsed);
ccs.registerTriggerClass("ArmatureActionState", ArmatureActionState);
ccs.registerTriggerClass("NodeInRect", NodeInRect);
ccs.registerTriggerClass("NodeVisible", NodeVisible);