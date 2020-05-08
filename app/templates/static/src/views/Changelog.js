import React from 'react'
import Md from 'react-markdown'
import {useSelector} from 'react-redux'

export default function Changelog(props){
  const md = useSelector(s => s.changelog)
  return <Md source={md} {...props}/>
}