import {combineReducers} from 'redux'
import uri from '@pubcore/redux-browser-history'
import messages from './messages.js'
import changelog from './changelog'
import progress from './progress'


export default () => combineReducers({
	uri,
	user:s=>s||null,
	resources:s =>s||{},
	messages,
	progress,
	changelog
})
