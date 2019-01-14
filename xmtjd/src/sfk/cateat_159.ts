module SFKLeague_fla {
    export class cateat_159 extends std.MovieClip {
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
            this.addFrameScript(144,this.frame145);
        }

        public frame145(): any {
            if(Math.random() > 0.7) {
                gotoAndPlay("da");
            }
        }
    }
}
