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
// cocos2d constants
//

cc.ENGINE_VERSION = "Cocos2d-JS-v3.0 alpha 2";

cc.TARGET_PLATFORM = {
    WINDOWS:0,
    LINUX:1,
    MACOS:2,
    ANDROID:3,
    IPHONE:4,
    IPAD:5,
    BLACKBERRY:6,
    NACL:7,
    EMSCRIPTEN:8,
    MOBILE_BROWSER:100,
    PC_BROWSER:101
};

cc.ResolutionPolicy = {
    // The entire application is visible in the specified area without trying to preserve the original aspect ratio.
    // Distortion can occur, and the application may appear stretched or compressed.
    EXACT_FIT:0,
    // The entire application fills the specified area, without distortion but possibly with some cropping,
    // while maintaining the original aspect ratio of the application.
    NO_BORDER:1,
    // The entire application is visible in the specified area without distortion while maintaining the original
    // aspect ratio of the application. Borders can appear on two sides of the application.
    SHOW_ALL:2,
    // The application takes the height of the design resolution size and modifies the width of the internal
    // canvas so that it fits the aspect ratio of the device
    // no distortion will occur however you must make sure your application works on different
    // aspect ratios
    FIXED_HEIGHT:3,
    // The application takes the width of the design resolution size and modifies the height of the internal
    // canvas so that it fits the aspect ratio of the device
    // no distortion will occur however you must make sure your application works on different
    // aspect ratios
    FIXED_WIDTH:4,

    UNKNOWN:5
};

cc.LANGUAGE_ENGLISH    = 0;
cc.LANGUAGE_CHINESE    = 1;
cc.LANGUAGE_FRENCH     = 2;
cc.LANGUAGE_ITALIAN    = 3;
cc.LANGUAGE_GERMAN     = 4;
cc.LANGUAGE_SPANISH    = 5;
cc.LANGUAGE_RUSSIAN    = 6;
cc.LANGUAGE_KOREAN     = 7;
cc.LANGUAGE_JAPANESE   = 8;
cc.LANGUAGE_HUNGARIAN  = 9;
cc.LANGUAGE_PORTUGUESE = 10;
cc.LANGUAGE_ARABIC     = 11;

cc.Director.PROJECTION_2D = 0;
cc.Director.PROJECTION_3D = 1;
cc.Director.PROJECTION_CUSTOM = 3;
cc.Director.PROJECTION_DEFAULT = cc.Director.PROJECTION_3D;

cc.DEVICE_ORIENTATION_PORTRAIT = 0;
cc.DEVICE_ORIENTATION_LANDSCAPE_LEFT = 1;
cc.DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 2;
cc.DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 3;
cc.DEVICE_MAX_ORIENTATIONS = 2;

cc.TEXTURE_PIXELFORMAT_RGBA8888 = 0;
cc.TEXTURE_PIXELFORMAT_RGB888 = 1;
cc.TEXTURE_PIXELFORMAT_RGB565 = 2;
cc.TEXTURE_PIXELFORMAT_A8 = 3;
cc.TEXTURE_PIXELFORMAT_I8 = 4;
cc.TEXTURE_PIXELFORMAT_AI88 = 5;
cc.TEXTURE_PIXELFORMAT_RGBA4444 = 6;
cc.TEXTURE_PIXELFORMAT_RGB5A1 = 7;
cc.TEXTURE_PIXELFORMAT_PVRTC4 = 8;
cc.TEXTURE_PIXELFORMAT_PVRTC4 = 9;
cc.TEXTURE_PIXELFORMAT_DEFAULT = cc.TEXTURE_PIXELFORMAT_RGBA8888;

cc.IMAGE_FORMAT_JPEG = 0;
cc.IMAGE_FORMAT_PNG = 0;

cc.TOUCH_ALL_AT_ONCE = 0;
cc.TOUCH_ONE_BY_ONE = 1;

cc.TRANSITION_ORIENTATION_LEFT_OVER = 0;
cc.TRANSITION_ORIENTATION_RIGHT_OVER = 1;
cc.TRANSITION_ORIENTATION_UP_OVER = 0;
cc.TRANSITION_ORIENTATION_DOWN_OVER = 1;

cc.RED = {r:255, g:0, b:0};
cc.GREEN = {r:0, g:255, b:0};
cc.BLUE = {r:0, g:0, b:255};
cc.BLACK = {r:0, g:0, b:0};
cc.WHITE = {r:255, g:255, b:255};
cc.YELLOW = {r:255, g:255, b:0};

cc.POINT_ZERO = {x:0, y:0};

cc.PARTICLE_DEFAULT_CAPACITY = 500;

// XXX: This definition is different than cocos2d-html5
// cc.REPEAT_FOREVER = - 1;
// We can't assign -1 to cc.REPEAT_FOREVER, since it will be a very big double value after
// converting it to double by JS_ValueToNumber on android.
// Then cast it to unsigned int, the value will be 0. The schedule will not be able to work.
// I don't know why this occurs only on android.
// So instead of passing -1 to it, I assign it with max value of unsigned int in c++.
cc.REPEAT_FOREVER = 0xffffffff;

cc.MENU_STATE_WAITING = 0;
cc.MENU_STATE_TRACKING_TOUCH = 1;
cc.MENU_HANDLER_PRIORITY = -128;
cc.DEFAULT_PADDING = 5;

cc.Scheduler.PRIORITY_SYSTEM	= -2147483648;

var _Class = cc.Texture2D;
_Class.PIXEL_FORMAT_AUTO = 0;
_Class.PIXEL_FORMAT_RGBA8888 = 2;
_Class.PIXEL_FORMAT_RGB888 = 3;
_Class.PIXEL_FORMAT_RGB565 = 4;
_Class.PIXEL_FORMAT_A8 = 5;
_Class.PIXEL_FORMAT_I8 = 6;
_Class.PIXEL_FORMAT_AI88 = 7;
_Class.PIXEL_FORMAT_RGBA4444 = 8;
_Class.PIXEL_FORMAT_RGB5A1 = 9;
_Class.PIXEL_FORMAT_PVRTC4 = 10;
_Class.PIXEL_FORMAT_PVRTC2 = 11;
_Class.PIXEL_FORMAT_DEFAULT = _Class.PIXEL_FORMAT_RGBA8888;
_Class.defaultPixelFormat = _Class.PIXEL_FORMAT_DEFAULT;

// For blend
cc.ONE = 1;
cc.ZERO = 0;
cc.SRC_ALPHA = 0x0302;
cc.SRC_ALPHA_SATURATE = 0x308;
cc.SRC_COLOR = 0x300;
cc.DST_ALPHA = 0x304;
cc.DST_COLOR = 0x306;
cc.ONE_MINUS_SRC_ALPHA = 0x0303;
cc.ONE_MINUS_SRC_COLOR = 0x301;
cc.ONE_MINUS_DST_ALPHA = 0x305;
cc.ONE_MINUS_DST_COLOR = 0x0307;
cc.ONE_MINUS_CONSTANT_ALPHA	= 0x8004;
cc.ONE_MINUS_CONSTANT_COLOR	= 0x8002;

cc.VERTEX_ATTRIB_FLAG_NONE = 0;
cc.VERTEX_ATTRIB_FLAG_POSITION = 1 << 0;
cc.VERTEX_ATTRIB_FLAG_COLOR = 1 << 1;
cc.VERTEX_ATTRIB_FLAG_TEX_COORDS = 1 << 2;
cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = ( cc.VERTEX_ATTRIB_FLAG_POSITION | cc.VERTEX_ATTRIB_FLAG_COLOR | cc.VERTEX_ATTRIB_FLAG_TEX_COORDS );
cc.GL_ALL = 0;

cc.VERTEX_ATTRIB_POSITION = 0;
cc.VERTEX_ATTRIB_COLOR = 1;
cc.VERTEX_ATTRIB_TEX_COORDS = 2;
cc.VERTEX_ATTRIB_MAX = 3;

cc.UNIFORM_PMATRIX = 0;
cc.UNIFORM_MVMATRIX = 1;
cc.UNIFORM_MVPMATRIX = 2;
cc.UNIFORM_TIME = 3;
cc.UNIFORM_SINTIME = 4;
cc.UNIFORM_COSTIME = 5;
cc.UNIFORM_RANDOM01 = 6;
cc.UNIFORM_SAMPLER = 7;
cc.UNIFORM_MAX = 8;

cc.UNIFORM_PMATRIX_S = "CC_PMatrix";
cc.UNIFORM_MVMATRIX_S = "CC_MVMatrix";
cc.UNIFORM_MVPMATRIX_S = "CC_MVPMatrix";
cc.UNIFORM_TIME_S = "CC_Time";
cc.UNIFORM_SINTIME_S = "CC_SinTime";
cc.UNIFORM_COSTIME_S = "CC_CosTime";
cc.UNIFORM_RANDOM01_S = "CC_Random01";
cc.UNIFORM_SAMPLER_S = "CC_Texture0";
cc.UNIFORM_ALPHA_TEST_VALUE_S = "CC_alpha_value";

cc.ITEM_SIZE = 32;

cc.CURRENT_ITEM = 0xc0c05001;
cc.ZOOM_ACTION_TAG = 0xc0c05002;
cc.NORMAL_TAG = 8801;
cc.SELECTED_TAG = 8802;
cc.DISABLE_TAG = 8803;


cc.stencilBits = -1;           //CCClippingNode.js

cc.g_NumberOfDraws = 0;        //CCDirector.js

cc.PRIORITY_NON_SYSTEM = cc.PRIORITY_SYSTEM + 1;          //CCScheduler.js

cc.Node.ON_ENTER = 0;          //CCNode.js
cc.Node.ON_EXIT = 1;
cc.Node.ON_ENTER_TRANSITION_DID_FINISH = 2;
cc.Node.ON_EXIT_TRANSITOIN_DID_START = 3;
cc.Node.ON_CLEAN_UP = 4;
cc.s_globalOrderOfArrival = 1;

