function updateStateMachine(stateMachine){
	let ret = stateMachine.curr[0]();
	if(ret>=0){
		stateMachine.curr = stateMachine[ret];
	}
}
