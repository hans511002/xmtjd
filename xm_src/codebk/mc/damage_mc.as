package
{
   import flash.display.MovieClip;
   
   public dynamic class damage_mc extends MovieClip
   {
       
      
      public var d2:MovieClip;
      
      public function damage_mc()
      {
         super();
         addFrameScript(18,this.frame19);
      }
      
      function frame19() : *
      {
         stop();
      }
   }
}
