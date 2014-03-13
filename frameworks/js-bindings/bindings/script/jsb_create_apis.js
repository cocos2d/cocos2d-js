/************************************************************
 *
 * Constructors with built in init function
 *
 ************************************************************/

_cc = {};
_cc.copyStatics = function (origin, target) {
	for ( var key in origin ) {
		if ( key != "extend" ) {
			target[key] = origin[key];
		}
	}
};

// Layers
_cc.Layer = cc.Layer;
cc.Layer = _cc.Layer.extend({
    ctor: function() {
	    _cc.Layer.prototype.ctor.call(this);

		this.setAnchorPoint(cc.p(0.5, 0.5));
	    this.ignoreAnchorPointForPosition(true);
	    this.setContentSize(cc.winSize);
    }
});
_cc.copyStatics(_cc.Layer, cc.Layer);


_cc.LayerColor = cc.LayerColor;
cc.LayerColor = _cc.LayerColor.extend({
	ctor: function(color, w, h) {
		_cc.LayerColor.prototype.ctor.call(this);

		color = color ||  cc.color(0, 0, 0, 255);
		w = w === undefined ? cc.winSize.width : w;
		h = h === undefined ? cc.winSize.height : h;

		this.setColor(color);
		this.setContentSize(w, h);
	}
});
_cc.copyStatics(_cc.LayerColor, cc.LayerColor);


_cc.LayerGradient = cc.LayerGradient;
cc.LayerGradient = _cc.LayerGradient.extend({
	ctor: function(start, end, v) {
		_cc.LayerGradient.prototype.ctor.call(this);

		start = start || cc.color(0,0,0,255);
		end = end || cc.color(0,0,0,255);
		v = v || cc.p(0, -1);

		this.setStartColor(start);
		this.setEndColor(end);
		this.setVector(v);
		this.setColor(cc.color(start.r, start.g, start.b, 255));
	}
});
_cc.copyStatics(_cc.LayerGradient, cc.LayerGradient);


/*
_cc.LayerMultiplex = cc.LayerMultiplex;
cc.LayerMultiplex = _cc.LayerMultiplex.extend({
	ctor: function(layers) {
		_cc.LayerMultiplex.prototype.ctor.call(this);

		var l = layers ? layers.length : 0;
		for (var i = 0; i < l; i++) {
			this.addLayer(layers[i]);
		}
		if (l > 0) {
			this.switchTo(0);
		}
	}
});
 _cc.copyStatics(_cc.LayerMultiplex, cc.LayerMultiplex);*/


// Sprite
_cc.Sprite = cc.Sprite;
cc.Sprite = _cc.Sprite.extend({
	ctor: function(fileName, rect) {
		_cc.Sprite.prototype.ctor.call(this);

		if (fileName === undefined) {
			// Serves as init function
			rect = rect || cc.rect();
			this.setTextureRect(rect);
		}
		else if (typeof(fileName) === "string") {
			if (fileName[0] === "#") {
				//init with a sprite frame name
				var frameName = fileName.substr(1, fileName.length - 1);
				var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
				this.setTexture(spriteFrame.getTexture());
				this.setTextureRect(spriteFrame.getRect());
				this.setSpriteFrame(spriteFrame);
			} else {
				// Create with filename and rect
				this.setTexture(fileName);
				if (rect)
					this.setTextureRect(rect);
			}
		}
		else if (typeof(fileName) === "object") {
			if (fileName instanceof cc.Texture2D) {
				//init with texture and rect
				var texSize = fileName.getContentSize();
				rect = rect || cc.rect(0, 0, texSize.width, texSize.height);
				this.setTexture(fileName);
				this.setTextureRect(rect);
			} else if (fileName instanceof cc.SpriteFrame) {
				//init with a sprite frame
				this.setTexture(fileName.getTexture());
				this.setTextureRect(fileName.getRect());
				this.setSpriteFrame(fileName);
			}
		}
	}
});
_cc.copyStatics(_cc.Sprite, cc.Sprite);


