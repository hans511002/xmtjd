export class card_game_mc extends std.MovieClip
{
    public card_cl: card_mc = null;
    public constructor(){
        super();
        this.addFrameScript(32,this.frame33);
    }
    public frame33(): any{
        this.stop();
    }
}
