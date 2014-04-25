/*
 * Copyright (c) 2014 Chukong Technologies Inc.
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

/**
 *  <p>Properties configuration function </br>
 *  All properties in attrs will be set to the node, </br>
 *  when the setter of the node is available, </br>
 *  the property will be set via setter function.</br>
 *  </p>
 * @param {Object} attrs Properties to be set to node
 */
cc.Node.prototype.attr = function(attrs) {
    for(var key in attrs) {
		this[key] = attrs[key];
	}
};

var _proto = cc.Action.prototype;
cc.defineGetterSetter(_proto, "tag", _proto.getTag, _proto.setTag);

// Overrides
_proto = cc.AtlasNode.prototype;
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);

_proto = cc.LabelTTF.prototype;
cc.defineGetterSetter(_proto, "size", _proto.getContentSize, _proto.setContentSize);
//cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
//cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);

_proto = cc.LayerColor.prototype;
//cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
//cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);

_proto = cc.LayerGradient.prototype;
cc.defineGetterSetter(_proto, "size", _proto.getContentSize, _proto.setContentSize);
//cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
//cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);

_proto = cc.Sprite.prototype;
cc.defineGetterSetter(_proto, "ignoreAnchor", _proto.isIgnoreAnchorPointForPosition, _proto.ignoreAnchorPointForPosition);

_proto = cc.LabelAtlas.prototype;
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);

_proto = cc.LabelBMFont.prototype;
//cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
//cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);
cc.defineGetterSetter(_proto, "scale", _proto.getScale, _proto.setScale);
cc.defineGetterSetter(_proto, "scaleX", _proto.getScaleX, _proto.setScaleX);
cc.defineGetterSetter(_proto, "scaleY", _proto.getScaleY, _proto.setScaleY);
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "cascadeOpacity", _proto.isCascadeOpacityEnabled, _proto.setCascadeOpacityEnabled);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "cascadeColor", _proto.isCascadeColorEnabled, _proto.setCascadeColorEnabled);

_proto = cc.Menu.prototype;
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);

_proto = cc.MenuItem.prototype;
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);

_proto = cc.MotionStreak.prototype;
cc.defineGetterSetter(_proto, "x", _proto.getPositionX, _proto.setPositionX);
cc.defineGetterSetter(_proto, "y", _proto.getPositionY, _proto.setPositionY);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);

_proto = cc.ParticleSystem.prototype;
cc.defineGetterSetter(_proto, "rotation", _proto.getRotation, _proto.setRotation);
cc.defineGetterSetter(_proto, "scale", _proto.getScale, _proto.setScale);
cc.defineGetterSetter(_proto, "scaleX", _proto.getScaleX, _proto.setScaleX);
cc.defineGetterSetter(_proto, "scaleY", _proto.getScaleY, _proto.setScaleY);

_proto = cc.PhysicsSprite.prototype;
cc.defineGetterSetter(_proto, "body", _proto.getBody, _proto.setBody);
cc.defineGetterSetter(_proto, "x", _proto.getPositionX, _proto.setPositionX);
cc.defineGetterSetter(_proto, "y", _proto.getPositionY, _proto.setPositionY);
cc.defineGetterSetter(_proto, "rotation", _proto.getRotation, _proto.setRotation);
cc.defineGetterSetter(_proto, "dirty", _proto.isDirty, _proto.setDirty);

_proto = cc.ProgressTimer.prototype;
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);

_proto = cc.TextFieldTTF.prototype;
cc.defineGetterSetter(_proto, "string", _proto.getString, _proto.setString);

_proto = ccs.Bone.prototype;
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "zIndex", _proto.getLocalZOrder, _proto.setLocalZOrder);

_proto = ccui.Widget.prototype;
cc.defineGetterSetter(_proto, "x", _proto.getPositionX, _proto.setPositionX);
cc.defineGetterSetter(_proto, "y", _proto.getPositionY, _proto.setPositionY);
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "flippedX", _proto.isFlippedX, _proto.setFlippedX);
cc.defineGetterSetter(_proto, "flippedY", _proto.isFlippedY, _proto.setFlippedY);
cc.defineGetterSetter(_proto, "children", _proto.getChildren);
cc.defineGetterSetter(_proto, "childrenCount", _proto.getChildrenCount);

_proto = ccui.ScrollView.prototype;
cc.defineGetterSetter(_proto, "children", _proto.getChildren);
cc.defineGetterSetter(_proto, "childrenCount", _proto.getChildrenCount);
cc.defineGetterSetter(_proto, "layoutType", _proto.getLayoutType, _proto.setLayoutType);

_proto = ccui.Button.prototype;
//cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
//cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);
cc.defineGetterSetter(_proto, "flippedX", _proto.isFlippedX, _proto.setFlippedX);
cc.defineGetterSetter(_proto, "flippedY", _proto.isFlippedY, _proto.setFlippedY);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);

_proto = ccui.CheckBox.prototype;
//cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
//cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);
cc.defineGetterSetter(_proto, "flippedX", _proto.isFlippedX, _proto.setFlippedX);
cc.defineGetterSetter(_proto, "flippedY", _proto.isFlippedY, _proto.setFlippedY);
//cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
//cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);

_proto = ccui.ImageView.prototype;
//cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
//cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);
cc.defineGetterSetter(_proto, "flippedX", _proto.isFlippedX, _proto.setFlippedX);
cc.defineGetterSetter(_proto, "flippedY", _proto.isFlippedY, _proto.setFlippedY);
//cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
//cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);

