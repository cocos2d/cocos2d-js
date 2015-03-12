/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
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
cc.CameraFlag = {
    DEFAULT : 1,
    USER1 : 1 << 1,
    USER2 : 1 << 2,
    USER3 : 1 << 3,
    USER4 : 1 << 4,
    USER5 : 1 << 5,
    USER6 : 1 << 6,
    USER7 : 1 << 7,
    USER8 : 1 << 8
};

cc.LightType = {
    DIRECTIONAL : 0,
    POINT : 1,
    SPOT : 2,
    AMBIENT : 3,
};

cc.LightFlag = {
    LIGHT0 : 1,
    LIGHT1 : 1 << 1,
    LIGHT2 : 1 << 2,
    LIGHT3 : 1 << 3,
    LIGHT4 : 1 << 4,
    LIGHT5 : 1 << 5,
    LIGHT6 : 1 << 6,
    LIGHT7 : 1 << 7,
    LIGHT8 : 1 << 8,
    LIGHT9 : 1 << 9,
    LIGHT10 : 1 << 10,
    LIGHT11 : 1 << 11,
    LIGHT12 : 1 << 12,
    LIGHT13 : 1 << 13,
    LIGHT14 : 1 << 14,
    LIGHT15 : 1 << 15,
};

cc.AsyncTaskPool.TaskType = {
    TASK_IO : 0,
    TASK_NETWORK : 1,
    TASK_OTHER : 2,
    TASK_MAX_TYPE : 3
};

cc.BillBoard.Mode = {
    VIEW_POINT_ORIENTED : 0, // orient to the camera
    VIEW_PLANE_ORIENTED : 1  // orient to the XOY plane of camera
};

cc.attributeNames = [cc.ATTRIBUTE_NAME_POSITION, 
    cc.ATTRIBUTE_NAME_COLOR, 
    cc.ATTRIBUTE_NAME_TEX_COORD,
    cc.ATTRIBUTE_NAME_TEX_COORD1,
    cc.ATTRIBUTE_NAME_TEX_COORD2,
    cc.ATTRIBUTE_NAME_TEX_COORD3,
    cc.ATTRIBUTE_NAME_NORMAL,
    cc.ATTRIBUTE_NAME_BLEND_WEIGHT,
    cc.ATTRIBUTE_NAME_BLEND_INDEX];

cc.Vec3 = function(x=0, y=0, z=0){
    this.x = x;
    this.y = y;
    this.z = z;
};

cc.Vec3.prototype.normalize = function(){
    var n = this.x * this.x + this.y * this.y + this.z * this.z;
    n = 1 / Math.sqrt(n);
    this.x *= n;
    this.y *= n;
    this.z *= n;
};

cc.vec3 = function(x, y, z){
    return new cc.Vec3(x, y, z);
};

cc.vec3Cross = function(v1, v2){
    return new cc.Vec3(v1.y * v2.z - v1.z * v2.y,
                       v1.z * v2.x - v1.x * v2.z,
                       v1.x * v2.y - v1.y * v2.x);
};

cc.vec3Dot = function(v1, v2){
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
};

cc.vec3Length = function(v){
    return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
};

cc.vec3Normalize = function(v){
    var n = v.x * v.x + v.y * v.y + v.z * v.z;
    n = 1 / Math.sqrt(n);
    return cc.vec3(v.x * n, v.y * n, v.z * n);
};

cc.vec3Add = function(v1, v2){
    return new cc.Vec3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
};

cc.vec3Sub = function(v1, v2){
    return new cc.Vec3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
};

cc.Quaternion = function(x=0, y=0, z=0, w=0){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
};

cc.quaternion = function(xOrAxis, yOrAngle, z, w){
    if(w !== undefined){
        return new cc.Quaternion(xOrAxis, yOrAngle, z, w);
    }
    else if(yOrAngle !== undefined){
        var sinHalfAngle = Math.sin(yOrAngle / 2);
        var normal = cc.vec3(xOrAxis.x, xOrAxis.y, xOrAxis.z);
        normal.normalize();
        return cc.quaternion(normal.x * sinHalfAngle, normal.y * sinHalfAngle, normal.z * sinHalfAngle, Math.cos(yOrAngle / 2));
    }
};

