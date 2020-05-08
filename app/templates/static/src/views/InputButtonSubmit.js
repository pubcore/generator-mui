import React from 'react'
import {FormSpy} from 'react-final-form'
import {Button} from '@material-ui/core'
import T from '../lib/text'
import Progress from './Progress'

export default function InputButtonSubmit(){
  return <FormSpy subscribe={{submitting:true}}>{({submitting}) =>
    <Progress status={submitting}>
      <Button type="submit" color="primary" disabled={submitting}>
        {T('submit')}
      </Button>
    </Progress>
  }</FormSpy>
}