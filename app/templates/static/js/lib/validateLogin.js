const {credentials} = require('./schemas')

module.exports = async values => {try {
	await credentials.validateAsync(values, {abortEarly:false})
} catch ({details}) {
	return details.reduce((acc, {context, message}) => {
		acc[context.key] = message
		return acc
	}, {})
}}
