module SFKLeague_fla
{
    export class class_42 extends std.MovieClip
    {
        public p2: std.MovieClip = null;
        public telo: std.MovieClip = null;
        public to_attack_bt: std.MCSimpleButton = null;
        public to_hp_bt: std.MCSimpleButton = null;
        public to_speed_bt: std.MCSimpleButton = null;
        public constructor(){
            super();
            this.addFrameScript(0,this.frame1);
        }
        public frame1(): any{
            this.stop();
        }
    }
}
