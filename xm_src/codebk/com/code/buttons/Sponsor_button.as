package com.code.buttons
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public dynamic class Sponsor_button extends MovieClip
   {
       
      
      public function Sponsor_button()
      {
         super();
         this.addEventListener(MouseEvent.CLICK,this.click_f);
      }
      
      function click_f(param1:MouseEvent) : *
      {
      }
   }
}