cc.AABB = function(min=cc.vec3(99999, 99999, 99999), max=cc.vec3(-99999, -99999, -99999)){
    this.min = min;
    this.max = max;
};

cc.aabb = function(min, max){
    return new cc.AABB(min, max);
};

cc.aabbGetCorners = function(aabb){
    var corners = new Array(8);
    corners[0] = cc.vec3(aabb.min.x, aabb.max.y, aabb.max.z);
    corners[1] = cc.vec3(aabb.min.x, aabb.min.y, aabb.max.z);
    corners[2] = cc.vec3(aabb.max.x, aabb.min.y, aabb.max.z);
    corners[3] = cc.vec3(aabb.max.x, aabb.max.y, aabb.max.z);

    corners[4] = cc.vec3(aabb.max.x, aabb.max.y, aabb.min.z);
    corners[5] = cc.vec3(aabb.max.x, aabb.min.y, aabb.min.z);
    corners[6] = cc.vec3(aabb.min.x, aabb.min.y, aabb.min.z);
    corners[7] = cc.vec3(aabb.min.x, aabb.max.y, aabb.min.z);
    return corners;
};

cc.OBB = function(aabb){
    this.center = cc.vec3((aabb.min.x + aabb.max.x)/2, (aabb.min.y + aabb.max.y)/2, (aabb.min.z + aabb.max.z)/2);   // obb center
    this.xAxis = cc.vec3(1, 0, 0);    // x axis of obb, unit vector
    this.yAxis = cc.vec3(0, 1, 0);    // y axis of obb, unit vecotr
    this.zAxis = cc.vec3(0, 0, 1);    // z axis of obb, unit vector
    this.extents = cc.vec3((aabb.max.x - aabb.min.x)/2, (aabb.max.y - aabb.min.y)/2, (aabb.max.z - aabb.min.z)/2);  // obb length along each axis
    this.extentX = cc.vec3((aabb.max.x - aabb.min.x)/2, 0, 0);  // _xAxis * _extents.x
    this.extentY = cc.vec3(0, (aabb.max.y - aabb.min.y)/2, 0);  // _yAxis * _extents.y
    this.extentZ = cc.vec3(0, 0, (aabb.max.z - aabb.min.z)/2);  // _zAxis * _extents.z
};

cc.obb = function(aabb){
    return new cc.OBB(aabb);
};

cc.Ray = function(origin = cc.vec(0, 0, 0), direction = cc.vec3(0, 0, 1)){
    this.origin = origin;
    this.direction = direction;
};

cc.ray = function(origin, direction){
    return new cc.Ray(origin, direction);
};

cc.Vec4 = cc.Quaternion;

cc.vec4 = function(x, y, z, w){
    return new cc.Vec4(x, y, z, w);
};

cc.Sprite3D.prototype._ctor = function(modelPath, texturePath){
    if(modelPath === undefined){
        this.init();
    }else{
        if(modelPath.length < 4){
            cc.log("invalid filename for Sprite3D");
            return;
        }
        this.initWithFile(modelPath);
        var bb = this.getBoundingBox();
        this.setContentSize(cc.size(bb.width, bb.height));

        if(texturePath !== undefined)
            this.setTexture(texturePath);
    }
};

cc.BillBoard.prototype._ctor = function(filename, rect, mode = cc.BillBoard.Mode.VIEW_POINT_ORIENTED){
    if(filename !== undefined && filename instanceof cc.Texture2D){
        rect = rect || cc.BillBoard.Mode.VIEW_POINT_ORIENTED;
        this.initWithTexture(filename);
        this.setMode(rect);
    }else if(filename !== undefined && typeof filename === "string"){
        if(rect !== undefined){
            if(typeof rect === "object"){
                this.initWithFile(filename, rect);
                this.setMode(mode);
            }else{
                this.initWithFile(filename);
                this.setMode(rect);
            }
        }else{
            this.initWithFile(filename);
            this.setMode(cc.BillBoard.Mode.VIEW_POINT_ORIENTED);
        }
    }else{
        filename = filename || cc.BillBoard.Mode.VIEW_POINT_ORIENTED;
        this.init();
        this.setMode(filename);
    }
}