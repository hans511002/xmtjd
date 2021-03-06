﻿package com.code
{
    import flash.display.*;
    import flash.events.*;

    public class Dress extends DataMovieClip
    {
        public var about_cl:MovieClip;
        public var back_bt:SimpleButton;
        public var cat1:cat_drag_mc;
        public var cat2:cat_drag_mc;
        public var cat3:cat_drag_mc;
        public var cat4:cat_drag_mc;
        public var menu_bt_cl:SimpleButton;
        public var panel_cl:MovieClip;
        public var shop_bt:SimpleButton;
        public var shop_cl:MovieClip;
        public var train_bt:SimpleButton;
        public var zone_cards_about:MovieClip;
        public var zone_drag:MovieClip;
        public var zone_tuto:MovieClip;
        var _app:App;
        var _Buttons_sounds:Buttons_sounds;
        var pause_cl:MovieClip;
        var pause_ex:Boolean = false;
        var _info:Aby_info;
        var page:int = 1;
        var sort:int = 1;
        var arr_sort_1:Array;
        var arr_sort_2:Array;
        var arr_sort_3:Array;
        var next_card:int;
        var card_cl:MovieClip;
        var card1_about:MovieClip;
        var card2_about:MovieClip;
        var card3_about:MovieClip;
        var card4_about:MovieClip;
        var drag_mode:Boolean = false;
        var drag_type:int;
        var drag_card_type:int;
        var zoom:Boolean = false;
        var type_wear_already:int;
        var time_over:int = 0;
        var type_time_over:int = 0;
        var none_type:int = 0;
        var arr_temp:Array;
        var arr_temp2:Array;
        var arr_temp3:Array;
        var tuto_cl:MovieClip;

        public function Dress()
        {
            this._app = App.getInstance();
            this.arr_sort_1 = [];
            this.arr_sort_2 = [];
            this.arr_sort_3 = [];
            this.arr_temp = [];
            this.arr_temp2 = [];
            this.arr_temp3 = [];
            return;
        }// end function

        public function init() : void
        {
            if (Main.sav.data.tuto5 == 1)
            {
                Main.sav.data.shop_1 = 1;
            }
            this._app._music.load_music("upg");
            addEventListener(Event.ENTER_FRAME, this.add_f_f);
            this.pause_cl = _sp(pause_mc, this.zone_tuto, 0, 0);
            this._Buttons_sounds = new Buttons_sounds();
            this._Buttons_sounds.x = 294;
            this._Buttons_sounds.y = 182;
            this.pause_cl.addChild(this._Buttons_sounds);
            this.pause_cl.home_bt.gotoAndStop(2);
            this.pause_cl.visible = false;
            this.about_cl.visible = false;
            this._info = new Aby_info();
            i = 1;
            while (i <= 3)
            {
                
                this.panel_cl["radio_" + i].n_tx.text = i.toString();
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            i = 1;
            while (i <= 4)
            {
                
                this["cat" + i].cat1.gotoAndStop(8);
                this["cat" + i].cat1.cat2.gotoAndPlay(_rnd(250) + 2);
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            this.dress_up(this.cat1.cat1.cat2, 1, Main.sav.data.cat_dress_1);
            this.dress_up(this.cat2.cat1.cat2, 2, Main.sav.data.cat_dress_2);
            this.dress_up(this.cat3.cat1.cat2, 3, Main.sav.data.cat_dress_3);
            this.dress_up(this.cat4.cat1.cat2, 4, Main.sav.data.cat_dress_4);
            i2 = 1;
            while (i2 <= 84)
            {
                
                rnd_for = this._info.got_level(i2);
                if (rnd_for == 1)
                {
                    this.arr_sort_1.push(i2);
                }
                else if (rnd_for == 2)
                {
                    this.arr_sort_2.push(i2);
                }
                else
                {
                    this.arr_sort_3.push(i2);
                }
                var _loc_2:* = i2 + 1;
                i2 = _loc_2;
            }
            this.set_sort(1);
            this.set_page(1);
            this.card1_about = _sp(card_mc, this.zone_cards_about, mouseX, mouseY);
            this.load_info_to_card(this.card1_about, 1, 1, 2);
            this.card1_about.visible = false;
            this.card2_about = _sp(card_mc, this.zone_cards_about, mouseX, mouseY);
            this.load_info_to_card(this.card2_about, 1, 1, 2);
            this.card2_about.visible = false;
            this.card3_about = _sp(card_mc, this.zone_cards_about, mouseX, mouseY);
            this.load_info_to_card(this.card3_about, 1, 1, 2);
            this.card3_about.visible = false;
            this.card4_about = _sp(card_mc, this.zone_cards_about, mouseX, mouseY);
            this.load_info_to_card(this.card4_about, 1, 1, 2);
            this.card4_about.visible = false;
            this.card1_about.x = 520;
            this.card1_about.y = 319;
            this.card2_about.x = 415;
            this.card2_about.y = 319;
            this.card3_about.x = 235;
            this.card3_about.y = 319;
            this.card4_about.x = 133;
            this.card4_about.y = 319;
            i2 = 1;
            while (i2 <= 15)
            {
                
                this.about_cl["slot_" + i2].icon_cl.gotoAndStop(i2);
                this.about_cl["slot_" + i2].des_tx.text = this.got_des_skill(i2);
                var _loc_2:* = i2 + 1;
                i2 = _loc_2;
            }
            this.load_shop();
            this.shop_cl.visible = false;
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

        function add_f_f(event:Event)
        {
            removeEventListener(Event.ENTER_FRAME, this.add_f_f);
            if (Main.sav.data.tuto5 == 1)
            {
                Main.sav.data.tuto5 = 2;
                this.remove_gold(-100);
                this.tuto_cl = _sp(tuto21_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto21_click_f);
            }
            else
            {
                this.add_function();
            }
            return;
        }// end function

        function game_f(event:Event)
        {
            if (this.drag_mode)
            {
                this.card_cl.x = mouseX;
                this.card_cl.y = mouseY;
            }
            if (this.zoom == false)
            {
                if (this.about_cl.visible == false && this.shop_cl.visible == false)
                {
                    i = 1;
                    while (i <= 4)
                    {
                        
                        this["card" + i + "_about"].visible = false;
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                    rnd_for = 0;
                    i = 1;
                    while (i <= 4)
                    {
                        
                        this["card" + i + "_about"].visible = false;
                        if (_mo(this["cat" + i].telo))
                        {
                            rnd_for = 1;
                            if (this.none_type != i)
                            {
                                if (this.type_time_over == i)
                                {
                                    var _loc_2:* = this;
                                    var _loc_3:* = this.time_over + 1;
                                    _loc_2.time_over = _loc_3;
                                    if (this.time_over > 2)
                                    {
                                        if (Main.sav.data["cat_dress_" + i] > 0)
                                        {
                                            this["card" + i + "_about"].visible = true;
                                            this.load_info_to_card(this["card" + i + "_about"], Main.sav.data["cat_id_" + i], Main.sav.data["cat_n_" + i], 2);
                                            break;
                                        }
                                    }
                                }
                                else
                                {
                                    this.type_time_over = i;
                                    this.time_over = 0;
                                }
                            }
                        }
                        var _loc_3:* = i + 1;
                        i = _loc_3;
                    }
                    if (rnd_for == 0)
                    {
                        this.time_over = 0;
                        this.none_type = 0;
                    }
                }
            }
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            if (this.about_cl.visible)
            {
                if (_mo(this.about_cl.close_bt))
                {
                    this.about_cl.visible = false;
                    this._app._so.load_by_name(click_so);
                }
            }
            else if (this.shop_cl.visible)
            {
                if (_mo(this.shop_cl.close_bt))
                {
                    this.shop_cl.visible = false;
                    this._app._so.load_by_name(click_so);
                }
                if (_mo(this.shop_cl.zoom_bt))
                {
                    this.zoom = !this.zoom;
                    this._app._so.load_by_name(click_so);
                    if (this.zoom)
                    {
                        this.shop_cl.zoom_bt.gotoAndStop(2);
                    }
                    else
                    {
                        this.shop_cl.zoom_bt.gotoAndStop(1);
                    }
                    this.load_shop();
                }
                i = 1;
                while (i <= 5)
                {
                    
                    if (this.shop_cl["slot_" + i].currentFrame == 1)
                    {
                        if (Main.sav.data["shop_buy_" + i] == 0)
                        {
                            if (_mo(this.shop_cl["slot_" + i].buy_bt))
                            {
                                this._app._so.load_by_name(buy_so);
                                rnd_for = this._info.got_price(Main.sav.data["shop_" + i]);
                                if (Main.sav.data.gold >= rnd_for)
                                {
                                    this.remove_gold(rnd_for);
                                    Main.sav.data["dress_" + Main.sav.data["shop_" + i]] = 1;
                                    Main.sav.data["shop_buy_" + i] = 1;
                                    Main.sav.flush();
                                    this.set_page(this.page);
                                    this.load_shop();
                                    break;
                                }
                            }
                        }
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            else
            {
                i = 1;
                while (i <= 4)
                {
                    
                    if (_mo(this["cat" + i].telo))
                    {
                        Main.sav.data["cat_dress_" + i] = 0;
                        Main.sav.data["cat_aby_" + i] = 0;
                        Main.sav.data["cat_id_" + i] = 0;
                        this.dress_up(this["cat" + i].cat1.cat2, i, Main.sav.data["cat_dress_" + i]);
                        this.set_page(this.page);
                        this._app._so.load_by_name(up_wear_so);
                        this.refresh_about_cats_cards();
                        break;
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                i = 1;
                while (i <= 3)
                {
                    
                    if (_mo(this.panel_cl["radio_" + i]))
                    {
                        this.set_page(i);
                        this._app._so.load_by_name(click_so);
                        break;
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                i = 1;
                while (i <= 3)
                {
                    
                    if (_mo(this.panel_cl["sort_" + i]))
                    {
                        this.page = 1;
                        this._app._so.load_by_name(click_so);
                        this.set_sort(i);
                        break;
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
                if (_mo(this.panel_cl.about_bt))
                {
                    this.about_cl.visible = true;
                }
                if (_mo(this.panel_cl.zoom_bt))
                {
                    this.zoom = !this.zoom;
                    this.set_page(this.page);
                    if (this.zoom)
                    {
                        this.panel_cl.zoom_bt.gotoAndStop(2);
                        i = 1;
                        while (i <= 4)
                        {
                            
                            if (Main.sav.data["cat_dress_" + i] > 0)
                            {
                                this["card" + i + "_about"].visible = true;
                                this.load_info_to_card(this["card" + i + "_about"], Main.sav.data["cat_id_" + i], Main.sav.data["cat_n_" + i], 2);
                            }
                            var _loc_3:* = i + 1;
                            i = _loc_3;
                        }
                    }
                    else
                    {
                        this.panel_cl.zoom_bt.gotoAndStop(1);
                    }
                }
                if (_mo(this.shop_bt))
                {
                    this._app._so.load_by_name(click_so);
                    this.shop_cl.visible = true;
                    this.load_shop();
                }
                if (_mo(this.train_bt))
                {
                    this._app.train_mode = true;
                    this._app._so.load_by_name(click_so);
                    this._app.open_new_screen("game");
                }
                if (_mo(this.menu_bt_cl))
                {
                    this._app._so.load_by_name(click_so);
                    stage.addEventListener(MouseEvent.CLICK, this.click_pause_f);
                    removeEventListener(Event.ENTER_FRAME, this.game_f);
                    stage.removeEventListener(MouseEvent.CLICK, this.click_f);
                    stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.drag_m_down_f);
                    stage.removeEventListener(MouseEvent.MOUSE_UP, this.drag_m_up_f);
                    this.pause_cl.visible = true;
                }
                if (_mo(this.back_bt))
                {
                    this._app._so.load_by_name(click_so);
                    this._app.open_new_screen("upg");
                }
            }
            return;
        }// end function

        function drag_m_down_f(event:MouseEvent)
        {
            if (this.about_cl.visible == false && this.shop_cl.visible == false)
            {
                i = 1;
                while (i <= 14)
                {
                    
                    if (this.panel_cl["card_" + i].visible == true)
                    {
                        if (_mo(this.panel_cl["card_" + i].telo))
                        {
                            if (this.panel_cl["card_" + i].currentFrame != 3)
                            {
                                if (this.panel_cl["card_" + i].wear_cl.visible == false)
                                {
                                    this.card_cl = _sp(card_mc, this.zone_drag, mouseX, mouseY);
                                    this.drag_mode = true;
                                    this.drag_type = i;
                                    this.drag_card_type = (i - 1) + 14 * this.page - 14;
                                    this.panel_cl["card_" + i].visible = false;
                                    this.load_info_to_card(this.card_cl, this["arr_sort_" + this.sort][this.drag_card_type], this.drag_card_type, 1);
                                    break;
                                }
                            }
                        }
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
            }
            return;
        }// end function

        function drag_m_up_f(event:MouseEvent)
        {
            if (this.drag_mode)
            {
                this.panel_cl["card_" + this.drag_type].visible = true;
                this.drag_mode = false;
                this.zone_drag.removeChild(this.card_cl);
                i = 1;
                while (i <= 4)
                {
                    
                    if (_mo(this["cat" + i].telo))
                    {
                        Main.sav.data["cat_dress_" + i] = this._info.got_skin(this["arr_sort_" + this.sort][this.drag_card_type]);
                        Main.sav.data["cat_aby_" + i] = this["arr_sort_" + this.sort][this.drag_card_type];
                        Main.sav.data["cat_id_" + i] = this["arr_sort_" + this.sort][this.drag_card_type];
                        Main.sav.data["cat_n_" + i] = this.drag_card_type;
                        this.dress_up(this["cat" + i].cat1.cat2, i, Main.sav.data["cat_dress_" + i]);
                        this.none_type = i;
                        this.set_page(this.page);
                        this._app._so.load_by_name(wear_so);
                        this.refresh_about_cats_cards();
                        break;
                    }
                    var _loc_3:* = i + 1;
                    i = _loc_3;
                }
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

        function refresh_about_cats_cards()
        {
            i5 = 1;
            while (i5 <= 4)
            {
                
                if (Main.sav.data["cat_dress_" + i5] > 0)
                {
                    this["card" + i5 + "_about"].visible = true;
                    this.load_info_to_card(this["card" + i5 + "_about"], Main.sav.data["cat_id_" + i5], Main.sav.data["cat_n_" + i5], 2);
                }
                else
                {
                    this["card" + i5 + "_about"].visible = false;
                }
                var _loc_2:* = i5 + 1;
                i5 = _loc_2;
            }
            return;
        }// end function

        function load_info_to_card(param1, param2, param3, param4)
        {
            if (this.zoom || param4 == 2)
            {
                param1.gotoAndStop(2);
                param1.cat_cl.visible = false;
                param1.des_tx.text = this._info.got_des(param2);
                param1.title_tx.text = this._info.got_title(param2);
            }
            else
            {
                param1.gotoAndStop(1);
                param1.cat_cl.visible = true;
            }
            temp_type = this._info.got_type(param2);
            if (this.ch_wear(param2) == 0)
            {
                param1.wear_cl.visible = false;
            }
            else
            {
                param1.wear_cl.visible = true;
                param1.wear_cl.cat2.gotoAndStop(this.type_wear_already);
                param1.cat_cl.visible = false;
            }
            param1.icon_cl.gotoAndStop(temp_type);
            this.dress_up(param1.cat_cl, 19, this._info.got_skin(param2));
            param1.n_tx.text = ((param3 + 1)).toString();
            param1.bg_cl.gotoAndStop(this._info.got_level(param2));
            if (param4 == 2)
            {
                param1.wear_cl.visible = false;
            }
            return;
        }// end function

        function ch_wear(param1)
        {
            i5 = 1;
            while (i5 <= 4)
            {
                
                if (Main.sav.data["cat_id_" + i5] == param1)
                {
                    this.type_wear_already = i5;
                    return 1;
                }
                var _loc_3:* = i5 + 1;
                i5 = _loc_3;
            }
            return 0;
        }// end function

        function set_sort(param1)
        {
            this.panel_cl.radio_1.none_page_cl.visible = false;
            this.panel_cl.radio_2.none_page_cl.visible = false;
            this.sort = param1;
            if (this.sort == 3)
            {
                this.panel_cl.radio_3.none_page_cl.visible = true;
            }
            else
            {
                this.panel_cl.radio_3.none_page_cl.visible = false;
            }
            this.set_page(this.page);
            return;
        }// end function

        function set_page(param1)
        {
            if (this["arr_sort_" + this.sort].length <= param1 * 14 - 14)
            {
                return;
            }
            i2 = 1;
            while (i2 <= 3)
            {
                
                this.panel_cl["radio_" + i2].gotoAndStop(1);
                var _loc_3:* = i2 + 1;
                i2 = _loc_3;
            }
            this.page = param1;
            this.panel_cl["radio_" + this.page].gotoAndStop(2);
            i2 = 1;
            while (i2 <= 14)
            {
                
                this.panel_cl["card_" + i2].visible = false;
                var _loc_3:* = i2 + 1;
                i2 = _loc_3;
            }
            this.next_card = 1;
            i2 = 0 + 14 * this.page - 14;
            while (i2 < this["arr_sort_" + this.sort].length)
            {
                
                this.panel_cl["card_" + this.next_card].visible = true;
                if (Main.sav.data["dress_" + this["arr_sort_" + this.sort][i2]] == 1)
                {
                    this.load_info_to_card(this.panel_cl["card_" + this.next_card], this["arr_sort_" + this.sort][i2], i2, 1);
                }
                else
                {
                    this.panel_cl["card_" + this.next_card].gotoAndStop(3);
                    this.panel_cl["card_" + this.next_card].over_cl.gotoAndStop(this.sort);
                }
                var _loc_2:* = this;
                var _loc_3:* = this.next_card + 1;
                _loc_2.next_card = _loc_3;
                if (this.next_card <= 14)
                {
                    var _loc_3:* = i2 + 1;
                    i2 = _loc_3;
                }
            }
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

        function load_shop()
        {
            this.remove_gold(0);
            this.shop_cl.des_tx.text = this.load_des_hi();
            if (this.zoom)
            {
                this.shop_cl.zoom_bt.gotoAndStop(2);
            }
            else
            {
                this.shop_cl.zoom_bt.gotoAndStop(1);
            }
            i4 = 1;
            while (i4 <= 5)
            {
                
                if (Main.sav.data["shop_" + i4] == 0)
                {
                    this.shop_cl["slot_" + i4].gotoAndStop(2);
                }
                else
                {
                    this.shop_cl["slot_" + i4].gotoAndStop(1);
                    if (Main.sav.data["shop_buy_" + i4] == 1)
                    {
                        this.shop_cl["slot_" + i4].sold_cl.visible = true;
                    }
                    else
                    {
                        this.shop_cl["slot_" + i4].sold_cl.visible = false;
                    }
                    this.shop_cl["slot_" + i4].price_tx.text = this._info.got_price(Main.sav.data["shop_" + i4]);
                    rnd_for3 = this._info.got_level(Main.sav.data["shop_" + i4]);
                    i2 = 0;
                    while (i2 < this["arr_sort_" + rnd_for3].length)
                    {
                        
                        if (this["arr_sort_" + rnd_for3][i2] == Main.sav.data["shop_" + i4])
                        {
                            rnd_for4 = i2;
                            break;
                        }
                        var _loc_2:* = i2 + 1;
                        i2 = _loc_2;
                    }
                    this.load_info_to_card(this.shop_cl["slot_" + i4].card_cl, Main.sav.data["shop_" + i4], rnd_for4, 1);
                    this.shop_cl["slot_" + i4].card_cl.wear_cl.visible = false;
                    this.shop_cl["slot_" + i4].card_cl.bg_cl.gotoAndStop(rnd_for3);
                    if (Main.sav.data.gold >= this._info.got_price(Main.sav.data["shop_" + i4]))
                    {
                        this.shop_cl["slot_" + i4].buy_bt.gotoAndStop(1);
                    }
                    else
                    {
                        this.shop_cl["slot_" + i4].buy_bt.gotoAndStop(2);
                    }
                }
                var _loc_2:* = i4 + 1;
                i4 = _loc_2;
            }
            return;
        }// end function

        function load_des_hi()
        {
            switch(Main.sav.data.week_hi)
            {
                case 1:
                {
                    return "最近如何? 本周我准备了一些服饰.";
                }
                case 2:
                {
                    return "嘿! 是时候升级衣橱了!";
                }
                case 3:
                {
                    return "你好! 本周我为你准备了一些特别的东西";
                }
                case 4:
                {
                    return "都是些热门的收集品.快打开钱包!";
                }
                case 5:
                {
                    return "你好.欢迎光临我的小店.";
                }
                case 6:
                {
                    return "欢迎! 这周我又新进了一些好货.";
                }
                case 7:
                {
                    return "不要错过那些独特的服装, 仅限本周!";
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
            this.shop_cl.money_tx.text = Main.sav.data.gold;
            return;
        }// end function

        function tuto21_click_f(event:MouseEvent)
        {
            if (_mo(this.shop_bt))
            {
                this.shop_cl.visible = true;
                this.load_shop();
                this._app._so.load_by_name(click_so);
                this.zone_tuto.removeChild(this.tuto_cl);
                stage.removeEventListener(MouseEvent.CLICK, this.tuto21_click_f);
                this.tuto_cl = _sp(tuto22_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto22_click_f);
            }
            return;
        }// end function

        function tuto22_click_f(event:MouseEvent)
        {
            i = 1;
            while (i <= 1)
            {
                
                if (this.shop_cl["slot_" + i].currentFrame == 1)
                {
                    if (Main.sav.data["shop_buy_" + i] == 0)
                    {
                        if (_mo(this.shop_cl["slot_" + i].buy_bt))
                        {
                            rnd_for = this._info.got_price(Main.sav.data["shop_" + i]);
                            if (Main.sav.data.gold >= rnd_for)
                            {
                                this._app._so.load_by_name(buy_so);
                                this.remove_gold(rnd_for);
                                Main.sav.data["dress_" + Main.sav.data["shop_" + i]] = 1;
                                Main.sav.data["shop_buy_" + i] = 1;
                                Main.sav.flush();
                                this.set_page(this.page);
                                this.load_shop();
                                this.zone_tuto.removeChild(this.tuto_cl);
                                stage.removeEventListener(MouseEvent.CLICK, this.tuto22_click_f);
                                this.tuto_cl = _sp(tuto23_mc, this.zone_tuto, 0, 0);
                                stage.addEventListener(MouseEvent.CLICK, this.tuto23_click_f);
                                break;
                            }
                        }
                    }
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            return;
        }// end function

        function tuto23_click_f(event:MouseEvent)
        {
            if (_mo(this.shop_cl.close_bt))
            {
                this.shop_cl.visible = false;
                this._app._so.load_by_name(click_so);
                this.zone_tuto.removeChild(this.tuto_cl);
                stage.removeEventListener(MouseEvent.CLICK, this.tuto23_click_f);
                this.tuto_cl = _sp(tuto15_mc, this.zone_tuto, 0, 0);
                stage.addEventListener(MouseEvent.CLICK, this.tuto15_click_f);
            }
            return;
        }// end function

        function tuto15_click_f(event:MouseEvent)
        {
            if (_mo(this.tuto_cl.ok_bt))
            {
                this._app._so.load_by_name(click_so);
                stage.removeEventListener(MouseEvent.CLICK, this.tuto15_click_f);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = _sp(tuto16_mc, this.zone_tuto, 0, 0);
                addEventListener(Event.ENTER_FRAME, this.tuto16_f);
                stage.addEventListener(MouseEvent.MOUSE_DOWN, this.drag_m_down_f);
                stage.addEventListener(MouseEvent.MOUSE_UP, this.drag_m_up_f);
            }
            return;
        }// end function

        function tuto16_f(event:Event)
        {
            if (this.drag_mode)
            {
                this.card_cl.x = mouseX;
                this.card_cl.y = mouseY;
            }
            i = 1;
            while (i <= 4)
            {
                
                if (Main.sav.data["cat_dress_" + i] > 0)
                {
                    removeEventListener(Event.ENTER_FRAME, this.tuto16_f);
                    this.zone_tuto.removeChild(this.tuto_cl);
                    this.card1_about.visible = false;
                    this.card2_about.visible = false;
                    this.card3_about.visible = false;
                    this.card4_about.visible = false;
                    this.tuto_cl = _sp(tuto24_mc, this.zone_tuto, 0, 0);
                    stage.addEventListener(MouseEvent.CLICK, this.tuto24_click_f);
                    break;
                }
                var _loc_3:* = i + 1;
                i = _loc_3;
            }
            return;
        }// end function

        function tuto24_click_f(event:MouseEvent)
        {
            if (_mo(this.back_bt))
            {
                stage.removeEventListener(MouseEvent.CLICK, this.tuto24_click_f);
                this._app._so.load_by_name(click_so);
                this._app.open_new_screen("upg");
            }
            return;
        }// end function

        function delete_f()
        {
            stage.removeEventListener(MouseEvent.CLICK, this.tuto21_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto22_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto23_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto15_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.tuto24_click_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_f);
            removeEventListener(Event.ENTER_FRAME, this.tuto16_f);
            removeEventListener(Event.ENTER_FRAME, this.add_f_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_pause_f);
            removeEventListener(Event.ENTER_FRAME, this.game_f);
            stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.drag_m_down_f);
            stage.removeEventListener(MouseEvent.MOUSE_UP, this.drag_m_up_f);
            this._Buttons_sounds.delete_f();
            return;
        }// end function

    }
}
