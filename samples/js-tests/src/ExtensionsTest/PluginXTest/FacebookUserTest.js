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

var FacebookUserTest = PluginXTest.extend({
    _title: "Plugin-x Test",
    _subtitle: "Facebook SDK",
    _agentManager: null,
    _isLogin: false,
    ctor: function (title) {
        this._super(title);

        var login_label = cc.LabelTTF.create("login", "Arial", 24);
        var login_item = cc.MenuItemLabel.create(login_label, this.loginClick, this);
        login_item.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(120, 100)));

        var logout_label = cc.LabelTTF.create("logout", "Arial", 24);
        var logout_item = cc.MenuItemLabel.create(logout_label, this.logoutClick, this);
        logout_item.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(120, 50)));

        var getUid_label = cc.LabelTTF.create("getUid", "Arial", 24);
        var getUid_item = cc.MenuItemLabel.create(getUid_label, this.getUidClick, this);
        getUid_item.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(120, 0)));

        var getToken_label = cc.LabelTTF.create("getToken", "Arial", 24);
        var getToken_item = cc.MenuItemLabel.create(getToken_label, this.getTokenClick, this);
        getToken_item.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(120, -50)));

        this.result = cc.LabelTTF.create("You can see the result at this label", "Arial", 26);
        this.result.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(100, 0)));
        this.addChild(this.result, 1);


        var menu = cc.Menu.create(login_item, logout_item, getUid_item, getToken_item);
        menu.setPosition(cc.p(0, 0));
        menu.anchorX = 0;
        menu.anchorY = 0;
        this.addChild(menu, 1);

        this._agentManager = plugin.agentManager;
    },

    loginClick: function (sender) {
        var self = this;
        this._agentManager.login(function(type,msg){
            self.loginCallBack(type,msg);
        });
    },
    loginCallBack: function (type, msg) {
        this.result.setString("type is " + type + " msg is " + msg);
        if (type == 0) {
            this._isLogin = true;
        }
    },
    logoutClick: function (sender) {
        this._agentManager.logout();
    },
    getUidClick: function (sender) {
        if (!this._agentManager.isLogined()) {
            this.result.setString("please Login first");
            return;
        }
        var uid = this._agentManager.getUserPlugin().callStringFuncWithParam("getUserId");
        this.result.setString(uid);
    },
    getTokenClick: function (sender) {
        if (!this._agentManager.isLogined()) {
            this.result.setString("please Login first");
            return;
        }
        var uid = this._agentManager.getUserPlugin().callStringFuncWithParam("getToken");
        this.result.setString(uid);
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