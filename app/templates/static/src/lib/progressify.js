import {dispatch} from '../store'
import {START, STOP} from '../reducer/progress'
const start = () => dispatch({type:START}),
	stop = () => dispatch({type:STOP})

export default ({dispatch, promise}) => {
	var started = false
	const dpStart = () => dispatch && dispatch('START') || start()
	const dpStop = () => {
		timer && clearTimeout(timer)
		started && (dispatch && dispatch('STOP') || stop())
	}
	var timer = setTimeout(() => {
		started = true
		dpStart()
	}, 1000)

	return promise.then(
		res => {
			dpStop()
			return res
		},
		err => {
			dpStop()
			return Promise.reject(err)
		}
	)
}
