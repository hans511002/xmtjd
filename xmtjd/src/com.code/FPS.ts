module com.code {
    export class FPS extends std.MovieClip {
        public da: eui.Label = null;
        age: number = 0;
        age2: number = 0;
        age3: number = 0;
        age4: number = 0;
        public constructor() {
            super("FPS");
            this.da = this.createLabel("da");
            this.addEventListener(egret.Event.ENTER_FRAME, this.fps_test, this);
        }
        public fps_test(param1: egret.Event): any {
            var _loc2_: Date = null;
            var _loc3_: Date = null;
            if (this.currentFrame == 1) {
                _loc2_ = new Date();
                this.age = _loc2_.getTime();
            }
            if (this.currentFrame == 40) {
                _loc3_ = new Date();
                this.age2 = _loc3_.getTime();
                this.age4 = this.age2 - this.age;
                this.age3 = Math.floor(40 / (this.age4 / 1000));
                this.da.text = "fps " + this.age3.toString();
            }
        }
    }
}
