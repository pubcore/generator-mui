import React from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText,
	DialogActions, Button} from '@material-ui/core'
import {useTranslation} from 'react-i18next'

export default function Confirm({title, text, open, handleClose}){
	const {t} = useTranslation()
	return <Dialog
		open={open}
		onClose={handleClose}
		aria-labelledby="alert-dialog-title"
		aria-describedby="alert-dialog-description"
	>
		<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
		<DialogContent>{
			text && <DialogContentText id="alert-dialog-description">
				{text}
			</DialogContentText>}
		</DialogContent>
		<DialogActions>
			<Button onClick={handleClose} color="primary">
				{t('no')}
			</Button>
			<Button onClick={handleClose} color="primary" autoFocus>
				{t('yes')}
			</Button>
		</DialogActions>
	</Dialog>
}