
export class cat_mc extends std.MovieClip {
    armor_cl: std.MovieClipSub;
    cat1: std.MovieClipSub;
    cat1Cat2: std.MovieClipSub;

    public cat1Cat2Hand_r_cl: std.MovieClipSub;
    public cat1Cat2Hand_r_clS2: std.MovieClipSub;
    public cat1Cat2Hand_r_clSleeve_cl: std.MovieClipSub;
    public cat1Cat2Hand_r_clWool_cl: std.MovieClipSub;
    public cat1Cat2Head_cl: std.MovieClipSub;
    public cat1Cat2Head_clWool_cl: std.MovieClipSub;
    public cat1Cat2Head_clWool_clFace_cl: std.MovieClipSub;
    public cat1Cat2Head_clH2: std.MovieClipSub;
    public cat1Cat2Skirt_cl: std.MovieClipSub;
    public cat1Cat2Body_cl: std.MovieClipSub;
    public cat1Cat2Body_clB2: std.MovieClipSub;
    public cat1Cat2Body_clWool_cl: std.MovieClipSub;

    public cat1Cat2Foot1_cl: std.MovieClipSub;
    public cat1Cat2Foot1_clP2: std.MovieClipSub;
    public cat1Cat2Foot1_clWool_cl: std.MovieClipSub;
    public cat1Cat2Foot2_cl: std.MovieClipSub;
    public cat1Cat2Foot2_clP2: std.MovieClipSub;
    public cat1Cat2Foot2_clWool_cl: std.MovieClipSub;

    public cat1Cat2Hand_l_cl: std.MovieClipSub;
    public cat1Cat2Hand_l_clW2: std.MovieClipSub;
    public cat1Cat2Hand_l_clSleeve_cl: std.MovieClipSub;
    public cat1Cat2Hand_l_clWool_cl: std.MovieClipSub;
    public cat1Cat2Cloak_cl: std.MovieClipSub;
    public cat1Cat2Tail_cl: std.MovieClipSub;

    public constructor() {
        super(Config.mcRoot, "cat_mc", "cat_mc");
        //  cat1.cat2.head_cl.wool_cl.face_cl.gotoAndStop(3);
        // cat1 cat1 addFrameScript(9, this.frame10, 20, this.frame21, 31, this.frame32, 42, this.frame43, 53, this.frame54);
    }// end function

    public gotoAndStop(cf: number, aniName: string = ""): void {
        super.gotoAndStop(cf, aniName);
        this.subInit();
    }
    subInit(): void {
        this.armor_cl = this.createMovieClipSub("armor_cl");
        this.cat1 = this.createMovieClipSub("cat1");
        this.cat1Cat2 = this.cat1.createMovieClipSub("cat2", 1);
        if (this.currentFrame == 1) {
            this.cat1Cat2Head_cl = this.cat1Cat2.createMovieClipSub("head_cl");
            this.cat1Cat2Hand_r_cl = this.cat1Cat2.createMovieClipSub("hand_r_cl");
            this.cat1Cat2Skirt_cl = this.cat1Cat2.createMovieClipSub("skirt_cl");
            this.cat1Cat2Body_cl = this.cat1Cat2.createMovieClipSub("body_cl");
            this.cat1Cat2Foot1_cl = this.cat1Cat2.createMovieClipSub("foot1_cl");
            this.cat1Cat2Foot2_cl = this.cat1Cat2.createMovieClipSub("foot2_cl");
            this.cat1Cat2Cloak_cl = this.cat1Cat2.createMovieClipSub("cloak_cl");
            this.cat1Cat2Tail_cl = this.cat1Cat2.createMovieClipSub("tail_cl");

            this.cat1Cat2Head_clH2 = this.cat1Cat2Head_cl.createMovieClipSub("h2");
            this.cat1Cat2Head_clWool_cl = this.cat1Cat2Head_cl.createMovieClipSub("wool_cl");
            this.cat1Cat2Head_clWool_clFace_cl = this.cat1Cat2Head_clWool_cl.createMovieClipSub("face_cl", 1);

            this.cat1Cat2Hand_r_clS2 = this.cat1Cat2Hand_r_cl.createMovieClipSub("s2");
            this.cat1Cat2Hand_r_clSleeve_cl = this.cat1Cat2Hand_r_cl.createMovieClipSub("sleeve_cl");
            this.cat1Cat2Hand_r_clWool_cl = this.cat1Cat2Hand_r_cl.createMovieClipSub("wool_cl");

            this.cat1Cat2Body_clB2 = this.cat1Cat2Body_cl.createMovieClipSub("b2");
            this.cat1Cat2Body_clWool_cl = this.cat1Cat2Body_cl.createMovieClipSub("wool_cl");

            this.cat1Cat2Foot1_clP2 = this.cat1Cat2Foot1_cl.createMovieClipSub("b2");
            this.cat1Cat2Foot1_clWool_cl = this.cat1Cat2Foot1_cl.createMovieClipSub("wool_cl");

            this.cat1Cat2Foot2_clP2 = this.cat1Cat2Foot2_cl.createMovieClipSub("b2");
            this.cat1Cat2Foot2_clWool_cl = this.cat1Cat2Foot2_cl.createMovieClipSub("wool_cl");

            this.cat1Cat2Hand_l_clW2 = this.cat1Cat2Hand_r_cl.createMovieClipSub("w2");
            this.cat1Cat2Hand_l_clSleeve_cl = this.cat1Cat2Hand_r_cl.createMovieClipSub("sleeve_cl");
            this.cat1Cat2Hand_l_clWool_cl = this.cat1Cat2Hand_r_cl.createMovieClipSub("wool_cl");

        }
    }
} 
