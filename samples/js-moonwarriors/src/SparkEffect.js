var SparkEffect = cc.Class.extend({
    active:true,
    spark1:null,
    spark2:null,
    scale:1.2,
    duration:0.7,
    ctor:function () {
        this.spark1 = cc.Sprite.createWithSpriteFrameName("explode2.png");
        this.spark1.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
        this.spark2 = cc.Sprite.createWithSpriteFrameName("explode3.png");
        this.spark2.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
    },
    reset:function (pos) {
        this.spark1.setPosition(pos);
        this.spark2.setPosition(pos);

        this.spark1.setScale(this.scale);
        this.spark2.setScale(this.scale);
        this.spark2.setRotation(Math.random() * 360);

        var right = cc.RotateBy.create(this.duration, 45);
        var scaleBy = cc.ScaleBy.create(this.duration, 3, 3);
        var seq = cc.Sequence.create(cc.FadeOut.create(this.duration), cc.CallFunc.create(this.destroy, this));

        this.spark1.runAction(right);
        this.spark1.runAction(scaleBy);
        this.spark1.runAction(seq);

        this.spark2.runAction(scaleBy.clone());
        this.spark2.runAction(seq.clone());
    },
    destroy:function () {
        this.active = false;
        this.spark1.setVisible(false);
        this.spark2.setVisible(false);
    }
});

SparkEffect.getOrCreateSparkEffect = function (pos) {
    var selChild = null;
    for (var j = 0; j < MW.CONTAINER.SPARKS.length; j++) {
        selChild = MW.CONTAINER.SPARKS[j];
        if (selChild.active == false) {
            selChild.active = true;
            selChild.spark1.setVisible(true);
            selChild.spark2.setVisible(true);
            selChild.reset(pos);
            return selChild;
        }
    }
    var spark = SparkEffect.create();
    spark.reset(pos);
    return spark;
};

SparkEffect.create = function () {
    var sparkEffect = new SparkEffect();
    g_sharedGameLayer.addSpark(sparkEffect.spark1);
    g_sharedGameLayer.addSpark(sparkEffect.spark2);
    MW.CONTAINER.SPARKS.push(sparkEffect);
    return sparkEffect;
};

SparkEffect.preSet = function () {
    var sparkEffect = null;
    for (var i = 0; i < 6; i++) {
        sparkEffect = SparkEffect.create();
        sparkEffect.active = false;
        sparkEffect.spark1.setVisible(false);
        sparkEffect.spark2.setVisible(false);
    }
};
