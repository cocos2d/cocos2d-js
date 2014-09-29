/****************************************************************************
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
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * The ccui.Widget's properties reader for GUIReader.
 * @class
 * @name ccs.WidgetReader
 **/
ccs.WidgetReader = /** @lends ccs.WidgetReader# */{
    /**
     * Gets the ccs.WidgetReader.
     * @deprecated since v3.0, please use ccs.WidgetReader directly.
     * @returns {ccs.WidgetReader}
     */
    getInstance: function(){
        return ccs.WidgetReader;
    },

    /**
     * Sets widget's properties from json dictionary
     * @param {ccui.Widget} widget
     * @param {object} options
     */
    setPropsFromJsonDictionary: function(widget, options){
        var ignoreSizeExsit = options["ignoreSize"];
        if(ignoreSizeExsit != null)
            widget.ignoreContentAdaptWithSize(ignoreSizeExsit);

        widget.setSizeType(options["sizeType"]);
        widget.setPositionType(options["positionType"]);

        widget.setSizePercent(cc.p(options["sizePercentX"], options["sizePercentY"]));
        widget.setPositionPercent(cc.p(options["positionPercentX"], options["positionPercentY"]));

        /* adapt screen */
        var w = 0, h = 0;
        var adaptScreen = options["adaptScreen"];
        if (adaptScreen) {
            var screenSize = cc.director.getWinSize();
            w = screenSize.width;
            h = screenSize.height;
        } else {
            w = options["width"];
            h = options["height"];
        }
        widget.setContentSize(w, h);

        widget.setTag(options["tag"]);
        widget.setActionTag(options["actiontag"]);
        widget.setTouchEnabled(options["touchAble"]);
        var name = options["name"];
        var widgetName = name ? name : "default";
        widget.setName(widgetName);

        var x = options["x"];
        var y = options["y"];
        widget.setPosition(x, y);

        var sx = options["scaleX"] || 1;
        widget.setScaleX(sx);

        var sy = options["scaleY"] || 1;
        widget.setScaleY(sy);

        var rt = options["rotation"] || 0;
        widget.setRotation(rt);

        var vb = options["visible"] || false;
        if(vb != null)
            widget.setVisible(vb);
        widget.setLocalZOrder(options["ZOrder"]);

        var layout = options["layoutParameter"];
        if(layout != null){
            var layoutParameterDic = options["layoutParameter"];
            var paramType = layoutParameterDic["type"];
            var parameter = null;

            switch(paramType){
                case 0:
                    break;
                case 1:
                    parameter = new ccui.LinearLayoutParameter();
                    var gravity = layoutParameterDic["gravity"];
                    parameter.setGravity(gravity);
                    break;
                case 2:
                    parameter = new ccui.RelativeLayoutParameter();
                    var rParameter = parameter;
                    var relativeName = layoutParameterDic["relativeName"];
                    rParameter.setRelativeName(relativeName);
                    var relativeToName = layoutParameterDic["relativeToName"];
                    rParameter.setRelativeToWidgetName(relativeToName);
                    var align = layoutParameterDic["align"];
                    rParameter.setAlign(align);
                    break;
                default:
                    break;
            }
            if(parameter != null){
                var mgl = layoutParameterDic["marginLeft"]||0;
                var mgt = layoutParameterDic["marginTop"]||0;
                var mgr = layoutParameterDic["marginRight"]||0;
                var mgb = layoutParameterDic["marginDown"]||0;
                parameter.setMargin(mgl, mgt, mgr, mgb);
                widget.setLayoutParameter(parameter);
            }
        }
    },

    /**
     * Sets widget's color, anchor point and flipped properties from json dictionary
     * @param {ccui.Widget} widget
     * @param {object} options
     */
    setColorPropsFromJsonDictionary: function(widget, options){
        var op = options["opacity"];
        if(op != null)
            widget.setOpacity(op);
        var colorR = options["colorR"];
        var colorG = options["colorG"];
        var colorB = options["colorB"];
        widget.setColor(cc.color((colorR == null) ? 255 : colorR, (colorG == null) ? 255 : colorG, (colorB == null) ? 255 : colorB));

        ccs.WidgetReader._setAnchorPointForWidget(widget, options);
        widget.setFlippedX(options["flipX"]);
        widget.setFlippedY(options["flipY"]);
    },

    _setAnchorPointForWidget: function(widget, options){
        var isAnchorPointXExists = options["anchorPointX"];
        var anchorPointXInFile;
        if (isAnchorPointXExists != null)
            anchorPointXInFile = options["anchorPointX"];
        else
            anchorPointXInFile = widget.getAnchorPoint().x;

        var isAnchorPointYExists = options["anchorPointY"];
        var anchorPointYInFile;
        if (isAnchorPointYExists != null)
            anchorPointYInFile = options["anchorPointY"];
        else
            anchorPointYInFile = widget.getAnchorPoint().y;

        if (isAnchorPointXExists != null || isAnchorPointYExists != null)
            widget.setAnchorPoint(cc.p(anchorPointXInFile, anchorPointYInFile));
    },

    _getResourcePath: function(dict, key, texType){
        var imageFileName = dict[key];
        var imageFileName_tp;
        if (null != imageFileName) {
            if (texType == 0)
                imageFileName_tp = ccs.uiReader.getFilePath() + imageFileName;
            else if(texType == 1)
                imageFileName_tp = imageFileName;
            else
                cc.assert(0, "invalid TextureResType!!!");
        }
        return imageFileName_tp;
    }
};