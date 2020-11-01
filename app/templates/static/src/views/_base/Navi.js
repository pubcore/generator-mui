import React from 'react'
import Tabs from './Tabs'
import {AppBar, Toolbar, Box} from '@material-ui/core'

export default function Navi({tabs, onChange, currentTab}){
	return <AppBar color="transparent" position="static">
		<Toolbar style={{ paddingLeft: 0 }} variant="dense">
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width={240}
				height={65}
				mr={2}
			>
				<img width={75} src="img/logo.png"/>
			</Box>
			<Tabs {...{tabs, onChange, currentTab}}/>
		</Toolbar>
	</AppBar>
}