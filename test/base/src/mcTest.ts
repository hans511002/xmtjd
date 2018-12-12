// TypeScript file
// 60fps 
function onTicker(timeStamp:number){
		if(!this._time) {
			this._time = timeStamp;
		}
        var now = timeStamp;
        var pass = now - this._time;
        this._time = now;
 		// this.fireBack.tryPlay();
		// this.iceBack.tryPlay();
		// this.stoneBack.tryPlay(); 
		// this.levinBack.tryPlay();
		if(!this.isPlay())
			this.tryPlay();
        // dragonBones.WorldClock.clock.advanceTime(pass / 1000);
		// egret.log("timeStamp="+timeStamp+"  pass="+pass);
        return false;
}
// 帧频事件
function enterFrameHandler(event: dragonBones.EgretEvent): void {
	var dt:Date= new Date();
	var ms:number =dt.getTime();
	if(!this._time) {
		this._time = ms;
	}
	var pass = ms - this._time;
	// egret.log("timeStamp="+ms+"  pass="+pass);
	this._time = ms;
	if(!this.mc.isPlay())
		this.mc.tryPlay();
	// dragonBones.WorldClock.clock.advanceTime(-1);


	if (this.fastCont.isReady){
		if (this.world.frameCounter % 2){
			if (this.fastCont.currentFrame < this.fastCont.totalFrames){
				this.fastCont.tryPlay();
			}else{
				this.fastCont.gotoAndStop(1);
			}
		}
	}
}
function touchMoveHandler(event: egret.TouchEvent): void {
	if (event.type != egret.TouchEvent.TOUCH_BEGIN) {
		return;
	}
	var targetName:string =event.target.name;
	if(targetName == "fastCase"){ 
		if (this.fast.currentFrame == 1 || this.fast.currentFrame == 4)
		{
			var tempObject = 0;
			if (this.fast.currentFrame == 4) {
				tempObject = this.fastCont.currentFrame;
			}
			this.fast.gotoAndStop((this.fast.currentFrame + 1));
			if (this.fast.currentFrame == 5) {
				this.fastCont.gotoAndStop(tempObject);
			}
		}
	}else if (this.fast.currentFrame == 2 || this.fast.currentFrame == 5) {
		var tempObject = 0;
		if (this.fast.currentFrame == 5) {
			tempObject = this.fastCont.currentFrame;
		}
		this.fast.gotoAndStop((this.fast.currentFrame - 1));
		if (this.fast.currentFrame == 4) {
			this.fastCont.gotoAndStop(tempObject);
		}
	}
}
function touchBeginHandler(event: egret.TouchEvent): void {
	if (event.type != egret.TouchEvent.TOUCH_BEGIN) {
		return;
	}
	var targetName:string =event.target.name;
	if (targetName == "fastCase"){ 
		if (this.fast.currentFrame == 3 || this.fast.currentFrame == 6)	{
			fasterManage(true);
		}
	}else if (this.fast.currentFrame == 3 || this.fast.currentFrame == 6)	{
		this.fast.gotoAndStop(this.fast.currentFrame - 2);
		if (this.fast.currentFrame == 4) {
			this.fastCont.stop();
		}
	}
}
function touchEndHandler(event: egret.TouchEvent): void {
	if (event.type != egret.TouchEvent.TOUCH_END) {
		return;
	}
	var targetName:string =event.target.name;

	if (targetName == "fastCase") {
		if (this.fast.currentFrame == 3 || this.fast.currentFrame == 6) {
			fasterManage(true);
		}
	} else if (this.fast.currentFrame == 3 || this.fast.currentFrame == 6) {
		this.fast.gotoAndStop(this.fast.currentFrame - 2);
		if (this.fast.currentFrame == 4) {
			this.fastCont.stop();
		}
	}
}
function touchCancelHandler(event: egret.TouchEvent): void {
	if (event.type != egret.TouchEvent.TOUCH_CANCEL) {
		return;
	}
}
function touchReleaseHandler(event: egret.TouchEvent): void {
	if (event.type != egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
		return;
	}
}

