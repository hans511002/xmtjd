class card_mc extends std.MovieClip {
    public bg_cl: std.MovieClip = null;
    public cat_cl: std.MovieClip = null;
    public des_tx: TextField = null;
    public icon_cl: std.MovieClip = null;
    public n_tx: TextField = null;
    public over_cl: std.MovieClip = null;
    public telo: std.MovieClip = null;
    public title_tx: TextField = null;
    public wear_cl: std.MovieClip = null;

    public constructor() {
        super();
        this.addFrameScript(0,this.frame1);
    }

    public frame1(): any {
        this.stop();
    }
}
