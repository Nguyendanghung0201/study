const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const routes = require('./routes');
var bodyParser = require('body-parser');
const nextHandle = routes.getRequestHandler(nextApp);
const saltRounds = 10;
var mysql=require('mysql');
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

var service = require("./control/controller.js")

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
    //  check Authentication 
    checkAuthentication = (req, res, next)=>{
        if( req.session.token ){
            // Verify
            jwt.verify(req.session.token, secret, function(err, decoded) {
                if(err){
                    console.log("Token sai");
                    res.redirect("./login");
                }else{
                    req.currentUser = decoded;
                    return next();
                }
            });
    
        }else{
            console.log("Khong tim thay session");
            res.redirect("./");
        }
    }
    //  end function check Authentication
    //  api post register new account
    var Rservice = new service
    server.post("/api/register", (req, res) => {

        Rservice.register(req, res)
    })
    // end api
    //  api login 
    server.post("/api/login", (req, res)=>{
        Rservice.login(req, res)
    })

    server.post('/apddi/login', (req, res) => {
        let { username, password } = req.body;
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
            if (err) throw err
            if (result.length > 0) {
                res.send({ note: 'ok'})
            } else {
                res.send({ note: 'wrong email or password' })
            }
        })
    });

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
