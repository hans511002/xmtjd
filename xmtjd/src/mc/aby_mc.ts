class aby_mc extends std.MovieClip {
    public bt_telo: std.MovieClipSub;//SimpleButton;

    public skala_cl: std.MovieClipSub;
    public cat2: std.MovieClipSub;
    public cat2Hand_r_cl: std.MovieClipSub;
    public cat2Hand_r_clS2: std.MovieClipSub;
    public cat2Hand_r_clSleeve_cl: std.MovieClipSub;
    public cat2Hand_r_clWool_cl: std.MovieClipSub;
    public cat2Head_cl: std.MovieClipSub;
    public cat2Head_clWool_cl: std.MovieClipSub;
    public cat2Head_clWool_clFace_cl: std.MovieClipSub;
    public cat2Head_clH2: std.MovieClipSub;
    public cat2Skirt_cl: std.MovieClipSub;
    public cat2Body_cl: std.MovieClipSub;
    public cat2Body_clB2: std.MovieClipSub;
    public cat2Body_clWool_cl: std.MovieClipSub;

    public cat2Foot1_cl: std.MovieClipSub;
    public cat2Foot1_clP2: std.MovieClipSub;
    public cat2Foot1_clWool_cl: std.MovieClipSub;
    public cat2Foot2_cl: std.MovieClipSub;
    public cat2Foot2_clP2: std.MovieClipSub;
    public cat2Foot2_clWool_cl: std.MovieClipSub;

    public cat2Hand_l_cl: std.MovieClipSub;
    public cat2Hand_l_clW2: std.MovieClipSub;
    public cat2Hand_l_clSleeve_cl: std.MovieClipSub;
    public cat2Hand_l_clWool_cl: std.MovieClipSub;
    public cat2Cloak_cl: std.MovieClipSub;
    public cat2Tail_cl: std.MovieClipSub;

    public icon_cl: std.MovieClipSub;
    public icon_clLock_cl: std.MovieClipSub;
    public icon_clIcon2: std.MovieClipSub;
    public icon_clIcon2Scale_cl: std.MovieClipSub;
    public icon_clIcon2Icon_cl: std.MovieClipSub;
    public icon_clIcon2Bg_cl: std.MovieClipSub;



    public defeat_card: egret.DisplayObject;


    public constructor() {
        super(Config.mcRoot, "aby_mc", "aby_mc");
        this.bt_telo == this.createMovieClipSub("bt_telo");

        this.skala_cl = this.createMovieClipSub("skala_cl");
        this.skala_cl.mcMask = new std.MCMask(this.skala_cl, dragonBones.EventObject.START, "mask", "b");

        this.cat2 = this.createMovieClipSub("cat2");
        this.cat2Hand_r_cl = this.cat2.createMovieClipSub("hand_r_cl");
        this.cat2Hand_r_clS2 = this.cat2Hand_r_cl.createMovieClipSub("s2");
        this.cat2Hand_r_clSleeve_cl = this.cat2Hand_r_cl.createMovieClipSub("sleeve_cl");
        this.cat2Hand_r_clWool_cl = this.cat2Hand_r_cl.createMovieClipSub("wool_cl");

        this.cat2Head_cl = this.createMovieClipSub("head_cl");
        this.cat2Head_clWool_cl = this.cat2Head_cl.createMovieClipSub("wool_cl");
        this.cat2Head_clWool_clFace_cl = this.cat2Head_clWool_cl.createMovieClipSub("face_cl", 1);
        this.cat2Head_clH2 = this.cat2Head_cl.createMovieClipSub("h2");

        this.cat2Skirt_cl = this.cat2.createMovieClipSub("skirt_cl");
        this.cat2Body_cl = this.cat2.createMovieClipSub("body_cl");
        this.cat2Body_clB2 = this.cat2Body_cl.createMovieClipSub("b2");
        this.cat2Body_clWool_cl = this.cat2Body_cl.createMovieClipSub("wool_cl");

        this.cat2Foot1_cl = this.cat2.createMovieClipSub("foot1_cl");
        this.cat2Foot1_clP2 = this.cat2Foot1_cl.createMovieClipSub("b2");
        this.cat2Foot1_clWool_cl = this.cat2Foot1_cl.createMovieClipSub("wool_cl");

        this.cat2Foot2_cl = this.cat2.createMovieClipSub("foot2_cl");
        this.cat2Foot2_clP2 = this.cat2Foot2_cl.createMovieClipSub("b2");
        this.cat2Foot2_clWool_cl = this.cat2Foot2_cl.createMovieClipSub("wool_cl");

        this.cat2Hand_l_cl = this.cat2.createMovieClipSub("hand_l_cl");
        this.cat2Hand_l_clW2 = this.cat2Hand_r_cl.createMovieClipSub("w2");
        this.cat2Hand_l_clSleeve_cl = this.cat2Hand_r_cl.createMovieClipSub("sleeve_cl");
        this.cat2Hand_l_clWool_cl = this.cat2Hand_r_cl.createMovieClipSub("wool_cl");

        this.cat2Cloak_cl = this.cat2.createMovieClipSub("cloak_cl");
        this.cat2Tail_cl = this.cat2.createMovieClipSub("tail_cl");
        this.cat2.mcMask = new std.MCMask(this.cat2, dragonBones.EventObject.START, "mask", "hand_r_cl", "head_cl", "skirt_cl", "body_cl", "foot1_cl", "foot2_cl", "hand_l_cl", "cloak_cl", "tail_cl");

        this.icon_cl = this.createMovieClipSub("icon_cl");
        this.icon_clIcon2 = this.icon_cl.createMovieClipSub("icon2");
        this.icon_clIcon2Scale_cl = this.icon_clIcon2.createMovieClipSub("scale_cl");
        this.icon_clIcon2Icon_cl = this.icon_clIcon2.createMovieClipSub("icon_cl");
        this.icon_clIcon2Bg_cl = this.icon_clIcon2.createMovieClipSub("bg_d");
        this.icon_clIcon2Scale_cl.mcMask = new std.MCMask(this.icon_clIcon2Scale_cl, dragonBones.EventObject.START, "mask", "bg");

        this.defeat_card = this.getSprite("defeat_card");
        return;
    }// end function

}
