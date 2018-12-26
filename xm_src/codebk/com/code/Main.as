package com.code
{
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import flash.net.SharedObject;
   
   public class Main extends MovieClip
   {
      
      public static var sav:SharedObject = SharedObject.getLocal("SharedObject");
      
      public static var zvukReg:Boolean = true;
      
      public static var _app_is_add:Boolean = false;
      
      public static var lev_sound:Number = 1;
      
      public static var mute_music:Boolean = false;
      
      public static var mute_sfx:Boolean = false;
      
      public static var xray_mode:Boolean = false;
      
      public static var go_to_game:Boolean = false;
      
      public static var first_target;
      
      public static var load_map_zvuk:int = 1;
      
      public static var muz_map_zvuk_zv:Sound = new Sound();
      
      public static var muz_map_zvuk_can:SoundChannel;
      
      public static var load_elf_zvuk:int = 1;
      
      public static var muz_elf_zvuk_zv:Sound = new Sound();
      
      public static var muz_elf_zvuk_can:SoundChannel;
      
      public static var load_water_zvuk:int = 1;
      
      public static var muz_water_zvuk_zv:Sound = new Sound();
      
      public static var muz_water_zvuk_can:SoundChannel;
      
      public static var load_dance_zvuk:int = 1;
      
      public static var muz_dance_zvuk_zv:Sound = new Sound();
      
      public static var muz_dance_zvuk_can:SoundChannel;
       
      
      public var body_cl:MovieClip;
      
      public var card_8:card_mc;
      
      public var cloak_cl:MovieClip;
      
      public var foot1_cl:MovieClip;
      
      public var foot2_cl:MovieClip;
      
      public var h2:MovieClip;
      
      public var hand_l_cl:MovieClip;
      
      public var hand_r_cl:MovieClip;
      
      public var head_cl:MovieClip;
      
      public var icon_cl:MovieClip;
      
      public var skirt_cl:MovieClip;
      
      public var tail_cl:MovieClip;
      
      public var wool_cl:MovieClip;
      
      private var _App:App;
      
      private var _Preloader:Preloader;
      
      public function Main()
      {
         super();
         addFrameScript(0,this.frame1);
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
         this._Preloader = new Preloader();
         addChild(this._Preloader);
         addEventListener(Event.ENTER_FRAME,this.go_to_game_f);
      }
      
      function go_to_game_f(param1:Event) : *
      {
         var _loc2_:App = null;
         if(go_to_game)
         {
            removeChild(this._Preloader);
            MovieClip(root).gotoAndStop("game");
            _loc2_ = new App();
            addChild(_loc2_);
            _loc2_.init();
            _loc2_.open_new_screen(first_target);
            removeEventListener(Event.ENTER_FRAME,this.go_to_game_f);
         }
      }
      
      function frame1() : *
      {
         stop();
      }
   }
}
