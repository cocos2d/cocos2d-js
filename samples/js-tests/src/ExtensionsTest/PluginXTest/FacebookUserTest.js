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

var FB = FB || plugin.FacebookAgent.getInstance();

var FacebookUserTest = PluginXTest.extend({
    _title: "Plugin-x Test",
    _subtitle: "Facebook SDK",
    _agentManager: null,
    _isLogin: false,
    ctor: function (title) {
        this._super(title);

        var login_label = new cc.LabelTTF("login", "Arial", 24);
        var login_item = new cc.MenuItemLabel(login_label, this.loginClick, this);
        login_item.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(120, 100)));

        var logout_label = new cc.LabelTTF("logout", "Arial", 24);
        var logout_item = new cc.MenuItemLabel(logout_label, this.logoutClick, this);
        logout_item.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(120, 50)));

        var getUid_label = new cc.LabelTTF("getUid", "Arial", 24);
        var getUid_item = new cc.MenuItemLabel(getUid_label, this.getUidClick, this);
        getUid_item.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(120, 0)));

        var getToken_label = new cc.LabelTTF("getToken", "Arial", 24);
        var getToken_item = new cc.MenuItemLabel(getToken_label, this.getTokenClick, this);
        getToken_item.setPosition(cc.pAdd(cc.visibleRect.left, cc.p(120, -50)));

        this.result = new cc.LabelTTF("You can see the result at this label", "Arial", 26);
        this.result.setPosition(cc.pAdd(cc.visibleRect.center, cc.p(100, 0)));
        this.result.boundingWidth = 400;
        this.addChild(this.result, 1);


        var menu = new cc.Menu(login_item, logout_item, getUid_item, getToken_item);
        menu.setPosition(cc.p(0, 0));
        menu.anchorX = 0;
        menu.anchorY = 0;
        this.addChild(menu, 1);

    },

    loginClick: function (sender) {
        var self = this;
        FB.login(function(type, msg){
            self.result.setString("type is " + type + " msg is " + msg);
        });
    },
    logoutClick: function (sender) {
        FB.logout(function(type, msg){

        });
    },
    getUidClick: function (sender) {
        var self = this;
        FB.request("/me", 0, {}, function(type, msg){
            cc.log(msg);
            var response = JSON.parse(msg);
            self.result.setString(response["id"]);
        });
    },
    getTokenClick: function (sender) {
        var token = FB.getAccessToken();
        this.result.setString(token);
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