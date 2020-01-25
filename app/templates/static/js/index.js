'use strict'
const getHtml = require('./lib/getHtml'),
	loginPost = require('./lib/loginPost'),
	resources = require('./lib/getResources'),
	fs = require('fs'),
	{join} = require('path'),
	login = require('./lib/login'),
	logout = require('./lib/logout')

exports.default = {
	public: false,
	resources,
	login,
	http: [
		{
			routePath:'/api/changelog',
			map: (req, res) => {
				res.type('text/plain')
				fs.createReadStream(join(__dirname, '..', 'CHANGELOG.md')).pipe(res)
			},
			method: 'GET',
			accepted: ['text/plain']
		},
		{
			routePath: '/login',
			map: loginPost,
			method: 'POST',
			accepted: ['application/json'],
			public: true
		},
		{
			routePath: '/login',
			map: getHtml,
			method: 'GET',
			accepted: ['text/html'],
			public: true
		},
		{
			routePath: '/logout',
			map: logout,
			method: 'GET',
			accepted: ['text/html'],
			public: true
		},
		{
			routePath: '/*',
			map: getHtml,
			method: 'GET',
			accepted: ['text/html']
		},
	]
}
