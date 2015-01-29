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
if(cc.sys.isNative)
    require('script/box2d/Box2D_v2.3.1_min.js');

var TAG_SPRITE_MANAGER = 1;
var PTM_RATIO = 32;

var DEGTORAD = 0.0174532925199432957;
var RADTODEG = 57.295779513082320876;


var Box2DTest = BaseTestLayer.extend({
    debug:null,
    ctor:function () {
        this._super();
        var gravity = new Box2D.b2Vec2(0.0, -10.0);
        this.world = new Box2D.b2World(gravity);
    },

    enableDebugDraw:function(){
        if(!this.debug){
            this.debug = cc.getBox2dDebugDraw(this, PTM_RATIO);
            this.world.SetDebugDraw(this.debug);
        }
    },
    debugDraw:function(){
        this.debug.clear();
        this.world.DrawDebugData();
    },

    title:function () {
        return "Box2D";
    },

    subtitle:function () {
        return "";
    },

    onBackCallback:function (sender) {
        var s = new Box2DTestScene();
        s.addChild(previousBox2DTest());
        director.runScene(s);
    },
    onRestartCallback:function (sender) {
        var s = new Box2DTestScene();
        s.addChild(restartBox2DTest());
        director.runScene(s);
    },
    onNextCallback:function (sender) {
        var s = new Box2DTestScene();
        s.addChild(nextBox2DTest());
        director.runScene(s);
    }
});

