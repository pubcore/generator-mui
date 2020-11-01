'use strict'
var {version} = require('./package.json'),
	{NODE_ENV} = process.env

require('estrella').build({
	entryPoints: ['src/app.js'],
	target: ['chrome75', 'firefox68', 'safari12'],
	minify: NODE_ENV==='production',
	sourcemap: true,
	bundle: true,
	outfile: `htdocs/app-${version}.js`,
	inject:['build-inject.js'],
	loader:{'.js':'jsx'}
}).catch(() => process.exit(1))