// SpriteBatchNode - Doesn't work until Cocos2d-x provide correct set functions
/*
_cc.SpriteBatchNode = cc.SpriteBatchNode;
cc.SpriteBatchNode = _cc.SpriteBatchNode.extend({
	ctor: function(fileImage, capacity) {
		_cc.SpriteBatchNode.prototype.ctor.call(this);

		capacity = capacity || cc.DEFAULT_SPRITE_BATCH_CAPACITY;
		var texture2D;
		if (typeof(fileImage) == "string") {
			texture2D = cc.textureCache.textureForKey(fileImage);
			if (!texture2D)
				texture2D = cc.textureCache.addImage(fileImage);
		}
		else if (fileImage instanceof cc.Texture2D)
			texture2D  = fileImage;

	    texture2D && this.setTexture(texture2D);
	    this.setCapacity(capacity);

	}
});
 _cc.copyStatics(_cc.SpriteBatchNode, cc.SpriteBatchNode);*/


// Menu
_cc.Menu = cc.Menu;
cc.Menu = _cc.Menu.extend({
	ctor: function(menuItems) {
		_cc.Menu.prototype.ctor.call(this);

		if((arguments.length > 0) && (arguments[arguments.length-1] == null))
			cc.log("parameters should not be ending with null in Javascript");

		var argc = arguments.length, items;
		if (argc == 0) {
			items = [];
		} else if (argc == 1) {
			if (menuItems instanceof Array) {
				items = menuItems;
			}
			else items = [];
		}
		else if (argc > 1) {
			var items = [];
			for (var i = 0; i < argc; i++) {
				if (arguments[i])
					items.push(arguments[i]);
			}
		}

		var winSize = cc.winSize;
		this.setPosition(winSize.width / 2, winSize.height / 2);
		this.setContentSize(winSize);
		this.setAnchorPoint(0.5, 0.5);
		this.ignoreAnchorPointForPosition(true);

		for (var i = 0; i < items.length; i++)
			this.addChild(items[i], i);

		this.setCascadeColorEnabled(true);
		this.setCascadeOpacityEnabled(true);

		var touchListener = cc.EventListener.create({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			swallowTouches: true,
			onTouchBegan: this.onTouchBegan,
			onTouchMoved: this.onTouchMoved,
			onTouchEnded: this.onTouchEnded,
			onTouchCancelled: this.onTouchCancelled
		});
		cc.eventManager.addListener(touchListener, this);
	}
});
_cc.copyStatics(_cc.Menu, cc.Menu);
cc.Menu.create = _cc.Menu.create;


// Menu items
var _initWithCb = function(callback, target) {
	if (target !== undefined) {
		this.setAnchorPoint(0.5, 0.5);
		this.setTarget(callback, target);
		this.setEnabled(true);
	}
	else if (callback !== undefined) {
		this.setAnchorPoint(0.5, 0.5);
		this.setCallback(callback);
		this.setEnabled(true);
	}
};
var _initLabel = function(label) {
	if (label) {
		this.setScale(1);
		this.setDisabledColor(cc.color(126,126,126));
		this.setLabel(label);
		this.setCascadeColorEnabled(true);
		this.setCascadeOpacityEnabled(true);
	}
};

_cc.MenuItem = cc.MenuItem;
cc.MenuItem = _cc.MenuItem.extend({
	ctor: function(callback, target) {
		_cc.MenuItem.prototype.ctor.call(this);

		_initWithCb.call(this, callback, target);
	}
});
_cc.copyStatics(_cc.MenuItem, cc.MenuItem);
cc.MenuItem.create = _cc.MenuItem.create;

/*
_cc.MenuItemLabel = cc.MenuItemLabel;
cc.MenuItemLabel = _cc.MenuItemLabel.extend({
	ctor: function(label, callback, target) {
		_cc.MenuItemLabel.prototype.ctor.call(this);

		_initWithCb.call(this, callback, target);
		_initLabel.call(this, label);
	}
});
 _cc.copyStatics(_cc.MenuItemLabel, cc.MenuItemLabel);

_cc.MenuItemAtlasFont = cc.MenuItemAtlasFont;
cc.MenuItemAtlasFont = _cc.MenuItemAtlasFont.extend({
	ctor: function(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target) {
		_cc.MenuItemAtlasFont.prototype.ctor.call(this);

		_initWithCb.call(this, callback, target);
		if (value && value.length > 0) {
			var label = cc.LabelAtlas.create(value, charMapFile, itemWidth, itemHeight, startCharMap);

			_initLabel.call(this, label);
		}
	}
});
 _cc.copyStatics(_cc.MenuItemAtlasFont, cc.MenuItemAtlasFont);*/

