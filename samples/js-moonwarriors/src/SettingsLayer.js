var SettingsLayer = cc.Layer.extend({
    init:function () {
        var bRet = false;
        if (this._super()) {
            var sp = cc.Sprite.create(res.loading_png);
            sp.anchorX = 0;
	        sp.anchorY = 0;
            this.addChild(sp, 0, 1);

            var cacheImage = cc.textureCache.addImage(res.menuTitle_png);
            var title = cc.Sprite.create(cacheImage, cc.rect(0, 0, 134, 34));
            title.x = winSize.width / 2
	        title.y = winSize.height - 120;
            this.addChild(title);


            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(18);
            var title1 = cc.MenuItemFont.create("Sound");
            title1.setEnabled(false);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var item1 = cc.MenuItemToggle.create(
                cc.MenuItemFont.create("On"),
                cc.MenuItemFont.create("Off") );
            item1.setCallback(this.onSoundControl );
            var state = MW.SOUND ? 0 : 1;
            item1.setSelectedIndex(state);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(18);
            var title2 = cc.MenuItemFont.create("Mode");
            title2.setEnabled(false);

            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var item2 = cc.MenuItemToggle.create(
                cc.MenuItemFont.create("Easy"),
                cc.MenuItemFont.create("Normal"),
                cc.MenuItemFont.create("Hard"));
            item2.setCallback( this.onModeControl );


            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(26);
            var label = cc.LabelTTF.create("Go back", "Arial", 20);
            var back = cc.MenuItemLabel.create(label, this.onBackCallback);
            back.scale = 0.8;

            var menu = cc.Menu.create(title1, title2, item1, item2, back);
            menu.alignItemsInColumns(2, 2, 1);
            this.addChild(menu);

            back.y -= 50;

            bRet = true;
        }

        return bRet;
    },
    onBackCallback:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(SysMenu.create());
	    cc.director.runScene(cc.TransitionFade.create(1.2, scene));
    },
    onSoundControl:function(){
        MW.SOUND = !MW.SOUND;
        var audioEngine = cc.audioEngine;
        if(MW.SOUND){
            audioEngine.playMusic(res.mainMainMusic_mp3);
        }
        else{
            audioEngine.stopMusic();
	        audioEngine.stopAllEffects();
        }
    },
    onModeControl:function(){
    }
});

SettingsLayer.create = function () {
    var sg = new SettingsLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
