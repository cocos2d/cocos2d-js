define([
    "require",
    "core",
    "Scene",
    "layers",
    "Menu",
    "menuitems",
    "audio",
    "game/SysMenu"
], function(require, cc, Scene, ls, Menu, mItems, audioEngine, SysMenu) {

    var GameControlMenu = ls.Layer.extend({
        ctor:function(){
            this._super();
            this.init();
        },
        init:function () {
            mItems.MenuItemFont.setFontSize(18);
            mItems.MenuItemFont.setFontName("Arial");
            var systemMenu = new mItems.MenuItemFont("Main Menu", this.onSysMenu);
            var menu = new Menu(systemMenu);
            menu.x = 0;
            menu.y = 0;
            systemMenu.attr({
                x: winSize.width-95,
                y: 5,
                anchorX: 0,
                anchorY: 0
            });
            this.addChild(menu, 1, 2);

            return true;
        },
        onSysMenu:function (pSender) {
            audioEngine.stopMusic();
            audioEngine.stopAllEffects();
            var scene = new Scene();
            SysMenu = require("game/SysMenu");
            scene.addChild(new SysMenu());
            cc.director.runScene(new cc.TransitionFade(1.2,scene));
        }
    });

    return GameControlMenu;

});