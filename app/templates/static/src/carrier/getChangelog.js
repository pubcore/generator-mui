import request from '../lib/httpClient'
import S from '../store'

export default () => request({
  uri: `${S('uri.basePath')}/api/changelog`,
  accept: 'text/plain'
})