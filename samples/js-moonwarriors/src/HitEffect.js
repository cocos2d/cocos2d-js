var HitEffect = cc.Sprite.extend({
    active:true,
    ctor:function () {
        this._super();

        this.setSpriteFrame("hit.png");
        this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
    },
    reset:function (pos, rotation, scale) {
        this.setPosition(pos);
        this.setRotation(rotation);
        this.setScale(scale);
        this.runAction(cc.ScaleBy.create(0.3, 2, 2));
        this.runAction(cc.Sequence.create(cc.FadeOut.create(0.3), cc.CallFunc.create(this.destroy, this)));
    },
    destroy:function () {
        this.setVisible(false);
        this.active = false;
    }
});

HitEffect.getOrCreateHitEffect = function (pos, rotation, scale) {
    var selChild = null;
    for (var j = 0; j < MW.CONTAINER.HITS.length; j++) {
        selChild = MW.CONTAINER.HITS[j];
        if (selChild.active == false) {
            selChild.setVisible(true);
            selChild.active = true;
            selChild.reset(pos, rotation, scale);
            return selChild;
        }
    }
    selChild = HitEffect.create(pos, rotation, scale);
    selChild.reset(pos, rotation, scale);
    return selChild;
};

HitEffect.create = function () {
    var hitEffect = new HitEffect();
    g_sharedGameLayer.addBulletHits(hitEffect, 9999);
    MW.CONTAINER.HITS.push(hitEffect);
    return hitEffect;
};

HitEffect.preSet = function () {
    var hitEffect = null;
    for (var i = 0; i < 10; i++) {
        hitEffect = HitEffect.create();
        hitEffect.setVisible(false);
        hitEffect.active = false;
    }
};
