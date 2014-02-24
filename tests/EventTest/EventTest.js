/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.


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

var TEXT_INPUT_FONT_NAME = "Thonburi";
var TEXT_INPUT_FONT_SIZE = 36;

var sceneIdx = -1;

/**
 @brief EventTest for retain prev, reset, next, main menu buttons.
 */
var EventTest = cc.Layer.extend({
    ctor:function() {
        this._super();
        this.init();
    },

    restartCallback:function (sender) {
        var s = new EventTestScene();
        s.addChild(restartEventsTest());
        director.replaceScene(s);
    },
    nextCallback:function (sender) {
        var s = new EventTestScene();
        s.addChild(nextEventsTest());
        director.replaceScene(s);
    },
    backCallback:function (sender) {
        var s = new EventTestScene();
        s.addChild(previousEventsTest());
        director.replaceScene(s);
    },

    title:function () {
        return "Event Test";
    },

    onEnter:function () {
        this._super();

        var s = director.getWinSize();

        var label = cc.LabelTTF.create(this.title(), "Arial", 24);
        this.addChild(label);
        label.setPosition(s.width / 2, s.height - 50);

        var subTitle = this.subtitle();
        if (subTitle && subTitle !== "") {
            var l = cc.LabelTTF.create(subTitle, "Thonburi", 16);
            this.addChild(l, 1);
            l.setPosition(s.width / 2, s.height - 80);
        }

        var item1 = cc.MenuItemImage.create(s_pathB1, s_pathB2, this.backCallback, this);
        var item2 = cc.MenuItemImage.create(s_pathR1, s_pathR2, this.restartCallback, this);
        var item3 = cc.MenuItemImage.create(s_pathF1, s_pathF2, this.nextCallback, this);

        var menu = cc.Menu.create(item1, item2, item3);
        menu.setPosition(0,0);
        item1.setPosition(s.width / 2 - 100, 30);
        item2.setPosition(s.width / 2, 30);
        item3.setPosition(s.width / 2 + 100, 30);

        this.addChild(menu, 1);
    }
});

//------------------------------------------------------------------
//
// OneByOne Touches
//
//------------------------------------------------------------------
var TouchOneByOneTest = EventTest.extend({
    init:function () {
        this._super();
        this.ids = {};
        this.unused_sprites = [];

        if( 'touches' in sys.capabilities ) {
            this.setTouchMode(cc.TOUCH_ONE_BY_ONE);
            this.setTouchEnabled(true);
        } else {
            cc.log("TOUCH-ONE-BY-ONE test is not supported on desktop");
        }

        for( var i=0; i < 5;i++) {
            var sprite = this.sprite = cc.Sprite.create(s_pathR2);
            this.addChild(sprite,i+10);
            sprite.setPosition(0,0);
            sprite.setScale(1);
            sprite.setColor( cc.c3b( Math.random()*200+55, Math.random()*200+55, Math.random()*200+55 ) );
            this.unused_sprites.push(sprite);
        }
    },
    subtitle:function () {
        return "Touches One by One. Touch the left / right and see console";
    },

    new_id:function( id, pos) {
        var s = this.unused_sprites.pop();
        this.ids[ id ] = s;
        s.setPosition( pos );
    },
    update_id:function(id, pos) {
        var s = this.ids[ id ];
        s.setPosition( pos );
    },
    release_id:function(id, pos) {
        var s = this.ids[ id ];
        this.ids[ id ] = null;
        this.unused_sprites.push( s );
        s.setPosition(0,0);
    },

    onTouchBegan:function(touch, event) {
        var pos = touch.getLocation();
        var id = touch.getId();
        cc.log("onTouchBegan at: " + pos.x + " " + pos.y + " Id:" + id );
        if( pos.x < winSize.width/2) {
            this.new_id(id,pos);
            return true;
        }
        return false;
    },
    onTouchMoved:function(touch, event) {
        var pos = touch.getLocation();
        var id = touch.getId();
        cc.log("onTouchMoved at: " + pos.x + " " + pos.y + " Id:" + id );
        this.update_id(id,pos);
    },
    onTouchEnded:function(touch, event) {
        var pos = touch.getLocation();
        var id = touch.getId();
        cc.log("onTouchEnded at: " + pos.x + " " + pos.y + " Id:" + id );
        this.release_id(id,pos);
    },
    onTouchCancelled:function(touch, event) {
        var pos = touch.getLocation();
        var id = touch.getId();
        cc.log("onTouchCancelled at: " + pos.x + " " + pos.y + " Id:" + id );
        this.update_id(id,pos);
    }
});

