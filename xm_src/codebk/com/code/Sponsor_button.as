package com.code
{
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public dynamic class Sponsor_button extends MovieClip
   {
       
      
      public var armor_bt:SimpleButton;
      
      public function Sponsor_button()
      {
         super();
         this.addEventListener(MouseEvent.CLICK,this.click_f);
      }
      
      function click_f(param1:MouseEvent) : *
      {
         navigateToURL(new URLRequest("http://armor.ag/MoreGames"),"_blank");
      }
   }
}
