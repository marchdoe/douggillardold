import { combineReducers } from 'redux'
import ShowsReducer from './shows_reducer'

const rootReducer = combineReducers({
  shows: ShowsReducer,
})

export default rootReducer
