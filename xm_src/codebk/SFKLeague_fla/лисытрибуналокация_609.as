package SFKLeague_fla
{
   import flash.display.MovieClip;
   
   public dynamic class лисытрибуналокация_609 extends MovieClip
   {
       
      
      public function лисытрибуналокация_609()
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
