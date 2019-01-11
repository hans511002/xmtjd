module com.code {
    export class Buttons_sounds2 extends std.MovieClip {
        public music_bt: std.MovieClip = null;
        public sfx_bt: std.MovieClip = null;
        _app: App = null;
        public constructor() {
            super();
            this._app = App.getInstance();
            if (this.stage) {
                this.init();
            }
            else {
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
            }
        }
        public init(param1: egret.Event = null): void {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
            this.sfx_bt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_sfx_f, this);
            this.music_bt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_music_f, this);
            this.check_mute();
        }
        public check_mute(): any {
            if (Main.mute_sfx) {
                this.sfx_bt.gotoAndStop(2);
            }
            else {
                this.sfx_bt.gotoAndStop(1);
            }
            if (Main.mute_music) {
                this.music_bt.gotoAndStop(2);
            }
            else {
                this.music_bt.gotoAndStop(1);
            }
        }
        public click_sfx_f(param1: egret.TouchEvent): any {
            Main.mute_sfx = !Main.mute_sfx;
            if (Main.mute_sfx) {
                this.sfx_bt.gotoAndStop(2);
            }
            else {
                this.sfx_bt.gotoAndStop(1);
            }
        }
        public click_music_f(param1: egret.TouchEvent): any {
            Main.mute_music = !Main.mute_music;
            if (Main.mute_music) {
                this.music_bt.gotoAndStop(2);
            }
            else {
                this.music_bt.gotoAndStop(1);
            }
            this._app._music.mute();
        }
        public delete_f(): any {
            this.sfx_bt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_sfx_f, this);
            this.music_bt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_music_f, this);
        }
    }
}
