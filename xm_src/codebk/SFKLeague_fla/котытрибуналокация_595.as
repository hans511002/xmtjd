package SFKLeague_fla
{
   import flash.display.MovieClip;
   
   public dynamic class котытрибуналокация_595 extends MovieClip
   {
       
      
      public function котытрибуналокация_595()
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
