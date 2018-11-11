package com.code
{
    import flash.display.*;
    import flash.events.*;

    public class Buttons_sounds extends MovieClip
    {
        public var music_bt:MovieClip;
        public var sfx_bt:MovieClip;
        var _app:App;

        public function Buttons_sounds()
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
            removeEventListener(Event.ADDED_TO_STAGE, this.init);
            this.sfx_bt.addEventListener(MouseEvent.CLICK, this.click_sfx_f);
            this.music_bt.addEventListener(MouseEvent.CLICK, this.click_music_f);
            this.check_mute();
            return;
        }// end function

        function check_mute()
        {
            if (Main.mute_sfx)
            {
                this.sfx_bt.gotoAndStop(2);
            }
            else
            {
                this.sfx_bt.gotoAndStop(1);
            }
            if (Main.mute_music)
            {
                this.music_bt.gotoAndStop(2);
            }
            else
            {
                this.music_bt.gotoAndStop(1);
            }
            return;
        }// end function

        function click_sfx_f(event:MouseEvent)
        {
            Main.mute_sfx = !Main.mute_sfx;
            if (Main.mute_sfx)
            {
                this.sfx_bt.gotoAndStop(2);
            }
            else
            {
                this.sfx_bt.gotoAndStop(1);
            }
            return;
        }// end function

        function click_music_f(event:MouseEvent)
        {
            Main.mute_music = !Main.mute_music;
            if (Main.mute_music)
            {
                this.music_bt.gotoAndStop(2);
            }
            else
            {
                this.music_bt.gotoAndStop(1);
            }
            this._app._music.mute();
            return;
        }// end function

        function delete_f()
        {
            this.sfx_bt.removeEventListener(MouseEvent.CLICK, this.click_sfx_f);
            this.music_bt.removeEventListener(MouseEvent.CLICK, this.click_music_f);
            return;
        }// end function

    }
}
