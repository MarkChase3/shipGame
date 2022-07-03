
// special effects in the background



// update
function update() {
  if (nImages == nImagesLoaded) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateStars();
    updatePlayer();
    updateEnemies();
  }
  window.requestAnimationFrame(update);
}
update();
enemies.push(createEnemie('images/enemie1Ship.png', 80, 2,2,400,3))
enemies.push(createEnemie('images/playerShip.png', 50, 4,3,400,3))