var GameOver = cc.Layer.extend({
    _ship:null,
    _lbScore:0,

    ctor:function(){
        this._super();
        this.init();
    },
    init:function () {
        var sp = new cc.Sprite(res.loading_png);
        sp.anchorX = 0;
        sp.anchorY = 0;
        this.addChild(sp, 0, 1);

        var logo = new cc.Sprite(res.gameOver_png);
        logo.attr({
            anchorX: 0,
            anchorY: 0,
            x: 0,
            y: 300
        });
        this.addChild(logo,10,1);

        var playAgainNormal = new cc.Sprite(res.menu_png, cc.rect(378, 0, 126, 33));
        var playAgainSelected = new cc.Sprite(res.menu_png, cc.rect(378, 33, 126, 33));
        var playAgainDisabled = new cc.Sprite(res.menu_png, cc.rect(378, 33 * 2, 126, 33));

        var cocos2dhtml5 = new cc.Sprite(res.cocos2d_html5_png);
        cocos2dhtml5.x = 160;
        cocos2dhtml5.y = 150;
        this.addChild(cocos2dhtml5,10);
        var flare = new cc.Sprite(res.flare_jpg);
        this.addChild(flare);
        flare.visible = false;
        var playAgain = new cc.MenuItemSprite(playAgainNormal, playAgainSelected, playAgainDisabled, function(){
            flareEffect(flare,this,this.onPlayAgain);
        }.bind(this) );

        var menu = new cc.Menu(playAgain);
        this.addChild(menu, 1, 2);
        menu.x = winSize.width / 2;
        menu.y = 220;

        var lbScore = new cc.LabelTTF("Your Score:"+MW.SCORE,"Arial Bold",16);
        lbScore.x = 160;
        lbScore.y = 280;
        lbScore.color = cc.color(250,179,0);
        this.addChild(lbScore,10);

        var b1 = new cc.LabelTTF("Download Cocos2d-JS","Arial",14);
        var b2 = new cc.LabelTTF("Github Repository","Arial",14);
        var menu1 = new cc.MenuItemLabel(b1,function(){
            window.location.href = "http://www.cocos2d-x.org/download";
        });
        var menu2 = new cc.MenuItemLabel(b2,function(){
            window.location.href = "https://github.com/cocos2d/cocos2d-js";
        });
        var cocos2dMenu = new cc.Menu(menu1,menu2);
        cocos2dMenu.alignItemsVerticallyWithPadding(10);
        cocos2dMenu.x = 160;
        cocos2dMenu.y = 80;
        this.addChild(cocos2dMenu);


        if(MW.SOUND){
            cc.audioEngine.playMusic(res.mainMainMusic_mp3);
        }

        return true;
    },
    onPlayAgain:function (pSender) {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        var scene = new cc.Scene();
        scene.addChild(new GameLayer());
        scene.addChild(new GameControlMenu());
	    cc.director.runScene(new cc.TransitionFade(1.2,scene));
    }
});

GameOver.scene = function () {
    var scene = new cc.Scene();
    var layer = new GameOver();
    scene.addChild(layer);
    return scene;
};
