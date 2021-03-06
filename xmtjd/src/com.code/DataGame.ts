module com.code {
    export class DataGame extends DataMovieClip {
        arr_last_frame_skin: any = [];
        arr_last_frame_zone: any = [];
        game_stop: boolean = false;
        cat_acp: number = 0.2;
        back_power: number = 8;
        battle_mode: boolean = false;
        _cat: Cat = null;
        _aby: Aby = null;
        _aby_enemy: Aby_enemy = null;
        _Buttons_sounds: Buttons_sounds = null;
        _info: Aby_info = null;
        _info_enemy: Enemy = null;
        _aura: Aura = null;
        back_to_cl: std.MovieClip = null;
        over_type: number = 0;
        over_time: number = 0;
        info_aby_cl: info_aby_mc = null;
        xray_cl: xray_mc = null;
        xray_ex: boolean = false;
        xray_time: number = 0;
        xray_type: number = 0;
        lock_mode: boolean = false;
        lock_mode_fox: boolean = false;
        was_battle_shot: boolean = false;
        down_panel_cl: down_panel_mc = null;
        time_began: number = 0;
        status_began: number = 0;
        zone_cat: egret.Sprite = null;
        zone_fox: egret.Sprite = null;
        zone_up_all: egret.Sprite = null;
        zone_panel: egret.Sprite = null;
        zone_bg: egret.Sprite = null;
        zone_tuto: egret.Sprite = null;
        pause_cl: pause_mc = null;
        pause_ex: boolean = false;
        menu_bt_cl: std.MovieClip = null;
        location_cl: location_mc = null;
        number_of_in: number = 0;
        check_won_dress: number = 0;
        id_dress: number = 0;
        won_card_cl: card_game_mc = null;
        grand_cl: std.MovieClip = null;
        tuto_cl: std.MovieClip = null;
        tuto_battle: boolean = false;
        dead_cat: number = 0;
        dead_fox: number = 0;
        type_end: number = 0;
        time_end: number = 0;
        pre_battle_cl: surrender_battle_mc = null;
        got_cup_cl: got_cup_mc = null;
        pre_battle_ex: boolean = false;
        arr_cat: Array<Cat> = [];
        arr_fox: Array<Cat> = [];
        arr_aby: Array<Aby> = [];
        arr_aby_enemy: Array<Aby_enemy> = [];
        arr_le: any = [];
        arr_sort: Array<number> = [];
        arr_temp: Array<number> = [];
        arr_temp3: Array<number> = [];
        arr_aura_cat: Array<Aura> = [];
        arr_aura_fox: Array<Aura> = [];
        arr_fireball_skin: Array<fireball_mc> = [];
        arr_fireball_side: Array<number> = [];
        arr_fireball_power: Array<number> = [];
        aura_cat_attack_koff: number = 1;
        aura_cat_speed_koff: number = 1;
        aura_cat_slow_koff: number = 1;
        aura_cat_weak_koff: number = 1;
        aura_fox_attack_koff: number = 1;
        aura_fox_speed_koff: number = 1;
        aura_fox_slow_koff: number = 1;
        aura_fox_weak_koff: number = 1;
        arr_temp2: Array<number> = [];
        i7: number = 0;
        numbef_of_m: number = 0;
        numbef_of_m2: number = 0;
        numbef_of_m3: number = 0;
        numbef_of_two: boolean = false;
        arr_op: Array<number> = [];
        arr_op2: Array<number> = [];
        public constructor(dbName?: string, armName?: string) {
            super(dbName, armName);
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
        }
        public _to_last(param1: any, param2: any): any {
            this.arr_last_frame_skin.push(param1);
            this.arr_last_frame_zone.push(param2);
        }
        public _remove_array(param1: any): any {
            param1.splice(0, param1.length);
        }
        public got_sqrt(param1: any, param2: any): any {
            return Math.sqrt((Math.abs(param1.x - param2.x) ^ 2) + (Math.abs(param1.y - param2.y) ^ 2));
        }
        public got_sqrt2(param1: any, param2: any, param3: any): any {
            return Math.sqrt((Math.abs(param1.x - param2) ^ 2) + (Math.abs(param1.y - param3) ^ 2));
        }
        public got_vracenie(param1: any, param2: any, param3: any, param4: any): any {
            this.dx = param1 - param3;
            this.dy = param2 - param4;
            this.ugol = Math.atan2(this.dx, this.dy);
            return this.ugol * 360 / (-2 * Math.PI);
        }
    }
}
