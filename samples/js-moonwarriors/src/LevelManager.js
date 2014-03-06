var LevelManager = cc.Class.extend({
    _currentLevel:null,
    _gameLayer:null,
    ctor:function(gameLayer){
        if(!gameLayer){
            throw "gameLayer must be non-nil";
        }
        this._currentLevel = Level1;
        this._gameLayer = gameLayer;
        this.setLevel(this._currentLevel);
    },

    setLevel:function(level){
        var locCurrentLevelEnemies = this._currentLevel.enemies;
        for(var i = 0; i< level.enemies.length; i++)
            locCurrentLevelEnemies[i].ShowTime = this._minuteToSecond(locCurrentLevelEnemies[i].ShowTime);
    },
    _minuteToSecond:function(minuteStr){
        if(!minuteStr)
            return 0;
        if(typeof(minuteStr) !=  "number"){
            var mins = minuteStr.split(':');
            if(mins.length == 1){
                return parseInt(mins[0],10);
            }else {
                return parseInt(mins[0],10 )* 60 + parseInt(mins[1],10);
            }
        }
        return minuteStr;
    },

    loadLevelResource:function(deltaTime){
        if(MW.ACTIVE_ENEMIES>= this._currentLevel.enemyMax){
            return;
        }
        //load enemy
        var locCurrentLevel = this._currentLevel;
        for(var i = 0; i< locCurrentLevel.enemies.length; i++){
            var selEnemy = locCurrentLevel.enemies[i];
            if(selEnemy){
                if(selEnemy.ShowType === "Once"){
                    if(selEnemy.ShowTime == deltaTime){
                        for(var tIndex = 0; tIndex < selEnemy.Types.length;tIndex++ ){
                            this.addEnemyToGameLayer(selEnemy.Types[tIndex]);
                        }
                    }
                }else if(selEnemy.ShowType === "Repeate"){
                    if(deltaTime % selEnemy.ShowTime === 0){
                        for(var rIndex = 0; rIndex < selEnemy.Types.length;rIndex++ ){
                            this.addEnemyToGameLayer(selEnemy.Types[rIndex]);
                        }
                    }
                }
            }
        }
    },

    addEnemyToGameLayer:function(enemyType){
		var addEnemy = Enemy.getOrCreateEnemy(EnemyType[enemyType]);
        addEnemy.x = 80 + (winSize.width - 160) * Math.random();
	    addEnemy.y = winSize.height;

        var offset, tmpAction;
        var a0=0;
        var a1=0;
        switch (addEnemy.moveType) {
            case MW.ENEMY_MOVE_TYPE.ATTACK:
                offset = cc.p(this._gameLayer._ship.x, this._gameLayer._ship.y);
                tmpAction = cc.MoveTo.create(1, offset);
                break;
            case MW.ENEMY_MOVE_TYPE.VERTICAL:
                offset = cc.p(0, -winSize.height - addEnemy.height);
                tmpAction = cc.MoveBy.create(4, offset);
                break;
            case MW.ENEMY_MOVE_TYPE.HORIZONTAL:
                offset = cc.p(0, -100 - 200 * Math.random());
                a0 = cc.MoveBy.create(0.5, offset);
                a1 = cc.MoveBy.create(1, cc.p(-50 - 100 * Math.random(), 0));
                var onComplete = cc.CallFunc.create(function (pSender) {
                    var a2 = cc.DelayTime.create(1);
                    var a3 = cc.MoveBy.create(1, cc.p(100 + 100 * Math.random(), 0));
                    pSender.runAction(cc.RepeatForever.create(
                        cc.Sequence.create(a2, a3, a2.clone(), a3.reverse())
                    ));
                }.bind(addEnemy) );
                tmpAction = cc.Sequence.create(a0, a1, onComplete);
                break;
            case MW.ENEMY_MOVE_TYPE.OVERLAP:
                var newX = (addEnemy.x <= winSize.width / 2) ? 320 : -320;
                a0 = cc.MoveBy.create(4, cc.p(newX, -240));
                a1 = cc.MoveBy.create(4,cc.p(-newX,-320));
                tmpAction = cc.Sequence.create(a0,a1);
                break;
        }

        addEnemy.runAction(tmpAction);
    }
});
