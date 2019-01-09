module com.code
{
    export class Team_register extends DataMovieClip
    {
        public n1_tx: TextField = null;
        public n2_tx: TextField = null;
        public n3_tx: TextField = null;
        public n4_tx: TextField = null;
        public name_tx: TextField = null;
        public play_bt: std.MCSimpleButton = null;
        public please_full_cl: std.MovieClip = null;
        public sounds_control_cl: Buttons_sounds2 = null;
        _app: App = null;
        ple: boolean = false;
        public constructor(){
            this._app = App.getInstance();
            super();
        }
        public init(): void{
            this.addEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
            this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this.please_full_cl.$setVisible(false);
            this._app._music.load_music("upg");
        }
        public game_f(param1: egret.Event): any{
        }
        public click_f(param1: egret.TouchEvent): any{
            if(_mo(this.please_full_cl.auto_bt)){
                this.name_tx.text = "猫咪队伍";
                this.n1_tx.text = "菲力克斯";
                this.n2_tx.text = "加菲";
                this.n3_tx.text = "汤姆";
                this.n4_tx.text = "辛巴";
                this._app._so.load_by_name(click_so);
            }
            if(_mo(this.play_bt)){
                this._app._so.load_by_name(click_so);
                this.ple = true;
                if(this.name_tx.text != "" && this.name_tx.text != null){
                    if(this.n1_tx.text != "" && this.n1_tx.text != null){
                        if(this.n2_tx.text != "" && this.n2_tx.text != null){
                            if(this.n3_tx.text != "" && this.n3_tx.text != null){
                                if(this.n4_tx.text != "" && this.n4_tx.text != null){
                                    this.ple = false;
                                    Main.sav.data.team_name_1 = this.name_tx.text;
                                    this._app.open_new_screen("upg");
                                    return;
                                }
                            }
                        }
                    }
                }
                if(this.ple){
                    this.please_full_cl.$setVisible(true);
                }
            }
        }
        public delete_f(): any{
            this.removeEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.click_f,this);
            this.sounds_control_cl.delete_f();
        }
    }
}