_proto = ccui.Text.prototype;
//cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
//cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
//cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
//cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);
cc.defineGetterSetter(_proto, "scaleX", _proto.getScaleX, _proto.setScaleX);
cc.defineGetterSetter(_proto, "scaleY", _proto.getScaleY, _proto.setScaleY);
cc.defineGetterSetter(_proto, "flippedX", _proto.isFlippedX, _proto.setFlippedX);
cc.defineGetterSetter(_proto, "flippedY", _proto.isFlippedY, _proto.setFlippedY);

/*
_proto = ccui.TextAtlas.prototype;
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);

_proto = ccui.TextBMFont.prototype;
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);

_proto = ccui.LoadingBar.prototype;
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);

_proto = ccui.Slider.prototype;
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);

_proto = ccui.TextField.prototype;
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);
*/

_proto = cc.Control.prototype;
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);

_proto = cc.ControlButton.prototype;
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);

_proto = cc.ControlColourPicker.prototype;
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);

_proto = cc.ControlHuePicker.prototype;
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);

_proto = cc.ControlPotentiometer.prototype;
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);

_proto = cc.ControlSaturationBrightnessPicker.prototype;
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);

_proto = cc.ControlSlider.prototype;
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);

_proto = cc.ControlSwitch.prototype;
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);

_proto = cc.Scale9Sprite.prototype;
//cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
//cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);

_proto = cc.ScrollView.prototype;
//cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
//cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);




// Extends
var _proto = cc.ClippingNode.prototype;
cc.defineGetterSetter(_proto, "alphaThreshold", _proto.getAlphaThreshold, _proto.setAlphaThreshold);
cc.defineGetterSetter(_proto, "inverted", _proto.getInverted, _proto.setInverted);
cc.defineGetterSetter(_proto, "stencil", _proto.getStencil, _proto.setStencil);

_proto = cc.AtlasNode.prototype;
cc.defineGetterSetter(_proto, "texture", _proto.getTexture, _proto.setTexture);
cc.defineGetterSetter(_proto, "textureAtlas", _proto.getTextureAtlas, _proto.setTextureAtlas);
cc.defineGetterSetter(_proto, "quadsToDraw", _proto.getQuadsToDraw, _proto.setQuadsToDraw);

_proto = cc.Node.prototype;
cc.defineGetterSetter(_proto, "x", _proto.getPositionX, _proto.setPositionX);
cc.defineGetterSetter(_proto, "y", _proto.getPositionY, _proto.setPositionY);
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "anchorX", _proto._getAnchorX, _proto._setAnchorX);
cc.defineGetterSetter(_proto, "anchorY", _proto._getAnchorY, _proto._setAnchorY);
cc.defineGetterSetter(_proto, "skewX", _proto.getSkewX, _proto.setSkewX);
cc.defineGetterSetter(_proto, "skewY", _proto.getSkewY, _proto.setSkewY);
cc.defineGetterSetter(_proto, "zIndex", _proto.getLocalZOrder, _proto.setLocalZOrder);
cc.defineGetterSetter(_proto, "vertexZ", _proto.getVertexZ, _proto.setVertexZ);
cc.defineGetterSetter(_proto, "rotation", _proto.getRotation, _proto.setRotation);
cc.defineGetterSetter(_proto, "rotationX", _proto.getRotationX, _proto.setRotationX);
cc.defineGetterSetter(_proto, "rotationY", _proto.getRotationY, _proto.setRotationY);
cc.defineGetterSetter(_proto, "scale", _proto.getScale, _proto.setScale);
cc.defineGetterSetter(_proto, "scaleX", _proto.getScaleX, _proto.setScaleX);
cc.defineGetterSetter(_proto, "scaleY", _proto.getScaleY, _proto.setScaleY);
cc.defineGetterSetter(_proto, "children", _proto.getChildren);
cc.defineGetterSetter(_proto, "childrenCount", _proto.getChildrenCount);
cc.defineGetterSetter(_proto, "parent", _proto.getParent, _proto.setParent);
cc.defineGetterSetter(_proto, "visible", _proto.isVisible, _proto.setVisible);
cc.defineGetterSetter(_proto, "running", _proto.isRunning);
cc.defineGetterSetter(_proto, "ignoreAnchor", _proto.isIgnoreAnchorPointForPosition, _proto.ignoreAnchorPointForPosition);
cc.defineGetterSetter(_proto, "actionManager", _proto.getActionManager, _proto.setActionManager);
cc.defineGetterSetter(_proto, "scheduler", _proto.getScheduler, _proto.setScheduler);
cc.defineGetterSetter(_proto, "shaderProgram", _proto.getShaderProgram, _proto.setShaderProgram);
cc.defineGetterSetter(_proto, "glServerState", _proto.getGLServerState, _proto.setGLServerState);
cc.defineGetterSetter(_proto, "tag", _proto.getTag, _proto.setTag);
cc.defineGetterSetter(_proto, "userData", _proto.getUserData, _proto.setUserData);
cc.defineGetterSetter(_proto, "userObject", _proto.getUserObject, _proto.setUserObject);
cc.defineGetterSetter(_proto, "arrivalOrder", _proto.getArrivalOrder, _proto.setArrivalOrder);

