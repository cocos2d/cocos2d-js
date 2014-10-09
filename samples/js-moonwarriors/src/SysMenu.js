
var SysMenu = cc.Layer.extend({
    _ship:null,

    ctor:function () {
        this._super();
        this.init();
    },
    init:function () {
        cc.spriteFrameCache.addSpriteFrames(res.textureTransparentPack_plist);

        winSize = cc.director.getWinSize();
        var sp = new cc.Sprite(res.loading_png);
        sp.anchorX = 0;
        sp.anchorY = 0;
        this.addChild(sp, 0, 1);

        var logo = new cc.Sprite(res.logo_png);
        logo.attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: 250
        });
        this.addChild(logo, 10, 1);

        var newGameNormal = new cc.Sprite(res.menu_png, cc.rect(0, 0, 126, 33));
        var newGameSelected = new cc.Sprite(res.menu_png, cc.rect(0, 33, 126, 33));
        var newGameDisabled = new cc.Sprite(res.menu_png, cc.rect(0, 33 * 2, 126, 33));

        var gameSettingsNormal = new cc.Sprite(res.menu_png, cc.rect(126, 0, 126, 33));
        var gameSettingsSelected = new cc.Sprite(res.menu_png, cc.rect(126, 33, 126, 33));
        var gameSettingsDisabled = new cc.Sprite(res.menu_png, cc.rect(126, 33 * 2, 126, 33));

        var aboutNormal = new cc.Sprite(res.menu_png, cc.rect(252, 0, 126, 33));
        var aboutSelected = new cc.Sprite(res.menu_png, cc.rect(252, 33, 126, 33));
        var aboutDisabled = new cc.Sprite(res.menu_png, cc.rect(252, 33 * 2, 126, 33));
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

        var menu = new cc.Menu(newGame, gameSettings, about);
        menu.alignItemsVerticallyWithPadding(10);
        this.addChild(menu, 1, 2);
        menu.x = winSize.width / 2;
        menu.y = winSize.height / 2 - 80;
        this.schedule(this.update, 0.1);

        this._ship = new cc.Sprite("#ship01.png");
        this.addChild(this._ship, 0, 4);
        this._ship.x = Math.random() * winSize.width;
        this._ship.y = 0;
        this._ship.runAction(cc.moveBy(2, cc.p(Math.random() * winSize.width, this._ship.y + winSize.height + 100)));

        if (MW.SOUND) {
            cc.audioEngine.setMusicVolume(0.7);
            cc.audioEngine.playMusic(res.mainMainMusic_mp3, true);
        }

        return true;
    },
    onNewGame:function (pSender) {
        //load resources
        cc.LoaderScene.preload(g_maingame, function () {
            cc.audioEngine.stopMusic();
            cc.audioEngine.stopAllEffects();
            var scene = new cc.Scene();
            scene.addChild(new GameLayer());
            scene.addChild(new GameControlMenu());
	        cc.director.runScene(new cc.TransitionFade(1.2, scene));
        }, this);
    },
    onSettings:function (pSender) {
        this.onButtonEffect();
        var scene = new cc.Scene();
        scene.addChild(new SettingsLayer());
	    cc.director.runScene(new cc.TransitionFade(1.2, scene));
    },
    onAbout:function (pSender) {
        this.onButtonEffect();
        var scene = new cc.Scene();
        scene.addChild(new AboutLayer());
	    cc.director.runScene(new cc.TransitionFade(1.2, scene));
    },
    update:function () {
        if (this._ship.y > 480) {
            this._ship.x = Math.random() * winSize.width;
	        this._ship.y = 10;
            this._ship.runAction(cc.moveBy(
                parseInt(5 * Math.random(), 10),
                cc.p(Math.random() * winSize.width, this._ship.y + 480)
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
