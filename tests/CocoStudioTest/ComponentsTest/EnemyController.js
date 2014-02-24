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

var EnemyController = ccs.ComController.extend({
    ctor: function () {
        this._super();
        this._name = "EnemyController";
    },
    init: function () {
        this._super();
        return true;
    },

    onEnter: function () {
        // Determine where to spawn the target along the Y axis
        var winSize = cc.Director.getInstance().getWinSize();
        var minY = this.getOwner().getContentSize().height / 2;
        var rangeY = winSize.height - this.getOwner().getContentSize().height;
        var actualY = (Math.random() * rangeY ) + minY;

        // Create the target slightly off-screen along the right edge,
        // and along a random position along the Y axis as calculated
        this._owner.setPosition(
            cc.p(winSize.width + (this.getOwner().getContentSize().width / 2), actualY));


        // Determine speed of the target
        var minDuration = 2.0;
        var maxDuration = 4.0;
        var rangeDuration = maxDuration - minDuration;
        var actualDuration = ( Math.random() % rangeDuration ) + minDuration;

        // Create the actions
        var actionMove = cc.MoveTo.create(actualDuration, cc.p(0 - this.getOwner().getContentSize().width / 2, actualY));
        var actionMoveDone = cc.CallFunc.create(function () {
            var comController = this.getOwner().getParent().getComponent("SceneController");
            comController.spriteMoveFinished(this._owner);
        }, this);
        this._owner.runAction(cc.Sequence.create(actionMove, actionMoveDone));
    },

    onExit: function () {
    },

    update: function (dt) {

    },

    die: function () {
        var com = this._owner.getParent().getComponent("SceneController");
        var targets = com.getTargets();
        cc.ArrayRemoveObject(targets, this._owner);
        this._owner.removeFromParent(true);
        com.increaseKillCount();
    }
});
EnemyController.create = function () {
    var controller = new EnemyController();
    controller.init();
    return controller;
};
