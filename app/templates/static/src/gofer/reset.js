import S, {dispatch} from '../store'
import {reset} from '../reducer/reset'

export default () => {
	dispatch(reset(S()))
}