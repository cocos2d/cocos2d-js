/************************************************************
 *
 * Constructors with built in init function
 *
 ************************************************************/

var _p;

// Layers
_p = cc.Layer.prototype;
_p._ctor = function() {
	_p.init.call(this);
};


_p = cc.LayerColor.prototype;
_p._ctor = function(color, w, h) {
	color = color ||  cc.color(0, 0, 0, 255);
	w = w === undefined ? cc.winSize.width : w;
	h = h === undefined ? cc.winSize.height : h;

	this.initWithColor(color, w, h);
};


_p = cc.LayerGradient.prototype;
_p._ctor = function(start, end, v) {
	start = start || cc.color(0,0,0,255);
	end = end || cc.color(0,0,0,255);
	v = v || cc.p(0, -1);

	this.initWithColor(start, end, v);
};


_p = cc.LayerMultiplex.prototype;
_p._ctor = function(layers) {
	layers && layers.length ? this.initWithArray(layers) : this.init();
};


// Sprite
_p = cc.Sprite.prototype;
_p._ctor = function(fileName, rect) {
	if (fileName === undefined) {
		_p.init.call(this);
	}
	else if (typeof(fileName) === "string") {
		if (fileName[0] === "#") {
			//init with a sprite frame name
			var frameName = fileName.substr(1, fileName.length - 1);
			this.initWithSpriteFrameName(frameName);
		} else {
			// Create with filename and rect
            rect ? this.initWithFile(fileName, rect) : this.initWithFile(fileName);
		}
	}
	else if (typeof(fileName) === "object") {
		if (fileName instanceof cc.Texture2D) {
			//init with texture and rect
			rect ? this.initWithTexture(fileName, rect) : this.initWithTexture(fileName);
		} else if (fileName instanceof cc.SpriteFrame) {
			//init with a sprite frame
			this.initWithSpriteFrame(fileName);
		}
	}
};


// SpriteBatchNode
_p = cc.SpriteBatchNode.prototype;
_p._ctor = function(fileImage, capacity) {
	capacity = capacity || cc.DEFAULT_SPRITE_BATCH_CAPACITY;
	if (typeof(fileImage) == "string")
		this.initWithFile(fileImage, capacity);
	else
		this.initWithTexture(fileImage, capacity);
};


// Menu
_p = cc.Menu.prototype;
_p._ctor = function(menuItems) {
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

	items && items.length > 0 && this.initWithArray(items);
};


// Menu items
_p = cc.MenuItem.prototype;
_p._ctor = function(callback, target) {
	callback && this.initWithCallback(callback.bind(target));
};

_p = cc.MenuItemLabel.prototype;
_p._ctor = function(label, callback, target) {
	callback = callback ? callback.bind(target) : null;
	label && this.initWithLabel(label, callback);
};

_p = cc.MenuItemAtlasFont.prototype;
_p._ctor = function(value, charMapFile, itemWidth, itemHeight, startCharMap, callback, target) {
	callback = callback ? callback.bind(target) : null;
	value !== undefined && this.initWithString(value, charMapFile, itemWidth, itemHeight, startCharMap, callback);
};

_p = cc.MenuItemFont.prototype;
_p._ctor = function(value, callback, target) {
	callback = callback ? callback.bind(target) : null;
	value !== undefined && this.initWithString(value, callback);
};

_p = cc.MenuItemSprite.prototype;
_p._ctor = function(normalSprite, selectedSprite, three, four, five) {
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
		callback = callback ? callback.bind(target) : null;
		this.initWithNormalSprite(normalSprite, selectedSprite, disabledImage, callback);
	}
};

_p = cc.MenuItemImage.prototype;
_p._ctor = function(normalImage, selectedImage, three, four, five) {
	var disabledImage = null,
		callback = null,
		target = null;

	if (normalImage === undefined) {
		_p.init.call(this);
	}
	else {
		if (four === undefined)  {
			callback = three;
		}
		else if (five === undefined) {
			callback = three;
			target = four;
		}
		else if (five) {
			disabledImage = three;
			callback = four;
			target = five;
		}
		callback = callback ? callback.bind(target) : null;
		this.initWithNormalImage(normalImage, selectedImage, disabledImage, callback);
	}
};

_p = cc.MenuItemToggle.prototype;
_p._ctor = function() {
	var argc =  arguments.length, callback, target;
	// passing callback.
	if (typeof arguments[argc-2] === 'function') {
		callback = arguments[argc-2];
		target = arguments[argc-1];
		argc = argc - 2;
	} else if(typeof arguments[argc-1] === 'function'){
		callback = arguments[argc-1];
		argc = argc - 1;
	}

	if(argc > 0) {
		this.initWithItem(arguments[0]);

		for (var i = 1; i < argc; i++) {
			if (arguments[i])
				this.addSubItem(arguments[i]);
		}
		this.setCallback(callback, target);
	}
	else {
		callback = callback ? callback.bind(target) : null;
		this.initWithCallback(callback);
	}
};





/************************************************************
 *
 * Unified create function
 *
 ************************************************************/

cc.Sprite._create = cc.Sprite.create;
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
        sprite = cc.Sprite._create();
        return sprite;
    }
    
    if (typeof(fileName) === "string") {
        if (fileName[0] === "#") {
            //init with a sprite frame name
            var frameName = fileName.substr(1, fileName.length - 1);
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
            sprite = cc.Sprite.createWithSpriteFrame(spriteFrame);
        } else {
            // Create with filename and rect
            sprite = rect ? cc.Sprite._create(fileName, rect) : cc.Sprite._create(fileName);
        }
        if (sprite)
            return sprite;
        else return null;
    }
    
    if (typeof(fileName) === "object") {
        if (fileName instanceof cc.Texture2D) {
            //init  with texture and rect
            sprite = rect ? cc.Sprite.createWithTexture(fileName, rect) : cc.Sprite.createWithTexture(fileName);
        } else if (fileName instanceof cc.SpriteFrame) {
            //init with a sprite frame
            sprite = cc.Sprite.createWithSpriteFrame(fileName);
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
		var item = cc.MenuItemToggle._create.apply(this, args);

		// then set the callback
		if( obj !== null )
			item.setCallback(func, obj);
		else
			item.setCallback(func);
		return item;
	} else {
		return cc.MenuItemToggle._create.apply(this, arguments);
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