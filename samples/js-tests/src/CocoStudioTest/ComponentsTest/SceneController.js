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

var SceneController = ccs.ComController.extend({
    _targets: null,
    _projectiles: null,
    _addTargetTime: 0,
    _elapsedTime: 0,
    ctor: function () {
        this._super();
        this._name = "SceneController";
        this._targets = [];
        this._projectiles = [];
    },
    init: function () {
        this._super();
        return true;
    },

    onEnter: function () {
        this._super();
        this._addTargetTime = 1;
        this._targets = [];
        this._projectiles = [];
        this._owner.getComponent("Audio").playBackgroundMusic("res/Sound/background-music-aac.wav", true);
        this._owner.getComponent("CCComAttribute").setInt("KillCount", 0);
    },

    onExit: function () {
        this._super();
    },

    update: function (dt) {
        this._elapsedTime += dt;
        if (this._elapsedTime > this._addTargetTime) {
            this.addTarget();
            this._elapsedTime = 0.0;
        }
    },

    addTarget: function () {
        var target = cc.Sprite.create("res/components/Target.png", cc.rect(0, 0, 27, 40));
        this._owner.addChild(target, 1, 2);
        target.addComponent(EnemyController.create());
        target.setTag(2);
        this._targets.push(target);
    },

    spriteMoveFinished: function (sender) {
        var sprite = sender;
        this._owner.removeChild(sprite, true);
        if (sprite.getTag() == 2) {
            cc.ArrayRemoveObject(this._targets, sprite);
            var gameOverScene = GameOverScene.create();
            gameOverScene.getLayer().getLabel().setString("You Lose!");
            cc.Director.getInstance().replaceScene(gameOverScene);
        }
        else if (sprite.getTag() == 3) {
            cc.ArrayRemoveObject(this._projectiles, sprite);
        }

    },

    increaseKillCount: function () {
        var comAttribute = this._owner.getComponent("CCComAttribute");
        var projectilesDestroyed = comAttribute.getInt("KillCount");
        comAttribute.setInt("KillCount", ++projectilesDestroyed);
        if (projectilesDestroyed >= 5) {
            var gameOverScene = GameOverScene.create();
            gameOverScene.getLayer().getLabel().setString("You Win!");
            cc.Director.getInstance().replaceScene(gameOverScene);
        }
    },
    getProjectiles: function () {
        return this._projectiles;
    },
    getTargets: function () {
        return this._targets;
    }
});

SceneController.create = function () {
    var controller = new SceneController();
    controller.init();
    return controller;
};