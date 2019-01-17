module com.code {
    export class DataMovieClip extends std.MovieClip {
        i: number = 0;
        i2: number = 0;
        i3: number = 0;
        i4: number = 0;
        i5: number = 0;
        i6: number = 0;
        j: number = 0;
        j2: number = 0;
        j3: number = 0;
        j4: number = 0;
        j5: number = 0;
        i_in: string = null;
        i_in2: string = null;
        i_in3: string = null;
        i_in4: string = null;
        i_in5: string = null;
        rnd_for: number = 0;
        rnd_for1: number = 0;
        rnd_for2: number = 0;
        rnd_for3: number = 0;
        rnd_for4: number = 0;
        rnd_for5: number = 0;
        rnd_for6: number = 0;
        rnd_for7: number = 0;
        rnd_for8: number = 0;
        rnd_for9: number = 0;
        temp_cl: any = null;
        vracenie: number = 0;
        ugol: number = 0;
        dx: number = 0;
        dy: number = 0;
        d_time: number = 0;
        d_dist: number = 0;
        temp_type: number = 0;
        temp_x: number = 0;
        temp_y: number = 0;
        sprite_var: damage_mc | super_shot_ani_mc | fireball_mc | hit_mc | icon_train_mc = null;
        public constructor(dbName?: string, armName?: string) {
            super(Config.mcRoot, armName ? armName : dbName, dbName);
        }

        public _hit(param1: any, param2: any): any {
            if (param1.hitTestObject(param2)) {
                return 1;
            }
            return 0;
        }
        public _mo(param1: egret.DisplayObject): any {
            if (param1 instanceof std.MovieClipSub)
                param1 = param1.getDisplayNode();
            if (param1.hitTestPoint(Main.mouseX, Main.mouseY)) {
                return 1;
            }
            return 0;
        }
        public _frame(param1: any): any {
            if (param1.currentFrame == param1.totalFrames) {
                return 1;
            }
            return 0;
        }
        public _frame2(param1: any, param2: any): any {
            if (param1.currentFrame == param2) {
                return 1;
            }
            return 0;
        }
        public _rnd(param1: any): any {
            return Math.floor(Math.random() * param1);
        }
        public _sp(param1: any, param2: any, param3: any, param4: any): any {
            var _loc5_ = new param1();
            param2.addChild(_loc5_);
            _loc5_.$setX(param3);
            _loc5_.$setY(param4);
            return _loc5_;
        }
        public _re(param1: any, param2: any): any {
            param2.removeChild(param1);
        }
    }
}