_cc.MenuItemFont = cc.MenuItemFont;
cc.MenuItemFont = _cc.MenuItemFont.extend({
	ctor: function(value, callback, target) {
		_cc.MenuItemFont.prototype.ctor.call(this);

		_initWithCb.call(this, callback, target);
		var label;
		if(value && value.length > 0) {
			var fontName = cc.MenuItemFont.fontName;
			var fontSize = cc.MenuItemFont.fontSize;
			label = cc.LabelTTF.create(value, fontName, fontSize);

			if (label) {
				_initLabel.call(this, label);
				this.setFontName(fontName);
				this.setFontSize(fontSize);
			}
		}
	}
});
_cc.copyStatics(_cc.MenuItemFont, cc.MenuItemFont);
cc.MenuItemFont.create = _cc.MenuItemFont.create;


/*
_cc.MenuItemSprite = cc.MenuItemSprite;
cc.MenuItemSprite = _cc.MenuItemSprite.extend({
	ctor: function(normalSprite, selectedSprite, three, four, five) {
		_cc.MenuItemSprite.prototype.ctor.call(this);

		var argc = arguments.length;
		if (argc > 1) {
			normalSprite = arguments[0];
			selectedSprite = arguments[1];
			var disabledImage, target, callback;
			if (argc == 5) {
				disabledImage = arguments[2];
				callback = arguments[3];
				target = arguments[4];
			} else if (argc == 4 && typeof arguments[3] === "function") {
				disabledImage = arguments[2];
				callback = arguments[3];
			} else if (argc == 4 && typeof arguments[2] === "function") {
				target = arguments[3];
				callback = arguments[2];
			} else if (argc <= 2) {
				disabledImage = arguments[2];
			}

			_initWithCb.call(this, callback, target);

			normalSprite && this.setNormalImage(normalSprite);
			selectedSprite && this.setSelectedImage(selectedSprite);
			disabledImage && this.setDisabledImage(disabledImage);

			if(normalSprite)
				this.setContentSize(normalSprite.getContentSize());
			this.setCascadeColorEnabled(true);
			this.setCascadeOpacityEnabled(true);
		}
	}
});
 _cc.copyStatics(_cc.MenuItemSprite, cc.MenuItemSprite);

_cc.MenuItemImage = cc.MenuItemImage;
cc.MenuItemImage = _cc.MenuItemImage.extend({
	ctor: function(normalImage, selectedImage, three, four, five) {
		var normalSprite = null,
			selectedSprite = null,
			disabledSprite = null,
			callback = null,
			target = null;

		if (normalImage === undefined) {
			cc.MenuItemSprite.prototype.ctor.call(this);
		}
		else {
			normalSprite = cc.Sprite.create(normalImage);
			selectedImage &&
			(selectedSprite = cc.Sprite.create(selectedImage));
			if (four === undefined)  {
				callback = three;
			}
			else if (five === undefined) {
				callback = three;
				target = four;
			}
			else if (five) {
				disabledSprite = cc.Sprite.create(three);
				callback = four;
				target = five;
			}
			cc.MenuItemSprite.prototype.ctor.call(this, normalSprite, selectedSprite, disabledSprite, callback, target);
		}
	}
});
 _cc.copyStatics(_cc.MenuItemImage, cc.MenuItemImage);*/

_cc.MenuItemToggle = cc.MenuItemToggle;
cc.MenuItemToggle = _cc.MenuItemToggle.extend({
	ctor: function() {
		_cc.MenuItemToggle.prototype.ctor.call(this);

		var argc =  arguments.length, callback, target;
		// passing callback.
		if (typeof arguments[argc-2] === 'function') {
			callback = arguments[argc-2];
			target = arguments[argc-1];
			argc = argc - 2;
		} else if(typeof arguments[argc-1] === 'function'){
			callback = arguments[argc-1];
			argc = argc-1;
		}
		_initWithCb.call(this, callback, target);

		for (var i = 0; i < argc; i++) {
			if (arguments[i])
				this.addSubItem(arguments[i]);
		}
		if (argc > 1) {
			this.setSelectedIndex(1);
		}
		this.setSelectedIndex(0);
		this.setCascadeColorEnabled(true);
		this.setCascadeOpacityEnabled(true);
	}
});
_cc.copyStatics(_cc.MenuItemToggle, cc.MenuItemToggle);





/************************************************************
 *
 * Unified create function
 *
 ************************************************************/

