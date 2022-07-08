let UI = {};
function createUI() {
  UI.imgs = [[loadImage('images/heart.png'), 1, 1, 16, 16], [loadImage('images/skull.png'), 1, 1, 15, 16],];
}
function drawUI() {
  for (let i = 0; i < player.hp; i++) {
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
}
createUI();