_proto = cc.NodeRGBA.prototype;
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
cc.defineGetterSetter(_proto, "cascadeOpacity", _proto.isCascadeOpacityEnabled, _proto.setCascadeOpacityEnabled);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "cascadeColor", _proto.isCascadeColorEnabled, _proto.setCascadeColorEnabled);

_proto = cc.LabelTTF.prototype;
cc.defineGetterSetter(_proto, "string", _proto.getString, _proto.setString);
cc.defineGetterSetter(_proto, "textAlign", _proto.getHorizontalAlignment, _proto.setHorizontalAlignment);
cc.defineGetterSetter(_proto, "verticalAlign", _proto.getVerticalAlignment, _proto.setVerticalAlignment);
cc.defineGetterSetter(_proto, "fontSize", _proto.getFontSize, _proto.setFontSize);
cc.defineGetterSetter(_proto, "fontName", _proto.getFontName, _proto.setFontName);
cc.defineGetterSetter(_proto, "font", _proto._getFont, _proto._setFont);
cc.defineGetterSetter(_proto, "boundingWidth", _proto._getBoundingWidth, _proto._setBoundingWidth);
cc.defineGetterSetter(_proto, "boundingHeight", _proto._getBoundingHeight, _proto._setBoundingHeight);
cc.defineGetterSetter(_proto, "fillStyle", _proto._getFillStyle, _proto.setFontFillColor);
cc.defineGetterSetter(_proto, "strokeStyle", _proto._getStrokeStyle, _proto._setStrokeStyle);
cc.defineGetterSetter(_proto, "lineWidth", _proto._getLineWidth, _proto._setLineWidth);
cc.defineGetterSetter(_proto, "shadowOffsetX", _proto._getShadowOffsetX, _proto._setShadowOffsetX);
cc.defineGetterSetter(_proto, "shadowOffsetY", _proto._getShadowOffsetY, _proto._setShadowOffsetY);
cc.defineGetterSetter(_proto, "shadowOpacity", _proto._getShadowOpacity, _proto._setShadowOpacity);
cc.defineGetterSetter(_proto, "shadowBlur", _proto._getShadowBlur, _proto._setShadowBlur);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);

_proto = cc.LayerRGBA.prototype;
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "cascadeOpacity", _proto.isCascadeOpacityEnabled, _proto.setCascadeOpacityEnabled);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);
cc.defineGetterSetter(_proto, "cascadeColor", _proto.isCascadeColorEnabled, _proto.setCascadeColorEnabled);

_proto = cc.LayerColor.prototype;
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);

_proto = cc.LayerGradient.prototype;
cc.defineGetterSetter(_proto, "startColor", _proto.getStartColor, _proto.setStartColor);
cc.defineGetterSetter(_proto, "endColor", _proto.getEndColor, _proto.setEndColor);
cc.defineGetterSetter(_proto, "startOpacity", _proto.getStartOpacity, _proto.setStartOpacity);
cc.defineGetterSetter(_proto, "endOpacity", _proto.getEndOpacity, _proto.setEndOpacity);
cc.defineGetterSetter(_proto, "vector", _proto.getVector, _proto.setVector);
cc.defineGetterSetter(_proto, "compresseInterpolation", _proto.isCompressedInterpolation, _proto.setCompressedInterpolation);

_proto = cc.Sprite.prototype;
cc.defineGetterSetter(_proto, "dirty", _proto.getDirty, _proto.setDirty);
cc.defineGetterSetter(_proto, "flippedX", _proto.isFlippedX, _proto.setFlippedX);
cc.defineGetterSetter(_proto, "flippedY", _proto.isFlippedY, _proto.setFlippedY);
cc.defineGetterSetter(_proto, "offsetX", _proto._getOffsetX);
cc.defineGetterSetter(_proto, "offsetY", _proto._getOffsetY);
cc.defineGetterSetter(_proto, "atlasIndex", _proto.getAtlasIndex, _proto.setAtlasIndex);
cc.defineGetterSetter(_proto, "texture", _proto.getTexture, _proto.setTexture);
cc.defineGetterSetter(_proto, "textureRectRotated", _proto.isTextureRectRotated);
cc.defineGetterSetter(_proto, "textureAtlas", _proto.getTextureAtlas, _proto.setTextureAtlas);
cc.defineGetterSetter(_proto, "batchNode", _proto.getBatchNode, _proto.setBatchNode);
cc.defineGetterSetter(_proto, "quad", _proto.getQuad);
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);
cc.defineGetterSetter(_proto, "color", _proto.getColor, _proto.setColor);

_proto = cc.SpriteBatchNode.prototype;
cc.defineGetterSetter(_proto, "textureAtlas", _proto.getTextureAtlas, _proto.setTextureAtlas);
cc.defineGetterSetter(_proto, "descendants", _proto.getDescendants);
cc.defineGetterSetter(_proto, "texture", _proto.getTexture, _proto.setTexture);

_proto = cc.Texture2D.prototype;
cc.defineGetterSetter(_proto, "name", _proto.getName);
cc.defineGetterSetter(_proto, "pixelFormat", _proto.getPixelFormat);
cc.defineGetterSetter(_proto, "pixelsWidth", _proto.getPixelsWide);
cc.defineGetterSetter(_proto, "pixelsHeight", _proto.getPixelsHigh);
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "shaderProgram", _proto.getShaderProgram, _proto.setShaderProgram);
cc.defineGetterSetter(_proto, "maxS", _proto.getMaxS, _proto.setMaxS);
cc.defineGetterSetter(_proto, "maxT", _proto.getMaxT, _proto.setMaxT);

