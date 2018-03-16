import Track from './Track.js';

export default class Game {
	constructor(time) {
		this.track = new Track();
	}
	update(dt, frameRate, time) {}
	render(ctx) {
		// paint the canvas red
		ctx.fillStyle = '#f00';
		ctx.fillRect(0, 0, 128, 128);
		// render the track
		this.track.render(ctx);
	}
};
