import React from 'react'
import {Tab} from '@material-ui/core'
import {useSelector} from 'react-redux'

export default function LinkTab(props){
  var basePath = useSelector(s => s.uri.basePath),
    {value} = props,
    path = `${basePath}/${value}`

  return <Tab
    href={path}
    component="a"
    onClick={e => !e.metaKey && !e.ctrlKey && e.preventDefault()}
    {...props}
  />
}
