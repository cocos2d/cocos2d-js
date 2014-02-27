/****************************************************************************

 http://www.cocos2d-html5.org
 http://www.cocos2d-iphone.org
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

var sceneRenderTextureIdx = -1;

var RenderTextureBaseLayer = BaseTestLayer.extend({
    ctor:function () {
        this._super(cc.c4b(0,0,0,255), cc.c4b(98,99,117,255) );
    },

    title:function () {
        return "Render Texture";
    },

    subtitle:function () {
        return "";
    },

    code:function () {
        return "";
    },

    // callbacks
    onRestartCallback:function (sender) {
        var s = new RenderTextureTestScene();
        s.addChild(restartRenderTextureTest());
        director.replaceScene(s);
    },
    onNextCallback:function (sender) {
        var s = new RenderTextureTestScene();
        s.addChild(nextRenderTextureTest());
        director.replaceScene(s);
    },
    onBackCallback:function (sender) {
        var s = new RenderTextureTestScene();
        s.addChild(previousRenderTextureTest());
        director.replaceScene(s);
    },

    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfRenderTextureTest.length-1) - sceneRenderTextureIdx );
    },

    getTestNumber:function() {
        return sceneRenderTextureIdx;
    }
});

//------------------------------------------------------------------
//
// Tests
//
//------------------------------------------------------------------
var RenderTextureSave = RenderTextureBaseLayer.extend({
    _brush:null,
    _target:null,
    _lastLocation:null,
    _counter:0,

    onEnter:function () {
        this._super();

        if ('touches' in sys.capabilities)
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities)
            this.setMouseEnabled(true);

        this._brush = cc.Sprite.create(s_fire);
        this._brush.retain();

        this._brush.setColor(cc.red());
        this._brush.setOpacity(20);

        var save = cc.MenuItemFont.create("Save", this.saveCB, this);
        var clear = cc.MenuItemFont.create("Clear", this.clearCB.bind(this)); // another way to pass 'this'
        var menu = cc.Menu.create(save, clear);
        // var menu = cc.Menu.create(clear);
        menu.alignItemsVertically();
        menu.setPosition(winSize.width - 70, winSize.height - 80);
        this.addChild(menu, 10);

        // create a render texture
        var target = cc.RenderTexture.create(winSize.width, winSize.height);
        target.setPosition(winSize.width / 2, winSize.height / 2);
        this.addChild(target, 1);

        this._target = target;

        this._lastLocation = cc.p(winSize.width / 2, winSize.height / 2);
    },

    onExit:function () {
        this._brush.release();
        this._super();
    },

    saveCB:function (sender) {
        if(sys.platform === "browser"){
            cc.log("RenderTexture's saveToFile doesn't suppport on HTML5");
            return;
        }
        var namePNG = "image-" + this._counter + ".png";
        var nameJPG = "image-" + this._counter + ".jpg";

        this._target.saveToFile(nameJPG, cc.IMAGE_FORMAT_JPEG);
        this._target.saveToFile(namePNG, cc.IMAGE_FORMAT_PNG);

        cc.log("images saved!");
        this._counter++;
    },

    clearCB:function (sender) {
        this._target.clear(Math.random(), Math.random(), Math.random(), 1);
    },

    drawInLocation:function (location) {
        var distance = cc.pDistance(location, this._lastLocation);

        if (distance > 1) {
            var locBrush = this._brush, locLastLocation = this._lastLocation;
            this._target.begin();
            for (var i = 0; i < distance; i++) {
                var diffX = locLastLocation.x - location.x;
                var diffY = locLastLocation.y - location.y;

                var delta = i / distance;

                locBrush.setPosition(location.x + diffX * delta, location.y + diffY * delta);
                locBrush.setRotation(Math.random() * 360);
                locBrush.setScale(Math.random() * 2);
                locBrush.setColor(cc.c3b(Math.random() * 255, 255, 255));
                locBrush.visit();
            }
            this._target.end();
        }
        this._lastLocation = location;
    },

    onTouchesBegan:function (touches, event) {
        this._lastLocation = touches[0].getLocation();
        return true;
    },

    onTouchesMoved:function (touches, event) {
        this.drawInLocation(touches[0].getLocation());
        return true;
    },

    onMouseDown:function (event) {
        this._lastLocation = event.getLocation();
        return true;
    },

    onMouseDragged:function (event) {
        this.drawInLocation(event.getLocation());
        return true;
    },

    subtitle:function () {
        return "Testing 'save'";
    }
});

var RenderTextureIssue937 = RenderTextureBaseLayer.extend({
    ctor:function () {
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();
        /*
         *     1    2
         * A: A1   A2
         *
         * B: B1   B2
         *
         *  A1: premulti sprite
         *  A2: premulti render
         *
         *  B1: non-premulti sprite
         *  B2: non-premulti render
         */
        var background = cc.LayerColor.create(cc.c4b(200, 200, 200, 255));
        this.addChild(background);

        var spr_premulti = cc.Sprite.create(s_fire);
        spr_premulti.setPosition(16, 48);

        var spr_nonpremulti = cc.Sprite.create(s_fire);
        spr_nonpremulti.setPosition(16, 16);

        /* A2 & B2 setup */
        var rend = cc.RenderTexture.create(32, 64, cc.TEXTURE_2D_PIXEL_FORMAT_RGBA8888);
        if (!rend)
            return;
        // It's possible to modify the RenderTexture blending function by
        //        [[rend sprite] setBlendFunc:(ccBlendFunc) {GL_ONE, GL_ONE_MINUS_SRC_ALPHA}];
        //rend.getSprite().setBlendFunc(cc.renderContext.ONE, cc.renderContext.ONE_MINUS_SRC_ALPHA);
        rend.begin();
        spr_premulti.visit();
        spr_nonpremulti.visit();
        rend.end();

        /* A1: setup */
        spr_premulti.setPosition(winSize.width / 2 - 16, winSize.height / 2 + 16);
        /* B1: setup */
        spr_nonpremulti.setPosition(winSize.width / 2 - 16, winSize.height / 2 - 16);

        rend.setPosition(winSize.width / 2 + 16, winSize.height / 2);
        //background.setVisible(false);
        this.addChild(spr_nonpremulti);
        this.addChild(spr_premulti);
        this.addChild(rend);
    },

    title:function () {
        return "Testing issue #937";
    },

    subtitle:function () {
        return "All images should be equal..";
    }
});

