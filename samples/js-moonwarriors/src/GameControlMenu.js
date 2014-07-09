var GameControlMenu = cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function () {
        cc.MenuItemFont.setFontSize(18);
        cc.MenuItemFont.setFontName("Arial");
        var systemMenu = new cc.MenuItemFont("Main Menu", this.onSysMenu);
        var menu = new cc.Menu(systemMenu);
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
        cc.audioEngine.stopMusic();
        cc.audioEngine.stopAllEffects();
        var scene = new cc.Scene();
        scene.addChild(new SysMenu());
	    cc.director.runScene(new cc.TransitionFade(1.2,scene));
    }
});
