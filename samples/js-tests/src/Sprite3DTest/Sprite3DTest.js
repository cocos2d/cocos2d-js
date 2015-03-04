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
var Sprite3DTestIdx = -1;

var Sprite3DTestDemo = cc.Layer.extend({
    _title:"",
    _subtitle:"",

    ctor:function () {
        this._super();
    },

    //
    // Menu
    //
    onEnter:function () {
        this._super();

        var label = new cc.LabelTTF(this._title, "Arial", 28);
        this.addChild(label, 100, BASE_TEST_TITLE_TAG);
        label.x = winSize.width / 2;
        label.y = winSize.height - 50;

        var label2 = new cc.LabelTTF(this._subtitle, "Thonburi", 16);
        this.addChild(label2, 101, BASE_TEST_SUBTITLE_TAG);
        label2.x = winSize.width / 2;
        label2.y = winSize.height - 80;

        var item1 = new cc.MenuItemImage(s_pathB1, s_pathB2, this.onBackCallback, this);
        var item2 = new cc.MenuItemImage(s_pathR1, s_pathR2, this.onRestartCallback, this);
        var item3 = new cc.MenuItemImage(s_pathF1, s_pathF2, this.onNextCallback, this);

        item1.tag = BASE_TEST_MENUITEM_PREV_TAG;
        item2.tag = BASE_TEST_MENUITEM_RESET_TAG;
        item3.tag = BASE_TEST_MENUITEM_NEXT_TAG;

        var menu = new cc.Menu(item1, item2, item3);

        menu.x = 0;
        menu.y = 0;
        var width = item2.width, height = item2.height;
        item1.x =  winSize.width/2 - width*2;
        item1.y = height/2 ;
        item2.x =  winSize.width/2;
        item2.y = height/2 ;
        item3.x =  winSize.width/2 + width*2;
        item3.y = height/2 ;

        this.addChild(menu, 102, BASE_TEST_MENU_TAG);
    },

    onRestartCallback:function (sender) {
        var s = new Sprite3DTestScene();
        s.addChild(restartSprite3DTest());
        director.runScene(s);
    },

    onNextCallback:function (sender) {
        var s = new Sprite3DTestScene();
        s.addChild(nextSprite3DTest());
        director.runScene(s);
    },

    onBackCallback:function (sender) {
        var s = new Sprite3DTestScene();
        s.addChild(previousSprite3DTest());
        director.runScene(s);
    },
});

var Sprite3DTestScene = cc.Scene.extend({
    ctor:function () {
        this._super();

        var label = new cc.LabelTTF("Main Menu", "Arial", 20);
        var menuItem = new cc.MenuItemLabel(label, this.onMainMenuCallback, this);

        var menu = new cc.Menu(menuItem);
        menu.x = 0;
        menu.y = 0;
        menuItem.x = winSize.width - 50;
        menuItem.y = 25;
        this.addChild(menu);
    },
    onMainMenuCallback:function () {
        var scene = new cc.Scene();
        var layer = new TestController();
        scene.addChild(layer);
        director.runScene(scene);
    },
    runThisTest:function (num) {
        Sprite3DTestIdx = (num || num == 0) ? (num - 1) : -1;
        var layer = nextSprite3DTest();
        this.addChild(layer);

        director.runScene(this);
    }
});


