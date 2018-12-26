package com.code
{
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.text.TextField;
   
   public class FPS extends MovieClip
   {
       
      
      public var da:TextField;
      
      var age:Number;
      
      var age2:Number;
      
      var age3:Number;
      
      var age4:Number;
      
      public function FPS()
      {
         super();
         addEventListener(Event.ENTER_FRAME,this.fps_test);
      }
      
      function fps_test(param1:Event) : *
      {
         var _loc2_:Date = null;
         var _loc3_:Date = null;
         if(this.currentFrame == 1)
         {
            _loc2_ = new Date();
            this.age = _loc2_.time;
         }
         if(this.currentFrame == 40)
         {
            _loc3_ = new Date();
            this.age2 = _loc3_.time;
            this.age4 = this.age2 - this.age;
            this.age3 = Math.floor(40 / (this.age4 / 1000));
            this.da.text = "fps " + this.age3.toString();
         }
      }
   }
}
