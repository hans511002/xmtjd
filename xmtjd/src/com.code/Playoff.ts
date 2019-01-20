module com.code {
    export class Playoff extends DataMovieClip {
        public sc_cl: std.MovieClipSub = null;
        public table_cl: std.MovieClipSub = null;
        sc_clSlot_1: std.MovieClipSub = null;
        sc_clSlot_2: std.MovieClipSub = null;
        sc_clSlot_1Title1_tx: eui.Label = null;
        sc_clSlot_1Title2_tx: eui.Label = null;
        sc_clSlot_1Line_1: std.MovieClipSub = null;
        sc_clSlot_1Line_2: std.MovieClipSub = null;
        sc_clSlot_2Title1_tx: eui.Label = null;
        sc_clSlot_2Title2_tx: eui.Label = null;
        sc_clSlot_2Line_1: std.MovieClipSub = null;
        sc_clSlot_2Line_2: std.MovieClipSub = null;

        table_clAss_1H2: std.MovieClipSub = null;
        table_clAss_2H2: std.MovieClipSub = null;
        table_clAss_1: std.MovieClipSub = null;
        table_clAss_2: std.MovieClipSub = null;
        table_clReferee_cl: std.MovieClipSub = null;


        _app: App = null;
        time: number = 0;
        _info_enemy: Enemy = null;
        public constructor() {
            super("Playoff");
            this._app = App.getInstance();
            this.sc_cl = this.createMovieClipSub("sc_cl");
            this.sc_clSlot_1 = this.sc_cl.createMovieClipSub("slot_1");
            this.sc_clSlot_2 = this.sc_cl.createMovieClipSub("slot_2");
            this.sc_clSlot_1Title1_tx = this.sc_clSlot_1.createLabel("title1_tx");
            this.sc_clSlot_1Title2_tx = this.sc_clSlot_1.createLabel("title2_tx");
            this.sc_clSlot_1Line_1 = this.sc_clSlot_1.createMovieClipSub("line_1");
            this.sc_clSlot_1Line_2 = this.sc_clSlot_1.createMovieClipSub("line_2");
            this.sc_clSlot_2Title1_tx = this.sc_clSlot_2.createLabel("title1_tx");
            this.sc_clSlot_2Title2_tx = this.sc_clSlot_2.createLabel("title2_tx");
            this.sc_clSlot_2Line_1 = this.sc_clSlot_2.createMovieClipSub("line_1");
            this.sc_clSlot_2Line_2 = this.sc_clSlot_2.createMovieClipSub("line_2");
            this.sc_cl.mcMask = this.sc_cl.createMask(std.MCMask.START, "mask", "l3", "l4", "slot_1", "slot_2", "l7", "l8");

            this.table_cl = this.createMovieClipSub("table_cl");
            this.table_clAss_1 = this.table_cl.createMovieClipSub("ass_1");
            this.table_clAss_2 = this.table_cl.createMovieClipSub("ass_2");
            this.table_clReferee_cl = this.table_cl.createMovieClipSub("referee_cl", 1);
            this.table_clAss_1H2 = this.table_clAss_1.createMovieClipSub("h2");
            this.table_clAss_2H2 = this.table_clAss_2.createMovieClipSub("h2");
            this.addFrameScript(86, this.frame87);
        }
        public init(): void {
            this._app._music.delete_music("all");
            this.addEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
            this.table_clAss_1H2.gotoAndStop(1);
            this.table_clAss_2H2.gotoAndStop(2);
            this.table_clAss_1.gotoAndPlay(1);
            this.table_clAss_2.gotoAndPlay(17);
            this._info_enemy = new Enemy();
            this._app._so.load_by_name(league_so);
        }
        public game_f(param1: egret.Event): any {
            this.time++;
            if (this.time == 90) {
                this._app._so.load_by_name(applo_so);
                this.table_cl.gotoAndPlay(2);
            }
            if (this.time == 235) {
                this._app._so.load_by_name(take_ball_so);
                this.sc_clSlot_1Title1_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_1);
                this.sc_clSlot_1Line_1.gotoAndPlay(2);
            }
            if (this.time == 307) {
                this._app._so.load_by_name(take_ball_so);
                this.sc_clSlot_1Title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_2);
                this.sc_clSlot_1Line_2.gotoAndPlay(2);
            }
            if (this.time == 380) {
                this._app._so.load_by_name(take_ball_so);
                this.sc_clSlot_2Title1_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_3);
                this.sc_clSlot_2Line_1.gotoAndPlay(2);
            }
            if (this.time == 460) {
                this._app._so.load_by_name(take_ball_so);
                this.sc_clSlot_2Title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_4);
                this.sc_clSlot_2Line_2.gotoAndPlay(2);
            }
            if (this.time == 480) {
                this._app._so.load_by_name(applo_so);
                this.sc_clSlot_2Title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_4);
            }
            if (this.time >= 600) {
                this._app.open_new_screen("upg");
            }
        }
        public delete_f(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
        }
        public frame87(): any {
            this.stop();
        }
    }
}
