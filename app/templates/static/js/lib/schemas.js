const joi = require('@hapi/joi')
const  credentials = joi.object({
  accessToken: joi.string().required().pattern(/\b[0-9A-F]+\b/i).min(5).max(32)
})

module.exports = {credentials}