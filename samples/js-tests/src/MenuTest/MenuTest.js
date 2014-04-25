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
    _touchListener: null,

    ctor:function () {
        this._super();

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
        item3.setDisabledColor( cc.color(32,32,64) );
        item3.color = cc.color(200,200,255);

        // Font Item
        var item4 = cc.MenuItemFont.create("I toggle enable items", function(sender) {
            this._disabledItem.enabled = !this._disabledItem.enabled;
        }, this);

        item4.fontSize = 20;
        item4.fontName = "Arial";

        // Label Item (LabelBMFont)
        var label = cc.LabelBMFont.create("configuration", s_bitmapFontTest3_fnt);
        var item5 = cc.MenuItemLabel.create(label, this.onMenuCallbackConfig, this);

        // Testing issue #500
        item5.scale = 0.8;

        // Events
        cc.MenuItemFont.setFontName("Arial");

        // Bugs Item
        var item7 = cc.MenuItemFont.create("Bugs", this.onMenuCallbackBugsTest, this);

        // Font Item
        var item8 = cc.MenuItemFont.create("Quit", this.onQuit, this);

        var item9 = cc.MenuItemFont.create("Remove menu item when moving", this.onMenuMovingCallback, this);

        var color_action = cc.TintBy.create(0.5, 0, -255, -255);
        var color_back = color_action.reverse();
        var seq = cc.Sequence.create(color_action, color_back);
        item8.runAction(cc.RepeatForever.create(seq));

        var menu = cc.Menu.create( item1, item2, item3, item4, item5, item7, item8, item9);
        menu.alignItemsVertically();

        // elastic effect
        var winSize = cc.director.getWinSize();

        var locChildren = menu.children;
        var dstPoint = cc.p(0,0);
        for(var i = 0; i < locChildren.length; i++){
            var selChild = locChildren[i];
            if(selChild){
                dstPoint.x = selChild.x;
                dstPoint.y = selChild.y;
                var offset = 0|(winSize.width/2 + 50);
                if( i % 2 == 0)
                    offset = -offset;

                selChild.x = dstPoint.x + offset;
                selChild.y = dstPoint.y;
                selChild.runAction(cc.EaseElasticOut.create(cc.MoveBy.create(2, cc.p(dstPoint.x - offset,0)), 0.35));
            }
        }
        this._disabledItem = item3;
        this._disabledItem.enabled = false;
        this.addChild(menu);
        menu.x = winSize.width/2;
        menu.y = winSize.height/2;
    },

    onMenuCallback:function (sender) {
        this.parent.switchTo(1);
    },

    onMenuCallbackConfig:function (sender) {
        this.parent.switchTo(3);
    },

    onAllowTouches:function (dt) {
        cc.eventManager.setPriority(this._touchListener, 1);
        this.unscheduleAllCallbacks();
        cc.log("TOUCHES ALLOWED AGAIN");
    },

    onMenuCallbackDisabled:function (sender) {
        // hijack all touch events for 5 seconds
        cc.eventManager.setPriority(this._touchListener, -1);
        this.schedule(this.onAllowTouches, 5.0);
        cc.log("TOUCHES DISABLED FOR 5 SECONDS");
    },

    onMenuCallback2:function (sender) {
        this.parent.switchTo(2);
    },

	onEnter: function() {
		this._super();
		this._touchListener = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan:function () {
				return true;
			}
		});
		cc.eventManager.addListener(this._touchListener, 1);
	},

	onExit: function() {
		this._super();
		cc.eventManager.removeListener(this._touchListener);
	},

    onQuit:function (sender) {
        cc.log("Quit called");
    },

    onMenuCallbackBugsTest:function(sender){
        this.parent.switchTo(4);
    },

    onMenuMovingCallback:function(sender){
        this.parent.switchTo(5);
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

            item1.scaleX = 1.5;
            item2.scaleX = 0.5;
            item3.scaleX = 0.5;

            var menu = cc.Menu.create(item1, item2, item3);
            var winSize = director.getWinSize();

            menu.tag = TAG_MENU;
            menu.x = winSize.width / 2;
            menu.y = winSize.height / 2;

            this.addChild(menu, 0, 100 + i);

            this._centeredMenu = cc.p(menu.x, menu.y);
        }
        this._alignedH = true;
        this.alignMenuH();
    },
    init:function () {
        this._super();

    },
    alignMenuH:function () {
        for (var i = 0; i < 2; i++) {
            var menu = this.getChildByTag(100 + i);
            menu.x = this._centeredMenu.x;
	        menu.y = this._centeredMenu.y;
            if (i === 0) {
                menu.alignItemsHorizontally();
	            menu.y += 30;
            } else {
                menu.alignItemsHorizontallyWithPadding(40);
                menu.y -= 30;
            }
        }
    },
    alignMenusV:function () {
        for (var i = 0; i < 2; i++) {
            var menu = this.getChildByTag(100 + i);
            menu.x = this._centeredMenu.x;
	        menu.y = this._centeredMenu.y;
            if (i === 0) {
                menu.alignItemsVertically();
                menu.x += 100;
            } else {
                menu.alignItemsVerticallyWithPadding(40);
	            menu.x -= 100;
            }
        }
    },
    // callbacks
    onMenuCallback:function (sender) {
        this.parent.switchTo(0);
    },
    onMenuCallbackOpacity:function (sender) {
        var menu = sender.parent;
        var opacity = menu.opacity;
        if (opacity == 128)
            menu.opacity = 255;
        else
            menu.opacity = 128;
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
            this._disabledItem.enabled = !this._disabledItem.enabled;
            this._disabledItem.stopAllActions();
        }, this);
        var item2 = cc.MenuItemFont.create("--- Go Back ---", function(sender){
            this.parent.switchTo(0);
        }, this);

        var spriteNormal = cc.Sprite.create(s_menuItem, cc.rect(0, 23 * 2, 115, 23));
        var spriteSelected = cc.Sprite.create(s_menuItem, cc.rect(0, 23, 115, 23));
        var spriteDisabled = cc.Sprite.create(s_menuItem, cc.rect(0, 0, 115, 23));

        var item3 = cc.MenuItemSprite.create(spriteNormal, spriteSelected, spriteDisabled, function(sender){
            cc.log("sprite clicked!");
        }, this);
        this._disabledItem = item3;
        this._disabledItem.enabled = false;

        var menu = cc.Menu.create(item1, item2, item3);
        menu.x = 0;
        menu.y = 0;

        var s = director.getWinSize();

        item1.x = s.width / 2 - 150;
        item1.y = s.height / 2;
        item2.x = s.width / 2 - 200;
        item2.y = s.height / 2;
        item3.x = s.width / 2;
        item3.y = s.height / 2 - 100;

        var jump = cc.JumpBy.create(3, cc.p(400, 0), 50, 4);
        item2.runAction(cc.RepeatForever.create(cc.Sequence.create(jump, jump.reverse())));
        var spin1 = cc.RotateBy.create(3, 360);
        var spin2 = spin1.clone();
        var spin3 = spin1.clone();

        item1.runAction(cc.RepeatForever.create(spin1));
        item2.runAction(cc.RepeatForever.create(spin2));
        item3.runAction(cc.RepeatForever.create(spin3));

        this.addChild(menu);
        menu.x = 0;
        menu.y = 0;
    }
});

