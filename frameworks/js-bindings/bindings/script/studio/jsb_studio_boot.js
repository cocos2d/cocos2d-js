/*
 * Copyright (c) 2014 Chukong Technologies Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

//ccs.nodeReader = ccs.NodeReader.getInstance();
// the logic code modify to js in jsb_studio_load.js
//ccs.actionTimelineCache start-----------------------------------
//ccs.actionTimelineCache = ccs.ActionTimelineCache.getInstance();
//ccs.actionTimelineCache.createAction = ccs.ActionTimelineCache.createAction;
// ccs.actionTimelineCache end-----------------------------------

// the logic code modify to js in jsb_studio_load.js
// ccs.csLoader start-----------------------------------
//ccs.csLoader = ccs.CSLoader.getInstance();
//ccs.csLoader.createNode = ccs.CSLoader.createNode;
//ccs.csLoader.createTimeline = ccs.CSLoader.createTimeline;
// ccs.csLoader end-----------------------------------

// the logic code modify to js in jsb_studio_compatible.js
// ccs.uiReader start-----------------------------------
// In extension
/**
 * @type {Object} Base object for ccs.uiReader
 * @name ccs.uiReader
 */
//ccs.uiReader = null;
//cc.defineGetterSetter(ccs, "uiReader", function() {
//    return ccs.GUIReader.getInstance();
//});
//ccs.GUIReader.prototype.clear = function() {
//    ccs.GUIReader.destroyInstance();
//};
// ccs.uiReader end-----------------------------------

/**
 * @type {Object} Format and manage armature configuration and armature animation
 * @name ccs.armatureDataManager
 */
ccs.armatureDataManager = null;
cc.defineGetterSetter(ccs, "armatureDataManager", function() {
    return ccs.ArmatureDataManager.getInstance();
});
ccs.ArmatureDataManager.prototype.clear = function() {
    ccs.ArmatureDataManager.destroyInstance();
};
/**
 * @type {Object} Base singleton object for ccs.sceneReader
 * @name ccs.sceneReader
 */
// the logic code modify to js in jsb_studio_compatible.js
// ccs.sceneReader start-----------------------------------
//ccs.sceneReader = null;
//cc.defineGetterSetter(ccs, "sceneReader", function() {
//    return ccs.SceneReader.getInstance();
//});
//ccs.SceneReader.prototype.clear = function() {
//    ccs.SceneReader.destroyInstance();
//};
//ccs.SceneReader.prototype.version = function() {
//    return ccs.SceneReader.sceneReaderVersion();
//};
// ccs.sceneReader end-----------------------------------

/**
 * @type {Object} Base singleton object for ccs.ActionManager
 * @name ccs.actionManager
 */
ccs.actionManager = ccs.ActionManager.getInstance();
ccs.ActionManager.prototype.clear = function() {
    this.releaseActions();
};
ccs.ActionManager.prototype.initWithDictionary = function(file, dic, node) {
    ccs.actionManager.initWithDictionaryEx(file, JSON.stringify(dic), node);
}
//ccs.spriteFrameCacheHelper = ccs.SpriteFrameCacheHelper.getInstance();
//ccs.dataReaderHelper = ccs.DataReaderHelper.getInstance();

/**
 * The same as cc.Node
 * @class
 * @extends ccs.Class
 */
ccs.Node = ccs.Node || cc.Node;
ccs.Node.extend = ccs.Node.extend || cc.Node.extend;

/**
 * The same as cc.Sprite
 * @class
 * @extends ccs.Class
 */
ccs.Sprite = ccs.Sprite || cc.Sprite;
ccs.Sprite.extend = ccs.Sprite.extend || cc.Sprite.extend;

/**
 * The same as cc.Component
 * @class
 * @extends ccs.Class
 */
ccs.Component = ccs.Component || cc.Component;
ccs.Component.extend = ccs.Component.extend || cc.Component.extend;