﻿package com.code
{
    import flash.display.*;

    public class Aby_info extends MovieClip
    {
        var s:int;

        public function Aby_info()
        {
            return;
        }// end function

        function got_frame(param1)
        {
            this.s = this.got_type(param1);
            switch(this.s)
            {
                case 1:
                {
                    return 8;
                }
                case 2:
                {
                    return 9;
                }
                case 3:
                {
                    return 10;
                }
                case 4:
                {
                    return 11;
                }
                case 5:
                {
                    return 12;
                }
                case 6:
                {
                    return 13;
                }
                case 7:
                {
                    return 14;
                }
                case 8:
                {
                    return 15;
                }
                case 9:
                {
                    return 16;
                }
                case 10:
                {
                    return 17;
                }
                case 11:
                {
                    return 18;
                }
                case 12:
                {
                    return 19;
                }
                case 13:
                {
                    return 20;
                }
                case 14:
                {
                    return 21;
                }
                case 15:
                {
                    return 22;
                }
                default:
                {
                    break;
                }
            }
            return;
        }// end function

        function got_des(param1)
        {
            this.s = this.got_type(param1);
            switch(this.s)
            {
                case 1:
                {
                    return "力量 " + this.got_power(param1);
                }
                case 2:
                {
                    return "力量 " + this.got_power(param1);
                }
                case 3:
                {
                    return "力量 " + this.got_power(param1);
                }
                case 4:
                {
                    return "治愈力 " + this.got_power(param1);
                }
                case 5:
                {
                    return "反应时间 " + (this.got_power(param1) / 40).toFixed(1) + "s";
                }
                case 6:
                {
                    return "反应时间 " + (this.got_power(param1) / 40).toFixed(1) + "s";
                }
                case 7:
                {
                    return "一眨眼";
                }
                case 8:
                {
                    return "反应时间 " + (this.got_power(param1) / 40).toFixed(1) + "s";
                }
                case 9:
                {
                    return "反应时间 " + (this.got_power(param1) / 40).toFixed(1) + "s";
                }
                case 10:
                {
                    return "眩晕次数" + (this.got_power(param1) / 40).toFixed(1) + "s";
                }
                case 11:
                {
                    return "眩晕次数" + (this.got_power(param1) / 40).toFixed(1) + "s";
                }
                case 12:
                {
                    return "装甲持续时间" + (this.got_power(param1) / 40).toFixed(1) + "s";
                }
                case 13:
                {
                    return "装甲持续时间" + (this.got_power(param1) / 40).toFixed(1) + "s";
                }
                case 14:
                {
                    return "力量 " + this.got_power(param1);
                }
                case 15:
                {
                    return "一眨眼";
                }
                default:
                {
                    break;
                }
            }
            return;
        }// end function

        function got_title(param1)
        {
            this.s = this.got_type(param1);
            switch(this.s)
            {
                case 1:
                {
                    return "猛击";
                }
                case 2:
                {
                    return "上勾拳";
                }
                case 3:
                {
                    return "火球";
                }
                case 4:
                {
                    return "治疗";
                }
                case 5:
                {
                    return "力量光环";
                }
                case 7:
                {
                    return "前锋";
                }
                case 8:
                {
                    return "诅咒";
                }
                case 9:
                {
                    return "弱点光环";
                }
                case 10:
                {
                    return "眩晕";
                }
                case 11:
                {
                    return "气泡";
                }
                case 12:
                {
                    return "护甲";
                }
                case 13:
                {
                    return "队伍护甲";
                }
                case 14:
                {
                    return "死亡射线";
                }
                case 15:
                {
                    return "冷却时间";
                }
                default:
                {
                    break;
                }
            }
            return;
        }// end function

        public function got_skin(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return 27;
                }
                case 2:
                {
                    return 28;
                }
                case 3:
                {
                    return 29;
                }
                case 4:
                {
                    return 30;
                }
                case 5:
                {
                    return 268;
                }
                case 6:
                {
                    return 262;
                }
                case 7:
                {
                    return 260;
                }
                case 8:
                {
                    return 265;
                }
                case 9:
                {
                    return 252;
                }
                case 10:
                {
                    return 275;
                }
                case 11:
                {
                    return 75;
                }
                case 12:
                {
                    return 237;
                }
                case 13:
                {
                    return 280;
                }
                case 14:
                {
                    return 281;
                }
                case 15:
                {
                    return 282;
                }
                case 16:
                {
                    return 283;
                }
                case 17:
                {
                    return 246;
                }
                case 18:
                {
                    return 254;
                }
                case 19:
                {
                    return 249;
                }
                case 20:
                {
                    return 247;
                }
                case 21:
                {
                    return 111;
                }
                case 22:
                {
                    return 112;
                }
                case 23:
                {
                    return 113;
                }
                case 24:
                {
                    return 114;
                }
                case 25:
                {
                    return 86;
                }
                case 26:
                {
                    return 100;
                }
                case 27:
                {
                    return 101;
                }
                case 28:
                {
                    return 99;
                }
                case 29:
                {
                    return 222;
                }
                case 30:
                {
                    return 278;
                }
                case 31:
                {
                    return 279;
                }
                case 32:
                {
                    return 198;
                }
                case 33:
                {
                    return 256;
                }
                case 34:
                {
                    return 257;
                }
                case 35:
                {
                    return 258;
                }
                case 36:
                {
                    return 250;
                }
                case 37:
                {
                    return 87;
                }
                case 38:
                {
                    return 104;
                }
                case 39:
                {
                    return 103;
                }
                case 40:
                {
                    return 102;
                }
                case 41:
                {
                    return 253;
                }
                case 42:
                {
                    return 243;
                }
                case 43:
                {
                    return 248;
                }
                case 44:
                {
                    return 255;
                }
                case 45:
                {
                    return 73;
                }
                case 46:
                {
                    return 290;
                }
                case 47:
                {
                    return 291;
                }
                case 48:
                {
                    return 292;
                }
                case 49:
                {
                    return 264;
                }
                case 50:
                {
                    return 266;
                }
                case 51:
                {
                    return 269;
                }
                case 52:
                {
                    return 271;
                }
                case 53:
                {
                    return 240;
                }
                case 54:
                {
                    return 245;
                }
                case 55:
                {
                    return 251;
                }
                case 56:
                {
                    return 244;
                }
                case 57:
                {
                    return 267;
                }
                case 58:
                {
                    return 272;
                }
                case 59:
                {
                    return 263;
                }
                case 60:
                {
                    return 289;
                }
                case 61:
                {
                    return 52;
                }
                case 62:
                {
                    return 53;
                }
                case 63:
                {
                    return 195;
                }
                case 64:
                {
                    return 274;
                }
                case 65:
                {
                    return 288;
                }
                case 66:
                {
                    return 203;
                }
                case 67:
                {
                    return 204;
                }
                case 68:
                {
                    return 88;
                }
                case 69:
                {
                    return 259;
                }
                case 70:
                {
                    return 273;
                }
                case 71:
                {
                    return 261;
                }
                case 72:
                {
                    return 270;
                }
                case 73:
                {
                    return 276;
                }
                case 74:
                {
                    return 277;
                }
                case 75:
                {
                    return 196;
                }
                case 76:
                {
                    return 197;
                }
                case 77:
                {
                    return 21;
                }
                case 78:
                {
                    return 22;
                }
                case 79:
                {
                    return 76;
                }
                case 80:
                {
                    return 241;
                }
                case 81:
                {
                    return 284;
                }
                case 82:
                {
                    return 285;
                }
                case 83:
                {
                    return 286;
                }
                case 84:
                {
                    return 287;
                }
                default:
                {
                    return "1";
                    break;
                }
            }
        }// end function

        public function got_type(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return 1;
                }
                case 2:
                {
                    return 12;
                }
                case 3:
                {
                    return 10;
                }
                case 4:
                {
                    return 5;
                }
                case 5:
                {
                    return 1;
                }
                case 6:
                {
                    return 12;
                }
                case 7:
                {
                    return 9;
                }
                case 8:
                {
                    return 10;
                }
                case 9:
                {
                    return 3;
                }
                case 10:
                {
                    return 9;
                }
                case 11:
                {
                    return 2;
                }
                case 12:
                {
                    return 8;
                }
                case 13:
                {
                    return 4;
                }
                case 14:
                {
                    return 8;
                }
                case 15:
                {
                    return 7;
                }
                case 16:
                {
                    return 11;
                }
                case 17:
                {
                    return 7;
                }
                case 18:
                {
                    return 10;
                }
                case 19:
                {
                    return 2;
                }
                case 20:
                {
                    return 5;
                }
                case 21:
                {
                    return 7;
                }
                case 22:
                {
                    return 3;
                }
                case 23:
                {
                    return 4;
                }
                case 24:
                {
                    return 10;
                }
                case 25:
                {
                    return 2;
                }
                case 26:
                {
                    return 1;
                }
                case 27:
                {
                    return 11;
                }
                case 28:
                {
                    return 10;
                }
                case 29:
                {
                    return 9;
                }
                case 30:
                {
                    return 11;
                }
                case 31:
                {
                    return 3;
                }
                case 32:
                {
                    return 2;
                }
                case 33:
                {
                    return 4;
                }
                case 34:
                {
                    return 5;
                }
                case 35:
                {
                    return 12;
                }
                case 36:
                {
                    return 8;
                }
                case 37:
                {
                    return 1;
                }
                case 38:
                {
                    return 2;
                }
                case 39:
                {
                    return 5;
                }
                case 40:
                {
                    return 3;
                }
                case 41:
                {
                    return 10;
                }
                case 42:
                {
                    return 7;
                }
                case 43:
                {
                    return 5;
                }
                case 44:
                {
                    return 9;
                }
                case 45:
                {
                    return 2;
                }
                case 46:
                {
                    return 3;
                }
                case 47:
                {
                    return 11;
                }
                case 48:
                {
                    return 1;
                }
                case 49:
                {
                    return 10;
                }
                case 50:
                {
                    return 12;
                }
                case 51:
                {
                    return 4;
                }
                case 52:
                {
                    return 9;
                }
                case 53:
                {
                    return 5;
                }
                case 54:
                {
                    return 11;
                }
                case 55:
                {
                    return 4;
                }
                case 56:
                {
                    return 12;
                }
                case 57:
                {
                    return 1;
                }
                case 58:
                {
                    return 7;
                }
                case 59:
                {
                    return 12;
                }
                case 60:
                {
                    return 11;
                }
                case 61:
                {
                    return 8;
                }
                case 62:
                {
                    return 3;
                }
                case 63:
                {
                    return 9;
                }
                case 64:
                {
                    return 8;
                }
                case 65:
                {
                    return 2;
                }
                case 66:
                {
                    return 14;
                }
                case 67:
                {
                    return 1;
                }
                case 68:
                {
                    return 7;
                }
                case 69:
                {
                    return 1;
                }
                case 70:
                {
                    return 9;
                }
                case 71:
                {
                    return 8;
                }
                case 72:
                {
                    return 4;
                }
                case 73:
                {
                    return 5;
                }
                case 74:
                {
                    return 1;
                }
                case 75:
                {
                    return 13;
                }
                case 76:
                {
                    return 12;
                }
                case 77:
                {
                    return 2;
                }
                case 78:
                {
                    return 3;
                }
                case 79:
                {
                    return 11;
                }
                case 80:
                {
                    return 15;
                }
                case 81:
                {
                    return 7;
                }
                case 82:
                {
                    return 8;
                }
                case 83:
                {
                    return 14;
                }
                case 84:
                {
                    return 13;
                }
                default:
                {
                    return 1;
                    break;
                }
            }
        }// end function

        public function got_power(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return 20;
                }
                case 2:
                {
                    return 200;
                }
                case 3:
                {
                    return 240;
                }
                case 4:
                {
                    return 260;
                }
                case 5:
                {
                    return 22;
                }
                case 6:
                {
                    return 200;
                }
                case 7:
                {
                    return 260;
                }
                case 8:
                {
                    return 240;
                }
                case 9:
                {
                    return 18;
                }
                case 10:
                {
                    return 230;
                }
                case 11:
                {
                    return 27;
                }
                case 12:
                {
                    return 250;
                }
                case 13:
                {
                    return 10;
                }
                case 14:
                {
                    return 250;
                }
                case 15:
                {
                    return 0;
                }
                case 16:
                {
                    return 300;
                }
                case 17:
                {
                    return 0;
                }
                case 18:
                {
                    return 280;
                }
                case 19:
                {
                    return 25;
                }
                case 20:
                {
                    return 300;
                }
                case 21:
                {
                    return 0;
                }
                case 22:
                {
                    return 18;
                }
                case 23:
                {
                    return 15;
                }
                case 24:
                {
                    return 260;
                }
                case 25:
                {
                    return 26;
                }
                case 26:
                {
                    return 18;
                }
                case 27:
                {
                    return 300;
                }
                case 28:
                {
                    return 230;
                }
                case 29:
                {
                    return 320;
                }
                case 30:
                {
                    return 300;
                }
                case 31:
                {
                    return 19;
                }
                case 32:
                {
                    return 22;
                }
                case 33:
                {
                    return 12;
                }
                case 34:
                {
                    return 230;
                }
                case 35:
                {
                    return 240;
                }
                case 36:
                {
                    return 350;
                }
                case 37:
                {
                    return 40;
                }
                case 38:
                {
                    return 45;
                }
                case 39:
                {
                    return 360;
                }
                case 40:
                {
                    return 35;
                }
                case 41:
                {
                    return 360;
                }
                case 42:
                {
                    return 0;
                }
                case 43:
                {
                    return 360;
                }
                case 44:
                {
                    return 360;
                }
                case 45:
                {
                    return 45;
                }
                case 46:
                {
                    return 35;
                }
                case 47:
                {
                    return 500;
                }
                case 48:
                {
                    return 40;
                }
                case 49:
                {
                    return 360;
                }
                case 50:
                {
                    return 300;
                }
                case 51:
                {
                    return 25;
                }
                case 52:
                {
                    return 360;
                }
                case 53:
                {
                    return 360;
                }
                case 54:
                {
                    return 500;
                }
                case 55:
                {
                    return 25;
                }
                case 56:
                {
                    return 300;
                }
                case 57:
                {
                    return 40;
                }
                case 58:
                {
                    return 0;
                }
                case 59:
                {
                    return 300;
                }
                case 60:
                {
                    return 500;
                }
                case 61:
                {
                    return 350;
                }
                case 62:
                {
                    return 38;
                }
                case 63:
                {
                    return 360;
                }
                case 64:
                {
                    return 350;
                }
                case 65:
                {
                    return 45;
                }
                case 66:
                {
                    return 40;
                }
                case 67:
                {
                    return 80;
                }
                case 68:
                {
                    return 0;
                }
                case 69:
                {
                    return 80;
                }
                case 70:
                {
                    return 450;
                }
                case 71:
                {
                    return 400;
                }
                case 72:
                {
                    return 60;
                }
                case 73:
                {
                    return 450;
                }
                case 74:
                {
                    return 80;
                }
                case 75:
                {
                    return 450;
                }
                case 76:
                {
                    return 450;
                }
                case 77:
                {
                    return 100;
                }
                case 78:
                {
                    return 78;
                }
                case 79:
                {
                    return 700;
                }
                case 80:
                {
                    return 0;
                }
                case 81:
                {
                    return 0;
                }
                case 82:
                {
                    return 400;
                }
                case 83:
                {
                    return 45;
                }
                case 84:
                {
                    return 450;
                }
                default:
                {
                    return 1;
                    break;
                }
            }
        }// end function

        public function got_reload(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return 600;
                }
                case 2:
                {
                    return 600;
                }
                case 3:
                {
                    return 600;
                }
                case 4:
                {
                    return 600;
                }
                case 5:
                {
                    return 640;
                }
                case 6:
                {
                    return 600;
                }
                case 7:
                {
                    return 600;
                }
                case 8:
                {
                    return 600;
                }
                case 9:
                {
                    return 600;
                }
                case 10:
                {
                    return 600;
                }
                case 11:
                {
                    return 730;
                }
                case 12:
                {
                    return 900;
                }
                case 13:
                {
                    return 560;
                }
                case 14:
                {
                    return 900;
                }
                case 15:
                {
                    return 900;
                }
                case 16:
                {
                    return 600;
                }
                case 17:
                {
                    return 900;
                }
                case 18:
                {
                    return 580;
                }
                case 19:
                {
                    return 700;
                }
                case 20:
                {
                    return 600;
                }
                case 21:
                {
                    return 900;
                }
                case 22:
                {
                    return 440;
                }
                case 23:
                {
                    return 650;
                }
                case 24:
                {
                    return 620;
                }
                case 25:
                {
                    return 690;
                }
                case 26:
                {
                    return 540;
                }
                case 27:
                {
                    return 600;
                }
                case 28:
                {
                    return 600;
                }
                case 29:
                {
                    return 600;
                }
                case 30:
                {
                    return 600;
                }
                case 31:
                {
                    return 630;
                }
                case 32:
                {
                    return 660;
                }
                case 33:
                {
                    return 600;
                }
                case 34:
                {
                    return 600;
                }
                case 35:
                {
                    return 640;
                }
                case 36:
                {
                    return 1200;
                }
                case 37:
                {
                    return 1000;
                }
                case 38:
                {
                    return 1100;
                }
                case 39:
                {
                    return 1000;
                }
                case 40:
                {
                    return 1000;
                }
                case 41:
                {
                    return 1000;
                }
                case 42:
                {
                    return 600;
                }
                case 43:
                {
                    return 1000;
                }
                case 44:
                {
                    return 1000;
                }
                case 45:
                {
                    return 1100;
                }
                case 46:
                {
                    return 1000;
                }
                case 47:
                {
                    return 1000;
                }
                case 48:
                {
                    return 1000;
                }
                case 49:
                {
                    return 1000;
                }
                case 50:
                {
                    return 1000;
                }
                case 51:
                {
                    return 1000;
                }
                case 52:
                {
                    return 1000;
                }
                case 53:
                {
                    return 1000;
                }
                case 54:
                {
                    return 1000;
                }
                case 55:
                {
                    return 1000;
                }
                case 56:
                {
                    return 1000;
                }
                case 57:
                {
                    return 1000;
                }
                case 58:
                {
                    return 600;
                }
                case 59:
                {
                    return 1000;
                }
                case 60:
                {
                    return 1000;
                }
                case 61:
                {
                    return 1200;
                }
                case 62:
                {
                    return 1000;
                }
                case 63:
                {
                    return 1000;
                }
                case 64:
                {
                    return 1200;
                }
                case 65:
                {
                    return 1100;
                }
                case 66:
                {
                    return 1400;
                }
                case 67:
                {
                    return 1200;
                }
                case 68:
                {
                    return 600;
                }
                case 69:
                {
                    return 1400;
                }
                case 70:
                {
                    return 1400;
                }
                case 71:
                {
                    return 1600;
                }
                case 72:
                {
                    return 1400;
                }
                case 73:
                {
                    return 1400;
                }
                case 74:
                {
                    return 1400;
                }
                case 75:
                {
                    return 1600;
                }
                case 76:
                {
                    return 1400;
                }
                case 77:
                {
                    return 1400;
                }
                case 78:
                {
                    return 1400;
                }
                case 79:
                {
                    return 1400;
                }
                case 80:
                {
                    return 1800;
                }
                case 81:
                {
                    return 1200;
                }
                case 82:
                {
                    return 1600;
                }
                case 83:
                {
                    return 1600;
                }
                case 84:
                {
                    return 1600;
                }
                default:
                {
                    return 1;
                    break;
                }
            }
        }// end function

        public function got_time(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return 1;
                }
                case 2:
                {
                    return 50;
                }
                case 3:
                {
                    return 10;
                }
                case 4:
                {
                    return 60;
                }
                case 5:
                {
                    return 1;
                }
                case 6:
                {
                    return 40;
                }
                case 7:
                {
                    return 60;
                }
                case 8:
                {
                    return 60;
                }
                case 9:
                {
                    return 50;
                }
                case 10:
                {
                    return 50;
                }
                case 11:
                {
                    return 8;
                }
                case 12:
                {
                    return 40;
                }
                case 13:
                {
                    return 40;
                }
                case 14:
                {
                    return 60;
                }
                case 15:
                {
                    return 1;
                }
                case 16:
                {
                    return 50;
                }
                case 17:
                {
                    return 1;
                }
                case 18:
                {
                    return 80;
                }
                case 19:
                {
                    return 10;
                }
                case 20:
                {
                    return 80;
                }
                case 21:
                {
                    return 1;
                }
                case 22:
                {
                    return 50;
                }
                case 23:
                {
                    return 50;
                }
                case 24:
                {
                    return 10;
                }
                case 25:
                {
                    return 8;
                }
                case 26:
                {
                    return 1;
                }
                case 27:
                {
                    return 40;
                }
                case 28:
                {
                    return 5;
                }
                case 29:
                {
                    return 70;
                }
                case 30:
                {
                    return 50;
                }
                case 31:
                {
                    return 50;
                }
                case 32:
                {
                    return 10;
                }
                case 33:
                {
                    return 50;
                }
                case 34:
                {
                    return 40;
                }
                case 35:
                {
                    return 50;
                }
                case 36:
                {
                    return 60;
                }
                case 37:
                {
                    return 1;
                }
                case 38:
                {
                    return 10;
                }
                case 39:
                {
                    return 60;
                }
                case 40:
                {
                    return 50;
                }
                case 41:
                {
                    return 10;
                }
                case 42:
                {
                    return 1;
                }
                case 43:
                {
                    return 60;
                }
                case 44:
                {
                    return 60;
                }
                case 45:
                {
                    return 10;
                }
                case 46:
                {
                    return 50;
                }
                case 47:
                {
                    return 50;
                }
                case 48:
                {
                    return 1;
                }
                case 49:
                {
                    return 10;
                }
                case 50:
                {
                    return 50;
                }
                case 51:
                {
                    return 50;
                }
                case 52:
                {
                    return 60;
                }
                case 53:
                {
                    return 60;
                }
                case 54:
                {
                    return 60;
                }
                case 55:
                {
                    return 50;
                }
                case 56:
                {
                    return 50;
                }
                case 57:
                {
                    return 1;
                }
                case 58:
                {
                    return 1;
                }
                case 59:
                {
                    return 50;
                }
                case 60:
                {
                    return 50;
                }
                case 61:
                {
                    return 60;
                }
                case 62:
                {
                    return 50;
                }
                case 63:
                {
                    return 60;
                }
                case 64:
                {
                    return 60;
                }
                case 65:
                {
                    return 10;
                }
                case 66:
                {
                    return 60;
                }
                case 67:
                {
                    return 1;
                }
                case 68:
                {
                    return 1;
                }
                case 69:
                {
                    return 1;
                }
                case 70:
                {
                    return 60;
                }
                case 71:
                {
                    return 60;
                }
                case 72:
                {
                    return 50;
                }
                case 73:
                {
                    return 60;
                }
                case 74:
                {
                    return 1;
                }
                case 75:
                {
                    return 70;
                }
                case 76:
                {
                    return 50;
                }
                case 77:
                {
                    return 10;
                }
                case 78:
                {
                    return 50;
                }
                case 79:
                {
                    return 50;
                }
                case 80:
                {
                    return 50;
                }
                case 81:
                {
                    return 1;
                }
                case 82:
                {
                    return 60;
                }
                case 83:
                {
                    return 60;
                }
                case 84:
                {
                    return 70;
                }
                default:
                {
                    return 1;
                    break;
                }
            }
        }// end function

        public function got_price(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return 100;
                }
                case 2:
                {
                    return 100;
                }
                case 3:
                {
                    return 100;
                }
                case 4:
                {
                    return 100;
                }
                case 5:
                {
                    return 100;
                }
                case 6:
                {
                    return 100;
                }
                case 7:
                {
                    return 100;
                }
                case 8:
                {
                    return 100;
                }
                case 9:
                {
                    return 100;
                }
                case 10:
                {
                    return 100;
                }
                case 11:
                {
                    return 100;
                }
                case 12:
                {
                    return 100;
                }
                case 13:
                {
                    return 100;
                }
                case 14:
                {
                    return 100;
                }
                case 15:
                {
                    return 100;
                }
                case 16:
                {
                    return 100;
                }
                case 17:
                {
                    return 100;
                }
                case 18:
                {
                    return 100;
                }
                case 19:
                {
                    return 100;
                }
                case 20:
                {
                    return 100;
                }
                case 21:
                {
                    return 100;
                }
                case 22:
                {
                    return 100;
                }
                case 23:
                {
                    return 100;
                }
                case 24:
                {
                    return 100;
                }
                case 25:
                {
                    return 100;
                }
                case 26:
                {
                    return 100;
                }
                case 27:
                {
                    return 100;
                }
                case 28:
                {
                    return 100;
                }
                case 29:
                {
                    return 100;
                }
                case 30:
                {
                    return 100;
                }
                case 31:
                {
                    return 100;
                }
                case 32:
                {
                    return 100;
                }
                case 33:
                {
                    return 100;
                }
                case 34:
                {
                    return 100;
                }
                case 35:
                {
                    return 100;
                }
                case 36:
                {
                    return 800;
                }
                case 37:
                {
                    return 800;
                }
                case 38:
                {
                    return 800;
                }
                case 39:
                {
                    return 800;
                }
                case 40:
                {
                    return 800;
                }
                case 41:
                {
                    return 800;
                }
                case 42:
                {
                    return 800;
                }
                case 43:
                {
                    return 800;
                }
                case 44:
                {
                    return 800;
                }
                case 45:
                {
                    return 800;
                }
                case 46:
                {
                    return 800;
                }
                case 47:
                {
                    return 800;
                }
                case 48:
                {
                    return 800;
                }
                case 49:
                {
                    return 800;
                }
                case 50:
                {
                    return 800;
                }
                case 51:
                {
                    return 800;
                }
                case 52:
                {
                    return 800;
                }
                case 53:
                {
                    return 800;
                }
                case 54:
                {
                    return 800;
                }
                case 55:
                {
                    return 800;
                }
                case 56:
                {
                    return 800;
                }
                case 57:
                {
                    return 800;
                }
                case 58:
                {
                    return 800;
                }
                case 59:
                {
                    return 800;
                }
                case 60:
                {
                    return 800;
                }
                case 61:
                {
                    return 800;
                }
                case 62:
                {
                    return 800;
                }
                case 63:
                {
                    return 800;
                }
                case 64:
                {
                    return 800;
                }
                case 65:
                {
                    return 800;
                }
                case 66:
                {
                    return 3000;
                }
                case 67:
                {
                    return 3000;
                }
                case 68:
                {
                    return 800;
                }
                case 69:
                {
                    return 3000;
                }
                case 70:
                {
                    return 3000;
                }
                case 71:
                {
                    return 3000;
                }
                case 72:
                {
                    return 3000;
                }
                case 73:
                {
                    return 3000;
                }
                case 74:
                {
                    return 3000;
                }
                case 75:
                {
                    return 3000;
                }
                case 76:
                {
                    return 3000;
                }
                case 77:
                {
                    return 3000;
                }
                case 78:
                {
                    return 3000;
                }
                case 79:
                {
                    return 3000;
                }
                case 80:
                {
                    return 3000;
                }
                case 81:
                {
                    return 3000;
                }
                case 82:
                {
                    return 3000;
                }
                case 83:
                {
                    return 3000;
                }
                case 84:
                {
                    return 3000;
                }
                default:
                {
                    return 1;
                    break;
                }
            }
        }// end function

        public function got_level(param1)
        {
            switch(param1)
            {
                case 1:
                {
                    return 1;
                }
                case 2:
                {
                    return 1;
                }
                case 3:
                {
                    return 1;
                }
                case 4:
                {
                    return 1;
                }
                case 5:
                {
                    return 1;
                }
                case 6:
                {
                    return 1;
                }
                case 7:
                {
                    return 1;
                }
                case 8:
                {
                    return 1;
                }
                case 9:
                {
                    return 1;
                }
                case 10:
                {
                    return 1;
                }
                case 11:
                {
                    return 1;
                }
                case 12:
                {
                    return 1;
                }
                case 13:
                {
                    return 1;
                }
                case 14:
                {
                    return 1;
                }
                case 15:
                {
                    return 1;
                }
                case 16:
                {
                    return 1;
                }
                case 17:
                {
                    return 1;
                }
                case 18:
                {
                    return 1;
                }
                case 19:
                {
                    return 1;
                }
                case 20:
                {
                    return 1;
                }
                case 21:
                {
                    return 1;
                }
                case 22:
                {
                    return 1;
                }
                case 23:
                {
                    return 1;
                }
                case 24:
                {
                    return 1;
                }
                case 25:
                {
                    return 1;
                }
                case 26:
                {
                    return 1;
                }
                case 27:
                {
                    return 1;
                }
                case 28:
                {
                    return 1;
                }
                case 29:
                {
                    return 1;
                }
                case 30:
                {
                    return 1;
                }
                case 31:
                {
                    return 1;
                }
                case 32:
                {
                    return 1;
                }
                case 33:
                {
                    return 1;
                }
                case 34:
                {
                    return 1;
                }
                case 35:
                {
                    return 1;
                }
                case 36:
                {
                    return 2;
                }
                case 37:
                {
                    return 2;
                }
                case 38:
                {
                    return 2;
                }
                case 39:
                {
                    return 2;
                }
                case 40:
                {
                    return 2;
                }
                case 41:
                {
                    return 2;
                }
                case 42:
                {
                    return 2;
                }
                case 43:
                {
                    return 2;
                }
                case 44:
                {
                    return 2;
                }
                case 45:
                {
                    return 2;
                }
                case 46:
                {
                    return 2;
                }
                case 47:
                {
                    return 2;
                }
                case 48:
                {
                    return 2;
                }
                case 49:
                {
                    return 2;
                }
                case 50:
                {
                    return 2;
                }
                case 51:
                {
                    return 2;
                }
                case 52:
                {
                    return 2;
                }
                case 53:
                {
                    return 2;
                }
                case 54:
                {
                    return 2;
                }
                case 55:
                {
                    return 2;
                }
                case 56:
                {
                    return 2;
                }
                case 57:
                {
                    return 2;
                }
                case 58:
                {
                    return 2;
                }
                case 59:
                {
                    return 2;
                }
                case 60:
                {
                    return 2;
                }
                case 61:
                {
                    return 2;
                }
                case 62:
                {
                    return 2;
                }
                case 63:
                {
                    return 2;
                }
                case 64:
                {
                    return 2;
                }
                case 65:
                {
                    return 2;
                }
                case 66:
                {
                    return 3;
                }
                case 67:
                {
                    return 3;
                }
                case 68:
                {
                    return 2;
                }
                case 69:
                {
                    return 3;
                }
                case 70:
                {
                    return 3;
                }
                case 71:
                {
                    return 3;
                }
                case 72:
                {
                    return 3;
                }
                case 73:
                {
                    return 3;
                }
                case 74:
                {
                    return 3;
                }
                case 75:
                {
                    return 3;
                }
                case 76:
                {
                    return 3;
                }
                case 77:
                {
                    return 3;
                }
                case 78:
                {
                    return 3;
                }
                case 79:
                {
                    return 3;
                }
                case 80:
                {
                    return 3;
                }
                case 81:
                {
                    return 3;
                }
                case 82:
                {
                    return 3;
                }
                case 83:
                {
                    return 3;
                }
                case 84:
                {
                    return 3;
                }
                default:
                {
                    return 1;
                    break;
                }
            }
        }// end function

    }
}
