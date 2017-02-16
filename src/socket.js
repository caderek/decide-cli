import store from './store'
import * as io from 'socket.io-client'

const socket = io.connect('http://localhost:2007', { reconnect: true })

socket.on('action', (incomingAction) => {
  const action = { ...incomingAction, saved: true }
  store.dispatch(action)
})

socket.on('disconnect', () => {
  console.log('You were disconnected!')
})

export default socket
