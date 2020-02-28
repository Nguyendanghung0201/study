var db = require("../index.js")
var connection = db.connection ;
var  pool = db.pool ;


//  class user to connect table user
class UserRepository {
    constructor() {
    }
    //  get all user from table user
    get_AllUser(cb){
        return connection.query("SELECT username, point, gold, school, avatar FROM user ORDER BY point DESC",cb);
    }
    //  get user from primary key
    getUser(id,cb){
        //  id = object of primary key {email : danghung0201@gmail.com}
        return connection.query("SELECT * FROM user WHERE ?",[id],cb)
    }
    get_Username(username, cb){
         //  id = object of primary key {email : danghung0201@gmail.com}
         return connection.query("SELECT * FROM user WHERE username = ?",[username],cb)
    }
    //  insert user to table user
    insert_User(user, cb){
    //  user = req.body 
        return connection.query("INSERT INTO user SET ?", user, cb)
    }
  
    get_Login(username,pass,cb){
        //  id = object of primary key {email : danghung0201@gmail.com}
        return connection.query("SELECT * FROM user WHERE username = ? AND password = ?",[username,pass],cb)
    }

    //  update user 
    get_update_point(value, username, cb){
        return connection.query("UPDATE user SET point = ? WHERE username = ?", [value, username], cb)
    }
    //  get top point user
   
    //  delete user

}

module.exports= UserRepository