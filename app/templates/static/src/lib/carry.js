import progressify from './progressify'
import {showMessage, reset, navigate} from '../gofer'
import i18n from 'i18next'

export default async carrier => {try {
	var response = await progressify({promise:carrier()}),
		{body, status} = response

	switch (status) {
	case 200:
		return response
	default:
		showMessage(
			{severity:'error', code:'INVALID_RESPONSE', details:body},
			{autoclose:false}
		)
		throw Error(response)
	}
} catch (e) {
	var {code, details} = e
	if(details?.status == 401){
		reset()
		navigate({page:'login'})
	}else{
		showMessage(
			{severity:'error', code, text:i18n.t('bad_gateway', {message:details?.body?.status?.text})},
			{autoclose:false}
		)
	}
	throw Error(JSON.stringify(e))
}}