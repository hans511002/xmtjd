package
{
   import flash.display.MovieClip;
   import flash.text.TextField;
   
   public dynamic class card_mc extends MovieClip
   {
       
      
      public var bg_cl:MovieClip;
      
      public var cat_cl:MovieClip;
      
      public var des_tx:TextField;
      
      public var icon_cl:MovieClip;
      
      public var n_tx:TextField;
      
      public var over_cl:MovieClip;
      
      public var telo:MovieClip;
      
      public var title_tx:TextField;
      
      public var wear_cl:MovieClip;
      
      public function card_mc()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      function frame1() : *
      {
         stop();
      }
   }
}
