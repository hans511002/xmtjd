class got_cup_mc extends std.MovieClip {


    cat1: std.MovieClipSub;
    cat2: std.MovieClipSub;
    cat3: std.MovieClipSub;
    cat4: std.MovieClipSub;
    cups_cl: std.MovieClipSub;
    play_cl: std.MovieClipSub;//eui.Button;//SimpleButton;
    play_bg: std.MovieClipSub;//eui.Button;//SimpleButton;

    public constructor() {
        super(Config.mcRoot, "got_cup_mc", "got_cup_mc");
        this.cat1 = this.createMovieClipSub("cat1");
        this.cat2 = this.createMovieClipSub("cat2");
        this.cat3 = this.createMovieClipSub("cat3");
        this.cat4 = this.createMovieClipSub("cat4");
        this.mcMask = this.createMask(dragonBones.EventObject.START, "mask", "cat1", "cat2", "cat3", "cat4");
        this.cups_cl = this.createMovieClipSub("cups_cl");
        this.play_cl = this.createMovieClipSub("play_cl");
        this.play_bg = this.createMovieClipSub("play_bg");
        this.play_bg.mcMask = this.play_bg.createMask(dragonBones.EventObject.START, "mask", "bg1", "bg2", "bg3", "bg4", "bg5", "bg6");

    }
}
