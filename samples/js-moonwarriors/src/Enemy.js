var Enemy = cc.Sprite.extend({
    eID:0,
    enemyType:1,
    active:true,
    speed:200,
    bulletSpeed:MW.BULLET_SPEED.ENEMY,
    HP:15,
    bulletPowerValue:1,
    moveType:null,
    scoreValue:200,
    zOrder:1000,
    delayTime:1 + 1.2 * Math.random(),
    attackMode:MW.ENEMY_MOVE_TYPE.NORMAL,
    _hurtColorLife:0,
    ctor:function (arg) {
        this._super();

        this.HP = arg.HP;
        this.moveType = arg.moveType;
        this.scoreValue = arg.scoreValue;
        this.attackMode = arg.attackMode;
        this.enemyType = arg.type;

        this.setSpriteFrame(arg.textureName);
        this.schedule(this.shoot, this.delayTime);
    },
    _timeTick:0,
    update:function (dt) {
        var p = this.getPosition();
        if ((p.x < 0 || p.x > 320) && (p.y < 0 || p.y > 480)) {
            this.active = false;
        }
        this._timeTick += dt;
        if (this._timeTick > 0.1) {
            this._timeTick = 0;
            if (this._hurtColorLife > 0) {
                this._hurtColorLife--;
            }
        }

        var p = this.getPosition();
        if (p.x < 0 || p.x > g_sharedGameLayer.screenRect.width || p.y < 0 || p.y > g_sharedGameLayer.screenRect.height || this.HP <= 0) {
            this.active = false;
            this.destroy();
        }

    },
    destroy:function () {
        MW.SCORE += this.scoreValue;
        var a = Explosion.getOrCreateExplosion();
        a.setPosition(this.getPosition());
        SparkEffect.getOrCreateSparkEffect(this.getPosition());
        if (MW.SOUND) {
            cc.AudioEngine.getInstance().playEffect(res.explodeEffect_mp3);
        }
        this.setVisible(false);
        this.active = false;
        this.stopAllActions();
        this.unschedule(this.shoot);
        MW.ACTIVE_ENEMIES--;
    },
    shoot:function () {
        var p = this.getPosition();
        var b = Bullet.getOrCreateBullet(this.bulletSpeed, "W2.png", this.attackMode, 3000, MW.UNIT_TAG.ENMEY_BULLET);
        b.setPosition(p.x, p.y - this.getContentSize().height * 0.2);
    },
    hurt:function () {
        this._hurtColorLife = 2;
        this.HP--;
    },
    collideRect:function (p) {
        var a = this.getContentSize();
        return cc.rect(p.x - a.width / 2, p.y - a.height / 4, a.width, a.height / 2+20);
    }
});

Enemy.getOrCreateEnemy = function (arg) {
    var selChild = null;
    for (var j = 0; j < MW.CONTAINER.ENEMIES.length; j++) {
        selChild = MW.CONTAINER.ENEMIES[j];

        if (selChild.active == false && selChild.enemyType == arg.type) {
            selChild.HP = arg.HP;
            selChild.active = true;
            selChild.moveType = arg.moveType;
            selChild.scoreValue = arg.scoreValue;
            selChild.attackMode = arg.attackMode;
            selChild._hurtColorLife = 0;

            selChild.schedule(selChild.shoot, selChild.delayTime);
            selChild.setVisible(true);
            MW.ACTIVE_ENEMIES++;
            return selChild;
        }
    }
    selChild = Enemy.create(arg);
    MW.ACTIVE_ENEMIES++;
    return selChild;
};

Enemy.create = function (arg) {
    var enemy = new Enemy(arg);
    g_sharedGameLayer.addEnemy(enemy, enemy.zOrder, MW.UNIT_TAG.ENEMY);
    MW.CONTAINER.ENEMIES.push(enemy);
    return enemy;
};

Enemy.preSet = function () {
    var enemy = null;
    for (var i = 0; i < 3; i++) {
        for (var i = 0; i < EnemyType.length; i++) {
            enemy = Enemy.create(EnemyType[i]);
            enemy.setVisible(false);
            enemy.active = false;
            enemy.stopAllActions();
            enemy.unscheduleAllCallbacks();
        }
    }
};