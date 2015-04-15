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
    _visibleSize:null,
    _videoStateLabel:null,
    _videoPlayer:null,
    init: function(){
        if (this._super()) {

            if (!cc.sys.isNative)
            {
                return true;
            }

            this._visibleSize = cc.size(480, 320);
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
            resourceVideo.setPosition(cc.p(this._visibleOrigin.x + this._visibleSize.width - 10, this._visibleOrigin.y + 50));

            var onlineVideo = new cc.MenuItemFont("Play online video", this.menuOnlineVideoCallback, this);
            onlineVideo.setAnchorPoint(cc.p(1, 0.5));
            onlineVideo.setPosition(cc.p(this._visibleOrigin.x + this._visibleSize.width - 10, this._visibleOrigin.y + 100));

            var ratioSwitch = new cc.MenuItemFont("KeepRatioSwitch", this.menuRatioCallback, this);
            ratioSwitch.setAnchorPoint(cc.p(1, 0.5));
            ratioSwitch.setPosition(cc.p(this._visibleOrigin.x + this._visibleSize.width - 10, this._visibleOrigin.y + 150));

            var menu = new cc.Menu(resourceVideo,onlineVideo,ratioSwitch,fullSwitch,pauseItem,resumeItem,stopItem,hintItem);
            menu.setPosition(cc.p(0, 0));
            this._mainNode.addChild(menu);

            this._videoStateLabel = new cc.LabelTTF("IDLE","Arial",16);
            this._videoStateLabel.setAnchorPoint(cc.p(1, 0.5));
            this._videoStateLabel.setPosition(cc.p(this._visibleOrigin.x + this._visibleSize.width - 10, this._visibleOrigin.y + 200));
            this._mainNode.addChild(this._videoStateLabel);

            this.createVideo();
            return true;
        }
    },
    createVideo: function() {
        var centerPos = cc.p(this._visibleOrigin.x + this._visibleSize.width / 2, this._visibleOrigin.y + this._visibleSize.height /2);

        var widgetSize = this._widget.getContentSize();

        this._videoPlayer = new ccexp.VideoPlayer();
        this._videoPlayer.setPosition(centerPos);
        this._videoPlayer.setAnchorPoint(cc.p(0.5, 0.5));
        this._videoPlayer.setContentSize(cc.size(widgetSize.width * 0.4, widgetSize.height * 0.4));
        this._mainNode.addChild(this._videoPlayer);

        this._videoPlayer.addEventListener(this.videoEventCallback.bind(this));
    },
    videoEventCallback: function (sender, eventType)
    {
        cc.log("videoEventCallback eventType:" + eventType);
        switch (eventType) {
            case ccexp.VideoPlayer.PLAYING:
                this._videoStateLabel.setString("PLAYING");
                break;
            case ccexp.VideoPlayer.PAUSED:
                this._videoStateLabel.setString("PAUSED");
                break;
            case ccexp.VideoPlayer.STOPPED:
                this._videoStateLabel.setString("STOPPED");
                break;
            case ccexp.VideoPlayer.COMPLETED:
                this._videoStateLabel.setString("COMPLETED");
                break;
            default:
                break;
        }
    },
    menuFullScreenCallback: function() {
        if (this._videoPlayer)
        {
            this._videoPlayer.setFullScreenEnabled(! this._videoPlayer.isFullScreenEnabled());
        }
    },
    menuPauseCallback: function() {
        if (this._videoPlayer)
        {
            this._videoPlayer.pause();
        }
    },
    menuResumeCallback: function() {
        if (this._videoPlayer)
        {
            this._videoPlayer.resume();
        }
    },
    menuStopCallback: function() {
        if (this._videoPlayer)
        {
            this._videoPlayer.stop();
        }
    },
    menuHintCallback: function() {
        if (this._videoPlayer)
        {
            this._videoPlayer.setVisible(! this._videoPlayer.isVisible());
        }
    },
    menuResourceVideoCallback: function() {
        if (this._videoPlayer)
        {
            this._videoPlayer.setFileName("res/cocosvideo.mp4");
            this._videoPlayer.play();
        }
    },
    menuOnlineVideoCallback: function() {
        if (this._videoPlayer)
        {
            this._videoPlayer.setURL("http://video001.smgbb.cn/gslb/program/FDN/FDN1190949/HLSVodService.m3u8?_mdCode=6065719&_cdnCode=B2B_XL_TEST&_type=0&_rCode=TerOut_18865&_userId=020341000456068&_categoryCode=SMG_HUAYU&_categoryPath=SMG_1002,SMG_HUAYU,&_adPositionId=01001000&_adCategorySource=0&_flag=.m3u8&_enCode=m3u8&taskID=ysh_ps_002-ott_1397459105893_020341000456068&_client=103&_cms=ctv&_CDNToken=76C043FD4969501754DC19E54EC8DC2C");
            this._videoPlayer.play();
        }
    },
    menuRatioCallback: function() {
        if (this._videoPlayer)
        {
            this._videoPlayer.setKeepAspectRatioEnabled(! this._videoPlayer.isKeepAspectRatioEnabled());
        }
    }
});