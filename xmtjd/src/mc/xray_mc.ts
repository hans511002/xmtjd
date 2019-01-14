class xray_mc extends std.MovieClip {
    public ray2: std.MovieClipSub = null;
    public constructor() {
        super(Config.mcRoot, "xray_mc", "xray_mc");
        this.ray2 = this.createMovieClipSub("ray2");
    }
}
