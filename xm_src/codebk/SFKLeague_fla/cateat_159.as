package SFKLeague_fla
{
   import flash.display.MovieClip;
   
   public dynamic class cateat_159 extends MovieClip
   {
       
      
      public var body_cl:MovieClip;
      
      public var cloak_cl:MovieClip;
      
      public var foot1_cl:MovieClip;
      
      public var foot2_cl:MovieClip;
      
      public var hand_l_cl:MovieClip;
      
      public var hand_r_cl:MovieClip;
      
      public var head_cl:MovieClip;
      
      public var skirt_cl:MovieClip;
      
      public var tail_cl:MovieClip;
      
      public function cateat_159()
      {
         super();
         addFrameScript(144,this.frame145);
      }
      
      function frame145() : *
      {
         if(Math.random() > 0.7)
         {
            gotoAndPlay("da");
         }
      }
   }
}
