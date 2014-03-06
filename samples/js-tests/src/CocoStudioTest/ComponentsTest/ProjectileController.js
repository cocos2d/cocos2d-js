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
        var winSize = cc.director.getWinSize();
        this._owner.x = 30;
	    this._owner.y = winSize.height / 2;
        this._owner.tag = 3;
        var com = this._owner.parent.getComponent("SceneController");
        com.getProjectiles().push(this._owner);
    },

    onExit: function () {
    },

    update: function (dt) {
        var com = this._owner.parent.getComponent("SceneController");
        var targets = com.getTargets();

        var projectile = this._owner;
        var projectileRect = cc.rect(projectile.x - (projectile.width / 2), projectile.y - (projectile.height / 2), projectile.width, projectile.height);

        var targetsToDelete = [];
        var target = null;
        var targetSize = null;
        for (var i = 0; i < targets.length; i++) {
            target = targets[i];
            var targetRect = cc.rect(target.x - (target.width / 2), target.y - (target.height / 2), target.width, target.height);
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
        var winSize = cc.director.getWinSize();

        var offX = x - this._owner.x;
        var offY = y - this._owner.y;

        if (offX <= 0) return;

        // Determine where we wish to shoot the projectile to
        var realX = winSize.width + (this._owner.width / 2);
        var ratio = offY / offX;
        var realY = (realX * ratio) + this._owner.y;
        var realDest = cc.p(realX, realY);

        // Determine the length of how far we're shooting
        var offRealX = realX - this._owner.x;
        var offRealY = realY - this._owner.y;
        var length = Math.sqrt((offRealX * offRealX) + (offRealY * offRealY));
        var velocity = 480 / 1; // 480pixels/1sec
        var realMoveDuration = length / velocity;

        // Move projectile to actual endpoint
        this._owner.runAction(cc.Sequence.create(
            cc.MoveTo.create(realMoveDuration, realDest),
            cc.CallFunc.create(function () {
                var sceneController = this.getOwner().parent.getComponent("SceneController");
                sceneController.spriteMoveFinished(this._owner);
            }, this)));

    },

    die: function () {
        var com = this._owner.parent.getComponent("SceneController");
        var projectiles = com.getProjectiles();
        cc.arrayRemoveObject(projectiles, this._owner);
        this._owner.removeFromParent(true);
    }

});

ProjectileController.create = function () {
    var controller = new ProjectileController();
    controller.init();
    return controller;
};