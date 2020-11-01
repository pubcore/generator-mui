import React from 'react'
import {Grid, Link} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

export default function Header({logoutUri, hello}){
	const {t} =  useTranslation()
	return <Grid container direction="row" justify="flex-end">
		<Grid item>{hello}</Grid>
		<Grid item xs={1} align="center">
			{/* Must trigger a page reload (via standard link)*/}
			<Link href={logoutUri}>{t('logout')}</Link>
		</Grid>
	</Grid>
}