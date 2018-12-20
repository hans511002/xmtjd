package SFKLeague_fla
{
    import flash.display.*;

    dynamic public class массиведыкотика_161 extends MovieClip
    {

        public function массиведыкотика_161()
        {
            addFrameScript(0, this.frame1);
            return;
        }// end function

        function frame1()
        {
            gotoAndStop(int(Math.random() * this.totalFrames + 1));
            return;
        }// end function

    }
}