var Sprite3DBasicTest = Sprite3DTestDemo.extend({
    _title: "Testing Sprite3D",
    _subtitle: "Tap screen to add more sprites",

    ctor:function(){
        this._super();

        var winSize = cc.winSize;
        this.addNewSpriteWithCoords(cc.p(winSize.width/2, winSize.height/2));

        var that = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesEnded: function(touches, event){
                for(var i in touches){
                    that.addNewSpriteWithCoords(touches[i].getLocation());
                }
            }
        }, this);
    },

    addNewSpriteWithCoords:function(position){
        var sprite = new cc.Sprite3D("Sprite3DTest/boss1.obj");
        sprite.setScale(3.0);
        sprite.setTexture("Sprite3DTest/boss.png");
        sprite.x = position.x;
        sprite.y = position.y;

        this.addChild(sprite);

        var action;
        var random = Math.random();
        if(random < 0.2)
            action = cc.scaleBy(3, 2);
        else if(random < 0.4)
            action = cc.rotateBy(3, 360);
        else if(random < 0.6)
            action = cc.blink(1, 3);
        else if(random < 0.8)
            action = cc.tintBy(2, 0, -255, -255);
        else
            action = cc.fadeOut(2);

        var action_back = action.reverse();
        var seq = cc.sequence(action, action_back);

        sprite.runAction(seq.repeatForever());
    }
});

var Sprite3DHitTest = Sprite3DTestDemo.extend({
    _title:"Testing Sprite3D Touch in 2D",
    _subtitle:"Tap Sprite3D and Drag",

    ctor:function(){
        this._super();

        var s = cc.winSize;

        var sprite1 = new cc.Sprite3D("Sprite3DTest/boss1.obj");
        sprite1.setScale(4.0);
        sprite1.setTexture("Sprite3DTest/boss.png");
        sprite1.setPosition(cc.p(s.width/2, s.height/2));

        this.addChild(sprite1);
        sprite1.runAction(cc.rotateBy(3, 360).repeatForever());

        var sprite2 = new cc.Sprite3D("Sprite3DTest/boss1.obj")
        sprite2.setScale(4.0);
        sprite2.setTexture("Sprite3DTest/boss.png");
        sprite2.setPosition(cc.p(s.width/2, s.height/2));
        sprite2.setAnchorPoint(cc.p(0.5, 0.5));

        this.addChild(sprite2);
        sprite2.runAction(cc.rotateBy(3, -360).repeatForever());

        // Make sprite1 touchable
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var rect = target.getBoundingBox();
                if(cc.rectContainsPoint(rect, touch.getLocation())){
                    cc.log("sprite3d began... x = " + touch.getLocation().x + ", y = " + touch.getLocation().y);
                    target.setOpacity(100);
                    return true;
                }
                return false;
            },
            onTouchMoved: function (touch, event) {
                var target = event.getCurrentTarget();
                var oldPos = target.getPosition();
                var delta = touch.getDelta();
                target.setPosition(cc.p(oldPos.x + delta.x, oldPos.y + delta.y));
            },
            onTouchEnded: function (touch, event) {
                var target = event.getCurrentTarget();
                cc.log("sprite3d onTouchEnded...");
                target.setOpacity(255);
            }
        });
        cc.eventManager.addListener(listener1, sprite1);
        cc.eventManager.addListener(listener1.clone(), sprite2);
    }
});

var AsyncLoadSprite3DTest = Sprite3DTestDemo.extend({
    _title:"Testing Sprite3D::createAsync",
    _subtitle:"",
    _path:["Sprite3DTest/boss.obj", "Sprite3DTest/girl.c3b", "Sprite3DTest/orc.c3b", "Sprite3DTest/ReskinGirl.c3b", "Sprite3DTest/axe.c3b"],
    
    ctor:function(){
        this._super();

        var label = new cc.LabelTTF("AsyncLoad Sprite3D", "Arial", 15);
        var item = new cc.MenuItemLabel(label, this. menuCallback_asyncLoadSprite, this);

        var s = cc.winSize;
        item.setPosition(s.width / 2, s.height / 2);

        var menu = new cc.Menu(item);
        menu.setPosition(cc.p(0, 0));
        this.addChild(menu, 10);

        var node = new cc.Node();
        node.setTag(101);
        this.addChild(node);

        this.menuCallback_asyncLoadSprite();
    },

    menuCallback_asyncLoadSprite:function(sender){
        //Note that you must stop the tasks before leaving the scene.
        cc.AsyncTaskPool.getInstance().stopTasks(cc.AsyncTaskPool.TaskType.TASK_IO);

        var node = this.getChildByTag(101);
        node.removeAllChildren(); // remove all loaded sprites

        //remove cache data
        cc.Sprite3DCache.getInstance().removeAllSprite3DData();

        for(var i = 0; i < this._path.length; ++i){
            cc.Sprite3D.createAsync(this._path[i], this.asyncLoad_Callback, this, i);
        }

    },

    asyncLoad_Callback:function(sprite, data){
        var node = this.getChildByTag(101);
        var s = cc.winSize;
        var width = s.width / this._path.length;
        sprite.setPosition(width * (0.5 + data), s.height / 2);
        node.addChild(sprite);
    }
});

