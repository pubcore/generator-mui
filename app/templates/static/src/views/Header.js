import React from 'react'
import {Grid} from '@material-ui/core'
import Link from './LinkPage'
import T from '../lib/text'

export default function Header(){
	return <Grid container direction="row" justify="flex-end">
		<Grid item xs={1} align="center">
			<Link page='logout'>{T('logout')}</Link>
		</Grid>
	</Grid>
}