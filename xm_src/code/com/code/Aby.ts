module com.code {
    export class Aby extends DataMovieClip {
        _game: Game = null;
        _app: App = null;
        skin: std.MovieClip = null;
        type: number = 0;
        id: number = 0;
        ex_aby: boolean = false;
        reload_time: number = 0;
        reload_time2: number = 0;
        time: number = 0;
        frame_action: number = 0;
        power: number = 0;
        type_aby: number = 0;
        qe: number = 0;

        public constructor() {
            this._game = Game.getInstance();
            this._app = App.getInstance();
            super();
        }

        public init(): void {
            this.skin = this._sp(aby_mc,this,285 - (this._game.arr_cat.length - 1) * 78,387);
            this.id = this._game.arr_cat.length;
            this.type = Main.sav.data["cat_aby_" + this.id];
            this.skin.cat2.gotoAndStop(this.id);
            this.skin.icon_cl.lock_cl.$setVisible(false);
            this.type_aby = this._game._info.got_type(this.type);
            this.power = this._game._info.got_power(this.type);
            this.frame_action = this._game._info.got_frame(this.type);
            this.time = this._game._info.got_time(this.type);
            if(this.type == 0) {
                this.ex_aby = false;
                this.skin.icon_cl.$setVisible(false);
                this.skin.bt_telo.$setVisible(false);
                this.skin.icon_clIcon2Icon_cl.gotoAndStop(1);
            } else {
                this.ex_aby = false;
                this.skin.icon_cl.$setVisible(true);
                this.skin.bt_telo.$setVisible(true);
                this.skin.icon_clIcon2Icon_cl.gotoAndStop(this.type_aby);
            }
            this.skin.defeat_card.$setVisible(false);
            this.skin.icon_clIcon2Scale_cl.gotoAndStop(1);
            this.skin.icon_clIcon2Bg_cl.gotoAndStop(2);
            this.set_scale(Main.sav.data["cat_hp_" + this.id]);
            this.reload_time2 = this._game._info.got_reload(this.type);
            this.qe = 1;
            i = 1;
            while(i <= Main.sav.data["cat_speed_level_" + this.id]) {
                this.qe = this.qe - 0.015;
                i++;
            }
            this.reload_time2 = this.reload_time2 * this.qe;
            this.reload_time = Math.floor(this.reload_time2 * 0.5);
            this.skin.cat2.gotoAndStop(1);
        }

        public dress_up(param1: any, param2: any): any {
            param1.head_clWool_cl.gotoAndStop(this.id);
            param1.hand_l_clWool_cl.gotoAndStop(this.id);
            param1.hand_r_clWool_cl.gotoAndStop(this.id);
            param1.body_clWool_cl.gotoAndStop(this.id);
            param1.foot1_clWool_cl.gotoAndStop(this.id);
            param1.foot2_clWool_cl.gotoAndStop(this.id);
            param1.tail_cl.gotoAndStop(this.id);
            param2++;
            param1.head_clH2.gotoAndStop(param2);
            param1.hand_l_clSleeve_cl.gotoAndStop(param2);
            param1.hand_l_clW2.gotoAndStop(param2);
            param1.hand_r_clSleeve_cl.gotoAndStop(param2);
            param1.hand_r_clS2.gotoAndStop(param2);
            param1.body_clB2.gotoAndStop(param2);
            param1.foot1_clP2.gotoAndStop(param2);
            param1.foot2_clP2.gotoAndStop(param2);
            param1.skirt_cl.gotoAndStop(param2);
            param1.cloak_cl.gotoAndStop(param2);
            param2--;
        }

        public set_scale(param1: any): any {
            this.skin.skala_cl.gotoAndStop(Math.floor(param1 / Main.sav.data["cat_hp2_" + this.id] * 100));
        }
    }
}
