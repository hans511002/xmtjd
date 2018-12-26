
module std {
	export var urlMap = {};
	export var urlLen = 0;
	export var useNodeEvent: boolean = true;// false;
	export var globalEventNodes = [];
	export var sortGlobalNode: boolean = false;
}

module std {

	export var urlMap = {};
	export var urlLen = 0;
	export var useNodeEvent: boolean = true;// false;
	export var globalEventNodes = [];
	export var sortGlobalNode: boolean = false;
	export var nodes = {};

	export function _rnd(r:number){
		return Math.random()*r;	
	}
	export function getNodePath(node: egret.DisplayObject): string {
		var par: egret.DisplayObject = node.parent;
		var path: string = node.name;
		while (par) {
			path = par.name + "." + path;
			par = par.parent;
		}
		return path;
	}
	export function printNode(node: egret.DisplayObject, parent: boolean = true): void {
		var path: string = getNodePath(node);
		egret.log(path + ".anchorOffset=" + node.anchorOffsetX + "," + node.anchorOffsetY);
		egret.log(path + ".xy=" + node.x + "," + node.y);
		egret.log(path + ".scale=" + node.scaleX + "," + node.scaleY);
		egret.log(path + ".size=" + node.width + "," + node.height);
		var pos: egret.Point = new egret.Point();
		var pos2: egret.Point = new egret.Point();
		node.localToGlobal(0, 0, pos);
		node.localToGlobal(node.width, node.height, pos2);
		egret.log(path + ".localToGlobal=" + pos.x + "," + pos.y + "   " + pos2.x + "," + pos2.y);
		// var par:egret.DisplayObject=node.parent;
		// while(par){
		// 	printNode(par,false);
		// 	par=par.parent;
		// }
	}
	export function setPosition(node: egret.DisplayObject, pos: egret.Point): void {
		node.$setX(pos.x);
		node.$setY(pos.y);
	}
	export function getPosition(node: egret.DisplayObject): egret.Point {
		return new egret.Point(node.x, node.y);
	}
	export function getAnchorPointInPoints(node: egret.DisplayObject): egret.Point {
		return new egret.Point(node.anchorOffsetX, node.anchorOffsetY);
	}
	export function createLabel(str: string): eui.Label {
		return new eui.Label(str);
	}
	export function setText(tui: egret.TextField, val: string): string {
		var old: string = tui.$getText();
		tui.$setText(val);
		return old;
	}
	export function setNum(tui: egret.TextField, val: number): number {
		var old: string = tui.$getText();
		tui.$setText("" + val);
		return Number(old);
	}
	export function getNum(tui: egret.TextField): number {
		return Number(tui.$getText());
	}
	export function getText(tui: egret.TextField) {
		return tui.$getText();
	}
	export function setAnchorPoint(node: egret.DisplayObject, x?: number, y?: number, subset?: boolean): void {
		x = x ? x : 0;
		y = y ? y : 0;
		node.$setAnchorOffsetX(node.width * x);
		node.$setAnchorOffsetY(node.height * y);
		if (subset) {
			var chlds = node.$children;
			for (var i = 0; i < chlds.length; i++) {
				setAnchorPoint(chlds[i], x, y, subset);
			}
		}
	}
	export async function initResMap() {
		if (!urlLen) {
			var resJson = RES.getRes("default.res.json");
			if (resJson) {
				var resList = resJson["resources"];
				for (var i = 0; i < resList.length; i++) {
					var item = resList[i];
					var url = item["url"];
					var name = item["name"];
					urlMap[url] = name;
				}
			} else {
				await RES.getResByUrl("resource/default.res.json", function (data) {
					var resList = data["resources"];
					for (var i = 0; i < resList.length; i++) {
						var item = resList[i];
						var url = item["url"];
						var name = item["name"];
						urlMap[url] = name;
					}
				}, this, RES.ResourceItem.TYPE_JSON);
			}
		}
	}
	export function loadArmature(_rootPath: string, armatureName: string, dragonBonesName?: string): dragonBones.EgretArmatureDisplay {
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
		return loadDB(urlMap[fileSke], urlMap[fileTex], urlMap[filePng], armatureName, dragonBonesName);
	}
	export function loadDB(fileSke: string, fileTex: string, filePng: string, armatureName: string, dragonBonesName?: string): dragonBones.EgretArmatureDisplay {
		var dbName = dragonBonesName == "" ? armatureName : dragonBonesName;
		const factory = dragonBones.EgretFactory.factory;
		if (!factory.getDragonBonesData(dbName)) {
			var skeletonData = RES.getRes(fileSke);
			var textureData = RES.getRes(fileTex);
			var texture = RES.getRes(filePng);
			factory.addDragonBonesData(factory.parseDragonBonesData(skeletonData, dbName), dbName);
			factory.addTextureAtlasData(factory.parseTextureAtlasData(textureData, texture), dbName);
		}
		var armatureDisplay = factory.buildArmatureDisplay(armatureName, dragonBonesName, "", dragonBonesName);
		return armatureDisplay;
	}
	export function buildArmature(armatureName: string, dragonBonesName: string, textureAtlasName?: string): dragonBones.EgretArmatureDisplay {
		const factory = dragonBones.EgretFactory.factory;
		return factory.buildArmatureDisplay(armatureName, dragonBonesName, "", textureAtlasName || dragonBonesName);
	}
	export function removeArmature(name: string, disposeData?: boolean) {
		const factory = dragonBones.EgretFactory.factory;
		factory.removeDragonBonesData(name, disposeData);
		factory.removeTextureAtlasData(name, disposeData);
	}
	export function drawRange(node: egret.DisplayObject, color: number): void {
		var w: number = node.width > 0 ? node.width : 30;
		var h: number = node.height > 0 ? node.height : 30;
		var x: number = node.x; egret.Sprite
		var y: number = node.y;
		if (node instanceof egret.Sprite) {
			drawRect(<egret.Sprite>node, x - node.anchorOffsetX, y - node.anchorOffsetY, w, h, color);
		} else {
			var shape: egret.Shape = new egret.Shape();
			if (node instanceof egret.DisplayObjectContainer) {
				(<egret.DisplayObjectContainer>node).addChild(shape);
			} else {
				node.parent.addChild(shape);
			}
			if (node instanceof egret.Mesh) {
				drawRect(shape, x - node.width / 2, y - node.height / 2, w, h, color);
			} else {
				drawRect(shape, x - node.anchorOffsetX, y - node.anchorOffsetY, w, h, color);
			}
		}
	}
	export function drawRect(shape: egret.Shape | egret.Sprite, x: number, y: number, w: number, h: number, color?: number): void {
		shape.graphics.lineStyle(2, color ? color : 0);
		// shape.graphics.beginFill(0xff0000, 1);
		// shape.graphics.drawRect(x,y,w,h);
		// shape.graphics.endFill();
		shape.graphics.moveTo(x, y);
		shape.graphics.lineTo(x, y + h);
		shape.graphics.lineTo(x + w, y + h);
		shape.graphics.lineTo(x + w, y);
		shape.graphics.lineTo(x, y);
	}
	export function changeAnchorPoint(node: egret.DisplayObject, x: number, y: number): void {
		var ax: number = node.anchorOffsetX;
		var ay: number = node.anchorOffsetY;
		node.$setAnchorOffsetX(x);
		node.$setAnchorOffsetY(y);
		node.$setX(node.x + ax - x);
		node.$setY(node.y + ay - y);
	}
	export function getNodeVisible(node: egret.DisplayObjectContainer): boolean {
		if (!node) return false;
		if (!node.visible) return false;
		var par: egret.DisplayObjectContainer = node.parent;
		while (par) {
			if (!par.visible) return false;
			par = par.parent;
		}
		return true;
	}