cc.Event.TOUCH = 0;                  //CCEvent.js
cc.Event.KEYBOARD = 1;
cc.Event.ACCELERATION = 2;
cc.Event.MOUSE = 3;
cc.Event.CUSTOM = 4;
cc.EventMouse.NONE = 0;
cc.EventMouse.DOWN = 1;
cc.EventMouse.UP = 2;
cc.EventMouse.MOVE = 3;
cc.EventMouse.SCROLL = 4;
cc.EventMouse.BUTTON_LEFT = 0;
cc.EventMouse.BUTTON_RIGHT = 2;
cc.EventMouse.BUTTON_MIDDLE = 1;
cc.EventMouse.BUTTON_4 = 3;
cc.EventMouse.BUTTON_5 = 4;
cc.EventMouse.BUTTON_6 = 5;
cc.EventMouse.BUTTON_7 = 6;
cc.EventMouse.BUTTON_8 = 7;
cc.EventTouch.MAX_TOUCHES = 5;

cc.DEFAULT_SPRITE_BATCH_CAPACITY = 29;                  //CCSpriteBatchNode.js

cc.ParticleSystem.SHAPE_MODE = 0;            //CCParticleSystem.js
cc.ParticleSystem.TEXTURE_MODE = 1;
cc.ParticleSystem.STAR_SHAPE = 0;
cc.ParticleSystem.BALL_SHAPE = 1;

cc.ProgressTimer.TEXTURE_COORDS_COUNT = 4;       //CCProgressTimer.js
cc.ProgressTimer.TEXTURE_COORDS = 0x4b;

cc.IMAGE_FORMAT_RAWDATA = 2;           //CCRenderTexture.js

cc.TMXLayerInfo.ATTRIB_NONE = 1 << 0;            //CCTMXXMLParser.js
cc.TMXLayerInfo.ATTRIB_BASE64 = 1 << 1;
cc.TMXLayerInfo.ATTRIB_GZIP = 1 << 2;
cc.TMXLayerInfo.ATTRIB_ZLIB = 1 << 3;
cc.TMX_PROPERTY_NONE = 0;
cc.TMX_PROPERTY_MAP = 1;
cc.TMX_PROPERTY_LAYER = 2;
cc.TMX_PROPERTY_OBJECTGROUP = 3;
cc.TMX_PROPERTY_OBJECT = 4;
cc.TMX_PROPERTY_TILE = 5;

cc.SCENE_FADE = 4208917214;             //CCTransition.js

cc.SCENE_RADIAL = 0xc001;               //CCTransitionProgress.js


cc.KEY = {
    //android
    back:8,
    menu:4199,
    //desktop
    backspace:7,
    tab:8,
    enter:32,
    shift:12,
    ctrl:13,
    alt:14,
    pause:1,
    capslock:11,
    escape:6,
    pageup:35,
    pagedown:41,
    end:21,
    home:33,
    left:23,
    up:25,
    right:24,
    down:26,
    insert:17,
    Delete:20,
    0:73,
    1:74,
    2:75,
    3:76,
    4:77,
    5:78,
    6:79,
    7:80,
    8:81,
    9:82,
    a:121,
    b:122,
    c:123,
    d:124,
    e:125,
    f:126,
    g:127,
    h:128,
    i:129,
    j:130,
    k:131,
    l:132,
    m:133,
    n:134,
    o:135,
    p:136,
    q:137,
    r:138,
    s:139,
    t:140,
    u:141,
    v:142,
    w:143,
    x:144,
    y:145,
    z:146,
    '*':30,
    '+':28,
    '-':29,
    'numdel':71,
    '/':31,
    f1:44,
    f2:45,
    f3:46,
    f4:47,
    f5:48,
    f6:49,
    f7:50,
    f8:51,
    f9:52,
    f10:53,
    f11:54,
    f12:55,
    numlock:27,
    scrolllock:2,
    semicolon:84,
    ',':69,
    equal:86,
    '=':86,
    ';':84,
    comma:69,
    '.':71,
    period:71,
    forwardslash:72,
    grave:120,
    '[':116,
    openbracket:116,
    ']':118,
    closebracket:118,
    backslash:117,
    quote:58,
    space:56
};
//
// CCMacro.js export
//

/**
 * @constant
 * @type Number
 */
cc.INVALID_INDEX = -1;

/**
 * PI is the ratio of a circle's circumference to its diameter.
 * @constant
 * @type Number
 */
cc.PI = Math.PI;

/**
 * @constant
 * @type Number
 */
cc.FLT_MAX = parseFloat('3.402823466e+38F');

/**
 * @constant
 * @type Number
 */
cc.RAD = cc.PI / 180;

/**
 * @constant
 * @type Number
 */
cc.DEG = 180 / cc.PI;

/**
 * maximum unsigned int value
 * @constant
 * @type Number
 */
cc.UINT_MAX = 0xffffffff;

/**
 * <p>
 * simple macro that swaps 2 variables<br/>
 *  modified from c++ macro, you need to pass in the x and y variables names in string, <br/>
 *  and then a reference to the whole object as third variable
 * </p>
 * @param x
 * @param y
 * @param ref
 * @function
 * @deprecated
 */
cc.swap = function (x, y, ref) {
	if ((typeof ref) == 'object' && (typeof ref.x) != 'undefined' && (typeof ref.y) != 'undefined') {
		var tmp = ref[x];
		ref[x] = ref[y];
		ref[y] = tmp;
	} else
		cc.log("cc.swap is being modified from original macro, please check usage");
};

/**
 * <p>
 *     Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
 * </p>
 * @param {Number} a number A
 * @param {Number} b number B
 * @param {Number} r ratio between 0 and 1
 * @function
 * @example
 * cc.lerp(2,10,0.5)//returns 6<br/>
 * cc.lerp(2,10,0.2)//returns 3.6
 */
cc.lerp = function (a, b, r) {
	return a + (b - a) * r;
};

/**
 * get a random number from 0 to 0xffffff
 * @function
 * @returns {number}
 */
cc.rand = function () {
	return Math.random() * 0xffffff;
};

/**
 * returns a random float between -1 and 1
 * @return {Number}
 * @function
 */
cc.randomMinus1To1 = function () {
	return (Math.random() - 0.5) * 2;
};

/**
 * returns a random float between 0 and 1
 * @return {Number}
 * @function
 */
cc.random0To1 = Math.random;

/**
 * converts degrees to radians
 * @param {Number} angle
 * @return {Number}
 * @function
 */
cc.degreesToRadians = function (angle) {
	return angle * cc.RAD;
};

/**
 * converts radians to degrees
 * @param {Number} angle
 * @return {Number}
 * @function
 */
cc.radiansToDegress = function (angle) {
	return angle * cc.DEG;
};

/**
 * @constant
 * @type Number
 */
cc.REPEAT_FOREVER = Number.MAX_VALUE - 1;

/**
 * default gl blend src function. Compatible with premultiplied alpha images.
 * @constant
 * @type Number
 */
cc.BLEND_SRC = cc.OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA ? 1 : 0x0302;

/**
 * default gl blend dst function. Compatible with premultiplied alpha images.
 * @constant
 * @type Number
 */
cc.BLEND_DST = 0x0303;

/**
 * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
 * @param {cc.Node} node setup node
 * @function
 */
cc.nodeDrawSetup = function (node) {
	//cc.glEnable(node._glServerState);
	if (node._shaderProgram) {
		//cc._renderContext.useProgram(node._shaderProgram._programObj);
		node._shaderProgram.use();
		node._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4();
	}
};

/**
 * <p>
 *     GL states that are enabled:<br/>
 *       - GL_TEXTURE_2D<br/>
 *       - GL_VERTEX_ARRAY<br/>
 *       - GL_TEXTURE_COORD_ARRAY<br/>
 *       - GL_COLOR_ARRAY<br/>
 * </p>
 * @function
 */
cc.enableDefaultGLStates = function () {
	//TODO OPENGL STUFF
	/*
	 glEnableClientState(GL_VERTEX_ARRAY);
	 glEnableClientState(GL_COLOR_ARRAY);
	 glEnableClientState(GL_TEXTURE_COORD_ARRAY);
	 glEnable(GL_TEXTURE_2D);*/
};

/**
 * <p>
 *   Disable default GL states:<br/>
 *     - GL_TEXTURE_2D<br/>
 *     - GL_TEXTURE_COORD_ARRAY<br/>
 *     - GL_COLOR_ARRAY<br/>
 * </p>
 * @function
 */
cc.disableDefaultGLStates = function () {
	//TODO OPENGL
	/*
	 glDisable(GL_TEXTURE_2D);
	 glDisableClientState(GL_COLOR_ARRAY);
	 glDisableClientState(GL_TEXTURE_COORD_ARRAY);
	 glDisableClientState(GL_VERTEX_ARRAY);
	 */
};

/**
 * <p>
 *  Increments the GL Draws counts by one.<br/>
 *  The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.<br/>
 * </p>
 * @param {Number} addNumber
 * @function
 */
cc.incrementGLDraws = function (addNumber) {
	cc.g_NumberOfDraws += addNumber;
};

/**
 * @constant
 * @type Number
 */
cc.FLT_EPSILON = 0.0000001192092896;

/**
 * <p>
 *     On Mac it returns 1;<br/>
 *     On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
 * </p>
 * @function
 */
cc.contentScaleFactor = cc.IS_RETINA_DISPLAY_SUPPORTED ? function () {
	return cc.director.getContentScaleFactor();
} : function () {
	return 1;
};

/**
 * Converts a Point in points to pixels
 * @param {cc.Point} points
 * @return {cc.Point}
 * @function
 */
cc.pointPointsToPixels = function (points) {
	var scale = cc.contentScaleFactor();
	return cc.p(points.x * scale, points.y * scale);
};

/**
 * Converts a Point in pixels to points
 * @param {Point} pixels
 * @function
 */
cc.pointPixelsToPoints = function (pixels) {
	var scale = cc.contentScaleFactor();
	return cc.p(pixels.x / scale, pixels.y / scale);
};

cc._pointPixelsToPointsOut = function(pixels, outPoint){
	var scale = cc.contentScaleFactor();
	outPoint.x = pixels.x / scale;
	outPoint.y = pixels.y / scale;
};

