module std{

	var urlMap={};
	var urlLen=0;
	export function createLabel(str: string):eui.Label
	{
		return new eui.Label(str);
	}
	export function setText(tui:egret.TextField, val:string):string
	{
		var old:string = tui.$getText();
		tui.$setText(val);
		return old;
	};
	export function setNum(tui:egret.TextField,  val:number):number
	{
		var old:string = tui.$getText();
	    tui.$setText(""+val); 
		return Number(old);
	}; 
	export function getNum(tui:egret.TextField):number
	{
		return Number(tui.$getText());
	};
	export function getText(tui:egret.TextField)
	{
		return tui.$getText();
	};
	export function setAnchorPoint(node:egret.DisplayObject,x?:number,y?:number,subset?:boolean):void{
		x=x?x:0;
		y=y?y:0;
		node.$setAnchorOffsetX(x);
		node.$setAnchorOffsetY(y);
		if (subset)
		{
			var chlds=node.$children;
			for (var i = 0; i < chlds.length; i++)
			{
				setAnchorPoint(chlds[i],x,y, subset);
			}
		}
	}
	export function initResMap(){
		if(!urlLen){
			var resJson=RES.getRes("default.res.json");
			if(resJson){
				var resList=resJson["resources"];
				for(var i=0; i < resList.length;i++){
					var item=resList[i];
					var url=item["url"];
					var name=item["name"];
					urlMap[url]=name;
				}
			}else{
				RES.getResByUrl("resource/default.res.json", function(data){
					var resList=data["resources"];
					for(var i=0; i < resList.length;i++){
						var item=resList[i];
						var url=item["url"];
						var name=item["name"];
						urlMap[url]=name;
					}
				}, this, RES.ResourceItem.TYPE_JSON);
			}
		}
	}
	export function loadArmature(_rootPath:string, armatureName:string, dragonBonesName?:string):dragonBones.EgretArmatureDisplay{
		var rootPath = _rootPath;
		if (rootPath.length && rootPath.charAt(rootPath.length - 1) != '/')
			rootPath += "/";
		var dbName = dragonBonesName == "" ? armatureName : dragonBonesName;
		var fileSke = rootPath + dbName + "/" + dbName + "_ske.json";
		var fileTex = rootPath + dbName + "/" + dbName + "_tex.json";
		var filePng = rootPath + dbName + "/" + dbName + "_tex.png";
		const factory = dragonBones.EgretFactory.factory;  
		if (!urlMap[fileSke] || !urlMap[fileTex] || !urlMap[filePng]) {
			initResMap();
			return null;
		}
		return loadDB(urlMap[fileSke],urlMap[fileTex],urlMap[filePng],armatureName,dragonBonesName);
	}
	export function loadDB(fileSke:string, fileTex:string,filePng:string,armatureName:string, dragonBonesName?:string):dragonBones.EgretArmatureDisplay{
		var dbName = dragonBonesName == "" ? armatureName : dragonBonesName;
		const factory = dragonBones.EgretFactory.factory;  
		if (!factory.getDragonBonesData(dbName))
		{
			var skeletonData = RES.getRes(fileSke);
			var textureData = RES.getRes(fileTex);
			var texture = RES.getRes(filePng);
			factory.addDragonBonesData(factory.parseDragonBonesData(skeletonData,dbName),dbName);
        	factory.addTextureAtlasData(factory.parseTextureAtlasData(textureData, texture),dbName);
		}
		var armatureDisplay = factory.buildArmatureDisplay(armatureName, dragonBonesName, "", dragonBonesName);
		return armatureDisplay;
	}
	export function buildArmature(armatureName:string,  dragonBonesName:string,textureAtlasName?:string):dragonBones.EgretArmatureDisplay{
		const factory = dragonBones.EgretFactory.factory;
        return factory.buildArmatureDisplay(armatureName, dragonBonesName, "", textureAtlasName||dragonBonesName);
	}
	export function removeArmature(name:string,disposeData?:boolean)
	{
		const factory = dragonBones.EgretFactory.factory;  
		factory.removeDragonBonesData(name, disposeData);
		factory.removeTextureAtlasData(name, disposeData);
	}
 
