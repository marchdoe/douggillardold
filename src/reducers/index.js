import { combineReducers } from 'redux'
import PostsReducer from './posts_reducer'
import ProjectsReducer from './projects_reducer'
import PositionsReducer from './positions_reducer'
// import AssetsReducer from './assets_reducer'

const rootReducer = combineReducers({
  posts: PostsReducer,
  projects: ProjectsReducer,
  positions: PositionsReducer
  // assets: AssetsReducer
})

export default rootReducer
