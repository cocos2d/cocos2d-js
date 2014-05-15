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


var XHRTestScene = TestScene.extend({
    ctor:function () {
        this._super(true);
        var xhrLayer = new XHRTestLayer();
        this.addChild(xhrLayer);
    },
    runThisTest:function () {
        cc.director.runScene(this);
    },
    MainMenuCallback:function (sender) {
        this._super(sender);
    }
});

var XHRTestLayer = cc.Layer.extend({
    init:function () {
        if (!this._super()) {
            return false;
        }

        var winSize = cc.director.getWinSize();

        // Back Menu
        var itemBack = cc.MenuItemFont.create("Back", this.toExtensionsMainLayer, this);
        itemBack.x = winSize.width - 50;
        itemBack.y = 25;
        var menuBack = cc.Menu.create(itemBack);
        menuBack.x = 0;
        menuBack.y = 0;
        this.addChild(menuBack);

        return true;
    },

    onEnter: function() {
        this._super();
        var l = cc.LabelTTF.create("Get infos via XHR", "Thonburi", 16);
        this.addChild(l, 1);
        l.x = winSize.width / 2;
        l.y = winSize.height - 60;

        this.sendGetRequest();
        this.sendPostRequest();
    },

    sendGetRequest: function() {
        var that = this;
        var xhr = cc.loader.getXMLHttpRequest();
        var statusGetLabel = cc.LabelTTF.create("Status:", "Thonburi", 18);
        this.addChild(statusGetLabel, 1);
        statusGetLabel.x = winSize.width / 2;
        statusGetLabel.y = winSize.height - 100;
        statusGetLabel.setString("Status: Send Get Request to httpbin.org");
        xhr.open("GET", "http://httpbin.org/get");

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText.substring(0, 50) + "...";
                var responseLabel = cc.LabelTTF.create("GET Response (50 chars): \n" + response, "Thonburi", 16);
                that.addChild(responseLabel, 1);
                responseLabel.anchorX = 0;
                responseLabel.anchorY = 1;
                responseLabel.textAlign = cc.TEXT_ALIGNMENT_LEFT;

                responseLabel.x = winSize.width / 6;
                responseLabel.y = winSize.height / 2;
                statusGetLabel.setString("Status: Got GET response! " + httpStatus);
            }
        };
        xhr.send();
    },

    sendPostRequest: function() {
        var that = this;
        var xhr = cc.loader.getXMLHttpRequest();
        var statusPostLabel = cc.LabelTTF.create("Status:", "Thonburi", 18);
        this.addChild(statusPostLabel, 1);

        statusPostLabel.x = winSize.width / 2;

        statusPostLabel.y = winSize.height - 140;
        statusPostLabel.setString("Status: Send Post Request to httpbin.org");

        xhr.open("POST", "http://httpbin.org/post");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText.substring(0, 50) + "...";
                var responseLabel = cc.LabelTTF.create("POST Response (50 chars):  \n" + response, "Thonburi", 16);
                that.addChild(responseLabel, 1);
                responseLabel.anchorX = 0;
                responseLabel.anchorY = 1;
                responseLabel.textAlign = cc.TEXT_ALIGNMENT_LEFT;

                responseLabel.x = winSize.width / 2;
                responseLabel.y = winSize.height / 2;
                statusPostLabel.setString("Status: Got POST response! " + httpStatus);
            }
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
    cc.director.runScene(pScene);
};
