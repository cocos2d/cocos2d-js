var CocosStudio2_UIFromCsb = (function(){

    var testItem = [
        {itemTitle: "Button"},
        {itemTitle: "CheckBox"},
        {itemTitle: "ImageView"},
        {itemTitle: "Label"},
        {itemTitle: "LabelAtlas"},
        {itemTitle: "UILabelBMFont"},
        {itemTitle: "LoadingBar"},
        {itemTitle: "PageView"},
        {itemTitle: "Slider"},
        {itemTitle: "ScrollView"}
    ];

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
            var backItem = new cc.MenuItemFont("back",
                function(){
                    var s = new CocosStudio2();
                    s.runThisTest();
                }, this);
            backMenu.x = winSize.width - 60;
            backMenu.y = 40;
            backMenu.addChild(backItem);
            this.addChild(backMenu);

            this._pMenu = pMenu;
            this._backMenu = backMenu;
        },

        menuCallback:function (sender) {

            var nIndex = sender.zIndex - ITEM_TAG_BASIC;
            var layer = this;
            var node = ccs.csLoader.createNode(g_ccs2[nIndex]);

            var child = node._children[0];
            child.removeFromParent(false);
            this.addChild(child);

            var screenSize = cc.director.getWinSize();
            var rootSize = child.getContentSize();

            child.setPosition(cc.p((screenSize.width - rootSize.width) / 2,
                    (screenSize.height - rootSize.height) / 2));

            this._pMenu.setVisible(0);
            this._backMenu.setVisible(0);


            var back = ccui.helper.seekWidgetByName(child, "back");
            back.addTouchEventListener(function(){

                layer.removeChild(child);
                layer._pMenu.setVisible(1);
                layer._backMenu.setVisible(1);

            });
        }
    });

    return scene;

})();