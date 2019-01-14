class tuto6_mc extends std.MovieClip {
    public arrow_1: std.MovieClipSub = null;
    public arrow_2: std.MovieClipSub = null;
    public arrow_3: std.MovieClipSub = null;
    public arrow_4: std.MovieClipSub = null;
    public over1: std.MovieClipSub = null;
    public over2: std.MovieClipSub = null;
    public over3: std.MovieClipSub = null;
    public over4: std.MovieClipSub = null;
    public constructor() {
        super(Config.mcRoot, "tuto6_mc", "tuto6_mc");
        this.arrow_1 = this.createMovieClipSub("arrow_1");
        this.arrow_2 = this.createMovieClipSub("arrow_2");
        this.arrow_3 = this.createMovieClipSub("arrow_3");
        this.arrow_4 = this.createMovieClipSub("arrow_4");

        this.over1 = this.createMovieClipSub("over1");
        this.over2 = this.createMovieClipSub("over2");
        this.over3 = this.createMovieClipSub("over3");
        this.over4 = this.createMovieClipSub("over4");


    }
}
