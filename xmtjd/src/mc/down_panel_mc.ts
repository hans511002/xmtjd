class down_panel_mc extends std.MovieClip {


    hero_tx: std.MCLabel;
    enemy_tx: std.MCLabel;
    refresh_bt: std.MCButton;// eui.Button;
    train_bt: std.MCButton;//eui.Button;

    public constructor() {
        super(Config.mcRoot, "down_panel_mc", "down_panel_mc");
        this.hero_tx = this.createLabel("hero_tx");
        this.enemy_tx = this.createLabel("enemy_tx");
        this.refresh_bt = this.createMCButton("refresh_bt", 1);
        this.train_bt = this.createMCButton("train_bt", 1);
    }
} 
