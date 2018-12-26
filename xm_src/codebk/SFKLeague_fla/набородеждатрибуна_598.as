package SFKLeague_fla
{
   import flash.display.MovieClip;
   
   public dynamic class набородеждатрибуна_598 extends MovieClip
   {
       
      
      public function набородеждатрибуна_598()
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
