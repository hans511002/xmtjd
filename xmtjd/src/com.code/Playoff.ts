module com.code {
    export class Playoff extends DataMovieClip
   {
       
      
      sc_cl:MovieClip;
      
     table_cl:MovieClip;
      
        _app:App;
      
        time:number = 0;
      
        _info_enemy:Enemy;
      
      public   constructor()
      {
         super();
         this._app = App.getInstance();
         addFrameScript(86,this.frame87);
      }
      
      public   init() : void
      {
         this._app._music.delete_music("all");
         addEventListener(Event.ENTER_FRAME,this.game_f);
         this.table_cl.ass_1.h2.gotoAndStop(1);
         this.table_cl.ass_2.h2.gotoAndStop(2);
         this.table_cl.ass_1.gotoAndPlay(1);
         this.table_cl.ass_2.gotoAndPlay(17);
         this._info_enemy = new Enemy();
         this._app._so.load_by_name(league_so);
      }
      
      public game_f(param1:Event) : *
      {
         this.time++;
         if(this.time == 90)
         {
            this._app._so.load_by_name(applo_so);
            this.table_cl.gotoAndPlay(2);
         }
         if(this.time == 235)
         {
            this._app._so.load_by_name(take_ball_so);
            this.sc_cl.slot_1.title1_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_1);
            this.sc_cl.slot_1.line_1.gotoAndPlay(2);
         }
         if(this.time == 307)
         {
            this._app._so.load_by_name(take_ball_so);
            this.sc_cl.slot_1.title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_2);
            this.sc_cl.slot_1.line_2.gotoAndPlay(2);
         }
         if(this.time == 380)
         {
            this._app._so.load_by_name(take_ball_so);
            this.sc_cl.slot_2.title1_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_3);
            this.sc_cl.slot_2.line_1.gotoAndPlay(2);
         }
         if(this.time == 460)
         {
            this._app._so.load_by_name(take_ball_so);
            this.sc_cl.slot_2.title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_4);
            this.sc_cl.slot_2.line_2.gotoAndPlay(2);
         }
         if(this.time == 480)
         {
            this._app._so.load_by_name(applo_so);
            this.sc_cl.slot_2.title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_4);
         }
         if(this.time >= 600)
         {
            this._app.open_new_screen("upg");
         }
      }
      
      public   delete_f() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.game_f);
      }
      
      public frame87() : *
      {
         stop();
      }
   }
}
