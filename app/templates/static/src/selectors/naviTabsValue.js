import {createSelector} from 'reselect'

export default createSelector(
	s => s.uri.subPath,
	subPath => {
		var page = (subPath.match(/^\/?([^/]+)/)||[])[1]
		return page || 'example'
	}
)