/**
 * Converts a Size in points to pixels
 * @param {cc.Size} sizeInPoints
 * @return {cc.Size}
 * @function
 */
cc.sizePointsToPixels = function (sizeInPoints) {
	var scale = cc.contentScaleFactor();
	return cc.size(sizeInPoints.width * scale, sizeInPoints.height * scale);
};

/**
 * Converts a size in pixels to points
 * @param {cc.Size} sizeInPixels
 * @return {cc.Size}
 * @function
 */
cc.sizePixelsToPoints = function (sizeInPixels) {
	var scale = cc.contentScaleFactor();
	return cc.size(sizeInPixels.width / scale, sizeInPixels.height / scale);
};

cc._sizePixelsToPointsOut = function (sizeInPixels, outSize) {
	var scale = cc.contentScaleFactor();
	outSize.width = sizeInPixels.width / scale;
	outSize.height = sizeInPixels.height / scale;
};

/**
 * Converts a rect in pixels to points
 * @param {cc.Rect} pixel
 * @function
 */
cc.rectPixelsToPoints = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (pixel) {
	var scale = cc.contentScaleFactor();
	return cc.rect(pixel.x / scale, pixel.y / scale,
		pixel.width / scale, pixel.height / scale);
} : function (p) {
	return p;
};

/**
 * Converts a rect in points to pixels
 * @param {cc.Rect} point
 * @function
 */
cc.rectPointsToPixels = cc.IS_RETINA_DISPLAY_SUPPORTED ? function (point) {
	var scale = cc.contentScaleFactor();
	return cc.rect(point.x * scale, point.y * scale,
		point.width * scale, point.height * scale);
} : function (p) {
	return p;
};

cc.checkGLErrorDebug = function () {
	if (cc.renderMode == cc._RENDER_TYPE_WEBGL) {
		var _error = cc._renderContext.getError();
		if (_error) {
			cc.log(CC._localZOrder.checkGLErrorDebug, _error);
		}
	}
};


//
// Reusable objects
//
cc._reuse_p = [ {x:0, y:0}, {x:0,y:0}, {x:0,y:0}, {x:0,y:0} ];
cc._reuse_p_index = 0;
cc._reuse_size = {width:0, height:0};
cc._reuse_rect = {x:0, y:0, width:0, height:0};
cc._reuse_color3b = {r:255, g:255, b:255 };
cc._reuse_color4b = {r:255, g:255, b:255, a:255 };



//
// Basic sturcture : Point
//
cc.p = function( x, y )
{
    if (x == undefined)
        return {x: 0, y: 0};
    if (y == undefined)
        return {x: x.x, y: x.y};
    return {x:x, y:y};
};
cc._p = function( x, y )
{
    if( cc._reuse_p_index == cc._reuse_p.length )
        cc._reuse_p_index = 0;

    var p = cc._reuse_p[ cc._reuse_p_index];
    cc._reuse_p_index++;
    p.x = x;
    p.y = y;
    return p;
};

cc.pointEqualToPoint = function (point1, point2) {
    return ((point1.x == point2.x) && (point1.y == point2.y));
};

cc.PointZero = function () {
    return cc.p(0, 0);
};


/**
 * Unrotates two points.
 * @param  {cc.Point} v1
 * @param  {cc.Point} v2
 * @return {cc.Point}
 */
cc.pUnrotate = function (v1, v2) {
    return cc.p(v1.x * v2.x + v1.y * v2.y, v1.y * v2.x - v1.x * v2.y);
};

/**
 * Converts radians to a normalized vector.
 * @param {Number} a
 * @return {cc.Point}
 */
cc.pForAngle = function (a) {
    return cc.p(Math.cos(a), Math.sin(a));
};

/**
 * Converts a vector to radians.
 * @param {cc.Point} v
 * @return {Number}
 */
cc.pToAngle = function (v) {
    return Math.atan2(v.y, v.x);
};

/**
 * Clamp a value between from and to.
 * @param {Number} value
 * @param {Number} min_inclusive
 * @param {Number} max_inclusive
 * @return {Number}
 */
cc.clampf = function (value, min_inclusive, max_inclusive) {
    if (min_inclusive > max_inclusive) {
        var temp = min_inclusive;
        min_inclusive = max_inclusive;
        max_inclusive = temp;
    }
    return value < min_inclusive ? min_inclusive : value < max_inclusive ? value : max_inclusive;
};

/**
 * Quickly convert cc.Size to a cc.Point
 * @param {cc.Size} s
 * @return {cc.Point}
 */
cc.pFromSize = function (s) {
    return cc.p(s.width, s.height);
};

/**
 * Run a math operation function on each point component <br />
 * Math.abs, Math.fllor, Math.ceil, Math.round.
 * @param {cc.Point} p
 * @param {Function} opFunc
 * @return {cc.Point}
 * @example
 * //For example: let's try to take the floor of x,y
 * var p = cc.pCompOp(cc.p(10,10),Math.abs);
 */
cc.pCompOp = function (p, opFunc) {
    return cc.p(opFunc(p.x), opFunc(p.y));
};

/**
 * Linear Interpolation between two points a and b
 * alpha == 0 ? a
 * alpha == 1 ? b
 * otherwise a value between a..b
 * @param {cc.Point} a
 * @param {cc.Point} b
 * @param {Number} alpha
 * @return {cc.pAdd}
 */
cc.pLerp = function (a, b, alpha) {
    return cc.pAdd(cc.pMult(a, 1 - alpha), cc.pMult(b, alpha));
};

/**
 * @param {cc.Point} a
 * @param {cc.Point} b
 * @param {Number} variance
 * @return {Boolean} if points have fuzzy equality which means equal with some degree of variance.
 */
cc.pFuzzyEqual = function (a, b, variance) {
    if (a.x - variance <= b.x && b.x <= a.x + variance) {
        if (a.y - variance <= b.y && b.y <= a.y + variance)
            return true;
    }
    return false;
};

/**
 * Multiplies a nd b components, a.x*b.x, a.y*b.y
 * @param {cc.Point} a
 * @param {cc.Point} b
 * @return {cc.Point}
 */
cc.pCompMult = function (a, b) {
    return cc.p(a.x * b.x, a.y * b.y);
};

/**
 * @param {cc.Point} a
 * @param {cc.Point} b
 * @return {Number} the signed angle in radians between two vector directions
 */
cc.pAngleSigned = function (a, b) {
    var a2 = cc.pNormalize(a);
    var b2 = cc.pNormalize(b);
    var angle = Math.atan2(a2.x * b2.y - a2.y * b2.x, cc.pDot(a2, b2));
    if (Math.abs(angle) < cc.POINT_EPSILON)
        return 0.0;
    return angle;
};

/**
 * @param {cc.Point} a
 * @param {cc.Point} b
 * @return {Number} the angle in radians between two vector directions
 */
cc.pAngle = function (a, b) {
    var angle = Math.acos(cc.pDot(cc.pNormalize(a), cc.pNormalize(b)));
    if (Math.abs(angle) < cc.POINT_EPSILON) return 0.0;
    return angle;
};

/**
 * Rotates a point counter clockwise by the angle around a pivot
 * @param {cc.Point} v v is the point to rotate
 * @param {cc.Point} pivot pivot is the pivot, naturally
 * @param {Number} angle angle is the angle of rotation cw in radians
 * @return {cc.Point} the rotated point
 */
cc.pRotateByAngle = function (v, pivot, angle) {
    var r = cc.pSub(v, pivot);
    var cosa = Math.cos(angle), sina = Math.sin(angle);
    var t = r.x;
    r.x = t * cosa - r.y * sina + pivot.x;
    r.y = t * sina + r.y * cosa + pivot.y;
    return r;
};

/**
 * A general line-line intersection test
 * @param {cc.Point} A A is the startpoint for the first line P1 = (p1 - p2).
 * @param {cc.Point} B B is the endpoint for the first line P1 = (p1 - p2).
 * @param {cc.Point} C C is the startpoint for the second line P2 = (p3 - p4).
 * @param {cc.Point} D D is the endpoint for the second line P2 = (p3 - p4).
 * @param {cc.Point} retP retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)), <br />
 * retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)).
 * @return {Boolean}
 * indicating successful intersection of a line<br />
 * note that to truly test intersection for segments we have to make<br />
 * sure that s & t lie within [0..1] and for rays, make sure s & t > 0<br />
 * the hit point is        p3 + t * (p4 - p3);<br />
 * the hit point also is    p1 + s * (p2 - p1);
 */
cc.pLineIntersect = function (A, B, C, D, retP) {
    if ((A.x == B.x && A.y == B.y) || (C.x == D.x && C.y == D.y)) {
        return false;
    }
    var BAx = B.x - A.x;
    var BAy = B.y - A.y;
    var DCx = D.x - C.x;
    var DCy = D.y - C.y;
    var ACx = A.x - C.x;
    var ACy = A.y - C.y;

    var denom = DCy * BAx - DCx * BAy;

    retP.x = DCx * ACy - DCy * ACx;
    retP.y = BAx * ACy - BAy * ACx;

    if (denom == 0) {
        if (retP.x == 0 || retP.y == 0) {
            // Lines incident
            return true;
        }
        // Lines parallel and not incident
        return false;
    }

    retP.x = retP.x / denom;
    retP.y = retP.y / denom;

    return true;
};

/**
 * ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D.
 * @param {cc.Point} A
 * @param {cc.Point} B
 * @param {cc.Point} C
 * @param {cc.Point} D
 * @return {Boolean}
 */
cc.pSegmentIntersect = function (A, B, C, D) {
    var retP = cc.p(0, 0);
    if (cc.pLineIntersect(A, B, C, D, retP))
        if (retP.x >= 0.0 && retP.x <= 1.0 && retP.y >= 0.0 && retP.y <= 1.0)
            return true;
    return false;
};


/**
 * ccpIntersectPoint return the intersection point of line A-B, C-D
 * @param {cc.Point} A
 * @param {cc.Point} B
 * @param {cc.Point} C
 * @param {cc.Point} D
 * @return {cc.Point}
 */
