package com.code
{
    import flash.display.*;
    import flash.events.*;

    public class Deqaf extends MovieClip
    {
        public var splash_deqaf_cl:MovieClip;
        var _app:App;
        var _sounds:LoadSounds;

        public function Deqaf()
        {
            this._app = App.getInstance();
            return;
        }// end function

        public function init() : void
        {
            addEventListener(Event.ENTER_FRAME, this.sp_f);
            this._sounds = new LoadSounds();
            stage.frameRate = 60;
            return;
        }// end function

        function sp_f(event:Event)
        {
            if (this.splash_deqaf_cl.currentFrame == 3)
            {
                this._sounds.load_by_name(deqaf_zvuk);
            }
            if (this.splash_deqaf_cl.currentFrame == this.splash_deqaf_cl.totalFrames)
            {
                stage.frameRate = 40;
                removeEventListener(Event.ENTER_FRAME, this.sp_f);
                this._app.open_new_screen("menu");
            }
            return;
        }// end function

        public function delete_f()
        {
            removeEventListener(Event.ENTER_FRAME, this.sp_f);
            return;
        }// end function

    }
}
