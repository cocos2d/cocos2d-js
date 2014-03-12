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
cc.SpriteBatchNode.create = function(fileName,capacity){
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
cc.TMXTiledMap.create = function (tmxFile,resourcePath) {
    if(resourcePath != undefined){
        return cc.TMXTiledMap.createWithXML(tmxFile,resourcePath);
    } else if (tmxFile != undefined) {
        return cc.TMXTiledMap._create(tmxFile);
    }
    return null;
};




/************************************************************
 *
 * Constructors with built in init function
 *
 ************************************************************/

_cc = {};

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
cc.Layer.create = _cc.Layer.create;


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
cc.LayerColor.create = _cc.LayerColor.create;


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
cc.LayerGradient.create = _cc.LayerGradient.create;


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
cc.LayerMultiplex.create = _cc.LayerMultiplex.create;*/


