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
var TAG_LABEL = 1;
var TAG_LABEL_SPRITE_MANAGER = 1;
var TAG_ANIMATION1 = 1;
var TAG_BITMAP_ATLAS1 = 1;
var TAG_BITMAP_ATLAS2 = 2;
var TAG_BITMAP_ATLAS3 = 3;

var TAG_LABEL_SPRITE1 = 660;
var TAG_LABEL_SPRITE12 = 661;
var TAG_LABEL_SPRITE13 = 662;
var TAG_LABEL_SPRITE14 = 663;
var TAG_LABEL_SPRITE15 = 664;
var TAG_LABEL_SPRITE16 = 665;
var TAG_LABEL_SPRITE17 = 666;
var TAG_LABEL_SPRITE18 = 667;

var labelTestIdx = -1;

var LabelTestScene = TestScene.extend({
    runThisTest:function () {
        labelTestIdx = -1;
        this.addChild(nextLabelTest());
        director.runScene(this);
    }
});

var AtlasDemo = BaseTestLayer.extend({

    title:function () {
        return "No title";
    },
    subtitle:function () {
        return "";
    },
    onRestartCallback:function (sender) {
        var s = new LabelTestScene();
        s.addChild(restartLabelTest());
        director.runScene(s);

    },
    onNextCallback:function (sender) {
        var s = new LabelTestScene();
        s.addChild(nextLabelTest());
        director.runScene(s);

    },
    onBackCallback:function (sender) {
        var s = new LabelTestScene();
        s.addChild(previousLabelTest());
        director.runScene(s);
    },

    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfLabelTest.length-1) - labelTestIdx );
    },

    getTestNumber:function() {
        return labelTestIdx;
    }

});

