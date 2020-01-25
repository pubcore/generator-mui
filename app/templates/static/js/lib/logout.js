'use strict'
const cookie = require('cookie')

module.exports = (req, res) => {
	res.setHeader(
		'Set-Cookie',
		cookie.serialize('accessToken', '', {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'lax'
		})
	)
	res.redirect(`${req.component.context_path}/login`)
}