module com.code.buttons {
    export class Deqaf_button extends std.MovieClip {
        public constructor() {
            super(Config.mcRoot, "Deqaf_button", "buttons");
            this.addFrameScript(0, this.frame1);
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
        }
        public click_f(param1: egret.TouchEvent): any {
            // "_blank";
            // new URLRequest("http://deqaf.com");
        }
        public frame1(): any {
            this.stop();
        }

        static isReadyLoad(): boolean {
            if (std.isReadyDbFile(Config.mcRoot, "buttons")) {
                return true;
            }
            return false;
        }
    }
}
