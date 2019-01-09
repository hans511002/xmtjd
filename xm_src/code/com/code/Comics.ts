module com.code
{
    export class Comics extends DataMovieClip
    {
        public play_bt: std.MCSimpleButton = null;
        public sounds_control_cl: Buttons_sounds2 = null;
        _app: App = null;
        public constructor(){
            this._app = App.getInstance();
            super();
            this.addFrameScript(608,this.frame609);
        }
        public init(): void{
            this._app._music.delete_music("all");
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this._app._so.load_by_name(comics_so);
        }
        public click_f(param1: egret.TouchEvent): any{
            if(_mo(this.play_bt)){
                this._app.open_new_screen("team_register");
                this._app._so.stop_so();
            }
        }
        public delete_f(): any{
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this.sounds_control_cl.delete_f();
        }
        public frame609(): any{
            this.stop();
        }
    }
}
