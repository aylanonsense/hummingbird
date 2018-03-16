export default class Track {
	render(ctx) {
		// paint the canvas red
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(20, 60);
		ctx.lineTo(100, 65);
		ctx.stroke();
	}
};
