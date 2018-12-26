package
{
   import flash.display.MovieClip;
   
   public dynamic class card_game_mc extends MovieClip
   {
       
      
      public var card_cl:card_mc;
      
      public function card_game_mc()
      {
         super();
         addFrameScript(32,this.frame33);
      }
      
      function frame33() : *
      {
         stop();
      }
   }
}
