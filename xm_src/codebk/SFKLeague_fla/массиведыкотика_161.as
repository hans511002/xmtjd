package SFKLeague_fla
{
   import flash.display.MovieClip;
   
   public dynamic class массиведыкотика_161 extends MovieClip
   {
       
      
      public function массиведыкотика_161()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      function frame1() : *
      {
         gotoAndStop(int(Math.random() * this.totalFrames + 1));
      }
   }
}
