class fireball_mc extends std.MovieClip {

    public constructor() {
        super(Config.mcRoot, "fireball_mc", "fireball_mc");
        this.addFrameScript(9, this.frame10);
        this.addFrameScript(17, this.frame18);
    }

    public frame10(): any {
        this.stop();
    }

    public frame18(): any {
        this.stop();
    }

}
