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

/************************************************************
 *
 * Constructors with built in init function
 *
 ************************************************************/
ccui.Widget.prototype.init = ccui.Widget.prototype._init;
ccui.Button.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
    this.setTouchEnabled(true);
};
ccui.CheckBox.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
    this.setSelected(false);
    this.setTouchEnabled(true);
};
ccui.LoadingBar.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
};
ccui.RichText.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
};
ccui.Slider.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
    this.setTouchEnabled(true);
};
ccui.Text.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
};
ccui.TextAtlas.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
};
ccui.TextBMFont.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
};
ccui.TextField.prototype.init = function(){
    ccui.Widget.prototype.init.call(this);
    this.setTouchEnabled(true);
};

var _p = {};
_p._ctor = function(){
    this.init();
};
ccui.Widget.prototype._ctor = ccui.Button.prototype._ctor
                            = ccui.CheckBox.prototype._ctor 
                            = ccui.ImageView.prototype._ctor
                            = ccui.LoadingBar.prototype._ctor
                            = ccui.RichText.prototype._ctor
                            = ccui.Slider.prototype._ctor
                            = ccui.Text.prototype._ctor
                            = ccui.TextAtlas.prototype._ctor
                            = ccui.TextBMFont.prototype._ctor
                            = ccui.TextField.prototype._ctor
                            = ccui.Layout.prototype._ctor
                            = ccui.ListView.prototype._ctor
                            = ccui.PageView.prototype._ctor
                            = ccui.ScrollView.prototype._ctor
                            = _p._ctor;

ccui.RichElementText.prototype._ctor = function(tag, color, opacity, text, fontName, fontSize){
    fontSize !== undefined && this.init(tag, color, opacity, text, fontName, fontSize);
};

ccui.RichElementImage.prototype._ctor = function(tag, color, opacity, filePath){
    filePath !== undefined && this.init(tag, color, opacity, filePath);
};

ccui.RichElementCustomNode.prototype._ctor = function(tag, color, opacity, customNode){
    customNode !== undefined && this.init(tag, color, opacity, customNode);
};

jsb.EventListenerAssetsManager.prototype._ctor = function(assetsManager, callback) {
    callback !== undefined && this.init(assetsManager, callback);
};

cc.Scale9Sprite.prototype._ctor = function(file, rect, capInsets){
    rect = rect || cc.rect(0, 0, 0, 0);
    capInsets = capInsets || cc.rect(0, 0, 0, 0);
    if(file != undefined){
        if(file instanceof cc.SpriteFrame)
            this.initWithSpriteFrame(file, rect);
        else{
            var frame = cc.spriteFrameCache.getSpriteFrame(file);
            if(frame != null)
                this.initWithSpriteFrame(frame, rect);
            else
                this.initWithFile(file, rect, capInsets);
        }
    }else{
        this.init();
    }
};

cc.ControlButton.prototype._ctor = function(label, backgroundSprite, fontSize){
    if(fontSize != undefined)
        this.initWithTitleAndFontNameAndFontSize(label, backgroundSprite, fontSize);
    else if(backgroundSprite != undefined)
        this.initWithLabelAndBackgroundSprite(label, backgroundSprite);
    else if(label != undefined)
        this.initWithBackgroundSprite(label);
    else
        this.init();
};

cc.ControlColourPicker.prototype._ctor = function(){
    this.init();
};

cc.ControlPotentiometer.prototype._ctor = function(backgroundFile, progressFile, thumbFile){
    if (thumbFile != undefined) {
        // Prepare track for potentiometer
        var backgroundSprite = cc.Sprite.create(backgroundFile);

        // Prepare thumb for potentiometer
        var thumbSprite = cc.Sprite.create(thumbFile);

        // Prepare progress for potentiometer
        var progressTimer = cc.ProgressTimer.create(cc.Sprite.create(progressFile));
        this.initWithTrackSprite_ProgressTimer_ThumbSprite(backgroundSprite, progressTimer, thumbSprite);
    }
};

