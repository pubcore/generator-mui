import reducer from './reducer/_rootReducer'
import get from 'lodash.get'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
		reducer,
		preloadedState:{
			resources: root.appResources,
			user: root.appResources.user || null
		}
	}),
	{dispatch} = store

export {dispatch, store}
export default arg => get(store.getState(), arg)
