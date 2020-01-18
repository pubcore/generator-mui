const {someSchema} = require('./schemas')

module.exports = async values => {try {
	await someSchema.validateAsync(values, {abortEarly:false})
} catch ({details}) {
	return details.reduce((acc, {context, message}) => {
		acc[context.key] = message
		return acc
	}, {})
}}