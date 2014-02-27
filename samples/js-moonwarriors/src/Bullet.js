//bullet
var Bullet = cc.Sprite.extend({
    active:true,
    xVelocity:0,
    yVelocity:200,
    power:1,
    HP:1,
    moveType:null,
    zOrder:3000,
    attackMode:MW.ENEMY_MOVE_TYPE.NORMAL,
    parentType:MW.BULLET_TYPE.PLAYER,
    ctor:function (bulletSpeed, weaponType, attackMode) {
        this._super();

        this.yVelocity = -bulletSpeed;
        this.attackMode = attackMode;
        this.setSpriteFrame(weaponType);
        this.setBlendFunc(gl.SRC_ALPHA, gl.ONE);
    },
    update:function (dt) {
        var p = this.getPosition();
        this.setPosition(p.x - this.xVelocity * dt, p.y - this.yVelocity * dt);
        if (p.x < 0 || p.x > g_sharedGameLayer.screenRect.width || p.y < 0 || p.y > g_sharedGameLayer.screenRect.height || this.HP <= 0) {
            this.destroy();
        }
    },
    destroy:function () {
        var explode = HitEffect.getOrCreateHitEffect(this.getPosition(), Math.random() * 360, 0.75);
        this.active = false;
        this.setVisible(false);
    },
    hurt:function () {
        this.HP--;
    },
    collideRect:function (p) {
        return cc.rect(p.x - 3, p.y - 3, 6, 6);
    }
});

Bullet.getOrCreateBullet = function (bulletSpeed, weaponType, attackMode, zOrder, mode) {
    /**/
    var selChild = null;
    if (mode == MW.UNIT_TAG.PLAYER_BULLET) {
        for (var j = 0; j < MW.CONTAINER.PLAYER_BULLETS.length; j++) {
            selChild = MW.CONTAINER.PLAYER_BULLETS[j];
            if (selChild.active == false) {
                selChild.setVisible(true);
                selChild.HP = 1;
                selChild.active = true;
                return selChild;
            }
        }
    }
    else {
        for (var j = 0; j < MW.CONTAINER.ENEMY_BULLETS.length; j++) {
            selChild = MW.CONTAINER.ENEMY_BULLETS[j];
            if (selChild.active == false) {
                selChild.setVisible(true);
                selChild.HP = 1;
                selChild.active = true;
                return selChild;
            }
        }
    }
    selChild = Bullet.create(bulletSpeed, weaponType, attackMode, zOrder, mode);
    return selChild;
};

Bullet.create = function (bulletSpeed, weaponType, attackMode, zOrder, mode) {
    var bullet = new Bullet(bulletSpeed, weaponType, attackMode);
    g_sharedGameLayer.addBullet(bullet, zOrder, mode);
    if (mode == MW.UNIT_TAG.PLAYER_BULLET) {
        MW.CONTAINER.PLAYER_BULLETS.push(bullet);
    } else {
        MW.CONTAINER.ENEMY_BULLETS.push(bullet);
    }
    return bullet;
};

Bullet.preSet = function () {
    var bullet = null;
    for (var i = 0; i < 10; i++) {
        var bullet = Bullet.create(MW.BULLET_SPEED.SHIP, "W1.png", MW.ENEMY_ATTACK_MODE.NORMAL, 3000, MW.UNIT_TAG.PLAYER_BULLET);
        bullet.setVisible(false);
        bullet.active = false;
    }
    for (var i = 0; i < 10; i++) {
        bullet = Bullet.create(MW.BULLET_SPEED.ENEMY, "W2.png", MW.ENEMY_ATTACK_MODE.NORMAL, 3000, MW.UNIT_TAG.ENMEY_BULLET);
        bullet.setVisible(false);
        bullet.active = false;
    }
};
