module.exports = schema => async values => {try {
  await schema.validateAsync(values, {abortEarly:false})
} catch ({details, ...rest}) {
  return details.reduce((acc, {context, message}) => {
    acc[context.key] = message
    return acc
  }, {})
}}