cc.pIntersectPoint = function (A, B, C, D) {
    var retP = cc.p(0, 0);

    if (cc.pLineIntersect(A, B, C, D, retP)) {
        // Point of intersection
        var P = cc.p(0, 0);
        P.x = A.x + retP.x * (B.x - A.x);
        P.y = A.y + retP.x * (B.y - A.y);
        return P;
    }

    return cc.p(0,0);
};

/**
 * check to see if both points are equal
 * @param {cc.Point} A A ccp a
 * @param {cc.Point} B B ccp b to be compared
 * @return {Boolean} the true if both ccp are same
 */
cc.pSameAs = function (A, B) {
    if ((A != null) && (B != null)) {
        return (A.x == B.x && A.y == B.y);
    }
    return false;
};

/**
  * sets the position of the point to 0
  */
cc.pZeroIn = function(v) {
    v.x = 0;
    v.y = 0;
};

/**
  * copies the position of one point to another
  */
cc.pIn = function(v1, v2) {
    v1.x = v2.x;
    v1.y = v2.y;
};

/**
  * multiplies the point with the given factor (inplace)
  */
cc.pMultIn = function(point, floatVar) {
    point.x *= floatVar;
    point.y *= floatVar;
};

/**
  * subtracts one point from another (inplace)
  */
cc.pSubIn = function(v1, v2) {
    v1.x -= v2.x;
    v1.y -= v2.y;
};

/**
  * adds one point to another (inplace)
  */
cc.pAddIn = function(v1, v2) {
    v1.x += v2.x;
    v1.y += v2.y;
};

/**
  * normalizes the point (inplace)
  */
cc.pNormalizeIn = function(v) {
    cc.pMultIn(v, 1.0 / Math.sqrt(v.x * v.x + v.y * v.y));
};

//
// Grid
//
cc._g = function( x, y )
{
    cc._reuse_grid.x = x;
    cc._reuse_grid.y = y;
    return cc._reuse_grid;
};

//
// Basic sturcture : Size
//
cc.size = function(w,h)
{
    return {width:w, height:h};
};
cc._size = function(w,h)
{
    cc._reuse_size.width = w;
    cc._reuse_size.height = h;
    return cc._reuse_size;
};
cc.sizeEqualToSize = function (size1, size2)
{
    return ((size1.width == size2.width) && (size1.height == size2.height));
};

cc.SizeZero = function () {
    return cc.size(0, 0);
};

/**
 * create a cc.rect object
 * @param {Number|cc.point|cc.rect} [x] a Number value as x or a cc.point object as origin or a cc.rect clone object
 * @param {Number|cc.size} [y] x1 a Number value as y or a cc.size object as size
 * @param {Number} [w]
 * @param {Number} [h]
 * @return {Object} a cc.rect object
 */
cc.rect = function(x,y,w,h)
{
    var argLen = arguments.length;
    if (argLen === 0)
        return { x: 0, y: 0, width: 0, height: 0 };

    if (argLen === 1)
        return { x: x.x, y: x.y, width: x.width, height: x.height };

    if (argLen === 2)
        return { x: x.x, y: x.y, width: y.width, height: y.height };

    if (argLen === 4)
        return { x: x, y: y, width: w, height: h };

    throw "unknown argument type";
};
cc._rect = function(x,y,w,h)
{
    cc._reuse_rect.x = x;
    cc._reuse_rect.y = y;
    cc._reuse_rect.width = w;
    cc._reuse_rect.height = h;
    return cc._reuse_rect;
};
cc.rectEqualToRect = function (rect1, rect2) {
    return ( rect1.x==rect2.x && rect1.y==rect2.y && rect1.width==rect2.width && rect1.height==rect2.height);
};

cc.rectContainsRect = function (rect1, rect2) {
    if ((rect1.x >= rect2.x) || (rect1.y >= rect2.y) ||
        ( rect1.x + rect1.width <= rect2.x + rect2.width) ||
        ( rect1.y + rect1.height <= rect2.y + rect2.height))
        return false;
    return true;
};

cc.rectGetMaxX = function (rect) {
    return (rect.x + rect.width);
};

cc.rectGetMidX = function (rect) {
    return (rect.x + rect.width / 2.0);
};

cc.rectGetMinX = function (rect) {
    return rect.x;
};

cc.rectGetMaxY = function (rect) {
    return(rect.y + rect.height);
};

cc.rectGetMidY = function (rect) {
    return rect.y + rect.height / 2.0;
};

cc.rectGetMinY = function (rect) {
    return rect.y;
};

cc.rectContainsPoint = function (rect, point) {
    var ret = false;
    if (point.x >= rect.x && point.x <= rect.x + rect.width &&
        point.y >= rect.y && point.y <= rect.y + rect.height) {
        ret = true;
    }
    return ret;
};

cc.rectIntersectsRect = function( rectA, rectB )
{
    var bool = ! (  rectA.x > rectB.x + rectB.width ||
                    rectA.x + rectA.width < rectB.x ||
                    rectA.y > rectB.y +rectB.height ||
                    rectA.y + rectA.height < rectB.y );

    return bool;
};

cc.rectUnion = function (rectA, rectB) {
    var rect = cc.rect(0, 0, 0, 0);
    rect.x = Math.min(rectA.x, rectB.x);
    rect.y = Math.min(rectA.y, rectB.y);
    rect.width = Math.max(rectA.x + rectA.width, rectB.x + rectB.width) - rect.x;
    rect.height = Math.max(rectA.y + rectA.height, rectB.y + rectB.height) - rect.y;
    return rect;
};

cc.rectIntersection = function (rectA, rectB) {
    var intersection = cc.rect(
        Math.max(rectA.x, rectB.x),
        Math.max(rectA.y, rectB.y),
        0, 0);

    intersection.width = Math.min(rectA.x+rectA.width, rectB.x+rectB.width) - intersection.x;
    intersection.height = Math.min(rectA.y+rectA.height, rectB.y+rectB.height) - intersection.y;
    return intersection;
};

cc.RectZero = function () {
    return cc.rect(0, 0, 0, 0);
};

// Basic sturcture : Color
cc.Color = function (r, g, b, a) {
    this.r = r || 0;
    this.g = g || 0;
    this.b = b || 0;
    this.a = a || 0;
};

/**
 *
 * @param {Number|String|cc.Color} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number} a
 * @returns {cc.Color}
 */
cc.color = function (r, g, b, a) {
    if (r === undefined)
        return {r: 0, g: 0, b: 0, a: 255};
    if (typeof r === "string")
        return cc.hexToColor(r);
    if (typeof r === "object")
        return {r: r.r, g: r.g, b: r.b, a: r.a};
    return  {r: r, g: g, b: b, a: a };
};

/**
 * returns true if both ccColor3B are equal. Otherwise it returns false.
 * @param {cc.Color} color1
 * @param {cc.Color} color2
 * @return {Boolean}  true if both ccColor3B are equal. Otherwise it returns false.
 */
cc.colorEqual = function(color1, color2){
    return color1.r === color2.r && color1.g === color2.g && color1.b === color2.b;
};

/**
 * convert a string of color for style to Color.
 * e.g. "#ff06ff"  to : cc.color(255,6,255)
 * @param {String} hex
 * @return {cc.Color}
 */
