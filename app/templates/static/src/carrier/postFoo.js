import request from '../lib/httpClient'
import S from '../store'

export default (values) => request({
	uri:`${S('uri.basePath')}/api/foo`,
	method:'POST',
	data:values
})