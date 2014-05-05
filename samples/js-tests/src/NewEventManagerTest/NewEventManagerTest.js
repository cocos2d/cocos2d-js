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

var eventDispatcherSceneIdx = -1;

var EventDispatcherTestDemo = BaseTestLayer.extend({
    ctor:function() {
        this._super(cc.color(0,0,0,255), cc.color(160,32,32,255));
    },

    title:function () {
        return "No title";
    },

    subtitle:function () {
        return "";
    },

    onBackCallback:function (sender) {
        var s = new EventDispatcherTestScene();
        s.addChild(previousDispatcherTest());
        director.runScene(s);
    },

    onRestartCallback:function (sender) {
        var s = new EventDispatcherTestScene();
        s.addChild(restartDispatcherTest());
        director.runScene(s);
    },

    onNextCallback:function (sender) {
        var s = new EventDispatcherTestScene();
        s.addChild(nextDispatcherTest());
        director.runScene(s);
    },
    // varmation
    numberOfPendingTests:function() {
        return ( (arrayOfEventDispatcherTest.length-1) - eventDispatcherSceneIdx );
    },

    getTestNumber:function() {
        return eventDispatcherSceneIdx;
    }
});

var TouchableSpriteTest =  EventDispatcherTestDemo.extend({
    onEnter:function(){
        this._super();

        var origin = director.getVisibleOrigin();
        var size = director.getVisibleSize();

        var containerForSprite1 = cc.Node.create();
        var sprite1 = cc.Sprite.create("res/Images/CyanSquare.png");
        sprite1.setPosition(origin.x + size.width/2 - 80, origin.y + size.height/2 + 80);
        containerForSprite1.addChild(sprite1);
        this.addChild(containerForSprite1, 10);

        var sprite2 = cc.Sprite.create("res/Images/MagentaSquare.png");
        sprite2.setPosition(origin.x + size.width/2, origin.y + size.height/2);
        this.addChild(sprite2, 20);

        var sprite3 = cc.Sprite.create("res/Images/YellowSquare.png");
        sprite3.setPosition(0,0);
        sprite2.addChild(sprite3, 1);

        // Make sprite1 touchable
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();

                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
                cc.log("sprite onTouchesEnded.. ");
                target.setOpacity(255);
                if (target == sprite2) {
                    containerForSprite1.setLocalZOrder(100);
                } else if (target == sprite1) {
                    containerForSprite1.setLocalZOrder(0);
                }
            }
        });

        cc.eventManager.addListener(listener1, sprite1);
        cc.eventManager.addListener(listener1.clone(), sprite2);
        cc.eventManager.addListener(listener1.clone(), sprite3);
        var selfPointer = this;

        var removeAllTouchItem = cc.MenuItemFont.create("Remove All Touch Listeners", function(senderItem){
            senderItem.setString("Only Next item could be clicked");

            cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);

            var nextItem = cc.MenuItemFont.create("Next", function(sender){
                selfPointer.onNextCallback();
            });

            nextItem.fontSize = 16;
            nextItem.x = cc.visibleRect.right.x -100;
	        nextItem.y = cc.visibleRect.right.y - 30;

            var menu2 = cc.Menu.create(nextItem);
            menu2.setPosition(0, 0);
            menu2.setAnchorPoint(0, 0);
            selfPointer.addChild(menu2);
        });

        removeAllTouchItem.fontSize = 16;
        removeAllTouchItem.x = cc.visibleRect.right.x -100;
	    removeAllTouchItem.y = cc.visibleRect.right.y;

        var menu = cc.Menu.create(removeAllTouchItem);
        menu.setPosition(0, 0);
        menu.setAnchorPoint(0, 0);
        this.addChild(menu);
    },

    title:function(){
        return "Touchable Sprite Test";
    },

    subtitle:function(){
        return "Please drag the blocks";
    }
});

TouchableSpriteTest.create = function(){
    var test = new TouchableSpriteTest();
    test.init();
    return test;
};

