import changelog from '../carrier/getChangelog'
import handleRequest from './handleRequest'
import {setChangelog} from '../reducer/changelog'

export default () => handleRequest({
	request: () => changelog(),
	okAction: ({body}) => setChangelog(body)
})