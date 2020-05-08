import React from 'react'
import {Field} from 'react-final-form'
import {TextField} from '@material-ui/core'

export default function InputText({name, ...rest}){ return (
  <Field
    render={({input, meta}) =>
      <TextField
        error={meta.touched && meta.invalid}
        variant="outlined"
        size="small"
        margin="dense"
        helperText={meta.touched && (meta.error || meta.submitError) || ' '}
        {...input}
        {...rest}
      />
    }
    name={name}
  />
)}