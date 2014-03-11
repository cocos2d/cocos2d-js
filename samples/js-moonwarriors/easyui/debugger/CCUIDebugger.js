/**
 * Created by wzm on 14-3-3.
 */
var tempddd = null;
var UIDEBUGGER_NODE_TAG = 9999;
var UIDebugger = function () {
    this.init();
};
UIDebugger.prototype = {
    _NodeArray: [],
    _tmpNodeArray: [],
    scenedraw: null,
    scene: null,
    _nodePosition: null,//用于记录node临时坐标
    _currentNode: null,
    dotColor: null,
    dotColor2: null,
    init: function () {
        this.dotColor = cc.color(255, 0, 255, 255);
        this.dotColor2 = cc.color(255, 0, 0, 255);
    },
    getCurrentSceneTree: function () {
        this.scene = cc.director.getRunningScene();
        var draw = this.scene.getChildByTag(UIDEBUGGER_NODE_TAG);
        if (draw) {
            draw.removeFromParent(true);
        }
        var sceneChildren = this.scene.getChildren();
        this._tmpNodeArray = [];
        this._NodeArray = [];
        this._parseSceneJson(sceneChildren);
        for (var i = 0; i < this._tmpNodeArray.length; i++) {
            data = this._tmpNodeArray[i];
            for (var j = 0; j < this._tmpNodeArray.length; j++) {
                var sdata = this._tmpNodeArray[j];
                if (data.parentId == sdata.id) {
                    sdata.children.push(data);
                    data.isadd = true;
                }
            }
        }
        for (var i = 0; i < this._tmpNodeArray.length; i++) {
            var data = this._tmpNodeArray[i];
            if (!data.isadd) {
                this._NodeArray.push(data);
            }
        }
        var draw = this.scene.getChildByTag(UIDEBUGGER_NODE_TAG);
        if (!draw) {
            this.scenedraw = cc.DrawNode.create();
            this.scenedraw.setTag(UIDEBUGGER_NODE_TAG);
            this.scene.addChild(this.scenedraw, 1000000);

        }
        var self = this;
        $("#layerTree").tree({
            data: this._NodeArray,
            checkbox: true,
            check:true,
            cascadeCheck:false,
            onCheck:function(node,checked){
                self._toggleNode(node,checked);
            },
            onClick: function (node) {
                if (node) {
                    self._showNodeInfo(node.node);
                }
            }
        });
    },
    _toggleNode:function(node,checked){
        if(node.node instanceof cc.Node){
            node.node.visible = checked;
        }
    },
    _parseSceneJson: function (dataList) {
        if (dataList instanceof Array) {
            for (var i = 0; i < dataList.length; i++) {
                var data = dataList[i];
                if (data.getChildren().length > 0) {
                    var clame = data._className;
                    var a = {"id": data.__instanceId,checked:data.visible, "parentId": data.getParent().__instanceId, "node": data, "children": [], "isadd": false, "text": clame};
                    this._tmpNodeArray.push(a);
                    this._parseSceneJson(data.getChildren());
                } else {
                    var clame = data._className;
                    var a = {"id": data.__instanceId,checked:data.visible, "node": data, "parentId": data.getParent().__instanceId, "isadd": false, "text": clame};
                    this._tmpNodeArray.push(a);
                }
            }
        }
    },
    _showNodeInfo: function (node) {
        tempddd = node;//for  test
        var self = this;
        var nodePos = node.getPosition();
        var worldPos = this.getWorldPositionWithAnchor(node);
        if (nodePos) {// the  node  position
            $('#posX').numberspinner({ value: nodePos.x, precision: 1, onChange: function (val) {
                node.x = parseFloat(val);
                self.showNodeLocation(node);
            }});
            $('#posY').numberspinner({value: nodePos.y, precision: 1, onChange: function (val) {
                node.y = parseFloat(val);
                self.showNodeLocation(node);
            }});
        }
        $('#wPosX').numberbox({value: worldPos.x});
        $('#wPosY').numberbox({ value: worldPos.y});
        $('#rotateX').numberspinner({value: node.rotationX, precision: 1, onChange: function (val) {
            node.rotationX = parseFloat(val);
        }});
        $('#rotateY').numberspinner({value: node.rotationY, precision: 1, onChange: function (val) {
            node.rotationY = parseFloat(val);
        }});
        $('#scaleX').numberspinner({value: node.scaleX, precision: 2, onChange: function (val) {
            node.scaleX = parseFloat(val);
        }});
        $('#scaleY').numberspinner({value: node.scaleY, precision: 2, onChange: function (val) {
            node.scaleY = parseFloat(val);
        }});
        $('#skewX').numberspinner({value: node.skewX, precision: 2, onChange: function (val) {
            node.skewX = parseFloat(val);
        }});
        $('#skewY').numberspinner({ value: node.skewY, precision: 2, onChange: function (val) {
            node.skewY = parseFloat(val);
        }});
        $('#anchorX').numberspinner({value: node.anchorX, precision: 1, min: 0, max: 1, onChange: function (val) {
            node.anchorX = parseFloat(val);
            self.showNodeLocation(node);
        }});
        $('#anchorY').numberspinner({value: node.anchorY, precision: 1, min: 0, max: 1, onChange: function (val) {
            node.anchorY = parseFloat(val);
            self.showNodeLocation(node);
        }});
        this.showNodeLocation(node);
    },
    showNodeLocation: function (node) {
        if (node instanceof  cc.Node) {
            if (this._currentNode) {
                this._currentNode._showNode = false;
                var parentNode = this._currentNode.getParent();
                if (parentNode) {
                    parentNode._showNode = false;
                }
            }
            this._currentNode = node;
            this._currentNode._showNode = true;
            var parentNode = this._currentNode.getParent();
            if (parentNode) {
                parentNode._showNode = true;
            }
            this.scenedraw.clear();
            var nodeWorldPos = this.getWorldPositionWithAnchor(node);
            var pareNode = node.getParent();
            if (pareNode) {
                var pNodeWorldPos = this.getWorldPositionBottomLeft(pareNode);
                var nodePos = pareNode.getPosition();
                var xPosLine = cc.p(nodeWorldPos.x, pNodeWorldPos.y);
                var yPosLine = cc.p(pNodeWorldPos.x, nodeWorldPos.y);
//                this.scenedraw.drawSegment(xPosLine, nodeWorldPos, 2);
//                this.scenedraw.drawSegment(yPosLine, nodeWorldPos, 2);
                this.scenedraw.drawDot(pNodeWorldPos, 4, this.dotColor2);
                /*                var rect = pareNode.getBoundingBox();
                 var nodePoint = cc.p(rect.x, rect.y);
                 var startPoint = this.getWorldPositionBottomLeft(pareNode);
                 var endPoint = cc.p(startPoint.x + rect.width, startPoint.y + rect.height);
                 this.scenedraw.drawRect(startPoint, endPoint, cc.color(0, 255, 255, 50), 1, cc.color(255, 0, 255, 255));*/
            }
            this.scenedraw.drawDot(nodeWorldPos, 4, this.dotColor);
        }
    },
    getWorldPositionBottomLeft: function (node) {//node's bottomleft position
        var bx = node.getBoundingBox();
        this._nodePosition = cc.p(bx.x, bx.y);
        if (node.getParent()) {
            this._nodePosition = node.getParent().convertToWorldSpace(this._nodePosition);
        } else {
            this._nodePosition = node.getPosition();
        }
        return this._nodePosition;
    },
    getWorldPositionWithAnchor: function (node) {//the real position;
        var wordpos = this.getWorldPositionBottomLeft(node);
        var wordpos2 = cc.p(wordpos.x + node.width * node.anchorX, wordpos.y + node.height * node.anchorY);
        return wordpos2;
    }
};
UIDebugger._instance = null;
UIDebugger.getInstance = function () {
    if (!UIDebugger._instance) {
        UIDebugger._instance = new UIDebugger();
    }
    return UIDebugger._instance;
}