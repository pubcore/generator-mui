import React from 'react'
import {Grid} from '@material-ui/core'
import T from '../lib/text'
import Form from './InputForm'
import Text from './InputText'
import ButtonReset from './InputButtonReset'
import {makeStyles} from '@material-ui/core/styles'
import {fooSubmit} from '../gofer'
import validate from '../../js/lib/validateFoo'
import ButtonSubmit from './InputButtonSubmit'

const useStyles = makeStyles(() => ({
	form:{
		display: 'flex',
		flexDirection: 'column',
		width: 250,
		'& > *:not(:last-child)':{
			marginBottom: 20
		}
	}
}))

export default function SomeForm(){
	const C = useStyles()
	return <>
		{T('form_foo', 'Set the foo hash, please.')}
		<Form onSubmit={fooSubmit} validate={validate} className={C.form}>
			<Text label={T('foo hash')} name="hash" type="string"/>
			<Grid container justify="space-between">
				<ButtonReset/>
				<ButtonSubmit/>
			</Grid>
		</Form>
	</>
}