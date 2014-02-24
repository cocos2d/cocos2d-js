/****************************************************************************

 http://www.cocos2d-html5.org
 http://www.cocos2d-iphone.org
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

var sysTestSceneIdx = -1;
//------------------------------------------------------------------
//
// SysTestBase
//
//------------------------------------------------------------------
var SysTestBase = BaseTestLayer.extend({
    _title:"",
    _subtitle:"",

    ctor:function() {
        this._super(cc.c4b(0,0,0,255), cc.c4b(98,99,117,255));
    },

    onRestartCallback:function (sender) {
        var s = new SysTestScene();
        s.addChild(restartSysTest());
        director.replaceScene(s);
    },
    onNextCallback:function (sender) {
        var s = new SysTestScene();
        s.addChild(nextSysTest());
        director.replaceScene(s);
    },
    onBackCallback:function (sender) {
        var s = new SysTestScene();
        s.addChild(previousSysTest());
        director.replaceScene(s);
    },
    // automation
    numberOfPendingTests:function() {
        return ( (arrayOfSysTest.length-1) - sysTestSceneIdx );
    },

    getTestNumber:function() {
        return sysTestSceneIdx;
    }

});

//------------------------------------------------------------------
//
// LocalStorageTest
//
//------------------------------------------------------------------
var LocalStorageTest = SysTestBase.extend({
    _title:"LocalStorage Test ",
    _subtitle:"See the console",

    ctor:function () {
        this._super();

        var key = 'key_' + Math.random();
        var ls = sys.localStorage;
        cc.log(1);
        ls.setItem(key, "Hello world");

        cc.log(2);
        var r = ls.getItem(key);
        cc.log(r);

        cc.log(3);
        ls.removeItem(key);

        cc.log(4);
        r = ls.getItem(key);
        cc.log(r);
    }

});

//------------------------------------------------------------------
//
// CapabilitiesTest
//
//------------------------------------------------------------------
var CapabilitiesTest = SysTestBase.extend({
    _title:"Capabilities Test ",
    _subtitle:"See the console",

    ctor:function () {
        this._super();

        var c = sys.capabilities;
        for( var i in c )
            cc.log( i + " = " + c[i] );
    }

});

var SysTestScene = TestScene.extend({
    runThisTest:function () {
        sysTestSceneIdx = -1;
        var layer = nextSysTest();
        this.addChild(layer);

        director.replaceScene(this);
    }
});

//
// Flow control
//

var arrayOfSysTest = [

    LocalStorageTest,
    CapabilitiesTest
];

var nextSysTest = function () {
    sysTestSceneIdx++;
    sysTestSceneIdx = sysTestSceneIdx % arrayOfSysTest.length;

    return new arrayOfSysTest[sysTestSceneIdx]();
};
var previousSysTest = function () {
    sysTestSceneIdx--;
    if (sysTestSceneIdx < 0)
        sysTestSceneIdx += arrayOfSysTest.length;

    return new arrayOfSysTest[sysTestSceneIdx]();
};
var restartSysTest = function () {
    return new arrayOfSysTest[sysTestSceneIdx]();
};

