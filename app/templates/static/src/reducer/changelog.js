import {createReducer, createAction} from '@reduxjs/toolkit'
const setChangelog = createAction('setChangelog')
export default createReducer('', {
  [setChangelog]: (s, {payload}) => payload
})

export {setChangelog}