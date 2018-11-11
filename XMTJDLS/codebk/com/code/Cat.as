package com.code
{
    import flash.display.*;

    public class Cat extends DataMovieClip
    {
        var _game:Game;
        var _app:App;
        var skin:MovieClip;
        var scale:MovieClip;
        var hp:int;
        var hp2:int;
        var attack:int;
        var set_id:int;
        var dress_id:int;
        var type:int;
        var side:int;
        var aim:uint;
        var type_attack:uint;
        var frame_attack:uint;
        var name_sounds:Object;
        var back_acp:Number;
        var back_speed:Number;
        var run_speed:Number = 0;
        var speed:Number;
        var speed2:Number;
        var life:Boolean = true;
        var dead:Boolean = false;
        var stay_mode:Boolean = false;
        var run_mode:Boolean = false;
        var back_mode:Boolean = false;
        var reload_mode:Boolean = false;
        var got_damage_mode:Boolean = false;
        var after_attack_mode:Boolean = false;
        var stun_mode:Boolean = false;
        var armor_mode:Boolean = false;
        var bubble_mode:Boolean = false;
        var aby_shot_mode:Boolean = false;
        var stun_time:int = 0;
        var armor_time:int = 0;
        var bubble_time:int = 0;
        var bubble_status:int = 0;
        var aby_mode:Boolean = false;
        var aby_time:int;
        var koff_back:Number;
        var max_speed:Number = 5;
        var scale_cl:MovieClip;

        public function Cat()
        {
            this._game = Game.getInstance();
            this._app = App.getInstance();
            return;
        }// end function

        public function init(param1, param2) : void
        {
            this.side = param1;
            this.skin = new cat_mc();
            if (this.side == 1)
            {
                this.skin.x = 192 - (this._game.arr_cat.length - 1) * 50 - 350 - _rnd(40);
                this.skin.y = 310;
            }
            else
            {
                this.skin.x = 610 - (this._game.arr_fox.length - 1) * 50 + 250 + _rnd(40);
                this.skin.y = 310;
            }
            addChild(this.skin);
            if (this.side == 1)
            {
                this.type = this._game.arr_cat.length;
            }
            else if (this._app.team_enemy == 1)
            {
                this.type = this._game.arr_fox.length + 4;
            }
            else
            {
                this.type = this._game.arr_fox.length + 8;
            }
            this.skin.gotoAndStop(this.side);
            if (this.side == 1)
            {
                this.skin.cat1.cat2.gotoAndPlay(_rnd(20) + 2);
            }
            else
            {
                this.skin.cat1.cat2.gotoAndPlay(_rnd(20) + 2);
            }
            this.stay_mode = true;
            this.skin.armor_cl.visible = false;
            if (this.side == 1)
            {
                this.hp2 = Main.sav.data["cat_hp_" + this.type];
                this.hp = this.hp2;
                this.attack = Main.sav.data["cat_attack_" + this.type];
                this.speed2 = Main.sav.data["cat_speed_" + this.type];
                this.speed = this.speed2 * 0.7;
                this.set_id = Main.sav.data["cat_dress_" + this.type];
            }
            else
            {
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
                addChild(this.scale_cl);
                this.scale_cl.skala_cl.gotoAndStop(100);
                this.scale_cl.icon_cl.x = -27;
                this.scale_cl.icon_cl.icon2.gotoAndStop(2);
                this.scale_cl.defeat_card.visible = false;
                if (param2 == 2)
                {
                    this.set_id = 0;
                }
                else
                {
                    this.set_id = this._game._info.got_skin(this._app.team_enemy_id * 4 - 8 + this._game.arr_fox.length);
                }
                this.dress_up(this.scale_cl.cat2);
            }
            this.max_speed = 6.5 - this.speed2 * 0.015;
            this.back_acp = 0.25;
            this.frame_attack = 6;
            if (param2 == 2)
            {
                if (this.side == 2)
                {
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

        function dress_up(param1)
        {
            param1.head_cl.wool_cl.gotoAndStop(this.type);
            param1.hand_l_cl.wool_cl.gotoAndStop(this.type);
            param1.hand_r_cl.wool_cl.gotoAndStop(this.type);
            param1.body_cl.wool_cl.gotoAndStop(this.type);
            param1.foot1_cl.wool_cl.gotoAndStop(this.type);
            param1.foot2_cl.wool_cl.gotoAndStop(this.type);
            param1.tail_cl.gotoAndStop(this.type);
            var _loc_2:* = this;
            var _loc_3:* = this.set_id + 1;
            _loc_2.set_id = _loc_3;
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
            var _loc_2:* = this;
            var _loc_3:* = this.set_id - 1;
            _loc_2.set_id = _loc_3;
            return;
        }// end function

        function remove_hp(param1)
        {
            if (!this.armor_mode)
            {
                if (this.side == 2)
                {
                    param1 = param1 * this._game.aura_fox_weak_koff;
                    param1 = param1 * this._game.aura_cat_attack_koff;
                }
                else
                {
                    param1 = param1 * this._game.aura_cat_weak_koff;
                    param1 = param1 * this._game.aura_fox_attack_koff;
                }
                param1 = int(param1);
                this.hp = this.hp - param1;
                this._game.add_damage_text(this.side, this.skin, param1);
                if (this.side == 2)
                {
                    this.scale_cl.skala_cl.gotoAndStop(int(this.hp / this.hp2 * 100));
                }
                else
                {
                    this._game.arr_aby[(this.type - 1)].set_scale(this.hp);
                }
                if (this.hp <= 0)
                {
                    if (this._app.train_mode == false)
                    {
                        if (this.side == 1)
                        {
                            this.go_frame(3);
                            this.skin.cat1.cat2.head_cl.wool_cl.face_cl.gotoAndStop(3);
                            this._game.arr_aby[(this.type - 1)].skin.cat2.visible = false;
                            this._game.arr_aby[(this.type - 1)].skin.icon_cl.visible = false;
                            this._game.arr_aby[(this.type - 1)].ex_aby = false;
                            this._game.arr_aby[(this.type - 1)].skin.defeat_card.visible = true;
                            this._game.arr_aby[(this.type - 1)].skin.bt_telo.visible = false;
                            if (param1 < 8000)
                            {
                                this._app._so.load_by_name(cat_dead_so);
                            }
                            var _loc_2:* = this._game;
                            var _loc_3:* = _loc_2.dead_cat + 1;
                            _loc_2.dead_cat = _loc_3;
                        }
                        else
                        {
                            this.go_frame(3);
                            this.skin.cat1.cat2.head_cl.wool_cl.face_cl.gotoAndStop(3);
                            this.scale_cl.cat2.visible = false;
                            this.scale_cl.icon_cl.visible = false;
                            this.scale_cl.defeat_card.visible = true;
                            var _loc_2:* = this._game;
                            var _loc_3:* = _loc_2.dead_fox + 1;
                            _loc_2.dead_fox = _loc_3;
                            this.scale_cl.gotoAndStop(2);
                            this._app._so.load_by_name(enemy_dead_so);
                        }
                        _loc_2.set_tablo();
                        this.dead = true;
                        this.life = false;
                        _loc_2.check_end();
                    }
                }
                else if ((this.aby_mode || this.reload_mode) && this.after_attack_mode == false && this.stun_mode == false)
                {
                    this.got_damage_mode = true;
                    this.go_frame(5);
                }
            }
            return;
        }// end function

        function go_frame(param1)
        {
            if (this.life)
            {
                this.skin.cat1.gotoAndStop(param1);
                this.dress_up(this.skin.cat1.cat2);
            }
            return;
        }// end function

        function attack_sounds()
        {
            this._app._so.load_by_name(this.name_sounds);
            return;
        }// end function

        function to_stun(param1)
        {
            if (this.armor_mode)
            {
                this.armor_mode = false;
                this.skin.armor_cl.visible = false;
            }
            if (this.aby_mode)
            {
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

        function to_bubble(param1)
        {
            if (this.armor_mode)
            {
                this.armor_mode = false;
                this.skin.armor_cl.visible = false;
            }
            if (this.aby_mode)
            {
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

        function to_attack()
        {
            this.go_frame(this.frame_attack);
            this.after_attack_mode = true;
            this.run_mode = false;
            this.back_mode = true;
            this.reload_mode = true;
            this.got_koff_back();
            this.back_speed = _rnd(3) + this._game.back_power * this.koff_back;
            this.speed = _rnd(20);
            return;
        }// end function

        function to_back()
        {
            this.got_koff_back();
            this.back_mode = true;
            this.back_speed = _rnd(3) + this._game.back_power * this.koff_back;
            return;
        }// end function

        function got_koff_back()
        {
            if (this.side == 1)
            {
                this.koff_back = this.skin.x / 350;
                if (this.koff_back < 0.1)
                {
                    this.koff_back = 0.1;
                }
            }
            else
            {
                this.koff_back = 350 / this.skin.x;
                if (this.koff_back > 1.6)
                {
                    this.koff_back = 1.6;
                }
            }
            return;
        }// end function

        function to_back2()
        {
            this.back_mode = true;
            this.back_speed = this._game.back_power * 1.2;
            return;
        }// end function

        function set_mode(param1)
        {
            this.stay_mode = false;
            this.run_mode = false;
            this.back_mode = false;
            this.reload_mode = false;
            this.got_damage_mode = false;
            switch(param1)
            {
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
