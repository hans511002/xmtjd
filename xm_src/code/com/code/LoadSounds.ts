module com.code {
    export class LoadSounds extends Sprite {
        zvuk_z: egret.Sound = null;
        zvuk_c: egret.SoundChannel = null;
        zvuk_c_won: egret.SoundChannel = null;
        trans_10: number = 0.0;
        trans_20: number = 0.0;
        trans_30: number = 0.0;
        trans_40: number = 0.0;
        trans_50: number = 0.0;
        trans_60: number = 0.0;
        trans_70: number = 0.0;
        trans_80: number = 0.0;
        time_to_win: number = 0;

        public constructor() {
            this.zvuk_z = new egret.Sound();
            this.trans_10 = 0.1;
            this.trans_20 = 0.2;
            this.trans_30 = 0.3;
            this.trans_40 = 0.4;
            this.trans_50 = 0.5;
            this.trans_60 = 0.6;
            this.trans_70 = 0.7;
            this.trans_80 = 0.8;
            super();
        }

        public load_by_name(param1: any): any {
            if(!Main.mute_sfx) {
                this.zvuk_z = new param1();
                this.zvuk_c = this.zvuk_z.play();
            }
        }

        public load_by_name2(param1: any, param2: any): any {
            if(!Main.mute_sfx) {
                this.zvuk_z = new param1();
                this.zvuk_c = this.zvuk_z.play();
                this.zvuk_c.soundTransform = this["trans_" + param2];
            }
        }

        public control_volume(param1: any): any {
            if(!Main.mute_sfx) {
                this.zvuk_c.soundTransform = this["trans_" + param1];
            }
        }

        public stop_so(): any {
            this.zvuk_c.stop();
        }
    }
}
