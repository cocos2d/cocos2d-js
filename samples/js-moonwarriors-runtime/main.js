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

/**
 * A brief explanation for "project.json":
 * Here is the content of project.json file, this is the global configuration for your game, you can modify it to customize some behavior.
 * The detail of each field is under it.
 {
    "debugMode"     : 1,
    // "debugMode" possible values :
    //      0 - No message will be printed.
    //      1 - cc.error, cc.assert, cc.warn, cc.log will print in console.
    //      2 - cc.error, cc.assert, cc.warn will print in console.
    //      3 - cc.error, cc.assert will print in console.
    //      4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.
    //      5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.
    //      6 - cc.error, cc.assert will print on canvas, available only on web.

    "showFPS"       : true,
    // Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.

    "frameRate"     : 60,
    // "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.

    "id"            : "gameCanvas",
    // "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.

    "renderMode"    : 0,
    // "renderMode" sets the renderer type, only useful on web :
    //      0 - Automatically chosen by engine
    //      1 - Forced to use canvas renderer
    //      2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers

    "engineDir"     : "../../frameworks/cocos2d-html5/",
    // In debug mode, if you use the whole engine to develop your game, you should specify its relative path with "engineDir",
    // but if you are using a single engine file, you can ignore it.

    "modules"       : ["cocos2d"],
    // "modules" defines which modules you will need in your game, it's useful only on web,
    // using this can greatly reduce your game's resource size, and the cocos console tool can package your game with only the modules you set.
    // For details about modules definitions, you can refer to "../../frameworks/cocos2d-html5/modulesConfig.json".

    "jsList"        : [
    ]
    // "jsList" sets the list of js files in your game.
 }
 *
 */

cc.log("==> main.js loaded!");

cc.game.onStart = function () {
    cc.log("==> cc.game.onStart ...");
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(480, 720, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    cc.director.setProjection(cc.Director.PROJECTION_2D);
    cc.LoaderLayer.setConfig({
        background: {
            res: "res/loading.png"
        },
        logo: {
            res: "res/logo.png",
            action: null
        },
        title: {
            res: "res/logoBack.png"
        },
        onEnter: function (layer) {
            cc.log("moonwarriors onEnter");
            var label = new cc.LabelTTF("this is moonwarriors","Arial",22);
            label.setColor(cc.color(255,0,0));
            label.setPosition(cc.p(cc.winSize.width/2,200));
            layer.addChild(label);
        },
        onExit: function (layer) {
            cc.log("moonwarriors onExit");
        },
        tips: {
            color: cc.color(255, 0, 0),
            tipsProgress: function (status, loaderlayer) {
                var statusStr = "runtime正在";
                if (status.stage == cc.network.preloadstatus.DOWNLOAD) {
                    statusStr += "下载";
                } else if (status.stage == cc.network.preloadstatus.UNZIP) {
                    statusStr += "解压";
                }
                if (status.groupName) {
                    statusStr += status.groupName;
                }
                statusStr += " 进度:" + status.percent.toFixed(2) + "%";
                loaderlayer.getTipsLabel().setString(statusStr);
            }
        }
    });
    if (cc.sys.isNative) {
        //get netowrk status
        var networkStatus = cc.network.getNetworkType();
        if (networkStatus == cc.network.type.WIFI) {
            cc.log("current network is WIFI");
        } else if (networkStatus == cc.network.type.MOBILE) {
            cc.log("current network is MOBILE");
        } else if (networkStatus == cc.network.type.NO_NETWORK) {
            cc.log("current network is UNKNOWN");
        }
        cc.director.runScene(SysMenu.scene());
    } else {
        cc.LoaderScene.preload(window["boot"], function () {
            cc.LoaderLayer.preload(["gamelayer"], function () {
                cc.director.runScene(SysMenu.scene());
            });
        });
    }

    var self = this;
    //load resources
};

cc.game.run();