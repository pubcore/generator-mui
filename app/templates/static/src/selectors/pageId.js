import {createSelector} from 'reselect'

export default createSelector(
  s => s.uri.subPath,
  s => s.user,
  (subPath, user) => {
    var page = ( subPath.match(/^\/?([^/]+)/)||[] )[1]
    return user ? page || 'home' : 'login'
  }
)