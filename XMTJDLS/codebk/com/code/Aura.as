package com.code
{
    import flash.display.*;

    public class Aura extends DataMovieClip
    {
        var _game:Game;
        var type:int;
        var time:int = 0;
        var time2:int;
        var skin:MovieClip;
        var side:int;

        public function Aura()
        {
            this._game = Game.getInstance();
            return;
        }// end function

        function init(param1, param2, param3)
        {
            this.type = param2;
            this.side = param1;
            this.time2 = param3;
            this.skin = _sp(aura_all_mc, this, 0, 0);
            this.skin.gotoAndStop(this.type);
            if (this.type == 1)
            {
                this.skin.icon_cl.gotoAndStop(5);
            }
            else if (this.type == 2)
            {
                this.skin.icon_cl.gotoAndStop(6);
            }
            else if (this.type == 3)
            {
                this.skin.icon_cl.gotoAndStop(8);
            }
            else
            {
                this.skin.icon_cl.gotoAndStop(9);
            }
            if (this.side == 1)
            {
                this.skin.x = 25 + 50 * this._game.arr_aura_cat.length;
                this.skin.y = 25;
            }
            else
            {
                this.skin.x = 625 - 50 * this._game.arr_aura_fox.length;
                this.skin.y = 25;
            }
            this.skin.scale_cl.gotoAndStop(1);
            return;
        }// end function

    }
}
