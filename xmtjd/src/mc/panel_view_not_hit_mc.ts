class panel_view_not_hit_mc extends std.MovieClip {
    public des_tx: eui.Label = null;
    public ok_bt: std.MCButton = null;
    public constructor() {
        super(Config.mcRoot, "panel_view_not_hit_mc", "panel_view_not_hit_mc");
        this.ok_bt = this.createMCButton("ok_bt");
        this.des_tx = this.createLabel("des_tx");
    }
}
