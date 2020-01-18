
const validate = async (values, schema) => {try {
	await schema.validateAsync(values, {abortEarly:false})
} catch ({details}) {
	return details.reduce((acc, {context, message}) => {
		acc[context.key] = message
		return acc
	}, {})
}}

module.exports = schema => async (req, res, next) => {try{
	var details = await validate(req.body, schema)
	if(details){
		res.status(400)
		res.send({status:{code:'INVALID_ARGUMENTS', details}})
	}else{
		next()
	}
}catch(e){
	console.log(e)
	res.status(500)
	res.send({status:{code:'ERROR'}})
}}