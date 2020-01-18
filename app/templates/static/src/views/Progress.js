import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {CircularProgress} from '@material-ui/core'

const useStyles = makeStyles(() => ({
	buttonProgress:{
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: -12,
		marginLeft: -12,
	},
	wrapper:{
		position:'relative'
	},
	overlay:{
		position: 'absolute',
		top: 0,
		left:0,
		width: '100%',
		height: '100%',
		opacity: 0.15,
		background: '#FFFFFF',
		zIndex: 1000
	}
}))

export default function Progress({children, status}){
	const C = useStyles()
	const show = status ? true : false
	return <div className={C.wrapper}>
		{show && <div className={C.overlay} onMouseOver={e => e.stopPropagation()}/>}
		{children}
		{show && <CircularProgress size={24} className={C.buttonProgress}/>}
	</div>
}