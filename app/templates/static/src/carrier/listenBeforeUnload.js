
import S from '../store'
import selectChanges from '../selectors/changes'

//https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload
export default () => {
	globalThis.addEventListener('beforeunload', e => {
		if(selectChanges(S())){
			e.preventDefault()
			e.returnValue = ''
		}else{
			delete e['returnValue']
		}
	})
}