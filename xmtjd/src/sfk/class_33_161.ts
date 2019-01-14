module SFKLeague_fla {
    export class class_33_161 extends std.MovieClip {

        public constructor() {
            super();
            this.addFrameScript(0,this.frame1);
        }

        public frame1(): any {
            gotoAndStop(Math.floor(Math.random() * this.totalFrames + 1));
        }
    }
}