var RenderTextureZbuffer = RenderTextureBaseLayer.extend({
    mgr:null,
    sp1:null,
    sp2:null,
    sp3:null,
    sp4:null,
    sp5:null,
    sp6:null,
    sp7:null,
    sp8:null,
    sp9:null,

    ctor:function () {
        this._super();
        this.setTouchEnabled(true);
        var size = cc.Director.getInstance().getWinSize();
        var label = cc.LabelTTF.create("vertexZ = 50", "Marker Felt", 64);
        label.setPosition(size.width / 2, size.height * 0.25);
        this.addChild(label);

        var label2 = cc.LabelTTF.create("vertexZ = 0", "Marker Felt", 64);
        label2.setPosition(size.width / 2, size.height * 0.5);
        this.addChild(label2);

        var label3 = cc.LabelTTF.create("vertexZ = -50", "Marker Felt", 64);
        label3.setPosition(size.width / 2, size.height * 0.75);
        this.addChild(label3);

        label.setVertexZ(50);
        label2.setVertexZ(0);
        label3.setVertexZ(-50);

        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_circle_plist);
        this.mgr = cc.SpriteBatchNode.create(s_circle_png, 9);
        this.addChild(this.mgr);
        this.sp1 = cc.Sprite.createWithSpriteFrameName("circle.png");
        this.sp2 = cc.Sprite.createWithSpriteFrameName("circle.png");
        this.sp3 = cc.Sprite.createWithSpriteFrameName("circle.png");
        this.sp4 = cc.Sprite.createWithSpriteFrameName("circle.png");
        this.sp5 = cc.Sprite.createWithSpriteFrameName("circle.png");
        this.sp6 = cc.Sprite.createWithSpriteFrameName("circle.png");
        this.sp7 = cc.Sprite.createWithSpriteFrameName("circle.png");
        this.sp8 = cc.Sprite.createWithSpriteFrameName("circle.png");
        this.sp9 = cc.Sprite.createWithSpriteFrameName("circle.png");

        this.mgr.addChild(this.sp1, 9);
        this.mgr.addChild(this.sp2, 8);
        this.mgr.addChild(this.sp3, 7);
        this.mgr.addChild(this.sp4, 6);
        this.mgr.addChild(this.sp5, 5);
        this.mgr.addChild(this.sp6, 4);
        this.mgr.addChild(this.sp7, 3);
        this.mgr.addChild(this.sp8, 2);
        this.mgr.addChild(this.sp9, 1);

        this.sp1.setVertexZ(400);
        this.sp2.setVertexZ(300);
        this.sp3.setVertexZ(200);
        this.sp4.setVertexZ(100);
        this.sp5.setVertexZ(0);
        this.sp6.setVertexZ(-100);
        this.sp7.setVertexZ(-200);
        this.sp8.setVertexZ(-300);
        this.sp9.setVertexZ(-400);

        this.sp9.setScale(2);
        this.sp9.setColor(cc.yellow());
    },

    onTouchesBegan:function (touches, event) {
        if (!touches || touches.length === 0)
            return;

        for (var i = 0; i < touches.length; i++) {
            var location = touches[i].getLocation();

            this.sp1.setPosition(location);
            this.sp2.setPosition(location);
            this.sp3.setPosition(location);
            this.sp4.setPosition(location);
            this.sp5.setPosition(location);
            this.sp6.setPosition(location);
            this.sp7.setPosition(location);
            this.sp8.setPosition(location);
            this.sp9.setPosition(location);
        }
    },

    onTouchesMoved:function (touches, event) {
        if (!touches || touches.length === 0)
            return;

        for (var i = 0; i < touches.length; i++) {
            var location = touches[i].getLocation();

            this.sp1.setPosition(location);
            this.sp2.setPosition(location);
            this.sp3.setPosition(location);
            this.sp4.setPosition(location);
            this.sp5.setPosition(location);
            this.sp6.setPosition(location);
            this.sp7.setPosition(location);
            this.sp8.setPosition(location);
            this.sp9.setPosition(location);
        }
    },

    onTouchesEnded:function (touches, event) {
        this.renderScreenShot();
    },

    title:function () {
        return "Testing Z Buffer in Render Texture";
    },

    subtitle:function () {
        return "Touch screen. It should be green";
    },

    renderScreenShot:function () {
        var winSize = cc.Director.getInstance().getWinSize();
        var texture = cc.RenderTexture.create(winSize.width, winSize.width);
        if (!texture)
            return;

        texture.setAnchorPoint(0, 0);
        texture.begin();
        this.visit();
        texture.end();

        var sprite = cc.Sprite.createWithTexture(texture.getSprite().getTexture());

        sprite.setPosition(winSize.width/2, winSize.width/2);
        sprite.setOpacity(182);
        sprite.setFlippedY(1);
        this.addChild(sprite, 999999);
        sprite.setColor(cc.green());

        sprite.runAction(cc.Sequence.create(cc.FadeTo.create(2, 0), cc.Hide.create()));
    }
});

