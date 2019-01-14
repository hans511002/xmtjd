class pre_battle_mc extends std.MovieClip {
    public no: std.MCButton = null;
    public yes: std.MCButton = null;
    public constructor() {
        super(Config.mcRoot, "pre_battle_mc", "pre_battle_mc");
        this.yes = this.createMCButton("yes");
        this.no = this.createMCButton("no");

    }
}
