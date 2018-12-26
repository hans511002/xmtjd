module com.code
{
 
    export class Aby extends DataMovieClip
    {
        _game:Game;
        _app:App;
        skin:std.MovieClip;
        type:number;
        id:number;
        ex_aby:boolean;
        reload_time:number;
        reload_time2:number;
        time:number;
        frame_action:number;
        power:number;
        type_aby:number;
        qe:number;

        public   Aby()
        {
            this._game = Game.getInstance();
            this._app = App.getInstance();
            return;
        }// end function

        public   init() : void
        {
            this.skin = this._sp(aby_mc, this, 285 - (this._game.arr_cat.length - 1) * 78, 387);
            this.id = this._game.arr_cat.length;
            this.type = Main.sav.data["cat_aby_" + this.id];
            this.skin.cat2.gotoAndStop(this.id);
            this.skin.icon_cl.lock_cl.visible = false;
            this.type_aby = this._game._info.got_type(this.type);
            this.power = this._game._info.got_power(this.type);
            this.frame_action = this._game._info.got_frame(this.type);
            this.time = this._game._info.got_time(this.type);
            if (this.type == 0)
            {
                this.ex_aby = false;
                this.skin.icon_cl.visible = false;
                this.skin.bt_telo.visible = false;
                this.skin.icon_cl.icon2.icon_cl.gotoAndStop(1);
            }
            else
            {
                this.ex_aby = false;
                this.skin.icon_cl.visible = true;
                this.skin.bt_telo.visible = true;
                this.skin.icon_cl.icon2.icon_cl.gotoAndStop(this.type_aby);
            }
            this.skin.defeat_card.visible = false;
            this.skin.icon_cl.icon2.scale_cl.gotoAndStop(1);
            this.skin.icon_cl.icon2.bg_cl.gotoAndStop(2);
            this.set_scale(Main.sav.data["cat_hp_" + this.id]);
            this.reload_time2 = this._game._info.got_reload(this.type);
            this.qe = 1;
            i = 1;
            while (i <= Main.sav.data["cat_speed_level_" + this.id])
            {
                
                this.qe = this.qe - 0.015;
                var _loc_2:* = i + 1;
                i = _loc_2;
            }
            this.reload_time2 = this.reload_time2 * this.qe;
            this.reload_time = int(this.reload_time2 * 0.5);
            this.skin.cat2.gotoAndStop(1);
            return;
        }// end function

        public dress_up(param1, param2)
        {
            param1.head_cl.wool_cl.gotoAndStop(this.id);
            param1.hand_l_cl.wool_cl.gotoAndStop(this.id);
            param1.hand_r_cl.wool_cl.gotoAndStop(this.id);
            param1.body_cl.wool_cl.gotoAndStop(this.id);
            param1.foot1_cl.wool_cl.gotoAndStop(this.id);
            param1.foot2_cl.wool_cl.gotoAndStop(this.id);
            param1.tail_cl.gotoAndStop(this.id);
            param2 = param2 + 1;
            param1.head_cl.h2.gotoAndStop(param2);
            param1.hand_l_cl.sleeve_cl.gotoAndStop(param2);
            param1.hand_l_cl.w2.gotoAndStop(param2);
            param1.hand_r_cl.sleeve_cl.gotoAndStop(param2);
            param1.hand_r_cl.s2.gotoAndStop(param2);
            param1.body_cl.b2.gotoAndStop(param2);
            param1.foot1_cl.p2.gotoAndStop(param2);
            param1.foot2_cl.p2.gotoAndStop(param2);
            param1.skirt_cl.gotoAndStop(param2);
            param1.cloak_cl.gotoAndStop(param2);
            param2 = param2 - 1;
            return;
        }// end function

        public set_scale(param1)
        {
            this.skin.skala_cl.gotoAndStop(int(param1 / Main.sav.data["cat_hp2_" + this.id] * 100));
            return;
        }// end function

    }
}
