//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends std.BaseNode {
    static mouseX: number;
    static mouseY: number;

    static sav: any = { "data": {} };//=egret.localStorage ;// static sav:SharedObject = SharedObject.getLocal("SharedObject");
    static zvukReg: Boolean = true;
    static _app_is_add: Boolean = false;
    static lev_sound: Number = 1;
    static mute_music: Boolean = false;
    static mute_sfx: Boolean = false;
    static xray_mode: Boolean = false;
    static go_to_game: Boolean = false;
    static first_target: Object;
    static load_map_zvuk: Number = 1;
    static muz_map_zvuk_zv: Sound = null;
    static muz_map_zvuk_can: egret.SoundChannel = null;
    static load_elf_zvuk: Number = 1;
    static muz_elf_zvuk_zv: Sound = null;
    static muz_elf_zvuk_can: egret.SoundChannel = null;
    static load_water_zvuk: Number = 1;
    static muz_water_zvuk_zv: Sound = null;
    static muz_water_zvuk_can: egret.SoundChannel = null;
    static load_dance_zvuk: Number = 1;
    static muz_dance_zvuk_zv: Sound = null;
    static muz_dance_zvuk_can: egret.SoundChannel = null;

    root: std.MovieClip;


    body_cl: std.MovieClip;
    card_8: card_mc;
    cloak_cl: std.MovieClip;
    foot1_cl: std.MovieClip;
    foot2_cl: std.MovieClip;
    h2: std.MovieClip;
    hand_l_cl: std.MovieClip;
    hand_r_cl: std.MovieClip;
    head_cl: std.MovieClip;
    icon_cl: std.MovieClip;
    skirt_cl: std.MovieClip;
    tail_cl: std.MovieClip;
    wool_cl: std.MovieClip;
    _App: com.code.App;
    _Preloader: com.code.Preloader;
    loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.go_to_game_f, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.click_f, this);
        //addFrameScript(0,this.frame1);
    }
    public click_f(param1: egret.TouchEvent): any {
        Main.mouseX = param1.stageX;
        Main.mouseY = param1.stageY;
    }
    go_to_game_f(event: Event): void {
        var _loc_2: any = null;
        if (Main.go_to_game) {
            if (this._Preloader) {
                this.removeChild(this._Preloader);
                this._Preloader = null;
            }
            // this.root.gotoAndStop(1, "game");
            _loc_2 = new com.code.App();
            this.addChild(_loc_2);
            _loc_2.init();
            _loc_2.open_new_screen(Main.first_target);
            this.removeEventListener(egret.Event.ENTER_FRAME, this.go_to_game_f, this);
        } else if (this.loadingView && this.loadingView.getProgress() >= 100) {
            this.stage.removeChild(this.loadingView);
            this.loadingView = null;
        }
    }// end function

    private onAddToStage(event: egret.Event) {
        // onEnter() {
        // super.onEnter();
        // egret.ticker.$startTick
        egret.ticker.$setFrameRate(30);


        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
            context.onUpdate = () => {
                // egret.log(egret.getTimer());
            }
        });
        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        });

    }

    async loadResMap() {
        await std.sleep(2000);
        console.log("beging load res:" + egret.getTimer());
        await std.initResMap();
        console.log("end load res:" + egret.getTimer());
    }

    private async runGame() {
        await this.loadResource()
        await platform.login();
        this.createGameScene();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);
        // let so1701 = new com.code.LoadSounds();
        // so1701.load_by_url(Config.SoundRoot + "1701.mp3");
    }
    private async loadResource() {
        try {
            // console.log(egret.getTimer());
            // await std.sleep(2000);
            // console.log(egret.getTimer());
            this.loadingView = new LoadingUI(this);
            this.stage.addChild(this.loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("loader", 0, this.loadingView);
            this.loadResMap().catch(e => {
                console.log(e);
            });
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, this.loadingView);
            // await std.sleep(1000);

            // console.log("load com");
            // this.sponsor_button = new com.code.Sponsor_button();
            // this.addChild(this.sponsor_button);
            // this.sponsor_button.setPosition(200, 100);

        }
        catch (e) {
            console.error(e);
        }
    }
    sponsor_button: com.code.Sponsor_button;

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {


        // let sky = Main.createBitmapByName("bg_jpg");
        // this.addChild(sky);
        // let stageW = this.stage.stageWidth;
        // let stageH = this.stage.stageHeight;
        // sky.width = stageW;
        // sky.height = stageH;

    }
    //默认样例
    private test() {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        let topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);

        let icon = Main.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;

        let line = new egret.Shape();
        line.graphics.lineStyle(2, 0xffffff);
        line.graphics.moveTo(0, 0);
        line.graphics.lineTo(0, 117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);


        let colorLabel = new egret.TextField();
        colorLabel.textColor = 0xffffff;
        colorLabel.width = stageW - 172;
        colorLabel.textAlign = "center";
        colorLabel.text = "Hello Egret";
        colorLabel.size = 24;
        colorLabel.x = 172;
        colorLabel.y = 80;
        this.addChild(colorLabel);

        let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.alpha = 0;
        textfield.width = stageW - 172;
        textfield.textAlign = egret.HorizontalAlign.CENTER;
        textfield.size = 24;
        textfield.textColor = 0xffffff;
        textfield.x = 172;
        textfield.y = 135;
        this.textfield = textfield;

        const result = RES.getRes("description_json")
        this.startAnimation(result);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    public static async createBitmapByUrl(url: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = await RES.getResByUrl(url);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
}