class tuto_mc extends std.MovieClip {
    arr: std.MovieClipSub;
    public constructor(armName: string) {
        super(Config.mcRoot, armName, "tuto_mc");
        this.arr = this.createMovieClipSub("arr");
    }
}
