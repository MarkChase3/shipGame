// I don't know how this piece of code works, and I don't even want to know that, but it detects if the user is using a mobile or desktop device.
let mobile = false;
(function(a, b) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) mobile = b })(navigator.userAgent || navigator.vendor || window.opera, 'https://game.markchase3.repl.co');
if (mobile == 'https://game.markchase3.repl.co') {
  mobile = true;
}
// drawing surface settings
let canvas = document.getElementById('screen');
let ctx = canvas.getContext('2d');

// image settngs
let nImages = 0, nImagesLoaded = 0;
function loadImage(path) {
  nImages++;
  let buffer = new Image();
  buffer.onload = () => {
    nImagesLoaded++;
  }
  buffer.src = path;
  return buffer;
}

//input settings
let mouse = { x: 0, y: 0, pressed: 0 };
if (mobile) {
  document.ontouchstart = (event) => {
    mouse.x = Math.floor(event.changedTouches[0].clientX / (window.innerHeight / 180));
    mouse.y = Math.floor(event.changedTouches[0].clientY / (window.innerHeight / 180));
    mouse.pressed++;
  }
  document.ontouchend = (event) => {
    mouse.pressed--;
  }
  document.ontouchmove = (event) => {
    if (mouse.pressed > 0) {
      mouse.x = Math.floor(event.changedTouches[0].clientX / (window.innerHeight / 180));
      mouse.y = Math.floor(event.changedTouches[0].clientY / (window.innerHeight / 180));
    }
  }
} else {
  document.onmousedown = (event) => {
    mouse.x = Math.floor(event.clientX / (window.innerHeight / 180));
    mouse.y = Math.floor(event.clientY / (window.innerHeight / 180));
    mouse.pressed++;
  }
  document.onmouseup = (event) => {
    mouse.pressed--;
  }
  document.onmousemove = (event) => {
    if (mouse.pressed > 0) {
      mouse.x = Math.floor(event.clientX / (window.innerHeight / 180));
      mouse.y = Math.floor(event.clientY / (window.innerHeight / 180));
    }
  }
}
function openFullscreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
    document.documentElement.msRequestFullscreen();
  }
}

// special effects in the background
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

//player
let player = {};
function createPlayer() {
  player.img = loadImage('playerShip.png');
  player.frames = [[1, 1, 16, 16], [1, 18, 16, 16]];
  player.currFrame = 0;
  player.x = canvas.width / 10;
  player.y = canvas.height / 2 - player.frames[0][3] / 2;
  player.lastShoot = 0;
  player.shootFrequency = 500;
  player.shootSpeed = 3;
  player.shootSize = 4;
  player.shoots = [];
  player.moving = false;
  player.gradientSize = 16;
  player.gradient = ctx.createRadialGradient(player.x + player.frames[player.currFrame][2]/2, player.y + player.frames[player.currFrame][3]/2, player.gradientSize / 10, player.x + player.frames[player.currFrame][2]/2, player.y + player.frames[player.currFrame][3]/2, player.gradientSize);
  player.gradient.addColorStop(0, 'rgb(0,162,232)')
  player.gradient.addColorStop(1, 'rgba(0,162,232,0)');
  console.log(player.y);
}
function drawPlayer() {
  ctx.beginPath();
  ctx.arc(player.x + player.frames[player.currFrame][2]/2, player.y + player.frames[player.currFrame][3]/2, player.gradientSize, 0, 2 * Math.PI);
  ctx.fillStyle = player.gradient;
  ctx.fill();
  ctx.drawImage(player.img, player.frames[player.currFrame][0],
    player.frames[player.currFrame][1],
    player.frames[player.currFrame][2],
    player.frames[player.currFrame][3],
    player.x, player.y,
    player.frames[player.currFrame][2],
    player.frames[player.currFrame][3],
  );
}
function movePlayer() {
  if (Math.abs(mouse.y - (player.y + player.frames[player.currFrame][3] / 2)) < 10) {
    player.moving = true;
  }
  if (mouse.pressed <= 0) {
    player.moving = false;
  }
  if (player.moving) {
    player.y = mouse.y - player.frames[player.currFrame][3] / 2;
  player.gradient = ctx.createRadialGradient(player.x + player.frames[player.currFrame][2]/2, player.y + player.frames[player.currFrame][3]/2, player.gradientSize / 10, player.x + player.frames[player.currFrame][2]/2, player.y + player.frames[player.currFrame][3]/2, player.gradientSize);
    player.gradient.addColorStop(0, 'rgb(0,162,232)')
    player.gradient.addColorStop(1, 'rgba(0,162,232,0)');
  }
}
function createShoot(x, y, spd, sizeA, sizeB, stopA1, stopA2, stopB1, stopB2) {
  let gradientA = ctx.createRadialGradient(x, y, sizeA / 10, x, y, sizeA / 10 * 11);
  gradientA.addColorStop(0, stopA1);
  gradientA.addColorStop(1, stopA2);
  let gradientB = ctx.createRadialGradient(x, y, sizeB / 10, x, y, sizeB / 10 * 11);
  gradientA.addColorStop(0, stopB1);
  gradientA.addColorStop(1, stopB2);
  return { x: x, y: y, spd: spd, gradientA: gradientA, gradientB: gradientB, sizeA: sizeA, sizeB: sizeB, stopA1: stopA1, stopA2: stopA2, stopB1: stopB1, stopB2: stopB2 };
}
function playerShoot() {
  if (Date.now() - player.lastShoot > player.shootFrequency) {
    player.lastShoot = Date.now();
    player.shoots.push(createShoot(player.x, player.y + player.frames[player.currFrame][3] / 2, player.shootSpeed, player.shootSize, player.shootSize * 2, '#d03010e2', '#9010001a', '#e0403090', '#ff605000'));
  }
}
function playerShootsUpdate(shoot, i) {
  shoot.x += shoot.spd;
  shoot.gradientA = ctx.createRadialGradient(shoot.x, shoot.y, shoot.sizeA / 10, shoot.x, shoot.y, shoot.sizeA / 10 * 11);
  shoot.gradientA.addColorStop(0, shoot.stopA1);
  shoot.gradientA.addColorStop(1, shoot.stopA2);
  shoot.gradientB = ctx.createRadialGradient(shoot.x, shoot.y, shoot.sizeB / 10, shoot.x, shoot.y, shoot.sizeB / 10 * 11);
  shoot.gradientB.addColorStop(0, shoot.stopB1);
  shoot.gradientB.addColorStop(1, shoot.stopB2);
  if (shoot.x > canvas.width) {
    player.shoots.splice(i, 1);
  }
  ctx.beginPath();
  ctx.arc(shoot.x, shoot.y, shoot.sizeB, 0, 2 * Math.PI)
  ctx.fillStyle = shoot.gradientB;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(shoot.x, shoot.y, shoot.sizeA, 0, 2 * Math.PI)
  ctx.fillStyle = shoot.gradientA;
  ctx.fill();
}
function updatePlayer() {
  drawPlayer();
  movePlayer();
  playerShoot();
  player.shoots.forEach(playerShootsUpdate);
}
createPlayer();

// update
function update() {
  if (nImages == nImagesLoaded) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateStars();
    updatePlayer();
  }
  window.requestAnimationFrame(update);
}
update();
