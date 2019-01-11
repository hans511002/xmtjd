module com.code {
    export class Enemy extends DataMovieClip {

        public constructor() {
            super();
        }

        public got_title(param1: any): any {
            switch(param1) {
                case 1:
                    return Main.sav.data.team_name_1;
                case 2:
                    return "浣斯顿火箭";
                case 3:
                    return "加拉狐沙雷";
                case 4:
                    return "阿森浣";
                case 5:
                    return "狐尔克04";
                case 6:
                    return "浣城76人";
                case 7:
                    return "狐彻斯特联队";
                case 8:
                    return "金州勇浣";
                case 9:
                    return "aFax";
                case 10:
                    return "纽约浣克斯";
                case 11:
                    return "皇家狐德里";
                case 12:
                    return "浣特律活塞";
                case 13:
                    return "巴狸圣日耳曼";
                case 14:
                    return "浣加哥公牛";
                case 15:
                    return "狐堡俱乐部";
                case 16:
                    return "洛杉矶浣熊";
                case 17:
                    return "狐伦西亚";
                case 18:
                    return "圣浣熊马刺";
                case 19:
                    return "拜耳勒沃狐森";
                case 20:
                    return "浣士顿凯尔特人";
                case 21:
                    return "国际狐兰";
                case 22:
                    return "暗黑浣熊";
                default:
                    return;
            }
        }
    }
}
