/**
 * Created by joshua on 15-1-28.
 */


e_shapeBit = 0x0001;
e_jointBit = 0x0002;
e_aabbBit = 0x0004;
e_pairBit = 0x0008;
e_centerOfMassBit = 0x0010;


cc.getBox2dDebugDraw = function(parent, PTM){

    PTM = PTM || 1;

    function _getColor(colorPtr, alpha){
        var col = Box2D.wrapPointer(colorPtr, Box2D.b2Color);
        var red = (col.get_r() * 255)|0; // |0 for asm optimization
        var green = (col.get_g() * 255)|0;
        var blue = (col.get_b() * 255)|0;

        return cc.color(red, green, blue, alpha || 255);
    }

    function _getVerts(verticePtr, vertexCount){
        var verts = new Array(vertexCount);
        for(var i = 0; i < vertexCount; ++i){
            var vertice = Box2D.wrapPointer(verticePtr + i * 8, Box2D.b2Vec2);
            verts[i] = cc.p(vertice.get_x() * PTM, vertice.get_y() * PTM);
        }

        return verts;
    }



    var debugDraw = new Box2D.JSDraw();
    debugDraw.drawNode = new cc.DrawNode();
    parent.addChild(debugDraw.drawNode);

    debugDraw.DrawSegment = function(vert1Ptr, vert2Ptr, colorPtr) {

        var vert1 = Box2D.wrapPointer(vert1Ptr, Box2D.b2Vec2);
        var vert2 = Box2D.wrapPointer(vert2Ptr, Box2D.b2Vec2);

        var from = cc.p(vert1.get_x() * 32, vert1.get_y()* 32);
        var to   = cc.p(vert2.get_x()* 32, vert2.get_y()* 32);
        this.drawNode.drawSegment(from, to, 1, _getColor(colorPtr));
    };

    debugDraw.DrawPolygon = function(verticePtr, vertexCount, colorPtr){
        this.drawNode.drawPoly(_getVerts(verticePtr, vertexCount), null, 1, _getColor(colorPtr));
    };

    debugDraw.DrawSolidPolygon = function(verticePtr, vertexCount, colorPtr) {
        this.drawNode.drawPoly(_getVerts(verticePtr, vertexCount), _getColor(colorPtr, 150), 1, cc.color(255, 255, 255));
    };

    debugDraw.DrawCircle = function(centerPtr, radius, colorPtr) {
        var dummyAxis = Box2D.b2Vec2(0,0);
//        this.DrawSolidCircle(centerPtr, radius, dummyAxis, colorPtr);
    };

    debugDraw.DrawSolidCircle = function(centerPtr, radius, axisPtr, colorPtr) {
        var centerV = Box2D.wrapPointer(centerPtr, Box2D.b2Vec2);
        var axisV = Box2D.wrapPointer(axisPtr, Box2D.b2Vec2);

        var center = cc.p(centerV.get_x() * PTM, centerV.get_y() * PTM);
        var end = cc.p(center.x + axisV.get_x() * radius * PTM, center.y + axisV.get_y() * radius * PTM);

        var color = _getColor(colorPtr);

        this.drawNode.drawCircle(center, radius * PTM, 0, 50, false, 1, color);
        this.drawNode.drawSegment(center, end, 1, color);
    };

    debugDraw.DrawTransform = function() {
        //not implemented
    };

    debugDraw.clear = function(){this.drawNode.clear()};
    debugDraw.SetFlags(e_shapeBit);
    return debugDraw;
};

function createPolygonShape(vertices) {
    var shape = new Box2D.b2PolygonShape();
    var buffer = Box2D.allocate(vertices.length * 8, 'float', Box2D.ALLOC_STACK);
    var offset = 0;
    for (var i=0;i<vertices.length;i++) {
        Box2D.setValue(buffer+(offset), vertices[i].get_x(), 'float'); // x
        Box2D.setValue(buffer+(offset+4), vertices[i].get_y(), 'float'); // y
        offset += 8;
    }
    var ptr_wrapped = Box2D.wrapPointer(buffer, Box2D.b2Vec2);
    shape.Set(ptr_wrapped, vertices.length);
    return shape;
}

//to replace original C++ operator =
function copyVec2(vec) {
    return new Box2D.b2Vec2(vec.get_x(), vec.get_y());
}