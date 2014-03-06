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

var cc = cc || {};

/**
 * Iterate over an object or an array, executing a function for each matched element.
 * @param {object|array} obj
 * @param {function} iterator
 * @param [{object}] context
 */
cc.each = function(obj, iterator, context){
    if(!obj) return;
    if(obj instanceof Array){
        for(var i = 0, li = obj.length; i < li; i++){
            if(iterator.call(context, obj[i], i) === false) return;
        }
    }else{
        for (var key in obj) {
            if(iterator.call(context, obj[key], key) === false) return;
        }
    }
};


//+++++++++++++++++++++++++something about async begin+++++++++++++++++++++++++++++++
cc.async = {
    /**
     * Counter for cc.async
     * @param err
     */
    _counterFunc : function(err){
        var counter = this.counter;
        if(counter.err) return;
        var length = counter.length;
        var results = counter.results;
        var option = counter.option;
        var cb = option.cb, cbTarget = option.cbTarget, trigger = option.trigger, triggerTarget = option.triggerTarget;
        if(err) {
            counter.err = err;
            if(cb) return cb.call(cbTarget, err);
            return;
        }
        var result = Array.apply(null, arguments).slice(1);
        var l = result.length;
        if(l == 0) result = null;
        else if(l == 1) result = result[0];
        else result = result;
        results[this.index] = result;
        counter.count--;
        if(trigger) trigger.call(triggerTarget, result, length - counter.count, length);
        if(counter.count == 0 && cb) cb.apply(cbTarget, [null, results]);
    },
    
    /**
     * Empty function for async.
     * @private
     */
    _emptyFunc : function(){},
    /**
     * Do tasks parallel.
     * @param tasks
     * @param option
     * @param cb
     */
    parallel : function(tasks, option, cb){
        var async = cc.async;
        var l = arguments.length;
        if(l == 3) {
            if(typeof option == "function") option = {trigger : option};
            option.cb = cb || option.cb;
        }
        else if(l == 2){
            if(typeof option == "function") option = {cb : option};
        }else if(l == 1) option = {};
        else throw "arguments error!";
        var isArr = tasks instanceof Array;
        var li = isArr ? tasks.length : Object.keys(tasks).length;
        if(li == 0){
            if(option.cb) option.cb.call(option.cbTarget, null);
            return;
        }
        var results = isArr ? [] : {};
        var counter = { length : li, count : li, option : option, results : results};
        
        cc.each(tasks, function(task, index){
                if(counter.err) return false;
                var counterFunc = !option.cb && !option.trigger ? async._emptyFunc : async._counterFunc.bind({counter : counter, index : index});//bind counter and index
                task(counterFunc, index);
                });
    },
    
    /**
     * Do tasks by iterator.
     * @param tasks
     * @param {{cb:{function}, target:{object}, iterator:{function}, iteratorTarget:{function}}|function} option
     * @param cb
     */
    map : function(tasks, option, cb){
        var self = this;
        var l = arguments.length;
        if(typeof option == "function") option = {iterator : option};
        if(l == 3) option.cb = cb || option.cb;
        else if(l == 2);
        else throw "arguments error!";
        var isArr = tasks instanceof Array;
        var li = isArr ? tasks.length : Object.keys(tasks).length;
        if(li == 0){
            if(option.cb) option.cb.call(option.cbTarget, null);
            return;
        }
        var results = isArr ? [] : {};
        var counter = { length : li, count : li, option : option, results : results};
        cc.each(tasks, function(task, index){
                if(counter.err) return false;
                var counterFunc = !option.cb ? self._emptyFunc : self._counterFunc.bind({counter : counter, index : index});//bind counter and index
                option.iterator.call(option.iteratorTarget, task, index, counterFunc);
                });
    }
};
//+++++++++++++++++++++++++something about async end+++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++something about path begin++++++++++++++++++++++++++++++++
cc.path = {
    /**
     * Join strings to be a path.
     * @example
     cc.path.join("a", "b.png");//-->"a/b.png"
     cc.path.join("a", "b", "c.png");//-->"a/b/c.png"
     cc.path.join("a", "b");//-->"a/b"
     cc.path.join("a", "b", "/");//-->"a/b/"
     cc.path.join("a", "b/", "/");//-->"a/b/"
     * @returns {string}
     */
    join : function(){
        var l = arguments.length;
        var result = "";
        for(var i = 0; i < l; i++) {
            result = (result + (result == "" ? "" : "/") + arguments[i]).replace(/(\/|\\\\)$/, "");
        }
        return result;
    },
    
    /**
     * Get the ext name of a path.
     * @example
     cc.path.extname("a/b.png");//-->".png"
     cc.path.extname("a/b.png?a=1&b=2");//-->".png"
     cc.path.extname("a/b");//-->null
     cc.path.extname("a/b?a=1&b=2");//-->null
     * @param pathStr
     * @returns {*}
     */
    extname : function(pathStr){
        var index = pathStr.indexOf("?");
        if(index > 0) pathStr = pathStr.substring(0, index);
        index = pathStr.lastIndexOf(".");
        if(index < 0) return null;
        return pathStr.substring(index, pathStr.length);
    },
    
    /**
     * Get the file name of a file path.
     * @example
     cc.path.basename("a/b.png");//-->"b.png"
     cc.path.basename("a/b.png?a=1&b=2");//-->"b.png"
     cc.path.basename("a/b.png", ".png");//-->"b"
     cc.path.basename("a/b.png?a=1&b=2", ".png");//-->"b"
     cc.path.basename("a/b.png", ".txt");//-->"b.png"
     * @param pathStr
     * @param extname
     * @returns {*}
     */
    basename : function(pathStr, extname){
        var index = pathStr.indexOf("?");
        if(index > 0) pathStr = pathStr.substring(0, index);
        var reg = /(\/|\\\\)([^(\/|\\\\)]+)$/g;
        var result = reg.exec(pathStr.replace(/(\/|\\\\)$/, ""));
        if(!result) return null;
        var baseName = result[2];
        if(extname && pathStr.substring(pathStr.length - extname.length).toLowerCase() == extname.toLowerCase())
            return baseName.substring(0, baseName.length - extname.length);
        return baseName;
    },
    
    /**
     * Get ext name of a file path.
     * @example
     cc.path.driname("a/b/c.png");//-->"a/b"
     cc.path.driname("a/b/c.png?a=1&b=2");//-->"a/b"
     * @param {String} pathStr
     * @returns {*}
     */
    dirname : function(pathStr){
        return pathStr.replace(/(\/|\\\\)$/, "").replace(/(\/|\\\\)[^(\/|\\\\)]+$/, "");
    },
    
    /**
     * Change extname of a file path.
     * @example
     cc.path.changeExtname("a/b.png", ".plist");//-->"a/b.plist"
     cc.path.changeExtname("a/b.png?a=1&b=2", ".plist");//-->"a/b.plist?a=1&b=2"
     * @param pathStr
     * @param extname
     * @returns {string}
     */
    changeExtname : function(pathStr, extname){
        extname = extname || "";
        var index = pathStr.indexOf("?");
        var tempStr = "";
        if(index > 0) {
            tempStr = pathStr.substring(index);
            pathStr = pathStr.substring(0, index);
        };
        index = pathStr.lastIndexOf(".");
        if(index < 0) return pathStr + extname + tempStr;
        return pathStr.substring(0, index) + extname + tempStr;
    },
    /**
     * Change file name of a file path.
     * @example
     cc.path.changeBasename("a/b/c.plist", "b.plist");//-->"a/b/b.plist"
     cc.path.changeBasename("a/b/c.plist?a=1&b=2", "b.plist");//-->"a/b/b.plist?a=1&b=2"
     cc.path.changeBasename("a/b/c.plist", ".png");//-->"a/b/c.png"
     cc.path.changeBasename("a/b/c.plist", "b");//-->"a/b/b"
     cc.path.changeBasename("a/b/c.plist", "b", true);//-->"a/b/b.plist"
     * @param {String} pathStr
     * @param {String} basename
     * @param [{Boolean}] isSameExt
     * @returns {string}
     */
    changeBasename : function(pathStr, basename, isSameExt){
        if(basename.indexOf(".") == 0) return this.changeExtname(pathStr, basename);
        var index = pathStr.indexOf("?");
        var tempStr = "";
        var ext = isSameExt ? this.extname(pathStr) : "";
        if(index > 0) {
            tempStr = pathStr.substring(index);
            pathStr = pathStr.substring(0, index);
        };
        index = pathStr.lastIndexOf("/");
        index = index <= 0 ? 0 : index+1;
        return pathStr.substring(0, index) + basename + ext + tempStr;
    }
};
//+++++++++++++++++++++++++something about path end++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++something about loader start+++++++++++++++++++++++++++
cc.loader = {
    
    resPath : "",//TODO root path of resource
    audioPath : "",//TODO root path of audio
    _register : {},//register of loaders
    cache : {},//cache for data loaded
    _langPathCache : {},//cache for lang path
    
    /**
     * Get XMLHttpRequest.
     * @returns {XMLHttpRequest}
     */
    getXMLHttpRequest : function () {//TODO
        return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP");
    },
    
    
    //@MODE_BEGIN DEV
    
    _jsCache : {},//cache for js
    
    _getArgs4Js : function(args){
        var a0 = args[0], a1 = args[1], a2 = args[2], results = ["", null, null];
        
        if(args.length == 1){
            results[1] = a0 instanceof Array ? a0 : [a0];
        }else if(args.length == 2){
            if(typeof a1 == "function"){
                results[1] = a0 instanceof Array ? a0 : [a0];
                results[2] = a1;
            }else{
                results[0] = a0 || "";
                results[1] = a1 instanceof Array ? a1 : [a1];
            }
        }else if(args.length == 3){
            results[0] = a0 || "";
            results[1] = a1 instanceof Array ? a1 : [a1];
            results[2] = a2;
        }else throw "arguments error to load js!";
        return results;
    },
    /**
     * Load js files.
     * @param {?string=} baseDir   The pre path for jsList.
     * @param {array.<string>} jsList    List of js path.
     * @param {function} cb        Callback function
     *
     *      If the arguments.length == 2, then the baseDir turns to be "".
     * @returns {*}
     */
    loadJs : function(baseDir, jsList, cb){
        var self = this, localJsCache = self._jsCache,
        args = self._getArgs4Js(arguments);
        baseDir = args[0];
        jsList = args[1];
        cb = args[2];
        var ccPath = cc.path;
        for(var i = 0, li = jsList.length; i < li; ++i){
            require(ccPath.join(baseDir, jsList[i]));
        }
        if(cb) cb();
    },
    /**
     * Load js width loading image.
     * @param {?string} baseDir
     * @param {array} jsList
     * @param {function} cb
     */
    loadJsWithImg : function(baseDir, jsList, cb){
        this.loadJs.apply(this, arguments);
    },
    
    //@MODE_END DEV
    
    /**
     * Load a single resource as txt.
     * @param {!string} url
     * @param {function} cb arguments are : err, txt
     */
    loadTxt : function(url, cb){
        cb(null, cc.FileUtils.getInstance().getStringFromFile(url));
    },
    
    loadJson : function(url, cb){
        this.loadTxt(url, function(err, txt){
            try{
                err ? cb(err) : cb(null, JSON.parse(txt));
            }catch(e){
                throw e;
                cb("load json [" + url + "] failed : " + e);
            }
        });
    },
    
    /**
     * Load a single image.
     * @param {!string} url
     * @param [{object}] option
     * @param {function} cb
     * @returns {Image}
     */
    loadImg : function(url, option, cb){
        var l = arguments.length;
        var opt = {
            isCrossOrigin : true
        };
        if(l == 3) {
            opt.isCrossOrigin = option.isCrossOrigin == null ? opt.isCrossOrigin : option.isCrossOrigin;
        }
        else if(l == 2) cb = option;
        
        var img = new Image();
        if(opt.isCrossOrigin) img.crossOrigin = "Anonymous";
        
        img.addEventListener("load", function () {
                             this.removeEventListener('load', arguments.callee, false);
                             this.removeEventListener('error', arguments.callee, false);
                             if(!cb) return;
                             cb(null, img);
                             });
        img.addEventListener("error", function () {
                             this.removeEventListener('error', arguments.callee, false);
                             if(!cb) return;
                             cb("error");
                             });
        img.src = url;
        return img;
    },
    /**
     * Load binary data by url.
     * @param {String} url
     * @param {Function} cb
     */
    loadBinary : function(url, cb){//TODO
        cb(null, cc.FileUtils.getInstance().getDataFromFile(url));
    },
    loadBinarySync : function(url){//TODO
        return cc.FileUtils.getInstance().getDataFromFile(url);
    },
    
    /**
     * Iterator function to load res
     * @param {object} item
     * @param {number} index
     * @param {function} cb
     * @returns {*}
     * @private
     */
    _loadResIterator : function(item, index, cb){
        cb();
    },
    
    /**
     * Get url with basePath.
     * @param [{string}] basePath
     * @param {string} url
     * @returns {*}
     */
    getUrl : function(basePath, url){
        var self = this, langPathCache = self._langPathCache, path = cc.path;
        if(arguments.length == 1){
            url = basePath;
            var type = path.extname(url);
            type = type ? type.toLowerCase() : "";
            var loader = self._register[type];
            if(!loader) basePath = self.resPath;
            else basePath = loader.getBasePath ? loader.getBasePath() : self.resPath;
        }
        url = cc.path.join(basePath || "", url)
        if(url.match(/[\/(\\\\)]lang[\/(\\\\)]/i)){
            if(langPathCache[url]) return langPathCache[url];
            var extname = path.extname(url) || "";
            url = langPathCache[url] = url.substring(0, url.length - extname.length) + "_" + cc.language.current + extname;
        }
        return url;
    },
    
    /**
     * Load resources then call the callback.
     * @param {[string]} res
     * @param [{function}|{}] option
     * @param {function} cb :
     */
    load : function(res, option, cb){
        var l = arguments.length;
        if(l == 3) {
            if(typeof option == "function") option = {trigger : option};
        }
        else if(l == 2){
            if(typeof option == "function") {
                cb = option;
                option = {};
            }
        }else if(l == 1) option = {};
        else throw "arguments error!";
        option.cb = function(err, results){
            if(err) cc.log(err);
            if(cb) cb(results);
        };
        if(!(res instanceof Array)) res = [res];
        option.iterator = this._loadResIterator;
        option.iteratorTarget = this;
        cc.async.map(res, option);
    },
    
    /**
     * Register a resource loader into loader.
     * @param {string} extname
     * @param {load : function} loader
     */
    register : function(extNames, loader){
        if(!extNames || !loader) return;
        var self = this;
        if(typeof extNames == "string") return this._register[extNames.trim().toLowerCase()] = loader;
        for(var i = 0, li = extNames.length; i < li; i++){
            self._register["." + extNames[i].trim().toLowerCase()] = loader;
        }
    },
    
    /**
     * Get resource data by url.
     * @param url
     * @returns {*}
     */
    getRes : function(url){//TODO
        var self = this;
        var type = cc.path.extname(url);
        var loader = self._register[type.toLowerCase()];
        if(!loader) return cc.log("loader for [" + type + "] not exists!");
        var basePath = loader.getBasePath ? loader.getBasePath() : self.resPath;
        var realUrl = self.getUrl(basePath, url);
        return loader.load(realUrl);
    },
    
    /**
     * Release the cache of resource by url.
     * @param url
     */
    release : function(url){//TODO
    },
    
    /**
     * Resource cache of all resources.
     */
    releaseAll : function(){//TODO
    }
    
};
//+++++++++++++++++++++++++something about loader end+++++++++++++++++++++++++++++


