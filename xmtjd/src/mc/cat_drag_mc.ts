class cat_drag_mc extends std.MovieClip {
    public cat1: std.MovieClipSub = null;
    public telo: std.MCSprite = null;

    cat1Cat2: std.MovieClipSub = null;
    public constructor() {
        super(Config.mcRoot, "cat_drag_mc", "cat_drag_mc");
        this.cat1 = this.createMovieClipSub("cat1", 1);
        this.cat1Cat2 = this.cat1.createMovieClipSub("cat2");
        // this.telo = this.createMovieClipSub("telo");
    }
}
