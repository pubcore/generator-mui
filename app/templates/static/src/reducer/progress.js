import {createReducer} from 'redux-create-reducer'

export const START = 'PROGRESS_START'
export const STOP = 'PROGRESS_STOP'

export default createReducer(0, {
	[START]: s => s + 1,
	[STOP]: s => (s > 0 ? s - 1 : 0)
})