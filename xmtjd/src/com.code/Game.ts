module com.code {
    export class Game extends DataGame {
        private static _instance: Game = null;
        _app: App = null;
        public constructor() {
            super("Game");
            this._app = App.getInstance();
            Game._instance = this;
        }
        public static getInstance(): Game {
            return Game._instance == null ? new Game() : Game._instance;
        }
        public init(): void {
            this._app._music.delete_music("all");
            this._info_enemy = new Enemy();
            this._info = new Aby_info();
            this.init_layers();
            this.pause_cl = this._sp(pause_mc, this.zone_tuto, 0, 0);
            this._Buttons_sounds = new Buttons_sounds();
            this._Buttons_sounds.$setX(294);
            this._Buttons_sounds.$setY(182);
            this.pause_cl.addChild(this._Buttons_sounds);
            this.pause_cl.$setVisible(false);
            this.menu_bt_cl = this._sp(menu_bt_mc, this.zone_panel, 325, 10);
            this.down_panel_cl = this._sp(down_panel_mc, this.zone_fox, 322, 415);
            this.location_cl = this._sp(location_mc, this.zone_bg, 0, 0);
            this.info_aby_cl = this._sp(info_aby_mc, this.zone_panel, 147, 338);
            this.info_aby_cl.$setVisible(false);
            if (Main.sav.data.tuto1 == 1) {
                Main.sav.data.tuto1 = 2;
                this.tuto_battle = true;
                this.pause_cl.home_bt.gotoAndStop(2);
                this.down_panel_cl.hero_tx.text = "小猫突击队";
                Main.sav.data.playoff = 1;
                Main.sav.data.playoff_round = 3;
                Main.sav.data.cat_aby_1 = 66;
                Main.sav.data.cat_aby_2 = 74;
                Main.sav.data.cat_aby_3 = 69;
                Main.sav.data.cat_aby_4 = 78;
                Main.sav.data.cat_dress_1 = 203;
                Main.sav.data.cat_dress_2 = 277;
                Main.sav.data.cat_dress_3 = 259;
                Main.sav.data.cat_dress_4 = 22;
                Main.sav.data.cat_hp_1 = 410;
                Main.sav.data.cat_hp_2 = 370;
                Main.sav.data.cat_hp_3 = 420;
                Main.sav.data.cat_hp_4 = 400;
                Main.sav.data.cat_hp2_1 = 410;
                Main.sav.data.cat_hp2_2 = 370;
                Main.sav.data.cat_hp2_3 = 420;
                Main.sav.data.cat_hp2_4 = 400;
                Main.sav.data.cat_attack_1 = 30;
                Main.sav.data.cat_attack_2 = 35;
                Main.sav.data.cat_attack_3 = 27;
                Main.sav.data.cat_attack_4 = 33;
                Main.sav.data.cat_speed_1 = 40;
                Main.sav.data.cat_speed_2 = 50;
                Main.sav.data.cat_speed_3 = 60;
                Main.sav.data.cat_speed_4 = 40;
                this.addEventListener(egret.Event.ENTER_FRAME, this.tuto1_f, this);
            }
            else {
                this.down_panel_cl.hero_tx.text = Main.sav.data.team_name_1;
            }
            if (this._app.train_mode == false) {
                this.pause_cl.home_bt.gotoAndStop(1);
                this.status_began = 3;
                this.status_began = 1;
                this.time_began = 0;
                this.down_panel_cl.gotoAndStop(1);
                this.addEventListener(egret.Event.ENTER_FRAME, this.began_f, this);
                if (Main.sav.data.playoff == 1) {
                    this.location_cl.gotoAndStop(2);
                    this.location_cl.kings_clCups_cl.gotoAndStop(5);
                    if (Main.sav.data.playoff_round == 1) {
                        this._app.team_enemy_id = Main.sav.data.off_team_2;
                        this._app._so.load_by_name(StartBattle_so);
                    }
                    else if (Main.sav.data.playoff_round == 2) {
                        this._app.team_enemy_id = Main.sav.data.off_team_5;
                        this._app._so.load_by_name(StartBattle_so);
                    }
                    else {
                        this._app.team_enemy_id = 22;
                        this._app._so.load_by_name(grand_so);
                        this.grand_cl = this._sp(grand_mc, this.zone_tuto, 325, 180);
                        this.addEventListener(egret.Event.ENTER_FRAME, this.grand_f, this);
                        this.status_began = 0;
                        this.location_cl.referee_cl.gotoAndStop(1);
                    }
                }
                else {
                    this.location_cl.gotoAndStop(1);
                    this._app.team_enemy_id = this._app.arr_enemy_row[Main.sav.data.season_round + Main.sav.data.season_koff];
                    this.location_cl.kings_clCups_cl.gotoAndStop(Main.sav.data.league);
                    this._app._so.load_by_name(StartBattle_so);
                }
                if (Main.sav.data.playoff == 0) {
                    if (Main.sav.data.league == 4) {
                        switch (Main.sav.data.season_round) {
                            case 0:
                                this._app.team_enemy_level = 5;
                                break;
                            case 1:
                                this._app.team_enemy_level = 0;
                                break;
                            case 2:
                                this._app.team_enemy_level = 1;
                                break;
                            case 3:
                                this._app.team_enemy_level = 9;
                                break;
                            case 4:
                                this._app.team_enemy_level = 6;
                        }
                    }
                    else {
                        this._app.team_enemy_level = Math.floor(1 + this._app.team_enemy_id * 1.8);
                    }
                }
                else {
                    this._app.team_enemy_level = Math.floor(6 + this._app.team_enemy_id * 1.8);
                    if (this._app.team_enemy_id == 22) {
                        this._app.team_enemy_level = this._app.team_enemy_level + 8;
                    }
                }
                if (this._app.team_enemy_id % 2 == 0) {
                    this._app.team_enemy = 1;
                    this.location_cl.window_down_cl.gotoAndStop(2);
                }
                else {
                    this._app.team_enemy = 2;
                    this.location_cl.window_down_cl.gotoAndStop(1);
                }
                this.location_cl.enemy_fans_cl.gotoAndStop(this._app.team_enemy);
                this.location_cl.kings_cl.gotoAndStop(this._app.team_enemy);
                this.location_cl.flag_cl.gotoAndStop(1);
                this.location_cl.flag2_cl.gotoAndStop(this._app.team_enemy + 1);
                this.down_panel_cl.enemy_tx.text = this._info_enemy.got_title(this._app.team_enemy_id);
            }
            else {
                this.pause_cl.home_bt.gotoAndStop(2);
                this.location_cl.gotoAndStop(1);
                this.location_cl.kings_clCups_cl.$setVisible(false);
                this.down_panel_cl.gotoAndStop(2);
                this.status_began = 3;
                this.time_began = 0;
                this.location_cl.kings_cl.gotoAndStop(3);
                this.location_cl.enemy_fans_cl.gotoAndStop(4);
                this.location_cl.kitty_fans_cl.gotoAndStop(4);
                this.location_cl.flag_cl.gotoAndStop(1);
                this.location_cl.flag2_cl.gotoAndStop(1);
                this.location_cl.referee_cl.$setVisible(false);
                this.addEventListener(egret.Event.ENTER_FRAME, this.began_f, this);
                this.down_panel_cl.train_bt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_exit_traning_f, this);
                this.down_panel_cl.refresh_bt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_refresh_traning_f, this);
            }
            if (this._app.train_mode == false) {
                this.i = 1;
                while (this.i <= 4) {
                    this._cat = new Cat();
                    this.arr_cat.push(this._cat);
                    this.zone_cat.addChild(this._cat);
                    this._cat.init(1, 1);
                    this._aby = new Aby();
                    this.zone_panel.addChild(this._aby);
                    this.arr_aby.push(this._aby);
                    this._aby.init();
                    this._aby.dress_up(this._aby.skin.cat2, Main.sav.data["cat_dress_" + this.i]);
                    this.i++;
                }
                this.i = 1;
                while (this.i <= 4) {
                    this._cat = new Cat();
                    this.arr_fox.push(this._cat);
                    this.zone_fox.addChild(this._cat);
                    this._cat.init(2, 1);
                    this._aby_enemy = new Aby_enemy();
                    this.arr_aby_enemy.push(this._aby_enemy);
                    this._aby_enemy.init();
                    this.i++;
                }
            }
            else {
                this.i = 1;
                while (this.i <= 4) {
                    this._cat = new Cat();
                    this.arr_cat.push(this._cat);
                    this.zone_cat.addChild(this._cat);
                    this._cat.init(1, 2);
                    this._aby = new Aby();
                    this.zone_panel.addChild(this._aby);
                    this.arr_aby.push(this._aby);
                    this._aby.init();
                    this._aby.dress_up(this._aby.skin.cat2, Main.sav.data["cat_dress_" + this.i]);
                    this.i++;
                }
                this.i = 1;
                while (this.i <= 4) {
                    this._cat = new Cat();
                    this.arr_fox.push(this._cat);
                    this.zone_fox.addChild(this._cat);
                    this._cat.init(2, 2);
                    this.i++;
                }
            }
            if (Main.sav.data.tuto1 != 3) {
                this.i = 0;
                while (this.i < this.arr_fox.length) {
                    this.arr_fox[this.i].hp2 = this.arr_fox[this.i].hp2 + 200;
                    this.arr_fox[this.i].hp = this.arr_fox[this.i].hp2;
                    this.i++;
                }
            }
            this.i = 0;
            while (this.i < this.arr_aby_enemy.length) {
                this.arr_fox[this.i].scale_cl.icon_clIcon2Icon_cl.gotoAndStop(this.arr_aby_enemy[this.i].type_aby);
                this.arr_fox[this.i].scale_cl.icon_clIcon2Scale_cl.$setVisible(true);
                this.arr_fox[this.i].scale_cl.icon_clIcon2Scale_cl.gotoAndStop(1);
                this.arr_fox[this.i].scale_cl.icon_clIcon2Bg_cl.gotoAndStop(2);
                this.arr_fox[this.i].scale_cl.icon_clIcon2Scale_cl.gotoAndStop(Math.floor(this.arr_aby_enemy[this.i].reload_time / this.arr_aby_enemy[this.i].reload_time2 * 100));
                this.i++;
            }
            this.i = 0;
            while (this.i < this.arr_aby.length) {
                if (this._app.train_mode) {
                    this.arr_aby[this.i].reload_time = this.arr_aby[this.i].reload_time2;
                }
                if (Main.sav.data.tuto1 != 3) {
                    this.arr_aby[this.i].reload_time2 = 800;
                    this.arr_aby[this.i].reload_time = 630;
                }
                this.arr_aby[this.i].skin.icon_clIcon2Scale_cl.gotoAndStop(Math.floor(this.arr_aby[this.i].reload_time / this.arr_aby[this.i].reload_time2 * 100));
                this.i++;
            }
            Main.sav.data.tuto1 = 3;
            // this.stage.focus = this.stage;
        }
        public init_layers(): any {
            this.zone_bg = new egret.Sprite();
            this.zone_fox = new egret.Sprite();
            this.zone_cat = new egret.Sprite();
            this.zone_panel = new egret.Sprite();
            this.zone_tuto = new egret.Sprite();
            this.zone_up_all = new egret.Sprite();
            this.addChild(this.zone_bg);
            this.addChild(this.zone_fox);
            this.addChild(this.zone_cat);
            this.addChild(this.zone_up_all);
            this.addChild(this.zone_panel);
            this.addChild(this.zone_tuto);
        }
        public add_function(): any {
            this.addEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.other_f, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
        }
        public game_f(param1: egret.Event): any {
            this.info_aby_cl.$setVisible(false);
            this.i = 0;
            while (this.i < this.arr_aby.length) {
                if (this.arr_aby[this.i].skin.bt_telo.visible == true) {
                    if (this._mo(this.arr_aby[this.i].skin.icon_cl)) {
                        if (this.over_type != this.i) {
                            this.over_time = 0;
                            this.over_type = this.i;
                        }
                        if (++this.over_time > 12) {
                            this.info_aby_cl.$setVisible(true);
                            this.info_aby_cl.des_tx.text = this.got_des_skill(this.arr_aby[this.i].type_aby);
                            break;
                        }
                        break;
                    }
                }
                this.i++;
            }
            this.i = 0;
            while (this.i < this.arr_cat.length) {
                if (this.arr_cat[this.i].life) {
                    if (this.arr_cat[this.i].aby_mode == false) {
                        if (this.arr_cat[this.i].run_mode) {
                            this.arr_cat[this.i].skin.$setX(this.arr_cat[this.i].skin.x + this.arr_cat[this.i].run_speed);
                            if (this.arr_cat[this.i].run_speed < this.arr_cat[this.i].max_speed) {
                                this.arr_cat[this.i].run_speed = this.arr_cat[this.i].run_speed + this.cat_acp;
                            }
                            this.i2 = 0;
                            while (this.i2 < this.arr_fox.length) {
                                if (this.arr_fox[this.i2].life) {
                                    if (this.arr_cat[this.i].skin.x + 35 > this.arr_fox[this.i2].skin.x && this.arr_fox[this.i2].bubble_mode == false) {
                                        this.check_battle(this.i, this.i2);
                                        break;
                                    }
                                }
                                this.i2++;
                            }
                            if (this.arr_cat[this.i].skin.x > 625) {
                                this.arr_cat[this.i].to_back();
                                this.arr_cat[this.i].run_mode = false;
                                this.arr_cat[this.i].reload_mode = true;
                                this.arr_cat[this.i].back_speed = 15;
                            }
                        }
                        if (this.arr_cat[this.i].reload_mode && this.arr_cat[this.i].stun_mode == false && this.arr_cat[this.i].bubble_mode == false) {
                            if (this.arr_cat[this.i].speed >= this.arr_cat[this.i].speed2) {
                                if (this.arr_cat[this.i].back_mode == false) {
                                    this.arr_cat[this.i].run_speed = 0;
                                    this.arr_cat[this.i].go_frame(2);
                                    this.arr_cat[this.i].set_mode(2);
                                }
                            }
                            else {
                                this.arr_cat[this.i].speed = this.arr_cat[this.i].speed + 1 * this.aura_fox_slow_koff;
                            }
                        }
                        if (this.arr_cat[this.i].back_mode) {
                            this.arr_cat[this.i].back_speed = this.arr_cat[this.i].back_speed - this.arr_cat[this.i].back_acp;
                            this.arr_cat[this.i].skin.$setX(this.arr_cat[this.i].skin.x - this.arr_cat[this.i].back_speed);
                            if (this.arr_cat[this.i].back_speed <= 0 || this.arr_cat[this.i].skin.x < 25) {
                                this.arr_cat[this.i].back_mode = false;
                            }
                        }
                        if (this.arr_cat[this.i].got_damage_mode) {
                            if (this._frame(this.arr_cat[this.i].skin.cat1Cat2)) {
                                this.arr_cat[this.i].got_damage_mode = false;
                                if (this.arr_cat[this.i].reload_mode) {
                                    this.arr_cat[this.i].go_frame(4);
                                }
                            }
                        }
                        if (this.arr_cat[this.i].after_attack_mode) {
                            if (this._frame(this.arr_cat[this.i].skin.cat1Cat2)) {
                                this.arr_cat[this.i].after_attack_mode = false;
                                if (this.arr_cat[this.i].reload_mode) {
                                    this.arr_cat[this.i].go_frame(4);
                                }
                            }
                        }
                        if (this.arr_cat[this.i].stun_mode) {
                            this.arr_cat[this.i].stun_time--;
                            if (this.arr_cat[this.i].stun_time < 0) {
                                this.arr_cat[this.i].stun_mode = false;
                                if (this.arr_cat[this.i].bubble_mode == false) {
                                    this.arr_cat[this.i].set_mode(4);
                                    this.arr_cat[this.i].go_frame(4);
                                    if (this.lock_mode == false) {
                                        this.arr_aby[this.i].skin.icon_clLock_cl.$setVisible(false);
                                    }
                                }
                            }
                        }
                    }
                    if (this.arr_cat[this.i].aby_mode) {
                        this.arr_cat[this.i].aby_time--;
                        if (this.arr_cat[this.i].aby_time == 0) {
                            if (this.arr_aby[this.i].type_aby == 1) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_fox.length) {
                                    if (this.arr_fox[this.i2].life) {
                                        if (this.arr_cat[this.i].skin.x + 88 > this.arr_fox[this.i2].skin.x) {
                                            this.add_super_shot(1, this.arr_cat[this.i].skin);
                                            if (this.arr_fox[this.i2].armor_mode) {
                                                this.arr_fox[this.i2].armor_mode = false;
                                                this.arr_fox[this.i2].skin.armor_cl.$setVisible(false);
                                            }
                                            this.arr_fox[this.i2].remove_hp(this.arr_aby[this.i].power);
                                            this.arr_fox[this.i2].to_back2();
                                            if (this.arr_fox[this.i2].aby_mode) {
                                                this.arr_fox[this.i2].aby_mode = false;
                                            }
                                            if (this.arr_fox[this.i2].life) {
                                                this.arr_fox[this.i2].speed = 0;
                                                this.arr_fox[this.i2].run_mode = false;
                                                this.arr_fox[this.i2].reload_mode = true;
                                                this.arr_fox[this.i2].got_damage_mode = true;
                                                this.arr_fox[this.i2].go_frame(24);
                                                break;
                                            }
                                            break;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby[this.i].type_aby == 2) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_fox.length) {
                                    if (this.arr_fox[this.i2].life) {
                                        if (this.arr_cat[this.i].skin.x + 88 > this.arr_fox[this.i2].skin.x) {
                                            this.add_super_shot(1, this.arr_cat[this.i].skin);
                                            if (this.arr_fox[this.i2].armor_mode) {
                                                this.arr_fox[this.i2].armor_mode = false;
                                                this.arr_fox[this.i2].skin.armor_cl.$setVisible(false);
                                            }
                                            this.arr_fox[this.i2].remove_hp(this.arr_aby[this.i].power);
                                            this.arr_fox[this.i2].to_back2();
                                            if (this.arr_fox[this.i2].aby_mode) {
                                                this.arr_fox[this.i2].aby_mode = false;
                                            }
                                            if (this.arr_fox[this.i2].life) {
                                                this.arr_fox[this.i2].speed = 0;
                                                this.arr_fox[this.i2].run_mode = false;
                                                this.arr_fox[this.i2].reload_mode = true;
                                                this.arr_fox[this.i2].got_damage_mode = true;
                                                this.arr_fox[this.i2].go_frame(24);
                                                break;
                                            }
                                            break;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby[this.i].type_aby == 3) {
                                this._app._so.load_by_name(fireball_so);
                                this.sprite_var = this._sp(fireball_mc, this.zone_up_all, this.arr_cat[this.i].skin.x + 40, this.arr_cat[this.i].skin.y + 10);
                                this.arr_fireball_skin.push(<fireball_mc>this.sprite_var);
                                this.arr_fireball_side.push(1);
                                this.arr_fireball_power.push(this.arr_aby[this.i].power);
                            }
                            if (this.arr_aby[this.i].type_aby == 4) {
                                this._app._so.load_by_name(heal_so);
                                this.i2 = 0;
                                while (this.i2 < this.arr_cat.length) {
                                    if (this.arr_cat[this.i2].life) {
                                        this.arr_cat[this.i2].hp = this.arr_cat[this.i2].hp + this.arr_aby[this.i].power;
                                        if (this.arr_cat[this.i2].hp > this.arr_cat[this.i2].hp2) {
                                            this.arr_cat[this.i2].hp = this.arr_cat[this.i2].hp2;
                                        }
                                        this.arr_aby[this.i2].set_scale(this.arr_cat[this.i2].hp);
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby[this.i].type_aby == 5) {
                                this.add_aura(1, 1, this.arr_aby[this.i].power);
                            }
                            if (this.arr_aby[this.i].type_aby == 6) {
                                this.add_aura(1, 2, this.arr_aby[this.i].power);
                            }
                            if (this.arr_aby[this.i].type_aby == 7) {
                                this._app._so.load_by_name(go_so);
                                this.i2 = 0;
                                while (this.i2 < this.arr_cat.length) {
                                    if (this.arr_cat[this.i2].run_mode == false) {
                                        this.arr_cat[this.i2].speed = this.arr_cat[this.i2].speed2;
                                        this.arr_cat[this.i2].reload_mode = true;
                                        this.arr_cat[this.i2].back_mode = false;
                                        if (this.arr_cat[this.i2].after_attack_mode) {
                                            this.arr_cat[this.i2].after_attack_mode = false;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby[this.i].type_aby == 8) {
                                this.add_aura(1, 3, this.arr_aby[this.i].power);
                            }
                            if (this.arr_aby[this.i].type_aby == 9) {
                                this.add_aura(1, 4, this.arr_aby[this.i].power);
                            }
                            if (this.arr_aby[this.i].type_aby == 10) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_fox.length) {
                                    if (this.arr_fox[this.i2].life) {
                                        if (this.arr_cat[this.i].skin.x + 88 > this.arr_fox[this.i2].skin.x) {
                                            if (this.arr_fox[this.i2].stun_mode == false && this.arr_fox[this.i2].bubble_mode == false) {
                                                this.arr_fox[this.i2].to_stun(this.arr_aby[this.i].power);
                                                break;
                                            }
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby[this.i].type_aby == 11) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_fox.length) {
                                    if (this.arr_fox[this.i2].life) {
                                        if (this.arr_fox[this.i2].bubble_mode == false) {
                                            this.arr_fox[this.i2].to_bubble(this.arr_aby[this.i].power);
                                            this.arr_fox[this.i2].scale_cl.icon_clLock_cl.$setVisible(true);
                                            break;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby[this.i].type_aby == 12) {
                                this.arr_cat[this.i].armor_mode = true;
                                this.arr_cat[this.i].armor_time = this.arr_aby[this.i].power;
                                this.arr_cat[this.i].skin.armor_cl.$setVisible(true);
                            }
                            if (this.arr_aby[this.i].type_aby == 13) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_cat.length) {
                                    if (this.arr_cat[this.i2].life && this.arr_cat[this.i2].bubble_mode == false) {
                                        this.arr_cat[this.i2].armor_mode = true;
                                        this.arr_cat[this.i2].armor_time = this.arr_aby[this.i].power;
                                        this.arr_cat[this.i2].skin.armor_cl.$setVisible(true);
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby[this.i].type_aby == 14) {
                                this._app._so.load_by_name(light_so);
                                this.i2 = 0;
                                while (this.i2 < this.arr_fox.length) {
                                    if (this.arr_fox[this.i2].life) {
                                        if (this.arr_fox[this.i2].armor_mode) {
                                            this.arr_fox[this.i2].armor_mode = false;
                                            this.arr_fox[this.i2].skin.armor_cl.$setVisible(false);
                                        }
                                        this.arr_fox[this.i2].remove_hp(this.arr_aby[this.i].power);
                                        this.arr_fox[this.i2].to_back2();
                                        if (this.arr_fox[this.i2].aby_mode) {
                                            this.arr_fox[this.i2].aby_mode = false;
                                        }
                                        if (this.arr_fox[this.i2].life) {
                                            this.arr_fox[this.i2].speed = 0;
                                            this.arr_fox[this.i2].run_mode = false;
                                            this.arr_fox[this.i2].reload_mode = true;
                                            this.arr_fox[this.i2].got_damage_mode = true;
                                            this.arr_fox[this.i2].go_frame(26);
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby[this.i].type_aby == 15) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_aby.length) {
                                    if (this.arr_aby[this.i2].ex_aby == false) {
                                        if (this.i != this.i2) {
                                            this.arr_aby[this.i2].reload_time = this.arr_aby[this.i2].reload_time2;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                        }
                        if (this._frame(this.arr_cat[this.i].skin.cat1Cat2)) {
                            this.arr_cat[this.i].aby_mode = false;
                            this.arr_cat[this.i].go_frame(4);
                            this.arr_cat[this.i].set_mode(4);
                        }
                    }
                    if (this.arr_cat[this.i].armor_mode) {
                        this.arr_cat[this.i].armor_time--;
                        if (this.arr_cat[this.i].armor_time < 0) {
                            this.arr_cat[this.i].armor_mode = false;
                            this.arr_cat[this.i].skin.armor_cl.$setVisible(false);
                        }
                    }
                    if (this.arr_cat[this.i].bubble_mode) {
                        if (this.arr_cat[this.i].bubble_status == 1) {
                            this.arr_cat[this.i].bubble_time--;
                            if (this.arr_cat[this.i].bubble_time < 0 || this.dead_cat == 3) {
                                this.arr_cat[this.i].bubble_status = 2;
                                this._app._so.load_by_name(dead_b_so);
                                this.arr_cat[this.i].go_frame(28);
                            }
                        }
                        else if (this._frame(this.arr_cat[this.i].skin.cat1Cat2)) {
                            this.arr_cat[this.i].bubble_mode = false;
                            if (this.lock_mode == false) {
                                this.arr_aby[this.i].skin.icon_clLock_cl.$setVisible(false);
                            }
                            this.arr_cat[this.i].go_frame(4);
                        }
                    }
                }
                else if (this.arr_cat[this.i].dead) {
                    if (this._frame(this.arr_cat[this.i].skin.cat1Cat2)) {
                        this.arr_cat[this.i].dead = false;
                    }
                }
                this.i++;
            }
            this.i = 0;
            while (this.i < this.arr_fox.length) {
                if (this.arr_fox[this.i].life) {
                    if (this.arr_fox[this.i].aby_mode == false) {
                        if (this.arr_fox[this.i].run_mode) {
                            this.arr_fox[this.i].skin.$setX(this.arr_fox[this.i].skin.x - this.arr_fox[this.i].run_speed);
                            if (this.arr_fox[this.i].run_speed < this.arr_fox[this.i].max_speed) {
                                this.arr_fox[this.i].run_speed = this.arr_fox[this.i].run_speed + this.cat_acp;
                            }
                            this.i2 = 0;
                            while (this.i2 < this.arr_cat.length) {
                                if (this.arr_cat[this.i2].life) {
                                    if (this.arr_fox[this.i].skin.x < 35 + this.arr_cat[this.i2].skin.x && this.arr_cat[this.i2].bubble_mode == false) {
                                        this.check_battle(this.i2, this.i);
                                        break;
                                    }
                                }
                                this.i2++;
                            }
                            if (this.arr_fox[this.i].skin.x < 25) {
                                this.arr_fox[this.i].to_back();
                                this.arr_fox[this.i].run_mode = false;
                                this.arr_fox[this.i].reload_mode = true;
                                this.arr_fox[this.i].back_speed = 15;
                            }
                        }
                        if (this.arr_fox[this.i].reload_mode && this.arr_fox[this.i].stun_mode == false && this.arr_fox[this.i].bubble_mode == false) {
                            if (this.arr_fox[this.i].speed >= this.arr_fox[this.i].speed2) {
                                if (this.arr_fox[this.i].back_mode == false) {
                                    this.arr_fox[this.i].run_speed = 0;
                                    this.arr_fox[this.i].go_frame(2);
                                    this.arr_fox[this.i].set_mode(2);
                                }
                            }
                            else {
                                this.arr_fox[this.i].speed = this.arr_fox[this.i].speed + 1 * this.aura_cat_slow_koff;
                            }
                        }
                        if (this.arr_fox[this.i].back_mode) {
                            this.arr_fox[this.i].back_speed = this.arr_fox[this.i].back_speed - this.arr_fox[this.i].back_acp;
                            this.arr_fox[this.i].skin.$setX(this.arr_fox[this.i].skin.x + this.arr_fox[this.i].back_speed);
                            if (this.arr_fox[this.i].back_speed <= 0 || this.arr_fox[this.i].skin.x >= 625) {
                                this.arr_fox[this.i].back_mode = false;
                            }
                        }
                        if (this.arr_fox[this.i].got_damage_mode) {
                            if (this._frame(this.arr_fox[this.i].skin.cat1Cat2)) {
                                this.arr_fox[this.i].got_damage_mode = false;
                                if (this.arr_fox[this.i].reload_mode) {
                                    this.arr_fox[this.i].go_frame(4);
                                }
                            }
                        }
                        if (this.arr_fox[this.i].after_attack_mode) {
                            if (this._frame(this.arr_fox[this.i].skin.cat1Cat2)) {
                                this.arr_fox[this.i].after_attack_mode = false;
                                if (this.arr_fox[this.i].reload_mode) {
                                    this.arr_fox[this.i].go_frame(4);
                                }
                            }
                        }
                        if (this.arr_fox[this.i].stun_mode) {
                            this.arr_fox[this.i].stun_time--;
                            if (this.arr_fox[this.i].stun_time < 0) {
                                this.arr_fox[this.i].stun_mode = false;
                                if (this.arr_fox[this.i].bubble_mode == false) {
                                    this.arr_fox[this.i].set_mode(4);
                                    this.arr_fox[this.i].go_frame(4);
                                    if (this.lock_mode_fox == false) {
                                        this.arr_fox[this.i].scale_cl.icon_clLock_cl.$setVisible(false);
                                    }
                                }
                            }
                        }
                    }
                    if (this.arr_fox[this.i].aby_mode) {
                        this.arr_fox[this.i].aby_time--;
                        if (this.arr_fox[this.i].aby_time == 0) {
                            if (this.arr_aby_enemy[this.i].type_aby == 1) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_cat.length) {
                                    if (this.arr_cat[this.i2].life) {
                                        if (this.arr_fox[this.i].skin.x < 88 + this.arr_cat[this.i2].skin.x) {
                                            this._app._so.load_by_name2(power_kick_so, 70);
                                            this.add_super_shot(2, this.arr_fox[this.i].skin);
                                            if (this.arr_cat[this.i2].armor_mode) {
                                                this.arr_cat[this.i2].armor_mode = false;
                                                this.arr_cat[this.i2].skin.armor_cl.$setVisible(false);
                                            }
                                            this.arr_cat[this.i2].remove_hp(this.arr_aby_enemy[this.i].power);
                                            this.arr_cat[this.i2].to_back2();
                                            if (this.arr_cat[this.i2].aby_mode) {
                                                this.arr_cat[this.i2].aby_mode = false;
                                            }
                                            if (this.arr_cat[this.i2].life) {
                                                this.arr_cat[this.i2].speed = 0;
                                                this.arr_cat[this.i2].run_mode = false;
                                                this.arr_cat[this.i2].reload_mode = true;
                                                this.arr_cat[this.i2].got_damage_mode = true;
                                                this.arr_cat[this.i2].go_frame(24);
                                            }
                                            this.set_injure(this.i2, this.i);
                                            break;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 2) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_cat.length) {
                                    if (this.arr_cat[this.i2].life) {
                                        if (this.arr_fox[this.i].skin.x < 88 + this.arr_cat[this.i2].skin.x) {
                                            this.add_super_shot(2, this.arr_fox[this.i].skin);
                                            if (this.arr_cat[this.i2].armor_mode) {
                                                this.arr_cat[this.i2].armor_mode = false;
                                                this.arr_cat[this.i2].skin.armor_cl.$setVisible(false);
                                            }
                                            this.arr_cat[this.i2].remove_hp(this.arr_aby_enemy[this.i].power);
                                            this.arr_cat[this.i2].to_back2();
                                            if (this.arr_cat[this.i2].aby_mode) {
                                                this.arr_cat[this.i2].aby_mode = false;
                                            }
                                            if (this.arr_cat[this.i2].life) {
                                                this.arr_cat[this.i2].speed = 0;
                                                this.arr_cat[this.i2].run_mode = false;
                                                this.arr_cat[this.i2].reload_mode = true;
                                                this.arr_cat[this.i2].got_damage_mode = true;
                                                this.arr_cat[this.i2].go_frame(24);
                                            }
                                            this.set_injure(this.i2, this.i);
                                            break;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 3) {
                                this._app._so.load_by_name(fireball_so);
                                this.sprite_var = this._sp(fireball_mc, this.zone_up_all, this.arr_fox[this.i].skin.x - 30, this.arr_fox[this.i].skin.y + 10);
                                this.sprite_var.scaleX = -Math.abs(this.sprite_var.scaleX);
                                this.arr_fireball_skin.push(<fireball_mc>this.sprite_var);
                                this.arr_fireball_side.push(2);
                                this.arr_fireball_power.push(this.arr_aby_enemy[this.i].power);
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 4) {
                                this._app._so.load_by_name(heal_so);
                                this.i2 = 0;
                                while (this.i2 < this.arr_fox.length) {
                                    if (this.arr_fox[this.i2].life) {
                                        this.arr_fox[this.i2].hp = this.arr_fox[this.i2].hp + this.arr_aby_enemy[this.i].power;
                                        if (this.arr_fox[this.i2].hp > this.arr_fox[this.i2].hp2) {
                                            this.arr_fox[this.i2].hp = this.arr_fox[this.i2].hp2;
                                        }
                                        this.arr_fox[this.i2].scale_cl.skala_cl.gotoAndStop(Math.floor(this.arr_fox[this.i2].hp / this.arr_fox[this.i2].hp2 * 100));
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 5) {
                                this.add_aura(2, 1, this.arr_aby_enemy[this.i].power);
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 6) {
                                this.add_aura(2, 2, this.arr_aby_enemy[this.i].power);
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 7) {
                                this._app._so.load_by_name(go_so);
                                this.i2 = 0;
                                while (this.i2 < this.arr_fox.length) {
                                    if (this.arr_fox[this.i2].run_mode == false) {
                                        this.arr_fox[this.i2].speed = this.arr_fox[this.i2].speed2;
                                        this.arr_fox[this.i2].reload_mode = true;
                                        this.arr_fox[this.i2].back_mode = false;
                                        if (this.arr_fox[this.i2].after_attack_mode) {
                                            this.arr_fox[this.i2].after_attack_mode = false;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 8) {
                                this.add_aura(2, 3, this.arr_aby_enemy[this.i].power);
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 9) {
                                this.add_aura(2, 4, this.arr_aby_enemy[this.i].power);
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 10) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_cat.length) {
                                    if (this.arr_cat[this.i2].life) {
                                        if (this.arr_fox[this.i].skin.x < 88 + this.arr_cat[this.i2].skin.x) {
                                            if (this.arr_cat[this.i2].stun_mode == false && this.arr_cat[this.i2].bubble_mode == false) {
                                                this.arr_cat[this.i2].to_stun(this.arr_aby_enemy[this.i].power);
                                                this.set_injure(this.i2, this.i);
                                                break;
                                            }
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 11) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_cat.length) {
                                    if (this.arr_cat[this.i2].life) {
                                        if (this.arr_cat[this.i2].bubble_mode == false) {
                                            this.arr_cat[this.i2].to_bubble(this.arr_aby_enemy[this.i].power);
                                            this.arr_aby[this.i2].skin.icon_clLock_cl.$setVisible(true);
                                            break;
                                        }
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 12) {
                                this.arr_fox[this.i].armor_mode = true;
                                this.arr_fox[this.i].armor_time = this.arr_aby_enemy[this.i].power;
                                this.arr_fox[this.i].skin.armor_cl.$setVisible(true);
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 13) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_fox.length) {
                                    if (this.arr_fox[this.i2].life && this.arr_fox[this.i2].bubble_mode == false) {
                                        this.arr_fox[this.i2].armor_mode = true;
                                        this.arr_fox[this.i2].armor_time = this.arr_aby_enemy[this.i].power;
                                        this.arr_fox[this.i2].skin.armor_cl.$setVisible(true);
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 14) {
                                this._app._so.load_by_name(light_so);
                                this.i2 = 0;
                                while (this.i2 < this.arr_cat.length) {
                                    if (this.arr_cat[this.i2].life) {
                                        if (this.arr_cat[this.i2].armor_mode) {
                                            this.arr_cat[this.i2].armor_mode = false;
                                            this.arr_cat[this.i2].skin.armor_cl.$setVisible(false);
                                        }
                                        this.arr_cat[this.i2].remove_hp(this.arr_aby_enemy[this.i].power);
                                        this.arr_cat[this.i2].to_back2();
                                        if (this.arr_cat[this.i2].aby_mode) {
                                            this.arr_cat[this.i2].aby_mode = false;
                                        }
                                        if (this.arr_cat[this.i2].life) {
                                            this.arr_cat[this.i2].speed = 0;
                                            this.arr_cat[this.i2].run_mode = false;
                                            this.arr_cat[this.i2].reload_mode = true;
                                            this.arr_cat[this.i2].got_damage_mode = true;
                                            this.arr_cat[this.i2].go_frame(26);
                                        }
                                        this.set_injure(this.i2, this.i);
                                    }
                                    this.i2++;
                                }
                            }
                            if (this.arr_aby_enemy[this.i].type_aby == 15) {
                                this.i2 = 0;
                                while (this.i2 < this.arr_aby_enemy.length) {
                                    if (this.i != this.i2) {
                                        this.arr_aby_enemy[this.i2].reload_time = this.arr_aby_enemy[this.i2].reload_time2;
                                    }
                                    this.i2++;
                                }
                            }
                        }
                        if (this._frame(this.arr_fox[this.i].skin.cat1Cat2)) {
                            this.arr_fox[this.i].aby_mode = false;
                            this.arr_fox[this.i].go_frame(4);
                            this.arr_fox[this.i].set_mode(4);
                        }
                    }
                    if (this.arr_fox[this.i].armor_mode) {
                        this.arr_fox[this.i].armor_time--;
                        if (this.arr_fox[this.i].armor_time < 0) {
                            this.arr_fox[this.i].armor_mode = false;
                            this.arr_fox[this.i].skin.armor_cl.$setVisible(false);
                        }
                    }
                    if (this.arr_fox[this.i].bubble_mode) {
                        if (this.arr_fox[this.i].bubble_status == 1) {
                            this.arr_fox[this.i].bubble_time--;
                            if (this.arr_fox[this.i].bubble_time < 0 || this.dead_fox == 3) {
                                this.arr_fox[this.i].bubble_status = 2;
                                this._app._so.load_by_name(dead_b_so);
                                this.arr_fox[this.i].go_frame(28);
                            }
                        }
                        else if (this._frame(this.arr_fox[this.i].skin.cat1Cat2)) {
                            this.arr_fox[this.i].bubble_mode = false;
                            if (this.lock_mode_fox == false) {
                                this.arr_fox[this.i].scale_cl.icon_clLock_cl.$setVisible(false);
                            }
                            this.arr_fox[this.i].go_frame(4);
                            this.arr_fox[this.i].go_frame(4);
                        }
                    }
                }
                else if (this.arr_fox[this.i].dead) {
                    if (this._frame(this.arr_fox[this.i].skin.cat1Cat2)) {
                        this.arr_fox[this.i].dead = false;
                    }
                }
                this.i++;
            }
            this.i = 0;
            while (this.i < this.arr_aura_cat.length) {
                this.arr_aura_cat[this.i].time++;
                this.arr_aura_cat[this.i].skin.scale_cl.gotoAndStop(Math.floor(this.arr_aura_cat[this.i].time / this.arr_aura_cat[this.i].time2 * 100));
                if (this.arr_aura_cat[this.i].time >= this.arr_aura_cat[this.i].time2) {
                    if (this.arr_aura_cat[this.i].type == 1) {
                        this.aura_cat_attack_koff = 1;
                    }
                    else if (this.arr_aura_cat[this.i].type == 2) {
                        this.aura_cat_speed_koff = 1;
                    }
                    else if (this.arr_aura_cat[this.i].type == 3) {
                        this.lock_mode_fox = false;
                        this.i5 = 0;
                        while (this.i5 < this.arr_fox.length) {
                            this.arr_fox[this.i5].scale_cl.icon_clLock_cl.$setVisible(false);
                            this.i5++;
                        }
                    }
                    else {
                        this.aura_cat_weak_koff = 1;
                    }
                    this.zone_panel.removeChild(this.arr_aura_cat[this.i]);
                    this.arr_aura_cat.splice(this.i, 1);
                    this.i2 = 0;
                    while (this.i2 < this.arr_aura_cat.length) {
                        this.arr_aura_cat[this.i2].skin.$setX(25 + 50 * this.i2);
                        this.i2++;
                    }
                    break;
                }
                this.i++;
            }
            this.i = 0;
            while (this.i < this.arr_aura_fox.length) {
                this.arr_aura_fox[this.i].time++;
                this.arr_aura_fox[this.i].skin.scale_cl.gotoAndStop(Math.floor(this.arr_aura_fox[this.i].time / this.arr_aura_fox[this.i].time2 * 100));
                if (this.arr_aura_fox[this.i].time >= this.arr_aura_fox[this.i].time2) {
                    if (this.arr_aura_fox[this.i].type == 1) {
                        this.aura_fox_attack_koff = 1;
                    }
                    else if (this.arr_aura_fox[this.i].type == 2) {
                        this.aura_fox_speed_koff = 1;
                    }
                    else if (this.arr_aura_fox[this.i].type == 3) {
                        this.lock_mode = false;
                        this.i5 = 0;
                        while (this.i5 < this.arr_aby.length) {
                            this.arr_aby[this.i5].skin.icon_clLock_cl.$setVisible(false);
                            this.i5++;
                        }
                    }
                    else {
                        this.aura_fox_weak_koff = 1;
                    }
                    this.zone_panel.removeChild(this.arr_aura_fox[this.i]);
                    this.arr_aura_fox.splice(this.i, 1);
                    this.i2 = 0;
                    while (this.i2 < this.arr_aura_fox.length) {
                        this.arr_aura_fox[this.i2].skin.$setX(625 - 50 * this.i2);
                        this.i2++;
                    }
                    break;
                }
                this.i++;
            }
            this.i = 0;
            for (; this.i < this.arr_fireball_skin.length; this.i++) {
                if (this.arr_fireball_side[this.i] == 1) {
                    this.arr_fireball_skin[this.i].$setX(this.arr_fireball_skin[this.i].x + 7);
                    this.rnd_for = 0;
                    this.i2 = 0;
                    while (this.i2 < this.arr_fox.length) {
                        if (this.arr_fox[this.i2].life) {
                            if (this.arr_fireball_skin[this.i].x + 10 > this.arr_fox[this.i2].skin.x) {
                                if (this.arr_fox[this.i2].bubble_mode == false) {
                                    if (this.arr_fox[this.i2].armor_mode) {
                                        this.arr_fox[this.i2].armor_mode = false;
                                        this.arr_fox[this.i2].skin.armor_cl.$setVisible(false);
                                    }
                                    this.arr_fox[this.i2].remove_hp(this.arr_fireball_power[this.i]);
                                    this.arr_fox[this.i2].to_back2();
                                    if (this.arr_fox[this.i2].aby_mode) {
                                        this.arr_fox[this.i2].aby_mode = false;
                                        this.arr_fox[this.i2].go_frame(4);
                                        this.arr_fox[this.i2].set_mode(4);
                                    }
                                    if (this.arr_fox[this.i2].life) {
                                        this.arr_fox[this.i2].speed = 0;
                                        this.arr_fox[this.i2].run_mode = false;
                                        this.arr_fox[this.i2].reload_mode = true;
                                        this.arr_fox[this.i2].got_damage_mode = true;
                                        if (this.arr_fox[this.i2].stun_mode == false) {
                                            this.arr_fox[this.i2].go_frame(25);
                                            this.arr_fox[this.i2].got_damage_mode = true;
                                        }
                                    }
                                    this._app._so.load_by_name(fireball_hit_so);
                                    this._to_last(this.arr_fireball_skin[this.i], this.zone_up_all);
                                    this.arr_fireball_skin[this.i].gotoAndPlay("da");
                                    this.arr_fireball_skin.splice(this.i, 1);
                                    this.arr_fireball_power.splice(this.i, 1);
                                    this.arr_fireball_side.splice(this.i, 1);
                                    this.rnd_for = 1;
                                    break;
                                }
                            }
                        }
                        this.i2++;
                    }
                    if (this.rnd_for != 1) {
                        if (this.arr_fireball_skin[this.i].x > 650) {
                            this._to_last(this.arr_fireball_skin[this.i], this.zone_up_all);
                            this.arr_fireball_skin[this.i].gotoAndPlay("da");
                            this.arr_fireball_skin.splice(this.i, 1);
                            this.arr_fireball_power.splice(this.i, 1);
                            this.arr_fireball_side.splice(this.i, 1);
                            break;
                        }
                        continue;
                    }
                    break;
                }
                this.arr_fireball_skin[this.i].$setX(this.arr_fireball_skin[this.i].x - 7);
                this.rnd_for = 0;
                this.i2 = 0;
                while (this.i2 < this.arr_cat.length) {
                    if (this.arr_cat[this.i2].life) {
                        if (this.arr_fireball_skin[this.i].x - 10 < this.arr_cat[this.i2].skin.x) {
                            if (this.arr_cat[this.i2].bubble_mode == false) {
                                if (this.arr_cat[this.i2].armor_mode) {
                                    this.arr_cat[this.i2].armor_mode = false;
                                    this.arr_cat[this.i2].skin.armor_cl.$setVisible(false);
                                }
                                this.arr_cat[this.i2].remove_hp(this.arr_fireball_power[this.i]);
                                this.arr_cat[this.i2].to_back2();
                                if (this.arr_cat[this.i2].aby_mode) {
                                    this.arr_cat[this.i2].aby_mode = false;
                                    this.arr_cat[this.i2].go_frame(4);
                                    this.arr_cat[this.i2].set_mode(4);
                                }
                                if (this.arr_cat[this.i2].life) {
                                    this.arr_cat[this.i2].speed = 0;
                                    this.arr_cat[this.i2].run_mode = false;
                                    this.arr_cat[this.i2].reload_mode = true;
                                    if (this.arr_cat[this.i2].stun_mode == false) {
                                        this.arr_cat[this.i2].go_frame(25);
                                        this.arr_cat[this.i2].got_damage_mode = true;
                                    }
                                }
                                this._app._so.load_by_name(fireball_hit_so);
                                this._to_last(this.arr_fireball_skin[this.i], this.zone_up_all);
                                this.arr_fireball_skin[this.i].gotoAndPlay("da");
                                this.arr_fireball_skin.splice(this.i, 1);
                                this.arr_fireball_power.splice(this.i, 1);
                                this.arr_fireball_side.splice(this.i, 1);
                                this.rnd_for = 1;
                                break;
                            }
                        }
                    }
                    this.i2++;
                }
                if (this.rnd_for != 1) {
                    if (this.arr_fireball_skin[this.i].x < 0) {
                        this._to_last(this.arr_fireball_skin[this.i], this.zone_up_all);
                        this.arr_fireball_skin[this.i].gotoAndPlay("da");
                        this.arr_fireball_skin.splice(this.i, 1);
                        this.arr_fireball_power.splice(this.i, 1);
                        this.arr_fireball_side.splice(this.i, 1);
                        break;
                    }
                    continue;
                }
                break;
            }
            if (this.lock_mode == false) {
                this.i = 0;
                while (this.i < this.arr_aby.length) {
                    if (this.arr_aby[this.i].ex_aby == false) {
                        this.arr_aby[this.i].reload_time = this.arr_aby[this.i].reload_time + 1 * this.aura_cat_speed_koff;
                        this.arr_aby[this.i].skin.icon_clIcon2Scale_cl.gotoAndStop(Math.floor(this.arr_aby[this.i].reload_time / this.arr_aby[this.i].reload_time2 * 100));
                        if (this.arr_aby[this.i].reload_time >= this.arr_aby[this.i].reload_time2) {
                            this.arr_aby[this.i].ex_aby = true;
                            this.arr_aby[this.i].skin.icon_clIcon2Bg_cl.gotoAndStop(1);
                            this.arr_aby[this.i].skin.icon_clIcon2Scale_cl.$setVisible(false);
                            this.arr_aby[this.i].skin.icon_clIcon2Scale_cl.gotoAndStop(1);
                            break;
                        }
                    }
                    this.i++;
                }
            }
            if (this.lock_mode_fox == false) {
                this.i = 0;
                while (this.i < this.arr_aby_enemy.length) {
                    if (this.arr_fox[this.i].life) {
                        if (this.arr_aby_enemy[this.i].reload_time >= this.arr_aby_enemy[this.i].reload_time2) {
                            this.arr_fox[this.i].scale_cl.icon_clIcon2Bg_cl.gotoAndStop(1);
                            this.arr_fox[this.i].scale_cl.icon_clIcon2Scale_cl.$setVisible(false);
                            this.arr_fox[this.i].scale_cl.icon_clIcon2Scale_cl.gotoAndStop(1);
                            if (this.arr_fox[this.i].stun_mode == false && this.arr_fox[this.i].aby_mode == false && this.arr_fox[this.i].bubble_mode == false) {
                                if (this.arr_aby_enemy[this.i].type_aby == 1 || this.arr_aby_enemy[this.i].type_aby == 2 || this.arr_aby_enemy[this.i].type_aby == 10) {
                                    this.arr_fox[this.i].scale_cl.icon_clIcon2Bg_cl.gotoAndStop(3);
                                    this.arr_aby_enemy[this.i].reload_time = -999;
                                    this.arr_fox[this.i].speed = this.arr_fox[this.i].speed2;
                                    this.arr_fox[this.i].aby_shot_mode = true;
                                }
                                else {
                                    this.arr_aby_enemy[this.i].reload_time = 0;
                                    this.arr_fox[this.i].set_mode(0);
                                    this.arr_fox[this.i].aby_mode = true;
                                    this.arr_fox[this.i].aby_time = this.arr_aby_enemy[this.i].time;
                                    this.arr_fox[this.i].go_frame(this.arr_aby_enemy[this.i].frame_action);
                                    if (this.arr_aby_enemy[this.i].frame_action == 12) {
                                        this._app._so.load_by_name(aura_power_so);
                                    }
                                    else if (this.arr_aby_enemy[this.i].frame_action == 13) {
                                        this._app._so.load_by_name(aura_speed_so);
                                    }
                                    else if (this.arr_aby_enemy[this.i].frame_action == 16) {
                                        this._app._so.load_by_name(aura_dead_so);
                                    }
                                    else if (this.arr_aby_enemy[this.i].frame_action == 18) {
                                        this._app._so.load_by_name(to_bubble_so);
                                    }
                                    else if (this.arr_aby_enemy[this.i].frame_action == 19) {
                                        this._app._so.load_by_name(armor_so);
                                    }
                                    else if (this.arr_aby_enemy[this.i].frame_action == 20) {
                                        this._app._so.load_by_name(armor_all_so);
                                    }
                                    else if (this.arr_aby_enemy[this.i].frame_action == 21) {
                                        this._app._so.load_by_name(reload_all_so);
                                    }
                                    this.arr_fox[this.i].scale_cl.icon_clIcon2Scale_cl.$setVisible(true);
                                    this.arr_fox[this.i].scale_cl.icon_clIcon2Scale_cl.gotoAndStop(1);
                                    this.arr_fox[this.i].scale_cl.icon_clIcon2Bg_cl.gotoAndStop(2);
                                }
                            }
                        }
                        else {
                            this.arr_aby_enemy[this.i].reload_time = this.arr_aby_enemy[this.i].reload_time + 1 * this.aura_fox_speed_koff;
                            this.arr_fox[this.i].scale_cl.icon_clIcon2Scale_cl.gotoAndStop(Math.floor(this.arr_aby_enemy[this.i].reload_time / this.arr_aby_enemy[this.i].reload_time2 * 100));
                        }
                    }
                    this.i++;
                }
            }
        }
        public other_f(param1: egret.Event): any {
            this.i = 0;
            while (this.i < this.arr_last_frame_skin.length) {
                if (this.arr_last_frame_skin[this.i].currentFrame == this.arr_last_frame_skin[this.i].totalFrames) {
                    this.arr_last_frame_zone[this.i].removeChild(this.arr_last_frame_skin[this.i]);
                    this.arr_last_frame_skin.splice(this.i, 1);
                    this.arr_last_frame_zone.splice(this.i, 1);
                    break;
                }
                this.i++;
            }
            if (this.xray_ex) {
                this.xray_time++;
                if (this.xray_time >= 70) {
                    Main.xray_mode = false;
                    this._app._music.mute();
                    this.xray_ex = false;
                    this.zone_tuto.removeChild(this.xray_cl);
                }
                if (this.xray_time == 26) {
                    this.xray_cl.ray2Cat_cl.alpha = 0.4;
                    this.xray_cl.ray2Skeleton_cl.nextFrame();
                    this._app._so.load_by_name(injury_so);
                }
            }
        }
        public click_f(param1: egret.TouchEvent): any {
            this.i = 0;
            while (this.i < this.arr_aby.length) {
                if (this.arr_aby[this.i].ex_aby) {
                    if (this._mo(this.arr_aby[this.i].skin.icon_cl)) {
                        this.launch_aby(this.i);
                    }
                }
                this.i++;
            }
            if (this._mo(this.menu_bt_cl)) {
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_pause_f, this);
                this.stop_game();
                this.pause_cl.$setVisible(true);
                this.i = 0;
                while (this.i < this.arr_cat.length) {
                    if (this.arr_cat[this.i].skin.cat1.currentFrame != 3) {
                        this.arr_cat[this.i].skin.cat1Cat2.stop();
                    }
                    this.i++;
                }
                this.i = 0;
                while (this.i < this.arr_fox.length) {
                    if (this.arr_fox[this.i].skin.cat1.currentFrame != 3) {
                        this.arr_fox[this.i].skin.cat1Cat2.stop();
                    }
                    this.i++;
                }
            }
        }
        public began_f(param1: egret.Event): any {
            if (this.status_began == 1) {
                this.i = 0;
                while (true) {
                    if (this.i < this.arr_cat.length) {
                        if (this.arr_cat[this.i].skin.x < 192 - this.i * 50) {
                            this.arr_cat[this.i].skin.$setX(this.arr_cat[this.i].skin.x + 4);
                            if (this.arr_cat[this.i].skin.x >= 192 - this.i * 50) {
                                this.arr_cat[this.i].skin.$setX(192 - this.i * 50);
                                this.arr_cat[this.i].set_mode(4);
                                this.arr_cat[this.i].go_frame(1);
                                this.rnd_for = std._rnd(5) + 1;
                                switch (this.rnd_for) {
                                    case 1:
                                        this.arr_cat[this.i].skin.cat1Cat2.gotoAndPlay("da1");
                                        break;
                                    case 2:
                                        this.arr_cat[this.i].skin.cat1Cat2.gotoAndPlay("da2");
                                        break;
                                    case 3:
                                        this.arr_cat[this.i].skin.cat1Cat2.gotoAndPlay("da3");
                                        break;
                                    case 4:
                                        this.arr_cat[this.i].skin.cat1Cat2.gotoAndPlay("da4");
                                        break;
                                    case 5:
                                        this.arr_cat[this.i].skin.cat1Cat2.gotoAndPlay("da5");
                                }
                            }
                        }
                        if (this.arr_cat[0].skin.x >= 192 - 0 * 50 && this.arr_cat[1].skin.x >= 192 - 1 * 50 && this.arr_cat[2].skin.x >= 192 - 2 * 50 && this.arr_cat[3].skin.x >= 192 - 3 * 50) {
                            this.status_began = 2;
                        }
                        else {
                            this.i++;
                            continue;
                        }
                    }
                }
            }
            else if (this.status_began == 2) {
                this.i = 0;
                while (this.i < this.arr_fox.length) {
                    if (this.arr_fox[this.i].skin.x > 610 - this.i * 50) {
                        this.arr_fox[this.i].skin.$setX(this.arr_fox[this.i].skin.x - 4);
                        if (this.arr_fox[this.i].skin.x <= 610 - this.i * 50) {
                            this.arr_fox[this.i].skin.$setX(610 - this.i * 50);
                            this.arr_fox[this.i].go_frame(1);
                            this.rnd_for = std._rnd(5) + 1;
                            switch (this.rnd_for) {
                                case 1:
                                    this.arr_fox[this.i].skin.cat1Cat2.gotoAndPlay("da1");
                                    break;
                                case 2:
                                    this.arr_fox[this.i].skin.cat1Cat2.gotoAndPlay("da2");
                                    break;
                                case 3:
                                    this.arr_fox[this.i].skin.cat1Cat2.gotoAndPlay("da3");
                                    break;
                                case 4:
                                    this.arr_fox[this.i].skin.cat1Cat2.gotoAndPlay("da4");
                                    break;
                                case 5:
                                    this.arr_fox[this.i].skin.cat1Cat2.gotoAndPlay("da5");
                            }
                        }
                    }
                    if (this.arr_fox[0].skin.x <= 610 - 0 * 50 && this.arr_fox[1].skin.x <= 610 - 1 * 50 && this.arr_fox[2].skin.x <= 610 - 2 * 50 && this.arr_fox[3].skin.x <= 610 - 3 * 50) {
                        this.status_began = 3;
                        this.time_began = 10;
                        break;
                    }
                    this.i++;
                }
            }
            else if (this.status_began == 3) {
                if (--this.time_began < 0) {
                    this.i = 0;
                    while (this.i < this.arr_fox.length) {
                        this.arr_fox[this.i].set_mode(4);
                        this.i++;
                    }
                    this.i = 0;
                    while (this.i < this.arr_cat.length) {
                        this.arr_cat[this.i].set_mode(4);
                        this.i++;
                    }
                    this.i = 0;
                    while (this.i < this.arr_fox.length) {
                        this.arr_fox[this.i].skin.$setX(610 - this.i * 50);
                        this.i++;
                    }
                    this.i = 0;
                    while (this.i < this.arr_cat.length) {
                        this.arr_cat[this.i].skin.$setX(192 - this.i * 50);
                        this.i++;
                    }
                    this._app._music.load_music("game");
                    this.add_function();
                    this.removeEventListener(egret.Event.ENTER_FRAME, this.began_f, this);
                }
            }
        }
        public end_f(param1: egret.Event): any {
            if (this.type_end == 1) {
                this.i4 = 0;
                while (this.i4 < this.arr_cat.length) {
                    if (this.arr_cat[this.i4].life) {
                        if (this._frame(this.arr_cat[this.i4].skin.cat1Cat2) || this.arr_cat[this.i4].reload_mode || this.arr_cat[this.i4].run_mode) {
                            this.arr_cat[this.i4].go_frame(23);
                            this.arr_cat[this.i4].life = false;
                            if (this.i4 == 0) {
                                this.arr_cat[this.i4].skin.cat1Cat2.gotoAndPlay("da1");
                            }
                            else if (this.i4 == 1) {
                                this.arr_cat[this.i4].skin.cat1Cat2.gotoAndPlay("da2");
                            }
                            else if (this.i4 == 2) {
                                this.arr_cat[this.i4].skin.cat1Cat2.gotoAndPlay("da3");
                            }
                            else {
                                this.arr_cat[this.i4].skin.cat1Cat2.gotoAndPlay("da4");
                            }
                        }
                    }
                    this.i2 = 0;
                    while (this.i2 < this.arr_cat.length) {
                        if (Math.abs(this.arr_cat[this.i4].skin.x - this.arr_cat[this.i2].skin.x) < 50 && this.i4 != this.i2) {
                            if (this.arr_cat[this.i4].skin.x > this.arr_cat[this.i2].skin.x) {
                                this.arr_cat[this.i4].skin.$setX(this.arr_cat[this.i4].skin.x + 3);
                                this.arr_cat[this.i2].skin.$setX(this.arr_cat[this.i2].skin.x - 3);
                            }
                            else {
                                this.arr_cat[this.i4].skin.$setX(this.arr_cat[this.i4].skin.x - 3);
                                this.arr_cat[this.i2].skin.$setX(this.arr_cat[this.i2].skin.x + 3);
                            }
                        }
                        this.i2++;
                    }
                    this.i4++;
                }
                if (this.ch_cat() == 1) {
                    this.time_end++;
                    if (this.time_end == 360) {
                        this.go_end();
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.end_f, this);
                        this.time_end = 0;
                    }
                }
            }
            else {
                this.i4 = 0;
                while (this.i4 < this.arr_fox.length) {
                    if (this.arr_fox[this.i4].life) {
                        if (this._frame(this.arr_fox[this.i4].skin.cat1Cat2) || this.arr_fox[this.i4].reload_mode || this.arr_fox[this.i4].run_mode) {
                            this.arr_fox[this.i4].go_frame(23);
                            this.arr_fox[this.i4].life = false;
                            if (this.i4 == 0) {
                                this.arr_fox[this.i4].skin.cat1Cat2.gotoAndPlay("da1");
                            }
                            else if (this.i4 == 1) {
                                this.arr_fox[this.i4].skin.cat1Cat2.gotoAndPlay("da2");
                            }
                            else if (this.i4 == 2) {
                                this.arr_fox[this.i4].skin.cat1Cat2.gotoAndPlay("da3");
                            }
                            else {
                                this.arr_fox[this.i4].skin.cat1Cat2.gotoAndPlay("da4");
                            }
                        }
                    }
                    this.i2 = 0;
                    while (this.i2 < this.arr_fox.length) {
                        if (Math.abs(this.arr_fox[this.i4].skin.x - this.arr_fox[this.i2].skin.x) < 50 && this.i4 != this.i2) {
                            if (this.arr_fox[this.i4].skin.x > this.arr_fox[this.i2].skin.x) {
                                this.arr_fox[this.i4].skin.$setX(this.arr_fox[this.i4].skin.x + 3);
                                this.arr_fox[this.i2].skin.$setX(this.arr_fox[this.i2].skin.x - 3);
                            }
                            else {
                                this.arr_fox[this.i4].skin.$setX(this.arr_fox[this.i4].skin.x - 3);
                                this.arr_fox[this.i2].skin.$setX(this.arr_fox[this.i2].skin.x + 3);
                            }
                        }
                        this.i2++;
                    }
                    this.i4++;
                }
                if (this.ch_fox() == 1) {
                    this.time_end++;
                    if (this.time_end == 220) {
                        this.go_end();
                        this.removeEventListener(egret.Event.ENTER_FRAME, this.end_f, this);
                        this.time_end = 0;
                    }
                }
            }
        }
        public click_back_to_f(param1: egret.TouchEvent): any {
            if (this._mo(this.back_to_cl)) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_back_to_f, this);
                this.go_end();
                this.removeEventListener(egret.Event.ENTER_FRAME, this.end_f, this);
                this.time_end = 0;
            }
        }
        public grand_f(param1: egret.Event): any {
            if (this._frame(this.grand_cl)) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.grand_f, this);
                this.zone_tuto.removeChild(this.grand_cl);
                this.status_began = 1;
                this.location_cl.referee_cl.gotoAndPlay(1);
                this._app._so.load_by_name(StartBattle_so);
            }
        }
        public check_battle(param1: any, param2: any): any {
            this.was_battle_shot = false;
            if (this.arr_cat[param1].life && this.arr_cat[param1].run_mode) {
                this.was_battle_shot = true;
                if (this.arr_cat[param1].aby_shot_mode == false) {
                    this.arr_cat[param1].to_attack();
                    this.arr_fox[param2].remove_hp(this.arr_cat[param1].attack);
                    this.arr_fox[param2].to_back();
                    if (this.arr_fox[param2].aby_mode) {
                        this.arr_fox[param2].aby_mode = false;
                        this.arr_fox[param2].go_frame(4);
                        this.arr_fox[param2].set_mode(4);
                    }
                    this.sprite_var = this._sp(hit_mc, this.zone_up_all, this.arr_cat[param1].skin.x + 40, this.arr_cat[param1].skin.y);
                    this.sprite_var.scaleX = -Math.abs(this.sprite_var.scaleX);
                    this._to_last(this.sprite_var, this.zone_up_all);
                    this._app._so.load_by_name(kick_so);
                }
                if (this.arr_cat[param1].aby_shot_mode) {
                    if (this.arr_aby[param1].type_aby == 1) {
                        this._app._so.load_by_name2(power_kick_so, 70);
                        this.add_super_shot(1, this.arr_cat[param1].skin);
                        if (this.arr_fox[param2].armor_mode) {
                            this.arr_fox[param2].armor_mode = false;
                            this.arr_fox[param2].skin.armor_cl.$setVisible(false);
                        }
                        this.arr_fox[param2].remove_hp(this.arr_aby[param1].power);
                        this.arr_fox[param2].to_back2();
                        if (this.arr_fox[param2].aby_mode) {
                            this.arr_fox[param2].aby_mode = false;
                            this.arr_fox[param2].go_frame(4);
                            this.arr_fox[param2].set_mode(4);
                        }
                        if (this.arr_fox[param2].life) {
                            this.arr_fox[param2].speed = 0;
                            this.arr_fox[param2].run_mode = false;
                            this.arr_fox[param2].reload_mode = true;
                            if (this.arr_fox[param2].bubble_mode == false && this.arr_fox[param2].stun_mode == false) {
                                this.arr_fox[param2].go_frame(24);
                                this.arr_fox[param2].got_damage_mode = true;
                            }
                        }
                    }
                    if (this.arr_aby[param1].type_aby == 2) {
                        this._app._so.load_by_name2(power_kick_so, 70);
                        this.add_super_shot(1, this.arr_cat[param1].skin);
                        if (this.arr_fox[param2].armor_mode) {
                            this.arr_fox[param2].armor_mode = false;
                            this.arr_fox[param2].skin.armor_cl.$setVisible(false);
                        }
                        this.arr_fox[param2].remove_hp(this.arr_aby[param1].power);
                        this.arr_fox[param2].to_back2();
                        if (this.arr_fox[param2].aby_mode) {
                            this.arr_fox[param2].aby_mode = false;
                            this.arr_fox[param2].go_frame(4);
                            this.arr_fox[param2].set_mode(4);
                        }
                        if (this.arr_fox[param2].life) {
                            this.arr_fox[param2].speed = 0;
                            this.arr_fox[param2].run_mode = false;
                            this.arr_fox[param2].reload_mode = true;
                            if (this.arr_fox[param2].bubble_mode == false && this.arr_fox[param2].stun_mode == false) {
                                this.arr_fox[param2].go_frame(24);
                                this.arr_fox[param2].got_damage_mode = true;
                            }
                        }
                    }
                    if (this.arr_aby[param1].type_aby == 10) {
                        if (this.arr_fox[param2].bubble_mode == false) {
                            this._app._so.load_by_name(stun_so);
                            this.add_super_shot(1, this.arr_cat[param1].skin);
                            this.arr_fox[param2].to_stun(this.arr_aby[param1].power);
                            this.arr_fox[param2].scale_cl.icon_clLock_cl.$setVisible(true);
                        }
                    }
                    this.arr_cat[param1].after_attack_mode = true;
                    this.arr_cat[param1].run_mode = false;
                    this.arr_cat[param1].back_mode = true;
                    this.arr_cat[param1].reload_mode = true;
                    this.arr_cat[param1].got_koff_back();
                    this.arr_cat[param1].back_speed = std._rnd(3) + this.back_power * this.arr_cat[param1].koff_back;
                    this.arr_cat[param1].speed = std._rnd(20);
                    this.arr_cat[param1].aby_shot_mode = false;
                    this.arr_cat[param1].go_frame(this.arr_aby[param1].frame_action);
                    this.arr_aby[param1].skin.icon_clIcon2Bg_cl.gotoAndStop(2);
                    this.arr_aby[param1].skin.icon_clIcon2Scale_cl.$setVisible(true);
                    this.arr_aby[param1].skin.icon_clIcon2Scale_cl.gotoAndStop(1);
                    this.arr_aby[param1].reload_time = 0;
                }
            }
            if (this.arr_fox[param2].stun_mode == false && this.arr_fox[param2].life && this.arr_fox[param2].run_mode) {
                if (this.arr_fox[param2].aby_shot_mode == false) {
                    this.set_injure(param1, param2);
                    this.arr_cat[param1].remove_hp(this.arr_fox[param2].attack);
                    this.arr_fox[param2].to_attack();
                    if (this.arr_cat[param1].aby_mode) {
                        this.arr_cat[param1].aby_mode = false;
                        this.arr_cat[param1].go_frame(4);
                        this.arr_cat[param1].set_mode(4);
                    }
                }
                if (this.arr_fox[param2].aby_shot_mode) {
                    if (this.arr_aby_enemy[param2].type_aby == 1) {
                        this._app._so.load_by_name2(power_kick_so, 70);
                        this.add_super_shot(2, this.arr_fox[param2].skin);
                        if (this.arr_cat[param1].armor_mode) {
                            this.arr_cat[param1].armor_mode = false;
                            this.arr_cat[param1].skin.armor_cl.$setVisible(false);
                        }
                        this.arr_cat[param1].remove_hp(this.arr_aby_enemy[param2].power);
                        this.arr_cat[param1].to_back2();
                        if (this.arr_cat[param1].aby_mode) {
                            this.arr_cat[param1].aby_mode = false;
                            this.arr_cat[param1].go_frame(4);
                            this.arr_cat[param1].set_mode(4);
                        }
                        if (this.arr_cat[param1].life) {
                            this.arr_cat[param1].speed = 0;
                            this.arr_cat[param1].run_mode = false;
                            this.arr_cat[param1].reload_mode = true;
                            if (this.arr_cat[param1].bubble_mode == false && this.arr_cat[param1].stun_mode == false) {
                                this.arr_cat[param1].go_frame(24);
                                this.arr_cat[param1].got_damage_mode = true;
                            }
                        }
                    }
                    if (this.arr_aby_enemy[param2].type_aby == 2) {
                        this.add_super_shot(2, this.arr_fox[param2].skin);
                        this._app._so.load_by_name2(power_kick_so, 70);
                        if (this.arr_cat[param1].armor_mode) {
                            this.arr_cat[param1].armor_mode = false;
                            this.arr_cat[param1].skin.armor_cl.$setVisible(false);
                        }
                        this.arr_cat[param1].remove_hp(this.arr_aby_enemy[param2].power);
                        this.arr_cat[param1].to_back2();
                        if (this.arr_cat[param1].aby_mode) {
                            this.arr_cat[param1].aby_mode = false;
                            this.arr_cat[param1].go_frame(4);
                            this.arr_cat[param1].set_mode(4);
                        }
                        if (this.arr_cat[param1].life) {
                            this.arr_cat[param1].speed = 0;
                            this.arr_cat[param1].run_mode = false;
                            this.arr_cat[param1].reload_mode = true;
                            if (this.arr_cat[param1].bubble_mode == false && this.arr_cat[param1].stun_mode == false) {
                                this.arr_cat[param1].go_frame(24);
                                this.arr_cat[param1].got_damage_mode = true;
                            }
                        }
                    }
                    if (this.arr_aby_enemy[param2].type_aby == 10) {
                        if (this.arr_cat[param1].bubble_mode == false) {
                            this._app._so.load_by_name(stun_so);
                            this.add_super_shot(2, this.arr_fox[param2].skin);
                            this.arr_cat[param1].to_stun(this.arr_aby_enemy[param2].power);
                            this.arr_aby[param1].skin.icon_clLock_cl.$setVisible(true);
                        }
                    }
                    this.arr_fox[param2].after_attack_mode = true;
                    this.arr_fox[param2].run_mode = false;
                    this.arr_fox[param2].back_mode = true;
                    this.arr_fox[param2].reload_mode = true;
                    this.arr_fox[param2].got_koff_back();
                    this.arr_fox[param2].back_speed = std._rnd(3) + this.back_power * this.arr_fox[param2].koff_back;
                    this.arr_fox[param2].speed = std._rnd(20);
                    this.arr_fox[param2].aby_shot_mode = false;
                    this.arr_fox[param2].go_frame(this.arr_aby_enemy[param2].frame_action);
                    this.arr_fox[param2].scale_cl.icon_clIcon2Bg_cl.gotoAndStop(2);
                    this.arr_fox[param2].scale_cl.icon_clIcon2Scale_cl.$setVisible(true);
                    this.arr_fox[param2].scale_cl.icon_clIcon2Scale_cl.gotoAndStop(1);
                    this.arr_aby_enemy[param2].reload_time = 0;
                }
                if (this.was_battle_shot == false) {
                    this._app._so.load_by_name(kick2_so);
                    this.arr_cat[param1].to_back();
                    this.sprite_var = this._sp(hit_mc, this.zone_up_all, this.arr_fox[param2].skin.x - 40, this.arr_fox[param2].skin.y);
                    this._to_last(this.sprite_var, this.zone_up_all);
                }
            }
        }
        public launch_aby(param1: any): any {
            if (this.lock_mode == false) {
                if (this.arr_cat[param1].stun_mode == false && this.arr_cat[param1].aby_mode == false && this.arr_cat[param1].bubble_mode == false) {
                    if (this.arr_aby[param1].type_aby == 1 || this.arr_aby[param1].type_aby == 2 || this.arr_aby[param1].type_aby == 10) {
                        this.arr_aby[param1].ex_aby = false;
                        this.arr_aby[param1].skin.icon_clIcon2Bg_cl.gotoAndStop(3);
                        this.arr_aby[param1].reload_time = -999;
                        this.arr_cat[param1].speed = this.arr_cat[param1].speed2;
                        this.arr_cat[param1].aby_shot_mode = true;
                    }
                    else {
                        this.arr_aby[param1].ex_aby = false;
                        this.arr_aby[param1].skin.icon_clIcon2Bg_cl.gotoAndStop(2);
                        this.arr_aby[param1].skin.icon_clIcon2Scale_cl.$setVisible(true);
                        this.arr_aby[param1].skin.icon_clIcon2Scale_cl.gotoAndStop(1);
                        this.arr_aby[param1].reload_time = 0;
                        this.arr_cat[param1].set_mode(0);
                        this.arr_cat[param1].aby_mode = true;
                        this.arr_cat[param1].aby_time = this.arr_aby[param1].time;
                        this.arr_cat[param1].go_frame(this.arr_aby[param1].frame_action);
                        if (this.arr_aby[param1].frame_action == 12) {
                            this._app._so.load_by_name(aura_power_so);
                        }
                        else if (this.arr_aby[param1].frame_action == 13) {
                            this._app._so.load_by_name(aura_speed_so);
                        }
                        else if (this.arr_aby[param1].frame_action == 16) {
                            this._app._so.load_by_name(aura_dead_so);
                        }
                        else if (this.arr_aby[param1].frame_action == 18) {
                            this._app._so.load_by_name(to_bubble_so);
                        }
                        else if (this.arr_aby[param1].frame_action == 19) {
                            this._app._so.load_by_name(armor_so);
                        }
                        else if (this.arr_aby[param1].frame_action == 20) {
                            this._app._so.load_by_name(armor_all_so);
                        }
                        else if (this.arr_aby[param1].frame_action == 21) {
                            this._app._so.load_by_name(reload_all_so);
                        }
                    }
                }
            }
        }
        public check_end(): any {
            var save_results: Function = function (): any {
                if (Main.sav.data.playoff_round == 1) {
                    Main.sav.data.count_semi_1_1 = this.dead_fox;
                    Main.sav.data.count_semi_1_2 = this.dead_cat;
                }
                else if (Main.sav.data.playoff_round == 2) {
                    Main.sav.data.count_final_1 = this.dead_fox;
                    Main.sav.data.count_final_2 = this.dead_cat;
                }
            };
            if (Main.sav.data.playoff == 0) {
                if (this.dead_fox == 4) {
                    Main.sav.data["team_games_" + this._app.team_enemy_id]++;
                    Main.sav.data["team_d_" + this._app.team_enemy_id]++;
                    Main.sav.data["team_pts_" + this._app.team_enemy_id] = Main.sav.data["team_pts_" + this._app.team_enemy_id] + this.dead_cat;
                    Main.sav.data.last_enemy = this._app.team_enemy;
                    Main.sav.data.last_enemy_id = this._app.team_enemy_id;
                    Main.sav.data.team_games_1++;
                    Main.sav.data.team_w_1++;
                    Main.sav.data.team_pts_1 = Main.sav.data.team_pts_1 + this.dead_fox;
                    this.type_end = 1;
                    this.end_game();
                    if (Main.sav.data.league == 4) {
                        Main.sav.data.earn_fish = 150;
                    }
                    else if (Main.sav.data.league == 3) {
                        Main.sav.data.earn_fish = 200;
                    }
                    else if (Main.sav.data.league == 2) {
                        Main.sav.data.earn_fish = 250;
                    }
                    else if (Main.sav.data.league == 1) {
                        Main.sav.data.earn_fish = 300;
                    }
                    Main.sav.data.result = 1;
                    Main.sav.data.earn_pts = this.dead_fox;
                    Main.sav.data.gold = Main.sav.data.gold + Main.sav.data.earn_fish;
                    Main.sav.data.gold_overall = Main.sav.data.gold_overall + Main.sav.data.earn_fish;
                    this._app._music.delete_music("all");
                    this._app._so.load_by_name(won_so);
                }
                else if (this.dead_cat == 4) {
                    Main.sav.data.team_games_1++;
                    Main.sav.data.team_d_1++;
                    Main.sav.data.team_pts_1 = Main.sav.data.team_pts_1 + this.dead_fox;
                    Main.sav.data["team_games_" + this._app.team_enemy_id]++;
                    Main.sav.data["team_w_" + this._app.team_enemy_id]++;
                    Main.sav.data["team_pts_" + this._app.team_enemy_id] = Main.sav.data["team_pts_" + this._app.team_enemy_id] + this.dead_cat;
                    Main.sav.data.last_enemy = this._app.team_enemy;
                    Main.sav.data.last_enemy_id = this._app.team_enemy_id;
                    this.type_end = 2;
                    this.end_game();
                    if (Main.sav.data.league == 4) {
                        Main.sav.data.earn_fish = 50;
                    }
                    else if (Main.sav.data.league == 3) {
                        Main.sav.data.earn_fish = 75;
                    }
                    else if (Main.sav.data.league == 2) {
                        Main.sav.data.earn_fish = 100;
                    }
                    else if (Main.sav.data.league == 1) {
                        Main.sav.data.earn_fish = 150;
                    }
                    Main.sav.data.result = 2;
                    Main.sav.data.earn_pts = this.dead_fox;
                    Main.sav.data.gold = Main.sav.data.gold + Main.sav.data.earn_fish;
                    Main.sav.data.gold_overall = Main.sav.data.gold_overall + Main.sav.data.earn_fish;
                    this._app._music.delete_music("all");
                    this._app._so.load_by_name(defeat_so);
                }
            }
            else if (this.dead_fox == 4) {
                if (Main.sav.data.playoff_round == 1) {
                    Main.sav.data.gold = Main.sav.data.gold + 400;
                    Main.sav.data.gold_overall = Main.sav.data.gold_overall + 400;
                }
                else if (Main.sav.data.playoff_round === 2) {
                    Main.sav.data.gold = Main.sav.data.gold + 800;
                    Main.sav.data.gold_overall = Main.sav.data.gold_overall + 800;
                }
                else if (Main.sav.data.playoff_round == 3) {
                    Main.sav.data.gold = Main.sav.data.gold + 3000;
                    Main.sav.data.gold_overall = Main.sav.data.gold_overall + 3000;
                }
                save_results();
                this.type_end = 1;
                this.end_game();
                this._app._music.delete_music("all");
                this._app._so.load_by_name(won_so);
            }
            else if (this.dead_cat == 4) {
                if (Main.sav.data.playoff_round == 1) {
                    Main.sav.data.gold = Main.sav.data.gold + 200;
                    Main.sav.data.gold_overall = Main.sav.data.gold_overall + 200;
                }
                else if (Main.sav.data.playoff_round === 2) {
                    Main.sav.data.gold = Main.sav.data.gold + 400;
                    Main.sav.data.gold_overall = Main.sav.data.gold_overall + 400;
                }
                else if (Main.sav.data.playoff_round == 3) {
                    Main.sav.data.gold = Main.sav.data.gold + 500;
                    Main.sav.data.gold_overall = Main.sav.data.gold_overall + 500;
                }
                this._app._music.delete_music("all");
                this._app._so.load_by_name(defeat_so);
                Main.sav.data.end_of_playoff = 1;
                Main.sav.data.playoff = 0;
                Main.sav.data.rest = 1;
                save_results();
                this.type_end = 2;
                this.end_game();
            }
        }
        public end_game(): any {
            this.i3 = 0;
            while (this.i3 < this.arr_cat.length) {
                Main.sav.data["cat_hp_" + (this.i3 + 1)] = this.arr_cat[this.i3].hp;
                if (Main.sav.data["cat_hp_" + (this.i3 + 1)] < Math.floor(Main.sav.data["cat_hp2_" + (this.i3 + 1)] * 0.5)) {
                    Main.sav.data["cat_hp_" + (this.i3 + 1)] = Math.floor(Main.sav.data["cat_hp2_" + (this.i3 + 1)] * 0.5);
                }
                if (Main.sav.data["cat_hp_" + (this.i3 + 1)] > Math.floor(Main.sav.data["cat_hp2_" + (this.i3 + 1)] * Main.sav.data["cat_hp_koff_" + (this.i3 + 1)])) {
                    Main.sav.data["cat_hp_" + (this.i3 + 1)] = Math.floor(Main.sav.data["cat_hp2_" + (this.i3 + 1)] * Main.sav.data["cat_hp_koff_" + (this.i3 + 1)]);
                }
                this.i3++;
            }
            this.i3 = 0;
            while (this.i3 < this.arr_fireball_skin.length) {
                this.arr_fireball_skin[this.i3].$setVisible(false);
                this.i3++;
            }
            this.i3 = 0;
            while (this.i3 < this.arr_cat.length) {
                this.arr_cat[this.i3].skin.armor_cl.$setVisible(false);
                this.i3++;
            }
            this.i3 = 0;
            while (this.i3 < this.arr_fox.length) {
                this.arr_fox[this.i3].skin.armor_cl.$setVisible(false);
                this.i3++;
            }
            Main.sav.data.cat_place_1 = 9;
            Main.sav.data.cat_place_2 = 10;
            Main.sav.data.cat_place_3 = 11;
            Main.sav.data.cat_place_4 = 12;
            this.set_result_enemy_games();
            this.info_aby_cl.$setVisible(false);
            this.stop_game();
            this.time_end = 0;
            this.addEventListener(egret.Event.ENTER_FRAME, this.end_f, this);
            Main.sav.data.week = 1;
            if (Main.sav.data.playoff == 0) {
                Main.sav.data.season_round++;
            }
            else {
                Main.sav.data.playoff_round++;
            }
            Main.sav.data.week_hi++;
            if (Main.sav.data.week_hi > 7) {
                Main.sav.data.week_hi = 1;
            }
            if (Main.sav.data.playoff == 0) {
                if (this.type_end == 1) {
                    this.check_won_dress = 1;
                    while (this.check_won_dress < 5) {
                        this.id_dress = this._app.team_enemy_id * 4 - 8 + this.check_won_dress;
                        if (Main.sav.data["dress_" + this.id_dress] == 0) {
                            Main.sav.data["dress_" + this.id_dress] = 1;
                            this.won_card_cl = this._sp(card_game_mc, this.zone_tuto, 325, 185);
                            this.load_info_to_card(this.won_card_cl.card_cl, this.id_dress);
                            break;
                        }
                        this.check_won_dress++;
                    }
                }
            }
            if (this.tuto_battle == false) {
                this.back_to_cl = this._sp(back_to_mc, this.zone_tuto, 322, 388);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_back_to_f, this);
            }
            this.set_new_shop();
            if (Main.sav.data.playoff == 0) {
                if (Main.sav.data.season_round == 5) {
                    this.arr_le.splice(0, this.arr_le.length);
                    this.arr_sort.splice(0, this.arr_sort.length);
                    this.i3 = 1;
                    while (this.i3 <= 21) {
                        this.arr_sort.push(100);
                        this.i3++;
                    }
                    this.i3 = 1;
                    while (this.i3 <= 21) {
                        this.arr_le.push(Main.sav.data["team_pts_" + this.i3]);
                        this.i3++;
                    }
                    this.i3 = 0;
                    while (this.i3 < 21) {
                        this.rnd_for = 0;
                        this.i2 = 0;
                        while (this.i2 < 21) {
                            if (this.arr_le[this.i3] > this.arr_le[this.i2]) {
                                this.rnd_for++;
                            }
                            this.i2++;
                        }
                        while (this.arr_sort[this.rnd_for] != 100) {
                            this.rnd_for++;
                        }
                        this.arr_sort[this.rnd_for] = this.i3 + 1;
                        this.i3++;
                    }
                    this.arr_sort.reverse();
                    Main.sav.data.show_season_finish_playoff = 1;
                    if (this.arr_sort[0] == 1) {
                        if (Main.sav.data.league > 1) {
                            Main.sav.data.new_league = 1;
                        }
                        else {
                            Main.sav.data.new_league = 0;
                        }
                        Main.sav.data.playoff_round = 1;
                        Main.sav.data.playoff = 1;
                        Main.sav.data.rest = 0;
                        Main.sav.data.count_semi_1_1 = 0;
                        Main.sav.data.count_semi_1_2 = 0;
                        Main.sav.data.count_semi_2_1 = 0;
                        Main.sav.data.count_semi_2_2 = 0;
                        Main.sav.data.count_final_1 = 0;
                        Main.sav.data.count_final_2 = 0;
                        if (Main.sav.data.league == 4) {
                            Main.sav.data.off_team_1 = 1;
                            Main.sav.data.off_team_2 = std._rnd(5) + 12;
                            Main.sav.data.off_team_3 = std._rnd(5) + 7;
                            Main.sav.data.off_team_4 = std._rnd(5) + 17;
                        }
                        else if (Main.sav.data.league == 3) {
                            Main.sav.data.off_team_1 = 1;
                            Main.sav.data.off_team_2 = std._rnd(5) + 17;
                            Main.sav.data.off_team_3 = std._rnd(5) + 12;
                            Main.sav.data.off_team_4 = std._rnd(5) + 2;
                        }
                        else if (Main.sav.data.league == 2) {
                            Main.sav.data.off_team_1 = 1;
                            Main.sav.data.off_team_2 = std._rnd(5) + 7;
                            Main.sav.data.off_team_3 = std._rnd(5) + 2;
                            Main.sav.data.off_team_4 = std._rnd(5) + 17;
                        }
                        else if (Main.sav.data.league == 1) {
                            Main.sav.data.off_team_1 = 1;
                            Main.sav.data.off_team_2 = std._rnd(5) + 7;
                            Main.sav.data.off_team_3 = std._rnd(5) + 12;
                            Main.sav.data.off_team_4 = std._rnd(5) + 2;
                            Main.sav.data.cup_shark = 1;
                        }
                    }
                    else {
                        this.i3 = 0;
                        while (this.i3 < this.arr_sort.length) {
                            if (this.arr_sort[this.i3] == 1) {
                                Main.sav.data.place_won_kitty = this.i3 + 1;
                                break;
                            }
                            this.i3++;
                        }
                        if (Main.sav.data.place_won_kitty > 6) {
                            Main.sav.data.place_won_kitty = 6;
                        }
                        Main.sav.data.new_league = 0;
                        Main.sav.data.playoff = 0;
                        Main.sav.data.rest = 1;
                    }
                }
            }
            if (Main.sav.data.show_season_finish_playoff == 0 && Main.sav.data.end_of_playoff == 0 && Main.sav.data.show_season_finish == 0) {
                Main.sav.data.news_paper = 1;
            }
            else {
                Main.sav.data.news_paper = 0;
            }
            Main.sav.flush();
        }
        go_end(): any {
            if (this.tuto_battle) {
                this._app.init_save_kitty();
                Main.sav.data.game_ex = 1;
                this._app.open_new_screen("comics");
            }
            else if (Main.sav.data.show_season_finish_playoff == 1) {
                if (Main.sav.data.playoff == 1) {
                    this.got_cup_cl = this._sp(got_cup_mc, this.zone_tuto, 0, 0);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_got_cup_f, this);
                    this.got_cup_cl.cat1.gotoAndStop(1);
                    this.got_cup_cl.cat2.gotoAndStop(2);
                    this.got_cup_cl.cat3.gotoAndStop(3);
                    this.got_cup_cl.cat4.gotoAndStop(4);
                    this.dress_up(this.got_cup_cl.cat1, 1, Main.sav.data.cat_dress_1);
                    this.dress_up(this.got_cup_cl.cat2, 2, Main.sav.data.cat_dress_2);
                    this.dress_up(this.got_cup_cl.cat3, 3, Main.sav.data.cat_dress_3);
                    this.dress_up(this.got_cup_cl.cat4, 4, Main.sav.data.cat_dress_4);
                    this.got_cup_cl.cups_cl.gotoAndStop(Main.sav.data.league);
                    this.got_cup_cl.cat1.gotoAndStop(1);
                    this.got_cup_cl.cat2.gotoAndStop(2);
                    this.got_cup_cl.cat3.gotoAndStop(3);
                    this.got_cup_cl.cat4.gotoAndStop(4);
                }
                else {
                    this._app.open_new_screen("upg");
                }
            }
            else if (Main.sav.data.playoff == 1) {
                if (Main.sav.data.playoff_round >= 4 && this.type_end == 1) {
                    Main.sav.data.game_end = 1;
                    Main.sav.data.playoff = 0;
                    Main.sav.data.rest = 1;
                    this._app.open_new_screen("finish");
                }
                else {
                    this._app.open_new_screen("upg");
                }
            }
            else {
                this._app.open_new_screen("upg");
            }
        }
        new_step(): any {
            this.arr_temp.splice(0, this.arr_temp.length);
            this.arr_temp2.splice(0, this.arr_temp2.length);
            if (this.numbef_of_m == 0) {
                if (Main.sav.data.league == 4) {
                    this.arr_temp.push(2, 3, 4, 5, 6);
                    this.arr_temp2.push(2, 3, 4, 5, 6);
                }
                else if (Main.sav.data.league == 3) {
                    this.arr_temp.push(7, 8, 9, 10, 11);
                    this.arr_temp2.push(7, 8, 9, 10, 11);
                }
                else if (Main.sav.data.league == 2) {
                    this.arr_temp.push(12, 13, 14, 15, 16);
                    this.arr_temp2.push(12, 13, 14, 15, 16);
                }
                else if (Main.sav.data.league == 1) {
                    this.arr_temp.push(17, 18, 19, 20, 21);
                    this.arr_temp2.push(17, 18, 19, 20, 21);
                }
            }
            else {
                this.i3 = 1 + this.numbef_of_m + Main.sav.data.season_koff;
                while (this.arr_temp.length < 5) {
                    this.arr_temp.push(this.i3);
                    this.i3++;
                    if (this.i3 > 6 + Main.sav.data.season_koff) {
                        this.i3 = 2 + Main.sav.data.season_koff;
                    }
                }
                if (this.numbef_of_two) {
                    this.i3 = 1 + this.numbef_of_m2 + Main.sav.data.season_koff;
                    while (this.arr_temp2.length < 5) {
                        this.arr_temp2.push(this.i3);
                        this.i3++;
                        if (this.i3 > 6 + Main.sav.data.season_koff) {
                            this.i3 = 2 + Main.sav.data.season_koff;
                        }
                    }
                }
            }
            this.arr_op.splice(0, this.arr_op.length);
            this.arr_op2.splice(0, this.arr_op2.length);
            this.numbef_of_m++;
            if (this.numbef_of_m == 4 + Main.sav.data.season_koff) {
                this.numbef_of_two = true;
                this.numbef_of_m = 0;
                this.numbef_of_m2++;
                if (this.numbef_of_m2 == 4 + Main.sav.data.season_koff) {
                    this.numbef_of_m2 = 0;
                }
            }
            this.numbef_of_m3++;
        }
        set_match(): any {
            this.new_step();
            this.i3 = 0;
            while (this.i3 < this.arr_temp.length) {
                this.i5 = 0;
                while (this.i5 < this.arr_temp2.length) {
                    if (this.arr_temp[this.i3] != this._app.team_enemy_id && this.arr_temp2[this.i5] != this._app.team_enemy_id && this.arr_temp[this.i3] != this.arr_temp2[this.i5]) {
                        if (Main.sav.data["match_" + this.arr_temp[this.i3] + "_vs_" + this.arr_temp2[this.i5]] == 0 && Main.sav.data["match_" + this.arr_temp2[this.i5] + "_vs_" + this.arr_temp[this.i3]] == 0) {
                            this.arr_op.push(this.arr_temp[this.i3]);
                            this.arr_op2.push(this.arr_temp2[this.i5]);
                            this.rnd_for = this.arr_temp[this.i3];
                            this.rnd_for2 = this.arr_temp2[this.i5];
                            this.arr_temp.splice(this.i3, 1);
                            this.arr_temp2.splice(this.i5, 1);
                            this.i6 = 0;
                            while (this.i6 < this.arr_temp.length) {
                                if (this.arr_temp[this.i6] == this.rnd_for2) {
                                    this.arr_temp.splice(this.i6, 1);
                                    break;
                                }
                                this.i6++;
                            }
                            this.i6 = 0;
                            while (this.i6 < this.arr_temp2.length) {
                                if (this.arr_temp2[this.i6] == this.rnd_for) {
                                    this.arr_temp2.splice(this.i6, 1);
                                    break;
                                }
                                this.i6++;
                            }
                            this.i5--;
                            this.i3--;
                        }
                    }
                    this.i5++;
                }
                this.i3++;
            }
            if (this.arr_op.length == 2 || this.numbef_of_m3 == 9000) {
                return 1;
            }
            return 0;
        };
        set_result_enemy_games(): any {
            if (Main.sav.data.playoff == 1) {
                if (Main.sav.data.playoff_round == 1) {
                    if (Main.sav.data.league == 4) {
                        Main.sav.data.off_team_5 = Main.sav.data.off_team_4;
                        Main.sav.data.count_semi_2_1 = std._rnd(4);
                        Main.sav.data.count_semi_2_2 = 4;
                    }
                    else if (Main.sav.data.league == 3) {
                        Main.sav.data.off_team_5 = Main.sav.data.off_team_3;
                        Main.sav.data.count_semi_2_2 = std._rnd(4);
                        Main.sav.data.count_semi_2_1 = 4;
                    }
                    else if (Main.sav.data.league == 2) {
                        Main.sav.data.off_team_5 = Main.sav.data.off_team_4;
                        Main.sav.data.count_semi_2_1 = std._rnd(4);
                        Main.sav.data.count_semi_2_2 = 4;
                    }
                    else if (Main.sav.data.league == 1) {
                        Main.sav.data.off_team_5 = Main.sav.data.off_team_3;
                        Main.sav.data.count_semi_2_2 = std._rnd(4);
                        Main.sav.data.count_semi_2_1 = 4;
                    }
                }
            }
            else {
                this.numbef_of_m = 1;
                this.numbef_of_m2 = 2;
                this.numbef_of_two = false;
                this.numbef_of_m3 = 0;
                while (this.set_match() == 0) {
                }
                this.i3 = 0;
                while (this.i3 < this.arr_op.length) {
                    this.rnd_for5 = 0;
                    this.rnd_for6 = 0;
                    this.i6 = 1;
                    while (this.i6 <= 50) {
                        if (this.arr_op[this.i3] + std._rnd(5) >= this.arr_op[this.i3] + std._rnd(5)) {
                            this.rnd_for5++;
                        }
                        else {
                            this.rnd_for6++;
                        }
                        if (this.rnd_for5 >= 4) {
                            Main.sav.data["team_w_" + this.arr_op[this.i3]]++;
                            Main.sav.data["team_d_" + this.arr_op2[this.i3]]++;
                            break;
                        }
                        if (this.rnd_for6 >= 4) {
                            Main.sav.data["team_w_" + this.arr_op2[this.i3]]++;
                            Main.sav.data["team_d_" + this.arr_op[this.i3]]++;
                            break;
                        }
                        this.i6++;
                    }
                    Main.sav.data["team_pts_" + this.arr_op[this.i3]] = Main.sav.data["team_pts_" + this.arr_op[this.i3]] + this.rnd_for5;
                    Main.sav.data["team_pts_" + this.arr_op2[this.i3]] = Main.sav.data["team_pts_" + this.arr_op2[this.i3]] + this.rnd_for6;
                    Main.sav.data["team_games_" + this.arr_op[this.i3]]++;
                    Main.sav.data["team_games_" + this.arr_op2[this.i3]]++;
                    Main.sav.data["match_" + this.arr_op[this.i3] + "_vs_" + this.arr_op2[this.i3]] = 1;
                    Main.sav.data["match_" + this.arr_op2[this.i3] + "_vs_" + this.arr_op[this.i3]] = 1;
                    this.i3++;
                }
            }
        }
        set_new_shop(): any {
            Main.sav.data.shop_buy_1 = 0;
            Main.sav.data.shop_buy_2 = 0;
            Main.sav.data.shop_buy_3 = 0;
            Main.sav.data.shop_buy_4 = 0;
            Main.sav.data.shop_buy_5 = 0;
            this.arr_temp.splice(0, this.arr_temp.length);
            this.arr_temp2.splice(0, this.arr_temp2.length);
            this.arr_temp3.splice(0, this.arr_temp3.length);
            this.i3 = 1;
            while (this.i3 <= 80) {
                if (Main.sav.data["dress_" + this.i3] == 0) {
                    this.rnd_for5 = this._info.got_level(this.i3);
                    if (this.rnd_for5 == 1) {
                        this.arr_temp.push(this.i3);
                    }
                    else if (this.rnd_for5 == 2) {
                        this.arr_temp2.push(this.i3);
                    }
                    else if (this.rnd_for5 == 3) {
                        this.arr_temp3.push(this.i3);
                    }
                }
                this.i3++;
            }
            this.rnd_for4 = 1;
            while (this.rnd_for4 < 3) {
                if (this.arr_temp.length > 0) {
                    this.rnd_for3 = std._rnd(this.arr_temp.length);
                    Main.sav.data["shop_" + this.rnd_for4] = this.arr_temp[this.rnd_for3];
                    this.arr_temp.splice(this.rnd_for3, 1);
                    this.rnd_for4++;
                    continue;
                }
                break;
            }
            while (this.rnd_for4 < 5) {
                if (this.arr_temp2.length > 0) {
                    this.rnd_for3 = std._rnd(this.arr_temp2.length);
                    Main.sav.data["shop_" + this.rnd_for4] = this.arr_temp2[this.rnd_for3];
                    this.arr_temp2.splice(this.rnd_for3, 1);
                    this.rnd_for4++;
                    continue;
                }
                break;
            }
            while (this.rnd_for4 < 6) {
                if (this.arr_temp3.length > 0) {
                    this.rnd_for3 = std._rnd(this.arr_temp3.length);
                    Main.sav.data["shop_" + this.rnd_for4] = this.arr_temp3[this.rnd_for3];
                    this.arr_temp3.splice(this.rnd_for3, 1);
                    this.rnd_for4++;
                    continue;
                }
                break;
            }
            while (this.rnd_for4 < 6) {
                Main.sav.data["shop_" + this.rnd_for4] = 0;
                this.rnd_for4++;
            }
        }
        stop_game(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
        }
        ch_cat(): any {
            this.i3 = 0;
            while (this.i3 < this.arr_cat.length) {
                if (this.arr_cat[this.i3].life) {
                    return 0;
                }
                this.i3++;
            }
            return 1;
        }
        ch_fox(): any {
            this.i3 = 0;
            while (this.i3 < this.arr_fox.length) {
                if (this.arr_fox[this.i3].life) {
                    return 0;
                }
                this.i3++;
            }
            return 1;
        }
        add_aura(param1: any, param2: any, param3: any): any {
            if (this.aura_ex(param1, param2) == 0) {
                this._aura = new Aura();
                this._aura.init(param1, param2, param3);
                this.zone_panel.addChild(this._aura);
                if (param1 == 1) {
                    this.arr_aura_cat.push(this._aura);
                    if (param2 == 1) {
                        this.aura_cat_attack_koff = 1.5;
                    }
                    else if (param2 == 2) {
                        this.aura_cat_speed_koff = 1.5;
                    }
                    else if (param2 == 3) {
                        this.lock_mode_fox = true;
                        this.i5 = 0;
                        while (this.i5 < this.arr_fox.length) {
                            this.arr_fox[this.i5].scale_cl.icon_clLock_cl.$setVisible(true);
                            this.i5++;
                        }
                    }
                    else {
                        this.aura_cat_weak_koff = 0.5;
                    }
                }
                else {
                    this.arr_aura_fox.push(this._aura);
                    if (param2 == 1) {
                        this.aura_fox_attack_koff = 1.5;
                    }
                    else if (param2 == 2) {
                        this.aura_fox_speed_koff = 1.5;
                    }
                    else if (param2 == 3) {
                        this.lock_mode = true;
                        this.i5 = 0;
                        while (this.i5 < this.arr_aby.length) {
                            this.arr_aby[this.i5].skin.icon_clLock_cl.$setVisible(true);
                            this.i5++;
                        }
                    }
                    else {
                        this.aura_fox_weak_koff = 0.5;
                    }
                }
            }
        }
        public aura_ex(param1: any, param2: any): any {
            if (param1 == 1) {
                this.i2 = 0;
                while (this.i2 < this.arr_aura_cat.length) {
                    if (this.arr_aura_cat[this.i2].type == param2) {
                        return 1;
                    }
                    this.i2++;
                }
                return 0;
            }
            this.i2 = 0;
            while (this.i2 < this.arr_aura_fox.length) {
                if (this.arr_aura_fox[this.i2].type == param2) {
                    return 1;
                }
                this.i2++;
            }
            return 0;
        }
        public set_injure(param1: any, param2: any): any {
            if (this._app.train_mode == false) {
                if (std._rnd(100) > Main.sav.data.chance_injury) {
                    param1++;
                    this.arr_temp3.splice(0, this.arr_temp3.length);
                    this.i6 = 1;
                    while (this.i6 <= 3) {
                        if (Main.sav.data["cat_injury" + this.i6 + "_" + param1] == 0) {
                            this.arr_temp3.push(this.i6);
                        }
                        this.i6++;
                    }
                    if (this.arr_temp3.length > 0) {
                        this.rnd_for = std._rnd(this.arr_temp3.length);
                        Main.sav.data["cat_injury" + this.arr_temp3[this.rnd_for] + "_" + param1] = 1;
                        Main.sav.data["cat_injury" + this.arr_temp3[this.rnd_for] + "_time_" + param1] = 0;
                        this.xray_type = this.arr_temp3[this.rnd_for];
                        this.number_of_in = 0;
                        if (Main.sav.data["cat_injury1_" + param1] == 1) {
                            this.number_of_in++;
                        }
                        if (Main.sav.data["cat_injury2_" + param1] == 1) {
                            this.number_of_in++;
                        }
                        if (Main.sav.data["cat_injury3_" + param1] == 1) {
                            this.number_of_in++;
                        }
                        if (this.number_of_in == 3) {
                            Main.sav.data["cat_hp_koff_" + param1] = 0.25;
                        }
                        else if (this.number_of_in == 2) {
                            Main.sav.data["cat_hp_koff_" + param1] = 0.5;
                        }
                        else if (this.number_of_in == 1) {
                            Main.sav.data["cat_hp_koff_" + param1] = 0.75;
                        }
                        if (this.xray_ex == false) {
                            Main.xray_mode = true;
                            this._app._music.mute();
                            this.xray_cl = this._sp(xray_mc, this.zone_tuto, 72, 61);
                            this.xray_ex = true;
                            this.dress_up(this.xray_cl.ray2Cat_cl, param1, Main.sav.data["cat_dress_" + param1]);
                            this.dress_up(this.xray_cl.ray2Ene_cl, this.arr_fox[param2].type, this.arr_fox[param2].set_id);
                            this._app._so.load_by_name(x_ray_so);
                            this.xray_cl.ray2Cat_cl.gotoAndStop(this.xray_type);
                            if (this.xray_type == 1) {
                                this.xray_cl.ray2Ene_cl.gotoAndPlay("da1");
                                this.xray_cl.ray2Skeleton_cl.gotoAndStop("da1");
                            }
                            else if (this.xray_type == 2) {
                                this.xray_cl.ray2Ene_cl.gotoAndPlay("da2");
                                this.xray_cl.ray2Skeleton_cl.gotoAndStop("da2");
                            }
                            else {
                                this.xray_cl.ray2Ene_cl.gotoAndPlay("da3");
                                this.xray_cl.ray2Skeleton_cl.gotoAndStop("da3");
                            }
                            this.xray_time = 0;
                        }
                    }
                }
            }
        }
        set_tablo(): any {
            this.location_cl.tablo_clP1N_tx.text = this.dead_fox.toString();
            this.location_cl.tablo_clP2N_tx.text = this.dead_cat.toString();
        }
        add_super_shot(param1: any, param2: any): any {
            this.sprite_var = this._sp(super_shot_ani_mc, this.zone_up_all, param2.x, param2.y);
            if (param1 == 1) {
                this.sprite_var.scaleX = -Math.abs(this.sprite_var.scaleX);
                this.sprite_var.$setX(this.sprite_var.x + 50);
            }
            else {
                this.sprite_var.$setX(this.sprite_var.x - 40);
            }
            this.sprite_var.$setY(this.sprite_var.y - 10);
            this._to_last(this.sprite_var, this.zone_up_all);
        }
        public add_damage_text(param1: any, param2: any, param3: any): any {
            this.sprite_var = this._sp(damage_mc, this.zone_up_all, param2.x, param2.y);
            let sprite_var: damage_mc = <damage_mc>this.sprite_var;
            sprite_var.d2.gotoAndStop(param1);
            sprite_var.d2D_tx.text = param3.toString();
            if (param1 == 1) {
                this.sprite_var.$setX(this.sprite_var.x - 30);
            }
            else {
                this.sprite_var.$setX(this.sprite_var.x + 30);
            }
            this._to_last(this.sprite_var, this.zone_up_all);
        }
        click_got_cup_f(param1: egret.TouchEvent): any {
            if (this._mo(this.got_cup_cl.play_cl)) {
                this._app.open_new_screen("playoff");
            }
        }
        click_refresh_traning_f(param1: egret.TouchEvent): any {
            this.i2 = 0;
            while (this.i2 < this.arr_aby.length) {
                if (this.arr_aby[this.i2].ex_aby == false) {
                    this.arr_aby[this.i2].reload_time = this.arr_aby[this.i2].reload_time2;
                }
                this.i2++;
            }
        }
        public click_exit_traning_f(param1: egret.TouchEvent): any {
            this.down_panel_cl.train_bt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_exit_traning_f, this);
            this.down_panel_cl.refresh_bt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_refresh_traning_f, this);
            this._app.open_new_screen("dress");
        }
        public click_pause_f(param1: egret.TouchEvent): any {
            if (this._mo(this.pause_cl.resume_bt)) {
                this.to_play_resume();
            }
            if (this._mo(this.pause_cl.home_bt)) {
                if (this.tuto_battle) {
                    this._app.open_new_screen("menu");
                }
                else if (this._app.train_mode == false) {
                    if (this.pre_battle_ex == false) {
                        this.pre_battle_cl = this._sp(surrender_battle_mc, this.zone_tuto, 320, 280);
                        this.pre_battle_ex = true;
                    }
                }
                else {
                    this.down_panel_cl.train_bt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_exit_traning_f, this);
                    this.down_panel_cl.refresh_bt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_refresh_traning_f, this);
                    this._app.open_new_screen("dress");
                }
            }
            if (this.pre_battle_ex) {
                if (this._mo(this.pre_battle_cl.no)) {
                    this.zone_tuto.removeChild(this.pre_battle_cl);
                    this.pre_battle_ex = false;
                }
                else if (this._mo(this.pre_battle_cl.yes)) {
                    this.zone_tuto.removeChild(this.pre_battle_cl);
                    this.pre_battle_ex = false;
                    this.i = 0;
                    while (this.i < this.arr_cat.length) {
                        this.arr_cat[this.i].skin.$setX(this.arr_cat[this.i].skin.x - 9999);
                        this.arr_cat[this.i].remove_hp(10000);
                        this.arr_cat[this.i].skin.$setVisible(false);
                        this.i++;
                    }
                    this.dead_fox = 0;
                    this.dead_cat = 4;
                    this.set_tablo();
                    this.to_play_resume();
                }
            }
        }
        public to_play_resume(): any {
            this.pause_cl.$setVisible(false);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_pause_f, this);
            this.add_function();
            if (this.pre_battle_ex) {
                this.zone_tuto.removeChild(this.pre_battle_cl);
                this.pre_battle_ex = false;
            }
            this.i5 = 0;
            while (this.i5 < this.arr_cat.length) {
                if (this.arr_cat[this.i5].skin.cat1.currentFrame != 3) {
                    this.arr_cat[this.i5].skin.cat1Cat2.play();
                }
                this.i5++;
            }
            this.i5 = 0;
            while (this.i5 < this.arr_fox.length) {
                if (this.arr_fox[this.i5].skin.cat1.currentFrame != 3) {
                    this.arr_fox[this.i5].skin.cat1Cat2.play();
                }
                this.i5++;
            }
        }
        public load_info_to_card(param1: any, param2: any): any {
            param1.gotoAndStop(1);
            param1.cat_cl.$setVisible(true);
            param1.wear_cl.$setVisible(false);
            this.dress_up(param1.cat_cl, 19, this._info.got_skin(param2));
            param1.n_tx.text = "";
            param1.bg_cl.gotoAndStop(this._info.got_level(param2));
            param1.icon_cl.gotoAndStop(this._info.got_type(param2));
            param1.wear_cl.$setVisible(false);
        }
        public dress_up(param1: any, param2: any, param3: any): any {
            param1.head_clWool_cl.gotoAndStop(param2);
            param1.hand_l_clWool_cl.gotoAndStop(param2);
            param1.hand_r_clWool_cl.gotoAndStop(param2);
            param1.body_clWool_cl.gotoAndStop(param2);
            param1.foot1_clWool_cl.gotoAndStop(param2);
            param1.foot2_clWool_cl.gotoAndStop(param2);
            param1.tail_cl.gotoAndStop(param2);
            param3++;
            param1.head_clH2.gotoAndStop(param3);
            param1.hand_l_clSleeve_cl.gotoAndStop(param3);
            param1.hand_l_clW2.gotoAndStop(param3);
            param1.hand_r_clSleeve_cl.gotoAndStop(param3);
            param1.hand_r_clS2.gotoAndStop(param3);
            param1.body_clB2.gotoAndStop(param3);
            param1.foot1_clP2.gotoAndStop(param3);
            param1.foot2_clP2.gotoAndStop(param3);
            param1.skirt_cl.gotoAndStop(param3);
            param1.cloak_cl.gotoAndStop(param3);
            param3--;
        }
        public got_des_skill(param1: any): any {
            switch (param1) {
                case 1:
                    return "猫咪打出一个冲击波";
                case 2:
                    return "猫咪使出一记上勾拳.升龙拳!";
                case 3:
                    return "猫咪发出一个大火球波动拳!";
                case 4:
                    return "猫咪回复全队生命值";
                case 5:
                    return "猫咪增加全队成员攻击力50%";
                case 6:
                    return "";
                case 7:
                    return "使全队成员立即进行攻击";
                case 8:
                    return "短时间内阻止敌人使用技能";
                case 9:
                    return "降低敌人攻击力50%";
                case 10:
                    return "攻击晕眩一名敌人";
                case 11:
                    return "远距离将一名敌人定住";
                case 12:
                    return "短时间内无敌";
                case 13:
                    return "短时间内全员无敌";
                case 14:
                    return "猫咪对敌方所有成员造成伤害";
                case 15:
                    return "立即回复所有猫咪技能";
                default:
                    return;
            }
        }
        public tuto1_f(param1: egret.Event): any {
            this.rnd_for = 1;
            this.i = 0;
            while (this.i < this.arr_aby.length) {
                if (this.arr_aby[this.i].ex_aby == false) {
                    this.rnd_for = 0;
                    break;
                }
                this.i++;
            }
            if (this.rnd_for == 1) {
                this.stop_game();
                this.i = 0;
                while (this.i < this.arr_cat.length) {
                    if (this.arr_cat[this.i].skin.cat1.currentFrame != 3) {
                        this.arr_cat[this.i].skin.cat1Cat2.stop();
                    }
                    this.i++;
                }
                this.i = 0;
                while (this.i < this.arr_fox.length) {
                    if (this.arr_fox[this.i].skin.cat1.currentFrame != 3) {
                        this.arr_fox[this.i].skin.cat1Cat2.stop();
                    }
                    this.i++;
                }
                this.tuto_cl = this._sp(tuto1_mc, this.zone_tuto, 0, 0);
                this.removeEventListener(egret.Event.ENTER_FRAME, this.tuto1_f, this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto_click_f, this);
            }
        }
        public tuto_click_f(param1: egret.TouchEvent): any {
            this.i = 0;
            while (this.i < this.arr_aby.length) {
                if (this.arr_aby[this.i].ex_aby) {
                    if (this._mo(this.arr_aby[this.i].skin.icon_cl)) {
                        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto_click_f, this);
                        this.zone_tuto.removeChild(this.tuto_cl);
                        this.to_play_resume();
                        this.launch_aby(this.i);
                        break;
                    }
                }
                this.i++;
            }
        }
        public delete_f(): any {
            Main.xray_mode = false;
            this.removeEventListener(egret.Event.ENTER_FRAME, this.tuto1_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto_click_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_got_cup_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_back_to_f, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.end_f, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.other_f, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.grand_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_pause_f, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.began_f, this);
            this._Buttons_sounds.delete_f();
        }
    }
}
