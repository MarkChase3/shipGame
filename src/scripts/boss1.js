let boss1 = [
	[
		() => {
			boss1.start = Date.now()
		},
		() => {
			if(Date.now() - boss1.start > 1000){
			boss1.x-=2
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
	  		if(boss1.x + boss1.frames[boss1.currFrame][2] < 0){
	  			return 1
			}
	  		return -1
		}
		}
	],
	[
		() => {
		boss1.start = Date.now()
		},
		() => {
			if(Date.now() - boss1.start > 1000){
			boss1.x+=2
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
			if(boss1.x > canvas.width + boss1.frames[boss1.currFrame][2]){
	  			return 0
			}
	  		return -1
		}
		}
	]
]
boss1.start = Date.now()
boss1.x = canvas.width
boss1.y = 90
boss1.curr = boss1[0]
boss1.img = loadImage('images/boss1Ship.png')
boss1.lastFrame = Date.now()
boss1.frameChangeFrequency = 100
boss1.frames = [[1,1,32,33],[35,1,32,33]]
boss1.currFrame = 0
