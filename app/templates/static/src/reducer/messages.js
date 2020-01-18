import {createReducer} from 'redux-create-reducer'

export default createReducer(null, {
	SET_ERROR: (s, {code, details}) => ({severity:'error', code, details}),
	RESET_MESSAGES: () => ({}),
	SET_MESSAGE: (s, {message}) => ({severity:'info', ...message}),
})