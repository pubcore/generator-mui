import {createReducer} from 'redux-create-reducer'

export default createReducer('', {
	SET_CHANGELOG: (s, {changelog}) => changelog
})