import * as io from 'socket.io-client'

const socket = io.connect('http://localhost:2007', { reconnect: true })

socket
  .on('connect', () => {
    console.info('You are connected!')
  })
  .on('disconnect', () => {
    console.info('You were disconnected!')
  })

// Temp!
window.emit = socket.emit.bind(socket)

socket.on('error', (error) => {
  console.log(error)
})

socket.on('server-error', (error) => {
  console.log(error)
})

export default socket

