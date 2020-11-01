import React, {useState} from 'react'
import {useAsyncEffect} from 'use-async-effect'
import {useTranslation} from 'react-i18next'

export default function Suspense({load, dependencies=[], children}){
	var [loading, setLoading] = useState(false),
		{t} = useTranslation()

	useAsyncEffect(async isMounted => {try{
		setLoading(true)
		await load()
	}finally{
		isMounted() && setLoading(false)
	}}, dependencies)

	return loading ? <h4>{t('loading')}</h4>
		: children()
}