module SFKLeague_fla
{
    export class play_cla_333 extends std.MovieClip
    {
        public play_cl: std.MCSimpleButton = null;
        public constructor(){
            super();
            this.addFrameScript(0,this.frame1,25,this.frame26);
        }
        public frame1(): any{
            this.stop();
        }
        public frame26(): any{
            this.stop();
        }
    }
}
