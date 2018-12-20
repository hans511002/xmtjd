module com.code {
    export class DataMovieClip extends std.BaseNode {
        i: number;
        i2: number;
        i3: number;
        i4: number;
        i5: number;
        i6: number;
        j: number;
        j2: number;
        j3: number;
        j4: number;
        j5: number;
        i_in: String;
        i_in2: String;
        i_in3: String;
        i_in4: String;
        i_in5: String;
        rnd_for: number;
        rnd_for1: number;
        rnd_for2: number;
        rnd_for3: number;
        rnd_for4: number;
        rnd_for5: number;
        rnd_for6: number;
        rnd_for7: number;
        rnd_for8: number;
        rnd_for9: number;
        temp_cl: Object;
        vracenie: number;
        ugol: number;
        dx: number;
        dy: number;
        d_time: number;
        d_dist: number;
        temp_type: number;
        temp_x: number;
        temp_y: number;
        sprite_var: std.MovieClip;

        public constructor() {
            super();
        }// end function

        public _hit(param1, param2) {
            if (param1.hitTestObject(param2)) {
                return 1;
            }
            return 0;
        }// end function

        public _mo(param1) {
            if (param1.hitTestPoint(Main.mouseX, Main.mouseY)) {
                return 1;
            }
            return 0;
        }// end function

        public _frame(param1) {
            if (param1.currentFrame == param1.totalFrames) {
                return 1;
            }
            return 0;
        }// end function

        public _frame2(param1, param2) {
            if (param1.currentFrame == param2) {
                return 1;
            }
            return 0;
        }// end function

        public _rnd(param1) {
            return (Math.random() * param1);
        }// end function

        public _sp(param1, param2, param3, param4) {
            param2.addChild(param1);
            param1.x = param3;
            param1.y = param4;
            return param1;
        }// end function

        public _re(param1, param2) {
            param2.removeChild(param1);
            return;
        }// end function

    }
}