//+++++++++++++++++++++++++something about window events begin+++++++++++++++++++++++++++
(function(){
 cc.winEvents = {//TODO register hidden and show callback for window
 hiddens : [],
 shows : []
 };
})();
//+++++++++++++++++++++++++something about window events end+++++++++++++++++++++++++++++

//+++++++++++++++++++++++++something about log start++++++++++++++++++++++++++++
//TODO
cc.log = cc._cocosplayerLog || cc.log || log;
cc.warn = function(){cc.log.apply(cc, arguments)};
cc.error = function(){cc.log.apply(cc, arguments)};
cc.assert = function(){};
//+++++++++++++++++++++++++something about log end+++++++++++++++++++++++++++++


//+++++++++++++++++++++++++something about CCGame begin+++++++++++++++++++++++++++

/**
 * An object to boot the game.
 */
cc.game = {
    DEBUG_MODE_NONE : 0,
    DEBUG_MODE_LOG : 1,
    DEBUG_MODE_WARN : 2,
    DEBUG_MODE_ERROR : 3,
    DEBUG_MODE_LOG_FOR_WEB_PAGE : 4,
    DEBUG_MODE_WARN_FOR_WEB_PAGE : 5,
    DEBUG_MODE_ERROR_FOR_WEB_PAGE : 6,
    
    /**
     * Key of config
     * @constant
     * @type Object
     */
    CONFIG_KEY : {
        engineDir : "engineDir",
        dependencies : "dependencies",
        debugMode : "debugMode",
        showFPS : "showFPS",
        frameRate : "frameRate",
        id : "id",
        renderMode : "renderMode",
        jsList : "jsList",
        classReleaseMode : "classReleaseMode"
    },
    
    _prepareCalled : false,//whether the prepare function has been called
    _prepared : false,//whether the engine has prepared
    _paused : true,//whether the game is paused
    
    _intervalId : null,//interval target of main
    
    
    /**
     * Config of game
     * @type Object
     */
    config : null,
    
    /**
     * Callback when the scripts of engine have been load.
     * @type Function
     */
    onEnter : null,
    
    /**
     * Callback when game exits.
     * @type Function
     */
    onExit : null,
    /**
     * Callback before game resumes.
     * @type Function
     */
    onBeforeResume : null,
    /**
     * Callback after game resumes.
     * @type Function
     */
    onAfterResume : null,
    /**
     * Callback before game pauses.
     * @type Function
     */
    onBeforePause : null,
    /**
     * Callback after game pauses.
     * @type Function
     */
    onAfterPause : null,
    
    /**
     * Resume game.
     */
    resume : function(){
        var self = this;
        if(self.onBeforeResume && self.onBeforeResume()) return;
        self._runMainLoop();
        if(self.onAfterResume) self.onAfterResume();
    },
    /**
     * Pause game.
     */
    pause : function(){
        var self = this;
        if(self.onBeforePause && self.onBeforePause()) return;
        
        //TODO pause game
        
        self._paused = true;
        if(self.onAfterPause) self.onAfterPause();
    },
    /**
     * Set frameRate of game.
     * @param frameRate
     */
    setFrameRate : function(frameRate){
        var self = this, config = self.config, CONFIG_KEY = self.CONFIG_KEY;
        config[CONFIG_KEY.frameRate] = frameRate;
        
        //TODO pause game
        
        self._paused = true;
        self._runMainLoop();
    },
    /**
     * Run game.
     * @private
     */
    _runMainLoop : function(){
        var self = this, callback, config = self.config, CONFIG_KEY = self.CONFIG_KEY,
        win = window, frameRate = config[CONFIG_KEY.frameRate],
        director = cc.director;
        director.setDisplayStats(config[CONFIG_KEY.showFPS]);
        //TODO
        director.mainLoop();
        self._paused = false;
    },
    /**
     * Run game.
     */
    run : function(){
        var self = this;
        if(!self._prepareCalled){
            self.prepare(function(){
                self._runMainLoop();
                self.onEnter();
            });
        }else{
            self._runMainLoop();
            self.onEnter();
        }
    },
    /**
     * Init config.
     * @param cb
     * @returns {*}
     * @private
     */
    _initConfig : function(cb){
        var self = this, CONFIG_KEY = self.CONFIG_KEY;
        var _init = function(cfg){
            cfg[CONFIG_KEY.engineDir] = cfg[CONFIG_KEY.engineDir] || "frameworks/cocos2d-html5";
            cfg[CONFIG_KEY.debugMode] = cfg[CONFIG_KEY.debugMode] || 0;
            cfg[CONFIG_KEY.frameRate] = cfg[CONFIG_KEY.frameRate] || 60;
            cfg[CONFIG_KEY.renderMode] = cfg[CONFIG_KEY.renderMode] || 0;
            return cfg;
        };
        if(self.config) return cb(_init(self.config));
        cc.loader.loadJson("project.json", function(err, data){
            if(err) throw err;
            self.config = data;
            cb(_init(self.config));
        })
    },
    
    //cache for js and module that has added into jsList to be loaded.
    _jsAddedCache : {},
    _getJsListOfModule : function(moduleMap, moduleName, dir){
        var jsAddedCache = this._jsAddedCache;
        if(jsAddedCache[moduleName]) return null;
        dir = dir || "";
        var jsList = [];
        var tempList = moduleMap[moduleName];
        if(!tempList) throw "can not find module [" + moduleName + "]";
        var ccPath = cc.path;
        for(var i = 0, li = tempList.length; i < li; i++){
            var item = tempList[i];
            if(jsAddedCache[item]) continue;
            var extname = ccPath.extname(item);
            if(!extname) {
                var arr = this._getJsListOfModule(moduleMap, item, dir);
                if(arr) jsList = jsList.concat(arr);
            }else if(extname.toLowerCase() == ".js") jsList.push(ccPath.join(dir, item));
            jsAddedCache[item] = true;
        }
        return jsList;
    },
    /**
     * Prepare game.
     * @param cb
     */
    prepare : function(cb){
        var self = this;
        require("jsb.js");
        self._initConfig(function(config){
            var CONFIG_KEY = self.CONFIG_KEY, engineDir = config[CONFIG_KEY.engineDir], loader = cc.loader;
            self._prepareCalled = true;
            loader.loadJsWithImg("", config[CONFIG_KEY.jsList] || [], function(err){
                if(err) throw err;
                self._prepared = true;
                if(cb) cb();
            });
        });
    }
};
//+++++++++++++++++++++++++something about CCGame end+++++++++++++++++++++++++++++
