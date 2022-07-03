function createShoot(x, y, spd, sizeA, sizeB, stopA1, stopA2, stopB1, stopB2,imgFlag,imgPath,frame) {
  let gradientA = ctx.createRadialGradient(x, y, sizeA / 10, x, y, sizeA / 10 * 11);
  gradientA.addColorStop(0, stopA1);
  gradientA.addColorStop(1, stopA2);
  let gradientB = ctx.createRadialGradient(x, y, sizeB / 10, x, y, sizeB / 10 * 11);
  gradientA.addColorStop(0, stopB1);
  gradientA.addColorStop(1, stopB2);
  let img = imgFlag;
  if(imgFlag){
    img = loadImage(imgPath)
  }
  return { x: x, y: y, spd: spd, gradientA: gradientA, gradientB: gradientB, sizeA: sizeA, sizeB: sizeB, stopA1: stopA1, stopA2: stopA2, stopB1: stopB1, stopB2: stopB2,img: img, frame: frame};
}
function shootUpdate(shoot, i, f) {
  shoot.x += shoot.spd;
  shoot.gradientA = ctx.createRadialGradient(shoot.x, shoot.y, shoot.sizeA / 10, shoot.x, shoot.y, shoot.sizeA / 10 * 11);
  shoot.gradientA.addColorStop(0, shoot.stopA1);
  shoot.gradientA.addColorStop(1, shoot.stopA2);
  shoot.gradientB = ctx.createRadialGradient(shoot.x, shoot.y, shoot.sizeB / 10, shoot.x, shoot.y, shoot.sizeB / 10 * 11);
  shoot.gradientB.addColorStop(0, shoot.stopB1);
  shoot.gradientB.addColorStop(1, shoot.stopB2);
  if (shoot.x > canvas.width) {
    player.shoots.splice(i, 1);
  }
  ctx.beginPath();
  ctx.arc(shoot.x, shoot.y, shoot.sizeB, 0, 2 * Math.PI)
  ctx.fillStyle = shoot.gradientB;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(shoot.x, shoot.y, shoot.sizeA, 0, 2 * Math.PI)
  ctx.fillStyle = shoot.gradientA;
  ctx.fill();
  if(shoot.img!==false){
    ctx.drawImage(shoot.img,shoot.frame[0],shoot.frame[1],shoot.frame[2],shoot.frame[3],shoot.frame[4],shoot.x,shoot.y,shoot.frame[2],shoot.frame[3]);
  }
  f(shoot,i);
}