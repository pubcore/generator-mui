'use strict'
var {version} = require('../../package.json'),
	appJs = `app-${version}.js`,
	{NODE_ENV} = process.env

module.exports = (req, res) => {
	var {component, locale} = req

	res.send(`<!DOCTYPE html>
<html lang="${locale||'en-US'}">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
	<link rel="icon" href="img/favicon.ico" type="image/x-icon">
</head>
<body>
	<div id="root"></div>
	<script type="application/json" id="_app">
		${JSON.stringify({component, NODE_ENV})}
	</script>
	<script src="${appJs}" type="text/javascript"></script>
</body>
</html>
`)}
