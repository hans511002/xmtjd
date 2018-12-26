package
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   
   public dynamic class back_to_mc extends MovieClip
   {
       
      
      public var play_cl:SimpleButton;
      
      public function back_to_mc()
      {
         super();
         addFrameScript(34,this.frame35);
      }
      
      function frame35() : *
      {
         stop();
      }
   }
}
