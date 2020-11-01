import React from 'react'
import {Grid, Divider, Typography} from '@material-ui/core'
import LinkPage from './LinkPage'

export default function Footer({version, changelogUri}){
	return <Grid container direction="row" justify="flex-end">
		<Grid item xs={12}><Divider/></Grid>
		<Grid item xs={1} align="center">
			<LinkPage href={changelogUri}>
				<Typography variant="body2" color="textSecondary">v {version}</Typography>
			</LinkPage>
		</Grid>
	</Grid>
}