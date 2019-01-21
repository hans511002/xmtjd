class Sound {
	so: egret.Sound;
	type: string;
	length: number;
	public constructor(file: string) {
		this.so = RES.getRes(file);// new egret.Sound();
		if (file) {
			//	this.load(file);
		}
	}
	load(url: string): void {
		this.so.load(url);
	}
	play(startTime?: number, loops?: number): egret.SoundChannel {
		return this.so.play(startTime, loops);
	}
	close(): void {
		this.so.close();
	}
}