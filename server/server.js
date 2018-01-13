const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')
const app = express()
const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

var server = http.createServer((app))
var io = socketIO(server)


io.on('connection', (socket) => {
    console.log('New User connected')

    socket.on('disconnect', () => {
        console.log('User was Disconnected')
    })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`You're Connected to port ${port}`)
})
 