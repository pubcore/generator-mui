const validate = require('./validateLogin')
const cookie = require('cookie')

module.exports = async (req, res) => {try{
  var details = await validate(req.body)
  if(details){
    res.status(400)
    res.send({status:{code:'INVALID_ARGUMENTS', details}})
  }else{
    var {accessToken} = req.body,
      currentDate = new Date(),
      expiryDate = new Date(currentDate.setMonth(currentDate.getMonth() + 6))
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('accessToken', String(accessToken), {
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'lax',
        expires: expiryDate
      })
    )
    res.send({status:{code:'OK'}, result:{backUri: req.cookies.back_uri || req.component.context_path}})
  }
}catch(e){
  console.log(e)
  res.status(500)
  res.send({status:{code:'ERROR'}})
}}