_proto = cc.LabelAtlas.prototype;
cc.defineGetterSetter(_proto, "string", _proto.getString, _proto.setString);
cc.defineGetterSetter(_proto, "opacity", _proto.getOpacity, _proto.setOpacity);

_proto = cc.LabelBMFont.prototype;
cc.defineGetterSetter(_proto, "string", _proto.getString, _proto._setStringForSetter);
cc.defineGetterSetter(_proto, "textAlign", _proto._getAlignment, _proto.setAlignment);
cc.defineGetterSetter(_proto, "boundingWidth", _proto._getBoundingWidth, _proto.setBoundingWidth);

_proto = cc.Menu.prototype;
cc.defineGetterSetter(_proto, "enabled", _proto.getEnabled, _proto.setEnabled);

_proto = cc.MenuItem.prototype;
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);

_proto = cc.MenuItemLabel.prototype;
cc.defineGetterSetter(_proto, "string", _proto.getString, _proto.setString);
cc.defineGetterSetter(_proto, "label", _proto.getLabel, _proto.setLabel);
cc.defineGetterSetter(_proto, "disabledColor", _proto.getDisabledColor, _proto.setDisabledColor);

_proto = cc.MenuItemFont.prototype;
//cc.defineGetterSetter(_proto, "fontSize", _proto.fontSize, _proto.setFontSize);
//cc.defineGetterSetter(_proto, "fontName", _proto.fontName, _proto.setFontName);

_proto = cc.MenuItemSprite.prototype;
cc.defineGetterSetter(_proto, "normalImage", _proto.getNormalImage, _proto.setNormalImage);
cc.defineGetterSetter(_proto, "selectedImage", _proto.getSelectedImage, _proto.setSelectedImage);
cc.defineGetterSetter(_proto, "disabledImage", _proto.getDisabledImage, _proto.setDisabledImage);

_proto = cc.ParticleBatchNode.prototype;
cc.defineGetterSetter(_proto, "textureAtlas", _proto.getTextureAtlas, _proto.setTextureAtlas);
cc.defineGetterSetter(_proto, "texture", _proto.getTexture, _proto.setTexture);

_proto = cc.ParticleSystem.prototype;
cc.defineGetterSetter(_proto, "opacityModifyRGB", _proto.isOpacityModifyRGB, _proto.setOpacityModifyRGB);
cc.defineGetterSetter(_proto, "batchNode", _proto.getBatchNode, _proto.setBatchNode);
cc.defineGetterSetter(_proto, "active", _proto.isActive);
cc.defineGetterSetter(_proto, "shapeType", _proto.getShapeType, _proto.setShapeType);
cc.defineGetterSetter(_proto, "atlasIndex", _proto.getAtlasIndex, _proto.setAtlasIndex);
cc.defineGetterSetter(_proto, "particleCount", _proto.getParticleCount, _proto.setParticleCount);
cc.defineGetterSetter(_proto, "duration", _proto.getDuration, _proto.setDuration);
cc.defineGetterSetter(_proto, "sourcePos", _proto.getSourcePosition, _proto.setSourcePosition);
cc.defineGetterSetter(_proto, "posVar", _proto.getPosVar, _proto.setPosVar);
cc.defineGetterSetter(_proto, "life", _proto.getLife, _proto.setLife);
cc.defineGetterSetter(_proto, "lifeVar", _proto.getLifeVar, _proto.setLifeVar);
cc.defineGetterSetter(_proto, "angle", _proto.getAngle, _proto.setAngle);
cc.defineGetterSetter(_proto, "angleVar", _proto.getAngleVar, _proto.setAngleVar);
cc.defineGetterSetter(_proto, "startSize", _proto.getStartSize, _proto.setStartSize);
cc.defineGetterSetter(_proto, "startSizeVar", _proto.getStartSizeVar, _proto.setStartSizeVar);
cc.defineGetterSetter(_proto, "endSize", _proto.getEndSize, _proto.setEndSize);
cc.defineGetterSetter(_proto, "endSizeVar", _proto.getEndSizeVar, _proto.setEndSizeVar);
cc.defineGetterSetter(_proto, "startSpin", _proto.getStartSpin, _proto.setStartSpin);
cc.defineGetterSetter(_proto, "startSpinVar", _proto.getStartSpinVar, _proto.setStartSpinVar);
cc.defineGetterSetter(_proto, "endSpin", _proto.getEndSpin, _proto.setEndSpin);
cc.defineGetterSetter(_proto, "endSpinVar", _proto.getEndSpinVar, _proto.setEndSpinVar);
cc.defineGetterSetter(_proto, "gravity", _proto.getGravity, _proto.setGravity);
cc.defineGetterSetter(_proto, "speed", _proto.getSpeed, _proto.setSpeed);
cc.defineGetterSetter(_proto, "speedVar", _proto.getSpeedVar, _proto.setSpeedVar);
cc.defineGetterSetter(_proto, "tangentialAccel", _proto.getTangentialAccel, _proto.setTangentialAccel);
cc.defineGetterSetter(_proto, "tangentialAccelVar", _proto.getTangentialAccelVar, _proto.setTangentialAccelVar);
cc.defineGetterSetter(_proto, "tangentialAccel", _proto.getTangentialAccel, _proto.setTangentialAccel);
cc.defineGetterSetter(_proto, "tangentialAccelVar", _proto.getTangentialAccelVar, _proto.setTangentialAccelVar);
cc.defineGetterSetter(_proto, "rotationIsDir", _proto.getRotationIsDir, _proto.setRotationIsDir);
cc.defineGetterSetter(_proto, "startRadius", _proto.getStartRadius, _proto.setStartRadius);
cc.defineGetterSetter(_proto, "startRadiusVar", _proto.getStartRadiusVar, _proto.setStartRadiusVar);
cc.defineGetterSetter(_proto, "endRadius", _proto.getEndRadius, _proto.setEndRadius);
cc.defineGetterSetter(_proto, "endRadiusVar", _proto.getEndRadiusVar, _proto.setEndRadiusVar);
cc.defineGetterSetter(_proto, "rotatePerS", _proto.getRotatePerSecond, _proto.setRotatePerSecond);
cc.defineGetterSetter(_proto, "rotatePerSVar", _proto.getRotatePerSecondVar, _proto.setRotatePerSecondVar);
cc.defineGetterSetter(_proto, "startColor", _proto.getStartColor, _proto.setStartColor);
cc.defineGetterSetter(_proto, "startColorVar", _proto.getStartColorVar, _proto.setStartColorVar);
cc.defineGetterSetter(_proto, "endColor", _proto.getEndColor, _proto.setEndColor);
cc.defineGetterSetter(_proto, "endColorVar", _proto.getEndColorVar, _proto.setEndColorVar);
cc.defineGetterSetter(_proto, "emissionRate", _proto.getEmissionRate, _proto.setEmissionRate);
cc.defineGetterSetter(_proto, "emitterMode", _proto.getEmitterMode, _proto.setEmitterMode);
cc.defineGetterSetter(_proto, "positionType", _proto.getPositionType, _proto.setPositionType);
cc.defineGetterSetter(_proto, "totalParticles", _proto.getTotalParticles, _proto.setTotalParticles);
cc.defineGetterSetter(_proto, "autoRemoveOnFinish", _proto.getAutoRemoveOnFinish, _proto.setAutoRemoveOnFinish);
cc.defineGetterSetter(_proto, "texture", _proto.getTexture, _proto.setTexture);

