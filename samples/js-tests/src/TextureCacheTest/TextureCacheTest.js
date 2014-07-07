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

var TextureCacheTest = cc.Layer.extend({
    _labelLoading:null,
    _labelPercent:null,
    _numberOfSprites:20,
    _numberOfLoadedSprites:0,
    ctor:function () {
        this._super();

        var size = cc.director.getWinSize();

        this._labelLoading = cc.LabelTTF.create("loading...", "Arial", 15);
        this._labelPercent = cc.LabelTTF.create("%0", "Arial", 15);

        this._labelLoading.x = size.width / 2;

        this._labelLoading.y = size.height / 2 - 20;
        this._labelPercent.x = size.width / 2;
        this._labelPercent.y = size.height / 2 + 20;

        this.addChild(this._labelLoading);
        this.addChild(this._labelPercent);

        var texCache = cc.textureCache;
        // load textrues
        texCache.addImage("res/Images/HelloWorld.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_01.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_02.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_03.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_04.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_05.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_06.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_07.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_08.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_09.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_10.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_11.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_12.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_13.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/grossini_dance_14.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/background1.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/background2.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/background3.png", this.loadingCallBack, this);
        texCache.addImage("res/Images/blocks.png", this.loadingCallBack, this);
    },
    addSprite:function () {
        var size = cc.director.getWinSize();

        // create sprites
        var bg = cc.Sprite.create("res/Images/HelloWorld.png");
        bg.x = size.width / 2;
        bg.y = size.height / 2;
        //bg.scale = 1.7;

        var s1 = cc.Sprite.create("res/Images/grossini.png");
        var s2 = cc.Sprite.create("res/Images/grossini_dance_01.png");
        var s3 = cc.Sprite.create("res/Images/grossini_dance_02.png");
        var s4 = cc.Sprite.create("res/Images/grossini_dance_03.png");
        var s5 = cc.Sprite.create("res/Images/grossini_dance_04.png");
        var s6 = cc.Sprite.create("res/Images/grossini_dance_05.png");
        var s7 = cc.Sprite.create("res/Images/grossini_dance_06.png");
        var s8 = cc.Sprite.create("res/Images/grossini_dance_07.png");
        var s9 = cc.Sprite.create("res/Images/grossini_dance_08.png");
        var s10 = cc.Sprite.create("res/Images/grossini_dance_09.png");
        var s11 = cc.Sprite.create("res/Images/grossini_dance_10.png");
        var s12 = cc.Sprite.create("res/Images/grossini_dance_11.png");
        var s13 = cc.Sprite.create("res/Images/grossini_dance_12.png");
        var s14 = cc.Sprite.create("res/Images/grossini_dance_13.png");
        var s15 = cc.Sprite.create("res/Images/grossini_dance_14.png");

        // just loading textures to slow down
        var s16 = cc.Sprite.create("res/Images/background1.png");
        var s17 = cc.Sprite.create("res/Images/background2.png");
        var s18 = cc.Sprite.create("res/Images/background3.png");
        var s19 = cc.Sprite.create("res/Images/blocks.png");

        s1.x = 50;
        s1.y = 50;
        s2.x = 60;
        s2.y = 50;
        s3.x = 70;
        s3.y = 50;
        s4.x = 80;
        s4.y = 50;
        s5.x = 90;
        s5.y = 50;
        s6.x = 100;
        s6.y = 50;

        s7.x = 50;
        s7.y = 180;
        s8.x = 60;
        s8.y = 180;
        s9.x = 70;
        s9.y = 180;
        s10.x = 80;
        s10.y = 180;
        s11.x = 90;
        s11.y = 180;
        s12.x = 100;
        s12.y = 180;

        s13.x = 50;
        s13.y = 270;
        s14.x = 60;
        s14.y = 270;
        s15.x = 70;
        s15.y = 270;

        this.addChild(bg);

        this.addChild(s1);
        this.addChild(s2);
        this.addChild(s3);
        this.addChild(s4);
        this.addChild(s5);
        this.addChild(s6);
        this.addChild(s7);
        this.addChild(s8);
        this.addChild(s9);
        this.addChild(s10);
        this.addChild(s11);
        this.addChild(s12);
        this.addChild(s13);
        this.addChild(s14);
        this.addChild(s15);
    },
    loadingCallBack:function (obj) {
        ++this._numberOfLoadedSprites;
        this._labelPercent = (this._numberOfLoadedSprites / this._numberOfSprites) * 100;
        if (this._numberOfLoadedSprites == this._numberOfSprites) {
            this.removeChild(this._labelLoading, true);
            this.removeChild(this._labelPercent, true);
            this.addSprite();
        }
    }
});

var TextureCacheTestScene = TestScene.extend({
    runThisTest:function () {
        var layer = new TextureCacheTest();
        this.addChild(layer);
        cc.director.runScene(this);
    }
});
