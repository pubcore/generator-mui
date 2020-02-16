const {credentials} = require('./schemas')
const validate = require('./validate')

module.exports = validate(credentials)
