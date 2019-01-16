class paper_mc extends std.MovieClip {
    public data_tx: eui.Label = null;
    public fish_tx: eui.Label = null;
    public news_cl: std.MovieClipSub = null;
    public news_clCat1: SubCat = null;
    public news_clCat2: SubCat = null;
    public pts_tx: eui.Label = null;
    public r_tx: eui.Label = null;

    public constructor() {
        super(Config.mcRoot, "paper_mc", "paper_mc");
        this.news_cl = this.createMovieClipSub("news_cl");
        this.data_tx = this.createLabel("data_tx");
        this.fish_tx = this.createLabel("fish_tx");
        this.pts_tx = this.createLabel("pts_tx");
        this.r_tx = this.createLabel("r_tx");

        this.news_clCat1 = new SubCat(this.news_cl, "cat1", "", 0);
        this.news_clCat2 = new SubCat(this.news_cl, "cat2", "", 0);

        this.news_cl.mcMask = this.news_cl.createMask(dragonBones.EventObject.START, "mask", "cat1", "cat2", "bg");

    }
}