var Box2DTest_sprite = Box2DTest.extend({

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


        var bd_ground = new Box2D.b2BodyDef();
        var ground = this.world.CreateBody(bd_ground);

        var groundShape = new Box2D.b2EdgeShape();
        groundShape.Set(new Box2D.b2Vec2(-40.0, 0.0), new Box2D.b2Vec2(40.0, 0.0));
        ground.CreateFixture(groundShape, 0.0);

        //Set up sprite

        var mgr = new cc.SpriteBatchNode(s_pathBlock, 150);
        this.addChild(mgr, 0, TAG_SPRITE_MANAGER);

        this.addNewSpriteWithCoords(cc.p(screenSize.width / 2, screenSize.height / 2));

        this.scheduleUpdate();
        //----end0----
    },

    subtitle: function(){
        return "Tap screen";
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


var Box2DTest_car = (function(){

    var MOVE_LEFT =     0x01;
    var MOVE_RIGHT =    0x02;

    return Box2DTest.extend({
        carBody:null,
        rearWheelJoint:null,
        moveFlags:0,
        ctor:function(){
            this._super();

            var b2BodyDef = Box2D.b2BodyDef,
                b2EdgeShape = Box2D.b2EdgeShape,
                b2FixtureDef = Box2D.b2FixtureDef,
                b2Vec2 = Box2D.b2Vec2,
                b2PolygonShape = Box2D.b2PolygonShape,
                b2RevoluteJointDef = Box2D.b2RevoluteJointDef,
                b2CircleShape = Box2D.b2CircleShape,
                b2WheelJointDef = Box2D.b2WheelJointDef;


            var ground = this.world.CreateBody( new b2BodyDef() );

            //ground
            {
                var shape = new b2EdgeShape();

                var fd = new b2FixtureDef();
                fd.set_shape(shape);
                fd.set_density(0.0);
                fd.set_friction(0.6);

                shape.Set(new b2Vec2(-20.0, 0.0), new b2Vec2(20.0, 0.0));
                ground.CreateFixture(fd);

                //error
                var hs = [0.25, 1.0, 4.0, 0.0, 0.0, -1.0, -2.0, -2.0, -1.25, 0.0];

                x = 20.0;
                y1 = 0.0;
                var dx = 5.0;

                for (var i = 0; i < 10; ++i)
                {
                    var y2 = hs[i];
                    shape.Set( new b2Vec2(x, y1), new b2Vec2(x + dx, y2));
                    ground.CreateFixture(fd);

                    y1 = y2;
                    x += dx;
                }

                //error

                for (var i = 0; i < 10; ++i)
                {
                    var y2 = hs[i];
                    shape.Set( new b2Vec2(x, y1), new b2Vec2(x + dx, y2));
                    ground.CreateFixture(fd);
                    y1 = y2;
                    x += dx;
                }

                shape.Set(new b2Vec2(x, 0.0), new b2Vec2(x + 40.0, 0.0));
                ground.CreateFixture(fd);

                x += 80.0;
                shape.Set(new b2Vec2(x, 0.0), new b2Vec2(x + 40.0, 0.0));
                ground.CreateFixture(fd);

                x += 40.0;
                shape.Set(new b2Vec2(x, 0.0), new b2Vec2(x + 10.0, 5.0));
                ground.CreateFixture(fd);

                x += 20.0;
                shape.Set(new b2Vec2(x, 0.0), new b2Vec2(x + 40.0, 0.0));
                ground.CreateFixture(fd);

                x += 40.0;
                shape.Set(new b2Vec2(x, 0.0), new b2Vec2(x, 20.0));
                ground.CreateFixture(fd);
            }


            // Teeter
            {
                var bd = new b2BodyDef();
                bd.set_position(new b2Vec2(140.0, 1.0));
                // bd.set_type(b2_dynamicBody);
                bd.set_type(Box2D.b2_dynamicBody);
                var body = this.world.CreateBody(bd);

                var box = new b2PolygonShape();
                box.SetAsBox(10.0, 0.25);
                body.CreateFixture(box, 1);

                var jd = new b2RevoluteJointDef();
                jd.Initialize(ground, body, body.GetPosition());
                jd.set_lowerAngle(-8 * DEGTORAD);
                jd.set_upperAngle( 8 * DEGTORAD);
                jd.set_enableLimit(true);
                this.world.CreateJoint(jd);

                body.ApplyAngularImpulse(100.0, true);
            }

            // Bridge
            {
                var N = 20;
                shape = new b2PolygonShape();
                shape.SetAsBox(1.0, 0.125);

                var fd = new b2FixtureDef();
                fd.set_shape( shape );
                fd.set_density( 1.0 );
                fd.set_friction( 0.6 );

                var jd = new b2RevoluteJointDef();

                var prevBody = ground;
                var bd = new b2BodyDef();
                // bd.set_type(b2_dynamicBody);
                bd.set_type(Box2D.b2_dynamicBody);
                for (var i = 0; i < N; ++i)
                {
                    bd.set_position( new b2Vec2(161.0 + 2.0 * i, -0.125) );
                    var body = this.world.CreateBody(bd);
                    body.CreateFixture(fd);

                    var anchor = new b2Vec2(160.0 + 2.0 * i, -0.125);
                    jd.Initialize(prevBody, body, anchor);
                    this.world.CreateJoint(jd);

                    prevBody = body;
                }

                var anchor = new b2Vec2(160.0 + 2.0 * N, -0.125);
                jd.Initialize(prevBody, ground, anchor);
                this.world.CreateJoint(jd);
            }

            // Boxes
            {
                var box = new b2PolygonShape();
                box.SetAsBox(0.5, 0.5);

                var bd = new b2BodyDef();
                // bd.set_type(b2_dynamicBody);
                bd.set_type(Box2D.b2_dynamicBody);

                for (var i = 0; i < 5; i++) {
                    bd.set_position(new b2Vec2(230.0, i + 0.5));
                    this.world.CreateBody(bd).CreateFixture(box, 0.5);
                }
            }

            //car
            {
                var carVerts = [];
                carVerts.push( new b2Vec2(-1.5, -0.5) );
                carVerts.push( new b2Vec2(1.5, -0.5) );
                carVerts.push( new b2Vec2(1.5, 0.0) );
                carVerts.push( new b2Vec2(0.0, 0.9) );
                carVerts.push( new b2Vec2(-1.15, 0.9) );
                carVerts.push( new b2Vec2(-1.5, 0.2) );
                var chassisShape = new createPolygonShape(carVerts);

                var circleShape = new b2CircleShape();
                circleShape.set_m_radius(0.4);

                var bd = new b2BodyDef();
                // bd.set_type(b2_dynamicBody);
                bd.set_type(Box2D.b2_dynamicBody);
                bd.set_position( new b2Vec2(0,1) );
                this.carBody = this.world.CreateBody(bd);
                this.carBody.CreateFixture(chassisShape, 1);

                var fd = new b2FixtureDef();
                fd.set_shape(circleShape);
                fd.set_density(1.0);
                fd.set_friction(0.9);

                bd.set_position( new b2Vec2(-1.0, 0.35) );
                var wheelBody1 = this.world.CreateBody(bd);
                wheelBody1.CreateFixture(fd);

                bd.set_position( new b2Vec2(1.0, 0.4) );
                var wheelBody2 = this.world.CreateBody(bd);
                wheelBody2.CreateFixture(fd);

                var m_hz = 4.0;
                var m_zeta = 0.7;
                var m_speed = 50.0;

                var jd = new b2WheelJointDef();
                var axis = new b2Vec2(0.0, 1.0);

                jd.Initialize(this.carBody, wheelBody1, wheelBody1.GetPosition(), axis);
                jd.set_motorSpeed(0.0);
                jd.set_maxMotorTorque(20.0);
                jd.set_enableMotor(true);
                jd.set_frequencyHz(m_hz);
                jd.set_dampingRatio(m_zeta);
                this.rearWheelJoint = Box2D.castObject( this.world.CreateJoint(jd), b2WheelJoint );

                jd.Initialize(this.carBody, wheelBody2, wheelBody2.GetPosition(), axis);
                //jd.set_motorSpeed(0.0);
                //jd.set_maxMotorTorque(10.0);
                jd.set_enableMotor(false);
                jd.set_frequencyHz(m_hz);
                jd.set_dampingRatio(m_zeta);
                var wheelJoint2 = Box2D.castObject( this.world.CreateJoint(jd), b2WheelJoint );
            }

            if ('keyboard' in cc.sys.capabilities) {
                cc.eventManager.addListener({
                    event: cc.EventListener.KEYBOARD,
                    onKeyPressed:  function(keyCode, event){
                        var self = event.getCurrentTarget();
                        if ( keyCode == cc.KEY.j ) {//j
                            self.moveFlags |= MOVE_LEFT;
                            self.updateMotorSpeed();
                        }
                        else if ( keyCode == cc.KEY.k ) {//k
                            self.moveFlags |= MOVE_RIGHT;
                            self.updateMotorSpeed();
                        }

                    },
                    onKeyReleased: function(keyCode, event){
                        var self = event.getCurrentTarget();
                        if ( keyCode == cc.KEY.j ) {//j
                            self.moveFlags &= ~MOVE_LEFT;
                            self.updateMotorSpeed();
                        }
                        else if ( keyCode == cc.KEY.k ) {//k
                            self.moveFlags &= ~MOVE_RIGHT;
                            self.updateMotorSpeed();
                        }
                    }
                }, this);
            }

            if( 'touches' in cc.sys.capabilities ) {
                cc.eventManager.addListener({
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    swallowTouches: true,
                    onTouchBegan: function(touch, event){
                        var self = event.getCurrentTarget();
                        var pos = touch.getLocation();
                        if( pos.x < cc.winSize.width/2) {
                            self.moveFlags |= MOVE_LEFT;
                            self.updateMotorSpeed();
                        }else{
                            self.moveFlags |= MOVE_RIGHT;
                            self.updateMotorSpeed();
                        }
                        return true;
                    },

                    onTouchEnded: function(touch, event){
                        var self = event.getCurrentTarget();
                        var pos = touch.getLocation();
                        if( pos.x < cc.winSize.width/2) {
                            self.moveFlags &= ~MOVE_LEFT;
                            self.updateMotorSpeed();
                        }else{
                            self.moveFlags &= ~MOVE_RIGHT;
                            self.updateMotorSpeed();
                        }
                    }
                }, this);
            }

            this.enableDebugDraw();
            this.scheduleUpdate();

            this.debug.drawNode.x = 200;
            this.debug.drawNode.y = 100;
        },

        update:function(dt){
            this.updateMotorSpeed();
            //update position
            this.debug.drawNode.x -= this.carBody.GetLinearVelocity().get_x() * dt * PTM_RATIO;
            this.debug.drawNode.y -= this.carBody.GetLinearVelocity().get_y() * dt * PTM_RATIO;

            this.world.Step(dt, 2, 2);
            this.debugDraw();
        },

        updateMotorSpeed:function() {
            if ( (this.moveFlags & MOVE_LEFT) == MOVE_LEFT )
                this.rearWheelJoint.SetMotorSpeed(50);
            else if ( (this.moveFlags & MOVE_RIGHT) == MOVE_RIGHT )
                this.rearWheelJoint.SetMotorSpeed(-50);
            else
                this.rearWheelJoint.SetMotorSpeed(0);
        },

        subtitle: function(){
            return cc.sys.isMobile ? "press right/left side of the screen to go forward/backward" : "press j/k to go forward/backward";
        }
    });
})();


var Box2DTest_dominos = Box2DTest.extend({
    ctor:function(){
        this._super();

        var b2EdgeShape = Box2D.b2EdgeShape,
            b2Vec2 = Box2D.b2Vec2,
            b2BodyDef = Box2D.b2BodyDef,
            b2PolygonShape = Box2D.b2PolygonShape,
            b2FixtureDef = Box2D.b2FixtureDef,
            b2RevoluteJointDef = Box2D.b2RevoluteJointDef,
            b2DistanceJointDef = Box2D.b2DistanceJointDef,
            b2CircleShape = Box2D.b2CircleShape;

        var shape = new b2EdgeShape();
        shape.Set(new b2Vec2(-40.0, 0.0), new b2Vec2(40.0, 0.0));

        var ground = this.world.CreateBody(new b2BodyDef());
        ground.CreateFixture(shape, 0.0);

        shape = new b2PolygonShape();
        shape.SetAsBox(6.0, 0.25, new b2Vec2(-1.5, 10.0), 0);
        ground.CreateFixture(shape, 0.0);

        shape.SetAsBox(7.0, 0.25, new b2Vec2(1.0, 6.0), 0.3);
        ground.CreateFixture(shape, 0.0);

        shape.SetAsBox(0.25, 1.5, new b2Vec2(-7.0, 4.0), 0.0);
        ground.CreateFixture(shape, 0.0);

        //dominos
        {
            var shape = new b2PolygonShape();
            shape.SetAsBox(0.1, 1.0);

            var fd = new b2FixtureDef();
            fd.set_shape(shape);
            fd.set_density(20.0);
            fd.set_friction(0.1);

            for (var i = 0; i < 10; ++i)
            {
                var bd = new b2BodyDef();
                // bd.set_type(b2_dynamicBody);
                bd.set_type(Box2D.b2_dynamicBody);
                bd.set_position(new b2Vec2(-6.0 + 1.0 * i, 11.25));
                var body = this.world.CreateBody(bd);
                body.CreateFixture(fd);
            }
        }

        var jd = new b2RevoluteJointDef();

        //see-saw
        var seesawBody;
        {
            var shape = new b2PolygonShape();
            shape.SetAsBox(6.0, 0.125);

            var bd = new b2BodyDef();
            // bd.set_type(b2_dynamicBody);
            bd.set_type(Box2D.b2_dynamicBody);
            bd.set_position(new b2Vec2(-0.9, 1.0));
            bd.set_angle(-0.15);

            seesawBody = this.world.CreateBody(bd);
            seesawBody.CreateFixture(shape, 10.0);

            var anchor = new b2Vec2(-2.0, 1.0);
            jd.Initialize(ground, seesawBody, anchor);
            jd.set_collideConnected(true);
            this.world.CreateJoint(jd);
        }

        //pendulum
        {
            var shape = new b2PolygonShape();
            shape.SetAsBox(0.25, 0.25);

            var bd = new b2BodyDef();
            // bd.set_type(b2_dynamicBody);
            bd.set_type(Box2D.b2_dynamicBody);
            bd.set_position(new b2Vec2(-10.0, 15.0));
            var b4 = this.world.CreateBody(bd);
            b4.CreateFixture(shape, 10.0);

            anchor.Set(-7.0, 15.0);
            jd.Initialize(ground, b4, anchor);
            this.world.CreateJoint(jd);
        }

        //cradle holding balls
        var cradleBody;
        {
            var bd = new b2BodyDef();
            // bd.set_type(b2_dynamicBody);
            bd.set_type(Box2D.b2_dynamicBody);
            bd.set_position(new b2Vec2(6.5, 3.0));
            cradleBody = this.world.CreateBody(bd);

            var shape = new b2PolygonShape();
            var fd = new b2FixtureDef();

            fd.set_shape(shape);
            fd.set_density(10.0);
            fd.set_friction(0.1);

            shape.SetAsBox(1.0, 0.1, new b2Vec2(0.0, -0.9), 0.0);
            cradleBody.CreateFixture(fd);

            shape.SetAsBox(0.1, 1.0, new b2Vec2(-0.9, 0.0), 0.0);
            cradleBody.CreateFixture(fd);

            shape.SetAsBox(0.1, 1.0, new b2Vec2(0.9, 0.0), 0.0);
            cradleBody.CreateFixture(fd);

            anchor.Set(6.0, 2.0);
            jd.Initialize(ground, cradleBody, anchor);
            this.world.CreateJoint(jd);
        }

        //lid on top of cradle
        var lidBody;
        {
            var shape = new b2PolygonShape();
            shape.SetAsBox(1.0, 0.1);

            var bd = new b2BodyDef();
            // bd.set_type(b2_dynamicBody);
            bd.set_type(Box2D.b2_dynamicBody);
            bd.set_position(new b2Vec2(6.5, 4.1));
            lidBody = this.world.CreateBody(bd);
            lidBody.CreateFixture(shape, 30.0);

            anchor.Set(7.5, 4.0);
            jd.Initialize(cradleBody, lidBody, anchor);
            this.world.CreateJoint(jd);
        }

        //prop to support cradle
        var propBody;
        {
            var shape = new b2PolygonShape();
            shape.SetAsBox(0.1, 1.0);

            var bd = new b2BodyDef();
            // bd.set_type(b2_dynamicBody);
            bd.set_type(Box2D.b2_dynamicBody);
            bd.set_position(new b2Vec2(7.4, 1.0));

            propBody = this.world.CreateBody(bd);
            propBody.CreateFixture(shape, 10.0);
        }

        var djd = new b2DistanceJointDef();
        djd.set_bodyA(seesawBody);
        djd.set_bodyB(propBody);
        djd.set_localAnchorA(new b2Vec2(6.0, 0.0));
        djd.set_localAnchorB(new b2Vec2(0.0, -1.0));
        var wpA = copyVec2(seesawBody.GetWorldPoint(djd.get_localAnchorA()));
        var wpB = copyVec2(propBody.GetWorldPoint(djd.get_localAnchorB()));

        //wpB.op_sub(wpA); wtf... why does op_add work fine but op_sub does nothing?
        var d = new b2Vec2( wpB.get_x() - wpA.get_x(), wpB.get_y() - wpA.get_y() );

        djd.set_length(d.Length());
        this.world.CreateJoint(djd);

        //balls
        {
            var radius = 0.2;

            var shape = new b2CircleShape();
            shape.set_m_radius(radius);

            for (var i = 0; i < 4; ++i)
            {
                var bd = new b2BodyDef();
                // bd.set_type(b2_dynamicBody);
                bd.set_type(Box2D.b2_dynamicBody);
                bd.set_position(new b2Vec2(5.9 + 2.0 * radius * i, 2.4));
                var body = this.world.CreateBody(bd);
                body.CreateFixture(shape, 10.0);
            }
        }


        this.enableDebugDraw();
        this.debug.drawNode.x = cc.winSize.width / 2;
        this.scheduleUpdate();
    },
    update:function(dt){
        this.world.Step(dt, 2, 2);
        this.debugDraw();
    },

    subtitle: function(){
        return "Dominos";
    }
});

var Box2DTestSceneIdx = -1;

var Box2DTestScene = TestScene.extend({
    runThisTest:function (num) {
        ActionMgrTestIdx = (num || 0) - 1;
        this.addChild(nextBox2DTest());

        cc.director.runScene(this);
    }
});

var arrayOfBox2DTest = [
    Box2DTest_sprite,
    Box2DTest_car,
    Box2DTest_dominos
];

var nextBox2DTest = function () {
    Box2DTestSceneIdx++;
    Box2DTestSceneIdx = Box2DTestSceneIdx % arrayOfBox2DTest.length;

    return new arrayOfBox2DTest[Box2DTestSceneIdx]();
};
var previousBox2DTest = function () {
    Box2DTestSceneIdx--;
    if (Box2DTestSceneIdx < 0)
        Box2DTestSceneIdx += arrayOfBox2DTest.length;

    return new arrayOfBox2DTest[Box2DTestSceneIdx]();
};
var restartBox2DTest = function () {
    return new arrayOfBox2DTest[Box2DTestSceneIdx]();
};