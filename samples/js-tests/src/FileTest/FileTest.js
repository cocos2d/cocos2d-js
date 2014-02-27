/****************************************************************************

 http://www.cocos2d-html5.org
 http://www.cocos2d-iphone.org
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

var FileTestSceneIdx = -1;

//------------------------------------------------------------------
//
// FileTestBase
//
//------------------------------------------------------------------
var FileTestBase = BaseTestLayer.extend({
	_title:"",
	_subtitle:"",

	ctor:function() {
		this._super(cc.c4b(0,0,0,255), cc.c4b(98,99,117,255));
	},

	onRestartCallback:function (sender) {
		var s = new FileTestScene();
		s.addChild(restartFileTest());
		director.replaceScene(s);
	},
	onNextCallback:function (sender) {
		var s = new FileTestScene();
		s.addChild(nextFileTest());
		director.replaceScene(s);
	},
	onBackCallback:function (sender) {
		var s = new FileTestScene();
		s.addChild(previousFileTest());
		director.replaceScene(s);
	},

	// automation
	numberOfPendingTests:function() {
		return ( (arrayOfFileTest.length-1) - FileTestSceneIdx );
	},
	getTestNumber:function() {
		return FileTestSceneIdx;
	}
});

//------------------------------------------------------------------
//
// FilenameLookupTest
//
//------------------------------------------------------------------
var FilenameLookupTest = FileTestBase.extend({
	_title:"Testing FilenameLookup ",
	_subtitle:"You should see a grossini on the screen",

	ctor:function () {
		this._super();

		var t = sys.platform;
		if( t == 'mobile')  {
			cc.FileUtils.getInstance().loadFilenameLookup('FileTest/lookup-mobile.plist');
		} else if( t == 'desktop' ) {
			cc.FileUtils.getInstance().loadFilenameLookup('FileTest/lookup-desktop.plist');
		} else {
			cc.FileUtils.getInstance().loadFilenameLookup('FileTest/lookup-html5.plist');
		}

		var sprite = cc.Sprite.create("grossini.bmp");
		this.addChild( sprite );
		sprite.setPosition( winSize.width/2, winSize.height/2);


		//
		// only for automation
		//
		if ( autoTestEnabled ) {
			if ( t == 'mobile' )  {
				this.expectedFilename = "grossini_pvr_rgba4444.pvr";
			} else if( t == 'desktop' ) {
				this.expectedFilename = "grossini_pvr_rgba8888.pvr";
			} else {
				this.expectedFilename = "grossini.png";
			}
		}
	},

	//
	// only for automation
	//
	getExpectedResult:function() {
		return this.expectedFilename;
	},
	getCurrentResult:function() {
		var filenamePlusPath    = cc.FileUtils.getInstance().fullPathForFilename("grossini.bmp");
		var filename            = filenamePlusPath.replace(/^.*(\\|\/|\:)/, '');
		return filename;
	}
});

var FileTestScene = TestScene.extend({
	runThisTest:function () {
		FileTestSceneIdx = -1;
		var layer = nextFileTest();
		this.addChild(layer);

		director.replaceScene(this);
	}
});


//------------------------------------------------------------------
//
// SAXParser Test
//
//------------------------------------------------------------------
var SAXParserTest = FileTestBase.extend({
	_title:"Testing SAXParser",
	_expectResult: {
		texture: {
			width: 256,
			height: 128
		},
		frames: {
			"grossini.png": {
				x: 103,
				y: 1,
				width: 51,
				height: 109,
				offsetX: 0,
				offsetY: -1,
				originalWidth: 85,
				originalHeight: 121
			},
			"grossinis_sister1.png": {
				x: 55,
				y: 1,
				width: 47,
				height: 112,
				offsetX: -0.5,
				offsetY: -11.5,
				originalWidth: 52,
				originalHeight: 139
			},
			"grossinis_sister2.png": {
				x: 1,
				y: 1,
				width: 53,
				height: 126,
				offsetX: -0.5,
				offsetY: -2,
				originalWidth: 56,
				originalHeight: 138
			}
		}
	},
	_label: null,

	ctor:function () {
		this._super();

		var parser = cc.SAXParser.getInstance();
		var result = parser.parse(s_grossini_familyPlist);

		var ok = JSON.stringify(this._expectResult) == JSON.stringify(result);
		this._label = cc.LabelTTF.create(ok ? "SUCCESS" : "FAIL", "Arial", 30);
		var winsize = cc.Director.getInstance().getWinSize();
		this._label.setPosition(winsize.width/2, winsize.height/2);
		this.addChild(this._label);
	},

	//
	// only for automation
	//
	getExpectedResult:function() {
		return JSON.stringify(this._expectResult);
	},
	getCurrentResult:function() {
		var parser = cc.SAXParser.getInstance();
		var result = parser.parse(s_grossini_familyPlist);
		return JSON.stringify(result);
	}
});

var FileTestScene = TestScene.extend({
	runThisTest:function () {
		fileTestSceneIdx = -1;
		var layer = nextFileTest();
		this.addChild(layer);

		director.replaceScene(this);
	}
});


//
// Flow control
//

var arrayOfFileTest = [
	FilenameLookupTest,
	SAXParserTest
];

var nextFileTest = function () {
	fileTestSceneIdx++;
	fileTestSceneIdx = fileTestSceneIdx % arrayOfFileTest.length;

	return new arrayOfFileTest[fileTestSceneIdx]();
};
var previousFileTest = function () {
	fileTestSceneIdx--;
	if (fileTestSceneIdx < 0)
		fileTestSceneIdx += arrayOfFileTest.length;

	return new arrayOfFileTest[fileTestSceneIdx]();
};
var restartFileTest = function () {
	return new arrayOfFileTest[fileTestSceneIdx]();
};