var Sprite3DWithSkinTest = Sprite3DTestDemo.extend({
    _title:"Testing Sprite3D",
    _subtitle:"Tap screen to add more sprite3D",
    
    ctor:function(){
        this._super();

        var size = cc.winSize;
        this.addNewSpriteWithCoords(cc.p(size.width/2, size.height/2));

        var that = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesEnded: function(touches, event){
                for(var i in touches){
                    that.addNewSpriteWithCoords(touches[i].getLocation());
                }
            }
        }, this);
    },

    addNewSpriteWithCoords:function(position){
        var sprite = new cc.Sprite3D("Sprite3DTest/orc.c3b");
        sprite.setScale(3);
        sprite.setRotation3D({x : 0, y : 180, z: 0});
        this.addChild(sprite);
        sprite.setPosition(position);

        var animation = cc.Animation3D.create("Sprite3DTest/orc.c3b");
        if(animation){
            var animate = cc.Animate3D.create(animation);
            var inverse = Math.random() < 0.33 ? true : false;

            var rand2 = Math.random();
            var speed = 1.0;
            if(rand2 < 0.33)
                speed = animate.getSpeed() + Math.random();
            else if(rand2 < 0.66)            
                spped = animate.getSpeed() - 0.5 * Math.random();

            animate.setSpeed(inverse ? -speed : speed);
            sprite.runAction(new cc.RepeatForever(animate));
        }
    }
});

