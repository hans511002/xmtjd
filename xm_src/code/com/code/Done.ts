module com.code {
    export class Done extends DataMovieClip {
        _app: App = null;

        public constructor() {
            this._app = App.getInstance();
            super();
        }

        public init(): void {
        }

        public delete_f(): any {
        }
    }
}
