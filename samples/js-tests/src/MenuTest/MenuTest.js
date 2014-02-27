/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

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


var TAG_MENU = 77771;
var TAG_MENU0 = 77770;
var TAG_MENU1 = 77771;

//------------------------------------------------------------------
//
// LayerMainMenu
//
//------------------------------------------------------------------
var MenuLayerMainMenu = cc.Layer.extend({
    _disabledItem:null,

    ctor:function () {
        this._super();

        this.setTouchEnabled(true);
        this.setTouchPriority(cc.MENU_HANDLER_PRIORITY + 1);
        this.setTouchMode(cc.TOUCH_ONE_BY_ONE);

        // Font Item
        var spriteNormal = cc.Sprite.create(s_menuItem, cc.rect(0,23*2,115,23));
        var spriteSelected = cc.Sprite.create(s_menuItem, cc.rect(0,23,115,23));
        var spriteDisabled = cc.Sprite.create(s_menuItem, cc.rect(0,0,115,23));

        var item1 = cc.MenuItemSprite.create(spriteNormal, spriteSelected, spriteDisabled, this.onMenuCallback, this);

        // Image Item
        var item2 = cc.MenuItemImage.create(s_sendScore, s_pressSendScore, this.onMenuCallback2, this);

        // Label Item (LabelAtlas)
        var labelAtlas = cc.LabelAtlas.create("0123456789", s_fpsImages, 16, 24, '.');
        var item3 = cc.MenuItemLabel.create(labelAtlas, this.onMenuCallbackDisabled, this );
        item3.setDisabledColor( cc.c3b(32,32,64) );
        item3.setColor( cc.c3b(200,200,255) );

        // Font Item
        var item4 = cc.MenuItemFont.create("I toggle enable items", function(sender) {
            this._disabledItem.setEnabled(! this._disabledItem.isEnabled());
        }, this);

        item4.setFontSize(20);
        item4.setFontName("Arial");

        // Label Item (LabelBMFont)
        var label = cc.LabelBMFont.create("configuration", s_bitmapFontTest3_fnt);
        var item5 = cc.MenuItemLabel.create(label, this.onMenuCallbackConfig, this);

        // Testing issue #500
        item5.setScale( 0.8);

        // Events
        cc.MenuItemFont.setFontName("Arial");
        var item6 = cc.MenuItemFont.create("Priority Test", this.onMenuCallbackPriorityTest, this);

        // Bugs Item
        var item7 = cc.MenuItemFont.create("Bugs", this.onMenuCallbackBugsTest, this);

        // Font Item
        var item8 = cc.MenuItemFont.create("Quit", this.onQuit, this);

        var item9 = cc.MenuItemFont.create("Remove menu item when moving", this.onMenuMovingCallback, this);

        var color_action = cc.TintBy.create(0.5, 0, -255, -255);
        var color_back = color_action.reverse();
        var seq = cc.Sequence.create(color_action, color_back);
        item8.runAction(cc.RepeatForever.create(seq));

        var menu = cc.Menu.create( item1, item2, item3, item4, item5, item6, item7, item8, item9);
        menu.alignItemsVertically();

        // elastic effect
        var winSize = cc.Director.getInstance().getWinSize();

        var locChildren = menu.getChildren();
        var dstPoint = cc.p(0,0);
        for(var i = 0; i < locChildren.length; i++){
            var selChild = locChildren[i];
            if(selChild){
                dstPoint.x = selChild.getPositionX();
                dstPoint.y = selChild.getPositionY();
                var offset = 0|(winSize.width/2 + 50);
                if( i % 2 == 0)
                    offset = -offset;

                selChild.setPosition( dstPoint.x + offset, dstPoint.y);
                selChild.runAction(cc.EaseElasticOut.create(cc.MoveBy.create(2, cc.p(dstPoint.x - offset,0)), 0.35));
            }
        }
        this._disabledItem = item3;
        this._disabledItem.setEnabled( false );
        this.addChild(menu);
        menu.setPosition(winSize.width/2, winSize.height/2);
    },

    onTouchBegan:function () {
        return true;
    },

    onMenuCallback:function (sender) {
        this.getParent().switchTo(1);
    },

    onMenuCallbackConfig:function (sender) {
        this.getParent().switchTo(3);
    },

    onAllowTouches:function (dt) {
        director.getTouchDispatcher().setPriority(cc.MENU_HANDLER_PRIORITY + 1, this);
        this.unscheduleAllCallbacks();
        cc.log("TOUCHES ALLOWED AGAIN");
    },

    onMenuCallbackDisabled:function (sender) {
        // hijack all touch events for 5 seconds
        director.getTouchDispatcher().setPriority(cc.MENU_HANDLER_PRIORITY - 1, this);
        this.schedule(this.onAllowTouches, 5.0);
        cc.log("TOUCHES DISABLED FOR 5 SECONDS");
    },

    onMenuCallback2:function (sender) {
        this.getParent().switchTo(2);
    },

    onMenuCallbackPriorityTest:function (sender) {
        this.getParent().switchTo(4);
    },

    onQuit:function (sender) {
        cc.log("Quit called");
    },

    onMenuCallbackBugsTest:function(sender){
        this.getParent().switchTo(5);
    },

    onMenuMovingCallback:function(sender){
        this.getParent().switchTo(6);
    }
});

