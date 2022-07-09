/**
*
* @typedef {Object} enemieSpawner
* @property {Number} lastSpawn
* @property {Number} spawnFrequency
* @property {Array<Any>} enemiesTypes
*
*/

/** @type enemieSpawner */
let enemieSpawner = {};
function createEnemieSpawner() {
  enemieSpawner.lastSpawn = 0;
  enemieSpawner.spawnFrequency = 3000;
  enemieSpawner.enemiesTypes = [{ imgPath: ' images/enemie1Ship.png', spd: 4, hp: 3, shootFrequency: 400, shootSpeed: 4 },
  { imgPath: ' images/enemie2Ship.png', spd: 5, hp: 3, shootFrequency: 500, shootSpeed: 2 }];
}
function spawnEnemies() {
  if (Date.now() - enemieSpawner.lastSpawn > enemieSpawner.spawnFrequency && enemies.length < 4) {
    enemieSpawner.lastSpawn = Date.now();
    let selectedEnemie = enemieSpawner.enemiesTypes[Math.floor(Math.random() * enemieSpawner.enemiesTypes.length)];
    enemies.push(enemies[enemies.length - 1]);
    do {
      enemies.pop();
      enemies.push(createEnemie(selectedEnemie.imgPath, Math.random() * 180, selectedEnemie.spd, selectedEnemie.hp, selectedEnemie.shootFrequency, selectedEnemie.shootSpeed))
    } while (!enemieDontCollideWithOthers(enemies.length - 1))
  }
}
function enemieSpawnerUpdate() {
  spawnEnemies();
}
createEnemieSpawner();