var Animate3DTest = (function(){

    var State = {
        SWIMMING : 0,
        SWIMMING_TO_HURT : 1,
        HURT : 2,
        HURT_TO_SWIMMING : 3
    };

    return Sprite3DTestDemo.extend({
        _title:"Testing Animate3D",
        _subtitle:"Touch to beat the tortoise",
        _sprite:null,
        _swim:null,
        _hurt:null,
        _moveAction:null,
        _state:0,
        _elapseTransTime:0,

        ctor:function(){
            this._super();

            this.addSprite3D();

            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                onTouchesEnded: this.onTouchesEnded.bind(this)
            }, this);

            this.scheduleUpdate();
        },

        onExit:function(){
            this._super();
            this._moveAction.release();
            this._hurt.release();
            this._swim.release();
        },

        addSprite3D:function(){
            var sprite = new cc.Sprite3D("Sprite3DTest/tortoise.c3b");
            sprite.setScale(0.1);
            var s = cc.winSize;
            sprite.setPosition(cc.p(s.width * 4 / 5, s.height / 2));
            this.addChild(sprite);
            this._sprite = sprite;

            var animation = cc.Animation3D.create("Sprite3DTest/tortoise.c3b");
            if(animation){
                var animate = cc.Animate3D.create(animation, 0, 1.933);
                this._swim = new cc.RepeatForever(animate);
                sprite.runAction(this._swim);

                this._swim.retain();
                this._hurt = cc.Animate3D.create(animation, 1.933, 2.8);
                this._hurt.retain();

                this._state = State.SWIMMING;
            }

            this._moveAction = cc.moveTo(4.0, cc.p(s.width / 5, s.height / 2));
            this._moveAction.retain();
            var seq = cc.sequence(this._moveAction, cc.callFunc(this.reachEndCallBack, this));
            seq.setTag(100);
            sprite.runAction(seq);
        },

        reachEndCallBack:function(sender){
            var sprite = this._sprite;
            sprite.stopActionByTag(100);
            var inverse = this._moveAction.reverse();
            inverse.retain();
            this._moveAction.release();
            this._moveAction = inverse;
            var rot = cc.rotateBy(1, {x : 0, y : 180, z : 0});
            var seq = cc.sequence(rot, this._moveAction, cc.callFunc(this.reachEndCallBack, this));
            seq.setTag(100);
            sprite.runAction(seq);
        },

        renewCallBack:function(){
            this._sprite.runAction(this._swim);
            this._state = State.HURT_TO_SWIMMING;
            this._elapseTransTime = 0.0;
        },

        onTouchesEnded:function(touches, event){
            for(var i in touches){
                var location = touches[i].getLocation();

                if(this._sprite){
                    var len = cc.pDistance(this._sprite.getPosition(), location);

                    if(len < 40){
                        //hurt the tortoise
                        if(this._state == State.SWIMMING){
                            this._elapseTransTime = 0;
                            this._state = State.SWIMMING_TO_HURT;
                            this._sprite.stopAction(this._hurt);
                            this._sprite.runAction(this._hurt);
                            var delay = cc.delayTime(this._hurt.getDuration() - cc.Animate3D.getTransitionTime());
                            var seq = cc.sequence(delay, cc.callFunc(this.renewCallBack, this));
                            seq.setTag(101);
                            this._sprite.runAction(seq);
                        }
                    }
                }
            }
        },

        update:function(dt){
            if(this._state == State.HURT_TO_SWIMMING){
                this._elapseTransTime += dt;

                if(this._elapseTransTime >= cc.Animate3D.getTransitionTime()){
                    this._sprite.stopAction(this._hurt);
                    this._state = State.SWIMMING;
                }
            }else if(this._state == State.SWIMMING_TO_HURT){
                this._elapseTransTime += dt;

                if(this._elapseTransTime >= cc.Animate3D.getTransitionTime()){
                    this._sprite.stopAction(this._swim);
                    this._state = State.HURT;
                }
            }
        }
    });
})();


var AttachmentTest = Sprite3DTestDemo.extend({
    _title:"Testing Sprite3D Attachment",
    _subtitle:"touch to switch weapon",
    _hasWeapon:false,
    _sprite:null,

    ctor:function(){
        this._super();

        var s = cc.winSize;
        this.addNewSpriteWithCoords(cc.p(s.width/2, s.height/2));

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesEnded: this.onTouchesEnded.bind(this)
        }, this);
    },

    addNewSpriteWithCoords:function(position){
        var sprite = new cc.Sprite3D("Sprite3DTest/orc.c3b");
        sprite.setScale(5);
        sprite.setRotation3D(cc.vec3(0, 180, 0));
        this.addChild(sprite);
        sprite.setPosition(position);

        //test attach
        var sp = new cc.Sprite3D("Sprite3DTest/axe.c3b");
        sprite.getAttachNode("Bip001 R Hand").addChild(sp);

        var animation = cc.Animation3D.create("Sprite3DTest/orc.c3b");
        if(animation){
            var animate = cc.Animate3D.create(animation);
            sprite.runAction(cc.repeatForever(animate));
        }

        this._sprite = sprite;
        this._hasWeapon = true;
    },

    onTouchesEnded:function(touches, event){
        if(this._hasWeapon){
            this._sprite.removeAllAttachNode();
        }else{
            var sp = new cc.Sprite3D("Sprite3DTest/axe.c3b");
            this._sprite.getAttachNode("Bip001 R Hand").addChild(sp);
        }
        this._hasWeapon = !this._hasWeapon;
    }
});

