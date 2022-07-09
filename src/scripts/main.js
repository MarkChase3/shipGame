// update
let now = 0, then = Date.now();
function update() {
  if (nImages == nImagesLoaded && now - then > 1 / 30) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    then = Date.now();
    updateStars();
    updatePlayer();
	updateEnemies();
	if(!boss)
    enemieSpawnerUpdate();
    drawUI();
    updatePowerupsSpawner();
    if(boss)
    updateStateMachine(boss1)
  }
  now = Date.now();
  window.requestAnimationFrame(update);
}
update();
