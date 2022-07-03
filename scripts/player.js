/**
*
* @typedef {Object} shoot
* @property {Number} x
* @property {Number} y
* @property {Number} y
* @property {Number} spd
* @property {Object} gradientA
* @property {Object} gradientB
* @property {Number} sizeA
* @property {Number} sizeB
* @property {String} stopA1
* @property {String} stopA2
* @property {String} stopB1
* @property {String} stopB2
*
*/

/**
*
* @typedef {Object} player
* @property {Object} img
* @property {Array<Array<Number>>} frames
* @property {Number} currFrame
* @property {Number} lastFrame
* @property {Number} frameChangeFrequency
* @property {Number} x
* @property {Number} y
* @property {Number} lastShoot
* @property {Number} shootFrequency
* @property {Number} shootSpeed
* @property {Number} shootSize
* @property {Number} shootSize
* @property {Array<shoot>} shoots
* @property {Boolean} moving
* @property {Number} gradientSize
* @property {Object} gradient
*
*/

/** @type {player} */
let player;
function createPlayer() {
  player = {
    img: loadImage('images/playerShip.png'),
    frames: [[1, 1, 16, 16], [18, 1, 16, 16]],
    currFrame: 0,
    lastFrame: 0,
    frameChangeFrequency: 100,
    x: canvas.width / 10,
    y: canvas.height / 2 - 8,
    lastShoot: 0,
    shootFrequency: 500,
    shootSpeed: 3,
    shootSize: 4,
    shoots: [],
    moving: false,
    gradientSize: 20,
    gradient: ctx.createRadialGradient(canvas.width / 10 + 8, canvas.height / 2, 2, canvas.width / 10 + 8, canvas.height / 2, 20)
  }
  player.gradient.addColorStop(0, 'rgb(0,162,232)')
  player.gradient.addColorStop(1, 'rgba(0,162,232,0)');
}
function drawPlayer() {
  ctx.beginPath();
  ctx.arc(player.x + player.frames[player.currFrame][2] / 2, player.y + player.frames[player.currFrame][3] / 2,
    player.gradientSize, 0, 2 * Math.PI);
  ctx.fillStyle = player.gradient;
  ctx.fill();
  ctx.drawImage(player.img,
    player.frames[player.currFrame][0],
    player.frames[player.currFrame][1],
    player.frames[player.currFrame][2],
    player.frames[player.currFrame][3],
    player.x, player.y,
    player.frames[player.currFrame][2],
    player.frames[player.currFrame][3],
  );
  if (Date.now() - player.lastFrame > player.frameChangeFrequency) {
    player.lastFrame = Date.now();
    player.currFrame = (player.currFrame == 0 ? 1 : 0);
  }
}
function movePlayer() {
  if (Math.abs(mouse.y - (player.y + player.frames[player.currFrame][3] / 2)) < 10) {
    player.moving = true;
  }
  if (mouse.pressed <= 0) {
    player.moving = false;
  }
  if (player.moving) {
    player.y = mouse.y - player.frames[player.currFrame][3] / 2;
    player.gradient = ctx.createRadialGradient(player.x + 8, player.y + 8, 2, player.x + 8, player.y + 8,  20)
    player.gradient.addColorStop(0, 'rgb(0,162,232)')
    player.gradient.addColorStop(1, 'rgba(0,162,232,0)');
  }
}

function playerShoot() {
  if (Date.now() - player.lastShoot > player.shootFrequency) {
    player.lastShoot = Date.now();
    player.shoots.push(createShoot(player.x, player.y + player.frames[player.currFrame][3] / 2, player.shootSpeed, player.shootSize, player.shootSize * 2, '#d03010e2', '#9010001a', '#e0403090', '#ff605000'));
  }
}

/**
*
* @param {shoot} shoot
*
*/
function playerShootHitEnemies(shoot,i) {
  enemies.forEach((enemie,j) => {
    if (aabbCollision(shoot.x, shoot.y, shoot.sizeB, shoot.sizeB, enemie.x, enemie.y, enemie.frames[enemie.currFrame][2], enemie.frames[enemie.currFrame][3])) {
        enemie.hp--;
        player.shoots.splice(i,1);
    }
  })
}

function updatePlayer() {
  drawPlayer();
  movePlayer();
  playerShoot();
  player.shoots.forEach((shoot, i) => shootUpdate(shoot, i, playerShootHitEnemies));
}
createPlayer();
