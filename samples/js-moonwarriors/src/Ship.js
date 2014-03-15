var Ship = cc.Sprite.extend({
    speed:220,
    bulletSpeed:MW.BULLET_SPEED.SHIP,
    HP:5,
    bulletTypeValue:1,
    bulletPowerValue:1,
    throwBombing:false,
    canBeAttack:true,
    isThrowingBomb:false,
    zOrder:3000,
    maxBulletPowerValue:4,
    appearPosition:cc.p(160, 60),
    _hurtColorLife:0,
    active:true,
    bornSprite:null,
    ctor:function () {
        this._super("#ship01.png");
        this.tag = this.zOrder;
        this.x = this.appearPosition.x;
	    this.y = this.appearPosition.y;

        // set frame
        var frame0 = cc.spriteFrameCache.getSpriteFrame("ship01.png");
        var frame1 = cc.spriteFrameCache.getSpriteFrame("ship02.png");

        var animFrames = [];
        animFrames.push(frame0);
        animFrames.push(frame1);

        // ship animate
        var animation = cc.Animation.create(animFrames, 0.1);
        var animate = cc.Animate.create(animation);
        this.runAction(cc.RepeatForever.create(animate));
        this.schedule(this.shoot, 1 / 6);

        this.initBornSprite();
        this.born();
    },
    update:function (dt) {
        // Keys are only enabled on the browser
        if (!cc.sys.isNative) {
            if ((MW.KEYS[cc.KEY.w] || MW.KEYS[cc.KEY.up]) && this.y <= winSize.height) {
                this.y += dt * this.speed;
            }
            if ((MW.KEYS[cc.KEY.s] || MW.KEYS[cc.KEY.down]) && this.y >= 0) {
                this.y -= dt * this.speed;
            }
            if ((MW.KEYS[cc.KEY.a] || MW.KEYS[cc.KEY.left]) && this.x >= 0) {
                this.x -= dt * this.speed;
            }
            if ((MW.KEYS[cc.KEY.d] || MW.KEYS[cc.KEY.right]) && this.x <= winSize.width) {
                this.x += dt * this.speed;
            }
        }

        if (this.HP <= 0) {
            this.active = false;
            this.destroy();
        }
        this._timeTick += dt;
        if (this._timeTick > 0.1) {
            this._timeTick = 0;
            if (this._hurtColorLife > 0) {
                this._hurtColorLife--;
            }
        }
    },
    shoot:function (dt) {
        //this.shootEffect();
        var offset = 13;
        var a = Bullet.getOrCreateBullet(this.bulletSpeed, "W1.png", MW.ENEMY_ATTACK_MODE.NORMAL, 3000, MW.UNIT_TAG.PLAYER_BULLET);
        a.x = this.x + offset;
	    a.y = this.y + 3 + this.height * 0.3;

        var b = Bullet.getOrCreateBullet(this.bulletSpeed, "W1.png", MW.ENEMY_ATTACK_MODE.NORMAL, 3000, MW.UNIT_TAG.PLAYER_BULLET);
        b.x = this.x - offset;
	    b.y = this.y + 3 + this.height * 0.3;
    },
    destroy:function () {
        MW.LIFE--;

        var explosion = Explosion.getOrCreateExplosion();
        explosion.x = this.x;
	    explosion.y = this.y;

        if (MW.SOUND) {
	        cc.audioEngine.playEffect(res.shipDestroyEffect_mp3);
        }
    },
    hurt:function () {
        if (this.canBeAttack) {
            this._hurtColorLife = 2;
            this.HP--;
        }
    },
    collideRect:function (x, y) {
        var w = this.width, h = this.height;
        return cc.rect(x - w / 2, y - h / 2, w, h / 2);
    },
    initBornSprite:function () {
        this.bornSprite = cc.Sprite.create("#ship03.png");
        this.bornSprite.setBlendFunc(cc.SRC_ALPHA, cc.ONE);
        this.bornSprite.x = this.width / 2;
	    this.bornSprite.y = 12;
        this.bornSprite.visible = false;
        this.addChild(this.bornSprite, 3000, 99999);
    },
    born:function () {
        //revive effect
        this.canBeAttack = false;
        this.bornSprite.scale = 8;
        this.bornSprite.runAction(cc.ScaleTo.create(0.5, 1, 1));
        this.bornSprite.visible = true;
        var blinks = cc.Blink.create(3, 9);
        var makeBeAttack = cc.CallFunc.create(function (t) {
            t.canBeAttack = true;
            t.visible = true;
            t.bornSprite.visible = false;
        }.bind(this));
        this.runAction(cc.Sequence.create(cc.DelayTime.create(0.5), blinks, makeBeAttack));

        this.HP = 5;
        this._hurtColorLife = 0;
        this.active = true;
    }
});
