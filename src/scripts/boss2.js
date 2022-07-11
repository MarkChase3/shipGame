bosses.push({});
bosses[1] = [
	[
		() => {
			bosses[1].start = Date.now()
		},
		() => {
			if(Date.now() - bosses[1].start > 1000){
				if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], bosses[1].x, bosses[1].y, bosses[1].frames[bosses[1].currFrame][2], bosses[1].frames[bosses[1].currFrame][3]) && Date.now() - bosses[1].lastDmg > 1000) {
					bosses[1].lastDmg = Date.now();
					player.hp-=3;
				}
				bosses[1].x-=bosses[1].speed
				ctx.save()
				ctx.scale(-1,1)
				ctx.drawImage(bosses[1].img,
			    	bosses[1].frames[bosses[1].currFrame][0],
			    	bosses[1].frames[bosses[1].currFrame][1],
			    	bosses[1].frames[bosses[1].currFrame][2],
			    	bosses[1].frames[bosses[1].currFrame][3],
			    	-bosses[1].x, bosses[1].y,
			    	bosses[1].frames[bosses[1].currFrame][2],
			    	bosses[1].frames[bosses[1].currFrame][3],
		  		);
		  		ctx.restore()
		  		if (Date.now() - bosses[1].lastFrame > bosses[1].frameChangeFrequency) {
	    			bosses[1].lastFrame = Date.now();
	    			bosses[1].currFrame = (bosses[1].currFrame == 0 ? 1 : 0);
	  			}
			}
							 		  		bosses[1].shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      bosses[1].shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      bosses[1].shoots.splice(i, 1)
					}
			  	}));
							  if(bosses[1].x + bosses[1].frames[bosses[1].currFrame][2] < 0){
		  			return 1
				}
		  		return -1
		}
	],
	[
		() => {
		bosses[1].start = Date.now()
		},
		() => {
			if(Date.now() - bosses[1].start > 1000){
				if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], bosses[1].x, bosses[1].y, bosses[1].frames[bosses[1].currFrame][2], bosses[1].frames[bosses[1].currFrame][3]) && Date.now() - bosses[1].lastDmg > 1000) {
					bosses[1].lastDmg = Date.now();
					player.hp-=3;
				}
				bosses[1].x+=bosses[1].speed
				ctx.drawImage(bosses[1].img,
			    	bosses[1].frames[bosses[1].currFrame][0],
			    	bosses[1].frames[bosses[1].currFrame][1],
			    	bosses[1].frames[bosses[1].currFrame][2],
			    	bosses[1].frames[bosses[1].currFrame][3],
			    	bosses[1].x, bosses[1].y,
			    	bosses[1].frames[bosses[1].currFrame][2],
			    	bosses[1].frames[bosses[1].currFrame][3],
		  		);
		  		if (Date.now() - bosses[1].lastFrame > bosses[1].frameChangeFrequency) {
	    			bosses[1].lastFrame = Date.now();
	    			bosses[1].currFrame = (bosses[1].currFrame == 0 ? 1 : 0);
	  			}
			}
									  		bosses[1].shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      bosses[1].shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      bosses[1].shoots.splice(i, 1)
					}
			  	}));
				if(bosses[1].x > canvas.width + bosses[1].frames[bosses[1].currFrame][2]){
		  			return 2
				}
				  return -1
		},
	
	], 
	[	
		() => {
			bosses[1].start = Date.now()
		},
		() => {
			if(Date.now() - bosses[1].start > 1000){
			  	if (bosses[1].hp <= 0 && bosses[1].shoots.length == 0) {
   					player.kills+=5;
    				boss = false;
    				bosses[1].reset();
					return 0;
  				}
  				player.shoots.forEach((shoot, i) => {
  					if (aabbCollision(shoot.x, shoot.y, shoot.sizeB, shoot.sizeB, bosses[1].x, bosses[1].y, bosses[1].frames[bosses[1].currFrame][2], bosses[1].frames[bosses[1].currFrame][3])) {
      					bosses[1].hp--;
      					player.shoots.splice(i, 1);
    				}
				})
				ctx.save()
				ctx.scale(-1,1)
				ctx.drawImage(bosses[1].img,
		    		bosses[1].frames[bosses[1].currFrame][0],
		    		bosses[1].frames[bosses[1].currFrame][1],
		    		bosses[1].frames[bosses[1].currFrame][2],
		    		bosses[1].frames[bosses[1].currFrame][3],
		    		-bosses[1].x, bosses[1].y,
		    		bosses[1].frames[bosses[1].currFrame][2],
		    		bosses[1].frames[bosses[1].currFrame][3],
	  			);
	  			ctx.restore()
				if (Date.now() - bosses[1].lastFrame > bosses[1].frameChangeFrequency) {
    				bosses[1].lastFrame = Date.now();
    				bosses[1].currFrame = (bosses[1].currFrame == 0 ? 1 : 0);
				}
				if (bosses[1].x > canvas.width / 10 * 9 && Date.now() - bosses[1].start < 20000) bosses[1].x--;
				else if(Math.abs(player.y - bosses[1].y) > bosses[1].speed*2)
					bosses[1].y += ((player.y - bosses[1].y) > 0 ? bosses[1].speed : -bosses[1].speed);
	    		if (Date.now() - bosses[1].lastShoot > bosses[1].shootFrequency && bosses[1].hp>0) {
				    bosses[1].lastShoot = Date.now();
					bosses[1].shoots.push(createShoot(bosses[1].x, bosses[1].y, -3, 3, 7, '#1030f0ff', '#1030f010', '#2040ffff', '#2040ff10', false))
				}
				if(Date.now() - bosses[1].start > 20000){
					bosses[1].x++;
				}
			}
			bosses[1].shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      bosses[1].shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      bosses[1].shoots.splice(i, 1)
					}
			  	}));
			if(Date.now() - bosses[1].start > 25000){
				return 0;
			}
			return -1
		}
	]
]
bosses[1].reset = () => {
	bosses[1].lastDmg = Date.now();
	bosses[1].start = Date.now()
	bosses[1].x = canvas.width
	bosses[1].y = 90
	bosses[1].hp = 20
	bosses[1].speed = 7
	bosses[1].curr = bosses[1][0]
	bosses[1].img = loadImage('images/boss2Ship.png')
	bosses[1].lastFrame = Date.now()
	bosses[1].frameChangeFrequency = 100
	bosses[1].frames = [[1,1,32,33],[35,1,32,33]]
	bosses[1].currFrame = 0
	bosses[1].lastShoot = Date.now()
	bosses[1].shootFrequency = 300
	bosses[1].shoots = []
	bosses[1].next = window.setTimeout( () => {
		boss = true;
		currBoss = bosses[Math.floor(Math.random() * (bosses.length))] 
	}, 20000)
}

