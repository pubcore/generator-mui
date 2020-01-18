import React from 'react'
import T from '../lib/text'
import {Pages as PagesIcon, Extension as ExtensionIcon} from '@material-ui/icons'
import {Typography, AppBar, Toolbar, Tabs} from '@material-ui/core'
import {navigate} from '../gofer'
import {useSelector} from 'react-redux'
import selectTabsValue from '../selectors/naviTabsValue'
import LinkTab from './LinkTab'
export default function Navi(){
	var tabsValue = useSelector(selectTabsValue)
	if(tabsValue === 'changelog'){
		tabsValue = false
	}
	return <AppBar position="static">
		<Toolbar variant="dense">
			<img src="img/logo.png" width="60" />
			<Typography variant="h5">{T('Welcome')}</Typography>
			<Tabs
				variant="scrollable"
				scrollButtons="auto"
				value={tabsValue}
				onChange={(e, value) => navigate({e, value})}
				aria-label="simple tabs example"
			>
				<LinkTab icon={<PagesIcon/>} label={T('Example')} value="example"/>
				<LinkTab icon={<ExtensionIcon/>} label={T('Other page')} value="otherpage" />
			</Tabs>
		</Toolbar>
	</AppBar>
}