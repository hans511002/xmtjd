class cat_drag_mc extends std.MovieClip {
    public cat1: std.MovieClipSub = null;
    public telo: std.MCCase = null;

    cat1Cat2: SubCat = null;

    // public cat1Cat2Hand_r_cl: std.MovieClipSub;
    // public cat1Cat2Hand_r_clS2: std.MovieClipSub;
    // public cat1Cat2Hand_r_clSleeve_cl: std.MovieClipSub;
    // public cat1Cat2Hand_r_clWool_cl: std.MovieClipSub;
    // public cat1Cat2Head_cl: std.MovieClipSub;
    // public cat1Cat2Head_clWool_cl: std.MovieClipSub;
    // public cat1Cat2Head_clWool_clFace_cl: std.MovieClipSub;
    // public cat1Cat2Head_clH2: std.MovieClipSub;
    // public cat1Cat2Skirt_cl: std.MovieClipSub;
    // public cat1Cat2Body_cl: std.MovieClipSub;
    // public cat1Cat2Body_clB2: std.MovieClipSub;
    // public cat1Cat2Body_clWool_cl: std.MovieClipSub;

    // public cat1Cat2Foot1_cl: std.MovieClipSub;
    // public cat1Cat2Foot1_clP2: std.MovieClipSub;
    // public cat1Cat2Foot1_clWool_cl: std.MovieClipSub;
    // public cat1Cat2Foot2_cl: std.MovieClipSub;
    // public cat1Cat2Foot2_clP2: std.MovieClipSub;
    // public cat1Cat2Foot2_clWool_cl: std.MovieClipSub;

    // public cat1Cat2Hand_l_cl: std.MovieClipSub;
    // public cat1Cat2Hand_l_clW2: std.MovieClipSub;
    // public cat1Cat2Hand_l_clSleeve_cl: std.MovieClipSub;
    // public cat1Cat2Hand_l_clWool_cl: std.MovieClipSub;
    // public cat1Cat2Cloak_cl: std.MovieClipSub;
    // public cat1Cat2Tail_cl: std.MovieClipSub;

    cat1Cat2Mask: std.MovieClipSub = null;
    cat1Cat2Tr_cl: std.MovieClipSub = null;
    cat1Cat2Eat: std.MovieClipSub = null;

    public constructor() {
        super(Config.mcRoot, "cat_drag_mc", "cat_drag_mc");
        this.cat1 = this.createMovieClipSub("cat1", 1);
        // this.cat1Cat2 = this.cat1.createMovieClipSub("cat2", 1);
        this.cat1Cat2 = new SubCat(this.cat1, "cat2", "", 1);

        this.telo = this.createCase("telo");
        this.cat1Cat2.subInit = this.subInit;
    }
    subInit(): void {
        // this.cat1Cat2Head_cl = this.cat1Cat2.createMovieClipSub("head_cl");
        // this.cat1Cat2Hand_r_cl = this.cat1Cat2.createMovieClipSub("hand_r_cl");
        // this.cat1Cat2Hand_l_cl = this.cat1Cat2.createMovieClipSub("hand_l_cl");
        // this.cat1Cat2Skirt_cl = this.cat1Cat2.createMovieClipSub("skirt_cl");
        // this.cat1Cat2Body_cl = this.cat1Cat2.createMovieClipSub("body_cl");
        // this.cat1Cat2Foot1_cl = this.cat1Cat2.createMovieClipSub("foot1_cl");
        // this.cat1Cat2Foot2_cl = this.cat1Cat2.createMovieClipSub("foot2_cl");
        // this.cat1Cat2Cloak_cl = this.cat1Cat2.createMovieClipSub("cloak_cl");
        // this.cat1Cat2Tail_cl = this.cat1Cat2.createMovieClipSub("tail_cl");

        // this.cat1Cat2Head_clH2 = this.cat1Cat2Head_cl.createMovieClipSub("h2");
        // this.cat1Cat2Head_clWool_cl = this.cat1Cat2Head_cl.createMovieClipSub("wool_cl");
        // this.cat1Cat2Head_clWool_clFace_cl = this.cat1Cat2Head_clWool_cl.createMovieClipSub("face_cl", 1);

        // this.cat1Cat2Hand_r_clS2 = this.cat1Cat2Hand_r_cl.createMovieClipSub("s2");
        // this.cat1Cat2Hand_r_clSleeve_cl = this.cat1Cat2Hand_r_cl.createMovieClipSub("sleeve_cl");
        // this.cat1Cat2Hand_r_clWool_cl = this.cat1Cat2Hand_r_cl.createMovieClipSub("wool_cl");

        // this.cat1Cat2Body_clB2 = this.cat1Cat2Body_cl.createMovieClipSub("b2");
        // this.cat1Cat2Body_clWool_cl = this.cat1Cat2Body_cl.createMovieClipSub("wool_cl");

        // this.cat1Cat2Foot1_clP2 = this.cat1Cat2Foot1_cl.createMovieClipSub("b2");
        // this.cat1Cat2Foot1_clWool_cl = this.cat1Cat2Foot1_cl.createMovieClipSub("wool_cl");

        // this.cat1Cat2Foot2_clP2 = this.cat1Cat2Foot2_cl.createMovieClipSub("b2");
        // this.cat1Cat2Foot2_clWool_cl = this.cat1Cat2Foot2_cl.createMovieClipSub("wool_cl");

        // this.cat1Cat2Hand_l_clW2 = this.cat1Cat2Hand_l_cl.createMovieClipSub("w2");
        // this.cat1Cat2Hand_l_clSleeve_cl = this.cat1Cat2Hand_l_cl.createMovieClipSub("sleeve_cl");
        // this.cat1Cat2Hand_l_clWool_cl = this.cat1Cat2Hand_l_cl.createMovieClipSub("wool_cl");

        this.cat1Cat2.mcMask = null;
        if (this.currentFrame == 6) {
            this.cat1Cat2Eat = this.cat1Cat2.createMovieClipSub("eat");
            this.cat1Cat2.mcMask = this.cat1Cat2.createMask(dragonBones.EventObject.START, "mask", "hand_r_cl", "head_cl", "skirt_cl", "body_cl", "foot1_cl", "foot2_cl", "hand_l_cl", "cloak_cl", "tail_cl");
        } else if (this.currentFrame == 3) {
            this.cat1Cat2Mask = this.cat1Cat2.createMovieClipSub("massk");
            this.cat1Cat2Mask.mcMask = this.cat1Cat2Mask.createMask(dragonBones.EventObject.START, "mask", "bg");
            this.cat1Cat2Tr_cl = this.createMovieClipSub("tr_cl");
        } else if (this.currentFrame == 4 || this.currentFrame == 5 || this.currentFrame == 7) {
            this.cat1Cat2Tr_cl = this.createMovieClipSub("tr_cl");
        }

    }

}
