import '@babel/polyfill'
import React from 'react'
import {store} from './store'
import {render} from 'react-dom'
import initAction from './action/appInit'
import {listenUri} from '@pubcore/redux-browser-history'
import {Provider} from 'react-redux'
import Application from './views/Application'

render(
	<Provider store={store}><Application/></Provider>,
	document.getElementById('root')
)
store.dispatch(initAction())
listenUri(store.dispatch)
