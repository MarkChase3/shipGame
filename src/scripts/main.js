// update
bosses.forEach((boss) => {
		boss.reset();
	    clearTimeout(boss.next);
});
let currBoss;
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
    if(Date.now() - lastBossDeath > 60000 && !boss){
    	boss = true;
    	currBoss = bosses[Math.floor( Math.random() * (bosses.length))]
	}
  }
  now = Date.now();
  window.requestAnimationFrame(update);
}
update();
