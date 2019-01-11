class panel_view_hit_mc extends std.MovieClip {
    public ok_bt: std.MCButton = null;
    public constructor() {
        super(Config.mcRoot, "panel_view_hit_mc", "panel_view_hit_mc");
        this.ok_bt = this.createMCButton("ok_bt");
    }
}
