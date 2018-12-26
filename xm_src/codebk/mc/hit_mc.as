package
{
   import flash.display.MovieClip;
   
   public dynamic class hit_mc extends MovieClip
   {
       
      
      public function hit_mc()
      {
         super();
         addFrameScript(5,this.frame6);
      }
      
      function frame6() : *
      {
         stop();
      }
   }
}
