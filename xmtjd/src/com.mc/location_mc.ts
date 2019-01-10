export class location_mc extends std.MovieClip {
    public enemy_fans_cl: std.MovieClipSub = null;
    public flag2_cl: std.MovieClipSub = null;
    public flag_cl: std.MovieClipSub = null;
    public kings_cl: std.MovieClipSub = null;
    public kitty_fans_cl: std.MovieClipSub = null;
    public referee_cl: std.MovieClipSub = null;
    public tablo_cl: std.MovieClipSub = null;
    public window_down_cl: std.MovieClipSub = null;

    public enemy_fans_clFans: std.MovieClipSub = null;
    public kitty_fans_clFans: std.MovieClipSub = null;
    public tablo_clP1: std.MovieClipSub = null;
    public tablo_clP2: std.MovieClipSub = null;
    public tablo_clP1N_tx: std.MCLabel = null;
    public tablo_clP2N_tx: std.MCLabel = null;

    kings_clCups_cl: std.MovieClipSub = null;
    public constructor() {
        super(Config.mcRoot, "location_mc", "location_mc");
        this.referee_cl = this.createMovieClipSub("referee_cl");
        this.flag_cl = this.createMovieClipSub("flag_cl");
        this.flag2_cl = this.createMovieClipSub("flag2_cl");
        this.enemy_fans_cl = this.createMovieClipSub("enemy_fans_cl");
        this.kitty_fans_cl = this.createMovieClipSub("kitty_fans_cl");
        this.enemy_fans_clFans = this.enemy_fans_cl.createMovieClipSub("fans", 1);
        this.enemy_fans_clFans.addFrameScript(0, this.frame1);
        this.kitty_fans_clFans = this.kitty_fans_cl.createMovieClipSub("fans", 1);
        this.kitty_fans_clFans.addFrameScript(0, this.frame1);
        this.tablo_cl = this.createMovieClipSub("tablo_cl");
        this.tablo_clP1 = this.tablo_cl.createMovieClipSub("p1");
        this.tablo_clP1N_tx = this.tablo_clP1.createLabel("n_tx");
        this.tablo_clP2N_tx = this.tablo_clP2.createLabel("n_tx");
        this.kings_cl = this.createMovieClipSub("kings_cl");
        this.kings_clCups_cl = this.kings_cl.createMovieClipSub("cups_cl");

    }

    frame1() {
        this.gotoAndStop(1 + Math.floor(Math.random() * this.totalFrames));
        return;
    }

}
