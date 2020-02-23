const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const routes = require('./routes');
var bodyParser = require('body-parser');
const nextHandle = routes.getRequestHandler(nextApp);
const saltRounds = 10;
var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'study'
})
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'study',
    multipleStatements: true
})
// JWT
var jwt = require('jsonwebtoken');
var secret = "danghungnguyenhuong";
//  service : User, 
var Service = require("./control/controller.js")
var ServiceChemistry = require("./control/admin/chemistryService.js")

nextApp.prepare().then(() => {
    const server = express();
    var serverio = require('http').Server(server);
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
    // Session
    var session = require('express-session');

    //  using session
    server.use(session({
        secret: 'danghung0201', resave: true,
        saveUninitialized: true
    }));

    //  api post register new account
    var UserService = new Service
    var chemistryService = new ServiceChemistry
    server.post("/api/register", (req, res) => {

        UserService.register(req, res)
    })
    // end api
    //  api login 
    server.post("/api/login", (req, res) => {
        UserService.login(req, res)
    })

    //   end login
    //  admin insert question 
    server.post("/api/create_question_chemistry", (req, res)=>{
        chemistryService.Create_question(req,res)
    })
    //  end insert question
    //  socket io for chatting feature
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
    // 

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

