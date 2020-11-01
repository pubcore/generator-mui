import React from 'react'
import {CircularProgress} from '@material-ui/core'
import styled from 'styled-components'

const Wrapper = styled.div`
	position: relative;
`
const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.10;
	background: #FFFFFF;
	z-index: 1000
`
const Spinner = styled(CircularProgress)`
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -12px;
	margin-left: -12px;
`

export default function Progress({children, status}){
	const show = status ? true : false
	return <Wrapper>
		{children}
		{show && <Overlay onMouseOver={e => e.stopPropagation()}/>}
		{show && <Spinner size={24}/>}
	</Wrapper>
}