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

var button_share = {
    "login": "loginClick",
    "loginWithPermission" : "loginWithPermissionClick",
    "logout": "logoutClick",
    "getUid": "getUidClick",
    "getToken": "getTokenClick",
    "getPermissions": "getPermissionClick",
    "request API": "requestClick"
};
button_share_native = {
    "publishInstall": "publicInstallClick",
    "logEvent": "LogEventClick"
}
var FacebookUserTest = PluginXTest.extend({
    _title: "Plugin-x Test",
    _subtitle: "Facebook SDK",
    _agentManager: null,
    _isLogin: false,
    ctor: function (title) {
        this._super(title);

        window.facebook = window.facebook || (window.plugin ? plugin.FacebookAgent.getInstance() : null);

        var menu = cc.Menu.create();
        for (var action in button_share) {
            var label = new cc.LabelTTF(action, "Arial", 24);
            var item = new cc.MenuItemLabel(label, this[button_share[action]], this);
            menu.addChild(item);
        }
        if (cc.sys.isNative) {
            for(var key in button_share_native){
                var label = new cc.LabelTTF(key, "Arial", 24);
                var item = new cc.MenuItemLabel(label, this[button_share_native[key]], this);
                menu.addChild(item);
            }
        }
        menu.alignItemsVerticallyWithPadding(16);
        menu.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(+120, 0)));
        this.addChild(menu);


        this.result = new cc.LabelTTF("You can see the result at this label", "Arial", 22);
        this.result.setPosition(cc.pAdd(cc.visibleRect.right, cc.p(-this.result.width / 2 - 30, 0)));
        this.result.boundingWidth = this.result.width;
        this.addChild(this.result, 1);
    },
    publicInstallClick: function () {
        facebook.activateApp();
        this.result.setString("activateApp is invoked");
    },
    LogEventClick: function () {
        var parameters = {};
        var floatVal = 888.888;
        parameters[plugin.FacebookAgent.AppEventParam.SUCCESS] = plugin.FacebookAgent.AppEventParamValue.VALUE_YES;
        facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL);
        facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL, floatVal);
        facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL, parameters);
        facebook.logEvent(plugin.FacebookAgent.AppEvent.COMPLETED_TUTORIAL, floatVal, parameters);
        this.result.setString("logEvent is invoked");
    },
    loginClick: function (sender) {
        var self = this;
        facebook.isLoggedIn(function (type, msg) {
            if (type == plugin.FacebookAgent.CODE_SUCCEED) {
                if (msg["isLoggedIn"]) {
                    self.result.setString("logged in");
                } else {
                    facebook.login(function (type, msg) {
                        self.result.setString("type is " + type + " msg is " + JSON.stringify(msg));
                    });
                }
            } else {
                self.result.setString("error");
            }
        });
    },
    logoutClick: function (sender) {
        var self = this;
        facebook.logout(function (type, msg) {
            self.result.setString(JSON.stringify(msg));
        });
    },
    getUidClick: function (sender) {
        var self = this;
        facebook.api("/me", plugin.FacebookAgent.HttpMethod.GET, function (type, msg) {
            if (type == plugin.FacebookAgent.CODE_SUCCEED) {
                self.result.setString(msg["id"]);
            } else {
                self.result.setString(msg["error_message"]);
            }
        });
    },
    getTokenClick: function (sender) {
        var self = this;
        facebook.requestAccessToken(function (type, msg) {
            if (type == plugin.FacebookAgent.CODE_SUCCEED) {
                self.result.setString(msg["accessToken"]);
            }
        });
    },

    loginWithPermissionClick: function (sender) {
        var self = this;
        var permissions = ["create_event", "create_note", "manage_pages", "publish_actions"];
        facebook.login(permissions, function (type, msg) {
            if (type == plugin.FacebookAgent.CODE_SUCCEED) {
                self.result.setString(msg["permissions"]);
            }
        });
    },
    getPermissionClick: function (sender) {
        var self = this;
        facebook.getPermissionList(function (type, data) {
            if (type == plugin.FacebookAgent.CODE_SUCCEED) {
                data = JSON.stringify(data);
                self.result.setString(data);
            }
        });
    },
    requestClick: function (sender) {
        var self = this;
        facebook.api("/me/photos", plugin.FacebookAgent.HttpMethod.POST, {"url": "http://files.cocos2d-x.org/images/orgsite/logo.png"}, function (type, msg) {
            if (type == plugin.FacebookAgent.CODE_SUCCEED) {
                self.result.setString("post_id: " + msg["post_id"]);
            }
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
    }
});