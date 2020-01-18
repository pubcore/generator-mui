import showMessage from '../action/showMessage'
import get from 'lodash.get'
import progressify from '../lib/progressify'

export default ({request, okAction, dpProgress}) => async dispatch => {try {
	var response = await progressify({promise:request(), dispatch:dpProgress}),
		{body, status} = response
	switch (status) {
	case 200:
		return okAction && dispatch(okAction(response))
	default:
		dispatch(showMessage({
			severity:'error',
			code:'INVALID_RESPONSE',
			details:body
		}))
	}
} catch ({code, details}) {
	switch (code) {
	case 'HTTP_ERROR':
		if(details.status === 400 && typeof body === 'object'){
			return get(body, ['status', 'details'])
		}
		// fallsthrough
	default:
		dispatch(showMessage({severity:'error', code, details}))
	}
}}
