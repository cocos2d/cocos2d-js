/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

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

//2015-04-14

var UIVideoPlayerTest = UIScene.extend({
    _visibleOrigin:null,
    _visiableSize:null,
    _videoStateLabel:null,
    init: function(){
        if (this._super()) {

            //if (!cc.sys.isNative)
            //{
            //    return true;
            //}

            this._visiableSize = cc.size(480, 320);
            this._visibleOrigin = cc.view.getVisibleOrigin();

            cc.MenuItemFont.setFontSize(16);

            var fullSwitch = new cc.MenuItemFont("FullScreenSwitch", this.menuFullScreenCallback, this);
            fullSwitch.setAnchorPoint(cc.p(0, 0));
            fullSwitch.setPosition(cc.p(this._visibleOrigin.x + 10, this._visibleOrigin.y + 50));

            var pauseItem = new cc.MenuItemFont("Pause", this.menuPauseCallback, this);
            pauseItem.setAnchorPoint(cc.p(0, 0));
            pauseItem.setPosition(cc.p(this._visibleOrigin.x + 10, this._visibleOrigin.y + 100));

            var resumeItem = new cc.MenuItemFont("Resume", this.menuResumeCallback, this);
            resumeItem.setAnchorPoint(cc.p(0, 0));
            resumeItem.setPosition(cc.p(this._visibleOrigin.x + 10, this._visibleOrigin.y + 150));

            var stopItem = new cc.MenuItemFont("Stop", this.menuStopCallback, this);
            stopItem.setAnchorPoint(cc.p(0, 0));
            stopItem.setPosition(cc.p(this._visibleOrigin.x + 10, this._visibleOrigin.y + 200));

            var hintItem = new cc.MenuItemFont("Hint", this.menuHintCallback, this);
            hintItem.setAnchorPoint(cc.p(0, 0));
            hintItem.setPosition(cc.p(this._visibleOrigin.x + 10, this._visibleOrigin.y + 250));

            //-------------------------------------------------------------------------------------------------------------------

            var resourceVideo = new cc.MenuItemFont("Play resource video", this.menuResourceVideoCallback, this);
            resourceVideo.setAnchorPoint(cc.p(1, 0.5));
            resourceVideo.setPosition(cc.p(this._visibleOrigin.x + this._visiableSize.width - 10, this._visibleOrigin.y + 50));

            var onlineVideo = new cc.MenuItemFont("Play online video", this.menuResourceVideoCallback, this);
            onlineVideo.setAnchorPoint(cc.p(1, 0.5));
            onlineVideo.setPosition(cc.p(this._visibleOrigin.x + this._visiableSize.width - 10, this._visibleOrigin.y + 100));

            var ratioSwitch = new cc.MenuItemFont("KeepRatioSwitch", this.menuResourceVideoCallback, this);
            ratioSwitch.setAnchorPoint(cc.p(1, 0.5));
            ratioSwitch.setPosition(cc.p(this._visibleOrigin.x + this._visiableSize.width - 10, this._visibleOrigin.y + 150));

            var menu = new cc.Menu(resourceVideo,onlineVideo,ratioSwitch,fullSwitch,pauseItem,resumeItem,stopItem,hintItem);
            menu.setPosition(cc.p(0, 0));
            this._mainNode.addChild(menu);

            this._videoStateLabel = new cc.LabelTTF("IDLE","Arial",16);
            this._videoStateLabel.setAnchorPoint(cc.p(1, 0.5));
            this._videoStateLabel.setPosition(cc.p(this._visibleOrigin.x + this._visiableSize.width - 10, this._visibleOrigin.y + 200));
            this._mainNode.addChild(this._videoStateLabel);

            return true;
        }
    },
    menuFullScreenCallback: function() {

    },
    menuPauseCallback: function() {

    },
    menuResumeCallback: function() {

    },
    menuStopCallback: function() {

    },
    menuHintCallback: function() {

    },
    menuResourceVideoCallback: function() {

    }
});