cc.ControlSlider.prototype._ctor = function(bgFile, progressFile, thumbFile){
    if (thumbFile != undefined) {
        // Prepare background for slider
        bgSprite = cc.Sprite.create(bgFile);

        // Prepare progress for slider
        progressSprite = cc.Sprite.create(progressFile);

        // Prepare thumb (menuItem) for slider
        thumbSprite = cc.Sprite.create(thumbFile);

        this.initWithSprites(bgSprite, progressSprite, thumbSprite);
    }
};

cc.ControlStepper.prototype._ctor = function(minusSprite, plusSprite){
    plusSprite !== undefined && this.initWithMinusSpriteAndPlusSprite(minusSprite, plusSprite);
};

cc.ControlSwitch.prototype._ctor = function(maskSprite, onSprite, offSprite, thumbSprite, onLabel, offLabel){
    offLabel !== undefined && this.initWithMaskSprite(maskSprite, onSprite, offSprite, thumbSprite, onLabel, offLabel);
};

cc.TableView.prototype._ctor = function(dataSouurce, size, container){
    container == undefined ? this._init(dataSouurce, size) : this._init(dataSouurce, size, container);
};

cc.EditBox.prototype._ctor = function(size, normal9SpriteBg, press9SpriteBg, disabled9SpriteBg){
    normal9SpriteBg && this.initWithSizeAndBackgroundSprite(size, normal9SpriteBg);
};

cc.ScrollView.prototype._ctor = function(size, container) {
    size == undefined ? this.init() : (container ? this.initWithViewSize(size, container) : this.initWithViewSize(size));
};


/************************  Cocostudio  *************************/

ccs.Armature.prototype._ctor = function(name, parentBone) {
    parentBone !== undefined && ccs.Armature.prototype.init.call(this, name, parentBone);
};

ccs.Bone.prototype._ctor = function(name) {
    name !== undefined && ccs.Bone.prototype.init.call(this, name);
};

ccs.ArmatureAnimation.prototype._ctor = function(armature) {
    armature !== undefined && ccs.ArmatureAnimation.prototype.init.call(this, armature);
};

ccs.Tween.prototype._ctor = function(bone) {
    bone !== undefined && ccs.Tween.prototype.init.call(this, bone);
};

ccs.BatchNode.prototype._ctor = function() {
    ccs.BatchNode.prototype.init.call(this);
};

ccs.DecorativeDisplay.prototype._ctor = function() {
    ccs.DecorativeDisplay.prototype.init.call(this);
};

ccs.DisplayManager.prototype._ctor = function(bone) {
    bone !== undefined && ccs.DisplayManager.prototype.init.call(this, bone);
};

ccs.Skin.prototype._ctor = function(fileName, rect) {
    if (fileName == null || fileName == "") {
        ccs.Skin.prototype.init.call(this);
    } else {
        if(fileName[0] == "#"){
            ccs.Skin.prototype.initWithSpriteFrameName.call(this, fileName.substr(1));
        } else {
            rect ? ccs.Skin.prototype.initWithFile.call(this, fileName)
                 : ccs.Skin.prototype.initWithFile.call(this, fileName, rect);
        }
    }
};

ccs.ColliderDetector.prototype._ctor = function(bone) {
    bone !== undefined && ccs.ColliderDetector.prototype.init.call(this, bone);
};

ccs.TriggerObj.prototype._ctor = function() {
    ccs.TriggerObj.prototype.init.call(this);
};

ccs.ComAttribute.prototype._ctor = function() {
    ccs.ComAttribute.prototype.init.call(this);
};

ccs.ComAudio.prototype._ctor = function() {
    ccs.ComAudio.prototype.init.call(this);
};

ccs.ComController.prototype._ctor = function() {
    ccs.ComController.prototype.init.call(this);
};

ccs.ComRender.prototype._ctor = function() {
    ccs.ComRender.prototype.init.call(this);
};