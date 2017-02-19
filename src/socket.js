import * as io from 'socket.io-client'
import store from './store'

const socket = io.connect('http://localhost:2007', { reconnect: true })

socket
  .on('connect', () => {
    console.info('You are connected!')
  })
  .on('disconnect', () => {
    console.info('You were disconnected!')
  })
  .on('authenticated', (jwt) => {
    window.localStorage.setItem('jwt', jwt)
    socket.emit('get-initial-state', null, jwt)
  })
  .on('action', (incomingAction) => {
    const action = { ...incomingAction, saved: true }
    console.log({ action })
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

