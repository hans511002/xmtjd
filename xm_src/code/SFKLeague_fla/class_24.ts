module SFKLeague_fla
{
    export class class_24 extends std.MovieClip
    {
        public bg_cl: std.MovieClip = null;
        public left_tx: TextField = null;
        public title_tx: TextField = null;
        public constructor(){
            super();
            this.addFrameScript(0,this.frame1);
        }
        public frame1(): any{
            this.stop();
        }
    }
}
