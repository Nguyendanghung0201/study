const express = require("express")
const bodyParser = require('body-parser');
const router = require('./router')
const routerChemistry = require('./routerC')
const app = express();
const passport = require('passport');
var cookieParser = require('cookie-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    }; next();
});
//  passport facebook
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

// Use the FacebookStrategy within Passport.

app.use(passport.initialize());
app.use(passport.session());
// app.use('/xxx', router2); seperate two 2 router if have too many pages
app.use('/', router)
app.use('/chemistry', routerChemistry);
// app.use('/chemistry',routerChemistry)
app.listen(3000);