module SFKLeague_fla {
    export class class_34_598 extends std.MovieClip {

        public constructor() {
            super();
            this.addFrameScript(0, this.frame1);
        }

        public frame1(): any {
            this.gotoAndStop(1 + Math.floor(Math.random() * this.totalFrames));
        }
    }
}
