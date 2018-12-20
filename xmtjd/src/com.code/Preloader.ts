module com.code
{ 
    export class Preloader extends egret.Sprite
    {
        name_in_cl:std.MovieClip;
        play_cl:std.MovieClip;
        skala:std.MovieClip;
        loaded:number;
        total:number;
        rnd_for:number = 0;
        i_in:string;
        site_good:number = 0;
        _app:App;

        public Preloader()
        {
            this._app = App.getInstance();
            if (this.stage)
            {
                this.init();
            }
            else
            {
                addEventListener(egret.Event.ADDED_TO_STAGE, this.init);
            }
            return;
        }// end function

        public init(event:Event = null) : void
        {
            this.play_cl.visible = false;
            loaderInfo.addEventListener(ProgressEvent.PROGRESS, this.progressHandler);
            loaderInfo.addEventListener(Event.COMPLETE, this.startGame_f);
            addEventListener(egret.Event.ENTER_FRAME, this.preloader_f);
            this.init_cpm();
            return;
        }// end function

        public add_armor_ads()
        {
            var abs;
            var loadComplete:Function;
            loadComplete = function (event:Event) : void
            {
                abs = event.currentTarget.content;
                this.name_in_cl.lol.addChild(abs);
                abs.show({x:-150, y:-100});
                return;
            }// end function
            ;
            var abs_url:string;
            // Security.allowDomain(abs_url);
            var urlRequest = new URLRequest(abs_url);
            var loader = new Loader();
            loader.contentLoaderInfo.addEventListener(egret.Event.COMPLETE, loadComplete);
            loader.load(urlRequest);
            return;
        }// end function

        public init_cpm()
        {
            var _loc_1  = NaN;
            var _loc_2  = this.stage.loaderInfo.loaderURL;
            var _loc_3  = _loc_2.indexOf("://") + 3;
            var _loc_4  = _loc_2.indexOf("/", _loc_3);
            var _loc_5  = _loc_2.substring(_loc_3, _loc_4);
            var _loc_6  = _loc_5.lastIndexOf(".") - 1;
            var _loc_7  = _loc_5.lastIndexOf(".", _loc_6) + 1;
            _loc_5 = _loc_5.substring(_loc_7, _loc_5.length);
            var _loc_8  = [];
            _loc_8.push("www.kongregate.com");
            _loc_8.push("kongregate.com");
            _loc_8.push("newgrounds.com");
            _loc_8.push("www.newgrounds.com");
            _loc_8.push("uploads.ungrounded.net");
            _loc_8.push("ungrounded.net");
            _loc_8.push("ngfiles.com");
            _loc_1 = 0;
            while (_loc_1 < _loc_8.length)
            {
                
                if (_loc_5 == _loc_8[_loc_1])
                {
                    this.site_good = 1;
                }
                _loc_1 = _loc_1 + 1;
            }
            if (this.site_good == 0)
            {
                this.name_in_cl.gotoAndStop(1);
                this.add_armor_ads();
            }
            else
            {
                this.name_in_cl.gotoAndStop(2);
                this.play_cl.y = 297;
            }
            return;
        }// end function

        public progressHandler(event:ProgressEvent) : void
        {
            this.loaded = event.bytesLoaded;
            this.total = event.bytesTotal;
            return;
        }// end function

        public preloader_f(event:Event)
        {
            this.skala.gotoAndStop(((this.total - (this.total - this.loaded)) * 100 / this.total) );
            if ( (this.loaded / this.total * 100) >= 100)
            {
                this.load_end();
            }
            return;
        }// end function

        public startGame_f(event:Event)
        {
            this.load_end();
            return;
        }// end function

        public load_end()
        {
            this.skala.gotoAndStop(100);
            this.play_cl.visible = true;
            this.play_cl.gotoAndPlay(2);
            this.play_cl.addEventListener(MouseEvent.CLICK, this.bt_play);
            removeEventListener(Event.ENTER_FRAME, this.preloader_f);
            loaderInfo.removeEventListener(egret.Event.COMPLETE, this.startGame_f);
            loaderInfo.removeEventListener(ProgressEvent.PROGRESS, this.progressHandler);
            return;
        }// end function

        public bt_play(event:MouseEvent)
        {
            Main.go_to_game = true;
            Main.first_target = "game";
            Main.first_target = "dress";
            Main.first_target = "upg";
            Main.first_target = "menu";
            Main.first_target = "splash";
            return;
        }// end function

        public delete_f()
        {
            return;
        }// end function

    }
}
