module com.code {
    export class Comics extends DataMovieClip {
        play_bt: eui.Button;// SimpleButton;
        sounds_control_cl: Buttons_sounds2;
        _app: App;

        public constructor() {
            super();
            this._app = App.getInstance();
            // this.addFrameScript(608, this.frame609); 
            return;
        }// end function

        public init() {
            this._app._music.delete_music("all");
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this._app._so.load_by_name(comics_so);
            return;
        }// end function

        public click_f(event: MouseEvent) {
            if (this._mo(this.play_bt)) {
                this._app.open_new_screen("team_register");
                this._app._so.stop_so();
            }
            return;
        }// end function

        public delete_f() {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f,this);
            this.sounds_control_cl.delete_f();
            return;
        }// end function

        public frame609() {
            // stop();
            return;
        }// end function

    }
}
