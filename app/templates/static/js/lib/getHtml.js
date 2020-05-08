'use strict'
const manifest = require('./manifest.json'),
  appJs = manifest['app.js']

module.exports = (req, res) => {
  var {component, locale, resources, user} = req

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
  <script>window.appResources = ${JSON.stringify({component, resources, user})}</script>
  <script src="${appJs}" type="text/javascript"></script>
</body>
</html>
`)}
