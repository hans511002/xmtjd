class card_game_mc extends std.MovieClip {


    card_cl: card_mc;

    public constructor() {
        super(Config.mcRoot, "card_game_mc", "card_game_mc");
        this.card_cl = <card_mc>this.addMovieClip("card_cl", new card_mc());
        // addFrameScript(32, this.frame33);
    }

    //   public frame33() : any
    //   {
    //      stop();
    //   }
}

