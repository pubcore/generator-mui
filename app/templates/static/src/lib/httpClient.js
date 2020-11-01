import client from '@pubcore/http-client'
//here can be done global static settings for http client

export default (args) => client({
	...args,
	timeout:60*1000,
	headers:{'x-requested-with':'XMLHttpRequest'}
})
