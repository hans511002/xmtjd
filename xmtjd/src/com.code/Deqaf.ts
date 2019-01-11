module com.code {
    export class Deqaf extends std.MovieClip {
        public splash_deqaf_cl: std.MovieClip = null;
        _app: App = null;
        _sounds: LoadSounds = null;
        public constructor() {
            super();
            this._app = App.getInstance();
        }
        public init(): void {
            this.addEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
            this._sounds = new LoadSounds();
            this.stage.frameRate = 60;
        }
        public sp_f(param1: egret.Event): any {
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
        }
    }
}
