package com.code
{
    import flash.display.*;
    import flash.events.*;
    import flash.net.*;

    public class Splash extends MovieClip
    {
        public var splash_deqaf_cl:MovieClip;
        var _app:App;

        public function Splash()
        {
            this._app = App.getInstance();
            return;
        }// end function

        public function init() : void
        {
            stage.addEventListener(MouseEvent.MOUSE_DOWN, this.click_f);
            addEventListener(Event.ENTER_FRAME, this.sp_f);
            stage.frameRate = 60;
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            navigateToURL(new URLRequest("http://armor.ag/MoreGames"), "_blank");
            return;
        }// end function

        function sp_f(event:Event)
        {
            if (this.splash_deqaf_cl.currentFrame == this.splash_deqaf_cl.totalFrames)
            {
                removeEventListener(Event.ENTER_FRAME, this.sp_f);
                stage.removeEventListener(MouseEvent.MOUSE_DOWN, this.click_f);
                this._app.open_new_screen("deqaf");
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
