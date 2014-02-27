var PlayMusic = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _comName: "",
    _type: -1,
    ctor: function () {
        this._tag = -1;
        this._comName = "";
        this._type = -1;
    },

    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var audio = node.getComponent(this._comName);
        if (!audio)
            return;
        if (this._type == 0) {
            audio.playBackgroundMusic();
        }
        else if (this._type == 1) {
            audio.playEffect();
        }
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
            if (key == "componentName") {
                this._comName = subDict["value"];
                continue;
            }
            if (key == "type") {
                this._type = subDict["value"];
            }
        }
    },

    removeAll: function () {
    }
});

var TMoveTo = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _duration: 0,
    _pos: cc.p(0, 0),
    ctor: function () {
        this._tag = -1;
        this._duration = 0;
        this._pos = cc.p(0, 0);
    },

    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var actionTo = cc.MoveTo.create(this._duration, cc.p(this._pos.x, this._pos.y));
        node.runAction(actionTo);
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
            if (key == "Duration") {
                this._duration = subDict["value"];
                continue;
            }
            if (key == "x") {
                this._pos.x = subDict["value"];
                continue;
            }
            if (key == "y") {
                this._pos.y = subDict["value"];
            }
        }
    },

    removeAll: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        node.getActionManager().removeAllActions();
    }
});

var TMoveBy = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _duration: 0,
    _pos: cc.p(0, 0),
    _reverse: false,
    ctor: function () {
        this._tag = -1;
        this._duration = 0;
        this._pos = cc.p(0, 0);
        this._reverse = false;
    },

    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var moveBy = cc.MoveBy.create(this._duration, cc.p(this._pos.x, this._pos.y));
        if (this._reverse) {
            var actionByBack = moveBy.reverse();
            node.runAction(cc.Sequence.create(moveBy, actionByBack));
        } else {
            node.runAction(moveBy);
        }
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
            if (key == "Duration") {
                this._duration = subDict["value"];
                continue;
            }
            if (key == "x") {
                this._pos.x = subDict["value"];
                continue;
            }
            if (key == "y") {
                this._pos.y = subDict["value"];
                continue;
            }
            if (key == "IsReverse") {
                this._reverse = subDict["value"] || false;
            }
        }
    },

    removeAll: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        node.getActionManager().removeAllActions();
    }
});

var TRotateTo = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _duration: 0,
    _deltaAngle: 0,
    ctor: function () {
        this._tag = -1;
        this._duration = 0;
        this._deltaAngle = 0;
    },

    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var actionTo = cc.RotateTo.create(this._duration, this._deltaAngle);
        node.runAction(actionTo);
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
            if (key == "Duration") {
                this._duration = subDict["value"];
                continue;
            }
            if (key == "DeltaAngle") {
                this._deltaAngle = subDict["value"];
            }
        }
    },

    removeAll: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        node.getActionManager().removeAllActions();
    }
});

var TRotateBy = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _duration: 0,
    _deltaAngle: 0,
    _reverse: false,
    ctor:function(){
        this._tag = -1;
        this._duration = 0;
        this._deltaAngle = 0;
        this._reverse = false;
    },

    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var actionBy = cc.RotateBy.create(this._duration, this._deltaAngle);
        if (this._reverse == true) {
            var actionByBack = actionBy.reverse();
            node.runAction(cc.Sequence.create(actionBy, actionByBack));
        }
        else {
            node.runAction(actionBy);
        }
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
            if (key == "Duration") {
                this._duration = subDict["value"];
                continue;
            }
            if (key == "DeltaAngle") {
                this._deltaAngle = subDict["value"];
                continue;
            }
            if (key == "IsReverse") {
                this._reverse = subDict["value"];
            }
        }
    },

    removeAll: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        node.getActionManager().removeAllActions();
    }
});

var TScaleTo = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _duration: 0,
    _scaleX: 0,
    _scaleY: 0,
    ctor: function () {
        this._tag = -1;
        this._duration = 0;
        this._scaleX = 0;
        this._scaleY = 0;
    },

    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var actionTo = cc.ScaleTo.create(this._duration, this._scaleX, this._scaleY);
        node.runAction(actionTo);
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
            if (key == "Duration") {
                this._duration = subDict["value"];
                continue;
            }
            if (key == "ScaleX") {
                this._scaleX = subDict["value"];
                continue;
            }
            if (key == "ScaleY") {
                this._scaleY = subDict["value"];
            }
        }
    },

    removeAll: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        node.getActionManager().removeAllActions();
    }
});

var TScaleBy = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _duration: 0,
    _scaleX: 0,
    _scaleY: 0,
    _reverse: false,
    ctor: function () {
        this._tag = -1;
        this._duration = 0;
        this._scaleX = 0;
        this._scaleY = 0;
        this._reverse = false;
    },
    
    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var actionBy = cc.ScaleBy.create(this._duration, this._scaleX, this._scaleY);
        if (this._reverse == true) {
            var actionByBack = actionBy.reverse();
            node.runAction(cc.Sequence.create(actionBy, actionByBack));
        }
        else {
            node.runAction(actionBy);
        }
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
            if (key == "Duration") {
                this._duration = subDict["value"];
                continue;
            }
            if (key == "ScaleX") {
                this._scaleX = subDict["value"];
                continue;
            }
            if (key == "ScaleY") {
                this._scaleY = subDict["value"];
            }
        }
    },

    removeAll: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        node.getActionManager().removeAllActions();
    }
});

