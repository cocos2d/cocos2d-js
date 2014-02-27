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

var audioEngine = cc.AudioEngine.getInstance();

var MUSIC_FILE = "res/Sound/background.mp3";
var EFFECT_FILE = "res/Sound/effect2.mp3";

var DenshionTests = [
    {
        title:"Play Music",
        playFunc:function () {
            return new playMusic();
        }
    },
    {
        title:"Stop Music",
        playFunc:function () {
            return new stopMusic();
        }
    },
    {
        title:"Pause Music",
        playFunc:function () {
            return new pauseMusic();
        }
    },
    {
        title:"Resume Music",
        playFunc:function () {
            return new resumeMusic();
        }
    },
    {
        title:"Rewind Music",
        playFunc:function () {
            return new rewindMusic();
        }
    },
    {
        title:"is Music Playing",
        playFunc:function () {
            return new isMusicPlaying();
        }
    },
    {
        title:"Increase Music Volume",
        playFunc:function () {
            return new addMusicVolume();
        }
    },
    {
        title:"Decrease Music Volume",
        playFunc:function () {
            return new subMusicVolume();
        }
    },
    {
        title:"Play Sound Effect",
        playFunc:function () {
            return new playEffect();
        }
    },
    {
        title:"Repeat Sound Effect",
        playFunc:function () {
            return new playEffectRepeatly();
        }
    },
    {
        title:"Stop Sound Effect",
        playFunc:function () {
            return new stopEffect();
        }
    },
    {
        title:"Unload Sound Effect",
        playFunc:function () {
            return new unloadEffect();
        }
    },
    {
        title:"Increase Sound Effect Volume",
        playFunc:function () {
            return new addEffectsVolume();
        }
    },
    {
        title:"Decrease Sound Effect Volume",
        playFunc:function () {
            return new subEffectsVolume();
        }
    },
    {
        title:"Pause Sound Effect",
        playFunc:function () {
            return new pauseEffect();
        }
    },
    {
        title:"Resume Sound Effect",
        playFunc:function () {
            return new resumeEffect();
        }
    },
    {
        title:"Pause All Sound Effects",
        playFunc:function () {
            return new pauseAllEffects();
        }
    },
    {
        title:"Resume All Sound Effects",
        playFunc:function () {
            return new resumeAllEffects();
        }
    },
    {
        title:"Stop All Sound Effects",
        playFunc:function () {
            return new stopAllEffects();
        }
    }
];

var CocosDenshionTest = cc.LayerGradient.extend({
    _itemMenu:null,
    _beginPos:cc.p(0, 0),
    _testCount:0,
    ctor:function () {
        this._super();

        this.init(cc.c4b(0, 0, 0, 255), cc.c4b(148, 80, 120, 255));

        this._itemMenu = cc.Menu.create();
        var winSize = director.getWinSize();
        for (var i = 0; i < DenshionTests.length; i++) {
            var label = cc.LabelTTF.create(DenshionTests[i].title, "Arial", 24);
            var menuItem = cc.MenuItemLabel.create(label, this.onMenuCallback, this);
            this._itemMenu.addChild(menuItem, i + 10000);
            menuItem.setPosition(winSize.width / 2, (winSize.height - (i + 1) * LINE_SPACE));
        }
        this._testCount = i;
        this._itemMenu.setContentSize(winSize.width, (this._testCount + 1) * LINE_SPACE);
        this._itemMenu.setPosition(0, 0);
        this.addChild(this._itemMenu);

        if( 'touches' in sys.capabilities )
            this.setTouchEnabled(true);
        else if ('mouse' in sys.capabilities )
            this.setMouseEnabled(true);

        // set default volume
        audioEngine.setEffectsVolume(0.5);
        audioEngine.setMusicVolume(0.5);
    },
    onExit:function () {
        this._super();
        cc.AudioEngine.end();
    },

    onMenuCallback:function (sender) {
        var idx = sender.getZOrder() - 10000;
        // create the test scene and run it
        var scene = DenshionTests[idx].playFunc();
    },

    onTouchesMoved:function (touches, event) {
        var delta = touches[0].getDelta();
        this.moveMenu(delta);
        return true;
    },

    onMouseDragged:function (event) {
        var delta = event.getDelta();
        this.moveMenu(delta);
        return true;
    },

    moveMenu:function (delta) {
        var current = this._itemMenu.getPosition();

        var newY = current.y + delta.y;

        if (newY < 0)
            newY = 0;

        if (newY > ((DenshionTests.length + 1) * LINE_SPACE - winSize.height))
            newY = ((DenshionTests.length + 1) * LINE_SPACE - winSize.height);

        this._itemMenu.setPosition(current.x, newY);
    }
});

var CocosDenshionTestScene = TestScene.extend({
    runThisTest:function () {
        audioEngine = cc.AudioEngine.getInstance();
        var layer = new CocosDenshionTest();
        this.addChild(layer);
        director.replaceScene(this);
    }
});

var soundId = null;

var playMusic = function () {
    cc.log("play background music");
    audioEngine.playMusic(MUSIC_FILE, false);
};

var stopMusic = function () {
    cc.log("stop background music");
    audioEngine.stopMusic();
};

var pauseMusic = function () {
    cc.log("pause background music");
    audioEngine.pauseMusic();
};

var resumeMusic = function () {
    cc.log("resume background music");
    audioEngine.resumeMusic();
};

var rewindMusic = function () {
    cc.log("rewind background music");
    audioEngine.rewindMusic();
};

// is background music playing
var isMusicPlaying = function () {
    if (audioEngine.isMusicPlaying()) {
        cc.log("background music is playing");
    }
    else {
        cc.log("background music is not playing");
    }
};

var playEffect = function () {
    cc.log("play effect");
    soundId = audioEngine.playEffect(EFFECT_FILE);
};

var playEffectRepeatly = function () {
    cc.log("play effect repeatly");
    soundId = audioEngine.playEffect(EFFECT_FILE, true);
};

var stopEffect = function () {
    cc.log("stop effect");
    audioEngine.stopEffect(soundId);
};

var unloadEffect = function () {
    cc.log("unload effect");
    audioEngine.unloadEffect(EFFECT_FILE);
};

var addMusicVolume = function () {
    cc.log("add bakcground music volume");
    audioEngine.setMusicVolume(audioEngine.getMusicVolume() + 0.1);
};

var subMusicVolume = function () {
    cc.log("sub backgroud music volume");
    audioEngine.setMusicVolume(audioEngine.getMusicVolume() - 0.1);
};

var addEffectsVolume = function () {
    cc.log("add effects volume");
    audioEngine.setEffectsVolume(audioEngine.getEffectsVolume() + 0.1);
};

var subEffectsVolume = function () {
    cc.log("sub effects volume");
    audioEngine.setEffectsVolume(audioEngine.getEffectsVolume() - 0.1);
};

var pauseEffect = function () {
    cc.log("pause effect");
    audioEngine.pauseEffect(soundId);
};

var resumeEffect = function () {
    cc.log("resume effect");
    audioEngine.resumeEffect(soundId);
};

var pauseAllEffects = function () {
    cc.log("pause all effects");
    audioEngine.pauseAllEffects();
};
var resumeAllEffects = function () {
    cc.log("resume all effects");
    audioEngine.resumeAllEffects();
};
var stopAllEffects = function () {
    cc.log("stop all effects");
    audioEngine.stopAllEffects();
};