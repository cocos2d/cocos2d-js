var res = {
    bgMusic_mp3 : 'res/Music/bgMusic.mp3',
    bgMusic_ogg : 'res/Music/bgMusic.ogg',
    buttonEffet_mp3 : 'res/Music/buttonEffet.mp3',
    buttonEffet_ogg : 'res/Music/buttonEffet.ogg',
    explodeEffect_mp3 : 'res/Music/explodeEffect.mp3',
    explodeEffect_ogg : 'res/Music/explodeEffect.ogg',
    fireEffect_mp3 : 'res/Music/fireEffect.mp3',         //unused
    fireEffect_ogg : 'res/Music/fireEffect.ogg',         //unused
    mainMainMusic_mp3 : 'res/Music/mainMainMusic.mp3',
    mainMainMusic_ogg : 'res/Music/mainMainMusic.ogg',
    shipDestroyEffect_mp3 : 'res/Music/shipDestroyEffect.mp3',
    shipDestroyEffect_ogg : 'res/Music/shipDestroyEffect.ogg',
    arial_14_fnt : 'res/arial-14.fnt',
    arial_14_png : 'res/arial-14.png',
    b01_plist : 'res/b01.plist',
    b01_png : 'res/b01.png',
    cocos2d_html5_png : 'res/cocos2d-html5.png',
    explode_plist : 'res/explode.plist',              //unused
    explosion_plist : 'res/explosion.plist',
    explosion_png : 'res/explosion.png',
    flare_jpg : 'res/flare.jpg',
    gameOver_png : 'res/gameOver.png',
    level01_tmx : 'res/level01.tmx',
    loading_png : 'res/loading.png',
    logo_png : 'res/logo.png',
    menu_png : 'res/menu.png',
    menuTitle_png : 'res/menuTitle.png',
    textureOpaquePack_plist : 'res/textureOpaquePack.plist',
    textureOpaquePack_png : 'res/textureOpaquePack.png',
    textureTransparentPack_plist : 'res/textureTransparentPack.plist',
    textureTransparentPack_png : 'res/textureTransparentPack.png'
};

var g_mainmenu = [
    {src:res.loading_png},
    {src:res.flare_jpg},
    {src:res.menu_png},
    {src:res.logo_png},
	{src:res.b01_png},
    {src:res.b01_plist},
    {src:res.mainMainMusic_mp3},
    {src:res.mainMainMusic_ogg},
    {src:res.menuTitle_png},
    {src:res.textureTransparentPack_plist},
    {src:res.textureTransparentPack_png}
];

var g_maingame = [
    //image
    {src:res.cocos2d_html5_png},
    {src:res.gameOver_png},
    {src:res.arial_14_png},
    {src:res.explosion_png},
    {src:res.textureOpaquePack_png},

    //tmx
    //{src:res.level01_tmx},

    //plist
    {src:res.explosion_plist},
    {src:res.textureOpaquePack_plist},

    //music
    {src:res.bgMusic_mp3},
    {src:res.bgMusic_ogg},

    //effect
    {src:res.buttonEffet_mp3},
    {src:res.explodeEffect_mp3},
    {src:res.fireEffect_mp3},
    {src:res.shipDestroyEffect_mp3},
    {src:res.buttonEffet_ogg},
    {src:res.explodeEffect_ogg},
    {src:res.fireEffect_ogg},
    {src:res.shipDestroyEffect_ogg},

    // FNT
    {src:res.arial_14_fnt}
];
