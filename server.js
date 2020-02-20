const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const routes = require('./routes');
var bodyParser = require('body-parser');
const nextHandle = routes.getRequestHandler(nextApp);

var service = require("./control/controller.js")

nextApp.prepare().then(() => {
    const server = express();
    var serverio = require('http').Server(server);
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    //  api post register new account
    var Rservice = new service
    server.post("/api/register",(req, res)=>{
        
        Rservice.register(req,res)
    })
    // end api
    // 




    var io = require('socket.io')(serverio);

    io.on('connection', function (socket) {
        console.log(socket.id + ': connected');
        socket.emit('id', socket.id);

        socket.on('disconnect', function () {
            console.log(socket.id + ': disconnected')
        })

        socket.on('sendChat', data => {
            io.sockets.emit('receiveChat', data);
            console.log(data);
        })

    });


    server.get("*", (req, res) => {
        return nextHandle(req, res)
    });

    serverio.listen(3001, (err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:3000`)
    });
})
