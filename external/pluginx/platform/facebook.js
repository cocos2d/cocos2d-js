/****************************************************************************
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

/**
 * Facebook APIs <br />
 * FacebookAgent...
 *
 * @property {String} name - plugin name
 * @property {String} version - API version
 * @property {Object} userInfo - store user data
 * @property {Object} HttpMethod - store http method static param
 * @property {Number} CodeSucceed - success code
 */
plugin.extend('facebook', {
    name: "",
    version: "",
    userInfo: null,

    HttpMethod: {
        'GET': 'get',
        'POST': 'post',
        'DELETE': 'delete'
    },

    CODE_SUCCEED: 0,
    AppEvent: {
        'ACTIVATED_APP': "fb_mobile_activate_app",
        'COMPLETED_REGISTRATION': "fb_mobile_complete_registration",
        'VIEWED_CONTENT': "fb_mobile_content_view",
        'SEARCHED': "fb_mobile_search",
        'RATED': "fb_mobile_rate",
        'COMPLETED_TUTORIAL': "fb_mobile_tutorial_completion",
        'ADDED_TO_CART': "fb_mobile_add_to_cart",
        'ADDED_TO_WISHLIST': "fb_mobile_add_to_wishlist",
        'INITIATED_CHECKOUT': "fb_mobile_initiated_checkout",
        'ADDED_PAYMENT_INFO': "fb_mobile_add_payment_info",
        'PURCHASED': "fb_mobile_purchase",
        'ACHIEVED_LEVEL': "fb_mobile_level_achieved",
        'UNLOCKED_ACHIEVEMENT': "fb_mobile_achievement_unlocked",
        'SPENT_CREDITS': "fb_mobile_spent_credits"
    },

    AppEventParam: {
        'CURRENCY': "fb_currency",
        'REGISTRATION_METHOD': "fb_registration_method",
        'CONTENT_TYPE': "fb_content_type",
        'CONTENT_ID': "fb_content_id",
        'SEARCH_STRING': "fb_search_string",
        'SUCCESS': "fb_success",
        'MAX_RATING_VALUE': "fb_max_rating_value",
        'PAYMENT_INFO_AVAILABLE': "fb_payment_info_available",
        'NUM_ITEMS': "fb_num_items",
        'DESCRIPTION': "fb_description"
    },
    AppEventParamValue: {
        'VALUE_YES': "1",
        'VALUE_NO': "0"
    },
    /**
     * Initialize Facebook sdk
     * @param {Object} config
     */
    ctor: function (config) {
        this.name = "facebook";
        this.version = "1.0";
        this.userInfo = {};

        if (!FB) {
            return;
        }

        var self = this;
        //This configuration will be read from the project.json.
        FB.init(config);
        FB.getLoginStatus(function (response) {
            if (response && response.status === 'connected') {
                //login
                self._isLogined = true;
                //save user info
                self.userInfo = response.authResponse;
            } else {
                self._isLogined = false;
            }
        });

        plugin.FacebookAgent = this;
    },
    /**
     * Gets the current object
     * @returns {FacebookAgent}
     */
    getInstance: function () {
        return this;
    },
    /**
     * Login to facebook
     * @param {Function} callback
     * @param {Array} permissions
     * @example
     * //example
     * plugin.FacebookAgent.login();
     */
    login: function (permissions, callback) {
        var self = this;
        if (typeof permissions == 'function') {
            callback = permissions;
            permissions = [];
        }
        if (permissions.every(function (item) {
            if (item != 'publish_actions')
                return true;
        })) {
            permissions.push("publish_actions");
        }
        var permissionsStr = permissions.join(',');
        FB.login(function (response) {
            if (response['authResponse']) {
                //save user info
                self.userInfo = response['authResponse'];
                var permissList = response['authResponse']['grantedScopes'].split(",");
                typeof callback === 'function' && callback(0, {
                    accessToken: response['authResponse']['accessToken'],
                    permissions: permissList
                });
            } else {
                typeof callback === 'function' && callback(response['error_code'] || 1, {
                    error_message: "unknown"
                });
            }
        }, {
            scope: permissionsStr,
            return_scopes: true
        });
    },
    /**
     * Checking login status
     * @param {Function} callback
     * @example
     * //example
     * plugin.FacebookAgent.isLoggedIn(type, msg);
     */
    isLoggedIn: function (callback) {
        var self = this;
        FB.getLoginStatus(function (response) {
            if (response) {
                if (response['status'] === 'connected') {
                    //login - save user info
                    self.userInfo = response['authResponse'];
                    typeof callback === 'function' && callback(0, {
                        isLoggedIn: true,
                        accessToken: response['authResponse']['accessToken']
                    });
                } else {
                    typeof callback === 'function' && callback(0, {
                        isLoggedIn: false,
                        accessToken: ""
                    });
                }
            } else {
                typeof callback === 'function' && callback(1, {
                    error_message: 'Unknown'
                });
            }
        });
    },

    /**
     * Logout of facebook
     * @param {Function} callback
     * @example
     * //example
     * plugin.FacebookAgent.logout(callback);
     */
    logout: function (callback) {
        var self = this;
        FB.logout(function (response) {
            if (response['authResponse']) {
                // user is now logged out
                self.userInfo = {};
                typeof callback === 'function' && callback(0, {"isLoggedIn": false});
            } else {
                typeof callback === 'function' && callback(response['error_code'] || 1, {
                    error_message: response['error_message'] || "Unknown"
                });
            }
        });
    },

    /**
     * Acquiring new permissions
     * @deprecated since v3.0
     * @param permissions
     * @param callback
     * @example
     * //example
     * plugin.FacebookAgent.requestPermissions(["manage_pages"], callback);
     */
    requestPermissions: function (permissions, callback) {
        var permissionsStr = permissions.join(',');
        var self = this;
        FB.login(function (response) {
            if (response['authResponse']) {
                var permissList = response['authResponse']['grantedScopes'].split(",");
                //save user info
                self.userInfo = response['authResponse'];
                typeof callback === 'function' && callback(0, {
                    permissions: permissList
                });
            } else {
                typeof callback === 'function' && callback(response['error_code'] || 1, {
                    error_message: response['error_message'] || "Unknown"
                });
            }
        }, {
            scope: permissionsStr,
            return_scopes: true
        });
    },

    /**
     * Acquiring AccessToken
     * @param {Function} callback
     * @example
     * //example
     * plugin.FacebookAgent.requestPermissions(callback);
     */
    requestAccessToken: function (callback) {
        if (typeof callback !== 'function') {
            return;
        }

        if (this.userInfo.accessToken) {
            callback(0, {
                accessToken: this.userInfo['accessToken']
            });
        } else {
            var self = this;
            FB.getLoginStatus(function (response) {
                if (response && response['status'] === 'connected') {
                    //login - save user info
                    self.userInfo = response['authResponse'];
                    callback(0, {
                        accessToken: response['authResponse']['accessToken']

                    });
                } else {
                    callback(response['error_code'] || 1, {
                        error_message: response['error_message'] || "Unknown"
                    });
                }
            });
        }
    },

    /**
     * Share something
     * @param info
     * @param callback
     */
    share: function (info, callback) {
        FB.ui({
                method: 'share',
                name: info['title'],
                caption: info['caption'],
                description: info['text'],
                href: info['link'],
                picture: info['imageUrl']
            },
            function (response) {
                if (response) {
                    if (response['post_id'])
                        typeof callback === 'function' && callback(0, {
                            didComplete: true,
                            post_id: response['post_id']
                        });
                    else
                        typeof callback === 'function' && callback(response.error_code || 1, {
                            error_message: "Unknown"
                        });
                } else {
                    typeof callback === 'function' && callback(1, {
                        error_message: "Unknown"
                    });
                }
            });
    },

    /**
     * Various pop
     * @param info
     * @param callback
     */
    webDialog: function (info, callback) {
        if (!info) {
            return;
        }
        if (info['dialog'] === 'share_link') {
            if (info['link']) {
                info['method'] = 'share';
                info['href'] = info['link'];
            }
        } else {
            info['method'] = info['dialog'];
            delete info['dialog'];

            info['name'] = info['site'] || info['name'];
            delete info['site'];

            info['href'] = info['siteUrl'] || info['link'];
            delete info['siteUrl'];
            delete info['link'];

            info['image'] = info['imageUrl'] || info['imagePath'] || info['photo'] || info['picture'] || info['image'];
            delete info['imageUrl'];
            delete info['imagePath'];
            delete info['photo'];


            info['caption'] = info['title'] || info['caption'];
            delete info['title'];

            info['description'] = info['text'] || info['description'];
            delete info['text'];
            delete info['description'];

            if (info['method'] == 'share_open_graph' && info['url']) {
                if (info['url']) {
                    var obj = {};
                    if (info["preview_property"])
                        obj[info["preview_property"]] = info["url"];
                    else
                        obj["object"] = info["url"];

                    for (var p in info) {
                        if (p != "method" && p != "action_type" && p != "action_properties") {
                            info[p] && (obj[p] = info[p]);
                            delete info[p];
                        }
                    }

                    info['action_properties'] = JSON.stringify(obj);
                } else {
                    return;
                }
            }

            if (
                info['method'] != 'share_open_graph' &&
                    info['method'] != 'share_link'
                ) {
                cc.log('web is not supported what this it method');
                return;
            }
        }

        FB.ui(info,
            function (response) {
                if (response) {
                    if (response['post_id'])
                        typeof callback === 'function' && callback(0, {
                            didComplete: true,
                            post_id: response['post_id']
                        });
                    else
                        typeof callback === 'function' && callback(0, response);
                } else {
                    typeof callback === 'function' && callback(1, {
                        error_message: "Unknow error"
                    });
                }
            });
    },
    canPresentDialog: function (map) {
        return false;
    },
    /**
     * FB.api package
     * @param {String} path
     * @param {Number} httpmethod
     * @param {Object} params
     * @param {Function} callback
     */
    api: function (path, httpmethod, params, callback) {
        if (typeof params === 'function') {
            callback = params;
            params = {};
        }
        FB.api(path, httpmethod, params, function (response) {
            if (response.error) {
                typeof callback === 'function' && callback(response['error']['code'], {
                    error_message: response['error']['message'] || 'Unknown'
                })
            } else {
                typeof callback === 'function' && callback(0, response);
            }
        });
    },

    /**
     * Get permission list
     * @param callback
     */
    getPermissionList: function (callback) {
        FB.api("/me/permissions", function (response) {
            if (response['data']) {
                var permissionList = [];
                for (var i = 0; i < response['data'].length; i++) {
                    if (response['data'][i]["status"] == "granted") {
                        permissionList.push(response['data'][i]['permission']);
                    }
                }
                typeof callback == 'function' && callback(0, {
                    permissions: permissionList
                });
            } else {
                if (!response['error'])
                    response['error'] = {};
                typeof callback == 'function' && callback(response['error']['code'] || 1, {
                    error_message: response['error']['message'] || 'Unknown'
                });
            }
        })
    },

    destroyInstance: function () {
    },

    /**
     * Payment request
     * @param {Object} info
     * @param {Function} callback
     */
    pay: function (info, callback) {
        /*
         * Reference document
         * https://developers.facebook.com/docs/payments/reference/paydialog
         */
        info['method'] = 'pay';
        info['action'] = 'purchaseitem';

        FB.ui(info, function (response) {
            if (response['error_code']) {
                callback(response['error_code'] || 1, {
                    error_message: response['error_message'] || 'Unknown'
                });
            } else {
                callback(0, response);
            }
        })
    },

    /**
     * Various pop
     * @param info
     * @param callback
     */
    appRequest: function (info, callback) {
        if (!info) {
            return;
        }

        info['method'] = "apprequests";
        delete info['dialog'];

        info['name'] = info['site'] || info['name'];
        delete info['site'];

        info['href'] = info['siteUrl'] || info['link'];
        delete info['siteUrl'];
        delete info['link'];

        info['image'] = info['imageUrl'] || info['imagePath'] || info['photo'] || info['picture'] || info['image'];
        delete info['imageUrl'];
        delete info['imagePath'];
        delete info['photo'];


        info['caption'] = info['title'] || info['caption'];
        delete info['title'];

        info['description'] = info['text'] || info['description'];
        delete info['text'];
        delete info['description'];

        if (info['method'] == 'share_open_graph' && info['url']) {
            if (info['url']) {
                var obj = {};
                if (info["preview_property"])
                    obj[info["preview_property"]] = info["url"];
                else
                    obj["object"] = info["url"];

                for (var p in info) {
                    if (p != "method" && p != "action_type" && p != "action_properties") {
                        info[p] && (obj[p] = info[p]);
                        delete info[p];
                    }
                }

                info['action_properties'] = JSON.stringify(obj);
            } else {
                return;
            }
        } else {
            if (!info['href']) {
                return;
            }
        }

        if (
            info['method'] != 'apprequests'
            ) {
            cc.log('web is not supported what this it method');
            return;
        }
        FB.ui(info,
            function (response) {
                if (response) {
                    if (response['post_id'])
                        typeof callback === 'function' && callback(0, {
                            didComplete: true,
                            post_id: response['post_id']
                        });
                    else
                        typeof callback === 'function' && callback(0, response);
                } else {
                    typeof callback === 'function' && callback(1, {
                        error_message: "Unknow error"
                    });
                }
            });
    },
    /**
     * get userID
     * @returns {String} userid
     */
    getUserID: function () {
        return FB.getUserID();
    },
    /**
     * logEvent for web
     * @param eventName
     * @param valueToSum
     * @param parameters
     * @constructor
     */
    logEvent: function (eventName, valueToSum, parameters) {
        if (eventName == undefined) return;
        if (valueToSum === undefined && parameters === undefined) {
            FB.AppEvents.logEvent(eventName, null, null);
        } else if (typeof valueToSum === "number" && parameters === undefined) {
            FB.AppEvents.logEvent(eventName, valueToSum);
        } else if (typeof valueToSum === "object" && parameters === undefined) {
            FB.AppEvents.logEvent(eventName, null, valueToSum);
        } else {
            FB.AppEvents.logEvent(eventName, valueToSum, parameters);
        }
    },
    /**
     * Activate App
     */
    activateApp: function () {
        FB.AppEvents.activateApp();
    },
    logPurchase:function(mount,currency,param){
        FB.AppEvents.logPurchase(mount,currency,param);
    }
});