//------------------------------------------------------------------
//
// LabelAtlasOpacityTest
//
//------------------------------------------------------------------
var LabelAtlasOpacityTest = AtlasDemo.extend({
    time:null,
    ctor:function () {
        this._super();
        this.time = 0;

        var label1 = cc.LabelAtlas.create("123 Test", s_resprefix + "fonts/tuffy_bold_italic-charmap.plist");
        this.addChild(label1, 0, TAG_LABEL_SPRITE1);
        label1.x = 10;
        label1.y = 100;
        label1.opacity = 200;

        var label2 = cc.LabelAtlas.create("0123456789", s_resprefix + "fonts/tuffy_bold_italic-charmap.plist");
        this.addChild(label2, 0, TAG_LABEL_SPRITE12);
        label2.x = 10;
        label2.y = 200;
        label2.opacity = 32;

        this.schedule(this.step);
    },
    step:function (dt) {
        this.time += dt;

        var label1 = this.getChildByTag(TAG_LABEL_SPRITE1);
        var string1 = this.time.toFixed(2) + " Test";
        label1.setString(string1);

        var label2 = this.getChildByTag(TAG_LABEL_SPRITE12);
        var string2 = parseInt(this.time, 10).toString();
        label2.setString(string2);
    },
    title:function () {
        return "LabelAtlas Opacity";
    },
    subtitle:function () {
        return "Updating label should be fast";
    },

    //
    // Automation
    //
    getExpectedResult:function() {
        // yellow, red, green, blue, yellow
        var ret = [200,32];
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var ret = [];
        var tags = [TAG_LABEL_SPRITE1, TAG_LABEL_SPRITE12];

        for( var i in tags ) {
            var t = tags[i];
            ret.push( this.getChildByTag(t).opacity );
        }
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// LabelAtlasOpacityColorTest
//
//------------------------------------------------------------------
var LabelAtlasOpacityColorTest = AtlasDemo.extend({
    time:null,
    ctor:function () {
        this._super();
        var label1 = cc.LabelAtlas.create("123 Test", s_resprefix + "fonts/tuffy_bold_italic-charmap.png", 48, 64, ' ');
        this.addChild(label1, 0, TAG_LABEL_SPRITE1);
        label1.x = 10;
        label1.y = 100;
        label1.opacity = 200;

        var label2 = cc.LabelAtlas.create("0123456789", s_resprefix + "fonts/tuffy_bold_italic-charmap.png", 48, 64, ' ');
        this.addChild(label2, 0, TAG_LABEL_SPRITE12);
        label2.x = 10;
        label2.y = 200;
        label2.color = cc.color(255, 0, 0);

        var fade = cc.FadeOut.create(1.0);
        var fade_in = fade.reverse();
        var delay = cc.DelayTime.create(0.25);
        var seq = cc.Sequence.create(fade, delay, fade_in, delay.clone());
        var repeat = cc.RepeatForever.create(seq);
        label2.runAction(repeat);

        this.time = 0;

        this.schedule(this.step);
    },
    step:function (dt) {
        this.time += dt;
        var string1 = this.time.toFixed(2) + " Test";
        var label1 = this.getChildByTag(TAG_LABEL_SPRITE1);
        label1.setString(string1);

        var label2 = this.getChildByTag(TAG_LABEL_SPRITE12);
        var string2 = parseInt(this.time, 10).toString();
        label2.setString(string2);
    },
    title:function () {
        return "LabelAtlas Opacity Color";
    },
    subtitle:function () {
        return "Opacity + Color should work at the same time";
    },

    //
    // Automation
    //
    testDuration:1,
    getExpectedResult:function() {
        // yellow, red, green, blue, yellow
        var ret = [200,{"r":255,"g":255,"b":255},0,{"r":255,"g":0,"b":0}];
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var ret = [];
        var tags = [TAG_LABEL_SPRITE1, TAG_LABEL_SPRITE12];

        for( var i in tags ) {
            var t = tags[i];
            ret.push( this.getChildByTag(t).opacity );
            ret.push( this.getChildByTag(t).color );
        }
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// LabelAtlasHD
//
//------------------------------------------------------------------
var LabelAtlasHD = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();

        // cc.LabelBMFont
        var label1 = cc.LabelAtlas.create("TESTING RETINA DISPLAY", s_resprefix + "fonts/larabie-16.plist");
        label1.anchorX = 0.5;
        label1.anchorY = 0.5;

        this.addChild(label1);
        label1.x = s.width / 2;
        label1.y = s.height / 2;
    },
    title:function () {
        return "LabelAtlas with Retina Display";
    },
    subtitle:function () {
        return "loading larabie-16 / larabie-16-hd";
    },


    //
    // Automation
    //

    pixel: {"0": 255, "1": 255, "2": 255, "3": 255},

    getExpectedResult:function() {

        // var ret = [{"0":0,"1":0,"2":226,"3":255},{"0":47,"1":0,"2":0,"3":255},{"0":0,"1":47,"2":0,"3":255}];
        var s = director.getWinSize();
        var ret = {"center": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2, s.height/2, 100, 100);

        var ret = {"center": this.containsPixel(ret2, this.pixel) ? "yes" : "no"};

        return JSON.stringify(ret);
    }
});


//------------------------------------------------------------------
//
// BMFontOpacityColorAlignmentTest
//
//------------------------------------------------------------------
var BMFontOpacityColorAlignmentTest = AtlasDemo.extend({
    time:0,
    ctor:function () {
        this._super();
        var col = cc.LayerColor.create(cc.color(128, 128, 128, 255));
        this.addChild(col, -10);

        var label1 = cc.LabelBMFont.create("Test", s_resprefix + "fonts/bitmapFontTest2.fnt");

        // testing anchors
        label1.anchorX = 0;
        label1.anchorY = 0;
        this.addChild(label1, 0, TAG_BITMAP_ATLAS1);
        var fade = cc.FadeOut.create(1.0);
        var fade_in = fade.reverse();
        var seq = cc.Sequence.create(fade, cc.DelayTime.create(0.25), fade_in);
        var repeat = cc.RepeatForever.create(seq);
        label1.runAction(repeat);

        // VERY IMPORTANT
        // color and opacity work OK because bitmapFontAltas2 loads a BMP image (not a PNG image)
        // If you want to use both opacity and color, it is recommended to use NON premultiplied images like BMP images
        // Of course, you can also tell XCode not to compress PNG images, but I think it doesn't work as expected
        var label2 = cc.LabelBMFont.create("Test", s_resprefix + "fonts/bitmapFontTest2.fnt");
        // testing anchors
        label2.anchorX = 0.5;
        label2.anchorY = 0.5;
        label2.color = cc.color.RED ;
        this.addChild(label2, 0, TAG_BITMAP_ATLAS2);
        label2.runAction(repeat.clone());

        var label3 = cc.LabelBMFont.create("Test", s_resprefix + "fonts/bitmapFontTest2.fnt");
        // testing anchors
        label3.anchorX = 1;
        label3.anchorY = 1;
        this.addChild(label3, 0, TAG_BITMAP_ATLAS3);

        var s = director.getWinSize();
        label1.x = 0;
        label1.y = 0;
        label2.x = s.width / 2;
        label2.y = s.height / 2;
        label3.x = s.width;
        label3.y = s.height;

        this.schedule(this.step);
    },
    step:function (dt) {
        this.time += dt;
        //var string;
        var string = this.time.toFixed(2) + "Test j";

        var label1 = this.getChildByTag(TAG_BITMAP_ATLAS1);
        label1.setString(string);

        var label2 = this.getChildByTag(TAG_BITMAP_ATLAS2);
        label2.setString(string);

        var label3 = this.getChildByTag(TAG_BITMAP_ATLAS3);
        label3.setString(string);
    },

    title:function () {
        return "cc.LabelBMFont";
    },
    subtitle:function () {
        return "Testing alignment. Testing opacity + tint";
    },


    //
    // Automation
    //
    testDuration:1.1,
    getExpectedResult:function() {
        // yellow, red, green, blue, yellow
        var ret = [0,{"r":255,"g":255,"b":255},0,{"r":255,"g":0,"b":0}];
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var ret = [];
        var tags = [TAG_BITMAP_ATLAS1, TAG_BITMAP_ATLAS2];

        for( var i in tags ) {
            var t = tags[i];
            ret.push( this.getChildByTag(t).opacity );
            ret.push( this.getChildByTag(t).color );
        }
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// BMFontSubSpriteTest
//
//------------------------------------------------------------------
var BMFontSubSpriteTest = AtlasDemo.extend({
    time:null,
    ctor:function () {
        this._super();
        this.time = 0;

        var s = director.getWinSize();

        var drawNode = cc.DrawNode.create();
        this.addChild(drawNode);
        drawNode.setDrawColor(cc.color(255,0,0,128));
        drawNode.drawSegment(cc.p(0, s.height / 2), cc.p(s.width, s.height / 2), 2);
        drawNode.drawSegment(cc.p(s.width / 2, 0), cc.p(s.width / 2, s.height), 2);

        // Upper Label
        var label = cc.LabelBMFont.create("Bitmap Font Atlas", s_resprefix + "fonts/bitmapFontTest.fnt");
        this.labelObj = label;
        this.addChild(label);

        label.x = s.width / 2;
        label.y = s.height / 2;
        label.anchorX = 0.5;
        label.anchorY = 0.5;

        var BChar = label.getChildByTag(0);
        var FChar = label.getChildByTag(7);
        var AChar = label.getChildByTag(12);

        if(autoTestEnabled) {
            var jump = cc.JumpBy.create(0.5, cc.p(0,0), 60, 1);
            var jump_4ever = cc.RepeatForever.create(cc.Sequence.create(jump, cc.DelayTime.create(0.25)));
            var fade_out = cc.FadeOut.create(0.5);
            var rotate = cc.RotateBy.create(0.5, 180);
            var rot_4ever = cc.RepeatForever.create(cc.Sequence.create(rotate, cc.DelayTime.create(0.25), rotate.clone()));

            var scale = cc.ScaleBy.create(0.5, 1.5);
        } else {
            var jump = cc.JumpBy.create(4, cc.p(0,0), 60, 1);
            var jump_4ever = cc.RepeatForever.create(jump);
            var fade_out = cc.FadeOut.create(1);
            var rotate = cc.RotateBy.create(2, 360);
            var rot_4ever = cc.RepeatForever.create(rotate);

            var scale = cc.ScaleBy.create(2, 1.5);
        }

        var scale_back = scale.reverse();
        var scale_seq = cc.Sequence.create(scale, cc.DelayTime.create(0.25), scale_back);
        var scale_4ever = cc.RepeatForever.create(scale_seq);

        var fade_in = cc.FadeIn.create(1);
        var seq = cc.Sequence.create(fade_out, cc.DelayTime.create(0.25), fade_in);
        var fade_4ever = cc.RepeatForever.create(seq);

        BChar.runAction(rot_4ever);
        BChar.runAction(scale_4ever);
        FChar.runAction(jump_4ever);
        AChar.runAction(fade_4ever);

        // Bottom Label
        var label2 = cc.LabelBMFont.create("00.0", s_resprefix + "fonts/bitmapFontTest.fnt");
        this.addChild(label2, 0, TAG_BITMAP_ATLAS2);
        label2.x = s.width / 2.0;
        label2.y = 80;

        var lastChar = label2.getChildByTag(3);
        lastChar.runAction(rot_4ever.clone());

        this.schedule(this.step, 0.1);
    },
    step:function (dt) {
        this.time += dt;
        var string = this.time.toFixed(1);
        string = (string < 10) ? "0" + string : string;
        var label1 = this.getChildByTag(TAG_BITMAP_ATLAS2);
        label1.setString(string);
    },
    title:function () {
        return "cc.LabelBMFont BMFontSubSpriteTest";
    },
    subtitle:function () {
        return "Using fonts as cc.Sprite objects. Some characters should rotate.";
    },

    //
    // Automation
    //
    testDuration:0.6,
    getExpectedResult:function() {
        // yellow, red, green, blue, yellow
        var ret = {"rotate": 180, "scale": 1.5, "opacity": 0};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = this.labelObj.getChildByTag(0).scale;
        var r = this.labelObj.getChildByTag(0).rotation;
        var o = this.labelObj.getChildByTag(12).opacity;
        var ret = {"rotate": r, "scale": s, "opacity": o};

        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// BMFontPaddingTest
//
//------------------------------------------------------------------
var BMFontPaddingTest = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var label = cc.LabelBMFont.create("abcdefg", s_resprefix + "fonts/bitmapFontTest4.fnt");
        this.addChild(label);

        var s = director.getWinSize();

        label.x = s.width / 2;
        label.y = s.height / 2;
        label.anchorX = 0.5;
        label.anchorY = 0.5;
    },
    title:function () {
        return "cc.LabelBMFont BMFontPaddingTest";
    },
    subtitle:function () {
        return "Testing padding";
    },


    //
    // Automation
    //
    pixel: {"0": 255, "1": 255, "2": 255, "3": 255},

    getExpectedResult:function() {

        // var ret = [{"0":0,"1":0,"2":226,"3":255},{"0":47,"1":0,"2":0,"3":255},{"0":0,"1":47,"2":0,"3":255}];
        var s = director.getWinSize();
        var ret = {"center": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2, s.height/2, 100, 100);
        var ret = {"center": this.containsPixel(ret2, this.pixel) ? "yes" : "no"};
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// BMFontOffsetTest
//
//------------------------------------------------------------------
var BMFontOffsetTest = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();

        var label = null;
        label = cc.LabelBMFont.create("FaFeFiFoFu", s_resprefix + "fonts/bitmapFontTest5.fnt");
        this.addChild(label);
        label.x = s.width / 2;
        label.y = s.height / 2 + 50;
        label.anchorX = 0.5;
        label.anchorY = 0.5;

        label = cc.LabelBMFont.create("fafefifofu", s_resprefix + "fonts/bitmapFontTest5.fnt");
        this.addChild(label);
        label.x = s.width / 2;
        label.y = s.height / 2;
        label.anchorX = 0.5;
        label.anchorY = 0.5;

        label = cc.LabelBMFont.create("aeiou", s_resprefix + "fonts/bitmapFontTest5.fnt");
        this.addChild(label);
        label.x = s.width / 2;
        label.y = s.height / 2 - 50;
        label.anchorX = 0.5;
        label.anchorY = 0.5;
    },
    title:function () {
        return "cc.LabelBMFont";
    },
    subtitle:function () {
        return "Rendering should be OK. Testing offset";
    },

    //
    // Automation
    //

    pixel: {"0":150,"1":150,"2":150,"3":255},
    getExpectedResult:function() {
	var ret =  {"top": "yes", "center": "yes", "bottom": "yes"};

        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret1 =  this.readPixels(s.width/2, s.height/2-50, 50, 50);
        var ret2 =  this.readPixels(s.width/2, s.height/2, 50, 50);
        var ret3 =  this.readPixels(s.width/2, s.height/2+50, 50, 50);
        var ret = {"top": this.containsPixel(ret1, this.pixel, true, 140) ? "yes" : "no",
                   "center": this.containsPixel(ret2, this.pixel, true, 140) ? "yes" : "no",
                   "bottom": this.containsPixel(ret3, this.pixel, true, 140) ? "yes" : "no"};
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// BMFontTintTest
//
//------------------------------------------------------------------
var BMFontTintTest = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();

        var label = null;
        label = cc.LabelBMFont.create("Blue", s_resprefix + "fonts/bitmapFontTest5.fnt");
        label.color = cc.color(0, 0, 255);
        this.addChild(label);
        label.x = s.width / 2;
        label.y = s.height / 4;
        label.anchorX = 0.5;
        label.anchorY = 0.5;

        label = cc.LabelBMFont.create("Red", s_resprefix + "fonts/bitmapFontTest5.fnt");
        this.addChild(label);
        label.x = s.width / 2;
        label.y = 2 * s.height / 4;
        label.anchorX = 0.5;
        label.anchorY = 0.5;
        label.color = cc.color(255, 0, 0);

        label = cc.LabelBMFont.create("G", s_resprefix + "fonts/bitmapFontTest5.fnt");
        this.addChild(label);
        label.x = s.width / 2;
        label.y = 3 * s.height / 4;
        label.anchorX = 0.5;
        label.anchorY = 0.5;
        label.color = cc.color(0, 255, 0);
        label.setString("Green");
    },
    title:function () {
        return "cc.LabelBMFont BMFontTintTest";
    },
    subtitle:function () {
        return "Testing color";
    },

    //
    // Automation
    //

    pixel1: {"0":0,"1":0,"2":255,"3":255},
    pixel2: {"0":255,"1":0,"2":0,"3":255},
    pixel3: {"0":0,"1":255,"2":0,"3":255},
    getExpectedResult:function() {
        var ret = {"left": "yes", "center": "yes", "right": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret1 =  this.readPixels(s.width/2, s.height/4, 50, 50);
        var ret2 =  this.readPixels(s.width/2, 2 * s.height/4, 50, 50);
        var ret3 =  this.readPixels(s.width/2, 3 * s.height/4, 50, 50);
        var ret = {"left": this.containsPixel(ret1, this.pixel1, true, 100) ? "yes" : "no",
                   "center": this.containsPixel(ret2, this.pixel2, true, 100) ? "yes" : "no",
                   "right": this.containsPixel(ret3, this.pixel3, true, 100) ? "yes" : "no"}
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// BMFontSpeedTest
//
//------------------------------------------------------------------
var BMFontSpeedTest = AtlasDemo.extend({
    ctor:function () {
        this._super();
        // Upper Label
        for (var i = 0; i < 100; i++) {
            var str = "-" + i + "-";
            var label = cc.LabelBMFont.create(str, s_resprefix + "fonts/bitmapFontTest.fnt");
            this.addChild(label);

            var s = director.getWinSize();

            var p = cc.p(Math.random() * s.width, Math.random() * s.height);
            label.setPosition(p);
            label.anchorX = 0.5;
            label.anchorY = 0.5;
        }
    },
    title:function () {
        return "cc.LabelBMFont";
    },
    subtitle:function () {
        return "Creating several cc.LabelBMFont with the same .fnt file should be fast";
    }
});

//------------------------------------------------------------------
//
// BMFontMultiLineTest
//
//------------------------------------------------------------------
var BMFontMultiLineTest = AtlasDemo.extend({
    ctor:function () {
        this._super();

        // Left
        var label1 = cc.LabelBMFont.create("Multi line\nLeft", s_resprefix + "fonts/bitmapFontTest3.fnt");
        label1.anchorX = 0;
        label1.anchorY = 0;
        this.addChild(label1, 0, TAG_BITMAP_ATLAS1);
        cc.log("content size:" + label1.width + "," + label1.height);


        // Center
        var label2 = cc.LabelBMFont.create("Multi line\nCenter", s_resprefix + "fonts/bitmapFontTest3.fnt");
        label2.anchorX = 0.5;
        label2.anchorY = 0.5;
        this.addChild(label2, 0, TAG_BITMAP_ATLAS2);
        cc.log("content size:" + label2.width + "," + label2.height);

        // right
        var label3 = cc.LabelBMFont.create("Multi line\nRight\nThree lines Three", s_resprefix + "fonts/bitmapFontTest3.fnt");
        label3.anchorX = 1;
        label3.anchorY = 1;
        this.addChild(label3, 0, TAG_BITMAP_ATLAS3);
        cc.log("content size:" + label3.width + "," + label3.height);

        var s = director.getWinSize();
        label1.x = 0;
        label1.y = 0;
        label2.x = s.width / 2;
        label2.y = s.height / 2;
        label3.x = s.width;
        label3.y = s.height;
    },
    title:function () {
        return "cc.LabelBMFont BMFontMultiLineTest";
    },
    subtitle:function () {
        return "Multiline + anchor point";
    },

    // Automation

    pixel: {"0": 255, "1": 186, "2": 33, "3": 255},

    getExpectedResult:function() {

        // var ret = [{"0":0,"1":0,"2":226,"3":255},{"0":47,"1":0,"2":0,"3":255},{"0":0,"1":47,"2":0,"3":255}];
        var s = director.getWinSize();
        var ret = {"left": "yes", "center": "yes", "right": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret1 =  this.readPixels(0, 0, 100, 100);
        var ret2 =  this.readPixels(s.width/2, s.height/2, 100, 100);
        var ret3 =  this.readPixels(s.width - 100, s.height - 100, 100, 100);


        var ret = {"left": this.containsPixel(ret1, this.pixel) ? "yes" : "no",
                   "center": this.containsPixel(ret2, this.pixel) ? "yes" : "no",
                   "right": this.containsPixel(ret3, this.pixel) ? "yes" : "no"}
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// BMFontMultiLine2Test
//
//------------------------------------------------------------------
var BMFontMultiLine2Test = AtlasDemo.extend({
    ctor:function () {
        this._super();

        // Left
        var label1 = cc.LabelBMFont.create("Multi line\n\nAligned to the left", s_resprefix + "fonts/bitmapFontTest3.fnt");
        label1.anchorX = 0;
        label1.anchorY = 0;
        label1.textAlign = cc.TEXT_ALIGNMENT_LEFT;
        label1.boundingWidth = 400;
        this.addChild(label1, 0, TAG_BITMAP_ATLAS1);
        cc.log("content size:" + label1.width + "," + label1.height);


        // Center
        var label2 = cc.LabelBMFont.create("Error\n\nSome error message", s_resprefix + "fonts/bitmapFontTest3.fnt");
        label2.anchorX = 0.5;
        label2.anchorY = 0.5;
        label2.textAlign = cc.TEXT_ALIGNMENT_CENTER;
        label2.boundingWidth = 290;
        this.addChild(label2, 0, TAG_BITMAP_ATLAS2);
        cc.log("content size:" + label2.width + "," + label2.height);

        // right
        var label3 = cc.LabelBMFont.create("Multi line\n\nAligned to the right", s_resprefix + "fonts/bitmapFontTest3.fnt");
        label3.anchorX = 1;
        label3.anchorY = 1;
        label3.textAlign = cc.TEXT_ALIGNMENT_RIGHT;
        label3.boundingWidth = 400;
        this.addChild(label3, 0, TAG_BITMAP_ATLAS3);
        cc.log("content size:" + label3.width + "," + label3.height);

        var s = director.getWinSize();
        label1.x = 0;
        label1.y = 0;
        label2.x = s.width / 2;
        label2.y = s.height / 2;
        label3.x = s.width;
        label3.y = s.height;
    },
    title:function () {
        return "cc.LabelBMFont BMFontMultiLine2Test";
    },
    subtitle:function () {
        return "Multiline with 2 new lines. All characters should appear";
    },
        // Automation

    pixel: {"0": 255, "1": 186, "2": 33, "3": 255},

    getExpectedResult:function() {

        // var ret = [{"0":0,"1":0,"2":226,"3":255},{"0":47,"1":0,"2":0,"3":255},{"0":0,"1":47,"2":0,"3":255}];
        var s = director.getWinSize();
        var ret = {"left": "yes", "center": "yes", "right": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var s = director.getWinSize();
        var ret1 =  this.readPixels(0, 0, 100, 100);
        var ret2 =  this.readPixels(s.width/2, s.height/2, 100, 100);
        var ret3 =  this.readPixels(s.width - 100, s.height - 100, 100, 100);

        var ret = {"left": this.containsPixel(ret1, this.pixel) ? "yes" : "no",
                   "center": this.containsPixel(ret2, this.pixel) ? "yes" : "no",
                   "right": this.containsPixel(ret3, this.pixel) ? "yes" : "no"}
        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// LabelsEmpty
//
//------------------------------------------------------------------
var LabelsEmpty = AtlasDemo.extend({
    setEmpty:null,
    ctor:function () {
        this._super();


        // cc.LabelBMFont
        var label1 = cc.LabelBMFont.create("", s_resprefix + "fonts/bitmapFontTest3.fnt");
        this.addChild(label1, 0, TAG_BITMAP_ATLAS1);
        label1.x = winSize.width / 2;
        label1.y = winSize.height - 100;

        // cc.LabelTTF
        var label2 = cc.LabelTTF.create("", "Arial", 24);
        this.addChild(label2, 0, TAG_BITMAP_ATLAS2);
        label2.x = winSize.width / 2;
        label2.y = winSize.height / 2;

        // cc.LabelAtlas
        var label3 = cc.LabelAtlas.create("", s_resprefix + "fonts/tuffy_bold_italic-charmap.png", 48, 64, ' ');
        this.addChild(label3, 0, TAG_BITMAP_ATLAS3);
        label3.x = winSize.width / 2;
        label3.y = 0 + 100;

        this.schedule(this.onUpdateStrings, 1.0);

        this.setEmpty = false;
    },
    onUpdateStrings:function (dt) {
        var label1 = this.getChildByTag(TAG_BITMAP_ATLAS1);
        var label2 = this.getChildByTag(TAG_BITMAP_ATLAS2);
        var label3 = this.getChildByTag(TAG_BITMAP_ATLAS3);

        if (!this.setEmpty) {
            label1.setString("not empty");
            label2.setString("not empty");
            label3.setString("hi");

            this.setEmpty = true;
        }
        else {
            label1.setString("");
            label2.setString("");
            label3.setString("");

            this.setEmpty = false;
        }
    },
    title:function () {
        return "Testing empty labels";
    },
    subtitle:function () {
        return "3 empty labels: LabelAtlas, LabelTTF and LabelBMFont";
    }
});

//------------------------------------------------------------------
//
// BMFontHDTest
//
//------------------------------------------------------------------
var BMFontHDTest = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();

        // cc.LabelBMFont
        var label1 = cc.LabelBMFont.create("TESTING RETINA DISPLAY", s_resprefix + "fonts/konqa32.fnt");
        this.addChild(label1);
        label1.x = s.width / 2;
        label1.y = s.height / 2;
    },
    title:function () {
        return "Testing Retina Display BMFont";
    },
    subtitle:function () {
        return "loading arista16 or arista16-hd";
    },

    //
    // Automation
    //

    pixel: {"0": 255, "1": 255, "2": 255, "3": 255},

    getExpectedResult:function() {

        // var ret = [{"0":0,"1":0,"2":226,"3":255},{"0":47,"1":0,"2":0,"3":255},{"0":0,"1":47,"2":0,"3":255}];
        var s = director.getWinSize();
        var ret = {"center": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2, s.height/2, 100, 100);

        var ret = {"center": this.containsPixel(ret2, this.pixel) ? "yes" : "no"};

        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// BMFontGlyphDesignerTest
//
//------------------------------------------------------------------
var BMFontGlyphDesignerTest = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();

        var layer = cc.LayerColor.create(cc.color(128, 128, 128, 255));
        this.addChild(layer, -10);

        // cc.LabelBMFont
        var label1 = cc.LabelBMFont.create("Testing Glyph Designer", s_resprefix + "fonts/futura-48.fnt");
        this.addChild(label1);
        label1.x = s.width / 2;
        label1.y = s.height / 2;
    },
    title:function () {
        return "Testing Glyph Designer";
    },
    subtitle:function () {
        return "You should see a font with shawdows and outline";
    },

    //
    // Automation
    //

    pixel: {"0": 240, "1": 201, "2": 108, "3": 255},

    getExpectedResult:function() {

        // var ret = [{"0":0,"1":0,"2":226,"3":255},{"0":47,"1":0,"2":0,"3":255},{"0":0,"1":47,"2":0,"3":255}];
        var s = director.getWinSize();
        var ret = {"center": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2, s.height/2, 100, 100);

        var ret = {"center": this.containsPixel(ret2, this.pixel) ? "yes" : "no"};

        return JSON.stringify(ret);
    }
});

//------------------------------------------------------------------
//
// LabelTTFTest
//
//------------------------------------------------------------------

var LabelTTFStrokeShadowTest = AtlasDemo.extend({
    _labelShadow: null,
    _labelStroke: null,
    _labelStrokeShadow: null,

    ctor: function () {
        this._super();
        this.updateLabels();
    },

    updateLabels: function () {
        var blockSize = cc.size(400, 100);
        var s = director.getWinSize();

        // colors
        var redColor = cc.color(255, 0, 0);
        var yellowColor = cc.color(255, 255, 0);
        var blueColor = cc.color(0, 0, 255);

        // shadow offset
        var shadowOffset = cc.p(12, -12);

        // positioning stuff
        var posX = s.width / 2 - (blockSize.width / 2);
        var posY_5 = s.height / 7;

        // font definition
        var fontDefRedShadow = new cc.FontDefinition();
        fontDefRedShadow.fontName = "Arial";
        fontDefRedShadow.fontSize = 32;
        fontDefRedShadow.textAlign = cc.TEXT_ALIGNMENT_CENTER;
        fontDefRedShadow.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        fontDefRedShadow.fillStyle = redColor;
        fontDefRedShadow.boundingWidth = blockSize.width;
	    fontDefRedShadow.boundingHeight = blockSize.height;
        // shadow
        fontDefRedShadow.shadowEnabled = true;
        fontDefRedShadow.shadowOffsetX = shadowOffset.x;
	    fontDefRedShadow.shadowOffsetY = shadowOffset.y;

        // create the label using the definition
        this._labelShadow = cc.LabelTTF.create("Shadow Only", fontDefRedShadow);
        this._labelShadow.anchorX = 0;
        this._labelShadow.anchorY = 0;
        this._labelShadow.x = posX;
        this._labelShadow.y = posY_5;

        // font definition
        var fontDefBlueStroke = new cc.FontDefinition();
        fontDefBlueStroke.fontName = "Arial";
        fontDefBlueStroke.fontSize = 32;
        fontDefBlueStroke.textAlign = cc.TEXT_ALIGNMENT_CENTER;
        fontDefBlueStroke.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        fontDefBlueStroke.fillStyle = blueColor;
        fontDefBlueStroke.boundingWidth = blockSize.width;
	    fontDefBlueStroke.boundingHeight = blockSize.height;
        // stroke
        fontDefBlueStroke.strokeEnabled = true;
        fontDefBlueStroke.strokeStyle = yellowColor;

        this._labelStroke = cc.LabelTTF.create("Stroke Only", fontDefBlueStroke);
        this._labelStroke.anchorX = 0;
        this._labelStroke.anchorY = 0;
        this._labelStroke.x = posX;
        this._labelStroke.y = posY_5 * 2;

        // font definition
        var fontDefRedStrokeShadow = new cc.FontDefinition();
        fontDefRedStrokeShadow.fontName = "Arial";
        fontDefRedStrokeShadow.fontSize = 32;
        fontDefRedStrokeShadow.textAlign = cc.TEXT_ALIGNMENT_CENTER;
        fontDefRedStrokeShadow.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        fontDefRedStrokeShadow.fillStyle = blueColor;
        fontDefRedStrokeShadow.boundingWidth = blockSize.width;
	    fontDefRedStrokeShadow.boundingHeight = blockSize.height;
        // stroke
        fontDefRedStrokeShadow.strokeEnabled = true;
        fontDefRedStrokeShadow.strokeStyle = redColor;
        // shadow
        fontDefRedStrokeShadow.shadowEnabled = true;
        fontDefRedStrokeShadow.shadowOffsetX = -12;
	    fontDefRedStrokeShadow.shadowOffsetY = 12;   //shadowOffset;

        this._labelStrokeShadow = cc.LabelTTF.create("Stroke + Shadow\n New Line", fontDefRedStrokeShadow);
        this._labelStrokeShadow.anchorX = 0;
        this._labelStrokeShadow.anchorY = 0;
        this._labelStrokeShadow.x = posX;
        this._labelStrokeShadow.y = posY_5 * 3;

        // add all the labels
        this.addChild(this._labelShadow);
        this.addChild(this._labelStroke);
        this.addChild(this._labelStrokeShadow);
    },

    title: function () {
        return "Testing cc.LabelTTF + shadow and stroke";
    },

    subtitle: function () {
        return "";
    }
});

var LabelTTFTest = AtlasDemo.extend({
    _label:null,
    _horizAlign:null,
    _vertAlign:null,
    ctor:function () {
        this._super();
        var blockSize = cc.size(200, 160);
        var s = director.getWinSize();

        var colorLayer = cc.LayerColor.create(cc.color(100, 100, 100, 255), blockSize.width, blockSize.height);
        colorLayer.anchorX = 0;
        colorLayer.anchorY = 0;
        colorLayer.x = (s.width - blockSize.width) / 2;
        colorLayer.y = (s.height - blockSize.height) / 2;

        this.addChild(colorLayer);

        cc.MenuItemFont.setFontSize(30);
        var menu = cc.Menu.create(
            cc.MenuItemFont.create("Left", this.setAlignmentLeft, this),
            cc.MenuItemFont.create("Center", this.setAlignmentCenter, this),
            cc.MenuItemFont.create("Right", this.setAlignmentRight, this));
        menu.alignItemsVerticallyWithPadding(4);
        menu.x = 50;
        menu.y = s.height / 2 - 20;
        this.addChild(menu);

        menu = cc.Menu.create(
            cc.MenuItemFont.create("Top", this.setAlignmentTop, this),
            cc.MenuItemFont.create("Middle", this.setAlignmentMiddle, this),
            cc.MenuItemFont.create("Bottom", this.setAlignmentBottom, this));
        menu.alignItemsVerticallyWithPadding(4);
        menu.x = s.width - 50;
        menu.y = s.height / 2 - 20;
        this.addChild(menu);

        this._label = null;
        this._horizAlign = cc.TEXT_ALIGNMENT_LEFT;
        this._vertAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;

        this.updateAlignment();
    },
    updateAlignment:function () {
        var blockSize = cc.size(200, 160);
        var s = director.getWinSize();

        if (this._label) {
            this._label.removeFromParent();
        }

        this._label = cc.LabelTTF.create(this.getCurrentAlignment(), "Arial", 32, blockSize, this._horizAlign, this._vertAlign);

        this._label.anchorX = 0;
        this._label.anchorY = 0;
        this._label.x = (s.width - blockSize.width) / 2;
        this._label.y = (s.height - blockSize.height) / 2;

        this.addChild(this._label);
    },
    setAlignmentLeft:function (sender) {
        this._horizAlign = cc.TEXT_ALIGNMENT_LEFT;
        this.updateAlignment();
    },
    setAlignmentCenter:function (sender) {
        this._horizAlign = cc.TEXT_ALIGNMENT_CENTER;
        this.updateAlignment();
    },
    setAlignmentRight:function (sender) {
        this._horizAlign = cc.TEXT_ALIGNMENT_RIGHT;
        this.updateAlignment();
    },
    setAlignmentTop:function (sender) {
        this._vertAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
        this.updateAlignment();
    },
    setAlignmentMiddle:function (sender) {
        this._vertAlign = cc.VERTICAL_TEXT_ALIGNMENT_CENTER;
        this.updateAlignment();
    },
    setAlignmentBottom:function (sender) {
        this._vertAlign = cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM;
        this.updateAlignment();
    },
    getCurrentAlignment:function () {
        var vertical = null;
        var horizontal = null;
        switch (this._vertAlign) {
            case cc.VERTICAL_TEXT_ALIGNMENT_TOP:
                vertical = "Top";
                break;
            case cc.VERTICAL_TEXT_ALIGNMENT_CENTER:
                vertical = "Middle";
                break;
            case cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM:
                vertical = "Bottom";
                break;
        }
        switch (this._horizAlign) {
            case cc.TEXT_ALIGNMENT_LEFT:
                horizontal = "Left";
                break;
            case cc.TEXT_ALIGNMENT_CENTER:
                horizontal = "Center";
                break;
            case cc.TEXT_ALIGNMENT_RIGHT:
                horizontal = "Right";
                break;
        }

        return "Alignment " + vertical + " " + horizontal;
    },
    title:function () {
        return "Testing cc.LabelTTF";
    },
    subtitle:function () {
        return "Select the buttons on the sides to change alignment";
    }
});

var LabelTTFMultiline = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();

        // cc.LabelBMFont
        var center = cc.LabelTTF.create("word wrap \"testing\" (bla0) bla1 'bla2' [bla3] (bla4) {bla5} {bla6} [bla7] (bla8) [bla9] 'bla0' \"bla1\"",
            "Arial", 32, cc.size(s.width / 2, 200), cc.TEXT_ALIGNMENT_CENTER, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        center.x = s.width / 2;
        center.y = 150;

        this.addChild(center);
    },
    title:function () {
        return "Testing cc.LabelTTF Word Wrap";
    },
    subtitle:function () {
        return "Word wrap using cc.LabelTTF";
    },

    //
    // Automation
    //

    pixel: {"0": 255, "1": 255, "2": 255, "3": 255},

    getExpectedResult:function() {

        // var ret = [{"0":0,"1":0,"2":226,"3":255},{"0":47,"1":0,"2":0,"3":255},{"0":0,"1":47,"2":0,"3":255}];
        var s = director.getWinSize();
        var ret = {"center": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2, 125, 100, 100);

        var ret = {"center": this.containsPixel(ret2, this.pixel) ? "yes" : "no"};

        return JSON.stringify(ret);
    }
});

var LabelTTFChinese = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var size = director.getWinSize();
        var label = cc.LabelTTF.create("中国", "Microsoft Yahei", 30);
        label.x = size.width / 2;
        label.y = size.height / 3 * 2;
        this.addChild(label);

        // Test UTF8 string from native to jsval.
        var label2 = cc.LabelTTF.create("string from native:"+label.getString(), "Microsoft Yahei", 30);
        label2.x = size.width / 2;
        label2.y = size.height / 3;
        this.addChild(label2);
    },
    title:function () {
        return "Testing cc.LabelTTF with Chinese character";
    }
});

var BMFontChineseTest = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var size = director.getWinSize();
        var label = cc.LabelBMFont.create("中国", s_resprefix + "fonts/bitmapFontChinese.fnt");
        label.x = size.width / 2;
        label.y = size.height / 2;
        this.addChild(label);
    },
    title:function () {
        return "Testing cc.LabelBMFont with Chinese character";
    },

    //
    // Automation
    //

    pixel: {"0": 255, "1": 0, "2": 142, "3": 255},

    getExpectedResult:function() {

        // var ret = [{"0":0,"1":0,"2":226,"3":255},{"0":47,"1":0,"2":0,"3":255},{"0":0,"1":47,"2":0,"3":255}];
        var s = director.getWinSize();
        var ret = {"center": "yes"};
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {

        var s = director.getWinSize();
        var ret2 =  this.readPixels(s.width/2, s.height / 2, 100, 100);

        var ret = {"center": this.containsPixel(ret2, this.pixel) ? "yes" : "no"};

        return JSON.stringify(ret);
    }
});

var LongSentencesExample = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
var LineBreaksExample = "Lorem ipsum dolor\nsit amet\nconsectetur adipisicing elit\nblah\nblah";
var MixedExample = "ABC\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt\nDEF";

var ArrowsMax = 0.95;
var ArrowsMin = 0.7;

var LeftAlign = 0;
var CenterAlign = 1;
var RightAlign = 2;

var LongSentences = 0;
var LineBreaks = 1;
var Mixed = 2;

var alignmentItemPadding = 50;
var menuItemPaddingCenter = 50;

var BMFontMultiLineAlignmentTest = AtlasDemo.extend({
    labelShouldRetain:null,
    arrowsBarShouldRetain:null,
    arrowsShouldRetain:null,
    lastSentenceItem:null,
    lastAlignmentItem:null,
    ctor:function () {
        this._super();

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ALL_AT_ONCE,
            onTouchesBegan: this.onTouchesBegan.bind(this),
            onTouchesMoved: this.onTouchesMoved.bind(this),
            onTouchesEnded: this.onTouchesEnded.bind(this)
        }, this);
        if ('touches' in cc.sys.capabilities){
            cc.eventManager.addListener({
                event: cc.EventListener.TOUCH_ALL_AT_ONCE,
                onTouchesBegan: this.onTouchesBegan.bind(this),
                onTouchesMoved: this.onTouchesMoved.bind(this),
                onTouchesEnded: this.onTouchesEnded.bind(this)
            }, this);
        } else if ('mouse' in cc.sys.capabilities)
            cc.eventManager.addListener({
                event: cc.EventListener.MOUSE,
                onMouseDown: this.onMouseDown.bind(this),
                onMouseMove: this.onMouseMove.bind(this),
                onMouseUp: this.onMouseUp.bind(this)
            }, this);

        // ask director the the window size
        var size = director.getWinSize();

        // create and initialize a Label
        this.labelShouldRetain = cc.LabelBMFont.create(LongSentencesExample, s_resprefix + "fonts/markerFelt.fnt", size.width / 2, cc.TEXT_ALIGNMENT_CENTER, cc.p(0, 0));
        this.arrowsBarShouldRetain = cc.Sprite.create(s_resprefix + "Images/arrowsBar.png");
        this.arrowsShouldRetain = cc.Sprite.create(s_resprefix + "Images/arrows.png");

        cc.MenuItemFont.setFontSize(20);
        var longSentences = cc.MenuItemFont.create("Long Flowing Sentences", this.onStringChanged, this);
        var lineBreaks = cc.MenuItemFont.create("Short Sentences With Intentional Line Breaks", this.onStringChanged, this);
        var mixed = cc.MenuItemFont.create("Long Sentences Mixed With Intentional Line Breaks", this.onStringChanged.bind(this)); // another way to pass 'this'
        var stringMenu = cc.Menu.create(longSentences, lineBreaks, mixed);
        stringMenu.alignItemsVertically();

        longSentences.color = cc.color(255, 0, 0);
        this.lastSentenceItem = longSentences;
        longSentences.tag = LongSentences;
        lineBreaks.tag = LineBreaks;
        mixed.tag = Mixed;

        cc.MenuItemFont.setFontSize(30);

        var left = cc.MenuItemFont.create("Left", this.onAlignmentChanged, this);
        var center = cc.MenuItemFont.create("Center", this.onAlignmentChanged, this);
        var right = cc.MenuItemFont.create("Right", this.onAlignmentChanged.bind(this));    // another way to pass 'this'
        var alignmentMenu = cc.Menu.create(left, center, right);
        alignmentMenu.alignItemsHorizontallyWithPadding(alignmentItemPadding);

        center.color = cc.color(255, 0, 0);
        this.lastAlignmentItem = center;
        left.tag = LeftAlign;
        center.tag = CenterAlign;
        right.tag = RightAlign;

        // position the label on the center of the screen
        this.labelShouldRetain.x = size.width / 2;
        this.labelShouldRetain.y = size.height / 2;

        this.arrowsBarShouldRetain.visible = false;

        var arrowsWidth = (ArrowsMax - ArrowsMin) * size.width;
        this.arrowsBarShouldRetain.scaleX = arrowsWidth / this.arrowsBarShouldRetain.width;
        this.arrowsBarShouldRetain.anchorX = 0;
        this.arrowsBarShouldRetain.anchorY = 0.5;
        this.arrowsBarShouldRetain.x = ArrowsMin * size.width;
        this.arrowsBarShouldRetain.y = this.labelShouldRetain.y;

        this.arrowsShouldRetain.x = this.arrowsBarShouldRetain.x;
	    this.arrowsShouldRetain.y = this.arrowsBarShouldRetain.y;

        stringMenu.x = size.width / 2;
        stringMenu.y = size.height - menuItemPaddingCenter;
        alignmentMenu.x = size.width / 2;
        alignmentMenu.y = menuItemPaddingCenter + 15;

        this.addChild(this.labelShouldRetain);
        this.addChild(this.arrowsBarShouldRetain);
        this.addChild(this.arrowsShouldRetain);
        this.addChild(stringMenu);
        this.addChild(alignmentMenu);
    },
    title:function () {
        return "";
    },
    subtitle:function () {
        return "";
    },
    onStringChanged:function (sender) {
        this.lastSentenceItem.color = cc.color(255, 255, 255);
        sender.color = cc.color(255, 0, 0);
        this.lastSentenceItem = sender;

        switch (sender.tag) {
            case LongSentences:
                this.labelShouldRetain.setString(LongSentencesExample);
                break;
            case LineBreaks:
                this.labelShouldRetain.setString(LineBreaksExample);
                break;
            case Mixed:
                this.labelShouldRetain.setString(MixedExample);
                break;

            default:
                break;
        }

        this.snapArrowsToEdge();
    },
    onAlignmentChanged:function (sender) {
        var item = sender;
        this.lastAlignmentItem.color = cc.color(255, 255, 255);
        item.color = cc.color(255, 0, 0);
        this.lastAlignmentItem = item;

        switch (item.tag) {
            case LeftAlign:
                this.labelShouldRetain.textAlign = cc.TEXT_ALIGNMENT_LEFT;
                break;
            case CenterAlign:
                this.labelShouldRetain.textAlign = cc.TEXT_ALIGNMENT_CENTER;
                break;
            case RightAlign:
                this.labelShouldRetain.textAlign = cc.TEXT_ALIGNMENT_RIGHT;
                break;
            default:
                break;
        }

        this.snapArrowsToEdge();
    },
    onTouchesBegan:function (touches) {
        var touch = touches[0];
        var location = touch.getLocation();

        if (cc.rectContainsPoint(this.arrowsShouldRetain.getBoundingBox(), location)) {
            this.arrowsBarShouldRetain.visible = true;
        }
    },
    onTouchesEnded:function () {
        this.arrowsBarShouldRetain.visible = false;
    },
    onTouchesMoved:function (touches) {
        var touch = touches[0];
        var location = touch.getLocation();

        var winSize = director.getWinSize();

        this.arrowsShouldRetain.x = Math.max(Math.min(location.x, ArrowsMax * winSize.width), ArrowsMin * winSize.width);

        this.labelShouldRetain.boundingWidth = Math.abs(this.arrowsShouldRetain.getPosition().x - this.labelShouldRetain.getPosition().x) * 2;
    },

    onMouseDown:function (touch) {
        var location = touch.getLocation();

        if (cc.rectContainsPoint(this.arrowsShouldRetain.getBoundingBox(), location)) {
            this.arrowsBarShouldRetain.visible = true;
        }
    },
    onMouseMove:function (touch) {
        if(event.getButton() == undefined)
            return;

        var location = touch.getLocation();
        var winSize = director.getWinSize();

        this.arrowsShouldRetain.x = Math.max(Math.min(location.x, ArrowsMax * winSize.width), ArrowsMin * winSize.width);
        this.labelShouldRetain.boundingWidth = Math.abs(this.arrowsShouldRetain.x - this.labelShouldRetain.x) * 2;
    },
    onMouseUp:function (touch) {
        //this.snapArrowsToEdge();
        this.arrowsBarShouldRetain.visible = false;
    },

    snapArrowsToEdge:function () {
        var winSize = director.getWinSize();
        this.arrowsShouldRetain.x = ArrowsMin * winSize.width;
        this.arrowsShouldRetain.y = this.arrowsBarShouldRetain.y;
    }
});

/// LabelTTFA8Test
var LabelTTFA8Test = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();

        var layer = cc.LayerColor.create(cc.color(128, 128, 128, 255));
        this.addChild(layer, -10);

        // cc.LabelBMFont
        var label1 = cc.LabelTTF.create("Testing A8 Format", "Arial", 48);
        this.addChild(label1);
        label1.color = cc.color(255, 0, 0);
        label1.x = s.width / 2;
        label1.y = s.height / 2;

        var fadeOut = cc.FadeOut.create(2);
        var fadeIn = cc.FadeIn.create(2);
        var seq = cc.Sequence.create(fadeOut, fadeIn);
        var forever = cc.RepeatForever.create(seq);
        label1.runAction(forever);
    },
    title:function () {
        return "Testing A8 Format";
    },
    subtitle:function () {
        return "RED label, fading In and Out in the center of the screen";
    }
});

/// BMFontOneAtlas
var BMFontOneAtlas = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();

        var label1 = cc.LabelBMFont.create("This is Helvetica", s_resprefix + "fonts/helvetica-32.fnt", cc.LabelAutomaticWidth, cc.TEXT_ALIGNMENT_LEFT, cc.p(0, 0));
        this.addChild(label1);
        label1.x = s.width / 2;
        label1.y = s.height * 2 / 3;

        var label2 = cc.LabelBMFont.create("And this is Geneva", s_resprefix + "fonts/geneva-32.fnt", cc.LabelAutomaticWidth, cc.TEXT_ALIGNMENT_LEFT, cc.p(0, 128));
        this.addChild(label2);
        label2.x = s.width / 2;
        label2.y = s.height / 3;
    },

    title:function () {
        return "cc.LabelBMFont with one texture";
    },

    subtitle:function () {
        return "Using 2 .fnt definitions that share the same texture atlas.";
    }
});

