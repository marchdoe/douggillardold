import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Shows from './containers/Shows'
import Discography from './containers/Discography'
import Media from './containers/Media'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='about' component={About} />
    <Route path='shows' component={Shows} />
    <Route path='discography' component={Discography} />
    <Route path='media' component={Media} />
  </Route>
)
