const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const routes = require('./routes');
var bodyParser = require('body-parser');
const nextHandle = routes.getRequestHandler(nextApp);


const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

//  service : User, 
var Service = require("./control/controller.js")
var ServiceChemistry = require("./control/admin/chemistryService.js")
var create_exam = require("./control/Product/create_exam_chemistry.js")
var config_fb = require("./control/facebook/config.js")
var login_fb = require("./control/facebook/login_facebook.js")


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
    //  using passport to get facebook token
    // Passport session setup.
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    // Use the FacebookStrategy within Passport.
    passport.use(new FacebookStrategy(config_fb,
        (accessToken, refreshToken, profile, done) => {
            process.nextTick(function(){
                login_facebook.Get_infor(accessToken, refreshToken, profile, done)
            });
        }
    ));
    //  set up server
    server.use(passport.initialize());
    server.use(passport.session());
    //  
    var UserService = new Service
    var chemistryService = new ServiceChemistry
    var Create_exam_chemistry = new create_exam
    var login_facebook = new login_fb
    // authen by facebook
    server.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

    server.get('/auth/facebook/callback',
        passport.authenticate('facebook', { successRedirect: '/login_facebook', failureRedirect: '/register' }),
        function (req, res) {
            res.redirect('/login_facebook');
        });
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
    //  end create a test
    //  get old test 
    server.post("/api/get_old_test_chemistry", (req, res) => {
        Create_exam_chemistry.Get_old_test(req, res)
    })
    // submit the test
    server.post("/api/update_point_chemistry", (req, res) => {
        Create_exam_chemistry.submit_test_chemistry(req, res)
    })
    // 
    server.get('/login_facebook', (req, res)=>{
        res.send({re : "ok"})
    })
    server.get("*", (req, res) => {
        return nextHandle(req, res)
    });

    serverio.listen(3000, (err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:3000`)
    });
})

