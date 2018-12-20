module com.code {
    export class DataGame extends DataMovieClip {
        arr_last_frame_skin: any = [];
        arr_last_frame_zone: any = [];
        game_stop: Boolean = false;
        cat_acp: number = 0.2;
        back_power: number = 8;
        battle_mode: Boolean = false;
        _cat: Cat;
        _aby: Aby;
        _aby_enemy: Aby_enemy;
        _Buttons_sounds: Buttons_sounds;
        _info: Aby_info;
        _info_enemy: Enemy;
        _aura: Aura;
        back_to_cl: std.MovieClip;
        over_type: number = 0;
        over_time: number = 0;
        info_aby_cl: std.MovieClip;
        xray_cl: std.MovieClip;
        xray_ex: Boolean = false;
        xray_time: number;
        xray_type: number;
        lock_mode: Boolean = false;
        lock_mode_fox: Boolean = false;
        was_battle_shot: Boolean = false;
        down_panel_cl: std.MovieClip;
        time_began: number;
        status_began: number;
        zone_cat: egret.Sprite;
        zone_fox: egret.Sprite;
        zone_up_all: egret.Sprite;
        zone_panel: egret.Sprite;
        zone_bg: egret.Sprite;
        zone_tuto: egret.Sprite;
        pause_cl: std.MovieClip;
        pause_ex: Boolean = false;
        menu_bt_cl: std.MovieClip;
        location_cl: std.MovieClip;
        number_of_in: number;
        check_won_dress: number = 0;
        id_dress: number = 0;
        won_card_cl: std.MovieClip;
        grand_cl: std.MovieClip;
        tuto_cl: std.MovieClip;
        tuto_battle: Boolean = false;
        dead_cat: number = 0;
        dead_fox: number = 0;
        type_end: number;
        time_end: number;
        pre_battle_cl: std.MovieClip;
        got_cup_cl: std.MovieClip;
        pre_battle_ex: Boolean = false;
        arr_cat: any = [];
        arr_fox: any = [];
        arr_aby: any = [];
        arr_aby_enemy: any = [];
        arr_le: any = [];
        arr_sort: any = [];
        arr_temp: any = [];
        arr_temp3: any = [];
        arr_aura_cat: any = [];
        arr_aura_fox: any = [];
        arr_fireball_skin: any = [];
        arr_fireball_side: any = [];
        arr_fireball_power: any = [];
        aura_cat_attack_koff: number = 1;
        aura_cat_speed_koff: number = 1;
        aura_cat_slow_koff: number = 1;
        aura_cat_weak_koff: number = 1;
        aura_fox_attack_koff: number = 1;
        aura_fox_speed_koff: number = 1;
        aura_fox_slow_koff: number = 1;
        aura_fox_weak_koff: number = 1;
        arr_temp2: any = [];
        i7: number;
        numbef_of_m: number;
        numbef_of_m2: number;
        numbef_of_m3: number;
        numbef_of_two: Boolean = false;
        arr_op: any = [];
        arr_op2: any = [];

        public constructor() {
            super();
            this.arr_last_frame_skin = [];
            this.arr_last_frame_zone = [];
            this.arr_cat = [];
            this.arr_fox = [];
            this.arr_aby = [];
            this.arr_aby_enemy = [];
            this.arr_le = [];
            this.arr_sort = [];
            this.arr_temp = [];
            this.arr_temp3 = [];
            this.arr_aura_cat = [];
            this.arr_aura_fox = [];
            this.arr_fireball_skin = [];
            this.arr_fireball_side = [];
            this.arr_fireball_power = [];
            this.arr_temp2 = [];
            this.arr_op = [];
            this.arr_op2 = [];
            return;
        }// end function

        public _to_last(param1, param2) {
            this.arr_last_frame_skin.push(param1);
            this.arr_last_frame_zone.push(param2);
            return;
        }// end function

        public _remove_array(param1) {
            param1.splice(0, param1.length);
            return;
        }// end function

        public got_sqrt(param1, param2) {
            return Math.sqrt((Math.abs(param1.x - param2.x) ^ 2) + (Math.abs(param1.y - param2.y) ^ 2));
        }// end function

        public got_sqrt2(param1, param2, param3) {
            return Math.sqrt((Math.abs(param1.x - param2) ^ 2) + (Math.abs(param1.y - param3) ^ 2));
        }// end function

        public got_vracenie(param1, param2, param3, param4) {
            let dx = param1 - param3;
            let dy = param2 - param4;
            let ugol = Math.atan2(dx, dy);
            return ugol * 360 / (-2 * Math.PI);
        }// end function

    }
}
