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

var PlayerController = ccs.ComController.extend({
    ctor: function () {
        this._super();
        this._name = "PlayerController";
    },

    onEnter:function(){
        this._super();
        this.setTouchEnabled(true);
    },

    update: function (dt) {

    },

    onTouchEnded: function (touch, event) {
        var location = touch.getLocation();

        var projectile = cc.Sprite.create("res/components/Projectile.png", cc.rect(0, 0, 20, 20));
        this._owner.getParent().addChild(projectile, 1, 4);

        var com = ProjectileController.create();
        projectile.addComponent(com);
        com.move(location.x, location.y);

        this._owner.getComponent("Audio").playEffect("res/Sound/pew-pew-lei.wav");
    }
});

PlayerController.create = function () {
    var controller = new PlayerController();
    controller.init();
    return controller;
};