var CocosStudio2_TimeLineFromCsb = (function(){

    var testItem = [
        {
            itemTitle: "walk",
            run: function(){
                action.gotoFrameAndPlay(70, action.getDuration(), true);
            }
        },
        {
            itemTitle: "stop",
            run: function(){
                action.gotoFrameAndPlay(0, 60, true);
            }
        }
    ];

    var people = null;
    var action = null;

    var scene = cc.Scene.extend({
        runThisTest:function () {
            var layer = new mainLayer();
            this.addChild(layer);
            cc.director.runScene(this);
        }
    });

    var mainLayer = cc.Layer.extend({
        onEnter: function(){
            this._super();

            var winSize = cc.director.getWinSize();

            var pMenu = cc.Menu.create();
            pMenu.x = 0;
            pMenu.y = 0;
            cc.MenuItemFont.setFontName("Arial");
            cc.MenuItemFont.setFontSize(24);
            for (var i = 0; i < testItem.length; ++i) {
                var selItem = testItem[i];
                var pItem = cc.MenuItemFont.create(selItem.itemTitle,
                    selItem.run, this);
                pItem.x = winSize.width / 2;
                pItem.y = winSize.height - (i + 1) * LINE_SPACE;
                pMenu.addChild(pItem, ITEM_TAG_BASIC + i);
            }
            this.addChild(pMenu);

            var backMenu = cc.Menu.create();
            var backItem = cc.MenuItemFont.create("back",
                function(){
                    var s = new CocosStudio2();
                    s.runThisTest();
                }, this);
            backMenu.x = winSize.width - 60;
            backMenu.y = 40;
            backMenu.addChild(backItem);
            this.addChild(backMenu);

            cc.spriteFrameCache.addSpriteFrames("res/armatures/Cowboy0.plist", "res/armatures/Cowboy0.png");

            people = ccs.csLoader.createNode("res/ActionTimeline/boy_1.csb");
            action = ccs.actionTimelineCache.createAction("res/ActionTimeline/boy_1.csb");
            people.runAction(action);
            action.gotoFrameAndPlay(0, 60, true);
            people.setScale(0.2);
            people.setPosition(150,100);

            this.addChild(people);
        }
    });

    return scene;

})();