module test {
	export class WorldInterface_mc extends std.BaseNode{
		public constructor() {
			super();
		}

		// book:std.MovieClipSub;
		// bookBookCase:std.MCCase;
		butCastAir:std.MovieClipSub;
		butCastAirCastAirCase:std.MCCase;
 		butCastAirCont:std.MovieClipSub;
		butCastAirContContMask:std.MCMask;
		butCastGolem:std.MovieClipSub;
		butCastGolemCastGolemCase:std.MCCase;
		butCastGolemCont:std.MovieClipSub;
		butCastGolemContContMask:std.MCMask;
		butCastIceman:std.MovieClipSub; 
		butCastIcemanCastIcemanCase:std.MCCase;
		butCastIcemanCont:std.MovieClipSub;
		butCastIcemanContContMask:std.MCMask;
		buyFire:std.MovieClipSub;
		buyFireBuyTXT:std.MCLabel;
		buyFireCoin:std.MovieClipSub;
		buyFireLightUp:egret.Sprite;
		buyGetAll:std.MovieClipSub;
		buyGetAllBuyTXT:std.MCLabel;
		buyGetAllCoin:std.MovieClipSub;
		buyGetAllLightUp:egret.Sprite;
		buyIce:std.MovieClipSub;
		buyIceBuyTXT:std.MCLabel;
		buyIceCoin:std.MovieClipSub;
		buyIceLightUp:egret.Sprite;
		buyLevin:std.MovieClipSub;
		buyLevinBuyTXT:std.MCLabel;
		buyLevinCoin:std.MovieClipSub;
		buyLevinLightUp:egret.Sprite;
		buyStone:std.MovieClipSub;
		buyStoneBuyTXT:std.MCLabel;
		buyStoneCoin:std.MovieClipSub;
		buyStoneLightUp:egret.Sprite;
		fast:std.MovieClipSub;
		fastFastCase:std.MCCase;
		fastCont:std.MovieClipSub;
		fireBack:std.MovieClipSub;
		


		fireBackCont:std.MovieClipSub ;
		fireBacklight:std.MovieClipSub ;
		fireNumTXT:std.MCLabel ; 
		fireSphere:std.MovieClipSub ;
		fireSphereSphereCase:std.MCCase ;
		getAll:std.MovieClipSub ;
		getAllFire:std.MovieClipSub ;
		getAllIce:std.MovieClipSub ;
		getAllLevin:std.MovieClipSub ;
		getAllSphereCase:std.MCCase ;
		getAllStone:std.MovieClipSub ;
		getAllNumTXT:std.MCLabel ;
		iceBack:std.MovieClipSub ;
		iceBackCont:std.MovieClipSub ;
		iceBacklight:std.MovieClipSub ;
		iceNumTXT:std.MCLabel ;
		iceSphere:std.MovieClipSub ;
		iceSphereSphereCase:std.MCCase ;
		//lastTime:std.MCLabel ;
		levinBack:std.MovieClipSub ;
		levinBackCont:std.MovieClipSub ;
		levinBacklight:std.MovieClipSub ;
		levinNumTXT:std.MCLabel ;
		levinSphere:std.MovieClipSub ;
		levinSphereSphereCase:std.MCCase ;
		liveTXT:std.MCLabel ;
		moneyTXT:std.MCLabel ;
		//pause:std.MovieClipSub ;
		//pausePauseCase:std.MCCase ;
		//sell:std.MovieClipSub ;
		//slow:std.MovieClipSub ;
		startWaves:std.MovieClipSub ;
		startWavesStartWavesCase:std.MCCase ;
		stoneBack:std.MovieClipSub ;
		stoneBackCont:std.MovieClipSub ;
		stoneBacklight:std.MovieClipSub ;
		stoneNumTXT:std.MCLabel ;
		stoneSphere:std.MovieClipSub ;
		stoneSphereSphereCase:std.MCCase ;
 
		waveTXT:std.MCLabel; 

		///////////////////////////
		fireSphereMyPoint:egret.Point;
		iceSphereMyPoint:egret.Point;
		stoneSphereMyPoint:egret.Point;
		levinSphereMyPoint:egret.Point;
		getAllMyPoint:egret.Point;
 

		buyFireMyCost:number;
		buyFireCoinMyPoint:egret.Point;
		buyIceMyCost:number;
		buyIceCoinMyPoint:egret.Point;
		buyStoneMyCost:number;
		buyStoneCoinMyPoint:egret.Point;
		buyLevinMyCost:number;
		buyLevinCoinMyPoint:egret.Point;
		buyGetAllMyCost:number;
		buyGetAllCoinMyPoint:egret.Point;

		wiCast:std.MovieClip;
		wiLive:std.MovieClip;
		wiSphere:std.MovieClip;
		wiStart:std.MovieClip;