_proto = cc.ProgressTimer.prototype;
cc.defineGetterSetter(_proto, "midPoint", _proto.getMidpoint, _proto.setMidpoint);
cc.defineGetterSetter(_proto, "barChangeRate", _proto.getBarChangeRate, _proto.setBarChangeRate);
cc.defineGetterSetter(_proto, "type", _proto.getType, _proto.setType);
cc.defineGetterSetter(_proto, "percentage", _proto.getPercentage, _proto.setPercentage);
cc.defineGetterSetter(_proto, "sprite", _proto.getSprite, _proto.setSprite);
cc.defineGetterSetter(_proto, "reverseDir", _proto.isReverseDirection, _proto.setReverseDirection);

_proto = cc.RenderTexture.prototype;
cc.defineGetterSetter(_proto, "sprite", _proto.getSprite, _proto.setSprite);
cc.defineGetterSetter(_proto, "clearFlags", _proto.getClearFlags, _proto.setClearFlags);
cc.defineGetterSetter(_proto, "clearDepthVal", _proto.getClearDepthVal, _proto.setClearDepthVal);
cc.defineGetterSetter(_proto, "clearStencilVal", _proto.getClearStencilVal, _proto.setClearStencilVal);
cc.defineGetterSetter(_proto, "clearColorVal", _proto.getClearColor, _proto.setClearColor);
cc.defineGetterSetter(_proto, "autoDraw", _proto.getAutoDraw, _proto.setAutoDraw);

_proto = cc.NodeGrid.prototype;
cc.defineGetterSetter(_proto, "grid", _proto.getGrid, _proto.setGrid);
cc.defineGetterSetter(_proto, "target", null, _proto.setTarget);

_proto = cc.TMXLayer.prototype;
cc.defineGetterSetter(_proto, "tiles", _proto.getTiles, _proto.setTiles);
cc.defineGetterSetter(_proto, "tileset", _proto.getTileset, _proto.setTileset);
cc.defineGetterSetter(_proto, "layerOrientation", _proto.getLayerOrientation, _proto.setLayerOrientation);
cc.defineGetterSetter(_proto, "properties", _proto.getProperties, _proto.setProperties);
cc.defineGetterSetter(_proto, "layerName", _proto.getLayerName, _proto.setLayerName);
cc.defineGetterSetter(_proto, "layerWidth", _proto._getLayerWidth, _proto._setLayerWidth);
cc.defineGetterSetter(_proto, "layerHeight", _proto._getLayerHeight, _proto._setLayerHeight);
cc.defineGetterSetter(_proto, "tileWidth", _proto._getTileWidth, _proto._setTileWidth);
cc.defineGetterSetter(_proto, "tileHeight", _proto._getTileHeight, _proto._setTileHeight);
cc.defineGetterSetter(_proto, "texture", _proto.getTexture, _proto.setTexture);

_proto = cc.TMXTiledMap.prototype;
cc.defineGetterSetter(_proto, "properties", _proto.getProperties, _proto.setProperties);
cc.defineGetterSetter(_proto, "mapOrientation", _proto.getMapOrientation, _proto.setMapOrientation);
cc.defineGetterSetter(_proto, "objectGroups", _proto.getObjectGroups, _proto.setObjectGroups);
cc.defineGetterSetter(_proto, "mapWidth", _proto._getMapWidth, _proto._setMapWidth);
cc.defineGetterSetter(_proto, "mapHeight", _proto._getMapHeight, _proto._setMapHeight);
cc.defineGetterSetter(_proto, "tileWidth", _proto._getTileWidth, _proto._setTileWidth);
cc.defineGetterSetter(_proto, "tileHeight", _proto._getTileHeight, _proto._setTileHeight);

