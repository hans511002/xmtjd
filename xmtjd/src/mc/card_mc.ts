class card_mc extends std.MovieClip {
    bg_cl: std.MovieClipSub;
    cat_cl: std.MovieClipSub;
    des_tx: eui.Label;
    icon_cl: std.MovieClipSub;
    n_tx: eui.Label;
    over_cl: std.MovieClipSub;
    telo: std.MovieClipSub;
    title_tx: eui.Label;
    wear_cl: std.MovieClipSub;

    public constructor() {
        super(Config.mcRoot, "card_mc", "card_mc");
        this.bg_cl = this.createMovieClipSub("bg_cl");
        this.cat_cl = this.createMovieClipSub("cat_cl");
        this.icon_cl = this.createMovieClipSub("icon_cl");
        this.over_cl = this.createMovieClipSub("over_cl");
        this.telo = this.createMovieClipSub("telo");
        this.wear_cl = this.createMovieClipSub("wear_cl");
        this.des_tx = this.createLabel("des_tx");
        this.n_tx = this.createLabel("n_tx");
        this.title_tx = this.createLabel("title_tx");

        return;
    }// end function



}
