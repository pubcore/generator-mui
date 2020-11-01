import React from 'react'
import {Link, Button} from '@material-ui/core'

export default function LinkPage ({type, href, onClick, children, ...rest}){
	const click = e => {
		if(onClick){
			if(href && !e.metaKey && !e.ctrlKey){
				e.preventDefault()
			}
			onClick({e})
		}
	}

	return type === 'button' ?
		<Button color="primary" onClick={click} {...rest}>
			{children || href}
		</Button>
		: <Link href={href} onClick={click} {...rest}>
			{children || href}
		</Link>
}