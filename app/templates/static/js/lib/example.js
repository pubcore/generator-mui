const cookie = require('cookie')
const validateBody = './validateBody'
const {someSchema} = require('./schemas')

module.exports = async (req, res) => validateBody(someSchema)(req, res, () => {
	var {hash} = req.body,
		currentDate = new Date(),
		expiryDate = new Date(currentDate.setMonth(currentDate.getMonth() + 6))
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('fooHash', String(hash), {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'lax',
			expires: expiryDate
		})
	)
	res.send({status:{code:'OK'}})
})