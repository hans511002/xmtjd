package com.code.buttons
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   
   public dynamic class Face_button extends MovieClip
   {
       
      
      public function Face_button()
      {
         super();
         this.addEventListener(MouseEvent.CLICK,this.click_f);
      }
      
      function click_f(param1:MouseEvent) : *
      {
         "_blank";
         new URLRequest("http://www.facebook.com/pages/Deqaf/140018289532436");
         ;
      }
   }
}
