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

var UIListViewTest_Vertical = UIScene.extend({
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            var background = this._widget.getChildByName("background_Panel");

            this._array = [];
            for (var i = 0; i < 20; ++i) {
                this._array.push("item_" + i);
            }

            // Create the list view
            var listView = ccui.ListView.create();
            // set list view ex direction
            listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
            listView.setTouchEnabled(true);
            listView.setBounceEnabled(true);
            listView.setBackGroundImage("res/cocosui/green_edit.png");
            listView.setBackGroundImageScale9Enabled(true);
            listView.setSize(cc.size(240, 130));
            listView.x = (widgetSize.width - background.width) / 2 + (background.width - listView.width) / 2;
            listView.y = (widgetSize.height - background.height) / 2 + (background.height - listView.height) / 2;
            listView.addEventListenerListView(this.selectedItemEvent, this);
            this._mainNode.addChild(listView);


            // create model
            var default_button = ccui.Button.create();
            default_button.setName("TextButton");
            default_button.setTouchEnabled(true);
            default_button.loadTextures("res/cocosui/backtotoppressed.png", "res/cocosui/backtotopnormal.png", "");

            var default_item = ccui.Layout.create();
            default_item.setTouchEnabled(true);
            default_item.setSize(default_button.getSize());
            default_button.x = default_item.width / 2;
            default_button.y = default_item.height / 2;
            default_item.addChild(default_button);

            // set model
            listView.setItemModel(default_item);

            // add default item
            var count = this._array.length;
            for (var i = 0; i < count / 4; ++i) {
                listView.pushBackDefaultItem();
            }
            // insert default item
            for (var i = 0; i < count / 4; ++i) {
                listView.insertDefaultItem(0);
            }

            // add custom item
            for (var i = 0; i < count / 4; ++i) {
                var custom_button = ccui.Button.create();
                custom_button.setName("TextButton");
                custom_button.setTouchEnabled(true);
                custom_button.setScale9Enabled(true);
                custom_button.loadTextures("res/cocosui/button.png", "res/cocosui/buttonHighlighted.png", "");
                custom_button.setSize(default_button.getSize());

                var custom_item = ccui.Layout.create();
                custom_item.setSize(custom_button.getSize());
                custom_button.x = custom_item.width / 2;
                custom_button.y = custom_item.height / 2;
                custom_item.addChild(custom_button);

                listView.pushBackCustomItem(custom_item);
            }
            // insert custom item
            var items = listView.getItems();
            var items_count = items.length;
            for (var i = 0; i < count / 4; ++i) {
                var custom_button = ccui.Button.create();
                custom_button.setName("TextButton");
                custom_button.setTouchEnabled(true);
                custom_button.setScale9Enabled(true);
                custom_button.loadTextures("res/cocosui/button.png", "res/cocosui/buttonHighlighted.png", "");
                custom_button.setSize(default_button.getSize());

                var custom_item = ccui.Layout.create();
                custom_item.setSize(custom_button.getSize());
                custom_button.x = custom_item.width / 2;
                custom_button.y = custom_item.height / 2;
                custom_item.addChild(custom_button);

                listView.insertCustomItem(custom_item, items_count);
            }

            // set item data
            items_count = items.length;
            for (var i = 0; i < items_count; ++i) {
                var item = listView.getItem(i);
                var button = item.getChildByName("TextButton");
                var index = listView.getIndex(item);
                button.setTitleText(this._array[index]);
            }

            // remove last item
            listView.removeLastItem();

            // remove item by index
            items_count = items.length;
            listView.removeItem(items_count - 1);

            // set all items layout gravity
            listView.setGravity(ccui.ListView.GRAVITY_CENTER_VERTICAL);

            return true;
        }

        return false;
    },

    selectedItemEvent: function (sender, type) {
        switch (type) {
            case ccui.ListView.EVENT_SELECTED_ITEM:
                var listViewEx = sender;
                cc.log("select child index = " + listViewEx.getCurSelectedIndex());
                break;

            default:
                break;
        }
    }
});

