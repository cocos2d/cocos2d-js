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

// globals
var director = null;
var winSize = null;

var PLATFORM_JSB = 1 << 0;
var PLATFORM_HTML5 = 1 << 1;
var PLATFORM_HTML5_WEBGL = 1 << 2;
var PLATFORM_JSB_AND_WEBGL =  PLATFORM_JSB | PLATFORM_HTML5_WEBGL;
var PLATFORM_ALL = PLATFORM_JSB | PLATFORM_HTML5 | PLATFORM_HTML5_WEBGL;

// automation vars
var autoTestEnabled = autoTestEnabled || false;
var autoTestCurrentTestName = autoTestCurrentTestName || "N/A";

var TestScene = cc.Scene.extend({
    ctor:function (bPortrait) {
        this._super();
        this.init();
    },

    // callbacks
    onEnter:function () {
        this._super();
        var label = cc.LabelTTF.create("Main Menu", "Arial", 20);
        var menuItem = cc.MenuItemLabel.create(label, this.onMainMenuCallback, this);

        var menu = cc.Menu.create(menuItem);
        menu.setPosition(0,0);
        menuItem.setPosition(winSize.width - 50, 25);

        this.addChild(menu, 1);
    },
    onMainMenuCallback:function () {
        var scene = cc.Scene.create();
        var layer = new TestController();
        scene.addChild(layer);
        var transition = cc.TransitionProgressRadialCCW.create(0.5,scene);
        director.replaceScene(transition);
    },

    runThisTest:function () {
        // override me
    }

});

//Controller stuff
var LINE_SPACE = 40;
var curPos = cc.p(0,0);

