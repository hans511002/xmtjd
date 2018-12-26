package com.code
{
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public class Splash extends MovieClip
   {
       
      
      public var splash_deqaf_cl:MovieClip;
      
      var _app:App;
      
      public function Splash()
      {
         this._app = App.getInstance();
         super();
      }
      
      public function init() : void
      {
         stage.addEventListener(MouseEvent.MOUSE_DOWN,this.click_f);
         addEventListener(Event.ENTER_FRAME,this.sp_f);
         stage.frameRate = 60;
      }
      
      function click_f(param1:MouseEvent) : *
      {
         navigateToURL(new URLRequest("http://armor.ag/MoreGames"),"_blank");
      }
      
      function sp_f(param1:Event) : *
      {
         if(this.splash_deqaf_cl.currentFrame == this.splash_deqaf_cl.totalFrames)
         {
            removeEventListener(Event.ENTER_FRAME,this.sp_f);
            stage.removeEventListener(MouseEvent.MOUSE_DOWN,this.click_f);
            this._app.open_new_screen("deqaf");
         }
      }
      
      public function delete_f() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.sp_f);
      }
   }
}
