module com.code {
    export class Deqaf extends std.MovieClip {
        public splash_deqaf_cl: std.MovieClipSub = null;
        _app: App = null;
        _sounds: LoadSounds = null;
        s708: std.MovieClipSub = null;
        s708S709: std.MovieClipSub = null;
        oldFrameRate: number;
        public constructor() {
            super(Config.mcRoot, "Deqaf");
            this._app = App.getInstance();
            this.splash_deqaf_cl = this.createMovieClipSub("splash_deqaf_cl");
            this.splash_deqaf_cl.mcMask = this.splash_deqaf_cl.createMask(dragonBones.EventObject.START, "mask", "bg");
            this.s708 = this.createMovieClipSub("s708");
            this.s708S709 = this.s708.createMovieClipSub("s709");
        }
        public init(): void {
            this.addEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
            this._sounds = new LoadSounds();
            this.oldFrameRate = this.stage.frameRate;
            this.stage.frameRate = 60;
        }
        public sp_f(param1: egret.Event): any {
            this.splash_deqaf_cl.nextFrame();
            if (this.splash_deqaf_cl.currentFrame == 3) {
                this._sounds.load_by_name(deqaf_zvuk);
            }
            if (this.splash_deqaf_cl.currentFrame == this.splash_deqaf_cl.totalFrames) {
                this.stage.frameRate = 40;
                this.removeEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
                this._app.open_new_screen("menu");
            }
        }
        public delete_f(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
            this.stage.frameRate = this.oldFrameRate;
        }
    }
}
