package com.code.buttons
{
    import flash.display.*;
    import flash.events.*;
    import flash.net.*;

    dynamic public class Deqaf_button extends MovieClip
    {

        public function Deqaf_button()
        {
            addFrameScript(0, this.frame1);
            this.addEventListener(MouseEvent.CLICK, this.click_f);
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            new URLRequest("http://deqaf.com");
            return;
        }// end function

        function frame1()
        {
            stop();
            return;
        }// end function

    }
}
