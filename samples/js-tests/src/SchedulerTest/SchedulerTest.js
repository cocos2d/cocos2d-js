/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
var TAG_ANIMATION_DANCE = 1;
var schedulerTestSceneIdx = -1;

/*
    Base Layer
*/
var SchedulerTestLayer = BaseTestLayer.extend({

    title:function () {
        return "No title";
    },
    subtitle:function () {
        return "";
    },

    onBackCallback:function (sender) {
        var scene = new SchedulerTestScene();
        var layer = previousSchedulerTest();

        scene.addChild(layer);
        director.runScene(scene);
    },
    onNextCallback:function (sender) {
        var scene = new SchedulerTestScene();
        var layer = nextSchedulerTest();

        scene.addChild(layer);
        director.runScene(scene);
    },
    onRestartCallback:function (sender) {
        var scene = new SchedulerTestScene();
        var layer = restartSchedulerTest();

        scene.addChild(layer);
        director.runScene(scene);
    },
    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfSchedulerTest.length-1) - schedulerTestSceneIdx );
    },

    getTestNumber:function() {
        return schedulerTestSceneIdx;
    }

});

/*
    SchedulerAutoremove
*/
var SchedulerAutoremove = SchedulerTestLayer.extend({
    _accum:0,

    onEnter:function () {
        this._super();

        this.schedule(this.onAutoremove, 0.5);
        this.schedule(this.onTick, 0.5);
        this._accum = 0;
    },
    title:function () {
        return "Self-remove an scheduler";
    },
    subtitle:function () {
        return "1 scheduler will be autoremoved in 3 seconds. See console";
    },

    onAutoremove:function (dt) {
        this._accum += dt;
        cc.log("Time: " + this._accum);

        if (this._accum > 3) {
            this.unschedule(this.onAutoremove);
            cc.log("scheduler removed");
        }
    },
    onTick:function (dt) {
        cc.log("This scheduler should not be removed");
    }
});

/*
    SchedulerPauseResume
*/
var SchedulerPauseResume = SchedulerTestLayer.extend({
    onEnter:function () {
        this._super();

        this.schedule(this.onTick1, 0.5);
        this.schedule(this.onTick2, 0.5);
        this.schedule(this.onPause, 3);
    },
    title:function () {
        return "Pause / Resume";
    },
    subtitle:function () {
        return "Scheduler should be paused after 3 seconds. See console";
    },

    onTick1:function (dt) {
        cc.log("tick1");
    },
    onTick2:function (dt) {
        cc.log("tick2");
    },
    onPause:function (dt) {
        director.getScheduler().pauseTarget(this);
    }
});

/*
    SchedulerUnscheduleAll
*/
var SchedulerUnscheduleAll = SchedulerTestLayer.extend({
    onEnter:function () {
        this._super();

        this.schedule(this.onTick1, 0.5);
        this.schedule(this.onTick2, 1.0);
        this.schedule(this.onTick3, 1.5);
        this.schedule(this.onTick4, 1.5);
        this.schedule(this.onUnscheduleAll, 4);
    },
    title:function () {
        return "Unschedule All callbacks";
    },
    subtitle:function () {
        return "All scheduled callbacks will be unscheduled in 4 seconds. See console";
    },

    onTick1:function (dt) {
        cc.log("tick1");
    },
    onTick2:function (dt) {
        cc.log("tick2");
    },
    onTick3:function (dt) {
        cc.log("tick3");
    },
    onTick4:function (dt) {
        cc.log("tick4");
    },
    onUnscheduleAll:function (dt) {
        this.unscheduleAllCallbacks();
    }
});

