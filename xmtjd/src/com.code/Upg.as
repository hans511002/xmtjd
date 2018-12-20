package com.code
{
    import flash.display.*;
    import flash.events.*;
    import flash.text.*;

    public class Upg extends DataMovieClip
    {
        public var calendar_cl:MovieClip;
        public var coach_stay_cl:MovieClip;
        public var doctor_cl:MovieClip;
        public var dress_bt:SimpleButton;
        public var gong_cl:MovieClip;
        public var grass_cl:MovieClip;
        public var menu_bt_cl:SimpleButton;
        public var money_tx:TextField;
        public var next_bt:MovieClip;
        public var pointer1:MovieClip;
        public var pointer2:MovieClip;
        public var pointer3:MovieClip;
        public var sign_cl:MovieClip;
        public var slot_1:MovieClip;
        public var slot_2:MovieClip;
        public var slot_3:MovieClip;
        public var slot_4:MovieClip;
        public var stat_bt:SimpleButton;
        public var stat_cl:MovieClip;
        public var talk_10:MovieClip;
        public var talk_11:MovieClip;
        public var talk_12:MovieClip;
        public var talk_9:MovieClip;
        public var train_1:MovieClip;
        public var train_10:MovieClip;
        public var train_11:MovieClip;
        public var train_12:MovieClip;
        public var train_2:MovieClip;
        public var train_3:MovieClip;
        public var train_4:MovieClip;
        public var train_5:MovieClip;
        public var train_6:MovieClip;
        public var train_7:MovieClip;
        public var train_8:MovieClip;
        public var train_9:MovieClip;
        public var upg_bt:SimpleButton;
        public var upg_cl:MovieClip;
        public var zone_1:MovieClip;
        public var zone_10:MovieClip;
        public var zone_11:MovieClip;
        public var zone_12:MovieClip;
        public var zone_2:MovieClip;
        public var zone_3:MovieClip;
        public var zone_4:MovieClip;
        public var zone_5:MovieClip;
        public var zone_6:MovieClip;
        public var zone_7:MovieClip;
        public var zone_8:MovieClip;
        public var zone_9:MovieClip;
        public var zone_drag:MovieClip;
        public var zone_tuto:MovieClip;
        public var zone_up_all:MovieClip;
        var _app:App;
        var _Buttons_sounds:Buttons_sounds;
        var pause_cl:MovieClip;
        var pause_ex:Boolean = false;
        var upg_ex:Boolean = false;
        var stat_ex:Boolean = false;
        var _info:Aby_info;
        var month_of:Number;
        var day_of:Number;
        var year_of:Number;
        var date_all:String;
        var my_date:Date;
        var drag_scroll:Boolean = false;
        var arr_le:Array;
        var arr_sort:Array;
        var arr_sort_type:Array;
        var spy_time:int;
        var mouse_dx:Number;
        var place_dy:Number;
        var drag_mode:Boolean = false;
        var cat_drag:MovieClip;
        var cat_type:int;
        var set_id:int;
        var type_zone:int;
        var injury2:int = 200;
        var cat_drag_type:int;
        var arr_temp:Array;
        var arr_temp2:Array;
        var i7:int;
        var numbef_of_m:int;
        var numbef_of_m2:int;
        var numbef_of_m3:int;
        var numbef_of_two:Boolean = false;
        var arr_op:Array;
        var arr_op2:Array;
        var arr_last_frame_skin:Array;
        var arr_last_frame_zone:Array;
        var _info_enemy:Enemy;
        var pre_battle_cl:MovieClip;
        var pre_battle_ex:Boolean = false;
        var tuto_cl:MovieClip;
        var paper_cl:MovieClip;
        var result_season_cl:MovieClip;
        var number_of_in:int;
        var arr_temp3:Array;
        var to_battle:int = 0;
        var yes_new_place:Boolean = false;
        var n_of_i:int;
        var paper_ex:Boolean = false;
        var yeah_tuto:Boolean = false;
        var found_train:Boolean = false;
        var no_set_train:Boolean = false;
        var n_of_treat:int;
        var n_of_treat2:int;

        public function Upg()
        {
            this._app = App.getInstance();
            this.my_date = new Date();
            this.arr_le = [];
            this.arr_sort = [];
            this.arr_sort_type = [];
            this.arr_temp = [];
            this.arr_temp2 = [];
            this.arr_op = [];
            this.arr_op2 = [];
            this.arr_last_frame_skin = [];
            this.arr_last_frame_zone = [];
            this.arr_temp3 = [];
            return;
        }// end function

        public function init() : void
        {
            if (Main.sav.data.week >= 8)
            {
                Main.sav.data.week = 7;
            }
            this.month_of = this.my_date.month + 1;
            this.day_of = this.my_date.date;
            this.year_of = this.my_date.fullYear;
            this.date_all = this.month_of + "." + this.day_of + "." + this.year_of;
            this.sign_cl.mouseEnabled = false;
            this._app._music.load_music("upg");
            this._info_enemy = new Enemy();
            this.spy_time = _rnd(9000);
            this._info = new Aby_info();
            this.pause_cl = _sp(pause_mc, this.zone_tuto, 0, 0);
            this._Buttons_sounds = new Buttons_sounds();
            this._Buttons_sounds.x = 294;
            this._Buttons_sounds.y = 182;
            this.pause_cl.addChild(this._Buttons_sounds);
            this.pause_cl.home_bt.gotoAndStop(2);
            this.pause_cl.visible = false;
            this.upg_cl.visible = false;
            this.stat_cl.visible = false;
            this.load_slots();
            this.init_stat_slot();
            this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
            this.calendar_cl.visible = false;
            this.set_next_bt_frame();
            this.train_9.table_cl.gotoAndStop(1);
            this.train_10.table_cl.gotoAndStop(2);
            this.train_11.table_cl.gotoAndStop(3);
            this.train_12.table_cl.gotoAndStop(4);
            i = 1;
            while (i <= 12)
            {
                
                this["train_" + i].cat_cl.visible = false;
                this["train_" + i].cat_cl.cat1.gotoAndStop(1);
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            i = 1;
            while (i <= 4)
            {
                
                this.set_to_train(i, Main.sav.data["cat_place_" + i], 0);
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            this.talk_9.gotoAndStop("clear_frame");
            this.talk_10.gotoAndStop("clear_frame");
            this.talk_11.gotoAndStop("clear_frame");
            this.talk_12.gotoAndStop("clear_frame");
            if (Main.sav.data.show_season_finish_playoff == 1)
            {
                Main.sav.data.show_season_finish_playoff = 0;
                if (Main.sav.data.playoff == 1)
                {
                    this.result_season_cl = _sp(paper_new_mc, this.zone_tuto, 91, 40);
                    this.result_season_cl.pic_cl.gotoAndStop(1);
                    this.result_season_cl.news_tx.text = "联盟半决赛即将开战!";
                    this.result_season_cl.paper_cl.data_tx.text = this.date_all;
                    this._app._so.load_by_name(paper_so);
                }
                else
                {
                    this.result_season_cl = _sp(panel_view_not_hit_mc, this.zone_tuto, 325, 170);
                    this.result_season_cl.des_tx.text = "您得到了" + Main.sav.data.place_won_kitty + "名.多多训练";
                }
                this._app._so.load_by_name(paper_so);
                this.paper_ex = true;
                this.delete2_f();
                stage.addEventListener(MouseEvent.CLICK, this.click_result_f);
            }
            else if (Main.sav.data.show_season_finish == 1)
            {
                Main.sav.data.show_season_finish = 0;
                this.paper_ex = true;
                this.result_season_cl = _sp(paper_new_mc, this.zone_tuto, 91, 40);
                this.result_season_cl.paper_cl.data_tx.text = this.date_all;
                this._app._so.load_by_name(paper_so);
                if (Main.sav.data.new_league == 1)
                {
                    this.result_season_cl.pic_cl.gotoAndStop(2);
                    if (Main.sav.data.league == 3)
                    {
                        this.result_season_cl.news_tx.text = "猫咪队伍晋级比目鱼级!";
                    }
                    else if (Main.sav.data.league == 2)
                    {
                        this.result_season_cl.news_tx.text = "猫咪队伍晋级鲑鳟鱼级!";
                    }
                    else if (Main.sav.data.league == 1)
                    {
                        this.result_season_cl.news_tx.text = "猫咪队伍晋级大鲨鱼级!";
                    }
                    Main.sav.data.new_league = 0;
                }
                else
                {
                    this.result_season_cl.pic_cl.gotoAndStop(1);
                    if (Main.sav.data.league == 4)
                    {
                        this.result_season_cl.news_tx.text = "凤尾鱼级新赛季开启!";
                    }
                    else if (Main.sav.data.league == 3)
                    {
                        this.result_season_cl.news_tx.text = "比目鱼级凤尾鱼级新赛季开启!";
                    }
                    else if (Main.sav.data.league == 2)
                    {
                        this.result_season_cl.news_tx.text = "鲑鳟鱼级新赛季开启!";
                    }
                    else if (Main.sav.data.league == 1)
                    {
                        this.result_season_cl.news_tx.text = "大鲨鱼级新赛季开启!";
                    }
                }
                this.delete2_f();
                stage.addEventListener(MouseEvent.CLICK, this.click_result_f);
            }
            else if (Main.sav.data.end_of_playoff == 1)
            {
                this.paper_ex = true;
                Main.sav.data.end_of_playoff = 0;
                this.result_season_cl = _sp(panel_view_not_hit_mc, this.zone_tuto, 325, 170);
                this.result_season_cl.des_tx.text = "您没有赢得超级杯! \n 多多训练";
                this.delete2_f();
                stage.addEventListener(MouseEvent.CLICK, this.click_result_f);
            }
            if (Main.sav.data.news_paper == 1)
            {
                Main.sav.data.news_paper = 0;
                this.paper_ex = true;
                if (Main.sav.data.playoff == 0)
                {
                    this.paper_cl = _sp(paper_mc, this.zone_tuto, 300, 180);
                    this.paper_cl.news_cl.gotoAndStop((_rnd(4) + 1));
                    this.paper_cl.data_tx.text = this.date_all;
                    this._app._so.load_by_name(paper_so);
                    if (Main.sav.data.result == 1)
                    {
                        this.paper_cl.news_cl.scaleX = -Math.abs(this.paper_cl.news_cl.scaleX);
                        if (Main.sav.data.last_enemy == 2)
                        {
                            this.paper_cl.r_tx.text = "猫咪战胜了狐狸!";
                            this.load_to_news(1, 3);
                        }
                        else
                        {
                            this.paper_cl.r_tx.text = "猫咪战胜了浣熊!";
                            this.load_to_news(1, 2);
                        }
                    }
                    else if (Main.sav.data.last_enemy == 2)
                    {
                        this.paper_cl.r_tx.text = "狐狸战胜了猫咪!";
                        this.load_to_news(3, 1);
                    }
                    else
                    {
                        this.paper_cl.r_tx.text = "浣熊战胜了猫咪!";
                        this.load_to_news(2, 1);
                    }
                    this.paper_cl.fish_tx.text = "+" + Main.sav.data.earn_fish;
                    this.paper_cl.pts_tx.text = "+" + Main.sav.data.earn_pts;
                }
                else
                {
                    this.paper_cl = _sp(paper_new_mc, this.zone_tuto, 91, 40);
                    this.paper_cl.pic_cl.gotoAndStop(1);
                    this.paper_cl.paper_cl.data_tx.text = this.date_all;
                    this._app._so.load_by_name(paper_so);
                    if (Main.sav.data.playoff_round == 2)
                    {
                        this.paper_cl.news_tx.text = "联盟决赛即将开战!";
                    }
                    else if (Main.sav.data.playoff_round == 3)
                    {
                        this.paper_cl.news_tx.text = "下周即将举行冠军联盟总决赛!";
                    }
                }
                this.delete2_f();
                stage.addEventListener(MouseEvent.CLICK, this.click_paper_f);
            }
            if (this.ex_in_place(7) == 1)
            {
                this.doctor_cl.gotoAndStop(2);
            }
            else if (this.ex_in_place(8) == 1)
            {
                this.doctor_cl.gotoAndStop(3);
            }
            else
            {
                this.doctor_cl.gotoAndStop(1);
            }
            i2 = 1;
            while (i2 <= 6)
            {
                
                this["train_" + i2].coach_cl.visible = false;
                var _loc_2:* = i2 + 1;
                i2 = _loc_2;
            }
            this.pointer1.gotoAndStop(2);
            this.pointer2.gotoAndStop(3);
            this.pointer3.gotoAndStop(1);
            this.init_tr();
            if (this.paper_ex == false)
            {
                this.add_tuto4();
            }
            this.remove_gold(0);
            this.check_prices();
            return;
        }// end function

        function load_to_news(param1, param2)
        {
            if (param1 == 1)
            {
                param1 = 1;
            }
            else if (param1 == 2)
            {
                param1 = 5;
            }
            else
            {
                param1 = 9;
            }
            if (param2 == 1)
            {
                param2 = 1;
            }
            else if (param2 == 2)
            {
                param2 = 5;
            }
            else
            {
                param2 = 9;
            }
            rnd_for = _rnd(4) + 1;
            rnd_for2 = _rnd(4) + 1;
            if (param1 == 1)
            {
                this.dress_up2(param1, this.paper_cl.news_cl.cat1, Main.sav.data["cat_dress_" + rnd_for]);
                this.dress_up2(param2, this.paper_cl.news_cl.cat2, this._info.got_skin(Main.sav.data.last_enemy_id * 4 - 8 + rnd_for2));
            }
            else
            {
                this.dress_up2(param2, this.paper_cl.news_cl.cat2, Main.sav.data["cat_dress_" + rnd_for]);
                this.dress_up2(param1, this.paper_cl.news_cl.cat1, this._info.got_skin(Main.sav.data.last_enemy_id * 4 - 8 + rnd_for2));
            }
            return;
        }// end function

        function add_function()
        {
            addEventListener(Event.ENTER_FRAME, this.game_f);
            stage.addEventListener(MouseEvent.CLICK, this.click_f);
            stage.addEventListener(MouseEvent.MOUSE_DOWN, this.drag_m_down_f);
            stage.addEventListener(MouseEvent.MOUSE_UP, this.drag_m_up_f);
            return;
        }// end function

        function upgate_season()
        {
            if (Main.sav.data.new_league == 1)
            {
                if (Main.sav.data.league > 1)
                {
                    (Main.sav.data.league - 1);
                }
                if (Main.sav.data.league == 3)
                {
                    Main.sav.data.enemy_start_level = 6;
                    Main.sav.data.season_koff = 5;
                    Main.sav.data.chance_injury = 93;
                }
                else if (Main.sav.data.league == 2)
                {
                    Main.sav.data.enemy_start_level = 11;
                    Main.sav.data.season_koff = 10;
                    Main.sav.data.chance_injury = 91;
                }
                else if (Main.sav.data.league == 1)
                {
                    Main.sav.data.enemy_start_level = 16;
                    Main.sav.data.season_koff = 15;
                    Main.sav.data.chance_injury = 89;
                }
            }
            Main.sav.data.playoff = 0;
            Main.sav.data.rest = 0;
            Main.sav.data.season_round = 0;
            Main.sav.data.week = 1;
            Main.sav.data.show_season_finish = 1;
            Main.sav.data.news_paper = 0;
            i = 1;
            while (i <= 22)
            {
                
                Main.sav.data["team_games_" + i] = 0;
                Main.sav.data["team_w_" + i] = 0;
                Main.sav.data["team_d_" + i] = 0;
                Main.sav.data["team_pts_" + i] = 0;
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            i = 2;
            while (i <= 22)
            {
                
                i2 = 2;
                while (i2 <= 22)
                {
                    
                    if (i != i2)
                    {
                        Main.sav.data["match_" + i + "_vs_" + i2] = 0;
                        Main.sav.data["match_" + i2 + "_vs_" + i] = 0;
                    }
                    var _loc_2:* = i2 + 1;
                    i2 = _loc_2;
                }
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            Main.sav.flush();
            return;
        }// end function

        function set_next_bt_frame()
        {
            if (Main.sav.data.week == 7)
            {
                if (Main.sav.data.rest == 1)
                {
                    this.next_bt.gotoAndStop(6);
                }
                else if (Main.sav.data.playoff == 1)
                {
                    this.next_bt.gotoAndStop(2 + Main.sav.data.playoff_round);
                }
                else
                {
                    this.next_bt.gotoAndStop(2);
                }
            }
            else
            {
                this.next_bt.gotoAndStop(1);
            }
            return;
        }// end function

        function init_tr()
        {
            i2 = 1;
            while (i2 <= 6)
            {
                
                if (this.ex_in_place(i2) == 1)
                {
                    if (i2 == 1 || i2 == 2)
                    {
                        if (Main.sav.data.stuff_level_1 == 7)
                        {
                            this["train_" + i2].cat_cl.cat1.gotoAndStop(7);
                        }
                        else
                        {
                            this["train_" + i2].cat_cl.cat1.gotoAndStop(5);
                        }
                        this["train_" + i2].cat_cl.cat1.cat2.tr_cl.gotoAndStop(Main.sav.data.stuff_level_1);
                        this.dress_up(this.cat_type, this["train_" + i2].cat_cl.cat1.cat2);
                    }
                    if (i2 == 3 || i2 == 4)
                    {
                        this["train_" + i2].cat_cl.cat1.cat2.tr_cl.gotoAndStop(Main.sav.data.stuff_level_2);
                    }
                    if (i2 == 5 || i2 == 6)
                    {
                        this["train_" + i2].cat_cl.cat1.cat2.tr_cl.gotoAndStop(Main.sav.data.stuff_level_3);
                    }
                }
                if (i2 == 1 || i2 == 2)
                {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_1);
                }
                if (i2 == 3 || i2 == 4)
                {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_2);
                }
                if (i2 == 5 || i2 == 6)
                {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_3);
                }
                var _loc_2:* = i2 + 1;
                i2 = _loc_2;
            }
            return;
        }// end function

        function init_tr2(param1)
        {
            i2 = param1;
            while (i2 <= param1)
            {
                
                if (this.ex_in_place(i2) == 1)
                {
                    if (i2 == 1 || i2 == 2)
                    {
                        if (Main.sav.data.stuff_level_1 == 7)
                        {
                            this["train_" + i2].cat_cl.cat1.gotoAndStop(7);
                        }
                        else
                        {
                            this["train_" + i2].cat_cl.cat1.gotoAndStop(5);
                        }
                        this["train_" + i2].cat_cl.cat1.cat2.tr_cl.gotoAndStop(Main.sav.data.stuff_level_1);
                        this.dress_up(this.cat_type, this["train_" + i2].cat_cl.cat1.cat2);
                    }
                    if (i2 == 3 || i2 == 4)
                    {
                        this["train_" + i2].cat_cl.cat1.cat2.tr_cl.gotoAndStop(Main.sav.data.stuff_level_2);
                    }
                    if (i2 == 5 || i2 == 6)
                    {
                        this["train_" + i2].cat_cl.cat1.cat2.tr_cl.gotoAndStop(Main.sav.data.stuff_level_3);
                    }
                }
                if (i2 == 1 || i2 == 2)
                {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_1);
                }
                if (i2 == 3 || i2 == 4)
                {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_2);
                }
                if (i2 == 5 || i2 == 6)
                {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_3);
                }
                var _loc_3:* = i2 + 1;
                i2 = _loc_3;
            }
            return;
        }// end function

        function load_slots()
        {
            i = 1;
            while (i <= 4)
            {
                
                this["slot_" + i].gotoAndStop(i);
                this["slot_" + i].p2.hp_tx.text = int(Main.sav.data["cat_hp_" + i] / Main.sav.data["cat_hp2_" + i] * 100).toString() + "%";
                this["slot_" + i].p2.hp_tx.visible = false;
                this["slot_" + i].p2.scale_cl.gotoAndStop(int(Main.sav.data["cat_hp_" + i] / Main.sav.data["cat_hp2_" + i] * 100));
                this["slot_" + i].p2.stat_1.gotoAndStop(int(Main.sav.data["cat_stat1_" + i] / Main.sav.data["cat_stat1_2_" + i] * 100));
                this["slot_" + i].p2.stat_2.gotoAndStop(int(Main.sav.data["cat_stat2_" + i] / Main.sav.data["cat_stat2_2_" + i] * 100));
                this["slot_" + i].p2.stat_3.gotoAndStop(int(Main.sav.data["cat_stat3_" + i] / Main.sav.data["cat_stat3_2_" + i] * 100));
                this["slot_" + i].p2.stat_hp_tx.text = Main.sav.data["cat_hp2_" + i];
                this["slot_" + i].p2.stat_attack_tx.text = Main.sav.data["cat_attack_" + i];
                this["slot_" + i].p2.stat_speed_tx.text = Main.sav.data["cat_speed_level_" + i];
                this.n_of_i = 0;
                if (Main.sav.data["cat_injury1_" + i] == 1)
                {
                    this["slot_" + i].p2.injury_1.visible = true;
                    this["slot_" + i].p2.injury_1.gotoAndStop(int(Main.sav.data["cat_injury1_time_" + i] / this.injury2 * 100));
                    var _loc_1:* = this;
                    var _loc_2:* = this.n_of_i + 1;
                    _loc_1.n_of_i = _loc_2;
                }
                else
                {
                    this["slot_" + i].p2.injury_1.visible = false;
                }
                if (Main.sav.data["cat_injury2_" + i] == 1)
                {
                    this["slot_" + i].p2.injury_2.visible = true;
                    this["slot_" + i].p2.injury_2.gotoAndStop(int(Main.sav.data["cat_injury2_time_" + i] / this.injury2 * 100));
                    var _loc_1:* = this;
                    var _loc_2:* = this.n_of_i + 1;
                    _loc_1.n_of_i = _loc_2;
                }
                else
                {
                    this["slot_" + i].p2.injury_2.visible = false;
                }
                if (Main.sav.data["cat_injury3_" + i] == 1)
                {
                    this["slot_" + i].p2.injury_3.visible = true;
                    this["slot_" + i].p2.injury_3.gotoAndStop(int(Main.sav.data["cat_injury3_time_" + i] / this.injury2 * 100));
                    var _loc_1:* = this;
                    var _loc_2:* = this.n_of_i + 1;
                    _loc_1.n_of_i = _loc_2;
                }
                else
                {
                    this["slot_" + i].p2.injury_3.visible = false;
                }
                if (this.n_of_i == 0)
                {
                    this["slot_" + i].p2.lock_hp.visible = false;
                }
                else
                {
                    this["slot_" + i].p2.lock_hp.visible = true;
                    this["slot_" + i].p2.lock_hp.gotoAndStop(this.n_of_i);
                }
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            return;
        }// end function

        function init_stat_slot()
        {
            if (Main.sav.data.playoff == 0)
            {
                this.stat_cl.playoff_bt.visible = false;
                this.stat_cl.playoff_bt.x = 1282;
                this.stat_cl.close_bt.x = 325;
            }
            else
            {
                this.stat_cl.playoff_bt.visible = true;
                this.stat_cl.playoff_bt.x = 382;
                this.stat_cl.close_bt.x = 262;
            }
            this.arr_le.splice(0, this.arr_le.length);
            this.arr_sort.splice(0, this.arr_sort.length);
            this.place_dy = 1;
            i = 1;
            while (i <= 6)
            {
                
                this.arr_sort.push(100);
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            i = 1;
            while (i <= 6)
            {
                
                if (i != 1)
                {
                    this.arr_le.push(Main.sav.data["team_pts_" + (Main.sav.data.season_koff + i)]);
                }
                else
                {
                    this.arr_le.push(Main.sav.data["team_pts_" + i]);
                }
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            i = 0;
            while (i < 6)
            {
                
                rnd_for = 0;
                i2 = 0;
                while (i2 < 6)
                {
                    
                    if (this.arr_le[i] > this.arr_le[i2])
                    {
                        var _loc_2:* = rnd_for + 1;
                        rnd_for = _loc_2;
                    }
                    var _loc_2:* = i2 + 1;
                    i2 = _loc_2;
                }
                while (this.arr_sort[rnd_for] != 100)
                {
                    
                    var _loc_2:* = rnd_for + 1;
                    rnd_for = _loc_2;
                }
                this.arr_sort[rnd_for] = i + 1;
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            this.arr_sort.reverse();
            i = 0;
            while (i < this.arr_sort.length)
            {
                
                this.stat_cl.slots_cl["slot_" + (1 + i)].id_tx.text = (1 + i).toString();
                this.stat_cl.slots_cl["slot_" + (1 + i)].y = -268 + 28 * i;
                if (this.arr_sort[i] != 1)
                {
                    this.stat_cl.slots_cl["slot_" + (1 + i)].bg_cl.gotoAndStop(2);
                }
                else
                {
                    this.stat_cl.slots_cl["slot_" + (1 + i)].bg_cl.gotoAndStop(1);
                    this.place_dy = i;
                }
                if (this.arr_sort[i] != 1)
                {
                    this.stat_cl.slots_cl["slot_" + (1 + i)].title_tx.text = this._info_enemy.got_title(Main.sav.data.season_koff + this.arr_sort[i]);
                    this.stat_cl.slots_cl["slot_" + (1 + i)].w_tx.text = Main.sav.data["team_w_" + (Main.sav.data.season_koff + this.arr_sort[i])];
                    this.stat_cl.slots_cl["slot_" + (1 + i)].d_tx.text = Main.sav.data["team_d_" + (Main.sav.data.season_koff + this.arr_sort[i])];
                    this.stat_cl.slots_cl["slot_" + (1 + i)].pts_tx.text = Main.sav.data["team_pts_" + (Main.sav.data.season_koff + this.arr_sort[i])];
                }
                else
                {
                    this.stat_cl.slots_cl["slot_" + (1 + i)].title_tx.text = Main.sav.data.team_name_1;
                    this.stat_cl.slots_cl["slot_" + (1 + i)].w_tx.text = Main.sav.data["team_w_1"];
                    this.stat_cl.slots_cl["slot_" + (1 + i)].d_tx.text = Main.sav.data["team_d_1"];
                    this.stat_cl.slots_cl["slot_" + (1 + i)].pts_tx.text = Main.sav.data["team_pts_1"];
                }
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            i = 1;
            while (i <= 4)
            {
                
                if (Main.sav.data.playoff == 0)
                {
                    this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = "unknown";
                    this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = "unknown";
                    this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = "0";
                    this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = "0";
                }
                else if (Main.sav.data.playoff == 1)
                {
                    if (Main.sav.data.playoff_round >= 1)
                    {
                        if (i == 1)
                        {
                            this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = Main.sav.data.team_name_1;
                            this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_2);
                            this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = Main.sav.data.count_semi_1_1;
                            this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = Main.sav.data.count_semi_1_2;
                        }
                        else if (i == 2)
                        {
                            this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_3);
                            this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_4);
                            this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = Main.sav.data.count_semi_2_1;
                            this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = Main.sav.data.count_semi_2_2;
                        }
                    }
                    if (Main.sav.data.playoff_round >= 2)
                    {
                        if (i == 3)
                        {
                            this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = Main.sav.data.team_name_1;
                            this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_5);
                            this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = Main.sav.data.count_final_1;
                            this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = Main.sav.data.count_final_2;
                        }
                    }
                    if (Main.sav.data.playoff_round >= 3)
                    {
                        if (i == 4)
                        {
                            this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = Main.sav.data.team_name_1;
                            this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = "0";
                            this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = "0";
                        }
                    }
                }
                if (i == 4)
                {
                    this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = this._info_enemy.got_title(22);
                }
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            return;
        }// end function

        function ex_in_place(param1)
        {
            i4 = 1;
            while (i4 <= 4)
            {
                
                if (Main.sav.data["cat_place_" + i4] == param1)
                {
                    this.cat_type = i4;
                    return 1;
                }
                var _loc_3:* = i4 + 1;
                i4 = _loc_3;
            }
            return 0;
        }// end function

        function ex2_in_place(param1)
        {
            i4 = 1;
            while (i4 <= 4)
            {
                
                if (Main.sav.data["cat_place_" + i4] == param1)
                {
                    return 1;
                }
                var _loc_3:* = i4 + 1;
                i4 = _loc_3;
            }
            return 0;
        }// end function

        function set_to_train(param1, param2, param3)
        {
            this.no_set_train = true;
            if (param2 >= 9 || param2 != 7 && param2 != 8 && Main.sav.data["cat_hp_" + param1] > int(Main.sav.data["cat_hp2_" + param1] * 0.25) || (param2 == 7 || param2 == 8) && (Main.sav.data["cat_injury1_" + param1] == 1 || Main.sav.data["cat_injury2_" + param1] == 1 || Main.sav.data["cat_injury3_" + param1] == 1))
            {
                if (param2 >= 7 || (param2 == 1 || param2 == 2) && Main.sav.data["cat_attack_level_" + param1] < 99 || (param2 == 3 || param2 == 4) && Main.sav.data["cat_hp_level_" + param1] < 99 || (param2 == 5 || param2 == 6) && Main.sav.data["cat_speed_level_" + param1] < 99)
                {
                    this.hide_from_train(Main.sav.data["cat_place_" + param1]);
                    i5 = 1;
                    while (i5 <= 6)
                    {
                        
                        this["train_" + i5].coach_cl.visible = false;
                        var _loc_5:* = i5 + 1;
                        i5 = _loc_5;
                    }
                    if (param2 == 7)
                    {
                        this.doctor_cl.gotoAndStop(2);
                    }
                    else if (param2 == 8)
                    {
                        this.doctor_cl.gotoAndStop(3);
                    }
                    else if (param2 < 7)
                    {
                        this["train_" + param2].coach_cl.visible = true;
                    }
                    this["train_" + param2].gotoAndStop(2);
                    this["train_" + param2].cat_cl.visible = true;
                    this.no_set_train = false;
                    Main.sav.data["cat_place_" + param1] = param2;
                    this.yes_new_place = true;
                    if (param2 == 7 || param2 == 8)
                    {
                        if (param3 == 1)
                        {
                            this._app._so.load_by_name(to_bed_so);
                        }
                        this["train_" + param2].cat_cl.cat1.gotoAndStop(2);
                    }
                    else if (param2 == 5 || param2 == 6)
                    {
                        if (param3 == 1)
                        {
                            this._app._so.load_by_name(train1_so);
                        }
                        this["train_" + param2].tr_cl.visible = false;
                        this["train_" + param2].cat_cl.cat1.gotoAndStop(3);
                        this["train_" + param2].cat_cl.cat1.cat2.tr_cl.line_of_cl.visible = false;
                    }
                    else if (param2 == 3 || param2 == 4)
                    {
                        this["train_" + param2].tr_cl.visible = false;
                        this["train_" + param2].coach_cl.gotoAndPlay(1);
                        this["train_" + param2].cat_cl.cat1.gotoAndStop(4);
                        if (param3 == 1)
                        {
                            this._app._so.load_by_name(train2_so);
                        }
                    }
                    else if (param2 == 1 || param2 == 2)
                    {
                        this["train_" + param2].tr_cl.visible = false;
                        if (param3 == 1)
                        {
                            this._app._so.load_by_name(train3_so);
                        }
                        if (Main.sav.data.stuff_level_1 == 7)
                        {
                            this["train_" + param2].cat_cl.cat1.gotoAndStop(7);
                        }
                        else
                        {
                            this["train_" + param2].cat_cl.cat1.gotoAndStop(5);
                        }
                        this["train_" + param2].coach_cl.gotoAndPlay(1);
                    }
                    else
                    {
                        if (param3 == 1)
                        {
                            this._app._so.load_by_name(to_table_so);
                        }
                        this["train_" + param2].tr_cl.visible = false;
                        this["train_" + param2].cat_cl.cat1.gotoAndStop(6);
                        this["train_" + param2].cat_cl.cat1.cat2.gotoAndPlay(_rnd(30) + 109);
                    }
                    this.dress_up(param1, this["train_" + param2].cat_cl.cat1.cat2);
                    this.init_tr2(param2);
                    this.check_set_coach();
                }
            }
            if (this.no_set_train)
            {
                if (Main.sav.data["cat_place_" + param1] >= 9)
                {
                    if (param2 <= 6 && Main.sav.data["cat_hp_" + param1] <= int(Main.sav.data["cat_hp2_" + param1] * 0.25))
                    {
                        this["talk_" + Main.sav.data["cat_place_" + param1]].gotoAndStop("clear_frame");
                        this["talk_" + Main.sav.data["cat_place_" + param1]].gotoAndStop(1);
                    }
                    else if ((param2 == 7 || param2 == 8) && (Main.sav.data["cat_injury1_" + param1] == 0 && Main.sav.data["cat_injury2_" + param1] == 0 && Main.sav.data["cat_injury3_" + param1] == 0))
                    {
                        this["talk_" + Main.sav.data["cat_place_" + param1]].gotoAndStop("clear_frame");
                        this["talk_" + Main.sav.data["cat_place_" + param1]].gotoAndStop(3);
                    }
                }
            }
            return;
        }// end function

        function hide_from_train(param1)
        {
            this["train_" + param1].cat_cl.visible = false;
            this["train_" + param1].gotoAndStop(1);
            if (param1 < 7)
            {
                this["train_" + param1].coach_cl.visible = false;
            }
            if (param1 < 7 || param1 > 8)
            {
                this["train_" + param1].tr_cl.visible = true;
            }
            return;
        }// end function

        function check_set_coach()
        {
            this.coach_stay_cl.visible = true;
            i6 = 1;
            while (i6 <= 6)
            {
                
                if (this.ex2_in_place(i6) == 1)
                {
                    this.coach_stay_cl.visible = false;
                    break;
                }
                var _loc_2:* = i6 + 1;
                i6 = _loc_2;
            }
            return;
        }// end function

        function game_f(event:Event)
        {
            i = 0;
            while (i < this.arr_last_frame_skin.length)
            {
                
                if (this.arr_last_frame_skin[i].currentFrame == this.arr_last_frame_skin[i].totalFrames)
                {
                    this.arr_last_frame_zone[i].removeChild(this.arr_last_frame_skin[i]);
                    this.arr_last_frame_skin.splice(i, 1);
                    this.arr_last_frame_zone.splice(i, 1);
                    break;
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            var _loc_2:* = this;
            this.spy_time = (this.spy_time - 1);
            _loc_2.spy_time = this.spy_time - 1;
            if (this.spy_time < 0)
            {
                this.grass_cl.spy_cl.play();
                this.spy_time = 2400 + _rnd(9000);
            }
            if (this.drag_mode)
            {
                this.cat_drag.x = mouseX;
                this.cat_drag.y = mouseY;
            }
            if (this.upg_ex == false && this.stat_ex == false && this.drag_mode == false)
            {
                i = 1;
                while (i <= 4)
                {
                    
                    if (_mo(this["slot_" + i].telo))
                    {
                        this["slot_" + i].p2.hp_tx.visible = true;
                    }
                    else
                    {
                        this["slot_" + i].p2.hp_tx.visible = false;
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            if (!this.drag_mode)
            {
                if (_mo(this.next_bt))
                {
                    this.calendar_cl.visible = true;
                    if (Main.sav.data.week != 7)
                    {
                        this.calendar_cl.gotoAndStop(1);
                    }
                    else
                    {
                        this.calendar_cl.gotoAndStop(2);
                        if (Main.sav.data.rest == 0)
                        {
                            if (Main.sav.data.playoff == 1)
                            {
                                if (Main.sav.data.playoff_round == 1)
                                {
                                    i_in = this._info_enemy.got_title(Main.sav.data.off_team_2);
                                }
                                else if (Main.sav.data.playoff_round == 2)
                                {
                                    i_in = this._info_enemy.got_title(Main.sav.data.off_team_5);
                                }
                                else
                                {
                                    i_in = this._info_enemy.got_title(22);
                                }
                            }
                            else
                            {
                                i_in = this._info_enemy.got_title(this._app.arr_enemy_row[Main.sav.data.season_round + Main.sav.data.season_koff]);
                            }
                            if (i_in.length < 10)
                            {
                                this.calendar_cl.bg_cl.gotoAndStop(1);
                            }
                            else if (i_in.length < 14)
                            {
                                this.calendar_cl.bg_cl.gotoAndStop(2);
                            }
                            else
                            {
                                this.calendar_cl.bg_cl.gotoAndStop(3);
                            }
                            this.calendar_cl.title_tx.text = i_in;
                        }
                        else
                        {
                            this.calendar_cl.gotoAndStop(3);
                        }
                    }
                }
                else
                {
                    this.calendar_cl.visible = false;
                }
            }
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            if (this.pre_battle_ex)
            {
                if (_mo(this.pre_battle_cl.no))
                {
                    this.pre_battle_ex = false;
                    this.zone_tuto.removeChild(this.pre_battle_cl);
                    this._app._so.load_by_name(click_so);
                }
                else if (_mo(this.pre_battle_cl.yes))
                {
                    this._app._so.load_by_name(click_so);
                    this.zone_tuto.removeChild(this.pre_battle_cl);
                    this.to_battle = 0;
                    this.train_cats();
                    this.delete2_f();
                    addEventListener(Event.ENTER_FRAME, this.to_battle_f);
                    this._app.train_mode = false;
                }
            }
            else
            {
                if (this.upg_ex)
                {
                    if (_mo(this.upg_cl.close_bt))
                    {
                        this.upg_cl.visible = false;
                        this.upg_ex = false;
                        this._app._so.load_by_name(click_so);
                    }
                    if (_mo(this.upg_bt))
                    {
                        this.upg_cl.visible = false;
                        this.upg_ex = false;
                        this._app._so.load_by_name(click_so);
                    }
                    i = 1;
                    while (i <= 5)
                    {
                        
                        if (_mo(this.upg_cl["slot_" + i].buy_cl))
                        {
                            if (Main.sav.data.gold >= Main.sav.data["stuff_price_" + i])
                            {
                                if (i < 4 && Main.sav.data["stuff_level_" + i] < 7 || i == 4 && Main.sav.data["stuff_level_" + i] < 5 || i == 5 && Main.sav.data["stuff_level_" + i] < 3)
                                {
                                    this.remove_gold(Main.sav.data["stuff_price_" + i]);
                                    var _loc_2:* = Main.sav.data;
                                    var _loc_3:* = "stuff_level_" + i;
                                    var _loc_4:* = _loc_2["stuff_level_" + i] + 1;
                                    _loc_2[_loc_3] = _loc_4;
                                    this._app._so.load_by_name(buy_so);
                                    if (i < 4)
                                    {
                                        _loc_2["stuff_price_" + i] = int(_loc_2["stuff_price_" + i] * 1.6);
                                    }
                                    else if (i == 4)
                                    {
                                        _loc_2["stuff_price_" + i] = int(_loc_2["stuff_price_" + i] * 2.5);
                                    }
                                    else if (i == 5)
                                    {
                                        _loc_2["stuff_price_" + i] = int(_loc_2["stuff_price_" + i] * 2.5);
                                    }
                                    this.init_tr();
                                    this.load_upg();
                                    switch(_loc_2["stuff_level_" + i])
                                    {
                                        case 2:
                                        {
                                            break;
                                        }
                                        case 3:
                                        {
                                            break;
                                        }
                                        case 4:
                                        {
                                            break;
                                        }
                                        case 5:
                                        {
                                            break;
                                        }
                                        case 6:
                                        {
                                            break;
                                        }
                                        case 7:
                                        {
                                            break;
                                        }
                                        default:
                                        {
                                            break;
                                        }
                                    }
                                    if (i == 4)
                                    {
                                    }
                                    else if (i == 5)
                                    {
                                    }
                                    Main.sav.flush();
                                    break;
                                }
                            }
                        }
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                }
                else if (this.stat_ex)
                {
                    if (_mo(this.stat_cl.close_bt))
                    {
                        this._app._so.load_by_name(click_so);
                        this.stat_cl.visible = false;
                        this.stat_ex = false;
                    }
                    if (_mo(this.stat_cl.playoff_bt))
                    {
                        if (this.stat_cl.playoff_cl.visible == false)
                        {
                            this.stat_cl.line_about_cl.visible = false;
                            this.stat_cl.slots_cl.visible = false;
                            this.stat_cl.playoff_cl.visible = true;
                            this.stat_cl.title_cl.gotoAndStop(5);
                            this.stat_cl.playoff_bt.gotoAndStop(2);
                        }
                        else
                        {
                            this.stat_cl.line_about_cl.visible = true;
                            this.stat_cl.slots_cl.visible = true;
                            this.stat_cl.playoff_cl.visible = false;
                            this.stat_cl.title_cl.gotoAndStop(Main.sav.data.league);
                            this.stat_cl.playoff_bt.gotoAndStop(1);
                        }
                    }
                }
                else
                {
                    if (_mo(this.gong_cl))
                    {
                        this._app._so.load_by_name2(gong_so, 50);
                        rnd_for = 0;
                        i = 1;
                        while (i <= 8)
                        {
                            
                            if (this.ex_in_place(i) == 1)
                            {
                                rnd_for = 1;
                                break;
                            }
                            var _loc_3:* = i + 1;
                            i = _loc_3;
                        }
                        if (rnd_for == 1)
                        {
                            this.gong_cl.gotoAndPlay(2);
                            this.to_table(1);
                            this.to_table(2);
                            this.to_table(3);
                            this.to_table(4);
                        }
                        else
                        {
                            this.gong_cl.gotoAndPlay(2);
                            i = 1;
                            while (i <= 4)
                            {
                                
                                this.found_train = false;
                                if (Main.sav.data["cat_injury1_" + i] == 1 || Main.sav.data["cat_injury2_" + i] == 1 || Main.sav.data["cat_injury3_" + i] == 1)
                                {
                                    if (this.ex_in_place(7) == 0)
                                    {
                                        this.set_to_train(i, 7, 0);
                                        this.found_train = true;
                                    }
                                    else if (this.ex_in_place(8) == 0)
                                    {
                                        this.set_to_train(i, 8, 0);
                                        this.found_train = true;
                                    }
                                }
                                if (this.found_train == false)
                                {
                                    if (Main.sav.data["cat_attack_level_" + i] <= Main.sav.data["cat_hp_level_" + i] && Main.sav.data["cat_attack_level_" + i] <= Main.sav.data["cat_speed_level_" + i])
                                    {
                                        if (this.ex_in_place(1) == 0)
                                        {
                                            this.set_to_train(i, 1, 0);
                                            this.found_train = true;
                                        }
                                        else if (this.ex_in_place(2) == 0)
                                        {
                                            this.set_to_train(i, 2, 0);
                                            this.found_train = true;
                                        }
                                    }
                                }
                                if (this.found_train == false)
                                {
                                    if (Main.sav.data["cat_hp_level_" + i] <= Main.sav.data["cat_attack_level_" + i] && Main.sav.data["cat_hp_level_" + i] <= Main.sav.data["cat_speed_level_" + i])
                                    {
                                        if (this.ex_in_place(3) == 0)
                                        {
                                            this.set_to_train(i, 3, 0);
                                            this.found_train = true;
                                        }
                                        else if (this.ex_in_place(4) == 0)
                                        {
                                            this.set_to_train(i, 4, 0);
                                            this.found_train = true;
                                        }
                                    }
                                }
                                if (this.found_train == false)
                                {
                                    if (this.ex_in_place(5) == 0)
                                    {
                                        this.set_to_train(i, 5, 0);
                                        this.found_train = true;
                                    }
                                    else if (this.ex_in_place(6) == 0)
                                    {
                                        this.set_to_train(i, 6, 0);
                                        this.found_train = true;
                                    }
                                }
                                if (this.found_train == false)
                                {
                                    if (this.ex_in_place(3) == 0)
                                    {
                                        this.set_to_train(i, 3, 0);
                                        this.found_train = true;
                                    }
                                    else if (this.ex_in_place(4) == 0)
                                    {
                                        this.set_to_train(i, 4, 0);
                                        this.found_train = true;
                                    }
                                }
                                if (this.found_train == false)
                                {
                                    if (this.ex_in_place(1) == 0)
                                    {
                                        this.set_to_train(i, 1, 0);
                                        this.found_train = true;
                                    }
                                    else if (this.ex_in_place(2) == 0)
                                    {
                                        this.set_to_train(i, 2, 0);
                                        this.found_train = true;
                                    }
                                }
                                if (this.found_train == false)
                                {
                                    this.to_table(i);
                                }
                                var _loc_3:* = i + 1;
                                i = _loc_3;
                            }
                        }
                    }
                    if (_mo(this.next_bt))
                    {
                        this._app._so.load_by_name(next_day_so);
                        if (Main.sav.data.week == 7)
                        {
                            if (!this.pre_battle_ex)
                            {
                                this.pre_battle_cl = _sp(pre_battle_mc, this.zone_tuto, 330, 230);
                                this.pre_battle_ex = true;
                            }
                            if (Main.sav.data.rest == 1)
                            {
                                this.pre_battle_cl.gotoAndStop(2);
                            }
                            else
                            {
                                this.pre_battle_cl.gotoAndStop(1);
                            }
                        }
                        else
                        {
                            var _loc_2:* = Main.sav.data;
                            var _loc_3:* = _loc_2.week + 1;
                            _loc_2.week = _loc_3;
                            this.calendar_cl.left_tx.text = (7 - _loc_2.week).toString();
                            this.set_next_bt_frame();
                            this.train_cats();
                            this.load_slots();
                        }
                    }
                    if (_mo(this.stat_bt))
                    {
                        this._app._so.load_by_name(click_so);
                        this.stat_cl.visible = true;
                        if (_loc_2.playoff == 0)
                        {
                            this.stat_cl.line_about_cl.visible = true;
                            this.stat_cl.slots_cl.visible = true;
                            this.stat_cl.playoff_cl.visible = false;
                            this.stat_cl.title_cl.gotoAndStop(_loc_2.league);
                            this.stat_cl.playoff_bt.gotoAndStop(1);
                        }
                        else
                        {
                            this.stat_cl.line_about_cl.visible = false;
                            this.stat_cl.slots_cl.visible = false;
                            this.stat_cl.playoff_cl.visible = true;
                            this.stat_cl.title_cl.gotoAndStop(5);
                            this.stat_cl.playoff_bt.gotoAndStop(2);
                        }
                        this.stat_ex = true;
                    }
                    if (_mo(this.upg_bt))
                    {
                        this.upg_cl.visible = true;
                        this.upg_ex = true;
                        this._app._so.load_by_name(click_so);
                        this.load_upg();
                    }
                    if (_mo(this.dress_bt))
                    {
                        this._app._so.load_by_name(click_so);
                        this._app.open_new_screen("dress");
                    }
                }
                i = 1;
                while (i <= 4)
                {
                    
                    if (_mo(this["slot_" + i].p2.injury_1) && _loc_2["cat_injury1_" + i] == 1 || _mo(this["slot_" + i].p2.injury_2) && _loc_2["cat_injury2_" + i] == 1 || _mo(this["slot_" + i].p2.injury_3) && _loc_2["cat_injury3_" + i] == 1)
                    {
                        if (this.ex_in_place(7) == 0)
                        {
                            this.set_to_train(i, 7, 1);
                            break;
                        }
                        else if (this.ex_in_place(8) == 0)
                        {
                            this.set_to_train(i, 8, 1);
                            break;
                        }
                    }
                    if (_mo(this["slot_" + i].to_hp_bt))
                    {
                        if (_loc_2["cat_place_" + i] != 3 && _loc_2["cat_place_" + i] != 4)
                        {
                            if (this.ex_in_place(3) == 0)
                            {
                                this.set_to_train(i, 3, 1);
                                break;
                            }
                            else if (this.ex_in_place(4) == 0)
                            {
                                this.set_to_train(i, 4, 1);
                                break;
                            }
                        }
                    }
                    if (_mo(this["slot_" + i].to_attack_bt))
                    {
                        if (_loc_2["cat_place_" + i] != 1 && _loc_2["cat_place_" + i] != 2)
                        {
                            if (this.ex_in_place(1) == 0)
                            {
                                this.set_to_train(i, 1, 1);
                                break;
                            }
                            else if (this.ex_in_place(2) == 0)
                            {
                                this.set_to_train(i, 2, 1);
                                break;
                            }
                        }
                    }
                    if (_mo(this["slot_" + i].to_speed_bt))
                    {
                        if (_loc_2["cat_place_" + i] != 5 && _loc_2["cat_place_" + i] != 6)
                        {
                            if (this.ex_in_place(5) == 0)
                            {
                                this.set_to_train(i, 5, 1);
                                break;
                            }
                            else if (this.ex_in_place(6) == 0)
                            {
                                this.set_to_train(i, 6, 1);
                                break;
                            }
                        }
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                if (_mo(this.menu_bt_cl))
                {
                    stage.addEventListener(MouseEvent.CLICK, this.click_pause_f);
                    removeEventListener(Event.ENTER_FRAME, this.game_f);
                    stage.removeEventListener(MouseEvent.CLICK, this.click_f);
                    stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.drag_m_down_f);
                    stage.removeEventListener(MouseEvent.MOUSE_UP, this.drag_m_up_f);
                    this.pause_cl.visible = true;
                }
            }
            return;
        }// end function

        function drag_m_down_f(event:MouseEvent)
        {
            if (this.upg_ex == false && this.stat_ex == false && this.pre_battle_ex == false)
            {
                if (this.drag_mode == false)
                {
                    i = 1;
                    while (i <= 12)
                    {
                        
                        if (_mo(this["zone_" + i]))
                        {
                            if (this.ex_in_place(i) == 1)
                            {
                                this.cat_drag = _sp(cat_drag_mc, this.zone_drag, mouseX, mouseY);
                                this.drag_mode = true;
                                this.type_zone = i;
                                this.cat_drag_type = this.cat_type;
                                this.hide_from_train(i);
                                if (i > 6)
                                {
                                    this._app._so.load_by_name(take_cat2_so);
                                }
                                else
                                {
                                    this._app._so.load_by_name(take_cat_so);
                                }
                                this.dress_up(this.cat_type, this.cat_drag.cat1.cat2);
                                break;
                            }
                        }
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                }
            }
            return;
        }// end function

        function drag_m_up_f(event:MouseEvent)
        {
            if (this.drag_mode)
            {
                this.yes_new_place = false;
                i = 1;
                while (i <= 12)
                {
                    
                    if (_mo(this["zone_" + i]))
                    {
                        if (this.ex_in_place(i) == 0)
                        {
                            this.set_to_train(this.cat_type, i, 1);
                            break;
                        }
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                if (this.yes_new_place == false)
                {
                    this.set_to_train(this.cat_drag_type, this.type_zone, 0);
                }
                this.zone_drag.removeChild(this.cat_drag);
                this.drag_mode = false;
            }
            return;
        }// end function

        function click_pause_f(event:MouseEvent)
        {
            if (_mo(this.pause_cl.resume_bt))
            {
                this.pause_cl.visible = false;
                stage.removeEventListener(MouseEvent.CLICK, this.click_pause_f);
                this.add_function();
            }
            if (_mo(this.pause_cl.home_bt))
            {
                this._app.open_new_screen("menu");
            }
            return;
        }// end function

        function click_paper_f(event:MouseEvent)
        {
            if (Main.sav.data.tuto3 == 1)
            {
                Main.sav.data.tuto3 = 2;
                this.tuto_cl = _sp(tuto12_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto12_click_f);
            }
            else
            {
                this.add_tuto4();
            }
            stage.removeEventListener(MouseEvent.CLICK, this.click_paper_f);
            this.zone_tuto.removeChild(this.paper_cl);
            return;
        }// end function

        function click_result_f(event:MouseEvent)
        {
            if (_mo(this.result_season_cl))
            {
                stage.removeEventListener(MouseEvent.CLICK, this.click_result_f);
                if (Main.sav.data.tuto2 == 1)
                {
                    Main.sav.data.tuto2 = 2;
                    this.tuto_cl = _sp(tuto2_mc, this.zone_tuto, 0, 0);
                    addEventListener(Event.ENTER_FRAME, this.tuto2_f);
                    stage.addEventListener(MouseEvent.MOUSE_DOWN, this.tuto2_m_down_f);
                    stage.addEventListener(MouseEvent.MOUSE_UP, this.tuto2_m_up_f);
                }
                else
                {
                    this.add_tuto4();
                }
                this.zone_tuto.removeChild(this.result_season_cl);
            }
            return;
        }// end function

        function to_battle_f(event:Event)
        {
            var _loc_2:* = this;
            this.to_battle = (this.to_battle + 1);
            _loc_2.to_battle = this.to_battle + 1;
            if (this.to_battle > 40)
            {
                removeEventListener(Event.ENTER_FRAME, this.to_battle_f);
                if (Main.sav.data.rest == 1)
                {
                    Main.sav.data.rest = 0;
                    this.upgate_season();
                    this._app.train_mode = false;
                    this._app.open_new_screen("upg");
                }
                else
                {
                    this._app.train_mode = false;
                    this._app.open_new_screen("game");
                }
            }
            return;
        }// end function

        function check_prices()
        {
            this.sign_cl.visible = false;
            i3 = 1;
            while (i3 <= 5)
            {
                
                if (i3 < 4 && Main.sav.data["stuff_level_" + i3] < 7 || i3 == 4 && Main.sav.data["stuff_level_" + i3] < 5 || i3 == 5 && Main.sav.data["stuff_level_" + i3] < 3)
                {
                    if (Main.sav.data.gold >= Main.sav.data["stuff_price_" + i3])
                    {
                        this.sign_cl.visible = true;
                        break;
                    }
                }
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            return;
        }// end function

        function train_cats()
        {
            i3 = 1;
            while (i3 <= 4)
            {
                
                if (Main.sav.data["cat_place_" + i3] >= 9)
                {
                    Main.sav.data["cat_hp_" + i3] = Main.sav.data["cat_hp_" + i3] + Main.sav.data.stuff_4;
                    if (Main.sav.data["cat_hp_" + i3] > int(Main.sav.data["cat_hp2_" + i3] * Main.sav.data["cat_hp_koff_" + i3]))
                    {
                        Main.sav.data["cat_hp_" + i3] = int(Main.sav.data["cat_hp2_" + i3] * Main.sav.data["cat_hp_koff_" + i3]);
                    }
                    this.add_train_icon(Main.sav.data["cat_place_" + i3], 4, 0);
                }
                if (Main.sav.data["cat_place_" + i3] == 1 || Main.sav.data["cat_place_" + i3] == 2)
                {
                    Main.sav.data["cat_hp_" + i3] = Main.sav.data["cat_hp_" + i3] - Main.sav.data.stuff_min_1;
                    Main.sav.data["cat_stat1_" + i3] = Main.sav.data["cat_stat1_" + i3] + Main.sav.data.stuff_1;
                    if (Main.sav.data["cat_stat1_" + i3] >= Main.sav.data["cat_stat1_2_" + i3])
                    {
                        Main.sav.data["cat_stat1_2_" + i3] = int(Main.sav.data["cat_stat1_2_" + i3] * 1.05);
                        Main.sav.data["cat_stat1_" + i3] = 0;
                        var _loc_1:* = Main.sav.data;
                        var _loc_2:* = "cat_attack_level_" + i3;
                        var _loc_3:* = _loc_1["cat_attack_level_" + i3] + 1;
                        _loc_1[_loc_2] = _loc_3;
                        var _loc_1:* = Main.sav.data;
                        var _loc_2:* = "cat_attack_" + i3;
                        var _loc_3:* = _loc_1["cat_attack_" + i3] + 1;
                        _loc_1[_loc_2] = _loc_3;
                    }
                    if (_loc_1["cat_attack_level_" + i3] >= 99 || _loc_1["cat_hp_" + i3] <= int(_loc_1["cat_hp2_" + i3] * 0.25))
                    {
                        this.to_table(i3);
                    }
                    this.add_train_icon(_loc_1["cat_place_" + i3], 1, -30);
                    this.add_train_icon(_loc_1["cat_place_" + i3], 5, 0);
                }
                if (_loc_1["cat_place_" + i3] == 3 || _loc_1["cat_place_" + i3] == 4)
                {
                    _loc_1["cat_hp_" + i3] = _loc_1["cat_hp_" + i3] - _loc_1.stuff_min_2;
                    _loc_1["cat_stat2_" + i3] = _loc_1["cat_stat2_" + i3] + _loc_1.stuff_2;
                    if (_loc_1["cat_stat2_" + i3] >= _loc_1["cat_stat2_2_" + i3])
                    {
                        _loc_1["cat_stat2_2_" + i3] = int(_loc_1["cat_stat2_2_" + i3] * 1.05);
                        _loc_1["cat_stat2_" + i3] = 0;
                        var _loc_1:* = Main.sav.data;
                        var _loc_2:* = "cat_hp_level_" + i3;
                        var _loc_3:* = _loc_1["cat_hp_level_" + i3] + 1;
                        _loc_1[_loc_2] = _loc_3;
                        _loc_1["cat_hp2_" + i3] = _loc_1["cat_hp2_" + i3] + 5;
                    }
                    if (_loc_1["cat_hp_level_" + i3] >= 99 || _loc_1["cat_hp_" + i3] <= int(_loc_1["cat_hp2_" + i3] * 0.25))
                    {
                        this.to_table(i3);
                    }
                    this.add_train_icon(_loc_1["cat_place_" + i3], 2, -10);
                    this.add_train_icon(_loc_1["cat_place_" + i3], 5, 20);
                }
                if (_loc_1["cat_place_" + i3] == 5 || _loc_1["cat_place_" + i3] == 6)
                {
                    _loc_1["cat_hp_" + i3] = _loc_1["cat_hp_" + i3] - _loc_1.stuff_min_3;
                    _loc_1["cat_stat3_" + i3] = _loc_1["cat_stat3_" + i3] + _loc_1.stuff_3;
                    if (_loc_1["cat_stat3_" + i3] >= _loc_1["cat_stat3_2_" + i3])
                    {
                        _loc_1["cat_stat3_2_" + i3] = int(_loc_1["cat_stat3_2_" + i3] * 1.05);
                        _loc_1["cat_stat3_" + i3] = 0;
                        var _loc_1:* = Main.sav.data;
                        var _loc_2:* = "cat_speed_level_" + i3;
                        var _loc_3:* = _loc_1["cat_speed_level_" + i3] + 1;
                        _loc_1[_loc_2] = _loc_3;
                        _loc_1["cat_speed_" + i3] = _loc_1["cat_speed_" + i3] - 2;
                    }
                    if (_loc_1["cat_speed_level_" + i3] >= 99 || _loc_1["cat_hp_" + i3] <= int(_loc_1["cat_hp2_" + i3] * 0.25))
                    {
                        this.to_table(i3);
                    }
                    this.add_train_icon(_loc_1["cat_place_" + i3], 3, -20);
                    this.add_train_icon(_loc_1["cat_place_" + i3], 5, 10);
                }
                if (_loc_1.stuff_5 > 200)
                {
                    this.n_of_treat = 2;
                }
                else
                {
                    this.n_of_treat = 1;
                }
                this.n_of_treat2 = 1;
                while (this.n_of_treat2 <= this.n_of_treat)
                {
                    
                    if (_loc_1["cat_place_" + i3] == 7 || _loc_1["cat_place_" + i3] == 8)
                    {
                        this.add_train_icon(_loc_1["cat_place_" + i3], 6, -10);
                        if (_loc_1["cat_injury1_" + i3] == 1)
                        {
                            _loc_1["cat_injury1_time_" + i3] = _loc_1["cat_injury1_time_" + i3] + _loc_1.stuff_5;
                            if (_loc_1["cat_injury1_time_" + i3] >= this.injury2)
                            {
                                _loc_1["cat_injury1_" + i3] = 0;
                                if (_loc_1["cat_injury2_" + i3] == 1 && _loc_1["cat_injury3_" + i3] == 1)
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 0.5;
                                }
                                else if (_loc_1["cat_injury2_" + i3] == 1 || _loc_1["cat_injury3_" + i3] == 1)
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 0.75;
                                }
                                else
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 1;
                                }
                            }
                        }
                        else if (_loc_1["cat_injury2_" + i3] == 1)
                        {
                            _loc_1["cat_injury2_time_" + i3] = _loc_1["cat_injury2_time_" + i3] + _loc_1.stuff_5;
                            if (_loc_1["cat_injury2_time_" + i3] >= this.injury2)
                            {
                                _loc_1["cat_injury2_" + i3] = 0;
                                if (_loc_1["cat_injury1_" + i3] == 1 && _loc_1["cat_injury3_" + i3] == 1)
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 0.5;
                                }
                                else if (_loc_1["cat_injury1_" + i3] == 1 || _loc_1["cat_injury3_" + i3] == 1)
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 0.75;
                                }
                                else
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 1;
                                }
                            }
                        }
                        else
                        {
                            _loc_1["cat_injury3_time_" + i3] = _loc_1["cat_injury3_time_" + i3] + _loc_1.stuff_5;
                            if (_loc_1["cat_injury3_time_" + i3] >= this.injury2)
                            {
                                _loc_1["cat_injury3_" + i3] = 0;
                                if (_loc_1["cat_injury2_" + i3] == 1 && _loc_1["cat_injury1_" + i3] == 1)
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 0.5;
                                }
                                else if (_loc_1["cat_injury2_" + i3] == 1 || _loc_1["cat_injury1_" + i3] == 1)
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 0.75;
                                }
                                else
                                {
                                    _loc_1["cat_hp_koff_" + i3] = 1;
                                }
                            }
                        }
                        if (_loc_1["cat_injury1_" + i3] == 0 && _loc_1["cat_injury2_" + i3] == 0 && _loc_1["cat_injury3_" + i3] == 0)
                        {
                            this.to_table(i3);
                            if (this.ex_in_place(7) == 1)
                            {
                                this.doctor_cl.gotoAndStop(2);
                            }
                            else if (this.ex_in_place(8) == 1)
                            {
                                this.doctor_cl.gotoAndStop(3);
                            }
                            else
                            {
                                this.doctor_cl.gotoAndStop(1);
                            }
                        }
                    }
                    var _loc_1:* = this;
                    var _loc_2:* = this.n_of_treat2 + 1;
                    _loc_1.n_of_treat2 = _loc_2;
                }
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            return;
        }// end function

        function add_train_icon(param1, param2, param3)
        {
            sprite_var = _sp(icon_train_mc, this.zone_up_all, this["train_" + param1].x + param3, this["train_" + param1].y);
            sprite_var.icon2.gotoAndStop(param2);
            this._to_last(sprite_var, this.zone_up_all);
            return;
        }// end function

        function load_upg()
        {
            this.remove_gold(0);
            i3 = 1;
            while (i3 <= 5)
            {
                
                this.upg_cl["slot_" + i3].icon_cl.gotoAndStop(i3);
                this.upg_cl["slot_" + i3].icon_cl.icon2.gotoAndStop(Main.sav.data["stuff_level_" + i3]);
                this.upg_cl["slot_" + i3].title_tx.text = this.load_title(i3);
                this.upg_cl["slot_" + i3].des_tx.text = this.load_des(i3);
                this.upg_cl["slot_" + i3].price_tx.text = Main.sav.data["stuff_price_" + i3];
                if (i3 < 4 && Main.sav.data["stuff_level_" + i3] < 7 || i3 == 4 && Main.sav.data["stuff_level_" + i3] < 5 || i3 == 5 && Main.sav.data["stuff_level_" + i3] < 3)
                {
                    if (Main.sav.data.gold >= Main.sav.data["stuff_price_" + i3])
                    {
                        this.upg_cl["slot_" + i3].buy_cl.gotoAndStop(1);
                    }
                    else
                    {
                        this.upg_cl["slot_" + i3].buy_cl.gotoAndStop(2);
                    }
                }
                else
                {
                    this.upg_cl["slot_" + i3].buy_cl.gotoAndStop(3);
                }
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            this.check_prices();
            return;
        }// end function

        function load_title(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return "练习袋";
                }
                case 2:
                {
                    return "杠铃";
                }
                case 3:
                {
                    return "跑步机";
                }
                case 4:
                {
                    return "营养";
                }
                case 5:
                {
                    return "治疗";
                }
                default:
                {
                    break;
                }
            }
            return;
        }// end function

        function load_des(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return "改善攻击力训练";
                }
                case 2:
                {
                    return "改善生命力训练";
                }
                case 3:
                {
                    return "改善速度训练和技能回复几率";
                }
                case 4:
                {
                    return "增加能量回复比率";
                }
                case 5:
                {
                    return "增加受伤回复比率";
                }
                default:
                {
                    break;
                }
            }
            return;
        }// end function

        function remove_gold(param1)
        {
            Main.sav.data.gold = Main.sav.data.gold - param1;
            this.upg_cl.money_tx.text = Main.sav.data.gold;
            this.money_tx.text = Main.sav.data.gold;
            return;
        }// end function

        function to_table(param1)
        {
            if (Main.sav.data["cat_place_" + param1] < 9)
            {
                this.hide_from_train(Main.sav.data["cat_place_" + param1]);
                i2 = 9;
                while (i2 <= 12)
                {
                    
                    if (this.ex_in_place(i2) == 0)
                    {
                        if (Main.sav.data["cat_hp_" + param1] < int(Main.sav.data["cat_hp2_" + param1] * 0.25))
                        {
                            Main.sav.data["cat_hp_" + param1] = int(Main.sav.data["cat_hp2_" + param1] * 0.25);
                        }
                        this.set_to_train(param1, i2, 0);
                        break;
                    }
                    var _loc_3:* = i2 + 1;
                    i2 = _loc_3;
                }
            }
            return;
        }// end function

        function dress_up(param1, param2)
        {
            param2.head_cl.wool_cl.gotoAndStop(param1);
            param2.hand_l_cl.wool_cl.gotoAndStop(param1);
            param2.hand_r_cl.wool_cl.gotoAndStop(param1);
            param2.body_cl.wool_cl.gotoAndStop(param1);
            param2.foot1_cl.wool_cl.gotoAndStop(param1);
            param2.foot2_cl.wool_cl.gotoAndStop(param1);
            param2.tail_cl.gotoAndStop(param1);
            this.set_id = 1 + Main.sav.data["cat_dress_" + param1];
            param2.head_cl.h2.gotoAndStop(this.set_id);
            param2.hand_l_cl.sleeve_cl.gotoAndStop(this.set_id);
            param2.hand_l_cl.w2.gotoAndStop(1);
            param2.hand_r_cl.sleeve_cl.gotoAndStop(this.set_id);
            param2.hand_r_cl.s2.gotoAndStop(1);
            param2.body_cl.b2.gotoAndStop(this.set_id);
            param2.foot1_cl.p2.gotoAndStop(this.set_id);
            param2.foot2_cl.p2.gotoAndStop(this.set_id);
            param2.skirt_cl.gotoAndStop(this.set_id);
            param2.cloak_cl.gotoAndStop(this.set_id);
            return;
        }// end function

        function dress_up2(param1, param2, param3)
        {
            param2.head_cl.wool_cl.gotoAndStop(param1);
            param2.hand_l_cl.wool_cl.gotoAndStop(param1);
            param2.hand_r_cl.wool_cl.gotoAndStop(param1);
            param2.body_cl.wool_cl.gotoAndStop(param1);
            param2.foot1_cl.wool_cl.gotoAndStop(param1);
            param2.foot2_cl.wool_cl.gotoAndStop(param1);
            param2.tail_cl.gotoAndStop(param1);
            param3 = param3 + 1;
            param2.head_cl.h2.gotoAndStop(param3);
            param2.hand_l_cl.sleeve_cl.gotoAndStop(param3);
            param2.hand_l_cl.w2.gotoAndStop(param3);
            param2.hand_r_cl.sleeve_cl.gotoAndStop(param3);
            param2.hand_r_cl.s2.gotoAndStop(param3);
            param2.body_cl.b2.gotoAndStop(param3);
            param2.foot1_cl.p2.gotoAndStop(param3);
            param2.foot2_cl.p2.gotoAndStop(param3);
            param2.skirt_cl.gotoAndStop(param3);
            param2.cloak_cl.gotoAndStop(param3);
            param3 = param3 - 1;
            return;
        }// end function

        function simulate_day()
        {
            var new_step:* = function ()
            {
                arr_temp.splice(0, arr_temp.length);
                arr_temp2.splice(0, arr_temp2.length);
                if (numbef_of_m == 0)
                {
                    arr_temp.push(2, 3, 4, 5, 6);
                    arr_temp2.push(2, 3, 4, 5, 6);
                }
                else
                {
                    i3 = 2 + numbef_of_m;
                    while (arr_temp.length < 5)
                    {
                        
                        arr_temp.push(i3);
                        var _loc_2:* = i3 + 1;
                        i3 = _loc_2;
                        if (i3 > 6)
                        {
                            i3 = 2;
                        }
                    }
                    if (numbef_of_two)
                    {
                        i3 = 2 + numbef_of_m2;
                        while (arr_temp2.length < 5)
                        {
                            
                            arr_temp2.push(i3);
                            var _loc_2:* = i3 + 1;
                            i3 = _loc_2;
                            if (i3 > 6)
                            {
                                i3 = 2;
                            }
                        }
                    }
                }
                arr_op.splice(0, arr_op.length);
                arr_op2.splice(0, arr_op2.length);
                var _loc_2:* = numbef_of_m + 1;
                numbef_of_m = _loc_2;
                if (numbef_of_m == 4)
                {
                    numbef_of_two = true;
                    numbef_of_m = 0;
                    var _loc_2:* = numbef_of_m2 + 1;
                    numbef_of_m2 = _loc_2;
                    if (numbef_of_m2 == 4)
                    {
                        numbef_of_m2 = 0;
                    }
                }
                var _loc_2:* = numbef_of_m3 + 1;
                numbef_of_m3 = _loc_2;
                return;
            }// end function
            ;
            var set_match:* = function ()
            {
                new_step();
                i3 = 0;
                while (i3 < arr_temp.length)
                {
                    
                    i5 = 0;
                    while (i5 < arr_temp2.length)
                    {
                        
                        if (arr_temp[i3] != _app.team_enemy_id && arr_temp2[i5] != _app.team_enemy_id && arr_temp[i3] != arr_temp2[i5])
                        {
                            if (Main.sav.data["match_" + arr_temp[i3] + "_vs_" + arr_temp2[i5]] == 0 && Main.sav.data["match_" + arr_temp2[i5] + "_vs_" + arr_temp[i3]] == 0)
                            {
                                arr_op.push(arr_temp[i3]);
                                arr_op2.push(arr_temp2[i5]);
                                rnd_for = arr_temp[i3];
                                rnd_for2 = arr_temp2[i5];
                                arr_temp.splice(i3, 1);
                                arr_temp2.splice(i5, 1);
                                i6 = 0;
                                while (i6 < arr_temp.length)
                                {
                                    
                                    if (arr_temp[i6] == rnd_for2)
                                    {
                                        arr_temp.splice(i6, 1);
                                        break;
                                    }
                                    var _loc_2:* = i6 + 1;
                                    i6 = _loc_2;
                                }
                                i6 = 0;
                                while (i6 < arr_temp2.length)
                                {
                                    
                                    if (arr_temp2[i6] == rnd_for)
                                    {
                                        arr_temp2.splice(i6, 1);
                                        break;
                                    }
                                    var _loc_2:* = i6 + 1;
                                    i6 = _loc_2;
                                }
                                var _loc_2:* = i5 - 1;
                                i5 = _loc_2;
                                var _loc_2:* = i3 - 1;
                                i3 = _loc_2;
                            }
                        }
                        var _loc_2:* = i5 + 1;
                        i5 = _loc_2;
                    }
                    var _loc_2:* = i3 + 1;
                    i3 = _loc_2;
                }
                if (arr_op.length == 2 || numbef_of_m3 == 9000)
                {
                    return 1;
                }
                return 0;
            }// end function
            ;
            this._app.team_enemy_id = this._app.arr_enemy_row[Main.sav.data.season_round];
            var _loc_2:* = Main.sav.data;
            var _loc_3:* = "team_games_" + this._app.team_enemy_id;
            var _loc_4:* = _loc_2["team_games_" + this._app.team_enemy_id] + 1;
            _loc_2[_loc_3] = _loc_4;
            var _loc_2:* = Main.sav.data;
            var _loc_3:* = "team_d_" + this._app.team_enemy_id;
            var _loc_4:* = _loc_2["team_d_" + this._app.team_enemy_id] + 1;
            _loc_2[_loc_3] = _loc_4;
            var _loc_2:* = Main.sav.data;
            var _loc_3:* = _loc_2.team_games_1 + 1;
            _loc_2.team_games_1 = _loc_3;
            var _loc_2:* = Main.sav.data;
            var _loc_3:* = _loc_2.team_w_1 + 1;
            _loc_2.team_w_1 = _loc_3;
            _loc_2.team_pts_1 = _loc_2.team_pts_1 + 4;
            this.numbef_of_m = 1;
            this.numbef_of_m2 = 2;
            this.numbef_of_two = false;
            this.numbef_of_m3 = 0;
            while (this.set_match() == 0)
            {
                
            }
            i3 = 0;
            while (i3 < this.arr_op.length)
            {
                
                rnd_for5 = 0;
                rnd_for6 = 0;
                i6 = 1;
                while (i6 <= 50)
                {
                    
                    if (this.arr_op[i3] + _rnd(5) >= i5 + _rnd(5))
                    {
                        var _loc_3:* = rnd_for5 + 1;
                        rnd_for5 = _loc_3;
                    }
                    else
                    {
                        var _loc_3:* = rnd_for6 + 1;
                        rnd_for6 = _loc_3;
                    }
                    if (rnd_for5 >= 4)
                    {
                        var _loc_2:* = Main.sav.data;
                        var _loc_3:* = "team_w_" + this.arr_op[i3];
                        var _loc_4:* = _loc_2["team_w_" + this.arr_op[i3]] + 1;
                        _loc_2[_loc_3] = _loc_4;
                        var _loc_2:* = Main.sav.data;
                        var _loc_3:* = "team_d_" + this.arr_op2[i3];
                        var _loc_4:* = _loc_2["team_d_" + this.arr_op2[i3]] + 1;
                        _loc_2[_loc_3] = _loc_4;
                        break;
                    }
                    else if (rnd_for6 >= 4)
                    {
                        var _loc_2:* = Main.sav.data;
                        var _loc_3:* = "team_w_" + this.arr_op2[i3];
                        var _loc_4:* = _loc_2["team_w_" + this.arr_op2[i3]] + 1;
                        _loc_2[_loc_3] = _loc_4;
                        var _loc_2:* = Main.sav.data;
                        var _loc_3:* = "team_d_" + this.arr_op[i3];
                        var _loc_4:* = _loc_2["team_d_" + this.arr_op[i3]] + 1;
                        _loc_2[_loc_3] = _loc_4;
                        break;
                    }
                    var _loc_3:* = i6 + 1;
                    i6 = _loc_3;
                }
                Main.sav.data["team_pts_" + this.arr_op[i3]] = Main.sav.data["team_pts_" + this.arr_op[i3]] + rnd_for5;
                Main.sav.data["team_pts_" + this.arr_op2[i3]] = Main.sav.data["team_pts_" + this.arr_op2[i3]] + rnd_for6;
                var _loc_2:* = Main.sav.data;
                var _loc_3:* = "team_games_" + this.arr_op[i3];
                var _loc_4:* = _loc_2["team_games_" + this.arr_op[i3]] + 1;
                _loc_2[_loc_3] = _loc_4;
                var _loc_2:* = Main.sav.data;
                var _loc_3:* = "team_games_" + this.arr_op2[i3];
                var _loc_4:* = _loc_2["team_games_" + this.arr_op2[i3]] + 1;
                _loc_2[_loc_3] = _loc_4;
                _loc_2["match_" + this.arr_op[i3] + "_vs_" + this.arr_op2[i3]] = 1;
                _loc_2["match_" + this.arr_op2[i3] + "_vs_" + this.arr_op[i3]] = 1;
                var _loc_3:* = i3 + 1;
                i3 = _loc_3;
            }
            var _loc_2:* = Main.sav.data;
            var _loc_3:* = _loc_2.season_round + 1;
            _loc_2.season_round = _loc_3;
            this.init_stat_slot();
            return;
        }// end function

        function _to_last(param1, param2)
        {
            this.arr_last_frame_skin.push(param1);
            this.arr_last_frame_zone.push(param2);
            return;
        }// end function

        function add_tuto4()
        {
            this.yeah_tuto = false;
            if (Main.sav.data.tuto5 == 2)
            {
                Main.sav.data.tuto5 = 3;
                this.tuto_cl = _sp(tuto10_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto92_click_f);
                this.yeah_tuto = true;
            }
            if (Main.sav.data.tuto7 == 1 && this.yeah_tuto == false)
            {
                i = 1;
                while (i <= 4)
                {
                    
                    if (Main.sav.data["cat_injury1_" + i] == 1 || Main.sav.data["cat_injury2_" + i] == 1 || Main.sav.data["cat_injury3_" + i] == 1)
                    {
                        this.delete2_f();
                        Main.sav.data.tuto7 = 2;
                        this.tuto_cl = _sp(tuto19_mc, this.zone_tuto, 0, 0);
                        stage.addEventListener(MouseEvent.CLICK, this.tuto19_click_f);
                        this.yeah_tuto = true;
                        this.to_table(1);
                        this.to_table(2);
                        this.to_table(3);
                        this.to_table(4);
                        break;
                    }
                    var _loc_2:* = i + 1;
                    i = _loc_2;
                }
            }
            if (Main.sav.data.tuto6 == 1 && this.yeah_tuto == false)
            {
                if (Main.sav.data.gold >= 200)
                {
                    this.delete2_f();
                    Main.sav.data.tuto6 = 2;
                    this.tuto_cl = _sp(tuto17_mc, this.zone_tuto, 0, 0);
                    stage.addEventListener(MouseEvent.CLICK, this.tuto17_click_f);
                    this.yeah_tuto = true;
                }
            }
            if (this.yeah_tuto == false)
            {
                if (Main.sav.data.tuto2 == 2)
                {
                    this.add_function();
                }
            }
            return;
        }// end function

        function tuto2_f(event:Event)
        {
            if (this.drag_mode)
            {
                this.cat_drag.x = mouseX;
                this.cat_drag.y = mouseY;
            }
            if (this.ex2_in_place(9) == 0 && this.ex2_in_place(10) == 0 && this.ex2_in_place(11) == 0 && this.ex2_in_place(12) == 0)
            {
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = _sp(tuto3_mc, this.zone_tuto, 0, 0);
                removeEventListener(Event.ENTER_FRAME, this.tuto2_f);
                stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.tuto2_m_down_f);
                stage.removeEventListener(MouseEvent.MOUSE_UP, this.tuto2_m_up_f);
                stage.addEventListener(MouseEvent.CLICK, this.tuto3_click_f);
            }
            return;
        }// end function

        function tuto2_m_down_f(event:MouseEvent)
        {
            if (this.upg_ex == false && this.stat_ex == false && this.pre_battle_ex == false)
            {
                if (this.drag_mode == false)
                {
                    i = 1;
                    while (i <= 12)
                    {
                        
                        if (_mo(this["zone_" + i]))
                        {
                            if (this.ex_in_place(i) == 1)
                            {
                                this.cat_drag = _sp(cat_drag_mc, this.zone_drag, mouseX, mouseY);
                                this.drag_mode = true;
                                this.type_zone = i;
                                this.cat_drag_type = this.cat_type;
                                this.hide_from_train(i);
                                if (i > 6)
                                {
                                    this._app._so.load_by_name(take_cat2_so);
                                }
                                else
                                {
                                    this._app._so.load_by_name(take_cat_so);
                                }
                                this.dress_up(this.cat_type, this.cat_drag.cat1.cat2);
                                break;
                            }
                        }
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                }
            }
            return;
        }// end function

        function tuto2_m_up_f(event:MouseEvent)
        {
            if (this.drag_mode)
            {
                this.yes_new_place = false;
                i = 1;
                while (i <= 6)
                {
                    
                    if (_mo(this["zone_" + i]))
                    {
                        if (this.ex_in_place(i) == 0)
                        {
                            this.set_to_train(this.cat_type, i, 1);
                            break;
                        }
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                if (this.yes_new_place == false)
                {
                    this.set_to_train(this.cat_drag_type, this.type_zone, 0);
                }
                this.zone_drag.removeChild(this.cat_drag);
                this.drag_mode = false;
            }
            return;
        }// end function

        function tuto3_click_f(event:MouseEvent)
        {
            if (_mo(this.next_bt))
            {
                this._app._so.load_by_name(next_day_so);
                var _loc_2:* = Main.sav.data;
                var _loc_3:* = _loc_2.week + 1;
                _loc_2.week = _loc_3;
                this.calendar_cl.left_tx.text = (7 - _loc_2.week).toString();
                this.set_next_bt_frame();
                this.train_cats();
                this.load_slots();
                stage.removeEventListener(MouseEvent.CLICK, this.tuto3_click_f);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = _sp(tuto4_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto4_click_f);
            }
            return;
        }// end function

        function tuto4_click_f(event:MouseEvent)
        {
            if (_mo(this.tuto_cl.ok_bt))
            {
                stage.removeEventListener(MouseEvent.CLICK, this.tuto4_click_f);
                this.zone_tuto.removeChild(this.tuto_cl);
                this._app._so.load_by_name(click_so);
                this.tuto_cl = _sp(tuto5_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto5_click_f);
            }
            return;
        }// end function

        function tuto5_click_f(event:MouseEvent)
        {
            if (_mo(this.next_bt))
            {
                this._app._so.load_by_name(next_day_so);
                var _loc_2:* = Main.sav.data;
                var _loc_3:* = _loc_2.week + 1;
                _loc_2.week = _loc_3;
                this.calendar_cl.left_tx.text = (7 - _loc_2.week).toString();
                this.set_next_bt_frame();
                this.train_cats();
                this.load_slots();
                stage.removeEventListener(MouseEvent.CLICK, this.tuto5_click_f);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = _sp(tuto6_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.MOUSE_DOWN, this.tuto6_click_f);
                addEventListener(Event.ENTER_FRAME, this.tuto6_f);
                this.tuto_cl.over1.visible = false;
                this.tuto_cl.over2.visible = false;
                this.tuto_cl.over3.visible = false;
                this.tuto_cl.over4.visible = false;
            }
            return;
        }// end function

        function tuto6_f(event:Event)
        {
            if (this.ex2_in_place(9) == 0 && this.ex2_in_place(10) == 0 && this.ex2_in_place(11) == 0 && this.ex2_in_place(12) == 0)
            {
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = _sp(tuto7_mc, this.zone_tuto, 0, 0);
                removeEventListener(Event.ENTER_FRAME, this.tuto6_f);
                stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.tuto6_click_f);
                stage.addEventListener(MouseEvent.CLICK, this.tuto7_click_f);
            }
            return;
        }// end function

        function tuto6_click_f(event:MouseEvent)
        {
            i = 1;
            while (i <= 4)
            {
                
                if (_mo(this["slot_" + i].to_hp_bt))
                {
                    if (Main.sav.data["cat_place_" + i] != 3 && Main.sav.data["cat_place_" + i] != 4)
                    {
                        if (this.ex_in_place(3) == 0)
                        {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i, 3, 1);
                            this.tuto_cl["over" + i].visible = true;
                            this.tuto_cl["arrow_" + i].visible = false;
                            break;
                        }
                        else if (this.ex_in_place(4) == 0)
                        {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i, 4, 1);
                            this.tuto_cl["over" + i].visible = true;
                            this.tuto_cl["arrow_" + i].visible = false;
                            break;
                        }
                    }
                }
                if (_mo(this["slot_" + i].to_attack_bt))
                {
                    if (Main.sav.data["cat_place_" + i] != 1 && Main.sav.data["cat_place_" + i] != 2)
                    {
                        if (this.ex_in_place(1) == 0)
                        {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i, 1, 1);
                            this.tuto_cl["over" + i].visible = true;
                            this.tuto_cl["arrow_" + i].visible = false;
                            break;
                        }
                        else if (this.ex_in_place(2) == 0)
                        {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i, 2, 1);
                            this.tuto_cl["over" + i].visible = true;
                            this.tuto_cl["arrow_" + i].visible = false;
                            break;
                        }
                    }
                }
                if (_mo(this["slot_" + i].to_speed_bt))
                {
                    if (Main.sav.data["cat_place_" + i] != 5 && Main.sav.data["cat_place_" + i] != 6)
                    {
                        if (this.ex_in_place(5) == 0)
                        {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i, 5, 1);
                            this.tuto_cl["over" + i].visible = true;
                            this.tuto_cl["arrow_" + i].visible = false;
                            break;
                        }
                        else if (this.ex_in_place(6) == 0)
                        {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i, 6, 1);
                            this.tuto_cl["over" + i].visible = true;
                            this.tuto_cl["arrow_" + i].visible = false;
                            break;
                        }
                    }
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            return;
        }// end function

        function tuto7_click_f(event:MouseEvent)
        {
            if (_mo(this.next_bt))
            {
                this._app._so.load_by_name(next_day_so);
                var _loc_2:* = Main.sav.data;
                var _loc_3:* = _loc_2.week + 1;
                _loc_2.week = _loc_3;
                this.calendar_cl.left_tx.text = (7 - _loc_2.week).toString();
                this.set_next_bt_frame();
                this.train_cats();
                this.load_slots();
                stage.removeEventListener(MouseEvent.CLICK, this.tuto7_click_f);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = _sp(tuto8_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto8_click_f);
            }
            return;
        }// end function

        function tuto8_click_f(event:MouseEvent)
        {
            if (_mo(this.gong_cl))
            {
                this.gong_cl.gotoAndPlay(2);
                this.to_table(1);
                this.to_table(2);
                this.to_table(3);
                this.to_table(4);
                this._app._so.load_by_name(gong_so);
                stage.removeEventListener(MouseEvent.CLICK, this.tuto8_click_f);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = _sp(tuto9_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto9_click_f);
            }
            return;
        }// end function

        function tuto9_click_f(event:MouseEvent)
        {
            if (_mo(this.next_bt))
            {
                this._app._so.load_by_name(next_day_so);
                var _loc_2:* = Main.sav.data;
                var _loc_3:* = _loc_2.week + 1;
                _loc_2.week = _loc_3;
                this.calendar_cl.left_tx.text = (7 - _loc_2.week).toString();
                this.set_next_bt_frame();
                this.train_cats();
                this.load_slots();
                stage.removeEventListener(MouseEvent.CLICK, this.tuto9_click_f);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = _sp(tuto14_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto14_click_f);
            }
            return;
        }// end function

        function tuto92_click_f(event:MouseEvent)
        {
            if (_mo(this.next_bt))
            {
                this._app._so.load_by_name(next_day_so);
                if (Main.sav.data.week != 8)
                {
                    Main.sav.data.week = 7;
                    this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
                    this.set_next_bt_frame();
                    this.train_cats();
                    this.load_slots();
                    this.zone_tuto.removeChild(this.tuto_cl);
                }
                if (Main.sav.data.week == 7)
                {
                    this.tuto_cl = _sp(tuto11_mc, this.zone_tuto, 0, 0);
                    Main.sav.data.week = 8;
                }
                else
                {
                    this.zone_tuto.removeChild(this.tuto_cl);
                    stage.removeEventListener(MouseEvent.CLICK, this.tuto92_click_f);
                    this.to_battle = 0;
                    this.train_cats();
                    this.delete2_f();
                    addEventListener(Event.ENTER_FRAME, this.to_battle_f);
                    this._app.train_mode = false;
                }
            }
            return;
        }// end function

        function tuto12_click_f(event:MouseEvent)
        {
            if (_mo(this.stat_bt))
            {
                this._app._so.load_by_name(click_so);
                this.stat_cl.visible = true;
                this.stat_cl.line_about_cl.visible = true;
                this.stat_cl.slots_cl.visible = true;
                this.stat_cl.playoff_cl.visible = false;
                this.stat_cl.title_cl.gotoAndStop(Main.sav.data.league);
                this.stat_cl.playoff_bt.gotoAndStop(1);
                this.stat_ex = true;
                this.zone_tuto.removeChild(this.tuto_cl);
                stage.removeEventListener(MouseEvent.CLICK, this.tuto12_click_f);
                this.add_function();
                this.tuto_cl = _sp(tuto13_mc, this.zone_tuto, 0, 0);
                addEventListener(Event.ENTER_FRAME, this.tuto13_f);
            }
            return;
        }// end function

        function tuto13_f(event:Event)
        {
            if (this.stat_cl.visible == false)
            {
                removeEventListener(Event.ENTER_FRAME, this.tuto13_f);
                this.zone_tuto.removeChild(this.tuto_cl);
            }
            return;
        }// end function

        function tuto14_click_f(event:MouseEvent)
        {
            if (_mo(this.dress_bt))
            {
                this._app._so.load_by_name(click_so);
                this._app.open_new_screen("dress");
            }
            return;
        }// end function

        function tuto17_click_f(event:MouseEvent)
        {
            if (_mo(this.upg_bt))
            {
                this.upg_cl.visible = true;
                this.upg_ex = true;
                this._app._so.load_by_name(click_so);
                this.load_upg();
                this.zone_tuto.removeChild(this.tuto_cl);
                stage.removeEventListener(MouseEvent.CLICK, this.tuto17_click_f);
                this.tuto_cl = _sp(tuto18_mc, this.zone_tuto, 0, 0);
                addEventListener(Event.ENTER_FRAME, this.tuto18_f);
                this.add_function();
            }
            return;
        }// end function

        function tuto18_f(event:Event)
        {
            if (this.upg_cl.visible == false)
            {
                removeEventListener(Event.ENTER_FRAME, this.tuto18_f);
                this.zone_tuto.removeChild(this.tuto_cl);
            }
            else
            {
                i = 1;
                while (i <= 5)
                {
                    
                    if (Main.sav.data["stuff_level_" + i] > 1)
                    {
                        removeEventListener(Event.ENTER_FRAME, this.tuto18_f);
                        this.zone_tuto.removeChild(this.tuto_cl);
                        break;
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            return;
        }// end function

        function tuto19_click_f(event:MouseEvent)
        {
            if (_mo(this.tuto_cl.ok_bt))
            {
                this._app._so.load_by_name(click_so);
                this.zone_tuto.removeChild(this.tuto_cl);
                stage.removeEventListener(MouseEvent.CLICK, this.tuto19_click_f);
                this.tuto_cl = _sp(tuto20_mc, this.zone_tuto, 0, 0);
                if (Main.sav.data["cat_injury1_1"] == 1 || Main.sav.data["cat_injury2_1"] == 1 || Main.sav.data["cat_injury3_1"] == 1)
                {
                    this.tuto_cl.bg_cl.gotoAndStop(1);
                }
                else if (Main.sav.data["cat_injury1_2"] == 1 || Main.sav.data["cat_injury2_2"] == 1 || Main.sav.data["cat_injury3_2"] == 1)
                {
                    this.tuto_cl.bg_cl.gotoAndStop(2);
                }
                else if (Main.sav.data["cat_injury1_3"] == 1 || Main.sav.data["cat_injury2_3"] == 1 || Main.sav.data["cat_injury3_3"] == 1)
                {
                    this.tuto_cl.bg_cl.gotoAndStop(3);
                }
                else
                {
                    this.tuto_cl.bg_cl.gotoAndStop(4);
                }
                addEventListener(Event.ENTER_FRAME, this.tuto20_f);
                stage.addEventListener(MouseEvent.MOUSE_DOWN, this.tuto20_m_down_f);
                stage.addEventListener(MouseEvent.MOUSE_UP, this.tuto20_m_up_f);
            }
            return;
        }// end function

        function tuto20_f(event:Event)
        {
            if (this.drag_mode)
            {
                this.cat_drag.x = mouseX;
                this.cat_drag.y = mouseY;
            }
            if (this.ex2_in_place(9) == 0 && this.ex2_in_place(10) == 0 && this.ex2_in_place(11) == 0 && this.ex2_in_place(12) == 0)
            {
                this.zone_tuto.removeChild(this.tuto_cl);
                removeEventListener(Event.ENTER_FRAME, this.tuto20_f);
                stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.tuto20_m_down_f);
                stage.removeEventListener(MouseEvent.MOUSE_UP, this.tuto20_m_up_f);
            }
            return;
        }// end function

        function tuto20_m_down_f(event:MouseEvent)
        {
            if (this.upg_ex == false && this.stat_ex == false && this.pre_battle_ex == false)
            {
                if (this.drag_mode == false)
                {
                    i = 1;
                    while (i <= 12)
                    {
                        
                        if (_mo(this["zone_" + i]))
                        {
                            if (this.ex_in_place(i) == 1)
                            {
                                if (Main.sav.data["cat_injury1_" + this.cat_type] == 1 || Main.sav.data["cat_injury2_" + this.cat_type] == 1 || Main.sav.data["cat_injury3_" + this.cat_type] == 1)
                                {
                                    this.cat_drag = _sp(cat_drag_mc, this.zone_drag, mouseX, mouseY);
                                    this.drag_mode = true;
                                    this.type_zone = i;
                                    this.cat_drag_type = this.cat_type;
                                    this.hide_from_train(i);
                                    if (i > 6)
                                    {
                                        this._app._so.load_by_name(take_cat2_so);
                                    }
                                    else
                                    {
                                        this._app._so.load_by_name(take_cat_so);
                                    }
                                    this.dress_up(this.cat_type, this.cat_drag.cat1.cat2);
                                    break;
                                }
                            }
                        }
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                }
            }
            return;
        }// end function

        function tuto20_m_up_f(event:MouseEvent)
        {
            if (this.drag_mode)
            {
                this.yes_new_place = false;
                i = 7;
                while (i <= 8)
                {
                    
                    if (_mo(this["zone_" + i]))
                    {
                        if (this.ex_in_place(i) == 0)
                        {
                            this.zone_tuto.removeChild(this.tuto_cl);
                            removeEventListener(Event.ENTER_FRAME, this.tuto20_f);
                            stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.tuto20_m_down_f);
                            stage.removeEventListener(MouseEvent.MOUSE_UP, this.tuto20_m_up_f);
                            this.add_function();
                            this.set_to_train(this.cat_type, i, 1);
                            break;
                        }
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                if (this.yes_new_place == false)
                {
                    this.set_to_train(this.cat_drag_type, this.type_zone, 0);
                }
                this.zone_drag.removeChild(this.cat_drag);
                this.drag_mode = false;
            }
            return;
        }// end function

        function delete2_f()
        {
            removeEventListener(Event.ENTER_FRAME, this.game_f);
            removeEventListener(Event.ENTER_FRAME, this.to_battle_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_paper_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_pause_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_result_f);
            stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.drag_m_down_f);
            stage.removeEventListener(MouseEvent.MOUSE_UP, this.drag_m_up_f);
            return;
        }// end function

        function delete_f()
        {
            removeEventListener(Event.ENTER_FRAME, this.tuto2_f);
            removeEventListener(Event.ENTER_FRAME, this.tuto6_f);
            removeEventListener(Event.ENTER_FRAME, this.tuto13_f);
            removeEventListener(Event.ENTER_FRAME, this.tuto18_f);
            removeEventListener(Event.ENTER_FRAME, this.tuto20_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto92_click_f);
            stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.tuto2_m_down_f);
            stage.removeEventListener(MouseEvent.MOUSE_UP, this.tuto2_m_up_f);
            stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.tuto20_m_down_f);
            stage.removeEventListener(MouseEvent.MOUSE_UP, this.tuto20_m_up_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto3_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto4_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto5_click_f);
            stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.tuto6_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto7_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto8_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto9_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto12_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto14_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto17_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto19_click_f);
            this.delete2_f();
            this._Buttons_sounds.delete_f();
            return;
        }// end function

    }
}
