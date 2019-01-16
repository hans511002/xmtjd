module com.code {
    export class Buttons_sounds2 extends std.MovieClip {
        public music_bt: std.MCButton = null;
        public sfx_bt: std.MCButton = null;
        _app: App = null;
        public constructor() {
            super("Buttons_sounds2");
            this._app = App.getInstance();
            this.music_bt = this.createMCButton("music_bt");
            this.sfx_bt = this.createMCButton("sfx_bt");
            if (this.stage) {
                this.init();
            }
            else {
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
            }
        }
        public init(param1: egret.Event = null): void {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
            this.sfx_bt.onclick = this.click_sfx_f;//.container.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_sfx_f, this);
            this.music_bt.onclick = this.click_music_f;//.container.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_music_f, this);
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
            this.sfx_bt.removeListener();//.container.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_sfx_f, this);
            this.music_bt.removeListener();//.container.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_music_f, this);
        }
    }
}
