module com.code {
    export class Preloader extends std.MovieClip {
        public name_in_cl: std.MovieClipSub = null;
        public play_cl: std.MovieClipSub = null;
        public play_clPlay_cl: std.MCButton = null;
        public skala: std.MovieClipSub = null;
        loaded: number = 0;
        total: number = 1;
        rnd_for: number = 0;
        i_in: String = null;
        site_good: number = 0;
        _app: App = null;

        sponsor_button: Sponsor_button;
        deqaf_button: buttons.Deqaf_button;
        name_in_clLol: egret.DisplayObjectContainer;
        public constructor() {
            super(Config.mcRoot, "Preloader", "Preloader");
            this._app = App.getInstance();
            this.play_cl = this.createMovieClipSub("play_cl");
            this.skala = this.createMovieClipSub("skala");
            this.name_in_cl = this.createMovieClipSub("name_in_cl");
            this.play_clPlay_cl = this.play_cl.createMCButton("play_cl");
            this.name_in_clLol = this.name_in_cl.getSprite("lol");
            this.skala.mcMask = this.skala.createMask(std.MCMask.START, "mask", "bg");

            this.sponsor_button = <Sponsor_button>this.addMovieClip("sponsor_button", new Sponsor_button());
            this.deqaf_button = <buttons.Deqaf_button>this.addMovieClip("deqaf_button", new buttons.Deqaf_button());

            if (this.stage) {
                this.init();
            } else {
                this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
            }
        }
        static isReadyLoad(): boolean {
            if (std.isReadyDbFile(Config.mcRoot, "Preloader")
                && Sponsor_button.isReadyLoad() && buttons.Deqaf_button.isReadyLoad()) {
                return true;
            }
            return false;
        }
        public init(param1: egret.Event = null): void {
            this.play_cl.$setVisible(false);
            // this.loaderInfo.addEventListener(egret.ProgressEvent.PROGRESS, this.progressHandler, this);
            // this.loaderInfo.addEventListener(egret.Event.COMPLETE, this.startGame_f, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.preloader_f, this);
            this.init_cpm();
        }
        public init_cpm(): any {
            if (this.site_good == 0) {
                this.name_in_cl.gotoAndStop(1);
                this.add_armor_ads();
            }
            else {
                this.name_in_cl.gotoAndStop(2);
                this.play_cl.$setY(297);
            }
        }
        //load ads
        public add_armor_ads(): any {
            var abs: any = undefined;
            // var loadComplete: Function = null;
            // loadComplete = function (this: Preloader, param1: egret.Event): void {
            //     abs = param1.currentTarget.content;
            //     this.name_in_clLol.addChild(abs);
            //     abs.show({
            //         "x": -150,
            //         "y": -100
            //     });
            // };
            var abs_url: string = "./ABS.swf";
            // egret.Security.allowDomain(abs_url);
            var urlRequest: egret.URLRequest = new egret.URLRequest(abs_url);
            var loader: egret.URLLoader = new egret.URLLoader();
            loader.dataFormat = egret.URLLoaderDataFormat.BINARY;
            loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
            loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
            loader.load(urlRequest);
        }

        private onLoadComplete(event: egret.Event): void {
            egret.log("onLoadComplete");
            var loader: egret.URLLoader = <egret.URLLoader>event.target;
            var abs = loader.data;
            this.name_in_clLol.addChild(abs);
            abs.show({
                "x": -150,
                "y": -100
            });
        }

        private onLoadError(): void {
            egret.log("onLoadError");
        }

        // public progressHandler(param1: ProgressEvent): void {
        public progressHandler(loaded: number, total: number): void {
            this.loaded = loaded;//.bytesLoaded;
            this.total = total;//.bytesTotal;
        }
        public preloader_f(param1: egret.Event): any {
            this.skala.gotoAndStop(Math.floor(this.loaded * 100 / this.total));
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
            this.play_clPlay_cl.onclick = this.bt_play;
            this.play_clPlay_cl.container.addEventListener(egret.TouchEvent.TOUCH_TAP, this.bt_play, this);
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
