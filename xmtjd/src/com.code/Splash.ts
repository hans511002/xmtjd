module com.code {
    export class Splash extends std.MovieClip {
        public splash_deqaf_cl: std.MovieClipSub = null;
        _app: App = null;
        public constructor() {
            super(Config.mcRoot, "Splash");
            this._app = App.getInstance();
            this.splash_deqaf_cl = this.createMovieClipSub("splash_deqaf_cl");
        }

        public init(): void {
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
            this["oldFrameRate"] = this.stage.frameRate;
            this.stage.frameRate = 60;
            this.splash_deqaf_cl.tryPlay();
        }
        public click_f(param1: egret.TouchEvent): any {
            // navigateToURL(new URLRequest("http://armor.ag/MoreGames"), "_blank");
        }
        public sp_f(param1: egret.Event): any {
            this.splash_deqaf_cl.currentFrame++;
            if (this.splash_deqaf_cl.currentFrame == this.splash_deqaf_cl.totalFrames) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
                this._app.open_new_screen("deqaf");
            } else if (this.splash_deqaf_cl.currentFrame == 3) {
                let so1701 = new LoadSounds();
                so1701.load_by_url(Config.SoundRoot + "1701.mp3");
                this["so1701"] = so1701;
                let so1702 = new LoadSounds();
                so1702.load_by_url(Config.SoundRoot + "1702.mp3");
                this["so1702"] = so1702;
            } else if (this.splash_deqaf_cl.currentFrame == 9) {
                let so1706 = new LoadSounds();
                so1706.load_by_url(Config.SoundRoot + "1706.mp3");
                this["so1706"] = so1706;
            } else if (this.splash_deqaf_cl.currentFrame == 33) {
                let so1707 = new LoadSounds();
                so1707.load_by_url(Config.SoundRoot + "1707.mp3");
                this["so1707"] = so1707;
                let so1708 = new LoadSounds();
                so1708.load_by_url(Config.SoundRoot + "1708.mp3");
                this["so1708"] = so1708;
            } else if (this.splash_deqaf_cl.currentFrame == 78) {
                let so1701 = new LoadSounds();
                so1701.load_by_url(Config.SoundRoot + "1701.mp3");
                this["so1701"] = so1701;
                let so1710 = new LoadSounds();
                so1710.load_by_url(Config.SoundRoot + "1710.mp3");
                this["so1710"] = so1710;
            } else if (this.splash_deqaf_cl.currentFrame == 86) {
                let so1714 = new LoadSounds();
                so1714.load_by_url(Config.SoundRoot + "1714.mp3");
                this["so1714"] = so1714;
                let so1715 = new LoadSounds();
                so1715.load_by_url(Config.SoundRoot + "1715.mp3");
                this["so1715"] = so1715;
            }
        }
        public delete_f(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
            this.stage.frameRate = this["oldFrameRate"];
        }

    }
}
