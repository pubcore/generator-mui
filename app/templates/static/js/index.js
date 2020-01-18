'use strict'
const getHtml = require('./lib/getHtml'),
	example = require('./lib/example'),
	resources = require('./lib/getResources'),
	fs = require('fs'),
	{join} = require('path')

exports.default = {
	public: true,
	resources,
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
			routePath: '/api/foo',
			map: example,
			method: 'POST',
			accepted: ['application/json']
		},
		{
			routePath: '/*',
			map: getHtml,
			method: 'GET',
			accepted: ['text/html']
		},
	]
}
