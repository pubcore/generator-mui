import request from '../lib/httpClient'
import S from '../store'

export default (values) => request({
	uri: `${S('uri.basePath')}/login`,
	method:'POST',
	data:values
})
