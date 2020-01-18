import React from 'react'
import {Grid, Divider, Typography} from '@material-ui/core'
import {version} from '../../package.json'
import Link from './LinkPage'

export default function Footer(){
	return <Grid container direction="row" justify="flex-end">
		<Grid item xs={12}><Divider/></Grid>
		<Grid item xs={1}>
			<Link page='changelog'>
				<Typography variant="body2" color="textSecondary">v {version}</Typography>
			</Link>
		</Grid>
	</Grid>
}