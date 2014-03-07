var AboutLayer = cc.Layer.extend({
    init:function () {
        var bRet = false;
        if (this._super()) {
            var sp = cc.Sprite.create(res.loading_png);
            sp.anchorX = 0;
	        sp.anchorY = 0;
            this.addChild(sp, 0, 1);

            var cacheImage = cc.textureCache.addImage(res.menuTitle_png);
            var title = cc.Sprite.create(cacheImage, cc.rect(0, 36, 100, 34));
            title.x = winSize.width / 2;
	        title.y = winSize.height - 60;
            this.addChild(title);

            // There is a bug in LabelTTF native. Apparently it fails with some unicode chars.
            var about = cc.LabelTTF.create("   This showcase utilizes many features from Cocos2d-html5 engine, including: Parallax background, tilemap, actions, ease, frame animation, schedule, Labels, keyboard Dispatcher, Scene Transition. \n    Art and audio is copyrighted by Enigmata Genus Revenge, you may not use any copyrigted material without permission. This showcase is licensed under GPL. \n \n Programmer: \n Shengxiang Chen (陈升想) \n Dingping Lv (吕定平) \n Effects animation: Hao Wu(吴昊)\n Quality Assurance:  Sean Lin(林顺)", "Arial", 14, cc.size(winSize.width * 0.85, 320), cc.TEXT_ALIGNMENT_LEFT );
            about.attr({
	            x: winSize.width / 2,
	            y: winSize.height/2 -20,
	            anchorX: 0.5,
                anchorY: 0.5
            });
            this.addChild(about);

            var label = cc.LabelTTF.create("Go back", "Arial", 14);
            var back = cc.MenuItemLabel.create(label, this.onBackCallback);
            var menu = cc.Menu.create(back);
            menu.x = winSize.width / 2;
	        menu.y = 40;
            this.addChild(menu);
            bRet = true;
        }

        return bRet;
    },
    onBackCallback:function (pSender) {
        var scene = cc.Scene.create();
        scene.addChild(SysMenu.create());
	    cc.director.runScene(cc.TransitionFade.create(1.2, scene));
    }
});

AboutLayer.create = function () {
    var sg = new AboutLayer();
    if (sg && sg.init()) {
        return sg;
    }
    return null;
};
