/****************************************************************************
 Copyright (c) 2010-2013 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2012 Pierre-David Bélanger

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

var TAG_TITLELABEL = 1;
var TAG_SUBTITLELABEL = 2;
var TAG_STENCILNODE = 100;
var TAG_CLIPPERNODE = 101;
var TAG_CONTENTNODE = 102;

var clippingNodeTestSceneIdx = -1;

var BaseClippingNodeTest = BaseTestLayer.extend({
    _title:"",
    _subtitle:"",

    ctor:function() {
        this._super(cc.c4b(0,0,0,255), cc.c4b(98,99,117,255));
        this.setup();
    },

    onRestartCallback:function (sender) {
        var s = new ClippingNodeTestScene();
        s.addChild(restartClippingNodeTest());
        director.replaceScene(s);
    },
    onNextCallback:function (sender) {
        var s = new ClippingNodeTestScene();
        s.addChild(nextClippingNodeTest());
        director.replaceScene(s);
    },
    onBackCallback:function (sender) {
        var s = new ClippingNodeTestScene();
        s.addChild(previousClippingNodeTest());
        director.replaceScene(s);
    },
    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfClippingNodeTest.length-1) - clippingNodeTestSceneIdx );
    },

    getTestNumber:function() {
        return clippingNodeTestSceneIdx;
    }

});



var BasicTest = BaseClippingNodeTest.extend({
    title:function () {
        return "Basic Test";
    },

    subtitle:function () {
        return "";
    },

    setup:function () {
        var winSize = cc.Director.getInstance().getWinSize();

        var stencil = this.stencil();
        stencil.setTag(TAG_STENCILNODE);
        stencil.setPosition(50, 50);

        var clipper = this.clipper();
        clipper.setTag(TAG_CLIPPERNODE);
        clipper.setAnchorPoint(0.5, 0.5);
        clipper.setPosition(winSize.width / 2 - 50, winSize.height / 2 - 50);
        clipper.setStencil(stencil);
        this.addChild(clipper);

        var content = this.content();
        content.setPosition(50, 50);
        clipper.addChild(content);
        //content.setPosition(400, 225);
        //this.addChild(content);
    },

    actionRotate:function () {
        return cc.RepeatForever.create(cc.RotateBy.create(1.0, 90.0));
    },

    actionScale:function () {
        var scale = cc.ScaleBy.create(1.33, 1.5);
        return cc.RepeatForever.create(cc.Sequence.create(scale, scale.reverse()));
    },

    shape:function () {
        var shape = cc.DrawNode.create();
        var triangle = [cc.p(-100, -100),cc.p(100, -100), cc.p(0, 100)];

        var green = cc.c4f(0, 1, 0, 1);
        shape.drawPoly(triangle, green, 3, green);
        return shape;
    },

    grossini:function () {
        var grossini = cc.Sprite.create(s_pathGrossini);
        grossini.setScale(1.5);
        return grossini;
    },

    stencil:function () {
        return null;
    },

    clipper:function () {
        return cc.ClippingNode.create();
    },

    content:function () {
        return null;
    }
});

var ShapeTest = BasicTest.extend({
    title:function () {
        return "Shape Basic Test";
    },

    subtitle:function () {
        return "A DrawNode as stencil and Sprite as content";
    },

    stencil:function () {
        var node = this.shape();
        node.runAction(this.actionRotate());
        return node;
    },

    content:function () {
        var node = this.grossini();
        node.runAction(this.actionScale());
        return node;
    }
});

var ShapeInvertedTest = ShapeTest.extend({
    title:function () {
        return "Shape Inverted Basic Test";
    },

    subtitle:function () {
        return "A DrawNode as stencil and Sprite as content, inverted";
    },

    clipper:function () {
        var clipper = this._super();
        clipper.setInverted(true);
        return clipper;
    }
});

var SpriteTest = BasicTest.extend({
    title:function () {
        return "Sprite Basic Test";
    },
    subtitle:function () {
        return "A Sprite as stencil and DrawNode as content";
    },

    stencil:function () {
        var node = this.grossini();
        node.runAction(this.actionRotate());
        return node;
    },

    clipper:function () {
        var clipper = this._super();
        clipper.setAlphaThreshold(0.05);
        return clipper;
    },

    content:function () {
        var node = this.shape();
        node.runAction(this.actionScale());
        return node;
    }
});

var SpriteNoAlphaTest = SpriteTest.extend({
    title:function () {
        return "Sprite No Alpha Basic Test";
    },

    subtitle:function () {
        return "A Sprite as stencil and DrawNode as content, no alpha";
    },

    clipper:function () {
        var clipper = this._super();
        clipper.setAlphaThreshold(1);
        return clipper;
    }
});

var SpriteInvertedTest = SpriteTest.extend({
    title:function () {
        return "Sprite Inverted Basic Test";
    },

    subtitle:function () {
        return "A Sprite as stencil and DrawNode as content, inverted";
    },

    clipper:function () {
        var clipper = this._super();
        clipper.setAlphaThreshold(0.05);
        clipper.setInverted(true);
        return clipper;
    }
});

var NestedTest = BaseClippingNodeTest.extend({
    title:function () {
        return "Nested Test";
    },

    subtitle:function () {
        return "Nest 9 Clipping Nodes, max is usually 8";
    },

    setup:function () {
        var depth = 9;

        var parent = this;

        for (var i = 0;  i < depth; i++ ) {
            var size = 225 - i * (225 / (depth * 2));

            var clipper = cc.ClippingNode.create();
            clipper.setContentSize(size, size);
            clipper.setAnchorPoint(0.5, 0.5);
            clipper.setPosition(parent.getContentSize().width / 2, parent.getContentSize().height / 2);
            clipper.setAlphaThreshold(0.05);
            clipper.runAction(cc.RepeatForever.create(cc.RotateBy.create((i % 3) ? 1.33 : 1.66, (i % 2) ? 90 : -90)));
            parent.addChild(clipper);

            var stencil = cc.Sprite.create(s_pathGrossini);
            stencil.setScale(2.5 - (i * (2.5 / depth)));
            stencil.setAnchorPoint(0.5, 0.5);
            stencil.setPosition(clipper.getContentSize().width / 2, clipper.getContentSize().height / 2);
            stencil.setVisible(false);
            stencil.runAction(cc.Sequence.create(cc.DelayTime.create(i), cc.Show.create()));
            clipper.setStencil(stencil);

            clipper.addChild(stencil);
            parent = clipper;
        }
    }
});

var HoleDemo = BaseClippingNodeTest.extend({
    _outerClipper:null,
    _holes:null,
    _holesStencil:null,

    setup:function () {
        var target = cc.Sprite.create(s_pathBlock);
        target.setAnchorPoint(0,0);
        target.setScale(3);

        var size = target.getContentSize();
        var scale = target.getScale();
        var stencil = cc.DrawNode.create();
        var rectangle = [cc.p(0, 0),cc.p(size.width*scale, 0),
            cc.p(size.width*scale, size.height*scale),
            cc.p(0, size.height*scale)];
        stencil.drawPoly(rectangle, cc.c4f(1, 0, 0, 1), 0, cc.c4f(1, 1, 1, 0));

        this._outerClipper = cc.ClippingNode.create();
        this._outerClipper.retain();
        var transform = cc.AffineTransformMakeIdentity();
        transform = cc.AffineTransformScale(transform, target.getScale(), target.getScale());

        this._outerClipper.setContentSize(cc.SizeApplyAffineTransform(target.getContentSize(), transform));
        this._outerClipper.setAnchorPoint(0.5, 0.5);
        this._outerClipper.setPosition(cc.pMult(cc.pFromSize(this.getContentSize()), 0.5));
        this._outerClipper.runAction(cc.RepeatForever.create(cc.RotateBy.create(1, 45)));

        this._outerClipper.setStencil(stencil);

        var holesClipper = cc.ClippingNode.create();
        holesClipper.setInverted(true);
        holesClipper.setAlphaThreshold(0.05);

        holesClipper.addChild(target);

        this._holes = cc.Node.create();
        this._holes.retain();

        holesClipper.addChild(this._holes);

        this._holesStencil = cc.Node.create();
        this._holesStencil.retain();

        holesClipper.setStencil(this._holesStencil);

        this._outerClipper.addChild(holesClipper);

        this.addChild(this._outerClipper);

        this.setTouchEnabled(true);
    },

    title:function () {
        return "Hole Demo";
    },

    subtitle:function () {
        return "Touch/click to poke holes";
    },

    pokeHoleAtPoint:function (point) {
        var scale = Math.random() * 0.2 + 0.9;
        var rotation = Math.random() * 360;

        var hole = cc.Sprite.create(s_hole_effect_png);
        hole.setPosition(point);
        hole.setRotation(rotation);
        hole.setScale(scale);

        this._holes.addChild(hole);

        var holeStencil = cc.Sprite.create(s_hole_stencil_png);
        holeStencil.setPosition(point);
        holeStencil.setRotation(rotation);
        holeStencil.setScale(scale);

        this._holesStencil.addChild(holeStencil);
        this._outerClipper.runAction(cc.Sequence.create(cc.ScaleBy.create(0.05, 0.95), cc.ScaleTo.create(0.125, 1)));
    },

    onTouchesBegan:function (touches, event) {
        var touch = touches[0];
        var point = this._outerClipper.convertToNodeSpace(touch.getLocation());
        var rect = cc.rect(0, 0, this._outerClipper.getContentSize().width, this._outerClipper.getContentSize().height);
        if (!cc.rectContainsPoint(rect,point))
            return;
        this.pokeHoleAtPoint(point);
    }
});

var ScrollViewDemo = BaseClippingNodeTest.extend({
    _scrolling:false,
    _lastPoint:null,

    title:function () {
        return "Scroll View Demo";
    },

    subtitle:function () {
        return "Move/drag to scroll the content";
    },

    setup:function () {
        var clipper = cc.ClippingNode.create();
        clipper.setTag(TAG_CLIPPERNODE);
        clipper.setContentSize(200, 200);
        clipper.setAnchorPoint(0.5, 0.5);
        clipper.setPosition(this.getContentSize().width / 2, this.getContentSize().height / 2);
        clipper.runAction(cc.RepeatForever.create(cc.RotateBy.create(1, 45)));
        this.addChild(clipper);

        var stencil = cc.DrawNode.create();
        var rectangle = [cc.p(0, 0),cc.p(clipper.getContentSize().width, 0),
            cc.p(clipper.getContentSize().width, clipper.getContentSize().height),
            cc.p(0, clipper.getContentSize().height)];

        var white = cc.c4f(1, 1, 1, 1);
        stencil.drawPoly(rectangle, white, 1, white);
        clipper.setStencil(stencil);

        var content = cc.Sprite.create(s_back2);
        content.setTag(TAG_CONTENTNODE);
        content.setAnchorPoint(0.5, 0.5);
        content.setPosition(clipper.getContentSize().width / 2, clipper.getContentSize().height / 2);
        clipper.addChild(content);

        this._scrolling = false;
        this.setTouchEnabled(true);
    },

    onTouchesBegan:function (touches, event) {
        if(!touches || touches.length == 0)
            return;

        var touch =  touches[0];
        var clipper = this.getChildByTag(TAG_CLIPPERNODE);
        var point = clipper.convertToNodeSpace(touch.getLocation());
        var rect = cc.rect(0, 0, clipper.getContentSize().width, clipper.getContentSize().height);
        this._scrolling = cc.rectContainsPoint(rect,point);
        this._lastPoint = point;
    },

    onTouchesMoved:function (touches, event) {
        if (!this._scrolling)
            return;

        if(!touches || touches.length == 0)
            return;
        var touch =  touches[0];
        var clipper = this.getChildByTag(TAG_CLIPPERNODE);
        var point = clipper.convertToNodeSpace(touch.getLocation());
        var diff = cc.pSub(point, this._lastPoint);
        var content = clipper.getChildByTag(TAG_CONTENTNODE);
        content.setPosition(cc.pAdd(content.getPosition(), diff));
        this._lastPoint = point;
    },

    onTouchesEnded:function (touches, event) {
        if (!this._scrolling) return;
        this._scrolling = false;
    }
});

var _stencilBits = -1;
var _alphaThreshold = 0.05;
var _PLANE_COUNT = 8;

var _planeColor = [
    cc.c4f(0, 0, 0, 0.65),
    cc.c4f(0.7, 0, 0, 0.6),
    cc.c4f(0, 0.7, 0, 0.55),
    cc.c4f(0, 0, 0.7, 0.5),
    cc.c4f(0.7, 0.7, 0, 0.45),
    cc.c4f(0, 0.7, 0.7, 0.4),
    cc.c4f(0.7, 0, 0.7, 0.35),
    cc.c4f(0.7, 0.7, 0.7, 0.3)
];

var RawStencilBufferTest = BaseClippingNodeTest.extend({
    _sprite:null,

    title:function () {
        return "Raw Stencil Tests";
    },

    subtitle:function () {
        return "1:Default";
    },

    setup:function () {
        _stencilBits = cc.renderContext.getParameter(cc.renderContext.STENCIL_BITS);
        if (_stencilBits < 3)
            cc.log("Stencil must be enabled for the current CCGLView.");

        this._sprite = cc.Sprite.create(s_pathGrossini);
        this._sprite.setAnchorPoint(  cc.p(0.5, 0) );
        this._sprite.setScale( 2.5 );
        cc.Director.getInstance().setAlphaBlending(true);
    },

    draw:function (ctx) {
        var gl = ctx || cc.renderContext;
        var winPoint = cc.pFromSize(cc.Director.getInstance().getWinSize());
        var planeSize = cc.pMult(winPoint, 1.0 / _PLANE_COUNT);

        gl.enable(gl.STENCIL_TEST);
        //cc.CHECK_GL_ERROR_DEBUG();

        for (var i = 0; i < _PLANE_COUNT; i++) {
            var stencilPoint = cc.pMult(planeSize, _PLANE_COUNT - i);
            stencilPoint.x = winPoint.x;

            var spritePoint = cc.pMult(planeSize, i);
            spritePoint.x += planeSize.x / 2;
            spritePoint.y = 0;
            this._sprite.setPosition( spritePoint );

            this.setupStencilForClippingOnPlane(i);
            //cc.CHECK_GL_ERROR_DEBUG();

            cc.drawingUtil.drawSolidRect(cc.POINT_ZERO, stencilPoint, cc.c4f(1, 1, 1, 1));

            cc.kmGLPushMatrix();
            this.transform();
            this._sprite.visit();
            cc.kmGLPopMatrix();

            this.setupStencilForDrawingOnPlane(i);
            //cc.CHECK_GL_ERROR_DEBUG();

            cc.drawingUtil.drawSolidRect(cc.POINT_ZERO, winPoint, _planeColor[i]);

            cc.kmGLPushMatrix();
            this.transform();
            this._sprite.visit();
            cc.kmGLPopMatrix();
        }

        gl.disable(gl.STENCIL_TEST);
        //cc.CHECK_GL_ERROR_DEBUG();
    },

    setupStencilForClippingOnPlane:function (plane) {
        var gl = cc.renderContext;
        var planeMask = 0x1 << plane;
        gl.stencilMask(planeMask);
        gl.clearStencil(0x0);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        gl.flush();
        gl.stencilFunc(gl.NEVER, planeMask, planeMask);
        gl.stencilOp(gl.REPLACE, gl.KEEP, gl.KEEP);
    },

    setupStencilForDrawingOnPlane:function (plane) {
        var gl = cc.renderContext;
        var planeMask = 0x1 << plane;
        var equalOrLessPlanesMask = planeMask | (planeMask - 1);
        gl.stencilFunc(gl.EQUAL, equalOrLessPlanesMask, equalOrLessPlanesMask);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    }
});

var RawStencilBufferTest2 = RawStencilBufferTest.extend({
    subtitle:function () {
        return "2:DepthMask:FALSE";
    },

    setupStencilForClippingOnPlane:function (plane) {
        this._super(plane);
        cc.renderContext.depthMask(false);
    },

    setupStencilForDrawingOnPlane:function (plane) {
        cc.renderContext.depthMask(true);
        this._super(plane);
    }
});

var RawStencilBufferTest3 = RawStencilBufferTest.extend({
    subtitle:function () {
        return "3:DepthTest:DISABLE,DepthMask:FALSE";
    },

    setupStencilForClippingOnPlane:function (plane) {
        var gl = cc.renderContext;
        this._super(plane);
        gl.disable(gl.DEPTH_TEST);
        gl.depthMask(false);
    },

    setupStencilForDrawingOnPlane:function (plane) {
        var gl = cc.renderContext;
        gl.depthMask(true);
        //gl.enable(gl.DEPTH_TEST);
        this._super(plane);
    }
});

var RawStencilBufferTest4 = RawStencilBufferTest.extend({
    subtitle:function () {
        return "4:DepthMask:FALSE,AlphaTest:ENABLE";
    },

    setupStencilForClippingOnPlane:function (plane) {
        var gl = cc.renderContext;
        this._super(plane);
        gl.depthMask(false);

        var program = cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURECOLORALPHATEST);
        var alphaValueLocation = gl.getUniformLocation(program.getProgram(),cc.UNIFORM_ALPHA_TEST_VALUE_S);
        cc.glUseProgram(program.getProgram());
        program.setUniformLocationWith1f(alphaValueLocation, _alphaThreshold);
        this._sprite.setShaderProgram(program );
    },

    setupStencilForDrawingOnPlane:function (plane) {
        cc.renderContext.depthMask(true);
        this._super(plane);
    }
});

var RawStencilBufferTest5 = RawStencilBufferTest.extend({
    subtitle:function () {
        return "5:DepthTest:DISABLE,DepthMask:FALSE,AlphaTest:ENABLE";
    },

    setupStencilForClippingOnPlane:function (plane) {
        var gl = cc.renderContext;
        this._super(plane);
        gl.disable(gl.DEPTH_TEST);
        gl.depthMask(false);

        var program = cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURECOLORALPHATEST);
        var alphaValueLocation = gl.getUniformLocation(program.getProgram(), cc.UNIFORM_ALPHA_TEST_VALUE_S);
        cc.glUseProgram(program.getProgram());
        program.setUniformLocationWith1f(alphaValueLocation, _alphaThreshold);
        this._sprite.setShaderProgram( program );
    },

    setupStencilForDrawingOnPlane:function (plane) {
        cc.renderContext.depthMask(true);
        //cc.renderContext.enable(cc.renderContext.DEPTH_TEST);
        this._super(plane);
    }
});

var RawStencilBufferTest6 = RawStencilBufferTest.extend({
    subtitle:function () {
        return "6:ManualClear,AlphaTest:ENABLE";
    },

    setup:function () {
        cc.renderContext.stencilMask(~0);
        this._super();
    },

    setupStencilForClippingOnPlane:function (plane) {
        var gl = cc.renderContext;
        var planeMask = 0x1 << plane;
        gl.stencilMask(planeMask);
        gl.stencilFunc(gl.NEVER, 0, planeMask);
        gl.stencilOp(gl.REPLACE, gl.KEEP, gl.KEEP);
        cc.drawingUtil.drawSolidRect(cc.POINT_ZERO, cc.pFromSize(cc.Director.getInstance().getWinSize()), cc.c4f(1, 1, 1, 1));
        gl.stencilFunc(gl.NEVER, planeMask, planeMask);
        gl.stencilOp(gl.REPLACE, gl.KEEP, gl.KEEP);
        gl.disable(gl.DEPTH_TEST);
        gl.depthMask(false);

        var program = cc.ShaderCache.getInstance().programForKey(cc.SHADER_POSITION_TEXTURECOLORALPHATEST);
        var alphaValueLocation = gl.getUniformLocation(program.getProgram(), cc.UNIFORM_ALPHA_TEST_VALUE_S);
        cc.glUseProgram(program.getProgram());
        program.setUniformLocationWith1f(alphaValueLocation, _alphaThreshold);
        this._sprite.setShaderProgram(program);

        gl.flush();
    },

    setupStencilForDrawingOnPlane:function (plane) {
        var gl = cc.renderContext;
        gl.depthMask(true);
        //gl.enable(gl.DEPTH_TEST);
        this._super(plane);
        gl.flush();
    }
});

var arrayOfClippingNodeTest = [
    ScrollViewDemo,
    ShapeTest,
    SpriteTest
];

if (sys.platform === 'browser' && ("opengl" in sys.capabilities)) {
    arrayOfClippingNodeTest.push(
    RawStencilBufferTest,
    RawStencilBufferTest2,
    RawStencilBufferTest3,
    RawStencilBufferTest4,
    RawStencilBufferTest5,
    RawStencilBufferTest6);
}
if ( sys.platform !== 'browser'){
    //These tests don't support to HTML5
    arrayOfClippingNodeTest.push(
        ShapeInvertedTest,
        SpriteNoAlphaTest,
        SpriteInvertedTest,
        NestedTest);
} else {
    arrayOfClippingNodeTest.push(HoleDemo);
}

var nextClippingNodeTest = function () {
    clippingNodeTestSceneIdx++;
    clippingNodeTestSceneIdx = clippingNodeTestSceneIdx % arrayOfClippingNodeTest.length;
    return new arrayOfClippingNodeTest[clippingNodeTestSceneIdx]();
};

var previousClippingNodeTest = function () {
    clippingNodeTestSceneIdx--;
    if (clippingNodeTestSceneIdx < 0)
        clippingNodeTestSceneIdx += arrayOfClippingNodeTest.length;
    return new arrayOfClippingNodeTest[clippingNodeTestSceneIdx]();
};

var restartClippingNodeTest = function () {
    return new arrayOfClippingNodeTest[clippingNodeTestSceneIdx]();
};

var ClippingNodeTestScene = TestScene.extend({
    runThisTest:function () {
        clippingNodeTestSceneIdx = -1;
        var layer = nextClippingNodeTest();
        this.addChild(layer);
        cc.Director.getInstance().replaceScene(this);
    }
});