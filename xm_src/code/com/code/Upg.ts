module com.code {
    export class Upg extends DataMovieClip {
        public calendar_cl: std.MovieClip = null;
        public coach_stay_cl: std.MovieClip = null;
        public doctor_cl: std.MovieClip = null;
        public dress_bt: std.MCButton = null;
        public gong_cl: std.MovieClip = null;
        public grass_cl: std.MovieClip = null;
        public menu_bt_cl: std.MCButton = null;
        public money_tx: TextField = null;
        public next_bt: std.MovieClip = null;
        public pointer1: std.MovieClip = null;
        public pointer2: std.MovieClip = null;
        public pointer3: std.MovieClip = null;
        public sign_cl: std.MovieClip = null;
        public slot_1: std.MovieClip = null;
        public slot_2: std.MovieClip = null;
        public slot_3: std.MovieClip = null;
        public slot_4: std.MovieClip = null;
        public stat_bt: std.MCButton = null;
        public stat_cl: std.MovieClip = null;
        public talk_10: std.MovieClip = null;
        public talk_11: std.MovieClip = null;
        public talk_12: std.MovieClip = null;
        public talk_9: std.MovieClip = null;
        public train_1: std.MovieClip = null;
        public train_10: std.MovieClip = null;
        public train_11: std.MovieClip = null;
        public train_12: std.MovieClip = null;
        public train_2: std.MovieClip = null;
        public train_3: std.MovieClip = null;
        public train_4: std.MovieClip = null;
        public train_5: std.MovieClip = null;
        public train_6: std.MovieClip = null;
        public train_7: std.MovieClip = null;
        public train_8: std.MovieClip = null;
        public train_9: std.MovieClip = null;
        public upg_bt: std.MCButton = null;
        public upg_cl: std.MovieClip = null;
        public zone_1: std.MovieClip = null;
        public zone_10: std.MovieClip = null;
        public zone_11: std.MovieClip = null;
        public zone_12: std.MovieClip = null;
        public zone_2: std.MovieClip = null;
        public zone_3: std.MovieClip = null;
        public zone_4: std.MovieClip = null;
        public zone_5: std.MovieClip = null;
        public zone_6: std.MovieClip = null;
        public zone_7: std.MovieClip = null;
        public zone_8: std.MovieClip = null;
        public zone_9: std.MovieClip = null;
        public zone_drag: std.MovieClip = null;
        public zone_tuto: std.MovieClip = null;
        public zone_up_all: std.MovieClip = null;
        _app: App = null;
        _Buttons_sounds: Buttons_sounds = null;
        pause_cl: std.MovieClip = null;
        pause_ex: boolean = false;
        upg_ex: boolean = false;
        stat_ex: boolean = false;
        _info: Aby_info = null;
        month_of: number = 0;
        day_of: number = 0;
        year_of: number = 0;
        date_all: String = null;
        my_date: Date =new Date();
        drag_scroll: boolean = false;
        arr_le: any = [];
        arr_sort: any = [];
        arr_sort_type: any = [];
        spy_time: number = 0;
        mouse_dx: number = 0;
        place_dy: number = 0;
        drag_mode: boolean = false;
        cat_drag: std.MovieClip = null;
        cat_type: number = 0;
        set_id: number = 0;
        type_zone: number = 0;
        injury2: number = 200;
        cat_drag_type: number = 0;
        arr_temp: any = [];
        arr_temp2: any = [];
        i7: number = 0;
        numbef_of_m: number = 0;
        numbef_of_m2: number = 0;
        numbef_of_m3: number = 0;
        numbef_of_two: boolean = false;
        arr_op: any = [];
        arr_op2: any = [];
        arr_last_frame_skin: any = [];
        arr_last_frame_zone: any = [];
        _info_enemy: Enemy = null;
        pre_battle_cl: std.MovieClip = null;
        pre_battle_ex: boolean = false;
        tuto_cl: std.MovieClip = null;
        paper_cl: std.MovieClip = null;
        result_season_cl: std.MovieClip = null;
        number_of_in: number = 0;
        arr_temp3: any = [];
        to_battle: number = 0;
        yes_new_place: boolean = false;
        n_of_i: number = 0;
        paper_ex: boolean = false;
        yeah_tuto: boolean = false;
        found_train: boolean = false;
        no_set_train: boolean = false;
        n_of_treat: number = 0;
        n_of_treat2: number = 0;

        public constructor() {
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
            super();
        }

        public init(): void {
            if(Main.sav.data.week >= 8) {
                Main.sav.data.week = 7;
            }
            this.month_of = this.my_date.month + 1;
            this.day_of = this.my_date.date;
            this.year_of = this.my_date.fullYear;
            this.date_all = this.month_of + "." + this.day_of + "." + this.year_of;
            this.sign_cl.mouseEnabled = false;
            this._app._music.load_music("upg");
            this._info_enemy = new Enemy();
            this.spy_time = std._rnd(9000);
            this._info = new Aby_info();
            this.pause_cl = this._sp(pause_mc,this.zone_tuto,0,0);
            this._Buttons_sounds = new Buttons_sounds();
            this._Buttons_sounds.$setX(294);
            this._Buttons_sounds.$setY(182);
            this.pause_cl.addChild(this._Buttons_sounds);
            this.pause_cl.home_bt.gotoAndStop(2);
            this.pause_cl.$setVisible(false);
            this.upg_cl.$setVisible(false);
            this.stat_cl.$setVisible(false);
            this.load_slots();
            this.init_stat_slot();
            this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
            this.calendar_cl.$setVisible(false);
            this.set_next_bt_frame();
            this.train_9.table_cl.gotoAndStop(1);
            this.train_10.table_cl.gotoAndStop(2);
            this.train_11.table_cl.gotoAndStop(3);
            this.train_12.table_cl.gotoAndStop(4);
            i = 1;
            while(i <= 12) {
                this["train_" + i].cat_cl.$setVisible(false);
                this["train_" + i].cat_cl.cat1.gotoAndStop(1);
                i++;
            }
            i = 1;
            while(i <= 4) {
                this.set_to_train(i,Main.sav.data["cat_place_" + i],0);
                i++;
            }
            this.talk_9.gotoAndStop("clear_frame");
            this.talk_10.gotoAndStop("clear_frame");
            this.talk_11.gotoAndStop("clear_frame");
            this.talk_12.gotoAndStop("clear_frame");
            if(Main.sav.data.show_season_finish_playoff == 1) {
                Main.sav.data.show_season_finish_playoff = 0;
                if(Main.sav.data.playoff == 1) {
                    this.result_season_cl = this._sp(paper_new_mc,this.zone_tuto,91,40);
                    this.result_season_cl.pic_cl.gotoAndStop(1);
                    this.result_season_cl.news_tx.text = "联盟半决赛即将开战!";
                    this.result_season_cl.paper_cl.data_tx.text = this.date_all;
                    this._app._so.load_by_name(paper_so);
                } else {
                    this.result_season_cl = this._sp(panel_view_not_hit_mc,this.zone_tuto,325,170);
                    this.result_season_cl.des_tx.text = "您得到了" + Main.sav.data.place_won_kitty + "名.多多训练";
                }
                this._app._so.load_by_name(paper_so);
                this.paper_ex = true;
                this.delete2_f();
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_result_f,this);
            } else if(Main.sav.data.show_season_finish == 1) {
                Main.sav.data.show_season_finish = 0;
                this.paper_ex = true;
                this.result_season_cl = this._sp(paper_new_mc,this.zone_tuto,91,40);
                this.result_season_cl.paper_cl.data_tx.text = this.date_all;
                this._app._so.load_by_name(paper_so);
                if(Main.sav.data.new_league == 1) {
                    this.result_season_cl.pic_cl.gotoAndStop(2);
                    if(Main.sav.data.league == 3) {
                        this.result_season_cl.news_tx.text = "猫咪队伍晋级比目鱼级!";
                    } else if(Main.sav.data.league == 2) {
                        this.result_season_cl.news_tx.text = "猫咪队伍晋级鲑鳟鱼级!";
                    } else if(Main.sav.data.league == 1) {
                        this.result_season_cl.news_tx.text = "猫咪队伍晋级大鲨鱼级!";
                    }
                    Main.sav.data.new_league = 0;
                } else {
                    this.result_season_cl.pic_cl.gotoAndStop(1);
                    if(Main.sav.data.league == 4) {
                        this.result_season_cl.news_tx.text = "凤尾鱼级新赛季开启!";
                    } else if(Main.sav.data.league == 3) {
                        this.result_season_cl.news_tx.text = "比目鱼级凤尾鱼级新赛季开启!";
                    } else if(Main.sav.data.league == 2) {
                        this.result_season_cl.news_tx.text = "鲑鳟鱼级新赛季开启!";
                    } else if(Main.sav.data.league == 1) {
                        this.result_season_cl.news_tx.text = "大鲨鱼级新赛季开启!";
                    }
                }
                this.delete2_f();
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_result_f,this);
            } else if(Main.sav.data.end_of_playoff == 1) {
                this.paper_ex = true;
                Main.sav.data.end_of_playoff = 0;
                this.result_season_cl = this._sp(panel_view_not_hit_mc,this.zone_tuto,325,170);
                this.result_season_cl.des_tx.text = "您没有赢得超级杯! \n 多多训练";
                this.delete2_f();
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_result_f,this);
            }
            if(Main.sav.data.news_paper == 1) {
                Main.sav.data.news_paper = 0;
                this.paper_ex = true;
                if(Main.sav.data.playoff == 0) {
                    this.paper_cl = this._sp(paper_mc,this.zone_tuto,300,180);
                    this.paper_cl.news_cl.gotoAndStop(std._rnd(4) + 1);
                    this.paper_cl.data_tx.text = this.date_all;
                    this._app._so.load_by_name(paper_so);
                    if(Main.sav.data.result == 1) {
                        this.paper_cl.news_cl.scaleX = -Math.abs(this.paper_cl.news_cl.scaleX);
                        if(Main.sav.data.last_enemy == 2) {
                            this.paper_cl.r_tx.text = "猫咪战胜了狐狸!";
                            this.load_to_news(1,3);
                        } else {
                            this.paper_cl.r_tx.text = "猫咪战胜了浣熊!";
                            this.load_to_news(1,2);
                        }
                    } else if(Main.sav.data.last_enemy == 2) {
                        this.paper_cl.r_tx.text = "狐狸战胜了猫咪!";
                        this.load_to_news(3,1);
                    } else {
                        this.paper_cl.r_tx.text = "浣熊战胜了猫咪!";
                        this.load_to_news(2,1);
                    }
                    this.paper_cl.fish_tx.text = "+" + Main.sav.data.earn_fish;
                    this.paper_cl.pts_tx.text = "+" + Main.sav.data.earn_pts;
                } else {
                    this.paper_cl = this._sp(paper_new_mc,this.zone_tuto,91,40);
                    this.paper_cl.pic_cl.gotoAndStop(1);
                    this.paper_cl.paper_cl.data_tx.text = this.date_all;
                    this._app._so.load_by_name(paper_so);
                    if(Main.sav.data.playoff_round == 2) {
                        this.paper_cl.news_tx.text = "联盟决赛即将开战!";
                    } else if(Main.sav.data.playoff_round == 3) {
                        this.paper_cl.news_tx.text = "下周即将举行冠军联盟总决赛!";
                    }
                }
                this.delete2_f();
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_paper_f,this);
            }
            if(this.ex_in_place(7) == 1) {
                this.doctor_cl.gotoAndStop(2);
            } else if(this.ex_in_place(8) == 1) {
                this.doctor_cl.gotoAndStop(3);
            } else {
                this.doctor_cl.gotoAndStop(1);
            }
            i2 = 1;
            while(i2 <= 6) {
                this["train_" + i2].coach_cl.$setVisible(false);
                i2++;
            }
            this.pointer1.gotoAndStop(2);
            this.pointer2.gotoAndStop(3);
            this.pointer3.gotoAndStop(1);
            this.init_tr();
            if(this.paper_ex == false) {
                this.add_tuto4();
            }
            this.remove_gold(0);
            this.check_prices();
        }

        public load_to_news(param1: any, param2: any): any {
            if(param1 == 1) {
                param1 = 1;
            } else if(param1 == 2) {
                param1 = 5;
            } else {
                param1 = 9;
            }
            if(param2 == 1) {
                param2 = 1;
            } else if(param2 == 2) {
                param2 = 5;
            } else {
                param2 = 9;
            }
            rnd_for = std._rnd(4) + 1;
            rnd_for2 = std._rnd(4) + 1;
            if(param1 == 1) {
                this.dress_up2(param1,this.paper_cl.news_cl.cat1,Main.sav.data["cat_dress_" + rnd_for]);
                this.dress_up2(param2,this.paper_cl.news_cl.cat2,this._info.got_skin(Main.sav.data.last_enemy_id * 4 - 8 + rnd_for2));
            } else {
                this.dress_up2(param2,this.paper_cl.news_cl.cat2,Main.sav.data["cat_dress_" + rnd_for]);
                this.dress_up2(param1,this.paper_cl.news_cl.cat1,this._info.got_skin(Main.sav.data.last_enemy_id * 4 - 8 + rnd_for2));
            }
        }

        public add_function(): any {
            this.addEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.drag_m_down_f,this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.drag_m_up_f,this);
        }

        public upgate_season(): any {
            if(Main.sav.data.new_league == 1) {
                if(Main.sav.data.league > 1) {
                    Main.sav.data.league = Main.sav.data.league - 1;
                }
                if(Main.sav.data.league == 3) {
                    Main.sav.data.enemy_start_level = 6;
                    Main.sav.data.season_koff = 5;
                    Main.sav.data.chance_injury = 93;
                } else if(Main.sav.data.league == 2) {
                    Main.sav.data.enemy_start_level = 11;
                    Main.sav.data.season_koff = 10;
                    Main.sav.data.chance_injury = 91;
                } else if(Main.sav.data.league == 1) {
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
            while(i <= 22) {
                Main.sav.data["team_games_" + i] = 0;
                Main.sav.data["team_w_" + i] = 0;
                Main.sav.data["team_d_" + i] = 0;
                Main.sav.data["team_pts_" + i] = 0;
                i++;
            }
            i = 2;
            while(i <= 22) {
                i2 = 2;
                while(i2 <= 22) {
                    if(i != i2) {
                        Main.sav.data["match_" + i + "_vs_" + i2] = 0;
                        Main.sav.data["match_" + i2 + "_vs_" + i] = 0;
                    }
                    i2++;
                }
                i++;
            }
            Main.sav.flush();
        }

        public set_next_bt_frame(): any {
            if(Main.sav.data.week == 7) {
                if(Main.sav.data.rest == 1) {
                    this.next_bt.gotoAndStop(6);
                } else if(Main.sav.data.playoff == 1) {
                    this.next_bt.gotoAndStop(2 + Main.sav.data.playoff_round);
                } else {
                    this.next_bt.gotoAndStop(2);
                }
            } else {
                this.next_bt.gotoAndStop(1);
            }
        }

        public init_tr(): any {
            i2 = 1;
            while(i2 <= 6) {
                if(this.ex_in_place(i2) == 1) {
                    if(i2 == 1 || i2 == 2) {
                        if(Main.sav.data.stuff_level_1 == 7) {
                            this["train_" + i2].cat_cl.cat1.gotoAndStop(7);
                        } else {
                            this["train_" + i2].cat_cl.cat1.gotoAndStop(5);
                        }
                        this["train_" + i2].cat_cl.cat1Cat2Tr_cl.gotoAndStop(Main.sav.data.stuff_level_1);
                        this.dress_up(this.cat_type,this["train_" + i2].cat_cl.cat1.cat2);
                    }
                    if(i2 == 3 || i2 == 4) {
                        this["train_" + i2].cat_cl.cat1Cat2Tr_cl.gotoAndStop(Main.sav.data.stuff_level_2);
                    }
                    if(i2 == 5 || i2 == 6) {
                        this["train_" + i2].cat_cl.cat1Cat2Tr_cl.gotoAndStop(Main.sav.data.stuff_level_3);
                    }
                }
                if(i2 == 1 || i2 == 2) {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_1);
                }
                if(i2 == 3 || i2 == 4) {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_2);
                }
                if(i2 == 5 || i2 == 6) {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_3);
                }
                i2++;
            }
        }

        public init_tr2(param1: any): any {
            i2 = param1;
            while(i2 <= param1) {
                if(this.ex_in_place(i2) == 1) {
                    if(i2 == 1 || i2 == 2) {
                        if(Main.sav.data.stuff_level_1 == 7) {
                            this["train_" + i2].cat_cl.cat1.gotoAndStop(7);
                        } else {
                            this["train_" + i2].cat_cl.cat1.gotoAndStop(5);
                        }
                        this["train_" + i2].cat_cl.cat1Cat2Tr_cl.gotoAndStop(Main.sav.data.stuff_level_1);
                        this.dress_up(this.cat_type,this["train_" + i2].cat_cl.cat1.cat2);
                    }
                    if(i2 == 3 || i2 == 4) {
                        this["train_" + i2].cat_cl.cat1Cat2Tr_cl.gotoAndStop(Main.sav.data.stuff_level_2);
                    }
                    if(i2 == 5 || i2 == 6) {
                        this["train_" + i2].cat_cl.cat1Cat2Tr_cl.gotoAndStop(Main.sav.data.stuff_level_3);
                    }
                }
                if(i2 == 1 || i2 == 2) {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_1);
                }
                if(i2 == 3 || i2 == 4) {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_2);
                }
                if(i2 == 5 || i2 == 6) {
                    this["train_" + i2].tr_cl.gotoAndStop(Main.sav.data.stuff_level_3);
                }
                i2++;
            }
        }

        public load_slots(): any {
            i = 1;
            while(i <= 4) {
                this["slot_" + i].gotoAndStop(i);
                this["slot_" + i].p2.hp_tx.text = Math.floor(Main.sav.data["cat_hp_" + i] / Main.sav.data["cat_hp2_" + i] * 100).toString() + "%";
                this["slot_" + i].p2.hp_tx.$setVisible(false);
                this["slot_" + i].p2.scale_cl.gotoAndStop(Math.floor(Main.sav.data["cat_hp_" + i] / Main.sav.data["cat_hp2_" + i] * 100));
                this["slot_" + i].p2.stat_1.gotoAndStop(Math.floor(Main.sav.data["cat_stat1_" + i] / Main.sav.data["cat_stat1_2_" + i] * 100));
                this["slot_" + i].p2.stat_2.gotoAndStop(Math.floor(Main.sav.data["cat_stat2_" + i] / Main.sav.data["cat_stat2_2_" + i] * 100));
                this["slot_" + i].p2.stat_3.gotoAndStop(Math.floor(Main.sav.data["cat_stat3_" + i] / Main.sav.data["cat_stat3_2_" + i] * 100));
                this["slot_" + i].p2.stat_hp_tx.text = Main.sav.data["cat_hp2_" + i];
                this["slot_" + i].p2.stat_attack_tx.text = Main.sav.data["cat_attack_" + i];
                this["slot_" + i].p2.stat_speed_tx.text = Main.sav.data["cat_speed_level_" + i];
                this.n_of_i = 0;
                if(Main.sav.data["cat_injury1_" + i] == 1) {
                    this["slot_" + i].p2.injury_1.$setVisible(true);
                    this["slot_" + i].p2.injury_1.gotoAndStop(Math.floor(Main.sav.data["cat_injury1_time_" + i] / this.injury2 * 100));
                    this.n_of_i++;
                } else {
                    this["slot_" + i].p2.injury_1.$setVisible(false);
                }
                if(Main.sav.data["cat_injury2_" + i] == 1) {
                    this["slot_" + i].p2.injury_2.$setVisible(true);
                    this["slot_" + i].p2.injury_2.gotoAndStop(Math.floor(Main.sav.data["cat_injury2_time_" + i] / this.injury2 * 100));
                    this.n_of_i++;
                } else {
                    this["slot_" + i].p2.injury_2.$setVisible(false);
                }
                if(Main.sav.data["cat_injury3_" + i] == 1) {
                    this["slot_" + i].p2.injury_3.$setVisible(true);
                    this["slot_" + i].p2.injury_3.gotoAndStop(Math.floor(Main.sav.data["cat_injury3_time_" + i] / this.injury2 * 100));
                    this.n_of_i++;
                } else {
                    this["slot_" + i].p2.injury_3.$setVisible(false);
                }
                if(this.n_of_i == 0) {
                    this["slot_" + i].p2.lock_hp.$setVisible(false);
                } else {
                    this["slot_" + i].p2.lock_hp.$setVisible(true);
                    this["slot_" + i].p2.lock_hp.gotoAndStop(this.n_of_i);
                }
                i++;
            }
        }

        public init_stat_slot(): any {
            if(Main.sav.data.playoff == 0) {
                this.stat_cl.playoff_bt.$setVisible(false);
                this.stat_cl.playoff_bt.$setX(1282);
                this.stat_cl.close_bt.$setX(325);
            } else {
                this.stat_cl.playoff_bt.$setVisible(true);
                this.stat_cl.playoff_bt.$setX(382);
                this.stat_cl.close_bt.$setX(262);
            }
            this.arr_le.splice(0,this.arr_le.length);
            this.arr_sort.splice(0,this.arr_sort.length);
            this.place_dy = 1;
            i = 1;
            while(i <= 6) {
                this.arr_sort.push(100);
                i++;
            }
            i = 1;
            while(i <= 6) {
                if(i != 1) {
                    this.arr_le.push(Main.sav.data["team_pts_" + (Main.sav.data.season_koff + i)]);
                } else {
                    this.arr_le.push(Main.sav.data["team_pts_" + i]);
                }
                i++;
            }
            i = 0;
            while(i < 6) {
                rnd_for = 0;
                i2 = 0;
                while(i2 < 6) {
                    if(this.arr_le[i] > this.arr_le[i2]) {
                        rnd_for++;
                    }
                    i2++;
                }
                while(this.arr_sort[rnd_for] != 100) {
                    rnd_for++;
                }
                this.arr_sort[rnd_for] = i + 1;
                i++;
            }
            this.arr_sort.reverse();
            i = 0;
            while(i < this.arr_sort.length) {
                this.stat_cl.slots_cl["slot_" + (1 + i)].id_tx.text = (1 + i).toString();
                this.stat_cl.slots_cl["slot_" + (1 + i)].$setY(-268 + 28 * i);
                if(this.arr_sort[i] != 1) {
                    this.stat_cl.slots_cl["slot_" + (1 + i)].bg_cl.gotoAndStop(2);
                } else {
                    this.stat_cl.slots_cl["slot_" + (1 + i)].bg_cl.gotoAndStop(1);
                    this.place_dy = i;
                }
                if(this.arr_sort[i] != 1) {
                    this.stat_cl.slots_cl["slot_" + (1 + i)].title_tx.text = this._info_enemy.got_title(Main.sav.data.season_koff + this.arr_sort[i]);
                    this.stat_cl.slots_cl["slot_" + (1 + i)].w_tx.text = Main.sav.data["team_w_" + (Main.sav.data.season_koff + this.arr_sort[i])];
                    this.stat_cl.slots_cl["slot_" + (1 + i)].d_tx.text = Main.sav.data["team_d_" + (Main.sav.data.season_koff + this.arr_sort[i])];
                    this.stat_cl.slots_cl["slot_" + (1 + i)].pts_tx.text = Main.sav.data["team_pts_" + (Main.sav.data.season_koff + this.arr_sort[i])];
                } else {
                    this.stat_cl.slots_cl["slot_" + (1 + i)].title_tx.text = Main.sav.data.team_name_1;
                    this.stat_cl.slots_cl["slot_" + (1 + i)].w_tx.text = Main.sav.data["team_w_1"];
                    this.stat_cl.slots_cl["slot_" + (1 + i)].d_tx.text = Main.sav.data["team_d_1"];
                    this.stat_cl.slots_cl["slot_" + (1 + i)].pts_tx.text = Main.sav.data["team_pts_1"];
                }
                i++;
            }
            i = 1;
            while(i <= 4) {
                if(Main.sav.data.playoff == 0) {
                    this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = "unknown";
                    this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = "unknown";
                    this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = "0";
                    this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = "0";
                } else if(Main.sav.data.playoff == 1) {
                    if(Main.sav.data.playoff_round >= 1) {
                        if(i == 1) {
                            this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = Main.sav.data.team_name_1;
                            this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_2);
                            this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = Main.sav.data.count_semi_1_1;
                            this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = Main.sav.data.count_semi_1_2;
                        } else if(i == 2) {
                            this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_3);
                            this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_4);
                            this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = Main.sav.data.count_semi_2_1;
                            this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = Main.sav.data.count_semi_2_2;
                        }
                    }
                    if(Main.sav.data.playoff_round >= 2) {
                        if(i == 3) {
                            this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = Main.sav.data.team_name_1;
                            this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_5);
                            this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = Main.sav.data.count_final_1;
                            this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = Main.sav.data.count_final_2;
                        }
                    }
                    if(Main.sav.data.playoff_round >= 3) {
                        if(i == 4) {
                            this.stat_cl.playoff_cl["slot_" + i].title2_tx.text = Main.sav.data.team_name_1;
                            this.stat_cl.playoff_cl["slot_" + i].score1_tx.text = "0";
                            this.stat_cl.playoff_cl["slot_" + i].score2_tx.text = "0";
                        }
                    }
                }
                if(i == 4) {
                    this.stat_cl.playoff_cl["slot_" + i].title1_tx.text = this._info_enemy.got_title(22);
                }
                i++;
            }
        }

        public ex_in_place(param1: any): any {
            i4 = 1;
            while(i4 <= 4) {
                if(Main.sav.data["cat_place_" + i4] == param1) {
                    this.cat_type = i4;
                    return 1;
                }
                i4++;
            }
            return 0;
        }

        public ex2_in_place(param1: any): any {
            i4 = 1;
            while(i4 <= 4) {
                if(Main.sav.data["cat_place_" + i4] == param1) {
                    return 1;
                }
                i4++;
            }
            return 0;
        }

        public set_to_train(param1: any, param2: any, param3: any): any {
            this.no_set_train = true;
            if(param2 >= 9 || param2 != 7 && param2 != 8 && Main.sav.data["cat_hp_" + param1] > Math.floor(Main.sav.data["cat_hp2_" + param1] * 0.25) || (param2 == 7 || param2 == 8) && (Main.sav.data["cat_injury1_" + param1] == 1 || Main.sav.data["cat_injury2_" + param1] == 1 || Main.sav.data["cat_injury3_" + param1] == 1)) {
                if(param2 >= 7 || (param2 == 1 || param2 == 2) && Main.sav.data["cat_attack_level_" + param1] < 99 || (param2 == 3 || param2 == 4) && Main.sav.data["cat_hp_level_" + param1] < 99 || (param2 == 5 || param2 == 6) && Main.sav.data["cat_speed_level_" + param1] < 99) {
                    this.hide_from_train(Main.sav.data["cat_place_" + param1]);
                    i5 = 1;
                    while(i5 <= 6) {
                        this["train_" + i5].coach_cl.$setVisible(false);
                        i5++;
                    }
                    if(param2 == 7) {
                        this.doctor_cl.gotoAndStop(2);
                    } else if(param2 == 8) {
                        this.doctor_cl.gotoAndStop(3);
                    } else if(param2 < 7) {
                        this["train_" + param2].coach_cl.$setVisible(true);
                    }
                    this["train_" + param2].gotoAndStop(2);
                    this["train_" + param2].cat_cl.$setVisible(true);
                    this.no_set_train = false;
                    Main.sav.data["cat_place_" + param1] = param2;
                    this.yes_new_place = true;
                    if(param2 == 7 || param2 == 8) {
                        if(param3 == 1) {
                            this._app._so.load_by_name(to_bed_so);
                        }
                        this["train_" + param2].cat_cl.cat1.gotoAndStop(2);
                    } else if(param2 == 5 || param2 == 6) {
                        if(param3 == 1) {
                            this._app._so.load_by_name(train1_so);
                        }
                        this["train_" + param2].tr_cl.$setVisible(false);
                        this["train_" + param2].cat_cl.cat1.gotoAndStop(3);
                        this["train_" + param2].cat_cl.cat1.cat2.tr_cl.line_of_cl.$setVisible(false);
                    } else if(param2 == 3 || param2 == 4) {
                        this["train_" + param2].tr_cl.$setVisible(false);
                        this["train_" + param2].coach_cl.gotoAndPlay(1);
                        this["train_" + param2].cat_cl.cat1.gotoAndStop(4);
                        if(param3 == 1) {
                            this._app._so.load_by_name(train2_so);
                        }
                    } else if(param2 == 1 || param2 == 2) {
                        this["train_" + param2].tr_cl.$setVisible(false);
                        if(param3 == 1) {
                            this._app._so.load_by_name(train3_so);
                        }
                        if(Main.sav.data.stuff_level_1 == 7) {
                            this["train_" + param2].cat_cl.cat1.gotoAndStop(7);
                        } else {
                            this["train_" + param2].cat_cl.cat1.gotoAndStop(5);
                        }
                        this["train_" + param2].coach_cl.gotoAndPlay(1);
                    } else {
                        if(param3 == 1) {
                            this._app._so.load_by_name(to_table_so);
                        }
                        this["train_" + param2].tr_cl.$setVisible(false);
                        this["train_" + param2].cat_cl.cat1.gotoAndStop(6);
                        this["train_" + param2].cat_cl.cat1Cat2.gotoAndPlay(std._rnd(30) + 109);
                    }
                    this.dress_up(param1,this["train_" + param2].cat_cl.cat1.cat2);
                    this.init_tr2(param2);
                    this.check_set_coach();
                }
            }
            if(this.no_set_train) {
                if(Main.sav.data["cat_place_" + param1] >= 9) {
                    if(param2 <= 6 && Main.sav.data["cat_hp_" + param1] <= Math.floor(Main.sav.data["cat_hp2_" + param1] * 0.25)) {
                        this["talk_" + Main.sav.data["cat_place_" + param1]].gotoAndStop("clear_frame");
                        this["talk_" + Main.sav.data["cat_place_" + param1]].gotoAndStop(1);
                    } else if((param2 == 7 || param2 == 8) && (Main.sav.data["cat_injury1_" + param1] == 0 && Main.sav.data["cat_injury2_" + param1] == 0 && Main.sav.data["cat_injury3_" + param1] == 0)) {
                        this["talk_" + Main.sav.data["cat_place_" + param1]].gotoAndStop("clear_frame");
                        this["talk_" + Main.sav.data["cat_place_" + param1]].gotoAndStop(3);
                    }
                }
            }
        }

        public hide_from_train(param1: any): any {
            this["train_" + param1].cat_cl.$setVisible(false);
            this["train_" + param1].gotoAndStop(1);
            if(param1 < 7) {
                this["train_" + param1].coach_cl.$setVisible(false);
            }
            if(param1 < 7 || param1 > 8) {
                this["train_" + param1].tr_cl.$setVisible(true);
            }
        }

        public check_set_coach(): any {
            this.coach_stay_cl.$setVisible(true);
            i6 = 1;
            while(i6 <= 6) {
                if(this.ex2_in_place(i6) == 1) {
                    this.coach_stay_cl.$setVisible(false);
                    break;
                }
                i6++;
            }
        }

        public game_f(param1: egret.Event): any {
            i = 0;
            while(i < this.arr_last_frame_skin.length) {
                if(this.arr_last_frame_skin[i].currentFrame == this.arr_last_frame_skin[i].totalFrames) {
                    this.arr_last_frame_zone[i].removeChild(this.arr_last_frame_skin[i]);
                    this.arr_last_frame_skin.splice(i,1);
                    this.arr_last_frame_zone.splice(i,1);
                    break;
                }
                i++;
            }
            if(--this.spy_time < 0) {
                this.grass_cl.spy_cl.play();
                this.spy_time = 2400 + std._rnd(9000);
            }
            if(this.drag_mode) {
                this.cat_drag.$setX(mouseX);
                this.cat_drag.$setY(mouseY);
            }
            if(this.upg_ex == false && this.stat_ex == false && this.drag_mode == false) {
                i = 1;
                while(i <= 4) {
                    if(_mo(this["slot_" + i].telo)) {
                        this["slot_" + i].p2.hp_tx.$setVisible(true);
                    } else {
                        this["slot_" + i].p2.hp_tx.$setVisible(false);
                    }
                    i++;
                }
            }
            if(!this.drag_mode) {
                if(_mo(this.next_bt)) {
                    this.calendar_cl.$setVisible(true);
                    if(Main.sav.data.week != 7) {
                        this.calendar_cl.gotoAndStop(1);
                    } else {
                        this.calendar_cl.gotoAndStop(2);
                        if(Main.sav.data.rest == 0) {
                            if(Main.sav.data.playoff == 1) {
                                if(Main.sav.data.playoff_round == 1) {
                                    i_in = this._info_enemy.got_title(Main.sav.data.off_team_2);
                                } else if(Main.sav.data.playoff_round == 2) {
                                    i_in = this._info_enemy.got_title(Main.sav.data.off_team_5);
                                } else {
                                    i_in = this._info_enemy.got_title(22);
                                }
                            } else {
                                i_in = this._info_enemy.got_title(this._app.arr_enemy_row[Main.sav.data.season_round + Main.sav.data.season_koff]);
                            }
                            if(i_in.length < 10) {
                                this.calendar_cl.bg_cl.gotoAndStop(1);
                            } else if(i_in.length < 14) {
                                this.calendar_cl.bg_cl.gotoAndStop(2);
                            } else {
                                this.calendar_cl.bg_cl.gotoAndStop(3);
                            }
                            this.calendar_cl.title_tx.text = i_in;
                        } else {
                            this.calendar_cl.gotoAndStop(3);
                        }
                    }
                } else {
                    this.calendar_cl.$setVisible(false);
                }
            }
        }

        public click_f(param1: egret.TouchEvent): any {
            if(this.pre_battle_ex) {
                if(_mo(this.pre_battle_cl.no)) {
                    this.pre_battle_ex = false;
                    this.zone_tuto.removeChild(this.pre_battle_cl);
                    this._app._so.load_by_name(click_so);
                } else if(_mo(this.pre_battle_cl.yes)) {
                    this._app._so.load_by_name(click_so);
                    this.zone_tuto.removeChild(this.pre_battle_cl);
                    this.to_battle = 0;
                    this.train_cats();
                    this.delete2_f();
                    this.addEventListener(egret.Event.ENTER_FRAME,this.to_battle_f,this);
                    this._app.train_mode = false;
                }
            } else {
                if(this.upg_ex) {
                    if(_mo(this.upg_cl.close_bt)) {
                        this.upg_cl.$setVisible(false);
                        this.upg_ex = false;
                        this._app._so.load_by_name(click_so);
                    }
                    if(_mo(this.upg_bt)) {
                        this.upg_cl.$setVisible(false);
                        this.upg_ex = false;
                        this._app._so.load_by_name(click_so);
                    }
                    i = 1;
                    while(i <= 5) {
                        if(_mo(this.upg_cl["slot_" + i].buy_cl)) {
                            if(Main.sav.data.gold >= Main.sav.data["stuff_price_" + i]) {
                                if(i < 4 && Main.sav.data["stuff_level_" + i] < 7 || i == 4 && Main.sav.data["stuff_level_" + i] < 5 || i == 5 && Main.sav.data["stuff_level_" + i] < 3) {
                                    this.remove_gold(Main.sav.data["stuff_price_" + i]);
                                    _loc2_[_loc3_] = Main.sav.data["stuff_level_" + i] + 1;
                                    this._app._so.load_by_name(buy_so);
                                    if(i < 4) {
                                        Main.sav.data["stuff_price_" + i] = Math.floor(Main.sav.data["stuff_price_" + i] * 1.6);
                                    } else if(i == 4) {
                                        Main.sav.data["stuff_price_" + i] = Math.floor(Main.sav.data["stuff_price_" + i] * 2.5);
                                    } else if(i == 5) {
                                        Main.sav.data["stuff_price_" + i] = Math.floor(Main.sav.data["stuff_price_" + i] * 2.5);
                                    }
                                    this.init_tr();
                                    this.load_upg();
                                    if(i < 4) {
                                        switch(Main.sav.data["stuff_level_" + i]) {
                                            case 2:
                                                Main.sav.data["stuff_" + i] = 20;
                                                Main.sav.data["stuff_min_" + i] = 20;
                                                break;
                                            case 3:
                                                Main.sav.data["stuff_" + i] = 30;
                                                Main.sav.data["stuff_min_" + i] = 40;
                                                break;
                                            case 4:
                                                Main.sav.data["stuff_" + i] = 45;
                                                Main.sav.data["stuff_min_" + i] = 55;
                                                break;
                                            case 5:
                                                Main.sav.data["stuff_" + i] = 85;
                                                Main.sav.data["stuff_min_" + i] = 70;
                                                break;
                                            case 6:
                                                Main.sav.data["stuff_" + i] = 100;
                                                Main.sav.data["stuff_min_" + i] = 80;
                                                break;
                                            case 7:
                                                Main.sav.data["stuff_" + i] = 200;
                                                Main.sav.data["stuff_min_" + i] = 95;
                                        }
                                    } else if(i == 4) {
                                        Main.sav.data["stuff_" + i] = Main.sav.data["stuff_" + i] * 2;
                                    } else if(i == 5) {
                                        Main.sav.data["stuff_" + i] = Main.sav.data["stuff_" + i] + 100;
                                    }
                                    Main.sav.flush();
                                    break;
                                }
                            }
                        }
                        i++;
                    }
                } else if(this.stat_ex) {
                    if(_mo(this.stat_cl.close_bt)) {
                        this._app._so.load_by_name(click_so);
                        this.stat_cl.$setVisible(false);
                        this.stat_ex = false;
                    }
                    if(_mo(this.stat_cl.playoff_bt)) {
                        if(this.stat_cl.playoff_cl.visible == false) {
                            this.stat_cl.line_about_cl.$setVisible(false);
                            this.stat_cl.slots_cl.$setVisible(false);
                            this.stat_cl.playoff_cl.$setVisible(true);
                            this.stat_cl.title_cl.gotoAndStop(5);
                            this.stat_cl.playoff_bt.gotoAndStop(2);
                        } else {
                            this.stat_cl.line_about_cl.$setVisible(true);
                            this.stat_cl.slots_cl.$setVisible(true);
                            this.stat_cl.playoff_cl.$setVisible(false);
                            this.stat_cl.title_cl.gotoAndStop(Main.sav.data.league);
                            this.stat_cl.playoff_bt.gotoAndStop(1);
                        }
                    }
                } else {
                    if(_mo(this.gong_cl)) {
                        this._app._so.load_by_name2(gong_so,50);
                        rnd_for = 0;
                        i = 1;
                        while(i <= 8) {
                            if(this.ex_in_place(i) == 1) {
                                rnd_for = 1;
                                break;
                            }
                            i++;
                        }
                        if(rnd_for == 1) {
                            this.gong_cl.gotoAndPlay(2);
                            this.to_table(1);
                            this.to_table(2);
                            this.to_table(3);
                            this.to_table(4);
                        } else {
                            this.gong_cl.gotoAndPlay(2);
                            i = 1;
                            while(i <= 4) {
                                this.found_train = false;
                                if(Main.sav.data["cat_injury1_" + i] == 1 || Main.sav.data["cat_injury2_" + i] == 1 || Main.sav.data["cat_injury3_" + i] == 1) {
                                    if(this.ex_in_place(7) == 0) {
                                        this.set_to_train(i,7,0);
                                        this.found_train = true;
                                    } else if(this.ex_in_place(8) == 0) {
                                        this.set_to_train(i,8,0);
                                        this.found_train = true;
                                    }
                                }
                                if(this.found_train == false) {
                                    if(Main.sav.data["cat_attack_level_" + i] <= Main.sav.data["cat_hp_level_" + i] && Main.sav.data["cat_attack_level_" + i] <= Main.sav.data["cat_speed_level_" + i]) {
                                        if(this.ex_in_place(1) == 0) {
                                            this.set_to_train(i,1,0);
                                            this.found_train = true;
                                        } else if(this.ex_in_place(2) == 0) {
                                            this.set_to_train(i,2,0);
                                            this.found_train = true;
                                        }
                                    }
                                }
                                if(this.found_train == false) {
                                    if(Main.sav.data["cat_hp_level_" + i] <= Main.sav.data["cat_attack_level_" + i] && Main.sav.data["cat_hp_level_" + i] <= Main.sav.data["cat_speed_level_" + i]) {
                                        if(this.ex_in_place(3) == 0) {
                                            this.set_to_train(i,3,0);
                                            this.found_train = true;
                                        } else if(this.ex_in_place(4) == 0) {
                                            this.set_to_train(i,4,0);
                                            this.found_train = true;
                                        }
                                    }
                                }
                                if(this.found_train == false) {
                                    if(this.ex_in_place(5) == 0) {
                                        this.set_to_train(i,5,0);
                                        this.found_train = true;
                                    } else if(this.ex_in_place(6) == 0) {
                                        this.set_to_train(i,6,0);
                                        this.found_train = true;
                                    }
                                }
                                if(this.found_train == false) {
                                    if(this.ex_in_place(3) == 0) {
                                        this.set_to_train(i,3,0);
                                        this.found_train = true;
                                    } else if(this.ex_in_place(4) == 0) {
                                        this.set_to_train(i,4,0);
                                        this.found_train = true;
                                    }
                                }
                                if(this.found_train == false) {
                                    if(this.ex_in_place(1) == 0) {
                                        this.set_to_train(i,1,0);
                                        this.found_train = true;
                                    } else if(this.ex_in_place(2) == 0) {
                                        this.set_to_train(i,2,0);
                                        this.found_train = true;
                                    }
                                }
                                if(this.found_train == false) {
                                    this.to_table(i);
                                }
                                i++;
                            }
                        }
                    }
                    if(_mo(this.next_bt)) {
                        this._app._so.load_by_name(next_day_so);
                        if(Main.sav.data.week == 7) {
                            if(!this.pre_battle_ex) {
                                this.pre_battle_cl = this._sp(pre_battle_mc,this.zone_tuto,330,230);
                                this.pre_battle_ex = true;
                            }
                            if(Main.sav.data.rest == 1) {
                                this.pre_battle_cl.gotoAndStop(2);
                            } else {
                                this.pre_battle_cl.gotoAndStop(1);
                            }
                        } else {
                            Main.sav.data.week++;
                            this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
                            this.set_next_bt_frame();
                            this.train_cats();
                            this.load_slots();
                        }
                    }
                    if(_mo(this.stat_bt)) {
                        this._app._so.load_by_name(click_so);
                        this.stat_cl.$setVisible(true);
                        if(Main.sav.data.playoff == 0) {
                            this.stat_cl.line_about_cl.$setVisible(true);
                            this.stat_cl.slots_cl.$setVisible(true);
                            this.stat_cl.playoff_cl.$setVisible(false);
                            this.stat_cl.title_cl.gotoAndStop(Main.sav.data.league);
                            this.stat_cl.playoff_bt.gotoAndStop(1);
                        } else {
                            this.stat_cl.line_about_cl.$setVisible(false);
                            this.stat_cl.slots_cl.$setVisible(false);
                            this.stat_cl.playoff_cl.$setVisible(true);
                            this.stat_cl.title_cl.gotoAndStop(5);
                            this.stat_cl.playoff_bt.gotoAndStop(2);
                        }
                        this.stat_ex = true;
                    }
                    if(_mo(this.upg_bt)) {
                        this.upg_cl.$setVisible(true);
                        this.upg_ex = true;
                        this._app._so.load_by_name(click_so);
                        this.load_upg();
                    }
                    if(_mo(this.dress_bt)) {
                        this._app._so.load_by_name(click_so);
                        this._app.open_new_screen("dress");
                    }
                }
                i = 1;
                while(i <= 4) {
                    if(_mo(this["slot_" + i].p2.injury_1) && Main.sav.data["cat_injury1_" + i] == 1 || _mo(this["slot_" + i].p2.injury_2) && Main.sav.data["cat_injury2_" + i] == 1 || _mo(this["slot_" + i].p2.injury_3) && Main.sav.data["cat_injury3_" + i] == 1) {
                        if(this.ex_in_place(7) == 0) {
                            this.set_to_train(i,7,1);
                            break;
                        }
                        if(this.ex_in_place(8) == 0) {
                            this.set_to_train(i,8,1);
                            break;
                        }
                    }
                    if(_mo(this["slot_" + i].to_hp_bt)) {
                        if(Main.sav.data["cat_place_" + i] != 3 && Main.sav.data["cat_place_" + i] != 4) {
                            if(this.ex_in_place(3) == 0) {
                                this.set_to_train(i,3,1);
                                break;
                            }
                            if(this.ex_in_place(4) == 0) {
                                this.set_to_train(i,4,1);
                                break;
                            }
                        }
                    }
                    if(_mo(this["slot_" + i].to_attack_bt)) {
                        if(Main.sav.data["cat_place_" + i] != 1 && Main.sav.data["cat_place_" + i] != 2) {
                            if(this.ex_in_place(1) == 0) {
                                this.set_to_train(i,1,1);
                                break;
                            }
                            if(this.ex_in_place(2) == 0) {
                                this.set_to_train(i,2,1);
                                break;
                            }
                        }
                    }
                    if(_mo(this["slot_" + i].to_speed_bt)) {
                        if(Main.sav.data["cat_place_" + i] != 5 && Main.sav.data["cat_place_" + i] != 6) {
                            if(this.ex_in_place(5) == 0) {
                                this.set_to_train(i,5,1);
                                break;
                            }
                            if(this.ex_in_place(6) == 0) {
                                this.set_to_train(i,6,1);
                                break;
                            }
                        }
                    }
                    i++;
                }
                if(_mo(this.menu_bt_cl)) {
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_pause_f,this);
                    this.removeEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.drag_m_down_f,this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.drag_m_up_f,this);
                    this.pause_cl.$setVisible(true);
                }
            }
        }

        public drag_m_down_f(param1: egret.TouchEvent): any {
            if(this.upg_ex == false && this.stat_ex == false && this.pre_battle_ex == false) {
                if(this.drag_mode == false) {
                    i = 1;
                    while(i <= 12) {
                        if(_mo(this["zone_" + i])) {
                            if(this.ex_in_place(i) == 1) {
                                this.cat_drag = this._sp(cat_drag_mc,this.zone_drag,mouseX,mouseY);
                                this.drag_mode = true;
                                this.type_zone = i;
                                this.cat_drag_type = this.cat_type;
                                this.hide_from_train(i);
                                if(i > 6) {
                                    this._app._so.load_by_name(take_cat2_so);
                                } else {
                                    this._app._so.load_by_name(take_cat_so);
                                }
                                this.dress_up(this.cat_type,this.cat_drag.cat1.cat2);
                                break;
                            }
                        }
                        i++;
                    }
                }
            }
        }

        public drag_m_up_f(param1: egret.TouchEvent): any {
            if(this.drag_mode) {
                this.yes_new_place = false;
                i = 1;
                while(i <= 12) {
                    if(_mo(this["zone_" + i])) {
                        if(this.ex_in_place(i) == 0) {
                            this.set_to_train(this.cat_type,i,1);
                            break;
                        }
                    }
                    i++;
                }
                if(this.yes_new_place == false) {
                    this.set_to_train(this.cat_drag_type,this.type_zone,0);
                }
                this.zone_drag.removeChild(this.cat_drag);
                this.drag_mode = false;
            }
        }

        public click_pause_f(param1: egret.TouchEvent): any {
            if(_mo(this.pause_cl.resume_bt)) {
                this.pause_cl.$setVisible(false);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_pause_f,this);
                this.add_function();
            }
            if(_mo(this.pause_cl.home_bt)) {
                this._app.open_new_screen("menu");
            }
        }

        public click_paper_f(param1: egret.TouchEvent): any {
            if(Main.sav.data.tuto3 == 1) {
                Main.sav.data.tuto3 = 2;
                this.tuto_cl = this._sp(tuto12_mc,this.zone_tuto,0,0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto12_click_f,this);
            } else {
                this.add_tuto4();
            }
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_paper_f,this);
            this.zone_tuto.removeChild(this.paper_cl);
        }

        public click_result_f(param1: egret.TouchEvent): any {
            if(_mo(this.result_season_cl)) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_result_f,this);
                if(Main.sav.data.tuto2 == 1) {
                    Main.sav.data.tuto2 = 2;
                    this.tuto_cl = this._sp(tuto2_mc,this.zone_tuto,0,0);
                    this.addEventListener(egret.Event.ENTER_FRAME,this.tuto2_f,this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto2_m_down_f,this);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.tuto2_m_up_f,this);
                } else {
                    this.add_tuto4();
                }
                this.zone_tuto.removeChild(this.result_season_cl);
            }
        }

        public to_battle_f(param1: egret.Event): any {
            if(++this.to_battle > 40) {
                this.removeEventListener(egret.Event.ENTER_FRAME,this.to_battle_f,this);
                if(Main.sav.data.rest == 1) {
                    Main.sav.data.rest = 0;
                    this.upgate_season();
                    this._app.train_mode = false;
                    this._app.open_new_screen("upg");
                } else {
                    this._app.train_mode = false;
                    this._app.open_new_screen("game");
                }
            }
        }

        public check_prices(): any {
            this.sign_cl.$setVisible(false);
            i3 = 1;
            while(i3 <= 5) {
                if(i3 < 4 && Main.sav.data["stuff_level_" + i3] < 7 || i3 == 4 && Main.sav.data["stuff_level_" + i3] < 5 || i3 == 5 && Main.sav.data["stuff_level_" + i3] < 3) {
                    if(Main.sav.data.gold >= Main.sav.data["stuff_price_" + i3]) {
                        this.sign_cl.$setVisible(true);
                        break;
                    }
                }
                i3++;
            }
        }

        public train_cats(): any {
            i3 = 1;
            while(i3 <= 4) {
                if(Main.sav.data["cat_place_" + i3] >= 9) {
                    Main.sav.data["cat_hp_" + i3] = Main.sav.data["cat_hp_" + i3] + Main.sav.data.stuff_4;
                    if(Main.sav.data["cat_hp_" + i3] > Math.floor(Main.sav.data["cat_hp2_" + i3] * Main.sav.data["cat_hp_koff_" + i3])) {
                        Main.sav.data["cat_hp_" + i3] = Math.floor(Main.sav.data["cat_hp2_" + i3] * Main.sav.data["cat_hp_koff_" + i3]);
                    }
                    this.add_train_icon(Main.sav.data["cat_place_" + i3],4,0);
                }
                if(Main.sav.data["cat_place_" + i3] == 1 || Main.sav.data["cat_place_" + i3] == 2) {
                    Main.sav.data["cat_hp_" + i3] = Main.sav.data["cat_hp_" + i3] - Main.sav.data.stuff_min_1;
                    Main.sav.data["cat_stat1_" + i3] = Main.sav.data["cat_stat1_" + i3] + Main.sav.data.stuff_1;
                    if(Main.sav.data["cat_stat1_" + i3] >= Main.sav.data["cat_stat1_2_" + i3]) {
                        Main.sav.data["cat_stat1_2_" + i3] = Math.floor(Main.sav.data["cat_stat1_2_" + i3] * 1.05);
                        Main.sav.data["cat_stat1_" + i3] = 0;
                        _loc1_[_loc2_] = Main.sav.data["cat_attack_level_" + i3] + 1;
                        _loc1_[_loc2_] = Main.sav.data["cat_attack_" + i3] + 1;
                    }
                    if(Main.sav.data["cat_attack_level_" + i3] >= 99 || Main.sav.data["cat_hp_" + i3] <= Math.floor(Main.sav.data["cat_hp2_" + i3] * 0.25)) {
                        this.to_table(i3);
                    }
                    this.add_train_icon(Main.sav.data["cat_place_" + i3],1,-30);
                    this.add_train_icon(Main.sav.data["cat_place_" + i3],5,0);
                }
                if(Main.sav.data["cat_place_" + i3] == 3 || Main.sav.data["cat_place_" + i3] == 4) {
                    Main.sav.data["cat_hp_" + i3] = Main.sav.data["cat_hp_" + i3] - Main.sav.data.stuff_min_2;
                    Main.sav.data["cat_stat2_" + i3] = Main.sav.data["cat_stat2_" + i3] + Main.sav.data.stuff_2;
                    if(Main.sav.data["cat_stat2_" + i3] >= Main.sav.data["cat_stat2_2_" + i3]) {
                        Main.sav.data["cat_stat2_2_" + i3] = Math.floor(Main.sav.data["cat_stat2_2_" + i3] * 1.05);
                        Main.sav.data["cat_stat2_" + i3] = 0;
                        _loc1_[_loc2_] = Main.sav.data["cat_hp_level_" + i3] + 1;
                        Main.sav.data["cat_hp2_" + i3] = Main.sav.data["cat_hp2_" + i3] + 5;
                    }
                    if(Main.sav.data["cat_hp_level_" + i3] >= 99 || Main.sav.data["cat_hp_" + i3] <= Math.floor(Main.sav.data["cat_hp2_" + i3] * 0.25)) {
                        this.to_table(i3);
                    }
                    this.add_train_icon(Main.sav.data["cat_place_" + i3],2,-10);
                    this.add_train_icon(Main.sav.data["cat_place_" + i3],5,20);
                }
                if(Main.sav.data["cat_place_" + i3] == 5 || Main.sav.data["cat_place_" + i3] == 6) {
                    Main.sav.data["cat_hp_" + i3] = Main.sav.data["cat_hp_" + i3] - Main.sav.data.stuff_min_3;
                    Main.sav.data["cat_stat3_" + i3] = Main.sav.data["cat_stat3_" + i3] + Main.sav.data.stuff_3;
                    if(Main.sav.data["cat_stat3_" + i3] >= Main.sav.data["cat_stat3_2_" + i3]) {
                        Main.sav.data["cat_stat3_2_" + i3] = Math.floor(Main.sav.data["cat_stat3_2_" + i3] * 1.05);
                        Main.sav.data["cat_stat3_" + i3] = 0;
                        _loc1_[_loc2_] = Main.sav.data["cat_speed_level_" + i3] + 1;
                        Main.sav.data["cat_speed_" + i3] = Main.sav.data["cat_speed_" + i3] - 2;
                    }
                    if(Main.sav.data["cat_speed_level_" + i3] >= 99 || Main.sav.data["cat_hp_" + i3] <= Math.floor(Main.sav.data["cat_hp2_" + i3] * 0.25)) {
                        this.to_table(i3);
                    }
                    this.add_train_icon(Main.sav.data["cat_place_" + i3],3,-20);
                    this.add_train_icon(Main.sav.data["cat_place_" + i3],5,10);
                }
                if(Main.sav.data.stuff_5 > 200) {
                    this.n_of_treat = 2;
                } else {
                    this.n_of_treat = 1;
                }
                this.n_of_treat2 = 1;
                while(this.n_of_treat2 <= this.n_of_treat) {
                    if(Main.sav.data["cat_place_" + i3] == 7 || Main.sav.data["cat_place_" + i3] == 8) {
                        this.add_train_icon(Main.sav.data["cat_place_" + i3],6,-10);
                        if(Main.sav.data["cat_injury1_" + i3] == 1) {
                            Main.sav.data["cat_injury1_time_" + i3] = Main.sav.data["cat_injury1_time_" + i3] + Main.sav.data.stuff_5;
                            if(Main.sav.data["cat_injury1_time_" + i3] >= this.injury2) {
                                Main.sav.data["cat_injury1_" + i3] = 0;
                                if(Main.sav.data["cat_injury2_" + i3] == 1 && Main.sav.data["cat_injury3_" + i3] == 1) {
                                    Main.sav.data["cat_hp_koff_" + i3] = 0.5;
                                } else if(Main.sav.data["cat_injury2_" + i3] == 1 || Main.sav.data["cat_injury3_" + i3] == 1) {
                                    Main.sav.data["cat_hp_koff_" + i3] = 0.75;
                                } else {
                                    Main.sav.data["cat_hp_koff_" + i3] = 1;
                                }
                            }
                        } else if(Main.sav.data["cat_injury2_" + i3] == 1) {
                            Main.sav.data["cat_injury2_time_" + i3] = Main.sav.data["cat_injury2_time_" + i3] + Main.sav.data.stuff_5;
                            if(Main.sav.data["cat_injury2_time_" + i3] >= this.injury2) {
                                Main.sav.data["cat_injury2_" + i3] = 0;
                                if(Main.sav.data["cat_injury1_" + i3] == 1 && Main.sav.data["cat_injury3_" + i3] == 1) {
                                    Main.sav.data["cat_hp_koff_" + i3] = 0.5;
                                } else if(Main.sav.data["cat_injury1_" + i3] == 1 || Main.sav.data["cat_injury3_" + i3] == 1) {
                                    Main.sav.data["cat_hp_koff_" + i3] = 0.75;
                                } else {
                                    Main.sav.data["cat_hp_koff_" + i3] = 1;
                                }
                            }
                        } else {
                            Main.sav.data["cat_injury3_time_" + i3] = Main.sav.data["cat_injury3_time_" + i3] + Main.sav.data.stuff_5;
                            if(Main.sav.data["cat_injury3_time_" + i3] >= this.injury2) {
                                Main.sav.data["cat_injury3_" + i3] = 0;
                                if(Main.sav.data["cat_injury2_" + i3] == 1 && Main.sav.data["cat_injury1_" + i3] == 1) {
                                    Main.sav.data["cat_hp_koff_" + i3] = 0.5;
                                } else if(Main.sav.data["cat_injury2_" + i3] == 1 || Main.sav.data["cat_injury1_" + i3] == 1) {
                                    Main.sav.data["cat_hp_koff_" + i3] = 0.75;
                                } else {
                                    Main.sav.data["cat_hp_koff_" + i3] = 1;
                                }
                            }
                        }
                        if(Main.sav.data["cat_injury1_" + i3] == 0 && Main.sav.data["cat_injury2_" + i3] == 0 && Main.sav.data["cat_injury3_" + i3] == 0) {
                            this.to_table(i3);
                            if(this.ex_in_place(7) == 1) {
                                this.doctor_cl.gotoAndStop(2);
                            } else if(this.ex_in_place(8) == 1) {
                                this.doctor_cl.gotoAndStop(3);
                            } else {
                                this.doctor_cl.gotoAndStop(1);
                            }
                        }
                    }
                    this.n_of_treat2++;
                }
                i3++;
            }
        }

        public add_train_icon(param1: any, param2: any, param3: any): any {
            sprite_var = this._sp(icon_train_mc,this.zone_up_all,this["train_" + param1].x + param3,this["train_" + param1].y);
            sprite_var.icon2.gotoAndStop(param2);
            this._to_last(sprite_var,this.zone_up_all);
        }

        public load_upg(): any {
            this.remove_gold(0);
            i3 = 1;
            while(i3 <= 5) {
                this.upg_cl["slot_" + i3].icon_cl.gotoAndStop(i3);
                this.upg_cl["slot_" + i3].icon_cl.icon2.gotoAndStop(Main.sav.data["stuff_level_" + i3]);
                this.upg_cl["slot_" + i3].title_tx.text = this.load_title(i3);
                this.upg_cl["slot_" + i3].des_tx.text = this.load_des(i3);
                this.upg_cl["slot_" + i3].price_tx.text = Main.sav.data["stuff_price_" + i3];
                if(i3 < 4 && Main.sav.data["stuff_level_" + i3] < 7 || i3 == 4 && Main.sav.data["stuff_level_" + i3] < 5 || i3 == 5 && Main.sav.data["stuff_level_" + i3] < 3) {
                    if(Main.sav.data.gold >= Main.sav.data["stuff_price_" + i3]) {
                        this.upg_cl["slot_" + i3].buy_cl.gotoAndStop(1);
                    } else {
                        this.upg_cl["slot_" + i3].buy_cl.gotoAndStop(2);
                    }
                } else {
                    this.upg_cl["slot_" + i3].buy_cl.gotoAndStop(3);
                }
                i3++;
            }
            this.check_prices();
        }

        public load_title(param1: any): any {
            switch(param1) {
                case 1:
                    return "练习袋";
                case 2:
                    return "杠铃";
                case 3:
                    return "跑步机";
                case 4:
                    return "营养";
                case 5:
                    return "治疗";
                default:
                    return;
            }
        }

        public load_des(param1: any): any {
            switch(param1) {
                case 1:
                    return "改善攻击力训练";
                case 2:
                    return "改善生命力训练";
                case 3:
                    return "改善速度训练和技能回复几率";
                case 4:
                    return "增加能量回复比率";
                case 5:
                    return "增加受伤回复比率";
                default:
                    return;
            }
        }

        public remove_gold(param1: any): any {
            Main.sav.data.gold = Main.sav.data.gold - param1;
            this.upg_cl.money_tx.text = Main.sav.data.gold;
            this.money_tx.text = Main.sav.data.gold;
        }

        public to_table(param1: any): any {
            if(Main.sav.data["cat_place_" + param1] < 9) {
                this.hide_from_train(Main.sav.data["cat_place_" + param1]);
                i2 = 9;
                while(i2 <= 12) {
                    if(this.ex_in_place(i2) == 0) {
                        if(Main.sav.data["cat_hp_" + param1] < Math.floor(Main.sav.data["cat_hp2_" + param1] * 0.25)) {
                            Main.sav.data["cat_hp_" + param1] = Math.floor(Main.sav.data["cat_hp2_" + param1] * 0.25);
                        }
                        this.set_to_train(param1,i2,0);
                        break;
                    }
                    i2++;
                }
            }
        }

        public dress_up(param1: any, param2: any): any {
            param2.head_clWool_cl.gotoAndStop(param1);
            param2.hand_l_clWool_cl.gotoAndStop(param1);
            param2.hand_r_clWool_cl.gotoAndStop(param1);
            param2.body_clWool_cl.gotoAndStop(param1);
            param2.foot1_clWool_cl.gotoAndStop(param1);
            param2.foot2_clWool_cl.gotoAndStop(param1);
            param2.tail_cl.gotoAndStop(param1);
            this.set_id = 1 + Main.sav.data["cat_dress_" + param1];
            param2.head_clH2.gotoAndStop(this.set_id);
            param2.hand_l_clSleeve_cl.gotoAndStop(this.set_id);
            param2.hand_l_clW2.gotoAndStop(1);
            param2.hand_r_clSleeve_cl.gotoAndStop(this.set_id);
            param2.hand_r_clS2.gotoAndStop(1);
            param2.body_clB2.gotoAndStop(this.set_id);
            param2.foot1_clP2.gotoAndStop(this.set_id);
            param2.foot2_clP2.gotoAndStop(this.set_id);
            param2.skirt_cl.gotoAndStop(this.set_id);
            param2.cloak_cl.gotoAndStop(this.set_id);
        }

        public dress_up2(param1: any, param2: any, param3: any): any {
            param2.head_clWool_cl.gotoAndStop(param1);
            param2.hand_l_clWool_cl.gotoAndStop(param1);
            param2.hand_r_clWool_cl.gotoAndStop(param1);
            param2.body_clWool_cl.gotoAndStop(param1);
            param2.foot1_clWool_cl.gotoAndStop(param1);
            param2.foot2_clWool_cl.gotoAndStop(param1);
            param2.tail_cl.gotoAndStop(param1);
            param3++;
            param2.head_clH2.gotoAndStop(param3);
            param2.hand_l_clSleeve_cl.gotoAndStop(param3);
            param2.hand_l_clW2.gotoAndStop(param3);
            param2.hand_r_clSleeve_cl.gotoAndStop(param3);
            param2.hand_r_clS2.gotoAndStop(param3);
            param2.body_clB2.gotoAndStop(param3);
            param2.foot1_clP2.gotoAndStop(param3);
            param2.foot2_clP2.gotoAndStop(param3);
            param2.skirt_cl.gotoAndStop(param3);
            param2.cloak_cl.gotoAndStop(param3);
            param3--;
        }

        public simulate_day(): any {
            var new_step:Function = function():any {
                this.arr_temp.splice(0,arr_temp.length);
                this.arr_temp2.splice(0,arr_temp2.length);
                if(numbef_of_m == 0) {
                    this.arr_temp.push(2,3,4,5,6);
                    this.arr_temp2.push(2,3,4,5,6);
                } else {
                    i3 = 2 + numbef_of_m;
                    while(arr_temp.length < 5) {
                        this.arr_temp.push(i3);
                        i3++;
                        if(i3 > 6) {
                            i3 = 2;
                        }
                    }
                    if(numbef_of_two) {
                        i3 = 2 + numbef_of_m2;
                        while(arr_temp2.length < 5) {
                            this.arr_temp2.push(i3);
                            i3++;
                            if(i3 > 6) {
                                i3 = 2;
                            }
                        }
                    }
                }
                this.arr_op.splice(0,arr_op.length);
                this.arr_op2.splice(0,arr_op2.length);
                numbef_of_m++;
                if(numbef_of_m == 4) {
                    numbef_of_two = true;
                    numbef_of_m = 0;
                    numbef_of_m2++;
                    if(numbef_of_m2 == 4) {
                        numbef_of_m2 = 0;
                    }
                }
                numbef_of_m3++;
            };
            var set_match:Function = function():any {
                new_step();
                i3 = 0;
                while(i3 < arr_temp.length) {
                    i5 = 0;
                    while(i5 < arr_temp2.length) {
                        if(arr_temp[i3] != _app.team_enemy_id && arr_temp2[i5] != _app.team_enemy_id && arr_temp[i3] != arr_temp2[i5]) {
                            if(Main.sav.data["match_" + arr_temp[i3] + "_vs_" + arr_temp2[i5]] == 0 && Main.sav.data["match_" + arr_temp2[i5] + "_vs_" + arr_temp[i3]] == 0) {
                                this.arr_op.push(arr_temp[i3]);
                                this.arr_op2.push(arr_temp2[i5]);
                                rnd_for = arr_temp[i3];
                                rnd_for2 = arr_temp2[i5];
                                this.arr_temp.splice(i3,1);
                                this.arr_temp2.splice(i5,1);
                                i6 = 0;
                                while(i6 < arr_temp.length) {
                                    if(arr_temp[i6] == rnd_for2) {
                                        this.arr_temp.splice(i6,1);
                                        break;
                                    }
                                    i6++;
                                }
                                i6 = 0;
                                while(i6 < arr_temp2.length) {
                                    if(arr_temp2[i6] == rnd_for) {
                                        this.arr_temp2.splice(i6,1);
                                        break;
                                    }
                                    i6++;
                                }
                                i5--;
                                i3--;
                            }
                        }
                        i5++;
                    }
                    i3++;
                }
                if(arr_op.length == 2 || numbef_of_m3 == 9000) {
                    return 1;
                }
                return 0;
            };
            this._app.team_enemy_id = this._app.arr_enemy_row[Main.sav.data.season_round];
            _loc2_[_loc3_] = Main.sav.data["team_games_" + this._app.team_enemy_id] + 1;
            _loc2_[_loc3_] = Main.sav.data["team_d_" + this._app.team_enemy_id] + 1;
            Main.sav.data.team_games_1++;
            Main.sav.data.team_w_1++;
            Main.sav.data.team_pts_1 = Main.sav.data.team_pts_1 + 4;
            this.numbef_of_m = 1;
            this.numbef_of_m2 = 2;
            this.numbef_of_two = false;
            this.numbef_of_m3 = 0;
            while(set_match() == 0) {
            }
            i3 = 0;
            while(i3 < this.arr_op.length) {
                rnd_for5 = 0;
                rnd_for6 = 0;
                i6 = 1;
                while(i6 <= 50) {
                    if(this.arr_op[i3] + std._rnd(5) >= i5 + std._rnd(5)) {
                        rnd_for5++;
                    } else {
                        rnd_for6++;
                    }
                    if(rnd_for5 >= 4) {
                        _loc2_[_loc3_] = Main.sav.data["team_w_" + this.arr_op[i3]] + 1;
                        _loc2_[_loc3_] = Main.sav.data["team_d_" + this.arr_op2[i3]] + 1;
                        break;
                    }
                    if(rnd_for6 >= 4) {
                        _loc2_[_loc3_] = Main.sav.data["team_w_" + this.arr_op2[i3]] + 1;
                        _loc2_[_loc3_] = Main.sav.data["team_d_" + this.arr_op[i3]] + 1;
                        break;
                    }
                    i6++;
                }
                Main.sav.data["team_pts_" + this.arr_op[i3]] = Main.sav.data["team_pts_" + this.arr_op[i3]] + rnd_for5;
                Main.sav.data["team_pts_" + this.arr_op2[i3]] = Main.sav.data["team_pts_" + this.arr_op2[i3]] + rnd_for6;
                _loc2_[_loc3_] = Main.sav.data["team_games_" + this.arr_op[i3]] + 1;
                _loc2_[_loc3_] = Main.sav.data["team_games_" + this.arr_op2[i3]] + 1;
                Main.sav.data["match_" + this.arr_op[i3] + "_vs_" + this.arr_op2[i3]] = 1;
                Main.sav.data["match_" + this.arr_op2[i3] + "_vs_" + this.arr_op[i3]] = 1;
                i3++;
            }
            Main.sav.data.season_round++;
            this.init_stat_slot();
        }

        public _to_last(param1: any, param2: any): any {
            this.arr_last_frame_skin.push(param1);
            this.arr_last_frame_zone.push(param2);
        }

        public add_tuto4(): any {
            this.yeah_tuto = false;
            if(Main.sav.data.tuto5 == 2) {
                Main.sav.data.tuto5 = 3;
                this.tuto_cl = this._sp(tuto10_mc,this.zone_tuto,0,0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto92_click_f,this);
                this.yeah_tuto = true;
            }
            if(Main.sav.data.tuto7 == 1 && this.yeah_tuto == false) {
                i = 1;
                while(i <= 4) {
                    if(Main.sav.data["cat_injury1_" + i] == 1 || Main.sav.data["cat_injury2_" + i] == 1 || Main.sav.data["cat_injury3_" + i] == 1) {
                        this.delete2_f();
                        Main.sav.data.tuto7 = 2;
                        this.tuto_cl = this._sp(tuto19_mc,this.zone_tuto,0,0);
                        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto19_click_f,this);
                        this.yeah_tuto = true;
                        this.to_table(1);
                        this.to_table(2);
                        this.to_table(3);
                        this.to_table(4);
                        break;
                    }
                    i++;
                }
            }
            if(Main.sav.data.tuto6 == 1 && this.yeah_tuto == false) {
                if(Main.sav.data.gold >= 200) {
                    this.delete2_f();
                    Main.sav.data.tuto6 = 2;
                    this.tuto_cl = this._sp(tuto17_mc,this.zone_tuto,0,0);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto17_click_f,this);
                    this.yeah_tuto = true;
                }
            }
            if(this.yeah_tuto == false) {
                if(Main.sav.data.tuto2 == 2) {
                    this.add_function();
                }
            }
        }

        public tuto2_f(param1: egret.Event): any {
            if(this.drag_mode) {
                this.cat_drag.$setX(mouseX);
                this.cat_drag.$setY(mouseY);
            }
            if(this.ex2_in_place(9) == 0 && this.ex2_in_place(10) == 0 && this.ex2_in_place(11) == 0 && this.ex2_in_place(12) == 0) {
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = this._sp(tuto3_mc,this.zone_tuto,0,0);
                this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto2_f,this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto2_m_down_f,this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.tuto2_m_up_f,this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto3_click_f,this);
            }
        }

        public tuto2_m_down_f(param1: egret.TouchEvent): any {
            if(this.upg_ex == false && this.stat_ex == false && this.pre_battle_ex == false) {
                if(this.drag_mode == false) {
                    i = 1;
                    while(i <= 12) {
                        if(_mo(this["zone_" + i])) {
                            if(this.ex_in_place(i) == 1) {
                                this.cat_drag = this._sp(cat_drag_mc,this.zone_drag,mouseX,mouseY);
                                this.drag_mode = true;
                                this.type_zone = i;
                                this.cat_drag_type = this.cat_type;
                                this.hide_from_train(i);
                                if(i > 6) {
                                    this._app._so.load_by_name(take_cat2_so);
                                } else {
                                    this._app._so.load_by_name(take_cat_so);
                                }
                                this.dress_up(this.cat_type,this.cat_drag.cat1.cat2);
                                break;
                            }
                        }
                        i++;
                    }
                }
            }
        }

        public tuto2_m_up_f(param1: egret.TouchEvent): any {
            if(this.drag_mode) {
                this.yes_new_place = false;
                i = 1;
                while(i <= 6) {
                    if(_mo(this["zone_" + i])) {
                        if(this.ex_in_place(i) == 0) {
                            this.set_to_train(this.cat_type,i,1);
                            break;
                        }
                    }
                    i++;
                }
                if(this.yes_new_place == false) {
                    this.set_to_train(this.cat_drag_type,this.type_zone,0);
                }
                this.zone_drag.removeChild(this.cat_drag);
                this.drag_mode = false;
            }
        }

        public tuto3_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.next_bt)) {
                this._app._so.load_by_name(next_day_so);
                Main.sav.data.week++;
                this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
                this.set_next_bt_frame();
                this.train_cats();
                this.load_slots();
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto3_click_f,this);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = this._sp(tuto4_mc,this.zone_tuto,0,0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto4_click_f,this);
            }
        }

        public tuto4_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.tuto_cl.ok_bt)) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto4_click_f,this);
                this.zone_tuto.removeChild(this.tuto_cl);
                this._app._so.load_by_name(click_so);
                this.tuto_cl = this._sp(tuto5_mc,this.zone_tuto,0,0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto5_click_f,this);
            }
        }

        public tuto5_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.next_bt)) {
                this._app._so.load_by_name(next_day_so);
                Main.sav.data.week++;
                this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
                this.set_next_bt_frame();
                this.train_cats();
                this.load_slots();
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto5_click_f,this);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = this._sp(tuto6_mc,this.zone_tuto,0,0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto6_click_f,this);
                this.addEventListener(egret.Event.ENTER_FRAME,this.tuto6_f,this);
                this.tuto_cl.over1.$setVisible(false);
                this.tuto_cl.over2.$setVisible(false);
                this.tuto_cl.over3.$setVisible(false);
                this.tuto_cl.over4.$setVisible(false);
            }
        }

        public tuto6_f(param1: egret.Event): any {
            if(this.ex2_in_place(9) == 0 && this.ex2_in_place(10) == 0 && this.ex2_in_place(11) == 0 && this.ex2_in_place(12) == 0) {
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = this._sp(tuto7_mc,this.zone_tuto,0,0);
                this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto6_f,this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto6_click_f,this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto7_click_f,this);
            }
        }

        public tuto6_click_f(param1: egret.TouchEvent): any {
            i = 1;
            while(i <= 4) {
                if(_mo(this["slot_" + i].to_hp_bt)) {
                    if(Main.sav.data["cat_place_" + i] != 3 && Main.sav.data["cat_place_" + i] != 4) {
                        if(this.ex_in_place(3) == 0) {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i,3,1);
                            this.tuto_cl["over" + i].$setVisible(true);
                            this.tuto_cl["arrow_" + i].$setVisible(false);
                            break;
                        }
                        if(this.ex_in_place(4) == 0) {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i,4,1);
                            this.tuto_cl["over" + i].$setVisible(true);
                            this.tuto_cl["arrow_" + i].$setVisible(false);
                            break;
                        }
                    }
                }
                if(_mo(this["slot_" + i].to_attack_bt)) {
                    if(Main.sav.data["cat_place_" + i] != 1 && Main.sav.data["cat_place_" + i] != 2) {
                        if(this.ex_in_place(1) == 0) {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i,1,1);
                            this.tuto_cl["over" + i].$setVisible(true);
                            this.tuto_cl["arrow_" + i].$setVisible(false);
                            break;
                        }
                        if(this.ex_in_place(2) == 0) {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i,2,1);
                            this.tuto_cl["over" + i].$setVisible(true);
                            this.tuto_cl["arrow_" + i].$setVisible(false);
                            break;
                        }
                    }
                }
                if(_mo(this["slot_" + i].to_speed_bt)) {
                    if(Main.sav.data["cat_place_" + i] != 5 && Main.sav.data["cat_place_" + i] != 6) {
                        if(this.ex_in_place(5) == 0) {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i,5,1);
                            this.tuto_cl["over" + i].$setVisible(true);
                            this.tuto_cl["arrow_" + i].$setVisible(false);
                            break;
                        }
                        if(this.ex_in_place(6) == 0) {
                            this.hide_from_train(Main.sav.data["cat_place_" + i]);
                            this.set_to_train(i,6,1);
                            this.tuto_cl["over" + i].$setVisible(true);
                            this.tuto_cl["arrow_" + i].$setVisible(false);
                            break;
                        }
                    }
                }
                i++;
            }
        }

        public tuto7_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.next_bt)) {
                this._app._so.load_by_name(next_day_so);
                Main.sav.data.week++;
                this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
                this.set_next_bt_frame();
                this.train_cats();
                this.load_slots();
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto7_click_f,this);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = this._sp(tuto8_mc,this.zone_tuto,0,0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto8_click_f,this);
            }
        }

        public tuto8_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.gong_cl)) {
                this.gong_cl.gotoAndPlay(2);
                this.to_table(1);
                this.to_table(2);
                this.to_table(3);
                this.to_table(4);
                this._app._so.load_by_name(gong_so);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto8_click_f,this);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = this._sp(tuto9_mc,this.zone_tuto,0,0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto9_click_f,this);
            }
        }

        public tuto9_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.next_bt)) {
                this._app._so.load_by_name(next_day_so);
                Main.sav.data.week++;
                this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
                this.set_next_bt_frame();
                this.train_cats();
                this.load_slots();
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto9_click_f,this);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = this._sp(tuto14_mc,this.zone_tuto,0,0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto14_click_f,this);
            }
        }

        public tuto92_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.next_bt)) {
                this._app._so.load_by_name(next_day_so);
                if(Main.sav.data.week != 8) {
                    Main.sav.data.week = 7;
                    this.calendar_cl.left_tx.text = (7 - Main.sav.data.week).toString();
                    this.set_next_bt_frame();
                    this.train_cats();
                    this.load_slots();
                    this.zone_tuto.removeChild(this.tuto_cl);
                }
                if(Main.sav.data.week == 7) {
                    this.tuto_cl = this._sp(tuto11_mc,this.zone_tuto,0,0);
                    Main.sav.data.week = 8;
                } else {
                    this.zone_tuto.removeChild(this.tuto_cl);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto92_click_f,this);
                    this.to_battle = 0;
                    this.train_cats();
                    this.delete2_f();
                    this.addEventListener(egret.Event.ENTER_FRAME,this.to_battle_f,this);
                    this._app.train_mode = false;
                }
            }
        }

        public tuto12_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.stat_bt)) {
                this._app._so.load_by_name(click_so);
                this.stat_cl.$setVisible(true);
                this.stat_cl.line_about_cl.$setVisible(true);
                this.stat_cl.slots_cl.$setVisible(true);
                this.stat_cl.playoff_cl.$setVisible(false);
                this.stat_cl.title_cl.gotoAndStop(Main.sav.data.league);
                this.stat_cl.playoff_bt.gotoAndStop(1);
                this.stat_ex = true;
                this.zone_tuto.removeChild(this.tuto_cl);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto12_click_f,this);
                this.add_function();
                this.tuto_cl = this._sp(tuto13_mc,this.zone_tuto,0,0);
                this.addEventListener(egret.Event.ENTER_FRAME,this.tuto13_f,this);
            }
        }

        public tuto13_f(param1: egret.Event): any {
            if(this.stat_cl.visible == false) {
                this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto13_f,this);
                this.zone_tuto.removeChild(this.tuto_cl);
            }
        }

        public tuto14_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.dress_bt)) {
                this._app._so.load_by_name(click_so);
                this._app.open_new_screen("dress");
            }
        }

        public tuto17_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.upg_bt)) {
                this.upg_cl.$setVisible(true);
                this.upg_ex = true;
                this._app._so.load_by_name(click_so);
                this.load_upg();
                this.zone_tuto.removeChild(this.tuto_cl);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto17_click_f,this);
                this.tuto_cl = this._sp(tuto18_mc,this.zone_tuto,0,0);
                this.addEventListener(egret.Event.ENTER_FRAME,this.tuto18_f,this);
                this.add_function();
            }
        }

        public tuto18_f(param1: egret.Event): any {
            if(this.upg_cl.visible == false) {
                this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto18_f,this);
                this.zone_tuto.removeChild(this.tuto_cl);
            } else {
                i = 1;
                while(i <= 5) {
                    if(Main.sav.data["stuff_level_" + i] > 1) {
                        this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto18_f,this);
                        this.zone_tuto.removeChild(this.tuto_cl);
                        break;
                    }
                    i++;
                }
            }
        }

        public tuto19_click_f(param1: egret.TouchEvent): any {
            if(_mo(this.tuto_cl.ok_bt)) {
                this._app._so.load_by_name(click_so);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto19_click_f,this);
                this.tuto_cl = this._sp(tuto20_mc,this.zone_tuto,0,0);
                if(Main.sav.data["cat_injury1_1"] == 1 || Main.sav.data["cat_injury2_1"] == 1 || Main.sav.data["cat_injury3_1"] == 1) {
                    this.tuto_cl.bg_cl.gotoAndStop(1);
                } else if(Main.sav.data["cat_injury1_2"] == 1 || Main.sav.data["cat_injury2_2"] == 1 || Main.sav.data["cat_injury3_2"] == 1) {
                    this.tuto_cl.bg_cl.gotoAndStop(2);
                } else if(Main.sav.data["cat_injury1_3"] == 1 || Main.sav.data["cat_injury2_3"] == 1 || Main.sav.data["cat_injury3_3"] == 1) {
                    this.tuto_cl.bg_cl.gotoAndStop(3);
                } else {
                    this.tuto_cl.bg_cl.gotoAndStop(4);
                }
                this.addEventListener(egret.Event.ENTER_FRAME,this.tuto20_f,this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto20_m_down_f,this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.tuto20_m_up_f,this);
            }
        }

        public tuto20_f(param1: egret.Event): any {
            if(this.drag_mode) {
                this.cat_drag.$setX(mouseX);
                this.cat_drag.$setY(mouseY);
            }
            if(this.ex2_in_place(9) == 0 && this.ex2_in_place(10) == 0 && this.ex2_in_place(11) == 0 && this.ex2_in_place(12) == 0) {
                this.zone_tuto.removeChild(this.tuto_cl);
                this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto20_f,this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto20_m_down_f,this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.tuto20_m_up_f,this);
            }
        }

        public tuto20_m_down_f(param1: egret.TouchEvent): any {
            if(this.upg_ex == false && this.stat_ex == false && this.pre_battle_ex == false) {
                if(this.drag_mode == false) {
                    i = 1;
                    while(i <= 12) {
                        if(_mo(this["zone_" + i])) {
                            if(this.ex_in_place(i) == 1) {
                                if(Main.sav.data["cat_injury1_" + this.cat_type] == 1 || Main.sav.data["cat_injury2_" + this.cat_type] == 1 || Main.sav.data["cat_injury3_" + this.cat_type] == 1) {
                                    this.cat_drag = this._sp(cat_drag_mc,this.zone_drag,mouseX,mouseY);
                                    this.drag_mode = true;
                                    this.type_zone = i;
                                    this.cat_drag_type = this.cat_type;
                                    this.hide_from_train(i);
                                    if(i > 6) {
                                        this._app._so.load_by_name(take_cat2_so);
                                    } else {
                                        this._app._so.load_by_name(take_cat_so);
                                    }
                                    this.dress_up(this.cat_type,this.cat_drag.cat1.cat2);
                                    break;
                                }
                            }
                        }
                        i++;
                    }
                }
            }
        }

        public tuto20_m_up_f(param1: egret.TouchEvent): any {
            if(this.drag_mode) {
                this.yes_new_place = false;
                i = 7;
                while(i <= 8) {
                    if(_mo(this["zone_" + i])) {
                        if(this.ex_in_place(i) == 0) {
                            this.zone_tuto.removeChild(this.tuto_cl);
                            this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto20_f,this);
                            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto20_m_down_f,this);
                            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.tuto20_m_up_f,this);
                            this.add_function();
                            this.set_to_train(this.cat_type,i,1);
                            break;
                        }
                    }
                    i++;
                }
                if(this.yes_new_place == false) {
                    this.set_to_train(this.cat_drag_type,this.type_zone,0);
                }
                this.zone_drag.removeChild(this.cat_drag);
                this.drag_mode = false;
            }
        }

        public delete2_f(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
            this.removeEventListener(egret.Event.ENTER_FRAME,this.to_battle_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_paper_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_pause_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_result_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.drag_m_down_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.drag_m_up_f,this);
        }

        public delete_f(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto2_f,this);
            this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto6_f,this);
            this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto13_f,this);
            this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto18_f,this);
            this.removeEventListener(egret.Event.ENTER_FRAME,this.tuto20_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto92_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto2_m_down_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.tuto2_m_up_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto20_m_down_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.tuto20_m_up_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto3_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto4_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto5_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.tuto6_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto7_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto8_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto9_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto12_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto14_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto17_click_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.tuto19_click_f,this);
            this.delete2_f();
            this._Buttons_sounds.delete_f();
        }
    }
}
