module com.code {
    export class Menu extends DataMovieClip {
        public cat1: cat_mc = null;
        public cat2: cat_mc = null;
        public clear_cl: std.MCButton = null;
        public credits_cl: std.MovieClip = null;
        public cup_1: std.MovieClip = null;
        public cup_2: std.MovieClip = null;
        public cup_3: std.MovieClip = null;
        public cup_4: std.MovieClip = null;
        public cup_5: std.MovieClip = null;
        public deqaf_bt: std.MCButton = null;
        public face_bt: std.MovieClip = null;
        public go_sfk1: std.MovieClip = null;
        public go_sfk2: std.MovieClip = null;
        public go_sfk3: std.MovieClip = null;
        public play_cl: std.MCButton = null;
        public sounds_control_cl: Buttons_sounds2 = null;
        public zone_panel: std.MovieClip = null;
        _app: App = null;
        sure_cl: std.MovieClip = null;
        sure_ex: boolean = false;
        time_reload: number = 0;
        status: number = 0;
        dress1: number = 0;
        dress2: number = 0;
        acp: number = 0;

        public constructor() {
            this._app = App.getInstance();
            super();
        }

        public init(): void {
            this._app._music.load_music("menu");
            this.addEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this.cup_1.$setVisible(false);
            this.cup_2.$setVisible(false);
            this.cup_3.$setVisible(false);
            this.cup_4.$setVisible(false);
            this.cup_5.$setVisible(false);
            this.credits_cl.de2.gotoAndStop(3);
            this.credits_cl.$setVisible(false);
            if(Main.sav.data.game_end == 1) {
                this.cup_1.$setVisible(true);
            }
            if(Main.sav.data.league <= 3) {
                this.cup_5.$setVisible(true);
            }
            if(Main.sav.data.league <= 2) {
                this.cup_4.$setVisible(true);
            }
            if(Main.sav.data.league <= 1) {
                this.cup_3.$setVisible(true);
            }
            if(Main.sav.data.cup_shark == 1) {
                this.cup_2.$setVisible(true);
            }
            this.dress1 = std._rnd(299) + 2;
            this.dress2 = std._rnd(299) + 2;
            this.cat1.gotoAndStop(1);
            this.cat2.gotoAndStop(2);
            this.cat1.cat1.gotoAndStop(4);
            this.cat2.cat1.gotoAndStop(4);
            this.dress_up(this.cat1.cat1.cat2,1,this.dress1);
            this.dress_up(this.cat2.cat1.cat2,5,this.dress2);
            this.cat1.armor_cl.$setVisible(false);
            this.cat2.armor_cl.$setVisible(false);
            this.time_reload = 80;
            this.status = 0;
        }

        public game_f(param1: egret.Event): any {
            if(this.status == 0) {
                if(++this.time_reload >= 120) {
                    this.cat1.cat1.gotoAndStop(2);
                    this.cat2.cat1.gotoAndStop(2);
                    this.dress_up(this.cat1.cat1.cat2,1,this.dress1);
                    this.dress_up(this.cat2.cat1.cat2,5,this.dress2);
                    this.status = 1;
                    this.acp = 1;
                }
            } else if(this.status == 1) {
                this.cat1.$setX(this.cat1.x + 1.5 * this.acp);
                this.cat2.$setX(this.cat2.x - 1.5 * this.acp);
                this.acp = this.acp + 0.05;
                if(Math.abs(this.cat1.x - this.cat2.x) < 30) {
                    this.status = 2;
                    rnd_for = std._rnd(100);
                    if(rnd_for > 85) {
                        this.cat1.cat1.gotoAndStop(8);
                    } else if(rnd_for > 70) {
                        this.cat1.cat1.gotoAndStop(9);
                    } else {
                        this.cat1.cat1.gotoAndStop(6);
                    }
                    rnd_for = std._rnd(100);
                    if(rnd_for > 85) {
                        this.cat2.cat1.gotoAndStop(8);
                    } else if(rnd_for > 70) {
                        this.cat2.cat1.gotoAndStop(9);
                    } else {
                        this.cat2.cat1.gotoAndStop(6);
                    }
                    this.dress_up(this.cat1.cat1.cat2,1,this.dress1);
                    this.dress_up(this.cat2.cat1.cat2,5,this.dress2);
                }
            } else if(this.status == 2) {
                this.cat1.$setX(this.cat1.x - 1.5 * this.acp);
                this.cat2.$setX(this.cat2.x + 1.5 * this.acp);
                this.acp = this.acp - 0.04;
                if(this.cat1.x < 204) {
                    this.status = 0;
                    this.time_reload = -100 + std._rnd(100);
                    this.cat1.cat1.gotoAndStop(4);
                    this.cat2.cat1.gotoAndStop(4);
                    this.dress_up(this.cat1.cat1.cat2,1,this.dress1);
                    this.dress_up(this.cat2.cat1.cat2,5,this.dress2);
                    this.cat1.$setX(205);
                    this.cat2.$setX(435);
                }
            }
        }

        public click_f(param1: egret.TouchEvent): any {
            if(_mo(this.deqaf_bt)) {
                this._app._so.load_by_name(click_so);
                this.credits_cl.$setVisible(true);
                if(this.sure_ex) {
                    _re(this.sure_cl,this.zone_panel);
                    this.sure_ex = false;
                }
            }
            if(_mo(this.credits_cl.close_bt)) {
                this.credits_cl.$setVisible(false);
                this._app._so.load_by_name(click_so);
            }
            if(_mo(this.face_bt)) {
                "_blank";
                new URLRequest("http://www.facebook.com/ArmorGames");
                ;
            }
            if(_mo(this.go_sfk1)) {
                navigateToURL(new URLRequest("http://armorgames.com/play/16008/strikeforce-kitty"),"_blank");
            }
            if(_mo(this.go_sfk2)) {
                navigateToURL(new URLRequest("http://armorgames.com/play/17643/strikeforce-kitty-2"),"_blank");
            }
            if(_mo(this.go_sfk3)) {
                navigateToURL(new URLRequest("http://armorgames.com/play/17800/strikeforce-kitty-last-stand"),"_blank");
            }
            if(_mo(this.play_cl)) {
                this._app._so.load_by_name(click_so);
                if(Main.sav.data.game_ex != 1) {
                    this._app.init_save();
                    this._app.open_new_screen("game");
                } else {
                    this._app.open_new_screen("upg");
                }
            }
            if(this.sure_ex) {
                if(_mo(this.sure_cl.yes)) {
                    Main.sav.data.game_ex = 0;
                    Main.sav.flush();
                    _re(this.sure_cl,this.zone_panel);
                    this.sure_ex = false;
                    this._app._so.load_by_name(click_so);
                } else if(_mo(this.sure_cl.no)) {
                    this._app._so.load_by_name(click_so);
                    _re(this.sure_cl,this.zone_panel);
                    this.sure_ex = false;
                }
            }
            if(_mo(this.clear_cl)) {
                if(this.sure_ex == false) {
                    this._app._so.load_by_name(click_so);
                    this.sure_cl = this._sp(sure_mc,this.zone_panel,115,253);
                    this.sure_ex = true;
                    this.credits_cl.$setVisible(false);
                }
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

        public delete_f(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this.sounds_control_cl.delete_f();
        }
    }
}
