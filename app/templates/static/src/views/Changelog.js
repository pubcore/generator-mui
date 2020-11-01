import React, {useEffect} from 'react'
import Md from 'react-markdown'
import {useSelector} from 'react-redux'
import {loadChangelog} from '../gofer'

export default function Changelog(props){
	const md = useSelector(s => s.changelog)
	useEffect(() => {loadChangelog()}, [])
	
	return <Md source={md} {...props}/>
}