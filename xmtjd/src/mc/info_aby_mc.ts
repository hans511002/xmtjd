class info_aby_mc extends std.MovieClip {
    public des_tx: eui.Label = null;
    public constructor() {
        super(Config.mcRoot, "info_aby_mc", "info_aby_mc");
        this.des_tx = this.createLabel("des_tx");
    }
}
