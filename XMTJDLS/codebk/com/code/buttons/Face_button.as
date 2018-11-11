package com.code.buttons
{
    import flash.display.*;
    import flash.events.*;
    import flash.net.*;

    dynamic public class Face_button extends MovieClip
    {

        public function Face_button()
        {
            this.addEventListener(MouseEvent.CLICK, this.click_f);
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            new URLRequest("http://www.facebook.com/pages/Deqaf/140018289532436");
            return;
        }// end function

    }
}
