import { combineReducers } from 'redux'
import ShowsReducer from './shows_reducer'
import discographyReducer from './discography_reducer'

const rootReducer = combineReducers({
  shows: ShowsReducer,
  discography: discographyReducer
})

export default rootReducer
