package com.code
{
   import flash.display.MovieClip;
   import flash.display.Sprite;
   
   public class DataGame extends DataMovieClip
   {
       
      
      var arr_last_frame_skin:Array;
      
      var arr_last_frame_zone:Array;
      
      var game_stop:Boolean = false;
      
      var cat_acp:Number = 0.2;
      
      var back_power:int = 8;
      
      var battle_mode:Boolean = false;
      
      var _cat:Cat;
      
      var _aby:Aby;
      
      var _aby_enemy:Aby_enemy;
      
      var _Buttons_sounds:Buttons_sounds;
      
      var _info:Aby_info;
      
      var _info_enemy:Enemy;
      
      var _aura:Aura;
      
      var back_to_cl:MovieClip;
      
      var over_type:int = 0;
      
      var over_time:int = 0;
      
      var info_aby_cl:MovieClip;
      
      var xray_cl:MovieClip;
      
      var xray_ex:Boolean = false;
      
      var xray_time:int;
      
      var xray_type:int;
      
      var lock_mode:Boolean = false;
      
      var lock_mode_fox:Boolean = false;
      
      var was_battle_shot:Boolean = false;
      
      var down_panel_cl:MovieClip;
      
      var time_began:int;
      
      var status_began:int;
      
      var zone_cat:Sprite;
      
      var zone_fox:Sprite;
      
      var zone_up_all:Sprite;
      
      var zone_panel:Sprite;
      
      var zone_bg:Sprite;
      
      var zone_tuto:Sprite;
      
      var pause_cl:MovieClip;
      
      var pause_ex:Boolean = false;
      
      var menu_bt_cl:MovieClip;
      
      var location_cl:MovieClip;
      
      var number_of_in:int;
      
      var check_won_dress:int = 0;
      
      var id_dress:int = 0;
      
      var won_card_cl:MovieClip;
      
      var grand_cl:MovieClip;
      
      var tuto_cl:MovieClip;
      
      var tuto_battle:Boolean = false;
      
      var dead_cat:uint = 0;
      
      var dead_fox:uint = 0;
      
      var type_end:int;
      
      var time_end:int;
      
      var pre_battle_cl:MovieClip;
      
      var got_cup_cl:MovieClip;
      
      var pre_battle_ex:Boolean = false;
      
      var arr_cat:Array;
      
      var arr_fox:Array;
      
      var arr_aby:Array;
      
      var arr_aby_enemy:Array;
      
      var arr_le:Array;
      
      var arr_sort:Array;
      
      var arr_temp:Array;
      
      var arr_temp3:Array;
      
      var arr_aura_cat:Array;
      
      var arr_aura_fox:Array;
      
      var arr_fireball_skin:Array;
      
      var arr_fireball_side:Array;
      
      var arr_fireball_power:Array;
      
      var aura_cat_attack_koff:Number = 1;
      
      var aura_cat_speed_koff:Number = 1;
      
      var aura_cat_slow_koff:Number = 1;
      
      var aura_cat_weak_koff:Number = 1;
      
      var aura_fox_attack_koff:Number = 1;
      
      var aura_fox_speed_koff:Number = 1;
      
      var aura_fox_slow_koff:Number = 1;
      
      var aura_fox_weak_koff:Number = 1;
      
      var arr_temp2:Array;
      
      var i7:int;
      
      var numbef_of_m:int;
      
      var numbef_of_m2:int;
      
      var numbef_of_m3:int;
      
      var numbef_of_two:Boolean = false;
      
      var arr_op:Array;
      
      var arr_op2:Array;
      
      public function DataGame()
      {
         this.arr_last_frame_skin = [];
         this.arr_last_frame_zone = [];
         this.arr_cat = [];
         this.arr_fox = [];
         this.arr_aby = [];
         this.arr_aby_enemy = [];
         this.arr_le = [];
         this.arr_sort = [];
         this.arr_temp = [];
         this.arr_temp3 = [];
         this.arr_aura_cat = [];
         this.arr_aura_fox = [];
         this.arr_fireball_skin = [];
         this.arr_fireball_side = [];
         this.arr_fireball_power = [];
         this.arr_temp2 = [];
         this.arr_op = [];
         this.arr_op2 = [];
         super();
      }
      
      function _to_last(param1:*, param2:*) : *
      {
         this.arr_last_frame_skin.push(param1);
         this.arr_last_frame_zone.push(param2);
      }
      
      function _remove_array(param1:*) : *
      {
         param1.splice(0,param1.length);
      }
      
      function got_sqrt(param1:*, param2:*) : *
      {
         return Math.sqrt((Math.abs(param1.x - param2.x) ^ 2) + (Math.abs(param1.y - param2.y) ^ 2));
      }
      
      function got_sqrt2(param1:*, param2:*, param3:*) : *
      {
         return Math.sqrt((Math.abs(param1.x - param2) ^ 2) + (Math.abs(param1.y - param3) ^ 2));
      }
      
      function got_vracenie(param1:*, param2:*, param3:*, param4:*) : *
      {
         dx = param1 - param3;
         dy = param2 - param4;
         ugol = Math.atan2(dx,dy);
         return ugol * 360 / (-2 * Math.PI);
      }
   }
}
