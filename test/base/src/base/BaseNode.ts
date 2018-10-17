module std{

	var urlMap={};
	var urlLen=0;
	export function createLabel(str: string):eui.Label
	{
		return new eui.Label(str);
	}

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

 	export function setImgUrl(img:egret.Bitmap)
	{
		img.texture=null;
	}

 export	class BaseNode extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		}
		setAnchorPoint(node:egret.DisplayObjectContainer,  subset:boolean):void{
			node.$setAnchorOffsetX(1);
			node.$setAnchorOffsetY(1);
		}
	}
}


