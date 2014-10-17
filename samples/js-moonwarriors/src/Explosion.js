define([
    "require", "core", "Sprite",
    "cocos2dPath/core/sprites/CCSpriteFrameCache",
    "cocos2dPath/core/sprites/CCAnimation",
    "cocos2dPath/core/sprites/CCAnimationCache",
    "actions",
    "game/config/GameConfig"
], function(require, cc, Sprite, spriteFrameCache, Animation, animationCache, actions, MW) {
    var GameLayer = null;
    var Explosion = cc.Sprite.extend({
        tmpWidth:0,
        tmpHeight:0,
        active:true,
        animation:null,
        ctor:function () {
            var pFrame = spriteFrameCache.getSpriteFrame("explosion_01.png");
            this._super(pFrame);
            this.setBlendFunc(cc.SRC_ALPHA, cc.ONE);

            this.tmpWidth = this.width;
            this.tmpHeight = this.height;
            this.animation = animationCache.getAnimation("Explosion");
        },
        play:function(){
            //return;
            this.runAction(actions.sequence(
                actions.animate(this.animation),
                actions.callFunc(this.destroy, this)
            ));
        },
        destroy:function () {
            this.visible = false;
            this.active = false;
        }
    });

    Explosion.sharedExplosion = function () {
        var animFrames = [];
        var str = "";
        for (var i = 1; i < 35; i++) {
            str = "explosion_" + (i < 10 ? ("0" + i) : i) + ".png";
            var frame = spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }
        var animation = new Animation(animFrames, 0.04);
        animationCache.addAnimation(animation, "Explosion");
    };

    Explosion.getOrCreateExplosion = function () {
        var selChild =null;
        for (var j = 0; j < MW.CONTAINER.EXPLOSIONS.length; j++) {
            var selChild = MW.CONTAINER.EXPLOSIONS[j];
            if (selChild.active == false) {
                selChild.visible = true;
                selChild.active = true;
                selChild.play();
                return selChild;
            }
        }
        selChild = Explosion.create();
        selChild.play();
        return selChild;
    };
    Explosion.create = function () {
        var explosion = new Explosion();
        GameLayer = require("game/GameLayer");
        GameLayer.sharedGameLayer.addExplosions(explosion);
        MW.CONTAINER.EXPLOSIONS.push(explosion);
        return explosion;
    };

    Explosion.preSet = function (gameLayer) {
        GameLayer = gameLayer
        var explosion = null;
        for (var i = 0; i < 6; i++) {
            explosion = Explosion.create();
            explosion.visible = false;
            explosion.active = false;
        }
    };

    return Explosion;
});
