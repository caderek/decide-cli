import * as io from 'socket.io-client'

const socket = io.connect('http://localhost:2007', { reconnect: true })

socket
  .on('connect', () => {
    console.info('You are connected!')
  })
  .on('disconnect', () => {
    console.info('You were disconnected!')
  })

export default socket
