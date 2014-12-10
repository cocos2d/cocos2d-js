(function(){
    //show code function
    var code = {

        cache: {},

        init: function(){
            this._dom = document.getElementById('code');

            if(!this._dom) return;

            code.showCode(0, 0);
        },

        showCode: function(actualSceneNum, actualTestNum){

            code.getJson(sidebar.actualDisplayList[actualSceneNum].linksrc, function(err, text){
                if(err){
                    return;
                }

                var objectNamStr = sidebar._childNameList[sidebar.diplayRecordArr[actualSceneNum]][actualTestNum];

                var codeResult = text.match(new RegExp('var '+objectNamStr+'( |=|[a-z]|[A-Z]|[0-9]|\\.)*\\.extend(.|\r\n|\r|\n)*?^\\}\\);', "m"));
                if(!codeResult){
                    document.getElementById('code').innerHTML = 'The corresponding code not found.';
                    return;
                }

                var codeText = codeResult[0];

                var result = codeText.match(new RegExp('//----start(.|\r\n|\r|\n)*?//----end[0-9]*----', "g"));
                if(!result && !codeResult){
                    document.getElementById('code').innerHTML = 'The corresponding code not found.';
                    return;
                }

                var list = [];

                if (codeResult && !result)
                {
                    var html = '<pre class="brush: javascript;">' + codeText + '</pre>';
                    //var html = codeText.replace(/^\actualSceneNum*?(\r\n|\r|\n)/, '<pre class="brush: javascript;">').replace(/(\r\n|\r|\n)\actualSceneNum*?(\r\n|\r|\n)?$/, '</pre>');
                    document.getElementById('code').innerHTML = html;
                    SyntaxHighlighter.highlight();
                    return;
                }


                result.forEach(function(_data){
                    var on;
                    _data = _data.replace(new RegExp('//----start[0-9]*----'), '').replace(new RegExp('----end[0-9]*----'), '');
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
        _childNameList:[],
        _windowBeseLayer:[],

        actualDisplayList:[],
        diplayRecordArr:[], // record the actual diaplay difference with testNames

        initActualList:function(childNameList){
            var actualIndex = 0;
            for (var i = 0, len = testNames.length; i < len; i++) {
                var title = testNames[i].linksrc;
                var isAdd = false;

                if ( !cc.sys.isNative) {
                    if( 'opengl' in cc.sys.capabilities ){
                        isAdd = (testNames[i].platforms & PLATFORM_HTML5) | (testNames[i].platforms & PLATFORM_HTML5_WEBGL);
                    }else{
                        isAdd = testNames[i].platforms & PLATFORM_HTML5;
                    }
                } else {
                    if(cc.sys.os == cc.sys.OS_ANDROID)
                    {
                        isAdd = testNames[i].platforms & ( PLATFORM_JSB | PLATFROM_ANDROID ) ;
                    }else if(cc.sys.os == cc.sys.OS_IOS|| cc.sys.os == cc.sys.OS_OSX){
                        isAdd = testNames[i].platforms & ( PLATFORM_JSB | PLATFROM_IOS) ;
                    }else{
                        isAdd = testNames[i].platforms & PLATFORM_JSB ;
                    }
                }

                if (childNameList[i] == null)
                {
                    isAdd = false;
                }

                if (isAdd)
                {
                    sidebar.diplayRecordArr[actualIndex] = i;
                    sidebar.actualDisplayList[actualIndex] = testNames[i];
                    actualIndex++;
                }
            }
        },

        getTitle:function(childData) {
            var titleArr = [];
            if (typeof childData == "string" || childData == null)
            {
                return childData
            }

            if (childData.prototype instanceof cc.Layer)
            {
                for (var layerIndex in this._windowBeseLayer)
                {
                    var layerStr = this._windowBeseLayer[layerIndex];
                    if (window[layerStr] == childData)
                    {
                        return layerStr;
                    }
                }
                return null;
            }

            if (typeof childData == "object")
            {
                return childData;
            }
            return titleArr;
        },

        // get the baseTestLayer object string from window
        initWindowPropery:function()
        {
            for (var property in window)
            {
                if (window[property] && window[property].prototype instanceof cc.Layer)
                {
                    this._windowBeseLayer.push(property);
                }
            }
        },

        // change the childArr[object, object] to childarr[string, string]
        // if some menu have a submodule, childarr will be [{title:xxx, childarr:[]}]
        translationChildArr:function(childArr) {
            var newChildArr = [];
            if (this._windowBeseLayer.length <= 0)
            {
                sidebar.initWindowPropery();
            }

            for (var childIndex in childArr)
            {
                newChildArr.push(sidebar.getTitle(childArr[childIndex]));
            }

            return newChildArr;
        },

        initChildTitleList: function(childtitleList) {
            for (var i = 0, len = childtitleList.length; i < len; i++) {
                var childArr = sidebar.translationChildArr(childtitleList[i]);

                this._childNameList.push(childArr);
            }
        },

        /**
         * init sidebar
         */
        init: function(){



            var childNameList = [
                arrayOfActionMgrTest//arrayOfActionMgrTest - actionManager
                ,arrayOfActionsTest//arrayOfActionsTest - action
                ,arrayOfBakeLayerTest//arrayOfBakeLayerTest
                ,arrayOfBox2DTest//arrayOfBox2DTest
                ,arrayOfChipmunkTest//arrayOfChipmunkTest
                ,arrayOfClickMoveTest
                ,arrayOfClippingNodeTest
                ,[CocosDenshionTest]//DenshionTests
                ,null//cocoStudioTestItemNamescocostudio
                ,arrayOfCurrentLanguageTest
                ,arrayOfDrawTest
                ,arrayOfEaseActionsTest//arrayOfEaseActionsTest
                ,arrayOfEventDispatcherTest//arrayOfEventDispatcherTest
                ,arrayOfEventsTest//arrayOfEventsTest
                ,null//extensions
                ,arrayOfEffectsTest
                ,arrayOfEffectsAdvancedTest
                ,null//facebook
                ,null//FontTest
                ,null//UI
                ,[IntervalLayer]//Interval
                ,arrayOfLabelTest//arrayOfLabelTest
                ,arrayOfLayerTest//arrayOfLayerTest//layer
                ,[LoaderTestLayer]//loader
                ,null//menu
                ,arrayOfMotionStreakTest//motionstreak
                ,arrayOfNodeTest//arrayOfNodeTest
                ,arrayOfOpenGLTest//opengl
                ,arrayOfParallaxTest//parallax
                ,null//particle
                ,[PathTestLayer]//path
                ,null//performance
                ,arrayOfProgressTest//arrayOfProgressTest//progressActions
                ,[ReflectionTestLayer]//Reflection Test
                ,arrayOfRenderTextureTest//RenderTexture
                ,[RotateWorldMainLayer]//rotateWorld
                ,arrayOfSceneTest//scene
                ,arrayOfSchedulerTest//arrayOfSchedulerTest//scheduler
                ,[SpineTest]//spine
                ,arrayOfSpriteTest//arrayOfSpriteTest//sprite
                ,arrayOfS9SpriteTest//scale9sprite
                ,arrayOfTextInputTest//textinput
                ,arrayOfTexCacheTest//texturecache
                ,arrayOfTileMapTest//tilemap
                ,[PongLayer]//touches
                ,null//transitions
                ,arrayOfUnitTest//unit
                ,arrayOfSysTest//sys
                ,arrayOfPresentation//cocos2d js presentation
                ,[XHRTestLayer]//xmlhttprequest
            ];

            sidebar.initActualList(childNameList);

            sidebar.initChildTitleList(childNameList);

            sidebar.createSidebar();

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

        createSidebar:function (){
            this._sidebar = document.getElementById('sidebar');
            if(!this._sidebar){
                return;
            }
            for (var i = 0, len = sidebar.actualDisplayList.length; i < len; i++) {
                var li = document.createElement("li");
                li.innerHTML = '<a><span class="hitarea"></span>' + sidebar.actualDisplayList[i].title + '</a><ul class="list"  data-scene="0"></ul>';
                this._sidebar.appendChild(li);
            }

        },

        /**
         * init default scene
         */
        defaultScene: function(){
            window.director = cc.director;
            window.winSize = director.getWinSize();

            cc.LoaderScene.preload(testNames[sidebar.diplayRecordArr[0]].resource || [], function () {
                var scene = testNames[sidebar.diplayRecordArr[0]].testScene();
                if (scene) {
                    scene.runThisTest();
                }
            }, this);
            //Click on the sidebar to allow
            cc._silderClick = true;
        },

        createBtnDOM: function(){

            this.list && this.list.forEach(function(btnArray, actualIndex){
                //btnArray[0] -> <a>
                //btnArray[1] -> <ul>
                if(btnArray[0] && btnArray[1] && sidebar._childNameList[sidebar.diplayRecordArr[actualIndex]]){
                    var html = '';
                    sidebar._childNameList[sidebar.diplayRecordArr[actualIndex]].forEach(function(o, j){
                        var title = '';
                        if(typeof o === 'string'){
                            title = o;
                        }
                        if(typeof o === 'object'){
                            title = o.title || o.itemTitle;
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
                            sidebar.changeTestScene(i, num);
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

        changeTest: function(testChangeNum) {
            if (sidebar._testNum == testChangeNum)
            {
                return testChangeNum;
            }
            sidebar.changeHover(testChangeNum, sidebar._sceneNum);
            return testChangeNum;
        },

        changeHover:function (actualTestNum, actualSceneNum) {
            if(sidebar._sceneNum == actualSceneNum){

                if(sidebar._testNum < actualTestNum){
                    while(this._childNameList[sidebar.diplayRecordArr[actualSceneNum]][actualTestNum] == null){
                        actualTestNum++;
                        if(actualTestNum >= this._childNameList[actualSceneNum].length){
                            actualTestNum = 0;
                        }
                    }
                }else{
                    while(this._childNameList[sidebar.diplayRecordArr[actualSceneNum]][actualTestNum] == null){
                        actualTestNum--;
                        if(actualTestNum < 0){
                            actualTestNum = this._childNameList[sidebar.diplayRecordArr[actualSceneNum]].length - 1;
                        }
                    }
                }
            }

            sidebar._sceneNum = actualSceneNum;
            sidebar._testNum = actualTestNum;

            this._hiddenOtherHover(actualTestNum, actualSceneNum);
        },

        changeTestScene: function(actualTestNum, actualSceneNum){
            sidebar.changeHover(actualTestNum, actualSceneNum);

            //The same scene
            cc.LoaderScene.preload(testNames[sidebar.diplayRecordArr[actualSceneNum]].resource || [], function () {
                //Click on the sidebar to allow
                cc._silderClick = true;

                // subchild
                if (typeof sidebar._childNameList[sidebar.diplayRecordArr[actualSceneNum]][actualTestNum] == "object")
                {
                    var scene = sidebar._childNameList[sidebar.diplayRecordArr[actualSceneNum]][actualTestNum].testScene();
                    if (scene) {
                        scene.runThisTest(actualTestNum);
                    }
                }
                else
                {
                    var scene = testNames[sidebar.diplayRecordArr[actualSceneNum]].testScene();
                    if (scene) {
                        scene.runThisTest(actualTestNum);
                    }
                }


            }, this);

            //show code
            code && code.showCode && code.showCode(actualSceneNum, actualTestNum);
            return actualTestNum;
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
            sidebar.init();
            this.defaultScene();
            code.init();
        }
    };

    window.sideIndexBar = sidebar;


})(window);