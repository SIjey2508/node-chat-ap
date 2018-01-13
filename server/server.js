const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const app = express()
const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

var server = http.createServer((app))
var io = socketIO(server)

// Socket io connection
io.on('connection', (socket) => {
    console.log('New User connected')

    // Socket on for create message
    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
    })
    // Emitting new message
    socket.emit('newMessage', {
        from: 'John Doe',
        text: 'Lorem Ipsum Amet Dolor',
        createAt: '10:30 Pm'
    })
    // Socket server disconnect
    socket.on('disconnect', () => {
        console.log('User was Disconnected')
    })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`You're Connected to port ${port}`)
})
 