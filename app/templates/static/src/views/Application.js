import React from 'react'
import {AppDecorator, Header, Navi, Main, Footer} from './_base'
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import {Container as MuiContainer} from '@material-ui/core'
import {useTranslation} from 'react-i18next'
import {navigate} from '../gofer'
import selectTab from '../selectors/naviTabsValue'
import selectProgress from '../selectors/progress'
import {text, dashboard, administration, changelog} from '../resources'
import resourcePath from '../lib/resourcePath'
import {version} from '../../package.json'
import MainContent from './MainContent'
import Messages from './Messages'

const	MainContainer = styled(MuiContainer)`
	min-height: 100vh;
	padding-bottom: 30px;
`
const FooterContainer = styled(MuiContainer)`
	margin-top: -25px;
`
const tabs = [dashboard, administration].map(
	resource => ({...resource, href: resourcePath(resource)})
)

export default function Application(){
	return AppDecorator({text})(() => {
		var progressStatus = useSelector(selectProgress),
			name = 'Mr. X',
			{t} = useTranslation(),
			currentTab = useSelector(selectTab(tabs.map(({id}) => id))),
			messages = <Messages/>

		globalThis.document.title = t('html_document_title')
		return <>
			<MainContainer>
				<Header hello={name && t('hello {{name}}', {name})}/>
				<Navi {...{tabs, onChange:(e, value) => navigate({e, page:value}), currentTab}}/>
				<Main {...{progressStatus, messages}}>
					<MainContent/>
				</Main>
			</MainContainer>
			<FooterContainer component="footer">
				<Footer {...{version, changelogUri:resourcePath(changelog)}}/>
			</FooterContainer>
		</>
	})
}
