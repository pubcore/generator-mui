import getApp from '../carrier/app'

export default ({id}, options={
	base: getApp().component.context_path,
}) => `${options?.base}/${id}`