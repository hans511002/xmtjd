class super_shot_ani_mc extends std.MovieClip {
    public constructor() {
        super(Config.mcRoot, "super_shot_ani_mc", "super_shot_ani_mc");

        this.addFrameScript(6, this.frame7);
    }
    public frame7(): any {
        this.stop();
    }
}
