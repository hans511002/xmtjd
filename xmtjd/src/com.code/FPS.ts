module com.code {
    export class FPS extends MovieClip
   {
       
      
      da:TextField;
      
        age:number;
      
        age2:number;
      
        age3:number;
      
        age4:number;
      
      public   constructor()
      {
         super();
         addEventListener(Event.ENTER_FRAME,this.fps_test);
      }
      
      public fps_test(param1:Event) : *
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
