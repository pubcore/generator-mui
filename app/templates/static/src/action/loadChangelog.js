import getChangelog from '../carrier/getChangelog'
import handleRequest from './handleRequest'

export default () => handleRequest({
	request: getChangelog,
	okAction: ({body}) => ({type:'SET_CHANGELOG', changelog:body})
})