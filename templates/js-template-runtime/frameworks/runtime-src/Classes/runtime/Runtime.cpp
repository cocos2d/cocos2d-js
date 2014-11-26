/****************************************************************************
Copyright (c) 2013 cocos2d-x.org

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

#include "Runtime.h"
#include "FileServer.h"
#include "ConnectWaitLayer.h"
#include "ConsoleCommand.h"

#include "cocos2d_specifics.hpp"
#include "cocos2d.h"
#include "ConfigParser.h"

#include <vector>

static std::string g_projectPath;

void recvBuf(int fd, char *pbuf, unsigned long bufsize)
{
    unsigned long leftLength = bufsize;
    while (leftLength != 0)
    {
        size_t recvlen = recv(fd, pbuf + bufsize - leftLength, leftLength ,0);
        if (recvlen <= 0)
        {
            usleep(1);
            continue;
        }
        leftLength -= recvlen;
    }
}

void sendBuf(int fd, const char *pbuf, unsigned long bufsize)
{
    unsigned long leftLength = bufsize;
    while (leftLength != 0)
    {
        size_t sendlen = send(fd, pbuf + bufsize - leftLength, leftLength ,0);
        if (sendlen <= 0)
        {
            usleep(1);
            continue;
        }
        leftLength -= sendlen;
    }
}

std::string& replaceAll(std::string& str, const std::string& old_value, const std::string& new_value)
{
    size_t start = 0;
    while(true)
    {
        size_t pos = 0;
        if((pos = str.find(old_value, start)) != std::string::npos) {
            str.replace(pos, old_value.length(), new_value);
            start = pos + new_value.length();
        }
        else break;
    }
    return str;
}

const char* getRuntimeVersion()
{
    return "1.5";
}

bool startScript()
{
    ScriptingCore::getInstance()->runScript("script/jsb_boot.js");
    ScriptEngineProtocol *engine = ScriptingCore::getInstance();
    ScriptEngineManager::getInstance()->setScriptEngine(engine);
    return ScriptingCore::getInstance()->runScript(ConfigParser::getInstance()->getEntryFile().c_str());
}

bool runtime_FileUtils_addSearchPath(JSContext *cx, uint32_t argc, jsval *vp)
{
    jsval *argv = JS_ARGV(cx, vp);
    bool ok = true;
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    cocos2d::FileUtils* cobj = (cocos2d::FileUtils *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "cocos2dx_FileUtils_addSearchPath : Invalid Native Object");
    if (argc == 1) {
        std::string arg0;
        ok &= jsval_to_std_string(cx, argv[0], &arg0);
        JSB_PRECONDITION2(ok, cx, false, "cocos2dx_FileUtils_addSearchPath : Error processing arguments");
        std::string originPath = arg0;
        if (!FileUtils::getInstance()->isAbsolutePath(originPath))
            arg0 = FileServer::getShareInstance()->getWritePath() + originPath;
        cobj->addSearchPath(arg0);

        if (!FileUtils::getInstance()->isAbsolutePath(originPath))
#if(CC_TARGET_PLATFORM == CC_PLATFORM_MAC || CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
            cobj->addSearchPath(g_projectPath + originPath);
#endif
#if(CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
            cobj->addSearchPath(originPath);
#endif
        JS_SET_RVAL(cx, vp, JSVAL_VOID);
        return true;
    }
    
    JS_ReportError(cx, "cocos2dx_FileUtils_addSearchPath : wrong number of arguments: %d, was expecting %d", argc, 1);
    return false;
}

bool runtime_FileUtils_setSearchPaths(JSContext *cx, uint32_t argc, jsval *vp)
{
    jsval *argv = JS_ARGV(cx, vp);
    bool ok = true;
    JSObject *obj = JS_THIS_OBJECT(cx, vp);
    js_proxy_t *proxy = jsb_get_js_proxy(obj);
    cocos2d::FileUtils* cobj = (cocos2d::FileUtils *)(proxy ? proxy->ptr : NULL);
    JSB_PRECONDITION2( cobj, cx, false, "js_cocos2dx_FileUtils_setSearchPaths : Invalid Native Object");
    if (argc == 1) {
        std::vector<std::string> arg0;
        ok &= jsval_to_std_vector_string(cx, argv[0], &arg0);
        JSB_PRECONDITION2(ok, cx, false, "js_cocos2dx_FileUtils_setSearchPaths : Error processing arguments");
        
        std::vector<std::string> originPath; // for IOS platform.
        std::vector<std::string> projPath; // for Desktop platform.
        for (int i = 0; i < arg0.size(); i++)
        {
            if (!FileUtils::getInstance()->isAbsolutePath(arg0[i]))
            {
                originPath.push_back(arg0[i]); // for IOS platform.
                projPath.push_back(g_projectPath+arg0[i]); //for Desktop platform.
                arg0[i] = FileServer::getShareInstance()->getWritePath() + arg0[i];
            }
        }
#if(CC_TARGET_PLATFORM == CC_PLATFORM_MAC || CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
        arg0.insert(arg0.end(),projPath.begin(),projPath.end());
#endif

#if(CC_TARGET_PLATFORM == CC_PLATFORM_IOS)
        arg0.insert(arg0.end(),originPath.begin(),originPath.end());
#endif
        cobj->setSearchPaths(arg0);
        JS_SET_RVAL(cx, vp, JSVAL_VOID);
        return true;
    }
    
    JS_ReportError(cx, "js_cocos2dx_FileUtils_setSearchPaths : wrong number of arguments: %d, was expecting %d", argc, 1);
    return false;
}

void register_FileUtils(JSContext *cx, JSObject *global) {
    JS::RootedValue  nsval(cx);
    JS::RootedObject ns(cx);
    JS_GetProperty(cx, global, "cc", &nsval);
    if (nsval == JSVAL_VOID) {
        return;
    } else {
        JS_ValueToObject(cx, nsval, &ns);
    }
    global = ns;
    
    JSObject  *tmpObj = JSVAL_TO_OBJECT(anonEvaluate(cx, global, "(function () { return cc.FileUtils.getInstance(); })()"));
    JS_DefineFunction(cx, tmpObj, "addSearchPath", runtime_FileUtils_addSearchPath, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE);
    JS_DefineFunction(cx, tmpObj, "setSearchPaths", runtime_FileUtils_setSearchPaths, 1, JSPROP_PERMANENT | JSPROP_ENUMERATE);
}

void initRuntime()
{
    vector<std::string> searchPathArray = FileUtils::getInstance()->getSearchPaths();
#if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32 || CC_TARGET_PLATFORM == CC_PLATFORM_MAC)
    // add peoject's root directory to search path
    if (g_projectPath.empty())
    {
        extern std::string getCurAppPath();
        std::string appPath = getCurAppPath();
#if (CC_TARGET_PLATFORM == CC_PLATFORM_WIN32)
        appPath.append("/../../");
#elif (CC_TARGET_PLATFORM == CC_PLATFORM_MAC)
        appPath.append("/../../../");
#endif
        appPath = replaceAll(appPath, "\\", "/");
        g_projectPath = appPath;
    }    
    searchPathArray.insert(searchPathArray.begin(), g_projectPath);
#endif
    
    // add writable path to search path
    searchPathArray.insert(searchPathArray.begin(), FileServer::getShareInstance()->getWritePath());
    FileUtils::getInstance()->setSearchPaths(searchPathArray);
    

    ConsoleCommand::getShareInstance()->init();
}

void startRuntime()
{
    ScriptingCore::getInstance()->addRegisterCallback(register_FileUtils);
    ScriptingCore::getInstance()->start();

    int debugPort = 5086; 
#if(CC_PLATFORM_MAC == CC_TARGET_PLATFORM || CC_PLATFORM_WIN32 == CC_TARGET_PLATFORM)
        debugPort = ConfigParser::getInstance()->getDebugPort();
#endif
    ScriptingCore::getInstance()->enableDebugger(debugPort);
    ScriptEngineProtocol *engine = ScriptingCore::getInstance();
    ScriptEngineManager::getInstance()->setScriptEngine(engine);

    auto scene = Scene::create();
    auto connectLayer = new ConnectWaitLayer();
    connectLayer->autorelease();
    auto director = Director::getInstance();
    scene->addChild(connectLayer);
    director->runWithScene(scene);
}

void endRuntime()
{
	ConsoleCommand::purge();
	FileServer::getShareInstance()->stop();
	//FileServer::purge();
}
