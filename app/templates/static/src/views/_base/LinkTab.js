import React from 'react'
import {Tab} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

export default function LinkTab({href, icon, name, ...rest}){
	const {t} = useTranslation()
	return <Tab
		component="a"
		label={t(name)}
		onClick={e => !e.metaKey && !e.ctrlKey && e.preventDefault()}
		{...{href, icon}}
		{...rest}
	/>
}