var RenderTextureTestDepthStencil = RenderTextureBaseLayer.extend({
    ctor:function () {
        this._super();
        var gl = cc.renderContext;

        var winSize = cc.Director.getInstance().getWinSize();

        var sprite = cc.Sprite.create(s_fire);
        sprite.setPosition(winSize.width * 0.25, 0);
        sprite.setScale(10);
        //TODO GL_DEPTH24_STENCIL8
        //var rend = cc.RenderTexture.create(winSize.width, winSize.height, cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444);
        var rend = cc.RenderTexture.create(winSize.width, winSize.height);

        gl.stencilMask(0xFF);
        rend.beginWithClear(0, 0, 0, 0, 0, 0);

        //! mark sprite quad into stencil buffer
        gl.enable(gl.STENCIL_TEST);
        gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
        gl.colorMask(0, 0, 0, 1);
        sprite.visit();

        //! move sprite half width and height, and draw only where not marked
        sprite.setPosition(cc.pAdd(sprite.getPosition(), cc.pMult(cc.p(sprite.getContentSize().width * sprite.getScale(), sprite.getContentSize().height * sprite.getScale()), 0.5)));
        gl.stencilFunc(gl.NOTEQUAL, 1, 0xFF);
        gl.colorMask(1, 1, 1, 1);
        sprite.visit();

        rend.end();

        gl.disable(gl.STENCIL_TEST);

        rend.setPosition(winSize.width * 0.5, winSize.height * 0.5);

        this.addChild(rend);
    },

    title:function () {
        return "Testing depthStencil attachment";
    },

    subtitle:function () {
        return "Circle should be missing 1/4 of its region";
    }
});