/// BMFontUnicode
var BMFontUnicode = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var chinese = "美好的一天";
        var japanese = "良い一日を";
        var spanish = "Buen día";

        var label1 = cc.LabelBMFont.create(spanish, s_resprefix + "fonts/arial-unicode-26.fnt", 200, cc.TEXT_ALIGNMENT_LEFT);
        this.addChild(label1);
        label1.x = winSize.width / 2;
        label1.y = winSize.height / 4;

        var label2 = cc.LabelBMFont.create(chinese, s_resprefix + "fonts/arial-unicode-26.fnt");
        this.addChild(label2);
        label2.x = winSize.width / 2;
        label2.y = winSize.height / 2.2;

        var label3 = cc.LabelBMFont.create(japanese, s_resprefix + "fonts/arial-unicode-26.fnt");
        this.addChild(label3);
        label3.x = winSize.width / 2;
        label3.y = winSize.height / 1.5;
    },
    title:function () {
        return "cc.LabelBMFont with Unicode support";
    },
    subtitle:function () {
        return "You should see 3 different labels: In Spanish, Chinese and Korean";
    }
});

// BMFontInit
var BMFontInit = AtlasDemo.extend({
    ctor:function () {
        this._super();

        var bmFont = cc.LabelBMFont.create();
        bmFont.setFntFile(s_resprefix + "fonts/helvetica-32.fnt");
        bmFont.setString("It is working!");
        this.addChild(bmFont);
        bmFont.x = winSize.width / 2;
        bmFont.y = winSize.height / 2;
    },
    title:function () {
        return "cc.LabelBMFont init";
    },
    subtitle:function () {
        return "Test for support of init method without parameters.";
    }
});

