
// special effects in the background



// update
function update() {
  if (nImages == nImagesLoaded) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateStars();
    updatePlayer();
    updateEnemies();
    enemieSpawnerUpdate();
    drawUI();
    updatePowerupsSpawner();
  }
  window.requestAnimationFrame(update);
}
update();