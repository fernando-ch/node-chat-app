'use strict'

var socket = io()

socket.on('connect', function() {
    console.log('Connected to server')

    socket.emit('createMessage', {
        to: 'Flávio',
        text: 'Hey, Flávio here!'
    })
})

socket.on('disconnect', function() {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log('New message', message)
})