// LabelTTFFontInitTest
var LabelTTFFontInitTest = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var font = cc.LabelTTF.create();
        font.font = "48px 'Courier New'";
        //font.setFontName("Arial");
        font.string = "It is working!";
        this.addChild(font);
        font.x = winSize.width / 2;
        font.y = winSize.height / 2;
    },
    title:function () {
        return "cc.LabelTTF init";
    },
    subtitle:function () {
        return "Test for support of init method without parameters.";
    }
});


var LabelTTFAlignment = AtlasDemo.extend({
    ctor:function () {
        this._super();
        var s = director.getWinSize();
        var ttf0 = cc.LabelTTF.create("Alignment 0\nnew line", "Arial", 12, cc.size(256, 32), cc.TEXT_ALIGNMENT_LEFT);
        ttf0.x = s.width / 2;
        ttf0.y = (s.height / 6) * 2;
        ttf0.anchorX = 0.5;
        ttf0.anchorY = 0.5;
        this.addChild(ttf0);

        var ttf1 = cc.LabelTTF.create("Alignment 1\nnew line", "Arial", 12, cc.size(256, 32), cc.TEXT_ALIGNMENT_CENTER);
        ttf1.x = s.width / 2;
        ttf1.y = (s.height / 6) * 3;
        ttf1.anchorX = 0.5;
        ttf1.anchorY = 0.5;
        this.addChild(ttf1);

        var ttf2 = cc.LabelTTF.create("Alignment 2\nnew line", "Arial", 12, cc.size(256, 32), cc.TEXT_ALIGNMENT_RIGHT);
        ttf2.x = s.width / 2;
        ttf2.y = (s.height / 6) * 4;
        ttf2.anchorX = 0.5;
        ttf2.anchorY = 0.5;
        this.addChild(ttf2);
    },
    title:function () {
        return "cc.LabelTTF alignment";
    },
    subtitle:function () {
        return "Tests alignment values";
    },

    //
    // Automation
    //
    getExpectedResult:function() {
        // yellow, red, green, blue, yellow
        var ret = [{"r":255,"g":255,"b":0},{"r":255,"g":0,"b":0},{"r":0,"g":255,"b":0},{"r":0,"g":0,"b":255},{"r":255,"g":255,"b":0}];
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var ret = [];
        for( var i=0; i<5; i++) {
            var ch = this.label.getChildByTag(i).getDisplayedColor();
            ret.push(ch);
        }

        return JSON.stringify(ret);
    }

});