	export function drawRange(node:egret.DisplayObject,color: number):void
	{
		 var shape:egret.Shape = new egret.Shape();
		 if(node instanceof egret.DisplayObjectContainer){
			(<egret.DisplayObjectContainer>node).addChild(shape);
 		 }else{
			 node.parent.addChild(shape);
		 }
		var w:number =node.width>0?node.width:30;
		var h:number =node.height>0?node.height:30;
		var x:number = node.x;
		var y:number = node.y;
	 	drawRect(shape,x,y,w,h);
	}
  	export function drawRect(shape:egret.Shape,x:number, y:number,w:number,h:number):void {
		//shape.graphics.beginFill(0xff0000, 1);
        shape.graphics.lineStyle(2, 0xff0000);
        // shape.graphics.drawRect(x - w / 2, y - h / 2, w, h);
		shape.graphics.moveTo(x,y);
		shape.graphics.lineTo(x,y+h);
		shape.graphics.lineTo(x+w,y+h);
		shape.graphics.lineTo(x+w,y);
		shape.graphics.lineTo(x,y);
        shape.graphics.endFill();
    }
	export function changeAnchorPoint(node:egret.DisplayObject, x:number,y:number):void {
		var ax:number=node.anchorOffsetX;
		var ay:number=node.anchorOffsetY;
		node.$setAnchorOffsetX(x);
		node.$setAnchorOffsetY(y);
		node.$setX(node.x+ax-x);
		node.$setY(node.y+ay-y); 
	}
}
  
