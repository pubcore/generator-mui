import {createSelector} from 'reselect'
import pageId from './pageId'

export default (tabs) => createSelector(
	pageId,
	(page) => {
		return tabs.indexOf(page) >= 0 ? page : false
	}
)