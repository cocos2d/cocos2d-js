function _safeExtend(obj, list) {
    for (var key in list)
        if(!obj[key])
            obj[key] = list[key];
}

var _undefined = {
    _jsbUndefined: function(message) {
        cc.log("Not implemented yet in JSB");
        return undefined;
    },
    _customUndefined: function(message) {
        return function() {
            cc.log("Not implemented yet in JSB");
            message && cc.log(message);
            return undefined;
        }
    },
    _shadowUndefined: _undefined._customUndefined("Please use enableShadow function"),
    _strokeUndefined: _undefined._customUndefined("Please use enableStroke function")
}

_safeExtend(cc.Node.prototype, {
    _getWidth: function() {
        return this.getContentSize().width;
    },
    _getHeight: function() {
        return this.getContentSize().height;
    },

    _setWidth: function(width) {
        this.setContentSize(width, this.getContentSize().height);
    },
    _setHeight: function(height) {
        this.setContentSize(this.getContentSize().width, height);
    },

    _getAnchorX: function() {
        return this.getAnchorPoint().x;
    },
    _getAnchorY: function() {
        return this.getAnchorPoint().y;
    },

    _setAnchorX: function(x) {
        this.setAnchorPoint(x, this.getAnchorPoint().y);
    },
    _setAnchorY: function(y) {
        this.setAnchorPoint(this.getAnchorPoint().x, y);
    }
});

_safeExtend(cc.LabelTTF.prototype, {
    _fontStyleRE: /^(\d+)px\s+['"]?([\w\s\d]+)['"]?$/,

    _getFont: function() {
        var size = this.getFontSize();
        var name = this.getFontName();
        return size + "px '" + name + "'";
    },

    _setFont: function(fontStyle) {
        var res = this._fontStyleRE.exec(fontStyle);
		if(res) {
			this.setFontSize(parseInt(res[1]));
			this.setFontName(res[2]);
		}
    },

    _getBoundingWidth: function() {
        return this.getDimensions().width;
    },
    _getBoundingHeight: function() {
        return this.getDimensions().height;
    },

    _setBoundingWidth: function(w) {
        var size = cc.size(w, this.getDimensions().height);
        this.setDimensions(size);
    },
    _setBoundingHeight: function(h) {
        var size = cc.size(this.getDimensions().width, h);
        this.setDimensions(size);
    },

    _getFillStyle: _undefined._jsbUndefined,
    _getStrokeStyle: _undefined._strokeUndefined,
    _setStrokeStyle: _undefined._strokeUndefined,
    _getLineWidth: _undefined._strokeUndefined,
    _setLineWidth: _undefined._strokeUndefined,
    _getShadowOffsetX: _undefined._shadowUndefined,
    _setShadowOffsetX: _undefined._shadowUndefined,
    _getShadowOffsetY: _undefined._shadowUndefined,
    _setShadowOffsetY: _undefined._shadowUndefined,
    _getShadowOpacity: _undefined._shadowUndefined,
    _setShadowOpacity: _undefined._shadowUndefined,
    _getShadowBlur: _undefined._shadowUndefined,
    _setShadowBlur: _undefined._shadowUndefined
});

_safeExtend(cc.Sprite.prototype, {
    _getOffsetX: function() {
        return this.getOffsetPosition().x;
    },
    _getOffsetY: function() {
        return this.getOffsetPosition().y;
    }
});

_safeExtend(cc.LabelBMFont.prototype, {
    _getAlignment: _undefined._jsbUndefined,
    _getBoundingWidth: _undefined._jsbUndefined
});
