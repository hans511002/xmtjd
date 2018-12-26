package com.code
{
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public class Finish extends DataMovieClip
   {
       
      
      public var play_bt:SimpleButton;
      
      public var sounds_control_cl:Buttons_sounds2;
      
      var _app:App;
      
      public function Finish()
      {
         this._app = App.getInstance();
         super();
      }
      
      public function init() : void
      {
         this._app._music.load_music("dance");
         stage.addEventListener(MouseEvent.CLICK,this.click_f);
      }
      
      function click_f(param1:MouseEvent) : *
      {
         if(_mo(this.play_bt))
         {
            this._app.open_new_screen("menu");
         }
      }
      
      public function delete_f() : *
      {
         stage.removeEventListener(MouseEvent.CLICK,this.click_f);
         this.sounds_control_cl.delete_f();
      }
   }
}
