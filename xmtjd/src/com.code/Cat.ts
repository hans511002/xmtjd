
module com.code {
    class Cat extends DataMovieClip {
        _game: Game;
        _app: App;
        skin: cat_mc;
        scale: std.MovieClip;
        hp: number;
        hp2: number;
        attack: number;
        set_id: number;
        dress_id: number;
        type: number;
        side: number;
        aim: number;
        type_attack: number;
        frame_attack: number;
        name_sounds: Object;
        back_acp: number;
        back_speed: number;
        run_speed: number = 0;
        speed: number;
        speed2: number;
        life: Boolean = true;
        dead: Boolean = false;
        stay_mode: Boolean = false;
        run_mode: Boolean = false;
        back_mode: Boolean = false;
        reload_mode: Boolean = false;
        got_damage_mode: Boolean = false;
        after_attack_mode: Boolean = false;
        stun_mode: Boolean = false;
        armor_mode: Boolean = false;
        bubble_mode: Boolean = false;
        aby_shot_mode: Boolean = false;
        stun_time: number = 0;
        armor_time: number = 0;
        bubble_time: number = 0;
        bubble_status: number = 0;
        aby_mode: Boolean = false;
        aby_time: number;
        koff_back: number;
        max_speed: number = 5;
        scale_cl: aby_mc;

        public constructor() {
            super();
            this._game = Game.getInstance();
            this._app = App.getInstance();
            return;
        }// end function

