module com.code {
    class Buttons_sounds extends std.BaseNode {
        music_bt: std.MovieClip;
        sfx_bt: std.MovieClip;
        _app: App;

        public constructor() {
            super();
            this._app = App.getInstance();
            if (this.stage) {
                this.init();
            }
            else {
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
            }
            return;
        }// end function

        public init(event: egret.Event = null): void {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
            this.sfx_bt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_sfx_f, this);
            this.music_bt.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_music_f, this);
            this.check_mute();
            return;
        }// end function

        public check_mute() {
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
            return;
        }// end function

        public click_sfx_f(event: egret.TouchEvent) {
            Main.mute_sfx = !Main.mute_sfx;
            if (Main.mute_sfx) {
                this.sfx_bt.gotoAndStop(2);
            }
            else {
                this.sfx_bt.gotoAndStop(1);
            }
            return;
        }// end function

        public click_music_f(event: egret.TouchEvent) {
            Main.mute_music = !Main.mute_music;
            if (Main.mute_music) {
                this.music_bt.gotoAndStop(2);
            }
            else {
                this.music_bt.gotoAndStop(1);
            }
            this._app._music.mute();
            return;
        }// end function

        public delete_f() {
            this.sfx_bt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_sfx_f, this);
            this.music_bt.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_music_f, this);
            return;
        }// end function

    }
}
