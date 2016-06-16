import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './ui/pages/_app'
import Playground from './ui/pages/playground'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Playground}/>
    </Route>
  </Router>
), document.getElementById('reactContainer'))
