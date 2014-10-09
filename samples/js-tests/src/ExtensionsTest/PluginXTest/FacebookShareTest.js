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
    "Share link": "onShareLink",
    "Share open graph": "onShareOG",
    "Share photo": "onSharePhoto",
    "Link message": "onLinkMsg",
    "Open graph message": "onOGMsg",
    "Photo message": "onPhotoMsg",
    "App request": "onRequest"
};

var appRequestAction = {
    "Invites request": "onInviteRequest",
    "Target invite request": "onTargetInviteRequest",
    "specific lists of friends":"onSpecificListsFriends",
    "Sending requests explicitly":"SendingRequestsExplicitly",
    "Turn-based games": "onTurnBasedGamesRequest"
};
var shareLinkAction = {
    "share a simple link": "onShareSimpleLink",
    "share a Text link": "onShareTextInfoLink",
    "share a Picture link": "onSharePictureInfoLink",
    "share a media link": "onShareMediaSource"
};

var FacebookShareTest = PluginXTest.extend({
    _title: "Plugin-x Test",
    _subtitle: "Facebook SDK",
    _agentManager: null,
    _showTips: false,
    _secondMenu:null,
    ctor: function (title) {
        this._super(title);

        window.facebook = window.facebook || (window.plugin ? plugin.FacebookAgent.getInstance() : null);

        var menu = new cc.Menu();
        menu.setPosition(cc.p(0, 0));
        menu.width = winSize.width;
        menu.height = winSize.height;
        this.addChild(menu, 1);

        var top = 50;
        for (var action in buttons) {
            var label = new cc.LabelTTF(action, "Arial", 24);
            var item = new cc.MenuItemLabel(label, this[buttons[action]], this);
            item.setPosition(winSize.width * 1 / 3, winSize.height - top);
            menu.addChild(item);
            top += 50;
        }

        var logo = new cc.Sprite(s_html5_logo);
        logo.setPosition(winSize.width * 2 / 3, winSize.height / 2);
        this.addChild(logo);

        this._agentManager = plugin.agentManager;

        this.tipsLabel = new cc.LabelTTF("This share function is not available on web version of Facebook plugin", "Arial", 20);
        this.tipsLabel.setDimensions(cc.size(350, 120));
        this.addChild(this.tipsLabel, 100);
        this.tipsLabel.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p(-this.tipsLabel.width / 2 - 20, -100)));
        this.tipsLabel.visible = false;

        this._secondMenu = new cc.Menu();
        this._secondMenu.setPosition(cc.p(340, 0));
        this._secondMenu.width = winSize.width / 2;
        this._secondMenu.height = winSize.height;
        this.addChild(this._secondMenu, 2);
    },
    showSecondMenu: function (buttonActions) {
        this._secondMenu.removeAllChildren();
        var top = 50;
        for (var action in buttonActions) {
            var label = new cc.LabelTTF(action, "Arial", 24);
            var item = new cc.MenuItemLabel(label, this[buttonActions[action]], this);
            item.setPosition(winSize.width * 1 / 3, winSize.height - top);
            this._secondMenu.addChild(item);
            top += 50;
        }
    },
    onShareLink: function () {
        this.showSecondMenu(shareLinkAction);
    },

    onShareSimpleLink: function (){
        var map = {
            "dialog": "share_link",
            "link": "http://www.cocos2d-x.org"
        };
        if(facebook.canPresentDialog(map)){
            facebook.dialog(map,function(errorCode,msg){
                cc.log(JSON.stringify(msg));
            });
        }else{
            facebook.webDialog(map,function(errorCode,msg){
                cc.log(JSON.stringify(msg));
            });
        }
    },
    onShareTextInfoLink: function (){
        var map = {
            "dialog": "share_link",
            "name": "Cocos2d-x web site",
            "caption": "Cocos2d-x caption",
            "description":"Cocos2d-x description",
            "link": "http://www.cocos2d-x.org"
        };
        if(facebook.canPresentDialog(map)){
            facebook.dialog(map,function(errorCode,msg){
                cc.log(JSON.stringify(msg));
            });
        }else{
            facebook.webDialog(map,function(errorCode,msg){
                cc.log(JSON.stringify(msg));
            });
        }
    },
    onSharePictureInfoLink: function (){
        var map = {
            "dialog": "share_link",
            "name": "Cocos2d-x web site",
            "caption": "Cocos2d-x caption",
            "description":"Cocos2d-x description",
            "to": "100006738453912", // android only web view support
            "picture": "http://files.cocos2d-x.org/images/orgsite/logo.png",
            "link": "http://www.cocos2d-x.org"
        };
        if(facebook.canPresentDialog(map)){
            facebook.dialog(map,function(errorCode,msg){
                cc.log(JSON.stringify(msg));
            });
        }else{
            facebook.webDialog(map,function(errorCode,msg){
                cc.log(JSON.stringify(msg));
            });
        }
    },
    onShareMediaSource: function () {
        var map = {
            "dialog": "share_link",
            "name": "Cocos2d-x web site",
            "caption": "Cocos2d-x caption",
            "description":"Cocos2d-x description",
            "media_source": "http://221.203.1.212/youku/6775B002C8F48839F6AFA63BDA/0300200100540438A173C515AA2BED245C4903-F675-B311-EF1A-4544B5C04370.mp4",
            "link": "http://www.cocos2d-x.org"
        };

        // only support in web dialog
        facebook.webDialog(map,function(errorCode,msg){
            cc.log(JSON.stringify(msg));
        });
    },
    showDisableTips: function (msg) {
        if (!this._showTips) {
            this._showTips = true;
            if (msg) {
                var preMsg = this.tipsLabel.getString();
                this.tipsLabel.setString(msg);
            }
            var anim = cc.sequence(
                cc.fadeIn(0.2),
                cc.delayTime(2),
                cc.fadeOut(0.2),
                cc.callFunc(function () {
                    this._showTips = false;
                    this.tipsLabel.visible = false;
                    if (preMsg)
                        this.tipsLabel.setString(preMsg);
                }, this)
            );
            this.tipsLabel.visible = true;
            this.tipsLabel.runAction(anim);
        }
    },
    onShareOG: function () {
        var map = {
            "dialog": "share_open_graph",
            "action_type": "cocostestmyfc:share",
            "preview_property": "cocos_document",
            "title": "Cocos2d-JS Game Engine",
            "image": "http://files.cocos2d-x.org/images/orgsite/logo.png",
            "url": "http://cocos2d-x.org/docs/manual/framework/html5/en",
            "description": "cocos document"
        };
        if(facebook.canPresentDialog(map)){
            facebook.dialog(map, function (resultcode, msg) {
                cc.log(JSON.stringify(msg));
            });
        }else{
            facebook.webDialog(map, function (resultcode, msg) {
                cc.log(JSON.stringify(msg));
            });
        }


    },

    onSharePhoto: function () {
        if (!cc.sys.isNative) {
            this.showDisableTips();
            return;
        }
        var img = this.screenshot("facebookshare.jpg");

        var delay = cc.delayTime(2);
        var share = cc.callFunc(function () {
            var map = {
                "dialog": "share_photo",
                "photo": img
            };
            if(facebook.canPresentDialog(map)){
                facebook.dialog(map, function (resultcode, msg) {
                    cc.log(JSON.stringify(msg));
                });
            }else{
                cc.log("Can't use webDialog for share_photo");
            }
        });
        var seq = cc.sequence(delay, share);
        this.runAction(seq);

    },

    onLinkMsg: function () {
        if (!cc.sys.isNative) {
            this.showDisableTips();
            return;
        }
        var map = {
            "dialog": "message_link",
            "description": "Cocos2d-x is a great game engine",
            "title": "Cocos2d-x",
            "link": "http://www.cocos2d-x.org",
            "imageUrl": "http://files.cocos2d-x.org/images/orgsite/logo.png"
        };
        if(facebook.canPresentDialog(map)){
            facebook.dialog(map, function (resultcode, msg) {
                cc.log(JSON.stringify(msg));
            });
        }else{
            cc.log("Can't use webDialog for message_link");
        }
    },

    onOGMsg: function () {
        if (!cc.sys.isNative) {
            this.showDisableTips();
            return;
        }
        var map = {
            "dialog": "message_open_graph",
            "action_type": "cocostestmyfc:share",
            "preview_property": "cocos_document",
            "title": "Cocos2d-JS Game Engine",
            "image": "http://files.cocos2d-x.org/images/orgsite/logo.png",
            "url": "http://cocos2d-x.org/docs/manual/framework/html5/en",
            "description": "cocos document"
        };
        if(facebook.canPresentDialog(map)){
            facebook.dialog(map, function (resultcode, msg) {
                cc.log(JSON.stringify(msg));
            });
        }else{
            cc.log("Can't use webDialog for message_open_graph");
        }
    },

    onPhotoMsg: function () {
        if (!cc.sys.isNative) {
            this.showDisableTips();
            return;
        }
        var img = this.screenshot("facebookmessage.jpg");

        var delay = cc.delayTime(2);
        var share = cc.callFunc(function () {
            var map = {
                "dialog": "message_photo",
                "photo": img
            };
            if(facebook.canPresentDialog(map)){
                facebook.dialog(map, function (resultcode, msg) {
                    cc.log(JSON.stringify(msg));
                });
            }else{
                cc.log("Can't use webDialog for message_photo");
            }
        });
        var seq = cc.sequence(delay, share);
        this.runAction(seq);
    },

    onRequest: function () {
        this.showSecondMenu(appRequestAction);
    },

    onInviteRequest: function () {
        var map = {
            "message": "Cocos2d-x is a great game engine",
            "title": "Cocos2d-x title"
        };
        facebook.appRequest(map, function (resultcode, msg) {
            cc.log(JSON.stringify(msg));
        });
    },
    onTargetInviteRequest: function () {
        var map = {
            "message": "Cocos2d-x is a great game engine",
            "title": "Cocos2d-x title",
            "to": "100006738453912, 10204182777160522"
        };
        // android only web view support to
        facebook.appRequest(map, function (resultcode, msg) {
            cc.log(JSON.stringify(msg));
        });
    },
    onSpecificListsFriends: function () {
        var map = {
            "message": "Cocos2d-x is a great game engine",
            "title": "Cocos2d-x title",
            "filters": '[{"name":"company", "user_ids":["100006738453912","10204182777160522"]}]'
        };
        // android not support filters
        facebook.appRequest(map, function (resultcode, msg) {
            cc.log(JSON.stringify(msg));
        });
    },
    SendingRequestsExplicitly: function () {
        var map = {
            "message": "Cocos2d-x is a great game engine",
            "to": "100006738453912",
            "action_type":"send",
            "object_id":"191181717736427"// 191181717736427   1426774790893461
        };
        // android not support action_type
        facebook.appRequest(map, function (resultcode, msg) {
            cc.log(JSON.stringify(msg));
        });
    },
    onTurnBasedGamesRequest: function () {
        var map = {
            "message": "Cocos2d-x is a great game engine",
            "title": "Cocos2d-x title",
            "to": "100006738453912",
            "action_type":"turn"
        };
        // android not support action_type
        facebook.appRequest(map, function (resultcode, msg) {
            cc.log(JSON.stringify(msg));
        });
    },
    onNextCallback: function (sender) {
        var s = new PluginXTestScene();
        s.addChild(new PluginXTestLayer());
        director.runScene(s);
    },
    onBackCallback: function (sender) {
        var s = new PluginXTestScene();
        s.addChild(new PluginXTestLayer());
        director.runScene(s);
    },

    screenshot: function (fileName) {
        var tex = new cc.RenderTexture(winSize.width, winSize.height, cc.Texture2D.PIXEL_FORMAT_RGBA8888);
        tex.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
        tex.begin();
        cc.director.getRunningScene().visit();
        tex.end();

        var imgPath = jsb.fileUtils.getWritablePath();
        if (imgPath.length == 0) {
            return;
        }
        var result = tex.saveToFile(fileName, cc.IMAGE_FORMAT_JPEG);
        if (result) {
            imgPath += fileName;
            cc.log("save image:" + imgPath);
            return imgPath;
        }
        return "";
    }
});