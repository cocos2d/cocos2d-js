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

var FacebookShareTest = PluginXTest.extend({
    _title:"Plugin-x Test",
    _subtitle:"Facebook SDK",
    _agentManager:null,

    ctor:function(title) {
        this._super(title);

        var menu = cc.Menu.create();
        menu.setPosition( cc.p(0, 0) );
        menu.width = winSize.width;
        menu.height = 50;
        this.addChild(menu, 1);

        var login_label = cc.LabelTTF.create("login", "Arial", 24);
        var login_item = cc.MenuItemLabel.create(login_label, this.onLoginClick, this);
        login_item.setPosition(winSize.width / 2, winSize.height / 2);
        menu.addChild(login_item);

        this._agentManager = plugin.AgentManager.getInstance();
    },

    onLoginClick : function(){
//        this._agentManager.login(function(code, msg){
//            cc.log(msg);
//        });
        var map = {
            "dialog" : "share_link",
            "name" : "Cocos2d-x is a great game engine",
            "link" : "http://www.cocos2d-x.org"
        }
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