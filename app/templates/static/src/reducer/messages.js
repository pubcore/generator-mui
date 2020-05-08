import {createReducer, createAction} from '@reduxjs/toolkit'
const setError = createAction('SET_ERROR'),
  resetMessages = createAction('resetMessages'),
  setMessage = createAction('setMessage')

export default createReducer(null, {
  [setError]: (s, {payload}) => ({severity:'error', ...payload}),
  [resetMessages]: () => ({}),
  [setMessage]: (s, {payload}) => ({...payload}),
})

export {setError, resetMessages, setMessage}