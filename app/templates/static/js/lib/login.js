'use strict'
const cookie = require('cookie')
const backUriCookieOptions = {
	httpOnly: true,
	path: '/',
	secure: true,
	sameSite: 'lax'
}

module.exports = (req, res, next) => {
	if(req.cookies.accessToken){
		req.user = {}
		if(req.cookies.back_uri){
			res.setHeader(
				'Set-Cookie',
				cookie.serialize('back_uri', '', backUriCookieOptions)
			)
		}
		next()
	}else{
		res.setHeader(
			'Set-Cookie',
			cookie.serialize(
				'back_uri',
				String(`https://${req.get('host')}${req.originalUrl}`),
				backUriCookieOptions
			)
		)
		res.redirect(`${req.component.context_path}/login`)
	}
}