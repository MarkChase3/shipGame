bosses.push({});
bosses[0] = [
	[
		() => {
			bosses[0].start = Date.now()
		},
		() => {
			if(Date.now() - bosses[0].start > 1000){
				if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], bosses[0].x, bosses[0].y, bosses[0].frames[bosses[0].currFrame][2], bosses[0].frames[bosses[0].currFrame][3]) && Date.now() - bosses[0].lastDmg > 1000) {
					bosses[0].lastDmg = Date.now();
					player.hp-=3;
				}
				bosses[0].x-=bosses[0].speed
				ctx.save()
				ctx.scale(-1,1)
				ctx.drawImage(bosses[0].img,
			    	bosses[0].frames[bosses[0].currFrame][0],
			    	bosses[0].frames[bosses[0].currFrame][1],
			    	bosses[0].frames[bosses[0].currFrame][2],
			    	bosses[0].frames[bosses[0].currFrame][3],
			    	-bosses[0].x, bosses[0].y,
			    	bosses[0].frames[bosses[0].currFrame][2],
			    	bosses[0].frames[bosses[0].currFrame][3],
		  		);
		  		ctx.restore()
		  		if (Date.now() - bosses[0].lastFrame > bosses[0].frameChangeFrequency) {
	    			bosses[0].lastFrame = Date.now();
	    			bosses[0].currFrame = (bosses[0].currFrame == 0 ? 1 : 0);
	  			}
			}
							 		  		bosses[0].shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      bosses[0].shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      bosses[0].shoots.splice(i, 1)
					}
			  	}));
							  if(bosses[0].x + bosses[0].frames[bosses[0].currFrame][2] < 0){
		  			return 1
				}
		  		return -1
		}
	],
	[
		() => {
		bosses[0].start = Date.now()
		},
		() => {
			if(Date.now() - bosses[0].start > 1000){
				if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], bosses[0].x, bosses[0].y, bosses[0].frames[bosses[0].currFrame][2], bosses[0].frames[bosses[0].currFrame][3]) && Date.now() - bosses[0].lastDmg > 1000 ) {
					bosses[0].lastDmg = Date.now();
					player.hp-=3;
				}
				bosses[0].x+=bosses[0].speed
				ctx.drawImage(bosses[0].img,
			    	bosses[0].frames[bosses[0].currFrame][0],
			    	bosses[0].frames[bosses[0].currFrame][1],
			    	bosses[0].frames[bosses[0].currFrame][2],
			    	bosses[0].frames[bosses[0].currFrame][3],
			    	bosses[0].x, bosses[0].y,
			    	bosses[0].frames[bosses[0].currFrame][2],
			    	bosses[0].frames[bosses[0].currFrame][3],
		  		);
		  		if (Date.now() - bosses[0].lastFrame > bosses[0].frameChangeFrequency) {
	    			bosses[0].lastFrame = Date.now();
	    			bosses[0].currFrame = (bosses[0].currFrame == 0 ? 1 : 0);
	  			}
			}
									  		bosses[0].shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      bosses[0].shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      bosses[0].shoots.splice(i, 1)
					}
			  	}));
				if(bosses[0].x > canvas.width + bosses[0].frames[bosses[0].currFrame][2]){
		  			return 2
				}
				  return -1
		},
	
	], 
	[	
		() => {
			bosses[0].start = Date.now()
		},
		() => {
			if(Date.now() - bosses[0].start > 1000){
			  	if (bosses[0].hp <= 0 && bosses[0].shoots.length == 0) {
   					player.kills+=5;
    				boss = false;
    				bosses[0].reset();
					return 0;
  				}
  				player.shoots.forEach((shoot, i) => {
  					if (aabbCollision(shoot.x, shoot.y, shoot.sizeB, shoot.sizeB, bosses[0].x, bosses[0].y, bosses[0].frames[bosses[0].currFrame][2], bosses[0].frames[bosses[0].currFrame][3])) {
      					bosses[0].hp--;
      					player.shoots.splice(i, 1);
    				}
				})
				ctx.save()
				ctx.scale(-1,1)
				ctx.drawImage(bosses[0].img,
		    		bosses[0].frames[bosses[0].currFrame][0],
		    		bosses[0].frames[bosses[0].currFrame][1],
		    		bosses[0].frames[bosses[0].currFrame][2],
		    		bosses[0].frames[bosses[0].currFrame][3],
		    		-bosses[0].x, bosses[0].y,
		    		bosses[0].frames[bosses[0].currFrame][2],
		    		bosses[0].frames[bosses[0].currFrame][3],
	  			);
	  			ctx.restore()
				if (Date.now() - bosses[0].lastFrame > bosses[0].frameChangeFrequency) {
    				bosses[0].lastFrame = Date.now();
    				bosses[0].currFrame = (bosses[0].currFrame == 0 ? 1 : 0);
				}
				if (bosses[0].x > canvas.width / 10 * 9 && Date.now() - bosses[0].start < 20000) bosses[0].x--;
				else if(Math.abs(player.y - bosses[0].y) > bosses[0].speed*2)
					bosses[0].y += ((player.y - bosses[0].y) > 0 ? bosses[0].speed : -bosses[0].speed);
	    		if (Date.now() - bosses[0].lastShoot > bosses[0].shootFrequency && bosses[0].hp>0) {
				    bosses[0].lastShoot = Date.now();
					bosses[0].shoots.push(createShoot(bosses[0].x, bosses[0].y, -3, 3, 7, '#1030f0ff', '#1030f010', '#2040ffff', '#2040ff10', false))
				}
				if(Date.now() - bosses[0].start > 20000){
					bosses[0].x++;
				}
			}
			bosses[0].shoots.forEach((shoot, i) => shootUpdate(shoot, i, () => {
				    if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], shoot.x, shoot.y, shoot.sizeB, shoot.sizeB)) {
				      player.hp--;
				      bosses[0].shoots.splice(i, 1);
				    }
				    if(shoot.x + shoot.sizeB < 0){
				      bosses[0].shoots.splice(i, 1)
					}
			  	}));
			if(Date.now() - bosses[0].start > 25000){
				return 0;
			}
			return -1
		}
	]
]
bosses[0].reset = () => {
	bosses[0].lastDmg = Date.now();
	bosses[0].start = Date.now()
	bosses[0].x = canvas.width
	bosses[0].y = 90
	bosses[0].hp = 20
	bosses[0].speed = 7
	bosses[0].curr = bosses[0][0]
	bosses[0].img = loadImage('images/boss1Ship.png')
	bosses[0].lastFrame = Date.now()
	bosses[0].frameChangeFrequency = 100
	bosses[0].frames = [[1,1,32,33],[35,1,32,33]]
	bosses[0].currFrame = 0
	bosses[0].lastShoot = Date.now()
	bosses[0].shootFrequency = 300
	bosses[0].shoots = []
	bosses[0].next = window.setTimeout( () => {
		console.log('1');
		boss = true;
		currBoss = bosses[Math.floor(Math.random() * (bosses.length))] 
	}, 60000)
}

