﻿package com.code
{
    import flash.display.*;
    import flash.events.*;

    dynamic public class Game extends DataGame
    {
        var _app:App;
        private static var _instance:Game;

        public function Game()
        {
            this._app = App.getInstance();
            _instance = this;
            return;
        }// end function

        public function init() : void
        {
            this._app._music.delete_music("all");
            _info_enemy = new Enemy();
            _info = new Aby_info();
            this.init_layers();
            pause_cl = _sp(pause_mc, zone_tuto, 0, 0);
            _Buttons_sounds = new Buttons_sounds();
            _Buttons_sounds.x = 294;
            _Buttons_sounds.y = 182;
            pause_cl.addChild(_Buttons_sounds);
            pause_cl.visible = false;
            menu_bt_cl = _sp(menu_bt_mc, zone_panel, 325, 10);
            down_panel_cl = _sp(down_panel_mc, zone_fox, 322, 415);
            location_cl = _sp(location_mc, zone_bg, 0, 0);
            info_aby_cl = _sp(info_aby_mc, zone_panel, 147, 338);
            info_aby_cl.visible = false;
            if (Main.sav.data.tuto1 == 1)
            {
                Main.sav.data.tuto1 = 2;
                tuto_battle = true;
                pause_cl.home_bt.gotoAndStop(2);
                down_panel_cl.hero_tx.text = "小猫突击队";
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
                addEventListener(Event.ENTER_FRAME, this.tuto1_f);
            }
            else
            {
                down_panel_cl.hero_tx.text = Main.sav.data.team_name_1;
            }
            if (this._app.train_mode == false)
            {
                pause_cl.home_bt.gotoAndStop(1);
                status_began = 3;
                status_began = 1;
                time_began = 0;
                down_panel_cl.gotoAndStop(1);
                addEventListener(Event.ENTER_FRAME, this.began_f);
                if (Main.sav.data.playoff == 1)
                {
                    location_cl.gotoAndStop(2);
                    location_cl.kings_cl.cups_cl.gotoAndStop(5);
                    if (Main.sav.data.playoff_round == 1)
                    {
                        this._app.team_enemy_id = Main.sav.data.off_team_2;
                        this._app._so.load_by_name(StartBattle_so);
                    }
                    else if (Main.sav.data.playoff_round == 2)
                    {
                        this._app.team_enemy_id = Main.sav.data.off_team_5;
                        this._app._so.load_by_name(StartBattle_so);
                    }
                    else
                    {
                        this._app.team_enemy_id = 22;
                        this._app._so.load_by_name(grand_so);
                        grand_cl = _sp(grand_mc, zone_tuto, 325, 180);
                        addEventListener(Event.ENTER_FRAME, this.grand_f);
                        status_began = 0;
                        location_cl.referee_cl.gotoAndStop(1);
                    }
                }
                else
                {
                    location_cl.gotoAndStop(1);
                    this._app.team_enemy_id = this._app.arr_enemy_row[Main.sav.data.season_round + Main.sav.data.season_koff];
                    location_cl.kings_cl.cups_cl.gotoAndStop(Main.sav.data.league);
                    this._app._so.load_by_name(StartBattle_so);
                }
                switch(Main.sav.data.season_round)
                {
                    case 0:
                    {
                        break;
                    }
                    case 1:
                    {
                        break;
                    }
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
                    default:
                    {
                        break;
                    }
                }
                if (this._app.team_enemy_id == 22)
                {
                }
                if (this._app.team_enemy_id % 2 == 0)
                {
                    this._app.team_enemy = 1;
                    location_cl.window_down_cl.gotoAndStop(2);
                }
                else
                {
                    this._app.team_enemy = 2;
                    location_cl.window_down_cl.gotoAndStop(1);
                }
                location_cl.enemy_fans_cl.gotoAndStop(this._app.team_enemy);
                location_cl.kings_cl.gotoAndStop(this._app.team_enemy);
                location_cl.flag_cl.gotoAndStop(1);
                location_cl.flag2_cl.gotoAndStop((this._app.team_enemy + 1));
                down_panel_cl.enemy_tx.text = _info_enemy.got_title(this._app.team_enemy_id);
            }
            else
            {
                pause_cl.home_bt.gotoAndStop(2);
                location_cl.gotoAndStop(1);
                location_cl.kings_cl.cups_cl.visible = false;
                down_panel_cl.gotoAndStop(2);
                status_began = 3;
                time_began = 0;
                location_cl.kings_cl.gotoAndStop(3);
                location_cl.enemy_fans_cl.gotoAndStop(4);
                location_cl.kitty_fans_cl.gotoAndStop(4);
                location_cl.flag_cl.gotoAndStop(1);
                location_cl.flag2_cl.gotoAndStop(1);
                location_cl.referee_cl.visible = false;
                addEventListener(Event.ENTER_FRAME, this.began_f);
                down_panel_cl.train_bt.addEventListener(MouseEvent.CLICK, this.click_exit_traning_f);
                down_panel_cl.refresh_bt.addEventListener(MouseEvent.CLICK, this.click_refresh_traning_f);
            }
            if (this._app.train_mode == false)
            {
                i = 1;
                while (i <= 4)
                {
                    
                    _cat = new Cat();
                    arr_cat.push(_cat);
                    zone_cat.addChild(_cat);
                    _cat.init(1, 1);
                    _aby = new Aby();
                    zone_panel.addChild(_aby);
                    arr_aby.push(_aby);
                    _aby.init();
                    _aby.dress_up(_aby.skin.cat2, Main.sav.data["cat_dress_" + i]);
                    var _loc_2:* = i + 1;
                    i = _loc_2;
                }
                i = 1;
                while (i <= 4)
                {
                    
                    _cat = new Cat();
                    arr_fox.push(_cat);
                    zone_fox.addChild(_cat);
                    _cat.init(2, 1);
                    _aby_enemy = new Aby_enemy();
                    arr_aby_enemy.push(_aby_enemy);
                    _aby_enemy.init();
                    var _loc_2:* = i + 1;
                    i = _loc_2;
                }
            }
            else
            {
                i = 1;
                while (i <= 4)
                {
                    
                    _cat = new Cat();
                    arr_cat.push(_cat);
                    zone_cat.addChild(_cat);
                    _cat.init(1, 2);
                    _aby = new Aby();
                    zone_panel.addChild(_aby);
                    arr_aby.push(_aby);
                    _aby.init();
                    _aby.dress_up(_aby.skin.cat2, Main.sav.data["cat_dress_" + i]);
                    var _loc_2:* = i + 1;
                    i = _loc_2;
                }
                i = 1;
                while (i <= 4)
                {
                    
                    _cat = new Cat();
                    arr_fox.push(_cat);
                    zone_fox.addChild(_cat);
                    _cat.init(2, 2);
                    var _loc_2:* = i + 1;
                    i = _loc_2;
                }
            }
            if (Main.sav.data.tuto1 != 3)
            {
                i = 0;
                while (i < arr_fox.length)
                {
                    
                    arr_fox[i].hp2 = arr_fox[i].hp2 + 200;
                    arr_fox[i].hp = arr_fox[i].hp2;
                    var _loc_2:* = i + 1;
                    i = _loc_2;
                }
            }
            i = 0;
            while (i < arr_aby_enemy.length)
            {
                
                arr_fox[i].scale_cl.icon_cl.icon2.icon_cl.gotoAndStop(arr_aby_enemy[i].type_aby);
                arr_fox[i].scale_cl.icon_cl.icon2.scale_cl.visible = true;
                arr_fox[i].scale_cl.icon_cl.icon2.scale_cl.gotoAndStop(1);
                arr_fox[i].scale_cl.icon_cl.icon2.bg_cl.gotoAndStop(2);
                arr_fox[i].scale_cl.icon_cl.icon2.scale_cl.gotoAndStop(int(arr_aby_enemy[i].reload_time / arr_aby_enemy[i].reload_time2 * 100));
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            i = 0;
            while (i < arr_aby.length)
            {
                
                if (this._app.train_mode)
                {
                    arr_aby[i].reload_time = arr_aby[i].reload_time2;
                }
                if (Main.sav.data.tuto1 != 3)
                {
                    arr_aby[i].reload_time2 = 800;
                    arr_aby[i].reload_time = 630;
                }
                arr_aby[i].skin.icon_cl.icon2.scale_cl.gotoAndStop(int(arr_aby[i].reload_time / arr_aby[i].reload_time2 * 100));
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            Main.sav.data.tuto1 = 3;
            stage.focus = stage;
            return;
        }// end function

        function init_layers()
        {
            zone_bg = new Sprite();
            zone_fox = new Sprite();
            zone_cat = new Sprite();
            zone_panel = new Sprite();
            zone_tuto = new Sprite();
            zone_up_all = new Sprite();
            addChild(zone_bg);
            addChild(zone_fox);
            addChild(zone_cat);
            addChild(zone_up_all);
            addChild(zone_panel);
            addChild(zone_tuto);
            return;
        }// end function

        function add_function()
        {
            addEventListener(Event.ENTER_FRAME, this.game_f);
            addEventListener(Event.ENTER_FRAME, this.other_f);
            stage.addEventListener(MouseEvent.CLICK, this.click_f);
            return;
        }// end function

        function game_f(event:Event)
        {
            info_aby_cl.visible = false;
            i = 0;
            while (i < arr_aby.length)
            {
                
                if (arr_aby[i].skin.bt_telo.visible == true)
                {
                    if (_mo(arr_aby[i].skin.icon_cl))
                    {
                        if (over_type != i)
                        {
                            over_time = 0;
                            over_type = i;
                        }
                        over_time = (over_time + 1);
                        if (over_time > 12)
                        {
                            info_aby_cl.visible = true;
                            info_aby_cl.des_tx.text = this.got_des_skill(arr_aby[i].type_aby);
                        }
                        break;
                    }
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            i = 0;
            while (i < arr_cat.length)
            {
                
                if (arr_cat[i].life)
                {
                    if (arr_cat[i].aby_mode == false)
                    {
                        if (arr_cat[i].run_mode)
                        {
                            arr_cat[i].skin.x = arr_cat[i].skin.x + arr_cat[i].run_speed;
                            if (arr_cat[i].run_speed < arr_cat[i].max_speed)
                            {
                                arr_cat[i].run_speed = arr_cat[i].run_speed + cat_acp;
                            }
                            i2 = 0;
                            while (i2 < arr_fox.length)
                            {
                                
                                if (arr_fox[i2].life)
                                {
                                    if (arr_cat[i].skin.x + 35 > arr_fox[i2].skin.x && arr_fox[i2].bubble_mode == false)
                                    {
                                        this.check_battle(i, i2);
                                        break;
                                    }
                                }
                                var _loc_3:* = i2 + 1;
                                i2 = _loc_3;
                            }
                            if (arr_cat[i].skin.x > 625)
                            {
                                arr_cat[i].to_back();
                                arr_cat[i].run_mode = false;
                                arr_cat[i].reload_mode = true;
                                arr_cat[i].back_speed = 15;
                            }
                        }
                        if (arr_cat[i].reload_mode && arr_cat[i].stun_mode == false && arr_cat[i].bubble_mode == false)
                        {
                            if (arr_cat[i].speed >= arr_cat[i].speed2)
                            {
                                if (arr_cat[i].back_mode == false)
                                {
                                    arr_cat[i].run_speed = 0;
                                    arr_cat[i].go_frame(2);
                                    arr_cat[i].set_mode(2);
                                }
                            }
                            else
                            {
                                arr_cat[i].speed = arr_cat[i].speed + 1 * aura_fox_slow_koff;
                            }
                        }
                        if (arr_cat[i].back_mode)
                        {
                            arr_cat[i].back_speed = arr_cat[i].back_speed - arr_cat[i].back_acp;
                            arr_cat[i].skin.x = arr_cat[i].skin.x - arr_cat[i].back_speed;
                            if (arr_cat[i].back_speed <= 0 || arr_cat[i].skin.x < 25)
                            {
                                arr_cat[i].back_mode = false;
                            }
                        }
                        if (arr_cat[i].got_damage_mode)
                        {
                            if (_frame(arr_cat[i].skin.cat1.cat2))
                            {
                                arr_cat[i].got_damage_mode = false;
                                if (arr_cat[i].reload_mode)
                                {
                                    arr_cat[i].go_frame(4);
                                }
                            }
                        }
                        if (arr_cat[i].after_attack_mode)
                        {
                            if (_frame(arr_cat[i].skin.cat1.cat2))
                            {
                                arr_cat[i].after_attack_mode = false;
                                if (arr_cat[i].reload_mode)
                                {
                                    arr_cat[i].go_frame(4);
                                }
                            }
                        }
                        if (arr_cat[i].stun_mode)
                        {
                            var _loc_2:* = arr_cat[i];
                            var _loc_3:* = _loc_2.stun_time - 1;
                            _loc_2.stun_time = _loc_3;
                            if (_loc_2.stun_time < 0)
                            {
                                _loc_2.stun_mode = false;
                                if (_loc_2.bubble_mode == false)
                                {
                                    _loc_2.set_mode(4);
                                    _loc_2.go_frame(4);
                                    if (lock_mode == false)
                                    {
                                        arr_aby[i].skin.icon_cl.lock_cl.visible = false;
                                    }
                                }
                            }
                        }
                    }
                    if (_loc_2.aby_mode)
                    {
                        var _loc_2:* = arr_cat[i];
                        var _loc_3:* = _loc_2.aby_time - 1;
                        _loc_2.aby_time = _loc_3;
                        if (_loc_2.aby_time == 0)
                        {
                            if (arr_aby[i].type_aby == 1)
                            {
                                i2 = 0;
                                while (i2 < arr_fox.length)
                                {
                                    
                                    if (arr_fox[i2].life)
                                    {
                                        if (_loc_2.skin.x + 88 > arr_fox[i2].skin.x)
                                        {
                                            this.add_super_shot(1, _loc_2.skin);
                                            if (arr_fox[i2].armor_mode)
                                            {
                                                arr_fox[i2].armor_mode = false;
                                                arr_fox[i2].skin.armor_cl.visible = false;
                                            }
                                            arr_fox[i2].remove_hp(arr_aby[i].power);
                                            arr_fox[i2].to_back2();
                                            if (arr_fox[i2].aby_mode)
                                            {
                                                arr_fox[i2].aby_mode = false;
                                            }
                                            if (arr_fox[i2].life)
                                            {
                                                arr_fox[i2].speed = 0;
                                                arr_fox[i2].run_mode = false;
                                                arr_fox[i2].reload_mode = true;
                                                arr_fox[i2].got_damage_mode = true;
                                                arr_fox[i2].go_frame(24);
                                            }
                                            break;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby[i].type_aby == 2)
                            {
                                i2 = 0;
                                while (i2 < arr_fox.length)
                                {
                                    
                                    if (arr_fox[i2].life)
                                    {
                                        if (arr_cat[i].skin.x + 88 > arr_fox[i2].skin.x)
                                        {
                                            this.add_super_shot(1, arr_cat[i].skin);
                                            if (arr_fox[i2].armor_mode)
                                            {
                                                arr_fox[i2].armor_mode = false;
                                                arr_fox[i2].skin.armor_cl.visible = false;
                                            }
                                            arr_fox[i2].remove_hp(arr_aby[i].power);
                                            arr_fox[i2].to_back2();
                                            if (arr_fox[i2].aby_mode)
                                            {
                                                arr_fox[i2].aby_mode = false;
                                            }
                                            if (arr_fox[i2].life)
                                            {
                                                arr_fox[i2].speed = 0;
                                                arr_fox[i2].run_mode = false;
                                                arr_fox[i2].reload_mode = true;
                                                arr_fox[i2].got_damage_mode = true;
                                                arr_fox[i2].go_frame(24);
                                            }
                                            break;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby[i].type_aby == 3)
                            {
                                this._app._so.load_by_name(fireball_so);
                                sprite_var = _sp(fireball_mc, zone_up_all, arr_cat[i].skin.x + 40, arr_cat[i].skin.y + 10);
                                arr_fireball_skin.push(sprite_var);
                                arr_fireball_side.push(1);
                                arr_fireball_power.push(arr_aby[i].power);
                            }
                            if (arr_aby[i].type_aby == 4)
                            {
                                this._app._so.load_by_name(heal_so);
                                i2 = 0;
                                while (i2 < arr_cat.length)
                                {
                                    
                                    if (arr_cat[i2].life)
                                    {
                                        arr_cat[i2].hp = arr_cat[i2].hp + arr_aby[i].power;
                                        if (arr_cat[i2].hp > arr_cat[i2].hp2)
                                        {
                                            arr_cat[i2].hp = arr_cat[i2].hp2;
                                        }
                                        arr_aby[i2].set_scale(arr_cat[i2].hp);
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby[i].type_aby == 5)
                            {
                                this.add_aura(1, 1, arr_aby[i].power);
                            }
                            if (arr_aby[i].type_aby == 6)
                            {
                                this.add_aura(1, 2, arr_aby[i].power);
                            }
                            if (arr_aby[i].type_aby == 7)
                            {
                                this._app._so.load_by_name(go_so);
                                i2 = 0;
                                while (i2 < arr_cat.length)
                                {
                                    
                                    if (arr_cat[i2].run_mode == false)
                                    {
                                        arr_cat[i2].speed = arr_cat[i2].speed2;
                                        arr_cat[i2].reload_mode = true;
                                        arr_cat[i2].back_mode = false;
                                        if (arr_cat[i2].after_attack_mode)
                                        {
                                            arr_cat[i2].after_attack_mode = false;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby[i].type_aby == 8)
                            {
                                this.add_aura(1, 3, arr_aby[i].power);
                            }
                            if (arr_aby[i].type_aby == 9)
                            {
                                this.add_aura(1, 4, arr_aby[i].power);
                            }
                            if (arr_aby[i].type_aby == 10)
                            {
                                i2 = 0;
                                while (i2 < arr_fox.length)
                                {
                                    
                                    if (arr_fox[i2].life)
                                    {
                                        if (arr_cat[i].skin.x + 88 > arr_fox[i2].skin.x)
                                        {
                                            if (arr_fox[i2].stun_mode == false && arr_fox[i2].bubble_mode == false)
                                            {
                                                arr_fox[i2].to_stun(arr_aby[i].power);
                                                break;
                                            }
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby[i].type_aby == 11)
                            {
                                i2 = 0;
                                while (i2 < arr_fox.length)
                                {
                                    
                                    if (arr_fox[i2].life)
                                    {
                                        if (arr_fox[i2].bubble_mode == false)
                                        {
                                            arr_fox[i2].to_bubble(arr_aby[i].power);
                                            arr_fox[i2].scale_cl.icon_cl.lock_cl.visible = true;
                                            break;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby[i].type_aby == 12)
                            {
                                arr_cat[i].armor_mode = true;
                                arr_cat[i].armor_time = arr_aby[i].power;
                                arr_cat[i].skin.armor_cl.visible = true;
                            }
                            if (arr_aby[i].type_aby == 13)
                            {
                                i2 = 0;
                                while (i2 < arr_cat.length)
                                {
                                    
                                    if (arr_cat[i2].life && arr_cat[i2].bubble_mode == false)
                                    {
                                        arr_cat[i2].armor_mode = true;
                                        arr_cat[i2].armor_time = arr_aby[i].power;
                                        arr_cat[i2].skin.armor_cl.visible = true;
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby[i].type_aby == 14)
                            {
                                this._app._so.load_by_name(light_so);
                                i2 = 0;
                                while (i2 < arr_fox.length)
                                {
                                    
                                    if (arr_fox[i2].life)
                                    {
                                        if (arr_fox[i2].armor_mode)
                                        {
                                            arr_fox[i2].armor_mode = false;
                                            arr_fox[i2].skin.armor_cl.visible = false;
                                        }
                                        arr_fox[i2].remove_hp(arr_aby[i].power);
                                        arr_fox[i2].to_back2();
                                        if (arr_fox[i2].aby_mode)
                                        {
                                            arr_fox[i2].aby_mode = false;
                                        }
                                        if (arr_fox[i2].life)
                                        {
                                            arr_fox[i2].speed = 0;
                                            arr_fox[i2].run_mode = false;
                                            arr_fox[i2].reload_mode = true;
                                            arr_fox[i2].got_damage_mode = true;
                                            arr_fox[i2].go_frame(26);
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby[i].type_aby == 15)
                            {
                                i2 = 0;
                                while (i2 < arr_aby.length)
                                {
                                    
                                    if (arr_aby[i2].ex_aby == false)
                                    {
                                        if (i != i2)
                                        {
                                            arr_aby[i2].reload_time = arr_aby[i2].reload_time2;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                        }
                        if (_frame(arr_cat[i].skin.cat1.cat2))
                        {
                            arr_cat[i].aby_mode = false;
                            arr_cat[i].go_frame(4);
                            arr_cat[i].set_mode(4);
                        }
                    }
                    if (arr_cat[i].armor_mode)
                    {
                        var _loc_2:* = arr_cat[i];
                        var _loc_3:* = _loc_2.armor_time - 1;
                        _loc_2.armor_time = _loc_3;
                        if (_loc_2.armor_time < 0)
                        {
                            _loc_2.armor_mode = false;
                            _loc_2.skin.armor_cl.visible = false;
                        }
                    }
                    if (_loc_2.bubble_mode)
                    {
                        if (_loc_2.bubble_status == 1)
                        {
                            var _loc_2:* = arr_cat[i];
                            var _loc_3:* = _loc_2.bubble_time - 1;
                            _loc_2.bubble_time = _loc_3;
                            if (_loc_2.bubble_time < 0 || dead_cat == 3)
                            {
                                _loc_2.bubble_status = 2;
                                this._app._so.load_by_name(dead_b_so);
                                _loc_2.go_frame(28);
                            }
                        }
                        else if (_frame(_loc_2.skin.cat1.cat2))
                        {
                            _loc_2.bubble_mode = false;
                            if (lock_mode == false)
                            {
                                arr_aby[i].skin.icon_cl.lock_cl.visible = false;
                            }
                            _loc_2.go_frame(4);
                        }
                    }
                }
                else if (_loc_2.dead)
                {
                    if (_frame(_loc_2.skin.cat1.cat2))
                    {
                        _loc_2.dead = false;
                    }
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            i = 0;
            while (i < arr_fox.length)
            {
                
                if (arr_fox[i].life)
                {
                    if (arr_fox[i].aby_mode == false)
                    {
                        if (arr_fox[i].run_mode)
                        {
                            arr_fox[i].skin.x = arr_fox[i].skin.x - arr_fox[i].run_speed;
                            if (arr_fox[i].run_speed < arr_fox[i].max_speed)
                            {
                                arr_fox[i].run_speed = arr_fox[i].run_speed + cat_acp;
                            }
                            i2 = 0;
                            while (i2 < arr_cat.length)
                            {
                                
                                if (arr_cat[i2].life)
                                {
                                    if (arr_fox[i].skin.x < 35 + arr_cat[i2].skin.x && arr_cat[i2].bubble_mode == false)
                                    {
                                        this.check_battle(i2, i);
                                        break;
                                    }
                                }
                                var _loc_3:* = i2 + 1;
                                i2 = _loc_3;
                            }
                            if (arr_fox[i].skin.x < 25)
                            {
                                arr_fox[i].to_back();
                                arr_fox[i].run_mode = false;
                                arr_fox[i].reload_mode = true;
                                arr_fox[i].back_speed = 15;
                            }
                        }
                        if (arr_fox[i].reload_mode && arr_fox[i].stun_mode == false && arr_fox[i].bubble_mode == false)
                        {
                            if (arr_fox[i].speed >= arr_fox[i].speed2)
                            {
                                if (arr_fox[i].back_mode == false)
                                {
                                    arr_fox[i].run_speed = 0;
                                    arr_fox[i].go_frame(2);
                                    arr_fox[i].set_mode(2);
                                }
                            }
                            else
                            {
                                arr_fox[i].speed = arr_fox[i].speed + 1 * aura_cat_slow_koff;
                            }
                        }
                        if (arr_fox[i].back_mode)
                        {
                            arr_fox[i].back_speed = arr_fox[i].back_speed - arr_fox[i].back_acp;
                            arr_fox[i].skin.x = arr_fox[i].skin.x + arr_fox[i].back_speed;
                            if (arr_fox[i].back_speed <= 0 || arr_fox[i].skin.x >= 625)
                            {
                                arr_fox[i].back_mode = false;
                            }
                        }
                        if (arr_fox[i].got_damage_mode)
                        {
                            if (_frame(arr_fox[i].skin.cat1.cat2))
                            {
                                arr_fox[i].got_damage_mode = false;
                                if (arr_fox[i].reload_mode)
                                {
                                    arr_fox[i].go_frame(4);
                                }
                            }
                        }
                        if (arr_fox[i].after_attack_mode)
                        {
                            if (_frame(arr_fox[i].skin.cat1.cat2))
                            {
                                arr_fox[i].after_attack_mode = false;
                                if (arr_fox[i].reload_mode)
                                {
                                    arr_fox[i].go_frame(4);
                                }
                            }
                        }
                        if (arr_fox[i].stun_mode)
                        {
                            var _loc_2:* = arr_fox[i];
                            var _loc_3:* = _loc_2.stun_time - 1;
                            _loc_2.stun_time = _loc_3;
                            if (_loc_2.stun_time < 0)
                            {
                                _loc_2.stun_mode = false;
                                if (_loc_2.bubble_mode == false)
                                {
                                    _loc_2.set_mode(4);
                                    _loc_2.go_frame(4);
                                    if (lock_mode_fox == false)
                                    {
                                        _loc_2.scale_cl.icon_cl.lock_cl.visible = false;
                                    }
                                }
                            }
                        }
                    }
                    if (_loc_2.aby_mode)
                    {
                        var _loc_2:* = arr_fox[i];
                        var _loc_3:* = _loc_2.aby_time - 1;
                        _loc_2.aby_time = _loc_3;
                        if (_loc_2.aby_time == 0)
                        {
                            if (arr_aby_enemy[i].type_aby == 1)
                            {
                                i2 = 0;
                                while (i2 < arr_cat.length)
                                {
                                    
                                    if (arr_cat[i2].life)
                                    {
                                        if (_loc_2.skin.x < 88 + arr_cat[i2].skin.x)
                                        {
                                            this._app._so.load_by_name2(power_kick_so, 70);
                                            this.add_super_shot(2, _loc_2.skin);
                                            if (arr_cat[i2].armor_mode)
                                            {
                                                arr_cat[i2].armor_mode = false;
                                                arr_cat[i2].skin.armor_cl.visible = false;
                                            }
                                            arr_cat[i2].remove_hp(arr_aby_enemy[i].power);
                                            arr_cat[i2].to_back2();
                                            if (arr_cat[i2].aby_mode)
                                            {
                                                arr_cat[i2].aby_mode = false;
                                            }
                                            if (arr_cat[i2].life)
                                            {
                                                arr_cat[i2].speed = 0;
                                                arr_cat[i2].run_mode = false;
                                                arr_cat[i2].reload_mode = true;
                                                arr_cat[i2].got_damage_mode = true;
                                                arr_cat[i2].go_frame(24);
                                            }
                                            this.set_injure(i2, i);
                                            break;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby_enemy[i].type_aby == 2)
                            {
                                i2 = 0;
                                while (i2 < arr_cat.length)
                                {
                                    
                                    if (arr_cat[i2].life)
                                    {
                                        if (arr_fox[i].skin.x < 88 + arr_cat[i2].skin.x)
                                        {
                                            this.add_super_shot(2, arr_fox[i].skin);
                                            if (arr_cat[i2].armor_mode)
                                            {
                                                arr_cat[i2].armor_mode = false;
                                                arr_cat[i2].skin.armor_cl.visible = false;
                                            }
                                            arr_cat[i2].remove_hp(arr_aby_enemy[i].power);
                                            arr_cat[i2].to_back2();
                                            if (arr_cat[i2].aby_mode)
                                            {
                                                arr_cat[i2].aby_mode = false;
                                            }
                                            if (arr_cat[i2].life)
                                            {
                                                arr_cat[i2].speed = 0;
                                                arr_cat[i2].run_mode = false;
                                                arr_cat[i2].reload_mode = true;
                                                arr_cat[i2].got_damage_mode = true;
                                                arr_cat[i2].go_frame(24);
                                            }
                                            this.set_injure(i2, i);
                                            break;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby_enemy[i].type_aby == 3)
                            {
                                this._app._so.load_by_name(fireball_so);
                                sprite_var = _sp(fireball_mc, zone_up_all, arr_fox[i].skin.x - 30, arr_fox[i].skin.y + 10);
                                sprite_var.scaleX = -Math.abs(sprite_var.scaleX);
                                arr_fireball_skin.push(sprite_var);
                                arr_fireball_side.push(2);
                                arr_fireball_power.push(arr_aby_enemy[i].power);
                            }
                            if (arr_aby_enemy[i].type_aby == 4)
                            {
                                this._app._so.load_by_name(heal_so);
                                i2 = 0;
                                while (i2 < arr_fox.length)
                                {
                                    
                                    if (arr_fox[i2].life)
                                    {
                                        arr_fox[i2].hp = arr_fox[i2].hp + arr_aby_enemy[i].power;
                                        if (arr_fox[i2].hp > arr_fox[i2].hp2)
                                        {
                                            arr_fox[i2].hp = arr_fox[i2].hp2;
                                        }
                                        arr_fox[i2].scale_cl.skala_cl.gotoAndStop(int(arr_fox[i2].hp / arr_fox[i2].hp2 * 100));
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby_enemy[i].type_aby == 5)
                            {
                                this.add_aura(2, 1, arr_aby_enemy[i].power);
                            }
                            if (arr_aby_enemy[i].type_aby == 6)
                            {
                                this.add_aura(2, 2, arr_aby_enemy[i].power);
                            }
                            if (arr_aby_enemy[i].type_aby == 7)
                            {
                                this._app._so.load_by_name(go_so);
                                i2 = 0;
                                while (i2 < arr_fox.length)
                                {
                                    
                                    if (arr_fox[i2].run_mode == false)
                                    {
                                        arr_fox[i2].speed = arr_fox[i2].speed2;
                                        arr_fox[i2].reload_mode = true;
                                        arr_fox[i2].back_mode = false;
                                        if (arr_fox[i2].after_attack_mode)
                                        {
                                            arr_fox[i2].after_attack_mode = false;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby_enemy[i].type_aby == 8)
                            {
                                this.add_aura(2, 3, arr_aby_enemy[i].power);
                            }
                            if (arr_aby_enemy[i].type_aby == 9)
                            {
                                this.add_aura(2, 4, arr_aby_enemy[i].power);
                            }
                            if (arr_aby_enemy[i].type_aby == 10)
                            {
                                i2 = 0;
                                while (i2 < arr_cat.length)
                                {
                                    
                                    if (arr_cat[i2].life)
                                    {
                                        if (arr_fox[i].skin.x < 88 + arr_cat[i2].skin.x)
                                        {
                                            if (arr_cat[i2].stun_mode == false && arr_cat[i2].bubble_mode == false)
                                            {
                                                arr_cat[i2].to_stun(arr_aby_enemy[i].power);
                                                this.set_injure(i2, i);
                                                break;
                                            }
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby_enemy[i].type_aby == 11)
                            {
                                i2 = 0;
                                while (i2 < arr_cat.length)
                                {
                                    
                                    if (arr_cat[i2].life)
                                    {
                                        if (arr_cat[i2].bubble_mode == false)
                                        {
                                            arr_cat[i2].to_bubble(arr_aby_enemy[i].power);
                                            arr_aby[i2].skin.icon_cl.lock_cl.visible = true;
                                            break;
                                        }
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby_enemy[i].type_aby == 12)
                            {
                                arr_fox[i].armor_mode = true;
                                arr_fox[i].armor_time = arr_aby_enemy[i].power;
                                arr_fox[i].skin.armor_cl.visible = true;
                            }
                            if (arr_aby_enemy[i].type_aby == 13)
                            {
                                i2 = 0;
                                while (i2 < arr_fox.length)
                                {
                                    
                                    if (arr_fox[i2].life && arr_fox[i2].bubble_mode == false)
                                    {
                                        arr_fox[i2].armor_mode = true;
                                        arr_fox[i2].armor_time = arr_aby_enemy[i].power;
                                        arr_fox[i2].skin.armor_cl.visible = true;
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby_enemy[i].type_aby == 14)
                            {
                                this._app._so.load_by_name(light_so);
                                i2 = 0;
                                while (i2 < arr_cat.length)
                                {
                                    
                                    if (arr_cat[i2].life)
                                    {
                                        if (arr_cat[i2].armor_mode)
                                        {
                                            arr_cat[i2].armor_mode = false;
                                            arr_cat[i2].skin.armor_cl.visible = false;
                                        }
                                        arr_cat[i2].remove_hp(arr_aby_enemy[i].power);
                                        arr_cat[i2].to_back2();
                                        if (arr_cat[i2].aby_mode)
                                        {
                                            arr_cat[i2].aby_mode = false;
                                        }
                                        if (arr_cat[i2].life)
                                        {
                                            arr_cat[i2].speed = 0;
                                            arr_cat[i2].run_mode = false;
                                            arr_cat[i2].reload_mode = true;
                                            arr_cat[i2].got_damage_mode = true;
                                            arr_cat[i2].go_frame(26);
                                        }
                                        this.set_injure(i2, i);
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                            if (arr_aby_enemy[i].type_aby == 15)
                            {
                                i2 = 0;
                                while (i2 < arr_aby_enemy.length)
                                {
                                    
                                    if (i != i2)
                                    {
                                        arr_aby_enemy[i2].reload_time = arr_aby_enemy[i2].reload_time2;
                                    }
                                    var _loc_3:* = i2 + 1;
                                    i2 = _loc_3;
                                }
                            }
                        }
                        if (_frame(arr_fox[i].skin.cat1.cat2))
                        {
                            arr_fox[i].aby_mode = false;
                            arr_fox[i].go_frame(4);
                            arr_fox[i].set_mode(4);
                        }
                    }
                    if (arr_fox[i].armor_mode)
                    {
                        var _loc_2:* = arr_fox[i];
                        var _loc_3:* = _loc_2.armor_time - 1;
                        _loc_2.armor_time = _loc_3;
                        if (_loc_2.armor_time < 0)
                        {
                            _loc_2.armor_mode = false;
                            _loc_2.skin.armor_cl.visible = false;
                        }
                    }
                    if (_loc_2.bubble_mode)
                    {
                        if (_loc_2.bubble_status == 1)
                        {
                            var _loc_2:* = arr_fox[i];
                            var _loc_3:* = _loc_2.bubble_time - 1;
                            _loc_2.bubble_time = _loc_3;
                            if (_loc_2.bubble_time < 0 || dead_fox == 3)
                            {
                                _loc_2.bubble_status = 2;
                                this._app._so.load_by_name(dead_b_so);
                                _loc_2.go_frame(28);
                            }
                        }
                        else if (_frame(_loc_2.skin.cat1.cat2))
                        {
                            _loc_2.bubble_mode = false;
                            if (lock_mode_fox == false)
                            {
                                _loc_2.scale_cl.icon_cl.lock_cl.visible = false;
                            }
                            _loc_2.go_frame(4);
                            _loc_2.go_frame(4);
                        }
                    }
                }
                else if (_loc_2.dead)
                {
                    if (_frame(_loc_2.skin.cat1.cat2))
                    {
                        _loc_2.dead = false;
                    }
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            i = 0;
            while (i < arr_aura_cat.length)
            {
                
                var _loc_2:* = arr_aura_cat[i];
                var _loc_3:* = _loc_2.time + 1;
                _loc_2.time = _loc_3;
                _loc_2.skin.scale_cl.gotoAndStop(int(_loc_2.time / _loc_2.time2 * 100));
                if (_loc_2.time >= _loc_2.time2)
                {
                    if (_loc_2.type == 1)
                    {
                        aura_cat_attack_koff = 1;
                    }
                    else if (_loc_2.type == 2)
                    {
                        aura_cat_speed_koff = 1;
                    }
                    else if (_loc_2.type == 3)
                    {
                        lock_mode_fox = false;
                        i5 = 0;
                        while (i5 < arr_fox.length)
                        {
                            
                            arr_fox[i5].scale_cl.icon_cl.lock_cl.visible = false;
                            var _loc_3:* = i5 + 1;
                            i5 = _loc_3;
                        }
                    }
                    else
                    {
                        aura_cat_weak_koff = 1;
                    }
                    zone_panel.removeChild(arr_aura_cat[i]);
                    arr_aura_cat.splice(i, 1);
                    i2 = 0;
                    while (i2 < arr_aura_cat.length)
                    {
                        
                        arr_aura_cat[i2].skin.x = 25 + 50 * i2;
                        var _loc_3:* = i2 + 1;
                        i2 = _loc_3;
                    }
                    break;
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            i = 0;
            while (i < arr_aura_fox.length)
            {
                
                var _loc_2:* = arr_aura_fox[i];
                var _loc_3:* = _loc_2.time + 1;
                _loc_2.time = _loc_3;
                _loc_2.skin.scale_cl.gotoAndStop(int(_loc_2.time / _loc_2.time2 * 100));
                if (_loc_2.time >= _loc_2.time2)
                {
                    if (_loc_2.type == 1)
                    {
                        aura_fox_attack_koff = 1;
                    }
                    else if (_loc_2.type == 2)
                    {
                        aura_fox_speed_koff = 1;
                    }
                    else if (_loc_2.type == 3)
                    {
                        lock_mode = false;
                        i5 = 0;
                        while (i5 < arr_aby.length)
                        {
                            
                            arr_aby[i5].skin.icon_cl.lock_cl.visible = false;
                            var _loc_3:* = i5 + 1;
                            i5 = _loc_3;
                        }
                    }
                    else
                    {
                        aura_fox_weak_koff = 1;
                    }
                    zone_panel.removeChild(arr_aura_fox[i]);
                    arr_aura_fox.splice(i, 1);
                    i2 = 0;
                    while (i2 < arr_aura_fox.length)
                    {
                        
                        arr_aura_fox[i2].skin.x = 625 - 50 * i2;
                        var _loc_3:* = i2 + 1;
                        i2 = _loc_3;
                    }
                    break;
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            i = 0;
            while (i < arr_fireball_skin.length)
            {
                
                if (arr_fireball_side[i] == 1)
                {
                    arr_fireball_skin[i].x = arr_fireball_skin[i].x + 7;
                    rnd_for = 0;
                    i2 = 0;
                    while (i2 < arr_fox.length)
                    {
                        
                        if (arr_fox[i2].life)
                        {
                            if (arr_fireball_skin[i].x + 10 > arr_fox[i2].skin.x)
                            {
                                if (arr_fox[i2].bubble_mode == false)
                                {
                                    if (arr_fox[i2].armor_mode)
                                    {
                                        arr_fox[i2].armor_mode = false;
                                        arr_fox[i2].skin.armor_cl.visible = false;
                                    }
                                    arr_fox[i2].remove_hp(arr_fireball_power[i]);
                                    arr_fox[i2].to_back2();
                                    if (arr_fox[i2].aby_mode)
                                    {
                                        arr_fox[i2].aby_mode = false;
                                        arr_fox[i2].go_frame(4);
                                        arr_fox[i2].set_mode(4);
                                    }
                                    if (arr_fox[i2].life)
                                    {
                                        arr_fox[i2].speed = 0;
                                        arr_fox[i2].run_mode = false;
                                        arr_fox[i2].reload_mode = true;
                                        arr_fox[i2].got_damage_mode = true;
                                        if (arr_fox[i2].stun_mode == false)
                                        {
                                            arr_fox[i2].go_frame(25);
                                            arr_fox[i2].got_damage_mode = true;
                                        }
                                    }
                                    this._app._so.load_by_name(fireball_hit_so);
                                    _to_last(arr_fireball_skin[i], zone_up_all);
                                    arr_fireball_skin[i].gotoAndPlay("da");
                                    arr_fireball_skin.splice(i, 1);
                                    arr_fireball_power.splice(i, 1);
                                    arr_fireball_side.splice(i, 1);
                                    rnd_for = 1;
                                    break;
                                }
                            }
                        }
                        var _loc_3:* = i2 + 1;
                        i2 = _loc_3;
                    }
                    if (arr_fireball_skin[i].x > 650)
                    {
                        _to_last(arr_fireball_skin[i], zone_up_all);
                        arr_fireball_skin[i].gotoAndPlay("da");
                        arr_fireball_skin.splice(i, 1);
                        arr_fireball_power.splice(i, 1);
                        arr_fireball_side.splice(i, 1);
                        break;
                    }
                }
                else
                {
                    arr_fireball_skin[i].x = arr_fireball_skin[i].x - 7;
                    rnd_for = 0;
                    i2 = 0;
                    while (i2 < arr_cat.length)
                    {
                        
                        if (arr_cat[i2].life)
                        {
                            if (arr_fireball_skin[i].x - 10 < arr_cat[i2].skin.x)
                            {
                                if (arr_cat[i2].bubble_mode == false)
                                {
                                    if (arr_cat[i2].armor_mode)
                                    {
                                        arr_cat[i2].armor_mode = false;
                                        arr_cat[i2].skin.armor_cl.visible = false;
                                    }
                                    arr_cat[i2].remove_hp(arr_fireball_power[i]);
                                    arr_cat[i2].to_back2();
                                    if (arr_cat[i2].aby_mode)
                                    {
                                        arr_cat[i2].aby_mode = false;
                                        arr_cat[i2].go_frame(4);
                                        arr_cat[i2].set_mode(4);
                                    }
                                    if (arr_cat[i2].life)
                                    {
                                        arr_cat[i2].speed = 0;
                                        arr_cat[i2].run_mode = false;
                                        arr_cat[i2].reload_mode = true;
                                        if (arr_cat[i2].stun_mode == false)
                                        {
                                            arr_cat[i2].go_frame(25);
                                            arr_cat[i2].got_damage_mode = true;
                                        }
                                    }
                                    this._app._so.load_by_name(fireball_hit_so);
                                    _to_last(arr_fireball_skin[i], zone_up_all);
                                    arr_fireball_skin[i].gotoAndPlay("da");
                                    arr_fireball_skin.splice(i, 1);
                                    arr_fireball_power.splice(i, 1);
                                    arr_fireball_side.splice(i, 1);
                                    rnd_for = 1;
                                    break;
                                }
                            }
                        }
                        var _loc_3:* = i2 + 1;
                        i2 = _loc_3;
                    }
                    if (arr_fireball_skin[i].x < 0)
                    {
                        _to_last(arr_fireball_skin[i], zone_up_all);
                        arr_fireball_skin[i].gotoAndPlay("da");
                        arr_fireball_skin.splice(i, 1);
                        arr_fireball_power.splice(i, 1);
                        arr_fireball_side.splice(i, 1);
                        break;
                    }
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            if (lock_mode == false)
            {
                i = 0;
                while (i < arr_aby.length)
                {
                    
                    if (arr_aby[i].ex_aby == false)
                    {
                        arr_aby[i].reload_time = arr_aby[i].reload_time + 1 * aura_cat_speed_koff;
                        arr_aby[i].skin.icon_cl.icon2.scale_cl.gotoAndStop(int(arr_aby[i].reload_time / arr_aby[i].reload_time2 * 100));
                        if (arr_aby[i].reload_time >= arr_aby[i].reload_time2)
                        {
                            arr_aby[i].ex_aby = true;
                            arr_aby[i].skin.icon_cl.icon2.bg_cl.gotoAndStop(1);
                            arr_aby[i].skin.icon_cl.icon2.scale_cl.visible = false;
                            arr_aby[i].skin.icon_cl.icon2.scale_cl.gotoAndStop(1);
                            break;
                        }
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            if (lock_mode_fox == false)
            {
                i = 0;
                while (i < arr_aby_enemy.length)
                {
                    
                    if (arr_fox[i].life)
                    {
                        if (arr_aby_enemy[i].reload_time >= arr_aby_enemy[i].reload_time2)
                        {
                            arr_fox[i].scale_cl.icon_cl.icon2.bg_cl.gotoAndStop(1);
                            arr_fox[i].scale_cl.icon_cl.icon2.scale_cl.visible = false;
                            arr_fox[i].scale_cl.icon_cl.icon2.scale_cl.gotoAndStop(1);
                            if (arr_fox[i].stun_mode == false && arr_fox[i].aby_mode == false && arr_fox[i].bubble_mode == false)
                            {
                                if (arr_aby_enemy[i].type_aby == 1 || arr_aby_enemy[i].type_aby == 2 || arr_aby_enemy[i].type_aby == 10)
                                {
                                    arr_fox[i].scale_cl.icon_cl.icon2.bg_cl.gotoAndStop(3);
                                    arr_aby_enemy[i].reload_time = -999;
                                    arr_fox[i].speed = arr_fox[i].speed2;
                                    arr_fox[i].aby_shot_mode = true;
                                }
                                else
                                {
                                    arr_aby_enemy[i].reload_time = 0;
                                    arr_fox[i].set_mode(0);
                                    arr_fox[i].aby_mode = true;
                                    arr_fox[i].aby_time = arr_aby_enemy[i].time;
                                    arr_fox[i].go_frame(arr_aby_enemy[i].frame_action);
                                    if (arr_aby_enemy[i].frame_action == 12)
                                    {
                                        this._app._so.load_by_name(aura_power_so);
                                    }
                                    else if (arr_aby_enemy[i].frame_action == 13)
                                    {
                                        this._app._so.load_by_name(aura_speed_so);
                                    }
                                    else if (arr_aby_enemy[i].frame_action == 16)
                                    {
                                        this._app._so.load_by_name(aura_dead_so);
                                    }
                                    else if (arr_aby_enemy[i].frame_action == 18)
                                    {
                                        this._app._so.load_by_name(to_bubble_so);
                                    }
                                    else if (arr_aby_enemy[i].frame_action == 19)
                                    {
                                        this._app._so.load_by_name(armor_so);
                                    }
                                    else if (arr_aby_enemy[i].frame_action == 20)
                                    {
                                        this._app._so.load_by_name(armor_all_so);
                                    }
                                    else if (arr_aby_enemy[i].frame_action == 21)
                                    {
                                        this._app._so.load_by_name(reload_all_so);
                                    }
                                    arr_fox[i].scale_cl.icon_cl.icon2.scale_cl.visible = true;
                                    arr_fox[i].scale_cl.icon_cl.icon2.scale_cl.gotoAndStop(1);
                                    arr_fox[i].scale_cl.icon_cl.icon2.bg_cl.gotoAndStop(2);
                                }
                            }
                        }
                        else
                        {
                            arr_aby_enemy[i].reload_time = arr_aby_enemy[i].reload_time + 1 * aura_fox_speed_koff;
                            arr_fox[i].scale_cl.icon_cl.icon2.scale_cl.gotoAndStop(int(arr_aby_enemy[i].reload_time / arr_aby_enemy[i].reload_time2 * 100));
                        }
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            return;
        }// end function

        function other_f(event:Event)
        {
            i = 0;
            while (i < arr_last_frame_skin.length)
            {
                
                if (arr_last_frame_skin[i].currentFrame == arr_last_frame_skin[i].totalFrames)
                {
                    arr_last_frame_zone[i].removeChild(arr_last_frame_skin[i]);
                    arr_last_frame_skin.splice(i, 1);
                    arr_last_frame_zone.splice(i, 1);
                    break;
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            if (xray_ex)
            {
                var _loc_3:* = xray_time + 1;
                xray_time = _loc_3;
                if (xray_time >= 70)
                {
                    Main.xray_mode = false;
                    this._app._music.mute();
                    xray_ex = false;
                    zone_tuto.removeChild(xray_cl);
                }
                if (xray_time == 26)
                {
                    xray_cl.ray2.cat_cl.alpha = 0.4;
                    xray_cl.ray2.skeleton_cl.nextFrame();
                    this._app._so.load_by_name(injury_so);
                }
            }
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            i = 0;
            while (i < arr_aby.length)
            {
                
                if (arr_aby[i].ex_aby)
                {
                    if (_mo(arr_aby[i].skin.icon_cl))
                    {
                        this.launch_aby(i);
                    }
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            if (_mo(menu_bt_cl))
            {
                stage.addEventListener(MouseEvent.CLICK, this.click_pause_f);
                this.stop_game();
                pause_cl.visible = true;
                i = 0;
                while (i < arr_cat.length)
                {
                    
                    if (arr_cat[i].skin.cat1.currentFrame != 3)
                    {
                        arr_cat[i].skin.cat1.cat2.stop();
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                i = 0;
                while (i < arr_fox.length)
                {
                    
                    if (arr_fox[i].skin.cat1.currentFrame != 3)
                    {
                        arr_fox[i].skin.cat1.cat2.stop();
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            return;
        }// end function

        function began_f(event:Event)
        {
            if (status_began == 1)
            {
                i = 0;
                while (i < arr_cat.length)
                {
                    
                    if (arr_cat[i].skin.x < 192 - i * 50)
                    {
                        arr_cat[i].skin.x = arr_cat[i].skin.x + 4;
                        if (arr_cat[i].skin.x >= 192 - i * 50)
                        {
                            arr_cat[i].skin.x = 192 - i * 50;
                            arr_cat[i].set_mode(4);
                            arr_cat[i].go_frame(1);
                            rnd_for = _rnd(5) + 1;
                            switch(rnd_for)
                            {
                                case 1:
                                {
                                    arr_cat[i].skin.cat1.cat2.gotoAndPlay("da1");
                                    break;
                                }
                                case 2:
                                {
                                    arr_cat[i].skin.cat1.cat2.gotoAndPlay("da2");
                                    break;
                                }
                                case 3:
                                {
                                    arr_cat[i].skin.cat1.cat2.gotoAndPlay("da3");
                                    break;
                                }
                                case 4:
                                {
                                    arr_cat[i].skin.cat1.cat2.gotoAndPlay("da4");
                                    break;
                                }
                                case 5:
                                {
                                    arr_cat[i].skin.cat1.cat2.gotoAndPlay("da5");
                                    break;
                                }
                                default:
                                {
                                    break;
                                }
                            }
                        }
                    }
                    if (arr_cat[0].skin.x >= 192 - 0 * 50 && arr_cat[1].skin.x >= 192 - 1 * 50 && arr_cat[2].skin.x >= 192 - 2 * 50 && arr_cat[3].skin.x >= 192 - 3 * 50)
                    {
                        status_began = 2;
                        break;
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            else if (status_began == 2)
            {
                i = 0;
                while (i < arr_fox.length)
                {
                    
                    if (arr_fox[i].skin.x > 610 - i * 50)
                    {
                        arr_fox[i].skin.x = arr_fox[i].skin.x - 4;
                        if (arr_fox[i].skin.x <= 610 - i * 50)
                        {
                            arr_fox[i].skin.x = 610 - i * 50;
                            arr_fox[i].go_frame(1);
                            rnd_for = _rnd(5) + 1;
                            switch(rnd_for)
                            {
                                case 1:
                                {
                                    arr_fox[i].skin.cat1.cat2.gotoAndPlay("da1");
                                    break;
                                }
                                case 2:
                                {
                                    arr_fox[i].skin.cat1.cat2.gotoAndPlay("da2");
                                    break;
                                }
                                case 3:
                                {
                                    arr_fox[i].skin.cat1.cat2.gotoAndPlay("da3");
                                    break;
                                }
                                case 4:
                                {
                                    arr_fox[i].skin.cat1.cat2.gotoAndPlay("da4");
                                    break;
                                }
                                case 5:
                                {
                                    arr_fox[i].skin.cat1.cat2.gotoAndPlay("da5");
                                    break;
                                }
                                default:
                                {
                                    break;
                                }
                            }
                        }
                    }
                    if (arr_fox[0].skin.x <= 610 - 0 * 50 && arr_fox[1].skin.x <= 610 - 1 * 50 && arr_fox[2].skin.x <= 610 - 2 * 50 && arr_fox[3].skin.x <= 610 - 3 * 50)
                    {
                        status_began = 3;
                        time_began = 10;
                        break;
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            else if (status_began == 3)
            {
                time_began = (time_began - 1);
                if (time_began < 0)
                {
                    i = 0;
                    while (i < arr_fox.length)
                    {
                        
                        arr_fox[i].set_mode(4);
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                    i = 0;
                    while (i < arr_cat.length)
                    {
                        
                        arr_cat[i].set_mode(4);
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                    i = 0;
                    while (i < arr_fox.length)
                    {
                        
                        arr_fox[i].skin.x = 610 - i * 50;
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                    i = 0;
                    while (i < arr_cat.length)
                    {
                        
                        arr_cat[i].skin.x = 192 - i * 50;
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                    this._app._music.load_music("game");
                    this.add_function();
                    removeEventListener(Event.ENTER_FRAME, this.began_f);
                }
            }
            return;
        }// end function

        function end_f(event:Event)
        {
            if (type_end == 1)
            {
                i4 = 0;
                while (i4 < arr_cat.length)
                {
                    
                    if (arr_cat[i4].life)
                    {
                        if (_frame(arr_cat[i4].skin.cat1.cat2) || arr_cat[i4].reload_mode || arr_cat[i4].run_mode)
                        {
                            arr_cat[i4].go_frame(23);
                            arr_cat[i4].life = false;
                            if (i4 == 0)
                            {
                                arr_cat[i4].skin.cat1.cat2.gotoAndPlay("da1");
                            }
                            else if (i4 == 1)
                            {
                                arr_cat[i4].skin.cat1.cat2.gotoAndPlay("da2");
                            }
                            else if (i4 == 2)
                            {
                                arr_cat[i4].skin.cat1.cat2.gotoAndPlay("da3");
                            }
                            else
                            {
                                arr_cat[i4].skin.cat1.cat2.gotoAndPlay("da4");
                            }
                        }
                    }
                    i2 = 0;
                    while (i2 < arr_cat.length)
                    {
                        
                        if (Math.abs(arr_cat[i4].skin.x - arr_cat[i2].skin.x) < 50 && i4 != i2)
                        {
                            if (arr_cat[i4].skin.x > arr_cat[i2].skin.x)
                            {
                                arr_cat[i4].skin.x = arr_cat[i4].skin.x + 3;
                                arr_cat[i2].skin.x = arr_cat[i2].skin.x - 3;
                            }
                            else
                            {
                                arr_cat[i4].skin.x = arr_cat[i4].skin.x - 3;
                                arr_cat[i2].skin.x = arr_cat[i2].skin.x + 3;
                            }
                        }
                        var _loc_3:* = i2 + 1;
                        i2 = _loc_3;
                    }
                    var _loc_3:* = i4 + 1;
                    i4 = _loc_3;
                }
                if (this.ch_cat() == 1)
                {
                    var _loc_3:* = time_end + 1;
                    time_end = _loc_3;
                    if (time_end == 360)
                    {
                        this.go_end();
                        removeEventListener(Event.ENTER_FRAME, this.end_f);
                        time_end = 0;
                    }
                }
            }
            else
            {
                i4 = 0;
                while (i4 < arr_fox.length)
                {
                    
                    if (arr_fox[i4].life)
                    {
                        if (_frame(arr_fox[i4].skin.cat1.cat2) || arr_fox[i4].reload_mode || arr_fox[i4].run_mode)
                        {
                            arr_fox[i4].go_frame(23);
                            arr_fox[i4].life = false;
                            if (i4 == 0)
                            {
                                arr_fox[i4].skin.cat1.cat2.gotoAndPlay("da1");
                            }
                            else if (i4 == 1)
                            {
                                arr_fox[i4].skin.cat1.cat2.gotoAndPlay("da2");
                            }
                            else if (i4 == 2)
                            {
                                arr_fox[i4].skin.cat1.cat2.gotoAndPlay("da3");
                            }
                            else
                            {
                                arr_fox[i4].skin.cat1.cat2.gotoAndPlay("da4");
                            }
                        }
                    }
                    i2 = 0;
                    while (i2 < arr_fox.length)
                    {
                        
                        if (Math.abs(arr_fox[i4].skin.x - arr_fox[i2].skin.x) < 50 && i4 != i2)
                        {
                            if (arr_fox[i4].skin.x > arr_fox[i2].skin.x)
                            {
                                arr_fox[i4].skin.x = arr_fox[i4].skin.x + 3;
                                arr_fox[i2].skin.x = arr_fox[i2].skin.x - 3;
                            }
                            else
                            {
                                arr_fox[i4].skin.x = arr_fox[i4].skin.x - 3;
                                arr_fox[i2].skin.x = arr_fox[i2].skin.x + 3;
                            }
                        }
                        var _loc_3:* = i2 + 1;
                        i2 = _loc_3;
                    }
                    var _loc_3:* = i4 + 1;
                    i4 = _loc_3;
                }
                if (this.ch_fox() == 1)
                {
                    var _loc_3:* = time_end + 1;
                    time_end = _loc_3;
                    if (time_end == 220)
                    {
                        this.go_end();
                        removeEventListener(Event.ENTER_FRAME, this.end_f);
                        time_end = 0;
                    }
                }
            }
            return;
        }// end function

        function click_back_to_f(event:MouseEvent)
        {
            if (_mo(back_to_cl))
            {
                stage.removeEventListener(MouseEvent.CLICK, this.click_back_to_f);
                this.go_end();
                removeEventListener(Event.ENTER_FRAME, this.end_f);
                time_end = 0;
            }
            return;
        }// end function

        function grand_f(event:Event)
        {
            if (_frame(grand_cl))
            {
                removeEventListener(Event.ENTER_FRAME, this.grand_f);
                zone_tuto.removeChild(grand_cl);
                status_began = 1;
                location_cl.referee_cl.gotoAndPlay(1);
                this._app._so.load_by_name(StartBattle_so);
            }
            return;
        }// end function

        function check_battle(param1, param2)
        {
            was_battle_shot = false;
            if (arr_cat[param1].life && arr_cat[param1].run_mode)
            {
                was_battle_shot = true;
                if (arr_cat[param1].aby_shot_mode == false)
                {
                    arr_cat[param1].to_attack();
                    arr_fox[param2].remove_hp(arr_cat[param1].attack);
                    arr_fox[param2].to_back();
                    if (arr_fox[param2].aby_mode)
                    {
                        arr_fox[param2].aby_mode = false;
                        arr_fox[param2].go_frame(4);
                        arr_fox[param2].set_mode(4);
                    }
                    sprite_var = _sp(hit_mc, zone_up_all, arr_cat[param1].skin.x + 40, arr_cat[param1].skin.y);
                    sprite_var.scaleX = -Math.abs(sprite_var.scaleX);
                    _to_last(sprite_var, zone_up_all);
                    this._app._so.load_by_name(kick_so);
                }
                if (arr_cat[param1].aby_shot_mode)
                {
                    if (arr_aby[param1].type_aby == 1)
                    {
                        this._app._so.load_by_name2(power_kick_so, 70);
                        this.add_super_shot(1, arr_cat[param1].skin);
                        if (arr_fox[param2].armor_mode)
                        {
                            arr_fox[param2].armor_mode = false;
                            arr_fox[param2].skin.armor_cl.visible = false;
                        }
                        arr_fox[param2].remove_hp(arr_aby[param1].power);
                        arr_fox[param2].to_back2();
                        if (arr_fox[param2].aby_mode)
                        {
                            arr_fox[param2].aby_mode = false;
                            arr_fox[param2].go_frame(4);
                            arr_fox[param2].set_mode(4);
                        }
                        if (arr_fox[param2].life)
                        {
                            arr_fox[param2].speed = 0;
                            arr_fox[param2].run_mode = false;
                            arr_fox[param2].reload_mode = true;
                            if (arr_fox[param2].bubble_mode == false && arr_fox[param2].stun_mode == false)
                            {
                                arr_fox[param2].go_frame(24);
                                arr_fox[param2].got_damage_mode = true;
                            }
                        }
                    }
                    if (arr_aby[param1].type_aby == 2)
                    {
                        this._app._so.load_by_name2(power_kick_so, 70);
                        this.add_super_shot(1, arr_cat[param1].skin);
                        if (arr_fox[param2].armor_mode)
                        {
                            arr_fox[param2].armor_mode = false;
                            arr_fox[param2].skin.armor_cl.visible = false;
                        }
                        arr_fox[param2].remove_hp(arr_aby[param1].power);
                        arr_fox[param2].to_back2();
                        if (arr_fox[param2].aby_mode)
                        {
                            arr_fox[param2].aby_mode = false;
                            arr_fox[param2].go_frame(4);
                            arr_fox[param2].set_mode(4);
                        }
                        if (arr_fox[param2].life)
                        {
                            arr_fox[param2].speed = 0;
                            arr_fox[param2].run_mode = false;
                            arr_fox[param2].reload_mode = true;
                            if (arr_fox[param2].bubble_mode == false && arr_fox[param2].stun_mode == false)
                            {
                                arr_fox[param2].go_frame(24);
                                arr_fox[param2].got_damage_mode = true;
                            }
                        }
                    }
                    if (arr_aby[param1].type_aby == 10)
                    {
                        if (arr_fox[param2].bubble_mode == false)
                        {
                            this._app._so.load_by_name(stun_so);
                            this.add_super_shot(1, arr_cat[param1].skin);
                            arr_fox[param2].to_stun(arr_aby[param1].power);
                            arr_fox[param2].scale_cl.icon_cl.lock_cl.visible = true;
                        }
                    }
                    arr_cat[param1].after_attack_mode = true;
                    arr_cat[param1].run_mode = false;
                    arr_cat[param1].back_mode = true;
                    arr_cat[param1].reload_mode = true;
                    arr_cat[param1].got_koff_back();
                    arr_cat[param1].back_speed = _rnd(3) + back_power * arr_cat[param1].koff_back;
                    arr_cat[param1].speed = _rnd(20);
                    arr_cat[param1].aby_shot_mode = false;
                    arr_cat[param1].go_frame(arr_aby[param1].frame_action);
                    arr_aby[param1].skin.icon_cl.icon2.bg_cl.gotoAndStop(2);
                    arr_aby[param1].skin.icon_cl.icon2.scale_cl.visible = true;
                    arr_aby[param1].skin.icon_cl.icon2.scale_cl.gotoAndStop(1);
                    arr_aby[param1].reload_time = 0;
                }
            }
            if (arr_fox[param2].stun_mode == false && arr_fox[param2].life && arr_fox[param2].run_mode)
            {
                if (arr_fox[param2].aby_shot_mode == false)
                {
                    this.set_injure(param1, param2);
                    arr_cat[param1].remove_hp(arr_fox[param2].attack);
                    arr_fox[param2].to_attack();
                    if (arr_cat[param1].aby_mode)
                    {
                        arr_cat[param1].aby_mode = false;
                        arr_cat[param1].go_frame(4);
                        arr_cat[param1].set_mode(4);
                    }
                }
                if (arr_fox[param2].aby_shot_mode)
                {
                    if (arr_aby_enemy[param2].type_aby == 1)
                    {
                        this._app._so.load_by_name2(power_kick_so, 70);
                        this.add_super_shot(2, arr_fox[param2].skin);
                        if (arr_cat[param1].armor_mode)
                        {
                            arr_cat[param1].armor_mode = false;
                            arr_cat[param1].skin.armor_cl.visible = false;
                        }
                        arr_cat[param1].remove_hp(arr_aby_enemy[param2].power);
                        arr_cat[param1].to_back2();
                        if (arr_cat[param1].aby_mode)
                        {
                            arr_cat[param1].aby_mode = false;
                            arr_cat[param1].go_frame(4);
                            arr_cat[param1].set_mode(4);
                        }
                        if (arr_cat[param1].life)
                        {
                            arr_cat[param1].speed = 0;
                            arr_cat[param1].run_mode = false;
                            arr_cat[param1].reload_mode = true;
                            if (arr_cat[param1].bubble_mode == false && arr_cat[param1].stun_mode == false)
                            {
                                arr_cat[param1].go_frame(24);
                                arr_cat[param1].got_damage_mode = true;
                            }
                        }
                    }
                    if (arr_aby_enemy[param2].type_aby == 2)
                    {
                        this.add_super_shot(2, arr_fox[param2].skin);
                        this._app._so.load_by_name2(power_kick_so, 70);
                        if (arr_cat[param1].armor_mode)
                        {
                            arr_cat[param1].armor_mode = false;
                            arr_cat[param1].skin.armor_cl.visible = false;
                        }
                        arr_cat[param1].remove_hp(arr_aby_enemy[param2].power);
                        arr_cat[param1].to_back2();
                        if (arr_cat[param1].aby_mode)
                        {
                            arr_cat[param1].aby_mode = false;
                            arr_cat[param1].go_frame(4);
                            arr_cat[param1].set_mode(4);
                        }
                        if (arr_cat[param1].life)
                        {
                            arr_cat[param1].speed = 0;
                            arr_cat[param1].run_mode = false;
                            arr_cat[param1].reload_mode = true;
                            if (arr_cat[param1].bubble_mode == false && arr_cat[param1].stun_mode == false)
                            {
                                arr_cat[param1].go_frame(24);
                                arr_cat[param1].got_damage_mode = true;
                            }
                        }
                    }
                    if (arr_aby_enemy[param2].type_aby == 10)
                    {
                        if (arr_cat[param1].bubble_mode == false)
                        {
                            this._app._so.load_by_name(stun_so);
                            this.add_super_shot(2, arr_fox[param2].skin);
                            arr_cat[param1].to_stun(arr_aby_enemy[param2].power);
                            arr_aby[param1].skin.icon_cl.lock_cl.visible = true;
                        }
                    }
                    arr_fox[param2].after_attack_mode = true;
                    arr_fox[param2].run_mode = false;
                    arr_fox[param2].back_mode = true;
                    arr_fox[param2].reload_mode = true;
                    arr_fox[param2].got_koff_back();
                    arr_fox[param2].back_speed = _rnd(3) + back_power * arr_fox[param2].koff_back;
                    arr_fox[param2].speed = _rnd(20);
                    arr_fox[param2].aby_shot_mode = false;
                    arr_fox[param2].go_frame(arr_aby_enemy[param2].frame_action);
                    arr_fox[param2].scale_cl.icon_cl.icon2.bg_cl.gotoAndStop(2);
                    arr_fox[param2].scale_cl.icon_cl.icon2.scale_cl.visible = true;
                    arr_fox[param2].scale_cl.icon_cl.icon2.scale_cl.gotoAndStop(1);
                    arr_aby_enemy[param2].reload_time = 0;
                }
                if (was_battle_shot == false)
                {
                    this._app._so.load_by_name(kick2_so);
                    arr_cat[param1].to_back();
                    sprite_var = _sp(hit_mc, zone_up_all, arr_fox[param2].skin.x - 40, arr_fox[param2].skin.y);
                    _to_last(sprite_var, zone_up_all);
                }
            }
            return;
        }// end function

        function launch_aby(param1)
        {
            if (lock_mode == false)
            {
                if (arr_cat[param1].stun_mode == false && arr_cat[param1].aby_mode == false && arr_cat[param1].bubble_mode == false)
                {
                    if (arr_aby[param1].type_aby == 1 || arr_aby[param1].type_aby == 2 || arr_aby[param1].type_aby == 10)
                    {
                        arr_aby[param1].ex_aby = false;
                        arr_aby[param1].skin.icon_cl.icon2.bg_cl.gotoAndStop(3);
                        arr_aby[param1].reload_time = -999;
                        arr_cat[param1].speed = arr_cat[param1].speed2;
                        arr_cat[param1].aby_shot_mode = true;
                    }
                    else
                    {
                        arr_aby[param1].ex_aby = false;
                        arr_aby[param1].skin.icon_cl.icon2.bg_cl.gotoAndStop(2);
                        arr_aby[param1].skin.icon_cl.icon2.scale_cl.visible = true;
                        arr_aby[param1].skin.icon_cl.icon2.scale_cl.gotoAndStop(1);
                        arr_aby[param1].reload_time = 0;
                        arr_cat[param1].set_mode(0);
                        arr_cat[param1].aby_mode = true;
                        arr_cat[param1].aby_time = arr_aby[param1].time;
                        arr_cat[param1].go_frame(arr_aby[param1].frame_action);
                        if (arr_aby[param1].frame_action == 12)
                        {
                            this._app._so.load_by_name(aura_power_so);
                        }
                        else if (arr_aby[param1].frame_action == 13)
                        {
                            this._app._so.load_by_name(aura_speed_so);
                        }
                        else if (arr_aby[param1].frame_action == 16)
                        {
                            this._app._so.load_by_name(aura_dead_so);
                        }
                        else if (arr_aby[param1].frame_action == 18)
                        {
                            this._app._so.load_by_name(to_bubble_so);
                        }
                        else if (arr_aby[param1].frame_action == 19)
                        {
                            this._app._so.load_by_name(armor_so);
                        }
                        else if (arr_aby[param1].frame_action == 20)
                        {
                            this._app._so.load_by_name(armor_all_so);
                        }
                        else if (arr_aby[param1].frame_action == 21)
                        {
                            this._app._so.load_by_name(reload_all_so);
                        }
                    }
                }
            }
            return;
        }// end function

        function check_end()
        {
            var save_results:* = function ()
            {
                if (Main.sav.data.playoff_round == 1)
                {
                    Main.sav.data.count_semi_1_1 = dead_fox;
                    Main.sav.data.count_semi_1_2 = dead_cat;
                }
                else if (Main.sav.data.playoff_round == 2)
                {
                    Main.sav.data.count_final_1 = dead_fox;
                    Main.sav.data.count_final_2 = dead_cat;
                }
                return;
            }// end function
            ;
            if (Main.sav.data.playoff == 0)
            {
                if (dead_fox == 4)
                {
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = "team_games_" + this._app.team_enemy_id;
                    var _loc_4:* = _loc_2["team_games_" + this._app.team_enemy_id] + 1;
                    _loc_2[_loc_3] = _loc_4;
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = "team_d_" + this._app.team_enemy_id;
                    var _loc_4:* = _loc_2["team_d_" + this._app.team_enemy_id] + 1;
                    _loc_2[_loc_3] = _loc_4;
                    _loc_2["team_pts_" + this._app.team_enemy_id] = _loc_2["team_pts_" + this._app.team_enemy_id] + dead_cat;
                    _loc_2.last_enemy = this._app.team_enemy;
                    _loc_2.last_enemy_id = this._app.team_enemy_id;
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = _loc_2.team_games_1 + 1;
                    _loc_2.team_games_1 = _loc_3;
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = _loc_2.team_w_1 + 1;
                    _loc_2.team_w_1 = _loc_3;
                    _loc_2.team_pts_1 = _loc_2.team_pts_1 + dead_fox;
                    type_end = 1;
                    this.end_game();
                    if (_loc_2.league == 4)
                    {
                        _loc_2.earn_fish = 150;
                    }
                    else if (_loc_2.league == 3)
                    {
                        _loc_2.earn_fish = 200;
                    }
                    else if (_loc_2.league == 2)
                    {
                        _loc_2.earn_fish = 250;
                    }
                    else if (_loc_2.league == 1)
                    {
                        _loc_2.earn_fish = 300;
                    }
                    _loc_2.result = 1;
                    _loc_2.earn_pts = dead_fox;
                    _loc_2.gold = _loc_2.gold + _loc_2.earn_fish;
                    _loc_2.gold_overall = _loc_2.gold_overall + _loc_2.earn_fish;
                    this._app._music.delete_music("all");
                    this._app._so.load_by_name(won_so);
                }
                else if (dead_cat == 4)
                {
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = _loc_2.team_games_1 + 1;
                    _loc_2.team_games_1 = _loc_3;
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = _loc_2.team_d_1 + 1;
                    _loc_2.team_d_1 = _loc_3;
                    _loc_2.team_pts_1 = _loc_2.team_pts_1 + dead_fox;
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = "team_games_" + this._app.team_enemy_id;
                    var _loc_4:* = _loc_2["team_games_" + this._app.team_enemy_id] + 1;
                    _loc_2[_loc_3] = _loc_4;
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = "team_w_" + this._app.team_enemy_id;
                    var _loc_4:* = _loc_2["team_w_" + this._app.team_enemy_id] + 1;
                    _loc_2[_loc_3] = _loc_4;
                    _loc_2["team_pts_" + this._app.team_enemy_id] = _loc_2["team_pts_" + this._app.team_enemy_id] + dead_cat;
                    _loc_2.last_enemy = this._app.team_enemy;
                    _loc_2.last_enemy_id = this._app.team_enemy_id;
                    type_end = 2;
                    this.end_game();
                    if (_loc_2.league == 4)
                    {
                        _loc_2.earn_fish = 50;
                    }
                    else if (_loc_2.league == 3)
                    {
                        _loc_2.earn_fish = 75;
                    }
                    else if (_loc_2.league == 2)
                    {
                        _loc_2.earn_fish = 100;
                    }
                    else if (_loc_2.league == 1)
                    {
                        _loc_2.earn_fish = 150;
                    }
                    _loc_2.result = 2;
                    _loc_2.earn_pts = dead_fox;
                    _loc_2.gold = _loc_2.gold + _loc_2.earn_fish;
                    _loc_2.gold_overall = _loc_2.gold_overall + _loc_2.earn_fish;
                    this._app._music.delete_music("all");
                    this._app._so.load_by_name(defeat_so);
                }
            }
            else if (dead_fox == 4)
            {
                if (_loc_2.playoff_round == 1)
                {
                    _loc_2.gold = _loc_2.gold + 400;
                    _loc_2.gold_overall = _loc_2.gold_overall + 400;
                }
                else if (_loc_2.playoff_round === 2)
                {
                    _loc_2.gold = _loc_2.gold + 800;
                    _loc_2.gold_overall = _loc_2.gold_overall + 800;
                }
                else if (_loc_2.playoff_round == 3)
                {
                    _loc_2.gold = _loc_2.gold + 3000;
                    _loc_2.gold_overall = _loc_2.gold_overall + 3000;
                }
                this.save_results();
                type_end = 1;
                this.end_game();
                this._app._music.delete_music("all");
                this._app._so.load_by_name(won_so);
            }
            else if (dead_cat == 4)
            {
                if (_loc_2.playoff_round == 1)
                {
                    _loc_2.gold = _loc_2.gold + 200;
                    _loc_2.gold_overall = _loc_2.gold_overall + 200;
                }
                else if (_loc_2.playoff_round === 2)
                {
                    _loc_2.gold = _loc_2.gold + 400;
                    _loc_2.gold_overall = _loc_2.gold_overall + 400;
                }
                else if (_loc_2.playoff_round == 3)
                {
                    _loc_2.gold = _loc_2.gold + 500;
                    _loc_2.gold_overall = _loc_2.gold_overall + 500;
                }
                this._app._music.delete_music("all");
                this._app._so.load_by_name(defeat_so);
                _loc_2.end_of_playoff = 1;
                _loc_2.playoff = 0;
                _loc_2.rest = 1;
                this.save_results();
                type_end = 2;
                this.end_game();
            }
            return;
        }// end function

        function end_game()
        {
            i3 = 0;
            while (i3 < arr_cat.length)
            {
                
                Main.sav.data["cat_hp_" + (i3 + 1)] = arr_cat[i3].hp;
                if (Main.sav.data["cat_hp_" + (i3 + 1)] < int(Main.sav.data["cat_hp2_" + (i3 + 1)] * 0.5))
                {
                    Main.sav.data["cat_hp_" + (i3 + 1)] = int(Main.sav.data["cat_hp2_" + (i3 + 1)] * 0.5);
                }
                if (Main.sav.data["cat_hp_" + (i3 + 1)] > int(Main.sav.data["cat_hp2_" + (i3 + 1)] * Main.sav.data["cat_hp_koff_" + (i3 + 1)]))
                {
                    Main.sav.data["cat_hp_" + (i3 + 1)] = int(Main.sav.data["cat_hp2_" + (i3 + 1)] * Main.sav.data["cat_hp_koff_" + (i3 + 1)]);
                }
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            i3 = 0;
            while (i3 < arr_fireball_skin.length)
            {
                
                arr_fireball_skin[i3].visible = false;
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            i3 = 0;
            while (i3 < arr_cat.length)
            {
                
                arr_cat[i3].skin.armor_cl.visible = false;
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            i3 = 0;
            while (i3 < arr_fox.length)
            {
                
                arr_fox[i3].skin.armor_cl.visible = false;
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            Main.sav.data.cat_place_1 = 9;
            Main.sav.data.cat_place_2 = 10;
            Main.sav.data.cat_place_3 = 11;
            Main.sav.data.cat_place_4 = 12;
            this.set_result_enemy_games();
            info_aby_cl.visible = false;
            this.stop_game();
            time_end = 0;
            addEventListener(Event.ENTER_FRAME, this.end_f);
            Main.sav.data.week = 1;
            if (Main.sav.data.playoff == 0)
            {
                var _loc_1:* = Main.sav.data;
                var _loc_2:* = _loc_1.season_round + 1;
                _loc_1.season_round = _loc_2;
            }
            else
            {
                var _loc_1:* = Main.sav.data;
                var _loc_2:* = _loc_1.playoff_round + 1;
                _loc_1.playoff_round = _loc_2;
            }
            var _loc_1:* = Main.sav.data;
            var _loc_2:* = _loc_1.week_hi + 1;
            _loc_1.week_hi = _loc_2;
            if (_loc_1.week_hi > 7)
            {
                _loc_1.week_hi = 1;
            }
            if (_loc_1.playoff == 0)
            {
                if (type_end == 1)
                {
                    check_won_dress = 1;
                    while (check_won_dress < 5)
                    {
                        
                        id_dress = this._app.team_enemy_id * 4 - 8 + check_won_dress;
                        if (_loc_1["dress_" + id_dress] == 0)
                        {
                            _loc_1["dress_" + id_dress] = 1;
                            won_card_cl = _sp(card_game_mc, zone_tuto, 325, 185);
                            this.load_info_to_card(won_card_cl.card_cl, id_dress);
                            break;
                            continue;
                        }
                        var _loc_2:* = check_won_dress + 1;
                        check_won_dress = _loc_2;
                    }
                }
            }
            if (tuto_battle == false)
            {
                back_to_cl = _sp(back_to_mc, zone_tuto, 322, 388);
                stage.addEventListener(MouseEvent.CLICK, this.click_back_to_f);
            }
            this.set_new_shop();
            if (Main.sav.data.playoff == 0)
            {
                if (Main.sav.data.season_round == 5)
                {
                    arr_le.splice(0, arr_le.length);
                    arr_sort.splice(0, arr_sort.length);
                    i3 = 1;
                    while (i3 <= 21)
                    {
                        
                        arr_sort.push(100);
                        var _loc_2:* = i3 + 1;
                        i3 = _loc_2;
                    }
                    i3 = 1;
                    while (i3 <= 21)
                    {
                        
                        arr_le.push(Main.sav.data["team_pts_" + i3]);
                        var _loc_2:* = i3 + 1;
                        i3 = _loc_2;
                    }
                    i3 = 0;
                    while (i3 < 21)
                    {
                        
                        rnd_for = 0;
                        i2 = 0;
                        while (i2 < 21)
                        {
                            
                            if (arr_le[i3] > arr_le[i2])
                            {
                                var _loc_2:* = rnd_for + 1;
                                rnd_for = _loc_2;
                            }
                            var _loc_2:* = i2 + 1;
                            i2 = _loc_2;
                        }
                        while (arr_sort[rnd_for] != 100)
                        {
                            
                            var _loc_2:* = rnd_for + 1;
                            rnd_for = _loc_2;
                        }
                        arr_sort[rnd_for] = i3 + 1;
                        var _loc_2:* = i3 + 1;
                        i3 = _loc_2;
                    }
                    arr_sort.reverse();
                    Main.sav.data.show_season_finish_playoff = 1;
                    if (arr_sort[0] == 1)
                    {
                        if (Main.sav.data.league > 1)
                        {
                            Main.sav.data.new_league = 1;
                        }
                        else
                        {
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
                        if (Main.sav.data.league == 4)
                        {
                            Main.sav.data.off_team_1 = 1;
                            Main.sav.data.off_team_2 = _rnd(5) + 12;
                            Main.sav.data.off_team_3 = _rnd(5) + 7;
                            Main.sav.data.off_team_4 = _rnd(5) + 17;
                        }
                        else if (Main.sav.data.league == 3)
                        {
                            Main.sav.data.off_team_1 = 1;
                            Main.sav.data.off_team_2 = _rnd(5) + 17;
                            Main.sav.data.off_team_3 = _rnd(5) + 12;
                            Main.sav.data.off_team_4 = _rnd(5) + 2;
                        }
                        else if (Main.sav.data.league == 2)
                        {
                            Main.sav.data.off_team_1 = 1;
                            Main.sav.data.off_team_2 = _rnd(5) + 7;
                            Main.sav.data.off_team_3 = _rnd(5) + 2;
                            Main.sav.data.off_team_4 = _rnd(5) + 17;
                        }
                        else if (Main.sav.data.league == 1)
                        {
                            Main.sav.data.off_team_1 = 1;
                            Main.sav.data.off_team_2 = _rnd(5) + 7;
                            Main.sav.data.off_team_3 = _rnd(5) + 12;
                            Main.sav.data.off_team_4 = _rnd(5) + 2;
                            Main.sav.data.cup_shark = 1;
                        }
                    }
                    else
                    {
                        i3 = 0;
                        while (i3 < arr_sort.length)
                        {
                            
                            if (arr_sort[i3] == 1)
                            {
                                Main.sav.data.place_won_kitty = i3 + 1;
                                break;
                            }
                            var _loc_2:* = i3 + 1;
                            i3 = _loc_2;
                        }
                        if (Main.sav.data.place_won_kitty > 6)
                        {
                            Main.sav.data.place_won_kitty = 6;
                        }
                        Main.sav.data.new_league = 0;
                        Main.sav.data.playoff = 0;
                        Main.sav.data.rest = 1;
                    }
                }
            }
            if (Main.sav.data.show_season_finish_playoff == 0 && Main.sav.data.end_of_playoff == 0 && Main.sav.data.show_season_finish == 0)
            {
                Main.sav.data.news_paper = 1;
            }
            else
            {
                Main.sav.data.news_paper = 0;
            }
            Main.sav.flush();
            return;
        }// end function

        function go_end()
        {
            if (tuto_battle)
            {
                this._app.init_save_kitty();
                Main.sav.data.game_ex = 1;
                this._app.open_new_screen("comics");
            }
            else if (Main.sav.data.show_season_finish_playoff == 1)
            {
                if (Main.sav.data.playoff == 1)
                {
                    got_cup_cl = _sp(got_cup_mc, zone_tuto, 0, 0);
                    stage.addEventListener(MouseEvent.CLICK, this.click_got_cup_f);
                    got_cup_cl.cat1.gotoAndStop(1);
                    got_cup_cl.cat2.gotoAndStop(2);
                    got_cup_cl.cat3.gotoAndStop(3);
                    got_cup_cl.cat4.gotoAndStop(4);
                    this.dress_up(got_cup_cl.cat1, 1, Main.sav.data.cat_dress_1);
                    this.dress_up(got_cup_cl.cat2, 2, Main.sav.data.cat_dress_2);
                    this.dress_up(got_cup_cl.cat3, 3, Main.sav.data.cat_dress_3);
                    this.dress_up(got_cup_cl.cat4, 4, Main.sav.data.cat_dress_4);
                    got_cup_cl.cups_cl.gotoAndStop(Main.sav.data.league);
                    got_cup_cl.cat1.gotoAndStop(1);
                    got_cup_cl.cat2.gotoAndStop(2);
                    got_cup_cl.cat3.gotoAndStop(3);
                    got_cup_cl.cat4.gotoAndStop(4);
                }
                else
                {
                    this._app.open_new_screen("upg");
                }
            }
            else if (Main.sav.data.playoff == 1)
            {
                if (Main.sav.data.playoff_round >= 4 && type_end == 1)
                {
                    Main.sav.data.game_end = 1;
                    Main.sav.data.playoff = 0;
                    Main.sav.data.rest = 1;
                    this._app.open_new_screen("finish");
                }
                else
                {
                    this._app.open_new_screen("upg");
                }
            }
            else
            {
                this._app.open_new_screen("upg");
            }
            return;
        }// end function

        function set_result_enemy_games()
        {
            if (Main.sav.data.playoff == 1)
            {
                if (Main.sav.data.playoff_round == 1)
                {
                    if (Main.sav.data.league == 4)
                    {
                        Main.sav.data.off_team_5 = Main.sav.data.off_team_4;
                        Main.sav.data.count_semi_2_1 = _rnd(4);
                        Main.sav.data.count_semi_2_2 = 4;
                    }
                    else if (Main.sav.data.league == 3)
                    {
                        Main.sav.data.off_team_5 = Main.sav.data.off_team_3;
                        Main.sav.data.count_semi_2_2 = _rnd(4);
                        Main.sav.data.count_semi_2_1 = 4;
                    }
                    else if (Main.sav.data.league == 2)
                    {
                        Main.sav.data.off_team_5 = Main.sav.data.off_team_4;
                        Main.sav.data.count_semi_2_1 = _rnd(4);
                        Main.sav.data.count_semi_2_2 = 4;
                    }
                    else if (Main.sav.data.league == 1)
                    {
                        Main.sav.data.off_team_5 = Main.sav.data.off_team_3;
                        Main.sav.data.count_semi_2_2 = _rnd(4);
                        Main.sav.data.count_semi_2_1 = 4;
                    }
                }
            }
            else
            {
                var new_step:* = function ()
            {
                arr_temp.splice(0, arr_temp.length);
                arr_temp2.splice(0, arr_temp2.length);
                if (numbef_of_m == 0)
                {
                    if (Main.sav.data.league == 4)
                    {
                        arr_temp.push(2, 3, 4, 5, 6);
                        arr_temp2.push(2, 3, 4, 5, 6);
                    }
                    else if (Main.sav.data.league == 3)
                    {
                        arr_temp.push(7, 8, 9, 10, 11);
                        arr_temp2.push(7, 8, 9, 10, 11);
                    }
                    else if (Main.sav.data.league == 2)
                    {
                        arr_temp.push(12, 13, 14, 15, 16);
                        arr_temp2.push(12, 13, 14, 15, 16);
                    }
                    else if (Main.sav.data.league == 1)
                    {
                        arr_temp.push(17, 18, 19, 20, 21);
                        arr_temp2.push(17, 18, 19, 20, 21);
                    }
                }
                else
                {
                    i3 = 1 + numbef_of_m + Main.sav.data.season_koff;
                    while (arr_temp.length < 5)
                    {
                        
                        arr_temp.push(i3);
                        var _loc_2:* = i3 + 1;
                        i3 = _loc_2;
                        if (i3 > 6 + Main.sav.data.season_koff)
                        {
                            i3 = 2 + Main.sav.data.season_koff;
                        }
                    }
                    if (numbef_of_two)
                    {
                        i3 = 1 + numbef_of_m2 + Main.sav.data.season_koff;
                        while (arr_temp2.length < 5)
                        {
                            
                            arr_temp2.push(i3);
                            var _loc_2:* = i3 + 1;
                            i3 = _loc_2;
                            if (i3 > 6 + Main.sav.data.season_koff)
                            {
                                i3 = 2 + Main.sav.data.season_koff;
                            }
                        }
                    }
                }
                arr_op.splice(0, arr_op.length);
                arr_op2.splice(0, arr_op2.length);
                var _loc_2:* = numbef_of_m + 1;
                numbef_of_m = _loc_2;
                if (numbef_of_m == 4 + Main.sav.data.season_koff)
                {
                    numbef_of_two = true;
                    numbef_of_m = 0;
                    var _loc_2:* = numbef_of_m2 + 1;
                    numbef_of_m2 = _loc_2;
                    if (numbef_of_m2 == 4 + Main.sav.data.season_koff)
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
                numbef_of_m = 1;
                numbef_of_m2 = 2;
                numbef_of_two = false;
                numbef_of_m3 = 0;
                while (this.set_match() == 0)
                {
                    
                }
                i3 = 0;
                while (i3 < arr_op.length)
                {
                    
                    rnd_for5 = 0;
                    rnd_for6 = 0;
                    i6 = 1;
                    while (i6 <= 50)
                    {
                        
                        if (arr_op[i3] + _rnd(5) >= arr_op[i3] + _rnd(5))
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
                            var _loc_3:* = "team_w_" + arr_op[i3];
                            var _loc_4:* = _loc_2["team_w_" + arr_op[i3]] + 1;
                            _loc_2[_loc_3] = _loc_4;
                            var _loc_2:* = Main.sav.data;
                            var _loc_3:* = "team_d_" + arr_op2[i3];
                            var _loc_4:* = _loc_2["team_d_" + arr_op2[i3]] + 1;
                            _loc_2[_loc_3] = _loc_4;
                            break;
                        }
                        else if (rnd_for6 >= 4)
                        {
                            var _loc_2:* = Main.sav.data;
                            var _loc_3:* = "team_w_" + arr_op2[i3];
                            var _loc_4:* = _loc_2["team_w_" + arr_op2[i3]] + 1;
                            _loc_2[_loc_3] = _loc_4;
                            var _loc_2:* = Main.sav.data;
                            var _loc_3:* = "team_d_" + arr_op[i3];
                            var _loc_4:* = _loc_2["team_d_" + arr_op[i3]] + 1;
                            _loc_2[_loc_3] = _loc_4;
                            break;
                        }
                        var _loc_3:* = i6 + 1;
                        i6 = _loc_3;
                    }
                    Main.sav.data["team_pts_" + arr_op[i3]] = Main.sav.data["team_pts_" + arr_op[i3]] + rnd_for5;
                    Main.sav.data["team_pts_" + arr_op2[i3]] = Main.sav.data["team_pts_" + arr_op2[i3]] + rnd_for6;
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = "team_games_" + arr_op[i3];
                    var _loc_4:* = _loc_2["team_games_" + arr_op[i3]] + 1;
                    _loc_2[_loc_3] = _loc_4;
                    var _loc_2:* = Main.sav.data;
                    var _loc_3:* = "team_games_" + arr_op2[i3];
                    var _loc_4:* = _loc_2["team_games_" + arr_op2[i3]] + 1;
                    _loc_2[_loc_3] = _loc_4;
                    _loc_2["match_" + arr_op[i3] + "_vs_" + arr_op2[i3]] = 1;
                    _loc_2["match_" + arr_op2[i3] + "_vs_" + arr_op[i3]] = 1;
                    var _loc_3:* = i3 + 1;
                    i3 = _loc_3;
                }
            }
            return;
        }// end function

        function set_new_shop()
        {
            Main.sav.data.shop_buy_1 = 0;
            Main.sav.data.shop_buy_2 = 0;
            Main.sav.data.shop_buy_3 = 0;
            Main.sav.data.shop_buy_4 = 0;
            Main.sav.data.shop_buy_5 = 0;
            arr_temp.splice(0, arr_temp.length);
            arr_temp2.splice(0, arr_temp2.length);
            arr_temp3.splice(0, arr_temp3.length);
            i3 = 1;
            while (i3 <= 80)
            {
                
                if (Main.sav.data["dress_" + i3] == 0)
                {
                    rnd_for5 = _info.got_level(i3);
                    if (rnd_for5 == 1)
                    {
                        arr_temp.push(i3);
                    }
                    else if (rnd_for5 == 2)
                    {
                        arr_temp2.push(i3);
                    }
                    else if (rnd_for5 == 3)
                    {
                        arr_temp3.push(i3);
                    }
                }
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            rnd_for4 = 1;
            while (rnd_for4 < 3)
            {
                
                if (arr_temp.length > 0)
                {
                    rnd_for3 = _rnd(arr_temp.length);
                    Main.sav.data["shop_" + rnd_for4] = arr_temp[rnd_for3];
                    arr_temp.splice(rnd_for3, 1);
                    var _loc_2:* = rnd_for4 + 1;
                    rnd_for4 = _loc_2;
                    continue;
                }
                break;
            }
            while (rnd_for4 < 5)
            {
                
                if (arr_temp2.length > 0)
                {
                    rnd_for3 = _rnd(arr_temp2.length);
                    Main.sav.data["shop_" + rnd_for4] = arr_temp2[rnd_for3];
                    arr_temp2.splice(rnd_for3, 1);
                    var _loc_2:* = rnd_for4 + 1;
                    rnd_for4 = _loc_2;
                    continue;
                }
                break;
            }
            while (rnd_for4 < 6)
            {
                
                if (arr_temp3.length > 0)
                {
                    rnd_for3 = _rnd(arr_temp3.length);
                    Main.sav.data["shop_" + rnd_for4] = arr_temp3[rnd_for3];
                    arr_temp3.splice(rnd_for3, 1);
                    var _loc_2:* = rnd_for4 + 1;
                    rnd_for4 = _loc_2;
                    continue;
                }
                break;
            }
            while (rnd_for4 < 6)
            {
                
                Main.sav.data["shop_" + rnd_for4] = 0;
                var _loc_2:* = rnd_for4 + 1;
                rnd_for4 = _loc_2;
            }
            return;
        }// end function

        function stop_game()
        {
            removeEventListener(Event.ENTER_FRAME, this.game_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_f);
            return;
        }// end function

        function ch_cat()
        {
            i3 = 0;
            while (i3 < arr_cat.length)
            {
                
                if (arr_cat[i3].life)
                {
                    return 0;
                }
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            return 1;
        }// end function

        function ch_fox()
        {
            i3 = 0;
            while (i3 < arr_fox.length)
            {
                
                if (arr_fox[i3].life)
                {
                    return 0;
                }
                var _loc_2:* = i3 + 1;
                i3 = _loc_2;
            }
            return 1;
        }// end function

        function add_aura(param1, param2, param3)
        {
            if (this.aura_ex(param1, param2) == 0)
            {
                _aura = new Aura();
                _aura.init(param1, param2, param3);
                zone_panel.addChild(_aura);
                if (param1 == 1)
                {
                    arr_aura_cat.push(_aura);
                    if (param2 == 1)
                    {
                        aura_cat_attack_koff = 1.5;
                    }
                    else if (param2 == 2)
                    {
                        aura_cat_speed_koff = 1.5;
                    }
                    else if (param2 == 3)
                    {
                        lock_mode_fox = true;
                        i5 = 0;
                        while (i5 < arr_fox.length)
                        {
                            
                            arr_fox[i5].scale_cl.icon_cl.lock_cl.visible = true;
                            var _loc_5:* = i5 + 1;
                            i5 = _loc_5;
                        }
                    }
                    else
                    {
                        aura_cat_weak_koff = 0.5;
                    }
                }
                else
                {
                    arr_aura_fox.push(_aura);
                    if (param2 == 1)
                    {
                        aura_fox_attack_koff = 1.5;
                    }
                    else if (param2 == 2)
                    {
                        aura_fox_speed_koff = 1.5;
                    }
                    else if (param2 == 3)
                    {
                        lock_mode = true;
                        i5 = 0;
                        while (i5 < arr_aby.length)
                        {
                            
                            arr_aby[i5].skin.icon_cl.lock_cl.visible = true;
                            var _loc_5:* = i5 + 1;
                            i5 = _loc_5;
                        }
                    }
                    else
                    {
                        aura_fox_weak_koff = 0.5;
                    }
                }
            }
            return;
        }// end function

        function aura_ex(param1, param2)
        {
            if (param1 == 1)
            {
                i2 = 0;
                while (i2 < arr_aura_cat.length)
                {
                    
                    if (arr_aura_cat[i2].type == param2)
                    {
                        return 1;
                    }
                    var _loc_4:* = i2 + 1;
                    i2 = _loc_4;
                }
                return 0;
            }
            else
            {
                i2 = 0;
                while (i2 < arr_aura_fox.length)
                {
                    
                    if (arr_aura_fox[i2].type == param2)
                    {
                        return 1;
                    }
                    var _loc_4:* = i2 + 1;
                    i2 = _loc_4;
                }
                return 0;
            }
        }// end function

        function set_injure(param1, param2)
        {
            if (this._app.train_mode == false)
            {
                if (_rnd(100) > Main.sav.data.chance_injury)
                {
                    param1 = param1 + 1;
                    arr_temp3.splice(0, arr_temp3.length);
                    i6 = 1;
                    while (i6 <= 3)
                    {
                        
                        if (Main.sav.data["cat_injury" + i6 + "_" + param1] == 0)
                        {
                            arr_temp3.push(i6);
                        }
                        var _loc_4:* = i6 + 1;
                        i6 = _loc_4;
                    }
                    if (arr_temp3.length > 0)
                    {
                        rnd_for = _rnd(arr_temp3.length);
                        Main.sav.data["cat_injury" + arr_temp3[rnd_for] + "_" + param1] = 1;
                        Main.sav.data["cat_injury" + arr_temp3[rnd_for] + "_time_" + param1] = 0;
                        xray_type = arr_temp3[rnd_for];
                        number_of_in = 0;
                        if (Main.sav.data["cat_injury1_" + param1] == 1)
                        {
                            var _loc_4:* = number_of_in + 1;
                            number_of_in = _loc_4;
                        }
                        if (Main.sav.data["cat_injury2_" + param1] == 1)
                        {
                            var _loc_4:* = number_of_in + 1;
                            number_of_in = _loc_4;
                        }
                        if (Main.sav.data["cat_injury3_" + param1] == 1)
                        {
                            var _loc_4:* = number_of_in + 1;
                            number_of_in = _loc_4;
                        }
                        if (number_of_in == 3)
                        {
                            Main.sav.data["cat_hp_koff_" + param1] = 0.25;
                        }
                        else if (number_of_in == 2)
                        {
                            Main.sav.data["cat_hp_koff_" + param1] = 0.5;
                        }
                        else if (number_of_in == 1)
                        {
                            Main.sav.data["cat_hp_koff_" + param1] = 0.75;
                        }
                        if (xray_ex == false)
                        {
                            Main.xray_mode = true;
                            this._app._music.mute();
                            xray_cl = _sp(xray_mc, zone_tuto, 72, 61);
                            xray_ex = true;
                            this.dress_up(xray_cl.ray2.cat_cl, param1, Main.sav.data["cat_dress_" + param1]);
                            this.dress_up(xray_cl.ray2.ene_cl, arr_fox[param2].type, arr_fox[param2].set_id);
                            this._app._so.load_by_name(x_ray_so);
                            xray_cl.ray2.cat_cl.gotoAndStop(xray_type);
                            if (xray_type == 1)
                            {
                                xray_cl.ray2.ene_cl.gotoAndPlay("da1");
                                xray_cl.ray2.skeleton_cl.gotoAndStop("da1");
                            }
                            else if (xray_type == 2)
                            {
                                xray_cl.ray2.ene_cl.gotoAndPlay("da2");
                                xray_cl.ray2.skeleton_cl.gotoAndStop("da2");
                            }
                            else
                            {
                                xray_cl.ray2.ene_cl.gotoAndPlay("da3");
                                xray_cl.ray2.skeleton_cl.gotoAndStop("da3");
                            }
                            xray_time = 0;
                        }
                    }
                }
            }
            return;
        }// end function

        function set_tablo()
        {
            location_cl.tablo_cl.p1.n_tx.text = dead_fox.toString();
            location_cl.tablo_cl.p2.n_tx.text = dead_cat.toString();
            return;
        }// end function

        function add_super_shot(param1, param2)
        {
            sprite_var = _sp(super_shot_ani_mc, zone_up_all, param2.x, param2.y);
            if (param1 == 1)
            {
                sprite_var.scaleX = -Math.abs(sprite_var.scaleX);
                sprite_var.x = sprite_var.x + 50;
            }
            else
            {
                sprite_var.x = sprite_var.x - 40;
            }
            sprite_var.y = sprite_var.y - 10;
            _to_last(sprite_var, zone_up_all);
            return;
        }// end function

        function add_damage_text(param1, param2, param3)
        {
            sprite_var = _sp(damage_mc, zone_up_all, param2.x, param2.y);
            sprite_var.d2.gotoAndStop(param1);
            sprite_var.d2.d_tx.text = param3.toString();
            if (param1 == 1)
            {
                sprite_var.x = sprite_var.x - 30;
            }
            else
            {
                sprite_var.x = sprite_var.x + 30;
            }
            _to_last(sprite_var, zone_up_all);
            return;
        }// end function

        function click_got_cup_f(event:MouseEvent)
        {
            if (_mo(got_cup_cl.play_cl))
            {
                this._app.open_new_screen("playoff");
            }
            return;
        }// end function

        function click_refresh_traning_f(event:MouseEvent)
        {
            i2 = 0;
            while (i2 < arr_aby.length)
            {
                
                if (arr_aby[i2].ex_aby == false)
                {
                    arr_aby[i2].reload_time = arr_aby[i2].reload_time2;
                }
                var _loc_3:* = i2 + 1;
                i2 = _loc_3;
            }
            return;
        }// end function

        function click_exit_traning_f(event:MouseEvent)
        {
            down_panel_cl.train_bt.removeEventListener(MouseEvent.CLICK, this.click_exit_traning_f);
            down_panel_cl.refresh_bt.removeEventListener(MouseEvent.CLICK, this.click_refresh_traning_f);
            this._app.open_new_screen("dress");
            return;
        }// end function

        function click_pause_f(event:MouseEvent)
        {
            if (_mo(pause_cl.resume_bt))
            {
                this.to_play_resume();
            }
            if (_mo(pause_cl.home_bt))
            {
                if (tuto_battle)
                {
                    this._app.open_new_screen("menu");
                }
                else if (this._app.train_mode == false)
                {
                    if (pre_battle_ex == false)
                    {
                        pre_battle_cl = _sp(surrender_battle_mc, zone_tuto, 320, 280);
                        pre_battle_ex = true;
                    }
                }
                else
                {
                    down_panel_cl.train_bt.removeEventListener(MouseEvent.CLICK, this.click_exit_traning_f);
                    down_panel_cl.refresh_bt.removeEventListener(MouseEvent.CLICK, this.click_refresh_traning_f);
                    this._app.open_new_screen("dress");
                }
            }
            if (pre_battle_ex)
            {
                if (_mo(pre_battle_cl.no))
                {
                    zone_tuto.removeChild(pre_battle_cl);
                    pre_battle_ex = false;
                }
                else if (_mo(pre_battle_cl.yes))
                {
                    zone_tuto.removeChild(pre_battle_cl);
                    pre_battle_ex = false;
                    i = 0;
                    while (i < arr_cat.length)
                    {
                        
                        arr_cat[i].skin.x = arr_cat[i].skin.x - 9999;
                        arr_cat[i].remove_hp(10000);
                        arr_cat[i].skin.visible = false;
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                    dead_fox = 0;
                    dead_cat = 4;
                    this.set_tablo();
                    this.to_play_resume();
                }
            }
            return;
        }// end function

        function to_play_resume()
        {
            pause_cl.visible = false;
            stage.removeEventListener(MouseEvent.CLICK, this.click_pause_f);
            this.add_function();
            if (pre_battle_ex)
            {
                zone_tuto.removeChild(pre_battle_cl);
                pre_battle_ex = false;
            }
            i5 = 0;
            while (i5 < arr_cat.length)
            {
                
                if (arr_cat[i5].skin.cat1.currentFrame != 3)
                {
                    arr_cat[i5].skin.cat1.cat2.play();
                }
                var _loc_2:* = i5 + 1;
                i5 = _loc_2;
            }
            i5 = 0;
            while (i5 < arr_fox.length)
            {
                
                if (arr_fox[i5].skin.cat1.currentFrame != 3)
                {
                    arr_fox[i5].skin.cat1.cat2.play();
                }
                var _loc_2:* = i5 + 1;
                i5 = _loc_2;
            }
            return;
        }// end function

        function load_info_to_card(param1, param2)
        {
            param1.gotoAndStop(1);
            param1.cat_cl.visible = true;
            param1.wear_cl.visible = false;
            this.dress_up(param1.cat_cl, 19, _info.got_skin(param2));
            param1.n_tx.text = "";
            param1.bg_cl.gotoAndStop(_info.got_level(param2));
            param1.icon_cl.gotoAndStop(_info.got_type(param2));
            param1.wear_cl.visible = false;
            return;
        }// end function

        function dress_up(param1, param2, param3)
        {
            param1.head_cl.wool_cl.gotoAndStop(param2);
            param1.hand_l_cl.wool_cl.gotoAndStop(param2);
            param1.hand_r_cl.wool_cl.gotoAndStop(param2);
            param1.body_cl.wool_cl.gotoAndStop(param2);
            param1.foot1_cl.wool_cl.gotoAndStop(param2);
            param1.foot2_cl.wool_cl.gotoAndStop(param2);
            param1.tail_cl.gotoAndStop(param2);
            param3 = param3 + 1;
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
            param3 = param3 - 1;
            return;
        }// end function

        function got_des_skill(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return "猫咪打出一个冲击波";
                }
                case 2:
                {
                    return "猫咪使出一记上勾拳.升龙拳!";
                }
                case 3:
                {
                    return "猫咪发出一个大火球波动拳!";
                }
                case 4:
                {
                    return "猫咪回复全队生命值";
                }
                case 5:
                {
                    return "猫咪增加全队成员攻击力50%";
                }
                case 6:
                {
                    return "";
                }
                case 7:
                {
                    return "使全队成员立即进行攻击";
                }
                case 8:
                {
                    return "短时间内阻止敌人使用技能";
                }
                case 9:
                {
                    return "降低敌人攻击力50%";
                }
                case 10:
                {
                    return "攻击晕眩一名敌人";
                }
                case 11:
                {
                    return "远距离将一名敌人定住";
                }
                case 12:
                {
                    return "短时间内无敌";
                }
                case 13:
                {
                    return "短时间内全员无敌";
                }
                case 14:
                {
                    return "猫咪对敌方所有成员造成伤害";
                }
                case 15:
                {
                    return "立即回复所有猫咪技能";
                }
                default:
                {
                    break;
                }
            }
            return;
        }// end function

        function tuto1_f(event:Event)
        {
            rnd_for = 1;
            i = 0;
            while (i < arr_aby.length)
            {
                
                if (arr_aby[i].ex_aby == false)
                {
                    rnd_for = 0;
                    break;
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            if (rnd_for == 1)
            {
                this.stop_game();
                i = 0;
                while (i < arr_cat.length)
                {
                    
                    if (arr_cat[i].skin.cat1.currentFrame != 3)
                    {
                        arr_cat[i].skin.cat1.cat2.stop();
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                i = 0;
                while (i < arr_fox.length)
                {
                    
                    if (arr_fox[i].skin.cat1.currentFrame != 3)
                    {
                        arr_fox[i].skin.cat1.cat2.stop();
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                tuto_cl = _sp(tuto1_mc, zone_tuto, 0, 0);
                removeEventListener(Event.ENTER_FRAME, this.tuto1_f);
                stage.addEventListener(MouseEvent.CLICK, this.tuto_click_f);
            }
            return;
        }// end function

        function tuto_click_f(event:MouseEvent)
        {
            i = 0;
            while (i < arr_aby.length)
            {
                
                if (arr_aby[i].ex_aby)
                {
                    if (_mo(arr_aby[i].skin.icon_cl))
                    {
                        stage.removeEventListener(MouseEvent.CLICK, this.tuto_click_f);
                        zone_tuto.removeChild(tuto_cl);
                        this.to_play_resume();
                        this.launch_aby(i);
                        break;
                    }
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            return;
        }// end function

        function delete_f()
        {
            Main.xray_mode = false;
            removeEventListener(Event.ENTER_FRAME, this.tuto1_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_got_cup_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_back_to_f);
            removeEventListener(Event.ENTER_FRAME, this.end_f);
            removeEventListener(Event.ENTER_FRAME, this.game_f);
            removeEventListener(Event.ENTER_FRAME, this.other_f);
            removeEventListener(Event.ENTER_FRAME, this.grand_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_pause_f);
            removeEventListener(Event.ENTER_FRAME, this.began_f);
            _Buttons_sounds.delete_f();
            return;
        }// end function

        public static function getInstance() : Game
        {
            return _instance == null ? (new Game) : (_instance);
        }// end function

    }
}
