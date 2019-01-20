class SubCat extends std.MovieClipSub {
	public hand_r_cl: std.MovieClip;
	public hand_r_clS2: std.MovieClipSub;
	public hand_r_clSleeve_cl: std.MovieClipSub;
	public hand_r_clWool_cl: std.MovieClipSub;
	public head_cl: std.MovieClip;
	public head_clWool_cl: std.MovieClipSub;
	public head_clWool_clFace_cl: std.MovieClipSub;
	public head_clH2: std.MovieClipSub;
	public skirt_cl: std.MovieClip;
	public body_cl: std.MovieClip;
	public body_clB2: std.MovieClipSub;
	public body_clWool_cl: std.MovieClipSub;

	public foot1_cl: std.MovieClip;
	public foot1_clP2: std.MovieClipSub;
	public foot1_clWool_cl: std.MovieClipSub;
	public foot2_cl: std.MovieClip;
	public foot2_clP2: std.MovieClipSub;
	public foot2_clWool_cl: std.MovieClipSub;

	public hand_l_cl: std.MovieClip;
	public hand_l_clW2: std.MovieClipSub;
	public hand_l_clSleeve_cl: std.MovieClipSub;
	public hand_l_clWool_cl: std.MovieClipSub;
	public cloak_cl: std.MovieClip;
	public tail_cl: std.MovieClip;

	subInit: Function = null;

	public constructor(mc?: std.MC, slotName?: string, defAniName?: string, reinitType: number = 0) {
		super(mc, slotName, defAniName, reinitType);
	}
	mcInit() {
		this.hand_r_cl = this.createMovieClip("hand_r_cl", Config.catRoot, "hand_r_cl", "hand_r_cl", 0);
		this.hand_r_clS2 = this.hand_r_cl.createMovieClipSub("s2");
		this.hand_r_clSleeve_cl = this.hand_r_cl.createMovieClipSub("sleeve_cl");
		this.hand_r_clWool_cl = this.hand_r_cl.createMovieClipSub("wool_cl");

		this.head_cl = this.createMovieClip("head_cl", Config.catRoot, "head_cl", "head_cl", 0);
		this.head_clWool_cl = this.head_cl.createMovieClipSub("wool_cl");
		this.head_clWool_clFace_cl = this.head_clWool_cl.createMovieClipSub("face_cl", 1);
		this.head_clH2 = this.head_cl.createMovieClipSub("h2");

		this.skirt_cl = this.createMovieClip("skirt_cl", Config.catRoot, "skirt_cl", "skirt_cl", 0);
		this.body_cl = this.createMovieClip("body_cl", Config.catRoot, "body_cl", "body_cl", 0);
		this.body_clB2 = this.body_cl.createMovieClipSub("b2");
		this.body_clWool_cl = this.body_cl.createMovieClipSub("wool_cl");

		this.foot1_cl = this.createMovieClip("foot1_cl", Config.catRoot, "foot_cl", "foot_cl", 0);
		this.foot1_clP2 = this.foot1_cl.createMovieClipSub("b2");
		this.foot1_clWool_cl = this.foot1_cl.createMovieClipSub("wool_cl");

		this.foot2_cl = this.createMovieClip("foot2_cl", Config.catRoot, "foot_cl", "foot_cl", 0);
		this.foot2_clP2 = this.foot2_cl.createMovieClipSub("b2");
		this.foot2_clWool_cl = this.foot2_cl.createMovieClipSub("wool_cl");

		this.hand_l_cl = this.createMovieClip("hand_l_cl", Config.catRoot, "hand_l_cl", "hand_l_cl", 0);
		this.hand_l_clW2 = this.hand_r_cl.createMovieClipSub("w2");
		this.hand_l_clSleeve_cl = this.hand_r_cl.createMovieClipSub("sleeve_cl");
		this.hand_l_clWool_cl = this.hand_r_cl.createMovieClipSub("wool_cl");

		this.cloak_cl = this.createMovieClip("cloak_cl", Config.catRoot, "cloak_cl", "cloak_cl", 0);
		this.tail_cl = this.createMovieClip("tail_cl", Config.catRoot, "tail_cl", "tail_cl", 0);
	}
	gotoAndStop(cf: number | string, aniName: string = ""): void {
		super.gotoAndStop(cf, aniName);
		this.mcInit();
		if (this.subInit) {
			this.subInit.call(this.mc.mc);
		}
	}
}
