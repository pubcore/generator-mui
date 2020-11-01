import uri from '@pubcore/redux-browser-history'
import messages from './messages.js'
import changelog from './changelog'
import progress from './progress'

export default {
	uri,
	public: s=>s||null,
	messages,
	progress,
	changelog
}