var RenderTextureTargetNode = RenderTextureBaseLayer.extend({
    _sprite1:null,
    _sprite2:null,
    _time:0,
    _winSize:null,

    _renderTexture:null,

    ctor:function () {
        this._super();
        /*
         *     1    2
         * A: A1   A2
         *
         * B: B1   B2
         *
         *  A1: premulti sprite
         *  A2: premulti render
         *
         *  B1: non-premulti sprite
         *  B2: non-premulti render
         */
        var background = cc.LayerColor.create(cc.c4b(40, 40, 40, 255));
        this.addChild(background);

        var winSize = cc.Director.getInstance().getWinSize();
        this._winSize = winSize;

        // sprite 1
        var sprite1 = cc.Sprite.create(s_fire);
        sprite1.setPosition(winSize.width, winSize.height);
        this._sprite1 = sprite1;

        // sprite 2
        //todo Images/fire_rgba8888.pvr
        var sprite2 = cc.Sprite.create(s_fire);
        sprite2.setPosition(winSize.width, winSize.height);
        this._sprite2 = sprite2;

        /* Create the render texture */
        //var renderTexture = cc.RenderTexture.create(winSize.width, winSize.height, cc.TEXTURE_2D_PIXEL_FORMAT_RGBA4444);
        var renderTexture = cc.RenderTexture.create(winSize.width, winSize.height);
        this._renderTexture = renderTexture;

        renderTexture.setPosition(winSize.width / 2, winSize.height / 2);
        //		[renderTexture setPosition:cc.p(s.width, s.height)];
        //		renderTexture.scale = 2;

        /* add the sprites to the render texture */
        renderTexture.addChild(this._sprite1);
        renderTexture.addChild(this._sprite2);
        renderTexture.setClearColor(cc.c4f(0, 0, 0, 0));
        renderTexture.setClearFlags(cc.renderContext.COLOR_BUFFER_BIT);

        /* add the render texture to the scene */
        this.addChild(renderTexture);

        renderTexture.setAutoDraw(true);

        this.scheduleUpdate();

        // Toggle clear on / off
        var item = cc.MenuItemFont.create("Clear On/Off", this.touched, this);
        var menu = cc.Menu.create(item);
        this.addChild(menu);

        menu.setPosition(winSize.width / 2, winSize.height / 2);
    },

    update:function (dt) {
        var r = 80;
        var locWinSize = this._winSize;
        var locTime = this._time;
        this._sprite1.setPosition(Math.cos(locTime * 2) * r + locWinSize.width /2, Math.sin(locTime * 2) * r + locWinSize.height /2);
        this._sprite2.setPosition(Math.sin(locTime * 2) * r + locWinSize.width /2, Math.cos(locTime * 2) * r + locWinSize.height /2);

        this._time += dt;
    },

    title:function () {
        return "Testing Render Target Node";
    },

    subtitle:function () {
        return "Sprites should be equal and move with each frame";
    },

    touched:function (sender) {
        if (this._renderTexture.getClearFlags() == 0)
            this._renderTexture.setClearFlags(cc.renderContext.COLOR_BUFFER_BIT);
        else {
            this._renderTexture.setClearFlags(0);
            this._renderTexture.setClearColor(cc.c4f(Math.random(), Math.random(), Math.random(), 1));
        }
    }
});

