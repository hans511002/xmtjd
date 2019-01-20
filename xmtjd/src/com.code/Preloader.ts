module com.code {
    export class Preloader extends std.MovieClip {
        public name_in_cl: std.MovieClipSub = null;
        public play_cl: std.MovieClipSub = null;
        public play_clPlay_cl: std.MCButton = null;
        public skala: std.MovieClipSub = null;
        loaded: number = 0;
        total: number = 0;
        rnd_for: number = 0;
        i_in: String = null;
        site_good: number = 0;
        _app: App = null;

        sponsor_button: Sponsor_button;
        deqaf_button: buttons.Deqaf_button;
        name_in_clLol: egret.DisplayObjectContainer;
        public constructor() {
            super("Preloader");
            this._app = App.getInstance();
            this.play_cl = this.createMovieClipSub("play_cl");
            this.skala = this.createMovieClipSub("skala");
            this.name_in_cl = this.createMovieClipSub("name_in_cl");
            this.play_clPlay_cl = this.play_cl.createMCButton("play_cl");
            this.name_in_clLol = this.name_in_cl.getSprite("lol");
            this.skala.mcMask = this.createMask(std.MCMask.START, "mask", "bg");

            this.sponsor_button = <Sponsor_button>this.addMovieClip("sponsor_button", new Sponsor_button());
            this.deqaf_button = <buttons.Deqaf_button>this.addMovieClip("deqaf_button", new buttons.Deqaf_button());

            if (this.stage) {
                this.init();
            }
            else {
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
            }
        }
        public init(param1: egret.Event = null): void {
            this.play_cl.$setVisible(false);
            // loaderInfo.addEventListener(ProgressEvent.PROGRESS, this.progressHandler, this);
            //this.loaderInfo.addEventListener(egret.Event.COMPLETE, this.startGame_f, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.preloader_f, this);
            this.init_cpm();
        }
        public add_armor_ads(): any {
            var abs: any = undefined;
            var loadComplete: Function = null;
            loadComplete = function (param1: egret.Event): void {
                abs = param1.currentTarget.content;
                this.name_in_cl.lol.addChild(abs);
                abs.show({
                    "x": -150,
                    "y": -100
                });
            };
            var abs_url: String = "./ABS.swf";
            // Security.allowDomain(abs_url);
            // var urlRequest: URLRequest = new URLRequest(abs_url);
            // var loader: Loader = new Loader();
            // loader.contentLoaderInfo.addEventListener(egret.Event.COMPLETE, loadComplete, this);
            // loader.load(urlRequest);
        }
        public init_cpm(): any {
            var _loc1_: number = NaN;
            var _loc2_: string = "";//this.stage.loaderInfo.loaderURL;
            var _loc3_: number = _loc2_.indexOf("://") + 3;
            var _loc4_: number = _loc2_.indexOf("/", _loc3_);
            var _loc5_: string = _loc2_.substring(_loc3_, _loc4_);
            var _loc6_: number = _loc5_.lastIndexOf(".") - 1;
            var _loc7_: number = _loc5_.lastIndexOf(".", _loc6_) + 1;
            _loc5_ = _loc5_.substring(_loc7_, _loc5_.length);
            var _loc8_: any = [];
            _loc8_.push("www.kongregate.com");
            _loc8_.push("kongregate.com");
            _loc8_.push("newgrounds.com");
            _loc8_.push("www.newgrounds.com");
            _loc8_.push("uploads.ungrounded.net");
            _loc8_.push("ungrounded.net");
            _loc8_.push("ngfiles.com");

            while (_loc1_ < _loc8_.length) {
                if (_loc5_ == _loc8_[_loc1_]) {
                    this.site_good = 1;
                }
                _loc1_++;
            }
            if (this.site_good == 0) {
                this.name_in_cl.gotoAndStop(1);
                this.add_armor_ads();
            }
            else {
                this.name_in_cl.gotoAndStop(2);
                this.play_cl.$setY(297);
            }
        }
        public progressHandler(param1: ProgressEvent): void {
            this.loaded = param1.loaded;//.bytesLoaded;
            this.total = param1.total;//.bytesTotal;
        }
        public preloader_f(param1: egret.Event): any {
            this.skala.gotoAndStop(Math.floor((this.total - (this.total - this.loaded)) * 100 / this.total));
            if (Math.floor(this.loaded / this.total * 100) >= 100) {
                this.load_end();
            }
        }
        public startGame_f(param1: egret.Event): any {
            this.load_end();
        }
        public load_end(): any {
            this.skala.gotoAndStop(100);
            this.play_cl.$setVisible(true);
            this.play_cl.gotoAndPlay(2);
            this.play_cl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bt_play, this);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.preloader_f, this);
            //loaderInfo.removeEventListener(egret.Event.COMPLETE, this.startGame_f, this);
            //loaderInfo.removeEventListener(ProgressEvent.PROGRESS, this.progressHandler, this);
        }
        public bt_play(param1: egret.TouchEvent): any {
            Main.go_to_game = true;
            Main.first_target = "game";
            Main.first_target = "dress";
            Main.first_target = "upg";
            Main.first_target = "menu";
            Main.first_target = "splash";
        }
        public delete_f(): any {
        }
    }
}