		init(){
			this.wiCast = new std.MovieClip("work/", "worldCast_mc", "worldCast_mc");
			this.wiLive = new std.MovieClip("work/", "worldLive_mc", "worldLive_mc");
			this.wiSphere = new std.MovieClip("work/", "worldSphere_mc", "worldSphere_mc");
			this.wiStart=new std.MovieClip("work/", "worldStart_mc", "worldStart_mc");

			this.addChild(this.wiCast);
			this.addChild(this.wiLive);
			this.addChild(this.wiSphere);
			this.addChild(this.wiStart);
		 
			//this.setPosition(0, Main::SCREEN_HEIGHT);
			//backComponents = this.createMovieClipSub("backComponents");//image
			//barInfo = this.createMovieClipSub("barInfo");
			//barInfoFireTXT = barInfo.createText("fireTXT");
			//barInfoHealthTXT = barInfo.createText("healthTXT");
			//barInfoIceTXT = barInfo.createText("iceTXT");
			//barInfoLevinTXT = barInfo.createText("levinTXT");
			//barInfoMyTarget = NULL;// barInfo.createCase("myTarget");
			//barInfoNoteTXT = barInfo.createText("noteTXT");
			//barInfoPenaltyTXT = barInfo.createText("penaltyTXT");
			//barInfoSpeedTXT = barInfo.createText("speedTXT");
			//barInfoStoneTXT = barInfo.createText("stoneTXT");
 
			this.butCastAir =this.wiCast.createMovieClipSub("butCastAir");
			this.butCastAirCastAirCase = this.butCastAir.createCase("castAirCase");

			this.butCastAirCont = this.butCastAir.createMovieClipSub("cont", 1);//4帧才有

			this.butCastAirContContMask = this.butCastAirCont.createMask("contMask");
			//butCastAirContContMask = butCastAirCont.createMovieClipSub("contMask");

			this.butCastGolem = this.wiCast.createMovieClipSub("butCastGolem"); 
			this.butCastGolemCastGolemCase = this.butCastGolem.createCase("castGolemCase");

			this.butCastGolemCont = this.butCastGolem.createMovieClipSub("cont", 1);//4帧才有
			this.butCastGolemContContMask = this.butCastGolemCont.createMask("contMask");
			this.butCastIceman =this.wiCast.createMovieClipSub("butCastIceman");
			this.butCastIcemanCastIcemanCase = this.butCastIceman.createCase("castIcemanCase");
			this.butCastIcemanCont = this.butCastIceman.createMovieClipSub("cont", 1);//4帧才有
			this.butCastIcemanContContMask = this.butCastIcemanCont.createMask("contMask");

			this.buyFire = this.wiSphere.createMovieClipSub("buyFire");
			this.buyFireBuyTXT = this.buyFire.createLabel("buyTXT");
			this.buyFireCoin = this.buyFire.createMovieClipSub("coin");
			this.buyFireLightUp = this.buyFire.getSprite("lightUp");
			this.buyGetAll = this.wiSphere.createMovieClipSub("buyGetAll");
			this.buyGetAllBuyTXT = this.buyGetAll.createLabel("buyTXT");
			this.buyGetAllCoin = this.buyGetAll.createMovieClipSub("coin");
			this.buyGetAllLightUp = this.buyGetAll.getSprite("lightUp");
			this.buyIce = this.wiSphere.createMovieClipSub("buyIce");
			this.buyIceBuyTXT = this.buyIce.createLabel("buyTXT");
			this.buyIceCoin = this.buyIce.createMovieClipSub("coin");
			this.buyIceLightUp = this.buyIce.getSprite("lightUp");
			this.buyLevin = this.wiSphere.createMovieClipSub("buyLevin");
			this.buyLevinBuyTXT = this.buyLevin.createLabel("buyTXT");
			this.buyLevinCoin = this.buyLevin.createMovieClipSub("coin");
			this.buyLevinLightUp = this.buyLevin.getSprite("lightUp");
			this.buyStone = this.wiSphere.createMovieClipSub("buyStone");
			this.buyStoneBuyTXT = this.buyStone.createLabel("buyTXT");
			this.buyStoneCoin = this.buyStone.createMovieClipSub("coin");
			this.buyStoneLightUp = this.buyStone.getSprite("lightUp");

			this.fast = this.wiStart.createMovieClipSub("fast");
			this.fastFastCase = this.fast.createCase("fastCase");
			this.fastCont = this.fast.createMovieClipSub("cont", 1);// 4 5帧 才有

			this.fireSphere = this.wiSphere.createMovieClipSub("fireSphere");
			this.fireBack = this.wiSphere.createMovieClipSub("fireBack");
			this.fireBackCont = this.fireBack.createMovieClipSub("cont", 1);// 2帧 才有
			this.fireBacklight = this.wiSphere.createMovieClipSub("fireBacklight");
			this.fireNumTXT = this.wiSphere.createLabel("fireNumTXT");
			
			//Vec2 pos = this.fireSphere.convertToWorldSpace(Vec2(0, 0));
			//Vec2 wp = this.container.convertToNodeSpaceAR(pos);
			//logInfo("fireSphere", pos, &wp);
			//this.fireSphere.setPosition(wp);
			//logInfo("fireSphere", this.fireSphere .getPosition());
			//logInfo("this.fireSphere.display", getNamePath(this.fireSphere.display));
	
			this.fireSphereSphereCase = this.fireSphere.createCase("sphereCase",0,true);
			this.getAll = this.wiSphere.createMovieClipSub("getAll");
			this.getAllFire = this.getAll.createMovieClipSub("fire");
			this.getAllIce = this.getAll.createMovieClipSub("ice");
			this.getAllLevin = this.getAll.createMovieClipSub("levin");
			this.getAllSphereCase = this.getAll.createCase("sphereCase", 0, true);
			this.getAllStone = this.getAll.createMovieClipSub("stone");
			this.getAllNumTXT = this.wiSphere.createLabel("getAllNumTXT");
			this.iceBack = this.wiSphere.createMovieClipSub("iceBack");
			this.iceBackCont = this.iceBack.createMovieClipSub("cont", 1);//2帧 才有
			this.iceBacklight = this.wiSphere.createMovieClipSub("iceBacklight");
			this.iceNumTXT = this.wiSphere.createLabel("iceNumTXT");
			this.iceSphere = this.wiSphere.createMovieClipSub("iceSphere");
			this.iceSphereSphereCase = this.iceSphere.createCase("sphereCase", 0, true);
			this.levinBack = this.wiSphere.createMovieClipSub("levinBack");
			this.levinBackCont = this.levinBack.createMovieClipSub("cont", 1);//2帧 才有
			this.levinBacklight = this.wiSphere.createMovieClipSub("levinBacklight");
			this.levinNumTXT = this.wiSphere.createLabel("levinNumTXT");
			this.levinSphere = this.wiSphere.createMovieClipSub("levinSphere");
			this.levinSphereSphereCase = this.levinSphere.createCase("sphereCase", 0, true);
			this.liveTXT =this.wiLive.createLabel("liveTXT");
			this.moneyTXT = this.wiLive.createLabel("moneyTXT");

 			//selectUnit = this.createMovieClipSub("selectUnit");
 			//slow = this.createMovieClipSub("slow");
			this.startWaves = this.wiStart.createMovieClipSub("startWaves");
			this.startWavesStartWavesCase = this.startWaves.createCase("startWavesCase");

			this.stoneBack = this.wiSphere.createMovieClipSub("stoneBack");
			this.stoneBackCont = this.stoneBack.createMovieClipSub("cont",1);//2帧 才有
			this.stoneBacklight = this.wiSphere.createMovieClipSub("stoneBacklight");
			this.stoneNumTXT = this.wiSphere.createLabel("stoneNumTXT");
			this.stoneSphere = this.wiSphere.createMovieClipSub("stoneSphere");
			this.stoneSphereSphereCase = this.stoneSphere.createCase("sphereCase", 0, true);
			//testRestart = this.createMovieClipSub("testRestart");
			//testRestartBoard = this.createMovieClipSub("testRestartBoard");
			//testRestartBoardWaveTXT = testRestartBoard.createText("waveTXT");
			this.waveTXT = this.wiLive.createLabel("waveTXT");
			var wavesTXT:std.MCLabel = this.wiLive.createLabel("wavesTXT");
			wavesTXT.getContainer().text="中文"; 

			// this.wiBook.setPosition(Vec2(Main::SCREEN_WIDTH - 5, Main::SCREEN_HEIGHT-5 ));
			this.wiCast.setPosition(10, this.stage.stageHeight-10);
			this.wiLive.setPosition(10,  5);
			this.wiSphere.setPosition(220, 5);
			this.wiStart.setPosition(this.stage.stageWidth - 230, this.stage.stageHeight-5);

			 
			this.getAll.gotoAndStop(3);
			this.fireBack.gotoAndStop(3);
			this.iceBack.gotoAndStop(3);
			this.stoneBack.gotoAndStop(3);
			this.levinBack.gotoAndStop(3);
			
		}
		_time:number;

		//update
		onTicker(timeStamp:number){
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
		this.fireSphere.tryPlay();
        dragonBones.WorldClock.clock.advanceTime(pass / 1000);
		egret.log("timeStamp "+timeStamp);
        return false;
		}
	}
}