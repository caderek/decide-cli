import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import LoginPage from './containers/LoginPage'
import './index.scss'
import store from './store'
import { Router, Route, browserHistory } from 'react-router'

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/login' component={LoginPage} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
