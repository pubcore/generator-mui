const joi = require('@hapi/joi')
const	someSchema = joi.object({
	hash: joi.string().required().pattern(/\b[0-9A-F]+\b/i).min(20).max(32)
})

module.exports = {someSchema}