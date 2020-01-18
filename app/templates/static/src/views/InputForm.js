import React from 'react'
import {Form} from 'react-final-form'

export default function InputForm({children, onSubmit, validate, ...rest}){
	return <Form
		onSubmit={onSubmit}
		validateOnBlur={true}
		validate={validate}
		render={({handleSubmit}) =>
			<form
				onSubmit={handleSubmit}
				noValidate
				autoComplete="off"
				{...rest}
			>
				{children}
			</form>
		}
	/>
}