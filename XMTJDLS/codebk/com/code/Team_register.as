package com.code
{
    import flash.display.*;
    import flash.events.*;
    import flash.text.*;

    public class Team_register extends DataMovieClip
    {
        public var n1_tx:TextField;
        public var n2_tx:TextField;
        public var n3_tx:TextField;
        public var n4_tx:TextField;
        public var name_tx:TextField;
        public var play_bt:SimpleButton;
        public var please_full_cl:MovieClip;
        public var sounds_control_cl:Buttons_sounds2;
        var _app:App;
        var ple:Boolean = false;

        public function Team_register()
        {
            this._app = App.getInstance();
            return;
        }// end function

        public function init() : void
        {
            addEventListener(Event.ENTER_FRAME, this.game_f);
            stage.addEventListener(MouseEvent.CLICK, this.click_f);
            this.please_full_cl.visible = false;
            this._app._music.load_music("upg");
            return;
        }// end function

        function game_f(event:Event)
        {
            return;
        }// end function

        function click_f(event:MouseEvent)
        {
            if (_mo(this.please_full_cl.auto_bt))
            {
                this.name_tx.text = "猫咪队伍";
                this.n1_tx.text = "菲力克斯";
                this.n2_tx.text = "加菲";
                this.n3_tx.text = "汤姆";
                this.n4_tx.text = "辛巴";
                this._app._so.load_by_name(click_so);
            }
            if (_mo(this.play_bt))
            {
                this._app._so.load_by_name(click_so);
                this.ple = true;
                if (this.name_tx.text != "" && this.name_tx.text != null)
                {
                    if (this.n1_tx.text != "" && this.n1_tx.text != null)
                    {
                        if (this.n2_tx.text != "" && this.n2_tx.text != null)
                        {
                            if (this.n3_tx.text != "" && this.n3_tx.text != null)
                            {
                                if (this.n4_tx.text != "" && this.n4_tx.text != null)
                                {
                                    this.ple = false;
                                    Main.sav.data.team_name_1 = this.name_tx.text;
                                    this._app.open_new_screen("upg");
                                    return;
                                }
                            }
                        }
                    }
                }
                if (this.ple)
                {
                    this.please_full_cl.visible = true;
                }
            }
            return;
        }// end function

        public function delete_f()
        {
            removeEventListener(Event.ENTER_FRAME, this.game_f);
            stage.removeEventListener(MouseEvent.CLICK, this.click_f);
            this.sounds_control_cl.delete_f();
            return;
        }// end function

    }
}