_proto = ccs.Armature.prototype;
cc.defineGetterSetter(_proto, "parentBone", _proto.getParentBone, _proto.setParentBone);
cc.defineGetterSetter(_proto, "animation", _proto.getAnimation, _proto.setAnimation);
cc.defineGetterSetter(_proto, "armatureData", _proto.getArmatureData, _proto.setArmatureData);
cc.defineGetterSetter(_proto, "name", _proto.getName, _proto.setName);
cc.defineGetterSetter(_proto, "batchNode", _proto.getBatchNode, _proto.setBatchNode);
cc.defineGetterSetter(_proto, "version", _proto.getVersion, _proto.setVersion);
cc.defineGetterSetter(_proto, "body", _proto.getBody, _proto.setBody);
cc.defineGetterSetter(_proto, "colliderFilter", _proto.setColliderFilter);

_proto = ccs.Bone.prototype;
cc.defineGetterSetter(_proto, "boneData", _proto.getBoneData, _proto.setBoneData);
cc.defineGetterSetter(_proto, "armature", _proto.getArmature, _proto.setArmature);
cc.defineGetterSetter(_proto, "parentBone", _proto.getParentBone, _proto.setParentBone);
cc.defineGetterSetter(_proto, "childArmature", _proto.getChildArmature, _proto.setChildArmature);
cc.defineGetterSetter(_proto, "childrenBone", _proto.getChildrenBone);
cc.defineGetterSetter(_proto, "tween", _proto.getTween);
cc.defineGetterSetter(_proto, "tweenData", _proto.getTweenData);
cc.defineGetterSetter(_proto, "transformDirty", _proto.getTransformDirty, _proto.setTransformDirty);
cc.defineGetterSetter(_proto, "colliderFilter", _proto.getColliderFilter, _proto.setColliderFilter);
cc.defineGetterSetter(_proto, "displayManager", _proto.getDisplayManager, _proto.setDisplayManager);
cc.defineGetterSetter(_proto, "ignoreMovementBoneData", _proto.getIgnoreMovementBoneData, _proto.setIgnoreMovementBoneData);
cc.defineGetterSetter(_proto, "name", _proto.getName, _proto.setName);
cc.defineGetterSetter(_proto, "blendDirty", _proto.getBlendDirty, _proto.setBlendDirty);

_proto = ccs.Skin.prototype;
cc.defineGetterSetter(_proto, "skinData", _proto.getSkinData, _proto.setSkinData);
cc.defineGetterSetter(_proto, "bone", _proto.getBone, _proto.setBone);
cc.defineGetterSetter(_proto, "displayName", _proto.getDisplayName);

_proto = ccs.ColliderDetector.prototype;
cc.defineGetterSetter(_proto, "colliderFilter", _proto.getColliderFilter, _proto.setColliderFilter);
cc.defineGetterSetter(_proto, "active", _proto.getActive, _proto.setActive);
cc.defineGetterSetter(_proto, "body", _proto.getBody, _proto.setBody);

_proto = ccui.Widget.prototype;
cc.defineGetterSetter(_proto, "xPercent", _proto._getXPercent, _proto._setXPercent);
cc.defineGetterSetter(_proto, "yPercent", _proto._getYPercent, _proto._setYPercent);
cc.defineGetterSetter(_proto, "widthPercent", _proto._getWidthPercent, _proto._setWidthPercent);
cc.defineGetterSetter(_proto, "heightPercent", _proto._getHeightPercent, _proto._setHeightPercent);
cc.defineGetterSetter(_proto, "widgetParent", _proto.getWidgetParent);
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);
cc.defineGetterSetter(_proto, "focused", _proto.isFocused, _proto.setFocused);
cc.defineGetterSetter(_proto, "sizeType", _proto.getSizeType, _proto.setSizeType);
cc.defineGetterSetter(_proto, "widgetType", _proto.getWidgetType);
cc.defineGetterSetter(_proto, "touchEnabled", _proto.isTouchEnabled, _proto.setTouchEnabled);
cc.defineGetterSetter(_proto, "updateEnabled", _proto.isUpdateEnabled, _proto.setUpdateEnabled);
cc.defineGetterSetter(_proto, "bright", _proto.isBright, _proto.setBright);
cc.defineGetterSetter(_proto, "name", _proto.getName, _proto.setName);
cc.defineGetterSetter(_proto, "actionTag", _proto.getActionTag, _proto.setActionTag);

_proto = ccui.Layout.prototype;
cc.defineGetterSetter(_proto, "clippingEnabled", _proto.isClippingEnabled, _proto.setClippingEnabled);
cc.defineGetterSetter(_proto, "clippingType", _proto.setClippingType);
cc.defineGetterSetter(_proto, "layoutType", _proto.getLayoutType, _proto.setLayoutType);

