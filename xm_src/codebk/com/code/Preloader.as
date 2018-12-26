package com.code
{
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.ProgressEvent;
   import flash.net.URLRequest;
   import flash.system.Security;
   
   public class Preloader extends Sprite
   {
       
      
      public var name_in_cl:MovieClip;
      
      public var play_cl:MovieClip;
      
      public var skala:MovieClip;
      
      var loaded:Number;
      
      var total:Number;
      
      var rnd_for:Number = 0;
      
      var i_in:String;
      
      var site_good:int = 0;
      
      var _app:App;
      
      public function Preloader()
      {
         this._app = App.getInstance();
         super();
         if(stage)
         {
            this.init();
         }
         else
         {
            addEventListener(Event.ADDED_TO_STAGE,this.init);
         }
      }
      
      public function init(param1:Event = null) : void
      {
         this.play_cl.visible = false;
         loaderInfo.addEventListener(ProgressEvent.PROGRESS,this.progressHandler);
         loaderInfo.addEventListener(Event.COMPLETE,this.startGame_f);
         addEventListener(Event.ENTER_FRAME,this.preloader_f);
         this.init_cpm();
      }
      
      function add_armor_ads() : *
      {
         var abs:* = undefined;
         var loadComplete:Function = null;
         loadComplete = function(param1:Event):void
         {
            abs = param1.currentTarget.content;
            name_in_cl.lol.addChild(abs);
            abs.show({
               "x":0 - 150,
               "y":0 - 100
            });
         };
         var abs_url:String = "./ABS.swf";
         Security.allowDomain(abs_url);
         var urlRequest:URLRequest = new URLRequest(abs_url);
         var loader:Loader = new Loader();
         loader.contentLoaderInfo.addEventListener(Event.COMPLETE,loadComplete);
         loader.load(urlRequest);
      }
      
      function init_cpm() : *
      {
         var _loc1_:Number = NaN;
         var _loc2_:String = stage.loaderInfo.loaderURL;
         var _loc3_:Number = _loc2_.indexOf("://") + 3;
         var _loc4_:Number = _loc2_.indexOf("/",_loc3_);
         var _loc5_:String = _loc2_.substring(_loc3_,_loc4_);
         var _loc6_:Number = _loc5_.lastIndexOf(".") - 1;
         var _loc7_:Number = _loc5_.lastIndexOf(".",_loc6_) + 1;
         _loc5_ = _loc5_.substring(_loc7_,_loc5_.length);
         var _loc8_:Array = [];
         _loc8_.push("www.kongregate.com");
         _loc8_.push("kongregate.com");
         _loc8_.push("newgrounds.com");
         _loc8_.push("www.newgrounds.com");
         _loc8_.push("uploads.ungrounded.net");
         _loc8_.push("ungrounded.net");
         _loc8_.push("ngfiles.com");
         _loc1_ = 0;
         while(_loc1_ < _loc8_.length)
         {
            if(_loc5_ == _loc8_[_loc1_])
            {
               this.site_good = 1;
            }
            _loc1_++;
         }
         if(this.site_good == 0)
         {
            this.name_in_cl.gotoAndStop(1);
            this.add_armor_ads();
         }
         else
         {
            this.name_in_cl.gotoAndStop(2);
            this.play_cl.y = 297;
         }
      }
      
      function progressHandler(param1:ProgressEvent) : void
      {
         this.loaded = param1.bytesLoaded;
         this.total = param1.bytesTotal;
      }
      
      function preloader_f(param1:Event) : *
      {
         this.skala.gotoAndStop(int((this.total - (this.total - this.loaded)) * 100 / this.total));
         if(int(this.loaded / this.total * 100) >= 100)
         {
            this.load_end();
         }
      }
      
      function startGame_f(param1:Event) : *
      {
         this.load_end();
      }
      
      function load_end() : *
      {
         this.skala.gotoAndStop(100);
         this.play_cl.visible = true;
         this.play_cl.gotoAndPlay(2);
         this.play_cl.addEventListener(MouseEvent.CLICK,this.bt_play);
         removeEventListener(Event.ENTER_FRAME,this.preloader_f);
         loaderInfo.removeEventListener(Event.COMPLETE,this.startGame_f);
         loaderInfo.removeEventListener(ProgressEvent.PROGRESS,this.progressHandler);
      }
      
      function bt_play(param1:MouseEvent) : *
      {
         Main.go_to_game = true;
         Main.first_target = "game";
         Main.first_target = "dress";
         Main.first_target = "upg";
         Main.first_target = "menu";
         Main.first_target = "splash";
      }
      
      public function delete_f() : *
      {
      }
   }
}
