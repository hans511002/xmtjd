package com.code
{
    import flash.display.*;
    import flash.media.*;

    public class LoadSounds extends Sprite
    {
        var zvuk_z:Sound;
        var zvuk_c:SoundChannel;
        var zvuk_c_won:SoundChannel;
        var trans_10:SoundTransform;
        var trans_20:SoundTransform;
        var trans_30:SoundTransform;
        var trans_40:SoundTransform;
        var trans_50:SoundTransform;
        var trans_60:SoundTransform;
        var trans_70:SoundTransform;
        var trans_80:SoundTransform;
        var time_to_win:int;

        public function LoadSounds()
        {
            this.zvuk_z = new Sound();
            this.trans_10 = new SoundTransform(0.1, 0.1);
            this.trans_20 = new SoundTransform(0.2, 0.2);
            this.trans_30 = new SoundTransform(0.3, 0.3);
            this.trans_40 = new SoundTransform(0.4, 0.4);
            this.trans_50 = new SoundTransform(0.5, 0.5);
            this.trans_60 = new SoundTransform(0.6, 0.6);
            this.trans_70 = new SoundTransform(0.7, 0.7);
            this.trans_80 = new SoundTransform(0.8, 0.8);
            return;
        }// end function

        function load_by_name(param1)
        {
            if (!Main.mute_sfx)
            {
                this.zvuk_z = new param1;
                this.zvuk_c = this.zvuk_z.play();
            }
            return;
        }// end function

        function load_by_name2(param1, param2)
        {
            if (!Main.mute_sfx)
            {
                this.zvuk_z = new param1;
                this.zvuk_c = this.zvuk_z.play();
                this.zvuk_c.soundTransform = this["trans_" + param2];
            }
            return;
        }// end function

        function control_volume(param1)
        {
            if (!Main.mute_sfx)
            {
                this.zvuk_c.soundTransform = this["trans_" + param1];
            }
            return;
        }// end function

        function stop_so()
        {
            this.zvuk_c.stop();
            return;
        }// end function

    }
}
