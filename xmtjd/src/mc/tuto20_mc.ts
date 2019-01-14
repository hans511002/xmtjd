class tuto20_mc extends std.MovieClip {
    public bg_cl: std.MovieClipSub = null;
    public constructor() {
        super(Config.mcRoot, "tuto20_mc", "tuto20_mc");
        this.bg_cl = this.createMovieClipSub("bg_cl");
    }
}
