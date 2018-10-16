


module std{
 export	 function setAnchorPoint(node:egret.DisplayObjectContainer,  subset:boolean):void{
		node.$setAnchorOffsetX(1);
		node.$setAnchorOffsetY(1);
	};
 
 export	function setImgUrl(img:egret.Bitmap){
		img.texture=null;
	};

 export	class BaseNode extends egret.DisplayObjectContainer {
		public constructor() {
			super();
		};
		setAnchorPoint(node:egret.DisplayObjectContainer,  subset:boolean):void{
			node.$setAnchorOffsetX(1);
			node.$setAnchorOffsetY(1);
		};
	};
}
 
 
