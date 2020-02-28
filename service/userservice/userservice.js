const User = require("../../db/user/user.db");
const Uservalidate2 = require("../../db/user/validate.js")

//  service
class UserService {
    constructor() {
        //  using User connect to database
        this.userRepository = new User
        //  req vilidate of username , password , email , phone
        this.uservalidate = Uservalidate2
    }
    //  api get . render page
    //  get home page
    render_home_page = (req, res) => {
        let username = ""
        if (req.displayName) {
            username = req.displayName
            res.cookie("username", username, { maxAge: 360000 })
        }  // login by facebook 
        if (req.cookies.username)  username = req.cookies.username // login by cookies
        console.log(username)
        this.userRepository.get_AllUser((err, result) => {
            if (err) throw err
            let dataUser = JSON.parse(JSON.stringify(result))
            if (username) {
                this.userRepository.get_Username(username, (err, result) => {
                    if (err) throw err
                    if (result.length > 0) {
                        let user = JSON.parse(JSON.stringify(result))[0]
                        console.log(username)
                        res.render('home', { user, dataUser })
                    } else {
                        res.render('home', { user: null, dataUser })
                    }

                })
            } else {
                res.render('home', { user: null, dataUser })
            }
        })
    }
    // 
    //  page infor user
    render_infor_user = (req, res) => {
        let username = req.params
        this.userRepository.get_Username(username, (err, result) => {
            if (err) throw err
            if (result.length > 0) {
                res.render('inforuser', { user: JSON.parse(JSON.stringify(result))[0] })
            } else {
                res.render('inforuser', { user: null}) // user not exits
            }

        })
    }
    //  api post user register account 

    register = (req, res) => {
        let { username, email, password, phone, school } = req.body;

        //  note err to client
        let note = "";
        let value = [username, email, password, phone]
        //  position of err to notification 
        let err = []
        if (value.includes('')) {
            note = 'ban chua nhap day du , vui long nhap lai';
            err = [];
            function awaitE() {
                value.forEach((element, index) => {
                    element.trim() == "" ? err.push(index) : null;
                })
            }
            res.json({ note });

        } else { // check validate
            let err_valida = new Object
            !this.uservalidate.reg_name.test(username) ? err_valida.username = "err" : null
            !this.uservalidate.reg_password.test(password) ? err_valida.password = "err" : null
            !this.uservalidate.reg_email.test(email) ? err_valida.email = "err" : null
            !this.uservalidate.reg_phone.test(phone) ? err_valida.phone = "err" : null
            if (Object.keys(err_valida).length > 0) {
                res.json({ err: err_valida })
            } else {
                this.userRepository.getUser({ username }, (err, result) => {
                    if (err) throw err
                    if (result.length >= 1) {
                        err_valida.username = "username has been exist"
                        res.json({ err: err_valida })
                    } else {
                        this.userRepository.getUser({ email }, (err, result) => {
                            if (err) throw err
                            if (result.length >= 1) {
                                err_valida.username = "email has been exist"
                                res.json({ err: err_valida })
                            } else {
                                // this.userRepository.getUser({ phone }, (err, result) => {
                                //     if (err) throw err
                                //     if (result.length >= 1) {
                                //         let note = " sdt da ton tai";
                                //         let err = [3];
                                //         res.json({ note: note, err: err })
                                //     } else {
                                //  USER Register susseccfully , insert into table
                                this.userRepository.Insert_users(req.body, (err, result) => {
                                    if (err) throw err
                                    res.cookie("username", username, { maxAge: 360000 }).json({ err: 'ok' })

                                })

                            }
                        })
                    }
                })
            }

        }
    }

    // end function register
    //  api login 
    login = (req, res) => {
        let username = req.body.username
        let password = req.body.password

        this.userRepository.getLogin(username, password, (err, result) => {
            if (err) throw err
            if (result.length > 0) {
                res.cookie("username", username, { maxAge: 360000 }).json({ err: 'ok' })
            } else {
                res.json({ note: 'wrong email or password' })
            }
        })

    }
    //  end login
    //  get profile user
    get_profile = (req, res) => {
        let { username } = req.params
        this.userRepository.get_Username(username, (err, result) => {
            if (err) throw err
            res.send({ result: JSON.parse(JSON.stringify(result))[0] })
        })
    }
    // facebook login
    Get_infor = (accessToken, refreshToken, profile, done) => {
        this.userRepository.get_Username(profile.displayName, (err, result) => {
            if (err) throw err
            if (result.length > 0) {
                return done(null, profile);
            } else {
                let value = {
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    avatar: profile.photos[0].value
                }
                this.userRepository.Insert_users(value, (err, result) => {
                    if (err) throw err
                    return done(null, profile);
                })

            }
        })

    }

}


module.exports = UserService