import getApp from './src/carrier/app'

export const process = {
	cwd: () => '',
	env: {NODE_ENV:getApp().NODE_ENV}
}