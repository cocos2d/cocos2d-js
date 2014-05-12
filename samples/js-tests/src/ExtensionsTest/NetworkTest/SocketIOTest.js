/****************************************************************************
 Copyright (c) 2014 cocos2d-x.org http://www.cocos2d-x.org
 Created by Chris Hannon 2014 http://www.channon.us

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

var SocketIO = SocketIO || io;

var SocketIOTestLayer = cc.Layer.extend({

    _sioClient: null,
    _sioEndpoint: null,
    _sioClientStatus: null,

    init: function () {

        var winSize = cc.director.getWinSize();
        
        var MARGIN = 40;
        var SPACE = 35;
        
        var label = cc.LabelTTF.create("SocketIO Test", "Arial", 28);
        label.setPosition(cc.p(winSize.width / 2, winSize.height - MARGIN));
        this.addChild(label, 0);
        
        var menuRequest = cc.Menu.create();
        menuRequest.setPosition(cc.p(0, 0));
        this.addChild(menuRequest);

        // Test to create basic client in the default namespace
        var labelSIOClient = cc.LabelTTF.create("Open SocketIO Client", "Arial", 22);
        labelSIOClient.setAnchorPoint(cc.p(0,0));
        var itemSIOClient = cc.MenuItemLabel.create(labelSIOClient, this.onMenuSIOClientClicked, this);
        itemSIOClient.setPosition(cc.p(labelSIOClient.getContentSize().width / 2 + MARGIN, winSize.height - MARGIN - SPACE));
        menuRequest.addChild(itemSIOClient);

        // Test to create a client at the endpoint '/testpoint'
        var labelSIOEndpoint = cc.LabelTTF.create("Open SocketIO Endpoint", "Arial", 22);
        labelSIOEndpoint.setAnchorPoint(cc.p(0,0));
        var itemSIOEndpoint = cc.MenuItemLabel.create(labelSIOEndpoint, this.onMenuSIOEndpointClicked, this);
        itemSIOEndpoint.setPosition(cc.p(winSize.width - (labelSIOEndpoint.getContentSize().width / 2 + MARGIN), winSize.height - MARGIN - SPACE));
        menuRequest.addChild(itemSIOEndpoint);

        // Test sending message to default namespace
        var labelTestMessage = cc.LabelTTF.create("Send Test Message", "Arial", 22);
        labelTestMessage.setAnchorPoint(cc.p(0,0));
        var itemTestMessage = cc.MenuItemLabel.create(labelTestMessage, this.onMenuTestMessageClicked, this);
        itemTestMessage.setPosition(cc.p(labelTestMessage.getContentSize().width / 2 + MARGIN, winSize.height - MARGIN - 2 * SPACE));
        menuRequest.addChild(itemTestMessage);

        // Test sending message to the endpoint '/testpoint'
        var labelTestMessageEndpoint = cc.LabelTTF.create("Test Endpoint Message", "Arial", 22);
        labelTestMessageEndpoint.setAnchorPoint(cc.p(0,0));
        var itemTestMessageEndpoint = cc.MenuItemLabel.create(labelTestMessageEndpoint, this.onMenuTestMessageEndpointClicked, this);
        itemTestMessageEndpoint.setPosition(cc.p(winSize.width - (labelTestMessageEndpoint.getContentSize().width / 2 + MARGIN), winSize.height - MARGIN - 2 * SPACE));
        menuRequest.addChild(itemTestMessageEndpoint);

        // Test sending event 'echotest' to default namespace
        var labelTestEvent = cc.LabelTTF.create("Send Test Event", "Arial", 22);
        labelTestEvent.setAnchorPoint(cc.p(0,0));
        var itemTestEvent = cc.MenuItemLabel.create(labelTestEvent, this.onMenuTestEventClicked, this);
        itemTestEvent.setPosition(cc.p(labelTestEvent.getContentSize().width / 2 + MARGIN, winSize.height - MARGIN - 3 * SPACE));
        menuRequest.addChild(itemTestEvent);

        // Test sending event 'echotest' to the endpoint '/testpoint'
        var labelTestEventEndpoint = cc.LabelTTF.create("Test Endpoint Event", "Arial", 22);
        labelTestEventEndpoint.setAnchorPoint(cc.p(0,0));
        var itemTestEventEndpoint = cc.MenuItemLabel.create(labelTestEventEndpoint, this.onMenuTestEventEndpointClicked, this);
        itemTestEventEndpoint.setPosition(cc.p(winSize.width - (labelTestEventEndpoint.getContentSize().width / 2 + MARGIN), winSize.height - MARGIN - 3 * SPACE));
        menuRequest.addChild(itemTestEventEndpoint);

        // Test disconnecting basic client
        var labelTestClientDisconnect = cc.LabelTTF.create("Disconnect Socket", "Arial", 22);
        labelTestClientDisconnect.setAnchorPoint(cc.p(0,0));
        var itemClientDisconnect = cc.MenuItemLabel.create(labelTestClientDisconnect, this.onMenuTestClientDisconnectClicked, this);
        itemClientDisconnect.setPosition(cc.p(labelTestClientDisconnect.getContentSize().width / 2 + MARGIN, winSize.height - MARGIN - 4 * SPACE));
        menuRequest.addChild(itemClientDisconnect);

        // Test disconnecting the endpoint '/testpoint'
        var labelTestEndpointDisconnect = cc.LabelTTF.create("Disconnect Endpoint", "Arial", 22);
        labelTestEndpointDisconnect.setAnchorPoint(cc.p(0,0));
        var itemTestEndpointDisconnect = cc.MenuItemLabel.create(labelTestEndpointDisconnect, this.onMenuTestEndpointDisconnectClicked, this);
        itemTestEndpointDisconnect.setPosition(cc.p(winSize.width - (labelTestEndpointDisconnect.getContentSize().width / 2 + MARGIN), winSize.height - MARGIN - 4 * SPACE));
        menuRequest.addChild(itemTestEndpointDisconnect);

        this._sioClientStatus = cc.LabelTTF.create("Not connected...", "Arial", 14);
        this._sioClientStatus.setAnchorPoint(cc.p(0, 0));
        this._sioClientStatus.setPosition(cc.p(0,winSize.height * .25));
        this.addChild(this._sioClientStatus);

        // Back Menu
        var itemBack = cc.MenuItemFont.create("Back", this.toExtensionsMainLayer, this);
        itemBack.setPosition(cc.p(winSize.width - 50, 25));
        var menuBack = cc.Menu.create(itemBack);
        menuBack.setPosition(cc.p(0, 0));
        this.addChild(menuBack);

        return true;
    },

    onExit: function() {
        if(this._sioEndpoint) this._sioEndpoint.disconnect();
        if(this._sioClient) this._sioClient.disconnect();

        this._super();
    },

    //socket callback for testing
    testevent: function(data) {
        var msg = this.tag + " says 'testevent' with data: " + data;
        this.statusLabel.setString(msg);
        cc.log(msg);
    },

    message: function(data) {
        var msg = this.tag + " received message: " + data;
        this.statusLabel.setString(msg);
        cc.log(msg);
    },

    disconnection: function() {
        var msg = this.tag + " disconnected!";
        this.statusLabel.setString(msg);
        cc.log(msg);
    },
    // Menu Callbacks
    onMenuSIOClientClicked: function(sender) {

        //create a client by using this static method, url does not need to contain the protocol
        var sioclient = SocketIO.connect("ws://channon.us:3000", {"force new connection" : true});

        //if you need to track multiple sockets it is best to store them with tags in your own array for now
        sioclient.tag = "Test Client";

        //attaching the status label to the socketio client
        //this is only necessary in javascript due to scope within shared event handlers,
        //as 'this' will refer to the socketio client
        sioclient.statusLabel = this._sioClientStatus;

        //register event callbacks
        //this is an example of a handler declared inline
        sioclient.on("connect", function() {
            var msg = sioclient.tag + " Connected!";
            this.statusLabel.setString(msg);
            cc.log(msg);
            sioclient.send(msg);
        });

        //example of a handler that is shared between multiple clients
        sioclient.on("message", this.message);

        sioclient.on("echotest", function(data) {
            cc.log("echotest 'on' callback fired!");
            var msg = this.tag + " says 'echotest' with data: " + data;
            this.statusLabel.setString(msg);
            cc.log(msg);
        });

        sioclient.on("testevent", this.testevent);

        sioclient.on("disconnect", this.disconnection);

        this._sioClient = sioclient;

    },

    onMenuSIOEndpointClicked: function(sender) {

        //repeat the same connection steps for the namespace "testpoint"
        var sioendpoint = SocketIO.connect("ws://channon.us:3000/testpoint");

        //a tag to differentiate in shared callbacks
        sioendpoint.tag = "Test Endpoint";

        sioendpoint.statusLabel = this._sioClientStatus;

        sioendpoint.on("connect", function() {
            var msg = sioendpoint.tag + " Connected!";
            this.statusLabel.setString(msg);
            cc.log(msg);
            sioendpoint.send(msg);
        });

        //register event callbacks
        sioendpoint.on("echotest", function(data) {
            cc.log("echotest 'on' callback fired!");
            var msg = this.tag + " says 'echotest' with data: " + data;
            this.statusLabel.setString(msg);
            cc.log(msg);
        });

        sioendpoint.on("message", this.message);

        //demonstrating how callbacks can be shared within a delegate
        sioendpoint.on("testevent", this.testevent);

        sioendpoint.on("disconnect", this.disconnection);

        this._sioEndpoint = sioendpoint;

    },

    onMenuTestMessageClicked: function(sender) {

        //check that the socket is != NULL before sending or emitting events
        //the client should be NULL either before initialization and connection or after disconnect
        if(this._sioClient != null) this._sioClient.send("Hello Socket.IO!");

    },

    onMenuTestMessageEndpointClicked: function(sender) {

        if(this._sioEndpoint != null) this._sioEndpoint.send("Hello Socket.IO!");

    },

    onMenuTestEventClicked: function(sender) {

        if(this._sioClient != null) this._sioClient.emit("echotest","[{\"name\":\"myname\",\"type\":\"mytype\"}]");

    },

    onMenuTestEventEndpointClicked: function(sender) {

        if(this._sioEndpoint != null) this._sioEndpoint.emit("echotest","[{\"name\":\"myname\",\"type\":\"mytype\"}]");

    },

    onMenuTestClientDisconnectClicked: function(sender) {

        if(this._sioClient != null) this._sioClient.disconnect();

    },

    onMenuTestEndpointDisconnectClicked: function(sender) {

        if(this._sioEndpoint != null) this._sioEndpoint.disconnect();

    },

    toExtensionsMainLayer: function (sender) {
        var scene = new ExtensionsTestScene();
        scene.runThisTest();
    }
});

SocketIOTestLayer.create = function () {
    var retObj = new SocketIOTestLayer();
    if (retObj && retObj.init()) {
        return retObj;
    }
    return null;
};


var runSocketIOTest = function () {
    var pScene = cc.Scene.create();
    var pLayer = SocketIOTestLayer.create();
    pScene.addChild(pLayer);
    cc.director.runScene(pScene);
};