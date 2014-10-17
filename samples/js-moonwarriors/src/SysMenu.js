define([
    "require",
    "core", "Scene", "LoaderScene", "layers", "Sprite", "Menu", "menuitems", "actions", "audio",
    "cocos2d/core/sprites/CCSpriteFrameCache",
    "game/config/GameConfig",
    "game/res_game",
    "game/GameLayer",
    "game/GameControlMenu",
    "game/SettingsLayer",
    "game/AboutLayer",
    "game/Effect"
], function(require, cc, Scene, LoaderScene, ls, Sprite, Menu, mItems, actions, audioEngine, spriteFrameCache, MW, res_game, GameLayer, GameControlMenu, SettingsLayer, AboutLayer, flareEffect) {

    var SysMenu = ls.Layer.extend({
        _ship:null,

        ctor:function () {
            this._super();
            this.init();
        },
        init:function () {
            spriteFrameCache.addSpriteFrames(res.textureTransparentPack_plist);

            winSize = cc.director.getWinSize();
            var sp = new Sprite(res.loading_png);
            sp.anchorX = 0;
            sp.anchorY = 0;
            this.addChild(sp, 0, 1);

            var logo = new Sprite(res.logo_png);
            logo.attr({
                anchorX: 0,
                anchorY: 0,
                x: 0,
                y: 250
            });
            this.addChild(logo, 10, 1);

            var newGameNormal = new Sprite(res.menu_png, cc.rect(0, 0, 126, 33));
            var newGameSelected = new Sprite(res.menu_png, cc.rect(0, 33, 126, 33));
            var newGameDisabled = new Sprite(res.menu_png, cc.rect(0, 33 * 2, 126, 33));

            var gameSettingsNormal = new Sprite(res.menu_png, cc.rect(126, 0, 126, 33));
            var gameSettingsSelected = new Sprite(res.menu_png, cc.rect(126, 33, 126, 33));
            var gameSettingsDisabled = new Sprite(res.menu_png, cc.rect(126, 33 * 2, 126, 33));

            var aboutNormal = new Sprite(res.menu_png, cc.rect(252, 0, 126, 33));
            var aboutSelected = new Sprite(res.menu_png, cc.rect(252, 33, 126, 33));
            var aboutDisabled = new Sprite(res.menu_png, cc.rect(252, 33 * 2, 126, 33));
            var flare = new Sprite(res.flare_jpg);
            this.addChild(flare, 15, 10);
            flare.visible = false;
            var newGame = new mItems.MenuItemSprite(newGameNormal, newGameSelected, newGameDisabled, function () {
                this.onButtonEffect();
                //this.onNewGame();
                flareEffect(flare, this, this.onNewGame);
            }.bind(this));
            var gameSettings = new mItems.MenuItemSprite(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this.onSettings, this);
            var about = new mItems.MenuItemSprite(aboutNormal, aboutSelected, aboutDisabled, this.onAbout, this);

            var menu = new Menu(newGame, gameSettings, about);
            menu.alignItemsVerticallyWithPadding(10);
            this.addChild(menu, 1, 2);
            menu.x = winSize.width / 2;
            menu.y = winSize.height / 2 - 80;
            this.schedule(this.update, 0.1);

            this._ship = new Sprite("#ship01.png");
            this.addChild(this._ship, 0, 4);
            this._ship.x = Math.random() * winSize.width;
            this._ship.y = 0;
            this._ship.runAction(actions.moveBy(2, cc.p(Math.random() * winSize.width, this._ship.y + winSize.height + 100)));

            if (MW.SOUND) {
                audioEngine.setMusicVolume(0.7);
                audioEngine.playMusic(res.mainMainMusic_mp3, true);
            }

            return true;
        },
        onNewGame:function (pSender) {
            //load resources
            LoaderScene.preload(res_game, function () {
                audioEngine.stopMusic();
                audioEngine.stopAllEffects();
                var scene = new Scene();
                GameLayer = require("game/GameLayer");
                GameControlMenu = require("game/GameControlMenu");
                scene.addChild(new GameLayer());
                scene.addChild(new GameControlMenu());
                cc.director.runScene(new cc.TransitionFade(1.2, scene));
            }, this);
        },
        onSettings:function (pSender) {
            this.onButtonEffect();
            var scene = new Scene();
            SettingsLayer = require("game/SettingsLayer");
            scene.addChild(new SettingsLayer());
            cc.director.runScene(new cc.TransitionFade(1.2, scene));
        },
        onAbout:function (pSender) {
            this.onButtonEffect();
            var scene = new Scene();
            AboutLayer = require("game/AboutLayer");
            scene.addChild(new AboutLayer());
            cc.director.runScene(new cc.TransitionFade(1.2, scene));
        },
        update:function () {
            if (this._ship.y > 480) {
                this._ship.x = Math.random() * winSize.width;
                this._ship.y = 10;
                this._ship.runAction(actions.moveBy(
                    parseInt(5 * Math.random(), 10),
                    cc.p(Math.random() * winSize.width, this._ship.y + 480)
                ));
            }
        },
        onButtonEffect:function(){
            if (MW.SOUND) {
                var s = audioEngine.playEffect(res.buttonEffet_mp3);
            }
        }
    });

    SysMenu.scene = function () {
        var scene = new Scene();
        var layer = new SysMenu();
        scene.addChild(layer);
        return scene;
    };

    return SysMenu;

});