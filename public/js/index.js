var socket = io()

socket.on('connect', function() {
    console.log('Connected to server')


})

// New message socket
socket.on('newMessage', function(message){
    console.log('newMessage', message)
})

// If the server is disconnected
socket.on('disconnect', function() {
    console.log('Server was disconnected')
})