cc.hexToColor = function (hex) {
    hex = hex.replace(/^#?/, "0x");
    var c = parseInt(hex);
    var r = c >> 16;
    var g = (c >> 8) % 256;
    var b = c % 256;
    return cc.color(r, g, b);
};

/**
 * convert Color to a string of color for style.
 * e.g.  cc.color(255,6,255)  to : "#ff06ff"
 * @param {cc.Color} color
 * @return {String}
 */
cc.colorToHex = function (color) {
    var hR = color.r.toString(16);
    var hG = color.g.toString(16);
    var hB = color.b.toString(16);
    var hex = "#" + (color.r < 16 ? ("0" + hR) : hR) + (color.g < 16 ? ("0" + hG) : hG) + (color.b < 16 ? ("0" + hB) : hB);
    return hex;
};

/**
 * White color (255, 255, 255, 255)
 * @returns {cc.Color}
 * @private
 */
cc.color._getWhite = function(){
    return cc.color(255, 255, 255, 255);
};

/**
 *  Yellow color (255, 255, 0, 255)
 * @returns {cc.Color}
 * @private
 */
cc.color._getYellow = function () {
    return cc.color(255, 255, 0, 255);
};

/**
 *  Blue color (0, 0, 255, 255)
 * @type {cc.Color}
 * @private
 */
cc.color._getBlue = function () {
    return  cc.color(0, 0, 255, 255);
};

/**
 *  Green Color (0, 255, 0, 255)
 * @type {cc.Color}
 * @private
 */
cc.color._getGreen = function () {
    return cc.color(0, 255, 0, 255);
};

/**
 *  Red Color (255, 0, 0, 255)
 * @type {cc.Color}
 * @private
 */
cc.color._getRed = function () {
    return cc.color(255, 0, 0, 255);
};

/**
 *  Magenta Color (255, 0, 255, 255)
 * @type {cc.Color}
 * @private
 */
cc.color._getMagenta = function () {
    return cc.color(255, 0, 255, 255);
};

/**
 *  Black Color (0, 0, 0, 255)
 * @type {cc.Color}
 * @private
 */
cc.color._getBlack = function () {
    return cc.color(0, 0, 0, 255);
};

/**
 *  Orange Color (255, 127, 0, 255)
 * @type {cc.Color}
 * @private
 */
cc.color._getOrange = function () {
    return cc.color(255, 127, 0, 255);
};

/**
 *  Gray Color (166, 166, 166, 255)
 * @type {cc.Color}
 * @private
 */
cc.color._getGray = function () {
    return cc.color(166, 166, 166, 255);
};
var _proto = cc.color;
/** @expose */
_proto.WHITE;
cc.defineGetterSetter(_proto, "WHITE", _proto._getWhite);
/** @expose */
_proto.YELLOW;
cc.defineGetterSetter(_proto, "YELLOW", _proto._getYellow);
/** @expose */
_proto.BLUE;
cc.defineGetterSetter(_proto, "BLUE", _proto._getBlue);
/** @expose */
_proto.GREEN;
cc.defineGetterSetter(_proto, "GREEN", _proto._getGreen);
/** @expose */
_proto.RED;
cc.defineGetterSetter(_proto, "RED", _proto._getRed);
/** @expose */
_proto.MAGENTA;
cc.defineGetterSetter(_proto, "MAGENTA", _proto._getMagenta);
/** @expose */
_proto.BLACK;
cc.defineGetterSetter(_proto, "BLACK", _proto._getBlack);
/** @expose */
_proto.ORANGE;
cc.defineGetterSetter(_proto, "ORANGE", _proto._getOrange);
/** @expose */
_proto.GRAY;
cc.defineGetterSetter(_proto, "GRAY", _proto._getGray);


/**
 * Associates a base class with a native superclass
 * @function
 * @param {object} jsobj subclass
 * @param {object} klass superclass
 */
cc.associateWithNative = function( jsobj, superclass_or_instance ) {};

//
// JSB supports 2 official ways to create subclasses
//
// 1) Google "subclasses" borrowed from closure library
// This is the recommended way to do it
//
cc.inherits = function (childCtor, parentCtor) {
	/** @constructor */
	function tempCtor() {};
	tempCtor.prototype = parentCtor.prototype;
	childCtor.superClass_ = parentCtor.prototype;
	childCtor.prototype = new tempCtor();
	childCtor.prototype.constructor = childCtor;

    // Copy "static" method, but doesn't generate subclasses.
//	for( var i in parentCtor ) {
//		childCtor[ i ] = parentCtor[ i ];
//	}
};
cc.base = function(me, opt_methodName, var_args) {
	var caller = arguments.callee.caller;
	if (caller.superClass_) {
		// This is a constructor. Call the superclass constructor.
		ret =  caller.superClass_.constructor.apply( me, Array.prototype.slice.call(arguments, 1));
		return ret;
	}

	var args = Array.prototype.slice.call(arguments, 2);
	var foundCaller = false;
	for (var ctor = me.constructor;
        ctor; ctor = ctor.superClass_ && ctor.superClass_.constructor) {
		if (ctor.prototype[opt_methodName] === caller) {
			foundCaller = true;
		} else if (foundCaller) {
			return ctor.prototype[opt_methodName].apply(me, args);
		}
	}

	// If we did not find the caller in the prototype chain,
	// then one of two things happened:
	// 1) The caller is an instance method.
	// 2) This method was not called by the right caller.
	if (me[opt_methodName] === caller) {
		return me.constructor.prototype[opt_methodName].apply(me, args);
	} else {
		throw Error(
					'cc.base called from a method of one name ' +
					'to a method of a different name');
	}
};


//
// 2) Using "extend" subclassing
// Simple JavaScript Inheritance By John Resig http://ejohn.org/
//
cc.Class = function(){};
cc.Class.extend = function (prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
    fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
        // Check if we're overwriting an existing function
        prototype[name] = typeof prop[name] == "function" &&
            typeof _super[name] == "function" && fnTest.test(prop[name]) ?
            (function (name, fn) {
                return function () {
                    var tmp = this._super;

                    // Add a new ._super() method that is the same method
                    // but on the super-class
                    this._super = _super[name];

                    // The method only need to be bound temporarily, so we
                    // remove it when we're done executing
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;

                    return ret;
                };
            })(name, prop[name]) :
            prop[name];
    }

    // The dummy class constructor
    function Class() {
        // All construction is actually done in the init method
        if (!initializing) {
            if (!this.ctor) {
                if (this.__nativeObj)
                    cc.log("No ctor function found! Please check whether `classes_need_extend` section in `ini` file like which in `tools/tojs/cocos2dx.ini`");
            }
            else {
                this.ctor.apply(this, arguments);
            }
        }
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
};

cc.Node.extend = cc.Class.extend;
cc.Layer.extend = cc.Class.extend;
cc.LayerGradient.extend = cc.Class.extend;
cc.LayerColor.extend = cc.Class.extend;
cc.Sprite.extend = cc.Class.extend;
cc.SpriteFrame.extend = cc.Class.extend;
cc.Menu.extend = cc.Class.extend;
cc.MenuItem.extend = cc.Class.extend;
cc.MenuItemFont.extend = cc.Class.extend;
cc.MenuItemToggle.extend = cc.Class.extend;
cc.Scene.extend = cc.Class.extend;
cc.DrawNode.extend = cc.Class.extend;
cc.Component.extend = cc.Class.extend;
cc.GridBase.extend = cc.Class.extend;
cc.Grid3D.extend = cc.Class.extend;
cc.TiledGrid3D.extend = cc.Class.extend;
cc.MotionStreak.extend = cc.Class.extend;
cc.ParticleBatchNode.extend = cc.Class.extend;
cc.ParticleSystem.extend = cc.Class.extend;
cc.PhysicsSprite.extend = cc.Class.extend;
cc.TextFieldTTF.extend = cc.Class.extend;
cc.RenderTexture.extend = cc.Class.extend;
cc.TileMapAtlas.extend = cc.Class.extend;
cc.TMXLayer.extend = cc.Class.extend;
cc.TMXTiledMap.extend = cc.Class.extend;
cc.TMXMapInfo.extend = cc.Class.extend;
cc.TransitionScene.extend = cc.Class.extend;
ccs.Armature.extend = cc.Class.extend;
ccui.Widget.extend = cc.Class.extend;
ccui.Button.extend = cc.Class.extend;
ccui.CheckBox.extend = cc.Class.extend;
ccui.ImageView.extend = cc.Class.extend;
ccui.LoadingBar.extend = cc.Class.extend;
ccui.RichText.extend = cc.Class.extend;
ccui.Slider.extend = cc.Class.extend;
ccui.Text.extend = cc.Class.extend;
ccui.TextAtlas.extend = cc.Class.extend;
ccui.TextBMFont.extend = cc.Class.extend;
ccui.TextField.extend = cc.Class.extend;
ccui.Layout.extend = cc.Class.extend;
ccui.ListView.extend = cc.Class.extend;
ccui.PageView.extend = cc.Class.extend;
ccui.ScrollView.extend = cc.Class.extend;

// Cocos2d-html5 supports multi scene resources preloading.
// This is a compatible function for JSB.
cc.Loader = cc.Class.extend({
	initWith:function (resources, selector, target) {
		if (selector) {
			this._selector = selector;
			this._target = target;
		}
		this._selector.call(this._target);
	}
});

cc.Loader.preload = function (resources, selector, target) {
    if (!this._instance) {
        this._instance = new cc.Loader();
    }
    this._instance.initWith(resources, selector, target);
    return this._instance;
};

cc.LoaderScene = cc.Loader;

var ConfigType = {
    NONE: 0,
    COCOSTUDIO: 1
};

var __onParseConfig = function(type, str) {
    if (type === ConfigType.COCOSTUDIO) {
        ccs.triggerManager.parse(JSON.parse(str));
    }
};


var _windowTimeIntervalId = 0;
var _windowTimeFunHash = {};
var WindowTimeFun = cc.Class.extend({
    _code: null,
    _intervalId: 0,
    ctor: function (code) {
        this._intervalId = _windowTimeIntervalId++;
        this._code = code;
    },
    fun: function () {
        if (!this._code) return;
        var code = this._code;
        if (typeof code == "string") {
            Function(code)();
        }
        else if (typeof code == "function") {
            code.apply(null, this._args);
        }
    }
});

/**
 * overwrite window's setTimeout
 @param {String|Function} code
 @param {number} delay
 @return {number}
 */
var setTimeout = function (code, delay) {
    var target = new WindowTimeFun(code);
    if (arguments.length > 2)
        target._args = Array.prototype.slice.call(arguments, 2);
    cc.Director.getInstance().getScheduler().scheduleCallbackForTarget(target, target.fun, delay / 1000, 0, 0, false);
    _windowTimeFunHash[target._intervalId] = target;
    return target._intervalId;
};

/**
 * overwrite window's setInterval
 @param {String|Function} code
 @param {number} delay
 @return {number}
 */
var setInterval = function (code, delay) {
    var target = new WindowTimeFun(code);
    if (arguments.length > 2)
        target._args = Array.prototype.slice.call(arguments, 2);
    cc.Director.getInstance().getScheduler().scheduleCallbackForTarget(target, target.fun, delay / 1000, cc.REPEAT_FOREVER, 0, false);
    _windowTimeFunHash[target._intervalId] = target;
    return target._intervalId;
};

/**
 * overwrite window's clearInterval
 @param {number} intervalId
 */
var clearInterval = function (intervalId) {
    var target = _windowTimeFunHash[intervalId];
    if (target) {
        cc.Director.getInstance().getScheduler().unscheduleCallbackForTarget(target, target.fun);
        delete _windowTimeFunHash[intervalId];
    }
};
var clearTimeout = clearInterval;


// event listener type
cc.EventListener.UNKNOWN = 0;
cc.EventListener.TOUCH_ONE_BY_ONE = 1;
cc.EventListener.TOUCH_ALL_AT_ONCE = 2;
cc.EventListener.KEYBOARD = 3;
cc.EventListener.MOUSE = 4;
cc.EventListener.ACCELERATION = 5;
cc.EventListener.CUSTOM = 6;

cc.EventListener.create = function(argObj){
    if(!argObj || !argObj.event){
        throw "Invalid parameter.";
    }
    var listenerType = argObj.event;
    delete argObj.event;

    var listener = null;
    if(listenerType === cc.EventListener.TOUCH_ONE_BY_ONE) {
        listener = cc.EventListenerTouchOneByOne.create();
        if (argObj.swallowTouches) {
            listener.setSwallowTouches(argObj.swallowTouches);
        }
    }
    else if(listenerType === cc.EventListener.TOUCH_ALL_AT_ONCE)
        listener = cc.EventListenerTouchAllAtOnce.create();
    else if(listenerType === cc.EventListener.MOUSE)
        listener = cc.EventListenerMouse.create();
    else if(listenerType === cc.EventListener.CUSTOM){
        listener = cc.EventListenerCustom.create(argObj.eventName, argObj.callback);
        delete argObj.eventName;
        delete argObj.callback;
    } else if(listenerType === cc.EventListener.KEYBOARD)
        listener = cc.EventListenerKeyboard.create();
    else if(listenerType === cc.EventListener.ACCELERATION){
        listener = cc.EventListenerAcceleration.create(argObj.callback);
        delete argObj.callback;
    }
    else
    {
        cc.log("Error: Invalid listener type.");
    }

    for(var key in argObj) {
        listener[key] = argObj[key];
    }

    return listener;
};


// Event manager
cc.eventManager.addListener = function(listener, nodeOrPriority) {
    if(!(listener instanceof cc.EventListener)) {
        listener = cc.EventListener.create(listener);
    }

    if (typeof nodeOrPriority == "number") {
        if (nodeOrPriority == 0) {
            cc.log("0 priority is forbidden for fixed priority since it's used for scene graph based priority.");
            return;
        }

        cc.eventManager.addEventListenerWithFixedPriority(listener, nodeOrPriority);
    } else {
        cc.eventManager.addEventListenerWithSceneGraphPriority(listener, nodeOrPriority);
    }
};

cc.eventManager.dispatchCustomEvent = function (eventName, optionalUserData) {
    var ev = new cc.EventCustom(eventName);
    ev.setUserData(optionalUserData);
    this.dispatchEvent(ev);
}

cc.EventCustom.prototype.setUserData = function(userData) {
    this._userData = userData;
};

cc.EventCustom.prototype.getUserData = function() {
    return this._userData;
};

cc.inputManager = {
    setAccelerometerEnabled: cc.Device.setAccelerometerEnabled,
    setAccelerometerInterval: cc.Device.setAccelerometerInterval,
    getDPI: cc.Device.getDPI
};

cc.EventListenerTouchOneByOne.prototype.clone = function() {
    var ret = cc.EventListenerTouchOneByOne.create();
    ret.onTouchBegan = this.onTouchBegan;
    ret.onTouchMoved = this.onTouchMoved;
    ret.onTouchEnded = this.onTouchEnded;
    ret.onTouchCancelled = this.onTouchCancelled;
    ret.setSwallowTouches(this.isSwallowTouches());
    return ret;
};

cc.EventListenerTouchAllAtOnce.prototype.clone = function() {
    var ret = cc.EventListenerTouchAllAtOnce.create();
    ret.onTouchesBegan = this.onTouchesBegan;
    ret.onTouchesMoved = this.onTouchesMoved;
    ret.onTouchesEnded = this.onTouchesEnded;
    ret.onTouchesCancelled = this.onTouchesCancelled;
    return ret;
};

cc.EventListenerKeyboard.prototype.clone = function() {
    var ret = cc.EventListenerKeyboard.create();
    ret.onKeyPressed = this.onKeyPressed;
    ret.onKeyReleased = this.onKeyReleased;
    return ret;
};

cc.EventMouse.prototype.getLocation = function(){
    return { x: this.getLocationX(), y: this.getLocationY() };
};

cc.Touch.prototype.getLocationX = function(){
    return this.getLocation().x;
};

cc.Touch.prototype.getLocationY = function(){
    return this.getLocation().y;
};

cc.director = cc.Director.getInstance();

cc.Director.EVENT_PROJECTION_CHANGED = "director_projection_changed";
cc.Director.EVENT_AFTER_DRAW = "director_after_draw";
cc.Director.EVENT_AFTER_VISIT = "director_after_visit";
cc.Director.EVENT_AFTER_UPDATE = "director_after_update";

cc.Director.prototype.runScene = function(scene){
    if (!this.getRunningScene()) {
        this.runWithScene(scene);
    }
    else {
        this.replaceScene(scene);
    }
};

cc.visibleRect = {
    _topLeft:cc.p(0,0),
    _topRight:cc.p(0,0),
    _top:cc.p(0,0),
    _bottomLeft:cc.p(0,0),
    _bottomRight:cc.p(0,0),
    _bottom:cc.p(0,0),
    _center:cc.p(0,0),
    _left:cc.p(0,0),
    _right:cc.p(0,0),
    _width:0,
    _height:0,
    _isInitialized: false,
    init:function(){

        var director = cc.Director.getInstance();
        var origin = director.getVisibleOrigin();
        var size = director.getVisibleSize();

        this._width = size.width;
        this._height = size.height;

        var w = this._width;
        var h = this._height;

        //top
        this._topLeft.y = h;
        this._topRight.x = w;
        this._topRight.y = h;
        this._top.x = w/2;
        this._top.y = h;

        //bottom
        this._bottomRight.x = w;
        this._bottom.x = w/2;

        //center
        this._center.x = w/2;
        this._center.y = h/2;

        //left
        this._left.y = h/2;

        //right
        this._right.x = w;
        this._right.y = h/2;
    },
    lazyInit: function(){
        if (!this._isInitialized) {
            this.init();
            this._isInitialized = true;
        }
    }
};

cc.defineGetterSetter(cc.visibleRect, "width", function(){
    this.lazyInit();
    return this._width;
});
cc.defineGetterSetter(cc.visibleRect, "height", function(){
    this.lazyInit();
    return this._height;
});
cc.defineGetterSetter(cc.visibleRect, "topLeft", function(){
    this.lazyInit();
    return this._topLeft;
});
cc.defineGetterSetter(cc.visibleRect, "topRight", function(){
    this.lazyInit();
    return this._topRight;
});
cc.defineGetterSetter(cc.visibleRect, "top", function(){
    this.lazyInit();
    return this._top;
});
cc.defineGetterSetter(cc.visibleRect, "bottomLeft", function(){
    this.lazyInit();
    return this._bottomLeft;
});
cc.defineGetterSetter(cc.visibleRect, "bottomRight", function(){
    this.lazyInit();
    return this._bottomRight;
});
cc.defineGetterSetter(cc.visibleRect, "bottom", function(){
    this.lazyInit();
    return this._bottom;
});
cc.defineGetterSetter(cc.visibleRect, "center", function(){
    this.lazyInit();
    return this._center;
});
cc.defineGetterSetter(cc.visibleRect, "left", function(){
    this.lazyInit();
    return this._left;
});
cc.defineGetterSetter(cc.visibleRect, "right", function(){
    this.lazyInit();
    return this._right;
});

// Predefined font definition
cc.FontDefinition = function () {
    this.fontName = "Arial";
    this.fontSize = 12;
    this.textAlign = cc.TEXT_ALIGNMENT_CENTER;
    this.verticalAlign = cc.VERTICAL_TEXT_ALIGNMENT_TOP;
    this.fillStyle = cc.color(255, 255, 255, 255);
    this.boundingWidth = 0;
	this.boundingHeight = 0;

    this.strokeEnabled = false;
    this.strokeStyle = cc.color(255, 255, 255, 255);
    this.lineWidth = 1;

    this.shadowEnabled = false;
    this.shadowOffsetX = 0;
	this.shadowOffsetY = 0;
    this.shadowBlur = 0;
    this.shadowOpacity = 1.0;
};


// Array utils

/**
 * Verify Array's Type
 * @param {Array} arr
 * @param {function} type
 * @return {Boolean}
 * @function
 */
cc.arrayVerifyType = function (arr, type) {
    if (arr && arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (!(arr[i] instanceof  type)) {
                cc.log("element type is wrong!");
                return false;
            }
        }
    }
    return true;
};

