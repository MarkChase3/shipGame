let map = {
	width: 10,
	height: 10,
	select: [1,1]
}
function updateMap(){
	ctx.strokeStyle = '#a0e0ff';
	ctx.lineWidth = 2
	let startX = (canvas.width - map.width*30)/2
	let startY = (canvas.height - map.height*30)/2
	Array.from({length:map.height}, () => {return Array.from({length:map.width},() => 0)}).forEach((line,i) => {
		line.forEach((el,j) => {
			if(i < map.height-1){
				ctx.beginPath();
				ctx.moveTo(j * 30 + startX, i * 30);
				ctx.lineTo(j * 30 + startX, i * 30 + 30);
				ctx.stroke();
				
				let gradient = ctx.createRadialGradient(
				(j * 30 + startX) * 7,
				i * 30 + 15,
				3,
				(j * 30 + startX) * 7,
				i * 30 + 15,
				30);
				gradient.addColorStop(0, '#a0e0ffff')
				gradient.addColorStop(1, '#a0e0ff10')
				ctx.save();
				ctx.scale(1 / 7, 1);
				ctx.fillStyle = gradient
				ctx.beginPath()
				ctx.arc(
				(j * 30 + startX) * 7,
				i * 30 + 15,
				30,
				0,
				Math.PI * 2)
				ctx.fill()
				ctx.restore();
		}
			if(j < map.width-1){
				ctx.beginPath();
				ctx.moveTo(j * 30 + startX, i * 30);
				ctx.lineTo(j * 30 + 30 + startX, i * 30);
				ctx.stroke();
				
				let gradient = ctx.createRadialGradient(
				j * 30 + startX + 15,
				i * 30 * 7,
				3,
				j * 30 + startX + 15,
				i * 30 * 7,
				30);
				gradient.addColorStop(0, '#a0e0ffff')
				gradient.addColorStop(1, '#a0e0ff10')
				ctx.save();
				ctx.scale(1, 1 / 7);
				ctx.fillStyle = gradient
				ctx.beginPath()
				ctx.arc(
				j * 30 + startX + 15,
				i * 30 * 7,
				30,
				0,
				Math.PI * 2)
				ctx.fill()
				ctx.restore();
			}
		})
	})
	let gradient = ctx.createRadialGradient(
				map.select[0] * 30 + startX,
				map.select[1] * 30,
				1.5,
				map.select[0] * 30 + startX,
				map.select[1] * 30,
				15);
				gradient.addColorStop(0, '#a0e0ffff')
				gradient.addColorStop(1, '#a0e0ff60')
	ctx.beginPath();
	ctx.arc(				
	map.select[0] * 30 + startX,
	map.select[1] * 30,
	15, 
	0,
	Math.PI * 2)
	ctx.fillStyle = gradient;
	ctx.fill();
}
