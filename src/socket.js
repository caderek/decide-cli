import * as io from 'socket.io-client'
import store from './store'
import { setUserData } from './actions'
import jwtDecode from 'jwt-decode'

const socket = io.connect('http://localhost:2007', { reconnect: true })

socket
  .on('connect', () => {
    console.info('You are connected!')

    const jwt = window.localStorage.getItem('jwt')

    if (jwt) {
      const jwtPayload = jwtDecode(jwt)

      store.dispatch(setUserData(jwtPayload.user))
      socket.emit('get-initial-state', null, jwt)
    }
  })
  .on('disconnect', () => {
    console.info('You were disconnected!')
  })
  .on('authenticated', (jwt) => {
    const jwtPayload = jwtDecode(jwt)

    store.dispatch(setUserData(jwtPayload.user))
    window.localStorage.setItem('jwt', jwt)
    socket.emit('get-initial-state', null, jwt)
  })
  .on('action', (incomingAction) => {
    const action = { ...incomingAction, saved: true }
    store.dispatch(action)
  })
  .on('error', (error) => {
    console.log(error)
  })
  .on('server-error', (error) => {
    console.log(error)
  })

// Temp!
window.emit = socket.emit.bind(socket)

export default socket

