var GameOver = cc.Layer.extend({
    _ship:null,
    _lbScore:0,

    init:function () {
        var bRet = false;
        if (this._super()) {
            var sp = cc.Sprite.create(res.loading_png);
            sp.anchorX = 0;
	        sp.anchorY = 0;
            this.addChild(sp, 0, 1);

            var logo = cc.Sprite.create(res.gameOver_png);
            logo.attr({
	            anchorX: 0,
                anchorY: 0,
	            x: 0,
	            y: 300
            });
            this.addChild(logo,10,1);

            var playAgainNormal = cc.Sprite.create(res.menu_png, cc.rect(378, 0, 126, 33));
            var playAgainSelected = cc.Sprite.create(res.menu_png, cc.rect(378, 33, 126, 33));
            var playAgainDisabled = cc.Sprite.create(res.menu_png, cc.rect(378, 33 * 2, 126, 33));

            var cocos2dhtml5 = cc.Sprite.create(res.cocos2d_html5_png);
            cocos2dhtml5.x = 160;
	        cocos2dhtml5.y = 150;
            this.addChild(cocos2dhtml5,10);
            var flare = cc.Sprite.create(res.flare_jpg);
            this.addChild(flare);
            flare.visible = false;
            var playAgain = cc.MenuItemSprite.create(playAgainNormal, playAgainSelected, playAgainDisabled, function(){
                flareEffect(flare,this,this.onPlayAgain);
            }.bind(this) );

            var menu = cc.Menu.create(playAgain);
            this.addChild(menu, 1, 2);
            menu.x = winSize.width / 2;
	        menu.y = 220;

            var lbScore = cc.LabelTTF.create("Your Score:"+MW.SCORE,"Arial Bold",16);
            lbScore.x = 160;
	        lbScore.y = 280;
            lbScore.color = cc.color(250,179,0);
            this.addChild(lbScore,10);

            var b1 = cc.LabelTTF.create("Download Cocos2d-html5","Arial",14);
            var b2 = cc.LabelTTF.create("Download This Sample","Arial",14);
            var menu1 = cc.MenuItemLabel.create(b1,function(){
                window.location.href = "http://www.cocos2d-x.org/projects/cocos2d-x/wiki/Cocos2d-html5";
            });
            var menu2 = cc.MenuItemLabel.create(b2,function(){
                window.location.href = "https://github.com/ShengxiangChen/MoonWarriors";
            });
            var cocos2dMenu = cc.Menu.create(menu1,menu2);
            cocos2dMenu.alignItemsVerticallyWithPadding(10);
            cocos2dMenu.x = 160;
	        cocos2dMenu.y = 80;
            this.addChild(cocos2dMenu);


            if(MW.SOUND){
	            cc.audioEngine.playMusic(res.mainMainMusic_mp3);
            }

            bRet = true;
        }
        return bRet;
    },
    onPlayAgain:function (pSender) {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        var scene = cc.Scene.create();
        scene.addChild(GameLayer.create());
        scene.addChild(GameControlMenu.create());
	    cc.director.runScene(cc.TransitionFade.create(1.2,scene));
    }
});

GameOver.create = function () {
    var sg = new GameOver();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};

GameOver.scene = function () {
    var scene = cc.Scene.create();
    var layer = GameOver.create();
    scene.addChild(layer);
    return scene;
};
