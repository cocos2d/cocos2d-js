#include "org_cocos2dx_lib_Cocos2dxJavascriptJavaBridge.h"

#include <android/log.h>
#include "ScriptingCore.h"
#define  LOG_TAG    "Cocos2dxJavascriptJavaBridge_java"
#define  LOGD(...)  __android_log_print(ANDROID_LOG_DEBUG,LOG_TAG,__VA_ARGS__)

JNIEXPORT jint JNICALL Java_org_cocos2dx_lib_Cocos2dxJavascriptJavaBridge_evalString
  (JNIEnv *env, jclass cls, jstring value)
{
    const char *_value = env->GetStringUTFChars(value, 0);
    ScriptingCore::getInstance()->evalString(_value,NULL);
    env->ReleaseStringUTFChars(value, _value);
    return 1;
}