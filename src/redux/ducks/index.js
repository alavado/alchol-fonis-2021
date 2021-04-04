import { combineReducers } from 'redux'
import login from './login'
import menu from './menu'
import registro from './registro'

export default combineReducers({
  login,
  menu,
  registro
})