//------------------------------------------------------------------
//
// All At Once Touches
//
//------------------------------------------------------------------
var TouchAllAtOnce = EventTest.extend({
    init:function () {
        this._super();

        this.ids = {};
        this.unused_sprites = [];

        if( 'touches' in sys.capabilities ) {
            // this is the default behavior. No need to set it explicitly.
            this.setTouchMode(cc.TOUCH_ALL_AT_ONCE);
            this.setTouchEnabled(true);
        } else {
            cc.log("TOUCHES not supported");
        }

        for( var i=0; i < 5;i++) {
            var sprite = this.sprite = cc.Sprite.create(s_pathR2);
            this.addChild(sprite,i+10);
            sprite.setPosition(0,0);
            sprite.setScale(1);
            sprite.setColor( cc.c3b( Math.random()*200+55, Math.random()*200+55, Math.random()*200+55 ) );
            this.unused_sprites.push(sprite);
        }
    },
    subtitle:function () {
        return "Touches All At Once. Touch and see console";
    },

    new_id:function( id, pos) {
        var s = this.unused_sprites.pop();
        this.ids[ id ] = s;
        s.setPosition( pos );
    },
    update_id:function(id, pos) {
        var s = this.ids[ id ];
        s.setPosition( pos );
    },
    release_id:function(id, pos) {
        var s = this.ids[ id ];
        this.ids[ id ] = null;
        this.unused_sprites.push( s );
        s.setPosition(0,0);
    },

    onTouchesBegan:function(touches, event) {
        for (var i=0; i < touches.length;i++ ) {
            var touch = touches[i];
            var pos = touch.getLocation();
            var id = touch.getId();
            cc.log("Touch #" + i + ". onTouchesBegan at: " + pos.x + " " + pos.y + " Id:" + id);
            this.new_id(id,pos);
        }
    },
    onTouchesMoved:function(touches, event) {
        for (var i=0; i < touches.length;i++ ) {
            var touch = touches[i];
            var pos = touch.getLocation();
            var id = touch.getId();
            cc.log("Touch #" + i + ". onTouchesMoved at: " + pos.x + " " + pos.y + " Id:" + id);
            this.update_id(id, pos);
        }
    },
    onTouchesEnded:function(touches, event) {
        for (var i=0; i < touches.length;i++ ) {
            var touch = touches[i];
            var pos = touch.getLocation();
            var id = touch.getId();
            cc.log("Touch #" + i + ". onTouchesEnded at: " + pos.x + " " + pos.y + " Id:" + id);
            this.release_id(id);
        }
    },
    onTouchesCancelled:function(touches, event) {
        for (var i=0; i < touches.length;i++ ) {
            var touch = touches[i];
            var pos = touch.getLocation();
            var id = touch.getId();
            cc.log("Touch #" + i + ". onTouchesCancelled at: " + pos.x + " " + pos.y + " Id:" + id);
            this.release_id(id);
        }
    }
});

