class down_panel_mc extends std.MovieClip {


    hero_tx: std.MCLabel;
    enemy_tx: std.MCLabel;
    refresh_bt: std.MovieClipSub;// eui.Button;
    train_bt: std.MovieClipSub;//eui.Button;

    public constructor() {
        super(Config.mcRoot, "down_panel_mc", "down_panel_mc");
        this.hero_tx = this.createLabel("hero_tx");
        this.enemy_tx = this.createLabel("enemy_tx");
        this.refresh_bt = this.createMovieClipSub("refresh_bt", 1);
        this.train_bt = this.createMovieClipSub("train_bt", 1);
    }
} 