var Sprite3DReskinTest = (function(){
    var SkinType = {
        UPPER_BODY : 0,
        PANTS : 1,
        SHOES : 2,
        HAIR : 3,
        FACE : 4,
        HAND : 5,
        GLASSES : 6,
        MAX_TYPE : 7
    };

    return Sprite3DTestDemo.extend({
        _title:"Testing Sprite3D Reskin",
        _subtitle:"",
        _sprite:null,
        _skins:[["Girl_UpperBody01", "Girl_UpperBody02"], ["Girl_LowerBody01", "Girl_LowerBody02"], ["Girl_Shoes01", "Girl_Shoes02"], ["Girl_Hair01", "Girl_Hair02"], ["Girl_Face01", "Girl_Face02"], ["Girl_Hand01", "Girl_Hand02"], ["", "Girl_Glasses01"]],
        _curSkin:["Girl_UpperBody01", "Girl_LowerBody01", "Girl_Shoes01", "Girl_Hair01", "Girl_Face01", "Girl_Hand01", ""],

        ctor:function(){
            this._super();

            var s = cc.winSize;
            this.addNewSpriteWithCoords(cc.p(s.width/2, s.height/2));

            var label1 = new cc.LabelTTF("Hair", "Arial", 20);
            var item1 = new cc.MenuItemLabel(label1, this.menuCallback_reSkin, this );
            item1.setPosition(cc.p(50, item1.getContentSize().height * 4));
            item1.setUserData(SkinType.HAIR);

            var label2 = new cc.LabelTTF("Glasses", "Arial", 20);
            var item2 = new cc.MenuItemLabel(label2, this.menuCallback_reSkin, this);
            item2.setPosition(cc.p(50, item2.getContentSize().height * 5));
            item2.setUserData(SkinType.GLASSES);

            var label3 = new cc.LabelTTF("Coat", "Arial", 20);
            var item3 = new cc.MenuItemLabel(label3, this.menuCallback_reSkin, this);
            item3.setPosition(cc.p(50, item3.getContentSize().height * 6));
            item3.setUserData(SkinType.UPPER_BODY);

            var label4 = new cc.LabelTTF("Pants", "Arial", 20);
            var item4 = new cc.MenuItemLabel(label4, this.menuCallback_reSkin, this);
            item4.setPosition(cc.p(50, item4.getContentSize().height * 7));
            item4.setUserData(SkinType.PANTS);

            var label5 = new cc.LabelTTF("Shoes", "Arial", 20);
            var item5 = new cc.MenuItemLabel(label5, this.menuCallback_reSkin, this);
            item5.setPosition(cc.p(50, item5.getContentSize().height * 8));
            item5.setUserData(SkinType.SHOES);

            var menu = new cc.Menu(item1, item2, item3, item4, item5);
            this.addChild(menu);
            menu.setPosition(cc.p(0, 0));
        },

        addNewSpriteWithCoords:function(position){
            var sprite = new cc.Sprite3D("Sprite3DTest/ReskinGirl.c3b");
            sprite.setScale(4);
            sprite.setRotation3D(cc.vec3(0, 0, 0));
            this.addChild(sprite);
            sprite.setPosition(cc.p(position.x, position.y - 60));
            var animation = cc.Animation3D.create("Sprite3DTest/ReskinGirl.c3b");
            if(animation){
                var animate = cc.Animate3D.create(animation);
                sprite.runAction(cc.repeatForever(animate));
            }
            this._sprite = sprite;

            this.applyCurSkin();
        },

        applyCurSkin:function(){
            for(var i = 0; i < this._sprite.getMeshCount(); i++){
                var mesh = this._sprite.getMeshByIndex(i);
                var isVisible = false;
                for(var j = 0; j < SkinType.MAX_TYPE; j++){
                    if(mesh.getName() == this._curSkin[j]){
                        isVisible = true;
                        break;
                    }
                }
                mesh.setVisible(isVisible);
            }
        },

        menuCallback_reSkin:function(sender){
            var index = sender.getUserData();
            if(index < SkinType.MAX_TYPE){
                var curr = (this._skins[index].indexOf(this._curSkin[index]) + 1) % this._skins[index].length;
                this._curSkin[index] = this._skins[index][curr];
            }
            this.applyCurSkin();
        }
    });
})();