var TouchableSprite = cc.Sprite.extend({
    _listener:null,
    _fixedPriority:0,
    _removeListenerOnTouchEnded: false,

    ctor: function(priority){
        this._super();
        this._fixedPriority = priority || 0;
    },

    setPriority:function(fixedPriority){
        this._fixedPriority = fixedPriority;
    },

    onEnter:function(){
        this._super();

        var selfPointer = this;
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var locationInNode = selfPointer.convertToNodeSpace(touch.getLocation());
                var s = selfPointer.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {
                    selfPointer.setColor(cc.color.RED);
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
                //this.setPosition(this.getPosition() + touch.getDelta());
            },
            onTouchEnded: function (touch, event) {
                selfPointer.setColor(cc.color.WHITE);
                if(selfPointer._removeListenerOnTouchEnded)
                    cc.eventManager.removeListener(selfPointer._listener);
            }
        });

        if(this._fixedPriority != 0)
            cc.eventManager.addListener(listener, this._fixedPriority);
        else
            cc.eventManager.addListener(listener, this);
        this._listener = listener;
    },

    onExit: function(){
        cc.eventManager.removeListener(this._listener);
        this._super();
    },

    removeListenerOnTouchEnded: function(toRemove){
        this._removeListenerOnTouchEnded = toRemove;
    },

    getListener: function() {
        return this._listener;
    }
});

TouchableSprite.create = function(priority){
    var test = new TouchableSprite(priority);
    test.init();
    return test;
};

var FixedPriorityTest =  EventDispatcherTestDemo.extend({
    onEnter:function(){
        this._super();

        var origin = director.getVisibleOrigin();
        var size = director.getVisibleSize();

        var sprite1 = TouchableSprite.create(30);
        sprite1.setTexture("res/Images/CyanSquare.png");
        sprite1.x = origin.x + size.width / 2 - 80;
        sprite1.y = origin.y + size.height / 2 + 40;
        this.addChild(sprite1, 10);

        var sprite2 = TouchableSprite.create(20);
        sprite2.setTexture("res/Images/MagentaSquare.png");
        sprite2.x = origin.x + size.width / 2;
        sprite2.y = origin.y + size.height / 2;
        this.addChild(sprite2, 20);

        var sprite3 = TouchableSprite.create(10);
        sprite3.setTexture("res/Images/YellowSquare.png");
        sprite3.x = 0;
        sprite3.y = 0;
        sprite2.addChild(sprite3, 1);
    },

    title:function(){
        return "Fixed priority test";
    },

    subtitle:function(){
        return "Fixed Priority, Blue: 30, Red: 20, Yellow: 10\n The lower value the higher priority will be.";
    }
});

FixedPriorityTest.create = function(){
    var test = new FixedPriorityTest();
    test.init();
    return test;
};

var RemoveListenerWhenDispatching =  EventDispatcherTestDemo.extend({
    onEnter:function(){
        this._super();

        var origin = director.getVisibleOrigin();
        var size = director.getVisibleSize();

        var sprite1 = cc.Sprite.create("res/Images/CyanSquare.png");
        sprite1.setPosition(origin.x + size.width/2, origin.y + size.height/2);
        this.addChild(sprite1, 10);

        // Make sprite1 touchable
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var locationInNode = sprite1.convertToNodeSpace(touch.getLocation());
                var s = sprite1.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {
                    sprite1.setColor(cc.color.RED);
                    return true;
                }
                return false;
            },
            onTouchEnded: function (touch, event) {
                sprite1.setColor(cc.color.WHITE);
            }
        });
        this.setUserObject(listener1);

        cc.eventManager.addListener(listener1, sprite1);

        var statusLabel = cc.LabelTTF.create("The sprite could be touched!", "", 20);
        statusLabel.setPosition(origin.x + size.width/2, origin.y + size.height-90 );
        this.addChild(statusLabel);

        var enable = true;

        // Enable/Disable item
        var toggleItem = cc.MenuItemToggle.create(cc.MenuItemFont.create("Enabled"), cc.MenuItemFont.create("Disabled"),
            function (sender) {
                if (enable) {
                    cc.eventManager.removeListener(listener1);
                    statusLabel.setString("The sprite could not be touched!");
                    enable = false;
                } else {
                    cc.eventManager.addListener(listener1, sprite1);
                    statusLabel.setString("The sprite could be touched!");
                    enable = true;
                }
            });

        toggleItem.setPosition(origin.x + size.width/2, origin.y + 80);
        var menu = cc.Menu.create(toggleItem);
        menu.setPosition(0, 0);
        menu.setAnchorPoint(0, 0);
        this.addChild(menu, 1);
    },

    title:function(){
        return "Add and remove listener\n when dispatching event";
    },

    subtitle:function(){
        return "";
    }
});

