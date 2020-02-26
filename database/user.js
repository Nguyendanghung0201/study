var db = require("./connectdata.js")
var connection = db.connection ;
var  pool = db.pool ;


//  class user to connect table user
class User {
    constructor() {
    }
    //  get all user from table user
    getAlluser(cb){
        return connection.query("SELECT * FROM user",cb);
    }
    //  get user from primary key
    getUser(id,cb){
        //  id = object of primary key {email : danghung0201@gmail.com}
        return connection.query("SELECT * FROM user WHERE ?",[id],cb)
    }
    GetUsername(username, cb){
         //  id = object of primary key {email : danghung0201@gmail.com}
         return connection.query("SELECT * FROM user WHERE username = ?",[username],cb)
    }
    //  insert user to table user
    Insert_users(user, cb){
    //  user = req.body 
        return connection.query("INSERT INTO user SET ?", user, cb)
    }
  
    getLogin(username,pass,cb){
        //  id = object of primary key {email : danghung0201@gmail.com}
        return connection.query("SELECT * FROM user WHERE username = ? AND password = ?",[username,pass],cb)
    }

    //  update user 
    //  delete user

}

module.exports= User