/**
 * Create a sprite with image path or frame name or texture or spriteFrame.
 * @constructs
 * @param {String|cc.Texture2D|cc.SpriteFrame} fileName  The string which indicates a path to image file, e.g., "scene1/monster.png".
 * @param {cc.Rect} rect  Only the contents inside rect of pszFileName's texture will be applied for this sprite.
 * @return {cc.Sprite} A valid sprite object
 * @example
 *
 * 1.Create a sprite with image path and rect
 * var sprite1 = cc.Sprite.create("res/HelloHTML5World.png");
 * var sprite2 = cc.Sprite.create("res/HelloHTML5World.png",cc.rect(0,0,480,320));
 *
 * 2.Create a sprite with a sprite frame name. Must add "#" before frame name.
 * var sprite = cc.Sprite.create('#grossini_dance_01.png');
 *
 * 3.Create a sprite with a sprite frame
 * var spriteFrame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
 * var sprite = cc.Sprite.create(spriteFrame);
 *
 * 4.Create a sprite with an exsiting texture contained in a CCTexture2D object
 *      After creation, the rect will be the size of the texture, and the offset will be (0,0).
 * var texture = cc.textureCache.addImage("HelloHTML5World.png");
 * var sprite1 = cc.Sprite.create(texture);
 * var sprite2 = cc.Sprite.create(texture, cc.rect(0,0,480,320));
 *
 */
cc.Sprite.create = function (fileName, rect) {
    var sprite;
    
    if (arguments.length == 0) {
        sprite = _cc.Sprite.create();
        return sprite;
    }
    
    if (typeof(fileName) === "string") {
        if (fileName[0] === "#") {
            //init with a sprite frame name
            var frameName = fileName.substr(1, fileName.length - 1);
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
            sprite = _cc.Sprite.createWithSpriteFrame(spriteFrame);
        } else {
            // Create with filename and rect
            sprite = rect ? _cc.Sprite.create(fileName, rect) : _cc.Sprite.create(fileName);
        }
        if (sprite)
            return sprite;
        else return null;
    }
    
    if (typeof(fileName) === "object") {
        if (fileName instanceof cc.Texture2D) {
            //init  with texture and rect
            sprite = rect ? _cc.Sprite.createWithTexture(fileName, rect) : _cc.Sprite.createWithTexture(fileName);
        } else if (fileName instanceof cc.SpriteFrame) {
            //init with a sprite frame
            sprite = _cc.Sprite.createWithSpriteFrame(fileName);
        }
        if (sprite)
            return  sprite;
        else return null;
    }
    
    return null;
};

cc.PhysicsSprite._create = cc.PhysicsSprite.create;
cc.PhysicsSprite.create = function (fileName, rect) {
    var sprite;
    
    if (arguments.length == 0) {
        sprite = cc.PhysicsSprite._create();
        return sprite;
    }
    
    if (typeof(fileName) === "string") {
        if (fileName[0] === "#") {
            //init with a sprite frame name
            var frameName = fileName.substr(1, fileName.length - 1);
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
            sprite = cc.PhysicsSprite.createWithSpriteFrame(spriteFrame);
        } else {
            // Create with filename and rect
            sprite = rect ? cc.PhysicsSprite._create(fileName, rect) : cc.PhysicsSprite._create(fileName);
        }
        if (sprite)
            return sprite;
        else return null;
    }
    
    if (typeof(fileName) === "object") {
        if (fileName instanceof cc.Texture2D) {
            //init  with texture and rect
            sprite = rect ? cc.PhysicsSprite.createWithTexture(fileName, rect) : cc.PhysicsSprite.createWithTexture(fileName);
        } else if (fileName instanceof cc.SpriteFrame) {
            //init with a sprite frame
            sprite = cc.PhysicsSprite.createWithSpriteFrame(fileName)
        }
        if (sprite)
            return  sprite;
        else return null;
    }
    
    return null;
};


cc.LabelTTF._create = cc.LabelTTF.create;
/**
 * creates a cc.LabelTTF from a font name, alignment, dimension and font size
 * @param {String} text
 * @param {String|cc.FontDefinition} fontName
 * @param {Number} fontSize
 * @param {cc.Size} [dimensions=cc.size(0,0)]
 * @param {Number} [hAlignment=]
 * @param {Number} [vAlignment=cc.VERTICAL_TEXT_ALIGNMENT_TOP]
 * @return {cc.LabelTTF|Null}
 * @example
 * // Example
 * 1.
 * var myLabel = cc.LabelTTF.create('label text',  'Times New Roman', 32, cc.size(320,32), cc.TEXT_ALIGNMENT_LEFT);
 * 2.
 * var fontDef = new cc.FontDefinition();
 * fontDef.fontName = "Arial";
 * fontDef.fontSize = "32";
 * var myLabel = cc.LabelTTF.create('label text',  fontDef);
 */
