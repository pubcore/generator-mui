import pageNavigate from './action/pageNavigate'
import {dispatch} from './store'
import postLogin from './carrier/postLogin'
import handleRequest from './action/handleRequest'
import get from 'lodash.get'

export const
  navigate = ({value}) => dispatch(pageNavigate({page:value})),
  loginSubmit = values => dispatch(handleRequest({
    request: () => postLogin(values),
    okAction: ({body}) =>
      get(body, 'result.backUri') && (document.location.href = body.result.backUri)
  }))