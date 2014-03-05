#include "ScriptingCore.h"
#include "cocos2d_specifics.hpp"

class GLNode : public cocos2d::Node
{
public:
    void draw(cocos2d::Renderer *renderer, const kmMat4& transform, bool transformUpdated);
};

void js_register_cocos2dx_GLNode(JSContext *cx, JSObject *global);