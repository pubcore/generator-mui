
//for local testing and review only!
process.env.NODE_ENV = 'development'
//for local testing and review only!
const composition = require('@pubcore/node-composition').default,
	express = require('express'),
	app = express(),
	context_path = '/test',
	config = {components:{'./js/index':{public:false, context_path}}}

app.use('/', composition(config, require))
app.listen(3030)