cc.LabelTTF.create = function (text, fontName, fontSize, dimensions, hAlignment, vAlignment) {
    var label;
    if (fontName && fontName instanceof cc.FontDefinition) {
        label = cc.LabelTTF.createWithFontDefinition(text, fontName);
    }
    else {
        fontName = fontName || "Arial";
        fontSize = fontSize || 16;
        dimensions = dimensions || cc.size(0, 0);
        hAlignment = hAlignment == undefined ? cc.TEXT_ALIGNMENT_CENTER : hAlignment;
        vAlignment = vAlignment == undefined ? cc.VERTICAL_TEXT_ALIGNMENT_TOP : vAlignment;
        label = cc.LabelTTF._create(text, fontName, fontSize, dimensions, hAlignment, vAlignment);
    }
    if (label)
        return label;
    else return null;
};


cc.SpriteBatchNode._create = cc.SpriteBatchNode.create;
/**
 * <p>
 *    creates a cc.SpriteBatchNodeCanvas with a file image (.png, .jpg etc) with a default capacity of 29 children.<br/>
 *    The capacity will be increased in 33% in runtime if it run out of space.<br/>
 *    The file will be loaded using the TextureMgr.<br/>
 * </p>
 * @param {String|cc.Texture2D} fileImage
 * @param {Number} capacity
 * @return {cc.SpriteBatchNode}
 * @example
 * 1.
 * //create a SpriteBatchNode with image path
 * var spriteBatchNode = cc.SpriteBatchNode.create("res/animations/grossini.png", 50);
 * 2.
 * //create a SpriteBatchNode with texture
 * var texture = cc.textureCache.addImage("res/animations/grossini.png");
 * var spriteBatchNode = cc.SpriteBatchNode.create(texture,50);
 */
cc.SpriteBatchNode.create = function(fileName, capacity){
    if (typeof(fileName) == "string")
        return cc.SpriteBatchNode._create(fileName);
    else if (fileName instanceof cc.Texture2D) {
        return isNaN(capacity) ? cc.SpriteBatchNode.createWithTexture(fileName) :  cc.SpriteBatchNode.createWithTexture(fileName,capacity);
    }
    return null;
};


cc.SpriteFrame._create = cc.SpriteFrame.create;
/**
 * <p>
 *    Create a cc.SpriteFrame with a texture filename, rect, rotated, offset and originalSize in pixels.<br/>
 *    The originalSize is the size in pixels of the frame before being trimmed.
 * </p>
 * @param {String|cc.Texture2D} filename
 * @param {cc.Rect} rect if parameters' length equal 2, rect in points, else rect in pixels
 * @param {Boolean} rotated
 * @param {cc.Point} offset
 * @param {cc.Size} originalSize
 * @return {cc.SpriteFrame}
 * @example
 * 1.
 * //Create a cc.SpriteFrame with image path
 * var frame1 = cc.SpriteFrame.create("res/grossini_dance.png",cc.rect(0,0,90,128));
 * var frame2 = cc.SpriteFrame.create("res/grossini_dance.png",cc.rect(0,0,90,128),false,0,cc.size(90,128));
 *
 * 2.
 * //Create a cc.SpriteFrame with a texture, rect, rotated, offset and originalSize in pixels.
 * var texture = cc.textureCache.addImage("res/grossini_dance.png");
 * var frame1 = cc.SpriteFrame.create(texture, cc.rect(0,0,90,128));
 * var frame2 = cc.SpriteFrame.create(texture, cc.rect(0,0,90,128),false,0,cc.size(90,128));
 */
cc.SpriteFrame.create = function(fileName, rect, rotated, offset, originalSize){
    var spriteFrame = null;
    switch (arguments.length) {
        case 2:
            if (fileName instanceof cc.Texture2D)
                spriteFrame = cc.SpriteFrame.createWithTexture(fileName, rect);
            else spriteFrame = cc.SpriteFrame._create(fileName, rect);
            break;
        case 5:
            spriteFrame = cc.SpriteFrame._create(fileName, rect, rotated, offset, originalSize);
            break;
        default:
            throw "Argument must be non-nil ";
            break;
    }
    return spriteFrame;
};


