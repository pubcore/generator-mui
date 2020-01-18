import root from 'window-or-global'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducer/_rootReducer'
import thunkMiddleware from 'redux-thunk'
import get from 'lodash.get'

const composeEnhancers = root.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
	store = createStore(
		rootReducer(),
		{
			resources: root.appResources
		},
		composeEnhancers( applyMiddleware(thunkMiddleware) )
	),
	{dispatch} = store

export {dispatch, store}
export default arg => get(store.getState(), arg)
