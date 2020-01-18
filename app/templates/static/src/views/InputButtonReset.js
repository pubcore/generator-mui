import React from 'react'
import {FormSpy} from 'react-final-form'
import {Button} from '@material-ui/core'
import T from '../lib/text'

export default function InputButtonReset(){
	return <FormSpy subscription={{ pristine: true }}>
		{({form}) =>
			<Button type="reset" onClick={() => form.reset()}>
				{T('reset')}
			</Button>
		}
	</FormSpy>
}