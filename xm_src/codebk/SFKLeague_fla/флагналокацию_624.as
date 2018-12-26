package SFKLeague_fla
{
   import flash.display.MovieClip;
   
   public dynamic class флагналокацию_624 extends MovieClip
   {
       
      
      public function флагналокацию_624()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      function frame1() : *
      {
         gotoAndStop(1 + int(Math.random() * totalFrames));
      }
   }
}