RemoveListenerWhenDispatching.create = function(){
    var test = new RemoveListenerWhenDispatching();
    test.init();
    return test;
};

var CustomEventTest =  EventDispatcherTestDemo.extend({
    _listener1: null,
    _listener2: null,
    _item1Count: 0,
    _item2Count: 0,

    onEnter:function(){
        this._super();

        var origin = director.getVisibleOrigin(), size = director.getVisibleSize(), selfPointer = this;

        cc.MenuItemFont.setFontSize(20);

        var statusLabel = cc.LabelTTF.create("No custom event 1 received!", "", 20);
        statusLabel.setPosition(origin.x + size.width / 2, origin.y + size.height - 90);
        this.addChild(statusLabel);

        this._listener1 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "game_custom_event1",
            callback: function(event){
                statusLabel.setString("Custom event 1 received, " + event.getUserData() + " times");
            }
        });
        cc.eventManager.addListener(this._listener1, 1);

        var sendItem = cc.MenuItemFont.create("Send Custom Event 1", function(sender){
            ++selfPointer._item1Count;
            var event = new cc.EventCustom("game_custom_event1");
            event.setUserData(selfPointer._item1Count.toString());
            cc.eventManager.dispatchEvent(event);
        });
        sendItem.setPosition(origin.x + size.width/2, origin.y + size.height/2);

        var statusLabel2 = cc.LabelTTF.create("No custom event 2 received!", "", 20);
        statusLabel2.setPosition(origin.x + size.width/2, origin.y + size.height-120);
        this.addChild(statusLabel2);

        this._listener2 = cc.EventListener.create({
            event: cc.EventListener.CUSTOM,
            eventName: "game_custom_event2",
            callback: function(event){
                statusLabel2.setString("Custom event 2 received, " + event.getUserData() + " times");
            }
        });

        cc.eventManager.addListener(this._listener2, 1);
        var sendItem2 = cc.MenuItemFont.create("Send Custom Event 2", function(sender){
            ++selfPointer._item2Count;
            var event = new cc.EventCustom("game_custom_event2");
            event.setUserData(selfPointer._item2Count.toString());
            cc.eventManager.dispatchEvent(event);
        });
        sendItem2.setPosition(origin.x + size.width/2, origin.x + size.height/2 - 40);

        var menu = cc.Menu.create(sendItem, sendItem2);
        menu.setPosition(0, 0);
        menu.setAnchorPoint(0, 0);
        this.addChild(menu, 1);
    },

    onExit:function(){
        cc.eventManager.removeListener(this._listener1);
        cc.eventManager.removeListener(this._listener2);
        this._super();
    },

    title:function(){
        return "Send custom event";
    },

    subtitle:function(){
        return "";
    }
});

CustomEventTest.create = function(){
    var test = new CustomEventTest();
    test.init();
    return test;
};

var LabelKeyboardEventTest =  EventDispatcherTestDemo.extend({
    onEnter:function(){
        this._super();

        var origin = director.getVisibleOrigin();
        var size = director.getVisibleSize();

        var statusLabel = cc.LabelTTF.create("No keyboard event received!", "", 20);
        statusLabel.setPosition(origin.x + size.width/2, origin.x + size.height/2);
        this.addChild(statusLabel);

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed:  function(keyCode, event){
                var label = event.getCurrentTarget();
                label.setString("Key " + String.fromCharCode(keyCode) + "(" + keyCode.toString()  + ") was pressed!");
            },
            onKeyReleased: function(keyCode, event){
                var label = event.getCurrentTarget();
                label.setString("Key " + String.fromCharCode(keyCode) + "(" + keyCode.toString()  + ") was released!");
            }
        }, statusLabel);
    },

    title:function(){
        return "Label Receives Keyboard Event";
    },

    subtitle:function(){
        return "Please click keyboard\n(Only available on Desktop and Android)";
    }
});

LabelKeyboardEventTest.create = function(){
    var test = new LabelKeyboardEventTest();
    test.init();
    return test;
};

