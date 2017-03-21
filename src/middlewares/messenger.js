import socket from '../socket'
import { TAKE_SNAPSHOT, AUTHENTICATE } from '../actions'

const messenger = store => next => action => {
  if (action.saved) {
    return next(action)
  }

  if (action.type === TAKE_SNAPSHOT) {
    socket.emit('snapshot')
  } else if (action.type === AUTHENTICATE) {
    socket.emit('authenticate', {
      user: action.payload.user,
      password: action.payload.password
    })
  } else {
    socket.emit('action', action, window.localStorage.getItem('jwt'))
  }
}

export default messenger
