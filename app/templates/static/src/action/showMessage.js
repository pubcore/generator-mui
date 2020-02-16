import {setMessage, resetMessages} from '../reducer/messages'

export default message => dp => {
	dp(setMessage(message))
	setTimeout(() => dp(resetMessages()), 5000)
}