package SFKLeague_fla
{
   import flash.display.MovieClip;
   
   public dynamic class енотытрибуналокация_604 extends MovieClip
   {
       
      
      public function енотытрибуналокация_604()
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
