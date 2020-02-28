const express = require("express")
const router = express.Router();
const FacebookStrategy = require('passport-facebook').Strategy;
var config_fb = require('./config')
var cookieParser = require('cookie-parser');
var UserService = require('./service/userservice/userservice')
const passport = require('passport');

var UserControll = new UserService
passport.use(new FacebookStrategy(config_fb,
    (accessToken, refreshToken, profile, done) => {
        process.nextTick(function () {
            UserControll.Get_infor(accessToken, refreshToken, profile, done)
        })
    }
));
//  page home , login , register
router.get('/', (req, res) => {
    UserControll.render_home_page(req, res)
})
//  page infor user
router.get('/user/:id', (req, res)=>{
    UserControll.render_infor_user(req,res)
})
// 
router.get('/login', (req, res) => {
    if (req.cookies.username) return res.redirect('/')
    res.render('login')
})
router.get('/register', (req, res) => {
    if (req.cookies.username) return res.redirect('/')
    res.render('register')
})
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    }
);
// 

// api post to rgister account
router.post('/register', (req, res)=>{
    UserControll.register(req,res)
})
router.post('/login', (req, res)=>{
    UserControll.login(req,res)
})


module.exports = router