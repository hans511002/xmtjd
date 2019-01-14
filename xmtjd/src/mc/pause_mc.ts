class pause_mc extends std.MovieClip {
    public home_bt: std.MovieClipSub = null;
    public home_btHome_bt: std.MCButton = null;
    public resume_bt: std.MCButton = null;
    public constructor() {
        super(Config.mcRoot, "pause_mc", "pause_mc");
        this.home_bt = this.createMovieClipSub("home_bt");
        this.home_btHome_bt = this.home_bt.createMCButton("home_bt", 1);
        this.resume_bt = this.createMCButton("resume_bt");
    }
}
