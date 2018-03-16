export default class Game {
	constructor(time) {}
	update(dt, frameRate, time) {}
	render(ctx) {
		// paint the canvas red
		ctx.fillStyle = '#f00';
		ctx.fillRect(0, 0, 128, 128);
	}
};
