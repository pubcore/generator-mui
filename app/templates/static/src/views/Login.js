import React from 'react'
import {Grid} from '@material-ui/core'
import T from '../lib/text'
import Form from './InputForm'
import Text from './InputText'
import ButtonReset from './InputButtonReset'
import {makeStyles} from '@material-ui/core/styles'
import {loginSubmit} from '../gofer'
import validate from '../../js/lib/validateLogin'
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

export default function Login(){
  const C = useStyles()
  return <>
    {T('form_credentials', 'Provide an access-token, please.')}
    <Form onSubmit={loginSubmit} validate={validate} className={C.form}>
      <Text label={T('access-token')} name="accessToken" type="string"/>
      <Grid container justify="space-between">
        <ButtonReset/>
        <ButtonSubmit/>
      </Grid>
    </Form>
  </>
}