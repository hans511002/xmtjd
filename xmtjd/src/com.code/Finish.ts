module com.code {
    export class Finish extends DataMovieClip
   {
       
      
      public var play_bt:SimpleButton;
      
      public var sounds_control_cl:Buttons_sounds2;
      
      var _app:App;
      
      public   constructor()
      {
         super();
         this._app = App.getInstance();
      }
      
      public   init() : void
      {
         this._app._music.load_music("dance");
         stage.addEventListener(MouseEvent.CLICK,this.click_f);
      }
      
      public click_f(param1:MouseEvent) : *
      {
         if(_mo(this.play_bt))
         {
            this._app.open_new_screen("menu");
         }
      }
      
      public   delete_f() : *
      {
         stage.removeEventListener(MouseEvent.CLICK,this.click_f);
         this.sounds_control_cl.delete_f();
      }
   }
}
