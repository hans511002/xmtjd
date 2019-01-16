class damage_mc extends std.MovieClip {

    d2: std.MovieClipSub;
    d2D_tx: eui.Label;
    public constructor() {
        super(Config.mcRoot, "damage_mc", "damage_mc");
        this.d2 = this.createMovieClipSub("d2");
        this.d2D_tx = this.d2.createLabel("d_tx", 1);
        // addFrameScript(18, this.frame19);
    }

    //   function frame19() : *
    //   {
    //      stop();
    //   } 
}
