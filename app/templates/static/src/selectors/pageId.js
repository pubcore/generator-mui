import {createSelector} from 'reselect'
import selectNaviTabsValue from '../selectors/naviTabsValue'

export default createSelector(
	selectNaviTabsValue,
	v => v
)