package com.code.buttons
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public dynamic class More_button extends MovieClip
   {
       
      
      public function More_button()
      {
         super();
         this.addEventListener(MouseEvent.CLICK,this.click_f);
      }
      
      function click_f(param1:MouseEvent) : *
      {
      }
   }
}
