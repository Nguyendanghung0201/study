var db = require("./connectdata.js")
var connection = db.connection ;
var  pool = db.pool ;


//  class user to connect table user
class User {
    constructor() {
    }
    //  get all users from table users
    getAlluser(cb){
        return connection.query("SELECT * FROM users",cb);
    }
    //  get users from primary key
    getUser(id,cb){
        //  id = object of primary key {email : danghung0201@gmail.com}
        return connection.query("SELECT * FROM users WHERE ?",id,cb)
    }
    //  insert user to table users
    Insert_users(user, cb){
    //  user = req.body 
        return connection.query("INSERT INTO users SET ?", user, cb)
    }
    //  login
    getLogin(username,pass,cb){
        //  id = object of primary key {email : danghung0201@gmail.com}
        return connection.query("SELECT * FROM users WHERE username = ? AND password = ?",[username,pass],cb)
    }

    //  update user 
    //  delete user

}
module.exports= User