var SpriteAccelerationEventTest =  EventDispatcherTestDemo.extend({
    onEnter:function(){
        this._super();

        var origin = director.getVisibleOrigin();
        var size = director.getVisibleSize();

        cc.inputManager.setAccelerometerEnabled(true);

        var sprite = cc.Sprite.create("res/Images/ball.png");
        sprite.setPosition(origin.x + size.width/2, origin.y + size.height/2);
        this.addChild(sprite);

        cc.eventManager.addListener({
            event: cc.EventListener.ACCELERATION,
            callback: function(acc, event){
                var target = event.getCurrentTarget();
                var ballSize  = target.getContentSize();
                var ptNow  = target.getPosition();

                //cc.log("acc: x = " + acc.x + ", y = " + acc.y);

                target.x = SpriteAccelerationEventTest._fix_pos(ptNow.x + acc.x * 9.81,
                    (cc.visibleRect.left.x + ballSize.width / 2.0), (cc.visibleRect.right.x - ballSize.width / 2.0));
                target.y = SpriteAccelerationEventTest._fix_pos(ptNow.y + acc.y * 9.81,
                    (cc.visibleRect.bottom.y + ballSize.height / 2.0), (cc.visibleRect.top.y - ballSize.height / 2.0));
            }
        }, sprite);
    },

    onExit:function(){
        cc.inputManager.setAccelerometerEnabled(false);
        this._super();
    },

    title:function(){
        return "Sprite Receives Acceleration Event";
    },

    subtitle:function(){
        return "Please move your device\n(Only available on mobile)";
    }
});

SpriteAccelerationEventTest._fix_pos = function(pos, min, max){
    var ret = pos;
     if(pos < min)
         ret = min;
    else if(pos > max)
         ret = max;
    return ret;
};

SpriteAccelerationEventTest.create = function(){
    var test = new SpriteAccelerationEventTest();
    test.init();
    return test;
};

var RemoveAndRetainNodeTest =  EventDispatcherTestDemo.extend({
    _sprite:null,
    _spriteSaved:false,

    onEnter:function(){
        this._super();

        var origin = director.getVisibleOrigin();
        var size = director.getVisibleSize();

        this._sprite = cc.Sprite.create("res/Images/CyanSquare.png");
        this._sprite.setPosition(origin.x + size.width/2, origin.y + size.height/2);
        this.addChild(this._sprite, 10);

        // Make sprite1 touchable
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();

                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
                var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
                cc.log("sprite onTouchesEnded.. ");
                target.opacity = 255;
            }
        });
        cc.eventManager.addListener(listener1, this._sprite);

        this.runAction(cc.Sequence.create(cc.DelayTime.create(5.0),
            cc.CallFunc.create(function () {
                this._spriteSaved = true;
                this._sprite.retain();
                this._sprite.removeFromParent();
            }, this),
            cc.DelayTime.create(5.0),
            cc.CallFunc.create(function () {
                this._spriteSaved = false;
                this.addChild(this._sprite);
                if(!cc.sys.isNative)
                    cc.eventManager.addListener(listener1, this._sprite);
                this._sprite.release();
            }, this)
        ));
    },

    onExit:function(){
        this._super();
        if (this._spriteSaved)
            this._sprite.release();
    },

    title:function(){
        return "RemoveAndRetainNodeTest";
    },

    subtitle:function(){
        return "Sprite should be removed after 5s, add to scene again after 5s";
    }
});

RemoveAndRetainNodeTest.create = function(){
    var test = new RemoveAndRetainNodeTest();
    test.init();
    return test;
};

var RemoveListenerAfterAddingTest =  EventDispatcherTestDemo.extend({
    onEnter:function(){
        this._super();
        var selfPointer = this;
        var item1 = cc.MenuItemFont.create("Click Me 1", function(sender){
            var listener = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: function (touch, event) {
                    cc.assert(false, "Should not come here!");
                    return true;
                }
            });
            cc.eventManager.addListener(listener, -1);
            cc.eventManager.removeListener(listener);
        });
        var vCenter = cc.visibleRect.center;
        item1.setPosition(vCenter.x, vCenter.y + 80);

        var addNextButton = function(){
            var next = cc.MenuItemFont.create("Please Click Me To Reset!", function(sender){
                selfPointer.onRestartCallback();
            });
            next.setPosition(vCenter.x, vCenter.y - 40);

            var menu = cc.Menu.create(next);
            menu.setPosition(cc.visibleRect.bottomLeft);
            menu.setAnchorPoint(0,0);
            selfPointer.addChild(menu);
        };

        var item2 = cc.MenuItemFont.create("Click Me 2", function(sender){
            var listener = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: function(touch, event){
                    cc.assert("Should not come here!");
                    return true;
                }
            });
            cc.eventManager.addListener(listener, -1);
            cc.eventManager.removeListeners(cc.EventListener.TOUCH_ONE_BY_ONE);
            addNextButton();
        }, this);
        item2.setPosition(vCenter.x, vCenter.y + 40);

        var item3 = cc.MenuItemFont.create("Click Me 3", function(sender){
            var listener = cc.EventListener.create({
                event: cc.EventListener.TOUCH_ONE_BY_ONE,
                onTouchBegan: function(touch, event){
                    cc.assert(false, "Should not come here!");
                    return true;
                }
            });
            cc.eventManager.addListener(listener, -1);
            cc.eventManager.removeAllListeners();
            addNextButton();
        }, this);
        item3.setPosition(cc.visibleRect.center);

        var menu = cc.Menu.create(item1, item2, item3);
        menu.setPosition(cc.visibleRect.bottomLeft);
        menu.setAnchorPoint(0, 0);
        this.addChild(menu);
    },

    title:function(){
        return "RemoveListenerAfterAddingTest";
    },

    subtitle:function(){
        return "Should not crash!";
    }
});

