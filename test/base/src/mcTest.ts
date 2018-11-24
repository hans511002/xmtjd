// TypeScript file


function testMC() {

        var mc=new std.MovieClip();
        var mcs=new std.MovieClipSub();
        var mcase=new std.MCCase();
        var mctext=new std.MCUI(new egret.TextField());
 
    
        egret.log(typeof mc);
        egret.log(typeof mcs); 


        var mcbss:std.MovieClipSubBase=<std.MovieClipSubBase>mc;
        if(mc instanceof std.MovieClipSubBase){
            egret.log("mc instanceof std.MovieClipSubBase");
            egret.log("mci instanceof std.MovieClipSubBase");

        }else{
            egret.log("mc not instanceof std.MovieClipSubBase");
        }
        if(mc instanceof std.MC){
            egret.log("mc instanceof std.MC");
        }else{
            egret.log("mc not instanceof std.MC");
        }

        if(mcs instanceof std.MovieClipSubBase){
            egret.log("mcs instanceof std.MovieClipSubBase");
        }else{
            egret.log("mcs not instanceof std.MovieClipSubBase");
        }
        if(mcs instanceof std.MC){
            egret.log("mcs instanceof std.MC");
        }else{
            egret.log("mcs not instanceof std.MC");
        }

        if(mcase instanceof std.MovieClipSubBase){
            egret.log("mcase instanceof std.MovieClipSubBase");
        }else{
            egret.log("mcase not instanceof std.MovieClipSubBase");
        }
        if(mcase instanceof std.MC){
            egret.log("mcase instanceof std.MC");
        }else{
            egret.log("mcase not instanceof std.MC");
        }
         if(mctext instanceof std.MovieClipSubBase){
            egret.log("mctext instanceof std.MovieClipSubBase");
        }else{
            egret.log("mctext not instanceof std.MovieClipSubBase");
        }
        if(mctext instanceof std.MC){
            egret.log("mctext instanceof std.MC");
        }else{
            egret.log("mctext not instanceof std.MC");
        }

        // var dis=std.loadArmature("", "BulletTower5_1_mc", "BulletTower5_1_mc");
        // if(dis){
        //     this.addChild(dis);
        //     dis.animation.play("BulletTower5_1_mc",0);
        //     dis.x = this.stage.stageWidth * 0.5;
        //     dis.y = this.stage.stageHeight * 0.5;
        //     dis.$setScaleX(5);
        //     dis.$setScaleY(5);
        // }
        // //dragonBones.WorldClock.clock.advanceTime(0.033);
        // egret.Ticker.getInstance().register(function (advancedTime) {
        //         dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        //     }, this);
}
