module com.code
{
    export class Aura extends DataMovieClip
    {
        _game: Game = null;
        type: number = 0;
        time: number = 0;
        time2: number = 0;
        skin: std.MovieClip = null;
        side: number = 0;
        public constructor(){
            this._game = Game.getInstance();
            super();
        }
        public init(param1: any, param2: any, param3: any): any{
            this.type = param2;
            this.side = param1;
            this.time2 = param3;
            this.skin = this._sp(aura_all_mc,this,0,0);
            this.skin.gotoAndStop(this.type);
            if(this.type == 1)
            {
                this.skin.icon_cl.gotoAndStop(5);
            }
            else if(this.type == 2)
            {
                this.skin.icon_cl.gotoAndStop(6);
            }
            else if(this.type == 3)
            {
                this.skin.icon_cl.gotoAndStop(8);
            }
            else
            {
                this.skin.icon_cl.gotoAndStop(9);
            }
            if(this.side == 1)
            {
                this.skin.$setX(25 + 50 * this._game.arr_aura_cat.length);
                this.skin.$setY(25);
            }
            else
            {
                this.skin.$setX(625 - 50 * this._game.arr_aura_fox.length);
                this.skin.$setY(25);
            }
            this.skin.scale_cl.gotoAndStop(1);
        }
    }
}
