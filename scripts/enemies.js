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
* @typedef {Object} enemie
* @property {Object} img
* @property {Array<Array<Number>>} frames
* @property {Number} currFrame
* @property {Number} y
* @property {Number} x
* @property {Number} speed
* @property {Array<Number>} gotos
* @property {Number}  hp
* @property {Number}  lastShoot
* @property {Number}  shootFrequency
* @property {Number}  shootSpeed
*
*/

/** @type {Array<enemie>} */
let enemies = [];
/** @type {Array<shoot>} */
let enemiesShoots = [];
/**
*
* @param {String} imgPath
* @param {Number} y
* @param {Number} speed
* @param {Number} hp
*
*/
function createEnemie(imgPath, y, speed, hp, shootFrequency, shootSpeed) {
  /** @type {enemie} */
  let enemie = {};
  enemie.img = loadImage(imgPath);
  enemie.frames = [[1, 1, 16, 16], [18, 1, 16, 16]];
  enemie.currFrame = 0;
  enemie.y = y;
  enemie.x = canvas.width;
  enemie.speed = speed;
  enemie.gotos = [];
  enemie.hp = hp;
  enemie.lastShoot = 0;
  enemie.shootFrequency = shootFrequency;
  enemie.shootSpeed = shootSpeed;
  return enemie
}
/**
*
* @param {enemie} enemie
* @param {Number} i
*
*/
function updateEnemie(enemie, i) {
  if (enemie.hp <= 0) {
    enemies.splice(i, 1);
    return;
  }
  if (enemie.x > canvas.width / 10 * 9) enemie.x--;
  ctx.drawImage(enemie.img,
    enemie.frames[enemie.currFrame][0],
    enemie.frames[enemie.currFrame][1],
    enemie.frames[enemie.currFrame][2],
    enemie.frames[enemie.currFrame][3],
    enemie.x, enemie.y,
    enemie.frames[enemie.currFrame][2],
    enemie.frames[enemie.currFrame][3],
  );
}
function updateEnemies() {
  enemies.forEach(updateEnemie);
  enemiesFollowPlayer();
  enemies.forEach(enemiesShoot);
  enemiesShoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
      player.hp--;
      enemiesShoots.splice(i, 1);
    }
  }));
}
function enemieDontCollideWithOthers(i) {
  for (let j = 0; j < enemies.length; j++) {
    if (i !== j) {
      if (enemies[j].y + 16 > enemies[i].y && enemies[i].y + 16 > enemies[j].y) {
        return false;
      }
    }
  }
  return true;
}
function enemiesFollowPlayer() {
  let y = player.y;
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].x <= canvas.width / 10 * 9 && Math.abs(player.y - enemies[i].y) > enemies[i].speed) {
      let yBuffer = enemies[i].y;
      enemies[i].y += ((player.y - enemies[i].y) > 0 ? enemies[i].speed : -enemies[i].speed);
      if (!enemieDontCollideWithOthers(i)) {
        enemies[i].y = yBuffer;
      }
    }
  }
}
/**
*
* @param {enemie} enemie
*
*/
function enemiesShoot(enemie) {
  if (Date.now() - enemie.lastShoot > enemie.shootFrequency) {
    enemie.lastShoot = Date.now();
    enemiesShoots.push(createShoot(enemie.x, enemie.y, -3, 3, 10, '#30f010ff', '#30f01010', '#40ff20ff', '#40ff2010', false))
  }

}