var TestController = cc.LayerGradient.extend({
    _itemMenu:null,
    _beginPos:0,
    isMouseDown:false,

    ctor:function() {
        this._super();
        // this.init( cc.c4b(0,0,0,255), cc.c4b(98,99,117,255), cc.p(-1,-1));
        this.init( cc.c4b(0,0,0,255), cc.c4b(0x46,0x82,0xB4,255));

        // globals
        director = cc.Director.getInstance();
        winSize = director.getWinSize();

        // add close menu
        var closeItem = cc.MenuItemImage.create(s_pathClose, s_pathClose, this.onCloseCallback, this);
        closeItem.setPosition(winSize.width - 30, winSize.height - 30);

        var subItem1 = cc.MenuItemFont.create("Automated Test: Off");
        subItem1.setFontSize(18);
        var subItem2 = cc.MenuItemFont.create("Automated Test: On");
        subItem2.setFontSize(18);

        var toggleAutoTestItem = cc.MenuItemToggle.create(subItem1, subItem2);
        toggleAutoTestItem.setCallback(this.onToggleAutoTest, this);
        toggleAutoTestItem.setPosition(winSize.width-90, 20);
        if( autoTestEnabled )
            toggleAutoTestItem.setSelectedIndex(1);


        var menu = cc.Menu.create(closeItem, toggleAutoTestItem);//pmenu is just a holder for the close button
        menu.setPosition(0,0);

        // add menu items for tests
        this._itemMenu = cc.Menu.create();//item menu is where all the label goes, and the one gets scrolled

        for (var i = 0, len = testNames.length; i < len; i++) {
            var label = cc.LabelTTF.create(testNames[i].title, "Arial", 24);
            var menuItem = cc.MenuItemLabel.create(label, this.onMenuCallback, this);
            this._itemMenu.addChild(menuItem, i + 10000);
            menuItem.setPosition(winSize.width / 2, (winSize.height - (i + 1) * LINE_SPACE));

            // enable disable
            if ( sys.platform == 'browser') {
                if( 'opengl' in sys.capabilities ){
                    menuItem.setEnabled( (testNames[i].platforms & PLATFORM_HTML5) | (testNames[i].platforms & PLATFORM_HTML5_WEBGL) );
                }else{
                    menuItem.setEnabled( testNames[i].platforms & PLATFORM_HTML5 );
                }
            } else {
                menuItem.setEnabled( testNames[i].platforms & PLATFORM_JSB );
            }
        }

        this._itemMenu.setContentSize(winSize.width, (testNames.length + 1) * LINE_SPACE);
        this._itemMenu.setPosition(curPos);
        this.addChild(this._itemMenu);
        this.addChild(menu, 1);

        // 'browser' can use touches or mouse.
        // The benefit of using 'touches' in a browser, is that it works both with mouse events or touches events
        if( 'touches' in sys.capabilities )
            this.setTouchEnabled(true);
        else if( 'mouse' in sys.capabilities )
            this.setMouseEnabled(true);
    },
    onEnter:function(){
        this._super();
        var pos = this._itemMenu.getPosition();
        this._itemMenu.setPosition(pos.x, TestController.YOffset);
    },
    onMenuCallback:function (sender) {
        TestController.YOffset = this._itemMenu.getPosition().y;
        var idx = sender.getZOrder() - 10000;
        // get the userdata, it's the index of the menu item clicked
        // create the test scene and run it

        autoTestCurrentTestName = testNames[idx].title;

        var testCase = testNames[idx];
        var res = testCase.resource || [];
        cc.LoaderScene.preload(res, function () {
            var scene = testCase.testScene();
            if (scene) {
                scene.runThisTest();
            }
        }, this);
    },
    onCloseCallback:function () {
        history.go(-1);
    },
    onToggleAutoTest:function() {
        autoTestEnabled = !autoTestEnabled;
    },

    onTouchesMoved:function (touches, event) {
        var delta = touches[0].getDelta();
        this.moveMenu(delta);
        return true;
    },

    onMouseDragged : function( event ) {
        var delta = event.getDelta();
        this.moveMenu(delta);
        return true;
    },
    onScrollWheel:function(event){
        var delta = event.getWheelDelta();
        this.moveMenu({y:-delta});
        return true;
    },
    moveMenu:function(delta) {
        var current = this._itemMenu.getPosition();

        var newY = current.y + delta.y;
        if (newY < 0 )
            newY = 0;

        if( newY > ((testNames.length + 1) * LINE_SPACE - winSize.height))
            newY = ((testNames.length + 1) * LINE_SPACE - winSize.height);

        this._itemMenu.setPosition(current.x, newY);
    }
});
TestController.YOffset = 0;
var testNames = [
    {
        title:"ActionManager Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new ActionManagerTestScene();
        }
    },
    {
        title:"Actions Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new ActionsTestScene();
        }
    },
    {
        title:"Box2D Test",
        resource:g_box2d,
        platforms: PLATFORM_HTML5,
        testScene:function () {
            return new Box2DTestScene();
        }
    },
    {
        title:"Chipmunk Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new ChipmunkTestScene();
        }
    },
    //"BugsTest",
    {
        title:"Click and Move Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new ClickAndMoveTestScene();
        }
    },
    {
        title:"ClippingNode Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new ClippingNodeTestScene();
        }
    },
    {
        title:"CocosDenshion Test",
        resource:g_cocosdeshion,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new CocosDenshionTestScene();
        }
    },
    {
        title:"CocoStudio Test",
        resource:g_cocoStudio,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new CocoStudioTestScene();
        }
    },
    {
        title:"CurrentLanguage Test",
        platforms: PLATFORM_HTML5,
        testScene:function () {
            return new CurrentLanguageTestScene();
        }
    },
    //"CurlTest",
    {
        title:"DrawPrimitives Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new DrawPrimitivesTestScene();
        }
    },
    {
        title:"EaseActions Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new EaseActionsTestScene();
        }
    },
    {
        title:"Event Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new EventTestScene();
        }
    },
    {
        title:"Extensions Test",
        resource:g_extensions,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new ExtensionsTestScene();
        }
    },
    {
        title:"Effects Test",
        platforms: PLATFORM_JSB_AND_WEBGL,
        testScene:function () {
            return new EffectsTestScene();
        }
    },
    {
        title:"Effects Advanced Test",
        platforms: PLATFORM_JSB_AND_WEBGL,
        testScene:function () {
            return new EffectAdvanceScene();
        }
    },
    //"ExtensionsTest",
    {
        title:"File Test",
        resource:g_fileUtils,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new FileTestScene();
        }
    },
    {
        title:"Font Test",
        resource:g_fonts,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new FontTestScene();
        }
    },
    //"HiResTest",
    {
        title:"Interval Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new IntervalTestScene();
        }
    },
    {
        title:"Label Test",
        resource:g_label,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new LabelTestScene();
        }
    },
    {
        title:"Layer Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new LayerTestScene();
        }
    },
    {
        title:"Menu Test",
        resource:g_menu,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new MenuTestScene();
        }
    },
    {
        title:"MotionStreak Test",
        platforms: PLATFORM_JSB_AND_WEBGL,
        testScene:function () {
            return new MotionStreakTestScene();
        }
    },
    {
        title:"Node Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new NodeTestScene();
        }
    },
    {
        title:"OpenGL Test",
        resource:g_opengl_resources,
        platforms: PLATFORM_JSB_AND_WEBGL,
        testScene:function () {
            return new OpenGLTestScene();
        }
    },
    {
        title:"Parallax Test",
        resource:g_parallax,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new ParallaxTestScene();
        }
    },
    {
        title:"Particle Test",
        platforms: PLATFORM_ALL,
        resource:g_particle,
        testScene:function () {
            return new ParticleTestScene();
        }
    },
    {
        title:"Performance Test",
        platforms: PLATFORM_ALL,
        resource:g_performace,
        testScene:function () {
            return new PerformanceTestScene();
        }
    },
    {
        title:"ProgressActions Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new ProgressActionsTestScene();
        }
    },
    {
        title:"RenderTexture Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new RenderTextureTestScene();
        }
    },
    {
        title:"RotateWorld Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new RotateWorldTestScene();
        }
    },
    {
        title:"Scene Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new SceneTestScene();
        }
    },
    {
        title:"Scheduler Test",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new SchedulerTestScene();
        }
    },
    {
        title:"Spine Test",
        platforms: PLATFORM_JSB,
        testScene:function () {
            return new SpineTestScene();
        }
    },
    {
        title:"Sprite Test",
        resource:g_sprites,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new SpriteTestScene();
        }
    },
    {
        title:"Scale9Sprite Test",
        resource:g_s9s_blocks,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new S9SpriteTestScene();
        }
    },
    {
        title:"TextInput Test",
        platforms: PLATFORM_HTML5,
        testScene:function () {
            return new TextInputTestScene();
        }
    },
    //"Texture2DTest",
    {
        title:"TextureCache Test",
        platforms: PLATFORM_HTML5,
        testScene:function () {
            return new TextureCacheTestScene();
        }
    },
    {
        title:"TileMap Test",
        resource:g_tilemaps,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new TileMapTestScene();
        }
    },
    {
        title:"Touches Test",
        resource:g_touches,
        platforms: PLATFORM_HTML5,
        testScene:function () {
            return new TouchesTestScene();
        }
    },
    {
        title:"Transitions Test",
        resource:g_transitions,
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new TransitionsTestScene();
        }
    },
    {
        title:"Unit Tests",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new UnitTestScene();
        }
    },
    {
        title:"Sys Tests",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new SysTestScene();
        }
    },
    {
        title:"cocos2d JS Presentation",
        platforms: PLATFORM_JSB,
        testScene:function () {
            return new PresentationScene();
        }
    },
    {
        title:"XMLHttpRequest",
        platforms: PLATFORM_ALL,
        testScene:function () {
            return new XHRTestScene();
        }
    }

    //"UserDefaultTest",
    //"ZwoptexTest",
];