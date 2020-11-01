import S, {dispatch} from '../store'
import {updateUriAction} from '@pubcore/redux-browser-history'
import selectCurrentPage from '../selectors/pageId'
import selectChanges from '../selectors/changes'
import i18n from 'i18next'
import {reset} from '../reducer/reset'

export default ({page, query, replace}) => {
	if(
		selectCurrentPage(S()) != page
		&& selectChanges(S())
		&& !globalThis.confirm(i18n.t('confirm_leave_page'))
	){
		return
	}
	reset(S())
	dispatch(updateUriAction({subPath:'/' + page, query, replace}))
}