RemoveListenerAfterAddingTest.create = function(){
    var test = new RemoveListenerAfterAddingTest();
    test.init();
    return test;
};

var DirectorEventTest =  EventDispatcherTestDemo.extend({
    _count1:0,
    _count2:0,
    _count3:0,
    _count4:0,
    _label1:null,
    _label2:null,
    _label3:null,
    _label4:null,
    _event1:null,
    _event2:null,
    _event3:null,
    _event4:null,
    _time:0,

    onEnter:function(){
        this._super();
        var s = director.getWinSize(), selfPointer = this;

        this._label1 = cc.LabelTTF.create("Update: 0", "Arial", 20);
        this._label1.setPosition(80,s.height/2 + 60);
        this.addChild(this._label1);

        this._label2 = cc.LabelTTF.create("Visit: 0", "Arial", 20);
        this._label2.setPosition(80,s.height/2 + 20);
        this.addChild(this._label2);

        this._label3 = cc.LabelTTF.create("Draw: 0", "Arial", 20);
        this._label3.setPosition(80,s.height/2 - 20);
        this.addChild(this._label3);

        this._label4 = cc.LabelTTF.create("Projection: 0", "Arial", 20);
        this._label4.setPosition(80,s.height/2 - 60);
        this.addChild(this._label4);

        var dispatcher = cc.eventManager;

        this._event1 = dispatcher.addCustomListener(cc.Director.EVENT_AFTER_UPDATE, this.onEvent1.bind(this));
        this._event2 = dispatcher.addCustomListener(cc.Director.EVENT_AFTER_VISIT, this.onEvent2.bind(this));
        this._event3 = dispatcher.addCustomListener(cc.Director.EVENT_AFTER_DRAW, function(event) {
            selfPointer._label3.setString("Draw: " + selfPointer._count3++);
        });
        this._event4 = dispatcher.addCustomListener(cc.Director.EVENT_PROJECTION_CHANGED, function(event) {
            selfPointer._label4.setString("Projection: " + selfPointer._count4++);
        });

        this._event1.retain();
        this._event2.retain();
        this._event3.retain();
        this._event4.retain();

        this.scheduleUpdate();
    },

    onExit:function(){
        this._super();

        var eventManager = cc.eventManager;
        eventManager.removeListener(this._event1);
        eventManager.removeListener(this._event2);
        eventManager.removeListener(this._event3);
        eventManager.removeListener(this._event4);

        this._event1.release();
        this._event2.release();
        this._event3.release();
        this._event4.release();
    },

    update:function(dt){
        this._time += dt;
        if(this._time > 0.5) {
            cc.director.setProjection(cc.Director.PROJECTION_2D);
            this._time = 0;
        }
    },

    onEvent1:function(event){
        this._label1.setString("Update: " + this._count1++);
    },

    onEvent2:function(event){
        this._label2.setString("Visit: " + this._count2++);
    },

    title:function(){
        return "Testing Director Events";
    },

    subtitle:function(){
        return "after visit, after draw, after update, projection changed";
    }
});

DirectorEventTest.create = function(){
    var test = new DirectorEventTest();
    test.init();
    return test;
};

