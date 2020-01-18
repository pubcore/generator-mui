module.exports = validate => async (req, res, next) => {try{
	var details = await validate(req.body)
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