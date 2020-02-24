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
var create_exam = require("./control/Product/create_exam_chemistry.js")

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
    server.use((req, res, next) => { res.header('Access-Control-Allow-Origin', '*'); res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); if (req.method === 'OPTIONS') { res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH'); return res.status(200).json({}); }; next(); });

    var UserService = new Service
    var chemistryService = new ServiceChemistry
    var Create_exam_chemistry = new create_exam
    //  api post register new account
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
    server.post("/api/create_question_chemistry", (req, res) => {
        chemistryService.Create_question(req, res)
    })
    //  end insert question
    //  api create a test
    server.post("/api/create_test_chemistry", (req, res) => {
        Create_exam_chemistry.CreateTest_exam(req, res)
    })
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