//------------------------------------------------------------------
//
// Issue1464
//
//------------------------------------------------------------------
var Issue1464 = RenderTextureBaseLayer.extend({
    _brush : null,
    _target : null,
    _lastLocation : null,
    _counter :0,

    ctor:function() {
        this._super();

        var sprite = cc.Sprite.create(s_grossini);

        // create a render texture
        var rend = cc.RenderTexture.create( winSize.width/2, winSize.height/2 );
        rend.setPosition( winSize.width/2, winSize.height/2 );
        this.addChild( rend, 1 );

        sprite.setPosition(winSize.width/4, winSize.height/4);
        rend.begin();
        sprite.visit();
        rend.end();

        var fadeout = cc.FadeOut.create(2);
        var fadein = fadeout.reverse();
        var delay = cc.DelayTime.create(0.25);
        var seq = cc.Sequence.create(fadeout, delay, fadein, delay.clone());
        var fe = cc.RepeatForever.create(seq);
        rend.getSprite().runAction(fe);

        if (sys.platform === 'browser' && !("opengl" in sys.capabilities)) {
            var label = cc.LabelTTF.create("Not support Actions on HTML5-canvas", "Times New Roman", 30);
            label.setPosition(winSize.width / 2, winSize.height / 2 + 50);
            this.addChild(label, 100);
        }
    },

    title:function () {
        return "Issue 1464";
    },

    subtitle:function () {
        return "Sprites should fade in / out correctly";
    },

    //
    // Automation
    //
    testDuration:2.1,

    getExpectedResult:function() {
        // blue, red, blue
        var ret = {"0":0,"1":0,"2":0,"3":255,"4":0,"5":0,"6":0,"7":255,"8":0,"9":0,"10":0,"11":255,"12":0,"13":0,"14":0,"15":255,"16":0,"17":0,"18":0,"19":255,"20":0,"21":0,"22":0,"23":255,"24":0,"25":0,"26":0,"27":255,"28":0,"29":0,"30":0,"31":255,"32":0,"33":0,"34":0,"35":255,"36":0,"37":0,"38":0,"39":255,"40":0,"41":0,"42":0,"43":255,"44":0,"45":0,"46":0,"47":255,"48":0,"49":0,"50":0,"51":255,"52":0,"53":0,"54":0,"55":255,"56":0,"57":0,"58":0,"59":255,"60":0,"61":0,"62":0,"63":255};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var ret = this.readPixels(winSize.width/2-2, winSize.height/2-2,  4, 4);
        return JSON.stringify(ret);
    }
});


var RenderTextureTestScene = TestScene.extend({
    runThisTest:function () {
        sceneRenderTextureIdx = -1;
        var layer = nextRenderTextureTest();
        this.addChild(layer);

        director.replaceScene(this);
    }
});

//
// Flow control
//
var arrayOfRenderTextureTest = [
    RenderTextureSave,
    Issue1464
];

if(('opengl' in sys.capabilities) && (sys.platform == 'browser') ){
    arrayOfRenderTextureTest.push(RenderTextureIssue937);
    arrayOfRenderTextureTest.push(RenderTextureZbuffer);
    arrayOfRenderTextureTest.push(RenderTextureTestDepthStencil);
    arrayOfRenderTextureTest.push(RenderTextureTargetNode);
}

var nextRenderTextureTest = function () {
    sceneRenderTextureIdx++;
    sceneRenderTextureIdx = sceneRenderTextureIdx % arrayOfRenderTextureTest.length;

    return new arrayOfRenderTextureTest[sceneRenderTextureIdx]();
};
var previousRenderTextureTest = function () {
    sceneRenderTextureIdx--;
    if (sceneRenderTextureIdx < 0)
        sceneRenderTextureIdx += arrayOfRenderTextureTest.length;

    return new arrayOfRenderTextureTest[sceneRenderTextureIdx]();
};
var restartRenderTextureTest = function () {
    return new arrayOfRenderTextureTest[sceneRenderTextureIdx]();
};
