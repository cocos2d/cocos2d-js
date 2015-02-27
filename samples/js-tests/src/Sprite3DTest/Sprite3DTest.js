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

var Sprite3DTestScene = TestScene.extend({
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
        var sprite = cc.Sprite3D.create("Sprite3DTest/boss1.obj");
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

        var sprite1 = cc.Sprite3D.create("Sprite3DTest/boss1.obj");
        sprite1.setScale(4.0);
        sprite1.setTexture("Sprite3DTest/boss.png");
        sprite1.setPosition(cc.p(s.width/2, s.height/2));

        this.addChild(sprite1);
        sprite1.runAction(cc.rotateBy(3, 360).repeatForever());

        var sprite2 = cc.Sprite3D.create("Sprite3DTest/boss1.obj")
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
    _path:[],
    ctor:function(){
        this._super();

        var path = this._path;
        path.push("Sprite3DTest/boss.obj");
        path.push("Sprite3DTest/girl.c3b");
        path.push("Sprite3DTest/orc.c3b");
        path.push("Sprite3DTest/ReskinGirl.c3b");
        path.push("Sprite3DTest/axe.c3b");

        var label = new cc.LabelTTF("AsyncLoad Sprite3D");
        this.addChild(label);
    }
});

//
// Flow control
//
var arrayOfSprite3DTest = [
    Sprite3DBasicTest,
    Sprite3DHitTest,
    AsyncLoadSprite3DTest
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
