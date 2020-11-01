import {store} from './store'
import React from 'react'
import {render} from 'react-dom'
import {listenUri} from '@pubcore/redux-browser-history'
import listenBeforeUnload from './carrier/listenBeforeUnload'
import {Provider} from 'react-redux'
import Application from './views/Application'

render(
	<Provider store={store}><Application/></Provider>,
	document.getElementById('root')
)
listenUri(store.dispatch)
listenBeforeUnload()
