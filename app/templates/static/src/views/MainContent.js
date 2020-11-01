import React from 'react'
import {useSelector} from 'react-redux'
import Changelog from './Changelog'
import pageId from '../selectors/pageId'

export default function MainContent(){
	const page = useSelector(pageId)

	return <>{(page => {switch (page) {
	case 'changelog':
		return <Changelog/>
	default:
		return null
	}})(page)}
	</>
}