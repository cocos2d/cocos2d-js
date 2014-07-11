/****************************************************************************
 Copyright (c) 2013-2014 Chukong Technologies Inc.

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

//------------------------------------------------------------------
//
// ReflectionTestLayer
//
//------------------------------------------------------------------
var ReflectionTestLayer = BaseTestLayer.extend({
    _title:"jsb.reflection",
    _subtitle:"call java methods in js",

    ctor:function() {
        this._super(cc.color(0,0,0,255), cc.color(98,99,117,255));

        var label = cc.LabelTTF.create("Show Alert Dialog", "Arial", 35);
        var menuItem = cc.MenuItemLabel.create(label, function(){
            jsb.reflection.callStaticMethod("org/cocos2dx/js_tests/AppActivity", "showAlertDialog", "(Ljava/lang/String;Ljava/lang/String;)V", "How are you ?", "I'm great !");
        }, this);
        menuItem.x = winSize.width / 2;
        menuItem.y = winSize.height / 2;

        var menu = cc.Menu.create(menuItem);
        menu.x = 0;
        menu.y = 0;
        
        this.addChild(menu);
    }
});

var ReflectionTestScene = TestScene.extend({
    runThisTest:function () {
        this.addChild(new ReflectionTestLayer());
        director.runScene(this);
    }
});