var MenuLayer4 = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        //this._super();
        cc.MenuItemFont.setFontName("American Typewriter");
        cc.MenuItemFont.setFontSize(18);

        var title1 = cc.MenuItemFont.create("Sound");
        title1.enabled = false;
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
        title2.enabled = false;
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
        title3.enabled = false;
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
        title4.enabled = false;
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
        menu.x = winSize.width / 2;
        menu.y = winSize.height / 2;
    },
    onMenuCallback:function (sender) {
        cc.log("Callback called");
    },
    onBackCallback:function (sender) {
        this.parent.switchTo(0);
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

         var s = cc.director.getWinSize();
         menu.x = s.width/2;
         menu.y = s.height/2;
     },

    onIssue1410MenuCallback:function(sender){
        var menu = sender.parent;
        menu.setEnabled(false);
        menu.setEnabled(true);

        cc.log("NO CRASHES");
    },

    onIssue1410v2MenuCallback:function(sender){
        var menu = sender.parent;
        menu.setEnabled(true);
        menu.setEnabled(false);

        cc.log("NO CRASHES. AND MENU SHOULD STOP WORKING");
    },

    onBackMenuCallback:function(sender){
        this.parent.switchTo(0);
    }
});

var RemoveMenuItemWhenMove = cc.Layer.extend({
    _item:null,
    _touchListener: null,
    ctor: function(){
        this._super();

        var s = cc.director.getWinSize();

        var label = cc.LabelTTF.create("click item and move, should not crash", "Arial", 20);
        label.x = s.width/2;
        label.y = s.height - 30;
        this.addChild(label);

        this._item = cc.MenuItemFont.create("item 1");

        var back = cc.MenuItemFont.create("go back", this.goBack, this);

        var menu = cc.Menu.create(this._item, back);
        this.addChild(menu);
        menu.alignItemsVertically();

        menu.x = s.width/2;
        menu.y = s.height/2;
    },

	onEnter: function() {
		this._super();
		this._touchListener = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: false,
			onTouchBegan:function(touch, event){
				return true;
			},
			onTouchMoved: function(touch, event){
				if (this._item){
					this._item.removeFromParent(true);
					this._item = null;
				}
			}.bind(this)
		});
		cc.eventManager.addListener(this._touchListener, -129);
	},

	onExit: function() {
		this._super();
		cc.eventManager.removeListener(this._touchListener);
	},

    goBack: function(sender){
        this.parent.switchTo(0);
    }
});

var MenuTestScene = TestScene.extend({
    runThisTest:function () {
        var layer1 = new MenuLayerMainMenu();
        var layer2 = new MenuLayer2();
        var layer3 = new MenuLayer3();
        var layer4 = new MenuLayer4();
        var layer5 = new MenuBugsTest();
        var layer6 = new RemoveMenuItemWhenMove();

        var layer = cc.LayerMultiplex.create(layer1, layer2, layer3, layer4, layer5, layer6);
        this.addChild(layer, 0);

        director.runScene(this);
    }
});
