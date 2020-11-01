import React from 'react'
import {Grid} from '@material-ui/core'
import Progress from './Progress'
import styled from 'styled-components'

const Content = styled(Grid)`
	min-height: 33vh;
	padding-bottom: 30px; //to make footer never overlap content
`

export default function Main({messages=null, progressStatus, children}){
	return <Progress status={progressStatus}>
		<Grid container direction="column">
			<Grid item>{messages}</Grid>
			<Content item>
				{children}
			</Content>
		</Grid>
	</Progress>
}