var GlobalZTouchTest = EventDispatcherTestDemo.extend({
    _sprite:null,
    _accum:null,

    ctor: function(){
        this._super();

        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan: function(touch, event){
                var target = event.getCurrentTarget();

                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);

                if (cc.rectContainsPoint(rect, locationInNode)) {
                    cc.log("sprite began... x = %f, y = %f", locationInNode.x, locationInNode.y);
                    target.setOpacity(180);
                    return true;
                }
                return false;
            },
            onTouchMoved: function(touch, event){
                var target = event.getCurrentTarget(), delta = touch.getDelta();
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded: function(touch, event){
                cc.log("sprite onTouchesEnded.. ");
                event.getCurrentTarget().setOpacity(255);
            }
        });

        var SPRITE_COUNT = 8, sprite;
        for (var i = 0; i < SPRITE_COUNT; i++) {
            if(i==4) {
                sprite = cc.Sprite.create("res/Images/CyanSquare.png");
                this._sprite = sprite;
                this._sprite.setGlobalZOrder(-1);
            } else
                sprite = cc.Sprite.create("res/Images/YellowSquare.png");

            cc.eventManager.addListener(listener.clone(), sprite);
            this.addChild(sprite);

            var visibleSize = cc.director.getVisibleSize();
            sprite.x = cc.visibleRect.left.x + visibleSize.width / (SPRITE_COUNT - 1) * i;
            sprite.y = cc.visibleRect.center.y;
        }

        this.scheduleUpdate();
    },

    update: function(dt){
        this._accum += dt;
        if( this._accum > 2.0) {
            var z = this._sprite.getGlobalZOrder();
            this._sprite.setGlobalZOrder(-z);
            this._accum = 0;
        }
    },

    title: function(){
        return "Global Z Value, Try touch blue sprite";
    },

    subtitle: function() {
        return "Blue Sprite should change go from foreground to background";
    }
});

GlobalZTouchTest.create = function(){
    var test = new GlobalZTouchTest();
    test.init();
    return test;
};

