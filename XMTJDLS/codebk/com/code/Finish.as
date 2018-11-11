package com.code
{
    import flash.display.*;
    import flash.events.*;

    public class Finish extends DataMovieClip
    {
        public var play_bt:SimpleButton;
        public var sounds_control_cl:Buttons_sounds2;
        var _app:App;

        public function Finish()
        {
            this._app = App.getInstance();
            return;
        }// end function

        public function init() : void
        {
            this._app._music.load_music("dance");
            stage.addEventListener(MouseEvent.CLICK, this.click_f);
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            if (_mo(this.play_bt))
            {
                this._app.open_new_screen("menu");
            }
            return;
        }// end function

        public function delete_f()
        {
            stage.removeEventListener(MouseEvent.CLICK, this.click_f);
            this.sounds_control_cl.delete_f();
            return;
        }// end function

    }
}
