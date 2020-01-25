import React from 'react'
import {Grid, Container, CssBaseline} from '@material-ui/core'
import {ThemeProvider, makeStyles} from '@material-ui/core/styles'
import Header from './Header'
import Navi from './Navi'
import T from '../lib/text'
import Messages from './Messages'
import Footer from './Footer'
import Progress from './Progress'
import MainContent from './MainContent'
import {useSelector} from 'react-redux'

const useStyles = makeStyles(() => ({
	root:{
		minHeight: '100vh',
		paddingBottom: 25 //to make footer never overlap content
	},
	footer:{
		marginTop:-25
	}
}))

export default function Application({theme}){
	const C = useStyles()
	document.title = T('html_document_title')
	return <ThemeProvider {...{theme}}><CssBaseline />
		<Container className={C.root}>
			<Header/>
			<Navi/>
			<Progress status={useSelector(s => s.progress)}>
				<Grid container direction="column">
					<Grid item><Messages/></Grid>
					<Grid item><MainContent/></Grid>
				</Grid>
			</Progress>
		</Container>
		<Container component="footer" className={C.footer}>
			<Footer/>
		</Container>
	</ThemeProvider>
}