module std{
	export class BaseNode extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		}
		////////////////////////
	}
  	export  class MC extends BaseNode
	{
		currentFrame:number;
		defAniName:string;
        totalFrames:number;
        inPlay:boolean;
        playTimes:number;
        bindListenType:number;

		

		getArmature():dragonBones.Armature{
			return null;
		}
		getAnimation():dragonBones.Animation{
			return null;
		}
		getTotalFrames(_aniName?:string):number
		{
			var aniName:string = _aniName?_aniName:"";
			if (aniName == "")aniName = this.defAniName;
			var aniData:dragonBones.AnimationData = this.getArmature().armatureData.animations[aniName];
			if (aniData)
				return aniData.frameCount + 1;
			return 0;
		}
		gotoAndStop(cf:number, _aniName:string = ""):void{
			if (!this.getArmature() || !this.getAnimation())return;
			if (cf == 0)cf = 1;
			var aniName:string = _aniName?_aniName:"";
			if (aniName == "")aniName = this.defAniName;
			this.currentFrame = (cf - 1) % this.totalFrames + 1;
			//if (this.getAnimation().lastAnimationName != aniName)
			//	this->getAnimation()->gotoAndStopByFrame(aniName, currentFrame - 1);
			//else
			this.inPlay = false;
			this.getAnimation().gotoAndStopByFrame(aniName, this.currentFrame - 1);
		}
 		nextFram():void
		{
			if (this.getArmature() == null || this.getAnimation() == null)return;
			this.currentFrame++;
			this.gotoAndStop(this.currentFrame);
		}
		stop(_aniName:string):void
		{
			if (!this.getArmature() || !this.getAnimation())return;
			var aniName:string = _aniName?_aniName:"";
			if (aniName == "")aniName = this.defAniName;
			this.getAnimation().stop(aniName);
			this.inPlay = false;
		}
		play(_aniName?:number|string ,times:number=1):void
		{
			if(typeof _aniName== "string"){
				if (!this.getArmature() || !this.getAnimation())return;
				var aniName:string = _aniName?_aniName:"";
				if (aniName == "")aniName = this.defAniName;
				this.getAnimation().play(aniName, times);
				this.playTimes = times;
				this.inPlay = true;
				if(times == 1)
					this.bindMovieListen(1);
			}else{
				if (!this.getArmature() || !this.getAnimation())return;
				this.getAnimation().play(this.defAniName, _aniName);
				this.inPlay = true;
				this.playTimes = _aniName;
				if(_aniName==1)
					this.bindMovieListen(1);
			} 
		}

		isPlay():boolean{
			 return this.inPlay;
		}

		tryPlay():boolean
		{
			//var mcs:MovieClipSub=ISTYPE(MovieClipSub, this);
			// if (mcs) {
			// 	if (!mcs->isReady){
			// 		if(!mcs->reinit())
			// 			return false;
			// 	}
			// }
			// if (!this->inPlay)
			// {
			// 	this->play(1);
			// 	return this->inPlay;
			// }
			// else {
			// 	this->currentFrame++;
			// 	this->currentFrame = (currentFrame-1) % totalFrames + 1;
			// }
			return false;
		}
		isPlayEnd():boolean{
			return this.currentFrame == this.totalFrames;
		}

		bindMovieListen(type:number):void 
		{
			if(type == 1)
			{
			//     if(ISTYPE(MovieClip, this))
			//     {
			//         MovieClip *mc = ISTYPE(MovieClip, this);
			//         if(mc->container)
			//         {
			//             if((this->bindListenType & type)!=type)
			//             {
			// 				if (!mc->isOnce) {
			// 					mc->container->getEventDispatcher()->setEnabled(true);
			// 					mc->container->getEventDispatcher()->addCustomEventListener(dragonBones::EventObject::COMPLETE, std::bind(&MC::completeHandler, this, std::placeholders::_1));
			// 				}
			//                 this->bindListenType = this->bindListenType | type;
			//             }
			//         }
			//     }
			//     else if(ISTYPE(MovieClipSub, this))
			//     {
			//         MovieClipSub *mc = ISTYPE(MovieClipSub, this);
			//         if(mc->container)
			//         {
			//             if((this->bindListenType & type) != type)
			//             {
			//                 mc->container->getEventDispatcher()->setEnabled(true);
			// 				mc->container->getEventDispatcher()->addCustomEventListener(dragonBones::EventObject::COMPLETE, std::bind(&MC::completeHandler, this, std::placeholders::_1));
			//                 this->bindListenType = this->bindListenType | type;
			//             }
			//         }
			//     }
			}
    	}

/*
		virtual void completeHandler(cocos2d::EventCustom *event);
	
        Sprite *getSprite(const string &  slotName);
		virtual void addMcs(MovieClipSub * mcs, bool reinit = false);
		virtual bool remove(MovieClipSub * ms);
		static MovieClip * getRootMc(MC * mc);
		submc:Array<MC>; 
		submcbs:Array<MC>;
		Array<MovieClipSubBase *> allSubMcbs;
        Array<MovieClipSubBase*> updateMcbs;
        virtual void addMCbs(MovieClipSubBase * mcs, bool reinit=false);
		virtual bool remove(MovieClipSubBase * ms);
        virtual Node * getMemNode(const string &  slotName);
        MovieClipSub*  getMemSubMC(const string &  slotName);
        template<typename T = Node> T * getMem(const string &  slotName) { return ISTYPE(T, getMemNode(slotName)); };
*/
 
 		isReady:boolean=false;
		reinitType:number=0;
        mc:MC=null;
        slot:dragonBones.Slot=null;
		bone:dragonBones.Bone=null;
		root:dragonBones.Bone=null;
        display:egret.DisplayObject=null;
		disPos:egret.Point;
        slotName:string ;
		visible:boolean=true;
// list:Array<number>;
		public constructor() {
			super();
			this.currentFrame=0;
			this.totalFrames=0;
			this.inPlay=false;
			this. playTimes=-1;
			this. bindListenType=0;
			
			this.isReady=false;
			this.reinitType=0;
			this.mc=null;
			this.slot=null;
			this.bone=null;
			this.root=null;
			this.display=null;
			this.disPos=new egret.Point(0,0);
			this.slotName="";
			this.visible=true;
		}

		setVisible(v:boolean):void{
			this.visible = v;
		}

 		getParentMC():MC{
		  	return this.mc;
		}

		// getDisPosition():egret.Point{}
		// getDisArPos():egret.Point;
		// setDisScale():void;
		// reinit():boolean {}
		// initPos():void ;

	}

	export class MovieClip extends MC
	{
		public constructor() {
			super();
		}

		// MCText * createText(const string &  slot, bool reinit = false);
        // MovieClipSub * createMovieClipSub(const string &  slot,bool reinit=false);
        // MovieClip * createMovieClip(const string &  slot, const string &  rootPath, const string &  armName, const string &  dbName, bool reinit = false,bool delay=false);
        // MovieClip * createMovieClip(const string &  slot, const string &  rootPath, const string &  dbName);
        // MovieClip * createMovieClip(const string &  slot, MovieClip * mc, bool reinit = false);
        // MCCase * createCase(const string &  slot, bool reinit = false, bool draw = false);
        // MCSprite * createSprite(const string &  slot, const string &  file, bool reinit = false);
        // MCSprite * createSprite(const string &  slot, Sprite* file, bool reinit = false);
        // MCMask * createMask(const string &  slot, bool reinit = false);
	}
	export class  MovieClipSub extends MC 
	{
		public constructor() {
			super();
		}

		// MCText * createText(const string &  slot, bool reinit = false);
        // MovieClipSub * createMovieClipSub(const string &  slot,bool reinit=false);
        // MovieClip * createMovieClip(const string &  slot, const string &  rootPath, const string &  armName, const string &  dbName, bool reinit = false,bool delay=false);
        // MovieClip * createMovieClip(const string &  slot, const string &  rootPath, const string &  dbName);
        // MovieClip * createMovieClip(const string &  slot, MovieClip * mc, bool reinit = false);
        // MCCase * createCase(const string &  slot, bool reinit = false, bool draw = false);
        // MCSprite * createSprite(const string &  slot, const string &  file, bool reinit = false);
        // MCSprite * createSprite(const string &  slot, Sprite* file, bool reinit = false);
        // MCMask * createMask(const string &  slot, bool reinit = false);
	
	}

    // class MCText;
    // class MCCase;
	// class MCSprite;
	// class MCMask;

	
 
}