	export function addEventNode(node: egret.DisplayObjectContainer): void {
		if (useNodeEvent) return;
		if (!node) return;
		var len = globalEventNodes.length;
		for (var i = 0; i < len; i++) {
			if (globalEventNodes[i] == node)
				return;
		}
		globalEventNodes.push(node);
		sortGlobalNode = false;
	};
	export function removeEventNode(node: egret.DisplayObjectContainer): void {
		var l = globalEventNodes.length;
		for (var i = 0; i < l; i++) {
			if (globalEventNodes[i] == node) {
				globalEventNodes.splice(i, 1);
				i--; l--;
				//return;
			}
		}
	};
	export function createBitmapByName(name: string): egret.Bitmap {
		let result = new egret.Bitmap();
		let texture: egret.Texture = RES.getRes(name);
		result.texture = texture;
		return result;
	}
	export function createBitmap(file: string): egret.Bitmap {
		if (!urlMap[file])
			initResMap();
		if (!urlMap[file]) return null;
		let result = new egret.Bitmap();
		let texture: egret.Texture = RES.getRes(urlMap[file]);
		result.texture = texture;
		return result;
	}
	export function replaceSlotToSprite(mcsb: MovieClipSubBase, dis: egret.Bitmap): egret.Sprite | MovieClipSubBase {
		if (mcsb instanceof MovieClipSub) {
			var sprite = new egret.Sprite();
			mcsb.slot.display = sprite;
			sprite.addChild(dis);
			if (dis instanceof egret.Mesh) {
				mcsb.$setX(mcsb.x - dis.width / 2);
				mcsb.$setY(mcsb.y - dis.height / 2);
			} else {
				mcsb.$setX(mcsb.x - dis.anchorOffsetX);
				mcsb.$setY(mcsb.y - dis.anchorOffsetY);
			}
			sprite.$setWidth(dis.width);
			sprite.$setHeight(dis.height);
			sprite.$setScaleX(dis.scaleX);
			sprite.$setScaleY(dis.scaleY);
			sprite.$setSkewX(dis.skewX);
			sprite.$setSkewY(dis.skewY);
			sprite.$setAlpha(dis.alpha);
			sprite.$setRotation(dis.rotation);
			dis.$setScaleX(1);
			dis.$setScaleY(1);
			dis.$setAlpha(1);
			dis.$setRotation(0);
			dis.$setSkewX(0);
			dis.$setSkewY(0);
			dis = mcsb.slot.display;
			return sprite;
		} else {
			mcsb.slot.display = mcsb;
			mcsb.addChild(dis);
			if (dis instanceof egret.Mesh) {
				mcsb.$setX(mcsb.x - dis.width / 2);
				mcsb.$setY(mcsb.y - dis.height / 2);
			} else {
				mcsb.$setX(mcsb.x - dis.anchorOffsetX);
				mcsb.$setY(mcsb.y - dis.anchorOffsetY);
			}
			mcsb.$setWidth(dis.width);
			mcsb.$setHeight(dis.height);
			mcsb.$setScaleX(dis.scaleX);
			mcsb.$setScaleY(dis.scaleY);
			mcsb.$setSkewX(dis.skewX);
			mcsb.$setSkewY(dis.skewY);
			mcsb.$setAlpha(dis.alpha);
			mcsb.$setRotation(dis.rotation);
			dis.$setScaleX(1);
			dis.$setScaleY(1);
			dis.$setAlpha(1);
			dis.$setRotation(0);
			dis.$setSkewX(0);
			dis.$setSkewY(0);
			dis = mcsb.slot.display;
			return mcsb;
		}
	}
}

module std {
	export class BaseNode extends egret.DisplayObjectContainer {
		mouseEnabled: boolean = false;
		touchMoved: (node: BaseNode, e: egret.TouchEvent) => void = null;
		touchBegan: Function = null;
		touchEnded: Function = null;
		touchCancelled: Function = null;

		public constructor() {
			super();
		}
		setPosition(x: number, y: number): void {
			this.$setX(x);
			this.$setY(y);
		}
		setMouseEnabled(mouseEnabled: boolean) {
			this.$setTouchEnabled(mouseEnabled);
			this.mouseEnabled = mouseEnabled;
		}
		////////////////////////
		$onAddToStage(stage: egret.Stage, nestLevel: number): void {
			this.beforeOnEnter();
			super.$onAddToStage(stage, nestLevel);
			this.afterOnEnter();
		};
		beforeOnEnter(): void { };
		afterOnEnter(): void { this.onEnter(); };
		$onRemoveFromStage(): void {
			this.onExit();
			super.$onRemoveFromStage();
		};
		onEnter(): void {
			if (this.mouseEnabled && !(this instanceof MCCase)) {
				std.addEventNode(this);
				this.enableMouseHandler(std.useNodeEvent ? 1 : 0);
			}
		};
		onExit(): void { };

