module com.code {
    export  class Deqaf extends MovieClip
   {
       
      
      splash_deqaf_cl:std.MovieClip;
      
      _app:App;
      
      _sounds:LoadSounds;
      
      public constructor()
      {
            super();
         this._app = App.getInstance();
      }
      
      public  init() : void
      {
         addEventListener(Event.ENTER_FRAME,this.sp_f);
         this._sounds = new LoadSounds();
         stage.frameRate = 60;
      }
      
      public sp_f(param1:Event) : *
      {
         if(this.splash_deqaf_cl.currentFrame == 3)
         {
            this._sounds.load_by_name(deqaf_zvuk);
         }
         if(this.splash_deqaf_cl.currentFrame == this.splash_deqaf_cl.totalFrames)
         {
            stage.frameRate = 40;
            removeEventListener(Event.ENTER_FRAME,this.sp_f);
            this._app.open_new_screen("menu");
         }
      }
      
      public  delete_f() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.sp_f);
      }
   }
}
