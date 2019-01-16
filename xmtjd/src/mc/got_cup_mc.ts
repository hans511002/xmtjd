class got_cup_mc extends std.MovieClip {


    cat1: SubCat;
    cat2: SubCat;
    cat3: SubCat;
    cat4: SubCat;
    cups_cl: std.MovieClipSub;
    play_cl: std.MovieClipSub;//eui.Button;//SimpleButton;
    play_bg: std.MovieClipSub;//eui.Button;//SimpleButton;

    public constructor() {
        super(Config.mcRoot, "got_cup_mc", "got_cup_mc");
        this.cat1 = new SubCat(this, "cat1", "", 0);
        this.cat2 = new SubCat(this, "cat2", "", 0);
        this.cat3 = new SubCat(this, "cat3", "", 0);
        this.cat4 = new SubCat(this, "cat4", "", 0);
        this.mcMask = this.createMask(dragonBones.EventObject.START, "mask", "cat1", "cat2", "cat3", "cat4");
        this.cups_cl = this.createMovieClipSub("cups_cl");
        this.play_cl = this.createMovieClipSub("play_cl");
        this.play_bg = this.createMovieClipSub("play_bg");
        this.play_bg.mcMask = this.play_bg.createMask(dragonBones.EventObject.START, "mask", "bg1", "bg2", "bg3", "bg4", "bg5", "bg6");

    }
}
