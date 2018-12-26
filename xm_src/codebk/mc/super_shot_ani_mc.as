package
{
   import flash.display.MovieClip;
   
   public dynamic class super_shot_ani_mc extends MovieClip
   {
       
      
      public function super_shot_ani_mc()
      {
         super();
         addFrameScript(6,this.frame7);
      }
      
      function frame7() : *
      {
         stop();
      }
   }
}