/**
 * Searches for the first occurance of object and removes it. If object is not found the function has no effect.
 * @function
 * @param {Array} arr Source Array
 * @param {*} delObj  remove object
 */
cc.arrayRemoveObject = function (arr, delObj) {
    for (var i = 0, l = arr.length; i < l; i++) {
        if (arr[i] == delObj) {
            arr.splice(i, 1);
            break;
        }
    }
};

/**
 * Removes from arr all values in minusArr. For each Value in minusArr, the first matching instance in arr will be removed.
 * @function
 * @param {Array} arr Source Array
 * @param {Array} minusArr minus Array
 */
cc.arrayRemoveArray = function (arr, minusArr) {
    for (var i = 0, l = minusArr.length; i < l; i++) {
        cc.arrayRemoveObject(arr, minusArr[i]);
    }
};

/**
 * Inserts some objects at index
 * @function
 * @param {Array} arr
 * @param {Array} addObjs
 * @param {Number} index
 * @return {Array}
 */
cc.arrayAppendObjectsToIndex = function(arr, addObjs,index){
    arr.splice.apply(arr, [index, 0].concat(addObjs));
    return arr;
};



//
// DrawNode JS API Wrapper
//

cc.cardinalSplineAt = function (p0, p1, p2, p3, tension, t) {
	var t2 = t * t;
	var t3 = t2 * t;

	var s = (1 - tension) / 2;

	var b1 = s * ((-t3 + (2 * t2)) - t);                      // s(-t3 + 2 t2 - t)P1
	var b2 = s * (-t3 + t2) + (2 * t3 - 3 * t2 + 1);          // s(-t3 + t2)P2 + (2 t3 - 3 t2 + 1)P2
	var b3 = s * (t3 - 2 * t2 + t) + (-2 * t3 + 3 * t2);      // s(t3 - 2 t2 + t)P3 + (-2 t3 + 3 t2)P3
	var b4 = s * (t3 - t2);                                   // s(t3 - t2)P4

	var x = (p0.x * b1 + p1.x * b2 + p2.x * b3 + p3.x * b4);
	var y = (p0.y * b1 + p1.y * b2 + p2.y * b3 + p3.y * b4);
	return cc.p(x, y);
};