//------------------------------------------------------------------
//
// MenuLayer2
//
//------------------------------------------------------------------
var MenuLayer2 = cc.Layer.extend({
    _centeredMenu:null,
    _alignedH:false,

    ctor:function () {
        this._super();

        for (var i = 0; i < 2; i++) {
            var item1 = cc.MenuItemImage.create(s_playNormal, s_playSelect, this.onMenuCallback, this);
            var item2 = cc.MenuItemImage.create(s_highNormal, s_highSelect, this.onMenuCallbackOpacity, this);
            var item3 = cc.MenuItemImage.create(s_aboutNormal, s_aboutSelect, this.onMenuCallbackAlign, this);

            item1.setScaleX(1.5);
            item2.setScaleX(0.5);
            item3.setScaleX(0.5);

            var menu = cc.Menu.create(item1, item2, item3);
            var winSize = director.getWinSize();

            menu.setTag(TAG_MENU);
            menu.setPosition(winSize.width / 2, winSize.height / 2);

            this.addChild(menu, 0, 100 + i);

            this._centeredMenu = menu.getPosition();
        }
        this._alignedH = true;
        this.alignMenuH();
    },
    init:function () {
        this._super();

    },
    alignMenuH:function () {
        var p;
        for (var i = 0; i < 2; i++) {
            var menu = this.getChildByTag(100 + i);
            menu.setPosition(this._centeredMenu);
            if (i === 0) {
                menu.alignItemsHorizontally();
                p = menu.getPosition();
                menu.setPosition(cc.pAdd(p, cc.p(0, 30)));
            } else {
                menu.alignItemsHorizontallyWithPadding(40);
                p = menu.getPosition();
                menu.setPosition(cc.pSub(p, cc.p(0, 30)));
            }
        }
    },
    alignMenusV:function () {
        var p;
        for (var i = 0; i < 2; i++) {
            var menu = this.getChildByTag(100 + i);
            menu.setPosition(this._centeredMenu);
            if (i === 0) {
                menu.alignItemsVertically();
                p = menu.getPosition();
                menu.setPosition(cc.pAdd(p, cc.p(100, 0)));
            } else {
                menu.alignItemsVerticallyWithPadding(40);
                p = menu.getPosition();
                menu.setPosition(cc.pSub(p, cc.p(100, 0)));
            }
        }
    },
    // callbacks
    onMenuCallback:function (sender) {
        this.getParent().switchTo(0);
    },
    onMenuCallbackOpacity:function (sender) {
        var menu = sender.getParent();
        var opacity = menu.getOpacity();
        if (opacity == 128)
            menu.setOpacity(255);
        else
            menu.setOpacity(128);
    },
    onMenuCallbackAlign:function (sender) {
        this._alignedH = !this._alignedH;
        if (this._alignedH)
            this.alignMenuH();
        else
            this.alignMenusV();
    }
});