var Sprite3DMirrorTest = Sprite3DTestDemo.extend({
    _title:"Sprite3D Mirror Test",
    _subtitle:"",

    ctor:function(){
        this._super();

        var s = cc.winSize;
        this.addNewSpriteWithCoords(cc.p(s.width / 2, s.height / 2));
    },

    addNewSpriteWithCoords:function(position){
        var fileName = "Sprite3DTest/orc.c3b";
        var sprite = new cc.Sprite3D("Sprite3DTest/orc.c3b");
        sprite.setScale(5);
        sprite.setRotation3D(cc.vec3(0, 180, 0));
        this.addChild(sprite);
        sprite.setPosition(cc.p(position.x - 80, position.y));

        //test attach
        var sp = new cc.Sprite3D("Sprite3DTest/axe.c3b");
        sprite.getAttachNode("Bip001 R Hand").addChild(sp);

        var animation = cc.Animation3D.create(fileName);
        if(animation){
            var animate = cc.Animate3D.create(animation);
            sprite.runAction(cc.repeatForever(animate));
        }

        //create mirror Sprite3D
        sprite = new cc.Sprite3D(fileName);
        sprite.setScale(5);
        sprite.setScaleX(-5);
        sprite.setCullFace(gl.FRONT);
        sprite.setRotation3D(cc.vec3(0, 180, 0));
        this.addChild(sprite);
        sprite.setPosition(cc.p(position.x + 80, position.y));

        //test attach
        sp = new cc.Sprite3D("Sprite3DTest/axe.c3b");
        sprite.getAttachNode("Bip001 R Hand").addChild(sp);
        
        var animation = cc.Animation3D.create(fileName);
        if(animation){
            var animate = cc.Animate3D.create(animation);
            sprite.runAction(cc.repeatForever(animate));
        }
    }

});

var QuaternionTest = Sprite3DTestDemo.extend({
    _title:"Test Rotation With Quaternion",
    _subtitle:"",
    _sprite:null,
    _radius:100,
    _accAngle:0,

    ctor:function(){
        this._super();

        var sprite = new cc.Sprite3D("Sprite3DTest/tortoise.c3b");
        sprite.setScale(0.1);
        var s = cc.winSize;
        sprite.setPosition(cc.p(s.width/2 + this._radius * Math.cos(this._accAngle), s.height / 2 + this._radius * Math.sin(this._accAngle)));
        this.addChild(sprite);
        this._sprite = sprite;
        var animation = cc.Animation3D.create("Sprite3DTest/tortoise.c3b");
        if(animation){
            var animate = cc.Animate3D.create(animation, 0, 1.933);
            sprite.runAction(cc.repeatForever(animate));
        }

        this.scheduleUpdate();
    },

    update:function(dt){
        this._accAngle += dt * cc.degreesToRadians(90);
        if(this._accAngle >= 2 * Math.PI)
            this._accAngle -= 2 * Math.PI;

        var s = cc.winSize;
        this._sprite.setPosition(cc.p(s.width / 2 + this._radius * Math.cos(this._accAngle), s.height / 2 + this._radius * Math.sin(this._accAngle)));

        var quat = cc.Quaternion.createFromAxisAngle(cc.vec3(0, 0, 1), this._accAngle - Math.PI * 0.5);
        this._sprite.setRotationQuat(quat);
    }
});

var Sprite3DEmptyTest = Sprite3DTestDemo.extend({
    _title:"Testing Sprite3D Container",
    _subtitle:"Sprite3D can act as containers for 2D objects",

    ctor:function(){
        this._super();

        var s = new cc.Sprite3D();
        s.setNormalizedPosition(cc.p(0.5, 0.5));
        var l = new cc.LabelTTF("Test");
        s.addChild(l);
        this.addChild(s);
    }
});

