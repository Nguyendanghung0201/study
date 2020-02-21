const User = require("../database/user.js");
// JWT
var jwt = require('jsonwebtoken');
var secret = "danghungnguyenhuong";
//  session
var session = require('express-session');

//  service
class service {
    constructor() {
        //  using User connect to database
        this.userService = new User
        //  req vilidate of username , password , email , phone
        this.reg_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        this.reg_phone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
        this.reg_password = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
        this.reg_name = /^[a-zA-Z0-9]+$/;
        this.reg_currency = /^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(.[0-9][0-9])?$/;
        this.reg_letter = /[a-z\s]*$/;
    }


    //  api post user register account 

    register = (req, res) => {
        let { username, email, password, phone } = req.body;

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

        } else {
            if (!this.reg_name.test(username)) {
                note = 'username khong hop le , vui long nhap lai';
                err = [0];
                res.json({ note: note, err: err })
            }
            else if (!this.reg_email.test(req.body.email)) {
                note = 'email khong hop le , vui long nhap lai';
                err = [1];
                res.json({ note: note, err: err })
            } else if (!this.reg_password.test(req.body.password)) {
                note = 'Mật khẩu yếu , vui long nhap lai';
                err = [3];
                res.json({ note: note, err: err })
            }
            else if (!this.reg_phone.test(req.body.phone)) {
                note = 'SDT khong hop le , vui long nhap lai';
                err = [3];
                res.json({ note: note, err: err })
            } else {

                this.userService.getUser({ username }, (err, result) => {
                    if (err) throw err
                    if (result.length >= 1) {
                        note = "email da ton tai";
                        err = [1];
                        res.json({ note: note, err: err })
                    } else {
                        this.userService.getUser({ email }, (err, result) => {
                            if (err) throw err
                            if (result.length >= 1) {
                                let note = "email da ton tai";
                                let err = [1];
                                res.json({ note: note, err: err })
                            } else {
                                // this.userService.getUser({ phone }, (err, result) => {
                                //     if (err) throw err
                                //     if (result.length >= 1) {
                                //         let note = " sdt da ton tai";
                                //         let err = [3];
                                //         res.json({ note: note, err: err })
                                //     } else {
                                //  USER Register susseccfully , insert into table
                                this.userService.Insert_users(req.body, (err, result) => {
                                    if (err) throw err
                                    res.json({ note: "ok" })
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

        this.userService.getLogin(username, password, (err, result) => {
            if (err) throw err
            if (result.length > 0) {
                jwt.sign(req.body.username, secret, function (err, token) {
                    if (err) {
                        console.log("Token loi " + err);
                        res.json({ kq: 0 });
                    } else {

                        //Save session
                        req.session.token = token
                        res.send({ note: 'ok' });
                    }
                })

            } else {
                res.send({ note: 'wrong email or password' })
            }
        })

    }
    //  end login
    //  check Authentication 
    checkAuthentication = (req, res, next) => {
        if (req.session.token) {
            // Verify
            jwt.verify(req.session.token, secret, function (err, decoded) {
                if (err) {
                    console.log("Token sai");
                    res.redirect("./login");
                } else {
                    req.currentUser = decoded;
                    return next();
                }
            });

        } else {
            console.log("Khong tim thay session");
            res.redirect("./");
        }
    }
    //  end function check Authentication

}
module.exports = service