var BMFontColorParentChild = AtlasDemo.extend({
    ctor:function () {
        this._super();

        this.label = cc.LabelBMFont.create("YRGB", s_resprefix + "fonts/konqa32.fnt");
        this.addChild(this.label);
        this.label.x = winSize.width / 2;
        this.label.y = winSize.height / 2;
        this.label.color = cc.color.YELLOW;

        // R
        var letter = this.label.getChildByTag(1);
        letter.color = cc.color.RED;

        // G
        letter = this.label.getChildByTag(2);
        letter.color = cc.color.GREEN;

        // B
        letter = this.label.getChildByTag(3);
        letter.color = cc.color.BLUE;

        this.scheduleUpdate();

        this.accum = 0;

    },

    update:function(dt){
        this.accum += dt;

        this.label.setString("YRGB " + parseInt(this.accum,10).toString() );
    },

    title:function () {
        return "cc.LabelBMFont color parent / child";
    },
    subtitle:function () {
        return "Yellow Red Green Blue and numbers in Yellow";
    },

    //
    // Automation
    //
    getExpectedResult:function() {
        // yellow, red, green, blue, yellow
        var ret = [{"r":255,"g":255,"b":0},{"r":255,"g":0,"b":0},{"r":0,"g":255,"b":0},{"r":0,"g":0,"b":255},{"r":255,"g":255,"b":0}];
        return JSON.stringify(ret);
    },

    getCurrentResult:function() {
        var ret = [];
        for( var i=0; i<5; i++) {
            var ch = this.label.getChildByTag(i).getDisplayedColor();
            ret.push(ch);
        }

        return JSON.stringify(ret);
    }
});