var Sprite3DForceDepthTest = Sprite3DTestDemo.extend({
    _title:"Force Depth Write Error Test",
    _subtitle:"Ship should always appear behind orc",

    ctor:function(){
        this._super();

        var orc = new cc.Sprite3D("Sprite3DTest/orc.c3b");
        orc.setScale(5);
        orc.setNormalizedPosition(cc.p(0.5, 0.3));
        // orc.setPositionZ(40);
        orc.setVertexZ(40);
        orc.setRotation3D(cc.vec3(0, 180, 0));
        orc.setGlobalZOrder(-1);

        this.addChild(orc);

        var ship = new cc.Sprite3D("Sprite3DTest/boss1.obj");
        ship.setScale(5);
        ship.setTexture("Sprite3DTest/boss.png");
        ship.setNormalizedPosition(cc.p(0.5, 0.5));
        ship.setRotation3D(cc.vec3(90, 0, 0));
        ship.setForceDepthWrite(true);

        this.addChild(ship);
    }
});

var UseCaseSprite3D1 = Sprite3DTestDemo.extend({
    _title:"Use Case For 2D + 3D",
    _subtitle:"3d transparent sprite + 2d sprite",
    _accAngle:0,

    ctor:function(){
        this._super();

        var s = cc.winSize;
        //setup camera
        var camera = cc.Camera.createPerspective(40, s.width/s.height, 0.01, 1000);
        camera.setCameraFlag(cc.CameraFlag.USER1);
        camera.setPosition3D(cc.vec3(0, 30, 100));
        camera.lookAt(cc.vec3(0, 0, 0));
        this.addChild(camera);

        var sprite = new cc.Sprite3D("Sprite3DTest/girl.c3b");
        sprite.setScale(0.15);
        var animation = cc.Animation3D.create("Sprite3DTest/girl.c3b");
        if(animation){
            var animate = cc.Animate3D.create(animation);
            sprite.runAction(cc.repeatForever(animate));
        }

        var circleBack = new cc.Sprite3D();
        var circle = new cc.Sprite("Sprite3DTest/circle.png");
        circleBack.setScale(0.5);
        circleBack.addChild(circle);
        circle.runAction(cc.rotateBy(3, cc.vec3(0, 0, 360)).repeatForever());

        circleBack.setRotation3D(cc.vec3(90, 0, 0));

        var pos = sprite.getPosition3D();
        circleBack.setPosition3D(cc.vec3(pos.x, pos.y, pos.z-1));

        sprite.setOpacity(250);
        sprite.setCameraMask(2);
        circleBack.setCameraMask(2);
        sprite.setTag(3);
        circleBack.setTag(2);

        this.addChild(sprite);
        this.addChild(circleBack);

        this.scheduleUpdate();
        this.update(0.1);
    },

    update:function(dt){
        this._accAngle += dt * cc.degreesToRadians(60);

        var radius = 30;
        var x = Math.cos(this._accAngle) * radius;
        var z = Math.sin(this._accAngle) * radius;

        var sprite = this.getChildByTag(3);
        var circle = this.getChildByTag(2);

        sprite.setPositionX(x);
        sprite.setVertexZ(z);
        circle.setPositionX(x);
        circle.setVertexZ(z);
    }
});

