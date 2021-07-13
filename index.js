const express = require('express')
const port = process.env.PORT || 7303
const app =express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

//connecting server using socket io
const server = require('http').createServer(app)
const io = require('socket.io')(server)         

const configureDB = require('./config/database')
configureDB()

//  setting the upload path public for file access
app.use(express.static('uploads'))
app.use(express.static('resources'))

const routes = require('./config/routes')
app.use('/',routes)

app.io = io  // making it available in the middlewares/controllers

// setting up socket connections function

const socketConnections = require('./app/middlewares/socketConnections')
socketConnections(io)

//deploy to heroku
const path = require('path')
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

server.listen(port, ()=>{
    console.log('SERVER PORT OPEN -> ',port)
})