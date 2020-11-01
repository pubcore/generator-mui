'use strict'
const getHtml = require('./middleware/getHtml'),
  fs = require('fs'),
  {join} = require('path')

exports.default = {
  public: true,
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
      routePath: '/*',
      map: getHtml,
      method: 'GET',
      accepted: ['text/html']
    },
  ]
}
