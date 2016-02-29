/****************************************************************************
 Cocos2d-html5 show case : Moon Warriors

 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

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
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @Authors:
 Programmer: Shengxiang Chen (陈升想), Dingping Lv (吕定平), Ricardo Quesada
 Effects animation: Hao Wu (吴昊)
 Quality Assurance: Sean Lin (林顺)
 ****************************************************************************/

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
    gameOverBack_png : 'res/gameoverBack.png',
    level01_tmx : 'res/level01.tmx',
    loading_png : 'res/loading.png',
    logo_png : 'res/logo.png',
    logoBack_png : 'res/logoBack.png',
    menu_png : 'res/menu.png',
    menuTitle_png : 'res/menuTitle.png',
    textureOpaquePack_plist : 'res/textureOpaquePack.plist',
    textureOpaquePack_png : 'res/textureOpaquePack.png',
    textureTransparentPack_plist : 'res/textureTransparentPack.plist',
    textureTransparentPack_png : 'res/textureTransparentPack.png',

    //loading
    glow_png:'res_engine/progress_light.png',
    preload_logo_png:'res_engine/preload_logo.png',
    preload_title_png:'res_engine/preload_title.png',
    preload_bg_jpg:'res_engine/preload_bg.jpg',
    progress_bar_png:'res_engine/progress_bar.png',
    progress_bg_png:'res_engine/progress_bg.png',
    progress_shadow_png:'res_engine/progress_shadow.png',
    dialog_bg_png:"res_engine/dialog_bg.png",
    dialog_cancel_normal_png:"res_engine/dialog_cancel_normal.png",
    dialog_cancel_press_png:"res_engine/dialog_cancel_press.png",
    dialog_confirm_normal_png:"res_engine/dialog_confirm_normal.png",
    dialog_confirm_press_png:"res_engine/dialog_confirm_press.png",

    //for test
    network_dialog_bg_png:"res/dialog_bg.png",
    network_dialog_cancel_normal_png:"res/dialog_cancel_normal.png",
    network_dialog_cancel_press_png:"res/dialog_cancel_press.png",
    network_dialog_confirm_normal_png:"res/dialog_confirm_normal.png",
    network_dialog_confirm_press_png:"res/dialog_confirm_press.png"
};

window["boot"] = [
    res.loading_png,
    res.flare_jpg,
    res.menu_png,
    res.logo_png,
    res.logoBack_png,
    res.mainMainMusic_mp3,
    res.mainMainMusic_ogg,
    res.textureTransparentPack_plist,
    res.textureTransparentPack_png,
    res.glow_png,
    res.preload_logo_png, 
    res.preload_bg_jpg,
    res.progress_bar_png,
    res.progress_bg_png,
    res.progress_shadow_png,
    res.dialog_bg_png,
    res.dialog_cancel_normal_png,
    res.dialog_cancel_press_png,
    res.dialog_confirm_normal_png,
    res.dialog_confirm_press_png,
    res.network_dialog_bg_png,
    res.network_dialog_cancel_normal_png,
    res.network_dialog_cancel_press_png,
    res.network_dialog_confirm_normal_png,
    res.network_dialog_confirm_press_png
];

window["gamelayer"] = [
    //image
    res.b01_png,
    res.b01_plist,
    res.arial_14_png,
    res.explosion_png,
    res.textureOpaquePack_png,

    //tmx
    //res.level01_tmx,

    //plist
    res.explosion_plist,
    res.textureOpaquePack_plist,

    //music
    res.bgMusic_mp3,
    res.bgMusic_ogg,

    //effect
    res.buttonEffet_mp3,
    res.explodeEffect_mp3,
    res.fireEffect_mp3,
    res.shipDestroyEffect_mp3,
    res.buttonEffet_ogg,
    res.explodeEffect_ogg,
    res.fireEffect_ogg,
    res.shipDestroyEffect_ogg,

    // FNT
    res.arial_14_fnt
];

window["common"] = [
    res.menuTitle_png
];

window["gameover"] = [
    res.cocos2d_html5_png,
    res.gameOverBack_png,
    res.gameOver_png
];
