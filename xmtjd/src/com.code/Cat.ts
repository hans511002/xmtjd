module com.code {
    export class Cat extends DataMovieClip {
        _game: Game = null;
        _app: App = null;
        skin: cat_mc = null;
        scale: std.MovieClip = null;
        hp: number = 0;
        hp2: number = 0;
        attack: number = 0;
        set_id: number = 0;
        dress_id: number = 0;
        type: number = 0;
        side: number = 0;
        aim: number = 0;
        type_attack: number = 0;
        frame_attack: number = 0;
        name_sounds: any = null;
        back_acp: number = 0;
        back_speed: number = 0;
        run_speed: number = 0;
        speed: number = 0;
        speed2: number = 0;
        life: boolean = true;
        dead: boolean = false;
        stay_mode: boolean = false;
        run_mode: boolean = false;
        back_mode: boolean = false;
        reload_mode: boolean = false;
        got_damage_mode: boolean = false;
        after_attack_mode: boolean = false;
        stun_mode: boolean = false;
        armor_mode: boolean = false;
        bubble_mode: boolean = false;
        aby_shot_mode: boolean = false;
        stun_time: number = 0;
        armor_time: number = 0;
        bubble_time: number = 0;
        bubble_status: number = 0;
        aby_mode: boolean = false;
        aby_time: number = 0;
        koff_back: number = 0;
        max_speed: number = 5;
        scale_cl: aby_mc = null;
        public constructor() {
            super();
            this._game = Game.getInstance();
            this._app = App.getInstance();
        }
        public init(param1: any, param2: any): void {
            this.side = param1;
            this.skin = new cat_mc();
            if (this.side == 1) {
                this.skin.$setX(192 - (this._game.arr_cat.length - 1) * 50 - 350 - std._rnd(40));
                this.skin.$setY(310);
            }
            else {
                this.skin.$setX(610 - (this._game.arr_fox.length - 1) * 50 + 250 + std._rnd(40));
                this.skin.$setY(310);
            }
            this.addChild(this.skin);
            if (this.side == 1) {
                this.type = this._game.arr_cat.length;
            }
            else if (this._app.team_enemy == 1) {
                this.type = this._game.arr_fox.length + 4;
            }
            else {
                this.type = this._game.arr_fox.length + 8;
            }
            this.skin.gotoAndStop(this.side);
            if (this.side == 1) {
                this.skin.cat1Cat2.gotoAndPlay(std._rnd(20) + 2);
            }
            else {
                this.skin.cat1Cat2.gotoAndPlay(std._rnd(20) + 2);
            }
            this.stay_mode = true;
            this.skin.armor_cl.$setVisible(false);
            if (this.side == 1) {
                this.hp2 = Main.sav.data["cat_hp_" + this.type];
                this.hp = this.hp2;
                this.attack = Main.sav.data["cat_attack_" + this.type];
                this.speed2 = Main.sav.data["cat_speed_" + this.type];
                this.speed = this.speed2 * 0.7;
                this.set_id = Main.sav.data["cat_dress_" + this.type];
            }
            else {
                this.hp2 = 50 + this._app.team_enemy_level * 5 - 5;
                this.hp = this.hp2;
                this.attack = 10 + this._app.team_enemy_level - 1;
                this.speed2 = 160 - this._app.team_enemy_level * 2 + 2;
                this.speed = this.speed2 * 0.7;
                this.scale_cl = new aby_mc();
                this.scale_cl.cat2.gotoAndStop(2);
                this.scale_cl.bt_telo.$setVisible(false);
                this.scale_cl.icon_clLock_cl.$setVisible(false);
                this.scale_cl.$setX(402 + (this._game.arr_fox.length - 1) * 78);
                this.scale_cl.$setY(387);
                this.addChild(this.scale_cl);
                this.scale_cl.skala_cl.gotoAndStop(100);
                this.scale_cl.icon_cl.$setX(-27);
                this.scale_cl.icon_clIcon2.gotoAndStop(2);
                this.scale_cl.defeat_card.$setVisible(false);
                if (param2 == 2) {
                    this.set_id = 0;
                }
                else {
                    this.set_id = this._game._info.got_skin(this._app.team_enemy_id * 4 - 8 + this._game.arr_fox.length);
                }
                this.dress_up(this.scale_cl.cat2);
            }
            this.max_speed = 6.5 - this.speed2 * 0.015;
            this.back_acp = 0.25;
            this.frame_attack = 6;
            if (param2 == 2) {
                if (this.side == 2) {
                    this.speed2 = 100;
                    this.max_speed = 3;
                    this.type = 20;
                    this.scale_cl.$setVisible(false);
                    this.set_id = 0;
                    this.attack = 0;
                }
            }
            this.go_frame(2);
        }
        public dress_up(param1: any): any {
            param1.head_clWool_cl.gotoAndStop(this.type);
            param1.hand_l_clWool_cl.gotoAndStop(this.type);
            param1.hand_r_clWool_cl.gotoAndStop(this.type);
            param1.body_clWool_cl.gotoAndStop(this.type);
            param1.foot1_clWool_cl.gotoAndStop(this.type);
            param1.foot2_clWool_cl.gotoAndStop(this.type);
            param1.tail_cl.gotoAndStop(this.type);
            this.set_id++;
            param1.head_clH2.gotoAndStop(this.set_id);
            param1.hand_l_clSleeve_cl.gotoAndStop(this.set_id);
            param1.hand_l_clW2.gotoAndStop(this.set_id);
            param1.hand_r_clSleeve_cl.gotoAndStop(this.set_id);
            param1.hand_r_clS2.gotoAndStop(this.set_id);
            param1.body_clB2.gotoAndStop(this.set_id);
            param1.foot1_clP2.gotoAndStop(this.set_id);
            param1.foot2_clP2.gotoAndStop(this.set_id);
            param1.skirt_cl.gotoAndStop(this.set_id);
            param1.cloak_cl.gotoAndStop(this.set_id);
            this.set_id--;
        }
        public remove_hp(param1: any): any {
            if (!this.armor_mode) {
                if (this.side == 2) {
                    param1 = param1 * this._game.aura_fox_weak_koff;
                    param1 = param1 * this._game.aura_cat_attack_koff;
                }
                else {
                    param1 = param1 * this._game.aura_cat_weak_koff;
                    param1 = param1 * this._game.aura_fox_attack_koff;
                }
                param1 = Math.floor(param1);
                this.hp = this.hp - param1;
                this._game.add_damage_text(this.side, this.skin, param1);
                if (this.side == 2) {
                    this.scale_cl.skala_cl.gotoAndStop(Math.floor(this.hp / this.hp2 * 100));
                }
                else {
                    this._game.arr_aby[this.type - 1].set_scale(this.hp);
                }
                if (this.hp <= 0) {
                    if (this._app.train_mode == false) {
                        if (this.side == 1) {
                            this.go_frame(3);
                            this.skin.cat1Cat2Head_clWool_clFace_cl.gotoAndStop(3);
                            this._game.arr_aby[this.type - 1].skin.cat2.$setVisible(false);
                            this._game.arr_aby[this.type - 1].skin.icon_cl.$setVisible(false);
                            this._game.arr_aby[this.type - 1].ex_aby = false;
                            this._game.arr_aby[this.type - 1].skin.defeat_card.$setVisible(true);
                            this._game.arr_aby[this.type - 1].skin.bt_telo.$setVisible(false);
                            if (param1 < 8000) {
                                this._app._so.load_by_name(cat_dead_so);
                            }
                            this._game.dead_cat++;
                        }
                        else {
                            this.go_frame(3);
                            this.skin.cat1Cat2Head_clWool_clFace_cl.gotoAndStop(3);
                            this.scale_cl.cat2.$setVisible(false);
                            this.scale_cl.icon_cl.$setVisible(false);
                            this.scale_cl.defeat_card.$setVisible(true);
                            this._game.dead_fox++;
                            this.scale_cl.gotoAndStop(2);
                            this._app._so.load_by_name(enemy_dead_so);
                        }
                        this._game.set_tablo();
                        this.dead = true;
                        this.life = false;
                        this._game.check_end();
                    }
                }
                else if ((this.aby_mode || this.reload_mode) && this.after_attack_mode == false && this.stun_mode == false) {
                    this.got_damage_mode = true;
                    this.go_frame(5);
                }
            }
        }
        public go_frame(param1: any): any {
            if (this.life) {
                this.skin.cat1.gotoAndStop(param1);
                this.dress_up(this.skin.cat1Cat2);
            }
        }
        public attack_sounds(): any {
            this._app._so.load_by_name(this.name_sounds);
        }
        public to_stun(param1: any): any {
            if (this.armor_mode) {
                this.armor_mode = false;
                this.skin.armor_cl.$setVisible(false);
            }
            if (this.aby_mode) {
                this.aby_mode = false;
            }
            this.to_back2();
            this.run_mode = false;
            this.reload_mode = true;
            this.speed = 0;
            this.stun_mode = true;
            this.got_damage_mode = false;
            this.after_attack_mode = false;
            this.stun_time = param1;
            this.go_frame(7);
        }
        public to_bubble(param1: any): any {
            if (this.armor_mode) {
                this.armor_mode = false;
                this.skin.armor_cl.$setVisible(false);
            }
            if (this.aby_mode) {
                this.aby_mode = false;
            }
            this.back_mode = false;
            this.run_mode = false;
            this.got_damage_mode = false;
            this.stun_mode = false;
            this.after_attack_mode = false;
            this.reload_mode = true;
            this.bubble_mode = true;
            this.bubble_status = 1;
            this.bubble_time = param1;
            this.go_frame(27);
        }
        public to_attack(): any {
            this.go_frame(this.frame_attack);
            this.after_attack_mode = true;
            this.run_mode = false;
            this.back_mode = true;
            this.reload_mode = true;
            this.got_koff_back();
            this.back_speed = std._rnd(3) + this._game.back_power * this.koff_back;
            this.speed = std._rnd(20);
        }
        public to_back(): any {
            this.got_koff_back();
            this.back_mode = true;
            this.back_speed = std._rnd(3) + this._game.back_power * this.koff_back;
        }
        public got_koff_back(): any {
            if (this.side == 1) {
                this.koff_back = this.skin.x / 350;
                if (this.koff_back < 0.1) {
                    this.koff_back = 0.1;
                }
            }
            else {
                this.koff_back = 350 / this.skin.x;
                if (this.koff_back > 1.6) {
                    this.koff_back = 1.6;
                }
            }
        }
        public to_back2(): any {
            this.back_mode = true;
            this.back_speed = this._game.back_power * 1.2;
        }
        public set_mode(param1: any): any {
            this.stay_mode = false;
            this.run_mode = false;
            this.back_mode = false;
            this.reload_mode = false;
            this.got_damage_mode = false;
            switch (param1) {
                case 1:
                    this.stay_mode = true;
                    break;
                case 2:
                    this.run_mode = true;
                    break;
                case 3:
                    this.back_mode = true;
                    break;
                case 4:
                    this.reload_mode = true;
            }
        }
    }
}
