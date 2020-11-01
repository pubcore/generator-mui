import React from 'react'
import {Tabs as MuiTabs} from '@material-ui/core'
import LinkTab from './LinkTab'
import {useTranslation} from 'react-i18next'

export default function Tabs({tabs, onChange, currentTab}){
	var {t} = useTranslation()

	return <MuiTabs
		variant="scrollable"
		scrollButtons="auto"
		value={currentTab}
		onChange={onChange}
		aria-label="navigation"
	>
		{tabs.map(({icon, name, href}) =>
			<LinkTab key={name} label={t(name)} value={name} {...{icon, href}}/>)}
	</MuiTabs>
}