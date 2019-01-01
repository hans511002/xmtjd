﻿module com.code {

    export class Aby extends DataMovieClip {
        _game: Game;
        _app: App;
        skin: aby_mc;
        type: number;
        id: number;
        ex_aby: boolean;
        reload_time: number;
        reload_time2: number;
        time: number;
        frame_action: number;
        power: number;
        type_aby: number;
        qe: number;

        public Aby() {
            this._game = Game.getInstance();
            this._app = App.getInstance();
            return;
        }// end function

        public init(): void {
            this.skin = this._sp(aby_mc, this, 285 - (this._game.arr_cat.length - 1) * 78, 387);
            this.id = this._game.arr_cat.length;
            this.type = Main.sav.data["cat_aby_" + this.id];
            this.skin.cat2.gotoAndStop(this.id);
            this.skin.icon_clLock_cl.setVisible(false);
            this.type_aby = this._game._info.got_type(this.type);
            this.power = this._game._info.got_power(this.type);
            this.frame_action = this._game._info.got_frame(this.type);
            this.time = this._game._info.got_time(this.type);
            if (this.type == 0) {
                this.ex_aby = false;
                this.skin.icon_cl.setVisible(false);
                this.skin.bt_telo.setVisible(false);
                this.skin.icon_clIcon2Icon_cl.gotoAndStop(1);
            }
            else {
                this.ex_aby = false;
                this.skin.icon_cl.visible = true;
                this.skin.bt_telo.visible = true;
                this.skin.icon_clIcon2Icon_cl.gotoAndStop(this.type_aby);
            }
            this.skin.defeat_card.visible = false;
            this.skin.icon_clIcon2Scale_cl.gotoAndStop(1);
            this.skin.icon_clIcon2Bg_cl.gotoAndStop(2);
            this.set_scale(Main.sav.data["cat_hp_" + this.id]);
            this.reload_time2 = this._game._info.got_reload(this.type);
            this.qe = 1;
            this.i = 1;
            while (this.i <= Main.sav.data["cat_speed_level_" + this.id]) {

                this.qe = this.qe - 0.015;
                this.i++;
            }
            this.reload_time2 = this.reload_time2 * this.qe;
            this.reload_time = (this.reload_time2 * 0.5);
            this.skin.cat2.gotoAndStop(1);
            return;
        }// end function

        public dress_up(cat: aby_mc, param2: number) {
            cat.cat2Head_clWool_cl.gotoAndStop(this.id);
            cat.cat2Hand_l_clWool_cl.gotoAndStop(this.id);
            cat.cat2Hand_r_clWool_cl.gotoAndStop(this.id);
            cat.cat2Body_clWool_cl.gotoAndStop(this.id);
            cat.cat2Foot1_clWool_cl.gotoAndStop(this.id);
            cat.cat2Foot2_clWool_cl.gotoAndStop(this.id);
            cat.cat2Tail_cl.gotoAndStop(this.id);
            param2 = param2 + 1;
            cat.cat2Head_clH2.gotoAndStop(param2);
            cat.cat2Hand_l_clSleeve_cl.gotoAndStop(param2);
            cat.cat2Hand_l_clW2.gotoAndStop(param2);
            cat.cat2Hand_r_clSleeve_cl.gotoAndStop(param2);
            cat.cat2Hand_r_clS2.gotoAndStop(param2);
            cat.cat2Body_clB2.gotoAndStop(param2);
            cat.cat2Foot1_clP2.gotoAndStop(param2);
            cat.cat2Foot2_clP2.gotoAndStop(param2);
            cat.cat2Skirt_cl.gotoAndStop(param2);
            cat.cat2Cloak_cl.gotoAndStop(param2);
            param2 = param2 - 1;
            return;
        }// end function

        public set_scale(param1) {
            this.skin.skala_cl.gotoAndStop((param1 / Main.sav.data["cat_hp2_" + this.id] * 100));
            return;
        }// end function

    }
}
