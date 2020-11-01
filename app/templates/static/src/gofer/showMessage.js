import {dispatch} from '../store'
import {setMessage, resetMessages} from '../reducer/messages'

export default async (message, config={}) => {
	var {autoclose} = {autoclose:true, ...config}
	dispatch(setMessage(message))
	autoclose && setTimeout(() => dispatch(resetMessages()), 7000)
}