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

cc.Vec3 = function(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
};

cc.vec3 = function(x, y, z){
    return new cc.Vec3(x, y, z);
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