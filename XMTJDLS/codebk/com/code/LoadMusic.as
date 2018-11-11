package com.code
{
    import flash.display.*;
    import flash.events.*;
    import flash.media.*;

    public class LoadMusic extends Sprite
    {
        var time:int = 0;
        var up_music:int = 0;
        var transform_0:SoundTransform;
        var transform_100:SoundTransform;
        var transform_90:SoundTransform;
        var transform_80:SoundTransform;
        var transform_70:SoundTransform;
        var transform_60:SoundTransform;
        var transform_50:SoundTransform;
        var transform_40:SoundTransform;
        var transform_30:SoundTransform;
        var transform_20:SoundTransform;
        var transform_10:SoundTransform;

        public function LoadMusic()
        {
            this.transform_0 = new SoundTransform(0);
            this.transform_100 = new SoundTransform(1);
            this.transform_90 = new SoundTransform(0.9);
            this.transform_80 = new SoundTransform(0.8);
            this.transform_70 = new SoundTransform(0.7);
            this.transform_60 = new SoundTransform(0.6);
            this.transform_50 = new SoundTransform(0.5);
            this.transform_40 = new SoundTransform(0.4);
            this.transform_30 = new SoundTransform(0.3);
            this.transform_20 = new SoundTransform(0.2);
            this.transform_10 = new SoundTransform(0.1);
            return;
        }// end function

        function load_music(param1)
        {
            this.delete_music(param1);
            switch(param1)
            {
                case "menu":
                {
                    if (Main.load_map_zvuk == 1)
                    {
                        Main.muz_map_zvuk_zv = new Sound();
                        Main.muz_map_zvuk_zv = new com_music_zvuk();
                        Main.muz_map_zvuk_can = Main.muz_map_zvuk_zv.play();
                        Main.muz_map_zvuk_can.addEventListener(Event.SOUND_COMPLETE, this.sound_map_again);
                        Main.load_map_zvuk = 0;
                    }
                    break;
                }
                case "game":
                {
                    if (Main.load_elf_zvuk == 1)
                    {
                        Main.muz_elf_zvuk_zv = new Sound();
                        Main.muz_elf_zvuk_zv = new elf_music_zvuk();
                        Main.muz_elf_zvuk_can = Main.muz_elf_zvuk_zv.play();
                        Main.muz_elf_zvuk_can.addEventListener(Event.SOUND_COMPLETE, this.sound_elf_again);
                        Main.load_elf_zvuk = 0;
                    }
                    break;
                }
                case "upg":
                {
                    if (Main.load_water_zvuk == 1)
                    {
                        Main.muz_water_zvuk_zv = new Sound();
                        Main.muz_water_zvuk_zv = new water_music_zvuk();
                        Main.muz_water_zvuk_can = Main.muz_water_zvuk_zv.play();
                        Main.muz_water_zvuk_can.addEventListener(Event.SOUND_COMPLETE, this.sound_water_again);
                        Main.load_water_zvuk = 0;
                    }
                    break;
                }
                case "dance":
                {
                    if (Main.load_dance_zvuk == 1)
                    {
                        Main.muz_dance_zvuk_zv = new Sound();
                        Main.muz_dance_zvuk_zv = new dance_music_zvuk();
                        Main.muz_dance_zvuk_can = Main.muz_dance_zvuk_zv.play();
                        Main.muz_dance_zvuk_can.addEventListener(Event.SOUND_COMPLETE, this.sound_dance_again);
                        Main.load_dance_zvuk = 0;
                    }
                    break;
                }
                default:
                {
                    break;
                }
            }
            this.mute();
            return;
        }// end function

        function delete_music(param1)
        {
            removeEventListener(Event.ENTER_FRAME, this.up_go_f);
            if (param1 != "menu")
            {
                if (Main.load_map_zvuk == 0)
                {
                    Main.muz_map_zvuk_can.removeEventListener(Event.SOUND_COMPLETE, this.sound_map_again);
                    Main.muz_map_zvuk_can.stop();
                    Main.load_map_zvuk = 1;
                }
            }
            if (param1 != "game")
            {
                if (Main.load_elf_zvuk == 0)
                {
                    Main.muz_elf_zvuk_can.removeEventListener(Event.SOUND_COMPLETE, this.sound_elf_again);
                    Main.muz_elf_zvuk_can.stop();
                    Main.load_elf_zvuk = 1;
                }
            }
            if (param1 != "upg")
            {
                if (Main.load_water_zvuk == 0)
                {
                    Main.muz_water_zvuk_can.removeEventListener(Event.SOUND_COMPLETE, this.sound_water_again);
                    Main.muz_water_zvuk_can.stop();
                    Main.load_water_zvuk = 1;
                }
            }
            if (param1 != "dance")
            {
                if (Main.load_dance_zvuk == 0)
                {
                    Main.muz_dance_zvuk_can.removeEventListener(Event.SOUND_COMPLETE, this.sound_dance_again);
                    Main.muz_dance_zvuk_can.stop();
                    Main.load_dance_zvuk = 1;
                }
            }
            return;
        }// end function

        function mute()
        {
            if (Main.mute_music)
            {
                if (Main.load_map_zvuk == 0)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_0;
                }
                if (Main.load_elf_zvuk == 0)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_0;
                }
                if (Main.load_water_zvuk == 0)
                {
                    Main.muz_water_zvuk_can.soundTransform = this.transform_0;
                }
                if (Main.load_dance_zvuk == 0)
                {
                    Main.muz_dance_zvuk_can.soundTransform = this.transform_0;
                }
            }
            else
            {
                if (Main.load_map_zvuk == 0)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_100;
                }
                if (Main.load_elf_zvuk == 0)
                {
                    if (Main.xray_mode)
                    {
                        Main.muz_elf_zvuk_can.soundTransform = this.transform_20;
                    }
                    else
                    {
                        Main.muz_elf_zvuk_can.soundTransform = this.transform_100;
                    }
                }
                if (Main.load_water_zvuk == 0)
                {
                    Main.muz_water_zvuk_can.soundTransform = this.transform_70;
                }
                if (Main.load_dance_zvuk == 0)
                {
                    Main.muz_dance_zvuk_can.soundTransform = this.transform_100;
                }
            }
            return;
        }// end function

        function up_f(param1, param2)
        {
            if (Main.mute_music == false)
            {
                this.time = param2;
                this.up_music = param1;
                addEventListener(Event.ENTER_FRAME, this.up_go_f);
                if (param1 == 1)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_0;
                }
                if (param1 == 2)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_0;
                }
            }
            return;
        }// end function

        function up_go_f(event:Event)
        {
            var _loc_2:* = this;
            var _loc_3:* = this.time - 1;
            _loc_2.time = _loc_3;
            if (this.up_music == 1)
            {
                if (this.time == 100)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_10;
                }
                if (this.time == 90)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_20;
                }
                if (this.time == 80)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_30;
                }
                if (this.time == 70)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_40;
                }
                if (this.time == 60)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_50;
                }
                if (this.time == 50)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_60;
                }
                if (this.time == 40)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_70;
                }
                if (this.time == 30)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_80;
                }
                if (this.time == 20)
                {
                    Main.muz_map_zvuk_can.soundTransform = this.transform_90;
                }
                if (this.time == 10)
                {
                    removeEventListener(Event.ENTER_FRAME, this.up_go_f);
                    Main.muz_map_zvuk_can.soundTransform = this.transform_100;
                }
            }
            if (this.up_music == 2)
            {
                if (this.time == 100)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_10;
                }
                if (this.time == 90)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_20;
                }
                if (this.time == 80)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_30;
                }
                if (this.time == 70)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_40;
                }
                if (this.time == 60)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_50;
                }
                if (this.time == 50)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_60;
                }
                if (this.time == 40)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_70;
                }
                if (this.time == 30)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_80;
                }
                if (this.time == 20)
                {
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_90;
                }
                if (this.time == 10)
                {
                    removeEventListener(Event.ENTER_FRAME, this.up_go_f);
                    Main.muz_elf_zvuk_can.soundTransform = this.transform_100;
                }
            }
            return;
        }// end function

        function sound_elf_again(event:Event)
        {
            Main.muz_elf_zvuk_can.removeEventListener(Event.SOUND_COMPLETE, this.sound_elf_again);
            Main.muz_elf_zvuk_can = Main.muz_elf_zvuk_zv.play();
            Main.muz_elf_zvuk_can.addEventListener(Event.SOUND_COMPLETE, this.sound_elf_again);
            this.mute();
            return;
        }// end function

        function sound_map_again(event:Event)
        {
            Main.muz_map_zvuk_can.removeEventListener(Event.SOUND_COMPLETE, this.sound_map_again);
            Main.muz_map_zvuk_can = Main.muz_map_zvuk_zv.play();
            Main.muz_map_zvuk_can.addEventListener(Event.SOUND_COMPLETE, this.sound_map_again);
            this.mute();
            return;
        }// end function

        function sound_water_again(event:Event)
        {
            Main.muz_water_zvuk_can.removeEventListener(Event.SOUND_COMPLETE, this.sound_water_again);
            Main.muz_water_zvuk_can = Main.muz_water_zvuk_zv.play();
            Main.muz_water_zvuk_can.addEventListener(Event.SOUND_COMPLETE, this.sound_water_again);
            this.mute();
            return;
        }// end function

        function sound_dance_again(event:Event)
        {
            Main.muz_dance_zvuk_can.removeEventListener(Event.SOUND_COMPLETE, this.sound_dance_again);
            Main.muz_dance_zvuk_can = Main.muz_dance_zvuk_zv.play();
            Main.muz_dance_zvuk_can.addEventListener(Event.SOUND_COMPLETE, this.sound_dance_again);
            this.mute();
            return;
        }// end function

    }
}
