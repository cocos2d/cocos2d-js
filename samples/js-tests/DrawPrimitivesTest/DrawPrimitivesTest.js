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

var drawTestSceneIdx = -1;

//------------------------------------------------------------------
//
// DrawTestDemo
//
//------------------------------------------------------------------
var DrawTestDemo = BaseTestLayer.extend({
    _title:"",
    _subtitle:"",

    ctor:function() {
        this._super(cc.c4b(0,0,0,255), cc.c4b(98,99,117,255));
    },

    onRestartCallback:function (sender) {
        var s = new DrawPrimitivesTestScene();
        s.addChild(restartDrawTest());
        director.replaceScene(s);
    },
    onNextCallback:function (sender) {
        var s = new DrawPrimitivesTestScene();
        s.addChild(nextDrawTest());
        director.replaceScene(s);
    },
    onBackCallback:function (sender) {
        var s = new DrawPrimitivesTestScene();
        s.addChild(previousDrawTest());
        director.replaceScene(s);
    },
    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfDrawTest.length-1) - drawTestSceneIdx );
    },

    getTestNumber:function() {
        return drawTestSceneIdx;
    }

});

//------------------------------------------------------------------
//
// Draw Old API Test
//
//------------------------------------------------------------------
var DrawOldAPITest = DrawTestDemo.extend({
    ctor:function(){
        this._super();
        this.setAnchorPoint(0,0);
    },

    draw:function () {
        this._super();
        var s = cc.Director.getInstance().getWinSize();

        cc.drawingUtil.setDrawColor4B(255,255,255,255);
        // draw a simple line
        // The default state is:
        // Line Width: 1
        // color: 255,255,255,255 (white, non-transparent)
        // Anti-Aliased
        cc.drawingUtil.drawLine(cc.p(0, 0), cc.p(s.width, s.height));

        // line: color, width, aliased
        // glLineWidth > 1 and GL_LINE_SMOOTH are not compatible
        // GL_SMOOTH_LINE_WIDTH_RANGE = (1,1) on iPhone
        cc.drawingUtil.setDrawColor4B(255,0,0,255);
        cc.drawingUtil.setLineWidth(5);

        /*glColor4ub(255,0,0,255);*/
        //glColor4f(1.0, 0.0, 0.0, 1.0);
        cc.drawingUtil.drawLine(cc.p(0, s.height), cc.p(s.width, 0));

        // TIP:
        // If you are going to use always the same color or width, you don't
        // need to call it before every draw
        //
        // Remember: OpenGL is a state-machine.

        // draw big point in the center
        /*glColor4ub(0,0,255,128);*/
        //glColor4f(0.0, 0.0, 1.0, 0.5);
        cc.drawingUtil.setDrawColor4B(0,0,255,127);
        cc.drawingUtil.drawPoint(cc.p(s.width / 2, s.height / 2), 40);

        // draw 4 small points
        var points = [cc.p(60, 60), cc.p(70, 70), cc.p(60, 70), cc.p(70, 60)];
        /*glColor4ub(0,255,255,255);*/
        cc.drawingUtil.setDrawColor4B(0,255,255,255);
        //glColor4f(0.0, 1.0, 1.0, 1.0);
        cc.drawingUtil.drawPoints(points, 4, 4);

        // draw a green circle with 10 segments
        //glLineWidth(16);
        cc.drawingUtil.setLineWidth(16);
        /*glColor4ub(0, 255, 0, 255);*/
        //glColor4f(0.0, 1.0, 0.0, 1.0);
        cc.drawingUtil.setDrawColor4B(0,255,0,255);
        cc.drawingUtil.drawCircle(cc.p(s.width / 2, s.height / 2), 100, 0, 10, false);

        // draw a green circle with 50 segments with line to center
        //glLineWidth(2);
        cc.drawingUtil.setLineWidth(2);
        /*glColor4ub(0, 255, 255, 255);*/
        //glColor4f(0.0, 1.0, 1.0, 1.0);
        cc.drawingUtil.setDrawColor4B(0,255,255,255);
        cc.drawingUtil.drawCircle(cc.p(s.width / 2, s.height / 2), 50, cc.DEGREES_TO_RADIANS(90), 50, true);

        // open yellow poly
        /*glColor4ub(255, 255, 0, 255);*/
        //glColor4f(1.0, 1.0, 0.0, 1.0);
        cc.drawingUtil.setDrawColor4B(255,255,0,255);
        //glLineWidth(10);
        cc.drawingUtil.setLineWidth(10);
        var vertices = [cc.p(0, 0), cc.p(50, 50), cc.p(100, 50), cc.p(100, 100), cc.p(50, 100) ];
        cc.drawingUtil.drawPoly(vertices, 5, false);

        // closed purble poly
        /*glColor4ub(255, 0, 255, 255);*/
        //glColor4f(1.0, 0.0, 1.0, 1.0);
        cc.drawingUtil.setDrawColor4B(255,0,255,255);
        //glLineWidth(2);
        cc.drawingUtil.setLineWidth(2);
        var vertices2 = [cc.p(30, 130), cc.p(30, 230), cc.p(50, 200)];
        cc.drawingUtil.drawPoly(vertices2, 3, true);

        // draw quad bezier path
        cc.drawingUtil.drawQuadBezier(cc.p(0, s.height), cc.p(s.width / 2, s.height / 2), cc.p(s.width, s.height), 50);

        // draw cubic bezier path
        cc.drawingUtil.drawCubicBezier(cc.p(s.width / 2, s.height / 2), cc.p(s.width / 2 + 30, s.height / 2 + 50),
            cc.p(s.width / 2 + 60, s.height / 2 - 50), cc.p(s.width, s.height / 2), 100);

        // restore original values
        cc.drawingUtil.setLineWidth(1);
        //glLineWidth(1);
        /*glColor4ub(255,255,255,255);*/
        //glColor4f(1.0, 1.0, 1.0, 1.0);
        //glPointSize(1);
        cc.drawingUtil.setDrawColor4B(255,255,255,255);
    }
});

