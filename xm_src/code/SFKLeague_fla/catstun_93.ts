module SFKLeague_fla {
    export class catstun_93 extends std.MovieClip {
        public body_cl: std.MovieClip = null;
        public cloak_cl: std.MovieClip = null;
        public foot1_cl: std.MovieClip = null;
        public foot2_cl: std.MovieClip = null;
        public hand_l_cl: std.MovieClip = null;
        public hand_r_cl: std.MovieClip = null;
        public head_cl: std.MovieClip = null;
        public skirt_cl: std.MovieClip = null;
        public tail_cl: std.MovieClip = null;

        public constructor() {
            super();
            this.addFrameScript(49,this.frame50);
        }

        public frame50(): any {
            gotoAndPlay("da");
        }
    }
}