var StopPropagationTest = EventDispatcherTestDemo.extend({
    ctor:function(){
        this._super();

        var touchOneByOneListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan: function(touch, event){
                // Skip if don't touch top half screen.
                if (!this._isPointInTopHalfAreaOfScreen(touch.getLocation()))
                    return false;

                var target = event.getCurrentTarget();
                if(target.getTag() != StopPropagationTest._TAG_BLUE_SPRITE)
                    cc.log("Yellow blocks shouldn't response event.");

                if (this._isPointInNode(touch.getLocation(), target)) {
                    target.setOpacity(180);
                    return true;
                }

                // Stop propagation, so yellow blocks will not be able to receive event.
                event.stopPropagation();
                return false;
            }.bind(this),
            onTouchEnded: function(touch, event){
                event.getCurrentTarget().setOpacity(255);
            }
        });

        var touchAllAtOnceListener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan: function(touches, event){
                // Skip if don't touch top half screen.
                if (this._isPointInTopHalfAreaOfScreen(touches[0].getLocation()))
                    return;

                var target = event.getCurrentTarget();
                if(target.getTag() != StopPropagationTest._TAG_BLUE_SPRITE2)
                    cc.log("Yellow blocks shouldn't response event.");

                if (this._isPointInNode(touches[0].getLocation(), target))
                    target.setOpacity(180);
                // Stop propagation, so yellow blocks will not be able to receive event.
                event.stopPropagation();
            }.bind(this),
            onTouchesEnded: function(touches, event){
                // Skip if don't touch top half screen.
                if (this._isPointInTopHalfAreaOfScreen(touches[0].getLocation()))
                    return;

                var target = event.getCurrentTarget();
                if(target.getTag() != StopPropagationTest._TAG_BLUE_SPRITE2)
                    cc.log("Yellow blocks shouldn't response event.");

                if (this._isPointInNode(touches[0].getLocation(), target))
                    target.setOpacity(255);
                // Stop propagation, so yellow blocks will not be able to receive event.
                event.stopPropagation();
            }.bind(this)
        });

        var keyboardEventListener = cc.EventListener.create({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(key, event){
                var target = event.getCurrentTarget();
                if(!(target.getTag() == StopPropagationTest._TAG_BLUE_SPRITE || target.getTag() == StopPropagationTest._TAG_BLUE_SPRITE2)){
                    cc.log("Yellow blocks shouldn't response event.");
                }
                // Stop propagation, so yellow blocks will not be able to receive event.
                event.stopPropagation();
            }
        });

        var SPRITE_COUNT = 8, sprite1, sprite2;

        for (var i = 0; i < SPRITE_COUNT; i++) {
            if(i==4) {
                sprite1 = cc.Sprite.create("res/Images/CyanSquare.png");
                sprite1.setTag(StopPropagationTest._TAG_BLUE_SPRITE);
                this.addChild(sprite1, 100);

                sprite2 = cc.Sprite.create("res/Images/CyanSquare.png");
                sprite2.setTag(StopPropagationTest._TAG_BLUE_SPRITE2);
                this.addChild(sprite2, 100);
            } else {
                sprite1 = cc.Sprite.create("res/Images/YellowSquare.png");
                this.addChild(sprite1, 0);
                sprite2 = cc.Sprite.create("res/Images/YellowSquare.png");
                this.addChild(sprite2, 0);
            }


            cc.eventManager.addListener(touchOneByOneListener.clone(), sprite1);
            cc.eventManager.addListener(keyboardEventListener.clone(), sprite1);

            cc.eventManager.addListener(touchAllAtOnceListener.clone(), sprite2);
            cc.eventManager.addListener(keyboardEventListener.clone(), sprite2);


            var visibleSize = cc.director.getVisibleSize();
            sprite1.x = cc.visibleRect.left.x + visibleSize.width / (SPRITE_COUNT - 1) * i;
            sprite1.y = cc.visibleRect.center.y + sprite2.getContentSize().height / 2 + 10;
            sprite2.x = cc.visibleRect.left.x + visibleSize.width / (SPRITE_COUNT - 1) * i;
            sprite2.y = cc.visibleRect.center.y - sprite2.getContentSize().height / 2 - 10;
        }
    },

    _isPointInNode: function (pt, node) {
        var s = node.getContentSize();
        return cc.rectContainsPoint(cc.rect(0, 0, s.width, s.height), node.convertToNodeSpace(pt));
    },

    _isPointInTopHalfAreaOfScreen: function(pt){
        var winSize = cc.director.getWinSize();
        return (pt.y >= winSize.height/2);
    },

    title: function(){
        return "Stop Propagation Test";
    },

    subtitle: function() {
        return "Shouldn't crash and only blue block could be clicked";
    }
});
StopPropagationTest._TAG_BLUE_SPRITE = 101;
StopPropagationTest._TAG_BLUE_SPRITE2 = 102;

StopPropagationTest.create = function(){
    var test = new StopPropagationTest();
    test.init();
    return test;
};

var Issue4160 = EventDispatcherTestDemo.extend({
    ctor: function(){
        this._super();
        var origin = cc.director.getVisibleOrigin();
        var size = cc.director.getVisibleSize();

        var sprite1 = TouchableSprite.create(-30);
        sprite1.setTexture("res/Images/CyanSquare.png");
        sprite1.x = origin.x + (size.width/2) - 80;
        sprite1.y = origin.y + (size.height/2) + 40;
        this.addChild(sprite1, 5);

        var sprite2 = TouchableSprite.create(-20);
        sprite2.setTexture("res/Images/MagentaSquare.png");
        sprite2.removeListenerOnTouchEnded(true);
        sprite2.x = origin.x + (size.width/2);
        sprite2.y = origin.y + (size.height/2);
        this.addChild(sprite2, 10);

        var sprite3 = TouchableSprite.create(-10);
        sprite3.setTexture("res/Images/YellowSquare.png");
        sprite3.x = 0;
        sprite3.y = 0;
        sprite2.addChild(sprite3, 21);
    },

    title: function(){
        return "Issue 4160: Out of range exception";
    },

    subtitle: function() {
        return "Touch the red block twice \n should not crash and the red one couldn't be touched";
    }
});

Issue4160.create = function(){
    var test = new Issue4160();
    test.init();
    return test;
};

