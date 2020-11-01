import reducer from './reducer/_root'
import get from 'lodash.get'
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import getApp from './carrier/app'

const store = configureStore({
		reducer,
		preloadedState:{
			public: getApp().component.public
		},
		//"immutableCheck" slows down app, if larger objects exists in state.
		//Since "immer" is used for reducers by default, we can disable it
		middleware: [...getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck:false
		})]
	}),
	{dispatch} = store

export {dispatch, store}
export default arg => arg === undefined ?
	store.getState() : get(store.getState(), arg)
