module com.code {
    class Aby_enemy extends DataMovieClip {
        _game: Game;
        _app: App;
        skin: std.MovieClip;
        type: number;
        id: number;
        reload_time: number;
        reload_time2: number;
        time: number;
        frame_action: number;
        power: number;
        type_aby: number;
        qe: number;

        public constructor() {
            super();
            this._game = Game.getInstance();
            this._app = App.getInstance();
            return;
        }// end function

        public init(): void {
            this.id = this._app.team_enemy_id * 4 - 8 + this._game.arr_fox.length;
            this.type = this.id;
            this.type_aby = this._game._info.got_type(this.type);
            this.power = this._game._info.got_power(this.type);
            this.frame_action = this._game._info.got_frame(this.type);
            this.time = this._game._info.got_time(this.type);
            this.reload_time2 = this._game._info.got_reload(this.type);
            this.qe = 1;
            this.i = 1;
            while (this.i <= (this._app.team_enemy_level * 0.5)) {
                this.qe = this.qe - 0.015;
                this.i = this.i + 1;
            }
            this.reload_time2 = this.reload_time2 * this.qe;
            this.reload_time = (this.reload_time2 * 0.5);
            return;
        }// end function

    }
}
