module com.code {
    export class Team_register extends DataMovieClip {
        public n1_tx: eui.Label = null;
        public n2_tx: eui.Label = null;
        public n3_tx: eui.Label = null;
        public n4_tx: eui.Label = null;
        public name_tx: eui.Label = null;
        public play_bt: std.MCButton = null;
        public please_full_cl: std.MovieClipSub = null;
        please_full_clAuto_bt: std.MovieClipSub = null;
        public sounds_control_cl: Buttons_sounds2 = null;
        _app: App = null;
        ple: boolean = false;
        public constructor() {
            super("Team_register");
            this._app = App.getInstance();
            this.please_full_cl = this.createMovieClipSub("please_full_cl");
            this.please_full_clAuto_bt = this.please_full_cl.createMovieClipSub("auto_bt");
            this.play_bt = this.createMCButton("play_bt");
            this.name_tx = this.createLabel("name_tx");
            this.n1_tx = this.createLabel("n1_tx");
            this.n2_tx = this.createLabel("n2_tx");
            this.n3_tx = this.createLabel("n3_tx");
            this.n4_tx = this.createLabel("n4_tx");

        }
        public init(): void {
            this.addEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.please_full_cl.$setVisible(false);
            this._app._music.load_music("upg");
        }
        public game_f(param1: egret.Event): any {
        }
        public click_f(param1: egret.TouchEvent): any {
            if (this._mo(this.please_full_clAuto_bt)) {
                this.name_tx.text = "猫咪队伍";
                this.n1_tx.text = "菲力克斯";
                this.n2_tx.text = "加菲";
                this.n3_tx.text = "汤姆";
                this.n4_tx.text = "辛巴";
                this._app._so.load_by_name(click_so);
            }
            if (this._mo(this.play_bt)) {
                this._app._so.load_by_name(click_so);
                this.ple = true;
                if (this.name_tx.text != "" && this.name_tx.text != null) {
                    if (this.n1_tx.text != "" && this.n1_tx.text != null) {
                        if (this.n2_tx.text != "" && this.n2_tx.text != null) {
                            if (this.n3_tx.text != "" && this.n3_tx.text != null) {
                                if (this.n4_tx.text != "" && this.n4_tx.text != null) {
                                    this.ple = false;
                                    Main.sav.data.team_name_1 = this.name_tx.text;
                                    this._app.open_new_screen("upg");
                                    return;
                                }
                            }
                        }
                    }
                }
                if (this.ple) {
                    this.please_full_cl.$setVisible(true);
                }
            }
        }
        public delete_f(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.game_f, this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.sounds_control_cl.delete_f();
        }
    }
}
