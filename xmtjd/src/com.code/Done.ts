module com.code {
    export class Done extends DataMovieClip {
        _app: App = null;
        public constructor() {
            super();
            this._app = App.getInstance();
        }
        public init(): void {
        }
        public delete_f(): any {
        }
    }
}
