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
(function () {
    var d = document;
    var c = {
        COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        box2d:true,
        chipmunk:true,
        showFPS:true,
        loadExtension:true,
        frameRate:60,
        renderMode:0,       //Choose of RenderMode: 0(default), 1(Canvas only), 2(WebGL only)
        tag:'gameCanvas', //the dom element to run cocos2d on
        engineDir:'../../cocos2d/',
        //SingleEngineFile:'../../lib/Cocos2d-html5-v2.2.2.min.js',
        appFiles:[//'src/AppDelegate.js',

            // base class
            'BaseTestLayer/BaseTestLayer.js',

            'tests_resources-html5.js',
            'tests-main.js',

            'TouchesTest/Ball.js',
            'TouchesTest/Paddle.js',
            'TouchesTest/TouchesTest.js',
            'SchedulerTest/SchedulerTest.js',
            'ClickAndMoveTest/ClickAndMoveTest.js',
            'MenuTest/MenuTest.js',
            'ActionsTest/ActionsTest.js',
            'TileMapTest/TileMapTest.js',
            'TransitionsTest/TransitionsTest.js',
            'DrawPrimitivesTest/DrawPrimitivesTest.js',
            'ParticleTest/ParticleTest.js',
            'ProgressActionsTest/ProgressActionsTest.js',
            'LayerTest/LayerTest.js',
            'SceneTest/SceneTest.js',
            'SpineTest/SpineTest.js',
            'SpriteTest/SpriteTest.js',
            'TextureCacheTest/TextureCacheTest.js',
            'CocosDenshionTest/CocosDenshionTest.js',
            'CocosNodeTest/CocosNodeTest.js',
            'RotateWorldTest/RotateWorldTest.js',
            'RenderTextureTest/RenderTextureTest.js',
            'IntervalTest/IntervalTest.js',
            'ActionManagerTest/ActionManagerTest.js',
            'EaseActionsTest/EaseActionsTest.js',
            'ParallaxTest/ParallaxTest.js',
            'PerformanceTest/PerformanceTest.js',
            'PerformanceTest/PerformanceSpriteTest.js',
            'PerformanceTest/PerformanceSpriteTest2.js',
            'PerformanceTest/PerformanceParticleTest.js',
            'PerformanceTest/PerformanceNodeChildrenTest.js',
            'PerformanceTest/PerformanceTextureTest.js',
            'PerformanceTest/PerformanceAnimationTest.js',
            'PerformanceTest/PerformanceVirtualMachineTest.js',
            'PerformanceTest/seedrandom.js',
            'FontTest/FontTest.js',
            'PerformanceTest/PerformanceTouchesTest.js',
            'LabelTest/LabelTest.js',
            'CurrentLanguageTest/CurrentLanguageTest.js',
            'TextInputTest/TextInputTest.js',
            'EventTest/EventTest.js',
            'UnitTest/UnitTest.js',
            'SysTest/SysTest.js',
            'FileTest/FileTest.js',
            'EffectsTest/EffectsTest.js',
            'EffectsAdvancedTest/EffectsAdvancedTest.js',
            'MotionStreakTest/MotionStreakTest.js',
            'ClippingNodeTest/ClippingNodeTest.js',
            'OpenGLTest/OpenGLTest.js',

            'ExtensionsTest/ExtensionsTest.js',
            'ExtensionsTest/ControlExtensionTest/CCControlSceneManager.js',
            'ExtensionsTest/ControlExtensionTest/CCControlScene.js',
            'ExtensionsTest/ControlExtensionTest/CCControlButtonTest/CCControlButtonTest.js',
            'ExtensionsTest/ControlExtensionTest/CCControlSwitchTest/CCControlSwitchTest.js',
            'ExtensionsTest/ControlExtensionTest/CCControlSliderTest/CCControlSliderTest.js',
            'ExtensionsTest/ControlExtensionTest/CCControlStepperTest/CCControlStepperTest.js',
            'ExtensionsTest/ControlExtensionTest/CCControlPotentiometerTest/CCControlPotentiometerTest.js',
            'ExtensionsTest/ControlExtensionTest/CCControlColourPickerTest/CCControlColourPickerTest.js',
            'ExtensionsTest/TableViewTest/TableViewTestScene.js',
            'ExtensionsTest/CocosBuilderTest/CocosBuilderTest.js',
            'ExtensionsTest/CocosBuilderTest/TestHeader/TestHeaderLayer.js',
            'ExtensionsTest/CocosBuilderTest/HelloCocosBuilder/HelloCocosBuilderLayer.js',
            'ExtensionsTest/CocosBuilderTest/ButtonTest/ButtonTestLayer.js',
            'ExtensionsTest/CocosBuilderTest/SpriteTest/SpriteTestLayer.js',
            'ExtensionsTest/CocosBuilderTest/MenuTest/MenuTestLayer.js',
            'ExtensionsTest/CocosBuilderTest/LabelTest/LabelTestLayer.js',
            'ExtensionsTest/CocosBuilderTest/ParticleSystemTest/ParticleSystemTestLayer.js',
            'ExtensionsTest/CocosBuilderTest/ScrollViewTest/ScrollViewTestLayer.js',
            'ExtensionsTest/CocosBuilderTest/AnimationsTest/AnimationsTestLayer.js',
            'ExtensionsTest/CocosBuilderTest/TimelineCallbackTest/TimelineCallbackTestLayer.js',
            'ExtensionsTest/EditBoxTest/EditBoxTest.js',
            'ExtensionsTest/S9SpriteTest/S9SpriteTest.js',
            'ExtensionsTest/NetworkTest/WebSocketTest.js',
            'CocoStudioTest/ArmatureTest/ArmatureTest.js',
            'CocoStudioTest/ComponentsTest/ComponentsTestScene.js',
            'CocoStudioTest/ComponentsTest/EnemyController.js',
            'CocoStudioTest/ComponentsTest/GameOverScene.js',
            'CocoStudioTest/ComponentsTest/PlayerController.js',
            'CocoStudioTest/ComponentsTest/ProjectileController.js',
            'CocoStudioTest/ComponentsTest/SceneController.js',
            'CocoStudioTest/GUITest/UIScene.js',
            'CocoStudioTest/GUITest/UIButtonTest/UIButtonTest.js',
            'CocoStudioTest/GUITest/UICheckBoxTest/UICheckBoxTest.js',
            'CocoStudioTest/GUITest/UIImageViewTest/UIImageViewTest.js',
            'CocoStudioTest/GUITest/UILabelAtlasTest/UILabelAtlasTest.js',
            'CocoStudioTest/GUITest/UILabelBMFontTest/UILabelBMFontTest.js',
            'CocoStudioTest/GUITest/UILabelTest/UILabelTest.js',
            'CocoStudioTest/GUITest/UILayoutTest/UILayoutTest.js',
            'CocoStudioTest/GUITest/UIListViewTest/UIListViewTest.js',
            'CocoStudioTest/GUITest/UILoadingBarTest/UILoadingBarTest.js',
            'CocoStudioTest/GUITest/UINodeContainerTest/UINodeContainerTest.js',
            'CocoStudioTest/GUITest/UIPageViewTest/UIPageViewTest.js',
            'CocoStudioTest/GUITest/UISceneManager.js',
            'CocoStudioTest/GUITest/UIScrollViewTest/UIScrollViewTest.js',
            'CocoStudioTest/GUITest/UISliderTest/UISliderTest.js',
            'CocoStudioTest/GUITest/UITextFieldTest/UITextFieldTest.js',
            'CocoStudioTest/SceneTest/TriggerCode/Acts.js',
            'CocoStudioTest/SceneTest/TriggerCode/Cons.js',
            'CocoStudioTest/SceneTest/TriggerCode/EventDef.js',
            'CocoStudioTest/SceneTest/SceneEditorTest.js',
            'CocoStudioTest/CocoStudioTest.js',
            'XHRTest/XHRTest.js',

            'Box2dTest/Box2dTest.js',
            'ChipmunkTest/ChipmunkTest.js']

    };

    if(!d.createElement('canvas').getContext){
        var s = d.createElement('div');
        s.innerHTML = '<h2>Your browser does not support HTML5 canvas!</h2>' +
            '<p>Google Chrome is a browser that combines a minimal design with sophisticated technology to make the web faster, safer, and easier.Click the logo to download.</p>' +
            '<a href="http://www.google.com/chrome" target="_blank"><img src="http://www.google.com/intl/zh-CN/chrome/assets/common/images/chrome_logo_2x.png" border="0"/></a>';
        var p = d.getElementById(c.tag).parentNode;
        p.style.background = 'none';
        p.style.border = 'none';
        p.insertBefore(s);

        d.body.style.background = '#ffffff';
        return;
    }

    window.addEventListener('DOMContentLoaded', function () {
        //first load engine file if specified
        var s = d.createElement('script');
        /*********Delete this section if you have packed all files into one*******/
        if (c.SingleEngineFile && !c.engineDir) {
            s.src = c.SingleEngineFile;
        }
        else if (c.engineDir && !c.SingleEngineFile) {
            s.src = c.engineDir + 'jsloader.js';
        }
        else {
            alert('You must specify either the single engine file OR the engine directory in "cocos2d.js"');
        }
        /*********Delete this section if you have packed all files into one*******/
            //s.src = 'cocos2d-html5-testcases-advanced.js'; //IMPORTANT: Un-comment this line if you have packed all files into one

        d.body.appendChild(s);
        document.ccConfig = c;
        s.id = 'cocos2d-html5';
        //else if single file specified, load singlefile
    });
})();
