package SFKLeague_fla
{
   import flash.display.MovieClip;
   
   public dynamic class едакотикапрокачка_438 extends MovieClip
   {
       
      
      public function едакотикапрокачка_438()
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
