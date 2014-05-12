(function(window){

    window.sidebar = {

        _sceneNum: 0,

        _testNum: 0,

        _test: [
             arrayOfActionMgrTest
            ,arrayOfActionsTest
            ,arrayOfBox2DTest
            ,arrayOfChipmunkTest
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
            ,null//menu
            ,null//motionstreak
            ,arrayOfNodeTest
            ,null//opengl
            ,null//parallax
            ,null//particle
            ,null//path
            ,null//performance
            ,null//progressActions
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
        ],

        _rest: {
            '0': nextActionMgrTest
        },

        init: function(){

            var $sidebar = document.getElementById('sidebar');

            if(!$sidebar) return;

            var $li = $sidebar.children;

            window._defaultSence = function(){
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

            };

            this.list = Array.prototype.map.call($li, function($li){
                return $li.children;
            });

            this._upbtn = document.getElementById('upBtn');
            this._downbtn = document.getElementById('downBtn');
            this._sidebar = document.getElementById('sidebar');
            this._sidebarOverflow = document.getElementById('sidebar-overflow');

            this.createBtn();
            this.clickAction();
            this.button();
        },

        createBtn: function(){

            this.list.forEach(function(ob, i){
                if(ob[1] && sidebar._test[i]){

                    var html = '';

                    sidebar._test[i].forEach(function(o, j){
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
                    ob[1].innerHTML = html;
                }
            });
        },

        clickAction: function(){


            //list btn
            this.list.forEach(function(ob){

                ob[0] && ob[0].addEventListener('click', function(){
                    sidebar.showUl(ob[1], this);
                });
            });

            //test
            this.list.forEach(function(ob){

                if(!ob[1]) return;

                var sceneNum = ob[1].getAttribute('data-scene');
                var $a = ob[1].getElementsByTagName('a');

                Array.prototype.forEach.call($a, function(a){

                    a.addEventListener('click', function(){

                        var self = this;

                        if(!cc._silderClick){
                            return;
                        }

                        cc._silderClick = false;

                        var testNum = this.getAttribute('data-num');

                        //The same scene
                        cc.LoaderScene.preload(testNames[sceneNum].resource || [], function () {
                            //Click on the sidebar to allow
                            cc._silderClick = true;

                            //Remove class
                            sidebar.removeHover();

                            //Add class
                            self.className = 'hover';


                            var scene = testNames[sceneNum].testScene();
                            if (scene) {
                                scene.runThisTest(testNum);
                            }

                        }, this);

                        //show code
                        code.showCode(sceneNum, testNum);

                    });
                });

            });
        },

        removeHover: function(){
            this.list && this.list.forEach(function(ob){

                if(!ob[1]) return;

                var $a = ob[1].getElementsByTagName('a');

                Array.prototype.forEach.call($a, function(a){
                    a.className = a.className.replace('hover', '');
                });
            });
        },

        changeTest: function(testNum, sceneNum){
            if(!this.list) return;

            sceneNum = sceneNum || (sceneNum == 0 ? 0 :sidebar._sceneNum);
            testNum = testNum || (testNum == 0 ? 0 : sidebar._testNum);

            this.removeHover();
            var ob = this.list[sceneNum];

            var $a = ob[1].getElementsByTagName('a');
            $a[testNum].className = 'hover';

            //show code
            code.showCode(sceneNum, testNum);
        },

        getDefaultStyle: function getDefaultStyle(obj,attribute){
            return obj.currentStyle ?
                obj.currentStyle[attribute] :
                document.defaultView.getComputedStyle(obj,false)[attribute];
        },

        showUl: function(ul, obj){
            //show ul list
            var _style = this.getDefaultStyle(ul, 'display');
            var span = obj.getElementsByTagName('span')[0];
            if(_style == 'none'){
                span.className += ' active';
                ul.style.display = 'block';
            }else{
                span.className = span.className.replace(' active', '');
                ul.style.display = 'none';
            }
        },

        button: function(){
            var self = this;

            this._upbtn.addEventListener('mousedown', function(){
                self._sidebarOverflow.scrollTop -= 400;
            }, false);


            this._downbtn.addEventListener('mousedown', function(){
                self._sidebarOverflow.scrollTop += 400;
            }, false);
        }
    };

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
            ,null//menu
            ,null//motionstreak
            ,'src/CocosNodeTest/CocosNodeTest.js'//node
            ,null//opengl
            ,null//parallax
            ,null//particle
            ,null//path
            ,null//performance
            ,null//progressActions
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

        cache:{},

        init: function(){

            this._dom = document.getElementById('code');

            if(!this._dom) return;
            code.showCode(0, 0);
        },

        showCode: function(s, t){
            //save
            sidebar._sceneNum = s;
            sidebar._testNum = t;

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

        getJson: function (url, cb) {

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


    sidebar.init();
    code.init();


})(window);