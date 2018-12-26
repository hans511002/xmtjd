package com.code
{
   import flash.display.MovieClip;
   
   public class Aby_enemy extends DataMovieClip
   {
       
      
      var _game:Game;
      
      var _app:App;
      
      var skin:MovieClip;
      
      var type:Number;
      
      var id:Number;
      
      var reload_time:Number;
      
      var reload_time2:Number;
      
      var time:Number;
      
      var frame_action:Number;
      
      var power:Number;
      
      var type_aby:Number;
      
      var qe:Number;
      
      public function Aby_enemy()
      {
         this._game = Game.getInstance();
         this._app = App.getInstance();
         super();
      }
      
      public function init() : void
      {
         this.id = this._app.team_enemy_id * 4 - 8 + this._game.arr_fox.length;
         this.type = this.id;
         this.type_aby = this._game._info.got_type(this.type);
         this.power = this._game._info.got_power(this.type);
         this.frame_action = this._game._info.got_frame(this.type);
         this.time = this._game._info.got_time(this.type);
         this.reload_time2 = this._game._info.got_reload(this.type);
         this.qe = 1;
         this.i = 1;
         while(this.i <= int(this._app.team_enemy_level * 0.5))
         {
            this.qe = this.qe - 0.015;
            this.i++;
         }
         this.reload_time2 = this.reload_time2 * this.qe;
         this.reload_time = int(this.reload_time2 * 0.5);
      }
   }
}
