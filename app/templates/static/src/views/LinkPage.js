import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import pageNavigate from '../action/pageNavigate'

export default function LinkPage(props){
	var basePath = useSelector(s => s.uri.basePath),
		{page, children, ...rest} = props,
		path = `${basePath}/${page}`,
		dispatch = useDispatch()

	return <a
		href={path}
		onClick={e =>
			!e.metaKey && !e.ctrlKey && e.preventDefault()
			|| dispatch(pageNavigate({page}))
		}
		{...rest}
	>
		{children}
	</a>
}