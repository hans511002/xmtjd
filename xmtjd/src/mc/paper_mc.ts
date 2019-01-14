class paper_mc extends std.MovieClip {
    public data_tx: std.MCLabel = null;
    public fish_tx: std.MCLabel = null;
    public news_cl: std.MovieClipSub = null;
    public news_clCat1: paper_cat = null;
    public news_clCat2: paper_cat = null;
    public pts_tx: std.MCLabel = null;
    public r_tx: std.MCLabel = null;

    public constructor() {
        super(Config.mcRoot, "paper_mc", "paper_mc");
        this.news_cl = this.createMovieClipSub("news_cl");
        this.data_tx = this.createLabel("data_tx");
        this.fish_tx = this.createLabel("fish_tx");
        this.pts_tx = this.createLabel("pts_tx");
        this.r_tx = this.createLabel("r_tx");

        this.news_clCat1 = new paper_cat(this, "cat1");// this.news_cl.createMovieClipSub("cat1");
        this.news_clCat2 = new paper_cat(this, "cat2");//this.news_cl.createMovieClipSub("cat2");

        this.news_cl.mcMask = this.news_cl.createMask(dragonBones.EventObject.START, "mask", "cat1", "cat2", "bg");

    }
}

class paper_cat {
    par: paper_mc = null;
    soltName: string = null;
    public cat: std.MovieClipSub = null;

    public catHand_r_cl: std.MovieClipSub;
    public catHand_r_clS2: std.MovieClipSub;
    public catHand_r_clSleeve_cl: std.MovieClipSub;
    public catHand_r_clWool_cl: std.MovieClipSub;
    public catHead_cl: std.MovieClipSub;
    public catHead_clWool_cl: std.MovieClipSub;
    public catHead_clWool_clFace_cl: std.MovieClipSub;
    public catHead_clH2: std.MovieClipSub;
    public catSkirt_cl: std.MovieClipSub;
    public catBody_cl: std.MovieClipSub;
    public catBody_clB2: std.MovieClipSub;
    public catBody_clWool_cl: std.MovieClipSub;

    public catFoot1_cl: std.MovieClipSub;
    public catFoot1_clP2: std.MovieClipSub;
    public catFoot1_clWool_cl: std.MovieClipSub;
    public catFoot2_cl: std.MovieClipSub;
    public catFoot2_clP2: std.MovieClipSub;
    public catFoot2_clWool_cl: std.MovieClipSub;

    public catHand_l_cl: std.MovieClipSub;
    public catHand_l_clW2: std.MovieClipSub;
    public catHand_l_clSleeve_cl: std.MovieClipSub;
    public catHand_l_clWool_cl: std.MovieClipSub;
    public catCloak_cl: std.MovieClipSub;
    public catTail_cl: std.MovieClipSub;

    public constructor(par: paper_mc, soltName: string) {
        // super();
        this.par = par;
        this.soltName = soltName;
        this.cat = par.news_cl.createMovieClipSub(soltName, 1);

        this.catHead_cl = this.cat.createMovieClipSub("head_cl");
        this.catHand_r_cl = this.cat.createMovieClipSub("hand_r_cl");
        this.catHand_l_cl = this.cat.createMovieClipSub("hand_l_cl");
        this.catSkirt_cl = this.cat.createMovieClipSub("skirt_cl");
        this.catBody_cl = this.cat.createMovieClipSub("body_cl");
        this.catFoot1_cl = this.cat.createMovieClipSub("foot1_cl");
        this.catFoot2_cl = this.cat.createMovieClipSub("foot2_cl");
        this.catCloak_cl = this.cat.createMovieClipSub("cloak_cl");
        this.catTail_cl = this.cat.createMovieClipSub("tail_cl");

        this.catHead_clH2 = this.catHead_cl.createMovieClipSub("h2");
        this.catHead_clWool_cl = this.catHead_cl.createMovieClipSub("wool_cl");
        this.catHead_clWool_clFace_cl = this.catHead_clWool_cl.createMovieClipSub("face_cl", 1);

        this.catHand_r_clS2 = this.catHand_r_cl.createMovieClipSub("s2");
        this.catHand_r_clSleeve_cl = this.catHand_r_cl.createMovieClipSub("sleeve_cl");
        this.catHand_r_clWool_cl = this.catHand_r_cl.createMovieClipSub("wool_cl");

        this.catBody_clB2 = this.catBody_cl.createMovieClipSub("b2");
        this.catBody_clWool_cl = this.catBody_cl.createMovieClipSub("wool_cl");

        this.catFoot1_clP2 = this.catFoot1_cl.createMovieClipSub("b2");
        this.catFoot1_clWool_cl = this.catFoot1_cl.createMovieClipSub("wool_cl");

        this.catFoot2_clP2 = this.catFoot2_cl.createMovieClipSub("b2");
        this.catFoot2_clWool_cl = this.catFoot2_cl.createMovieClipSub("wool_cl");

        this.catHand_l_clW2 = this.catHand_l_cl.createMovieClipSub("w2");
        this.catHand_l_clSleeve_cl = this.catHand_l_cl.createMovieClipSub("sleeve_cl");
        this.catHand_l_clWool_cl = this.catHand_l_cl.createMovieClipSub("wool_cl");

    }
}
