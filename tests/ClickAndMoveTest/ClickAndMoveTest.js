/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

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
var TAG_SPRITE = 1;

var ClickAndMoveTestScene = TestScene.extend({
    runThisTest:function () {
        var layer = new MainLayer();

        this.addChild(layer);
        director.replaceScene(this);
    }
});

var MainLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        this.init();

        if( 'touches' in sys.capabilities )
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities )
            this.setMouseEnabled(true);

        var sprite = cc.Sprite.create(s_pathGrossini);

        var layer = cc.LayerColor.create(cc.c4b(255, 255, 0, 100));
        this.addChild(layer, -1);

        this.addChild(sprite, 0, TAG_SPRITE);
        sprite.setPosition(20, 150);

        sprite.runAction(cc.JumpTo.create(4, cc.p(300, 48), 100, 4));

        var fadeIn = cc.FadeIn.create(1);
        var fadeOut = cc.FadeOut.create(1);
        var forever = cc.RepeatForever.create(cc.Sequence.create(fadeIn, fadeOut));
        layer.runAction(forever);
    },

    moveSprite:function(position) {
        var sprite = this.getChildByTag(TAG_SPRITE);
        sprite.stopAllActions();
        sprite.runAction(cc.MoveTo.create(1, position));
        var current = sprite.getPosition();
        var o = position.x - current.x;
        var a = position.y - current.y;
        var at = Math.atan(o / a) * 57.29577951;  // radians to degrees

        if (a < 0) {
            if (o < 0)
                at = 180 + Math.abs(at);
            else
                at = 180 - Math.abs(at);
        }

        sprite.runAction(cc.RotateTo.create(1, at));
    },
    onMouseUp:function (event) {
        var location = event.getLocation();
        this.moveSprite(location);
    },

    onTouchesEnded:function (touches, event) {
        if (touches.length <= 0)
            return;

        var touch = touches[0];
        var location = touch.getLocation();
        this.moveSprite(location);
    }
});