cc._DrawNode = cc.DrawNode;
cc.DrawNode = cc._DrawNode.extend({
	_drawColor: cc.color(255, 255, 255, 255),
	_lineWidth: 1,

	setLineWidth: function (width) {
		this._lineWidth = width;
	},

	getLineWidth: function () {
		return this._lineWidth;
	},

	setDrawColor: function(color) {
		var locDrawColor = this._drawColor;
		locDrawColor.r = color.r;
		locDrawColor.g = color.g;
		locDrawColor.b = color.b;
		locDrawColor.a = (color.a == null) ? 255 : color.a;
	},

	getDrawColor: function () {
		return  cc.color(this._drawColor.r, this._drawColor.g, this._drawColor.b, this._drawColor.a);
	},

	drawRect: function (origin, destination, fillColor, lineWidth, lineColor) {
		lineWidth = lineWidth || this._lineWidth;
		lineColor = lineColor || this._drawColor;
		var points = [origin, cc.p(origin.x, destination.y), destination, cc.p(destination.x, origin.y)];
		if (fillColor)
			cc._DrawNode.prototype.drawPoly.call(this, points, fillColor, lineWidth, lineColor);
		else {
			points.push(origin);
			var drawSeg = cc._DrawNode.prototype.drawSegment;
			for (var i = 0, len = points.length; i < len - 1; i++)
				drawSeg.call(this, points[i], points[i + 1], lineWidth, lineColor);
		}
	},

	drawCircle: function (center, radius, angle, segments, drawLineToCenter, lineWidth, color) {
		lineWidth = lineWidth || this._lineWidth;
		color = color || this._drawColor;
		if (color.a == null)
			color.a = 255;
		var coef = 2.0 * Math.PI / segments, vertices = [], i, len;
		for (i = 0; i <= segments; i++) {
			var rads = i * coef;
			var j = radius * Math.cos(rads + angle) + center.x;
			var k = radius * Math.sin(rads + angle) + center.y;
			vertices.push(cc.p(j, k));
		}
		if (drawLineToCenter)
			vertices.push(cc.p(center.x, center.y));

		lineWidth *= 0.5;
		var drawSeg = cc._DrawNode.prototype.drawSegment;
		for (i = 0, len = vertices.length; i < len - 1; i++)
			drawSeg.call(this, vertices[i], vertices[i + 1], lineWidth, color);
	},

	drawQuadBezier: function (origin, control, destination, segments, lineWidth, color) {
		lineWidth = lineWidth || this._lineWidth;
		color = color || this._drawColor;
		cc._DrawNode.prototype.drawQuadBezier.call(this, origin, control, destination, segments, color);
	},

	drawCubicBezier: function (origin, control1, control2, destination, segments, lineWidth, color) {
		lineWidth = lineWidth || this._lineWidth;
		color = color || this._drawColor;
		cc._DrawNode.prototype.drawCubicBezier.call(this, origin, control1, control2, destination, segments, color);
	},

	drawCatmullRom: function (points, segments, lineWidth, color) {
		this.drawCardinalSpline(points, 0.5, segments, lineWidth, color);
	},

	drawCardinalSpline: function (config, tension, segments, lineWidth, color) {
		lineWidth = lineWidth || this._lineWidth;
		color = color || this._drawColor;
		if (color.a == null)
			color.a = 255;
		var vertices = [], p, lt, deltaT = 1.0 / config.length, m1len = config.length - 1;

		for (var i = 0; i < segments + 1; i++) {
			var dt = i / segments;

			// border
			if (dt == 1) {
				p = m1len;
				lt = 1;
			} else {
				p = 0 | (dt / deltaT);
				lt = (dt - deltaT * p) / deltaT;
			}

			// Interpolate
			var newPos = cc.cardinalSplineAt(
				config[Math.min(m1len, Math.max(p - 1, 0))],
				config[Math.min(m1len, Math.max(p + 0, 0))],
				config[Math.min(m1len, Math.max(p + 1, 0))],
				config[Math.min(m1len, Math.max(p + 2, 0))],
				tension, lt);
			vertices.push(newPos);
		}

		lineWidth *= 0.5;
		var drawSeg = cc._DrawNode.prototype.drawSegment;
		for (var j = 0, len = vertices.length; j < len - 1; j++)
			drawSeg.call(this, vertices[j], vertices[j + 1], lineWidth, color);
	},

	drawDot:function (pos, radius, color) {
		color = color || this._drawColor;
		cc._DrawNode.prototype.drawDot.call(this, pos, radius, color);
	},

	drawSegment:function (from, to, radius, color) {
		color = color || this._drawColor;
		cc._DrawNode.prototype.drawSegment.call(this, from, to, radius, color);
	},

	drawPoly:function (verts, fillColor, borderWidth, borderColor) {
		borderColor = borderColor || this._drawColor;
		if (fillColor)
			cc._DrawNode.prototype.drawPoly.call(this, verts, fillColor, borderWidth, borderColor);
		else {
			verts.push(verts[0]);
			var drawSeg = cc._DrawNode.prototype.drawSegment;
			for (var i = 0, len = verts.length; i < len - 1; i++)
				drawSeg.call(this, verts[i], verts[i + 1], borderWidth, borderColor);
		}
	}
});
cc.DrawNode.create = function () {
	return new cc.DrawNode();
};


//
// TMX classes JS API Wrapper
//

cc.TMXTiledMap.prototype.allLayers = function(){
    var retArr = [],
        locChildren = this.getChildren(),
        length = locChildren.length;
    for(var i = 0; i< length; i++){
        var layer = locChildren[i];
        if(layer && layer instanceof cc.TMXLayer)
            retArr.push(layer);
    }
    return retArr;
};
cc.TMXLayer.prototype._getTileAt = cc.TMXLayer.prototype.getTileAt;
cc.TMXLayer.prototype.getTileAt = function(x, y){
    var pos = y !== undefined ? cc.p(x, y) : x;
    return this._getTileAt(pos);
};
cc.TMXLayer.prototype._getTileGIDAt = cc.TMXLayer.prototype.getTileGIDAt;
cc.TMXLayer.prototype.getTileGIDAt = function(x, y){
    var pos = y !== undefined ? cc.p(x, y) : x;
    return this._getTileGIDAt(pos);
};
cc.TMXLayer.prototype._setTileGID = cc.TMXLayer.prototype.setTileGID;
cc.TMXLayer.prototype.setTileGID = function(gid, posOrX, flagsOrY, flags){
    var pos;
    if (flags !== undefined) {
        pos = cc.p(posOrX, flagsOrY);
        this._setTileGID(gid, pos, flags);
    } else if(flagsOrY != undefined){
        pos = posOrX;
        flags = flagsOrY;
        this._setTileGID(gid, pos, flags);
    } else {
        this._setTileGID(gid, posOrX);
    }
};
cc.TMXLayer.prototype._removeTileAt = cc.TMXLayer.prototype.removeTileAt;
cc.TMXLayer.prototype.removeTileAt = function(x, y){
    var pos = y !== undefined ? cc.p(x, y) : x;
    this._removeTileAt(pos);
};
cc.TMXLayer.prototype._getPositionAt = cc.TMXLayer.prototype.getPositonAt;
cc.TMXLayer.prototype.getPositonAt = function(x, y){
    var pos = y !== undefined ? cc.p(x, y) : x;
    return this._getPositionAt(pos);
};


//
// setBlendFunc JS API Wrapper
//

var protoHasBlend = [cc.AtlasNode.prototype,
                     cc.DrawNode.prototype,
                     cc.LabelTTF.prototype,
                     cc.SpriteBatchNode.prototype,
                     cc.LabelBMFont.prototype,
                     cc.LayerColor.prototype,
                     cc.MotionStreak.prototype,
                     cc.Sprite.prototype,
                     cc.ParticleBatchNode.prototype,
                     cc.ParticleSystem.prototype];

var templateSetBlendFunc = function(src, dst) {
    var blendf;
    if (dst === undefined)
        blendf = src;
    else
        blendf = {src: src, dst: dst};
    this._setBlendFunc(blendf);
    var b = this.getBlendFunc();
    cc.log((b.src == src) + ", " + (b.dst == dst));
};
for (var i = 0, l = protoHasBlend.length; i < l; i++) {
    var proto = protoHasBlend[i];
    proto._setBlendFunc = proto.setBlendFunc;
    proto.setBlendFunc = templateSetBlendFunc;
}


//
// Ease actions JS API Wrapper
//

var easeActions = {
    easeIn : 0,
    easeOut : 1,
    easeInOut : 2,
    easeExponentialIn : 3,
    easeExponentialOut : 4,
    easeExponentialInOut : 5,
    easeSineIn : 6,
    easeSineOut : 7,
    easeSineInOut : 8,
    easeElasticIn : 9,
    easeElasticOut : 10,
    easeElasticInOut : 11,
    easeBounceIn : 12,
    easeBounceOut : 13,
    easeBounceInOut : 14,
    easeBackIn : 15,
    easeBackOut : 16,
    easeBackInOut : 17
};

function templateEaseActions(actionTag) {
    return function(param) {
        return {tag: actionTag, parameter: param};
    }
}

for (var a in easeActions) {
    var actionTag = easeActions[a];
    cc[a] = templateEaseActions(actionTag);
}

cc.action = cc.Action.create;
cc.speed = cc.Speed.create;
cc.follow = cc.Follow.create;
cc.orbitCamera = cc.OrbitCamera.create;
cc.cardinalSplineTo = cc.CardinalSplineTo.create;
cc.cardinalSplineBy = cc.CardinalSplineBy.create;
cc.catmullRomTo = cc.CatmullRomTo.create;
cc.catmullRomBy = cc.CatmullRomBy.create;
cc.show = cc.Show.create;
cc.hide = cc.Hide.create;
cc.toggleVisibility = cc.ToggleVisibility.create;
cc.removeSelf = cc.RemoveSelf.create;
cc.flipX = cc.FlipX.create;
cc.flipY = cc.FlipY.create;
cc.place = cc.Place.create;
cc.callFunc = cc.CallFunc.create;
cc.actionInterval = cc.ActionInterval.create;
cc.sequence = cc.Sequence.create;
cc.repeat = cc.Repeat.create;
cc.repeatForever = cc.RepeatForever.create;
cc.spawn = cc.Spawn.create;
cc.rotateTo = cc.RotateTo.create;
cc.rotateBy = cc.RotateBy.create;
cc.moveBy = cc.MoveBy.create;
cc.moveTo = cc.MoveTo.create;
cc.skewTo = cc.SkewTo.create;
cc.skewBy = cc.SkewBy.create;
cc.jumpBy = cc.JumpBy.create;
cc.jumpTo = cc.JumpTo.create;
cc.bezierBy = cc.BezierBy.create;
cc.bezierTo = cc.BezierTo.create;
cc.scaleTo = cc.ScaleTo.create;
cc.scaleBy = cc.ScaleBy.create;
cc.blink = cc.Blink.create;
cc.fadeTo = cc.FadeTo.create;
cc.fadeIn = cc.FadeIn.create;
cc.fadeOut = cc.FadeOut.create;
cc.tintTo = cc.TintTo.create;
cc.tintBy = cc.TintBy.create;
cc.delayTime = cc.DelayTime.create;
//cc.reverseTime = cc.ReverseTime.create;
cc.animate = cc.Animate.create;
cc.targetedAction = cc.TargetedAction.create;
cc.actionTween = cc.ActionTween.create;


