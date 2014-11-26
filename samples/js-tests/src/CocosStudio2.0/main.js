var CocosStudio2 = (function(){

    var testItem = [
        {
            itemTitle: "UI from protocolBuffer",
            testScene: function(){
                var pScene = new CocosStudio2_UIFromCsb();
                if (pScene) {
                    pScene.runThisTest();
                }
            }
        },
        {
            itemTitle: "TimeLine from protocolBuffer",
            testScene: function(){
                var pScene = new CocosStudio2_TimeLineFromCsb();
                if (pScene) {
                    pScene.runThisTest();
                }
            }
        }
    ];

    var scene = cc.Scene.extend({
        runThisTest:function () {

            ccs.csLoader.setRecordProtocolBuffersPath(true);
            var layer = new mainLayer();
            this.addChild(layer);
            cc.director.runScene(this);
        }
    });

    var mainLayer = cc.Layer.extend({
        onEnter: function(){
            this._super();

            var winSize = cc.director.getWinSize();

            var pMenu = new cc.Menu();
            pMenu.x = 0;
            pMenu.y = 0;
            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(24);
            for (var i = 0; i < testItem.length; ++i) {
                var selItem = testItem[i];
                var pItem = new cc.MenuItemFont(selItem.itemTitle,
                    this.menuCallback, this);
                pItem.x = winSize.width / 2;
                pItem.y = winSize.height - (i + 1) * LINE_SPACE;
                pMenu.addChild(pItem, ITEM_TAG_BASIC + i);
            }
            this.addChild(pMenu);

            var backMenu = new cc.Menu();
            var backItem = new cc.MenuItemFont("main",
                function(){
                    var scene = new cc.Scene();
                    var layer = new TestController();
                    scene.addChild(layer);
                    var transition = new cc.TransitionProgressRadialCCW(0.5,scene);
                    director.runScene(transition);
                }, this);
            backMenu.x = winSize.width - 60;
            backMenu.y = 40;
            backMenu.addChild(backItem);
            this.addChild(backMenu);
        },

        menuCallback:function (sender) {
            var nIndex = sender.zIndex - ITEM_TAG_BASIC;
            testItem[nIndex].testScene();
        }
    });

    return scene;

})();