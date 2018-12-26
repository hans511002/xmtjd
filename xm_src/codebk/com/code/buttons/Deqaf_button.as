package com.code.buttons
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public dynamic class Deqaf_button extends MovieClip
   {
       
      
      public function Deqaf_button()
      {
         super();
         addFrameScript(0,this.frame1);
         this.addEventListener(MouseEvent.CLICK,this.click_f);
      }
      
      function click_f(param1:MouseEvent) : *
      {
         "_blank";
         new URLRequest("http://deqaf.com");
         ;
      }
      
      function frame1() : *
      {
         stop();
      }
   }
}
