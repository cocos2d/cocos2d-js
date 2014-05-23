/****************************************************************************
 Copyright (c) 2014 Chukong Technologies Inc.

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



var g_IOSIAP = null;
var s_strAppKey = "";
// The app key of flurry
var FLURRY_KEY_IOS = "KMGG7CD9WPK2TW4X9VR8";
var FLURRY_KEY_ANDROID = "SPKFH8KMPGHMMBWRBT5W";
var UMENG_KEY_IOS = "50d2b18c5270152187000097";
var UMENG_KEY_ANDROID = "";          // umeng key for android is setted in AndroidManifest.xml


if (!plugin) {
    var plugin = {};
}

plugin.onApplicationDidEnterBackground = function () {
    if (g_IOSIAP != null) {
        cc.log("plugin.onApplicationDidEnterBackground.");
        g_IOSIAP.stopSession();
    }
};


plugin.onApplicationWillEnterForeground = function () {
    if (g_IOSIAP != null) {
        cc.log("plugin.onApplicationWillEnterForeground.");
        g_IOSIAP.startSession(s_strAppKey);
    }
};

var loadIAPPlugin = function () {
    var pluginManager = plugin.PluginManager.getInstance();
    g_IOSIAP = pluginManager.loadPlugin("IOSIAP");
    cc.log("i am in loadIAPPlugin,g_IOSIAP is "+g_IOSIAP);
};


TAG_LOG_EVENT_ID = 0;
TAG_LOG_EVENT_ID_KV = 1;
TAG_LOG_ONLINE_CONFIG = 2;
TAG_LOG_EVENT_ID_DURATION = 3;
TAG_LOG_EVENT_BEGIN = 4;
TAG_LOG_EVENT_END = 5;
TAG_MAKE_ME_CRASH = 6;

var s_EventMenuItem2 = [
    {id: "TestIap", tag: TAG_LOG_ONLINE_CONFIG},
    {id: "LogEvent-eventId", tag: TAG_LOG_EVENT_ID},
    {id: "LogEvent-eventId-kv", tag: TAG_LOG_EVENT_ID_KV},
    {id: "LogEvent-eventId-Duration", tag: TAG_LOG_EVENT_ID_DURATION},
    {id: "LogEvent-Begin", tag: TAG_LOG_EVENT_BEGIN},
    {id: "LogEvent-End", tag: TAG_LOG_EVENT_END},
    {id: "MakeMeCrash", tag: TAG_MAKE_ME_CRASH}
];

var IOSIAPTestLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        cc.associateWithNative(this, cc.Layer);
    },

    onEnter: function () {
        this._super();
        var size = cc.Director.getInstance().getWinSize();

        cc.log("ENTERED");

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.

        // add a "close" icon to exit the progress. it's an autorelease object
        var pCloseItem = cc.MenuItemImage.create(
            "CloseNormal.png",
            "CloseSelected.png",
            this.menuCloseCallback,
            this);
        pCloseItem.setPosition(cc.p(size.width - 20, 20));

        // create menu, it's an autorelease object
        var pMenu = cc.Menu.create(pCloseItem);
        pMenu.setPosition(cc.p(0, 0));
        this.addChild(pMenu, 1);

        var yPos = 0;
        for (var i = 0; i < s_EventMenuItem2.length; i++) {
            var label = cc.LabelTTF.create(s_EventMenuItem2[i].id, "Arial", 24);
            var pMenuItem = cc.MenuItemLabel.create(label, this.eventMenuCallback, this);
            pMenu.addChild(pMenuItem, 0, s_EventMenuItem2[i].tag);
            yPos = size.height - 50 * i - 100;
            pMenuItem.setPosition(cc.p(size.width / 2, yPos));
        }

        var strName = g_IOSIAP.getPluginName();
        var strVer = g_IOSIAP.getPluginVersion();
        var ret = "Plugin : " + strName + ", Ver : " + strVer;
        var pLabel = cc.LabelTTF.create(ret, "Arial", 24, cc.size(size.width, 0), cc.TEXT_ALIGNMENT_CENTER);
        pLabel.setPosition(cc.p(size.width / 2, yPos - 100));
        this.addChild(pLabel);

        var label = cc.LabelTTF.create("reload all plugins", "Arial", 24);
        var pMenuItem = cc.MenuItemLabel.create(label, this.reloadPluginMenuCallback, this);
        pMenuItem.setAnchorPoint(cc.p(0.5, 0));
        pMenu.addChild(pMenuItem, 0);
        pMenuItem.setPosition(cc.p(size.width / 2, 0));
        this._listener = new plugin.IAPListener();
        g_IOSIAP.setResultListener(this._listener);
    },

    reloadPluginMenuCallback: function (pSender) {
        cc.log("reloadPluginMenuCallback");
        plugin.PluginManager.getInstance().unloadPlugin("AnalyticsFlurry");
        plugin.PluginManager.getInstance().unloadPlugin("AnalyticsUmeng");

        loadIAPPlugin();
    },

    eventMenuCallback: function (pSender) {
        switch (pSender.getTag()) {
            case TAG_LOG_EVENT_ID:
            {
                g_IOSIAP.logEvent("click");
                g_IOSIAP.logEvent("music");
            }
                break;
            case TAG_LOG_EVENT_ID_KV:
            {
                var paramMap = {};
                paramMap["type"] = "popular";
                paramMap["artist"] = "JJLin";
                g_IOSIAP.logEvent("music", paramMap);
            }
                break;
            case TAG_LOG_ONLINE_CONFIG:
            {
                var array= ["001","002"];
                var temp = {};
                temp["ids"] = array.toString();
                temp["str"] = "is just a string";
                cc.log("in TAG_LOG_ONLINE_CONFIG functions");
                g_IOSIAP.callFuncWithParam("initIAPInfo");
//                g_IOSIAP.callStringFuncWithParam("requestProducts", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, temp));
                g_IOSIAP.callFuncWithParam("requestProducts", plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, array.toString()));
            }
                break;
            case TAG_LOG_EVENT_ID_DURATION:
            {
                g_IOSIAP.callFuncWithParam("logEventWithDuration",
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "book"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeInt, 12000));
                g_IOSIAP.callFuncWithParam("logEventWithDurationLabel",
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "book"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeInt, 23000),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "chapter1"));
                var paramMap = {};
                paramMap["type"] = "popular";
                paramMap["artist"] = "JJLin";
                g_IOSIAP.callFuncWithParam("logEventWithDurationParams",
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "music"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeInt, 2330000),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, paramMap));
            }
                break;
            case TAG_LOG_EVENT_BEGIN:
            {
                g_IOSIAP.logTimedEventBegin("music");

                var paramMap = {};
                paramMap["type"] = "popular";
                paramMap["artist"] = "JJLin";

                g_IOSIAP.callFuncWithParam("logTimedEventWithLabelBegin",
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "music"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "one"));
                g_IOSIAP.callFuncWithParam("logTimedKVEventBegin",
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "music"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "flag0"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, paramMap));

                g_IOSIAP.callFuncWithParam("logTimedEventBeginWithParams",
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "music-kv"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, paramMap));
            }
                break;
            case TAG_LOG_EVENT_END:
            {
                g_IOSIAP.logTimedEventEnd("music");

                g_IOSIAP.callFuncWithParam("logTimedEventWithLabelEnd",
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "music"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "one"));
                g_IOSIAP.callFuncWithParam("logTimedKVEventEnd",
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "music"),
                    new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "flag0"));

                g_IOSIAP.callFuncWithParam("logTimedEventEnd", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeString, "music-kv"));
            }
                break;
            case TAG_MAKE_ME_CRASH:
            {

            }
                break;
            default:
                break;
        }
    },

    menuCloseCallback: function () {
        cc.log("menuCloseCallback");
    }

});

var IOSIAPTest = cc.Scene.extend({
    ctor: function () {
        this._super();
        cc.associateWithNative(this, cc.Scene);
    },

    onEnter: function () {
        this._super();
        loadIAPPlugin();
        var layer = new IOSIAPTestLayer();
        layer.init();
        this.addChild(layer);
    }
});

plugin.IAPListener = cc.Class.extend({
    onPayResult: function(ret, msg, productInfo) {
        cc.log("---------onPayResult callback begin-----------------");
        cc.log("onPayResult="+ ret + ";msg=" +msg + ";productinfo="+productInfo);
        cc.log("---------onPayResult callback end-----------------");
    }
})