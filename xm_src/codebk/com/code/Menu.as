package com.code
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public class Menu extends DataMovieClip
   {
       
      
      public var cat1:cat_mc;
      
      public var cat2:cat_mc;
      
      public var clear_cl:SimpleButton;
      
      public var credits_cl:MovieClip;
      
      public var cup_1:MovieClip;
      
      public var cup_2:MovieClip;
      
      public var cup_3:MovieClip;
      
      public var cup_4:MovieClip;
      
      public var cup_5:MovieClip;
      
      public var deqaf_bt:SimpleButton;
      
      public var face_bt:MovieClip;
      
      public var go_sfk1:MovieClip;
      
      public var go_sfk2:MovieClip;
      
      public var go_sfk3:MovieClip;
      
      public var play_cl:SimpleButton;
      
      public var sounds_control_cl:Buttons_sounds2;
      
      public var zone_panel:MovieClip;
      
      var _app:App;
      
      var sure_cl:MovieClip;
      
      var sure_ex:Boolean = false;
      
      var time_reload:int;
      
      var status:int;
      
      var dress1:int;
      
      var dress2:int;
      
      var acp:Number;
      
      public function Menu()
      {
         this._app = App.getInstance();
         super();
      }
      
      public function init() : void
      {
         this._app._music.load_music("menu");
         addEventListener(Event.ENTER_FRAME,this.game_f);
         stage.addEventListener(MouseEvent.CLICK,this.click_f);
         this.cup_1.visible = false;
         this.cup_2.visible = false;
         this.cup_3.visible = false;
         this.cup_4.visible = false;
         this.cup_5.visible = false;
         this.credits_cl.de2.gotoAndStop(3);
         this.credits_cl.visible = false;
         if(Main.sav.data.game_end == 1)
         {
            this.cup_1.visible = true;
         }
         if(Main.sav.data.league <= 3)
         {
            this.cup_5.visible = true;
         }
         if(Main.sav.data.league <= 2)
         {
            this.cup_4.visible = true;
         }
         if(Main.sav.data.league <= 1)
         {
            this.cup_3.visible = true;
         }
         if(Main.sav.data.cup_shark == 1)
         {
            this.cup_2.visible = true;
         }
         this.dress1 = _rnd(299) + 2;
         this.dress2 = _rnd(299) + 2;
         this.cat1.gotoAndStop(1);
         this.cat2.gotoAndStop(2);
         this.cat1.cat1.gotoAndStop(4);
         this.cat2.cat1.gotoAndStop(4);
         this.dress_up(this.cat1.cat1.cat2,1,this.dress1);
         this.dress_up(this.cat2.cat1.cat2,5,this.dress2);
         this.cat1.armor_cl.visible = false;
         this.cat2.armor_cl.visible = false;
         this.time_reload = 80;
         this.status = 0;
      }
      
      function game_f(param1:Event) : *
      {
         if(this.status == 0)
         {
            if(++this.time_reload >= 120)
            {
               this.cat1.cat1.gotoAndStop(2);
               this.cat2.cat1.gotoAndStop(2);
               this.dress_up(this.cat1.cat1.cat2,1,this.dress1);
               this.dress_up(this.cat2.cat1.cat2,5,this.dress2);
               this.status = 1;
               this.acp = 1;
            }
         }
         else if(this.status == 1)
         {
            this.cat1.x = this.cat1.x + 1.5 * this.acp;
            this.cat2.x = this.cat2.x - 1.5 * this.acp;
            this.acp = this.acp + 0.05;
            if(Math.abs(this.cat1.x - this.cat2.x) < 30)
            {
               this.status = 2;
               rnd_for = _rnd(100);
               if(rnd_for > 85)
               {
                  this.cat1.cat1.gotoAndStop(8);
               }
               else if(rnd_for > 70)
               {
                  this.cat1.cat1.gotoAndStop(9);
               }
               else
               {
                  this.cat1.cat1.gotoAndStop(6);
               }
               rnd_for = _rnd(100);
               if(rnd_for > 85)
               {
                  this.cat2.cat1.gotoAndStop(8);
               }
               else if(rnd_for > 70)
               {
                  this.cat2.cat1.gotoAndStop(9);
               }
               else
               {
                  this.cat2.cat1.gotoAndStop(6);
               }
               this.dress_up(this.cat1.cat1.cat2,1,this.dress1);
               this.dress_up(this.cat2.cat1.cat2,5,this.dress2);
            }
         }
         else if(this.status == 2)
         {
            this.cat1.x = this.cat1.x - 1.5 * this.acp;
            this.cat2.x = this.cat2.x + 1.5 * this.acp;
            this.acp = this.acp - 0.04;
            if(this.cat1.x < 204)
            {
               this.status = 0;
               this.time_reload = -100 + _rnd(100);
               this.cat1.cat1.gotoAndStop(4);
               this.cat2.cat1.gotoAndStop(4);
               this.dress_up(this.cat1.cat1.cat2,1,this.dress1);
               this.dress_up(this.cat2.cat1.cat2,5,this.dress2);
               this.cat1.x = 205;
               this.cat2.x = 435;
            }
         }
      }
      
      function click_f(param1:MouseEvent) : *
      {
         if(_mo(this.deqaf_bt))
         {
            this._app._so.load_by_name(click_so);
            this.credits_cl.visible = true;
            if(this.sure_ex)
            {
               _re(this.sure_cl,this.zone_panel);
               this.sure_ex = false;
            }
         }
         if(_mo(this.credits_cl.close_bt))
         {
            this.credits_cl.visible = false;
            this._app._so.load_by_name(click_so);
         }
         if(_mo(this.face_bt))
         {
            "_blank";
            new URLRequest("http://www.facebook.com/ArmorGames");
            ;
         }
         if(_mo(this.go_sfk1))
         {
            navigateToURL(new URLRequest("http://armorgames.com/play/16008/strikeforce-kitty"),"_blank");
         }
         if(_mo(this.go_sfk2))
         {
            navigateToURL(new URLRequest("http://armorgames.com/play/17643/strikeforce-kitty-2"),"_blank");
         }
         if(_mo(this.go_sfk3))
         {
            navigateToURL(new URLRequest("http://armorgames.com/play/17800/strikeforce-kitty-last-stand"),"_blank");
         }
         if(_mo(this.play_cl))
         {
            this._app._so.load_by_name(click_so);
            if(Main.sav.data.game_ex != 1)
            {
               this._app.init_save();
               this._app.open_new_screen("game");
            }
            else
            {
               this._app.open_new_screen("upg");
            }
         }
         if(this.sure_ex)
         {
            if(_mo(this.sure_cl.yes))
            {
               Main.sav.data.game_ex = 0;
               Main.sav.flush();
               _re(this.sure_cl,this.zone_panel);
               this.sure_ex = false;
               this._app._so.load_by_name(click_so);
            }
            else if(_mo(this.sure_cl.no))
            {
               this._app._so.load_by_name(click_so);
               _re(this.sure_cl,this.zone_panel);
               this.sure_ex = false;
            }
         }
         if(_mo(this.clear_cl))
         {
            if(this.sure_ex == false)
            {
               this._app._so.load_by_name(click_so);
               this.sure_cl = _sp(sure_mc,this.zone_panel,115,253);
               this.sure_ex = true;
               this.credits_cl.visible = false;
            }
         }
      }
      
      function dress_up(param1:*, param2:*, param3:*) : *
      {
         param1.head_cl.wool_cl.gotoAndStop(param2);
         param1.hand_l_cl.wool_cl.gotoAndStop(param2);
         param1.hand_r_cl.wool_cl.gotoAndStop(param2);
         param1.body_cl.wool_cl.gotoAndStop(param2);
         param1.foot1_cl.wool_cl.gotoAndStop(param2);
         param1.foot2_cl.wool_cl.gotoAndStop(param2);
         param1.tail_cl.gotoAndStop(param2);
         param3++;
         param1.head_cl.h2.gotoAndStop(param3);
         param1.hand_l_cl.sleeve_cl.gotoAndStop(param3);
         param1.hand_l_cl.w2.gotoAndStop(param3);
         param1.hand_r_cl.sleeve_cl.gotoAndStop(param3);
         param1.hand_r_cl.s2.gotoAndStop(param3);
         param1.body_cl.b2.gotoAndStop(param3);
         param1.foot1_cl.p2.gotoAndStop(param3);
         param1.foot2_cl.p2.gotoAndStop(param3);
         param1.skirt_cl.gotoAndStop(param3);
         param1.cloak_cl.gotoAndStop(param3);
         param3--;
      }
      
      function delete_f() : *
      {
         removeEventListener(Event.ENTER_FRAME,this.game_f);
         stage.removeEventListener(MouseEvent.CLICK,this.click_f);
         this.sounds_control_cl.delete_f();
      }
   }
}
