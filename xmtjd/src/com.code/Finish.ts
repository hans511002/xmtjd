module com.code {
    export class Finish extends DataMovieClip {
        public play_bt: std.MCButton = null;
        public sounds_control_cl: Buttons_sounds2 = null;
        public sponsor_button2: Sponsor_button2 = null;
        public deqaf_button: buttons.Deqaf_button = null;

        card3: std.MovieClipSub;
        card2: std.MovieClipSub;
        card1: std.MovieClipSub;
        _app: App = null;
        public constructor() {
            super("Finish");
            this._app = App.getInstance();
            this.play_bt = this.createMCButton("play_bt");
            this.sounds_control_cl = <Buttons_sounds2>this.addMovieClip("sounds_control_cl", new Buttons_sounds2());
            this.sponsor_button2 = <Sponsor_button2>this.addMovieClip("sponsor_button2", new Sponsor_button2());
            this.deqaf_button = <buttons.Deqaf_button>this.addMovieClip("deqaf_button", new buttons.Deqaf_button());

            this.card3 = this.createMovieClipSub("card3");
            this.card3.mcMask = this.card3.createMask(std.MCMask.START, "mask", "l3", "l4", "l5", "l6", "l7");
            this.card2 = this.createMovieClipSub("card2");
            this.card2.mcMask = this.card2.createMask(std.MCMask.START, "mask", "l3", "l4", "l5", "l6", "l7", "l8", "l9");
            this.card1 = this.createMovieClipSub("card1");
            this.card1.mcMask = this.card1.createMask(std.MCMask.START, "mask", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10", "l11");
            this.play_bt.onclick = this.click_f;// .addEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);

        }
        public init(): void {
            this._app._music.load_music("dance");
        }
        public click_f(param1: egret.TouchEvent): any {
            if (this._mo(this.play_bt)) {
                this._app.open_new_screen("menu");
            }
        }
        public delete_f(): any {
            this.play_bt.removeListener();//.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.click_f, this);
            this.sounds_control_cl.delete_f();
        }
    }
}
