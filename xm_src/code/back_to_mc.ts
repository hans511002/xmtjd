export class back_to_mc extends std.MovieClip
{
    public play_cl: std.MCSimpleButton = null;
    public constructor(){
        super();
        this.addFrameScript(34,this.frame35);
    }
    public frame35(): any{
        this.stop();
    }
}
