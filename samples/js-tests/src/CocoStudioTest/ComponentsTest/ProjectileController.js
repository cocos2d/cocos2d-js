/****************************************************************************
 Copyright (c) 2013 cocos2d-x.org

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var ProjectileController = ccs.ComController.extend({
    ctor: function () {
        this._super();
        this._name = "ProjectileController";
    },
    init: function () {
        return true;
    },

    onEnter: function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();
        this._owner.setPosition(30, winSize.height / 2);
        this._owner.setTag(3);
        var com = this._owner.getParent().getComponent("SceneController");
        com.getProjectiles().push(this._owner);
    },

    onExit: function () {
        this._super();
    },

    update: function (dt) {
        var com = this._owner.getParent().getComponent("SceneController");
        var targets = com.getTargets();

        var projectile = this._owner;
        var locPos = projectile.getPosition();
        var locSize = projectile.getContentSize();
        var projectileRect = cc.rect(locPos.x - (locSize.width / 2), locPos.y - (locSize.height / 2), locSize.width, locSize.height);

        var targetsToDelete = [];
        var target = null;
        var targetPos = null;
        var targetSize = null;
        for (var i = 0; i < targets.length; i++) {
            target = targets[i];
            targetPos = target.getPosition();
            targetSize = target.getContentSize();
            var targetRect = cc.rect(targetPos.x - (targetSize.width / 2), targetPos.y - (targetSize.height / 2), targetSize.width, targetSize.height);
            if (cc.rectIntersectsRect(projectileRect, targetRect)) {
                targetsToDelete.push(target);
            }
        }

        for (var i = 0; i < targetsToDelete.length; i++) {
            var target = targetsToDelete[i];
            target.getComponent("EnemyController").die();
        }

        var isDied = targetsToDelete.length;

        if (isDied) {
            this.die();
        }
    },

    move: function (x, y) {
        var winSize = cc.Director.getInstance().getWinSize();

        var offX = x - this._owner.getPosition().x;
        var offY = y - this._owner.getPosition().y;

        if (offX <= 0) return;

        // Determine where we wish to shoot the projectile to
        var realX = winSize.width + (this._owner.getContentSize().width / 2);
        var ratio = offY / offX;
        var realY = (realX * ratio) + this._owner.getPosition().y;
        var realDest = cc.p(realX, realY);

        // Determine the length of how far we're shooting
        var offRealX = realX - this._owner.getPosition().x;
        var offRealY = realY - this._owner.getPosition().y;
        var length = Math.sqrt((offRealX * offRealX) + (offRealY * offRealY));
        var velocity = 480 / 1; // 480pixels/1sec
        var realMoveDuration = length / velocity;

        // Move projectile to actual endpoint
        this._owner.runAction(cc.Sequence.create(
            cc.MoveTo.create(realMoveDuration, realDest),
            cc.CallFunc.create(function () {
                var sceneController = this.getOwner().getParent().getComponent("SceneController");
                sceneController.spriteMoveFinished(this._owner);
            }, this)));

    },

    die: function () {
        var com = this._owner.getParent().getComponent("SceneController");
        var projectiles = com.getProjectiles();
        cc.ArrayRemoveObject(projectiles, this._owner);
        this._owner.removeFromParent(true);
    }

});

ProjectileController.create = function () {
    var controller = new ProjectileController();
    controller.init();
    return controller;
};