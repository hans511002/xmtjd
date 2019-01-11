module com.code {
    export class Main extends std.MovieClip {
        public static sav: SharedObject = SharedObject.getLocal("SharedObject");
        public static zvukReg: boolean = true;
        public static _app_is_add: boolean = false;
        public static lev_sound: number = 1;
        public static mute_music: boolean = false;
        public static mute_sfx: boolean = false;
        public static xray_mode: boolean = false;
        public static go_to_game: boolean = false;
        public static first_target: any = null;
        public static load_map_zvuk: number = 1;
        public static muz_map_zvuk_zv: egret.Sound = new egret.Sound();
        public static muz_map_zvuk_can: egret.SoundChannel = null;
        public static load_elf_zvuk: number = 1;
        public static muz_elf_zvuk_zv: egret.Sound = new egret.Sound();
        public static muz_elf_zvuk_can: egret.SoundChannel = null;
        public static load_water_zvuk: number = 1;
        public static muz_water_zvuk_zv: egret.Sound = new egret.Sound();
        public static muz_water_zvuk_can: egret.SoundChannel = null;
        public static load_dance_zvuk: number = 1;
        public static muz_dance_zvuk_zv: egret.Sound = new egret.Sound();
        public static muz_dance_zvuk_can: egret.SoundChannel = null; 
        public body_cl: std.MovieClip = null;
        public card_8: card_mc = null;
        public cloak_cl: std.MovieClip = null;
        public foot1_cl: std.MovieClip = null;
        public foot2_cl: std.MovieClip = null;
        public h2: std.MovieClip = null;
        public hand_l_cl: std.MovieClip = null;
        public hand_r_cl: std.MovieClip = null;
        public head_cl: std.MovieClip = null;
        public icon_cl: std.MovieClip = null;
        public skirt_cl: std.MovieClip = null;
        public tail_cl: std.MovieClip = null;
        public wool_cl: std.MovieClip = null;
        private _App: App = null;
        private _Preloader: Preloader = null;

        public constructor() {
            super();
            this.addFrameScript(0,this.frame1);
            if(this.stage) {
                this.init();
            } else {
                this.addEventListener(egret.Event.ADDED_TO_STAGE,this.init,this);
            }
        }

        public init(param1: egret.Event = null): void {
            this._Preloader = new Preloader();
            this.addChild(this._Preloader);
            this.addEventListener(egret.Event.ENTER_FRAME,this.go_to_game_f,this);
        }

        public go_to_game_f(param1: egret.Event): any {
            var _loc2_:any = null;
            if(go_to_game) {
                this.removeChild(this._Preloader);
                MovieClip(root).gotoAndStop("game");
                _loc2_ = new App();
                this.addChild(_loc2_);
                _loc2_.init();
                _loc2_.open_new_screen(first_target);
                this.removeEventListener(egret.Event.ENTER_FRAME,this.go_to_game_f,this);
            }
        }

        public frame1(): any {
            this.stop();
        }
    }
}
