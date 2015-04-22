/****************************************************************************
 Cocos2d-html5 show case : Moon Warriors

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
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @Authors:
 Programmer: Shengxiang Chen (陈升想), Dingping Lv (吕定平), Ricardo Quesada
 Effects animation: Hao Wu (吴昊)
 Quality Assurance: Sean Lin (林顺)
 ****************************************************************************/

var SysMenu = cc.Layer.extend({
    _ship:null,

    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        if (cc.sys.isNative) {
            var writablePath = jsb.fileUtils.getWritablePath();
            cc.log("writablePath: " + writablePath);
            var obj = {
                server_url: "http://192.168.0.1",
                version_code: 100
            };
            jsb.fileUtils.writeToFile(obj, writablePath + "/hello_writable.json");
        }

        cc.spriteFrameCache.addSpriteFrames(res.textureTransparentPack_plist);

        winSize = cc.director.getWinSize();
        var sp = new cc.Sprite(res.loading_png);
        sp.anchorX = 0;
        sp.anchorY = 0;
        sp.scale = MW.SCALE;
        this.addChild(sp, 0, 1);

        var logo = new cc.Sprite(res.logo_png);
        logo.attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: MW.LOGOY,
            scale: MW.SCALE
        });
        this.addChild(logo, 10, 1);

        var logoBack = new cc.Sprite(res.logoBack_png);
        logoBack.attr({
            anchorX: 0,
            anchorY: 0,
            x: 60,
            y: MW.LOGOY + logo.height,
            scale: MW.SCALE
        });
        this.addChild(logoBack, 9);

        var singalHeight = MW.menuHeight;
        var singalWidth = MW.menuWidth;
        var newGameNormal = new cc.Sprite(res.menu_png, cc.rect(0, 0, singalWidth, singalHeight));
        var newGameSelected = new cc.Sprite(res.menu_png, cc.rect(0, singalHeight, singalWidth, singalHeight));
        var newGameDisabled = new cc.Sprite(res.menu_png, cc.rect(0, singalHeight * 2, singalWidth, singalHeight));

        var gameSettingsNormal = new cc.Sprite(res.menu_png, cc.rect(singalWidth, 0, singalWidth, singalHeight));
        var gameSettingsSelected = new cc.Sprite(res.menu_png, cc.rect(singalWidth, singalHeight, singalWidth, singalHeight));
        var gameSettingsDisabled = new cc.Sprite(res.menu_png, cc.rect(singalWidth, singalHeight * 2, singalWidth, singalHeight));

        var aboutNormal = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, 0, singalWidth, singalHeight));
        var aboutSelected = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, singalHeight, singalWidth, singalHeight));
        var aboutDisabled = new cc.Sprite(res.menu_png, cc.rect(singalWidth * 2, singalHeight * 2, singalWidth, singalHeight));
        var flare = new cc.Sprite(res.flare_jpg);
        this.addChild(flare, 15, 10);
        flare.visible = false;
        var newGame = new cc.MenuItemSprite(newGameNormal, newGameSelected, newGameDisabled, function () {
            this.onButtonEffect();
            //this.onNewGame();
            flareEffect(flare, this, this.onNewGame);
        }.bind(this));
        var gameSettings = new cc.MenuItemSprite(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this.onSettings, this);
        var about = new cc.MenuItemSprite(aboutNormal, aboutSelected, aboutDisabled, this.onAbout, this);
        newGame.scale = MW.SCALE;
        gameSettings.scale = MW.SCALE;
        about.scale = MW.SCALE;

        // make crash Item
        var makeCrash = new cc.MenuItemFont("Make a crash", function(sender) {
            var sprite = new cc.Sprite("fileNotExist.png");
            sprite.release();
            this.addChild(sprite);
        }, this);

        makeCrash.fontSize = 21;
        makeCrash.fontName = "Arial";
        makeCrash.color = cc.color(MW.FONTCOLOR)

        var menu = new cc.Menu(newGame, gameSettings, about, makeCrash);
        menu.alignItemsVerticallyWithPadding(15);
        this.addChild(menu, 1, 2);
        menu.x = winSize.width / 2;
        menu.y = winSize.height / 2 - 140;

        var label = new cc.LabelTTF("Power by Cocos2d-JS", "Arial", 21);
        label.setColor(cc.color(MW.FONTCOLOR));
        this.addChild(label, 1);
        label.x = winSize.width  / 2;
        label.y = 80;

        this.schedule(this.update, 0.1);

        this._ship = new cc.Sprite("#ship03.png");
        this.addChild(this._ship, 0, 4);
        this._ship.x = Math.random() * winSize.width;
        this._ship.y = 0;
        this._ship.runAction(cc.moveBy(2, cc.p(Math.random() * winSize.width, this._ship.y + winSize.height + 100)));

        // game version
        var versionLabel = new cc.LabelTTF("version:3.0.0", "Marker Felt", 20);
        this.addChild(versionLabel, 1, 2);
        versionLabel.x = winSize.width - 80;
        versionLabel.y = winSize.height - 20;

        if (MW.SOUND) {
            cc.audioEngine.setMusicVolume(0.7);
            cc.audioEngine.playMusic(res.mainMainMusic_mp3, true);
        }
        cc.runtime.setOption("network_error_dialog", {
            background: {
                res: "res/dialog_bg.png"
            },
            confirmBtn:{
                normalRes:"res/dialog_confirm_normal.png",
                pressRes:"res/dialog_confirm_press.png",
                text:"",
                position:cc.p(225,25)
            },
            cancelBtn:{
                normalRes:"res/dialog_cancel_normal.png",
                pressRes:"res/dialog_cancel_press.png",
                text:"",
                position:cc.p(75,25)
            },
            messageLabel:{
                text:"网络连接错误哈~~~",
                position:cc.p(175,30),
                dimisions:cc.size(200,15),
                fontSize:20
            }
        });

        cc.runtime.setOption("no_space_error_dialog", {
            background: {
                res: "res/dialog_bg.png"
            },
            confirmBtn:{
                normalRes:"res/dialog_confirm_normal.png",
                pressRes:"res/dialog_confirm_press.png",
                text:"",
                position:cc.p(225,25)
            },
            cancelBtn:{
                normalRes:"res/dialog_cancel_normal.png",
                pressRes:"res/dialog_cancel_press.png",
                text:"",
                position:cc.p(75,25)
            },
            messageLabel:{
                text:"没有空间了额~~~",
                position:cc.p(175,30),
                dimisions:cc.size(200,15),
                fontSize:20
            }
        });
        cc.runtime.setOption("verify_error_dialog", {
            messageLabel:{
                text:"验证失败了额~~~",
                position:cc.p(175,30),
                dimisions:cc.size(200,15),
                fontSize:20
            }
        });
        return true;
    },
    onNewGame:function (pSender) {
        //load resources
        var self = this;
        var cb = function(isSucceed) {
            cc.log("onNewGame callback: " + isSucceed);
                cc.audioEngine.stopMusic();
                cc.audioEngine.stopAllEffects();
                var scene = new cc.Scene();
                scene.addChild(new GameLayer());
                scene.addChild(new GameControlMenu());
                cc.director.runScene(new cc.TransitionFade(1.2, scene));
        };
        cc.LoaderLayer.preload(["gamelayer"], cb, self);
    },
    onSettings:function (pSender) {
        this.onButtonEffect();
        var self = this;
        var cb = function(isSucceed) {
            var scene = new cc.Scene();
            scene.addChild(new SettingsLayer());
            cc.director.runScene(new cc.TransitionFade(1.2, scene));
        };
        cc.LoaderLayer.preload("common", cb, self);
    },
    onAbout:function (pSender) {
        this.onButtonEffect();
        var self = this;
        var cb = function(isSucceed) {
            var scene = new cc.Scene();
            scene.addChild(new AboutLayer());
            cc.director.runScene(new cc.TransitionFade(1.2, scene));
        };
        cc.LoaderLayer.preload("common", cb, self);
    },
    update:function () {
        if (this._ship.y > 750) {
            this._ship.x = Math.random() * winSize.width;
	        this._ship.y = 10;
            this._ship.runAction(cc.moveBy(
                parseInt(5 * Math.random(), 10),
                cc.p(Math.random() * winSize.width, this._ship.y + 750)
            ));
        }
    },
    onButtonEffect:function(){
        if (MW.SOUND) {
            var s = cc.audioEngine.playEffect(res.buttonEffet_mp3);
        }
    }
});