/*
    SchedulerUnscheduleAllHard
*/
var SchedulerUnscheduleAllHard = SchedulerTestLayer.extend({
    onEnter:function () {
        this._super();

        this.schedule(this.onTick1, 0.5);
        this.schedule(this.onTick2, 1.0);
        this.schedule(this.onTick3, 1.5);
        this.schedule(this.onTick4, 1.5);
        this.schedule(this.onUnscheduleAll, 4);
    },
    title:function () {
        return "Unschedule All callbacks #2";
    },
    subtitle:function () {
        return "Unschedules all callbacks after 4s. Uses CCScheduler. See console";
    },

    onTick1:function (dt) {
        cc.log("tick1");
    },
    onTick2:function (dt) {
        cc.log("tick2");
    },
    onTick3:function (dt) {
        cc.log("tick3");
    },
    onTick4:function (dt) {
        cc.log("tick4");
    },
    onUnscheduleAll:function (dt) {
        director.getScheduler().unscheduleAllCallbacks();
    }
});

/*
    SchedulerSchedulesAndRemove
*/
var SchedulerSchedulesAndRemove = SchedulerTestLayer.extend({
    onEnter:function () {
        this._super();

        this.schedule(this.onTick1, 0.5);
        this.schedule(this.onTick2, 1.0);
        this.schedule(this.onScheduleAndUnschedule, 4.0);
    },
    title:function () {
        return "Schedule from Schedule";
    },
    subtitle:function () {
        return "Will unschedule and schedule callbacks in 4s. See console";
    },

    onTick1:function (dt) {
        cc.log("tick1");
    },
    onTick2:function (dt) {
        cc.log("tick2");
    },
    onTick3:function (dt) {
        cc.log("tick3");
    },
    onTick4:function (dt) {
        cc.log("tick4");
    },
    onScheduleAndUnschedule:function (dt) {
        this.unschedule(this.onTick1);
        this.unschedule(this.onTick2);
        this.unschedule(this.onScheduleAndUnschedule);

        this.schedule(this.onTick3, 1.0);
        this.schedule(this.onTick4, 1.0);
    }
});

/*
    SchedulerUpdate
*/
var TestNode = cc.Node.extend({
    _pString:"",

    ctor:function (str, priority) {
        this._super();
        this.init();
        this._pString = str;
        this.scheduleUpdateWithPriority(priority);
    },
    update:function(dt) {
        cc.log( this._pString );
    }
});

var SchedulerUpdate = SchedulerTestLayer.extend({
    onEnter:function () {
        this._super();

        var str = "---";
        var d = new TestNode(str,50);
        this.addChild(d);

        str = "3rd";
        var b = new TestNode(str,0);
        this.addChild(b);

        str = "1st";
        var a = new TestNode(str, -10);
        this.addChild(a);

        str = "4th";
        var c = new TestNode(str,10);
        this.addChild(c);

        str = "5th";
        var e = new TestNode(str,20);
        this.addChild(e);

        str = "2nd";
        var f = new TestNode(str,-5);
        this.addChild(f);

        this.schedule(this.onRemoveUpdates, 4.0);
    },
    title:function () {
        return "Schedule update with priority";
    },
    subtitle:function () {
        return "3 scheduled updates. Priority should work. Stops in 4s. See console";
    },

    onRemoveUpdates:function (dt) {
        var children = this.children;

        for (var i = 0; i < children.length; i++) {
            var node = children[i];
            if (node) {
                node.unscheduleAllCallbacks();
            }
        }
    }
});

/*
    SchedulerUpdateAndCustom
*/
var SchedulerUpdateAndCustom = SchedulerTestLayer.extend({
    onEnter:function () {
        this._super();

        this.scheduleUpdate();
        this.schedule(this.onTick);
        this.schedule(this.onStopCallbacks, 4);
    },
    title:function () {
        return "Schedule Update + custom callback";
    },
    subtitle:function () {
        return "Update + custom callback at the same time. Stops in 4s. See console";
    },

    update:function (dt) {
        cc.log("update called:" + dt);
    },
    onTick:function (dt) {
        cc.log("custom callback called:" + dt);
    },
    onStopCallbacks:function (dt) {
        this.unscheduleAllCallbacks();
    }
});

