var Explosion = cc.Sprite.extend({
    tmpWidth:0,
    tmpHeight:0,
    active:true,
    animation:null,
    ctor:function () {
        var pFrame = cc.spriteFrameCache.getSpriteFrame("explosion_01.png");
        this._super(pFrame);
        this.setBlendFunc(cc.SRC_ALPHA, cc.ONE);

        this.tmpWidth = this.width;
        this.tmpHeight = this.height;
        this.animation = cc.animationCache.getAnimation("Explosion");
    },
    play:function(){
        //return;
        this.runAction(cc.Sequence.create(
            cc.Animate.create(this.animation),
            cc.CallFunc.create(this.destroy, this)
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
        var frame = cc.spriteFrameCache.getSpriteFrame(str);
        animFrames.push(frame);
    }
    var animation = cc.Animation.create(animFrames, 0.04);
    cc.animationCache.addAnimation(animation, "Explosion");
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
    g_sharedGameLayer.addExplosions(explosion);
    MW.CONTAINER.EXPLOSIONS.push(explosion);
    return explosion;
};

Explosion.preSet = function () {
    var explosion = null;
    for (var i = 0; i < 6; i++) {
        explosion = Explosion.create();
        explosion.visible = false;
        explosion.active = false;
    }
};
