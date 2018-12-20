package com.code
{
    import flash.display.*;
    import flash.events.*;
    import flash.text.*;

    public class FPS extends MovieClip
    {
        public var da:TextField;
        var age:Number;
        var age2:Number;
        var age3:Number;
        var age4:Number;

        public function FPS()
        {
            addEventListener(Event.ENTER_FRAME, this.fps_test);
            return;
        }// end function

        function fps_test(event:Event)
        {
            var _loc_2:* = null;
            var _loc_3:* = null;
            if (this.currentFrame == 1)
            {
                _loc_2 = new Date();
                this.age = _loc_2.time;
            }
            if (this.currentFrame == 40)
            {
                _loc_3 = new Date();
                this.age2 = _loc_3.time;
                this.age4 = this.age2 - this.age;
                this.age3 = Math.floor(40 / (this.age4 / 1000));
                this.da.text = "fps " + this.age3.toString();
            }
            return;
        }// end function

    }
}
