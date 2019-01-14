module SFKLeague_fla {
    export class class_29_595 extends std.MovieClip {

        public constructor() {
            super();
            this.addFrameScript(0,this.frame1);
        }

        public frame1(): any {
            gotoAndStop(1 + Math.floor(Math.random() * totalFrames));
        }
    }
}