//------------------------------------------------------------------
//
// MenuLayer3
//
//------------------------------------------------------------------
var MenuLayer3 = cc.Layer.extend({
    _disabledItem:null,

    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(28);

        var label = cc.LabelBMFont.create("Enable AtlasItem", s_bitmapFontTest3_fnt);
        var item1 = cc.MenuItemLabel.create(label, function(sender){
            this._disabledItem.setEnabled(!this._disabledItem.isEnabled());
            this._disabledItem.stopAllActions();
        }, this);
        var item2 = cc.MenuItemFont.create("--- Go Back ---", function(sender){
            this.getParent().switchTo(0);
        }, this);

        var spriteNormal = cc.Sprite.create(s_menuItem, cc.rect(0, 23 * 2, 115, 23));
        var spriteSelected = cc.Sprite.create(s_menuItem, cc.rect(0, 23, 115, 23));
        var spriteDisabled = cc.Sprite.create(s_menuItem, cc.rect(0, 0, 115, 23));

        var item3 = cc.MenuItemSprite.create(spriteNormal, spriteSelected, spriteDisabled, function(sender){
            cc.log("sprite clicked!");
        }, this);
        this._disabledItem = item3;
        this._disabledItem.setEnabled(false);

        var menu = cc.Menu.create(item1, item2, item3);
        menu.setPosition(0, 0);

        var s = director.getWinSize();

        item1.setPosition(s.width / 2 - 150, s.height / 2);
        item2.setPosition(s.width / 2 - 200, s.height / 2);
        item3.setPosition(s.width / 2, s.height / 2 - 100);

        var jump = cc.JumpBy.create(3, cc.p(400, 0), 50, 4);
        item2.runAction(cc.RepeatForever.create(cc.Sequence.create(jump, jump.reverse())));
        var spin1 = cc.RotateBy.create(3, 360);
        var spin2 = spin1.clone();
        var spin3 = spin1.clone();

        item1.runAction(cc.RepeatForever.create(spin1));
        item2.runAction(cc.RepeatForever.create(spin2));
        item3.runAction(cc.RepeatForever.create(spin3));

        this.addChild(menu);
        menu.setPosition(0, 0);
    }
});

var MenuLayer4 = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        this._super();
        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);

        var title1 = cc.MenuItemFont.create("Sound");
        title1.setEnabled(false);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);

        // you can create a ToggleItem by passing the items
        // and later setting the callback
        var item1 = cc.MenuItemToggle.create(
            cc.MenuItemFont.create("On"),
            cc.MenuItemFont.create("Off"));
        item1.setCallback(this.onMenuCallback, this);

        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);
        var title2 = cc.MenuItemFont.create("Music");
        title2.setEnabled(false);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);

        // or you can create a ToggleItem by passing the items
        // an the callback at the last arguments.
        var item2 = cc.MenuItemToggle.create(
            cc.MenuItemFont.create("Off"),
            cc.MenuItemFont.create("On"),
            this.onMenuCallback.bind(this)
        );

        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);
        var title3 = cc.MenuItemFont.create("Quality");
        title3.setEnabled(false);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);
        var item3 = cc.MenuItemToggle.create(
            cc.MenuItemFont.create("High"),
            cc.MenuItemFont.create("Low"),
            this.onMenuCallback, this
        );

        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);
        var title4 = cc.MenuItemFont.create("Orientation");
        title4.setEnabled(false);
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);
        var item4 = cc.MenuItemToggle.create(
            cc.MenuItemFont.create("Off"),
            cc.MenuItemFont.create("33%"),
            cc.MenuItemFont.create("66%"),
            cc.MenuItemFont.create("100%"),
            this.onMenuCallback, this
        );

        // you can change the one of the items by doing this
        item4.setSelectedIndex(2);

        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(34);

        var label = cc.LabelBMFont.create("go back", s_bitmapFontTest3_fnt);
        var back = cc.MenuItemLabel.create(label, this.onBackCallback, this);

        var menu = cc.Menu.create(
            title1, title2,
            item1, item2,
            title3, title4,
            item3, item4,
            back); // 9 items.

        menu.alignItemsInColumns(2, 2, 2, 2, 1);

        this.addChild(menu);

        var winSize = director.getWinSize();
        menu.setPosition(winSize.width / 2, winSize.height / 2);
    },
    onMenuCallback:function (sender) {
        cc.log("Callback called");
    },
    onBackCallback:function (sender) {
        this.getParent().switchTo(0);
    }
});

