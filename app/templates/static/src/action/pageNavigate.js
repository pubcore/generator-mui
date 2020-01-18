import {updateUriAction} from '@pubcore/redux-browser-history'
import loadChangelog from './loadChangelog'

export default ({page, query, replace}) => dispatch => {
	switch (page) {
	case 'changelog':
		dispatch(loadChangelog())
		break
	default:
	}
	dispatch(updateUriAction({subPath:'/' + page, query, replace}))
}
