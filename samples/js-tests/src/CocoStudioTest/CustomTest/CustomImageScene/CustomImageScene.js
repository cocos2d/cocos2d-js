
var CustomImageLayer = cc.Layer.extend({

    onEnter: function(){
        cc.Layer.prototype.onEnter.call(this);

        var guiReader = ccs.uiReader;
        guiReader.registerTypeAndCallBack("CustomImageView",
            CustomImageView,
            CustomImageViewReader,
            CustomImageViewReader.setProperties);

        var layout = guiReader.widgetFromJsonFile("res/cocosui/CustomImageViewTest/NewProject_2_1.ExportJson");
        this.addChild(layout);
    }
});

var CustomImageScene = cc.Scene.extend({

    onEnter: function(){
        cc.Scene.prototype.onEnter.call(this);

        var label = cc.LabelTTF.create("Back", "fonts/arial.ttf", 20);
        //#endif
        var pMenuItem = cc.MenuItemLabel.create(label, this.BackCallback, this);

        var pMenu = cc.Menu.create(pMenuItem);

        pMenu.setPosition( cc.p(0, 0) );
        pMenuItem.setPosition( cc.p( 750, 25) );

        this.addChild(pMenu, 1);
    },
    runThisTest: function(){
        var pLayer = new CustomImageLayer();
        this.addChild(pLayer);

        cc.director.runScene(this);
    },
    BackCallback: function(pSender){
        var pScene = new CustomGUITestScene();
        pScene.runThisTest();
    }
});