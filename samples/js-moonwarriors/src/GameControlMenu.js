var GameControlMenu = cc.Layer.extend({

    init:function () {
        var bRet = false;
        if (this._super()) {
            cc.MenuItemFont.setFontSize(18);
            cc.MenuItemFont.setFontName("Arial");
            var systemMenu = cc.MenuItemFont.create("Main Menu", this.onSysMenu);
            var menu = cc.Menu.create(systemMenu);
            menu.x = 0;
	        menu.y = 0;
            systemMenu.attr({
	            x: winSize.width-95,
	            y: 5,
	            anchorX: 0,
                anchorY: 0
            });
            this.addChild(menu, 1, 2);
            bRet = true;
        }

        return bRet;
    },
    onSysMenu:function (pSender) {
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        var scene = cc.Scene.create();
        scene.addChild(SysMenu.create());
	    cc.director.runScene(cc.TransitionFade.create(1.2,scene));
    }
});

GameControlMenu.create = function () {
    var sg = new GameControlMenu();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
