package com.code
{
    import flash.display.*;
    import flash.events.*;
    import flash.net.*;
    import flash.system.*;

    public class Preloader extends Sprite
    {
        public var name_in_cl:MovieClip;
        public var play_cl:MovieClip;
        public var skala:MovieClip;
        var loaded:Number;
        var total:Number;
        var rnd_for:Number = 0;
        var i_in:String;
        var site_good:int = 0;
        var _app:App;

        public function Preloader()
        {
            this._app = App.getInstance();
            if (stage)
            {
                this.init();
            }
            else
            {
                addEventListener(Event.ADDED_TO_STAGE, this.init);
            }
            return;
        }// end function

        public function init(event:Event = null) : void
        {
            this.play_cl.visible = false;
            loaderInfo.addEventListener(ProgressEvent.PROGRESS, this.progressHandler);
            loaderInfo.addEventListener(Event.COMPLETE, this.startGame_f);
            addEventListener(Event.ENTER_FRAME, this.preloader_f);
            this.init_cpm();
            return;
        }// end function

        function add_armor_ads()
        {
            var abs:*;
            var loadComplete:Function;
            loadComplete = function (event:Event) : void
            {
                abs = event.currentTarget.content;
                name_in_cl.lol.addChild(abs);
                abs.show({x:-150, y:-100});
                return;
            }// end function
            ;
            var abs_url:String;
            Security.allowDomain(abs_url);
            var urlRequest:* = new URLRequest(abs_url);
            var loader:* = new Loader();
            loader.contentLoaderInfo.addEventListener(Event.COMPLETE, loadComplete);
            loader.load(urlRequest);
            return;
        }// end function

        function init_cpm()
        {
            var _loc_1:* = NaN;
            var _loc_2:* = stage.loaderInfo.loaderURL;
            var _loc_3:* = _loc_2.indexOf("://") + 3;
            var _loc_4:* = _loc_2.indexOf("/", _loc_3);
            var _loc_5:* = _loc_2.substring(_loc_3, _loc_4);
            var _loc_6:* = _loc_5.lastIndexOf(".") - 1;
            var _loc_7:* = _loc_5.lastIndexOf(".", _loc_6) + 1;
            _loc_5 = _loc_5.substring(_loc_7, _loc_5.length);
            var _loc_8:* = [];
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

        function progressHandler(event:ProgressEvent) : void
        {
            this.loaded = event.bytesLoaded;
            this.total = event.bytesTotal;
            return;
        }// end function

        function preloader_f(event:Event)
        {
            this.skala.gotoAndStop(int((this.total - (this.total - this.loaded)) * 100 / this.total));
            if (int(this.loaded / this.total * 100) >= 100)
            {
                this.load_end();
            }
            return;
        }// end function

        function startGame_f(event:Event)
        {
            this.load_end();
            return;
        }// end function

        function load_end()
        {
            this.skala.gotoAndStop(100);
            this.play_cl.visible = true;
            this.play_cl.gotoAndPlay(2);
            this.play_cl.addEventListener(MouseEvent.CLICK, this.bt_play);
            removeEventListener(Event.ENTER_FRAME, this.preloader_f);
            loaderInfo.removeEventListener(Event.COMPLETE, this.startGame_f);
            loaderInfo.removeEventListener(ProgressEvent.PROGRESS, this.progressHandler);
            return;
        }// end function

        function bt_play(event:MouseEvent)
        {
            Main.go_to_game = true;
            Main.first_target = "game";
            Main.first_target = "dress";
            Main.first_target = "upg";
            Main.first_target = "menu";
            Main.first_target = "splash";
            return;
        }// end function

        public function delete_f()
        {
            return;
        }// end function

    }
}
