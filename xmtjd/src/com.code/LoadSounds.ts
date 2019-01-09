module com.code
{
    export class LoadSounds extends Sprite
    {
        zvuk_z: egret.Sound = null;
        zvuk_c: egret.SoundChannel = null;
        zvuk_c_won: egret.SoundChannel = null;
        trans_10: SoundTransform = null;
        trans_20: SoundTransform = null;
        trans_30: SoundTransform = null;
        trans_40: SoundTransform = null;
        trans_50: SoundTransform = null;
        trans_60: SoundTransform = null;
        trans_70: SoundTransform = null;
        trans_80: SoundTransform = null;
        time_to_win: number = 0;
        public constructor(){
            this.zvuk_z = new Sound();
            this.trans_10 = new SoundTransform(0.1,0.1);
            this.trans_20 = new SoundTransform(0.2,0.2);
            this.trans_30 = new SoundTransform(0.3,0.3);
            this.trans_40 = new SoundTransform(0.4,0.4);
            this.trans_50 = new SoundTransform(0.5,0.5);
            this.trans_60 = new SoundTransform(0.6,0.6);
            this.trans_70 = new SoundTransform(0.7,0.7);
            this.trans_80 = new SoundTransform(0.8,0.8);
            super();
        }
        public load_by_name(param1: any): any{
            if(!Main.mute_sfx){
                this.zvuk_z = new param1();
                this.zvuk_c = this.zvuk_z.play();
            }
        }
        public load_by_name2(param1: any, param2: any): any{
            if(!Main.mute_sfx){
                this.zvuk_z = new param1();
                this.zvuk_c = this.zvuk_z.play();
                this.zvuk_c.soundTransform = this["trans_" + param2];
            }
        }
        public control_volume(param1: any): any{
            if(!Main.mute_sfx){
                this.zvuk_c.soundTransform = this["trans_" + param1];
            }
        }
        public stop_so(): any{
            this.zvuk_c.stop();
        }
    }
}