//AffineTransform API

/**
 * @memberOf cc
 * @function
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 * @param {Number} tx
 * @param {Number} ty
 */
cc.AffineTransform = function (a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
};

/**
 * @memberOf cc
 * @function
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 * @param {Number} tx
 * @param {Number} ty
 * @return {cc.AffineTransform}
 * Constructor
 */
cc.AffineTransformMake = function (a, b, c, d, tx, ty) {
    return {a: a, b: b, c: c, d: d, tx: tx, ty: ty};
};

/**
 * @memberOf cc
 * @function
 * @param {cc.Point} point
 * @param {cc.AffineTransform} t
 * @return {cc.Point}
 * Constructor
 */
cc.PointApplyAffineTransform = function (point, t) {
    return {x: t.a * point.x + t.c * point.y + t.tx, y: t.b * point.x + t.d * point.y + t.ty};
};

cc._PointApplyAffineTransform = function (x, y, t) {
    return {x: t.a * x + t.c * y + t.tx,
        y: t.b * x + t.d * y + t.ty};
};

/**
 * @memberOf cc
 * @function
 * @param {cc.Size} size
 * @param {cc.AffineTransform} t
 * @return {cc.Size}
 * Constructor
 */
cc.SizeApplyAffineTransform = function (size, t) {
    return {width: t.a * size.width + t.c * size.height, height: t.b * size.width + t.d * size.height};
};

/**
 * @memberOf cc
 * @function
 * @return {cc.AffineTransform}
 * Constructor
 */
cc.AffineTransformMakeIdentity = function () {
    return {a: 1.0, b: 0.0, c: 0.0, d: 1.0, tx: 0.0, ty: 0.0};
};

/**
 * @memberOf cc
 * @function
 * @return {cc.AffineTransform}
 * Constructor
 */
cc.AffineTransformIdentity = function () {
    return {a: 1.0, b: 0.0, c: 0.0, d: 1.0, tx: 0.0, ty: 0.0};
};

/**
 * @memberOf cc
 * @function
 * @param {cc.Rect} rect
 * @param {cc.AffineTransform} anAffineTransform
 * @return {cc.Rect}
 * Constructor
 */
cc.RectApplyAffineTransform = function (rect, anAffineTransform) {
    var top = cc.rectGetMinY(rect);
    var left = cc.rectGetMinX(rect);
    var right = cc.rectGetMaxX(rect);
    var bottom = cc.rectGetMaxY(rect);

    var topLeft = cc._PointApplyAffineTransform(left, top, anAffineTransform);
    var topRight = cc._PointApplyAffineTransform(right, top, anAffineTransform);
    var bottomLeft = cc._PointApplyAffineTransform(left, bottom, anAffineTransform);
    var bottomRight = cc._PointApplyAffineTransform(right, bottom, anAffineTransform);

    var minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);

    return cc.rect(minX, minY, (maxX - minX), (maxY - minY));
};

cc._RectApplyAffineTransformIn = function(rect, anAffineTransform){
    var top = cc.rectGetMinY(rect);
    var left = cc.rectGetMinX(rect);
    var right = cc.rectGetMaxX(rect);
    var bottom = cc.rectGetMaxY(rect);

    var topLeft = cc._PointApplyAffineTransform(left, top, anAffineTransform);
    var topRight = cc._PointApplyAffineTransform(right, top, anAffineTransform);
    var bottomLeft = cc._PointApplyAffineTransform(left, bottom, anAffineTransform);
    var bottomRight = cc._PointApplyAffineTransform(right, bottom, anAffineTransform);

    var minX = Math.min(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var maxX = Math.max(topLeft.x, topRight.x, bottomLeft.x, bottomRight.x);
    var minY = Math.min(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);
    var maxY = Math.max(topLeft.y, topRight.y, bottomLeft.y, bottomRight.y);

    rect.x = minX;
    rect.y = minY;
    rect.width = maxX - minX;
    rect.height = maxY - minY;
    return rect;
};

/**
 * @memberOf cc
 * @function
 * @param {cc.AffineTransform} t
 * @param {Number} tx
 * @param {Number}ty
 * @return {cc.AffineTransform}
 * Constructor
 */
cc.AffineTransformTranslate = function (t, tx, ty) {
    return {
        a: t.a,
        b: t.b,
        c: t.c,
        d: t.d,
        tx: t.tx + t.a * tx + t.c * ty,
        ty: t.ty + t.b * tx + t.d * ty
    };
};

/**
 * @memberOf cc
 * @function
 * @param {cc.AffineTransform} t
 * @param {Number} sx
 * @param {Number} sy
 * @return {cc.AffineTransform}
 * Constructor
 */
cc.AffineTransformScale = function (t, sx, sy) {
    return {a: t.a * sx, b: t.b * sx, c: t.c * sy, d: t.d * sy, tx: t.tx, ty: t.ty};
};

/**
 * @memberOf cc
 * @function
 * @param {cc.AffineTransform} aTransform
 * @param {Number} anAngle
 * @return {cc.AffineTransform}
 * Constructor
 */
cc.AffineTransformRotate = function (aTransform, anAngle) {
    var fSin = Math.sin(anAngle);
    var fCos = Math.cos(anAngle);

    return {a: aTransform.a * fCos + aTransform.c * fSin,
        b: aTransform.b * fCos + aTransform.d * fSin,
        c: aTransform.c * fCos - aTransform.a * fSin,
        d: aTransform.d * fCos - aTransform.b * fSin,
        tx: aTransform.tx,
        ty: aTransform.ty};
};

/**
 * Concatenate `t2' to `t1' and return the result:<br/>
 * t' = t1 * t2
 * @memberOf cc
 * @function
 * @param {cc.AffineTransform} t1
 * @param {cc.AffineTransform} t2
 * @return {cc.AffineTransform}
 * Constructor
 */
cc.AffineTransformConcat = function (t1, t2) {
    return {a: t1.a * t2.a + t1.b * t2.c,                          //a
        b: t1.a * t2.b + t1.b * t2.d,                               //b
        c: t1.c * t2.a + t1.d * t2.c,                               //c
        d: t1.c * t2.b + t1.d * t2.d,                               //d
        tx: t1.tx * t2.a + t1.ty * t2.c + t2.tx,                    //tx
        ty: t1.tx * t2.b + t1.ty * t2.d + t2.ty};                   //ty
};

/**
 * Return true if `t1' and `t2' are equal, false otherwise.
 * @memberOf cc
 * @function
 * @param {cc.AffineTransform} t1
 * @param {cc.AffineTransform} t2
 * @return {Boolean}
 * Constructor
 */
cc.AffineTransformEqualToTransform = function (t1, t2) {
    return ((t1.a === t2.a) && (t1.b === t2.b) && (t1.c === t2.c) && (t1.d === t2.d) && (t1.tx === t2.tx) && (t1.ty === t2.ty));
};

/**
 * Get the invert value of an AffineTransform object
 * @memberOf cc
 * @function
 * @param {cc.AffineTransform} t
 * @return {cc.AffineTransform}
 * Constructor
 */
cc.AffineTransformInvert = function (t) {
    var determinant = 1 / (t.a * t.d - t.b * t.c);
    return {a: determinant * t.d, b: -determinant * t.b, c: -determinant * t.c, d: determinant * t.a,
        tx: determinant * (t.c * t.ty - t.d * t.tx), ty: determinant * (t.b * t.tx - t.a * t.ty)};
};

/** returns a "world" axis aligned bounding box of the node. <br/>
 * @return {cc.Rect}
 */
cc.Node.prototype.getBoundingBoxToWorld = function () {
    var contentSize = this.getContentSize();
    var rect = cc.rect(0, 0, contentSize.width, contentSize.height);
    var matrix = this.getNodeToWorldTransform();
    var trans = cc.AffineTransformMake(matrix[0], matrix[4], matrix[1], matrix[5], matrix[12], matrix[13]);  
    rect = cc.RectApplyAffineTransform(rect, trans);

    //query child's BoundingBox
    if (!this.getChildren())
        return rect;

    var locChildren = this.getChildren();
    for (var i = 0; i < locChildren.length; i++) {
        var child = locChildren[i];
        if (child && child.isVisible()) {
            var childRect = child._getBoundingBoxToCurrentNode(trans);
            if (childRect)
                rect = cc.rectUnion(rect, childRect);
        }
    }
    return rect;
};

cc.Node.prototype._getBoundingBoxToCurrentNode = function (parentTransform) {
    var contentSize = this.getContentSize();
    var rect = cc.rect(0, 0, contentSize.width, contentSize.height);
    var matrix = this.getNodeToParentTransform();
    var _trans = cc.AffineTransformMake(matrix[0], matrix[4], matrix[1], matrix[5], matrix[12], matrix[13]); 
    var trans = (parentTransform == null) ? _trans : cc.AffineTransformConcat(_trans, parentTransform);
    rect = cc.RectApplyAffineTransform(rect, trans);

    //query child's BoundingBox
    if (!this.getChildren())
        return rect;

    var locChildren = this.getChildren();
    for (var i = 0; i < locChildren.length; i++) {
        var child = locChildren[i];
        if (child && child.isVisible()) {
            var childRect = child._getBoundingBoxToCurrentNode(trans);
            if (childRect)
                rect = cc.rectUnion(rect, childRect);
        }
    }
    return rect;
};