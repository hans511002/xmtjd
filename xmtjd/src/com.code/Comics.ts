module com.code {
    export class Comics extends DataMovieClip {
        public play_bt: std.MCButton = null;
        public sounds_control_cl: Buttons_sounds2 = null;
        _app: App = null;
        public constructor() {
            super("Comics");
            this._app = App.getInstance();
            this.play_bt = this.createMCButton("play_bt");
            // this.addFrameScript(608, this.frame609);
            this.sounds_control_cl = <Buttons_sounds2>this.addMovieClip("sounds_control_cl", new Buttons_sounds2());
        }
        public init(): void {
            this._app._music.delete_music("all");
            this.play_bt.onclick = this.click_f;
            // this.play_bt.container.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this._app._so.load_by_name(comics_so);
        }
        public click_f(param1: egret.TouchEvent): any {
            if (this._mo(this.play_bt)) {
                this._app.open_new_screen("team_register");
                this._app._so.stop_so();
            }
        }
        public delete_f(): any {
            this.play_bt.removeListener();//.container.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.sounds_control_cl.delete_f();
        }
        // public frame609(): any {
        //     this.stop();
        // }
    }
}
