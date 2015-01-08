/****************************************************************************
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
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

(function(load, baseParser){

    var DEBUG = false;

    var Parser = baseParser.extend({

        parse: function(file, json){
            var resourcePath = this._dirname(file);
            this.pretreatment(json, resourcePath, file);
            var node = this.parseNode(this.getNodeJson(json), resourcePath);
            this.deferred(json, resourcePath, node, file);
            return node;
        },

        getNodeJson: function(json){
            return json["Content"]["Content"]["ObjectData"];
        },

        getClass: function(json){
            return json["ctype"];
        }

    });
    var parser = new Parser();


    //////////
    // NODE //
    //////////

    parser.generalAttributes = function(node, json){
        if(json["Name"] != null)
            node.setName(json["Name"]);

        var position = json["Position"];
        if(position != null && (position["X"] != null || position["Y"] != null))
            node.setPosition(cc.p(position["X"]||0, position["Y"]||0));

        var scale = json["Scale"];
        if(scale != null){
            if(scale["ScaleX"] != null)
                node.setScaleX(scale["ScaleX"]);
            if(scale["ScaleY"] != null)
                node.setScaleY(scale["ScaleY"]);
        }

        var rotationSkewX = json["RotationSkewX"];
        if (rotationSkewX != null)
            node.setRotationX(rotationSkewX);

        var rotationSkewY = json["RotationSkewY"];
        if (json["RotationSkewY"] != null)
            node.setRotationY(rotationSkewY);


        var anchor = json["AnchorPoint"];
        if(anchor != null){
            if(anchor["ScaleX"] == null)
                anchor["ScaleX"] = 0;
            if(anchor["ScaleY"] == null)
                anchor["ScaleY"] = 0;
            if(anchor["ScaleX"] != 0.5 || anchor["ScaleY"] != 0.5)
                node.setAnchorPoint(cc.p(anchor["ScaleX"], anchor["ScaleY"]));
        }

        if (json["ZOrder"] != null)
            node.setLocalZOrder(json["ZOrder"]);

        var visible = json["VisibleForFrame"];
        if (visible != null)
            node.setVisible(visible == "True");

        setContentSize(node, json["Size"]);

        if (json["Alpha"] != null)
            node.setOpacity(json["Alpha"]);

        if (json["Tag"] != null)
            node.setTag(json["Tag"]);

        if (json["ActionTag"] != null)
            node.setUserObject(new ccs.ActionTimelineData(json["ActionTag"]));

        node.setCascadeColorEnabled(true);
        node.setCascadeOpacityEnabled(true);
    };

    parser.parseChild = function(node, children, resourcePath){
        if(!node || !children) return;
        for (var i = 0; i < children.length; i++) {
            var child = this.parseNode(children[i], resourcePath);
            if(child){
                if(node instanceof ccui.PageView){
                    if(child instanceof ccui.Layout)
                        node.addPage(child);
                } else {
                    if(node instanceof ccui.ListView){
                        if(child instanceof ccui.Widget)
                            node.pushBackCustomItem(child);
                    } else {
                        if(!(node instanceof ccui.Layout) && child instanceof ccui.Widget) {
                            if(child.getPositionType() == ccui.Widget.POSITION_PERCENT) {
                                var position = child.getPositionPercent();
                                var anchor = node.getAnchorPoint();
                                child.setPositionPercent(cc.p(position.x + anchor.x, position.y + anchor.y));
                            }
                            var AnchorPointIn = node.getAnchorPointInPoints();
                            child.setPosition(cc.p(child.getPositionX() + AnchorPointIn.x, child.getPositionY() + AnchorPointIn.y));
                        }
                        node.addChild(child);
                    }
                }
            }
        }
    };

    /**
     * SingleNode
     * @param json
     * @returns {cc.Node}
     */
    parser.initSingleNode = function(json){
        var node = new cc.Node();

        this.generalAttributes(node, json);

        return node;
    };

    /**
     * Sprite
     * @param json
     * @param resourcePath
     * @returns {cc.Sprite}
     */
    parser.initSprite = function(json, resourcePath){
        var node =  new cc.Sprite();

        loadTexture(json["FileData"], resourcePath, function(path, type){
            if(type == 0)
                node.setTexture(path);
            else if(type == 1){
                var spriteFrame = cc.spriteFrameCache.getSpriteFrame(path);
                node.setSpriteFrame(spriteFrame);
            }

        });

        if(json["FlipX"])
            node.setFlippedX(true);
        if(json["FlipY"])
            node.setFlippedY(true);

        this.generalAttributes(node, json);
        var color = json["CColor"];
        if(color != null)
            node.setColor(getColor(color));

        return node;
    };

    /**
     * Particle
     * @param json
     * @param resourcePath
     * @returns {*}
     */
    parser.initParticle = function(json, resourcePath){
        var node,
            self = this;
        loadTexture(json["FileData"], resourcePath, function(path, type){
            if(!cc.loader.getRes(path))
                cc.log("%s need to pre load", path);
            node = new cc.ParticleSystem(path);
            self.generalAttributes(node, json);
        });
        return node;
    };


    ////////////
    // WIDGET //
    ////////////

    parser.widgetAttributes = function(widget, json){
        var name = json["Name"];
        if(name)
            widget.setName(name);

        var actionTag = json["ActionTag"];
        if(actionTag){
            widget.setActionTag(actionTag);
            widget.setUserObject(new ccs.ActionTimelineData(actionTag));
        }

        var rotationSkewX = json["RotationSkewX"];
        if(rotationSkewX)
            widget.setRotationX(rotationSkewX);

        var rotationSkewY = json["RotationSkewY"];
        if(rotationSkewY)
            widget.setRotationY(rotationSkewY);

        //var rotation = json["Rotation"];

        var flipX = json["FlipX"];
        if(flipX)
            widget.setFlippedX(true);

        var flipY = json["FlipY"];
        if(flipY)
            widget.setFlippedY(true);

        var zOrder = json["zOrder"];
        if(zOrder != null)
            widget.setLocalZOrder(zOrder);

        //var visible = json["Visible"];

        var visible = json["VisibleForFrame"];
        if(visible != null)
            widget.setVisible(visible);

        var alpha = json["Alpha"];
        if(alpha != null)
            widget.setOpacity(alpha);

        var tag = json["Tag"];
        if(tag != null)
            widget.setTag(tag);

        var touchEnabled = json["TouchEnable"];
        if(touchEnabled)
            widget.setTouchEnabled(true);

        // -- var frameEvent = json["FrameEvent"];

        var callBackType = json["CallBackType"];
        if(callBackType != null)
            widget.setCallbackType(callBackType);

        var callBackName = json["CallBackName"];
        if(callBackName)
            widget.setCallbackName(callBackName);

        var position = json["Position"];
        if(position != null)
            widget.setPosition(position["X"] || 0, position["Y"] || 0);

        var scale = json["Scale"];
        if(scale != null){
            widget.setScaleX(scale["ScaleX"] || 1);
            widget.setScaleY(scale["ScaleY"] || 1);
        }

        var anchorPoint = json["AnchorPoint"];
        if(anchorPoint != null)
            widget.setAnchorPoint(anchorPoint["ScaleX"] || 0.5, anchorPoint["ScaleY"] || 0.5);

        var color = json["CColor"];
        if(color != null)
            widget.setColor(getColor(color));

        setContentSize(widget, json["Size"]);

        if(widget instanceof ccui.Layout){
            //todo update UILayoutComponent.bindLayoutComponent
            var positionXPercentEnabled = json["PositionPercentXEnable"];
            var positionYPercentEnabled = json["PositionPercentYEnable"];
            var sizeXPercentEnable = json["PercentWidthEnable"];
            var sizeYPercentEnable = json["PercentHeightEnable"];
            var stretchHorizontalEnabled = json["StretchWidthEnable"];
            var stretchVerticalEnabled = json["StretchHeightEnable"];
            var horizontalEdge = json["HorizontalEdge"];
            var verticalEdge = json["VerticalEdge"];
            var leftMargin = json["LeftMargin"];
            var rightMargin = json["RightMargin"];
            var topMargin = json["TopMargin"];
            var bottomMargin = json["BottomMargin"];
            //var prePosition = json["PrePosition"];
            //if(prePosition)
            //    prePosition["X"], prePosition["Y"]

            //var preSize = json["PreSize"];
            //if(preSize)
            //    preSize["X"], preSize["Y"]
        }

    };

    /**
     * Layout
     * @param json
     * @param resourcePath
     * @returns {ccui.Layout}
     */
    parser.initPanel = function(json, resourcePath){
        var widget = new ccui.Layout();

        this.widgetAttributes(widget, json);

        var clipEnabled = json["ClipAple"];
        if(clipEnabled != null)
            widget.setClippingEnabled(clipEnabled);

        var colorType = json["ComboBoxIndex"];
        if(colorType != null)
            widget.setBackGroundColorType(colorType);

        var bgColorOpacity = json["BackColorAlpha"];
        if(bgColorOpacity != null)
            widget.setBackGroundColorOpacity(bgColorOpacity);

        var backGroundScale9Enabled = json["Scale9Enable"];
        if(backGroundScale9Enabled != null)
            widget.setBackGroundImageScale9Enabled(backGroundScale9Enabled);

        var scale9OriginX = json["Scale9OriginX"];
        var scale9OriginY = json["Scale9OriginY"];

        var scale9Width = json["Scale9Width"];
        var scale9Height = json["Scale9Height"];

        var bgStartColor = json["FirstColor"];
        var bgEndColor = json["EndColor"];
        if(bgStartColor != null && bgEndColor != null)
            widget.setBackGroundColor( getColor(bgStartColor), getColor(bgEndColor) );

        var colorVector = json["ColorVector"];
        if(colorVector != null)
            colorVector["ScaleX"];

        loadTexture(json["FileData"], resourcePath, function(path, type){
            widget.setBackGroundImage(path, type);
        });

        return widget;
    };

    /**
     * Text
     * @param json
     * @param resourcePath
     */
    parser.initText = function(json, resourcePath){

        var widget = new ccui.Text();

        this.widgetAttributes(widget, json);

        var touchScaleEnabled = json["TouchScaleChangeAble"];
        if(touchScaleEnabled != null)
            widget.setTouchScaleChangeEnabled(touchScaleEnabled);

        var text = json["LabelText"];
        if(text != null)
            widget.setString(text);

        var fontSize = json["FontSize"];
        if(fontSize != null)
            widget.setFontSize(fontSize);

        var fontName = json["FontName"];
        if(fontName != null)
            widget.setFontName(fontName);

        var areaWidth = json["AreaWidth"];
        var areaHeight = json["areaHeight"];
        if(areaWidth && areaHeight)
            widget.setTextAreaSize(cc.size(areaWidth, areaHeight));

        var h_alignment = json["HorizontalAlignmentType"];
        switch(h_alignment){
            case "HT_Right":
                h_alignment = 2; break;
            case "HT_Center":
                h_alignment = 1; break;
            case "HT_Left":
            default:
                h_alignment = 0;
        }
        widget.setTextHorizontalAlignment(h_alignment);

        var v_alignment = json["VerticalAlignmentType"];
        switch(v_alignment){
            case "VT_Bottom":
                v_alignment = 2; break;
            case "VT_Center":
                v_alignment = 1; break;
            case "VT_Top":
            default:
                v_alignment = 0;
        }
        widget.setTextVerticalAlignment(v_alignment);

        //todo check it
        var isCustomSize = json["IsCustomSize"];
        if(isCustomSize != null)
            widget.ignoreContentAdaptWithSize(!isCustomSize);

        //todo check it
        var fontResource = json["FontResource"];
        if(fontResource != null){
            var path = fontResource["Path"];
            //resoutceType = fontResource["Type"];
            if(path != null){
                fontName = path.match(/([^\/]+)\.ttf/);
                fontName = fontName ? fontName[1] : "";
                widget.setFontName(fontName);
            }
        }

        widget.setUnifySizeEnabled(false);

        if(widget.isIgnoreContentAdaptWithSize())
            setContentSize(widget, json["Size"]);

        return widget;

    };

    /**
     * Button
     * @param json
     * @param resourcePath
     */
    parser.initButton = function(json, resourcePath){

        var widget = new ccui.Button();

        this.widgetAttributes(widget, json);

        var scale9Enabled = json["Scale9Enable"];
        if(scale9Enabled){
            widget.setScale9Enabled(scale9Enabled);
            widget.setUnifySizeEnabled(false);
            widget.ignoreContentAdaptWithSize(false);

            var capInsets = cc.rect(
                    json["Scale9OriginX"] || 0,
                    json["Scale9OriginY"] || 0,
                    json["Scale9Width"] || 0,
                    json["Scale9Height"] || 0
            );

            widget.setCapInsets(capInsets);

        }

        setContentSize(widget, json["Size"]);

        var text = json["ButtonText"];
        if(text != null)
            widget.setTitleText(text);

        var fontSize = json["FontSize"];
        if(fontSize != null)
            widget.setTitleFontSize(fontSize);

        var fontName = json["FontName"];
        if(fontName != null)
            widget.setTitleFontName(fontName);

        var displaystate = json["DisplayState"];
        if(displaystate != null){
            widget.setBright(displaystate);
            widget.setEnabled(displaystate);
        }

        var textColor = json["TextColor"];
        if(textColor != null)
            widget.setTitleColor(getColor(textColor));


        loadTexture(json["NormalFileData"], resourcePath, function(path, type){
            widget.loadTextureNormal(path, type);
        });
        loadTexture(json["PressedFileData"], resourcePath, function(path, type){
            widget.loadTexturePressed(path, type);
        });
        loadTexture(json["DisabledFileData"], resourcePath, function(path, type){
            widget.loadTextureDisabled(path, type);
        });

        var fontResourcePath, fontResourceResourceType, fontResourcePlistFile;
        var fontResource = json["FontResource"];
        if(fontResource != null){
            //console.log(fontResource["Path"]);
        //    fontResourcePath = fontResource["Path"];
        //    fontResourceResourceType = fontResource["Type"] == "Default" ? 0 : 1;
        //    fontResourcePlistFile = fontResource["Plist"];
        }

        return widget;

    };

    /**
     * CheckBox
     * @param json
     * @param resourcePath
     */
    parser.initCheckBox = function(json, resourcePath){

        var widget = new ccui.CheckBox();

        this.widgetAttributes(widget, json);

        var selectedState = json["CheckedState"];
        if(selectedState)
            widget.setSelected(true);

        var displaystate = json["DisplayState"];
        if(displaystate){
            widget.setBright(displaystate);
            widget.setEnabled(displaystate);
        }

        var dataList = [
            {name: "NormalBackFileData", handle: widget.loadTextureBackGround},
            {name: "PressedBackFileData", handle: widget.loadTextureBackGroundSelected},
            {name: "NodeNormalFileData", handle: widget.loadTextureFrontCross},
            {name: "DisableBackFileData", handle: widget.loadTextureBackGroundDisabled},
            {name: "NodeDisableFileData", handle: widget.loadTextureFrontCrossDisabled}
        ];

        dataList.forEach(function(item){
            loadTexture(json[item.name], resourcePath, function(path, type){
                item.handle.call(widget, path, type);
            });
        });

        return widget;
    };

    /**
     * ScrollView
     * @param json
     * @param resourcePath
     */
    parser.initScrollView = function(json, resourcePath){
        var widget = new ccui.ScrollView();

        this.widgetAttributes(widget, json);

        var clipEnabled = json["ClipAble"];
        if(clipEnabled)
            widget.setClippingEnabled(true);

        var colorType = json["ComboBoxIndex"];
        if(colorType != null)
            widget.setBackGroundColorType(colorType);

        var bgColorOpacity = json["BackColorAlpha"];
        if(bgColorOpacity)
            widget.setBackGroundColorOpacity(bgColorOpacity);

        var backGroundScale9Enabled = json["Scale9Enable"];
        if(backGroundScale9Enabled){
            widget.setBackGroundImageScale9Enabled(true);
        }

        var scale9OriginX = json["Scale9OriginX"];
        var scale9OriginY = json["Scale9OriginY"];

        var scale9Width = json["Scale9Width"];
        var scale9Height = json["Scale9Height"];

        //todo please check it
        setContentSize(widget, json["Size"]);

        if(json["FirstColor"] && json["EndColor"]){
            var bgStartColor, bgEndColor;
            bgStartColor = getColor(json["FirstColor"]);
            bgEndColor = getColor(json["EndColor"]);
            widget.setBackGroundColor(bgStartColor, bgEndColor);
        }else{
            widget.setBackGroundColor(getColor(json["SingleColor"]));
        }


        var colorVector = json["ColorVector"];
        if(colorVector){
            widget.setBackGroundColorVector(cc.p(colorVector["ScaleX"] || 1, colorVector["ScaleY"] || 1));
        }

        loadTexture(json["FileData"], resourcePath, function(path, type){
            widget.setBackGroundImage(path, type);
        });

        var innerNodeSize = json["InnerNodeSize"];
        var innerSize = cc.size(
            innerNodeSize["width"] || 0,
            innerNodeSize["height"] || 0
        );
        widget.setInnerContainerSize(innerSize);

        var direction = 0;
        if(json["ScrollDirectionType"] == "Vertical") direction = 1;
        if(json["ScrollDirectionType"] == "Horizontal") direction = 2;
        if(json["ScrollDirectionType"] == "Vertical_Horizontal") direction = 3;
        widget.setDirection(direction);

        var bounceEnabled = json["IsBounceEnabled"];
        if(bounceEnabled)
            widget.setBounceEnabled(bounceEnabled);

        return widget;
    };

    /**
     * ImageView
     * @param json
     * @param resourcePath
     */
    parser.initImageView = function(json, resourcePath){

        var widget = new ccui.ImageView();

        this.widgetAttributes(widget, json);

        var scale9Enabled = json["Scale9Enable"];
        if(scale9Enabled){
            widget.setScale9Enabled(true);
            widget.setUnifySizeEnabled(false);
            widget.ignoreContentAdaptWithSize(false);

            var scale9OriginX = json["Scale9OriginX"];
            var scale9OriginY = json["Scale9OriginY"];
            var scale9Width = json["Scale9Width"];
            var scale9Height = json["Scale9Height"];
            widget.setCapInsets(cc.rect(
                scale9OriginX || 0,
                scale9OriginY || 0,
                scale9Width || 0,
                scale9Height || 0
            ));
        }

        setContentSize(widget, json["Size"]);

        loadTexture(json["FileData"], resourcePath, function(path, type){
            widget.loadTexture(path, type);
        });
        loadTexture(json["ImageFileData"], resourcePath, function(path, type){
            widget.loadTexture(path, type);
        });

        return widget;
    };

    /**
     * LoadingBar
     * @param json
     * @param resourcePath
     * @returns {ccui.LoadingBar}
     */
    parser.initLoadingBar = function(json, resourcePath){

        var widget = new ccui.LoadingBar();

        this.widgetAttributes(widget, json);

        loadTexture(json["ImageFileData"], resourcePath, function(path, type){
            widget.loadTexture(path, type);
        });

        var direction = json["ProgressType"];
        widget.setDirection((direction != "Left_To_Right") | 0);

        var percent = json["ProgressInfo"];
        if(percent != null)
            widget.setPercent(percent);

        return widget;

    };

    /**
     * Slider
     * @param json
     * @param resourcePath
     */
    parser.initSlider = function(json, resourcePath){

        var widget = new ccui.Slider();
        var loader = cc.loader;

        this.widgetAttributes(widget, json);

        var textureList = [
            {name: "BackGroundData", handle: widget.loadBarTexture},
            {name: "BallNormalData", handle: widget.loadSlidBallTextureNormal},
            {name: "BallPressedData", handle: widget.loadSlidBallTexturePressed},
            {name: "BallDisabledData", handle: widget.loadSlidBallTextureDisabled},
            {name: "ProgressBarData", handle: widget.loadProgressBarTexture}
        ];
        textureList.forEach(function(item){
            loadTexture(json[item.name], resourcePath, function(path, type){
                if(type == 0 && !loader.getRes(path))
                    cc.log("%s need to pre load", path);
                item.handle.call(widget, path, type);
            });
        });

        var percent = json["PercentInfo"];
        if(percent != null)
            widget.setPercent(percent);

        var displaystate = json["DisplayState"];
        if(displaystate != null){
            widget.setBright(displaystate);
            widget.setEnabled(displaystate);
        }

        return widget;
    };

    /**
     * PageView
     * @param json
     * @param resourcePath
     */
    parser.initPageView = function(json, resourcePath){

        var widget = new ccui.PageView();

        this.widgetAttributes(widget, json);

        var clipEnabled = json["ClipAble"];
        if(clipEnabled)
            widget.setClippingEnabled(true);

        var backGroundScale9Enabled = json["Scale9Enable"];
        if(backGroundScale9Enabled){
            widget.setBackGroundImageScale9Enabled(true);

            var scale9OriginX = json["Scale9OriginX"];
            var scale9OriginY = json["Scale9OriginY"];
            var scale9Width = json["Scale9Width"];
            var scale9Height = json["Scale9Height"];
            widget.setBackGroundImageCapInsets(cc.rect(
                    scale9OriginX || 0,
                    scale9OriginY || 0,
                    scale9Width || 0,
                    scale9Height || 0
            ));
        }

        var colorType = json["ComboBoxIndex"];
        if(colorType != null)
            widget.setBackGroundColorType(colorType);

        var bgColorOpacity = json["BackColorAlpha"];
        var bgColor = getColor(json["SingleColor"]);
        var bgEndColor = getColor(json["EndColor"]);
        var bgStartColor = getColor(json["FirstColor"]);
        if(bgEndColor && bgStartColor)
            widget.setBackGroundColor(bgStartColor, bgEndColor);
        else
            widget.setBackGroundColor(bgColor);

        var colorVector = json["ColorVector"];
        if(colorVector != null && colorVector["ScaleX"] != null && colorVector["ScaleY"] != null)
            widget.setBackGroundColorVector(colorVector["ScaleX"], colorVector["ScaleY"]);
        widget.setBackGroundColorOpacity(bgColorOpacity);

        loadTexture(json["FileData"], resourcePath, function(path, type){
            widget.setBackGroundImage(path, type);
        });

        setContentSize(widget, json["Size"]);

        return widget;

    };

    /**
     * ListView
     * @param json
     * @param resourcePath
     * @returns {ccui.ListView}
     */
    parser.initListView = function(json, resourcePath){

        var widget = new ccui.ListView();

        var clipEnabled = json["ClipAble"];
        if(clipEnabled)
            widget.setClippingEnabled(true);

        var colorType = json["ComboBoxIndex"];
        if(colorType != null)
            widget.setBackGroundColorType(colorType);

        var bgColorOpacity = json["BackColorAlpha"];
        var backGroundScale9Enabled = json["Scale9Enable"];
        if(backGroundScale9Enabled){
            widget.setBackGroundImageScale9Enabled(true);

            var scale9OriginX = json["Scale9OriginX"];
            var scale9OriginY = json["Scale9OriginY"];
            var scale9Width = json["Scale9Width"];
            var scale9Height = json["Scale9Height"];
            widget.setBackGroundImageCapInsets(cc.rect(
                    scale9OriginX || 0,
                    scale9OriginY || 0,
                    scale9Width || 0,
                    scale9Height || 0
            ));
        }

        var directionType = json["DirectionType"];
        var verticalType = json["VerticalType"];
        var horizontalType = json["HorizontalType"];
        if(!directionType){
            widget.setDirection(ccui.ListView.DIR_HORIZONTAL);
            if(verticalType == "Align_Bottom")
                widget.setGravity(ccui.ListView.GRAVITY_BOTTOM);
            else if(verticalType == "Align_VerticalCenter")
                widget.setGravity(ccui.ListView.GRAVITY_CENTER_VERTICAL);
            else
                widget.setGravity(ccui.ListView.GRAVITY_TOP);
        }else if(directionType == "Vertical"){
            widget.setDirection(ccui.ListView.DIR_VERTICAL);
            if (horizontalType == "")
                widget.setGravity(ccui.ListView.GRAVITY_LEFT);
            else if (horizontalType == "Align_Right")
                widget.setGravity(ccui.ListView.GRAVITY_RIGHT);
            else if (horizontalType == "Align_HorizontalCenter")
                widget.setGravity(ccui.ListView.GRAVITY_CENTER_VERTICAL);
        }


        var bounceEnabled = json["IsBounceEnabled"];
        if(bounceEnabled)
            widget.setBounceEnabled(true);
        var itemMargin = json["ItemMargin"];
        if(itemMargin != null){
            widget.setItemsMargin(itemMargin);
        }

        var innerSize = json["InnerNodeSize"];
        //Width
        if(innerSize != null)
            widget.setInnerContainerSize(cc.size(innerSize["Widget"]||0, innerSize["Height"]||0));

        var bgColor = getColor(json["SingleColor"]);
        var bgEndColor = getColor(json["EndColor"]);
        var bgStartColor = getColor(json["FirstColor"]);
        if(bgEndColor && bgStartColor)
            widget.setBackGroundColor(bgStartColor, bgEndColor);
        else
            widget.setBackGroundColor(bgColor);
        var colorVector = json["ColorVector"];
        if(colorVector != null && colorVector["ScaleX"] != null && colorVector["ScaleY"] != null)
            widget.setBackGroundColorVector(colorVector["ScaleX"], colorVector["ScaleY"]);
        widget.setBackGroundColorOpacity(bgColorOpacity);


        loadTexture(json["FileData"], resourcePath, function(path, type){
            widget.setBackGroundImage(path, type);
        });

        setContentSize(widget, json["Size"]);

        return widget;
    };

    /**
     * TextAtlas
     * @param json
     * @param resourcePath
     * @returns {ccui.TextAtlas}
     */
    parser.initTextAtlas = function(json, resourcePath){

        var widget = new ccui.TextAtlas();

        var stringValue = json["LabelText"];
        var itemWidth = json["CharWidth"];
        var itemHeight = json["CharHeight"];

        var startCharMap = json["StartChar"];

        loadTexture(json["LabelAtlasFileImage_CNB"], resourcePath, function(path, type){
            if(!cc.loader.getRes(path))
                cc.log("%s need to pre load", path);
            if(type == 0){
                widget.setProperty(stringValue, path, itemWidth, itemHeight, startCharMap);
            }
        });
        this.widgetAttributes(widget, json);

        return widget;
    };

    /**
     * TextBMFont
     * @param json
     * @param resourcePath
     * @returns {ccui.TextBMFont}
     */
    parser.initTextBMFont = function(json, resourcePath){

        var widget = new ccui.TextBMFont();
        this.widgetAttributes(widget, json);

        var text = json["LabelText"];
        widget.setString(text);

        loadTexture(json["LabelBMFontFile_CNB"], resourcePath, function(path, type){
            widget.setFntFile(path);
        });
        return widget;
    };

    /**
     * TextField
     * @param json
     * @param resourcePath
     * @returns {ccui.TextField}
     */
    parser.initTextField = function(json, resourcePath){
        var widget = new ccui.TextField();

        var passwordEnabled = json["PasswordEnable"];
        if(passwordEnabled){
            widget.setPasswordEnabled(true);
            var passwordStyleText = json["PasswordStyleText"];
            if(passwordStyleText != null)
                widget.setPasswordStyleText(passwordStyleText);
        }

        var placeHolder = json["PlaceHolderText"];
        if(placeHolder != null)
            widget.setPlaceHolder(placeHolder);

        var fontSize = json["FontSize"];
        if(fontSize != null)
            widget.setFontSize(fontSize);

        var fontName = json["FontName"];
        if(fontName != null)
            widget.setFontName(fontName);

        var maxLengthEnabled = json["MaxLengthEnable"];
        if(maxLengthEnabled){
            widget.setMaxLengthEnabled(true);
            var maxLength = json["MaxLengthText"];
            if(maxLength != null)
                widget.setMaxLength(maxLength);
        }

        //var isCustomSize = json["IsCustomSize"];
        this.widgetAttributes(widget, json);

        var text = json["LabelText"];
        if(text != null)
            widget.setString(text);

        loadTexture(json["FontResource"], resourcePath, function(path, type){
            widget.setFontName(path);
        });

        widget.setUnifySizeEnabled(false);
        widget.ignoreContentAdaptWithSize(false);

        var color = json["CColor"];
        if(color != null)
            widget.setTextColor(getColor(color));

        if (!widget.isIgnoreContentAdaptWithSize())
            setContentSize(widget, json["Size"]);
            //widget.getVirtualRenderer().setLineBreakWithoutSpace(true);

        return widget;

    };

    /**
     * SimpleAudio
     * @param json
     * @param resourcePath
     */
    parser.initSimpleAudio = function(json, resourcePath){

        var loop = json["Loop"];
        var volume = json["Volume"];
        if(volume != null)
            cc.audioEngine.setMusicVolume(volume);
        //var name = json["Name"];
        var resPath = (cc.loader.resPath + "/").replace(/\/\/$/, "/");
        loadTexture(json["FileData"], resourcePath, function(path, type){
            cc.loader.load(path, function(){
                cc.audioEngine.playMusic(resPath + path, loop);
            });
        });

    };

    /**
     * GameMap
     * @param json
     * @param resourcePath
     * @returns {*}
     */
    parser.initGameMap = function(json, resourcePath){

        var node = null;

        loadTexture(json["FileData"], resourcePath, function(path, type){
            if(type == 0)
                node = new cc.TMXTiledMap(path);
        });

        return node;
    };

    /**
     * ProjectNode
     * @param json
     * @param resourcePath
     * @returns {*}
     */
    parser.initProjectNode = function(json, resourcePath){
        var projectFile = json["FileData"];
        if(projectFile != null && projectFile["Path"]){
            var file = resourcePath + projectFile["Path"];
            if(cc.loader.getRes(file))
                return ccs._load(file);
            else
                cc.log("%s need to pre load", file);
        }
    };

    var getFileName = function(name){
        if(!name) return "";
        var arr = name.match(/([^\/]+)\.[^\/]+$/);
        if(arr && arr[1])
            return arr[1];
        else
            return "";
    };

    /**
     * Armature
     * @param json
     * @param resourcePath
     */
    parser.initArmature = function(json, resourcePath){

        var node = new ccs.Armature();

        var isLoop = json["IsLoop"];

        var isAutoPlay = json["IsAutoPlay"];

        var currentAnimationName = json["CurrentAnimationName"];

        loadTexture(json["FileData"], resourcePath, function(path, type){
            var plists, pngs;
            var armJson = cc.loader.getRes(path);
            if(!armJson)
                cc.log("%s need to pre load", path);
            else{
                plists = armJson["config_file_path"];
                pngs = armJson["config_png_path"];
                plists.forEach(function(plist, index){
                    if(pngs[index])
                        cc.spriteFrameCache.addSpriteFrame(plist, pngs[index]);
                });
            }
            ccs.armatureDataManager.addArmatureFileInfo(path);
            node.init(getFileName(path));
            if(isAutoPlay)
                node.getAnimation().play(currentAnimationName, -1, isLoop);

        });
        return node;
    };

    var loadedPlist = {};
    var loadTexture = function(json, resourcePath, cb){
        if(json != null){
            var path = json["Path"];
            var type;
            if(json["Type"] == "Default" || json["Type"] == "Normal")
                type = 0;
            else
                type = 1;
            var plist = json["Plist"];
            if(plist){
                if(cc.loader.getRes(resourcePath + plist)){
                    loadedPlist[resourcePath + plist] = true;
                    cc.spriteFrameCache.addSpriteFrames(resourcePath + plist);
                }else{
                    if(!loadedPlist[resourcePath + plist])
                        cc.log("%s need to pre load", resourcePath + plist);
                }
            }
            if(type !== 0)
                cb(path, type);
            else
                cb(resourcePath + path, type);
        }
    };

    var getColor = function(json){
        if(!json) return;
        var r = json["R"] != null ? json["R"] : 255;
        var g = json["G"] != null ? json["G"] : 255;
        var b = json["B"] != null ? json["B"] : 255;
        return cc.color(r, g, b);
    };

    var setContentSize = function(node, size){
        var x = size["X"] || 0;
        var y = size["Y"] || 0;
        if(size)
            node.setContentSize(cc.size(x, y));
    };

    var register = [
        {name: "SingleNodeObjectData", handle: parser.initSingleNode},
        {name: "SpriteObjectData", handle: parser.initSprite},
        {name: "ParticleObjectData", handle: parser.initParticle},
        {name: "PanelObjectData", handle: parser.initPanel},
        {name: "TextObjectData", handle: parser.initText},
        {name: "ButtonObjectData", handle: parser.initButton},
        {name: "CheckBoxObjectData", handle: parser.initCheckBox},
        {name: "ScrollViewObjectData", handle: parser.initScrollView},
        {name: "ImageViewObjectData", handle: parser.initImageView},
        {name: "LoadingBarObjectData", handle: parser.initLoadingBar},
        {name: "SliderObjectData", handle: parser.initSlider},
        {name: "PageViewObjectData", handle: parser.initPageView},
        {name: "ListViewObjectData", handle: parser.initListView},
        {name: "TextAtlasObjectData", handle: parser.initTextAtlas},
        {name: "TextBMFontObjectData", handle: parser.initTextBMFont},
        {name: "TextFieldObjectData", handle: parser.initTextField},
        {name: "SimpleAudioObjectData", handle: parser.initSimpleAudio},
        {name: "GameMapObjectData", handle: parser.initGameMap},
        {name: "ProjectNodeObjectData", handle: parser.initProjectNode},
        {name: "ArmatureNodeObjectData", handle: parser.initArmature}
    ];

    register.forEach(function(item){
        parser.registerParser(item.name, function(options, resourcePath){
            var node = item.handle.call(this, options, resourcePath);
            this.parseChild(node, options["Children"], resourcePath);
            DEBUG && node && (node.__parserName = item.name);
            return node;
        });
    });


    load.registerParser("timeline", "2.*", parser);


})(ccs._load, ccs._parser);