var TSkewTo = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _duration: 0,
    _skewX: 0,
    _skewY: 0,
    ctor: function () {
        this._tag = -1;
        this._duration = 0;
        this._skewX = 0;
        this._skewY = 0;
    },
    
    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var actionTo = cc.SkewTo.create(this._duration, this._skewX, this._skewY);
        node.runAction(actionTo);
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
            if (key == "Duration") {
                this._duration = subDict["value"];
                continue;
            }
            if (key == "SkewX") {
                this._skewX = subDict["value"];
                continue;
            }
            if (key == "SkewY") {
                this._skewY = subDict["value"];
            }
        }
    },

    removeAll: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        node.getActionManager().removeAllActions();
    }
});

var TSkewBy = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _duration: 0,
    _skewX: 0,
    _skewY: 0,
    _reverse: false,
    ctor: function () {
        this._tag = -1;
        this._duration = 0;
        this._skewX = 0;
        this._skewY = 0;
        this._reverse = false;
    },
    
    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var actionBy = cc.SkewBy.create(this._duration, this._skewX, this._skewY);
        if (this._reverse == true) {
            var actionByBack = actionBy.reverse();
            node.runAction(cc.Sequence.create(actionBy, actionByBack));
        }
        else {
            node.runAction(actionBy);
        }
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
            if (key == "Duration") {
                this._duration = subDict["value"];
                continue;
            }
            if (key == "SkewX") {
                this._skewX = subDict["value"];
                continue;
            }
            if (key == "SkewY") {
                this._skewY = subDict["value"];
            }
        }
    },

    removeAll: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        node.getActionManager().removeAllActions();
    }
});

var TriggerState = ccs.BaseTriggerAction.extend({
    _id: -1,
    _state: 0,
    ctor: function () {
        this._id = -1;
        this._state = 0;
    },

    init: function () {
        return true;
    },

    done: function () {
        var obj = ccs.TriggerMng.getInstance().getTriggerObj(this._id);
        if (obj) {
            if (this._state == 0) {
                obj.setEnable(false);
            }
            else if (this._state == 1) {
                obj.setEnable(true);
            }
            else if (this._state == 2) {
                ccs.TriggerMng.getInstance().removeTriggerObj(this._id);
            }

        }
    },

    serialize: function (jsonVal) {
        var dataitems = jsonVal["dataitems"] || [];
        for (var i = 0; i < dataitems.length; i++) {
            var subDict = dataitems[i];

            var key = subDict["key"];
            if (key == "ID") {
                this._id = subDict["value"];
                continue;
            }
            if (key == "State") {
                this._state = subDict["value"];
            }
        }
    },

    removeAll: function () {
    }
});

var ArmaturePlayAction = ccs.BaseTriggerAction.extend({
    _tag: -1,
    _comName: 0,
    _aniName: "",
    ctor: function () {
        this._tag = -1;
        this._comName = 0;
        this._aniName = "";
    },
    
    init: function () {
        return true;
    },

    done: function () {
        var node = ccs.SceneReader.getInstance().getNodeByTag(this._tag);
        if (!node)
            return;
        var render = node.getComponent(this._comName);
        if (!render)
            return;
        var armature = render.getNode();
        if (!armature)
            return;
        armature.getAnimation().play(this._aniName);
    },

    serialize: function (jsonVal) {
        var dataitems = jsonVal["dataitems"] || [];
        for (var i = 0; i < dataitems.length; i++) {
            var subDict = dataitems[i];

            var key = subDict["key"];
            if (key == "ID") {
                this._id = subDict["value"];
                continue;
            }
            if (key == "componentName") {
                this._comName = subDict["value"];
                continue;
            }
            if (key == "AnimationName") {
                this._aniName = subDict["value"];
            }
        }
    },

    removeAll: function () {
    }
});

ccs.registerTriggerClass("PlayMusic", PlayMusic);
ccs.registerTriggerClass("TMoveTo", TMoveTo);
ccs.registerTriggerClass("TMoveBy", TMoveBy);
ccs.registerTriggerClass("TRotateTo", TRotateTo);
ccs.registerTriggerClass("TRotateBy", TRotateBy);
ccs.registerTriggerClass("TScaleTo", TScaleTo);
ccs.registerTriggerClass("TScaleBy", TScaleBy);
ccs.registerTriggerClass("TSkewTo", TSkewTo);
ccs.registerTriggerClass("TSkewBy", TSkewBy);
ccs.registerTriggerClass("TriggerState", TriggerState);
ccs.registerTriggerClass("ArmaturePlayAction", ArmaturePlayAction);