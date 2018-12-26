package
{
   import flash.display.MovieClip;
   
   public dynamic class fireball_mc extends MovieClip
   {
       
      
      public function fireball_mc()
      {
         super();
         addFrameScript(9,this.frame10,17,this.frame18);
      }
      
      function frame10() : *
      {
         stop();
      }
      
      function frame18() : *
      {
         stop();
      }
   }
}
