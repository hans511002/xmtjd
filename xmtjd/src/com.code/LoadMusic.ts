module com.code {
    export class LoadMusic extends egret.Sprite {
        time: number = 0;
        up_music: number = 0;
        transform_0: number = 0.0;
        transform_100: number = 0.0;
        transform_90: number = 0.0;
        transform_80: number = 0.0;
        transform_70: number = 0.0;
        transform_60: number = 0.0;
        transform_50: number = 0.0;
        transform_40: number = 0.0;
        transform_30: number = 0.0;
        transform_20: number = 0.0;
        transform_10: number = 0.0;

        public constructor() {
            super();
            this.transform_0 = 0;
            this.transform_100 = 1;
            this.transform_90 = 0.9;
            this.transform_80 = 0.8;
            this.transform_70 = 0.7;
            this.transform_60 = 0.6;
            this.transform_50 = 0.5;
            this.transform_40 = 0.4;
            this.transform_30 = 0.3;
            this.transform_20 = 0.2;
            this.transform_10 = 0.1;
            return;
        }// end function

        public load_music(param1) {
            this.delete_music(param1);
            switch (param1) {
                case "menu":
                    {
                        if (Main.load_map_zvuk == 1) {
                            Main.muz_map_zvuk_zv = new egret.Sound();
                            Main.muz_map_zvuk_zv = new com_music_zvuk();
                            Main.muz_map_zvuk_can = Main.muz_map_zvuk_zv.play();
                            Main.muz_map_zvuk_can.addEventListener(egret.Event.SOUND_COMPLETE, this.sound_map_again, this);
                            Main.load_map_zvuk = 0;
                        }
                        break;
                    }
                case "game":
                    {
                        if (Main.load_elf_zvuk == 1) {
                            Main.muz_elf_zvuk_zv = new egret.Sound();
                            Main.muz_elf_zvuk_zv = new elf_music_zvuk();
                            Main.muz_elf_zvuk_can = Main.muz_elf_zvuk_zv.play();
                            Main.muz_elf_zvuk_can.addEventListener(egret.Event.SOUND_COMPLETE, this.sound_elf_again, this);
                            Main.load_elf_zvuk = 0;
                        }
                        break;
                    }
                case "upg":
                    {
                        if (Main.load_water_zvuk == 1) {
                            Main.muz_water_zvuk_zv = new egret.Sound();
                            Main.muz_water_zvuk_zv = new water_music_zvuk();
                            Main.muz_water_zvuk_can = Main.muz_water_zvuk_zv.play();
                            Main.muz_water_zvuk_can.addEventListener(egret.Event.SOUND_COMPLETE, this.sound_water_again, this);
                            Main.load_water_zvuk = 0;
                        }
                        break;
                    }
                case "dance":
                    {
                        if (Main.load_dance_zvuk == 1) {
                            Main.muz_dance_zvuk_zv = new egret.Sound();
                            Main.muz_dance_zvuk_zv = new dance_music_zvuk();
                            Main.muz_dance_zvuk_can = Main.muz_dance_zvuk_zv.play();
                            Main.muz_dance_zvuk_can.addEventListener(egret.Event.SOUND_COMPLETE, this.sound_dance_again, this);
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

        public delete_music(param1) {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.up_go_f, this);
            if (param1 != "menu") {
                if (Main.load_map_zvuk == 0) {
                    Main.muz_map_zvuk_can.removeEventListener(egret.Event.SOUND_COMPLETE, this.sound_map_again, this);
                    Main.muz_map_zvuk_can.stop();
                    Main.load_map_zvuk = 1;
                }
            }
            if (param1 != "game") {
                if (Main.load_elf_zvuk == 0) {
                    Main.muz_elf_zvuk_can.removeEventListener(egret.Event.SOUND_COMPLETE, this.sound_elf_again, this);
                    Main.muz_elf_zvuk_can.stop();
                    Main.load_elf_zvuk = 1;
                }
            }
            if (param1 != "upg") {
                if (Main.load_water_zvuk == 0) {
                    Main.muz_water_zvuk_can.removeEventListener(egret.Event.SOUND_COMPLETE, this.sound_water_again, this);
                    Main.muz_water_zvuk_can.stop();
                    Main.load_water_zvuk = 1;
                }
            }
            if (param1 != "dance") {
                if (Main.load_dance_zvuk == 0) {
                    Main.muz_dance_zvuk_can.removeEventListener(egret.Event.SOUND_COMPLETE, this.sound_dance_again, this);
                    Main.muz_dance_zvuk_can.stop();
                    Main.load_dance_zvuk = 1;
                }
            }
            return;
        }// end function

        public mute() {
            if (Main.mute_music) {
                if (Main.load_map_zvuk == 0) {
                    Main.muz_map_zvuk_can.volume = this.transform_0;
                }
                if (Main.load_elf_zvuk == 0) {
                    Main.muz_elf_zvuk_can.volume = this.transform_0;
                }
                if (Main.load_water_zvuk == 0) {
                    Main.muz_water_zvuk_can.volume = this.transform_0;
                }
                if (Main.load_dance_zvuk == 0) {
                    Main.muz_dance_zvuk_can.volume = this.transform_0;
                }
            }
            else {
                if (Main.load_map_zvuk == 0) {
                    Main.muz_map_zvuk_can.volume = this.transform_100;
                }
                if (Main.load_elf_zvuk == 0) {
                    if (Main.xray_mode) {
                        Main.muz_elf_zvuk_can.volume = this.transform_20;
                    }
                    else {
                        Main.muz_elf_zvuk_can.volume = this.transform_100;
                    }
                }
                if (Main.load_water_zvuk == 0) {
                    Main.muz_water_zvuk_can.volume = this.transform_70;
                }
                if (Main.load_dance_zvuk == 0) {
                    Main.muz_dance_zvuk_can.volume = this.transform_100;
                }
            }
            return;
        }// end function

        public up_f(param1, param2) {
            if (Main.mute_music == false) {
                this.time = param2;
                this.up_music = param1;
                this.addEventListener(egret.Event.ENTER_FRAME, this.up_go_f, this);
                if (param1 == 1) {
                    Main.muz_map_zvuk_can.volume = this.transform_0;
                }
                if (param1 == 2) {
                    Main.muz_elf_zvuk_can.volume = this.transform_0;
                }
            }
            return;
        }// end function

        public up_go_f(event: egret.Event) {
            this.time = this.time - 1;
            if (this.up_music == 1) {
                if (this.time == 100) {
                    Main.muz_map_zvuk_can.volume = this.transform_10;
                }
                if (this.time == 90) {
                    Main.muz_map_zvuk_can.volume = this.transform_20;
                }
                if (this.time == 80) {
                    Main.muz_map_zvuk_can.volume = this.transform_30;
                }
                if (this.time == 70) {
                    Main.muz_map_zvuk_can.volume = this.transform_40;
                }
                if (this.time == 60) {
                    Main.muz_map_zvuk_can.volume = this.transform_50;
                }
                if (this.time == 50) {
                    Main.muz_map_zvuk_can.volume = this.transform_60;
                }
                if (this.time == 40) {
                    Main.muz_map_zvuk_can.volume = this.transform_70;
                }
                if (this.time == 30) {
                    Main.muz_map_zvuk_can.volume = this.transform_80;
                }
                if (this.time == 20) {
                    Main.muz_map_zvuk_can.volume = this.transform_90;
                }
                if (this.time == 10) {
                    this.removeEventListener(egret.Event.ENTER_FRAME, this.up_go_f, this);
                    Main.muz_map_zvuk_can.volume = this.transform_100;
                }
            }
            if (this.up_music == 2) {
                if (this.time == 100) {
                    Main.muz_elf_zvuk_can.volume = this.transform_10;
                }
                if (this.time == 90) {
                    Main.muz_elf_zvuk_can.volume = this.transform_20;
                }
                if (this.time == 80) {
                    Main.muz_elf_zvuk_can.volume = this.transform_30;
                }
                if (this.time == 70) {
                    Main.muz_elf_zvuk_can.volume = this.transform_40;
                }
                if (this.time == 60) {
                    Main.muz_elf_zvuk_can.volume = this.transform_50;
                }
                if (this.time == 50) {
                    Main.muz_elf_zvuk_can.volume = this.transform_60;
                }
                if (this.time == 40) {
                    Main.muz_elf_zvuk_can.volume = this.transform_70;
                }
                if (this.time == 30) {
                    Main.muz_elf_zvuk_can.volume = this.transform_80;
                }
                if (this.time == 20) {
                    Main.muz_elf_zvuk_can.volume = this.transform_90;
                }
                if (this.time == 10) {
                    this.removeEventListener(egret.Event.ENTER_FRAME, this.up_go_f, this);
                    Main.muz_elf_zvuk_can.volume = this.transform_100;
                }
            }
            return;
        }// end function

        public sound_elf_again(event: egret.Event) {
            Main.muz_elf_zvuk_can.removeEventListener(egret.Event.SOUND_COMPLETE, this.sound_elf_again, this);
            Main.muz_elf_zvuk_can = Main.muz_elf_zvuk_zv.play();
            Main.muz_elf_zvuk_can.addEventListener(egret.Event.SOUND_COMPLETE, this.sound_elf_again, this);
            this.mute();
            return;
        }// end function

        public sound_map_again(event: egret.Event) {
            Main.muz_map_zvuk_can.removeEventListener(egret.Event.SOUND_COMPLETE, this.sound_map_again, this);
            Main.muz_map_zvuk_can = Main.muz_map_zvuk_zv.play();
            Main.muz_map_zvuk_can.addEventListener(egret.Event.SOUND_COMPLETE, this.sound_map_again, this);
            this.mute();
            return;
        }// end function

        public sound_water_again(event: egret.Event) {
            Main.muz_water_zvuk_can.removeEventListener(egret.Event.SOUND_COMPLETE, this.sound_water_again, this);
            Main.muz_water_zvuk_can = Main.muz_water_zvuk_zv.play();
            Main.muz_water_zvuk_can.addEventListener(egret.Event.SOUND_COMPLETE, this.sound_water_again, this);
            this.mute();
            return;
        }// end function

        public sound_dance_again(event: egret.Event) {
            Main.muz_dance_zvuk_can.removeEventListener(egret.Event.SOUND_COMPLETE, this.sound_dance_again, this);
            Main.muz_dance_zvuk_can = Main.muz_dance_zvuk_zv.play();
            Main.muz_dance_zvuk_can.addEventListener(egret.Event.SOUND_COMPLETE, this.sound_dance_again, this);
            this.mute();
            return;
        }// end function

    }
}
