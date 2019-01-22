module com.code {
    export class Sponsor_button extends std.MovieClip {
        public armor_bt: std.MCButton = null;
        public constructor() {
            super(Config.mcRoot, "Sponsor_button", "Sponsor_button");
            this.armor_bt = this.createMCButton("armor_bt");
            // this.afterOnEnter
            this.armor_bt.onclick = this.click_f;
            // this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
        }
        public click_f(param1: egret.TouchEvent): any {
            console.log(egret.getTimer());
            egret.log(param1);
            // navigateToURL(new URLRequest("http://armor.ag/MoreGames"),"_blank");
        }
        static isReadyLoad(): boolean {
            if (std.isReadyDbFile(Config.mcRoot, "Sponsor_button")) {
                return true;
            }
            return false;
        }
    }
}