        public init(param1, param2): void {
            this.side = param1;
            this.skin = new cat_mc();
            if (this.side == 1) {
                this.skin.x = 192 - (this._game.arr_cat.length - 1) * 50 - 350 - std._rnd(40);
                this.skin.y = 310;
            }
            else {
                this.skin.x = 610 - (this._game.arr_fox.length - 1) * 50 + 250 + std._rnd(40);
                this.skin.y = 310;
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
                this.skin.cat1.cat2.gotoAndPlay(std._rnd(20) + 2);
            }
            else {
                this.skin.cat1.cat2.gotoAndPlay(std._rnd(20) + 2);
            }
            this.stay_mode = true;
            this.skin.armor_cl.visible = false;
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
                this.scale_cl.bt_telo.visible = false;
                this.scale_cl.icon_cl.lock_cl.visible = false;
                this.scale_cl.x = 402 + (this._game.arr_fox.length - 1) * 78;
                this.scale_cl.y = 387;
                this.addChild(this.scale_cl);
                this.scale_cl.skala_cl.gotoAndStop(100);
                this.scale_cl.icon_cl.x = -27;
                this.scale_cl.icon_cl.icon2.gotoAndStop(2);
                this.scale_cl.defeat_card.visible = false;
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
                    this.scale_cl.visible = false;
                    this.set_id = 0;
                    this.attack = 0;
                }
            }
            this.go_frame(2);
            return;
        }// end function

        public dress_up(param1) {
            param1.head_cl.wool_cl.gotoAndStop(this.type);
            param1.hand_l_cl.wool_cl.gotoAndStop(this.type);
            param1.hand_r_cl.wool_cl.gotoAndStop(this.type);
            param1.body_cl.wool_cl.gotoAndStop(this.type);
            param1.foot1_cl.wool_cl.gotoAndStop(this.type);
            param1.foot2_cl.wool_cl.gotoAndStop(this.type);
            param1.tail_cl.gotoAndStop(this.type);
            this.set_id = this.set_id + 1;
            param1.head_cl.h2.gotoAndStop(this.set_id);
            param1.hand_l_cl.sleeve_cl.gotoAndStop(this.set_id);
            param1.hand_l_cl.w2.gotoAndStop(this.set_id);
            param1.hand_r_cl.sleeve_cl.gotoAndStop(this.set_id);
            param1.hand_r_cl.s2.gotoAndStop(this.set_id);
            param1.body_cl.b2.gotoAndStop(this.set_id);
            param1.foot1_cl.p2.gotoAndStop(this.set_id);
            param1.foot2_cl.p2.gotoAndStop(this.set_id);
            param1.skirt_cl.gotoAndStop(this.set_id);
            param1.cloak_cl.gotoAndStop(this.set_id);
            this.set_id = this.set_id - 1;
            return;
        }// end function

        public remove_hp(param1) {
            if (!this.armor_mode) {
                if (this.side == 2) {
                    param1 = param1 * this._game.aura_fox_weak_koff;
                    param1 = param1 * this._game.aura_cat_attack_koff;
                }
                else {
                    param1 = param1 * this._game.aura_cat_weak_koff;
                    param1 = param1 * this._game.aura_fox_attack_koff;
                }
                param1 = (param1);
                this.hp = this.hp - param1;
                this._game.add_damage_text(this.side, this.skin, param1);
                if (this.side == 2) {
                    this.scale_cl.skala_cl.gotoAndStop((this.hp / this.hp2 * 100));
                }
                else {
                    this._game.arr_aby[(this.type - 1)].set_scale(this.hp);
                }
                if (this.hp <= 0) {
                    if (this._app.train_mode == false) {
                        if (this.side == 1) {
                            this.go_frame(3);
                            this.skin.cat1.cat2.head_cl.wool_cl.face_cl.gotoAndStop(3);
                            this._game.arr_aby[(this.type - 1)].skin.cat2.visible = false;
                            this._game.arr_aby[(this.type - 1)].skin.icon_cl.visible = false;
                            this._game.arr_aby[(this.type - 1)].ex_aby = false;
                            this._game.arr_aby[(this.type - 1)].skin.defeat_card.visible = true;
                            this._game.arr_aby[(this.type - 1)].skin.bt_telo.visible = false;
                            if (param1 < 8000) {
                                this._app._so.load_by_name(cat_dead_so);
                            }
                            this._game.dead_cat = this._game.dead_cat + 1;
                        }
                        else {
                            this.go_frame(3);
                            this.skin.cat1.cat2.head_cl.wool_cl.face_cl.gotoAndStop(3);
                            this.scale_cl.cat2.visible = false;
                            this.scale_cl.icon_cl.visible = false;
                            this.scale_cl.defeat_card.visible = true;
                            this._game.dead_fox = this._game.dead_fox + 1;
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
            return;
        }// end function

        public go_frame(param1) {
            if (this.life) {
                this.skin.cat1.gotoAndStop(param1);
                this.dress_up(this.skin.cat1.cat2);
            }
            return;
        }// end function

        public attack_sounds() {
            this._app._so.load_by_name(this.name_sounds);
            return;
        }// end function

        public to_stun(param1) {
            if (this.armor_mode) {
                this.armor_mode = false;
                this.skin.armor_cl.visible = false;
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
            return;
        }// end function

        public to_bubble(param1) {
            if (this.armor_mode) {
                this.armor_mode = false;
                this.skin.armor_cl.visible = false;
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
            return;
        }// end function

        public to_attack() {
            this.go_frame(this.frame_attack);
            this.after_attack_mode = true;
            this.run_mode = false;
            this.back_mode = true;
            this.reload_mode = true;
            this.got_koff_back();
            this.back_speed = std._rnd(3) + this._game.back_power * this.koff_back;
            this.speed = std._rnd(20);
            return;
        }// end function

        public to_back() {
            this.got_koff_back();
            this.back_mode = true;
            this.back_speed = std._rnd(3) + this._game.back_power * this.koff_back;
            return;
        }// end function

        public got_koff_back() {
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
            return;
        }// end function

        public to_back2() {
            this.back_mode = true;
            this.back_speed = this._game.back_power * 1.2;
            return;
        }// end function

        public set_mode(param1) {
            this.stay_mode = false;
            this.run_mode = false;
            this.back_mode = false;
            this.reload_mode = false;
            this.got_damage_mode = false;
            switch (param1) {
                case 1:
                    {
                        this.stay_mode = true;
                        break;
                    }
                case 2:
                    {
                        this.run_mode = true;
                        break;
                    }
                case 3:
                    {
                        this.back_mode = true;
                        break;
                    }
                case 4:
                    {
                        this.reload_mode = true;
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
            return;
        }// end function

    }
}
