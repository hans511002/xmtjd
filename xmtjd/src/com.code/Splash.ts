module com.code {
    export class Splash extends std.MovieClip {
        public splash_deqaf_cl: std.MovieClip = null;
        _app: App = null;
        public constructor() {
            super();
            this._app = App.getInstance();
        }
        public init(): void {
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
            this.stage.frameRate = 60;
        }
        public click_f(param1: egret.TouchEvent): any {
            // navigateToURL(new URLRequest("http://armor.ag/MoreGames"), "_blank");
        }
        public sp_f(param1: egret.Event): any {
            if (this.splash_deqaf_cl.currentFrame == this.splash_deqaf_cl.totalFrames) {
                this.removeEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
                this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
                this._app.open_new_screen("deqaf");
            }
        }
        public delete_f(): any {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.sp_f, this);
        }
    }
}
