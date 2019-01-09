module com.code
{
    export class Playoff extends DataMovieClip
    {
        public sc_cl: std.MovieClip = null;
        public table_cl: std.MovieClip = null;
        _app: App = null;
        time: number = 0;
        _info_enemy: Enemy = null;
        public constructor(){
            this._app = App.getInstance();
            super();
            this.addFrameScript(86,this.frame87);
        }
        public init(): void{
            this._app._music.delete_music("all");
            this.addEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
            this.table_cl.ass_1H2.gotoAndStop(1);
            this.table_cl.ass_2H2.gotoAndStop(2);
            this.table_cl.ass_1.gotoAndPlay(1);
            this.table_cl.ass_2.gotoAndPlay(17);
            this._info_enemy = new Enemy();
            this._app._so.load_by_name(league_so);
        }
        public game_f(param1: egret.Event): any{
            this.time++;
            if(this.time == 90){
                this._app._so.load_by_name(applo_so);
                this.table_cl.gotoAndPlay(2);
            }
            if(this.time == 235){
                this._app._so.load_by_name(take_ball_so);
                this.sc_cl.slot_1.title1_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_1);
                this.sc_cl.slot_1Line_1.gotoAndPlay(2);
            }
            if(this.time == 307){
                this._app._so.load_by_name(take_ball_so);
                this.sc_cl.slot_1.title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_2);
                this.sc_cl.slot_1Line_2.gotoAndPlay(2);
            }
            if(this.time == 380){
                this._app._so.load_by_name(take_ball_so);
                this.sc_cl.slot_2.title1_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_3);
                this.sc_cl.slot_2Line_1.gotoAndPlay(2);
            }
            if(this.time == 460){
                this._app._so.load_by_name(take_ball_so);
                this.sc_cl.slot_2.title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_4);
                this.sc_cl.slot_2Line_2.gotoAndPlay(2);
            }
            if(this.time == 480){
                this._app._so.load_by_name(applo_so);
                this.sc_cl.slot_2.title2_tx.text = this._info_enemy.got_title(Main.sav.data.off_team_4);
            }
            if(this.time >= 600){
                this._app.open_new_screen("upg");
            }
        }
        public delete_f(): any{
            this.removeEventListener(egret.Event.ENTER_FRAME,this.game_f,this);
        }
        public frame87(): any{
            this.stop();
        }
    }
}
