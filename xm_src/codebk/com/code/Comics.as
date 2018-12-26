package com.code
{
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   
   public class Comics extends DataMovieClip
   {
       
      
      public var play_bt:SimpleButton;
      
      public var sounds_control_cl:Buttons_sounds2;
      
      var _app:App;
      
      public function Comics()
      {
         this._app = App.getInstance();
         super();
         addFrameScript(608,this.frame609);
      }
      
      public function init() : void
      {
         this._app._music.delete_music("all");
         stage.addEventListener(MouseEvent.CLICK,this.click_f);
         this._app._so.load_by_name(comics_so);
      }
      
      function click_f(param1:MouseEvent) : *
      {
         if(_mo(this.play_bt))
         {
            this._app.open_new_screen("team_register");
            this._app._so.stop_so();
         }
      }
      
      public function delete_f() : *
      {
         stage.removeEventListener(MouseEvent.CLICK,this.click_f);
         this.sounds_control_cl.delete_f();
      }
      
      function frame609() : *
      {
         stop();
      }
   }
}
