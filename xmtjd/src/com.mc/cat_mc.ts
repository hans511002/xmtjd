
class cat_mc extends std.MovieClip {
    armor_cl: std.MovieClipSub;
    cat1: std.MovieClipSub;
    cat1Cat2: std.MovieClipSub;
    cat1Cat2Head_cl: std.MovieClipSub;
    cat1Cat2Head_clH2: std.MovieClipSub;
    cat1Cat2Head_clWool_cl: std.MovieClipSub;

    public constructor() {
        super(Config.mcRoot, "cat_mc", "cat_mc");
        this.armor_cl = this.createMovieClipSub("armor_cl");
        this.cat1 = this.createMovieClipSub("cat1");
        this.cat1Cat2 = this.cat1.createMovieClipSub("cat2", 1);
        this.cat1Cat2Head_cl = this.cat1Cat2.createMovieClipSub("head_cl");
        this.cat1Cat2Head_clH2 = this.cat1Cat2Head_cl.createMovieClipSub("h2");
        this.cat1Cat2Head_clWool_cl = this.cat1Cat2Head_cl.createMovieClipSub("wool_cl");
        //  cat1.cat2.head_cl.wool_cl.face_cl.gotoAndStop(3);


        // cat1 cat1 addFrameScript(9, this.frame10, 20, this.frame21, 31, this.frame32, 42, this.frame43, 53, this.frame54);

        return;
    }// end function

} 
