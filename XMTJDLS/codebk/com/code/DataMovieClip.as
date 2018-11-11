package com.code
{
    import flash.display.*;

    public class DataMovieClip extends MovieClip
    {
        var i:Number;
        var i2:Number;
        var i3:Number;
        var i4:Number;
        var i5:Number;
        var i6:Number;
        var j:Number;
        var j2:Number;
        var j3:Number;
        var j4:Number;
        var j5:Number;
        var i_in:String;
        var i_in2:String;
        var i_in3:String;
        var i_in4:String;
        var i_in5:String;
        var rnd_for:Number;
        var rnd_for1:Number;
        var rnd_for2:Number;
        var rnd_for3:Number;
        var rnd_for4:Number;
        var rnd_for5:Number;
        var rnd_for6:Number;
        var rnd_for7:Number;
        var rnd_for8:Number;
        var rnd_for9:Number;
        var temp_cl:Object;
        var vracenie:Number;
        var ugol:Number;
        var dx:Number;
        var dy:Number;
        var d_time:Number;
        var d_dist:Number;
        var temp_type:Number;
        var temp_x:Number;
        var temp_y:Number;
        var sprite_var:MovieClip;

        public function DataMovieClip()
        {
            return;
        }// end function

        function _hit(param1, param2)
        {
            if (param1.hitTestObject(param2))
            {
                return 1;
            }
            return 0;
        }// end function

        function _mo(param1)
        {
            if (param1.hitTestPoint(mouseX, mouseY))
            {
                return 1;
            }
            return 0;
        }// end function

        function _frame(param1)
        {
            if (param1.currentFrame == param1.totalFrames)
            {
                return 1;
            }
            return 0;
        }// end function

        function _frame2(param1, param2)
        {
            if (param1.currentFrame == param2)
            {
                return 1;
            }
            return 0;
        }// end function

        function _rnd(param1)
        {
            return int(Math.random() * param1);
        }// end function

        function _sp(param1, param2, param3, param4)
        {
            var _loc_5:* = new param1;
            param2.addChild(_loc_5);
            _loc_5.x = param3;
            _loc_5.y = param4;
            return _loc_5;
        }// end function

        function _re(param1, param2)
        {
            param2.removeChild(param1);
            return;
        }// end function

    }
}
