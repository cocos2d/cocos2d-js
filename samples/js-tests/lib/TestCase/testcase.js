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
                    html += '<div>' + p + '</div>';
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
                arrayOfActionMgrTest
                ,arrayOfActionsTest
                ,null//arrayOfBox2DTest
                ,null//arrayOfChipmunkTest
                ,arrayOfClickMoveTest
                ,arrayOfClippingNodeTest
                ,_DenshionTests
                ,null//cocostudio
                ,arrayOfCurrentLanguageTest
                ,arrayOfDrawTest
                ,arrayOfEaseActionsTest
                ,arrayOfEventDispatcherTest
                ,arrayOfEventsTest
                ,null//extensions
                ,arrayOfEffectsTest
                ,arrayOfEffectsAdvancedTest
                ,fontList
                ,null//UI
                ,null//Interval
                ,arrayOfLabelTest
                ,arrayOfLayerTest//layer
                ,null//loader
                ,arrayOfMenuTest//menu
                ,null//motionstreak
                ,arrayOfNodeTest
                ,null//opengl
                ,null//parallax
                ,null//particle
                ,null//path
                ,null//performance
                ,arrayOfProgressTest//progressActions
                ,null//RenderTexture
                ,null//rotateWorld
                ,arrayOfSceneTest//scene
                ,arrayOfSchedulerTest//scheduler
                ,null//spine
                ,arrayOfSpriteTest//sprite
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
                        if(o.prototype && o.prototype.__title){
                            title = o.prototype.__title();
                        }else if(o.prototype && o.prototype.title){
                            title = o.prototype.title();
                        }else if(o.prototype && typeof o.prototype._title == 'string'){
                            title = o.prototype._title;
                        }else{
                            if(o.title){
                                title = o.title;
                            }else{
                                title = o;
                            }
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

    window.sidebar = sidebar;


})(window);