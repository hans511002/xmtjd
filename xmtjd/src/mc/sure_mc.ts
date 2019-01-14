class sure_mc extends std.MovieClip {
    public no: std.MCButton = null;
    public yes: std.MCButton = null;
    public constructor() {
        super(Config.mcRoot, "sure_mc", "sure_mc");
        this.yes = this.createMCButton("yes");
        this.no = this.createMCButton("no");

    }
}
