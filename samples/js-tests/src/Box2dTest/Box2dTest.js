/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

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


//box2d
require('script/box2d/Box2D_v2.3.1_min.js');

var TAG_SPRITE_MANAGER = 1;
var PTM_RATIO = 32;

var Box2DTestLayer = cc.Layer.extend({
    world:null,
    //GLESDebugDraw *m_debugDraw;

    ctor:function () {

        if(window.sideIndexBar){
            window.sideIndexBar.changeTest(0, 2);
        }
        //----start0----ctor
        this._super();

        cc.eventManager.addListener(cc.EventListener.create({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesEnded: function(touches, event){
                //Add a new body/atlas sprite at the touched location
                var touch = touches[0];
                var location = touch.getLocation();
                event.getCurrentTarget().addNewSpriteWithCoords(location);
            }
        }), this);

        var screenSize = cc.director.getWinSize();

        // Construct a world object, which will hold and simulate the rigid bodies.
        var gravity = new Box2D.b2Vec2(0.0, -10.0);
        this.world = new Box2D.b2World(gravity);

        var bd_ground = new Box2D.b2BodyDef();
        var ground = this.world.CreateBody(bd_ground);

        var groundShape = new Box2D.b2EdgeShape();
        groundShape.Set(new Box2D.b2Vec2(-40.0, 0.0), new Box2D.b2Vec2(40.0, 0.0));
        ground.CreateFixture(groundShape, 0.0);

        //Set up sprite

        var mgr = new cc.SpriteBatchNode(s_pathBlock, 150);
        this.addChild(mgr, 0, TAG_SPRITE_MANAGER);

        this.addNewSpriteWithCoords(cc.p(screenSize.width / 2, screenSize.height / 2));

        var label = new cc.LabelTTF("Tap screen", "Marker Felt", 32);
        this.addChild(label, 0);
        label.color = cc.color(0, 0, 255);
        label.x = screenSize.width / 2;
        label.y = screenSize.height - 50;

        this.scheduleUpdate();
        //----end0----
    },

    addNewSpriteWithCoords:function (p) {
        //----start0----addNewSpriteWithCoords
        //UXLog(L"Add sprite %0.2f x %02.f",p.x,p.y);
        var batch = this.getChildByTag(TAG_SPRITE_MANAGER);

        //We have a 64x64 sprite sheet with 4 different 32x32 images.  The following code is
        //just randomly picking one of the images
        var idx = (Math.random() > .5 ? 0 : 1);
        var idy = (Math.random() > .5 ? 0 : 1);
        var sprite = new cc.Sprite(batch.texture, cc.rect(32 * idx, 32 * idy, 32, 32));
        batch.addChild(sprite);

        sprite.x = p.x;
        sprite.y = p.y;

        var shape = new Box2D.b2PolygonShape();
        shape.SetAsBox(0.5, 0.5);

        var ZERO = new Box2D.b2Vec2(0.0, 0.0);
        var temp = new Box2D.b2Vec2(0.0, 0.0);

        var bd = new Box2D.b2BodyDef();
        bd.set_type(Box2D.b2_dynamicBody);
        bd.set_position(new Box2D.b2Vec2(p.x / PTM_RATIO, p.y / PTM_RATIO));
        var body = this.world.CreateBody(bd);
        body.CreateFixture(shape, 5.0);

        body.SetLinearVelocity(ZERO);
        body.SetAwake(1);
        body.SetActive(1);

        body.userData = sprite;

        //----end0----
    },
    update:function (dt) {
        this.world.Step(dt, 2, 2);

        for (var b = this.world.GetBodyList(); b.ptr; b = b.GetNext()) {
            if (b.userData) {
                //Synchronize the AtlasSprites position and rotation with the corresponding body
                var myActor = b.userData;
                myActor.x = b.GetPosition().get_x() * PTM_RATIO;
                myActor.y = b.GetPosition().get_y() * PTM_RATIO;
                myActor.rotation = -1 * cc.radiansToDegrees(b.GetAngle());
            }
        }
    }

});

var Box2DTestScene = TestScene.extend({
    runThisTest:function () {
        var layer = new Box2DTestLayer();
        this.addChild(layer);

        cc.director.runScene(this);
    }
});

var arrayOfBox2DTest = [
    Box2DTestLayer
];
