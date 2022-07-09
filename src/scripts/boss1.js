let boss1 = [
	[
		() => {
			boss1.start = Date.now()
		},
		() => {
			if(Date.now() - boss1.start > 1000){
				if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], boss1.x, boss1.y, boss1.frames[boss1.currFrame][2], boss1.frames[boss1.currFrame][3]) && Date.now() - boss1.lastDmg > 1000) {
					boss1.lastDmg = Date.now();
					player.hp-=3;
				}
				boss1.x-=boss1.speed
				ctx.save()
				ctx.scale(-1,1)
				ctx.drawImage(boss1.img,
			    	boss1.frames[boss1.currFrame][0],
			    	boss1.frames[boss1.currFrame][1],
			    	boss1.frames[boss1.currFrame][2],
			    	boss1.frames[boss1.currFrame][3],
			    	-boss1.x, boss1.y,
			    	boss1.frames[boss1.currFrame][2],
			    	boss1.frames[boss1.currFrame][3],
		  		);
		  		ctx.restore()
		  		if (Date.now() - boss1.lastFrame > boss1.frameChangeFrequency) {
	    			boss1.lastFrame = Date.now();
	    			boss1.currFrame = (boss1.currFrame == 0 ? 1 : 0);
	  			}
			}
							 		  		boss1.shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      boss1.shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      boss1.shoots.splice(i, 1)
					}
			  	}));
							  if(boss1.x + boss1.frames[boss1.currFrame][2] < 0){
		  			return 1
				}
		  		return -1
		}
	],
	[
		() => {
		boss1.start = Date.now()
		},
		() => {
			if(Date.now() - boss1.start > 1000){
				if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], boss1.x, boss1.y, boss1.frames[boss1.currFrame][2], boss1.frames[boss1.currFrame][3]) && Date.now() - boss1.lastDmg > 1000) {
					boss1.lastDmg = Date.now();
					player.hp-=3;
				}
				boss1.x+=boss1.speed
				ctx.drawImage(boss1.img,
			    	boss1.frames[boss1.currFrame][0],
			    	boss1.frames[boss1.currFrame][1],
			    	boss1.frames[boss1.currFrame][2],
			    	boss1.frames[boss1.currFrame][3],
			    	boss1.x, boss1.y,
			    	boss1.frames[boss1.currFrame][2],
			    	boss1.frames[boss1.currFrame][3],
		  		);
		  		if (Date.now() - boss1.lastFrame > boss1.frameChangeFrequency) {
	    			boss1.lastFrame = Date.now();
	    			boss1.currFrame = (boss1.currFrame == 0 ? 1 : 0);
	  			}
			}
									  		boss1.shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      boss1.shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      boss1.shoots.splice(i, 1)
					}
			  	}));
				if(boss1.x > canvas.width + boss1.frames[boss1.currFrame][2]){
		  			return 2
				}
				  return -1
		},
	
	], 
	[	
		() => {
			boss1.start = Date.now()
		},
		() => {
			if(Date.now() - boss1.start > 1000){
			  	if (boss1.hp <= 0) {
   					player.kills+=5;
    				boss = false;
    				boss1.reset();
					return 0;
  				}
  				player.shoots.forEach((shoot, i) => {
  					if (aabbCollision(shoot.x, shoot.y, shoot.sizeB, shoot.sizeB, boss1.x, boss1.y, boss1.frames[boss1.currFrame][2], boss1.frames[boss1.currFrame][3])) {
      					boss1.hp--;
      					player.shoots.splice(i, 1);
    				}
				})
				ctx.save()
				ctx.scale(-1,1)
				ctx.drawImage(boss1.img,
		    		boss1.frames[boss1.currFrame][0],
		    		boss1.frames[boss1.currFrame][1],
		    		boss1.frames[boss1.currFrame][2],
		    		boss1.frames[boss1.currFrame][3],
		    		-boss1.x, boss1.y,
		    		boss1.frames[boss1.currFrame][2],
		    		boss1.frames[boss1.currFrame][3],
	  			);
	  			ctx.restore()
				if (Date.now() - boss1.lastFrame > boss1.frameChangeFrequency) {
    				boss1.lastFrame = Date.now();
    				boss1.currFrame = (boss1.currFrame == 0 ? 1 : 0);
				}
				if (boss1.x > canvas.width / 10 * 9 && Date.now() - boss1.start < 20000) boss1.x--;
				else if(Math.abs(player.y - boss1.y) > boss1.speed*2)
					boss1.y += ((player.y - boss1.y) > 0 ? boss1.speed : -boss1.speed);
	    		if (Date.now() - boss1.lastShoot > boss1.shootFrequency) {
				    boss1.lastShoot = Date.now();
					boss1.shoots.push(createShoot(boss1.x, boss1.y, -3, 3, 7, '#1030f0ff', '#1030f010', '#2040ffff', '#2040ff10', false))
				}
				if(Date.now() - boss1.start > 20000){
					boss1.x++;
				}
			}
			boss1.shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      boss1.shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      boss1.shoots.splice(i, 1)
					}
			  	}));
			if(Date.now() - boss1.start > 25000){
				return 0;
			}
			return -1
		}
	]
]
boss1.reset = () => {
	boss1.lastDmg = Date.now();
	boss1.start = Date.now()
	boss1.x = canvas.width
	boss1.y = 90
	boss1.hp = 20
	boss1.speed = 5
	boss1.curr = boss1[0]
	boss1.img = loadImage('images/boss1Ship.png')
	boss1.lastFrame = Date.now()
	boss1.frameChangeFrequency = 100
	boss1.frames = [[1,1,32,33],[35,1,32,33]]
	boss1.currFrame = 0
	boss1.lastShoot = Date.now()
	boss1.shootFrequency = 300
	boss1.shoots = []
	boss1.next = window.setTimeout( () => {
		boss = true;
	}, 40000)
}
boss1.reset();
