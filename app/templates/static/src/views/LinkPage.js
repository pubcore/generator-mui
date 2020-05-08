import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import pageNavigate from '../action/pageNavigate'
import {Link} from '@material-ui/core'

export default function LinkPage(props){
  var basePath = useSelector(s => s.uri.basePath),
    {page, children, ...rest} = props,
    path = `${basePath}/${page}`,
    dispatch = useDispatch()

  return <Link
    href={path}
    onClick={e =>
      page != 'logout' && !e.metaKey && !e.ctrlKey && e.preventDefault()
      || dispatch(pageNavigate({page}))
    }
    {...rest}
  >
    {children}
  </Link>
}