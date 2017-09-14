import { combineReducers } from 'redux'
import PostsReducer from './posts_reducer'
import ProjectsReducer from './projects_reducer'
// import AssetsReducer from './assets_reducer'

const rootReducer = combineReducers({
  posts: PostsReducer,
  projects: ProjectsReducer
  // assets: AssetsReducer
})

export default rootReducer
