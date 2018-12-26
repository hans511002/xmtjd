package com.code
{
   import flash.display.Sprite;
   import flash.ui.ContextMenu;
   
   public class App extends Sprite
   {
      
      private static var _instance:App;
      
      public static var game_stop:Boolean = false;
       
      
      var i:Number;
      
      var i2:Number;
      
      var i3:Number;
      
      var i4:Number;
      
      var i5:Number;
      
      var i6:Number;
      
      var j:Number;
      
      var j2:Number;
      
      var j3:Number;
      
      var j4:Number;
      
      var j5:Number;
      
      var rnd_for:Number;
      
      var rnd_for2:Number;
      
      var rnd_for3:Number;
      
      var rnd_for4:Number;
      
      var rnd_for5:Number;
      
      var rnd_for6:Number;
      
      var rnd_for7:Number;
      
      var rnd_for8:Number;
      
      private var _Preloader:Preloader;
      
      private var _Team_register:Team_register;
      
      private var _Game:Game;
      
      private var _Menu:Menu;
      
      private var _Comics:Comics;
      
      private var _Finish:Finish;
      
      private var _Fps:FPS;
      
      private var _Deqaf:Deqaf;
      
      private var _Done:Done;
      
      private var _Upg:Upg;
      
      private var _Dress:Dress;
      
      private var _Playoff:Playoff;
      
      private var _Splash:Splash;
      
      public var _so:LoadSounds;
      
      public var _music:LoadMusic;
      
      private var old_scene:String = "none";
      
      private var zone_bg:Sprite;
      
      private var zone_up:Sprite;
      
      var my_context_menu:ContextMenu;
      
      public var team_enemy:int = 2;
      
      public var team_enemy_id:int = 15;
      
      public var team_enemy_level:int;
      
      public var arr_enemy_row:Array;
      
      public var train_mode:Boolean = false;
      
      public function App()
      {
         this.arr_enemy_row = [];
         super();
         _instance = this;
      }
      
      public static function getInstance() : App
      {
         return _instance == null?new App():_instance;
      }
      
      public function init() : void
      {
         this.zone_bg = new Sprite();
         addChild(this.zone_bg);
         this.zone_up = new Sprite();
         addChild(this.zone_up);
         this._so = new LoadSounds();
         this._music = new LoadMusic();
         this.my_context_menu = new ContextMenu();
         this.my_context_menu.hideBuiltInItems();
         contextMenu = this.my_context_menu;
         this.arr_enemy_row.push(2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22);
      }
      
      public function init_save_kitty() : *
      {
         Main.sav.data.chance_injury = 94;
         Main.sav.data.cat_place_1 = 9;
         Main.sav.data.cat_place_2 = 10;
         Main.sav.data.cat_place_3 = 11;
         Main.sav.data.cat_place_4 = 12;
         Main.sav.data.cat_dress_1 = 0;
         Main.sav.data.cat_dress_2 = 0;
         Main.sav.data.cat_dress_3 = 0;
         Main.sav.data.cat_dress_4 = 0;
         Main.sav.data.cat_injury1_1 = 0;
         Main.sav.data.cat_injury2_1 = 0;
         Main.sav.data.cat_injury3_1 = 0;
         Main.sav.data.cat_injury1_2 = 0;
         Main.sav.data.cat_injury2_2 = 0;
         Main.sav.data.cat_injury3_2 = 0;
         Main.sav.data.cat_injury1_3 = 0;
         Main.sav.data.cat_injury2_3 = 0;
         Main.sav.data.cat_injury3_3 = 0;
         Main.sav.data.cat_injury1_4 = 0;
         Main.sav.data.cat_injury2_4 = 0;
         Main.sav.data.cat_injury3_4 = 0;
         this.i = 1;
         while(this.i <= 4)
         {
            this.i2 = 1;
            while(this.i2 <= 3)
            {
               Main.sav.data["cat_injury" + this.i2 + "_time_" + this.i] = 0;
               this.i2++;
            }
            this.i++;
         }
         Main.sav.data.stuff_level_1 = 1;
         Main.sav.data.stuff_level_2 = 1;
         Main.sav.data.stuff_level_3 = 1;
         Main.sav.data.stuff_level_4 = 1;
         Main.sav.data.stuff_level_5 = 1;
         Main.sav.data.stuff_1 = 10;
         Main.sav.data.stuff_2 = 10;
         Main.sav.data.stuff_3 = 10;
         Main.sav.data.stuff_4 = 30;
         Main.sav.data.stuff_5 = 100;
         Main.sav.data.stuff_min_1 = 10;
         Main.sav.data.stuff_min_2 = 10;
         Main.sav.data.stuff_min_3 = 10;
         Main.sav.data.stuff_price_1 = 200;
         Main.sav.data.stuff_price_2 = 200;
         Main.sav.data.stuff_price_3 = 200;
         Main.sav.data.stuff_price_4 = 400;
         Main.sav.data.stuff_price_5 = 300;
         var _loc1_:int = 40;
         Main.sav.data.cat_stat1_1 = 0;
         Main.sav.data.cat_stat1_2 = 0;
         Main.sav.data.cat_stat1_3 = 0;
         Main.sav.data.cat_stat1_4 = 0;
         Main.sav.data.cat_stat1_2_1 = _loc1_;
         Main.sav.data.cat_stat1_2_2 = _loc1_;
         Main.sav.data.cat_stat1_2_3 = _loc1_;
         Main.sav.data.cat_stat1_2_4 = _loc1_;
         Main.sav.data.cat_stat2_1 = 0;
         Main.sav.data.cat_stat2_2 = 0;
         Main.sav.data.cat_stat2_3 = 0;
         Main.sav.data.cat_stat2_4 = 0;
         Main.sav.data.cat_stat2_2_1 = _loc1_;
         Main.sav.data.cat_stat2_2_2 = _loc1_;
         Main.sav.data.cat_stat2_2_3 = _loc1_;
         Main.sav.data.cat_stat2_2_4 = _loc1_;
         Main.sav.data.cat_stat3_1 = 0;
         Main.sav.data.cat_stat3_2 = 0;
         Main.sav.data.cat_stat3_3 = 0;
         Main.sav.data.cat_stat3_4 = 0;
         Main.sav.data.cat_stat3_2_1 = _loc1_;
         Main.sav.data.cat_stat3_2_2 = _loc1_;
         Main.sav.data.cat_stat3_2_3 = _loc1_;
         Main.sav.data.cat_stat3_2_4 = _loc1_;
         Main.sav.data.cat_hp_koff_1 = 1;
         Main.sav.data.cat_hp_koff_2 = 1;
         Main.sav.data.cat_hp_koff_3 = 1;
         Main.sav.data.cat_hp_koff_4 = 1;
         var _loc2_:int = 20;
         Main.sav.data.cat_hp_1 = _loc2_;
         Main.sav.data.cat_hp_2 = _loc2_;
         Main.sav.data.cat_hp_3 = _loc2_;
         Main.sav.data.cat_hp_4 = _loc2_;
         Main.sav.data.cat_hp2_1 = 50;
         Main.sav.data.cat_hp2_2 = 50;
         Main.sav.data.cat_hp2_3 = 50;
         Main.sav.data.cat_hp2_4 = 50;
         Main.sav.data.cat_attack_1 = 10;
         Main.sav.data.cat_attack_2 = 10;
         Main.sav.data.cat_attack_3 = 10;
         Main.sav.data.cat_attack_4 = 10;
         Main.sav.data.cat_speed_1 = 160;
         Main.sav.data.cat_speed_2 = 160;
         Main.sav.data.cat_speed_3 = 160;
         Main.sav.data.cat_speed_4 = 160;
         Main.sav.data.cat_hp_level_1 = 1;
         Main.sav.data.cat_hp_level_2 = 1;
         Main.sav.data.cat_hp_level_3 = 1;
         Main.sav.data.cat_hp_level_4 = 1;
         Main.sav.data.cat_attack_level_1 = 1;
         Main.sav.data.cat_attack_level_2 = 1;
         Main.sav.data.cat_attack_level_3 = 1;
         Main.sav.data.cat_attack_level_4 = 1;
         Main.sav.data.cat_speed_level_1 = 1;
         Main.sav.data.cat_speed_level_2 = 1;
         Main.sav.data.cat_speed_level_3 = 1;
         Main.sav.data.cat_speed_level_4 = 1;
         Main.sav.data.cat_aby_1 = 0;
         Main.sav.data.cat_aby_2 = 0;
         Main.sav.data.cat_aby_3 = 0;
         Main.sav.data.cat_aby_4 = 0;
         Main.sav.data.cat_id_1 = 0;
         Main.sav.data.cat_id_2 = 0;
         Main.sav.data.cat_id_3 = 0;
         Main.sav.data.cat_id_4 = 0;
         Main.sav.data.cat_n_1 = 0;
         Main.sav.data.cat_n_2 = 0;
         Main.sav.data.cat_n_3 = 0;
         Main.sav.data.cat_n_4 = 0;
         Main.sav.data.news_paper = 0;
         Main.sav.data.last_enemy = 0;
         Main.sav.data.last_enemy_id = 0;
         Main.sav.data.enemy_start_level = 1;
         Main.sav.data.season_round = 0;
         Main.sav.data.week = 1;
         Main.sav.data.playoff = 0;
         Main.sav.data.playoff_round = 0;
         Main.sav.data.rest = 0;
         Main.sav.data.result = 0;
         Main.sav.data.earn_fish = 0;
         Main.sav.data.earn_pts = 0;
         Main.sav.data.week_hi = 1;
         Main.sav.data.show_season_finish = 1;
         Main.sav.data.show_season_finish_playoff = 0;
         Main.sav.data.league = 4;
         Main.sav.data.new_league = 0;
         Main.sav.data.season_koff = 0;
         Main.sav.data.place_won_kitty = 0;
         Main.sav.data.off_team_1 = 0;
         Main.sav.data.off_team_2 = 0;
         Main.sav.data.off_team_3 = 0;
         Main.sav.data.off_team_4 = 0;
         Main.sav.data.off_team_5 = 0;
         Main.sav.data.end_of_playoff = 0;
         Main.sav.data.game_end = 0;
         Main.sav.data.cup_shark = 0;
         Main.sav.data.count_semi_1_1 = 0;
         Main.sav.data.count_semi_1_2 = 0;
         Main.sav.data.count_semi_2_1 = 0;
         Main.sav.data.count_semi_2_2 = 0;
         Main.sav.data.count_final_1 = 0;
         Main.sav.data.count_final_2 = 0;
         this.i = 1;
         while(this.i <= 22)
         {
            Main.sav.data["team_games_" + this.i] = 0;
            Main.sav.data["team_w_" + this.i] = 0;
            Main.sav.data["team_d_" + this.i] = 0;
            Main.sav.data["team_pts_" + this.i] = 0;
            this.i++;
         }
         this.i = 2;
         while(this.i <= 22)
         {
            this.i2 = 2;
            while(this.i2 <= 22)
            {
               if(this.i != this.i2)
               {
                  Main.sav.data["match_" + this.i + "_vs_" + this.i2] = 0;
                  Main.sav.data["match_" + this.i2 + "_vs_" + this.i] = 0;
               }
               this.i2++;
            }
            this.i++;
         }
         Main.sav.data.gold = 0;
         Main.sav.data.gold_overall = 0;
         Main.sav.flush();
      }
      
      public function init_save() : *
      {
         Main.sav.data.tuto1 = 1;
         Main.sav.data.tuto2 = 1;
         Main.sav.data.tuto3 = 1;
         Main.sav.data.tuto4 = 1;
         Main.sav.data.tuto5 = 1;
         Main.sav.data.tuto6 = 1;
         Main.sav.data.tuto7 = 1;
         Main.sav.data.gold = 0;
         Main.sav.data.gold_overall = 0;
         this.i = 1;
         while(this.i <= 90)
         {
            Main.sav.data["dress_" + this.i] = 0;
            this.i++;
         }
         Main.sav.data.shop_1 = 2;
         Main.sav.data.shop_2 = 3;
         Main.sav.data.shop_3 = 39;
         Main.sav.data.shop_4 = 44;
         Main.sav.data.shop_5 = 70;
         Main.sav.data.shop_buy_1 = 0;
         Main.sav.data.shop_buy_2 = 0;
         Main.sav.data.shop_buy_3 = 0;
         Main.sav.data.shop_buy_4 = 0;
         Main.sav.data.shop_buy_5 = 0;
         this.i = 1;
         while(this.i <= 22)
         {
            Main.sav.data["team_games_" + this.i] = 0;
            Main.sav.data["team_w_" + this.i] = 0;
            Main.sav.data["team_d_" + this.i] = 0;
            Main.sav.data["team_pts_" + this.i] = 0;
            this.i++;
         }
         this.i = 2;
         while(this.i <= 22)
         {
            this.i2 = 2;
            while(this.i2 <= 22)
            {
               if(this.i != this.i2)
               {
                  Main.sav.data["match_" + this.i + "_vs_" + this.i2] = 0;
                  Main.sav.data["match_" + this.i2 + "_vs_" + this.i] = 0;
               }
               this.i2++;
            }
            this.i++;
         }
         this.init_save_kitty();
         Main.sav.data.team_name_1 = "猫咪队伍";
         Main.sav.data.chance_injury = 104;
         Main.sav.flush();
      }
      
      public function open_new_screen(param1:*) : *
      {
         this.free();
         switch(param1)
         {
            case "game":
               this._Game = new Game();
               this.zone_bg.addChild(this._Game);
               this._Game.init();
               break;
            case "menu":
               this._Menu = new Menu();
               this.zone_bg.addChild(this._Menu);
               this._Menu.init();
               break;
            case "upg":
               this._Upg = new Upg();
               this.zone_bg.addChild(this._Upg);
               this._Upg.init();
               break;
            case "dress":
               this._Dress = new Dress();
               this.zone_bg.addChild(this._Dress);
               this._Dress.init();
               break;
            case "playoff":
               this._Playoff = new Playoff();
               this.zone_bg.addChild(this._Playoff);
               this._Playoff.init();
               break;
            case "comics":
               this._Comics = new Comics();
               this.zone_bg.addChild(this._Comics);
               this._Comics.init();
               break;
            case "finish":
               this._Finish = new Finish();
               this.zone_bg.addChild(this._Finish);
               this._Finish.init();
               break;
            case "team_register":
               this._Team_register = new Team_register();
               this.zone_bg.addChild(this._Team_register);
               this._Team_register.init();
               break;
            case "deqaf":
               this._Deqaf = new Deqaf();
               this.zone_bg.addChild(this._Deqaf);
               this._Deqaf.x = -50;
               this._Deqaf.y = -50;
               this._Deqaf.init();
               break;
            case "splash":
               this._Splash = new Splash();
               this.zone_bg.addChild(this._Splash);
               this._Splash.init();
               break;
            case "done":
               this._Done = new Done();
               this.zone_bg.addChild(this._Done);
               this._Done.init();
         }
         this.old_scene = param1;
      }
      
      function free() : *
      {
         switch(this.old_scene)
         {
            case "game":
               this._Game.delete_f();
               this.zone_bg.removeChild(this._Game);
               break;
            case "menu":
               this._Menu.delete_f();
               this.zone_bg.removeChild(this._Menu);
               break;
            case "upg":
               this._Upg.delete_f();
               this.zone_bg.removeChild(this._Upg);
               break;
            case "dress":
               this._Dress.delete_f();
               this.zone_bg.removeChild(this._Dress);
               break;
            case "finish":
               this._Finish.delete_f();
               this.zone_bg.removeChild(this._Finish);
               break;
            case "comics":
               this._Comics.delete_f();
               this.zone_bg.removeChild(this._Comics);
               break;
            case "deqaf":
               this._Deqaf.delete_f();
               this.zone_bg.removeChild(this._Deqaf);
               break;
            case "splash":
               this._Splash.delete_f();
               this.zone_bg.removeChild(this._Splash);
               break;
            case "team_register":
               this._Team_register.delete_f();
               this.zone_bg.removeChild(this._Team_register);
               break;
            case "playoff":
               this._Playoff.delete_f();
               this.zone_bg.removeChild(this._Playoff);
               break;
            case "done":
               this._Done.delete_f();
               this.zone_bg.removeChild(this._Done);
         }
      }
      
      function _rnd(param1:*) : *
      {
         return int(Math.random() * param1);
      }
   }
}
