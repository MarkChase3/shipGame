// update
bosses[0].reset();
bosses[1].reset();
let currBoss = bosses[Math.floor( Math.random() * (bosses.length))]
let now = 0, then = Date.now();
function update() {
  if (nImages == nImagesLoaded && now - then > 1 / 30) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    then = Date.now();
    updateStars();
    updatePlayer();
	updateEnemies();
	if(boss)
    updateStateMachine(currBoss)
	if(!boss)
    enemieSpawnerUpdate();
    updatePowerupsSpawner();
    drawUI();
  }
  now = Date.now();
  window.requestAnimationFrame(update);
}
update();