//------------------------------------------------------------------
//
// Draw New API Test
//
//------------------------------------------------------------------
var DrawNewAPITest = DrawTestDemo.extend({
    _title : "cc.DrawNode",
    _subtitle : "Testing cc.DrawNode API",

    ctor:function() {
        this._super();

        var draw = cc.DrawNode.create();
        this.addChild( draw, 10 );

        //
        // Circles
        //
        for( var i=0; i < 10; i++) {
            draw.drawDot( cc.p(winSize.width/2, winSize.height/2), 10*(10-i), cc.c4f( Math.random(), Math.random(), Math.random(), 1) );
        }

        //
        // Polygons
        //
        var points = [ cc.p(winSize.height/4,0), cc.p(winSize.width,winSize.height/5), cc.p(winSize.width/3*2,winSize.height) ];
        draw.drawPoly(points, cc.c4f(1,0,0,0.5), 4, cc.c4f(0,0,1,1) );

        // star poly (triggers bugs)
        var o=80;
        var w=20;
        var h=50;
        var star = [
            cc.p(o+w,o-h), cc.p(o+w*2, o),                  // lower spike
            cc.p(o + w*2 + h, o+w ), cc.p(o + w*2, o+w*2),  // right spike
            cc.p(o +w, o+w*2+h), cc.p(o,o+w*2),             // top spike
            cc.p(o -h, o+w), cc.p(o,o)                     // left spike
        ];
        draw.drawPoly(star, cc.c4f(1,0,0,0.5), 1, cc.c4f(0,0,1,1) );

        // star poly (doesn't trigger bug... order is important un tesselation is supported.
        o=180;
        w=20;
        h=50;
        star = [
            cc.p(o,o), cc.p(o+w,o-h), cc.p(o+w*2, o),       // lower spike
            cc.p(o + w*2 + h, o+w ), cc.p(o + w*2, o+w*2),  // right spike
            cc.p(o +w, o+w*2+h), cc.p(o,o+w*2),             // top spike
            cc.p(o -h, o+w)                                 // left spike
        ];
        draw.drawPoly(star, cc.c4f(1,0,0,0.5), 1, cc.c4f(0,0,1,1) );

        //
        // Segments
        //
        draw.drawSegment( cc.p(20,winSize.height), cc.p(20,winSize.height/2), 10, cc.c4f(0, 1, 0, 1) );
        draw.drawSegment( cc.p(10,winSize.height/2), cc.p(winSize.width/2, winSize.height/2), 40, cc.c4f(1, 0, 1, 0.5) );
    }
});


//
//
var DrawPrimitivesTestScene = TestScene.extend({
    runThisTest:function () {
        drawTestSceneIdx = -1;
        var layer = nextDrawTest();
        this.addChild(layer);

        director.replaceScene(this);
    }
});

//
// Flow control
//

var arrayOfDrawTest = [
    DrawNewAPITest
];

if( sys.platform === 'browser' ) {
    arrayOfDrawTest.push( DrawOldAPITest );
}

var nextDrawTest = function () {
    drawTestSceneIdx++;
    drawTestSceneIdx = drawTestSceneIdx % arrayOfDrawTest.length;

    return new arrayOfDrawTest[drawTestSceneIdx]();
};
var previousDrawTest = function () {
    drawTestSceneIdx--;
    if (drawTestSceneIdx < 0)
        drawTestSceneIdx += arrayOfDrawTest.length;

    return new arrayOfDrawTest[drawTestSceneIdx]();
};
var restartDrawTest = function () {
    return new arrayOfDrawTest[drawTestSceneIdx]();
};

