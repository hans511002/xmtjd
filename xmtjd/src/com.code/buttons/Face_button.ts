module com.code.buttons {
    export class Face_button extends std.MovieClip {
        public constructor() {
            super(Config.mcRoot, "Face_button", "Face_button");

            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
        }
        public click_f(param1: egret.TouchEvent): any {
            //"_blank";
            // new URLRequest("http://www.facebook.com/pages/Deqaf/140018289532436");

        }
    }
}
