package com.code
{
    import flash.display.*;
    import flash.events.*;
    import flash.net.*;

    dynamic public class Sponsor_button2 extends MovieClip
    {
        public var armor_bt:SimpleButton;

        public function Sponsor_button2()
        {
            this.addEventListener(MouseEvent.CLICK, this.click_f);
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            navigateToURL(new URLRequest("http://armor.ag/MoreGames"), "_blank");
            return;
        }// end function

    }
}