//
// Flow control
//
var arrayOfLabelTest = [
    LabelAtlasOpacityTest,
    LabelAtlasOpacityColorTest,
    LabelAtlasHD,

    BMFontOpacityColorAlignmentTest,
    BMFontSubSpriteTest,
    BMFontPaddingTest,
    BMFontOffsetTest,
    BMFontTintTest,
    BMFontSpeedTest,
    BMFontMultiLineTest,
    BMFontMultiLine2Test,
    BMFontMultiLineAlignmentTest,
    BMFontOneAtlas,
    BMFontUnicode,
    BMFontInit,
    BMFontColorParentChild,
    BMFontHDTest,
    BMFontGlyphDesignerTest,
    BMFontChineseTest,

    LabelTTFTest,
    LabelTTFMultiline,
    LabelTTFChinese,
    LabelTTFA8Test,
    LabelTTFFontInitTest,
    LabelTTFAlignment,

    LabelsEmpty,
    LabelTTFStrokeShadowTest
];

var nextLabelTest = function () {
    labelTestIdx++;
    labelTestIdx = labelTestIdx % arrayOfLabelTest.length;

    return new arrayOfLabelTest[labelTestIdx]();
};
var previousLabelTest = function () {
    labelTestIdx--;
    if (labelTestIdx < 0)
        labelTestIdx += arrayOfLabelTest.length;

    return new arrayOfLabelTest[labelTestIdx]();
};
var restartLabelTest = function () {
    return new arrayOfLabelTest[labelTestIdx]();
};