_proto = ccui.Button.prototype;
cc.defineGetterSetter(_proto, "width", _proto._getWidth, _proto._setWidth);
cc.defineGetterSetter(_proto, "height", _proto._getHeight, _proto._setHeight);
cc.defineGetterSetter(_proto, "titleText", _proto.getTitleText, _proto.setTitleText);
cc.defineGetterSetter(_proto, "titleFont", _proto._getTitleFont, _proto._setTitleFont);
cc.defineGetterSetter(_proto, "titleFontSize", _proto.getTitleFontSize, _proto.setTitleFontSize);
cc.defineGetterSetter(_proto, "titleFontName", _proto.getTitleFontName, _proto.setTitleFontName);
cc.defineGetterSetter(_proto, "titleFontColor", _proto.getTitleFontColor, _proto.setTitleFontColor);
cc.defineGetterSetter(_proto, "pressedActionEnabled", _proto.getPressedActionEnabled, _proto.setPressedActionEnabled);

_proto = ccui.CheckBox.prototype;
cc.defineGetterSetter(_proto, "selected", _proto.getSelectedState, _proto.setSelectedState);

_proto = ccui.Text.prototype;
cc.defineGetterSetter(_proto, "boundingWidth", _proto._getBoundingWidth, _proto._setBoundingWidth);
cc.defineGetterSetter(_proto, "boundingHeight", _proto._getBoundingHeight, _proto._setBoundingHeight);
cc.defineGetterSetter(_proto, "string", _proto.getStringValue, _proto.setText);
cc.defineGetterSetter(_proto, "stringLength", _proto.getStringLength);
cc.defineGetterSetter(_proto, "font", _proto._getFont, _proto._setFont);
cc.defineGetterSetter(_proto, "fontName", _proto.getFontName, _proto.setFontName);
cc.defineGetterSetter(_proto, "fontSize", _proto.getFontSize, _proto.setFontSize);
cc.defineGetterSetter(_proto, "textAlign", _proto.getHorizontalAlignment, _proto.setTextHorizontalAlignment);
cc.defineGetterSetter(_proto, "verticalAlign", _proto.getVerticalAlignment, _proto.setTextVerticalAlignment);
cc.defineGetterSetter(_proto, "touchScaleEnabled", _proto.getTouchScaleEnabled, _proto.setTouchScaleEnabled);

_proto = ccui.TextAtlas.prototype;
cc.defineGetterSetter(_proto, "string", _proto.getStringValue, _proto.setStringValue);

_proto = ccui.TextBMFont.prototype;
cc.defineGetterSetter(_proto, "string", _proto.getStringValue, _proto.setStringValue);

_proto = ccui.LoadingBar.prototype;
cc.defineGetterSetter(_proto, "direction", _proto.getDirection, _proto.setDirection);
cc.defineGetterSetter(_proto, "percent", _proto.getPercent, _proto.setPercent);

_proto = ccui.Slider.prototype;
cc.defineGetterSetter(_proto, "percent", _proto.getPercent, _proto.setPercent);

_proto = ccui.TextField.prototype;
cc.defineGetterSetter(_proto, "maxLengthEnabled", _proto.isMaxLengthEnabled, _proto.setMaxLengthEnabled);
cc.defineGetterSetter(_proto, "maxLength", _proto.getMaxLength, _proto.setMaxLength);
cc.defineGetterSetter(_proto, "passwordEnabled", _proto.isPasswordEnabled, _proto.setPasswordEnabled);
cc.defineGetterSetter(_proto, "string", _proto.getStringValue, _proto.setText);
cc.defineGetterSetter(_proto, "font", _proto._getFont, _proto._setFont);
cc.defineGetterSetter(_proto, "fontSize", _proto.getFontSize, _proto.setFontSize);
cc.defineGetterSetter(_proto, "fontName", _proto.getFontName, _proto.setFontName);

_proto = ccui.ScrollView.prototype;
cc.defineGetterSetter(_proto, "innerWidth", _proto._getInnerWidth, _proto._setInnerWidth);
cc.defineGetterSetter(_proto, "innerHeight", _proto._getInnerHeight, _proto._setInnerHeight);
cc.defineGetterSetter(_proto, "bounceEnabled", _proto.getBounceEnabled, _proto.setBounceEnabled);
cc.defineGetterSetter(_proto, "inertiaScrollEnabled", _proto.getInertiaScrollEnabled, _proto.setInertiaScrollEnabled);

_proto = cc.EditBox.prototype;
cc.defineGetterSetter(_proto, "font", null, _proto._setFont);
cc.defineGetterSetter(_proto, "fontName", null, _proto.setFontName);
cc.defineGetterSetter(_proto, "fontSize", null, _proto.setFontSize);
cc.defineGetterSetter(_proto, "string", _proto.getText, _proto.setText);
cc.defineGetterSetter(_proto, "maxLength", _proto.getMaxLength, _proto.setMaxLength);

_proto = cc.Control.prototype;
cc.defineGetterSetter(_proto, "state", _proto.getState);
cc.defineGetterSetter(_proto, "enabled", _proto.isEnabled, _proto.setEnabled);
cc.defineGetterSetter(_proto, "selected", _proto.isSelected, _proto.setSelected);
cc.defineGetterSetter(_proto, "highlighted", _proto.isHighlighted, _proto.setHighlighted);

_proto = cc.ControlButton.prototype;
cc.defineGetterSetter(_proto, "adjustBackgroundImage", _proto.getAdjustBackgroundImage, _proto.setAdjustBackgroundImage);
cc.defineGetterSetter(_proto, "zoomOnTouchDown", _proto.getZoomOnTouchDown, _proto.setZoomOnTouchDown);
cc.defineGetterSetter(_proto, "preferredSize", _proto.getPreferredSize, _proto.setPreferredSize);
cc.defineGetterSetter(_proto, "labelAnchor", _proto.getLabelAnchorPoint, _proto.setLabelAnchorPoint);

