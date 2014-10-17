
define([
    "require",
    "core", "Scene", "layers", "Sprite", "Menu", "menuitems", "LabelTTF", "audio",
    "game/config/GameConfig",
    "game/SysMenu",
], function(require, cc, Scene, ls, Sprite, Menu, mItems, LabelTTF, audioEngine, MW, SysMenu) {

    var SettingsLayer = ls.Layer.extend({
        ctor:function(){
            this._super();
            this.init();
        },
        init:function () {
            var sp = new Sprite(res.loading_png);
            sp.anchorX = 0;
            sp.anchorY = 0;
            this.addChild(sp, 0, 1);

            var cacheImage = cc.textureCache.addImage(res.menuTitle_png);
            var title = new Sprite(cacheImage, cc.rect(0, 0, 134, 34));
            title.x = winSize.width / 2
            title.y = winSize.height - 120;
            this.addChild(title);


            MenuItemFont.setFontName("Arial");
            mItems.MenuItemFont.setFontSize(18);
            var title1 = new mItems.MenuItemFont("Sound");
            title1.setEnabled(false);

            mItems.MenuItemFont.setFontName("Arial");
            mItems.MenuItemFont.setFontSize(26);
            var item1 = new mItems.MenuItemToggle(
                new mItems.MenuItemFont("On"),
                new mItems.MenuItemFont("Off") );
            item1.setCallback(this.onSoundControl );
            var state = MW.SOUND ? 0 : 1;
            item1.setSelectedIndex(state);

            mItems.MenuItemFont.setFontName("Arial");
            mItems.MenuItemFont.setFontSize(18);
            var title2 = new mItems.MenuItemFont("Mode");
            title2.setEnabled(false);

            mItems.MenuItemFont.setFontName("Arial");
            mItems.MenuItemFont.setFontSize(26);
            var item2 = new mItems.MenuItemToggle(
                new mItems.MenuItemFont("Easy"),
                new mItems.MenuItemFont("Normal"),
                new mItems.MenuItemFont("Hard"));
            item2.setCallback( this.onModeControl );


            mItems.MenuItemFont.setFontName("Arial");
            mItems.MenuItemFont.setFontSize(26);
            var label = new LabelTTF("Go back", "Arial", 20);
            var back = new mItems.MenuItemLabel(label, this.onBackCallback);
            back.scale = 0.8;

            var menu = new Menu(title1, title2, item1, item2, back);
            menu.alignItemsInColumns(2, 2, 1);
            this.addChild(menu);

            back.y -= 50;

            return true;
        },
        onBackCallback:function (pSender) {
            var scene = new Scene();
            SysMenu = require("game/SysMenu");
            scene.addChild(new SysMenu());
            cc.director.runScene(new cc.TransitionFade(1.2, scene));
        },
        onSoundControl:function(){
            MW.SOUND = !MW.SOUND;
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

    return SettingsLayer;

});
