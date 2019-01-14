class paper_new_mc extends std.MovieClip {
    public news_tx: std.MCLabel = null;
    public paper_cl: std.MovieClipSub = null;
    public paper_clData_tx: std.MCLabel = null;
    public pic_cl: std.MovieClipSub = null;
    public constructor() {
        super(Config.mcRoot, "paper_new_mc", "paper_new_mc");
        this.news_tx = this.createLabel("news_tx");
        this.paper_cl = this.createMovieClipSub("paper_cl");
        this.paper_clData_tx = this.paper_cl.createLabel("data_tx");
        this.pic_cl = this.createMovieClipSub("pic_cl");

    }
}
