const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))

io.on('connection', socket => {
    console.log('New user connected')

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

    socket.on('createMessage', newMessage => {
        console.log('createMessage', newMessage)
    })

    socket.emit('newMessage', {
        from: 'Fernando',
        text: 'Hey, Fernando here!',
        createAt: 123
    })
})

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`Server up and running on port ${port}`))