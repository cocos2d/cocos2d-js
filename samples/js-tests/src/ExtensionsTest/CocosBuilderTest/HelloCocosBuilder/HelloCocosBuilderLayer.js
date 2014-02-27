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

var HelloCocosBuilderLayer = function() {

    this.openTest = function(ccbFileName) {

        cc.BuilderReader.setResourcePath("res/");
        var node = cc.BuilderReader.load(ccbFileName, this);

        this.mTestTitleLabelTTF.setString(ccbFileName);
        var scene = cc.Scene.create();
        if(node != null)
            scene.addChild(node);

        /* Push the new scene with a fancy transition. */
        cc.Director.getInstance().pushScene(cc.TransitionFade.create(0.5, scene, cc.c3b(0, 0, 0)));
    };

    // ccb Callback
    this.onMenuTestClicked = function() {
        this.openTest("res/ccb/ccb/TestMenus.ccbi");
    };

    this.onSpriteTestClicked = function() {
        this.openTest("res/ccb/ccb/TestSprites.ccbi");
    };
    this.onButtonTestClicked = function() {
        this.openTest("res/ccb/ccb/TestButtons.ccbi");
    };

    this.onAnimationsTestClicked = function() {
        this.openTest("res/ccb/ccb/TestAnimations.ccbi");
    };

    this.onParticleSystemTestClicked = function() {
        this.openTest("res/ccb/ccb/TestParticleSystems.ccbi");
    };

    this.onScrollViewTestClicked = function() {
        this.openTest("res/ccb/ccb/TestScrollViews.ccbi");
    };

    this.onTimelineCallbackSoundClicked = function() {
        this.openTest("res/ccb/ccb/TestTimelineCallback.ccbi");
    };
};

