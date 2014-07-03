
var SysMenu = cc.Layer.extend({
    _ship:null,

    init:function () {
        var bRet = false;
        if (this._super()) {
            cc.spriteFrameCache.addSpriteFrames(res.textureTransparentPack_plist);

            winSize = cc.director.getWinSize();
            var sp = cc.Sprite.create(res.loading_png);
            sp.anchorX = 0;
	        sp.anchorY = 0;
            this.addChild(sp, 0, 1);

            var logo = cc.Sprite.create(res.logo_png);
            logo.attr({
	            anchorX: 0,
	            anchorY: 0,
	            x: 0,
	            y: 250
            });
            this.addChild(logo, 10, 1);

            var newGameNormal = cc.Sprite.create(res.menu_png, cc.rect(0, 0, 126, 33));
            var newGameSelected = cc.Sprite.create(res.menu_png, cc.rect(0, 33, 126, 33));
            var newGameDisabled = cc.Sprite.create(res.menu_png, cc.rect(0, 33 * 2, 126, 33));

            var gameSettingsNormal = cc.Sprite.create(res.menu_png, cc.rect(126, 0, 126, 33));
            var gameSettingsSelected = cc.Sprite.create(res.menu_png, cc.rect(126, 33, 126, 33));
            var gameSettingsDisabled = cc.Sprite.create(res.menu_png, cc.rect(126, 33 * 2, 126, 33));

            var aboutNormal = cc.Sprite.create(res.menu_png, cc.rect(252, 0, 126, 33));
            var aboutSelected = cc.Sprite.create(res.menu_png, cc.rect(252, 33, 126, 33));
            var aboutDisabled = cc.Sprite.create(res.menu_png, cc.rect(252, 33 * 2, 126, 33));
            var flare = cc.Sprite.create(res.flare_jpg);
            this.addChild(flare, 15, 10);
            flare.visible = false;
            var newGame = cc.MenuItemSprite.create(newGameNormal, newGameSelected, newGameDisabled, function () {
                this.onButtonEffect();
                //this.onNewGame();
                flareEffect(flare, this, this.onNewGame);
            }.bind(this));
            var gameSettings = cc.MenuItemSprite.create(gameSettingsNormal, gameSettingsSelected, gameSettingsDisabled, this.onSettings, this);
            var about = cc.MenuItemSprite.create(aboutNormal, aboutSelected, aboutDisabled, this.onAbout, this);

            var menu = cc.Menu.create(newGame, gameSettings, about);
            menu.alignItemsVerticallyWithPadding(10);
            this.addChild(menu, 1, 2);
            menu.x = winSize.width / 2;
	        menu.y = winSize.height / 2 - 80;
            this.schedule(this.update, 0.1);

            this._ship = cc.Sprite.create("#ship01.png");
            this.addChild(this._ship, 0, 4);
            this._ship.x = Math.random() * winSize.width;
	        this._ship.y = 0;
            this._ship.runAction(cc.MoveBy.create(2, cc.p(Math.random() * winSize.width, this._ship.y + winSize.height + 100)));

            if (MW.SOUND) {
                cc.audioEngine.setMusicVolume(0.7);
                cc.audioEngine.playMusic(res.mainMainMusic_mp3, true);
            }

            bRet = true;
        }
        return bRet;
    },
    onNewGame:function (pSender) {
        //load resources
        cc.LoaderScene.preload(g_maingame, function () {
            cc.audioEngine.stopMusic();
            cc.audioEngine.stopAllEffects();
            var scene = cc.Scene.create();
            scene.addChild(GameLayer.create());
            scene.addChild(GameControlMenu.create());
	        cc.director.runScene(cc.TransitionFade.create(1.2, scene));
        }, this);
    },
    onSettings:function (pSender) {
        this.onButtonEffect();
        var scene = cc.Scene.create();
        scene.addChild(SettingsLayer.create());
	    cc.director.runScene(cc.TransitionFade.create(1.2, scene));
    },
    onAbout:function (pSender) {
        this.onButtonEffect();
        var scene = cc.Scene.create();
        scene.addChild(AboutLayer.create());
	    cc.director.runScene(cc.TransitionFade.create(1.2, scene));
    },
    update:function () {
        if (this._ship.y > 480) {
            this._ship.x = Math.random() * winSize.width;
	        this._ship.y = 10;
            this._ship.runAction( cc.MoveBy.create(
                parseInt(5 * Math.random(), 10),
                cc.p(Math.random() * winSize.width, this._ship.y + 480)));
        }
    },
    onButtonEffect:function(){
        if (MW.SOUND) {
            var s = cc.audioEngine.playEffect(res.buttonEffet_mp3);
        }
    }
});

SysMenu.create = function () {
    var sg = new SysMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

SysMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = SysMenu.create();
    scene.addChild(layer);
    return scene;
};