cc.ParticleSystem._create = cc.ParticleSystem.create;
/**
 * <p> return the string found by key in dict. <br/>
 *    This plist files can be create manually or with Particle Designer:<br/>
 *    http://particledesigner.71squared.com/<br/>
 * </p>
 * @param {String|Number} plistFile
 * @return {cc.ParticleSystem}
 */
cc.ParticleSystem.create = function(plistFile){
    var particleSystem =null;
    if (typeof(plistFile) === "number") {
        particleSystem = cc.ParticleSystem.createWithTotalParticles(plistFile);
    }else if(typeof(plistFile) === "string"){
        particleSystem = cc.ParticleSystem._create(plistFile);
    }
    return particleSystem;
};


cc.ParticleBatchNode._create = cc.ParticleBatchNode.create;
/**
 * initializes the particle system with the name of a file on disk (for a list of supported formats look at the cc.Texture2D class), a capacity of particles
 * @param {String|cc.Texture2D} fileImage
 * @param {Number} capacity
 * @return {cc.ParticleBatchNode}
 * @example
 * 1.
 * //Create a cc.ParticleBatchNode with image path  and capacity
 * var particleBatchNode = cc.ParticleBatchNode.create("res/grossini_dance.png",30);
 *
 * 2.
 * //Create a cc.ParticleBatchNode with a texture and capacity
 * var texture = cc.TextureCache.getInstance().addImage("res/grossini_dance.png");
 * var particleBatchNode = cc.ParticleBatchNode.create(texture, 30);
 */
cc.ParticleBatchNode.create = function(fileImage, capacity){
	if (typeof(fileImage) == "string")
		return cc.ParticleBatchNode._create(fileImage);
	else if (fileImage instanceof cc.Texture2D) {
		return isNaN(capacity) ? cc.ParticleBatchNode.createWithTexture(fileImage) :  cc.ParticleBatchNode.createWithTexture(fileImage, capacity);
	}
	return null;
};


cc.TMXTiledMap._create = cc.TMXTiledMap.create;
/**
 * Creates a TMX Tiled Map with a TMX file  or content string.
 * Implementation cc.TMXTiledMap
 * @param {String} tmxFile tmxFile fileName or content string
 * @param {String} resourcePath   If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
 * @return {cc.TMXTiledMap|undefined}
 * @example
 * //example
 * 1.
 * //create a TMXTiledMap with file name
 * var tmxTiledMap = cc.TMXTiledMap.create("res/orthogonal-test1.tmx");
 * 2.
 * //create a TMXTiledMap with content string and resource path
 * var resources = "res/TileMaps";
 * var filePath = "res/TileMaps/orthogonal-test1.tmx";
 * var xmlStr = cc.loader.getRes(filePath);
 * var tmxTiledMap = cc.TMXTiledMap.create(xmlStr, resources);
 */
cc.TMXTiledMap.create = function (tmxFile, resourcePath) {
    if(resourcePath != undefined){
        return cc.TMXTiledMap.createWithXML(tmxFile, resourcePath);
    } else if (tmxFile != undefined) {
        return cc.TMXTiledMap._create(tmxFile);
    }
    return null;
};


// MenuItemToggle
cc.MenuItemToggle.create = function(/* var args */) {
	var n = arguments.length;

	if (typeof arguments[n-2] === 'function' || typeof arguments[n-1] === 'function')   {
		var args = Array.prototype.slice.call(arguments);
		var obj = null;
		if( typeof arguments[n-2] === 'function' )
			obj = args.pop();

		var func = args.pop();

		// create it with arguments,
		var item = _cc.MenuItemToggle._create.apply(this, args);

		// then set the callback
		if( obj !== null )
			item.setCallback(func, obj);
		else
			item.setCallback(func);
		return item;
	} else {
		return _cc.MenuItemToggle._create.apply(this, arguments);
	}
};


// LabelAtlas
cc.LabelAtlas.create = function( a,b,c,d,e ) {

	var n = arguments.length;

	if ( n == 5) {
		return cc.LabelAtlas._create(a,b,c,d,e.charCodeAt(0));
	} else {
		return cc.LabelAtlas._create.apply(this, arguments);
	}
};


// LayerMultiplex
cc.LayerMultiplex.create = cc.LayerMultiplex.createWithArray;