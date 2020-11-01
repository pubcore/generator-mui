import {createSelector} from '@reduxjs/toolkit'

export default createSelector(
	s => s.progress,
	p => p
)