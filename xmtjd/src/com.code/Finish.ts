module com.code {
    export class Finish extends DataMovieClip {
        public play_bt: std.MCButton = null;
        public sounds_control_cl: Buttons_sounds2 = null;
        _app: App = null;
        public constructor() {
            super("Finish");
            this._app = App.getInstance();
            this.play_bt = this.createMCButton("play_bt");
        }
        public init(): void {
            this._app._music.load_music("dance");
            this.play_bt.onclick = this.click_f;// .addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
        }
        public click_f(param1: egret.TouchEvent): any {
            if (this._mo(this.play_bt)) {
                this._app.open_new_screen("menu");
            }
        }
        public delete_f(): any {
            this.play_bt.removeListener();//.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.sounds_control_cl.delete_f();
        }
    }
}
