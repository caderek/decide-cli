import { createStore, applyMiddleware, compose } from 'redux'
import decideApp from './reducers'
import messenger from './middlewares/messenger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(decideApp, composeEnhancers(
  applyMiddleware(messenger)
))

export default store
