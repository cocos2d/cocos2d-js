#Upgrade guide from Cocos2d-JS v3.2 to Cocos2d-JS v3.3

## 0. Upgrade to Cocos2d-JS v3.2

If you are still using Cocos2d-html5 or previous version of Cocos2d-JS, you may need to read the previous upgrade guide first : [Upgrade guide to Cocos2d-JS v3.2](../../v3.2rc0/upgrade-guide/en.md)

## 1. New Cocos Studio JSON parser

In Cocos2d-JS v3.3 we have introduced one new API for all versions of Cocos Studio JSON export files.

```
// nodeAndAction is something like: {node: cc.Node, action: cc.Action}
var nodeAndAction = ccs.load(file);
```

This API covers Cocos Studio 1.* versions for the JSON export files, including UI parser, Node parser, Action parser and Scene parser. This API also covers Cocos Studio 2.1 + for the JSON export files, including Node parser and Action parser.

Again, please be noted that this new API **only** support JSON files, if you are using Cocos Studio 2.1 +, please export your project to JSON, the flatbuffer format is **not** supported in Cocos2d-JS, neither for the web engine nor for the native engine.

1. Parameter

    `ccs.load` accept the JSON file path as its only parameter.
    
2. Return value

    The return value is an object which is composed of two properties: `node` and `action`. `node` value is absolutly included in the result, but depends on the project itself, `action` may be `null` in the result when no action is presented in the project. When the parser process failed, the result will be:
    
    ```
    {node: null, action: null}
    ```
    
3. Preload resources obligated in web engine

    As we all know, in the web engine, you must preload all related resources before entering the scene and using them, it applies to the Cocos Studio resources too. What you need to preload is not only the JSON file, but also all its dependencies, that means all related image files, plist files, json files, audio files, and so on. In the web engine, you must add all these files into the preload list and preload them before entering the scene. Otherwise you will receive a warning in the console like this one:
    
    ```
    res/cocosui/UIEditorTest/2.0.5/res/Default/SliderNode_Disable.png need to be preloaded
    ```
    
    If you find such warning when debugging, you need to add the reported resources into the preload list.
    
    But in the native engine, this won't be necessary, you can just ignore the preload phase for all local resources because they are loaded with the application itself.
    
4. 1.* parser API

    The Cocos Studio 1.* parser API still works as before.