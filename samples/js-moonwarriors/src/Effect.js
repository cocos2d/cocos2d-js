var flareEffect = function (flare,target, callback) {
    flare.stopAllActions();
    flare.setBlendFunc(cc.SRC_ALPHA, cc.ONE);
    flare.attr({
	    x: -30,
	    y: 297,
	    visible: true,
	    opacity: 0,
		rotation: -120,
		scale: 0.2
	});

    var opacityAnim = cc.fadeTo(0.5, 255);
    var opacDim = cc.fadeTo(1, 0);
    var biggerEase = cc.scaleBy(0.7, 1.2, 1.2).easing(cc.easeSineOut());
    var easeMove = cc.moveBy(0.5, cc.p(328, 0)).easing(cc.easeSineOut());
    var rotateEase = cc.rotateBy(2.5, 90).easing(cc.easeExponentialOut());
    var bigger = cc.scaleTo(0.5, 1);

    var onComplete = cc.callFunc(callback, target);
    var killflare = cc.callFunc(function () {
        this.parent.removeChild(this,true);
    }, flare);
    flare.runAction(cc.sequence(opacityAnim, biggerEase, opacDim, killflare, onComplete));
    flare.runAction(easeMove);
    flare.runAction(rotateEase);
    flare.runAction(bigger);
};

var removeFromParent = function( sprite )
{
    sprite.removeFromParent();
};

var spark = function (x, y, parent, scale, duration) {
    scale = scale || 0.3;
    duration = duration || 0.5;

    var one = new cc.Sprite("#explode1.png");
    var two = new cc.Sprite("#explode2.png");
    var three = new cc.Sprite("#explode3.png");

    one.attr({
	    x: x,
	    y: y,
	    scale: scale
    });
	two.attr({
		x: x,
		y: y,
		scale: scale
	});
	three.attr({
		x: x,
		y: y,
		scale: scale,
		rotation: Math.random() * 360
	});

    //parent.addChild(one);
    parent.addSpark(two);
    parent.addSpark(three);

    var left = cc.rotateBy(duration, -45);
    var right = cc.rotateBy(duration, 45);
    var scaleBy = cc.scaleBy(duration, 3, 3);
    var fadeOut = cc.fadeOut(duration);
    var remove = cc.callFunc(removeFromParent, this);
    var seq = cc.sequence( fadeOut, remove );

    one.runAction(left);
    two.runAction(right);

    one.runAction(scaleBy);
    two.runAction(scaleBy.clone());
    three.runAction(scaleBy.clone());

    one.runAction(seq);
    two.runAction(seq.clone() );
    three.runAction(seq.clone());
};