var PauseResumeTargetTest = EventDispatcherTestDemo.extend({
    ctor: function () {
        this._super();

        var origin = cc.director.getVisibleOrigin();
        var size = cc.director.getVisibleSize();

        var sprite1 = TouchableSprite.create();
        sprite1.setTexture("res/Images/CyanSquare.png");
        sprite1.x = origin.x + size.width / 2 - 180;
        sprite1.y = origin.y + size.height / 2 + 40;
        this.addChild(sprite1, 10);

        var sprite2 = TouchableSprite.create();
        sprite2.setTexture("res/Images/MagentaSquare.png");
        sprite2.x = origin.x + size.width / 2 - 100;
        sprite2.y = origin.y + size.height / 2;
        this.addChild(sprite2, 1);

        var sprite3 = TouchableSprite.create(100);      // Sprite3 uses fixed priority listener
        sprite3.setTexture("res/Images/YellowSquare.png");
        sprite3.x = 0;
        sprite3.y = 0;
        sprite2.addChild(sprite3, -1);

        var _this = this;
        var popup = cc.MenuItemFont.create("Popup", function(sender){
            sprite3.getListener().setEnabled(false);
            cc.eventManager.pauseTarget(_this, true);
            var colorLayer = cc.LayerColor.create(cc.color(0, 0, 255, 100));
            _this.addChild(colorLayer, 999); //set colorLayer to top

            // Add the button
            var backgroundButton = cc.Scale9Sprite.create(s_extensions_button);
            var backgroundHighlightedButton = cc.Scale9Sprite.create(s_extensions_buttonHighlighted);

            var titleButton = cc.LabelTTF.create("Close Dialog", "Marker Felt", 26);
            titleButton.color = cc.color(159, 168, 176);

            var controlButton = cc.ControlButton.create(titleButton, backgroundButton);
            controlButton.setBackgroundSpriteForState(backgroundHighlightedButton, cc.CONTROL_STATE_HIGHLIGHTED);
            controlButton.setTitleColorForState(cc.color.WHITE, cc.CONTROL_STATE_HIGHLIGHTED);

            controlButton.anchorX = 0.5;
            controlButton.anchorY = 1;
            controlButton.x = size.width / 2 + 50;
            controlButton.y = size.height / 2;
            colorLayer.addChild(controlButton, 1);
            controlButton.addTargetWithActionForControlEvents(this, function(){
                colorLayer.removeFromParent();
                cc.eventManager.resumeTarget(_this, true);
                sprite3.getListener().setEnabled(true);
            }, cc.CONTROL_EVENT_TOUCH_UP_INSIDE);

            // Add the black background
            var background = cc.Scale9Sprite.create(s_extensions_buttonBackground);
            background.width = 300;
            background.height = 170;
            background.x = size.width / 2.0 + 50;
            background.y = size.height / 2.0;
            colorLayer.addChild(background);
        });

        popup.setAnchorPoint(1,0.5);
        popup.setPosition(cc.visibleRect.right);

        var menu = cc.Menu.create(popup);
        menu.setAnchorPoint(0, 0);
        menu.setPosition(0, 0);

        this.addChild(menu);
    },

    title: function(){
        return "PauseResumeTargetTest";
    },

    subtitle: function() {
        return "Yellow block uses fixed priority";
    }
});

PauseResumeTargetTest.create = function(){
    var test = new Issue4160();
    test.init();
    return test;
};

var EventDispatcherTestScene = TestScene.extend({
    runThisTest:function () {
        eventDispatcherSceneIdx = -1;
        this.addChild(nextDispatcherTest());
        director.runScene(this);
    }
});

var arrayOfEventDispatcherTest = [
    TouchableSpriteTest,
    FixedPriorityTest,
    RemoveListenerWhenDispatching,
    CustomEventTest,
    LabelKeyboardEventTest,
    SpriteAccelerationEventTest,
    RemoveAndRetainNodeTest,
    RemoveListenerAfterAddingTest,
    DirectorEventTest,
    //GlobalZTouchTest,
    StopPropagationTest,
    Issue4160,
    PauseResumeTargetTest
];

var nextDispatcherTest = function () {
    eventDispatcherSceneIdx++;
    eventDispatcherSceneIdx = eventDispatcherSceneIdx % arrayOfEventDispatcherTest.length;
    return new arrayOfEventDispatcherTest[eventDispatcherSceneIdx]();
};
var previousDispatcherTest = function () {
    eventDispatcherSceneIdx--;
    if (eventDispatcherSceneIdx < 0)
        eventDispatcherSceneIdx += arrayOfEventDispatcherTest.length;
    return new arrayOfEventDispatcherTest[eventDispatcherSceneIdx]();
};
var restartDispatcherTest = function () {
    return new arrayOfEventDispatcherTest[eventDispatcherSceneIdx]();
};