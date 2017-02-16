import socket from '../socket'

const messenger = store => next => action => {
  if (action.saved) {
    return next(action)
  }

  socket.emit('action', action)
}

export default messenger
