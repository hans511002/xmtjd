module com.code {
    export class App extends egret.Sprite {
        private static _instance: App = null;
        public static game_stop: boolean = false;
        i: number = 0;
        i2: number = 0;
        i3: number = 0;
        i4: number = 0;
        i5: number = 0;
        i6: number = 0;
        j: number = 0;
        j2: number = 0;
        j3: number = 0;
        j4: number = 0;
        j5: number = 0;
        rnd_for: number = 0;
        rnd_for2: number = 0;
        rnd_for3: number = 0;
        rnd_for4: number = 0;
        rnd_for5: number = 0;
        rnd_for6: number = 0;
        rnd_for7: number = 0;
        rnd_for8: number = 0;
        private _Preloader: Preloader = null;
        private _Team_register: Team_register = null;
        private _Game: Game = null;
        private _Menu: Menu = null;
        private _Comics: Comics = null;
        private _Finish: Finish = null;
        private _Fps: FPS = null;
        private _Deqaf: Deqaf = null;
        private _Done: Done = null;
        private _Upg: Upg = null;
        private _Dress: Dress = null;
        private _Playoff: Playoff = null;
        private _Splash: Splash = null;
        public _so: LoadSounds = null;
        public _music: LoadMusic = null;
        private old_scene: String = "none";
        private zone_bg: egret.Sprite = null;
        private zone_up: egret.Sprite = null;
        // my_context_menu: ContextMenu = null;
        public team_enemy: number = 2;
        public team_enemy_id: number = 15;
        public team_enemy_level: number = 0;
        public arr_enemy_row: any = [];
        public train_mode: boolean = false;
        public constructor() {
            super();
            this.arr_enemy_row = [];
            App._instance = this;
        }
        public static getInstance(): App {
            return App._instance == null ? new App() : App._instance;
        }
        public init(): void {
            this.zone_bg = new egret.Sprite();
            this.addChild(this.zone_bg);
            this.zone_up = new egret.Sprite();
            this.addChild(this.zone_up);
            this._so = new LoadSounds();
            this._music = new LoadMusic();
            // this.my_context_menu = new ContextMenu();
            // this.my_context_menu.hideBuiltInItems();
            // contextMenu = this.my_context_menu;
            this.arr_enemy_row.push(2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22);
        }
        public init_save_kitty(): any {
            Main.sav.data.chance_injury = 94;
            Main.sav.data.cat_place_1 = 9;
            Main.sav.data.cat_place_2 = 10;
            Main.sav.data.cat_place_3 = 11;
            Main.sav.data.cat_place_4 = 12;
            Main.sav.data.cat_dress_1 = 0;
            Main.sav.data.cat_dress_2 = 0;
            Main.sav.data.cat_dress_3 = 0;
            Main.sav.data.cat_dress_4 = 0;
            Main.sav.data.cat_injury1_1 = 0;
            Main.sav.data.cat_injury2_1 = 0;
            Main.sav.data.cat_injury3_1 = 0;
            Main.sav.data.cat_injury1_2 = 0;
            Main.sav.data.cat_injury2_2 = 0;
            Main.sav.data.cat_injury3_2 = 0;
            Main.sav.data.cat_injury1_3 = 0;
            Main.sav.data.cat_injury2_3 = 0;
            Main.sav.data.cat_injury3_3 = 0;
            Main.sav.data.cat_injury1_4 = 0;
            Main.sav.data.cat_injury2_4 = 0;
            Main.sav.data.cat_injury3_4 = 0;
            this.i = 1;
            while (this.i <= 4) {
                this.i2 = 1;
                while (this.i2 <= 3) {
                    Main.sav.data["cat_injury" + this.i2 + "_time_" + this.i] = 0;
                    this.i2++;
                }
                this.i++;
            }
            Main.sav.data.stuff_level_1 = 1;
            Main.sav.data.stuff_level_2 = 1;
            Main.sav.data.stuff_level_3 = 1;
            Main.sav.data.stuff_level_4 = 1;
            Main.sav.data.stuff_level_5 = 1;
            Main.sav.data.stuff_1 = 10;
            Main.sav.data.stuff_2 = 10;
            Main.sav.data.stuff_3 = 10;
            Main.sav.data.stuff_4 = 30;
            Main.sav.data.stuff_5 = 100;
            Main.sav.data.stuff_min_1 = 10;
            Main.sav.data.stuff_min_2 = 10;
            Main.sav.data.stuff_min_3 = 10;
            Main.sav.data.stuff_price_1 = 200;
            Main.sav.data.stuff_price_2 = 200;
            Main.sav.data.stuff_price_3 = 200;
            Main.sav.data.stuff_price_4 = 400;
            Main.sav.data.stuff_price_5 = 300;
            Main.sav.data.cat_stat1_1 = 0;
            Main.sav.data.cat_stat1_2 = 0;
            Main.sav.data.cat_stat1_3 = 0;
            Main.sav.data.cat_stat1_4 = 0;
            Main.sav.data.cat_stat1_2_1 = 40;
            Main.sav.data.cat_stat1_2_2 = 40;
            Main.sav.data.cat_stat1_2_3 = 40;
            Main.sav.data.cat_stat1_2_4 = 40;
            Main.sav.data.cat_stat2_1 = 0;
            Main.sav.data.cat_stat2_2 = 0;
            Main.sav.data.cat_stat2_3 = 0;
            Main.sav.data.cat_stat2_4 = 0;
            Main.sav.data.cat_stat2_2_1 = 40;
            Main.sav.data.cat_stat2_2_2 = 40;
            Main.sav.data.cat_stat2_2_3 = 40;
            Main.sav.data.cat_stat2_2_4 = 40;
            Main.sav.data.cat_stat3_1 = 0;
            Main.sav.data.cat_stat3_2 = 0;
            Main.sav.data.cat_stat3_3 = 0;
            Main.sav.data.cat_stat3_4 = 0;
            Main.sav.data.cat_stat3_2_1 = 40;
            Main.sav.data.cat_stat3_2_2 = 40;
            Main.sav.data.cat_stat3_2_3 = 40;
            Main.sav.data.cat_stat3_2_4 = 40;
            Main.sav.data.cat_hp_koff_1 = 1;
            Main.sav.data.cat_hp_koff_2 = 1;
            Main.sav.data.cat_hp_koff_3 = 1;
            Main.sav.data.cat_hp_koff_4 = 1;
            Main.sav.data.cat_hp_1 = 20;
            Main.sav.data.cat_hp_2 = 20;
            Main.sav.data.cat_hp_3 = 20;
            Main.sav.data.cat_hp_4 = 20;
            Main.sav.data.cat_hp2_1 = 50;
            Main.sav.data.cat_hp2_2 = 50;
            Main.sav.data.cat_hp2_3 = 50;
            Main.sav.data.cat_hp2_4 = 50;
            Main.sav.data.cat_attack_1 = 10;
            Main.sav.data.cat_attack_2 = 10;
            Main.sav.data.cat_attack_3 = 10;
            Main.sav.data.cat_attack_4 = 10;
            Main.sav.data.cat_speed_1 = 160;
            Main.sav.data.cat_speed_2 = 160;
            Main.sav.data.cat_speed_3 = 160;
            Main.sav.data.cat_speed_4 = 160;
            Main.sav.data.cat_hp_level_1 = 1;
            Main.sav.data.cat_hp_level_2 = 1;
            Main.sav.data.cat_hp_level_3 = 1;
            Main.sav.data.cat_hp_level_4 = 1;
            Main.sav.data.cat_attack_level_1 = 1;
            Main.sav.data.cat_attack_level_2 = 1;
            Main.sav.data.cat_attack_level_3 = 1;
            Main.sav.data.cat_attack_level_4 = 1;
            Main.sav.data.cat_speed_level_1 = 1;
            Main.sav.data.cat_speed_level_2 = 1;
            Main.sav.data.cat_speed_level_3 = 1;
            Main.sav.data.cat_speed_level_4 = 1;
            Main.sav.data.cat_aby_1 = 0;
            Main.sav.data.cat_aby_2 = 0;
            Main.sav.data.cat_aby_3 = 0;
            Main.sav.data.cat_aby_4 = 0;
            Main.sav.data.cat_id_1 = 0;
            Main.sav.data.cat_id_2 = 0;
            Main.sav.data.cat_id_3 = 0;
            Main.sav.data.cat_id_4 = 0;
            Main.sav.data.cat_n_1 = 0;
            Main.sav.data.cat_n_2 = 0;
            Main.sav.data.cat_n_3 = 0;
            Main.sav.data.cat_n_4 = 0;
            Main.sav.data.news_paper = 0;
            Main.sav.data.last_enemy = 0;
            Main.sav.data.last_enemy_id = 0;
            Main.sav.data.enemy_start_level = 1;
            Main.sav.data.season_round = 0;
            Main.sav.data.week = 1;
            Main.sav.data.playoff = 0;
            Main.sav.data.playoff_round = 0;
            Main.sav.data.rest = 0;
            Main.sav.data.result = 0;
            Main.sav.data.earn_fish = 0;
            Main.sav.data.earn_pts = 0;
            Main.sav.data.week_hi = 1;
            Main.sav.data.show_season_finish = 1;
            Main.sav.data.show_season_finish_playoff = 0;
            Main.sav.data.league = 4;
            Main.sav.data.new_league = 0;
            Main.sav.data.season_koff = 0;
            Main.sav.data.place_won_kitty = 0;
            Main.sav.data.off_team_1 = 0;
            Main.sav.data.off_team_2 = 0;
            Main.sav.data.off_team_3 = 0;
            Main.sav.data.off_team_4 = 0;
            Main.sav.data.off_team_5 = 0;
            Main.sav.data.end_of_playoff = 0;
            Main.sav.data.game_end = 0;
            Main.sav.data.cup_shark = 0;
            Main.sav.data.count_semi_1_1 = 0;
            Main.sav.data.count_semi_1_2 = 0;
            Main.sav.data.count_semi_2_1 = 0;
            Main.sav.data.count_semi_2_2 = 0;
            Main.sav.data.count_final_1 = 0;
            Main.sav.data.count_final_2 = 0;
            this.i = 1;
            while (this.i <= 22) {
                Main.sav.data["team_games_" + this.i] = 0;
                Main.sav.data["team_w_" + this.i] = 0;
                Main.sav.data["team_d_" + this.i] = 0;
                Main.sav.data["team_pts_" + this.i] = 0;
                this.i++;
            }
            this.i = 2;
            while (this.i <= 22) {
                this.i2 = 2;
                while (this.i2 <= 22) {
                    if (this.i != this.i2) {
                        Main.sav.data["match_" + this.i + "_vs_" + this.i2] = 0;
                        Main.sav.data["match_" + this.i2 + "_vs_" + this.i] = 0;
                    }
                    this.i2++;
                }
                this.i++;
            }
            Main.sav.data.gold = 0;
            Main.sav.data.gold_overall = 0;
            Main.sav.flush();
        }
        public init_save(): any {
            Main.sav.data.tuto1 = 1;
            Main.sav.data.tuto2 = 1;
            Main.sav.data.tuto3 = 1;
            Main.sav.data.tuto4 = 1;
            Main.sav.data.tuto5 = 1;
            Main.sav.data.tuto6 = 1;
            Main.sav.data.tuto7 = 1;
            Main.sav.data.gold = 0;
            Main.sav.data.gold_overall = 0;
            this.i = 1;
            while (this.i <= 90) {
                Main.sav.data["dress_" + this.i] = 0;
                this.i++;
            }
            Main.sav.data.shop_1 = 2;
            Main.sav.data.shop_2 = 3;
            Main.sav.data.shop_3 = 39;
            Main.sav.data.shop_4 = 44;
            Main.sav.data.shop_5 = 70;
            Main.sav.data.shop_buy_1 = 0;
            Main.sav.data.shop_buy_2 = 0;
            Main.sav.data.shop_buy_3 = 0;
            Main.sav.data.shop_buy_4 = 0;
            Main.sav.data.shop_buy_5 = 0;
            this.i = 1;
            while (this.i <= 22) {
                Main.sav.data["team_games_" + this.i] = 0;
                Main.sav.data["team_w_" + this.i] = 0;
                Main.sav.data["team_d_" + this.i] = 0;
                Main.sav.data["team_pts_" + this.i] = 0;
                this.i++;
            }
            this.i = 2;
            while (this.i <= 22) {
                this.i2 = 2;
                while (this.i2 <= 22) {
                    if (this.i != this.i2) {
                        Main.sav.data["match_" + this.i + "_vs_" + this.i2] = 0;
                        Main.sav.data["match_" + this.i2 + "_vs_" + this.i] = 0;
                    }
                    this.i2++;
                }
                this.i++;
            }
            this.init_save_kitty();
            Main.sav.data.team_name_1 = "猫咪队伍";
            Main.sav.data.chance_injury = 104;
            Main.sav.flush();
        }
        public open_new_screen(param1: any): any {
            this.free();
            switch (param1) {
                case "game":
                    this._Game = new Game();
                    this.zone_bg.addChild(this._Game);
                    this._Game.init();
                    break;
                case "menu":
                    this._Menu = new Menu();
                    this.zone_bg.addChild(this._Menu);
                    this._Menu.init();
                    break;
                case "upg":
                    this._Upg = new Upg();
                    this.zone_bg.addChild(this._Upg);
                    this._Upg.init();
                    break;
                case "dress":
                    this._Dress = new Dress();
                    this.zone_bg.addChild(this._Dress);
                    this._Dress.init();
                    break;
                case "playoff":
                    this._Playoff = new Playoff();
                    this.zone_bg.addChild(this._Playoff);
                    this._Playoff.init();
                    break;
                case "comics":
                    this._Comics = new Comics();
                    this.zone_bg.addChild(this._Comics);
                    this._Comics.init();
                    break;
                case "finish":
                    this._Finish = new Finish();
                    this.zone_bg.addChild(this._Finish);
                    this._Finish.init();
                    break;
                case "team_register":
                    this._Team_register = new Team_register();
                    this.zone_bg.addChild(this._Team_register);
                    this._Team_register.init();
                    break;
                case "deqaf":
                    this._Deqaf = new Deqaf();
                    this.zone_bg.addChild(this._Deqaf);
                    this._Deqaf.$setX(-50);
                    this._Deqaf.$setY(-50);
                    this._Deqaf.init();
                    break;
                case "splash":
                    this._Splash = new Splash();
                    this.zone_bg.addChild(this._Splash);
                    this._Splash.init();
                    break;
                case "done":
                    this._Done = new Done();
                    this.zone_bg.addChild(this._Done);
                    this._Done.init();
            }
            this.old_scene = param1;
        }
        public free(): any {
            switch (this.old_scene) {
                case "game":
                    this._Game.delete_f();
                    this.zone_bg.removeChild(this._Game);
                    break;
                case "menu":
                    this._Menu.delete_f();
                    this.zone_bg.removeChild(this._Menu);
                    break;
                case "upg":
                    this._Upg.delete_f();
                    this.zone_bg.removeChild(this._Upg);
                    break;
                case "dress":
                    this._Dress.delete_f();
                    this.zone_bg.removeChild(this._Dress);
                    break;
                case "finish":
                    this._Finish.delete_f();
                    this.zone_bg.removeChild(this._Finish);
                    break;
                case "comics":
                    this._Comics.delete_f();
                    this.zone_bg.removeChild(this._Comics);
                    break;
                case "deqaf":
                    this._Deqaf.delete_f();
                    this.zone_bg.removeChild(this._Deqaf);
                    break;
                case "splash":
                    this._Splash.delete_f();
                    this.zone_bg.removeChild(this._Splash);
                    break;
                case "team_register":
                    this._Team_register.delete_f();
                    this.zone_bg.removeChild(this._Team_register);
                    break;
                case "playoff":
                    this._Playoff.delete_f();
                    this.zone_bg.removeChild(this._Playoff);
                    break;
                case "done":
                    this._Done.delete_f();
                    this.zone_bg.removeChild(this._Done);
            }
        }
        public _rnd(param1: any): any {
            return Math.floor(Math.random() * param1);
        }
    }
}
