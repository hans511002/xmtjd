module com.code {
    export class Team_register extends DataMovieClip
   {
       
      
      n1_tx:TextField;
      
       n2_tx:TextField;
      
       n3_tx:TextField;
      
      n4_tx:TextField;
      
     name_tx:TextField;
      
        play_bt:SimpleButton;
      
       please_full_cl:MovieClip;
      
    sounds_control_cl:Buttons_sounds2;
      
        _app:App;
      
        ple:boolean = false;
      
      public   constructor()
      {
         this._app = App.getInstance();
         super();
      }
      
      public   init() : void
      {
         addEventListener(Event.ENTER_FRAME,this.game_f);
         stage.addEventListener(MouseEvent.CLICK,this.click_f);
         this.please_full_cl.visible = false;
         this._app._music.load_music("upg");
      }
      
      public game_f(param1:Event) : *
      {
      }
      
      public click_f(param1:MouseEvent) : *
      {
         if(_mo(this.please_full_cl.auto_bt))
         {
            this.name_tx.text = "猫咪队伍";
            this.n1_tx.text = "菲力克斯";
            this.n2_tx.text = "加菲";
            this.n3_tx.text = "汤姆";
            this.n4_tx.text = "辛巴";
            this._app._so.load_by_name(click_so);
         }
         if(_mo(this.play_bt))
         {
            this._app._so.load_by_name(click_so);
            this.ple = true;
            if(this.name_tx.text != "" && this.name_tx.text != null)
            {
               if(this.n1_tx.text != "" && this.n1_tx.text != null)
               {
                  if(this.n2_tx.text != "" && this.n2_tx.text != null)
                  {
                     if(this.n3_tx.text != "" && this.n3_tx.text != null)
                     {
                        if(this.n4_tx.text != "" && this.n4_tx.text != null)
                        {
                           this.ple = false;
                           Main.sav.data.team_name_1 = this.name_tx.text;
                           this._app.open_new_screen("upg");
                           return;
                        }
                     }
                  }
               }
            }
            if(this.ple)
            {
               this.please_full_cl.visible = true;
            }
         }
      }
      
      public   delete_f() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.game_f);
         stage.removeEventListener(MouseEvent.CLICK,this.click_f);
         this.sounds_control_cl.delete_f();
      }
   }
}
