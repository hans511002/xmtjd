module com.code {
    export class Aby_enemy extends DataMovieClip {
        _game: Game = null;
        _app: App = null;
        // skin: std.MovieClipSub = null;
        type: number = 0;
        id: number = 0;
        reload_time: number = 0;
        reload_time2: number = 0;
        time: number = 0;
        frame_action: number = 0;
        power: number = 0;
        type_aby: number = 0;
        qe: number = 0;
        public constructor() {
            super();
            this._game = Game.getInstance();
            this._app = App.getInstance();
        }
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
            while (this.i <= Math.floor(this._app.team_enemy_level * 0.5)) {
                this.qe = this.qe - 0.015;
                this.i++;
            }
            this.reload_time2 = this.reload_time2 * this.qe;
            this.reload_time = Math.floor(this.reload_time2 * 0.5);
            return;
        }
    }
}
