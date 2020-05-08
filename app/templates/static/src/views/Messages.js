import React from 'react'
import T from '../lib/text'
import {useSelector} from 'react-redux'
import {Alert} from '@material-ui/lab'
import {Fade} from '@material-ui/core'

export default function Messages(){
  var {code} = useSelector(s => s.messages) || {}
  return <Fade in={code ? true : false} timeout={500}>
    <Alert severity="error">
      {code && T(code)}
    </Alert>
  </Fade>
}