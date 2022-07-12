let UI = {};
function createUI() {
  UI.imgs = [[loadImage('images/heart.png'), 1, 1, 16, 16], [loadImage('images/skull.png'), 1, 1, 15, 16]];
  UI.powerups = [];
}
function drawUI() {
  for (let i = 0; i < player.hp; i++) {
  	let grad = ctx.createRadialGradient(5 + i * UI.imgs[0][4] + UI.imgs[0][3]/2, 5 + UI.imgs[0][3]/2, UI.imgs[0][3]/10, 5 + i * UI.imgs[0][4] + UI.imgs[0][3]/2, 5 + UI.imgs[0][3]/2, UI.imgs[0][3] - 5)
  	grad.addColorStop(0, '#d03010e2')
  	grad.addColorStop(1, '#9010001a')
	ctx.beginPath()
  	ctx.arc(5 + i * UI.imgs[0][3] + UI.imgs[0][3]/2, 5 + UI.imgs[0][3]/2, UI.imgs[0][3] - 5, 0,2 * Math.PI)
    ctx.fillStyle = grad
	ctx.fill()
	ctx.drawImage(UI.imgs[0][0], UI.imgs[0][1], UI.imgs[0][2], UI.imgs[0][3], UI.imgs[0][4], 5 + i * UI.imgs[0][3], 5, UI.imgs[0][3], UI.imgs[0][4]);
	}
  ctx.font = '1.3em "Arial"';
  ctx.fillStyle = '#a0e0ff';
  ctx.textBaseline = "top";
  ctx.fillText(player.kills + '', 5, 20);
  ctx.drawImage(UI.imgs[1][0], UI.imgs[1][1], UI.imgs[1][2], UI.imgs[1][3], UI.imgs[1][4], ctx.measureText(player.kills + '').width + 5, 21, UI.imgs[1][3], UI.imgs[1][4]);
  ctx.font = '1.2em "Arial"';
  ctx.fillStyle = '#a0e0ff';
  ctx.textBaseline = "top";
  ctx.fillText(Math.floor(player.distance) + 'KM', 5, 40);
  UI.powerups.forEach((powerup, i) => {
	ctx.font = '0.7em "Calibri"';
  	ctx.drawImage(powerup.img, powerup.frame[0], powerup.frame[1], powerup.frame[2], powerup.frame[3], 5, 57, powerup.frame[2], powerup.frame[3]);
  	ctx.fillText(powerup.name, 5, 69);
  });
}
function addPowerupToUI(imgPath, time, frame, name){
	UI.powerups.push({img: loadImage(imgPath), frame : frame, time: time, name: name})
	return UI.powerups.length - 1;
}
function removePowerupFromUI(n){
	UI.powerups.splice(n,1);
}
createUI();
