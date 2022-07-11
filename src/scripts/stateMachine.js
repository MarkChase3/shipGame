function updateStateMachine(stateMachine){
	let ret = stateMachine.curr[1]()
	if(ret >= 0){
	stateMachine.curr = stateMachine[ret]
	stateMachine.curr[0]()
	}
}
