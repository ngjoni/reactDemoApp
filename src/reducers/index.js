import { combineReducers } from 'redux'
import logReducer from './logReducer'
import techReducer from './techReducer'
import weatherReducer from './weatherReducer'

export default combineReducers({
  log: logReducer,
  tech: techReducer,
  weather: weatherReducer,
})
