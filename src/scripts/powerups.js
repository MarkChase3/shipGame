let powerUpSpawner = {};
function createPowerupSpawner() {
  powerUpSpawner.lastSpawn = 0;
  powerUpSpawner.spawnFrequency = 10000;
  powerUpSpawner.powerups = [];

}
function spawnPowerUps() {
  if (Date.now() - powerUpSpawner.lastSpawn > powerUpSpawner.spawnFrequency && powerUpSpawner.powerups.length < 3) {
    powerUpSpawner.lastSpawn = Date.now();
    powerUpSpawner.powerups.push(createShoot(canvas.width, Math.random() * 180, -4, 3, 16, '#ff0000ff', '#ff000020', '#ff1010ff', '#ff101010', true, 'images/heart.png', [1, 1, 16, 16]))
  }
}
function updatePowerupsSpawner() {
  spawnPowerUps();
  powerUpSpawner.powerups.forEach((powerUp, i) => shootUpdate(powerUp, i, (powerup, i) => {
    if (aabbCollision(powerup.x, powerup.y, powerup.sizeB, powerup.sizeB, player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3])) {
      powerUpSpawner.powerups.splice(i, 1);
    }
    if(powerup.x<0){
      powerUpSpawner.powerups.splice(i, 1);
      
    }
  }));
}
createPowerupSpawner();
