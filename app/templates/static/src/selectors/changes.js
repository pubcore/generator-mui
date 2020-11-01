import {createSelector} from '@reduxjs/toolkit'
import {getDiff} from 'recursive-diff'

export default createSelector(
	s => ({}), //replace with selector for loaded data (never change loaded data)
	s => ({}), //replace with selector for aim data
	(loaded, aim) => {
		return getDiff(loaded, aim).length > 0
	}
)