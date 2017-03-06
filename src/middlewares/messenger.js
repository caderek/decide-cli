import socket from '../socket'

const messenger = store => next => action => {
  if (action.saved) {
    return next(action)
  }

  if (action.type === 'TAKE_SNAPSHOT') {
    socket.emit('snapshot')
  } else {
    socket.emit('action', action, window.localStorage.getItem('jwt'))
  }
}

export default messenger