var UseCaseSprite3D2 = Sprite3DTestDemo.extend({
    _title:"Use Case For 2D + 3D",
    _subtitle:"ui - 3d - ui, last ui should on the top",
    ctor:function(){
        this._super();

        var s = cc.winSize;
        //setup camera
        var camera = cc.Camera.createPerspective(40, s.width/s.height, 0.01, 1000);
        camera.setCameraFlag(cc.CameraFlag.USER1);
        camera.setPosition3D(cc.vec3(0, 30, 100));
        camera.lookAt(cc.vec3(0, 0, 0));
        this.addChild(camera);

        var layer = new cc.LayerColor(cc.color(0, 0, 100, 255), s.width/2, s.height/2);
        layer.setPosition(s.width/4, s.height/4);
        layer.setGlobalZOrder(-1);
        layer.setTag(101);
        this.addChild(layer);

        var sprite = new cc.Sprite3D("Sprite3DTest/girl.c3b");
        sprite.setScale(0.5);
        var animation = cc.Animation3D.create("Sprite3DTest/girl.c3b");
        if(animation){
            var animate = cc.Animate3D.create(animation);
            sprite.runAction(cc.repeatForever(animate));
        }
        sprite.setPosition(s.width/4, s.height/4);
        layer.addChild(sprite);

        var label1 = new cc.LabelTTF("Message", "Arial", 15);
        var item1 = new cc.MenuItemLabel(label1, this.menuCallback_Message, this);
        var label2 = new cc.LabelTTF("Message", "Arial", 15);
        var item2 = new cc.MenuItemLabel(label2, this.menuCallback_Message, this);

        item1.setPosition(cc.p(s.width/2 - item1.getContentSize().width/2, s.height/2 - item1.getContentSize().height));
        item2.setPosition(cc.p(s.width/2 - item1.getContentSize().width/2, s.height/2 - item1.getContentSize().height * 2));

        var menu = new cc.Menu(item1, item2);
        menu.setPosition(cc.p(0, 0));
        layer.addChild(menu);

    },

    menuCallback_Message:function(sender){
        var layer = this.getChildByTag(101);
        var message = layer.getChildByTag(102);
        if(message)
            layer.removeChild(message);
        else{
            // create a new message layer on the top
            var s = layer.getContentSize();
            var messagelayer = new cc.LayerColor(cc.color(100, 100, 0, 255));
            messagelayer.setContentSize(cc.size(s.width/2, s.height/2));
            messagelayer.setPosition(cc.p(s.width/4, s.height/4));
            var label = new cc.LabelTTF("This Message Layer \n Should Be On Top");
            label.setPosition(cc.p(s.width/4, s.height/4));
            messagelayer.addChild(label);
            messagelayer.setTag(102);
            layer.addChild(messagelayer);
        }

    }
});

//
// Flow control
//
var arrayOfSprite3DTest = [
    Sprite3DBasicTest,
    Sprite3DHitTest,
    AsyncLoadSprite3DTest,
    Sprite3DWithSkinTest,
    Animate3DTest,
    AttachmentTest,
    Sprite3DReskinTest,
    // Sprite3DWithOBBPerformanceTest, //TODO bind DrawNode3D
    Sprite3DMirrorTest,
    QuaternionTest,
    Sprite3DEmptyTest,
    Sprite3DForceDepthTest,
    UseCaseSprite3D1,
    UseCaseSprite3D2
    //TODO 3D effects test
];

var nextSprite3DTest = function () {
    Sprite3DTestIdx++;
    Sprite3DTestIdx = Sprite3DTestIdx % arrayOfSprite3DTest.length;

    if(window.sideIndexBar){
        Sprite3DTestIdx = window.sideIndexBar.changeTest(Sprite3DTestIdx, 36);
    }

    return new arrayOfSprite3DTest[Sprite3DTestIdx ]();
};
var previousSprite3DTest = function () {
    Sprite3DTestIdx--;
    if (Sprite3DTestIdx < 0)
        Sprite3DTestIdx += arrayOfSprite3DTest.length;

    if(window.sideIndexBar){
        Sprite3DTestIdx = window.sideIndexBar.changeTest(Sprite3DTestIdx, 36);
    }

    return new arrayOfSprite3DTest[Sprite3DTestIdx ]();
};
var restartSprite3DTest = function () {
    return new arrayOfSprite3DTest[Sprite3DTestIdx ]();
};
