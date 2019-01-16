class paper_new_mc extends std.MovieClip {
    public news_tx: eui.Label = null;
    public paper_cl: std.MovieClipSub = null;
    public paper_clData_tx: eui.Label = null;
    public pic_cl: std.MovieClipSub = null;
    public constructor() {
        super(Config.mcRoot, "paper_new_mc", "paper_new_mc");
        this.news_tx = this.createLabel("news_tx");
        this.paper_cl = this.createMovieClipSub("paper_cl");
        this.paper_clData_tx = this.paper_cl.createLabel("data_tx");
        this.pic_cl = this.createMovieClipSub("pic_cl");
        this.pic_cl.mcMask = this.pic_cl.createMask(dragonBones.EventObject.START, "mask", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10", "l11");
    }
}
