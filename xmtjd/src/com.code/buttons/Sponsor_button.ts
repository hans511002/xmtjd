module com.code.buttons {
    export class Sponsor_button extends std.MovieClip {
        public constructor() {
            super(Config.mcRoot, "Sponsor_button", "Sponsor_button");

            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
        }
        public click_f(param1: egret.TouchEvent): any {
        }
    }
}
