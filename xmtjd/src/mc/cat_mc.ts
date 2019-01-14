
class cat_mc extends std.MovieClip {
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
        this.cat1Cat2Head_cl = this.cat1Cat2.createMovieClipSub("head_cl");
        this.cat1Cat2Hand_r_cl = this.cat1Cat2.createMovieClipSub("hand_r_cl");
        this.cat1Cat2Hand_l_cl = this.cat1Cat2.createMovieClipSub("hand_l_cl");
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

        this.cat1Cat2Hand_l_clW2 = this.cat1Cat2Hand_l_cl.createMovieClipSub("w2");
        this.cat1Cat2Hand_l_clSleeve_cl = this.cat1Cat2Hand_l_cl.createMovieClipSub("sleeve_cl");
        this.cat1Cat2Hand_l_clWool_cl = this.cat1Cat2Hand_l_cl.createMovieClipSub("wool_cl");

        if (this.currentFrame == 7) {
            this.cat1Cat2Yum = this.cat1Cat2.createMovieClipSub("yum");
        } else if (this.currentFrame == 10) {
            this.cat1Cat2Bom = this.cat1Cat2.createMovieClipSub("bom");
        } else if (this.currentFrame == 12 || this.currentFrame == 13 || this.currentFrame == 22) {
            this.cat1Cat2Bold = this.cat1Cat2.createMovieClipSub("bold");
            this.cat1Cat2Bold.mcMask = this.cat1Cat2Bold.createMask(dragonBones.EventObject.START, "mask", "bg");
            this.cat1Cat2Bg = this.cat1Cat2.createMovieClipSub("bg");
            this.cat1Cat2Bg.mcMask = this.cat1Cat2Bg.createMask(dragonBones.EventObject.START, "mask", "bg");
        } else if (this.currentFrame == 14) {
            this.cat1Cat2Bg = this.cat1Cat2.createMovieClipSub("bg");
            this.cat1Cat2Bg.mcMask = this.cat1Cat2Bg.createMask(dragonBones.EventObject.START, "mask", "bg");
        } else if (this.currentFrame == 15 || this.currentFrame == 16) {
            this.cat1Cat2Bold = this.cat1Cat2.createMovieClipSub("bold");
            this.cat1Cat2Bold.mcMask = this.cat1Cat2Bold.createMask(dragonBones.EventObject.START, "mask", "bg");
            this.cat1Cat2Bg = this.cat1Cat2.createMovieClipSub("bg");
            this.cat1Cat2BgBg = this.cat1Cat2Bg.createMovieClipSub("bg");
            this.cat1Cat2BgBg.mcMask = this.cat1Cat2BgBg.createMask(dragonBones.EventObject.START, "mask", "bg");
        } else if (this.currentFrame == 20 || this.currentFrame == 21) {
            this.cat1Cat2Bg = this.cat1Cat2.createMovieClipSub("bg");
        }
    }
    //7
    public cat1Cat2Yum: std.MovieClipSub;
    //10
    public cat1Cat2Bom: std.MovieClipSub;

    //12 13
    public cat1Cat2Bold: std.MovieClipSub;
    public cat1Cat2Bg: std.MovieClipSub;
    //15 16
    public cat1Cat2BgBg: std.MovieClipSub;

    public cat1Cat2BoldBg: std.MovieClipSub;

} 