/*
    SchedulerUpdateFromCustom
*/
var SchedulerUpdateFromCustom = SchedulerTestLayer.extend({
    onEnter:function () {
        this._super();

        this.schedule(this.onSchedUpdate, 2.0);
    },
    title:function () {
        return "Schedule Update in 2 sec";
    },
    subtitle:function () {
        return "Update schedules in 2 secs. Stops 2 sec later. See console";
    },

    update:function (dt) {
        cc.log("update called:" + dt);
    },
    onSchedUpdate:function (dt) {
        this.unschedule(this.onSchedUpdate);
        this.scheduleUpdate();
        this.schedule(this.onStopUpdate, 2.0);
    },
    onStopUpdate:function (dt) {
        this.unscheduleUpdate();
        this.unschedule(this.onStopUpdate);
    }
});


/*
    RescheduleCallback
*/
var RescheduleCallback = SchedulerTestLayer.extend({
    _interval:1.0,
    _ticks:0,

    onEnter:function () {
        this._super();

        this._interval = 1.0;
        this._ticks = 0;
        this.schedule(this.onSchedUpdate, this._interval);
    },
    title:function () {
        return "Reschedule Callback";
    },
    subtitle:function () {
        return "Interval is 1 second, then 2, then 3...";
    },

    onSchedUpdate:function (dt) {
        this._ticks++;

        cc.log("schedUpdate: " + dt.toFixed(2));
        if (this._ticks > 3) {
            this._interval += 1.0;
            this.schedule(this.onSchedUpdate, this._interval);
            this._ticks = 0;
        }
    }
});

/*
    ScheduleUsingSchedulerTest
*/
var ScheduleUsingSchedulerTest = SchedulerTestLayer.extend({
    _accum:0,

    onEnter:function () {
        this._super();

        this._accum = 0;
        var scheduler = director.getScheduler();

        var priority = 0;  // priority 0. default.
        var paused = false; // not paused, queue it now.
        scheduler.scheduleUpdateForTarget(this, priority, paused);

        var interval = 0.25; // every 1/4 of second
        var repeat = cc.REPEAT_FOREVER; // how many repeats. cc.REPEAT_FOREVER means forever
        var delay = 2; // start after 2 seconds;
        paused = false; // not paused. queue it now.
        scheduler.scheduleCallbackForTarget(this, this.onSchedUpdate, interval, repeat, delay, paused);
    },
    title:function () {
        return "Schedule / Unschedule using Scheduler";
    },
    subtitle:function () {
        return "After 5 seconds all callbacks should be removed";
    },

    // callbacks
    update:function(dt) {
        cc.log("update: " + dt);
    },
    onSchedUpdate:function (dt) {
        cc.log("onSchedUpdate delta: " + dt);

        this._accum += dt;
        if( this._accum > 3 ) {
            var scheduler = director.getScheduler();
            scheduler.unscheduleAllCallbacksForTarget(this);
        }
        cc.log("onSchedUpdate accum: " + this._accum);
    }
});

/*
    main entry
*/
var SchedulerTestScene = TestScene.extend({
    runThisTest:function () {
        schedulerTestSceneIdx = -1;
        var layer = nextSchedulerTest();
        this.addChild(layer);

        director.runScene(this);
    }
});

//
// Flow control
//

var arrayOfSchedulerTest = [
    SchedulerAutoremove,
    SchedulerPauseResume,
    SchedulerUnscheduleAll,
    SchedulerUnscheduleAllHard,
    SchedulerSchedulesAndRemove,
    SchedulerUpdate,
    SchedulerUpdateAndCustom,
    SchedulerUpdateFromCustom,
    RescheduleCallback,
    ScheduleUsingSchedulerTest
];

var nextSchedulerTest = function () {
    schedulerTestSceneIdx++;
    schedulerTestSceneIdx = schedulerTestSceneIdx % arrayOfSchedulerTest.length;

    return new arrayOfSchedulerTest[schedulerTestSceneIdx]();
};
var previousSchedulerTest = function () {
    schedulerTestSceneIdx--;
    if (schedulerTestSceneIdx < 0)
        schedulerTestSceneIdx += arrayOfSchedulerTest.length;

    return new arrayOfSchedulerTest[schedulerTestSceneIdx]();
};
var restartSchedulerTest = function () {
    return new arrayOfSchedulerTest[schedulerTestSceneIdx]();
};
