let UI = {};
function createUI(){
  UI.imgs = [[loadImage('images/heart.png'),1,1,16,16]];
}
function drawUI(){
  for(let i=0; i < player.hp; i++){
    ctx.drawImage(UI.imgs[0][0],UI.imgs[0][1],UI.imgs[0][2],UI.imgs[0][3],UI.imgs[0][4],5+i*UI.imgs[0][3],5,UI.imgs[0][3],UI.imgs[0][4]);
  }
  ctx.font = '1em "Arial"';
  ctx.fillStyle = 'white';
  ctx.textBaseline = "top";
  ctx.fillText(Math.floor(player.distance) + 'KM',canvas.width - ctx.measureText(Math.floor(player.distance) + 'KM').width, 0);
}
createUI();