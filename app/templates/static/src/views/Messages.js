import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import pageId from '../selectors/pageId'
import {resetMessages} from '../reducer/messages'
import {showMessage} from '../gofer'
import {Message} from './_base'

export default function Messages(){
	var {code, text, severity} = useSelector(s => s.messages) || {},
		page = useSelector(pageId),
		dp = useDispatch(),
		onClose = () => {dp(resetMessages())},
		action = null

	return <Message {...{page, onClose, code, text, severity, action}}/>
}