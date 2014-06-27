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

var buttons = {
    "Share link" : "onShareLink",
    "Share open graph" : "onShareOG",
    "Share photo" : "onSharePhoto",
    "Link message" : "onLinkMsg",
    "Open graph message" : "onOGMsg",
    "Photo message" : "onPhotoMsg",
    "App request" : "onRequest"
};

var FacebookShareTest = PluginXTest.extend({
    _title:"Plugin-x Test",
    _subtitle:"Facebook SDK",
    _agentManager:null,

    ctor:function(title) {
        this._super(title);

        var menu = cc.Menu.create();
        menu.setPosition( cc.p(0, 0) );
        menu.width = winSize.width;
        menu.height = winSize.height;
        this.addChild(menu, 1);

        var top = 50;
        for (var action in buttons) {
            var label = cc.LabelTTF.create(action, "Arial", 24);
            var item = cc.MenuItemLabel.create(label, this[buttons[action]], this);
            item.setPosition(winSize.width / 2, winSize.height - top);
            menu.addChild(item);
            top += 50;
        }

        this._agentManager = plugin.AgentManager.getInstance();
    },

    onShareLink : function(){
        var map = {
            "dialog" : "share_link",
            "description" : "Cocos2d-x is a great game engine",
            "title" : "Cocos2d-x",
            "link" : "http://www.cocos2d-x.org",
            "imageUrl" : "http://files.cocos2d-x.org/images/orgsite/logo.png"
        };
        this._agentManager.getSharePlugin().callFuncWithParam("dialog", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, map));
    },

    onShareOG : function(){
        var map = {
            "dialog" : "share_open_graph",
            "action_type" : "fbogsamplesd:dish",
            "preview_property" : "dish",
            "title" : "Roasted pumpkin seeds",
            "image" : "http://files.cocos2d-x.org/images/orgsite/logo.png",
            "url" : "http://example.com/roasted_pumpkin_seeds", // Please change to your own action
            "description" : "Crunchy pumpkin seeds roasted in butter and lightly salted."
        };
        this._agentManager.getSharePlugin().callFuncWithParam("dialog", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, map));
    },

    onSharePhoto : function(){
        var map = {
            "dialog" : "share_photo",
            "photo" : "http://files.cocos2d-x.org/images/orgsite/logo.png"
        };
        this._agentManager.getSharePlugin().callFuncWithParam("dialog", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, map));
    },

    onLinkMsg : function(){
        var map = {
            "dialog" : "message_link",
            "description" : "Cocos2d-x is a great game engine",
            "title" : "Cocos2d-x",
            "link" : "http://www.cocos2d-x.org",
            "imageUrl" : "http://files.cocos2d-x.org/images/orgsite/logo.png"
        };
        this._agentManager.getSharePlugin().callFuncWithParam("dialog", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, map));
    },

    onOGMsg : function(){
        var map = {
            "dialog" : "message_open_graph",
            "action_type" : "fbogsamplesd:dish",
            "preview_property" : "dish",
            "title" : "Roasted pumpkin seeds",
            "image" : "http://files.cocos2d-x.org/images/orgsite/logo.png",
            "url" : "http://example.com/roasted_pumpkin_seeds", // Please change to your own action
            "description" : "Crunchy pumpkin seeds roasted in butter and lightly salted."
        };
        this._agentManager.getSharePlugin().callFuncWithParam("dialog", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, map));
    },

    onPhotoMsg : function(){
        var map = {
            "dialog" : "message_photo",
            "photo" : "http://files.cocos2d-x.org/images/orgsite/logo.png"
        };
        this._agentManager.getSharePlugin().callFuncWithParam("dialog", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, map));
    },

    onRequest : function(){
        var map = {
            "dialog" : "apprequests",
            "message" : "Cocos2d-x is a great game engine",
            "link" : "http://www.cocos2d-x.org"
        };
        this._agentManager.getSharePlugin().callFuncWithParam("dialog", new plugin.PluginParam(plugin.PluginParam.ParamType.TypeStringMap, map));
    },

    onNextCallback:function (sender) {
        var s = new PluginXTestScene();
        s.addChild(new PluginXTestLayer());
        director.runScene(s);
    },
    onBackCallback:function (sender) {
        var s = new PluginXTestScene();
        s.addChild(new PluginXTestLayer());
        director.runScene(s);
    }
});