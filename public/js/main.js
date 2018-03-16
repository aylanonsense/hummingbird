import Game from './Game.js';

const NUM_FRAME_RATE_SAMPLES = 15;

export default function main() {
	// canvas vars
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	// time vars
	let time = Date.now();
	const prevTimes = [ time ];
	let frameRate = 60;

	// game vars
	const game = new Game(time);

	// the main game loop
	function loop() {
		// figure out how much time has passed
		let prevTime = time;
		time = Date.now();
		let dt = (time - prevTime) / 1000;

		// calculate frame rate
		prevTimes.push(time);
		if (prevTimes.length > NUM_FRAME_RATE_SAMPLES) {
			prevTimes.shift();
			let ms = prevTimes[prevTimes.length - 1] - prevTimes[0];
			if (ms > 0) {
				frameRate = Math.round((prevTimes.length - 1) / (ms / 1000));
			}
		}

		// update the game simulation
		game.update(dt, frameRate, time);

		// clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// render the game simulation
		game.render(ctx);

		// schedule the next loop
		window.requestAnimationFrame(loop);
	}

	// kick off the main game loop
	window.requestAnimationFrame(loop);
};
