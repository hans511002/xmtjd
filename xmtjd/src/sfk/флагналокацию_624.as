package SFKLeague_fla
{
    import flash.display.*;

    dynamic public class флагналокацию_624 extends MovieClip
    {

        public function флагналокацию_624()
        {
            addFrameScript(0, this.frame1);
            return;
        }// end function

        function frame1()
        {
            gotoAndStop(1 + int(Math.random() * totalFrames));
            return;
        }// end function

    }
}
