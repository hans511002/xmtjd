

module std{

	var urlMap={};
	var urlLen=0;
	export function setPosition(node:egret.DisplayObject,pos:egret.Point):void{
		node.$setX(pos.x);
		node.$setY(pos.y);
	}
	export function getPosition(node:egret.DisplayObject):egret.Point{
		return new egret.Point(node.x,node.y);
	}
	export function getAnchorPointInPoints(node:egret.DisplayObject):egret.Point{
		return new egret.Point(node.anchorOffsetX,node.anchorOffsetY);
	}
	export function createLabel(str: string):eui.Label
	{
		return new eui.Label(str);
	}
	export function setText(tui:egret.TextField, val:string):string
	{
		var old:string = tui.$getText();
		tui.$setText(val);
		return old;
	}
	export function setNum(tui:egret.TextField,  val:number):number
	{
		var old:string = tui.$getText();
	    tui.$setText(""+val); 
		return Number(old);
	}
	export function getNum(tui:egret.TextField):number
	{
		return Number(tui.$getText());
	}
	export function getText(tui:egret.TextField)
	{
		return tui.$getText();
	}
	export function setAnchorPoint(node:egret.DisplayObject,x?:number,y?:number,subset?:boolean):void{
		x=x?x:0;
		y=y?y:0;
		node.$setAnchorOffsetX(node.width*x);
		node.$setAnchorOffsetY(node.height*y);
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
		setPosition(pos:egret.Point):void{
			this.$setX(pos.x);
			this.$setY(pos.y);
		}
		////////////////////////
		
	}
	export class MovieClipSubBase{
		isReady:boolean=false;
		reinitType:number=0;
        mc:MC=null;
        slot:dragonBones.Slot=null;
		bone:dragonBones.Bone=null;
		root:dragonBones.Bone=null;
        display:egret.DisplayObjectContainer=null;
		disPos:egret.Point;
        slotName:string;
		visible:boolean=true;
		
