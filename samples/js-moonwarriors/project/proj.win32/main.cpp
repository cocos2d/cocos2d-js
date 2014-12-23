#include "main.h"
#include "AppDelegate.h"

#include "jsapi.h"
#include "jsfriendapi.h"
#include "mozilla\Maybe.h"

USING_NS_CC;

// uncomment below line, open debug console
// #define USE_WIN32_CONSOLE

static JSClass global_class = {
    "global",
    JSCLASS_GLOBAL_FLAGS,
    JS_PropertyStub,
    JS_DeletePropertyStub,
    JS_PropertyStub,
    JS_StrictPropertyStub,
    JS_EnumerateStub,
    JS_ResolveStub,
    JS_ConvertStub
};

// Just a wrapper around JSPrincipals that allows static construction.
class CCJSPrincipals : public JSPrincipals
{
  public:
    explicit CCJSPrincipals(int rc = 0)
      : JSPrincipals()
    {
        refcount = rc;
    }
};

static CCJSPrincipals shellTrustedPrincipals(1);

JSObject* NewGlobalObject(JSContext* cx)
{
    JS::CompartmentOptions options;
    options.setVersion(JSVERSION_LATEST);
    
    JSObject* obj = JS_NewGlobalObject(cx, &global_class, &shellTrustedPrincipals, JS::DontFireOnNewGlobalHook, options);
    if (!obj) {
        return NULL;
    }
    JS::RootedObject glob(cx, obj);
    JSAutoCompartment ac(cx, obj);
    bool ok = true;
    ok = JS_InitStandardClasses(cx, glob);
    if (ok)
        JS_InitReflect(cx, glob);
    if (!ok)
        return NULL;

    JS_FireOnNewGlobalObject(cx, glob);
    
    return glob.get();
}

class ScriptEngine
{
private:
    JSContext* _cx;
    JSRuntime* _rt;
    mozilla::Maybe<JS::PersistentRootedObject> _global;
public:
    ScriptEngine() : _cx(nullptr), _rt(nullptr) {}
    bool init()
    {
        if (!JS_Init())
            return false;
        //rt
        _rt = JS_NewRuntime(8L * 1024L * 1024L);
        JS_SetGCParameter(_rt, JSGC_MAX_BYTES, 0xffffffff);
        //cx
        _cx = JS_NewContext(_rt, 8192);
        //global
        _global.construct(_cx);
        _global.ref() = NewGlobalObject(_cx);
        js::SetDefaultObjectForContext(_cx, _global.ref().get());

        return true;
    }
    bool runScript(const char* file)
    {
        JSAutoCompartment ac(_cx, _global.ref());

        JS::RootedScript script(_cx);
        JS::RootedObject obj(_cx, _global.ref());

        JS::CompileOptions op(_cx);
        op.setUTF8(true);
        op.setFileAndLine(file, 1);

        bool ok = JS::Compile(_cx, obj, op, file, &script) && JS_ExecuteScript(_cx, obj, script);
        return ok;
    }
};

int APIENTRY _tWinMain(HINSTANCE hInstance,
                       HINSTANCE hPrevInstance,
                       LPTSTR    lpCmdLine,
                       int       nCmdShow)
{
    UNREFERENCED_PARAMETER(hPrevInstance);
    UNREFERENCED_PARAMETER(lpCmdLine);

#ifdef USE_WIN32_CONSOLE
    AllocConsole();
    freopen("CONIN$", "r", stdin);
    freopen("CONOUT$", "w", stdout);
    freopen("CONOUT$", "w", stderr);
#endif

    // create the application instance
    //AppDelegate app;
    //int ret = Application::getInstance()->run();
    ScriptEngine* sc = new ScriptEngine();
    if(sc && sc->init())
    {
        sc->runScript("C:\\GitHub\\cocos2d-js\\build\\Debug.win32\\js-tests-res\\script\\jsb_boot.js");
    }
#ifdef USE_WIN32_CONSOLE
    FreeConsole();
#endif

    return 0;
}