function keyHandler(event: KeyboardEvent): void {
            const isDown: boolean = event.type == "keydown";
            switch (event.keyCode) {
                case 37:
                case 65:
                    //Game.instance._left = isDown;
                    break;
                case 39:
                case 68:
                    // Game.instance._right = isDown;
                    break;

                case 38:
                case 87:
                    // if (isDown) {
                    //     Game.instance._player.jump();
                    // }
                    break;

                case 83:
                case 40:
                    // Game.instance._player.squat(isDown);
                    break;

                case 81:
                    // if (isDown) {
                    //     Game.instance._player.switchWeaponR();
                    // }
                    break;

                case 69:
                    // if (isDown) {
                    //     Game.instance._player.switchWeaponL();
                    // }
                    break;

                case 32:
                    // if (isDown) {
                    //     Game.instance._player.switchWeaponR();
                    //     Game.instance._player.switchWeaponL();
                    // }
                    break;
            } 
}

function fasterManage(param1:boolean) {
	if (this.fasterFlag != 2) {
		if (param1) {
			this.fast.gotoAndStop(5);
		} else {
			this.fast.gotoAndStop(4);
		}
		this.fastCont.stop();
		this.fastPlayControl(2); 
	}else{
		if (param1)	{
			this.fast.gotoAndStop(2);
		}else{
			this.fast.gotoAndStop(1);
		}
		this.fastPlayControl(0);
	}
}// end function
function testMC(main:Main) {
	    main.stage.addEventListener(egret.Event.ENTER_FRAME, enterFrameHandler, this);
		// main.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBeginHandler, this);
		// main.stage.addEventListener(egret.TouchEvent.TOUCH_END, touchEndHandler, this);
		// main.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, touchCancelHandler, this);
		// main.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, touchMoveHandler, this);
		// main.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, touchReleaseHandler, this);
		document.addEventListener("keydown", keyHandler);
		document.addEventListener("keyup", keyHandler);

		var testCase:std.MCCase=new std.MCCase(null,"",false);
		main.addChild(testCase);
		testCase.drawRange();
		testCase.$setWidth(50);
		testCase.$setHeight(50);
		testCase.enableMouseHandler(1);
		testCase.$setX(10);
		testCase.$setY(10);

        var mc:std.MovieClip=new std.MovieClip("","BulletTower5_1_mc","BulletTower5_1_mc");
		this.mc=mc;
		mc.setPosition(100,100);
        main.addChild(this.mc);
		this.mc.tryPlay();
		// dragonBones.WorldClock.clock.add(mc.getArmature());
		var wiStart=new std.MovieClip("work/", "worldStart_mc", "worldStart_mc");

//   dragonBones.WorldClock.clock.add(  );


		this.wiStart=wiStart;
		wiStart.setPosition(100,200);

        main.addChild(this.wiStart);

		var fast= wiStart.createMovieClipSub("fast");
		var fastFastCase = fast.createCase("fastCase");
		var fastCont = fast.createMovieClipSub("cont", 1);// 4 5帧 才有
		var startWaves = wiStart.createMovieClipSub("startWaves");
		var startWavesStartWavesCase = startWaves.createCase("startWavesCase");

		// std.printNode(fast);
		// std.printNode(fastFastCase);
		// std.printNode(startWaves);
		// std.printNode(startWavesStartWavesCase);


		this.startWavesStartWavesCase =startWavesStartWavesCase;
		this.startWaves =startWaves;
		this.fast =fast;
		this.fastFastCase =fastFastCase;
		this.fastCont =fastCont;
		
		// egret.startTick(onTicker, this.mc);
 		// dragonBones.WorldClock.clock.advanceTime(0.033);
        // egret.Ticker.getInstance().register(function (advancedTime) {
        //         dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        //     }, this.mc);
		//egret.startTick(onTicker, this.fast);

		
		if(this.mc)
			return;
        




        var container=new test.WorldInterface_mc();
		this.container=container;
        main.addChild(container);
        container.init();


		container.fireBack.play(0);
		container.iceBack.play(0);
		container.stoneBack.play(0);
		container.levinBack.play(0);
		//container.backComponents.play(0);
		container.fireSphere.play(0);
		container.iceSphere.play(0);
		container.stoneSphere.play(0);
		container.levinSphere.play(0);
		container.getAll.play(0);
		container.buyFire.play(0);
 
		container.buyIce.play(0);
		container.buyStone.play(0);
		container.buyLevin.play(0);
		container.buyGetAll.play(0);
		container.buyFireCoin.play(0);
		container.buyIceCoin.play(0);
		container.buyStoneCoin.play(0);
		container.buyLevinCoin.play(0);
		container.buyGetAllCoin.play(0); 
		//container.sell.play(0);
		//container.book.play(0);
		//container.pause.play(0);
		container.startWaves.play(0);
		container.butCastGolem.play(0);
		container.butCastIceman.play(0);
		container.butCastAir.play(0);
		//container.barInfo.play(0);
		//container.slow.play(0);
		container.fast.play(0);
		//container.traceBezier.play(0);
		//container.barInfo.setPositionY(15);//Main:: - 585
		//container.bookBookCase.setMouseEnabled(true);
		//container.pausePauseCase.setMouseEnabled(true);
		container.startWavesStartWavesCase.setMouseEnabled(true);
		container.butCastGolemCastGolemCase.setMouseEnabled(true);
		container.butCastIcemanCastIcemanCase.setMouseEnabled(true);
		container.butCastAirCastAirCase.setMouseEnabled(true);
		//container.slow.setMouseEnabled(true);
		//if (container.traceBezier)container.traceBezier.setMouseEnabled(true);
		//container.fireNumTXT.setMouseEnabled(false);
		//container.iceNumTXT.setMouseEnabled(false);
		//container.stoneNumTXT.setMouseEnabled(false);
		//container.levinNumTXT.setMouseEnabled(false);
		//container.barInfo.setMouseChildren(false);
		//container.barInfo.setMouseEnabled(false);
		//container.lastTime.setMouseEnabled(false);

		container.butCastGolem.setAlpha(0);
		container.butCastIceman.setAlpha(0);
		container.butCastAir.setAlpha(0);

		container.butCastGolem.setVisible(false);
		container.butCastIceman.setVisible(false);
		container.butCastAir.setVisible(false);
		//container.barInfo.setVisible(false);

		//container.lastTime.setVisible(false);
		//container.buyFireLightUp.setVisible(false);
		//container.buyIceLightUp.setVisible(false);
		//container.buyStoneLightUp.setVisible(false);
		//container.buyLevinLightUp.setVisible(false);
		//container.buyGetAllLightUp.setVisible(false);


		//		container.backComponents.cacheAsBitmap = true;
		container.fireSphereMyPoint =  container.fireSphere.localToGlobal(container.fireSphereSphereCase.getPosition());
		container.iceSphereMyPoint =  container.iceSphere.localToGlobal(container.iceSphereSphereCase.getPosition());
		container.stoneSphereMyPoint = container.stoneSphere.localToGlobal(container.stoneSphereSphereCase.getPosition());
		container.levinSphereMyPoint = container.levinSphere.localToGlobal(container.levinSphereSphereCase.getPosition());
		container.getAllMyPoint = container.getAll.localToGlobal(container.getAllSphereCase.getPosition());
  
		container.fireBacklight.play(0);
		container.iceBacklight.play(0);
		container.stoneBacklight.play(0);
		container.levinBacklight.play(0);
		container.fireBacklight.setVisible(false);
		container.iceBacklight.setVisible(false);
		container.stoneBacklight.setVisible(false);
		container.levinBacklight.setVisible(false);
		container.buyGetAll.setVisible(false);
		
        egret.startTick(this.container.onTicker, this.container);

}
