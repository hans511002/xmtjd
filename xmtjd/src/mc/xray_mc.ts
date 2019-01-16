class xray_mc extends std.MovieClip {
    public ray2: std.MovieClipSub = null;
    public ray2Ene_cl: SubCat = null;
    public ray2Cat_cl: SubCat = null;
    public ray2Skeleton_cl: std.MovieClipSub = null;


    public constructor() {
        super(Config.mcRoot, "xray_mc", "xray_mc");
        this.ray2 = this.createMovieClipSub("ray2");
        this.ray2.mcMask = this.ray2.createMask(dragonBones.EventObject.START, "mask", "ene_cl", "cat_cl", "skeleton_cl", "bg");
        this.ray2Ene_cl = new SubCat(this.ray2, "ene_cl", "", 0);
        this.ray2Cat_cl = new SubCat(this.ray2, "cat_cl", "", 0);
        this.ray2Skeleton_cl = this.ray2.createMovieClipSub("skeleton_cl");
    }
}
