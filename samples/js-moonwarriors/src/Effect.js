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

    var opacityAnim = new cc.FadeTo(0.5, 255);
    var opacDim = new cc.FadeTo(1, 0);
    var biggeAnim = new cc.ScaleBy(0.7, 1.2, 1.2);
    var biggerEase = new cc.EaseSineOut(biggeAnim);
    var moveAnim = new cc.MoveBy(0.5, cc.p(328, 0));
    var easeMove = new cc.EaseSineOut(moveAnim);
    var rotateAnim = new cc.RotateBy(2.5, 90);
    var rotateEase = new cc.EaseExponentialOut(rotateAnim);
    var bigger = new cc.ScaleTo(0.5, 1);

    var onComplete = new cc.CallFunc(callback, target);
    var killflare = new cc.CallFunc(function () {
        this.parent.removeChild(this,true);
    }, flare);
    flare.runAction(new cc.Sequence(opacityAnim, biggerEase, opacDim, killflare, onComplete));
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

    var left = new cc.RotateBy(duration, -45);
    var right = new cc.RotateBy(duration, 45);
    var scaleBy = new cc.ScaleBy(duration, 3, 3);
    var fadeOut = new cc.FadeOut(duration);
    var remove = new cc.CallFunc(removeFromParent, this);
    var seq = new cc.Sequence( fadeOut, remove );

    one.runAction(left);
    two.runAction(right);

    one.runAction(scaleBy);
    two.runAction(scaleBy.clone());
    three.runAction(scaleBy.clone());

    one.runAction(seq);
    two.runAction(seq.clone() );
    three.runAction(seq.clone());
};

