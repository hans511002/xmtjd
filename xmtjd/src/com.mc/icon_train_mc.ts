export class icon_train_mc extends std.MovieClip {
    public icon2: std.MovieClipSub = null;
    public constructor() {
        super(Config.mcRoot, "icon_train_mc", "icon_train_mc");
        this.icon2 = this.createMovieClipSub("icon2");
        // this.addFrameScript(25, this.frame26);
    }
    // public frame26(): any {
    //     this.stop();
    // }
}