var MenuLayerPriorityTest = cc.Layer.extend({
    _menu1:null,
    _menu2:null,
    _priority:false,

    ctor:function () {
        this._super();

        this._menu1 = cc.Menu.create();
        this._menu2 = cc.Menu.create();

        //Menu 1
        cc.MenuItemFont.setFontName("Marker Felt");
        cc.MenuItemFont.setFontSize(18);
        var item1 = cc.MenuItemFont.create("Return to Main Menu", this.onMenuCallback, this);
        var item2 = cc.MenuItemFont.create("Disable menu for 5 seconds", this.onDisableMenuCallback, this);
        this._menu1.addChild(item1);
        this._menu1.addChild(item2);
        this._menu1.alignItemsVerticallyWithPadding(2);
        this.addChild(this._menu1);

        //Menu 2
        this._priority = true;
        cc.MenuItemFont.setFontSize(48);
        item1 = cc.MenuItemFont.create("Toggle priority", this.onTogglePriorityCallback, this);
        item1.setColor(cc.c3b(0, 0, 255));
        this._menu2.addChild(item1);
        this.addChild(this._menu2);
    },

    onMenuCallback:function (sender) {
        this.getParent().switchTo(0);
    },

    onDisableMenuCallback:function (sender) {
        this._menu1.setEnabled(false);
        var wait = cc.DelayTime.create(5);
        var enable = cc.CallFunc.create(function(){
            this._menu1.setEnabled(true);
        }, this);
        this._menu1.runAction(cc.Sequence.create(wait, enable));
    },

    onTogglePriorityCallback:function (sender) {
        if (this._priority) {
            this._menu2.setHandlerPriority(cc.MENU_HANDLER_PRIORITY + 20);
            this._priority = false;
        } else {
            this._menu2.setHandlerPriority(cc.MENU_HANDLER_PRIORITY - 20);
            this._priority = true;
        }
    }
});

var MenuBugsTest = cc.Layer.extend({
     ctor:function(){
         this._super();

         var issue1410 = cc.MenuItemFont.create("Issue 1410", this.onIssue1410MenuCallback, this);
         var issue1410_2 = cc.MenuItemFont.create("Issue 1410 #2", this.onIssue1410v2MenuCallback, this);
         var back = cc.MenuItemFont.create("Back", this.onBackMenuCallback, this);

         var menu = cc.Menu.create(issue1410, issue1410_2, back);
         this.addChild(menu);
         menu.alignItemsVertically();

         var s = cc.Director.getInstance().getWinSize();
         menu.setPosition(s.width/2, s.height/2);
     },

    onIssue1410MenuCallback:function(sender){
        var menu = sender.getParent();
        menu.setTouchEnabled(false);
        menu.setTouchEnabled(true);

        cc.log("NO CRASHES");
    },

    onIssue1410v2MenuCallback:function(sender){
        var menu = sender.getParent();
        menu.setTouchEnabled(true);
        menu.setTouchEnabled(false);

        cc.log("NO CRASHES. AND MENU SHOULD STOP WORKING");
    },

    onBackMenuCallback:function(sender){
        this.getParent().switchTo(0);
    }
});

var RemoveMenuItemWhenMove = cc.Layer.extend({
    _item:null,

    ctor: function(){
        this._super();

        var s = cc.Director.getInstance().getWinSize();

        var label = cc.LabelTTF.create("click item and move, should not crash", "Arial", 20);
        label.setPosition(s.width/2, s.height - 30);
        this.addChild(label);

        this._item = cc.MenuItemFont.create("item 1");

        var back = cc.MenuItemFont.create("go back", this.goBack, this);

        var menu = cc.Menu.create(this._item, back);
        this.addChild(menu);
        menu.alignItemsVertically();

        menu.setPosition(s.width/2, s.height/2);
    },

    onEnter: function(){
        this._super();
        cc.registerTargetedDelegate(-129, false, this);
    },

    onExit: function() {
        cc.unregisterTouchDelegate(this);
        this._super();
    },
    onTouchBegan:function(touch, event){
        return true;
    },
    onTouchMoved: function(touch, event){
        if (this._item){
            this._item.removeFromParent(true);
            this._item = null;
        }
    },

    goBack:function(sender){
        this.getParent().switchTo(0);
    }
});

var MenuTestScene = TestScene.extend({
    runThisTest:function () {
        var layer1 = new MenuLayerMainMenu();
        var layer2 = new MenuLayer2();
        var layer3 = new MenuLayer3();
        var layer4 = new MenuLayer4();
        var layer5 = new MenuLayerPriorityTest();
        var layer6 = new MenuBugsTest();
        var layer7 = new RemoveMenuItemWhenMove();

        var layer = cc.LayerMultiplex.create(layer1, layer2, layer3, layer4, layer5,layer6, layer7);
        this.addChild(layer, 0);

        director.replaceScene(this);
    }
});
