'use strict'
const {context_path} = require('./contextPath')

module.exports = {
	componentDefault:{
		public: true
	},
	components:{
		'./js/index':{context_path}
	},
	accesscontrol:{
		contentSecurityPolicy:'default-src \'self\' data:; script-src \'self\'; font-src https:; style-src \'unsafe-inline\' https:;',
		allowedOrigins:[]
	},
	options:{
		requestJsonLimit: '1mb'
	}
}