var UIListViewTest_Horizontal = UIScene.extend({
    _array: null,
    init: function () {
        if (this._super()) {
            var widgetSize = this._widget.getSize();
            var background = this._widget.getChildByName("background_Panel");
            // create list view ex data
            this._array = [];
            for (var i = 0; i < 20; ++i) {
                this._array.push("item_" + i);
            }


            // Create the list view
            var listView = ccui.ListView.create();
            // set list view ex direction
            listView.setDirection(ccui.ScrollView.DIR_HORIZONTAL);
            listView.setTouchEnabled(true);
            listView.setBounceEnabled(true);
            listView.setBackGroundImage("res/cocosui/green_edit.png");
            listView.setBackGroundImageScale9Enabled(true);
            listView.setSize(cc.size(240, 130));
            listView.x = (widgetSize.width - background.width) / 2 + (background.width - listView.width) / 2;
            listView.y = (widgetSize.height - background.height) / 2 + (background.height - listView.height) / 2;
            listView.addEventListenerListView(this.selectedItemEvent, this);
            this._mainNode.addChild(listView);


            // create model
            var default_button = ccui.Button.create();
            default_button.setName("TextButton");
            default_button.setTouchEnabled(true);
            default_button.loadTextures("res/cocosui/backtotoppressed.png", "res/cocosui/backtotopnormal.png", "");

            var default_item = ccui.Layout.create();
            default_item.setTouchEnabled(true);
            default_item.setSize(default_button.getSize());
            default_button.x = default_item.width / 2;
            default_button.y = default_item.height / 2;
            default_item.addChild(default_button);

            // set model
            listView.setItemModel(default_item);

            // add default item
            var count = this._array.length;
            for (var i = 0; i < count / 4; ++i) {
                listView.pushBackDefaultItem();
            }
            // insert default item
            for (var i = 0; i < count / 4; ++i) {
                listView.insertDefaultItem(0);
            }

            // add custom item
            for (var i = 0; i < count / 4; ++i) {
                var custom_button = ccui.Button.create();
                custom_button.setName("TextButton");
                custom_button.setTouchEnabled(true);
                custom_button.setScale9Enabled(true);
                custom_button.loadTextures("res/cocosui/button.png", "res/cocosui/buttonHighlighted.png", "");
                custom_button.setSize(default_button.getSize());

                var custom_item = ccui.Layout.create();
                custom_item.setSize(custom_button.getSize());
                custom_button.x = custom_item.width / 2;
                custom_button.y = custom_item.height / 2;
                custom_item.addChild(custom_button);

                listView.pushBackCustomItem(custom_item);
            }
            // insert custom item
            var items = listView.getItems();
            var items_count = items.length;
            for (var i = 0; i < count / 4; ++i) {
                var custom_button = ccui.Button.create();
                custom_button.setName("TextButton");
                custom_button.setTouchEnabled(true);
                custom_button.setScale9Enabled(true);
                custom_button.loadTextures("res/cocosui/button.png", "res/cocosui/buttonHighlighted.png", "");
                custom_button.setSize(default_button.getSize());

                var custom_item = ccui.Layout.create();
                custom_item.setSize(custom_button.getSize());
                custom_button.x = custom_item.width / 2;
                custom_button.y = custom_item.height / 2;
                custom_item.addChild(custom_button);

                listView.insertCustomItem(custom_item, items_count);
            }

            // set item data
            items_count = items.length;
            for (var i = 0; i < items_count; ++i) {
                var item = listView.getItem(i);
                var button = item.getChildByName("TextButton");
                var index = listView.getIndex(item);
                button.setTitleText(this._array[index]);
            }

            // remove last item
            listView.removeLastItem();

            // remove item by index
            items_count = items.length;
            listView.removeItem(items_count - 1);

            // set all items layout gravity
            listView.setGravity(ccui.ListView.GRAVITY_CENTER_VERTICAL);

            // set items margin
            listView.setItemsMargin(2);

            return true;
        }

        return false;
    },

    selectedItemEvent: function (sender, type) {
        switch (type) {
            case ccui.ListView.EVENT_SELECTED_ITEM:
            {
                var listViewEx = sender;
                cc.log("select child index = " + listViewEx.getCurSelectedIndex());
            }
                break;

            default:
                break;
        }
    }
});
