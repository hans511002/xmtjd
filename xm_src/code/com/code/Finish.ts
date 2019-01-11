module com.code {
    export class Finish extends DataMovieClip {
        public play_bt: std.MCButton = null;
        public sounds_control_cl: Buttons_sounds2 = null;
        _app: App = null;

        public constructor() {
            this._app = App.getInstance();
            super();
        }

        public init(): void {
            this._app._music.load_music("dance");
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
        }

        public click_f(param1: egret.TouchEvent): any {
            if(_mo(this.play_bt)) {
                this._app.open_new_screen("menu");
            }
        }

        public delete_f(): any {
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this.sounds_control_cl.delete_f();
        }
    }
}