		public constructor() {
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
		getParentMC():MC 
		{ 
			return this.mc;
		}
		getDisPosition():egret.Point{
			var x:number = this.bone.origin.x;
			var y:number = this.bone.origin.y;
			var x1:number = this.slot.origin.x;
			var y1:number = this.slot.origin.y;
			x += x1;
			y += y1;
			var dis:egret.DisplayObjectContainer = <egret.DisplayObjectContainer>this.slot.display;
			if (this.root){
				var orgin:dragonBones.Transform = this.root.origin;
				y = -(orgin.y + y);
			}
			else{
				y = -(y);
			}
			//Size mcSize = dis->getContentSize();
			//dragonBones::Transform*  global = root->getGlobal();
			//Node * disPar = dis->getParent();
			//dragonBones::Transform*  offset = root->getOffset();
			//const dragonBones::Rectangle & aabb = mc->getArmature()->getArmatureData()->aabb;
			//if (ISTYPE(dragonBones::CCArmatureDisplay, disPar)){
			//	dragonBones::CCArmatureDisplay * aniDis = ISTYPE(dragonBones::CCArmatureDisplay, disPar);
			//	const dragonBones::Rectangle & aabb = aniDis->getArmature()->getArmatureData()->aabb;
			//	y = y;
			//}
			this.disPos.x = x;
			this.disPos.y = y;// = disPar->convertToNodeSpaceAR(Vec2(x, y));
			return this.disPos;
		}
		getDisArPos():egret.Point{
			var thisPos:egret.Point=new egret.Point(0,0);
			//return  thisPos;
			if (!(this instanceof MCCase) && !(this instanceof MCText))//&& !ISTYPE(MovieClip, this)
			{
				var dis:egret.DisplayObjectContainer = <egret.DisplayObjectContainer>this.slot.display;
				std.setAnchorPoint(dis, 0.5, 0.5);
				//thisPos = dis->convertToNodeSpace(dis->getPosition());
				thisPos.x=dis.$anchorOffsetX;
				thisPos.y=dis.$anchorOffsetY;
				//dis.globalToLocal(dis.x,dis.y,thisPos);
			}
			//if (ISTYPE(MovieClipSub, this->mc) && ISTYPE(MCCase, this)){
			//	MovieClipSub * mcs = ISTYPE(MovieClipSub, this->mc);
			//	Size mcSize = mcs->container->getContentSize();
			//	const dragonBones::Rectangle & aabb = mcs->container->getArmature()->getArmatureData()->aabb;
			//	thisPos.x = -aabb.width / 2;
			//	thisPos.y = -aabb.height / 2;
			// }  
			return  thisPos; 
		}
		setDisScale():void{
			var scx:number = this.slot.origin.scaleX * this.bone.origin.scaleX;
			if (this.root) 
				scx *= this.root.origin.scaleX;
			this.display.$setScaleX(scx);
			var scy:number =this. slot.origin.scaleY * this.bone.origin.scaleY;
			if (this.root) 
				scy *= this.root.origin.scaleY;
			this.display.$setScaleY(scy);
			var r:number = this.slot.origin.rotation * this.bone.origin.rotation;
			if (this.root) r *= this.root.origin.rotation;
			this.display.$setRotation(r);
		}
		initPos():void{};
		reinit():boolean{
			if (!this.slot)
			{
				if (this.mc.getArmature())
				{
					this.slot = this.mc.getArmature().getSlot(this.slotName);
					this.bone = this.mc.getArmature().getBone(this.slotName);
					this.root = this.mc.getArmature().getBone("root");
				}
				else
					return false;
			}
			if (!this.slot) return false;
			if (this.display == this.slot.getDisplay())
				return false;
 

			var thsi:egret.DisplayObjectContainer =null;
			if( this instanceof egret.DisplayObjectContainer)
				thsi=<egret.DisplayObjectContainer>this;
			var dis:egret.DisplayObject = <egret.DisplayObject> this.slot.getDisplay();
			if (dis && dis instanceof egret.Sprite)
			{
				this.isReady = true;
				var disPos = this.getDisPosition();
				if (!this.display)
				{
					this.display = dis;
					std.setPosition(this.display,disPos);
					//this.display.setPosition(disPos  );
					this.setDisScale();
					std.setAnchorPoint(this.display, 0.5, 0.5);
					//std::setAnchorPoint(display, Vec2(0, 0));
					//std::changeAnchorPoint(display, 0.5);
					this.disPos = getAnchorPointInPoints(this.display);
					//display.setPosition(disPos - display.getAnchorPointInPoints());
					std.changeAnchorPoint(this.display, 0,0);
					if (!(this instanceof MovieClip))
					{
						//std.setAnchorPoint(display, 0, 0);
						//std.setAnchorPoint(ISTYPE(Node, this), Vec2(0.5, 0.5));
					}
					if (!(this instanceof MovieClip))
						this.display.name=(this.slotName);
					else if (this.slot._displayData)
						this.display.name=(this.slot._displayData.name);
					if((this instanceof MovieClip) ||  (this instanceof MCMask))
						this.display.$setVisible(this.visible);
					if (!(this instanceof MovieClip)){
						this.display.addChildAt(thsi,9999);
					}
					return true;
				}
				else
				{
					// if (!(this instanceof MovieClip))
					// 	thsi.retain();
					this.display.removeChild(thsi);
					this.display = dis;
					std.setPosition(this.display,disPos);
					this.setDisScale();
					std.setAnchorPoint(this.display, 0.5, 0.5);
					this.disPos = std.getAnchorPointInPoints(this.display);
					//display.setPosition(disPos - display.getAnchorPointInPoints());
					if (!(this instanceof MCCase) && !(this instanceof MCText))
						std.changeAnchorPoint(dis, 0,0);
					if (!(this instanceof MovieClip))
						this.display.name=this.slotName;
					else if (this.slot._displayData)
						this.display.name=(this.slot._displayData.name);
					// if (!(this instanceof MovieClip))
					// 	thsi.release();
					if ((this instanceof MovieClipSub) || (this instanceof MCMask))
						this.display.$setVisible(this.visible);
					if ((this instanceof MovieClip))
						thsi.removeChildren();//.removeAllChildren();
					else
						this.display.addChildAt(thsi, 9999);
					return true;
				}
			}
			this.isReady = false; 
			return false;
		}
	}
  	export  class MC extends BaseNode implements MovieClipSubBase
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
			//	this.getAnimation().gotoAndStopByFrame(aniName, currentFrame - 1);
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
			var mcs:MovieClipSub=null;
			if(this instanceof MovieClipSub)
				mcs=<MovieClipSub>this;
			if (mcs) {
				if (!mcs.isReady){
					if(!mcs.reinit())
						return false;
				}
			}
			if (!this.inPlay)
			{
				this.play(1);
				return this.inPlay;
			}
			else {
				this.currentFrame++;
				this.currentFrame = (this.currentFrame-1) % this.totalFrames + 1;
			}
			return false;
		}
		isPlayEnd():boolean{
			return this.currentFrame == this.totalFrames;
		}
		completeHandler(event:egret.Event):void{//cocos2d::EventCustom *
			var target:egret.DisplayObjectContainer = event.currentTarget;
			var eventObject:dragonBones.EventObject = <dragonBones.EventObject>(event.data);
 			if(event.type == dragonBones.EventObject.COMPLETE)
			{
				if (this.playTimes == 1) {
					if (this.getAnimation() && this.inPlay) {
						if (eventObject.animationState == this.getAnimation().lastAnimationState)
							this.inPlay = false;
					}
					else {
						this.inPlay = false;
					}
				}
			}
		}
		bindMovieListen(type:number):void 
		{
			if(type == 1)
			{
			    if((this instanceof MovieClip))
			    {
			        var mc:MovieClip = <MovieClip>(this);
			        if(mc.container)
			        {
			            if((this.bindListenType & type)!=type)
			            {
							if (!mc.isOnce) {
								// mc.container.$EventDispatcher.getEventDispatcher().setEnabled(true);
								//addDBEventListener(type: EventStringType, listener: (event: EgretEvent) => void, target: any)
								//addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): any;
								//mc.container.addEventListener(dragonBones.EventObject.COMPLETE, std.bind(&MC.completeHandler, this, std::placeholders::_1));
								mc.container.addDBEventListener(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
							}
			                this.bindListenType = this.bindListenType | type;
			            }
			        }
			    }
			    else if(this instanceof MovieClipSub)
			    {
			        var mcc:MovieClipSub = <MovieClipSub> this;
			        if(mcc.container)
			        {
			            if((this.bindListenType & type) != type)
			            {
			                //mcc.container.getEventDispatcher().setEnabled(true);
							mcc.container.addDBEventListener(dragonBones.EventObject.COMPLETE,this.completeHandler, this);
			                this.bindListenType = this.bindListenType | type;
			            }
			        }
			    }
			}
    	}
		getSprite(slotName:string):egret.Sprite{
			return <egret.Sprite>(this.getArmature().getSlot(slotName).getDisplay());
		}
/*
		virtual void addMcs(MovieClipSub * mcs, bool reinit = false);
		virtual bool remove(MovieClipSub * ms);
		static MovieClip * getRootMc(MC * mc);
        virtual void addMCbs(MovieClipSubBase * mcs, bool reinit=false);
		virtual bool remove(MovieClipSubBase * ms);
        virtual Node * getMemNode(const string &  slotName);
        MovieClipSub*  getMemSubMC(const string &  slotName);
        template<typename T = Node> T * getMem(const string &  slotName) { return ISTYPE(T, getMemNode(slotName)); };
*/
 

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

		 
 
/////////////////////////////
		 createText(slot:string, reinit:boolean = false):MCText{
			return null;
		 }
        // MovieClipSub * createMovieClipSub(const string &  slot,bool reinit=false);
        // MovieClip * createMovieClip(const string &  slot, const string &  rootPath, const string &  armName, const string &  dbName, bool reinit = false,bool delay=false);
        // MovieClip * createMovieClip(const string &  slot, const string &  rootPath, const string &  dbName);
        // MovieClip * createMovieClip(const string &  slot, MovieClip * mc, bool reinit = false);
        // MCCase * createCase(const string &  slot, bool reinit = false, bool draw = false);
        // MCSprite * createSprite(const string &  slot, const string &  file, bool reinit = false);
        // MCSprite * createSprite(const string &  slot, Sprite* file, bool reinit = false);
        // MCMask * createMask(const string &  slot, bool reinit = false);

////////MovieClipSubBase////////////////////////////////////////////
		isReady:boolean=false;
		reinitType:number=0;
        mc:MC=null;
        slot:dragonBones.Slot=null;
		bone:dragonBones.Bone=null;
		root:dragonBones.Bone=null;
        display:egret.DisplayObjectContainer=null;
		disPos:egret.Point;
        slotName:string ;
		visible:boolean=true;
		getParentMC():MC{
		  	return this.mc;
		}
		setVisible(v:boolean):void{
			this.visible = v;
		}
		getDisPosition():egret.Point{
			var x:number = this.bone.origin.x;
			var y:number = this.bone.origin.y;
			var x1:number = this.slot.origin.x;
			var y1:number = this.slot.origin.y;
			x += x1;
			y += y1;
			var dis:egret.DisplayObjectContainer = <egret.DisplayObjectContainer>this.slot.display;
			if (this.root){
				var orgin:dragonBones.Transform = this.root.origin;
				y = -(orgin.y + y);
			}
			else{
				y = -(y);
			}
			//Size mcSize = dis->getContentSize();
			//dragonBones::Transform*  global = root->getGlobal();
			//Node * disPar = dis->getParent();
			//dragonBones::Transform*  offset = root->getOffset();
			//const dragonBones::Rectangle & aabb = mc->getArmature()->getArmatureData()->aabb;
			//if (ISTYPE(dragonBones::CCArmatureDisplay, disPar)){
			//	dragonBones::CCArmatureDisplay * aniDis = ISTYPE(dragonBones::CCArmatureDisplay, disPar);
			//	const dragonBones::Rectangle & aabb = aniDis->getArmature()->getArmatureData()->aabb;
			//	y = y;
			//}
			this.disPos.x = x;
			this.disPos.y = y;// = disPar->convertToNodeSpaceAR(Vec2(x, y));
			return this.disPos;
		}
		getDisArPos():egret.Point
		{
			var thisPos:egret.Point=new egret.Point(0,0);
			//return  thisPos;
			var dis:egret.DisplayObjectContainer = <egret.DisplayObjectContainer>(this.slot.display);
			if (!(this instanceof MCCase) && !(this instanceof MCText))
			{//&& !ISTYPE(MovieClip, this)
				std.setAnchorPoint(dis, 0.5, 0.5);
				//thisPos = dis->convertToNodeSpace(dis->getPosition());
				thisPos.x=dis.$anchorOffsetX;
				thisPos.y=dis.$anchorOffsetY;
				//dis.globalToLocal(dis.x,dis.y,thisPos);
			}
			//if (ISTYPE(MovieClipSub, this->mc) && ISTYPE(MCCase, this)){
			//	MovieClipSub * mcs = ISTYPE(MovieClipSub, this->mc);
			//	Size mcSize = mcs->container->getContentSize();
			//	const dragonBones::Rectangle & aabb = mcs->container->getArmature()->getArmatureData()->aabb;
			//	thisPos.x = -aabb.width / 2;
			//	thisPos.y = -aabb.height / 2;
			// }  
			return  thisPos; 
		}
		setDisScale():void{
			var scx:number = this.slot.origin.scaleX * this.bone.origin.scaleX;
			if (this.root) 
				scx *= this.root.origin.scaleX;
			this.display.$setScaleX(scx);
			var scy:number =this. slot.origin.scaleY * this.bone.origin.scaleY;
			if (this.root) 
				scy *= this.root.origin.scaleY;
			this.display.$setScaleY(scy);
			var r:number = this.slot.origin.rotation * this.bone.origin.rotation;
			if (this.root) r *= this.root.origin.rotation;
			this.display.$setRotation(r);
		}
		initPos():void{}
		reinit():boolean{
			if (!this.slot)
			{
				if (this.mc.getArmature())
				{
					this.slot = this.mc.getArmature().getSlot(this.slotName);
					this.bone = this.mc.getArmature().getBone(this.slotName);
					this.root = this.mc.getArmature().getBone("root");
				}
				else
					return false;
			}
			if (!this.slot) return false;
			if (this.display == this.slot.getDisplay())
				return false;
 

			var thsi:egret.DisplayObjectContainer =null;
			if( this instanceof egret.DisplayObjectContainer)
				thsi=<egret.DisplayObjectContainer>this;
			var dis:egret.DisplayObject = <egret.DisplayObject> this.slot.getDisplay();
			if (dis && dis instanceof egret.Sprite)
			{
				this.isReady = true;
				var disPos = this.getDisPosition();
				if (!this.display)
				{
					this.display = dis;
					std.setPosition(this.display,disPos);
					//this.display.setPosition(disPos  );
					this.setDisScale();
					std.setAnchorPoint(this.display, 0.5, 0.5);
					//std::setAnchorPoint(display, Vec2(0, 0));
					//std::changeAnchorPoint(display, 0.5);
					this.disPos = getAnchorPointInPoints(this.display);
					//display.setPosition(disPos - display.getAnchorPointInPoints());
					std.changeAnchorPoint(this.display, 0,0);
					if (!(this instanceof MovieClip))
					{
						//std.setAnchorPoint(display, 0, 0);
						//std.setAnchorPoint(ISTYPE(Node, this), Vec2(0.5, 0.5));
					}
					if (!(this instanceof MovieClip))
						this.display.name=(this.slotName);
					else if (this.slot._displayData)
						this.display.name=(this.slot._displayData.name);
					if((this instanceof MovieClip) ||  (this instanceof MCMask))
						this.display.$setVisible(this.visible);
					if (!(this instanceof MovieClip)){
						this.display.addChildAt(thsi,9999);
					}
					return true;
				}
				else
				{
					// if (!(this instanceof MovieClip))
					// 	thsi.retain();
					this.display.removeChild(thsi);
					this.display = dis;
					std.setPosition(this.display,disPos);
					this.setDisScale();
					std.setAnchorPoint(this.display, 0.5, 0.5);
					this.disPos = std.getAnchorPointInPoints(this.display);
					//display.setPosition(disPos - display.getAnchorPointInPoints());
					if (!(this instanceof MCCase) && !(this instanceof MCText))
						std.changeAnchorPoint(dis, 0,0);
					if (!(this instanceof MovieClip))
						this.display.name=this.slotName;
					else if (this.slot._displayData)
						this.display.name=(this.slot._displayData.name);
					// if (!(this instanceof MovieClip))
					// 	thsi.release();
					if ((this instanceof MovieClipSub) || (this instanceof MCMask))
						this.display.$setVisible(this.visible);
					if ((this instanceof MovieClip))
						thsi.removeChildren();//.removeAllChildren();
					else
						this.display.addChildAt(thsi, 9999);
					return true;
				}
			}
			this.isReady = false; 
			return false;
		}
	}

	export class MovieClip extends MC
	{
		submc:Array<MC>; 
		submcbs:Array<MC>;
		allSubMcbs:Array<MC>;
        updateMcbs:Array<MC>;

		rootPath:string ;
		armName:string;
		dbName:string;
        world:BaseNode;
		myPoint:egret.Point;
		myFrame:number;
		speedX:number;
		speedY:number;
        isOnce:boolean; 
		
		arPoint:egret.Point;
		setAr:boolean;
		_autoRemoveData:boolean;

		container:dragonBones.EgretArmatureDisplay;

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
		submc:Array<MC>; 
		submcbs:Array<MC>;
		allSubMcbs:Array<MC>;
        updateMcbs:Array<MC>;

		transform:egret.Matrix;//	cocos2d::Mat4 ;
		setTrans:boolean;

		name:string;
		//void * userData;
        arm:dragonBones.Armature;
 		container:dragonBones.EgretArmatureDisplay;

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
	export class MCCase extends egret.DisplayObjectContainer{

	}
	export class MCMask extends egret.DisplayObjectContainer{
	}
	export class MCText extends eui.TextInput{
	}
	
 
}
