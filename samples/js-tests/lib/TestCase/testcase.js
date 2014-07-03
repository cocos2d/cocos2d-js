(function(){


    //show code function
    var code = {

        list: [
            'src/ActionManagerTest/ActionManagerTest.js'
            ,'src/ActionsTest/ActionsTest.js'
            ,'src/Box2dTest/Box2dTest.js'
            ,'src/ChipmunkTest/ChipmunkTest.js'
            ,'src/ClickAndMoveTest/ClickAndMoveTest.js'
            ,'src/ClippingNodeTest/ClippingNodeTest.js'
            ,'src/CocosDenshionTest/CocosDenshionTest.js'
            ,null
            ,'src/CurrentLanguageTest/CurrentLanguageTest.js'
            ,'src/DrawPrimitivesTest/DrawPrimitivesTest.js'
            ,'src/EaseActionsTest/EaseActionsTest.js'
            ,'src/NewEventManagerTest/NewEventManagerTest.js'
            ,'src/EventTest/EventTest.js'
            ,null
            ,'src/EffectsTest/EffectsTest.js'
            ,'src/EffectsAdvancedTest/EffectsAdvancedTest.js'
            ,'src/FontTest/FontTest.js'
            ,null//UI
            ,null//Interval
            ,'src/LabelTest/LabelTest.js'//Label
            ,'src/LayerTest/LayerTest.js'//layer
            ,null//loader
            ,'src/MenuTest/MenuTest.js'//menu
            ,null//motionstreak
            ,'src/CocosNodeTest/CocosNodeTest.js'//node
            ,null//opengl
            ,null//parallax
            ,null//particle
            ,null//path
            ,null//performance
            ,'src/ProgressActionsTest/ProgressActionsTest.js'//progressActions
            ,null//RenderTexture
            ,null//rotateWorld
            ,'src/SceneTest/SceneTest.js'//scene
            ,'src/SchedulerTest/SchedulerTest.js'//scheduler
            ,null//spine
            ,'src/SpriteTest/SpriteTest.js'//sprite
            ,null//scale9sprite
            ,null//textinput
            ,null//texturecache
            ,null//tilemap
            ,null//touches
            ,null//transitions
            ,null//unit
            ,null//sys
            ,null//cocos2d js presentation
            ,null//xmlhttprequest
        ],

        cache: {},

        init: function(){
            this._dom = document.getElementById('code');

            if(!this._dom) return;
            code.showCode(0, 0);
        },

        showCode: function(s, t){

            code.getJson(code.list[s], function(err, text){
                if(err){
                    return;
                }
                var result = text.match(new RegExp('//----start'+t+'----(.|\r\n|\r|\n)*?//----end'+t+'----', "g"));
                if(!result){
                    document.getElementById('code').innerHTML = 'The corresponding code not found.';
                    return;
                }
                var list = {};
                result.forEach(function(_data){
                    var on;
                    _data = _data.replace(new RegExp('//----start'+t+'----'), '').replace(new RegExp('//----end'+t+'----'), '');
                    _data = _data.replace(/\S*/, function(name){
                        on = name;
                        return '';
                    });
                    list[on] = _data;

                });
                var html = '';
                for(var p in list){
                    html += '<div class="function">' + '<span style="font-weight: normal;">function</span> ' + p + '</div>';
                    html += list[p].replace(/^\s*?(\r\n|\r|\n)/, '<pre class="brush: javascript;">').replace(/(\r\n|\r|\n)\s*?(\r\n|\r|\n)?$/, '</pre>');
                }
                document.getElementById('code').innerHTML = html;
                SyntaxHighlighter.highlight();
            });
        },

        getJson: function(url, cb){
            //check cache
            if(code.cache[url]){
                typeof cb === 'function' && cb(false, code.cache[url]);
                return;
            }
            var request = new XMLHttpRequest();
            request.open('GET', url);
            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {

                    typeof cb === 'function' && cb(false, request.responseText);
                    //add cache
                    code.cache[url] = request.responseText;

                }else{
                    document.getElementById('code').innerHTML = 'The corresponding code not found.';
                }
            };
            request.send(null);
        }
    };

    //sidebar function
    var sidebar = {

        _sceneNum: 0,
        _testNum: 0,

        /**
         * init sidebar
         */
        init: function(){

            this._testNameList = [
                [
                    "should not crash",
                    "Sequence logic",
                    "Pause",
                    "Remove",
                    "Resume"
                ]//arrayOfActionMgrTest - actionManager
                ,[
                    "Sprite properties",
                    "cc.MoveTo / cc.MoveBy",
                    "cc.ScaleTo / cc.ScaleBy",
                    "cc.RotateTo / cc.RotateBy",
                    "cc.RotateTo / cc.RotateBy",
                    "cc.SkewTo / cc.SkewBy",
                    "Skew + Rotate + Scale",
                    "cc.JumpTo / cc.JumpBy",
                    "cc.BezierTo / cc.BezierBy",
                    "cc.BezierTo copy",
                    null,
                    "CardinalSplineAt / CardinalSplineBy",
                    "CatmullRomTo / CatmullRomTo",
                    "cc.Blink",
                    "cc.FadeIn / cc.FadeOut",
                    "cc.TintTo / cc.TintBy",
                    "cc.Sequence: Move + Rotate",
                    "Sequence of InstantActions",
                    "cc.Spawn: Jump + Rotate",
                    "Reverse Jump action",
                    "DelayTime: m + delay + m",
                    "Repeat / RepeatForever actions",
                    "cc.CallFunc + cc.RepeatForever",
                    "Repeat / RepeatForever + RotateTo",
                    "RepeatForever / Repeat + Rotate",
                    "Callbacks: CallFunc and friends",
                    "cc.CallFunc + auto remove",
                    "cc.CallFunc + parameters",
                    "Reverse a sequence",
                    null,
                    "Follow action",
                    "ActionTargeted",
                    "Testing copy on TargetedAction",
                    "Stackable actions: MoveBy + MoveBy",
                    "Stackable actions: MoveBy + JumpBy",
                    "Stackable actions: MoveBy + BezierBy",
                    "Stackable actions: MoveBy + CatmullRomBy",
                    "Stackable actions: MoveBy + CardinalSplineBy",
                    "PauseResumeActions",
                    null,
                    null,
                    null,
                    null,
                    null,
                    "Animation 1",
                    null,
                    null,
                    "OrbitCamera action"
                ]//arrayOfActionsTest - action
                ,null//arrayOfBox2DTest
                ,null//arrayOfChipmunkTest
                ,arrayOfClickMoveTest
                ,arrayOfClippingNodeTest
                ,_DenshionTests
                ,null//cocostudio
                ,arrayOfCurrentLanguageTest
                ,[
                    "cc.DrawNode 1",
                    "cc.DrawNode 2"
                ]
                ,[
                    "EaseIn - EaseOut",
                    "EaseInOut and rates",
                    "ExpIn - ExpOut actions",
                    "EaseExponentialInOut action",
                    "EaseSineIn - EaseSineOut",
                    "EaseSineInOut action",
                    "Elastic In - Out actions",
                    "EaseElasticInOut action",
                    "Bounce In - Out actions",
                    "EaseBounceInOut action",
                    "Back In - Out actions",
                    "EaseBackInOut action",
                    "Speed action",
                    "Scheduler scaleTime Test",
                    "SpriteEaseBezier action",
                    "SpriteEaseQuadratic action",
                    "SpriteEaseQuadraticInOut action",
                    "SpriteEaseQuartic action",
                    "SpriteEaseQuarticInOut action",
                    "SpriteEaseQuintic action",
                    "SpriteEaseQuinticInOut action",
                    "SpriteEaseCircle action",
                    "SpriteEaseCircleInOut action",
                    "SpriteEaseCubic action",
                    "SpriteEaseCubicInOut action"
                ]//arrayOfEaseActionsTest
                ,[
                    "Touchable Sprite",
                    "Fixed priority",
                    "Add and remove listener",
                    "Send custom event",
                    "Label Receives Keyboard Event",
                    "Sprite Receives Acceleration Event",
                    "RemoveAndRetainNodeTest",
                    "RemoveListenerAfterAddingTest",
                    "Testing Director Events",
                    "Stop Propagation",
                    null,
                    "PauseResumeTarget"
                ]//arrayOfEventDispatcherTest
                ,[
                    'Touches One by One. Touch the left / right and see console',
                    'Touches All At Once. Touch and see console',
                    'Accelerometer test. Move device and see console',
                    'Mouse test. Move mouse and see console',
                    'Keyboard test. Press keyboard and see console'
                ]//arrayOfEventsTest
                ,null//extensions
                ,arrayOfEffectsTest
                ,arrayOfEffectsAdvancedTest
                ,fontList
                ,null//UI
                ,null//Interval
                ,[
                    "LabelAtlas Opacity",
                    "LabelAtlas Opacity Color",
                    "LabelAtlas with Retina Display",
                    "cc.LabelBMFont",
                    "cc.LabelBMFont BMFontSubSpriteTest",
                    "cc.LabelBMFont BMFontPaddingTest",
                    "cc.LabelBMFont",
                    "cc.LabelBMFont BMFontTintTest",
                    "cc.LabelBMFont",
                    "cc.LabelBMFont BMFontMultiLineTest",
                    "cc.LabelBMFont BMFontMultiLine2Test",
                    "Typesetting",
                    "cc.LabelBMFont with one texture",
                    "cc.LabelBMFont with Unicode support",
                    "cc.LabelBMFont init",
                    "cc.LabelBMFont color parent / child",
                    "Testing Retina Display BMFont",
                    "Testing Glyph Designer",
                    "Testing cc.LabelBMFont with Chinese character",
                    "Testing cc.LabelTTF",
                    "Testing cc.LabelTTF Word Wrap",
                    "Testing cc.LabelTTF with Chinese character",
                    "Testing A8 Format",
                    "cc.LabelTTF init",
                    "cc.LabelTTF alignment",
                    "Testing empty labels",
                    "Testing cc.LabelTTF + shadow and stroke"
                ]//arrayOfLabelTest
                ,[
                    "ColorLayer resize (tap & move)",
                    "ColorLayer: fade and tint",
                    "ColorLayer: blend",
                    "ignore Anchorpoint Test #1",
                    "ignore Anchorpoint Test #2",
                    "ignore Anchorpoint Test #3",
                    "ignore Anchorpoint Test #4",
                    "LayerGradient"
                ]//arrayOfLayerTest//layer
                ,null//loader
                ,arrayOfMenuTest//menu
                ,null//motionstreak
                ,[
                    "anchorPoint and children",
                    "tags",
                    "remove and cleanup",
                    "remove/cleanup with children",
                    "stress test #1: no crashes",
                    "stress test #2: no leaks",
                    "nodeToParent transform",
                    "cocosnode scheduler test #1",
                    "Bounding Box Test",
                    "Convert To Node Space",
                    "Camera Center test",
                    "Camera Orbit test",
                    "Camera Zoom test",
                    "Node Opaque Test",
                    "Node Non Opaque Test"
                ]//arrayOfNodeTest
                ,null//opengl
                ,null//parallax
                ,null//particle
                ,null//path
                ,null//performance
                ,[
                    "ProgressTo Radial",
                    "ProgressTo Horizontal",
                    "ProgressTo Vertical",
                    "Radial w/ Different Midpoints",
                    "ProgressTo Bar Mid",
                    "ProgressTo Bar Mid",
                    "Progress With Sprite Frame",
                    "Progress With Sprite Frame"
                ]//arrayOfProgressTest//progressActions
                ,null//RenderTexture
                ,null//rotateWorld
                ,arrayOfSceneTest//scene
                ,[
                    "Self-remove an scheduler",
                    "Pause / Resume",
                    "Unschedule All callbacks",
                    "Unschedule All callbacks #2",
                    "Schedule from Schedule",
                    "Schedule update with priority",
                    "Schedule Update + custom callback",
                    "Schedule Update in 2 sec",
                    "Reschedule Callback",
                    "Schedule / Unschedule using Scheduler"
                ]//arrayOfSchedulerTest//scheduler
                ,null//spine
                ,[
                    "Non Batched Sprite ",
                    "Batched Sprite ",
                    null,//"Sprite vs. SpriteBatchNode animation",
                    "SpriteFrame Alias Name",
                    "Sprite: anchor point",
                    "SpriteBatchNode: anchor point",
                    "Sprite offset + anchor + rot",
                    "SpriteBatchNode offset + anchor + rot",
                    "Sprite offset + anchor + scale",
                    "SpriteBatchNode offset + anchor + scale",
                    "Sprite: Animation + flip",
                    "Sprite: Color & Opacity",
                    "SpriteBatchNode: Color & Opacity",
                    "Sprite: Z order",
                    "SpriteBatch: Z order",
                    "SpriteBatchNode: reorder #1",
                    null,//"SpriteBatchNode: reorder issue #744",
                    null,//"SpriteBatchNode: reorder issue #766",
                    null,//"SpriteBatchNode: reorder issue #767",
                    "Sprite: openGL Z vertex",
                    "SpriteBatchNode: openGL Z vertex",
                    "SpriteBatchNode transformation",
                    "Sprite Flip X & Y",
                    "SpriteBatchNode Flip X & Y",
                    "Sprite Aliased",
                    "SpriteBatchNode Aliased",
                    "Sprite New texture (tap)",
                    "SpriteBatchNode new texture (tap)",
                    "Hybrid.Sprite* sprite Test",
                    "SpriteBatchNode Grand Children",
                    "SpriteBatchNode Children Z",
                    "Sprite & SpriteBatchNode Visibility",
                    "Sprite & SpriteBatchNode Visibility",
                    "Sprite: children + anchor",
                    "SpriteBatchNode: children + anchor",
                    "Sprite/BatchNode + child + scale + rot",
                    "Sprite multiple levels of children",
                    "SpriteBatchNode multiple levels of children",
                    "Sprite without texture",
                    "Sprite subclass",
                    "AnimationCache",
                    "Sprite offset + anchor + skew",
                    "SpriteBatchNode offset + anchor + skew",
                    "Sprite anchor + skew + scale",
                    "SpriteBatchNode anchor + skew + scale",
                    "Sprite offset + anchor + flip",
                    null,//"SpriteBatchNode offset + anchor + flip",
                    null,//"SpriteBatchNodeReorder same index",
                    "SpriteBatchNode reorder 1 child",
                    "node sort same index",
                    "Sprite + children + skew",
                    "SpriteBatchNode + children + skew",
                    "Sprite Double resolution",
                    null,//"SpriteBatch - Bug 1217",
                    "AnimationCache - Load file",
                    null,//"Texture Color Cache Issue Test",
                    null,//"Texture Color Cache Issue Test #2",
                    "Sub Sprite (rotated source)"
                ]//arrayOfSpriteTest//sprite
                ,null//scale9sprite
                ,null//textinput
                ,null//texturecache
                ,null//tilemap
                ,null//touches
                ,null//transitions
                ,null//unit
                ,null//sys
                ,null//cocos2d js presentation
                ,null//xmlhttprequest
            ];

            this._sidebar = document.getElementById('sidebar');

            if(!this._sidebar){
                return;
            }

            this.list = Array.prototype.map.call(this._sidebar.children, function($li){ return $li.children; });
            this._upbtn = document.getElementById('upBtn');
            this._downbtn = document.getElementById('downBtn');
            this._sidebarOverflow = document.getElementById('sidebar-overflow');

            this.createBtnDOM();
            this.bindBtnEvent();
            this.upAndDownEvent();
            this._hiddenOtherUl(0);
        },

        /**
         * init default scene
         */
        defaultScene: function(){
            window.director = cc.director;
            window.winSize = director.getWinSize();
            cc.LoaderScene.preload(testNames[0].resource || [], function () {
                var scene = testNames[0].testScene();
                if (scene) {
                    scene.runThisTest();
                }
            }, this);
            //Click on the sidebar to allow
            cc._silderClick = true;
        },

        createBtnDOM: function(){

            this.list && this.list.forEach(function(btnArray, i){
                //btnArray[0] -> <a>
                //btnArray[1] -> <ul>
                if(btnArray[0] && btnArray[1] && sidebar._testNameList[i]){
                    var html = '';
                    sidebar._testNameList[i].forEach(function(o, j){
                        var title = '';
                        if(typeof o === 'string'){
                            title = o;
                        }
                        html += '<li><a data-num="'+ j +'">'+ title +'</a></li>'
                    });
                    btnArray[1].innerHTML = html;
                }

            });
        },

        getDefaultStyle: function getDefaultStyle(obj,attribute){
            return obj.currentStyle ?
                obj.currentStyle[attribute] :
                document.defaultView.getComputedStyle(obj,false)[attribute];
        },

        bindBtnEvent: function(){
            this.list.forEach(function(btnArray, num){
                btnArray[0] && btnArray[0].addEventListener('click', function(){

                    if(sidebar._sceneNum == num){
                        sidebar._hiddenOtherHover(sidebar._testNum, num);
                    }else{
                        sidebar._hiddenOtherHover(-1, num);
                    }
                    if(sidebar.getDefaultStyle(btnArray[1], "display") == "none"){
                        sidebar._hiddenOtherUl(num);
                    }else{
                        sidebar._hiddenOtherUl();
                    }
                });

                if(btnArray[1]){
                    var aArray = btnArray[1].getElementsByTagName("a");
                    Array.prototype.forEach.call(aArray, function(a, i){
                        a.addEventListener('click', function(){
                            sidebar._testNum = i;
                            sidebar.changeTest(i, num);
                        });
                    });
                }
            });
        },

        _hiddenOtherUl: function(num){
            this.list.forEach(function(btnArray, i){
                if(btnArray[1]){
                    if(i == num){
                        btnArray[1].style.display = "block";
                        var span = btnArray[0].getElementsByTagName('span');
                        if(span)
                            span[0].className = "hitarea active";
                    }else{
                        btnArray[1].style.display = "none";
                        var span = btnArray[0].getElementsByTagName('span');
                        if(span)
                            span[0].className = "hitarea";
                    }
                }
            });
        },

        changeTest: function(testNum, sceneNum){
            if(sidebar._sceneNum == sceneNum){

                if(sidebar._testNum < testNum){
                    while(this._testNameList[sceneNum][testNum] == null){
                        testNum++;
                        if(testNum >= this._testNameList[sceneNum].length){
                            testNum = 0;
                        }
                    }
                }else{
                    while(this._testNameList[sceneNum][testNum] == null){
                        testNum--;
                        if(testNum < 0){
                            testNum = this._testNameList[sceneNum].length - 1;
                        }
                    }
                }
            }

            sidebar._sceneNum = sceneNum;
            sidebar._testNum = testNum;

            this._hiddenOtherHover(testNum, sceneNum);

            //The same scene
            cc.LoaderScene.preload(testNames[sceneNum].resource || [], function () {
                //Click on the sidebar to allow
                cc._silderClick = true;

                var scene = testNames[sceneNum].testScene();
                if (scene) {
                    scene.runThisTest(testNum);
                }

            }, this);

            //show code
            code && code.showCode && code.showCode(sceneNum, testNum);
            return testNum;
        },

        _hiddenOtherHover: function(testNum, sceneNum){
            var sceneList = this.list[sceneNum];
            if(!sceneList[1]) return;

            var aArray = sceneList[1].getElementsByTagName("a");
            Array.prototype.forEach.call(aArray, function(a, i){
                if(i == testNum){
                    a.className = 'hover';
                }else{
                    a.className = '';
                }
            });
        },

        upAndDownEvent: function(){
            var upBtn = document.getElementById("upBtn");
            var downBtn = document.getElementById("downBtn");

            var self = this;
            var count = 0;
            var timer = null;

            var delayUp = function(){
                var repeat = arguments.callee;
                timer = setTimeout(function(){
                    self._sidebarOverflow.scrollTop -= 5;
                    count++ < 80 && repeat();
                }, 5);
            };

            var delayDown = function(){
                var repeat = arguments.callee;
                timer = setTimeout(function(){
                    self._sidebarOverflow.scrollTop += 5;
                    count++ < 80 && repeat();
                }, 5);
            };

            upBtn.addEventListener('click', function(){
                clearTimeout(timer);
                count = 0;
                delayUp();
            }, false);

            downBtn.addEventListener('click', function(){
                clearTimeout(timer);
                count = 0;
                delayDown();
            }, false);
        },
        start: function(){
            this.defaultScene();
            sidebar.init();
            code.init();
        }
    };

    window.sideIndexBar = sidebar;


})(window);