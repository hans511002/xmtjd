// TypeScript file


function testMC(main:Main) {
        this.mc=new std.MovieClip("","BulletTower5_1_mc","BulletTower5_1_mc");
        main.addChild(this.mc);
		this.mc.tryPlay();

		dragonBones.WorldClock.clock.advanceTime(0.033);
        egret.Ticker.getInstance().register(function (advancedTime) {
                dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            }, this.mc);
			
		if(this.mc)return;
		        
        




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
