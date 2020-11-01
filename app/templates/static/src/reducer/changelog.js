import {createReducer, createAction} from '@reduxjs/toolkit'
export const setChangelog = createAction('setChangelog')
export default createReducer('', {
	[setChangelog]: (s, {payload}) => payload
})