SysMenu.scene = function () {
    var scene = new cc.Scene();
    var layer = new SysMenu();
    scene.addChild(layer);
    return scene;
};

var getNativeKeyName = function(keyCode) {
    var allCode = Object.getOwnPropertyNames(cc.KEY);
    var keyName = "";
    for(var x in allCode){
        if(cc.KEY[allCode[x]] == keyCode){
            keyName = allCode[x];
            break;
        }
    }
    return keyName;
};

var registerKeyEvent = function() {
    cc.eventManager.addListener(cc.EventListener.create({
        event: cc.EventListener.KEYBOARD,
        onKeyReleased: function(keyCode, event){
            cc.log("Key " + (cc.sys.isNative ? getNativeKeyName(keyCode) : String.fromCharCode(keyCode) ) + "(" + keyCode.toString()  + ") was released!");
            if (keyCode == cc.KEY.back) {
                if (cc.sys.isNative) {
                    var conf = {
                        messageLabel: {
                            text: "确定退出游戏吗？"
                        },
                        confirmBtn:{
                            callback: function () {
                                cc.director.end();
                            }
                        },
                        cancelBtn:{
                            callback: function () {
                                cc.log("取消退出游戏");
                            }
                        }
                    }
                    cc.Dialog.show(conf);
                }
            }
        }
    }), -1);
};
registerKeyEvent();



