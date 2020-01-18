export default message => dp => {
	dp({type:'SET_MESSAGE', message})
	setTimeout(() => dp({type:'RESET_MESSAGES'}), 5000)
}