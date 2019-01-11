module com.code {
    export class Dress extends DataMovieClip {
        public about_cl: std.MovieClip = null;
        public back_bt: std.MCButton = null;
        public cat1: cat_drag_mc = null;
        public cat2: cat_drag_mc = null;
        public cat3: cat_drag_mc = null;
        public cat4: cat_drag_mc = null;
        public menu_bt_cl: std.MCButton = null;
        public panel_cl: std.MovieClip = null;
        public shop_bt: std.MCButton = null;
        public shop_cl: std.MovieClip = null;
        public train_bt: std.MCButton = null;
        public zone_cards_about: std.MovieClip = null;
        public zone_drag: std.MovieClip = null;
        public zone_tuto: std.MovieClip = null;
        _app: App = null;
        _Buttons_sounds: Buttons_sounds = null;
        pause_cl: pause_mc = null;
        pause_ex: boolean = false;
        _info: Aby_info = null;
        page: number = 1;
        sort: number = 1;
        arr_sort_1: any = [];
        arr_sort_2: any = [];
        arr_sort_3: any = [];
        next_card: number = 0;
        card_cl: std.MovieClip = null;
        card1_about: std.MovieClip = null;
        card2_about: std.MovieClip = null;
        card3_about: std.MovieClip = null;
        card4_about: std.MovieClip = null;
        drag_mode: boolean = false;
        drag_type: number = 0;
        drag_card_type: number = 0;
        zoom: boolean = false;
        type_wear_already: number = 0;
        time_over: number = 0;
        type_time_over: number = 0;
        none_type: number = 0;
        arr_temp: any = [];
        arr_temp2: any = [];
        arr_temp3: any = [];
        tuto_cl: std.MovieClip = null;
        public constructor() {
            super();
            this._app = App.getInstance();
            this.arr_sort_1 = [];
            this.arr_sort_2 = [];
            this.arr_sort_3 = [];
            this.arr_temp = [];
            this.arr_temp2 = [];
            this.arr_temp3 = [];
        }
        public init(): void {
            if (Main.sav.data.tuto5 == 1) {
                Main.sav.data.shop_1 = 1;
            }
            this._app._music.load_music("upg");
            this.addEventListener(egret.Event.ENTER_FRAME, this.add_f_f, this);
            this.pause_cl = this._sp(pause_mc, this.zone_tuto, 0, 0);
            this._Buttons_sounds = new Buttons_sounds();
            this._Buttons_sounds.$setX(294);
            this._Buttons_sounds.$setY(182);
            this.pause_cl.addChild(this._Buttons_sounds);
            this.pause_cl.home_bt.gotoAndStop(2);
            this.pause_cl.$setVisible(false);
            this.about_cl.$setVisible(false);
            this._info = new Aby_info();
            this.i = 1;
            while (this.i <= 3) {
                this.panel_cl["radio_" + this.i].n_tx.text = this.i.toString();
                this.i++;
            }
            this.i = 1;
            while (this.i <= 4) {
                this["cat" + this.i].cat1.gotoAndStop(8);
                this["cat" + this.i].cat1.cat2.gotoAndPlay(std._rnd(250) + 2);
                this.i++;
            }
            this.dress_up(this.cat1.cat1Cat2, 1, Main.sav.data.cat_dress_1);
            this.dress_up(this.cat2.cat1Cat2, 2, Main.sav.data.cat_dress_2);
            this.dress_up(this.cat3.cat1Cat2, 3, Main.sav.data.cat_dress_3);
            this.dress_up(this.cat4.cat1Cat2, 4, Main.sav.data.cat_dress_4);
            this.i2 = 1;
            while (this.i2 <= 84) {
                this.rnd_for = this._info.got_level(this.i2);
                if (this.rnd_for == 1) {
                    this.arr_sort_1.push(this.i2);
                }
                else if (this.rnd_for == 2) {
                    this.arr_sort_2.push(this.i2);
                }
                else {
                    this.arr_sort_3.push(this.i2);
                }
                this.i2++;
            }
            this.set_sort(1);
            this.set_page(1);
            this.card1_about = this._sp(card_mc, this.zone_cards_about, Main.mouseX, Main.mouseY);
            this.load_info_to_card(this.card1_about, 1, 1, 2);
            this.card1_about.$setVisible(false);
            this.card2_about = this._sp(card_mc, this.zone_cards_about, Main.mouseX, Main.mouseY);
            this.load_info_to_card(this.card2_about, 1, 1, 2);
            this.card2_about.$setVisible(false);
            this.card3_about = this._sp(card_mc, this.zone_cards_about, Main.mouseX, Main.mouseY);
            this.load_info_to_card(this.card3_about, 1, 1, 2);
            this.card3_about.$setVisible(false);
            this.card4_about = this._sp(card_mc, this.zone_cards_about, Main.mouseX, Main.mouseY);
            this.load_info_to_card(this.card4_about, 1, 1, 2);
            this.card4_about.$setVisible(false);
            this.card1_about.$setX(520);
            this.card1_about.$setY(319);
            this.card2_about.$setX(415);
            this.card2_about.$setY(319);
            this.card3_about.$setX(235);
            this.card3_about.$setY(319);
            this.card4_about.$setX(133);
            this.card4_about.$setY(319);
            this.i2 = 1;
            while (this.i2 <= 15) {
                this.about_cl["slot_" + this.i2].icon_cl.gotoAndStop(this.i2);
                this.about_cl["slot_" + this.i2].des_tx.text = this.got_des_skill(this.i2);
                this.i2++;
            }
            this.load_shop();
            this.shop_cl.$setVisible(false);
        }
        public add_function(): any {
            this.addEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.drag_m_down_f, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.drag_m_up_f, this);
        }
        public add_f_f(param1: egret.Event): any {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.add_f_f, this);
            if (Main.sav.data.tuto5 == 1) {
                Main.sav.data.tuto5 = 2;
                this.remove_gold(-100);
                this.tuto_cl = this._sp(tuto21_mc, this.zone_tuto, 0, 0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto21_click_f, this);
            }
            else {
                this.add_function();
            }
        }
        public game_f(param1: egret.Event): any {
            if (this.drag_mode) {
                this.card_cl.$setX(Main.mouseX);
                this.card_cl.$setY(Main.mouseY);
            }
            if (this.zoom == false) {
                if (this.about_cl.visible == false && this.shop_cl.visible == false) {
                    this.i = 1;
                    while (this.i <= 4) {
                        this["card" + this.i + "_about"].$setVisible(false);
                        this.i++;
                    }
                    this.rnd_for = 0;
                    this.i = 1;
                    while (this.i <= 4) {
                        this["card" + this.i + "_about"].$setVisible(false);
                        if (this._mo(this["cat" + this.i].telo)) {
                            this.rnd_for = 1;
                            if (this.none_type != this.i) {
                                if (this.type_time_over == this.i) {
                                    this.time_over++;
                                    if (this.time_over > 2) {
                                        if (Main.sav.data["cat_dress_" + this.i] > 0) {
                                            this["card" + this.i + "_about"].$setVisible(true);
                                            this.load_info_to_card(this["card" + this.i + "_about"], Main.sav.data["cat_id_" + this.i], Main.sav.data["cat_n_" + this.i], 2);
                                            break;
                                        }
                                    }
                                }
                                else {
                                    this.type_time_over = this.i;
                                    this.time_over = 0;
                                }
                            }
                        }
                        this.i++;
                    }
                    if (this.rnd_for == 0) {
                        this.time_over = 0;
                        this.none_type = 0;
                    }
                }
            }
        }
        public click_f(param1: egret.TouchEvent): any {
            if (this.about_cl.visible) {
                if (this._mo(this.about_cl.close_bt)) {
                    this.about_cl.$setVisible(false);
                    this._app._so.load_by_name(click_so);
                }
            }
            else if (this.shop_cl.visible) {
                if (this._mo(this.shop_cl.close_bt)) {
                    this.shop_cl.$setVisible(false);
                    this._app._so.load_by_name(click_so);
                }
                if (this._mo(this.shop_cl.zoom_bt)) {
                    this.zoom = !this.zoom;
                    this._app._so.load_by_name(click_so);
                    if (this.zoom) {
                        this.shop_cl.zoom_bt.gotoAndStop(2);
                    }
                    else {
                        this.shop_cl.zoom_bt.gotoAndStop(1);
                    }
                    this.load_shop();
                }
                this.i = 1;
                while (this.i <= 5) {
                    if (this.shop_cl["slot_" + this.i].currentFrame == 1) {
                        if (Main.sav.data["shop_buy_" + this.i] == 0) {
                            if (this._mo(this.shop_cl["slot_" + this.i].buy_bt)) {
                                this._app._so.load_by_name(buy_so);
                                this.rnd_for = this._info.got_price(Main.sav.data["shop_" + this.i]);
                                if (Main.sav.data.gold >= this.rnd_for) {
                                    this.remove_gold(this.rnd_for);
                                    Main.sav.data["dress_" + Main.sav.data["shop_" + this.i]] = 1;
                                    Main.sav.data["shop_buy_" + this.i] = 1;
                                    Main.sav.flush();
                                    this.set_page(this.page);
                                    this.load_shop();
                                    break;
                                }
                            }
                        }
                    }
                    this.i++;
                }
            }
            else {
                this.i = 1;
                while (this.i <= 4) {
                    if (this._mo(this["cat" + this.i].telo)) {
                        Main.sav.data["cat_dress_" + this.i] = 0;
                        Main.sav.data["cat_aby_" + this.i] = 0;
                        Main.sav.data["cat_id_" + this.i] = 0;
                        this.dress_up(this["cat" + this.i].cat1.cat2, this.i, Main.sav.data["cat_dress_" + this.i]);
                        this.set_page(this.page);
                        this._app._so.load_by_name(up_wear_so);
                        this.refresh_about_cats_cards();
                        break;
                    }
                    this.i++;
                }
                this.i = 1;
                while (this.i <= 3) {
                    if (this._mo(this.panel_cl["radio_" + this.i])) {
                        this.set_page(this.i);
                        this._app._so.load_by_name(click_so);
                        break;
                    }
                    this.i++;
                }
                this.i = 1;
                while (this.i <= 3) {
                    if (this._mo(this.panel_cl["sort_" + this.i])) {
                        this.page = 1;
                        this._app._so.load_by_name(click_so);
                        this.set_sort(this.i);
                        break;
                    }
                    this.i++;
                }
                if (this._mo(this.panel_cl.about_bt)) {
                    this.about_cl.$setVisible(true);
                }
                if (this._mo(this.panel_cl.zoom_bt)) {
                    this.zoom = !this.zoom;
                    this.set_page(this.page);
                    if (this.zoom) {
                        this.panel_cl.zoom_bt.gotoAndStop(2);
                        this.i = 1;
                        while (this.i <= 4) {
                            if (Main.sav.data["cat_dress_" + this.i] > 0) {
                                this["card" + this.i + "_about"].$setVisible(true);
                                this.load_info_to_card(this["card" + this.i + "_about"], Main.sav.data["cat_id_" + this.i], Main.sav.data["cat_n_" + this.i], 2);
                            }
                            this.i++;
                        }
                    }
                    else {
                        this.panel_cl.zoom_bt.gotoAndStop(1);
                    }
                }
                if (this._mo(this.shop_bt)) {
                    this._app._so.load_by_name(click_so);
                    this.shop_cl.$setVisible(true);
                    this.load_shop();
                }
                if (this._mo(this.train_bt)) {
                    this._app.train_mode = true;
                    this._app._so.load_by_name(click_so);
                    this._app.open_new_screen("game");
                }
                if (this._mo(this.menu_bt_cl)) {
                    this._app._so.load_by_name(click_so);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_pause_f, this);
                    this.removeEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.drag_m_down_f, this);
                    this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.drag_m_up_f, this);
                    this.pause_cl.$setVisible(true);
                }
                if (this._mo(this.back_bt)) {
                    this._app._so.load_by_name(click_so);
                    this._app.open_new_screen("upg");
                }
            }
        }
        public drag_m_down_f(param1: egret.TouchEvent): any {
            if (this.about_cl.visible == false && this.shop_cl.visible == false) {
                this.i = 1;
                while (this.i <= 14) {
                    if (this.panel_cl["card_" + this.i].visible == true) {
                        if (this._mo(this.panel_cl["card_" + this.i].telo)) {
                            if (this.panel_cl["card_" + this.i].currentFrame != 3) {
                                if (this.panel_cl["card_" + this.i].wear_cl.visible == false) {
                                    this.card_cl = this._sp(card_mc, this.zone_drag, Main.mouseX, Main.mouseY);
                                    this.drag_mode = true;
                                    this.drag_type = this.i;
                                    this.drag_card_type = this.i - 1 + 14 * this.page - 14;
                                    this.panel_cl["card_" + this.i].$setVisible(false);
                                    this.load_info_to_card(this.card_cl, this["arr_sort_" + this.sort][this.drag_card_type], this.drag_card_type, 1);
                                    break;
                                }
                            }
                        }
                    }
                    this.i++;
                }
            }
        }
        public drag_m_up_f(param1: egret.TouchEvent): any {
            if (this.drag_mode) {
                this.panel_cl["card_" + this.drag_type].$setVisible(true);
                this.drag_mode = false;
                this.zone_drag.removeChild(this.card_cl);
                this.i = 1;
                while (this.i <= 4) {
                    if (this._mo(this["cat" + this.i].telo)) {
                        Main.sav.data["cat_dress_" + this.i] = this._info.got_skin(this["arr_sort_" + this.sort][this.drag_card_type]);
                        Main.sav.data["cat_aby_" + this.i] = this["arr_sort_" + this.sort][this.drag_card_type];
                        Main.sav.data["cat_id_" + this.i] = this["arr_sort_" + this.sort][this.drag_card_type];
                        Main.sav.data["cat_n_" + this.i] = this.drag_card_type;
                        this.dress_up(this["cat" + this.i].cat1.cat2, this.i, Main.sav.data["cat_dress_" + this.i]);
                        this.none_type = this.i;
                        this.set_page(this.page);
                        this._app._so.load_by_name(wear_so);
                        this.refresh_about_cats_cards();
                        break;
                    }
                    this.i++;
                }
            }
        }
        public click_pause_f(param1: egret.TouchEvent): any {
            if (this._mo(this.pause_cl.resume_bt)) {
                this.pause_cl.$setVisible(false);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_pause_f, this);
                this.add_function();
            }
            if (this._mo(this.pause_cl.home_bt)) {
                this._app.open_new_screen("menu");
            }
        }
        public refresh_about_cats_cards(): any {
            this.i5 = 1;
            while (this.i5 <= 4) {
                if (Main.sav.data["cat_dress_" + this.i5] > 0) {
                    this["card" + this.i5 + "_about"].$setVisible(true);
                    this.load_info_to_card(this["card" + this.i5 + "_about"], Main.sav.data["cat_id_" + this.i5], Main.sav.data["cat_n_" + this.i5], 2);
                }
                else {
                    this["card" + this.i5 + "_about"].$setVisible(false);
                }
                this.i5++;
            }
        }
        public load_info_to_card(param1: any, param2: any, param3: any, param4: any): any {
            if (this.zoom || param4 == 2) {
                param1.gotoAndStop(2);
                param1.cat_cl.$setVisible(false);
                param1.des_tx.text = this._info.got_des(param2);
                param1.title_tx.text = this._info.got_title(param2);
            }
            else {
                param1.gotoAndStop(1);
                param1.cat_cl.$setVisible(true);
            }
            this.temp_type = this._info.got_type(param2);
            if (this.ch_wear(param2) == 0) {
                param1.wear_cl.$setVisible(false);
            }
            else {
                param1.wear_cl.$setVisible(true);
                param1.wear_clCat2.gotoAndStop(this.type_wear_already);
                param1.cat_cl.$setVisible(false);
            }
            param1.icon_cl.gotoAndStop(this.temp_type);
            this.dress_up(param1.cat_cl, 19, this._info.got_skin(param2));
            param1.n_tx.text = (param3 + 1).toString();
            param1.bg_cl.gotoAndStop(this._info.got_level(param2));
            if (param4 == 2) {
                param1.wear_cl.$setVisible(false);
            }
        }
        public ch_wear(param1: any): any {
            this.i5 = 1;
            while (this.i5 <= 4) {
                if (Main.sav.data["cat_id_" + this.i5] == param1) {
                    this.type_wear_already = this.i5;
                    return 1;
                }
                this.i5++;
            }
            return 0;
        }
        public set_sort(param1: any): any {
            this.panel_cl.radio_1.none_page_cl.$setVisible(false);
            this.panel_cl.radio_2.none_page_cl.$setVisible(false);
            this.sort = param1;
            if (this.sort == 3) {
                this.panel_cl.radio_3.none_page_cl.$setVisible(true);
            }
            else {
                this.panel_cl.radio_3.none_page_cl.$setVisible(false);
            }
            this.set_page(this.page);
        }
        public set_page(param1: any): any {
            if (this["arr_sort_" + this.sort].length <= param1 * 14 - 14) {
                return;
            }
            this.i2 = 1;
            while (this.i2 <= 3) {
                this.panel_cl["radio_" + this.i2].gotoAndStop(1);
                this.i2++;
            }
            this.page = param1;
            this.panel_cl["radio_" + this.page].gotoAndStop(2);
            this.i2 = 1;
            while (this.i2 <= 14) {
                this.panel_cl["card_" + this.i2].$setVisible(false);
                this.i2++;
            }
            this.next_card = 1;
            this.i2 = 0 + 14 * this.page - 14;
            while (this.i2 < this["arr_sort_" + this.sort].length) {
                this.panel_cl["card_" + this.next_card].$setVisible(true);
                if (Main.sav.data["dress_" + this["arr_sort_" + this.sort][this.i2]] == 1) {
                    this.load_info_to_card(this.panel_cl["card_" + this.next_card], this["arr_sort_" + this.sort][this.i2], this.i2, 1);
                }
                else {
                    this.panel_cl["card_" + this.next_card].gotoAndStop(3);
                    this.panel_cl["card_" + this.next_card].over_cl.gotoAndStop(this.sort);
                }
                this.next_card++;
                if (this.next_card <= 14) {
                    this.i2++;
                    continue;
                }
                break;
            }
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
        public load_shop(): any {
            this.remove_gold(0);
            this.shop_cl.des_tx.text = this.load_des_hi();
            if (this.zoom) {
                this.shop_cl.zoom_bt.gotoAndStop(2);
            }
            else {
                this.shop_cl.zoom_bt.gotoAndStop(1);
            }
            this.i4 = 1;
            while (this.i4 <= 5) {
                if (Main.sav.data["shop_" + this.i4] == 0) {
                    this.shop_cl["slot_" + this.i4].gotoAndStop(2);
                }
                else {
                    this.shop_cl["slot_" + this.i4].gotoAndStop(1);
                    if (Main.sav.data["shop_buy_" + this.i4] == 1) {
                        this.shop_cl["slot_" + this.i4].sold_cl.$setVisible(true);
                    }
                    else {
                        this.shop_cl["slot_" + this.i4].sold_cl.$setVisible(false);
                    }
                    this.shop_cl["slot_" + this.i4].price_tx.text = this._info.got_price(Main.sav.data["shop_" + this.i4]);
                    this.rnd_for3 = this._info.got_level(Main.sav.data["shop_" + this.i4]);
                    this.i2 = 0;
                    while (this.i2 < this["arr_sort_" + this.rnd_for3].length) {
                        if (this["arr_sort_" + this.rnd_for3][this.i2] == Main.sav.data["shop_" + this.i4]) {
                            this.rnd_for4 = this.i2;
                            break;
                        }
                        this.i2++;
                    }
                    this.load_info_to_card(this.shop_cl["slot_" + this.i4].card_cl, Main.sav.data["shop_" + this.i4], this.rnd_for4, 1);
                    this.shop_cl["slot_" + this.i4].card_cl.wear_cl.$setVisible(false);
                    this.shop_cl["slot_" + this.i4].card_cl.bg_cl.gotoAndStop(this.rnd_for3);
                    if (Main.sav.data.gold >= this._info.got_price(Main.sav.data["shop_" + this.i4])) {
                        this.shop_cl["slot_" + this.i4].buy_bt.gotoAndStop(1);
                    }
                    else {
                        this.shop_cl["slot_" + this.i4].buy_bt.gotoAndStop(2);
                    }
                }
                this.i4++;
            }
        }
        public load_des_hi(): any {
            switch (Main.sav.data.week_hi) {
                case 1:
                    return "最近如何? 本周我准备了一些服饰.";
                case 2:
                    return "嘿! 是时候升级衣橱了!";
                case 3:
                    return "你好! 本周我为你准备了一些特别的东西";
                case 4:
                    return "都是些热门的收集品.快打开钱包!";
                case 5:
                    return "你好.欢迎光临我的小店.";
                case 6:
                    return "欢迎! 这周我又新进了一些好货.";
                case 7:
                    return "不要错过那些独特的服装, 仅限本周!";
                default:
                    return;
            }
        }
        public remove_gold(param1: any): any {
            Main.sav.data.gold = Main.sav.data.gold - param1;
            this.shop_cl.money_tx.text = Main.sav.data.gold;
        }
        public tuto21_click_f(param1: egret.TouchEvent): any {
            if (this._mo(this.shop_bt)) {
                this.shop_cl.$setVisible(true);
                this.load_shop();
                this._app._so.load_by_name(click_so);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto21_click_f, this);
                this.tuto_cl = this._sp(tuto22_mc, this.zone_tuto, 0, 0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto22_click_f, this);
            }
        }
        public tuto22_click_f(param1: egret.TouchEvent): any {
            this.i = 1;
            while (this.i <= 1) {
                if (this.shop_cl["slot_" + this.i].currentFrame == 1) {
                    if (Main.sav.data["shop_buy_" + this.i] == 0) {
                        if (this._mo(this.shop_cl["slot_" + this.i].buy_bt)) {
                            this.rnd_for = this._info.got_price(Main.sav.data["shop_" + this.i]);
                            if (Main.sav.data.gold >= this.rnd_for) {
                                this._app._so.load_by_name(buy_so);
                                this.remove_gold(this.rnd_for);
                                Main.sav.data["dress_" + Main.sav.data["shop_" + this.i]] = 1;
                                Main.sav.data["shop_buy_" + this.i] = 1;
                                Main.sav.flush();
                                this.set_page(this.page);
                                this.load_shop();
                                this.zone_tuto.removeChild(this.tuto_cl);
                                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto22_click_f, this);
                                this.tuto_cl = this._sp(tuto23_mc, this.zone_tuto, 0, 0);
                                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto23_click_f, this);
                                break;
                            }
                        }
                    }
                }
                this.i++;
            }
        }
        public tuto23_click_f(param1: egret.TouchEvent): any {
            if (this._mo(this.shop_cl.close_bt)) {
                this.shop_cl.$setVisible(false);
                this._app._so.load_by_name(click_so);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto23_click_f, this);
                this.tuto_cl = this._sp(tuto15_mc, this.zone_tuto, 0, 0);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto15_click_f, this);
            }
        }
        public tuto15_click_f(param1: egret.TouchEvent): any {
            if (this._mo(this.tuto_cl.ok_bt)) {
                this._app._so.load_by_name(click_so);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto15_click_f, this);
                this.zone_tuto.removeChild(this.tuto_cl);
                this.tuto_cl = this._sp(tuto16_mc, this.zone_tuto, 0, 0);
                this.addEventListener(egret.Event.ENTER_FRAME, this.tuto16_f, this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.drag_m_down_f, this);
                this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.drag_m_up_f, this);
            }
        }
        public tuto16_f(param1: egret.Event): any {
            if (this.drag_mode) {
                this.card_cl.$setX(Main.mouseX);
                this.card_cl.$setY(Main.mouseY);
            }
            this.i = 1;
            while (this.i <= 4) {
                if (Main.sav.data["cat_dress_" + this.i] > 0) {
                    this.removeEventListener(egret.Event.ENTER_FRAME, this.tuto16_f, this);
                    this.zone_tuto.removeChild(this.tuto_cl);
                    this.card1_about.$setVisible(false);
                    this.card2_about.$setVisible(false);
                    this.card3_about.$setVisible(false);
                    this.card4_about.$setVisible(false);
                    this.tuto_cl = this._sp(tuto24_mc, this.zone_tuto, 0, 0);
                    this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto24_click_f, this);
                    break;
                }
                this.i++;
            }
        }
        public tuto24_click_f(param1: egret.TouchEvent): any {
            if (this._mo(this.back_bt)) {
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto24_click_f, this);
                this._app._so.load_by_name(click_so);
                this._app.open_new_screen("upg");
            }
        }
        public delete_f(): any {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto21_click_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto22_click_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto23_click_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto15_click_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.tuto24_click_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.tuto16_f, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.add_f_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_pause_f, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.drag_m_down_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.drag_m_up_f, this);
            this._Buttons_sounds.delete_f();
        }
    }
}
