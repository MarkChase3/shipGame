/**
*
* @typedef {Object} enemieSpawner
* @property {Number} lastSpawn
* @property {Number} spawnFrequency
*
*/

/** @type enemieSpawner */
let enemieSpawner = {};
function createEnemieSpawner() {
  enemieSpawner.lastSpawn = 0;
  enemieSpawner.spawnFrequency = 3000;
}
function spawnEnemies() {
  if (Date.now() - enemieSpawner.lastSpawn > enemieSpawner.spawnFrequency && enemies.length<3) {
    enemieSpawner.lastSpawn = Date.now();
    let lastEnemie;
    enemies.push(enemies[enemies.length-1]);
    do{
      enemies.pop();
    enemies.push(createEnemie('images/enemie1Ship.png', Math.random() * 180, Math.random() * 4 + 1, Math.random() * 3 + 1, Math.random() * 600 + 300, Math.random() * 4 + 2))
  }while(!enemieDontCollideWithOthers(enemies.length-1))
      }
}
function enemieSpawnerUpdate() {
  spawnEnemies();
}
createEnemieSpawner();