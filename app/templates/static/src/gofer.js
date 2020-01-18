import pageNavigate from './action/pageNavigate'
import {dispatch} from './store'
import postFoo from './carrier/postFoo'
import handleRequest from './action/handleRequest'

export const
	navigate = ({value}) => dispatch(pageNavigate({page:value})),
	fooSubmit = values => handleRequest({request: () => postFoo(values)})