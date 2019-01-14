class pause_mc extends std.MovieClip {
    public home_bt: std.MCButton = null;
    public resume_bt: std.MCButton = null;
    public constructor() {
        super(Config.mcRoot, "pause_mc", "pause_mc");
        this.home_bt = this.createMCButton("home_bt");
        this.resume_bt = this.createMCButton("resume_bt");
    }
}
