// update
let now = 0, then = Date.now();
function update() {
  if (nImages == nImagesLoaded && now - then > 1 / 60) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    then = Date.now();
    updateStars();
    updatePlayer();
    updateEnemies();
    enemieSpawnerUpdate();
    drawUI();
    updatePowerupsSpawner();
  }
  now = Date.now();
  window.requestAnimationFrame(update);
}
update();