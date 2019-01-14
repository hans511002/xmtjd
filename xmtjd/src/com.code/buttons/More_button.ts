module com.code.buttons {
    export class More_button extends std.MovieClip {
        public constructor() {
            super(Config.mcRoot, "More_button", "More_button");

            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
        }
        public click_f(param1: egret.TouchEvent): any {
        }
    }
}
