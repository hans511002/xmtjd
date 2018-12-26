module com.code {
    export class Splash extends MovieClip
   {
       
      
      splash_deqaf_cl:MovieClip;
      
        _app:App;
      
      public   Splash()
      {
         super();
         this._app = App.getInstance();
      }
      
      public   init() : void
      {
         stage.addEventListener(MouseEvent.MOUSE_DOWN,this.click_f);
         addEventListener(Event.ENTER_FRAME,this.sp_f);
         stage.frameRate = 60;
      }
      
      public click_f(param1:MouseEvent) : *
      {
         navigateToURL(new URLRequest("http://armor.ag/MoreGames"),"_blank");
      }
      
      public sp_f(param1:Event) : *
      {
         if(this.splash_deqaf_cl.currentFrame == this.splash_deqaf_cl.totalFrames)
         {
            removeEventListener(Event.ENTER_FRAME,this.sp_f);
            stage.removeEventListener(MouseEvent.MOUSE_DOWN,this.click_f);
            this._app.open_new_screen("deqaf");
         }
      }
      
      public   delete_f() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.sp_f);
      }
   }
}
