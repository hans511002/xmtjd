class back_to_mc extends std.MovieClip {


    play_cl: std.MovieClipSub;// eui.Button;//SimpleButton;

    public constructor() {
        super(Config.mcRoot, "back_to_mc", "back_to_mc");
        this.play_cl = this.createMovieClipSub("play_cl");
        // addFrameScript(34, this.frame35);
    }

    // public frame35(): any {
    //     stop();
    // }
}
