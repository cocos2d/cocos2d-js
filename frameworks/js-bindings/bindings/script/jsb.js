/*
 * Copyright (c) 2013-2014 Chukong Technologies Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

//
// Javascript Bindigns helper file
//

// DO NOT ALTER THE ORDER
require('jsb_cocos2d_constants.js');
require('jsb_cocos2d.js');
require('jsb_cocos2d_extension.js');
require('jsb_cocos2d_studio.js');
require('jsb_cocos2d_ui.js');
require('jsb_property_impls.js');
require('jsb_property_apis.js');
require('jsb_create_apis.js');
require('jsb_chipmunk_constants.js');
require('jsb_chipmunk.js');
require('jsb_opengl_constants.js');
require('jsb_opengl.js');
require('jsb_cocosbuilder.js');
require('jsb_deprecated.js');
require('jsb_loaders.js');

if (cc.sys.os == cc.sys.OS_IOS) {
    require('jsb_pluginx.js');
}
