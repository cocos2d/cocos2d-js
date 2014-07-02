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

var FacebookShareTest = PluginXTest.extend({
    _title: "Plugin-x Test",
    _subtitle: "Facebook SDK",
    _agentManager: null,
    _showTips: false,

    ctor: function (title) {
        this._super(title);

        var menu = cc.Menu.create();
        menu.setPosition(cc.p(0, 0));
        menu.width = winSize.width;
        menu.height = winSize.height;
        this.addChild(menu, 1);

        var top = 50;
        for (var action in buttons) {
            var label = cc.LabelTTF.create(action, "Arial", 24);
            var item = cc.MenuItemLabel.create(label, this[buttons[action]], this);
            item.setPosition(winSize.width * 1 / 3, winSize.height - top);
            menu.addChild(item);
            top += 50;
        }

        var logo = cc.Sprite.create(s_html5_logo);
        logo.setPosition(winSize.width * 2 / 3, winSize.height / 2);
        this.addChild(logo);

        this._agentManager = plugin.agentManager;

        this.tipsLabel = cc.LabelTTF.create("This share function is not available on web version of Facebook plugin", "Arial", 20);
        this.tipsLabel.setDimensions(cc.size(350, 120));
        this.addChild(this.tipsLabel, 100);
        this.tipsLabel.setPosition(cc.pAdd(cc.visibleRect.topRight, cc.p(-this.tipsLabel.width / 2 - 20, -100)));
        this.tipsLabel.visible = false;
    },

    onShareLink: function () {
        var map = {
            "dialog": "share_link",
            "description": "Cocos2d-x is a great game engine",
            "title": "Cocos2d-x",
            "link": "http://www.cocos2d-x.org",
            "imageUrl": "http://files.cocos2d-x.org/images/orgsite/logo.png"
        };
        this._agentManager.share(map, function (resultcode, msg) {
            cc.log(msg);
        });
    },
    showDisableTips: function (msg) {
        if (!this._showTips) {
            this._showTips = true;
            if (msg) {
                var preMsg = this.tipsLabel.getString();
                this.tipsLabel.setString(msg);
            }
            var anim = cc.Sequence.create(cc.FadeIn.create(0.2), cc.DelayTime.create(2), cc.FadeOut.create(0.2), cc.CallFunc.create(function () {
                this._showTips = false;
                this.tipsLabel.visible = false;
                if (preMsg)
                    this.tipsLabel.setString(preMsg);
            }, this));
            this.tipsLabel.visible = true;
            this.tipsLabel.runAction(anim);
        }
    },
    onShareOG: function () {
        if (!cc.sys.isNative) {
            var msg = "The development of Facebook plugin for web is still in progress, some of them is not available";
            this.showDisableTips(msg);
            return;
        }
        var map = {
            "dialog": "share_open_graph",
            "action_type": "fbogsamplesd:dish",
            "preview_property": "dish",
            "title": "Roasted pumpkin seeds",
            "image": "http://files.cocos2d-x.org/images/orgsite/logo.png",
            "url": "http://example.com/roasted_pumpkin_seeds", // Please change to your own action
            "description": "Crunchy pumpkin seeds roasted in butter and lightly salted."
        };
        this._agentManager.dialog(map, function (resultcode, msg) {
            cc.log(msg);
        });
    },

    onSharePhoto: function () {
        if (!cc.sys.isNative) {
            this.showDisableTips();
            return;
        }
        var img = this.screenshot("facebookshare.jpg");

        var delay = cc.DelayTime.create(2);
        var share = cc.CallFunc.create(function () {
            var map = {
                "dialog": "share_photo",
                "photo": img
            };
            plugin.AgentManager.getInstance().dialog(map, function (resultcode, msg) {
                cc.log(msg);
            });
        });
        var seq = cc.Sequence.create(delay, share);
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
        this._agentManager.dialog(map, function (resultcode, msg) {
            cc.log(msg);
        });
    },

    onOGMsg: function () {
        if (!cc.sys.isNative) {
            this.showDisableTips();
            return;
        }
        var map = {
            "dialog": "message_open_graph",
            "action_type": "fbogsamplesd:dish",
            "preview_property": "dish",
            "title": "Roasted pumpkin seeds",
            "image": "http://files.cocos2d-x.org/images/orgsite/logo.png",
            "url": "http://example.com/roasted_pumpkin_seeds", // Please change to your own action
            "description": "Crunchy pumpkin seeds roasted in butter and lightly salted."
        };
        this._agentManager.dialog(map, function (resultcode, msg) {
            cc.log(msg);
        });
    },

    onPhotoMsg: function () {
        if (!cc.sys.isNative) {
            this.showDisableTips();
            return;
        }
        var img = this.screenshot("facebookmessage.jpg");

        var delay = cc.DelayTime.create(2);
        var share = cc.CallFunc.create(function () {
            var map = {
                "dialog": "message_photo",
                "photo": img
            };
            plugin.AgentManager.getInstance().dialog(map, function (resultcode, msg) {
                cc.log(msg);
            });
        });
        var seq = cc.Sequence.create(delay, share);
        this.runAction(seq);
    },

    onRequest: function () {
        if (!cc.sys.isNative) {
            this.showDisableTips();
            return;
        }

        var map = {
            "dialog": "apprequests",
            "message": "Cocos2d-x is a great game engine",
            "link": "http://www.cocos2d-x.org"
        };
        this._agentManager.dialog(map, function (resultcode, msg) {
            cc.log(msg);
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
        var tex = cc.RenderTexture.create(winSize.width, winSize.height, cc.Texture2D.PIXEL_FORMAT_RGBA8888);
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