		getPosition(): egret.Point {
			return new egret.Point(this.x, this.y);
		}
		drawRange(): void {
			std.drawRange(this, 0xFFF00);
		}
		listened: boolean = false;
		enableMouseHandler(listen: number): void {
			if (!this.mouseEnabled)
				this.mouseEnabled = (true);
			this.$setTouchChildren(this.mouseEnabled);
			this.$setTouchEnabled(true);
			//addEventNode(this);
			if (listen && !this.listened) {
				this.listened = true;
				//        addEventListener<Z>(type: "touchMove" | "touchBegin" | "touchEnd" | "touchCancel" | "touchTap" | "touchReleaseOutside" | "touchRollOut" | "touchRollOver", 
				//listener: (this: Z, e: TouchEvent) => void, thisObject: Z, useCapture?: boolean, priority?: number): any;
				if ((listen & 1) == 1) {
					this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegan, this, false);
					this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnded, this, false);
				}
				if ((listen & 2) == 2) {
					this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoved, this, false);
				}
				if (listen)
					this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTouchCancelled, this, false);
			}
		};
		onTouchMoved(e: egret.TouchEvent) {
			if (this.touchMoved) {
				this.touchMoved(this, e);
			}
		}
		onTouchBegan(e: egret.TouchEvent) {
			if (this.touchBegan) {
				this.touchBegan(this, e);
			}
		}
		onTouchEnded(e: egret.TouchEvent) {
			if (this.touchEnded) {
				this.touchEnded(this, e);
			}
		}
		onTouchCancelled(e: egret.TouchEvent) {
			if (this.touchCancelled) {
				this.touchCancelled(this, e);
			}
		}
	}
	export class MovieClipSubBase extends BaseNode {
		isReady: boolean = false;
		reinitType: number = 0;
		mc: MC = null;
		slot: dragonBones.Slot = null;
		bone: dragonBones.Bone = null;
		root: dragonBones.Bone = null;
		display: egret.DisplayObjectContainer = null;
		disPos: egret.Point;
		slotName: string;
		_visible: boolean = true;

		public constructor() {
			super();
			this.isReady = false;
			this.reinitType = 0;
			this.mc = null;
			this.slot = null;
			this.bone = null;
			this.root = null;
			this.display = null;
			this.disPos = new egret.Point(0, 0);
			this.slotName = "";
			this._visible = true;
		}
		setVisible(v: boolean): void {
			this._visible = v;
		}
		getParentMC(): MC {
			return this.mc;
		}
		// getDisPosition():egret.Point{
		// 	var x:number = this.bone.origin.x;
		// 	var y:number = this.bone.origin.y;
		// 	var x1:number = this.slot.origin.x;
		// 	var y1:number = this.slot.origin.y;
		// 	x += x1;
		// 	y += y1;
		// 	var dis:egret.DisplayObjectContainer = <egret.DisplayObjectContainer>this.slot.display;
		// 	if (this.root){
		// 		var orgin:dragonBones.Transform = this.root.origin;
		// 		y = -(orgin.y + y);
		// 	}
		// 	else{
		// 		y = -(y);
		// 	}
		// 	this.disPos.x = x;
		// 	this.disPos.y = y;// = disPar.convertToNodeSpaceAR(Vec2(x, y));
		// 	return this.disPos;
		// }
		// getDisArPos():egret.Point{
		// 	var thisPos:egret.Point=new egret.Point(0,0);
		// 	//return  thisPos;
		// 	if (!(this instanceof MCCase) && !(this instanceof MCUI))//&& !ISTYPE(MovieClip, this)
		// 	{
		// 		var dis:egret.DisplayObjectContainer = <egret.DisplayObjectContainer>this.slot.display;
		// 		std.setAnchorPoint(dis, 0.5, 0.5);
		// 		thisPos.x=dis.$anchorOffsetX;
		// 		thisPos.y=dis.$anchorOffsetY;
		// 	}
		// 	return  thisPos; 
		// }
		// setDisScale():void{
		// 	var scx:number = this.slot.origin.scaleX * this.bone.origin.scaleX;
		// 	if (this.root) 
		// 		scx *= this.root.origin.scaleX;
		// 	this.display.$setScaleX(scx);
		// 	var scy:number =this. slot.origin.scaleY * this.bone.origin.scaleY;
		// 	if (this.root) 
		// 		scy *= this.root.origin.scaleY;
		// 	this.display.$setScaleY(scy);
		// 	var r:number = this.slot.origin.rotation * this.bone.origin.rotation;
		// 	if (this.root) r *= this.root.origin.rotation;
		// 	this.display.$setRotation(r);
		// }
		// initPos():void{};
		reinit(): boolean {
			if (!this.slot) {
				if (this.mc.getArmature()) {
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
			var thsi: egret.DisplayObjectContainer = null;
			if (this instanceof egret.DisplayObjectContainer)
				thsi = <egret.DisplayObjectContainer>this;
			var dis: egret.DisplayObject = <egret.DisplayObject>this.slot.display;
			if (dis && dis instanceof egret.DisplayObject) {
				this.isReady = true;
				if (dis instanceof egret.Bitmap) {
					if (!this.display) {
						dis = std.replaceSlotToSprite(this, dis);
						this.display = <egret.DisplayObjectContainer>dis;
						if (!(this instanceof MovieClip))
							this.display.name = (this.slotName);
						else if (this.slot._displayData)
							this.display.name = (this.slot._displayData.name);
						if ((this instanceof MovieClip) || (this instanceof MCMask))
							this.display.$setVisible(this._visible);
						if (!(this instanceof MovieClipSub) && this.display != this) {
							this.display.addChildAt(thsi, 9999);
						}
						return true;
					}
					else {
						if (this.display != this && !(this instanceof MovieClipSub))
							this.display.removeChild(thsi);
						dis = std.replaceSlotToSprite(this, dis);
						this.display = <egret.DisplayObjectContainer>dis;
						if (!(this instanceof MCCase) && !(this instanceof MCUI))
							std.changeAnchorPoint(dis, 0, 0);
						if (!(this instanceof MovieClip))
							this.display.name = this.slotName;
						else if (this.slot._displayData)
							this.display.name = (this.slot._displayData.name);
						if ((this instanceof MovieClipSub) || (this instanceof MCMask))
							this.display.$setVisible(this._visible);
						if ((this instanceof MovieClip))
							thsi.removeChildren();
						else if (!(this instanceof MovieClipSub) && this.display != this)
							this.display.addChildAt(thsi, 9999);
						return true;
					}
				} else {
					if (!this.display) {
						this.display = <egret.DisplayObjectContainer>dis;
						if (!(this instanceof MovieClip))
							this.display.name = (this.slotName);
						else if (this.slot._displayData)
							this.display.name = (this.slot._displayData.name);
						if ((this instanceof MovieClip) || (this instanceof MCMask))
							this.display.$setVisible(this._visible);
						if (!(this instanceof MovieClipSub) && this.display != this) {
							this.display.addChildAt(thsi, 9999);
						}
						return true;
					}
					else {
						if (this.display != this && !(this instanceof MovieClipSub))
							this.display.removeChild(thsi);
						this.display = <egret.DisplayObjectContainer>dis;
						if (!(this instanceof MCCase) && !(this instanceof MCUI))
							std.changeAnchorPoint(dis, 0, 0);
						if (!(this instanceof MovieClip))
							this.display.name = this.slotName;
						else if (this.slot._displayData)
							this.display.name = (this.slot._displayData.name);
						if ((this instanceof MovieClipSub) || (this instanceof MCMask))
							this.display.$setVisible(this._visible);
						if ((this instanceof MovieClip))
							thsi.removeChildren();
						else if (!(this instanceof MovieClipSub) && this.display != this)
							this.display.addChildAt(thsi, 9999);
						return true;
					}
				}
			}
			this.isReady = false;
			return false;
		}

	}
	function convertToNode(mcbs: MovieClipSubBase): MCUI | MCCase | MovieClip | MovieClipSub | MovieClipSubBase {
		if (!mcbs) return mcbs;
		if (<MovieClipSub>mcbs) {
			return <MovieClipSub>mcbs;
		}
		if (<MovieClip>mcbs) {
			return <MovieClip>mcbs;
		} if (<MCUI>mcbs) {
			return <MCUI>mcbs;
		} if (<MCCase>mcbs) {
			return <MCCase>mcbs;
		}
		return mcbs;
	};
	export class MC extends MovieClipSubBase {
		//直接子mcbs 
		submcbs: Array<MovieClipSubBase> = [];
		//所有全部子集群,用于自动删除,包括孙子后的
		allSubMcbs: Array<MovieClipSubBase> = [];
		// allSubMcs:Array<MovieClipSub>;

		currentFrame: number = 0;
		defAniName: string;
		totalFrames: number = 0;
		inPlay: boolean = false;
		playTimes: number = 0;
		bindListenType: number = 0;
		container: dragonBones.EgretArmatureDisplay = null;


		getArmature(): dragonBones.Armature {
			return null;
		}
		getAnimation(): dragonBones.Animation {
			return null;
		}
		getTotalFrames(_aniName?: string): number {
			var aniName: string = _aniName ? _aniName : "";
			if (aniName == "") aniName = this.defAniName;
			var aniData: dragonBones.AnimationData = this.getArmature().armatureData.animations[aniName];
			if (aniData)
				return aniData.frameCount + 1;
			return 0;
		}
		gotoAndStop(cf: number, _aniName: string = ""): void {
			if (!this.getArmature() || !this.getAnimation()) return;
			if (cf == 0) cf = 1;
			var aniName: string = _aniName ? _aniName : "";
			if (aniName == "") aniName = this.defAniName;
			this.currentFrame = (cf - 1) % this.totalFrames + 1;
			this.inPlay = false;
			this.getAnimation().gotoAndStopByFrame(aniName, this.currentFrame - 1);
		}
		nextFram(): void {
			if (this.getArmature() == null || this.getAnimation() == null) return;
			this.currentFrame++;
			this.gotoAndStop(this.currentFrame);
		}
		stop(_aniName: string = ""): void {
			if (!this.getArmature() || !this.getAnimation()) return;
			var aniName: string = _aniName ? _aniName : "";
			if (aniName == "") aniName = this.defAniName;
			this.getAnimation().stop(aniName);
			this.inPlay = false;
		}
		play(_aniName?: number | string, times: number = 1): void {
			if (typeof _aniName == "string") {
				if (!this.getArmature() || !this.getAnimation()) return;
				var aniName: string = _aniName ? _aniName : "";
				if (aniName == "") aniName = this.defAniName;
				this.getAnimation().play(aniName, times);
				this.playTimes = times;
				this.inPlay = true;
				if (times == 1)
					this.bindMovieListen(1);
			} else {
				if (!this.getArmature() || !this.getAnimation()) return;
				this.getAnimation().play(this.defAniName, _aniName);
				this.inPlay = true;
				this.playTimes = _aniName;
				if (_aniName == 1)
					this.bindMovieListen(1);
			}
		}
		isPlay(): boolean {
			return this.inPlay;
		}

		tryPlay(): boolean {
			var mcs: MovieClipSub = null;
			if (this instanceof MovieClipSub)
				mcs = <MovieClipSub>this;
			if (mcs) {
				if (!mcs.isReady) {
					if (!mcs.reinit())
						return false;
				}
			}
			if (!this.inPlay) {
				this.play(1);
				return this.inPlay;
			} else {
				this.currentFrame++;
				this.currentFrame = (this.currentFrame - 1) % this.totalFrames + 1;
			}
			return false;
		}
		isPlayEnd(): boolean {
			return this.currentFrame == this.totalFrames;
		}
		completeHandler(event: dragonBones.EgretEvent): void {//cocos2d::EventCustom * 
			var eventObject: dragonBones.EventObject = event.eventObject;
			if (eventObject.type == dragonBones.EventObject.COMPLETE) {
				if (this.playTimes == 1) {
					if (this.getAnimation() && this.inPlay) {
						if (eventObject.animationState == this.getAnimation().lastAnimationState) {
							this.inPlay = false;
						}
					}
					else {
						this.inPlay = false;
					}
					if (!this.inPlay && this.container && this.container.hasDBEventListener(dragonBones.EventObject.COMPLETE)) {
						this.bindListenType = this.bindListenType & 0xFFFFFFE; // del 1
						this.container.removeDBEventListener(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
					}
				}
			}
		}
		bindMovieListen(type: number): void {
			if (type == 1) {
				// if(this.container){
				// 	if((this.bindListenType & type) != type) {
				// 		//mcc.container.getEventDispatcher().setEnabled(true);
				// 		mcc.container.addDBEventListener(dragonBones.EventObject.COMPLETE,this.completeHandler, this);
				// 		this.bindListenType = this.bindListenType | type;
				// 	}
				// }
				if (this.container) {
					if ((this instanceof MovieClip)) {
						let mc: MovieClip = <MovieClip>(this);
						if ((this.bindListenType & type) != type) {
							if (!mc.isOnce) {
								mc.container.addDBEventListener(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
							} else {
								mc.container.addDBEventListener(dragonBones.EventObject.COMPLETE, this.onceMovieHandler, this);
							}
							this.bindListenType = this.bindListenType | type;
						}
					}
					else if (this instanceof MovieClipSub) {
						let mcc: MovieClipSub = <MovieClipSub>this;
						if ((this.bindListenType & type) != type) {
							// mcc.container.$setTouchEnabled(true);
							mcc.container.addDBEventListener(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
							this.bindListenType = this.bindListenType | type;
						}
					}
				}
			}
		}
		addMCbs(mcbs: MovieClipSubBase, reinit: number = 0): void {
			mcbs.reinitType |= reinit;
			if (reinit)
				this.submcbs.push(mcbs);
			var mcbs: MovieClipSubBase = null;
			if (this instanceof MovieClipSubBase)
				mcbs = <MovieClipSubBase>this;
			if (!reinit && (mcbs && mcbs.reinitType)) { //继承控制重新初始化链
				this.submcbs.push(mcbs);
				mcbs.reinitType |= 2;
			}

			this.allSubMcbs.push(mcbs);

			var mvc: MovieClip = this.getRootMc(this);
			if (mvc) {
				mvc.allSubMcbs.push(mcbs);
			}
		}
		getRootMc(mcc?: MC): MovieClip {
			mcc = mcc ? mcc : this;
			while (mcc != null) {
				if (mcc instanceof MovieClip)
					return <MovieClip>mcc;
				else if (mcc instanceof MovieClipSub) {
					var mcvs: MovieClipSub = <MovieClipSub>mcc;// dynamic_cast<MovieClipSub*>(mc);
					mcc = mcvs.mc;
					if (!mcc) return null;
				}
			}
			return null;
		}
		remove(ms: MovieClipSubBase): boolean {
			var del: boolean = false;
			for (var i = 0; i < this.submcbs.length; i++) {
				if (this.submcbs[i] == ms) {
					this.submcbs.splice(i, 1);
					del = true;
					break;
				}
			}
			var rootMc = this.getRootMc();
			if (rootMc) {
				for (var i = 0; i < rootMc.allSubMcbs.length; i++) {
					if (rootMc.allSubMcbs[i] == ms) {
						rootMc.allSubMcbs.splice(i, 1);
						del = true;
						break;
					}
				}
			}
			return del;
		};
		getSubNode(slotName: string): MCUI | MCCase | MovieClip | MovieClipSub | MovieClipSubBase {
			var mcbs: MovieClipSubBase = null;
			for (var i = 0; i < this.submcbs.length; i++) {
				var _node: MovieClipSubBase = <MovieClipSubBase>this.submcbs[i];
				if (_node && slotName == _node.slotName) {
					mcbs = this.submcbs[i];
					break;
				}
			}
			return convertToNode(mcbs);
		}
		getMemNode(slotName: string): MCUI | MCCase | MovieClip | MovieClipSub | MovieClipSubBase {
			var mcbs: MovieClipSubBase = null;
			for (var i = 0; i < this.allSubMcbs.length; i++) {
				var _node: MovieClipSubBase = <MovieClipSubBase>this.allSubMcbs[i];
				if (_node && slotName == _node.slotName) {
					mcbs = this.allSubMcbs[i];
					break;
				}
			}
			return convertToNode(mcbs);
		};
		setContentSize(node: egret.DisplayObjectContainer, width: number, hegith: number) {
			node.$setWidth(width);
			node.$setHeight(hegith);
		}
		reinitSubMcbs(inParInit?: boolean): void {
			var l = this.submcbs.length;
			for (var i = 0; i < l; i++) {
				var mcs: MovieClipSubBase = this.submcbs[i];
				if (inParInit) {
					if ((mcs.reinitType & 2) == 2)
						this.submcbs[i].reinit();
				} else {
					if ((mcs.reinitType & 1) == 1 || !mcs.isReady)
						this.submcbs[i].reinit();
				}
			}
		}
		// list:Array<number>;
		public constructor() {
			super();
			this.currentFrame = 0;
			this.totalFrames = 0;
			this.inPlay = false;
			this.playTimes = -1;
			this.bindListenType = 0;

			this.isReady = false;
			this.reinitType = 0;
			this.mc = null;
			this.slot = null;
			this.bone = null;
			this.root = null;
			this.display = null;
			this.disPos = new egret.Point(0, 0);
			this.slotName = "";
			this._visible = true;
		}

		//////////////create ///////////////
		createText(slot: string, reinit: number = 0): MCUI {
			var mt: MCUI = new MCUI(new eui.TextInput(), this, slot, reinit);
			// mt.reinitType = reinit;
			// this.addMCbs(mt, reinit);
			return mt;
		}
		createLabel(slot: string, reinit: number = 0): MCLabel {
			var mt: MCLabel = new MCLabel(this, slot, reinit);
			// mt.reinitType = reinit;
			// this.addMCbs(mt, reinit);
			return mt;
		}
		// MovieClipSub * createMovieClipSub(const string &  slot,bool reinit=false);
		createMovieClipSub(slotName: string, reinitType: number = 0): MovieClipSub {
			var mcs: MovieClipSub = new MovieClipSub(this, slotName, "", reinitType);
			// mcs.reinitType = reinitType;
			// this.addMCbs(mcs, reinitType);
			return mcs;
		};
		// MovieClip * createMovieClip(const string &  slot, const string &  rootPath, const string &  armName, const string &  dbName, bool reinit = false,bool delay=false);
		// MovieClip * createMovieClip(const string &  slot, const string &  rootPath, const string &  dbName);
		// MovieClip * createMovieClip(const string &  slot, MovieClip * mc, bool reinit = false);
		createMovieClip(slot: string, rootPath: string, armName: string, dbName: string, reinit: number, delay: boolean = false): MovieClip {
			// public constructor(rootPath?:string,armName?:string,dbName?:string,defAniName:string="" ) {
			//var mc:MovieClip = new MovieClip( rootPath, armName, dbName, "");
			var mc: MovieClip = new MovieClip();
			if (armName.length == 0) {
				reinit |= 1;
			}
			mc.setMcInit(this, slot, rootPath, dbName, armName, "", delay, reinit);
			return mc;
		}
		addMovieClip(slot: string, mc: MovieClip, reinit: number = 0): MovieClip {
			mc.reinitType = reinit;
			mc.mc = this;
			mc.display = null;
			mc.slotName = slot;
			mc.reinit();
			this.addMCbs(mc, reinit);
			return mc;
		}
		// MCCase * createCase(const string &  slot, bool reinit = false, bool draw = false);
		createCase(slotName: string, reinit: number = 0, draw: boolean = false): MCCase {
			// constructor(pmc?:MC, slotName?:string,mouseEnabled:boolean=true,draw:boolean=false){
			var mc: MCCase = new MCCase(this, slotName, true, draw, reinit);
			// mc.reinitType = reinit;
			// this.addMCbs(mc, reinit);
			return mc;
		}
		// MCSprite * createSprite(const string &  slot, const string &  file, bool reinit = false);
		// MCSprite * createSprite(const string &  slot, Sprite* file, bool reinit = false);
		createSprite(slotName: string, file: string, reinit: number = 0): MCSprite {
			var mc: MCSprite = new MCSprite(this, slotName, file, reinit);
			// mc.reinitType = reinit;
			// this.addMCbs(mc, reinit);
			return mc;
		};
		// MCMask * createMask(const string &  slot, bool reinit = false);
		createMask(slotName: string, reinit: number = 0): MCMask {
			var mc: MCMask = new MCMask(this, slotName, reinit);
			// mc.reinitType = reinit;
			// this.addMCbs(mc, reinit);
			return mc;
		};
		getSprite(slotName: string): egret.Bitmap {
			if (this.getArmature() == null || this.getArmature().getSlot(slotName) == null)
				return null;
			return <egret.Bitmap>(this.getArmature().getSlot(slotName).getDisplay());
		}
		////////MovieClipSubBase////////////////////////////////////////////
	}

	export class MovieClip extends MC {
		rootPath: string;
		armName: string;
		dbName: string;
		world: BaseNode = null;
		myPoint: egret.Point = new egret.Point(0, 0);
		myFrame: number = 0;
		speedX: number = 0;
		speedY: number = 0;
		isOnce: boolean = false;

		arPoint: egret.Point = new egret.Point(0, 0);
		setAr: boolean = false;
		_autoRemoveData: boolean = false;
		//         MovieClip(const string &  rootPath, const string &  armName, const string &  dbName, const string &  defAniName = "");
		public constructor(rootPath?: string, armName?: string, dbName?: string, defAniName: string = "") {
			super();
			this.rootPath = rootPath;
			this.armName = armName;
			this.dbName = dbName;
			this.defAniName = defAniName;
			if (this.armName && this.dbName)
				this.init(rootPath, armName, dbName, defAniName);
		}
		setMcInit(mc: MC, slotName: string, rootPath?: string, dbName?: string, armName: string = "", defAniName: string = "", delay: boolean = false, reinit: number = 0) {
			this.mc = mc;
			this.rootPath = rootPath;
			this.armName = armName;
			this.dbName = dbName;
			this.slotName = slotName;
			this.setName(slotName);
			if (mc)
				this.addMCbs(mc, reinit);
			if (!delay)
				this.reinit();
		}
		// 		virtual bool init(const string &  rootPath, const string &  armName, const string &  dbName, const string &  defAniName = "");
		init(rootPath: string, armName: string, dbName: string, _defAniName: string = ""): boolean {
			if (this.isReady && this.container && this.name == armName) {
				return true;
			}
			//Common::DateTime dt;
			if (this.mc)
				this.container = std.loadArmature(rootPath, armName, dbName);
			else
				this.display = this.container = std.loadArmature(rootPath, armName, dbName);
			//int time = (Common::DateTime().GetTicks() - dt.GetTicks());
			//CCLOG("MovieClip %s.%s 1 init time:%i", dbName.c_str(), armName.c_str(), time);
			//dt = Common::DateTime();

			var defAniName: string = _defAniName;
			this.defAniName = defAniName;
			if (defAniName == "")
				this.defAniName = defAniName = this.getArmature()._armatureData.defaultAnimation.name;
			this.totalFrames = this.getArmature()._armatureData.animations[defAniName].frameCount + 1;//;
			var duration: number = this.getArmature()._armatureData.animations[defAniName].duration;
			//CCLOG("load %s totalFrames=%i duration=%f", defAniName.c_str(), totalFrames, duration);
			//time = (Common::DateTime().GetTicks() - dt.GetTicks());
			//CCLOG("MovieClip %s.%s 2 init time:%i", dbName.c_str(), armName.c_str(), time);
			//dt = Common::DateTime();

			this.addChild(this.container);
			this.isReady = true;
			//time = (Common::DateTime().GetTicks() - dt.GetTicks());
			//CCLOG("MovieClip %s.%s 3 init time:%i", dbName.c_str(), armName.c_str(), time);
			//dt = Common::DateTime();
			this.gotoAndStop(1);

			//time = (Common::DateTime().GetTicks() - dt.GetTicks());
			//CCLOG("MovieClip %s.%s 4 init time:%i", dbName.c_str(), armName.c_str(), time);
			//dt = Common::DateTime();
			//std::setAnchorPoint(display, true);
			this.contentSizeInit();//this.init();
			//time = (Common::DateTime().GetTicks() - dt.GetTicks());
			//CCLOG("MovieClip %s.%s 5 init time:%i", dbName.c_str(), armName.c_str(), time);
			//dt = Common::DateTime();
			this.resetSize();
			this.setName(armName);
			//time = (Common::DateTime().GetTicks() - dt.GetTicks());
			//CCLOG("MovieClip %s.%s 6 init time:%i", dbName.c_str(), armName.c_str(), time);
			//this.autorelease(); in BaseNode::init();
			//this.isReady = true;
			return true;
		};
		contentSizeInit(): void {
			if (this.container.width == 0 || this.container.height == 0) {
				var aabb: dragonBones.Rectangle = this.getArmature().armatureData.aabb;
				this.container.$setWidth(aabb.width);
				this.container.$setHeight(aabb.height);
			}
		}
		//         virtual bool checkInit();
		checkInit(): boolean {
			if (this.mc && !this.isReady)
				this.reinit();
			return this.isReady;
		};
		//         virtual	dragonBones::Armature *getArmature();
		getAnimation(): dragonBones.Animation {
			this.checkInit();
			if (this.container)
				return this.container.animation;
			else
				return null;
		};
		// 		virtual dragonBones::Animation *getAnimation();
		getArmature(): dragonBones.Armature {
			this.checkInit();
			if (this.container)
				return this.container.armature;
			else
				return null;
		};
		//         virtual void setName(const string &  name);
		setName(name: string): void {
			this.name = name;
			if (this.mc && this.container)
				this.container.name = (name);
			else if (!this.mc && this.display)
				this.display.name = (name);
		};
		// 		virtual void setVisible(bool v);
		setVisible(v: boolean): void {
			super.$setVisible(v);
			super.setVisible(v);
		};
		// 		virtual bool reinit();
		reinit(): boolean {
			var isReinit: boolean = this.display != null;
			this.isReady = false;
			if (this.mc && super.reinit()) {
				var _armName: string = this.armName;
				if (_armName.length == 0)
					_armName = this.display.name;
				//必需先初始化db 再加入节点
				this.init(this.rootPath, _armName, this.dbName, this.defAniName);//display=_armName
				this.reinitSubMcbs(true);
				this.display.addChild(this);
				// std.changeAnchorPoint(this, 0.5,0.5);
				// this.setPosition(this.x+this.disPos.x,this.y+this.disPos.y);

				std.drawRange(this.display, 0xffff00);
				if (this.bindListenType) {
					var type: number = this.bindListenType;
					this.bindListenType = 0;
					this.bindMovieListen(type);
				}
			}
			return this.isReady;
		};
		// 		virtual bool isVisible();
		isVisible(): boolean {
			if (this.mc && !this.isReady)
				this.reinit();
			return std.getNodeVisible(this);
		};
		//         virtual void destroy(MovieClipSub * & mcs);
		destroy(ms: MovieClipSub): void {
			var par: MC = null;
			for (var i = 0; i < this.allSubMcbs.length; i++) {
				if (ms == this.allSubMcbs[i]) {
					this.allSubMcbs.splice(i, 1);
					par = ms.mc;
					par.remove(ms);
					// delete ms;
					ms = null;
					break;
				}
			}
		};
		// 		virtual bool remove(MovieClipSub * ms);
		remove(ms: MovieClipSub): boolean {
			var par: MC = null;
			for (var i = 0; i < this.allSubMcbs.length; i++) {
				if (ms == this.allSubMcbs[i]) {
					this.allSubMcbs.splice(i, 1);
					par = ms.mc;
					if (par)
						par.remove(ms);
					else
						super.remove(ms);
					return true;
				}
			}
			return false;
		};
		// 		virtual float getWidth();
		getWidth(): number {
			return this.container.$getWidth() * this.$getScaleX();
		}
		// 		virtual float getHeight();
		getHeight(): number {
			return this.container.height * this.$getScaleY();
		}
		// 		virtual   void setWidth(float w);
		setWidth(w: number): void {
			if (this.width > 0) {
				var r: number = w / (this.width * this.$getScaleX());
				this.$setScaleX(this.$getScaleX() * r);
			} else {
				if (this.$getScaleX())
					this.$setWidth(w / this.$getScaleX());
			}
		}
		// 		virtual   void setHeight(float h);
		setHeight(h: number): void {
			if (this.height > 0) {
				var r: number = h / (this.height * this.$getScaleY());
				this.$setScaleY(this.$getScaleY() * r);
			} else {
				if (this.$getScaleY())
					this.$setHeight(h / this.$getScaleY());
			}
		}
		// 		virtual   void resetSize();
		resetSize(): void {
			var aabb: dragonBones.Rectangle = this.getRectangle();
			this.setContentSize(this, aabb.width, aabb.height);
			this.setContentSize(this.container, aabb.width - 2, aabb.height - 2);
		};
		// 		virtual void setAutoRemoveData(bool remove);
		setAutoRemoveData(remove: boolean): void {
			this._autoRemoveData = remove;
		}
		// 		virtual void removeArmature();
		removeArmature(): void {
			if (this.dbName.length)
				std.removeArmature(this.dbName);
		};
		// 		//增加删除事件
		// 		virtual bool setOnceMove(World * world);
		setOnceMove(_world: BaseNode, idx?: number): boolean {
			this.world = _world;
			this.isOnce = true;
			if (this.world) {
				this.world.addChildAt(this, idx ? idx : 3);
			} else {
				this.isOnce = false;
			}
			return this.isOnce;
		}
		// 		virtual void onEnter();
		onEnter(): void {
			if (this.world && this.isOnce && this.container) {
				// this.container.getEventDispatcher().setEnabled(true);
				//container.getEventDispatcher().addCustomEventListener(EventObject::FRAME_EVENT, std::bind(&MovieClip::onceMovieHandler, this, std::placeholders::_1));
				// this.container.addDBEventListener(dragonBones.EventObject.COMPLETE, this.onceMovieHandler, this);
				this.play(1);
			}
			if (this.setAr) {
				std.changeAnchorPoint(this, this.arPoint.x, this.arPoint.y);
				std.changeAnchorPoint(this.container, this.arPoint.x, this.arPoint.y);
			}
			super.onEnter();
		};
		// 		virtual void onExit();
		onExit(): void {
			if (this.container) {
				this.container.dispose();
				if (this._autoRemoveData) {
					this.removeArmature();
				}
				//this.container.getEventDispatcher().removeAllEventListeners();
			}
			//this.container.getEventDispatcher().removeCustomEventListeners(dragonBones::EventObject::COMPLETE);
			var l: number = this.allSubMcbs.length;
			for (var i = l - 1; i >= 0; i--) {
				var mcbs: MovieClipSubBase = this.allSubMcbs[i];
				if (<MovieClipSub>mcbs) {
					var mcs: MovieClipSub = <MovieClipSub>mcbs;
					if (mcs.container && mcs.container.hasDBEventListener(dragonBones.EventObject.COMPLETE))
						mcs.container.removeDBEventListener(dragonBones.EventObject.COMPLETE, this.completeHandler, this);
					//delete this.allSubMcbs[i];
				} else {

				}
				this.allSubMcbs[i] = null;
			}
			this.allSubMcbs.length = 0;
		}
		// 		virtual void onceMovieHandler(cocos2d::EventCustom *event);
		onceMovieHandler(event: dragonBones.EgretEvent): void {
			this.completeHandler(event);
			var eventObject: dragonBones.EventObject = event.eventObject;
			if (eventObject.type == dragonBones.EventObject.COMPLETE) {
				if (this.isOnce)
					this.world.removeChild(this);
			}
		}
		//         virtual void gotoAndStop(int cf, const string &  aniName = "");
		gotoAndStop(cf: number, aniName: string = ""): void {
			if (this.mc && !this.isReady) {
				this.reinit();
			}
			if (this.mc && !this.isReady) return;
			super.gotoAndStop(cf, aniName);
			this.reinitSubMcbs();
		}

		//         virtual void update(float dt = 0);
		update(dt: number): void {
			this.nextFram();
		}
		// 		virtual const dragonBones::Rectangle & getRectangle();
		getRectangle(): dragonBones.Rectangle {
			return this.getArmature().armatureData.aabb;
		};
		// 		virtual void changeAnchorPoint(float xy);
		changeAnchorPoint(x: number, y: number): void {
			std.changeAnchorPoint(this, x, y);
		}
		// 		virtual  void drawRange();
		drawRange(): void {
			std.drawRange(this, 0x00FF00);
		}

	}
	export class MovieClipSub extends MC {
		transform: egret.Matrix;//	cocos2d::Mat4 ;
		setTrans: boolean = false;
		name: string = "";
		arm: dragonBones.Armature = null;
		userData = {};

		public constructor(mc?: MC, slotName?: string, defAniName?: string, reinitType: number = 0) {
			super();
			this.mc = mc;
			this.slotName = slotName;
			this.reinitType = reinitType;
			this.display = null;
			this.container = null;
			this.slot = null;
			this.bone = null;
			if (mc) {
				mc.addMCbs(this, this.reinitType);
			}
			if (mc && mc.isReady)
				this.reinit();
		};

		// virtual dragonBones::Armature *getArmature();
		getArmature(): dragonBones.Armature {
			return this.arm;
		};
		// virtual dragonBones::Animation *getAnimation();
		getAnimation(): dragonBones.Animation {
			if (!this.arm) return null;
			return this.arm.animation;
		};
		// virtual void setVisible(bool v);
		setVisible(v: boolean): void {
			if (this._visible != v)
				super.setVisible(v);
			super.$setVisible(v);
			if (this.container)
				this.container.$setVisible(v);
		}
		// virtual bool isVisible();
		isVisible(): boolean {
			return this.visible && std.getNodeVisible(this.display);
		}
		// virtual cocos2d::Point getPosition();
		getPosition(): egret.Point {
			if (!this.isReady)
				this.reinit();
			var sp: egret.DisplayObjectContainer = <egret.DisplayObjectContainer>this.slot.getDisplay();
			if (sp) {
				if (sp != this.display) {
					this.display = sp;
					this.container = <dragonBones.EgretArmatureDisplay>this.display;
				}
				return new egret.Point(sp.x, sp.y);
			} else {
				return new egret.Point(0, 0);
			}
		}
		// float getPositionX();
		getPositionX(): number {
			if (!this.isReady)
				this.reinit();
			return this.display.x;
		}
		// float getPositionY();
		getPositionY(): number {
			if (!this.isReady)
				this.reinit();
			return this.display.y;
		}
		// void setPosition(const cocos2d::Point &pos);
		setPosition(x: number, y: number): void {
			if (!this.isReady)
				this.reinit();
			this.display.$setX(x);
			this.display.$setY(y);
		}
		// void setPositionX(float x);
		setPositionX(x: number): void {
			if (!this.isReady)
				this.reinit();
			this.display.$setX(x);
		}
		// void setPositionY(float y);
		setPositionY(y: number): void {
			if (!this.isReady)
				this.reinit();
			this.display.$setY(y);
		}
		// Size getContentSize();
		getContentSize(): egret.Point {
			if (!this.isReady)
				this.reinit();
			return new egret.Point(this.display.x, this.display.y);
		};
		// Node* getDisplayNode();
		getDisplayNode(): dragonBones.EgretArmatureDisplay {
			if (!this.isReady)
				this.reinit();
			return this.container;
		};
		// inline float getScale() { return getDisplayNode().getScale(); };
		getScale(): number { return (this.getScaleX() + this.getScaleY()) / 2; }
		// inline float getScaleX() { return getDisplayNode().getScaleX(); };
		getScaleX(): number { return this.getDisplayNode().$getScaleX(); };
		// inline float getScaleY() { return getDisplayNode().getScaleY(); };
		getScaleY(): number { return this.getDisplayNode().$getScaleY(); };

		// inline void setScaleX(float s) {   getDisplayNode().setScaleX(s); };
		setScaleX(s: number): void {
			this.getDisplayNode().$setScaleX(s);
		}
		// inline void setScaleY(float s) { getDisplayNode().setScaleY(s); };
		setScaleY(s: number): void {
			this.getDisplayNode().$setScaleY(s);
		}
		// inline void setScale(float s) { getDisplayNode().setScale(s); };
		setScale(s: number): void {
			this.getDisplayNode().$setScaleX(s);
			this.getDisplayNode().$setScaleY(s);
		}
		// inline float getRotation(){ return getDisplayNode().getRotation(); };
		getRotation(): number { return this.getDisplayNode().rotation; };
		// inline void 	setRotation(float r){return getDisplayNode().setRotation(r); };
		setRotation(r: number) { return this.getDisplayNode().$setRotation(r); };
		// virtual Vec2 convertToWorldSpace(const Vec2 & pos);
		convertToWorldSpace(pos: egret.Point): egret.Point {
			if (this.isReady && this.display && this.display.parent)
				return this.display.localToGlobal(0, 0);
			// return this.display.parent.localToGlobal(this.display.x,this.display.y);
			else
				return new egret.Point(0, 0);
		}
		// virtual Vec2 localToGlobal(const Vec2 &  pos);
		localToGlobal(x: number | egret.Point, y?: number): egret.Point {
			if (this.isReady && this.display) {
				if (x instanceof egret.Point) {
					return this.getDisplayNode().localToGlobal(x.x, x.y);
				} else {
					return this.getDisplayNode().localToGlobal(x, y);
				}
			} else {
				return new egret.Point(-1, -1);
			}
		};
		// virtual Vec2 globalToLocal(const Vec2 &  pos);
		globalToLocal(x: number, y: number): egret.Point {
			if (this.isReady && this.display)
				return this.getDisplayNode().globalToLocal(x, y);
			else
				return new egret.Point(-1, -1);
		}

		// virtual void gotoAndStop(int cf, const string &  aniName = "");
		gotoAndStop(cf: number, aniName: string = ""): void {
			if (!this.isReady && this.reinitType) {
				this.reinit();
			}
			if (!this.isReady) return;
			super.gotoAndStop(cf, aniName);
			this.reinitSubMcbs();
		};
		// inline virtual void setAlpha(float op) { BaseNode::setAlpha(getDisplayNode(), op); };
		setAlpha(op: number): void { this.getDisplayNode().$setAlpha(op); };
		// inline virtual float getAlpha() { return  BaseNode::getAlpha(getDisplayNode()); };
		getAlpha(): number {
			return this.getDisplayNode().alpha;
		}
		// inline virtual string getName() { return getDisplayNode().getName(); };
		getName(): string { return this.getDisplayNode().name; };
		// virtual float getWidth();
		getWidth() {
			return this.getDisplayNode().width * this.getScaleX();
		}
		// virtual float getHeight();
		getHeight() {
			return this.getDisplayNode().height * this.getScaleX();
		}
		// virtual   void setWidth(float w);
		setWidth(w: number) {
			if (this.getDisplayNode().width > 0) {
				var r: number = w / (this.getDisplayNode().width * this.getScaleX());
				this.setScaleX(this.getScaleX() * r);
			}
		}
		// virtual   void setHeight(float h);
		setHeight(h: number) {
			if (this.getDisplayNode().width > 0) {
				var r: number = h / (this.getDisplayNode().height * this.getScaleY());
				this.setScaleY(this.getScaleY() * r);
			}
		};
		// void setUserData(void * data) { this.userData = data; };
		setUserData(name: string, data) { this.userData[name] = data; };
		getUserData(name: string): any { return this.userData[name]; };
		// virtual void update(float dt = 0);
		update(dt: number): void {
			this.nextFram();
		};
		// virtual void setName(const string & name) { this.name = name; };
		setName(name: string) { this.name = name; if (this.display) this.display.name = name; };
		reinit(): boolean {
			if (!this.slot) {
				if (this.mc.getArmature()) {
					this.slot = this.mc.getArmature().getSlot(this.slotName);
					this.bone = this.mc.getArmature().getBone(this.slotName);
					this.root = this.mc.getArmature().getBone("root");
				} else {
					return false;
				}
			}
			if (!this.slot)
				return false;
			if (this.arm == this.slot.childArmature)
				return false;
			this.arm = this.slot.childArmature;
			if (this.arm) {
				var oldDis: egret.DisplayObjectContainer = this.display;
				this.display = <egret.DisplayObjectContainer>this.slot.display;
				if (this.display) {
					this.display.name = (this.slot.name);
					this.display.$setVisible(this.visible);
					this.container = null;
					if (<dragonBones.EgretArmatureDisplay>this.display) {
						this.container = <dragonBones.EgretArmatureDisplay>this.display;
						this.transform = this.container.$getMatrix();
						if (this.bindListenType) {
							var type: number = this.bindListenType;
							this.bindListenType = 0;
							this.bindMovieListen(type);
						}
					}
					if (oldDis) {
						this.display.$setX(oldDis.x);
						this.display.$setX(oldDis.y);
					}
					this.isReady = true;
					this.defAniName = this.arm._armatureData.defaultAnimation.name;
					this.totalFrames = this.arm._armatureData.animations[this.defAniName].frameCount + 1;//;
					this.gotoAndStop(1);
					this.reinitSubMcbs(true);
					return true;
				} else {
					this.isReady = false;
					return false;
				}
			} else {
				this.isReady = false;
			}
			return false;
		}
	}

	// class MCUI;
	// class MCCase;
	// class MCSprite;
	export class MCCase extends MovieClipSubBase {
		_draw: boolean = false;
		// MCCase(MC * mc, const string &  slotName, bool mouseEnabled=true, bool draw = false);
		constructor(pmc?: MC, slotName?: string, mouseEnabled: boolean = true, draw: boolean = false, reinit: number = 0) {
			super();
			this.mc = pmc;
			this.slotName = slotName;
			this._draw = draw;
			this.name = (slotName);
			this.mouseEnabled = mouseEnabled;
			if (this.mc) {
				this.mc.addMCbs(this, reinit);
			}
			if (this.mc)
				this.reinit();
			if (this.mouseEnabled) {
				std.addEventNode(this);
				this.enableMouseHandler(std.useNodeEvent ? 1 : 0);
			}
		}
		setAlpha(op: number): void { this.$setAlpha(op); };
		getAlpha(): number { return this.alpha; };
		stop(): void { };
		reinit() {
			if (super.reinit())// (this.baseReinit())
			{
				//Size size = display.getContentSize();
				var origin: dragonBones.Transform = this.slot.origin;
				if (this.display != this) {
					this.$setWidth(this.display.width);
					this.$setHeight(this.display.height);
					this.setPosition(origin.x, origin.y);
				} else if (this.$children[0]) {
					//this.$children[0].$setTouchEnabled(this.mouseEnabled);
					// var m=<egret.Mesh>this.$children[0];
					// std.printNode(this);
					// std.printNode(this.$children[0]);
					// std.drawRange(this,0xFF0000);
					// std.drawRange(this.$children[0],0x0000FF);
				}
				if (this._draw)
					this.drawRange();// std.drawRange(this.display,0xFF0000);
			}
			return this.isReady;
		};
	}

	export class MCUI extends MovieClipSubBase {
		container: egret.DisplayObject;
		// }
		// //eui.TextInput 
		// export class MCUI extends eui.Label implements MovieClipSubBase
		// {
		constructor(con: egret.DisplayObject, pmc?: MC, slotName?: string, reinit: number = 0) {
			super();
			this.container = con;

			this.mc = pmc;
			this.slotName = slotName;
			this.container.name = slotName;
			if (this.container instanceof eui.Label) {
				this.container.textColor = 0xffff00;
			}
			// this.textDisplay.
			// egret.BitmapText
			if (pmc) {
				pmc.addMCbs(this);
				// this.setFontName("Arial");//Arial
				// //this.setFontName("宋体");//Arial
				// this.setFontSize(14);
				// //setNodeType("MCText");
				// this.setColor(Color3B::YELLOW);
				// this.setTextHorizontalAlignment(TextHAlignment::LEFT);
				// this.setTextVerticalAlignment(TextVAlignment::CENTER);
				// std::setAnchorPoint(this, 0);
				// //this.ignoreContentAdaptWithSize(false);
				// this.autorelease();
				// this.mc = mc;
				// this.slotName = slotName;
				// this.setName(slotName);
				// reinit();
			} else {
				std.setAnchorPoint(this.container, 0, 0);
			}
		}
		getContainer() {
			return this.container;
		}
		setAlpha(op: number): void { this.container.$setAlpha(op); };
		getAlpha(): number { return this.container.alpha; };
		setVisible(v: boolean): void {
			this._visible = v;
			this.container.$setVisible(v);
		}
		reinit(): boolean {
			if (super.reinit()) {
				// this.retain();
				this.display.removeChild(this.container);
				this.display.parent.addChildAt(this.container, 9999);//取消绽放造成的字体大小变化
				// this.release();
				this.container.$setX(this.display.$getX());
				this.container.$setX(this.display.$getX());
				// this.setPosition(this.display.getPosition());
				// Size size=display.getContentSize();
				// this.setContentSize(Size(size.width* display.getScaleX(), size.height*  display.getScaleY()) - Size(1, 1));
				if (this.container instanceof eui.TextInput)
					this.container.text = "TEST";
				else if (this.container instanceof eui.Label)
					this.container.text = "TEST";
				else if (this.container instanceof egret.TextField)
					this.container.text = "TEST";
				else if (this.container instanceof eui.Button)
					this.container.label = "TEST";
				std.drawRange(this.container, 0xFF0000);
				std.drawRange(this.display, 0xFFFF00);
			}
			return this.isReady;
		};


	}

	export class MCText extends MCUI {
		constructor(pmc?: MC, slotName?: string, reinit: number = 0) {
			super(new eui.TextInput(), pmc, slotName, reinit);
		}
		getContainer(): eui.TextInput {
			return <eui.TextInput>this.container;
		}
	}
	export class MCLabel extends MCUI {
		constructor(pmc?: MC, slotName?: string, reinit: number = 0) {
			super(new eui.Label(), pmc, slotName, reinit);
		}
		getContainer(): eui.Label {
			return <eui.Label>this.container;
		}
	}
	export class MCSprite extends MCUI {
		constructor(pmc: MC, slotName: string, sprite: string, reinit: number = 0) {//egret.Bitmap){
			super(std.createBitmap(sprite), pmc, slotName, reinit);
		}
		getContainer(): egret.Bitmap {
			return <egret.Bitmap>this.container;
		}
	}

	export class MCMask extends MCUI {
		public constructor(pmc: MC, slotName: string, reinit: number = 0) {
			super(new egret.Sprite(), pmc, slotName, reinit);
		}
	}

}
module std {

	export function maskDB(mc:MC){
				// gotoAndPlay(animationName: string, fadeInTime?: number, duration?: number, playTimes?: number, layer?: number, group?: string | null, fadeOutMode?: AnimationFadeOutMode, pauseFadeOut?: boolean, pauseFadeIn?: boolean): AnimationState | null;
		var upperBodyAnimationState:dragonBones.AnimationState =mc.getArmature().animation.gotoAndPlay("run",0,-1,0,0,"UPPER_BODY_GROUP",dragonBones.AnimationFadeOutMode.SameGroup);
		var lowerBodyAnimationState:dragonBones.AnimationState = mc.getAnimation().gotoAndPlay("fire",0,-1,0,0,"LOWER_BODY_GROUP",dragonBones.AnimationFadeOutMode.SameGroup);
		
		
		upperBodyAnimationState.addBoneMask("head");
		upperBodyAnimationState.addBoneMask("body");
		lowerBodyAnimationState.addBoneMask("leg");
		lowerBodyAnimationState.addBoneMask("foot");

		
	}

}



