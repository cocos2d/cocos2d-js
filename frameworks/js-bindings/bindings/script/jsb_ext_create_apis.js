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
    this.setSelectedState(false);
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

cc.EventListenerAssetsManager.prototype._ctor = function(assetsManager, callback) {
    callback && this.init(assetsManager, callback);
};
