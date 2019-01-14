class aura_all_mc extends std.MovieClip {
    icon_cl: std.MovieClipSub;
    scale_cl: std.MovieClipSub;

    public constructor() {
        super(Config.mcRoot, "aura_all_mc", "aura_all_mc");
        this.icon_cl = this.createMovieClipSub("icon_cl");
        this.scale_cl = this.createMovieClipSub("scale_cl", 1);
        this.scale_cl.mcMask = new std.MCMask(this.scale_cl, dragonBones.EventObject.START, "mask", "bg");
        return;
    }// end function
}