_proto = cc.ControlColourPicker.prototype;
cc.defineGetterSetter(_proto, "background", _proto.getBackground);

_proto = cc.ControlHuePicker.prototype;
cc.defineGetterSetter(_proto, "hue", _proto.getHue, _proto.setHue);
cc.defineGetterSetter(_proto, "huePercent", _proto.getHuePercentage, _proto.setHuePercentage);
cc.defineGetterSetter(_proto, "background", _proto.getBackground);
cc.defineGetterSetter(_proto, "slider", _proto.getSlider);
cc.defineGetterSetter(_proto, "startPos", _proto.getStartPos);

_proto = cc.ControlPotentiometer.prototype;
cc.defineGetterSetter(_proto, "value", _proto.getValue, _proto.setValue);
cc.defineGetterSetter(_proto, "minValue", _proto.getMinimumValue, _proto.setMinimumValue);
cc.defineGetterSetter(_proto, "maxValue", _proto.getMaximumValue, _proto.setMaximumValue);
cc.defineGetterSetter(_proto, "progressTimer", _proto.getProgressTimer, _proto.setProgressTimer);
cc.defineGetterSetter(_proto, "thumbSprite", _proto.getThumbSprite, _proto.setThumbSprite);
cc.defineGetterSetter(_proto, "prevLocation", _proto.getPreviousLocation, _proto.setPreviousLocation);

_proto = cc.ControlSaturationBrightnessPicker.prototype;
cc.defineGetterSetter(_proto, "saturation", _proto.getSaturation);
cc.defineGetterSetter(_proto, "brightness", _proto.getBrightness);
cc.defineGetterSetter(_proto, "background", _proto.getBackground);
cc.defineGetterSetter(_proto, "overlay", _proto.getOverlay);
cc.defineGetterSetter(_proto, "shadow", _proto.getShadow);
cc.defineGetterSetter(_proto, "slider", _proto.getSlider);
cc.defineGetterSetter(_proto, "startPos", _proto.getStartPos);

_proto = cc.ControlSlider.prototype;
cc.defineGetterSetter(_proto, "value", _proto.getValue, _proto.setValue);
cc.defineGetterSetter(_proto, "minValue", _proto.getMinimumValue, _proto.setMinimumValue);
cc.defineGetterSetter(_proto, "maxValue", _proto.getMaximumValue, _proto.setMaximumValue);
cc.defineGetterSetter(_proto, "minAllowedValue", _proto.getMinimumAllowedValue, _proto.setMinimumAllowedValue);
cc.defineGetterSetter(_proto, "maxAllowedValue", _proto.getMaximumAllowedValue, _proto.setMaximumAllowedValue);
cc.defineGetterSetter(_proto, "thumbSprite", _proto.getThumbSprite);
cc.defineGetterSetter(_proto, "progressSprite", _proto.getProgressSprite);
cc.defineGetterSetter(_proto, "backgroundSprite", _proto.getBackgroundSprite);

_proto = cc.ControlStepper.prototype;
cc.defineGetterSetter(_proto, "wraps", _proto.getWraps, _proto.setWraps);
cc.defineGetterSetter(_proto, "value", _proto.getValue, _proto.setValue);
cc.defineGetterSetter(_proto, "minValue", _proto.getMinimumValue, _proto.setMinimumValue);
cc.defineGetterSetter(_proto, "maxValue", _proto.getMaximumValue, _proto.setMaximumValue);
cc.defineGetterSetter(_proto, "stepValue", _proto.getStepValue, _proto.setStepValue);
cc.defineGetterSetter(_proto, "continuous", _proto.isContinuous);
cc.defineGetterSetter(_proto, "minusSprite", _proto.getMinusSprite, _proto.setMinusSprite);
cc.defineGetterSetter(_proto, "plusSprite", _proto.getPlusSprite, _proto.setPlusSprite);
cc.defineGetterSetter(_proto, "minusLabel", _proto.getMinusLabel, _proto.setMinusLabel);
cc.defineGetterSetter(_proto, "plusSLabel", _proto.getPlusSLabel, _proto.setPlusSLabel);

_proto = cc.Scale9Sprite.prototype;
cc.defineGetterSetter(_proto, "preferredSize", _proto.getPreferredSize, _proto.setPreferredSize);
cc.defineGetterSetter(_proto, "capInsets", _proto.getCapInsets, _proto.setCapInsets);
cc.defineGetterSetter(_proto, "insetLeft", _proto.getInsetLeft, _proto.setInsetLeft);
cc.defineGetterSetter(_proto, "insetTop", _proto.getInsetTop, _proto.setInsetTop);
cc.defineGetterSetter(_proto, "insetRight", _proto.getInsetRight, _proto.setInsetRight);
cc.defineGetterSetter(_proto, "insetBottom", _proto.getInsetBottom, _proto.setInsetBottom);

_proto = cc.ScrollView.prototype;
cc.defineGetterSetter(_proto, "direction", _proto.getDirection, _proto.setDirection);

_proto = cc.TableViewCell.prototype;
cc.defineGetterSetter(_proto, "objectId", _proto.getObjectID, _proto.setObjectID);
