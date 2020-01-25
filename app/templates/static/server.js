
//for local testing and review only!
const composition = require('@pubcore/node-composition').default,
	express = require('express'),
	app = express(),
	context_path = '/test',
	config = {components:{'./js/index':{public:false, context_path}}}

//fake access token
const	cookie = require('cookie')
app.use(`${context_path}/login`, (req, res, next) => {
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('accessToken', '0101010101', {
			httpOnly: true,
			path: '/',
			secure: false,//insecure !; for local demo only!
		})
	)
	next()
})
//only needed in this demo mode
app.use(context_path, express.static('./htdocs'))

app.use('/', composition(config, id => require(id)))
app.listen(3030)