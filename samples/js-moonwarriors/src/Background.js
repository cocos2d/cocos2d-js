define(["require", "core", "Sprite", "game/GameLayer", "game/config/GameConfig"], function(require, cc, Sprite, GameLayer, MW) {

    var BackSky = Sprite.extend({
        active:true,
        ctor:function () {
            this._super("#bg01.png");
            this.anchorX = 0;
            this.anchorY = 0;
        },
        destroy:function () {
            this.visible = false;
            this.active = false;
        }
    });

    BackSky.create = function () {
        var background = new BackSky();
        GameLayer.sharedGameLayer.addChild(background, -10);
        MW.CONTAINER.BACKSKYS.push(background);
        return background;
    };

    BackSky.getOrCreate = function () {
        var selChild = null;
        for (var j = 0; j < MW.CONTAINER.BACKSKYS.length; j++) {
            selChild = MW.CONTAINER.BACKSKYS[j];
            if (selChild.active == false) {
                selChild.visible = true;
                selChild.active = true;
                return selChild;
            }
        }
        selChild = BackSky.create();
        return selChild;
    };


    BackSky.preSet = function () {
        var background = null;
        for (var i = 0; i < 2; i++) {
            background = BackSky.create();
            background.visible = false;
            background.active = false;
        }
    };

    return BackSky;
});