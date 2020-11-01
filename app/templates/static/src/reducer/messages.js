import {createReducer, createAction} from '@reduxjs/toolkit'

export const setError = createAction('setError'),
	resetMessages = createAction('resetMessages'),
	setMessage = createAction('setMessage')

export default createReducer(null, {
	[setError]: (s, {payload}) => ({severity:'error', ...payload}),
	[resetMessages]: () => null,
	[setMessage]: (s, {payload}) => payload,
})