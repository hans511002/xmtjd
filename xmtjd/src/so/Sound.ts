class Sound {
	url: string;
	so: egret.Sound;
	type: string;
	length: number;
	public constructor(url: string, play?: boolean, startTime: number = 0, loops: number = 1) {
		this.url = url;
		this.so = std.getRes(url);
		if (!this.so) {
			this.so = new egret.Sound();// RES.getRes(file);// new egret.Sound();
			// this.load(file);
			RES.getResByUrl(Config.resRoot + this.url, function (data, url) {
				this.so = data;
				if (play) {
					this.so.play(startTime, loops);
				}
			}, this);
		} else if (play) {
			this.so.play(startTime, loops);
		}
	}
	// load(url: string): void {
	// 	this.so.load(url);
	// }
	play(startTime: number = 0, loops: number = 1): egret.SoundChannel {
		if (!this.so) {
			this.so = std.getRes(this.url);
			if (!this.so) {
				this.so = new egret.Sound();// RES.getRes(file);// new egret.Sound();
				RES.getResByUrl(Config.resRoot + this.url, function (this: Sound, data, url) {
					this.so = data;
					this.so.play(startTime, loops);
				}, this);
				return null;
			}
		}
		if (this.so) {
			return this.so.play(startTime, loops);
		}

	}
	close(): void {
		this.so.close();
	}
}