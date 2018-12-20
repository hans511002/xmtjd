﻿module com.code {
    export class LoadSounds extends egret.Sprite {
        zvuk_z: egret.Sound;
        zvuk_c: egret.SoundChannel;
        zvuk_c_won: egret.SoundChannel;
        trans_10: number;
        trans_20: number;
        trans_30: number;
        trans_40: number;
        trans_50: number;
        trans_60: number;
        trans_70: number;
        trans_80: number;
        time_to_win: number;

        public constructor() {
            super();
            this.zvuk_z = new egret.Sound();
            this.trans_10 = 0.1;
            this.trans_20 = 0.2;
            this.trans_30 = 0.3;
            this.trans_40 = 0.4;
            this.trans_50 = 0.5;
            this.trans_60 = 0.6;
            this.trans_70 = 0.7;
            this.trans_80 = 0.8;
            return;
        }// end function

        public load_by_name(param1) {
            if (!Main.mute_sfx) {
                this.zvuk_z = new param1();
                this.zvuk_c = this.zvuk_z.play();
            }
            return;
        }// end function

        public load_by_name2(param1, param2) {
            if (!Main.mute_sfx) {
                this.zvuk_z = new param1;
                this.zvuk_c = this.zvuk_z.play();
                this.zvuk_c.volume = this["trans_" + param2];
            }
            return;
        }// end function

        public control_volume(param1) {
            if (!Main.mute_sfx) {
                this.zvuk_c.volume = this["trans_" + param1];
            }
            return;
        }// end function

        public stop_so() {
            this.zvuk_c.stop();
            return;
        }// end function

    }
}
