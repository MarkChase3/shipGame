let stars = [], lastStarSpawn = 0;
function createStar(speed, size) {
  let y = (Math.random() * 999) % canvas.height;
  let gradient = ctx.createRadialGradient(canvas.width, y, size / 10, canvas.width, y, size / 10 * 11);
  let star = { speed: speed, gradient: gradient, x: canvas.width, y: y, size: size };
  stars.push(star);
}
function updateStar(star, i) {
  star.x -= star.speed;
  star.gradient = ctx.createRadialGradient(star.x, star.y, star.size / 10, star.x, star.y, star.size / 10 * 11);
  star.gradient.addColorStop(0, 'white');
  star.gradient.addColorStop(1, '#0a0a0a0a');
  ctx.beginPath();
  ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI, false);
  ctx.fillStyle = star.gradient;
  ctx.fill();
  if (star.x < 0) {
    stars.splice(i, 1);
  }
};
function spawnStars() {
  if (Date.now() - lastStarSpawn > Math.floor(Math.random() * 300)) {
    lastStarSpawn = Date.now();
    createStar(Math.random() * 8 + 1, Math.random() * 5 + 1);
  }
}
function updateStars() {
  spawnStars();
  stars.forEach(updateStar);
}