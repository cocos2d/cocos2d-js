cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(800, 450, cc.ResolutionPolicy.EXACT_FIT);
	cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new HelloWorldScene());
    }, this);
};
cc.game.run();