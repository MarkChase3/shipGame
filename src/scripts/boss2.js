bosses.push({});
bosses[1] = [
	[
		() => {
			bosses[1].start = Date.now()
			bosses[1].turns = 0
				bosses[1].vspeed = 3;
	bosses[1].hspeed = -3;
	bosses[1].endedAnimation = false
		},
		() => {
			if(Date.now() - bosses[1].start > 1000){
				if (aabbCollision(player.x, player.y, player.frames[player.currFrame][2], player.frames[player.currFrame][3], bosses[1].x, bosses[1].y, bosses[1].frames[bosses[1].currFrame][2], bosses[1].frames[bosses[1].currFrame][3]) && Date.now() - bosses[1].lastDmg > 1000) {
					bosses[1].lastDmg = Date.now();
					player.hp-=3;
				}
				if(bosses[1].x < canvas.width && !bosses[1].endedAnimation){
					bosses[1].endedAnimation = true
				}
				if(bosses[1].endedAnimation){
					bosses[1].x += bosses[1].hspeed;
					bosses[1].y += bosses[1].vspeed;
					if(bosses[1].x > canvas.width && bosses[1].turns < 3){
						bosses[1].turns++;
						bosses[1].hspeed = -bosses[1].hspeed
					}
					if(bosses[1].y < 0 || bosses[1].y + bosses[1].frames[bosses[1].currFrame][3] > canvas.height) bosses[1].vspeed = -bosses[1].vspeed
					if(bosses[1].x  - bosses[1].frames[bosses[1].currFrame][2]< 0) bosses[1].hspeed = -bosses[1].hspeed
				}
				else {
					bosses[1].x--;
				}
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
							  if(bosses[1].turns > 2 && bosses[1]. x > canvas.width){
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
			  	if (bosses[1].hp <= 0 && bosses[1].shoots.length == 0) {
   					player.kills+=5;
    				boss = false;
    				bosses[1].reset();
    				lastBossDeath = Date.now();
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
				else if(Math.abs(player.y - (bosses[1].y + bosses[1].frames[bosses[1].currFrame][3]/2)) > bosses[1].speed){
					bosses[1].y += ((player.y - (bosses[1].y + bosses[1].frames[bosses[1].currFrame][3]/2)) > 0 ? bosses[1].speed : -bosses[1].speed);
				}
	    		if (Date.now() - bosses[1].lastShoot1 > bosses[1].shootFrequency1 && bosses[1].hp>0) {
				    bosses[1].lastShoot1 = Date.now();
					bosses[1].shoots.push(createShoot(bosses[1].x - 26, bosses[1].y + 13, -3, 3, 6, '#1030f0ff', '#1030f010', '#2040ffff', '#2040ff10', false))
				}
	    		if (Date.now() - bosses[1].lastShoot2 > bosses[1].shootFrequency2 && bosses[1].hp>0) {
				    bosses[1].lastShoot2 = Date.now();
					bosses[1].shoots.push(createShoot(bosses[1].x - 26, bosses[1].y + 22, -3, 3, 4, '#1030f0ff', '#1030f010', '#2040ffff', '#2040ff10', false))
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
	bosses[1].turns = 0;
	bosses[1].vspeed = 3;
	bosses[1].hspeed = -3;
	bosses[1].endedAnimation = false
	bosses[1].lastDmg = Date.now();
	bosses[1].start = Date.now()
	bosses[1].x = canvas.width
	bosses[1].y = 90
	bosses[1].hp = 30
	bosses[1].speed = 3
	bosses[1].curr = bosses[1][0]
	bosses[1].img = loadImage('images/boss2Ship.png')
	bosses[1].lastFrame = Date.now()
	bosses[1].frameChangeFrequency1 = 100
	bosses[1].frames = [[1,1,32,33],[35,1,32,33]]
	bosses[1].currFrame = 0
	bosses[1].lastShoot1 = Date.now()
	bosses[1].lastShoot2 = Date.now()
	bosses[1].shootFrequency1 = 600
	bosses[1].shootFrequency2 = 350
	bosses[1].shoots = []
}
bosses[1].reset();
