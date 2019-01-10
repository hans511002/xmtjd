export class paper_mc extends std.MovieClip {
    public data_tx: std.MCLabel = null;
    public fish_tx: std.MCLabel = null;
    public news_cl: std.MovieClipSub = null;
    public pts_tx: std.MCLabel = null;
    public r_tx: std.MCLabel = null;
    public constructor() {
        super(Config.mcRoot, "paper_mc", "paper_mc");
        this.news_cl = this.createMovieClipSub("news_cl");
        this.data_tx = this.createLabel("data_tx");
        this.fish_tx = this.createLabel("fish_tx");
        this.pts_tx = this.createLabel("pts_tx");
        this.r_tx = this.createLabel("r_tx");

        this.news_cl.mcMask = this.news_cl.createMask(dragonBones.EventObject.START, "mask", "cat1", "cat2", "bg");
    }
}
