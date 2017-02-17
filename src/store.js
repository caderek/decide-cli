import { createStore, applyMiddleware, compose } from 'redux'
import decideApp from './reducers'
import messenger from './middlewares/messenger'
import socket from './socket'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const storePromise = new Promise((resolve) => {
  socket.on('init', (initialState) => {
    const store = createStore(decideApp, initialState, composeEnhancers(
      applyMiddleware(messenger)
    ))

    socket.on('action', (incomingAction) => {
      const action = { ...incomingAction, saved: true }
      store.dispatch(action)
    })

    resolve(store)
  })
})



export default storePromise
