import React from 'react'
import {Grid, Typography, Snackbar, Box} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import {useTranslation} from 'react-i18next'

export default function Message({
	page, onClose, code, text, severity='info', action=null, headline
}){
	var {t} = useTranslation()
	return <Box mt={3} mb={2}>
		<Grid container justify="space-between" alignItems="center">
			<Typography variant="h5"><b>{t(page)}</b></Typography>
			<Typography variant="h5">{headline}</Typography>
			<Snackbar
				anchorOrigin={{ vertical:'top', horizontal:'center' }}
				open={code || text ? true : false}
			>
				<Alert {...{onClose, severity}}>
					{text || code && t(code)}
				</Alert>
			</Snackbar>
			{action}
		</Grid>
	</Box>
}