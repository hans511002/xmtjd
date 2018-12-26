module com.code {
    export class Sponsor_button3 extends MovieClip
   {
       
      
       armor_bt:SimpleButton;
      
      public   constructor()
      {
         super();
         this.addEventListener(MouseEvent.CLICK,this.click_f);
      }
      
      public click_f(param1:MouseEvent) : *
      {
         navigateToURL(new URLRequest("http://armor.ag/MoreGames"),"_blank");
      }
   }
}
