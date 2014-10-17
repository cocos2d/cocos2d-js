define([
    "require",
    "core", "Scene", "Sprite", "layers", "Menu", "menuitems", "audio",
    "game/config/GameConfig",
    "game/Effect",
    "game/GameControlMenu"
], function(require, cc, Scene, Sprite, ls, Menu, mItems, audioEngine, MW, flareEffect, GameControlMenu) {

    var GameOver = ls.Layer.extend({
        _ship:null,
        _lbScore:0,

        ctor:function(){
            this._super();
            this.init();
        },
        init:function () {
            var sp = new Sprite(res.loading_png);
            sp.anchorX = 0;
            sp.anchorY = 0;
            this.addChild(sp, 0, 1);

            var logo = new Sprite(res.gameOver_png);
            logo.attr({
                anchorX: 0,
                anchorY: 0,
                x: 0,
                y: 300
            });
            this.addChild(logo,10,1);

            var playAgainNormal = new Sprite(res.menu_png, cc.rect(378, 0, 126, 33));
            var playAgainSelected = new Sprite(res.menu_png, cc.rect(378, 33, 126, 33));
            var playAgainDisabled = new Sprite(res.menu_png, cc.rect(378, 33 * 2, 126, 33));

            var cocos2dhtml5 = new Sprite(res.cocos2d_html5_png);
            cocos2dhtml5.x = 160;
            cocos2dhtml5.y = 150;
            this.addChild(cocos2dhtml5,10);
            var flare = new Sprite(res.flare_jpg);
            this.addChild(flare);
            flare.visible = false;
            var playAgain = new mItems.MenuItemSprite(playAgainNormal, playAgainSelected, playAgainDisabled, function(){
                flareEffect(flare,this,this.onPlayAgain);
            }.bind(this) );

            var menu = new Menu(playAgain);
            this.addChild(menu, 1, 2);
            menu.x = winSize.width / 2;
            menu.y = 220;

            var lbScore = new LabelTTF("Your Score:"+MW.SCORE,"Arial Bold",16);
            lbScore.x = 160;
            lbScore.y = 280;
            lbScore.color = cc.color(250,179,0);
            this.addChild(lbScore,10);

            var b1 = new LabelTTF("Download Cocos2d-JS","Arial",14);
            var b2 = new LabelTTF("Github Repository","Arial",14);
            var menu1 = new mItems.MenuItemLabel(b1,function(){
                window.location.href = "http://www.cocos2d-x.org/download";
            });
            var menu2 = new mItems.MenuItemLabel(b2,function(){
                window.location.href = "https://github.com/cocos2d/cocos2d-js";
            });
            var cocos2dMenu = new Menu(menu1,menu2);
            cocos2dMenu.alignItemsVerticallyWithPadding(10);
            cocos2dMenu.x = 160;
            cocos2dMenu.y = 80;
            this.addChild(cocos2dMenu);


            if(MW.SOUND){
                audioEngine.playMusic(res.mainMainMusic_mp3);
            }

            return true;
        },
        onPlayAgain:function (pSender) {
            audioEngine.stopMusic();
            audioEngine.stopAllEffects();
            var scene = new Scene();
            var GameLayer = require("game/GameLayer");
            scene.addChild(new GameLayer());
            scene.addChild(new GameControlMenu());
            cc.director.runScene(new cc.TransitionFade(1.2,scene));
        }
    });

    GameOver.scene = function () {
        var scene = new Scene();
        var layer = new GameOver();
        scene.addChild(layer);
        return scene;
    };

    return GameOver;

});