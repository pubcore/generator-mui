import {createReducer, createAction} from '@reduxjs/toolkit'

export const progressStart = createAction('progressStart'),
	progressStop = createAction('progressStop')

export default createReducer(0, {
	[progressStart]: s => s + 1,
	[progressStop]: s => (s > 0 ? s - 1 : 0)
})