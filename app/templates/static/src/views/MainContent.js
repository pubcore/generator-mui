import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {useSelector} from 'react-redux'
import pageId from '../selectors/pageId'
import Changelog from './Changelog'
import Login from './Login'
import {Card, CardHeader, CardContent} from '@material-ui/core'
import T from '../lib/text'

const useStyles = makeStyles(() => ({
	root:{
		minHeight: '33vh'
	},
}))

export default function MainContent(){
	const page = useSelector(pageId)
	const C = useStyles()
	return <Card className={C.root}>
		<CardHeader title={T(page)}/>
		<CardContent>{
			({'changelog':
			<Changelog/>,
			'login':
			<Login/>
			})[page] ||
			null}
		</CardContent>
	</Card>
}