/**
 * Gaf Test
 * Created on 2015/4/23.
 */
(function(w){

    var Scene = TestScene.extend({
        runThisTest:function () {
            if(!cc.sys.isNative){
                var layer = new GafLayer();
                layer.setScale(0.9);
                this.addChild(layer);
            }else{
                var ttf = new cc.LabelTTF("Currently only supports the web platform");
                ttf.setFontSize(26);
                ttf.setPosition(cc.p(400, 225));
                this.addChild(ttf);
            }
            director.runScene(this);
        }
    });

    var GafLayer = cc.Layer.extend({
        _animations: g_gafFile,
        _currentAnimationId: 0,
        _anim: null,
        _loading: null,
        _isLoading: false,
        _playBtn: null,
        _pauseBtn: null,
        _nextSeqBtn: null,
        _prevSeqBtn: null,
        _sequences: null,
        _currentSeqId: null,
        _sequenceName: null,
        _bg: null,
        _bgColor: 127,

        update: function(dt)
        {
            if(this._isLoading && this._loading)
            {
                var l = this._loading;
                var speed = 600;
                l.setRotation(l.getRotation() - dt * speed);
            }

        },

        showLoading: function(){
            this._isLoading = true;
            if(!this._loading)
            {
                var size = cc.winSize;
                var l = this._loading = cc.Sprite.create(res.loading_image);
                l.retain();
                this.addChild(l, 1000);
                l.setAnchorPoint(0.5, 0.5);
                l.setPosition(size.width/2, size.height/2);
            }
            this._loading.setRotation(0);
        },

        hideLoading: function(){
            this._isLoading = false;
            var l = this._loading;
            if(!l) return;
            if(l.getParent())
                this.removeChild(l);
        },

        nextAnimation: function(){
            if(this._isLoading) return;
            if(this._currentAnimationId < this._animations.length - 1)
                ++this._currentAnimationId;
            else
                this._currentAnimationId = 0;
            this.loadAnimation(this._animations[this._currentAnimationId]);
        },

        prevAnimation: function(){
            if(this._isLoading) return;
            if(this._currentAnimationId > 0)
                --this._currentAnimationId;
            else
                this._currentAnimationId = this._animations.length - 1;
            this.loadAnimation(this._animations[this._currentAnimationId]);
        },

        prevFrame: function(){
            if(this._isLoading) return;
            var a = this._anim;
            var f = a.getCurrentFrameIndex() - 1;
            a.setFrame(f);
        },

        nextFrame: function(){
            if(this._isLoading) return;
            var a = this._anim;
            var f = a.getCurrentFrameIndex() + 1;
            a.setFrame(f);
        },

        restart: function(){
            if(this._isLoading) return;
            if(!this._anim) return;
            var a = this._anim;
            a.clearSequence();
            a.stop();
            a.start();
            this.play();
            this._currentSeqId = -1;
            this.nextSequence();
        },

        pause: function()
        {
            if(this._isLoading) return;
            this._anim.setAnimationRunning(false, true);
            this._playBtn.setVisible(true);
            this._pauseBtn.setVisible(false);
        },

        play: function()
        {
            if(this._isLoading) return;
            //this._anim.setAnimationRunning(true, true);
            this._playBtn.setVisible(false);
            this._pauseBtn.setVisible(true);
        },

        setSequnces: function(names){
            this._currentSeqId = 0;
            this._sequences = names;
            if(names.length == 0)
            {
                this._sequenceName.setVisible(false);
                this._nextSeqBtn.setVisible(false);
                this._prevSeqBtn.setVisible(false);
                return;
            }
            var name = names[this._currentSeqId];
            this._sequenceName.setString(name);
            this._sequenceName.setVisible(true);
            this._nextSeqBtn.setVisible(true);
            this._prevSeqBtn.setVisible(true);
        },

        loadAnimation: function(name){
            this.showLoading();
            if(this._anim)
            {
                this.removeChild(this._anim);
                this._anim = null;
            }
            var self = this;

            var asset = gaf.Asset.create(name);
            var onLoad = function()
            {
                var size = cc.winSize;
                var a = self._anim = asset.createObjectAndRun(true);
                self.addChild(a);
                a.setAnchorPoint(0.5, 0.5);
                a.setPosition(size.width/2, size.height/2);
                self.hideLoading();
                self.play();
                var names = a.getSequences();
                self.setSequnces(Object.keys(names));
            };

            if(asset.addEventListener)
            {
                // Only JS library loads assets async
                asset.addEventListener("load", onLoad);
            }
            else
            {
                // JSB load resources sync and have no method `addEventListener`
                onLoad();
            }
        },

        toggleBG: function(){
            var a = this._bgColor;
            if(a == 0)
                this._bgColor = 127;
            else if(a == 127)
                this._bgColor = 255;
            else
                this._bgColor = 0;

            var size = cc.winSize;
            this._bg.clear();
            var color = {r:this._bgColor, g:this._bgColor, b:this._bgColor, a:255};
            this._bg.drawRect(cc.p(0,0), cc.p(size.width, size.height), color, 0, color);
        },

        prevSequence: function()
        {
            if(this._isLoading) return;
            var l = this._sequences.length;
            if(l == 0) return;
            this._currentSeqId -= 1;
            if(this._currentSeqId < 0) this._currentSeqId = l - 1;
            var name = this._sequences[this._currentSeqId];
            this._sequenceName.setString(name);
            this._anim.playSequence(name);
        },

        nextSequence: function()
        {
            if(this._isLoading) return;
            var l = this._sequences.length;
            if(l == 0) return;
            this._currentSeqId = (this._currentSeqId + 1) % l;
            var name = this._sequences[this._currentSeqId];
            this._sequenceName.setString(name);
            this._anim.playSequence(name);
        },

        addButton: function(idle, pressed, pos, fun)
        {
            var self = this;
            var callback = function(){self[fun].call(self)}
            var size = cc.winSize;
            var item = new cc.MenuItemImage();
            item.initWithNormalImage(idle, pressed, null, callback);
            item.setPosition(size.width * pos.x - 60, size.height * pos.y);
            return item;
        },

        createMenu: function()
        {
            var size = cc.winSize;
            var Y = 0.1;
            var buttons = [];
            var self = this;
            buttons.push(this.addButton(
                "res/Gaf/buttons/previous_animation_button@2x.png",
                "res/Gaf/buttons/previous_animation_button_pressed@2x.png",
                cc.p(0, Y),
                'prevAnimation'
            ));
            buttons.push(this.addButton(
                "res/Gaf/buttons/previous_frame_button@2x.png",
                "res/Gaf/buttons/previous_frame_button_pressed@2x.png",
                cc.p(0.1, Y),
                'prevFrame'
            ));
            this._playBtn = this.addButton(
                "res/Gaf/buttons/play_button@2x.png",
                "res/Gaf/buttons/play_button_pressed@2x.png",
                cc.p(0.22, Y),
                'play'
            );
            buttons.push(this._playBtn);
            this._pauseBtn = this.addButton(
                "res/Gaf/buttons/pause_button@2x.png",
                "res/Gaf/buttons/pause_button_pressed@2x.png",
                cc.p(0.22, Y),
                'pause'
            );
            buttons.push(this._pauseBtn);
            buttons.push(this.addButton(
                "res/Gaf/buttons/next_frame_button@2x.png",
                "res/Gaf/buttons/next_frame_button_pressed@2x.png",
                cc.p(0.34, Y),
                'nextFrame'
            ));
            buttons.push(this.addButton(
                "res/Gaf/buttons/next_animation_button@2x.png",
                "res/Gaf/buttons/next_animation_button_pressed@2x.png",
                cc.p(0.44, Y),
                'nextAnimation'
            ));
            buttons.push(this.addButton(
                "res/Gaf/buttons/restart_button@2x.png",
                "res/Gaf/buttons/restart_button_pressed@2x.png",
                cc.p(0.57, Y),
                'restart'
            ));
            buttons.push(this.addButton(
                "res/Gaf/buttons/white_bg_button@2x.png",
                "res/Gaf/buttons/white_bg_button_pressed@2x.png",
                cc.p(0.67, Y),
                'toggleBG'
            ));
            this._prevSeqBtn = this.addButton(
                "res/Gaf/buttons/left_arrow@2x.png",
                "res/Gaf/buttons/left_arrow_pressed@2x.png",
                cc.p(0.05, 0.93),
                'prevSequence'
            );
            buttons.push(this._prevSeqBtn);
            this._nextSeqBtn = this.addButton(
                "res/Gaf/buttons/right_arrow@2x.png",
                "res/Gaf/buttons/right_arrow_pressed@2x.png",
                cc.p(0.4, 0.93),
                'nextSequence'
            );
            buttons.push(this._nextSeqBtn);
            this._sequenceName = new cc.LabelTTF("---", "System", 24);
            this._sequenceName.setAnchorPoint(0.5, 2);
            this._sequenceName.setPosition(size.width/2, size.height);
            this.addChild(this._sequenceName);

            var menu = new cc.Menu(buttons);
            //menu.setAnchorPoint(0, 0);
            menu.setPosition(size.width / 4, 0);
            menu.setContentSize(size);
            this.addChild(menu, 10000);

            var gafLogo = new cc.Sprite("res/Gaf/buttons/gaf_logo@2x.png");
            gafLogo.setAnchorPoint(1, 1);
            gafLogo.setScale(0.5 * cc.director.getContentScaleFactor());
            gafLogo.setPosition(size.width - 20, size.height - 20);

            this.addChild(gafLogo, 10000);

            this._playBtn.setVisible(false);
            this._nextSeqBtn.setVisible(false);
            this._prevSeqBtn.setVisible(false);
        },

        ctor:function () {
            //////////////////////////////
            // 1. super init first
            this._super();
            var size = cc.winSize;

            this.createMenu();
            this.schedule(this.update, 1/24);
            this.loadAnimation(this._animations[this._currentAnimationId]);


            this._bg = new cc.DrawNode();
            var color = {r:this._bgColor, g:this._bgColor, b:this._bgColor, a:255};
            this._bg.drawRect(cc.p(0,0), cc.p(size.width, size.height), color, 0, color);
            this.addChild(this._bg, -1);

            return true;
        }
    });

    w.GafTestScene = Scene;

})(window);