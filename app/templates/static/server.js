'use strict'
if(process.env.NODE_ENV === 'development'){
	require('dotenv').config()
}

const {app} = require('@pubcore/node-server-docker'),
	composition = require('@pubcore/node-composition').default,
	bodyParser = require('body-parser'),
	config = require('config').util.toObject()

app.use(bodyParser.urlencoded({ extended : true }))
app.use('/', composition(config, require))