//------------------------------------------------------------------
//
// Accelerometer test
//
//------------------------------------------------------------------
var AccelerometerTest = EventTest.extend({
    init:function () {
        this._super();

        if( 'accelerometer' in sys.capabilities ) {
            // call is called 30 times per second
            this.setAccelerometerInterval(1/30);
            this.setAccelerometerEnabled(true);

            var sprite = this.sprite = cc.Sprite.create(s_pathR2);
            this.addChild( sprite );
            sprite.setPosition( winSize.width/2, winSize.height/2);

            // for low-pass filter
            this.prevX = 0;
            this.prevY = 0;
        } else {
            cc.log("ACCELEROMETER not supported");
        }
    },
    subtitle:function () {
        return "Accelerometer test. Move device and see console";
    },
    onAccelerometer:function(accelEvent) {
        cc.log('Accel x: '+ accelEvent.x + ' y:' + accelEvent.y + ' z:' + accelEvent.z + ' time:' + accelEvent.timestamp );

        var w = winSize.width;
        var h = winSize.height;

        var x = w * accelEvent.x + w/2;
        var y = h * accelEvent.y + h/2;

        // Low pass filter
        x = x*0.2 + this.prevX*0.8;
        y = y*0.2 + this.prevY*0.8;

        this.prevX = x;
        this.prevY = y;
        this.sprite.setPosition( x, y );
    }
});

//------------------------------------------------------------------
//
// Mouse test
//
//------------------------------------------------------------------
var MouseTest = EventTest.extend({
    init:function () {
        this._super();
        var sprite = this.sprite = cc.Sprite.create(s_pathR2);
        this.addChild(sprite);
        sprite.setPosition(0,0);
        sprite.setScale(1);
        sprite.setColor( cc.c3b(Math.random()*200+55, Math.random()*200+55, Math.random()*200+55) );

        if( 'mouse' in sys.capabilities ) {
            this.setMouseEnabled(true);
        } else {
            cc.log("MOUSE Not supported");
        }
    },
    subtitle:function () {
        return "Mouse test. Move mouse and see console";
    },
    onMouseDown:function(event) {
        var pos = event.getLocation();
        cc.log("onMouseDown at: " + pos.x + " " + pos.y );
        this.sprite.setPosition( pos );
    },
    onMouseDragged:function(event) {
        var pos = event.getLocation();
        cc.log("onMouseDragged at: " + pos.x + " " + pos.y );
        this.sprite.setPosition( pos );
    },
    onMouseUp:function(event) {
        var pos = event.getLocation();
        this.sprite.setPosition( pos );
        cc.log("onMouseUp at: " + pos.x + " " + pos.y );
    },
    onRightMouseDown:function(event){
        var pos = event.getLocation();
        this.sprite.setPosition( pos );
        cc.log("onRightMouseDown at: " + pos.x + " " + pos.y );
    }
});

//------------------------------------------------------------------
//
// Keyboard test
//
//------------------------------------------------------------------
var KeyboardTest = EventTest.extend({
    init:function () {
        this._super();

        if( 'keyboard' in sys.capabilities ) {
            this.setKeyboardEnabled(true);
        } else {
            cc.log("KEYBOARD Not supported");
        }
    },
    subtitle:function () {
        return "Keyboard test. Press keyboard and see console";
    },
    onKeyUp:function(key) {
        cc.log("Key up:" + key);
    },
    onKeyDown:function(key) {
        cc.log("Key down:" + key);
    },
    // this callback is only available on JSB + OS X
    // Not supported on cocos2d-html5
    onKeyFlagsChanged:function(key) {
        cc.log("Key flags changed:" + key);
    }
});


var EventTestScene = TestScene.extend({
    runThisTest:function () {
        sceneIdx = -1;
        var layer = nextEventsTest();
        // var menu = new EventTest();
        // menu.addKeyboardNotificationLayer( layer );

        this.addChild(layer);
        director.replaceScene(this);
    }
});

//
// Flow control
//
var arrayOfEventsTest = [
    TouchOneByOneTest,
    TouchAllAtOnce,
    AccelerometerTest,
    MouseTest,
    KeyboardTest
];

var nextEventsTest = function () {
    sceneIdx++;
    sceneIdx = sceneIdx % arrayOfEventsTest.length;

    return new arrayOfEventsTest[sceneIdx]();
};
var previousEventsTest = function () {
    sceneIdx--;
    if (sceneIdx < 0)
        sceneIdx += arrayOfEventsTest.length;

    return new arrayOfEventsTest[sceneIdx]();
};
var restartEventsTest = function () {
    return new arrayOfEventsTest[sceneIdx]();
};

