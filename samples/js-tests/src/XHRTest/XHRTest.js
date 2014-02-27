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


var XHRTestScene = TestScene.extend({
    ctor:function () {
        this._super(true);
        var xhrLayer = new XHRTestLayer();
        this.addChild(xhrLayer);
    },
    runThisTest:function () {
        cc.Director.getInstance().replaceScene(this);
    },
    MainMenuCallback:function (sender) {
        this._super(sender);
    }
});

var XHRTestLayer = cc.Layer.extend({
    _lineCount: 0,
    init:function () {
        if (!this._super()) {
            return false;
        }

        var winSize = cc.Director.getInstance().getWinSize();

        // Back Menu
        var itemBack = cc.MenuItemFont.create("Back", this.toExtensionsMainLayer, this);
        itemBack.setPosition(winSize.width - 50, 25);
        var menuBack = cc.Menu.create(itemBack);
        menuBack.setPosition(0,0);
        this.addChild(menuBack);

        return true;
    },

    onEnter: function() {
        this._super();
        var l = cc.LabelTTF.create("Get infos via XHR", "Thonburi", 16);
        this.addChild(l, 1);
        l.setPosition(winSize.width / 2, winSize.height - 60);

        this.sendGetRequest();
        this.sendPostRequest();
    },

    sendGetRequest: function() {
        var that = this;
        var xhr = new XMLHttpRequest();
        var statusGetLabel = cc.LabelTTF.create("Status:", "Thonburi", 18);
        this.addChild(statusGetLabel, 1);
        statusGetLabel.setPosition(winSize.width / 2, winSize.height - 100);
        statusGetLabel.setString("Status: Send Get Request to httpbin.org");
        xhr.open("GET", "http://httpbin.org/get");

        xhr.onreadystatechange = function() {
            var httpStatus = xhr.statusText;
            var response = xhr.responseText.substring(0,50) + "...";
            var responseLabel = cc.LabelTTF.create("GET Response (50 chars): \n" + response, "Thonburi", 16);
            that.addChild(responseLabel, 1);
            responseLabel.setAnchorPoint(0,1);
            responseLabel.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            responseLabel.setPosition(winSize.width/6, winSize.height/2 - that._lineCount * 35);
            statusGetLabel.setString("Status: Got GET response! " + httpStatus);
            that._lineCount ++;
        };
        xhr.send();
    },

    sendPostRequest: function() {
        var that = this;
        var xhr = new XMLHttpRequest();
        var statusPostLabel = cc.LabelTTF.create("Status:", "Thonburi", 18);
        this.addChild(statusPostLabel, 1);

        statusPostLabel.setPosition(winSize.width / 2, winSize.height - 140);
        statusPostLabel.setString("Status: Send Post Request to httpbin.org");

        xhr.open("POST", "http://httpbin.org/post");
        xhr.onreadystatechange = function() {
            var httpStatus = xhr.statusText;
            var response = xhr.responseText.substring(0,50) + "...";
            var responseLabel = cc.LabelTTF.create("POST Response (50 chars):  \n" + response, "Thonburi", 16);
            that.addChild(responseLabel, 1);
            responseLabel.setAnchorPoint(0,1);
            responseLabel.setHorizontalAlignment(cc.TEXT_ALIGNMENT_LEFT);

            responseLabel.setPosition(winSize.width/6, winSize.height/2 - that._lineCount * 35);
            statusPostLabel.setString("Status: Got POST response! " + httpStatus);
            that._lineCount ++;
        };
        xhr.send("test=ok");
    },

    toExtensionsMainLayer:function (sender) {
        var scene = new ExtensionsTestScene();
        scene.runThisTest();
    },

    scrollViewDidScroll:function (view) {
    },
    scrollViewDidZoom:function (view) {
    }
});

XHRTestLayer.create = function () {
    var retObj = new XHRTestLayer();
    if (retObj && retObj.init()) {
        return retObj;
    }
    return null;
};

var runXHRTest = function () {
    var pScene = cc.Scene.create();
    var pLayer = XHRTestLayer.create();
    pScene.addChild(pLayer);
    cc.Director.getInstance().replaceScene(pScene);
};
