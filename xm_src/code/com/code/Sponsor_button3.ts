module com.code
{
    export class Sponsor_button3 extends std.MovieClip
    {
        public armor_bt: std.MCSimpleButton = null;
        public constructor(){
            super();
            this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
        }
        public click_f(param1: egret.TouchEvent): any{
            navigateToURL(new URLRequest("http://armor.ag/MoreGames"),"_blank");
        }
    }
}
